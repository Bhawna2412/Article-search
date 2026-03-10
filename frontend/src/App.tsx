import React, { useCallback, useEffect, useRef, useState } from "react";

const MIN_LEFT_PANEL = 156;
const MAX_LEFT_PANEL = 312;
const MIN_RIGHT_PANEL = 280;
const MAX_RIGHT_PANEL = 640;
const DEFAULT_LEFT_PANEL = 192;
const DEFAULT_RIGHT_PANEL = 420;
const RESIZER_WIDTH = 6;
const MIN_CONTENT_HEIGHT = 280;

interface SearchHit {
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

interface Heading {
  level: number;
  text: string;
  anchorId: string;
}

interface Section {
  anchorId: string;
  headingText: string;
  level: number;
  contentPlain: string;
}

interface NormalizedArticle {
  id: string;
  slug?: string;
  title: string;
  subtitles: string[];
  headings: Heading[];
  bodyPlain: string;
  sections: Section[];
  metadata: {
    product?: string;
    feature?: string;
    tags?: string[];
    [key: string]: unknown;
  };
  lastUpdated?: string;
  articleUrl?: string;
}

interface Task {
  id: string;
  searchParameter: string;
  articleTitle: string;
  articleUrl: string;
  updated: boolean;
}

const PRODUCT_OPTIONS = [
  { label: "Select a Product", value: "" },
  { label: "All", value: "all" },
  { label: "Commerce Cloud", value: "Commerce Cloud" },
  { label: "Merchandising Cloud", value: "Merchandising Cloud" },
  { label: "Retail Express", value: "Retail Express" },
  { label: "Marketing Cloud", value: "Marketing Cloud" },
  { label: "Service Cloud", value: "Service Cloud" },
  { label: "Retail Cloud", value: "Retail Cloud" },
  { label: "Neto", value: "Neto By Maropost" },
];

const highlightText = (text: string, query: string): React.ReactNode => {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`(${escaped})`, "ig");
  const parts = text.split(pattern);
  const qLower = query.trim().toLowerCase();
  return parts.map((part, idx) => {
    const isMatch = part.length > 0 && part.toLowerCase() === qLower;
    if (isMatch)
      return (
        <strong key={idx} className="highlight">
          {part}
        </strong>
      );
    return <React.Fragment key={idx}>{part}</React.Fragment>;
  });
};

const formatDate = (dateStr?: string) => {
  if (!dateStr) return null;
  try {
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return dateStr;
  }
};

const getInitialArticleId = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("article");
  return id ? decodeURIComponent(id) : null;
};

const defaultApiBase = (import.meta.env.VITE_API_ORIGIN ?? "").replace(/\/$/, "");

