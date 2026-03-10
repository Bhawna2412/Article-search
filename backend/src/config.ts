import fs from "fs";
import path from "path";

export type SearchSource = "local" | "api" | "vanilla";

export interface AppConfig {
  port: number;
  articlesDir: string;
  articleBaseUrl: string;
  searchSource: SearchSource;
  searchApiBaseUrl: string;
  searchApiKey: string | undefined;
  searchApiSearchPath: string;
  searchApiArticlePath: string;
}

export const loadConfig = (): AppConfig => {
  const port = Number(process.env.PORT ?? 4000);
  const articleBaseUrl =
    process.env.ARTICLE_BASE_URL ?? "https://galaxy.maropost.com";
  const searchSourceRaw = (process.env.SEARCH_SOURCE ?? "local").toLowerCase();
  const searchSource: SearchSource =
    searchSourceRaw === "vanilla"
      ? "vanilla"
      : searchSourceRaw === "api"
        ? "api"
        : "local";
  const searchApiBaseUrl =
    (process.env.SEARCH_API_BASE_URL ?? "").replace(/\/$/, "");
  const searchApiKey =
    process.env.SEARCH_API_KEY ?? process.env.SEARCH_API_AUTH ?? undefined;
  const searchApiSearchPath =
    process.env.SEARCH_API_SEARCH_PATH ?? "/api/search";
  const searchApiArticlePath =
    process.env.SEARCH_API_ARTICLE_PATH ?? "/api/articles";

  const explicitDir = process.env.ARTICLES_DIR;

  const defaultArticlesDir = path.join(__dirname, "..", "articles");
  const kbArticlesDir = path.join(
    __dirname,
    "..",
    "knowledge_bases",
    "knowledge_bases",
  );

  let articlesDir = explicitDir;

  if (!articlesDir) {
    if (fs.existsSync(kbArticlesDir)) {
      articlesDir = kbArticlesDir;
    } else {
      articlesDir = defaultArticlesDir;
    }
  }

  return {
    port: Number.isFinite(port) ? port : 4000,
    articleBaseUrl: articleBaseUrl.replace(/\/$/, ""),
    articlesDir,
    searchSource,
    searchApiBaseUrl,
    searchApiKey,
    searchApiSearchPath,
    searchApiArticlePath,
  };
};

