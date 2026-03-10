import { Heading, NormalizedArticle, RawArticle, Section } from "../types";

interface WalkContext {
  headings: Heading[];
  sections: Section[];
  bodyParts: string[];
}

const normalizeWhitespace = (text: string): string =>
  text.replace(/\s+/g, " ").trim();

const makeAnchorId = (base: string, index: number): string => {
  const slug = base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const suffix = index > 0 ? `-${index}` : "";
  return `${slug || "section"}${suffix}`;
};

const stripTags = (html: string): string =>
  html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ");

const extractTextFromNode = (node: unknown): string => {
  if (node == null) return "";

  if (typeof node === "string") {
    return node;
  }

  if (typeof node === "number" || typeof node === "boolean") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return normalizeWhitespace(node.map(extractTextFromNode).join(" "));
  }

  if (typeof node === "object") {
    const obj = node as Record<string, unknown>;

    if (typeof obj.text === "string") {
      return obj.text;
    }

    if (Array.isArray(obj.children)) {
      return normalizeWhitespace(
        (obj.children as unknown[]).map(extractTextFromNode).join(" "),
      );
    }

    if (Array.isArray(obj.content)) {
      return normalizeWhitespace(
        (obj.content as unknown[]).map(extractTextFromNode).join(" "),
      );
    }
  }

  return "";
};

const detectHeadingLevel = (node: Record<string, unknown>): number | null => {
  const type = typeof node.type === "string" ? (node.type as string) : "";

  if (typeof node.level === "number") {
    return node.level as number;
  }

  if (/^h[1-6]$/i.test(type)) {
    const level = Number(type.slice(1));
    if (Number.isFinite(level)) return level;
  }

  if (type.toLowerCase() === "heading" && typeof node.level === "string") {
    const maybeLevel = Number(node.level);
    if (Number.isFinite(maybeLevel)) {
      return maybeLevel;
    }
  }

  return null;
};

const walkRichNode = (node: unknown, ctx: WalkContext): void => {
  if (node == null) return;

  if (
    typeof node === "string" ||
    typeof node === "number" ||
    typeof node === "boolean"
  ) {
    const text = normalizeWhitespace(String(node));
    if (text) {
      ctx.bodyParts.push(text);
      if (ctx.sections.length === 0) {
        ctx.sections.push({
          anchorId: "intro",
          headingText: "Introduction",
          level: 1,
          contentPlain: text,
        });
      } else {
        const current = ctx.sections[ctx.sections.length - 1];
        current.contentPlain = normalizeWhitespace(
          `${current.contentPlain} ${text}`,
        );
      }
    }
    return;
  }

  if (Array.isArray(node)) {
    for (const child of node) {
      walkRichNode(child, ctx);
    }
    return;
  }

  if (typeof node === "object") {
    const obj = node as Record<string, unknown>;
    const level = detectHeadingLevel(obj);

    if (level != null) {
      const headingText = normalizeWhitespace(extractTextFromNode(obj));
      if (headingText) {
        const duplicateIndex = ctx.headings.filter(
          (h) => h.text.toLowerCase() === headingText.toLowerCase(),
        ).length;
        const anchorId = makeAnchorId(headingText, duplicateIndex);

        const heading: Heading = {
          level,
          text: headingText,
          anchorId,
        };
        ctx.headings.push(heading);

        ctx.sections.push({
          anchorId,
          headingText,
          level,
          contentPlain: "",
        });
      }
    } else {
      const blockText = normalizeWhitespace(extractTextFromNode(obj));
      if (blockText) {
        ctx.bodyParts.push(blockText);
        if (ctx.sections.length === 0) {
          ctx.sections.push({
            anchorId: "intro",
            headingText: "Introduction",
            level: 1,
            contentPlain: blockText,
          });
        } else {
          const current = ctx.sections[ctx.sections.length - 1];
          current.contentPlain = normalizeWhitespace(
            `${current.contentPlain} ${blockText}`,
          );
        }
      }
    }

    if (Array.isArray(obj.children)) {
      for (const child of obj.children as unknown[]) {
        walkRichNode(child, ctx);
      }
    }

    if (Array.isArray(obj.content)) {
      for (const child of obj.content as unknown[]) {
        walkRichNode(child, ctx);
      }
    }
  }
};

interface HtmlHeadingMatch {
  level: number;
  text: string;
  start: number;
  end: number;
  rawTag: string;
  anchorFromAttr?: string;
}

