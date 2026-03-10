# Step-by-step: Vanilla (Maropost Community) integration

Your articles are hosted on [Vanilla](https://maropost.vanillastaging.com/) (Maropost Community). This guide gets the app searching **live** articles via the Vanilla API and opening the live URL in the same window.

---

## Step 1: Get an API access token from Vanilla

1. Log in to your Vanilla community: **https://maropost.vanillastaging.com/**
2. Open your **profile** (avatar or username).
3. Go to **Preferences** or **API / Access tokens** (exact label depends on your Vanilla setup).
4. Create a **new access token** (sometimes called “Personal access token” or “API token”).
   - If you don’t see this, ask your Vanilla admin to enable API access and token creation for your user.
5. **Copy the token** and store it somewhere safe (you’ll use it in Step 3).  
   - It’s like: `abc123...` (long string).  
   - Vanilla uses **Bearer** tokens: the app will send it as `Authorization: Bearer <your_token>`.

**References:**  
- [How to use the API (authorization and POST) — Vanilla Forums](https://open.vanillaforums.com/discussion/31709/how-to-use-the-api-authorization-and-post)  
- [How do you issue an access token? (API v2)](https://open.vanillaforums.com/discussion/36357/how-do-you-issue-an-access-token-api-v2)

---

## Step 2: Confirm Vanilla API base URL

Your community base URL is:

- **https://maropost.vanillastaging.com**

No trailing slash. The app will call:

- **Search:** `GET https://maropost.vanillastaging.com/api/v2/search?query=...&limit=...&page=...`
- **Single article:** `GET https://maropost.vanillastaging.com/api/v2/discussions/{id}`

If your community lives at a different URL, use that as the base in Step 3.

---

## Step 3: Configure the Article Search backend

Set these **environment variables** for the backend (create a `.env` in the `backend` folder or set them in your shell / hosting):

```bash
# Use Vanilla as the search source
SEARCH_SOURCE=vanilla

# Vanilla community base URL (no trailing slash)
SEARCH_API_BASE_URL=https://maropost.vanillastaging.com

# The access token you copied in Step 1
SEARCH_API_KEY=paste_your_access_token_here
```

Optional:

```bash
# Used for "Open Live Article" links (defaults to galaxy.maropost.com if not set)
ARTICLE_BASE_URL=https://maropost.vanillastaging.com
```

**Security:**  
- Do **not** commit the token to git.  
- Add `backend/.env` to `.gitignore` if you store the token there.

---

## Step 4: Start the backend and test

1. From the project root:
   ```bash
   cd backend
   npm run dev
   ```
2. You should see: `Article search backend listening on port 4000 (local network)`.
3. Run a search from the frontend (e.g. select “All” and click Search, or type a keyword).  
   - Results should come from **Vanilla** (live articles), not from local JSON files.

If you get **502** or “Vanilla search request failed”:

- Check that `SEARCH_API_BASE_URL` and `SEARCH_API_KEY` are set correctly.
- Confirm the token is valid (not expired, and has permission to use the API).
- Some Vanilla setups use **query parameter** auth: `?access_token=...` instead of the `Authorization` header. If your admin says so, we can switch the client to use that.

---

## Step 5: Open live article in the same window

The app has an **“Open Live Article”** link that opens the Vanilla article URL. By default it opens in a **new tab**. If your Vanilla staging site allows embedding (no `X-Frame-Options: DENY`), you can **also** show the live article inside the Article Body panel:

- In the Article Body header, use **“Open Live Article”** to load the live URL in the right-hand panel (iframe).
- Use **“Revert to Article Body”** to go back to the in-app article view.

If the staging site blocks iframes, the link will still open in a new tab. Production (e.g. galaxy.maropost.com) may have different rules; you can test both.

---

## Summary

| What you do | What the app does |
|-------------|-------------------|
| Set `SEARCH_SOURCE=vanilla` | Backend uses Vanilla API for search and article-by-ID. |
| Set `SEARCH_API_BASE_URL=https://maropost.vanillastaging.com` | All API calls go to your community. |
| Set `SEARCH_API_KEY=<token>` | Sends `Authorization: Bearer <token>` on every request. |
| Click “Open Live Article” | Opens the Vanilla article URL (in-panel if allowed, else new tab). |

Once the token is in place and the env vars are set, you can run searches on **live** articles and open them in the same window when the site allows it.
