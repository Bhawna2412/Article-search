---
title: "Release Notes 3.12.2 - POS and Back Office"
articleID: 1169
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-07-09
---

# Release Notes 3.12.2 - POS and Back Office

# Release Notes 3.12.2 - POS and Back Office

**Release Date:** 8th July 2020

In this release we've introduced a new addition to the Replenishment settings in Retail Express, enabling users to automatically generate Purchase Orders for products when there's not enough to cover the full sale quantity in POS. We've also made 7 improvements and resolutions.

**Note:**This release also contains updates to the Inventory Planning and eCommerce APIs, click here to view the [Release Notes](https://galaxy.maropost.com/s/article/Release-Notes-3-12-2-API-Update).

  
  

---

## Auto Replenish via PO when insufficient stock

In this release we've added the ability to automatically create a Purchase Order when there is insufficient stock to cover a sale in POS - making your ordering process easier and more efficient than ever!

![mceclip0 - 2023-07-09T163205.830.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdd6EAA.jpg)

When calculating the total stock accessible Retail Express will review how many products are:

* Available i.e. currently in the Outlet available to be sold
* On-Order i.e. stock already ordered from the Supplier and en-route

If there is not enough stock Retail Express will create an Incomplete Purchase Order for the total sale quantity (not just the difference) e.g. if 5 products are added to the sale and there is currently 1 Available and 3 On Order (a total of 4) a PO will be created for 5 products.

Access the new settings by [editing any of your products](https://galaxy.maropost.com/s/article/Create-and-Edit-Products) and referring to the new "Replenishment" section.

[Back to top](#top)

---

## Improvements

|  |  |
| --- | --- |
| Shopify | The status window has been updated when mapping products between Retail Express and Shopify. The Progress Bar will now display the number of products that have been processed.  mceclip0 - 2023-07-09T163212.081.png |
| Hardware Utility | The Hardware Utility now uses the latest version of Linkly (formerly called "PC-EFTPOS Australia") if required during the installation process. |

### 

## Resolutions

|  |  |
| --- | --- |
| Xero Integration | EFTPOS Payments added on a different date to when the sale is Finalised are still uploaded to Xero |
| POS | Out of stock alerts for products display the current Available quantity of the product (and will not include the stock on the sale in the calculation) |
| Transfers - Pick | Added the ability to type in a Transfer ID and press Enter to open the Transfer |
| Transfers - Pick | Results are now displayed to the full height of the screen (with a scroll bar if there are additional results past the current view) |
| Products - Inventory Allocation | Allocation quantities is now correct for layby stock sourced from other Outlets received via Transfer, or when receiving an additional quantity on a Special Order Purchase Order. |

[Back to top](#top)

Want more information? [View all Release Notes](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Fcategories%2F115000210393-Release-Notes)