const parseHtmlBody = (
  html: string,
): { headings: Heading[]; sections: Section[]; bodyPlain: string } => {
  const bodyPlain = normalizeWhitespace(stripTags(html));

  const headingRegex = /<(h[1-6])([^>]*)>([\s\S]*?)<\/\1>/gi;
  const matches: HtmlHeadingMatch[] = [];

  let match: RegExpExecArray | null;
  while ((match = headingRegex.exec(html)) !== null) {
    const tagName = match[1];
    const attrs = match[2] ?? "";
    const innerHtml = match[3] ?? "";
    const level = Number(tagName.slice(1));
    if (!Number.isFinite(level)) continue;

    const anchorFromAttr =
      /id="([^"]+)"/i.exec(attrs)?.[1] ??
      /data-id="([^"]+)"/i.exec(attrs)?.[1];

    const text = normalizeWhitespace(stripTags(innerHtml));

    matches.push({
      level,
      text,
      start: match.index,
      end: headingRegex.lastIndex,
      rawTag: match[0],
      anchorFromAttr,
    });
  }

  const headings: Heading[] = [];
  const sections: Section[] = [];

  if (matches.length === 0) {
    const headingText = "Introduction";
    const anchorId = "intro";
    headings.push({ level: 1, text: headingText, anchorId });
    sections.push({
      anchorId,
      headingText,
      level: 1,
      contentPlain: bodyPlain,
    });
    return { headings, sections, bodyPlain };
  }

  const usedAnchors = new Map<string, number>();
  const getUniqueAnchor = (base: string): string => {
    const normalizedBase = base || "section";
    const count = usedAnchors.get(normalizedBase) ?? 0;
    usedAnchors.set(normalizedBase, count + 1);
    return makeAnchorId(normalizedBase, count);
  };

  matches.forEach((m, index) => {
    const headingText = m.text || "Section";
    const baseAnchor = m.anchorFromAttr || headingText;
    const anchorId = getUniqueAnchor(baseAnchor);

    headings.push({
      level: m.level,
      text: headingText,
      anchorId,
    });

    const sectionStart = m.end;
    const sectionEnd =
      index + 1 < matches.length ? matches[index + 1].start : html.length;
    const sectionHtml = html.slice(sectionStart, sectionEnd);
    const contentPlain = normalizeWhitespace(stripTags(sectionHtml));

    sections.push({
      anchorId,
      headingText,
      level: m.level,
      contentPlain,
    });
  });

  return { headings, sections, bodyPlain };
};

export const normalizeArticle = (raw: RawArticle): NormalizedArticle => {
  const ctx: WalkContext = {
    headings: [],
    sections: [],
    bodyParts: [],
  };

  let headings: Heading[] = [];
  let sections: Section[] = [];
  let bodyPlain = "";

  const title =
    typeof raw.title === "string"
      ? raw.title
      : typeof raw.name === "string"
        ? raw.name
        : typeof raw.id === "string"
          ? raw.id
          : raw.articleID != null
            ? String(raw.articleID)
            : "Untitled article";

  const format =
    typeof raw.format === "string" ? raw.format.toLowerCase() : undefined;

  if (format === "html" && typeof raw.body === "string") {
    const parsed = parseHtmlBody(raw.body);
    headings = parsed.headings;
    sections = parsed.sections;
    bodyPlain = parsed.bodyPlain;
  } else if (format === "rich2" && typeof raw.body === "string") {
    try {
      const rich = JSON.parse(raw.body);
      walkRichNode(rich, ctx);
      headings = ctx.headings;
      sections = ctx.sections;
      bodyPlain = normalizeWhitespace(ctx.bodyParts.join(" "));
    } catch {
      bodyPlain = normalizeWhitespace(stripTags(raw.body));
      const anchorId = "intro";
      headings = [{ level: 1, text: "Introduction", anchorId }];
      sections = [
        {
          anchorId,
          headingText: "Introduction",
          level: 1,
          contentPlain: bodyPlain,
        },
      ];
    }
  } else if (raw.bodyRich != null) {
    walkRichNode(raw.bodyRich, ctx);
    headings = ctx.headings;
    sections = ctx.sections;
    bodyPlain = normalizeWhitespace(ctx.bodyParts.join(" "));
  } else if (typeof raw.body === "string") {
    bodyPlain = normalizeWhitespace(stripTags(raw.body));
    const anchorId = "intro";
    headings = [{ level: 1, text: "Introduction", anchorId }];
    sections = [
      {
        anchorId,
        headingText: "Introduction",
        level: 1,
        contentPlain: bodyPlain,
      },
    ];
  }

  const subtitles = Array.isArray(raw.subtitles)
    ? (raw.subtitles.filter((s) => typeof s === "string") as string[])
    : [];

  const metadata: Record<string, unknown> = {
    product:
      typeof raw._source_kb_name === "string"
        ? raw._source_kb_name
        : raw.product,
    feature: raw.feature,
    tags: raw.tags,
    knowledgeCategoryID: raw.knowledgeCategoryID,
    sourceKnowledgeBaseId: raw._source_kb_id,
  };

  const rawWithPath = raw as RawArticle & { _loadPath?: string };
  const id =
    typeof rawWithPath._loadPath === "string" && rawWithPath._loadPath.length > 0
      ? rawWithPath._loadPath
      : raw._source_kb_id != null && raw.articleID != null
        ? `${raw._source_kb_id}-${raw.articleID}`
        : typeof raw.id === "string"
          ? raw.id
          : raw.articleID != null
            ? String(raw.articleID)
            : title;

  const lastUpdated =
    typeof raw.dateUpdated === "string"
      ? raw.dateUpdated
      : raw.lastUpdated;

  return {
    id,
    slug: raw.slug,
    title,
    subtitles,
    headings,
    bodyPlain,
    sections,
    metadata,
    lastUpdated,
  };
};

