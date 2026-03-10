import express from "express";
import cors from "cors";
import { loadConfig } from "./config";
import { ArticleSearchApiClient } from "./api/articleSearchApi";
import { VanillaApiClient } from "./api/vanillaApi";
import {
  getSlugFromMapping,
  loadArticleMapping,
} from "./loader/loadArticleMapping";
import { loadArticlesFromDir } from "./loader/loadArticles";
import { normalizeArticle } from "./normalization/rich2ToPlain";
import { ArticleIndex } from "./search/index";

const config = loadConfig();
const app = express();
app.use(cors());
app.use(express.json());

const index = new ArticleIndex();
const apiClient =
  config.searchSource === "api" && config.searchApiBaseUrl
    ? new ArticleSearchApiClient(config)
    : null;
const vanillaClient =
  config.searchSource === "vanilla" &&
  config.searchApiBaseUrl &&
  config.searchApiKey
    ? new VanillaApiClient(config.searchApiBaseUrl, config.searchApiKey)
    : null;

const buildIndex = () => {
  const rawArticles = loadArticlesFromDir(config.articlesDir);
  const mapping = loadArticleMapping(config.articlesDir);
  for (const raw of rawArticles) {
    const slug = getSlugFromMapping(
      mapping,
      raw._source_kb_id,
      raw.articleID
    );
    if (slug) raw.slug = slug;
  }
  const normalized = rawArticles.map(normalizeArticle);
  index.build(normalized, config.articleBaseUrl);
};

if (!apiClient && !vanillaClient) {
  buildIndex();
}

app.get("/api/search", async (req, res) => {
  const q = String(req.query.q ?? "").trim();
  const navigationPath = String(req.query.navigationPath ?? req.query.path ?? "").trim();
  const productParam = typeof req.query.product === "string" ? req.query.product : undefined;

  const limit =
    typeof req.query.limit === "string"
      ? Number(req.query.limit)
      : 20;
  const offset =
    typeof req.query.offset === "string"
      ? Number(req.query.offset)
      : 0;

  if (vanillaClient) {
    try {
      const result = await vanillaClient.search({
        q: q || undefined,
        product: productParam,
        navigationPath: navigationPath || undefined,
        limit: limit || 20,
        offset: offset || 0,
      });
      res.json({ total: result.total, hits: result.hits });
      return;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Vanilla search API error", err);
      res.status(502).json({
        error: err instanceof Error ? err.message : "Vanilla search request failed",
      });
      return;
    }
  }

  if (apiClient) {
    try {
      const result = await apiClient.search({
        q: q || undefined,
        product: productParam,
        navigationPath: navigationPath || undefined,
        limit: limit || 20,
        offset: offset || 0,
      });
      res.json({ total: result.total, hits: result.hits });
      return;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Article search API error", err);
      res.status(502).json({
        error: err instanceof Error ? err.message : "Search API request failed",
      });
      return;
    }
  }

  const filters = {
    product:
      productParam && productParam !== "all"
        ? productParam
        : undefined,
    feature:
      typeof req.query.feature === "string"
        ? req.query.feature
        : undefined,
    tag:
      typeof req.query.tag === "string"
        ? req.query.tag
        : undefined,
    navigationPath: navigationPath || undefined,
  };

  let total: number;
  let hits: { id: string; title: string; score: number; snippet?: string; sectionAnchorId?: string; product?: string; feature?: string; tags?: string[]; lastUpdated?: string }[];

  if (!q) {
    const result = index.searchByFiltersOnly(
      filters,
      limit || 20,
      offset || 0
    );
    total = result.total;
    hits = result.hits;
  } else {
    const fieldsParam =
      typeof req.query.fields === "string" ? req.query.fields : undefined;
    const fields =
      fieldsParam && fieldsParam.length
        ? fieldsParam.split(",").map((f) => f.trim())
        : ["title", "headings", "body"];

    const result = index.search(
      q,
      filters,
      limit || 20,
      offset || 0,
      fields,
    );
    total = result.total;
    hits = result.hits;
  }

  res.json({ total, hits });
});

app.get("/api/articles/:id", async (req, res) => {
  if (vanillaClient) {
    try {
      const article = await vanillaClient.getDiscussion(req.params.id);
      if (!article) {
        res.status(404).json({ error: "Article not found" });
        return;
      }
      res.json(article);
      return;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Vanilla article API error", err);
      res.status(502).json({
        error: err instanceof Error ? err.message : "Vanilla article request failed",
      });
      return;
    }
  }

  if (apiClient) {
    try {
      const article = await apiClient.getArticle(req.params.id);
      if (!article) {
        res.status(404).json({ error: "Article not found" });
        return;
      }
      res.json(article);
      return;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Article detail API error", err);
      res.status(502).json({
        error: err instanceof Error ? err.message : "Article API request failed",
      });
      return;
    }
  }

  const article = index.getArticle(req.params.id);
  if (!article) {
    res.status(404).json({ error: "Article not found" });
    return;
  }
  const articleUrl =
    article.slug != null && article.slug.length > 0
      ? `${config.articleBaseUrl}/kb/articles/${article.slug}`
      : undefined;
  res.json({ ...article, articleUrl });
});

app.post("/api/reindex", (_req, res) => {
  try {
    buildIndex();
    res.json({ ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Failed to rebuild index", err);
    res.status(500).json({ error: "Failed to rebuild index" });
  }
});

app.listen(config.port, "0.0.0.0", () => {
  // eslint-disable-next-line no-console
  console.log(`Article search backend listening on port ${config.port} (local network)`);
});

