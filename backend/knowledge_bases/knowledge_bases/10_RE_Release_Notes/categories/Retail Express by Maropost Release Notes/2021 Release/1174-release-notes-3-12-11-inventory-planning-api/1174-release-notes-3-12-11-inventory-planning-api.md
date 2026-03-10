---
title: "Release Notes - 3.12.11 - Inventory Planning API"
articleID: 1174
category: "2021 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-07-09
---

# Release Notes - 3.12.11 - Inventory Planning API

# Release Notes - 3.12.11 - Inventory Planning API

**Release Date:** 13th January 2021

In this release we've added two new fields to the "GetProductsDetailed" method and will be deprecating/retiring an older field.

### GetProductsDetailed - New fields

The new fields are as follows:

|  |  |
| --- | --- |
| **Field Name** | **Details** |
| IsDisabled | Indicates whether a product is marked as "Disabled"  mceclip2 (62).png |
| PreventDisabling | Indicates if the product has the "Prevent Disabling" option enabled (used to control whether stock is disabled in web store integrations once they're out of stock)  mceclip1 - 2023-07-09T135042.868.png |

### GetProductsDetailed - Deprecated Fields

The field "**DisableProduct**" was used to indicate the "Prevent Disabling" setting within Retail Express and not used to control whether the product was disabled, causing a bit of confusion.

To improve the API we have introduced two new fields as per above.

**Important:** The field "DisableProduct" has been deprecated but is currently fully functional. We recommend updating your API integrations to utilise the two new fields.