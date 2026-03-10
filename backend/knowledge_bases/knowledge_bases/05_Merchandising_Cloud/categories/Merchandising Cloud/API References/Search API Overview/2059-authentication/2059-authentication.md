---
title: "Authentication"
articleID: 2059
category: "API References > Search API Overview"
knowledgeBase: "Merchandising Cloud"
---

# Authentication

API authentication uses a simple key-based mechanism where you provide your API key via an X-Key header in requests, enabling secure access to search, autocomplete, and recommendation features. This authentication approach helps ensure your API calls are authorized while keeping integration straightforward for developers.

You can obtain your API key through the onboarding process after providing a valid product feed, or use the test API key to explore capabilities with the demo store. This helps ensure you can quickly test and validate API functionality before implementing it in your production environment.

We use API Key authentication mechanism for all routes.

You simply provide a header `X-Key` with the value of the API key that you have.

## Shell

```bash
--request POST \ \
--url https://api-v3.findify.io/v3/autocomplete \ \
--header "X-Key: 2e963f3e-38bd-4c00-9636-c00e48945eb7" \ \
--header "Content-Type: application/json" \ \
--data '{"user":{"lang":["en-US","en-GB","no"],"uid":"test1","sid":"ssid","email":"test@test .com","ip":"192.168.0.1","ua":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"},"q":"t","t_client":1484741395471,"suggestion_limit":5,"item_limit":3,"log":false}'
```

> **Note:** **How to get an API key?
> ** To get an API key you need to register with our service and finish the onboarding process (this includes providing a valid feed). If you just want to check out our capabilities, you can use a test API key `2e963f3e-38bd-4c00-9636-c00e48945eb7` that is connected to our demo store: [http://findify-demo-store.myshopify.com](http://findify-demo-store.myshopify.com/)