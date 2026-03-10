import fs from "fs";
import path from "path";

export type ArticleMapping = Record<
  string,
  Record<string, { slug?: string; name?: string; knowledgeCategoryID?: number }>
>;

export const loadArticleMapping = (articlesDir: string): ArticleMapping => {
  const mappingPath = path.join(articlesDir, "..", "article_mapping.json");
  if (!fs.existsSync(mappingPath)) {
    return {};
  }
  try {
    const raw = fs.readFileSync(mappingPath, "utf8");
    return JSON.parse(raw) as ArticleMapping;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Failed to load article_mapping.json:", err);
    return {};
  }
};

export const getSlugFromMapping = (
  mapping: ArticleMapping,
  kbId: number | undefined,
  articleId: number | undefined
): string | undefined => {
  if (kbId == null || articleId == null) return undefined;
  const kb = mapping[String(kbId)];
  if (!kb) return undefined;
  const entry = kb[String(articleId)];
  return entry?.slug;
};
