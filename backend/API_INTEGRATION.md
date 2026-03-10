# Live Article Search API Integration

You can run search against a **live external API** instead of local JSON files. Set the backend to use the API and it will proxy search and article-detail requests to your service.

## 1. Environment variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `SEARCH_SOURCE` | No | `local` | Set to `api` to use the external search API. |
| `SEARCH_API_BASE_URL` | Yes when `api` | — | Base URL of your article search API (e.g. `https://api.example.com`). |
| `SEARCH_API_KEY` | No | — | Optional API key or auth token. Sent as `Authorization: Bearer <key>` and `x-api-key` if not already "Bearer ...". |
| `SEARCH_API_SEARCH_PATH` | No | `/api/search` | Path for search (GET). Query params are appended. |
| `SEARCH_API_ARTICLE_PATH` | No | `/api/articles` | Path for article by ID (GET). Use `:id` in the path for the article ID (e.g. `/api/articles/:id`). |
| `ARTICLE_BASE_URL` | No | `https://galaxy.maropost.com` | Base URL for "Open Live Article" links (e.g. your help center origin). |

Example `.env` or shell:

```bash
SEARCH_SOURCE=api
SEARCH_API_BASE_URL=https://your-article-api.example.com
SEARCH_API_KEY=your-secret-token
# Optional: if your API uses different paths
# SEARCH_API_SEARCH_PATH=/v2/search
# SEARCH_API_ARTICLE_PATH=/v2/articles/:id
```

## 2. When `SEARCH_SOURCE=api`

- **Search**  
  Backend calls:  
  `GET {SEARCH_API_BASE_URL}{SEARCH_API_SEARCH_PATH}?q=...&product=...&navigationPath=...&limit=...&offset=...`  
  and maps the response to the format the frontend expects.

- **Article by ID**  
  Backend calls:  
  `GET {SEARCH_API_BASE_URL}{SEARCH_API_ARTICLE_PATH}` with `:id` replaced by the article ID,  
  and maps the response to the normalized article format (including `articleUrl` when available).

- **Local index**  
  The local file-based index is **not** built or used for search/article when `SEARCH_SOURCE=api`.  
  `/api/reindex` still runs but only affects the local index (not used in API mode).

## 3. Expected API response shapes

The adapter tries to work with common field names. Your API can use slightly different names; the client maps several variants.

### Search response

Your endpoint should return JSON in one of these forms:

- `{ "total": number, "hits": [ ... ] }`
- `{ "count": number, "results": [ ... ] }`

Each item in the array can use any of these field names (first found is used):

| Our field | Possible API fields |
|-----------|----------------------|
| id | `id`, `articleId`, `article_id` |
| title | `title`, `name` |
| snippet | `snippet`, `excerpt`, `description`, `body` |
| url | `articleUrl`, `article_url`, `url`, `link` |
| product | `product` |
| lastUpdated | `lastUpdated`, `last_updated`, `updatedAt`, `updated_at` |
| tags | `tags` (array of strings) |

Other fields (`score`, `sectionAnchorId`, `feature`, `slug`) are optional and mapped if present.

### Article-by-ID response

Return a single JSON object. The adapter looks for:

| Our field | Possible API fields |
|-----------|----------------------|
| id | `id`, `articleId` |
| title | `title`, `name` |
| bodyPlain | `bodyPlain`, `body_plain`, `body`, `content` |
| slug | `slug` |
| articleUrl / url | `articleUrl`, `url` |
| lastUpdated | `lastUpdated`, etc. |
| sections | `sections`, `body_sections` – array of `{ anchorId, headingText, level, contentPlain }` (or `heading`, `content`) |
| headings | `headings` – array of `{ level, text, anchorId }` |
| metadata | `metadata`, or top-level `product`, `feature`, `tags` |

If your API uses different names, you can extend the mapper in `backend/src/api/articleSearchApi.ts` (e.g. add more entries in the `mapHit` / `mapArticle` field arrays).

## 4. Using your own backend as the “live” API

If you want to keep using this app’s backend but have it **read from an API** instead of files:

1. Run a separate service (or another instance) that exposes:
   - `GET /api/search?q=&product=&navigationPath=&limit=&offset=`
   - `GET /api/articles/:id`
2. Point this app’s backend at that service:

   ```bash
   SEARCH_SOURCE=api
   SEARCH_API_BASE_URL=http://localhost:5000   # or your other service URL
   ```

3. Ensure that other service’s responses match (or can be mapped by) the shapes above.

## 5. Quick test (API mode)

```bash
cd backend
export SEARCH_SOURCE=api
export SEARCH_API_BASE_URL=https://your-api.com
npm run dev
```

Then run a search from the frontend; the backend will proxy to your API and return the mapped results.
