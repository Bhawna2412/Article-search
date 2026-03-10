# Runtime config

Edit **config.json** and set **apiOrigin** to your backend URL (e.g. your Railway public URL) so the frontend can call the search API.

Example:
```json
{
  "apiOrigin": "https://article-search-production-xxxx.up.railway.app"
}
```
No trailing slash. Save, commit, and redeploy the frontend to Vercel.
