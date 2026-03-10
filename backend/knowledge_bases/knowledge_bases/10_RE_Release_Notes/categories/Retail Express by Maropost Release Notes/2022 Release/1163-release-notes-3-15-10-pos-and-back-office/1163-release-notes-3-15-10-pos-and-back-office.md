---
title: "Release Notes 3.15.10 - POS and Back Office"
articleID: 1163
category: "2022 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-07-09
---

# Release Notes 3.15.10 - POS and Back Office

# Release Notes 3.15.10 - POS and Back Office

This release will become available to all users by 27th September 2022.

In this update, we've released an exciting new feature giving you the ability to allocate a customer sale to a specific Purchase Order, plus a stack of improvements and resolutions. Read on for all the details.

---

## New Features

### Special Order Purchase Order Allocation

Special Order sales can now be allocated directly to an existing Purchase Order, instead of creating a new one or using the default automated sourcing logic in Retail Express available for standard sales.

![mceclip2 (69).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdS7EAI.jpg)

The new "Special Order PO Allocation" window lets you select between creating a new Purchase Order, or selecting from an existing one. Existing Purchase Orders will include useful information like the ETA date and available order quantity so you can make the best choice for your business and your customer.

For example, if the customer is happy to wait you can allocate their order to a PO at a later date, freeing up stock arriving earlier for other customers.

Take a look at the [Special Orders Purchase Order Allocation Announcement](https://galaxy.maropost.com/s/article/Announcing-Special-Orders-Purchase-Orders-Allocation) to read more and start allocating your Special Orders.

---

## Improvements

* After deleting a product from a sale in POS the cursor will automatically return to the scan field to enable products to be scanned/added to the sale
* We've updated the Tooltip for the Order from Source option on the Stock Replenishment via Transfers feature. The Tooltip now explains the "Available Only" option will only create Transfers with as much of the suggested quantity is available at the Source outlet (to prevent the Available stock from going into a negative)  
  ![mceclip0 - 2023-07-09T180810.120.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppf5ZEAQ.jpg)
* We've improved the Pagination performance of the Fulfilment Report, where there are results spread over multiple pages:  
  ![mceclip1 - 2023-07-09T180815.680.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppf9oEAA.jpg)
* Product Quick Create sell prices calculated using the Markup % now includes GST

---

## Resolutions

* Modified the behaviour of the "Create Transfers" and "Save New Transfer" buttons on the Create a Transfer window to prevent users from creating duplicate Transfers
* Product Quantities are no longer reset back to 1 on Blank refunds when adding/deleting items
* Deleting the Direct Costs (Ex Tax) value on the Edit Product screen will set the Cost of Goods Sold (Ex Tax) to $0.00 instead of an empty field.
* Duplicate Purchase Orders are no longer created when cancelling the original Purchase Order linked to a fulfilled Special Order item and reopening the sale in POS.