export const App: React.FC = () => {
  const [apiBase, setApiBase] = useState(defaultApiBase);
  const [product, setProduct] = useState("");
  const [featureName, setFeatureName] = useState("");
  const [navigationPath, setNavigationPath] = useState("");
  const [hits, setHits] = useState<SearchHit[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(getInitialArticleId);
  const [selectedHitAnchor, setSelectedHitAnchor] = useState<string | undefined>();
  const [article, setArticle] = useState<NormalizedArticle | null>(null);
  const articleScrollRef = useRef<HTMLDivElement | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedResultIds, setSelectedResultIds] = useState<Set<string>>(new Set());
  const [hasSearched, setHasSearched] = useState(false);
  const [showLiveArticle, setShowLiveArticle] = useState(false);

  useEffect(() => {
    if (defaultApiBase) return;
    fetch("/config.json")
      .then((r) => (r.ok ? r.json() : null))
      .then((c) => {
        const origin = typeof c?.apiOrigin === "string" ? c.apiOrigin.trim().replace(/\/$/, "") : "";
        if (origin) setApiBase(origin);
      })
      .catch(() => {});
  }, []);

  const [leftPanelWidth, setLeftPanelWidth] = useState(DEFAULT_LEFT_PANEL);
  const [rightPanelWidth, setRightPanelWidth] = useState(DEFAULT_RIGHT_PANEL);
  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const resizingRef = useRef<"left" | "right" | null>(null);
  const resizingHRef = useRef(false);
  const startXRef = useRef(0);
  const startLeftRef = useRef(0);
  const startRightRef = useRef(0);
  const startYRef = useRef(0);
  const startContentHeightRef = useRef(0);
  const layoutWrapRef = useRef<HTMLDivElement | null>(null);
  const selectAllCheckboxRef = useRef<HTMLInputElement | null>(null);

  const handleResizerMouseDown = useCallback((side: "left" | "right", e: React.MouseEvent) => {
    e.preventDefault();
    resizingRef.current = side;
    startXRef.current = e.clientX;
    startLeftRef.current = leftPanelWidth;
    startRightRef.current = rightPanelWidth;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  }, [leftPanelWidth, rightPanelWidth]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (resizingRef.current == null) return;
      const delta = e.clientX - startXRef.current;
      if (resizingRef.current === "left") {
        const next = Math.min(MAX_LEFT_PANEL, Math.max(MIN_LEFT_PANEL, startLeftRef.current + delta));
        setLeftPanelWidth(next);
      } else if (resizingRef.current === "right") {
        const next = Math.min(MAX_RIGHT_PANEL, Math.max(MIN_RIGHT_PANEL, startRightRef.current + delta));
        setRightPanelWidth(next);
      }
    };

    const onUp = () => {
      if (resizingRef.current != null) {
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      }
      resizingRef.current = null;
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, []);

  const handleResizerHMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const wrap = layoutWrapRef.current;
    const currentHeight = contentHeight ?? (wrap ? wrap.getBoundingClientRect().height : window.innerHeight);
    resizingHRef.current = true;
    startYRef.current = e.clientY;
    startContentHeightRef.current = currentHeight;
    document.body.style.cursor = "row-resize";
    document.body.style.userSelect = "none";
  }, [contentHeight]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!resizingHRef.current) return;
      const delta = e.clientY - startYRef.current;
      const next = Math.min(
        window.innerHeight - 24,
        Math.max(MIN_CONTENT_HEIGHT, startContentHeightRef.current + delta)
      );
      setContentHeight(next);
    };
    const onUp = () => {
      if (resizingHRef.current) {
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      }
      resizingHRef.current = false;
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, []);

  const runSearch = useCallback(async () => {
    const hasFeature = featureName.trim().length > 0;
    const hasPath = navigationPath.trim().length > 0;
    const showAll = product === "all" && !hasFeature && !hasPath;
    if (!hasFeature && !hasPath && !showAll) {
      setError("Select \"All\" to list every article, or enter a feature name and/or navigation path to search.");
      setHits([]);
      setTotal(0);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      params.set("limit", "40");
      params.set("offset", "0");
      if (hasFeature) {
        params.set("q", featureName.trim());
        params.set("fields", "title,headings,body");
      }
      if (product) params.set("product", product);
      if (hasPath) params.set("navigationPath", navigationPath.trim());

      const base = apiBase || "";
      if (!base) {
        setError("Search backend is not configured. Set apiOrigin in public/config.json or VITE_API_ORIGIN in Vercel and redeploy.");
        setLoading(false);
        return;
      }
      const res = await fetch(`${base}/api/search?${params.toString()}`);
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error || `Search failed (${res.status})`);
      }

      const data = (await res.json()) as { total: number; hits: SearchHit[] };
      const seenIds = new Set<string>();
      const seenUrls = new Set<string>();
      const dedupedHits = data.hits.filter((h) => {
        if (seenIds.has(h.id)) return false;
        const url = h.articleUrl ?? h.id;
        if (seenUrls.has(url)) return false;
        seenIds.add(h.id);
        seenUrls.add(url);
        return true;
      });
      setHits(dedupedHits);
      setTotal(data.total);
      setSelectedResultIds(new Set());
      setHasSearched(true);
      if (data.hits.length) {
        setSelectedId(data.hits[0].id);
        setSelectedHitAnchor(data.hits[0].sectionAnchorId);
      } else {
        setSelectedId(null);
        setArticle(null);
      }
    } catch (err) {
      const msg = (err as Error).message;
      const is404 = msg.includes("404") || msg.includes("Search failed (404)");
      setError(
        is404 && !apiBase
          ? "Search backend not configured. Add your Railway URL to public/config.json (apiOrigin) and redeploy, or set VITE_API_ORIGIN in Vercel."
          : msg
      );
      setHits([]);
      setTotal(0);
      setHasSearched(true);
    } finally {
      setLoading(false);
    }
  }, [apiBase, featureName, product, navigationPath]);

  useEffect(() => {
    setShowLiveArticle(false);
  }, [selectedId]);

  useEffect(() => {
    if (!selectedId) {
      setArticle(null);
      return;
    }
    const base = apiBase || "";
    if (!base) return;
    const controller = new AbortController();
    const run = async () => {
      try {
        const res = await fetch(`${base}/api/articles/${encodeURIComponent(selectedId)}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`Failed to load article (${res.status})`);
        const data = (await res.json()) as NormalizedArticle;
        setArticle(data);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError((err as Error).message);
      }
    };
    void run();
    return () => controller.abort();
  }, [apiBase, selectedId]);

  useEffect(() => {
    if (!articleScrollRef.current || !selectedHitAnchor) return;
    const el = articleScrollRef.current.querySelector<HTMLElement>(
      `[data-anchor-id="${CSS.escape(selectedHitAnchor)}"]`
    );
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [article, selectedHitAnchor]);

  const openArticle = (hit: SearchHit) => {
    setSelectedId(hit.id);
    setSelectedHitAnchor(hit.sectionAnchorId);
  };

  const getArticleUrl = (id: string) =>
    `${window.location.origin}${window.location.pathname}?article=${encodeURIComponent(id)}`;

  const buildSearchParameter = useCallback(() => {
    const parts = [product, featureName.trim(), navigationPath.trim()].filter(Boolean);
    return parts.length ? parts.join(" · ") : "—";
  }, [product, featureName, navigationPath]);

  const markAsTask = useCallback(
    (hit: SearchHit) => {
      const url = hit.articleUrl ?? getArticleUrl(hit.id);
      const searchParam = buildSearchParameter();
      setTasks((prev) => {
        if (prev.some((t) => t.articleUrl === url && t.articleTitle === hit.title))
          return prev;
        return [
          ...prev,
          {
            id: `task-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
            searchParameter: searchParam,
            articleTitle: hit.title,
            articleUrl: url,
            updated: false,
          },
        ];
      });
    },
    [buildSearchParameter, getArticleUrl]
  );

  const markCurrentArticleAsTask = useCallback(() => {
    if (!article) return;
    const url = article.articleUrl ?? getArticleUrl(article.id);
    const searchParam = buildSearchParameter();
    setTasks((prev) => {
      if (prev.some((t) => t.articleUrl === url && t.articleTitle === article.title))
        return prev;
      return [
        ...prev,
        {
          id: `task-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
          searchParameter: searchParam,
          articleTitle: article.title,
          articleUrl: url,
          updated: false,
        },
      ];
    });
  }, [article, buildSearchParameter, getArticleUrl]);

  const toggleTaskUpdated = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, updated: !t.updated } : t))
    );
  }, []);

  const removeTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const exportTasksCSV = useCallback(() => {
    const header = "Search parameter,Article title,Article URL,Updated\n";
    const rows = tasks.map(
      (t) =>
        `"${t.searchParameter.replace(/"/g, '""')}","${t.articleTitle.replace(/"/g, '""')}","${t.articleUrl.replace(/"/g, '""')}","${t.updated ? "Yes" : "No"}"`
    );
    const csv = header + rows.join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `tasks-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  }, [tasks]);

  const allResultsSelected =
    hits.length > 0 && selectedResultIds.size === hits.length;
  const someResultsSelected = selectedResultIds.size > 0;

  useEffect(() => {
    const el = selectAllCheckboxRef.current;
    if (el) el.indeterminate = someResultsSelected && !allResultsSelected;
  }, [someResultsSelected, allResultsSelected]);

  const toggleSelectAll = useCallback(() => {
    if (allResultsSelected) {
      setSelectedResultIds(new Set());
    } else {
      setSelectedResultIds(new Set(hits.map((h) => h.id)));
    }
  }, [allResultsSelected, hits]);

  const toggleSelectResult = useCallback((id: string) => {
    setSelectedResultIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const exportResultsCSV = useCallback(() => {
    const selected = hits.filter((h) => selectedResultIds.has(h.id));
    if (selected.length === 0) return;
    const header = "Title,Article URL,Product,Last Updated\n";
    const rows = selected.map((h) => {
      const url = h.articleUrl ?? getArticleUrl(h.id);
      const title = h.title.replace(/"/g, '""');
      const product = (h.product ?? "").replace(/"/g, '""');
      const updated = h.lastUpdated ? formatDate(h.lastUpdated) ?? "" : "";
      return `"${title}","${url.replace(/"/g, '""')}","${product}","${updated}"`;
    });
    const csv = header + rows.join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `search-results-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  }, [hits, selectedResultIds]);

  const normalizedQuery = featureName.trim();

  return (
    <div className="app-shell ref-layout ref-layout--resizable">
      <div
        ref={layoutWrapRef}
        className="ref-content-wrap ref-layout ref-layout--resizable"
        style={{
          ["--left-panel-width" as string]: `${leftPanelWidth}px`,
          ["--right-panel-width" as string]: `${rightPanelWidth}px`,
          ["--resizer-width" as string]: `${RESIZER_WIDTH}px`,
          height: contentHeight != null ? `${contentHeight}px` : "100%",
        }}
      >
        <aside className="filters-panel resizable-panel resizable-panel--left">
        <div className="filters-form-wrap">
        <div className="filter-group">
          <label className="filter-label">Select a Product</label>
          <select
            className="filter-select"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          >
            {PRODUCT_OPTIONS.map((opt) => (
              <option key={opt.value || "all"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <span className="filter-pill">Feature Name</span>
          <p className="filter-hint">Primary search parameter</p>
          <input
            type="text"
            className="filter-input"
            placeholder="e.g. shipping, notifications"
            value={featureName}
            onChange={(e) => setFeatureName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && runSearch()}
          />
        </div>

        <div className="filter-group">
          <span className="filter-pill">Navigation Path</span>
          <p className="filter-hint">Secondary search parameter</p>
          <input
            type="text"
            className="filter-input filter-input--multiline"
            placeholder="e.g. Settings &gt; Notifications"
            value={navigationPath}
            onChange={(e) => setNavigationPath(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && runSearch()}
          />
        </div>

        <button type="button" className="btn-search" onClick={runSearch}>
          Search Result
        </button>
        </div>

        <div className="task-area">
          <div className="task-area-header">
            <span className="filter-pill">Tasks</span>
            {tasks.length > 0 && (
              <button
                type="button"
                className="btn-export-csv"
                onClick={exportTasksCSV}
              >
                Export CSV
              </button>
            )}
          </div>
          {tasks.length === 0 ? (
            <p className="task-area-empty">No tasks yet. Mark articles as tasks from search results.</p>
          ) : (
            <ul className="task-list">
              {tasks.map((t) => (
                <li
                  key={t.id}
                  className={`task-item${t.updated ? " task-item--done" : ""}`}
                >
                  <label className="task-item-row">
                    <input
                      type="checkbox"
                      checked={t.updated}
                      onChange={() => toggleTaskUpdated(t.id)}
                      className="task-checkbox"
                      title="Mark as done"
                    />
                  </label>
                  <div className="task-item-content">
                    <p className="task-search-param" title={t.searchParameter}>
                      {t.searchParameter}
                    </p>
                    <p className="task-article-title" title={t.articleTitle}>
                      {t.articleTitle}
                    </p>
                    <a
                      href={t.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="task-article-url"
                    >
                      {t.articleUrl.length > 45 ? t.articleUrl.slice(0, 45) + "…" : t.articleUrl}
                    </a>
                  </div>
                  <button
                    type="button"
                    className="task-remove"
                    onClick={() => removeTask(t.id)}
                    title="Remove task"
                    aria-label="Remove task"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>

      <div
        className="resizer resizer--left"
        onMouseDown={(e) => handleResizerMouseDown("left", e)}
        role="separator"
        aria-orientation="vertical"
        aria-valuenow={leftPanelWidth}
        title="Drag to resize filters panel"
      />

      <main className="results-main resizable-panel resizable-panel--center">
        <div className="results-header">
          <span className="results-heading-pill">Search Result</span>
          {hasSearched && !loading && (
            <span className="results-count">
              {total === 1 ? "1 article matches" : `${total} articles match`}
            </span>
          )}
          {hits.length > 0 && (
            <div className="results-header-actions">
              <label className="results-select-all">
                <input
                  type="checkbox"
                  ref={selectAllCheckboxRef}
                  checked={allResultsSelected}
                  onChange={toggleSelectAll}
                  title="Select all"
                />
                <span>Select all</span>
              </label>
              <button
                type="button"
                className="btn-export-results-csv"
                onClick={exportResultsCSV}
                disabled={!someResultsSelected}
                title="Export selected to CSV"
              >
                Export to CSV
              </button>
            </div>
          )}
          {loading && <div className="loading-bar" />}
        </div>

        <div className="results-content">
          {!apiBase && (
            <div className="error-banner" style={{ marginBottom: "0.5rem" }}>
              Search backend not configured. Set <strong>apiOrigin</strong> in <strong>public/config.json</strong> to your Railway URL (e.g. https://your-app.up.railway.app) and redeploy.
            </div>
          )}
          {error && <div className="error-banner">{error}</div>}

          {!hits.length && !loading && !error && (
            <div className="empty-state">
              <p className="empty-title">Search the knowledge base</p>
<p className="empty-body">
              Select &quot;All&quot; to list every article, or choose a product and enter a feature name and/or navigation path. Click &quot;Search Result&quot; to find articles.
              </p>
            </div>
          )}

          {hits.length > 0 && (
            <ul className="results-list ref-cards">
              {hits.map((hit) => (
                <li key={hit.id} className="result-card-ref">
                  <label className="result-card-select">
                    <input
                      type="checkbox"
                      checked={selectedResultIds.has(hit.id)}
                      onChange={() => toggleSelectResult(hit.id)}
                      onClick={(e) => e.stopPropagation()}
                      title="Select for export"
                    />
                  </label>
                  <div className="result-card-thumb">
                    <div className="result-card-thumb-placeholder" />
                    <span className="result-card-doc-icon" aria-hidden>📄</span>
                  </div>
                  <div className="result-card-body">
                    <h3 className="result-card-title">
                      <button
                        type="button"
                        className="result-card-title-link"
                        onClick={() => openArticle(hit)}
                      >
                        {highlightText(hit.title, normalizedQuery)}
                      </button>
                    </h3>
                    <p className="result-card-meta">
                      Article by Documentation Staff
                      {hit.lastUpdated && (
                        <> Last Updated: {formatDate(hit.lastUpdated)}</>
                      )}
                      {hit.product && <> {hit.product}</>}
                    </p>
                    {hit.snippet && (
                      <p className="result-card-snippet">
                        {highlightText(hit.snippet, normalizedQuery)}
                      </p>
                    )}
                    <p className="result-card-link-row">
                      {hit.articleUrl ? (
                        <a
                          href={hit.articleUrl}
                          className="result-card-open-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open article
                        </a>
                      ) : (
                        <button
                          type="button"
                          className="result-card-open-link"
                          onClick={() => openArticle(hit)}
                        >
                          Open article
                        </button>
                      )}
                      <button
                        type="button"
                        className="result-card-permalink"
                        onClick={() => markAsTask(hit)}
                      >
                        Mark as a Task
                      </button>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <div
        className="resizer resizer--right"
        onMouseDown={(e) => handleResizerMouseDown("right", e)}
        role="separator"
        aria-orientation="vertical"
        aria-valuenow={rightPanelWidth}
        title="Drag to resize article panel"
      />

      {article ? (
        <aside className="article-panel resizable-panel resizable-panel--right">
          <div className="article-panel-header">
            <span className="results-heading-pill">Article Body</span>
            <div className="article-panel-header-actions">
              {showLiveArticle ? (
                <button
                  type="button"
                  className="article-panel-live-link"
                  onClick={() => setShowLiveArticle(false)}
                >
                  Revert to Article Body
                </button>
              ) : (
                <>
                  {article.articleUrl && (
                    <>
                      <button
                        type="button"
                        className="article-panel-live-link"
                        onClick={() => setShowLiveArticle(true)}
                      >
                        Open Live Article
                      </button>
                      <a
                        href={article.articleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="article-panel-live-link article-panel-live-link--external"
                      >
                        Open in new tab
                      </a>
                    </>
                  )}
                </>
              )}
              <button
                type="button"
                className="article-panel-live-link"
                onClick={markCurrentArticleAsTask}
              >
                Mark as a Task
              </button>
            </div>
          </div>
          {showLiveArticle && article.articleUrl ? (
            <div className="article-panel-live-frame-wrap">
              <iframe
                title="Live article"
                src={article.articleUrl}
                className="article-panel-live-iframe"
              />
            </div>
          ) : (
            <>
          <div className="article-panel-toc">
            <div className="toc-title">Sections</div>
            <ul className="toc-list">
              {article.headings.map((h) => (
                <li
                  key={h.anchorId}
                  className={`toc-item toc-item--level-${Math.min(3, h.level)} ${selectedHitAnchor === h.anchorId ? "toc-item--active" : ""}`}
                  onClick={() => setSelectedHitAnchor(h.anchorId)}
                >
                  {highlightText(h.text, normalizedQuery)}
                </li>
              ))}
            </ul>
          </div>
          <div className="article-panel-body" ref={articleScrollRef}>
            <h1 className="article-title">
              {highlightText(article.title, normalizedQuery)}
            </h1>
            <div className="article-meta">
              {article.metadata.product && (
                <span>Product: {article.metadata.product}</span>
              )}
              {article.lastUpdated && (
                <span>Updated: {formatDate(article.lastUpdated)}</span>
              )}
            </div>
            {article.sections.map((section) => (
              <section
                key={section.anchorId}
                className="article-section"
                id={section.anchorId}
              >
                <h2
                  className={`article-heading level-${Math.min(3, section.level)}`}
                  data-anchor-id={section.anchorId}
                >
                  {highlightText(section.headingText, normalizedQuery)}
                </h2>
                <p className="article-paragraph">
                  {highlightText(section.contentPlain, normalizedQuery)}
                </p>
              </section>
            ))}
          </div>
            </>
          )}
        </aside>
      ) : (
          <div className="resizable-panel resizable-panel--right resizable-panel--empty" />
        )}
      </div>
      <div
        className="resizer-h"
        onMouseDown={handleResizerHMouseDown}
        role="separator"
        aria-orientation="horizontal"
        title="Drag to resize section height"
      />
    </div>
  );
};
