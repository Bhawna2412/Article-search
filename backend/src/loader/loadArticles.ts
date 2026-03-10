import fs from "fs";
import path from "path";
import { RawArticle } from "../types";

export const loadArticlesFromDir = (rootDir: string): RawArticle[] => {
  if (!fs.existsSync(rootDir)) {
    return [];
  }

  const articles: RawArticle[] = [];

  const walk = (dir: string) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }

      if (!entry.isFile()) continue;
      if (!entry.name.endsWith(".json")) continue;

      try {
        const raw = fs.readFileSync(fullPath, "utf8");
        const parsed = JSON.parse(raw) as RawArticle;

        const relativePath = path.relative(rootDir, fullPath);
        const uniqueId = relativePath.replace(/\.json$/i, "").replace(/[/\\]/g, "-");
        (parsed as RawArticle & { _loadPath: string })._loadPath = uniqueId;

        if (parsed._source_kb_name == null) {
          const pathParts = relativePath.split(path.sep);
          const kbFolder = pathParts[0] || "";
          const productName = kbFolder.replace(/^\d+_/, "").replace(/_/g, " ");
          if (productName) {
            parsed._source_kb_name = productName;
          }
        }

        if (!parsed.id) {
          if (parsed.articleID != null) {
            parsed.id = String(parsed.articleID);
          } else {
            parsed.id = path.basename(entry.name, ".json");
          }
        }

        if (!parsed.title && typeof parsed.name === "string") {
          parsed.title = parsed.name;
        }

        articles.push(parsed);
      } catch (err) {
        // Skip malformed files; in a real app we might log this.
        // eslint-disable-next-line no-console
        console.error(`Failed to load article from ${fullPath}:`, err);
      }
    }
  };

  walk(rootDir);

  return articles;
};

