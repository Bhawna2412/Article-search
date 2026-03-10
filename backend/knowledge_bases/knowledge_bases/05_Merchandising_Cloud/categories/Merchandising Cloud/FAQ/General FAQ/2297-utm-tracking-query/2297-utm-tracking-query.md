---
title: "UTM tracking query"
articleID: 2297
category: "FAQ > General FAQ"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-09-18
---

# UTM tracking query

📘 **Issue**:

Merchandising Cloud's script replaces UTM query from URL on smart collection pages and search results.

Don't worry, most analytics platforms use the original URL instead of the replaced one. This means all provided data will be sent to its recipient.

To make sure:

- Check for your analytics script position in HTML - it should be placed before our script.
- Open "developer tools" in your browser and check the request that was sent to the analytics platform. The original URL with the correct query should be present in the "query string parameters" section.

![83d72127-2770-4535-827c-d0a4c1b6a9a7.jpeg](https://us.v-cdn.net/6038474/uploads/2Y7QKQZHL9FW/83d72127-2770-4535-827c-d0a4c1b6a9a7.jpeg)

> **Manual Script**
> In case you are implementing your own analytics, or trying to access the original URL inside Google Tag Manager:
> Store the initial URL on the page window.initialUrl = window.location.href`
> Then use this value inside your script