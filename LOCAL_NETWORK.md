# Running the app on your local network

Use this so you can open the app from other devices (phone, tablet, another computer) on the same Wi‑Fi.

## 1. Start the backend

```bash
cd backend
npm run dev
```

Leave this terminal open. The API runs on port **4000** and is bound to all interfaces.

## 2. Start the frontend with network access

```bash
cd frontend
npm run dev:network
```

This runs Vite with `--host` so the dev server is reachable on your LAN.

## 3. Open the app from another device

In the frontend terminal, Vite prints something like:

- **Local:** http://localhost:5173/
- **Network:** http://192.168.x.x:5173/

On another device on the same network, open the **Network** URL in the browser (e.g. `http://192.168.1.3:5173/`). API requests are proxied through the frontend server to the backend, so no extra config is needed.

## Notes

- Your computer’s IP (e.g. `192.168.1.3`) can change if you reconnect to Wi‑Fi or restart the router. If the Network URL stops working, run `npm run dev:network` again and use the new URL.
- If you only need to use the app on this machine, run `npm run dev` in the frontend folder instead; the app will be at http://localhost:5173/
