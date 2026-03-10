/**
 * Vanilla Forums API v2 client for article search and discussion fetch.
 * Used when SEARCH_SOURCE=vanilla (e.g. Maropost Community at maropost.vanillastaging.com).
 *
 * Refs:
 * - Search: GET /api/v2/search (query, domain, limit, page, etc.)
 * - Discussion: GET /api/v2/discussions/:id
 * - Auth: Authorization: Bearer <access_token>
 */

import { NormalizedArticle, NormalizedMetadata } from "../types";

export interface VanillaSearchHit {
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

interface VanillaDiscussion {
  discussionID?: number;
  name?: string;
  body?: string;
  url?: string;
  dateInserted?: string;
  dateUpdated?: string;
  insertUserID?: number;
  [key: string]: unknown;
}

interface VanillaSearchResult {
  discussionID?: number;
  name?: string;
  body?: string;
  excerpt?: string;
  url?: string;
  dateInserted?: string;
  score?: number;
  [key: string]: unknown;
}

interface VanillaSearchResponse {
  results?: VanillaSearchResult[];
  discussion?: VanillaSearchResult;
  [key: string]: unknown;
}

export class VanillaApiClient {
  private baseUrl: string;
  private accessToken: string;

  constructor(baseUrl: string, accessToken: string) {
    this.baseUrl = baseUrl.replace(/\/$/, "");
    this.accessToken = accessToken;
  }

  private async request<T>(path: string, query?: Record<string, string>): Promise<T> {
    const url = new URL(path.startsWith("http") ? path : `${this.baseUrl}${path}`);
    if (query) {
      Object.entries(query).forEach(([k, v]) => {
        if (v !== undefined && v !== "") url.searchParams.set(k, v);
      });
    }
    const headers: Record<string, string> = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.accessToken}`,
    };
    const res = await fetch(url.toString(), { headers });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Vanilla API ${res.status}: ${text || res.statusText}`);
    }
    return res.json() as Promise<T>;
  }

  /**
   * Vanilla API v2 search. Tries common query param names: query, q, search.
   */
  async search(params: {
    q?: string;
    product?: string;
    navigationPath?: string;
    limit: number;
    offset: number;
  }): Promise<{ total: number; hits: VanillaSearchHit[] }> {
    const page = params.limit > 0 ? Math.floor(params.offset / params.limit) + 1 : 1;
    const query: Record<string, string> = {
      limit: String(params.limit),
      page: String(page),
    };
    if (params.q) {
      query.query = params.q;
      query.q = params.q;
    }
    if (params.product && params.product !== "all") {
      query["tags[]"] = params.product;
    }

    const data = await this.request<VanillaSearchResponse>("/api/v2/search", query);

    const rawList = Array.isArray(data.results)
      ? data.results
      : data.discussion
        ? [data.discussion]
        : [];
    const total = typeof (data as { totalCount?: number }).totalCount === "number"
      ? (data as { totalCount: number }).totalCount
      : rawList.length;

    const hits = rawList
      .map((r) => this.mapSearchResult(r))
      .filter((h): h is VanillaSearchHit => h != null);

    return { total, hits };
  }

  private mapSearchResult(r: VanillaSearchResult): VanillaSearchHit | null {
    const id = r.discussionID ?? (r as Record<string, unknown>).id;
    if (id == null) return null;
    const title = r.name ?? (r as Record<string, unknown>).title ?? "";
    const url = r.url
      ? (r.url.startsWith("http") ? r.url : `${this.baseUrl}${r.url.startsWith("/") ? "" : "/"}${r.url}`)
      : `${this.baseUrl}/discussion/${id}`;
    const snippet = r.excerpt ?? (typeof r.body === "string" ? r.body.slice(0, 200) : undefined);
    const lastUpdated = r.dateUpdated ?? r.dateInserted;

    return {
      id: String(id),
      title: String(title),
      score: typeof r.score === "number" ? r.score : 1,
      snippet: typeof snippet === "string" ? snippet : undefined,
      lastUpdated: typeof lastUpdated === "string" ? lastUpdated : undefined,
      articleUrl: url,
    };
  }

  async getDiscussion(id: string): Promise<NormalizedArticle | null> {
    const raw = await this.request<VanillaDiscussion | { discussion?: VanillaDiscussion }>(
      `/api/v2/discussions/${encodeURIComponent(id)}`
    );
    const data =
      (raw && typeof raw === "object" && "discussion" in raw && raw.discussion
        ? raw.discussion
        : raw) as VanillaDiscussion;
    return this.mapDiscussionToArticle(data, id);
  }

  private mapDiscussionToArticle(d: VanillaDiscussion, id: string): NormalizedArticle | null {
    const discussionId = d.discussionID ?? id;
    const title = d.name ?? "";
    const bodyPlain = d.body ?? "";
    const url = d.url
      ? (d.url.startsWith("http") ? d.url : `${this.baseUrl}${d.url.startsWith("/") ? "" : "/"}${d.url}`)
      : `${this.baseUrl}/discussion/${discussionId}`;

    const sections = bodyPlain
      ? [{ anchorId: "content", headingText: "Content", level: 2, contentPlain: bodyPlain }]
      : [];
    const headings = [{ level: 2, text: "Content", anchorId: "content" }];

    return {
      id: String(discussionId),
      title: String(title),
      subtitles: [],
      headings,
      bodyPlain,
      sections,
      metadata: {} as NormalizedMetadata,
      lastUpdated: d.dateUpdated ?? d.dateInserted,
      articleUrl: url,
    };
  }
}
