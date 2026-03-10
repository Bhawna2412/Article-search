export interface RawArticle {
  id?: string;
  articleID?: number;
  slug?: string;
  title?: string;
  name?: string;
  bodyRich?: unknown;
  body?: string;
  format?: string;
  subtitles?: string[];
  product?: string;
  feature?: string;
  tags?: string[];
  lastUpdated?: string;
  dateUpdated?: string;
  knowledgeCategoryID?: number;
  _source_kb_id?: number;
  _source_kb_name?: string;
  [key: string]: unknown;
}

export interface Heading {
  level: number;
  text: string;
  anchorId: string;
}

export interface Section {
  anchorId: string;
  headingText: string;
  level: number;
  contentPlain: string;
}

export interface NormalizedMetadata {
  product?: string;
  feature?: string;
  tags?: string[];
  [key: string]: unknown;
}

export interface NormalizedArticle {
  id: string;
  slug?: string;
  title: string;
  subtitles: string[];
  headings: Heading[];
  bodyPlain: string;
  sections: Section[];
  metadata: NormalizedMetadata;
  lastUpdated?: string;
  articleUrl?: string;
}

