---
title: "Release Notes 3.12.0 - Special Orders are here!"
articleID: 963
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-12-01
---

# Release Notes 3.12.0 - Special Orders are here!

# Release Notes 3.12.0 - Special Orders are here!

**Release Version:** 3.12.0 | **Release Date:** 01-06-20

In this release we're excited to announce the new Special Orders feature - selling products sourced directly from your suppliers has never been easier! Retail Express will automatically create Purchase Orders and Transfers, and link the supply chain from the customer sale to ordering/receiving and finally dispatching to the customer.

On top of that, we've also introduced an efficient way to consolidate  items on multiple different Purchase Orders from the same supplier into a single order. Within POS, we've implemented a new "Customer Contacted" flag and improved the ability to view all open customer orders, plus released **12** Improvements and Resolutions.

Please note some of the changes have impacted some of our API integrations, please refer to the [API Release Notes](https://galaxy.maropost.com/s/article/Release-Notes-3-12-0-API-Update) for detailed information.

In this release:

- [Special Orders](#special-orders)
- [Consolidate Purchase Order items onto a single PO](#consolidate-po)
- [New "Customer Contacted" flag](#customer-contacted)
- [Customer "Open Orders" details in POS](#customer-pos)
- [API updates](https://galaxy.maropost.com/s/article/Release-Notes-3-12-0-API-Update) (opens in a new window)
- [Improvements and Resolutions](#improvements)

## []()Special Orders

Ordering stock from your supplier has never been easier or better managed! Track your supply chain from sale, to Purchase Order, to Transfer (if required) and finally, dispatching the stock to your customer!

[  Watch the Video Training series now!](#so-video)

**At a glance:**

- Creating a sale in POS with "Special Order items" automatically creates a PO
- When the PO is received a Transfer is created automatically (if required)
- The sale, PO and Transfers are all linked together for complete supply chain tracking
- Use the "Special Orders" report to view progress of all Special Orders
- Exclusive rules for Special Orders including Minimum Deposit and Order conditions
- Filters for Special Order items added to multiple reports within Retail Express

When creating a sale at POS you can flag products as Special Order items by selecting the "Special Order" type (available for single lines or bulk edit). This can be set for all sale types excluding Cash & Carry.

![mceclip14 (4).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppeILEAY.jpg)
Special Order items can have their own Minimum Deposit Rules and Terms and Conditions of sale, or retain the default settings if preferred.

When a sale containing Special Order items is finalised a Purchase Order will be created within Back Office. Users will be able to review the Purchase Order, add items or [consolidate items](#consolidate-po) from existing Incomplete POs, and place the PO on-order.

When the PO is received, stock will either be ready for dispatch to the customer, or if the Sourcing and Fulfilment Outlets are different, automatically added to a new Transfer to transport the stock to the Fulfilment Outlet.

The newly redesigned Fulfilment tab in POS makes it easier than ever to keep track of the progression of the order.

![mceclip15 (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdg1EAA.jpg)
The Special Orders report provides an overview of your Special Orders including links to open Purchase Orders, Transfers and Customer Sales. Extensive filter options allows you to quickly find the Special Orders you require, including the PO status, Fulfilment Status, and Fulfilment Outlet.

![mceclip17.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppeIaEAI.jpg)
Multiple reports and other features in Retail Express have been updated to take advantage of the new functionality, including:

- Special Orders Report
- Sales Report
- Fulfilment Report
- Stock Replenishment
- Transfer Manager
- Purchase Order Manager
- and more

[▶ Embedded Video](https://vimeo.com/showcase/7153656/embed)

#### **Related articles**

- [Special Order Overview](https://galaxy.maropost.com/s/article/Special-Orders-Special-Orders-Overview)
- [Special Orders - Selling Special Order Items](https://galaxy.maropost.com/s/article/Special-Orders-Selling-Special-Order-Items)
- [Special Orders - Process a Purchase Order](https://galaxy.maropost.com/s/article/Special-Orders-Process-a-Purchase-Order)
- [Special Orders - Receive a Purchase Order](https://galaxy.maropost.com/s/article/Special-Orders-Receive-a-Purchase-Order)
- [Special Orders - Process a Transfer](https://galaxy.maropost.com/s/article/Special-Orders-Processing-Transfers)
- [Special Orders - Fulfilling Sales](https://galaxy.maropost.com/s/article/Special-Orders-Fulfilling-Sales)
- [Special Orders - Special Orders Report](https://galaxy.maropost.com/s/article/Special-Orders-Special-Orders-Report)

## []()Consolidate Purchase Order items onto a single PO

Save time and paperwork with the new "Consolidate Items" tab. Instead of sending multiple orders to your suppliers, quickly combine products to a single order!

Using the Consolidate Items tab, easily see products on other Purchase Orders for the same supplier and Outlet and add the items to the existing order.

![mceclip2 (66).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppeIfEAI.jpg)
The new tab will be visible when editing an Incomplete Purchase Order. Simply tick the appropriate items, and click **Move to current PO**.

- Products will be added to the product list on the Edit Products tab
- If the product already exists on the order the quantity will be increased
- Any linked Transfers or Orders will be linked to the new order instead

> **Note:** Products will be updated to use the current Supplier Ex price. If custom prices have been added on the Purchase Order these will need to be amended once the product has been consolidated.

## []()Customer Contacted Flag

Track whether you have contacted your customer with the new Customer Contact column on the Fulfilment tab.

> **Note:** This feature is available for all fulfilment methods other than Cash & Carry, and available to edit after the sale has been finalised.

The Customer Contacted flag can be bulk edited for all lines in the order by clicking the icon in the header. Simply tick the box when the customer has been contacted, and click the pencil icon to add notes.

![mceclip0 - 2023-07-09T162229.823.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppeIpEAI.jpg)

> **Note:** Once the stock has been fulfilled, the box will be disabled (you won't be able to tick/untick the box or view historical comments; to review historical comments we recommend using Private Order Comments).

This checkbox can also be viewed within the following reports to assist with order fulfilment and tracking:

- Fulfilment Report
- Special Orders report

## []()Customer "Open Order" details in POS

The Customer tab in POS will now show all open customer orders i.e. action is required. This typically includes laybys, or when payment is still required.

![mceclip7 (9).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppeIzEAI.jpg)
Clicking the tile, you'll be able to see an updated display containing 4 tabs:

1. Dashboard
2. Open Orders (items to be fulfilled or sales awaiting payment)
3. Special Orders
4. Order History Search

![mceclip8 (4).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdaeEAA.jpg)

## []()Improvements:

The following improvements have been made to Retail Express in this release:

|  |  |
| --- | --- |
| **Section** | **Details** |
| POS - Layby/Fulfil | The Layby/Fulfil button has been replaced with a pencil icon; the functionality remains the same, and allows the user to bulk edit all lines on the sale.  Before and after: ![mceclip0 - 2023-07-09T162259.636.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppeJHEAY.jpg) |
| POS - Fulfilment tab | The POS Fulfilment Tab has been restructured a little differently to allow for a more streamlined display with useful information. Before: ![mceclip6 (9).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppe8qEAA.jpg) After: ![mceclip13 (2).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppeKbEAI.jpg) The changes include:  - Size/colour information now displayed underneath the product description - Stock alert icons relocated - Dispatch renamed to Fulfil Now - Partial Dispatch renamed to Partial Fulfil |
| Stock Value vs Sales Report | The "Origin of Sale" filter has been replaced with a new "Order Source" filter. ![mceclip12 (4).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppeLAEAY.jpg)  > **Note:** Webstore is a legacy order source, integrations using the Webstore/eCommerce API should select WebService. |
| Purchase Orders | The Outlet on a Purchase Order can now be changed while the PO is in an Incomplete State.  > **Note:** This feature is also available for Purchase Orders updated via the Inventory Planning API - refer to the Release Notes for more information. |
| Products - Auto Generate PO | The Auto Generate PO settings, found in the Product Edit screen, have been renamed to Auto Replenishment and separated into their own "Replenishment" section: Before: ![mceclip3 (39).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdrGEAQ.jpg) After:  ![mceclip4 (27).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppeLKEAY.jpg) These settings will trigger Retail Express to automatically create Purchase Orders based on the preference i.e. when the product is sold, when it becomes out of stock, or not at all. |
| Purchase Orders | The "Special Order" tickbox on Purchase Orders has been removed (due to the release of the new Special Order functionality). ![mceclip5 (15).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdtTEAQ.jpg) |
| Transfer Variance Manager | The "Created" column has been renamed to "Transfer Created" to clearly define the data. A new "Variance Created" column has also been added to display the date of the Variance. ![mceclip11 (3).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppeLZEAY.jpg) |

## Resolutions

|  |  |
| --- | --- |
| **Section** | **Details** |
| Mass Upload | Product discounts are now validated correctly using the date uploaded for Discount Pricing in the Mass Upload (please note time settings are disregarded). |
| Customers | When viewing the Customer List (CRM > Customers) and sorting by Total Spend, the sort order now displays correctly in a numerical order |
| Purchase Orders | Pressing the Enter button while creating a PO the Purchase Order will no longer place the PO On-Order |
| Purchase Orders | Adding a Product with a 0 quantity and pressing Enter will now display a warning to update the quantity |
| Purchase Orders | Editing a product line to update the quantity and pressing Enter updates the quantity. |