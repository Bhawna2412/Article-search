---
title: "Release Notes - v3.12.10 - eCom/WebStore API"
articleID: 1172
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-07-09
---

# Release Notes - v3.12.10 - eCom/WebStore API

# Release Notes - v3.12.10 - eCom/WebStore API

**Scheduled Release Date:** 11-11-2020

In this release there have been changes to the Retail Express system to utilise information sent via the API - there are no changes to the API itself. These changes apply to:

|  |  |
| --- | --- |
| **API** | **Method** |
| Webstore API | OrderCreateByChannel |
| EDS API | OrderCreateByChannel |

---

## Freight Types

When an order is created with a FreightType entry passed via the API, the [Freight Type](https://galaxy.maropost.com/s/article/Freight-Types) will be visible in Retail Express (used for filtering and the Shippit integration). If the Freight Type doesn't already exist within Retail Express, a new one will be created (if it was previously deleted, the Freight Type will become re-enabled).

![mceclip0 - 2023-07-09T161730.625.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppeEdEAI.jpg)

Previously this information was able to be passed successfully using the API, however the data wasn't visible within Retail Express.

**Please note:**If your API integration passes Freight Types with unique details for each sale (for example, Date) a new Freight Type will be created each time, potentially leading to a substantially long list.

Freight Types are now displayed for the sale within POS and the Fulfilment Report, allowing staff to filter by sales matching a specific Freight Type e.g. filter by "Express Shipping" orders so they can be fulfilled first.

For more information about Freight Types refer to the [Settings - Freight Type](https://galaxy.maropost.com/s/article/Freight-Types) article, and for more details on the Release please refer to [Release Notes - v3.12.10 - POS/Back Office](https://galaxy.maropost.com/s/article/Release-Notes-3-12-10-POS-and-Back-Offic).