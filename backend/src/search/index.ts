import MiniSearch, { SearchResult } from "minisearch";
import { NormalizedArticle } from "../types";

export interface SearchFilters {
  product?: string;
  feature?: string;
  tag?: string;
  navigationPath?: string;
}

export interface SearchHit {
  id: string;
  title: string;
  score: number;
  snippet?: string;
  sectionAnchorId?: string;
  product?: string;
  feature?: string;
  tags?: string[];
  lastUpdated?: string;
  slug?: string;
  articleUrl?: string;
}

interface IndexDoc {
  id: string;
  title: string;
  subtitles: string;
  headingsText: string;
  sectionsContent: string;
  product?: string;
  feature?: string;
  tagsText?: string;
  lastUpdated?: string;
}

export class ArticleIndex {
  private miniSearch: MiniSearch<IndexDoc> | null = null;
  private articlesById: Map<string, NormalizedArticle> = new Map();
  private articleBaseUrl = "";

  build(articles: NormalizedArticle[], baseUrl?: string): void {
    this.articleBaseUrl = baseUrl ?? "";
    this.articlesById = new Map(articles.map((a) => [a.id, a]));

    const docs: IndexDoc[] = articles.map((a) => {
      const headingsText = a.headings.map((h) => h.text).join(" ");
      const sectionsContent = a.sections
        .map((s) => s.contentPlain)
        .join(" ");
      const tags = Array.isArray(a.metadata.tags)
        ? (a.metadata.tags as unknown[])
            .filter((t) => typeof t === "string")
            .join(" ")
        : undefined;

      return {
        id: a.id,
        title: a.title,
        subtitles: a.subtitles.join(" "),
        headingsText,
        sectionsContent,
        product:
          typeof a.metadata.product === "string"
            ? (a.metadata.product as string)
            : undefined,
        feature:
          typeof a.metadata.feature === "string"
            ? (a.metadata.feature as string)
            : undefined,
        tagsText: tags,
        lastUpdated: a.lastUpdated,
      };
    });

    this.miniSearch = new MiniSearch<IndexDoc>({
      fields: ["title", "subtitles", "headingsText", "sectionsContent", "tagsText"],
      storeFields: [
        "id",
        "title",
        "product",
        "feature",
        "tagsText",
        "lastUpdated",
      ],
      searchOptions: {
        prefix: true,
        fuzzy: 0.2,
        boost: {
          title: 4,
          headingsText: 3,
          subtitles: 3,
          sectionsContent: 1,
          tagsText: 2,
        },
      },
    });

    this.miniSearch.addAll(docs);
  }

