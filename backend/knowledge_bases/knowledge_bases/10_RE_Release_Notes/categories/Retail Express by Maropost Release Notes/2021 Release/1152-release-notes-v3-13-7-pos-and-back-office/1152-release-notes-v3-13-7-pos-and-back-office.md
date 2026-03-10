---
title: "Release Notes v3.13.7 - POS and Back Office"
articleID: 1152
category: "2021 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-07-09
---

# Release Notes v3.13.7 - POS and Back Office

# Release Notes v3.13.7 - POS and Back Office

**Release Date:** 22nd June 2021

In this update we've made several improvements and resolutions as part of our commitment to continuous evolution and improvement to Retail Express.

Also included in this update: [Accounting integrations](https://galaxy.maropost.com/s/article/Release-Notes-v3-13-7-Accounting-Integration) and [API updates](https://galaxy.maropost.com/s/article/Release-Notes-v3-13-7-API-Change)

MYOB users, we have an exciting update coming - an integration with MYOB Account Right Cloud! We look forward to announcing the release soon, but in the meantime take a look at the [Product Roadmap](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fportal.productboard.com%2Fxjc5eqgr3wpp4lregjvharq3) for a preview of all upcoming features!

**Have your say:**[Complete the 5min survey](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.surveymonkey.com%2Fr%2FL2M2XT7) to let us know what you think about new Purchasing & Stock Receipt features currently in design!

  
  

---

### Improvements

* Creating a sale in POS is now faster thanks to the improved responsiveness of the PLU Scan field (the PLU scan field now uses a Prefix Search method instead of Partial Text Search - see below for detailed information)  
  ![mceclip0 - 2023-07-09T185711.550.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppelsEAA.jpg)
* Added the ability to configure [Payment Types](https://galaxy.maropost.com/s/article/Configuring-Payment-Types) to be synchronised with Accounting Integrations as a consolidated daily total or individual payments  
  ![mceclip1 - 2023-07-09T185715.618.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfb4EAA.jpg)
* Performance improvements to [Item Sales Report](https://galaxy.maropost.com/s/article/Item-Sales-Report)
* The [POE Report](https://galaxy.maropost.com/s/article/Using-the-PO-Error-POE-Manager-to-manage-stock-discrepancies) has been updated and now includes pagination (results can be viewed with 10, 20 or 50 results per page)
* Viewing a Purchase Order will now list the items in the order they were added to the Purchase Order
* The [Purchasing Cash Flow](https://galaxy.maropost.com/s/article/Purchasing-Cash-Flow) export now includes the Supplier Invoice Number
* Exporting the [Customer Manager](https://galaxy.maropost.com/s/article/Customer-Search) search results now includes the Total Spend column
* [Special Order Purchase Orders](https://galaxy.maropost.com/s/article/Special-Orders-Process-a-Purchase-Order) now include default Supplier and Outlet Comments

[Back to top](#top)

---

### Resolutions

* Resolved an issue with the [Style Performance Report](https://galaxy.maropost.com/s/article/Style-Performance-Report) so the report now only displays transactions within the Date and time range selected (previously it included all transactions made on the Sales Date To date, regardless of time)
* We have made several updates to the [Transfers](https://galaxy.maropost.com/s/article/Create-a-Transfer-in-POS) feature:
  + Creating a Transfer now displays the Outlets selected in the Transfer To filter
  + Restored the ability to search for products using sections of the product name (using Partial Text Search as per the example above)
  + Product costs can no longer be edited after the Transfer has been dispatched
* Adding products to a package updates the Outlet-specific price
* Resolved an issue where the Adjustment and Summary Stocktake Reports didn't match due to a difference in the Stock on Hand value from when the Stocktake Excel file was created vs when the Stocktake file was uploaded (caused by [trading while performing a stocktake](https://galaxy.maropost.com/s/article/Trading-while-performing-a-Stocktake))
* POS Survey names (Segment Options) are now required to be unique
* Resolved an issue where newsletters were unable to be created due to large customer names
* Resolved an issue where Purchase Order fields were unable to be set back to blank values e.g. Shipping Status

[Back to top](#top)

---

### Understanding Prefix vs Partial Text Search

When entering information in POS (either by scanning or manually typing in the details) the PLU Scan field uses the Prefix Search method, while the Search (used for descriptions and more) uses the Partial Text Search method.

|  |  |
| --- | --- |
| **Prefix Search** | **Partial Text Search** |
| Searches for an exact match **from the start of the code** | Searches for an exact match **anywhere in the contents** - results in a larger number of matches compared with Prefix Search |
| e.g. searching for 1240 would return the following results:  **1240**01, **1240**02, **1240**03 etc | e.g. searching for 1240 would return the following results  **1240**01, **1240**02, **1240**03, 587**1240**, 387**1240**387 |

Want more? [View all Release Notes](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Fcategories%2F115000210393)