---
title: "Release Notes - 3.12.11 - POS and Back Office"
articleID: 882
category: "2021 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-12-01
---

# Release Notes - 3.12.11 - POS and Back Office

# Release Notes - 3.12.11 - POS and Back Office

**Release Date: **13th January 2021

In this release we've added some exciting new timesaving features, including the ability to receive Purchase Orders faster than ever! We've also added a new Click & Collect alert in POS, plus a new POS Alerts configuration option. There's plenty more other enhancements and improvements to Back Office and POS - all detailed below.

**Please note: **This release includes an update to [existing PO functionality](#po-update) - please ensure you share this information with your staff.

Take a look at everything we have in store for you.

In this update:

- [Purchase Orders - Quick Receive Stock](#quick-receive)
- [Purchase Orders - Update to screen to create manual POs](#po-update)
- [Click and Collect alert in POS](#click-and-collect)
- [POS Web Order Alert configuration](#pos-alerts)
- [Sales Detail Export Report](#sales-detail-export)
- [Bin Locations when receiving Transfers and Purchase Orders](#bin-locations)
- [PO Detail Report - Product Attribute filters](#po-detail)
- [Inventory Planning update (opens in a new window)](https://galaxy.maropost.com/s/article/Release-Notes-3-12-11-Inventory-Planning-AP)
- [Improvements and Resolutions](#improvements)

## **New Features**

### []()Purchase Orders - Quick Receive Stock

Receiving stock has never been easier with the new "Quick Receive" feature. This major time saving feature is simple to use, and will quickly receive all stock as Available within Retail Express. All you need to do is enter a Supplier Invoice Number (optional), any additional costs, and click Receive and Make Available - that's it!

> **Note:** This feature is available when creating a new PO, or editing Incomplete, On-Order and Back-Order Purchase Orders.

![mceclip14 (3).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppctCEAQ.jpg)
**Accessing Quick Receive**

The Quick Receive feature is available when creating a new PO, or editing an existing Purchase Order. You'll find the "Quick Receive" button at the bottom of the screen. For detailed information on using the Quick Receive feature please refer to [Purchase Orders - Quick Receive a PO](https://galaxy.maropost.com/s/article/Quick-Receive-a-PO).

![mceclip16.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppcgvEAA.jpg)

### []()Update to Purchase Order "Create PO" screen

In preparation for future enhancements coming out later this year we've made an update to the screen used to create a new manual Purchase Order.

> **Important:** This is an update to existing functionality. Please ensure you share this information with your staff members that use Purchase Orders.

When you first select to create a manual PO, you will now be presented with the screen below:

![mceclip4 (25).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppd9rEAA.jpg)
On this page, you can enter:

- Outlet
- Supplier
- Supplier Invoice No (optional)

Once you click **Create**, you will be directed to the Add Products tab as per the existing functionality. No other features of Purchase Orders have been modified, and you can also click the Edit PO tab to update the Purchase Order details.

![addedproducttopo (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppd9wEAA.jpg)

### []()Click and Collect alert in POS

We've introduced a new alert in POS for Click & Collect sales, so you can identify your online customer sales quickly, ready for processing!

![mceclip0 - 2023-07-09T135309.393.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdA1EAI.jpg)
The alert will display web order sales for the current Outlet from the last 6 months, where the stock is allocated to the sale ready to be fulfilled, and the Fulfilment Method selected is "Store Pickup" i.e. Click and Collect.

> **Note:** These orders are included in the Web Order Alert sales as well e.g. 2 orders with Home Delivery and 1 with Store Pickup will display (3) Web Order Alert and (1) Click and Collect Order Alert.

When you click the alert, you'll be redirected to the POS Lookup page displaying the open Click and Collect orders.

![mceclip1 - 2023-07-09T135314.714.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppcwtEAA.jpg)
For detailed information please refer to [POS - Using POS Alerts](https://galaxy.maropost.com/s/article/POS-Alerts-on-Home-Page).

### []()POS Web Order Alert Configuration

You can now control when Order Alerts are displayed in POS! In this release we introduced a configuration option so you can select the logic behind when a Web Order Alert should be displayed.

![mceclip9 (8).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdA6EAI.jpg)
**Configuration Options:**

|  |  |
| --- | --- |
| **Orders Ready for Fulfilment (Qty Allocated > 0)** | The alert will be displayed when there are orders with stock ready to be fulfilled  > **Note:** This is the existing method used to enable the POS alert   For example, if stock is being transferred from another Outlet, the alert will only be displayed once the Transfer has been received and the stock is ready to be shipped/given to the customer. |
| **Open Orders (Qty Fulfilled < Qty Ordered)** | The alert will be displayed when there are orders where the number of products fulfilled is less than the quantity ordered by the customer. Using the example above, the alert would be displayed even before the Transfer has been received (so you're notified immediately there is a sale that needs to be fulfilled). |

To access the settings:

1. Navigate to **Settings > POS Settings > Order Alert Settings**
2. Select your preference
3. Click **Save Changes**

The changes will be applied to all Outlets in your database. You will need to [log out of POS and back in](https://galaxy.maropost.com/s/article/Log-in-and-out-of-POS) to see the changes.

### []()Sales Detail Export report

The "External Order Reference" field (used for tracking invoice/order numbers from third-party systems) is now available as a filter on the Sales Detail Export Report, as well as a column in the results.

This makes it even easier to report on your web store sales using Retail Express.

![salesdetailexport-filters.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdABEAY.jpg)
![export.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppbKqEAI.jpg)
**Please note: **The ExternalReference field has modified the layout of the Sales Detail Export file

### []()Bin Locations when Receiving Transfers and Purchase Orders

You can now view and edit Bin Locations in more locations making it easier than ever to receive and process your stock!

![mceclip2 (63).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppd9sEAA.jpg)*Transfers*

![mceclip8 (3).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppbbkEAA.jpg)*Purchase Orders*

> **Note:** The Bin Location is only displayed using the full Stock Receipt method, not Stock Receipt (Basic). You will need to scroll to the right to view the Bin column.

- Existing Bin Locations will be displayed
- To update Bin Locations, simply update the field and click either Save or Make Available
- To store multiple values use a semi colon ";" to separate each location e.g. A5;A8 (commas will not be saved ",")

### []()PO Detail Report - Product Attribute filters

We've now added a new "Refine by Attributes" section to the PO Detail Report, allowing you to filter and report on all of your Product Attributes, including Custom Attributes!

![mceclip4 (26).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdDtEAI.jpg)
To display Custom Attributes in the results, you'll need to ensure you update the "Display Product Attributes in Results" filter (found in the top right-hand corner) to "All".

![mceclip5 (14).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdE8EAI.jpg)*Filter in the PO Detail Report*

Attributes are available in both the Report Results and Export files.

![mceclip6 (7).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdEDEAY.jpg)*PO Detail Report results*

![mceclip7 (7).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppcvAEAQ.jpg)*PO Detail Report Export Results*

## []()**Improvements**

Also in this update we've added the following improvements:

|  |  |
| --- | --- |
| POS | Changed the order of the Freight Method and Freight Amount in the POS pop-up to allow for faster entry of information Old screen vs New screen:  ![mceclip2 (64).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdEIEAY.jpg) |
| POS | Added the Freight Type to the Fulfilment tab, making it easier to fulfil orders.  ![mceclip6 (8).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppcxmEAA.jpg) |
| POS | When sending Transfers, a new button has been added to make it easy to auto-populate the quantities to be sent.  ![mceclip0 - 2023-07-09T135448.944.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdESEAY.jpg) Click the button in the header to automatically update the Transfer Quantity field for all rows, or the button for individual rows to update that row only. |
| POS | Added a warning when trying to process a Transfer with 0 in the Transfer Quantity field. |
| Shippit | We've added the option "Do not send to Shippit" to allow you specifically control when orders are sent to Shippit.  ![mceclip7 (8).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdEhEAI.jpg) **Please note: **Orders are only prevented from being sent to Shippit when this option is explicitly selected. |

## []()**Resolutions**

|  |  |
| --- | --- |
| Inventory | Special Orders that are fulfilled before the PO is received will be removed from the allocated status accordingly |
| Inventory | Resolved an issue with allocated stock when a refund was processed for an Outlet different to the Outlet currently logged into in POS. |
| Inventory | Resolved an issue where stock was added to allocated and available under very specific circumstances. |
| Inventory | Resolved an issue where changing a Special Order sale in POS to a quote (after the PO has been created) and updating the quantity before re-finalising the sale. |
| Label Printing | Promotional Price and Expiry Date fields now display Outlet-specific information if there's an active promotion for the selected Outlet |
| Label Printing - Zebra | Improved the ability to move field place holders on the designer template. Updated the cursor icon the reflect the available functionality. ![mceclip2.png](https://ress.zendesk.com/hc/article_attachments/360005891156/mceclip2.png) |
| Products | Resolved an issue with the Edit Product "Sales" tab where January 2021 wasn't displayed. |
| POS | RRP is now only displayed if the RRP option is selected in POS settings - [Product Settings](https://galaxy.maropost.com/s/article/Product-Settings) |
| POS | Resolved an issue with Zero quantity refunds are showing as outstanding |
| Statements | Resolved an issue where statements were unable to be run for customers with names longer than 30 characters |
| Account Payments | Search results now immediately display coloured indicators for Stop Credit, Over Limit and Credits Due (previously would only display after the results were expanded) |
| Stock Adjustments | Resolved an issue where users where able to click save multiple times, duplicating the adjustments. |
| Stock Forecast Report | The Stock Forecast Report no longer includes Package Quantities |
| Transfers | Resolved an issue where picked Transfers were unable to be dispatched if there was a negative stock on hand |
| Transfers | Notes added when Transfers are uploaded are now saved correctly. |
| Transfers | Resolved an issue where multiple Transfers were automatically created for products on a sale (where a single Transfer could be used). |
| Purchase Orders | Resolved an issue preventing users from adding a large number of products from the search results |
| Xero | Resolved an error message displayed by disconnecting and reconnecting Xero without reloading the page. |
| Xero | Resolved an issue where Xero connection errors would cause the Xero integration to be disabled. |