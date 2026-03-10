---
title: "Frontend Components Integration Overview"
articleID: 2148
category: "Merchandising Cloud Integrations > Advanced Integration"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Frontend Components Integration Overview

> Some of the Frontend Components are available only for the React environment.

## Frontend Components Integration Overview

Overall steps for the Frontend Components integration:

- generate feed (or use platform integrations that already exist)
- create Maropost Merchandising Cloud (formerly Findify) account
- choose which capabilities you want to use: Search, Autocomplete, Collections, Recommendations
- integrate Analytics
-- all events from [Feedback API](https://developers.findify.io/reference/feedback-api)
- validate with our team that we get all events properly
- go live

## Generate Feed

You can refer to [Custom](https://galaxy.maropost.com/kb/articles/59-custom-merchantjs-integration-steps) integration for feed generation or utilize one of the existing integrations that we have: [Shopify](https://galaxy.maropost.com/kb/articles/64-remove-app-from-shopify) , [Neto](https://galaxy.maropost.com/kb/articles/518-integrating-search-results-in-neto) , [BigCommerce](https://galaxy.maropost.com/kb/articles/1994-generating-bigcommerce-credentials).

## Integrate Analytics

Analytics are an integral part of Merchandising Cloud that allow our ML and Personalization algorithms to operate. It is paramount that you integrate all the analytics events properly.

Some of the events rely on the request-id property that you will receive after performing a request to our backend. This helps us bind the response that we have sent with the actions that user has performed (e.g. clicked on a product in the search results).

Some of the events play a lesser role in the personalization (e.g. click-redirect event that happens when you click on a search suggestion that leads to a redirect), but it's still good to have them as in the future we might rely on such events for new features.

## Frontend Components Overview

You can check out the [Architecture Overview](https://galaxy.maropost.com/kb/articles/1987-architecture-overview) of our existing Frontend Components. You can use either some or all of them in your development, all source code is available on [Github](https://github.com/findify/findify-js).