  search(
    query: string,
    filters: SearchFilters,
    limit: number,
    offset: number,
    fields?: string[],
  ): {
    total: number;
    hits: SearchHit[];
  } {
    if (!this.miniSearch) {
      return { total: 0, hits: [] };
    }

    const mappedFields =
      fields && fields.length
        ? fields
            .map((f) => f.toLowerCase())
            .flatMap((f) => {
              if (f === "title") return ["title"];
              if (f === "headings") return ["headingsText"];
              if (f === "body") return ["sectionsContent"];
              if (f === "subtitles") return ["subtitles"];
              if (f === "tags") return ["tagsText"];
              return [];
            })
        : undefined;

    const rawResults = this.miniSearch.search(query, {
      fields: mappedFields && mappedFields.length ? mappedFields : undefined,
    }) as SearchResult[];

    const seenIds = new Set<string>();
    const deduped = rawResults.filter((r) => {
      if (seenIds.has(r.id)) return false;
      seenIds.add(r.id);
      return true;
    });

    let filtered = deduped.filter((r) => {
      const doc = r as SearchResult & IndexDoc;

      if (filters.product && doc.product !== filters.product) return false;
      if (filters.feature && doc.feature !== filters.feature) return false;
      if (filters.tag && !(doc.tagsText ?? "").includes(filters.tag)) {
        return false;
      }

      return true;
    });

    if (filters.navigationPath && filters.navigationPath.trim()) {
      const pathLower = filters.navigationPath.trim().toLowerCase();
      filtered = filtered.filter((r) => {
        const article = this.articlesById.get(r.id);
        if (!article) return false;
        const headingText = article.headings.map((h) => h.text).join(" ");
        const sectionHeadings = article.sections.map((s) => s.headingText).join(" ");
        return (
          headingText.toLowerCase().includes(pathLower) ||
          sectionHeadings.toLowerCase().includes(pathLower)
        );
      });
    }

    const seenSlugs = new Set<string>();
    filtered = filtered.filter((r) => {
      const article = this.articlesById.get(r.id);
      const slug = article?.slug ?? r.id;
      if (seenSlugs.has(slug)) return false;
      seenSlugs.add(slug);
      return true;
    });

    const sliced = filtered.slice(offset, offset + limit);

    const hits: SearchHit[] = sliced.map((res) => {
      const article = this.articlesById.get(res.id);
      const q = query.toLowerCase();

      let snippet: string | undefined;
      let sectionAnchorId: string | undefined;

      if (article) {
        const section = article.sections.find((s) =>
          s.contentPlain.toLowerCase().includes(q),
        );

        if (section) {
          sectionAnchorId = section.anchorId;
          const idx = section.contentPlain.toLowerCase().indexOf(q);
          const start = Math.max(0, idx - 60);
          const end = Math.min(
            section.contentPlain.length,
            idx + q.length + 60,
          );
          const prefix = start > 0 ? "..." : "";
          const suffix = end < section.contentPlain.length ? "..." : "";
          snippet = `${prefix}${section.contentPlain.slice(start, end)}${suffix}`;
        } else if (article.bodyPlain.toLowerCase().includes(q)) {
          const idx = article.bodyPlain.toLowerCase().indexOf(q);
          const start = Math.max(0, idx - 60);
          const end = Math.min(
            article.bodyPlain.length,
            idx + q.length + 60,
          );
          const prefix = start > 0 ? "..." : "";
          const suffix = end < article.bodyPlain.length ? "..." : "";
          snippet = `${prefix}${article.bodyPlain.slice(start, end)}${suffix}`;
        }
      }

      const tags =
        article && Array.isArray(article.metadata.tags)
          ? (article.metadata.tags as unknown[]).filter(
              (t) => typeof t === "string",
            ) as string[]
          : undefined;

      const slug = article?.slug;
      const articleUrl =
        slug && this.articleBaseUrl
          ? `${this.articleBaseUrl}/kb/articles/${slug}`
          : undefined;

      return {
        id: res.id,
        title: (res as IndexDoc).title,
        score: res.score,
        snippet,
        sectionAnchorId,
        product: article?.metadata.product as string | undefined,
        feature: article?.metadata.feature as string | undefined,
        tags,
        lastUpdated: article?.lastUpdated,
        slug,
        articleUrl,
      };
    });

    return {
      total: filtered.length,
      hits,
    };
  }

  getArticle(id: string): NormalizedArticle | undefined {
    return this.articlesById.get(id);
  }

  searchByFiltersOnly(
    filters: SearchFilters,
    limit: number,
    offset: number
  ): { total: number; hits: SearchHit[] } {
    const pathLower =
      filters.navigationPath?.trim().toLowerCase();
    let list = Array.from(this.articlesById.values());

    if (filters.product) {
      const productVal = filters.product;
      list = list.filter(
        (a) =>
          (a.metadata.product as string) === productVal
      );
    }
    if (filters.feature) {
      const featureVal = filters.feature;
      list = list.filter(
        (a) => (a.metadata.feature as string) === featureVal
      );
    }
    if (filters.tag) {
      const tagVal = filters.tag;
      list = list.filter((a) => {
        const tags = a.metadata.tags as string[] | undefined;
        return Array.isArray(tags) && tags.some((t) => String(t).includes(tagVal));
      });
    }
    if (pathLower) {
      list = list.filter((a) => {
        const headingText = a.headings.map((h) => h.text).join(" ").toLowerCase();
        const sectionHeadings = a.sections.map((s) => s.headingText).join(" ").toLowerCase();
        return headingText.includes(pathLower) || sectionHeadings.includes(pathLower);
      });
    }

    const seenSlugs = new Set<string>();
    list = list.filter((a) => {
      const slug = a.slug ?? a.id;
      if (seenSlugs.has(slug)) return false;
      seenSlugs.add(slug);
      return true;
    });

    const total = list.length;
    const sliced = list.slice(offset, offset + limit);

    const hits: SearchHit[] = sliced.map((a) => {
      const slug = a.slug;
      const articleUrl =
        slug && this.articleBaseUrl
          ? `${this.articleBaseUrl}/kb/articles/${slug}`
          : undefined;
      return {
        id: a.id,
        title: a.title,
        score: 1,
        product: a.metadata.product as string | undefined,
        feature: a.metadata.feature as string | undefined,
        tags: Array.isArray(a.metadata.tags) ? (a.metadata.tags as string[]) : undefined,
        lastUpdated: a.lastUpdated,
        slug,
        articleUrl,
      };
    });

    return { total, hits };
  }
}

