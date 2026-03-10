/**
 * Live article search API client.
 * Proxies search and article-detail requests to an external API and maps
 * responses to the shape expected by the frontend.
 *
 * Configure via env:
 *   SEARCH_SOURCE=api
 *   SEARCH_API_BASE_URL=https://your-api.example.com
 *   SEARCH_API_KEY=optional-auth-token
 *   SEARCH_API_SEARCH_PATH=/api/search   (optional)
 *   SEARCH_API_ARTICLE_PATH=/api/articles (optional, use :id for id placeholder)
 */

import { AppConfig } from "../config";
import { NormalizedArticle } from "../types";

export interface SearchHitFromApi {
  id: string;
  title: string;
  score?: number;
  snippet?: string;
  sectionAnchorId?: string;
  product?: string;
  feature?: string;
  tags?: string[];
  lastUpdated?: string;
  slug?: string;
  articleUrl?: string;
}

interface ApiSearchResponse {
  total?: number;
  count?: number;
  hits?: unknown[];
  results?: unknown[];
}

function mapHit(raw: unknown): SearchHitFromApi | null {
  if (raw == null || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  const id = [o.id, o.articleId, o.article_id].find(
    (v) => typeof v === "string" || (typeof v === "number" && Number.isFinite(v))
  );
  if (id == null) return null;
  const title = [o.title, o.name].find((v) => typeof v === "string");
  const snippet = [o.snippet, o.excerpt, o.description, o.body].find(
    (v) => typeof v === "string"
  );
  const url = [o.articleUrl, o.article_url, o.url, o.link].find(
    (v) => typeof v === "string"
  );
  const product = [o.product].find((v) => typeof v === "string");
  const lastUpdated = [o.lastUpdated, o.last_updated, o.updatedAt, o.updated_at].find(
    (v) => typeof v === "string"
  );
  const tags = Array.isArray(o.tags)
    ? (o.tags as unknown[]).filter((t) => typeof t === "string") as string[]
    : undefined;

  return {
    id: String(id),
    title: typeof title === "string" ? title : "",
    score: typeof o.score === "number" ? o.score : 1,
    snippet: typeof snippet === "string" ? snippet : undefined,
    sectionAnchorId: typeof o.sectionAnchorId === "string" ? o.sectionAnchorId : undefined,
    product: typeof product === "string" ? product : undefined,
    feature: typeof o.feature === "string" ? o.feature : undefined,
    tags,
    lastUpdated: typeof lastUpdated === "string" ? lastUpdated : undefined,
    slug: typeof o.slug === "string" ? o.slug : undefined,
    articleUrl: typeof url === "string" ? url : undefined,
  };
}

function mapArticle(raw: unknown, articleBaseUrl: string): NormalizedArticle | null {
  if (raw == null || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  const id = [o.id, o.articleId].find(
    (v) => typeof v === "string" || (typeof v === "number" && Number.isFinite(v))
  );
  if (id == null) return null;
  const title = [o.title, o.name].find((v) => typeof v === "string");
  const bodyPlain = [o.bodyPlain, o.body_plain, o.body, o.content].find(
    (v) => typeof v === "string"
  );
  const slug = typeof o.slug === "string" ? o.slug : undefined;
  const articleUrl =
    slug && articleBaseUrl
      ? `${articleBaseUrl}/kb/articles/${slug}`
      : (typeof o.articleUrl === "string" ? o.articleUrl : undefined) ||
        (typeof o.url === "string" ? o.url : undefined);

  let sections: { anchorId: string; headingText: string; level: number; contentPlain: string }[] = [];
  const rawSections = o.sections ?? o.body_sections;
  if (Array.isArray(rawSections)) {
    sections = rawSections
      .filter((s): s is Record<string, unknown> => s != null && typeof s === "object")
      .map((s, i) => ({
        anchorId: typeof s.anchorId === "string" ? s.anchorId : `section-${i}`,
        headingText: typeof s.headingText === "string" ? s.headingText : String(s.heading ?? ""),
        level: typeof s.level === "number" ? s.level : 2,
        contentPlain: typeof s.contentPlain === "string" ? s.contentPlain : String(s.content ?? ""),
      }));
  }

  let headings = sections.map((s, i) => ({
    level: s.level,
    text: s.headingText,
    anchorId: s.anchorId,
  }));

  const rawHeadings = o.headings;
  if (Array.isArray(rawHeadings) && rawHeadings.length > 0) {
    headings = rawHeadings
      .filter((h): h is Record<string, unknown> => h != null && typeof h === "object")
      .map((h, i) => ({
        level: typeof h.level === "number" ? h.level : 1,
        text: typeof h.text === "string" ? h.text : "",
        anchorId: typeof h.anchorId === "string" ? h.anchorId : `h-${i}`,
      }));
  }

  const metadata = (o.metadata as Record<string, unknown>) ?? {};
  const product = o.product ?? metadata.product;
  const feature = o.feature ?? metadata.feature;
  const tags = o.tags ?? metadata.tags;

  return {
    id: String(id),
    slug,
    title: typeof title === "string" ? title : "",
    subtitles: Array.isArray(o.subtitles) ? (o.subtitles as string[]) : [],
    headings,
    bodyPlain: typeof bodyPlain === "string" ? bodyPlain : "",
    sections,
    metadata: {
      ...(typeof metadata === "object" && metadata !== null ? metadata : {}),
      product: typeof product === "string" ? product : undefined,
      feature: typeof feature === "string" ? feature : undefined,
      tags: Array.isArray(tags) ? (tags as unknown[]).filter((t) => typeof t === "string") as string[] : undefined,
    },
    lastUpdated: typeof o.lastUpdated === "string" ? o.lastUpdated : undefined,
    articleUrl,
  };
}

export class ArticleSearchApiClient {
  private config: AppConfig;

  constructor(config: AppConfig) {
    this.config = config;
  }

  private async request<T>(path: string, query?: Record<string, string>): Promise<T> {
    const base = this.config.searchApiBaseUrl.replace(/\/$/, "");
    const url = new URL(path.startsWith("http") ? path : `${base}${path}`);
    if (query) {
      Object.entries(query).forEach(([k, v]) => {
        if (v !== undefined && v !== "") url.searchParams.set(k, v);
      });
    }
    const headers: Record<string, string> = {
      Accept: "application/json",
    };
    if (this.config.searchApiKey) {
      if (this.config.searchApiKey.startsWith("Bearer ")) {
        headers.Authorization = this.config.searchApiKey;
      } else {
        headers["x-api-key"] = this.config.searchApiKey;
        headers.Authorization = `Bearer ${this.config.searchApiKey}`;
      }
    }
    const res = await fetch(url.toString(), { headers });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Article API error ${res.status}: ${text || res.statusText}`);
    }
    return res.json() as Promise<T>;
  }

  async search(params: {
    q?: string;
    product?: string;
    navigationPath?: string;
    limit: number;
    offset: number;
  }): Promise<{ total: number; hits: SearchHitFromApi[] }> {
    const path = this.config.searchApiSearchPath;
    const query: Record<string, string> = {
      limit: String(params.limit),
      offset: String(params.offset),
    };
    if (params.q) query.q = params.q;
    if (params.product && params.product !== "all") query.product = params.product;
    if (params.navigationPath) query.navigationPath = params.navigationPath;

    const data = await this.request<ApiSearchResponse>(path, query);
    const list = Array.isArray(data.hits) ? data.hits : Array.isArray(data.results) ? data.results : [];
    const total = typeof data.total === "number" ? data.total : typeof data.count === "number" ? data.count : list.length;
    const hits = list.map(mapHit).filter((h): h is SearchHitFromApi => h != null);

    return { total, hits };
  }

  async getArticle(id: string): Promise<NormalizedArticle | null> {
    const path = this.config.searchApiArticlePath.replace(":id", encodeURIComponent(id));
    const data = await this.request<unknown>(path);
    return mapArticle(data, this.config.articleBaseUrl);
  }
}
