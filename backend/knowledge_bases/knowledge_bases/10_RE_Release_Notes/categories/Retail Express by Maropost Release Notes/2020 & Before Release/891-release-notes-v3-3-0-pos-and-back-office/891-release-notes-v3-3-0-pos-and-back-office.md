---
title: "Release Notes v3.3.0 - POS and Back Office"
articleID: 891
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-12-01
---

# Release Notes v3.3.0 - POS and Back Office

# Release Notes v3.3.0 - POS and Back Office

**Release Date:** 27-03-2019 **| Version Note:** v3.3.0

In this release we have extended the Shopify integration to include Gift Vouchers synchronisation, making the customer shopping experience even more seamless. We've also added new options to the Stock Replenishment via Transfer feature to control inventory, updated the Inventory Planning API and made other improvements and fixes.

Due to Shopify limitations the Gift Voucher integration is **only available to Shopify Plus **customers (the required Shopify Gift Card API enabling Retail Express to communicate to Shopify is not available on the regular plan). Please refer to the [Shopify Plus](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.shopify.com.au%2Fplus%2Fupgrade) upgrade site for more information.

## New Feature - Shopify Gift Voucher integration

Gift Cards/Vouchers are now available to be synchronised between Retail Express and Shopify, making the shopping experience even more seamless!

Vouchers are first created as products in Retail Express and synchronised to the online store (referred to as a "Gift Card" in Shopify). Once a Gift Card has been purchased online the order synchronises to Retail Express and automatically creates a Gift Voucher. This voucher code is synchronised back to Shopify.

![shopify_giftcard_cart (2).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppg8hEAA.jpg)
Vouchers can be redeemed either in-store or online using the same code. Both Retail Express and Shopify will be updated with the remaining balance, or if used in full, close the voucher so that no further redemption is available.

To access this integration you will need purchase a [Retail Express Gift Card add-on](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fzfrmz.com%2FkUnQOQtFgSW2awRM0J4e) license.

At the time of release, due to Shopify limitations this feature was only available to Shopify Plus customers. This was superseded by [version 3.13.10,](https://galaxy.maropost.com/s/article/Release-Notes-v3-13-10-Integration) making the Integrated Gift Voucher Add-On available for all Shopify plans that supported Gift Cards

To view further information about Gift Vouchers and related sales, use the following reports within Retail Express:

- [Voucher Creation Report](https://galaxy.maropost.com/s/article/Reports-Voucher-Creation-Report)
- [Voucher Creation Summary](https://galaxy.maropost.com/s/article/Reports-Voucher-Creation-Summary)
- [Voucher Redemption Report](https://galaxy.maropost.com/s/article/Voucher-Redemption-Report)
- [Income Report](https://galaxy.maropost.com/s/article/Income-Report) (only relevant to where vouchers have been purchased i.e. payment received in exchange for a voucher)

> **Note:** Use the "Shopify Integration" sales person to filter by vouchers purchased online only.

For more information on the Gift Voucher integration, please see the [Shopify - Gift Voucher Integration](https://galaxy.maropost.com/s/article/Integrated-Gift-Vouchers) article.

## Stock Replenishment via Transfer Source Outlet negative quantities

With the current functionality when creating Transfers using Stock Replenishment, the suggested stock reorder quantity may recommend a quantity larger than what's available at the Source outlet e.g 15 units requested but only 5 Available. In these cases the transfer would be created for only 5 units.

Using the new Order from Source feature in this release, users can specify whether the Transfer will use Available Only stock (existing functionality), or if the Full Reorder Quantity is to be used (reducing the stock at the Source Outlet to a negative value). Using the example above, the transfer would be created for the full 15 units.

![stockreplenishment_orderfromsource.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppg8rEAA.jpg)
The new **Order from Source **option is available as an option in the Stock Replenishment Via Transfers window (step 2 of the Stock Replenishment process). For more information refer to the [Stock Replenishment via Transfers](https://galaxy.maropost.com/s/article/Stock-Replenishment-via-Transfer) article.

## Stock Replenishment via Transfers Outlet Priority

Outlets can now be ordered in a priority list to determine which Outlets will have their transfer requests fulfilled when insufficient stock is available for the entire replenishment run.

![stockreplenishment_outletpriority (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppg91EAA.jpg)
A new "Replenishment" tab in the Outlet Management settings (**Settings > Locations/Outlets > Outlets**) displays a list of outlets. To rearrange the priority order:

1. Click and hold the icon in the first column
2. Drag & drop the Outlet to the new location
3. Release the mouse button

![replenishment_priority_order (1).gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppg9GEAQ.jpg)
Changes are applied instantly.

When Transfers are created, Outlets of a higher priority will have their stock fulfilled before Outlets lower in the list.

**Example:**

Source Outlet "Warehouse UM" has 100 units of product 124001 in stock. Two outlets have requested 70 units - Chapel St and Queen St Mall. As Chapel St is higher in the list, it will receive the full 70 units. Queen St Mall will receive the remaining 30.

If the Outlet has a [Minimum Replenishment Quantity](https://galaxy.maropost.com/s/article/Release-Notes-v3-2-0-POS-and-Back-Office#stock-replenishment) configured this will be factored into the Transfer. For example, if Queen St Mall had a Minimum Replenishment Quantity of 40 units, the Transfer above for 30 units would not be created (note the Minimum Replenishment Quantity is for the full Transfer quantity; if there were 10 other products included on the Transfer the transfer will be created accordingly).

> **Note:** Outlets are automatically sorted based on the order they were created in Retail Express, but can be reordered using the drag & drop method described above.

For more information refer to the [Stock Replenishment via Transfers](https://galaxy.maropost.com/s/article/Stock-Replenishment-via-Transfer) and [System Settings - Outlet Configuration](https://galaxy.maropost.com/s/article/Managing-Outlets-and-Stores) articles.

## Inventory Planning API Update

Using the **SaveProducts **method, on a success response the following fields will be returned for each product created and updated:

- Supplier SKU
- Product ID

View the [Technical Manual](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.retailexpressmedia.com%2Fdocumentation%2Fapi%2Fv2%2FRetail%2520Express%2520-%2520V2%2520Inventory%2520Planning%2520System%2520API.pdf) for detailed information.

## Improvements

Below is a list of improvements included in the latest Maintenance Release:

|  |  |
| --- | --- |
| [Customer Mass Upload](https://galaxy.maropost.com/s/article/Legacy-Customer-Mass-Upload) | Performance improvements have been made to the Customer Mass Upload feature |

## Resolutions

Below is a list of resolutions included in the latest Maintenance Release:

|  |  |
| --- | --- |
| [Offline POS](https://galaxy.maropost.com/s/article/Installing-Offline-POS) | An issue with the Receipt printing functionality with Offline POS has been resolved |
| [Offline POS](https://galaxy.maropost.com/s/article/Installing-Offline-POS) | Invoices created while in Offline mode are now synchronised correctly when the connection is restored and Online mode is resumed |
| [Franchise Connect](https://galaxy.maropost.com/s/article/Getting-Started-with-Franchise-Connect) | A minor issue related to the last synchronisation date update time has been resolved |