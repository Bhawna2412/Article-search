---
title: "Release Notes v3.11.0 - POS and Back Office"
articleID: 1153
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-12-01
---

# Release Notes v3.11.0 - POS and Back Office

# Release Notes v3.11.0 - POS and Back Office

**Release Date:** 29th January 2020

Welcome to the first release for 2020! This release has some exciting features we've been working on for quite a while now, including Scheduled Pricing and the ability to automatically expire Loyalty Points. There's also some great new features for Purchase Orders, an update to Stocktake, and new filters in Promotional Campaigns and Mass Download. Finally, we've added some new fields to the A4 labels and added an extra Payment Type for Openpay.

At the bottom of the page you'll find a summary all the [releases for 2019](#2019) - be sure to take a look and discover features you never knew existed!

## Scheduled Pricing

Using Retail Express you can schedule in advance any price changes to your product selling price, taking the stress out of preparing for sales and price updates. Prices can be increased or decreased by either a dollar ($) or percentage (%) amount, or to a whole value. Prices can even be rounded by whole dollars or a decimal.

Price changes can be configured to:

- 
- 
- Adjust prices to a fixed price, or increase/decrease by a dollar ($) or percentage (%) amount
- Round adjusted prices by whole dollars and/or decimals
- Filters to select appropriate products

![mceclip5 (16).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfTUEAY.jpg)
![mceclip6 (11).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfOQEAY.jpg)
![mceclip0 - 2023-07-09T184246.002.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfTeEAI.jpg)
For detailed information refer to the [Inventory - Scheduled Price Changes](https://galaxy.maropost.com/s/article/Scheduled-Pricing-Changes) article.

## []()Loyalty Expiration

You can now automatically expire accrued loyalty points after a selected period, encouraging repeat business from your customers by ensuring they return to spend their points!

The new **Expiry Schedule**** **feature allows you to automatically remove points from customer accounts after a set period (number of days).

![mceclip0 - 2023-07-09T184252.667.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfTjEAI.jpg)
The **Expiry Override** feature allows you to control which transactions will override the scheduled expiry period, and thus reset the timer.

For example, in the above configuration if a customer makes a purchase (Sales Order) during the 90 day expiry period, the expiry schedule is reset and the customer's balance will expire 90 days after the new transaction. If another transaction is made in the following 90 days the schedule is reset again, and so on.

If there are no further transactions for 90 days, any points accrued more than 90 days ago will expire.

**Please note: **Changes have been made to the **Webstore/eCommerce ****API **and the **Inventory Planning Service ****API **(IPS) to accommodate this feature, to avoid bulk customer synchronisations when points are reset. Customers using either of these APIs will need to update the integration before enabling this feature. For more information refer to the [Loyalty Integration through Retail Express APIs](https://galaxy.maropost.com/s/article/Release-v3-11-0-Loyalty-Integration-through-Retail-Express-API) article.

You will be prompted to confirm the updated changes when enabling Loyalty to ensure any integrations have been updated.

To access the new settings navigate to **Settings >POS Settings > Loyalty Settings.**

## []()Purchase Orders - Linked Transfers

The Stock Replenishment - Stock Re-Orders feature (where you can automatically create Purchase Orders to top-up your stock by selecting a formula) has a feature where you can Consolidate Delivery of all orders to a single Outlet. For example, order stock for all of your stores, but deliver it to your Warehouse for holding.

During consolidation, the system will create Transfers for delivering the stock back to the Outlets after the PO has been received.

With this release, you can now specify the stage the Transfers should be updated to when the Purchase Order is received.

![mceclip1 - 2023-07-09T184257.611.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppbfLEAQ.jpg)
When the PO arrives and is processed in the system, the Transfers are automatically updated e.g. by selecting the Allocate status, when the PO is received the Transfer stock updates to Allocated. This makes the entire process much more efficient.

![mceclip2 (72).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfUXEAY.jpg)
Using the PO manager you can:

- Use the **Linked Transfer Stages** filter to search for POs with a specific Linked Transfer status
- Find and update Purchase Orders to set a new **Linked Transfer stage**

To use this feature navigate to **Inventory > Stock Replenishment > Stock Reorders via Purchase Order**.

## []()Purchase Orders - Consolidate Incomplete Orders

If you have multiple Incomplete orders for the same Supplier, you can now consolidate them altogether onto a single Purchase Order with a few clicks of a button.

![mceclip2 (73).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfUcEAI.jpg)
The new **Consolidate Selected **button will:

- Create a new single Purchase Order with all products from the selected Orders (note: products are added using the *current *Supplier Buy Price at the time of consolidation)
- Cancel the original Orders
- If you select Purchase Orders for multiple Outlets or Suppliers, one Purchase order will be created per Supplier/Outlet combination

Navigate to **Inventory > PO Management > PO Manager **to access this feature.

## []()Stocktake updates

The Stock Take feature has received a few updates in this release.

### "Wireless Stocktake" renamed to "Browser Stocktake"

The Wireless Stocktake has been renamed to Browser Stocktake to reflect on the way the stocktake is processed i.e. the Browser Stocktake is performed within the Internet Browser. The process used to count your stock remains the same - product counts can be typed in manually, or if preferred, scanned using a Barcode Scanner connected to the computer.

You'll be able to see this change by noting the "Wireless Stocktake" button has been changed to "Browser Stocktake" at the bottom of the Stock Take window:

![mceclip3 (43).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfUmEAI.jpg)

### New Attribute Filters

Products to be counted can now be filtered using the **Refine By Attributes** section at the bottom of the Stock Take window. Clicking on the heading to expand the section, you will find a list of your attributes, including:

- Brand
- Season
- Size
- Colour
- Custom Attributes

![mceclip5 (17).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfUrEAI.jpg)

### Bin Location in Excel Stock Take File

To assist you with locating your stock during the count, the Bin Location is now included in the Stock Take Excel File.

To access the file, navigate to **Stock take > Create Stock Take > Select your products > Click Create Excel File.**

![mceclip6 (12).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfUYEAY.jpg)

## []()Promotional Campaign Filters

3 new filters have been added to the Promotional Campaigns feature, allowing you to target your customers even further when creating promotions and discounts (including using Coupon Codes).

With this release you can now target your customers by:

- Customer Type
- Price Group
- Price Group Fixed

Customers that match **any **of these filters will be eligible for the campaign. This means if you choose a Customer Type and a Price Group, the customer only needs to be in one of those filters to be eligible, not both.

![mceclip7 (11).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfR0EAI.jpg)
Access Promotional Campaigns via **Settings > Promotional Campaigns**.

## []()Product Mass Download Sales Channel Filter

The Product Mass Download feature now has a "Sales Channel" filter, allow you to select your integrated webstore. When this filter is used, only products assigned to the selected store will be included in the search results.

![mceclip8 (5).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfUwEAI.jpg)
The filter will include both Shopify stores and any eCommerce integrations with Sales Channels configured via **System > Locations/Outlets > Sales Channels** (including Magento stores).

## []()New A4 Label Printing fields

The A4 product labels now has additional new fields available to display on the printed labels. The new fields are:

- Custom Attributes (for your products)
- Bin Locations

![mceclip9 (9).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfSXEAY.jpg)
To access the new settings:

1. navigate to **Settings > Label Printing > A4 Label Presets**
2. Click **Edit **to modify an existing label, or click **Create New Label**
3. In the **Content **selection click on the Label Line drop-down box and select the field as required

## []()New Openpay Payment Type

A new Payment Type, **Openpay**, has been added to associate your payments in POS. Once you have enabled the new method you can allocate payments against the method for easy reconciliation using the Income Report.

> **Note:** The Openpay Payment Type is used for reporting purposes only and is not an integrated payment system; for integrations please refer to Afterpay or Zip.

Openpay is a Buy Now Pay Later method, offering the ability for your customers to purchase the product today but pay in installments.

**Accounting Link Customers: **If you are using the Accounting Link integration you will need to re-map your Payment Types, otherwise you will encounter an error when trying to import your data. Refer to the [Accounting Link - Mapping a New Payment Type](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Farticles%2F115002321473) for more information.

![mceclip1 - 2023-07-09T184352.653.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfVVEAY.jpg)
*Openpay configuration in Payment Types*

To enable the new Payment Type:

1. Navigate to **Settings > Payment Types**
2. Locate the line for Openpay
3. Tick the options for Enabled, POS, Money Out, Cash Drawer, and Loyalty as required (you can also adjust the Loyalty Multiplier as necessary)
4. Click **Save Changes**

## []()Improvements

|  |  |
| --- | --- |
| Gift Vouchers | The unused Voucher Type "Coupon" has been removed from Back Office (Voucher reports and the POS Security Features). This Voucher Type was a legacy type, and could not be created within POS |
| POS - Advanced Search | Performance improvements have been made to the POS Advanced Search screen |
| General | Performances improvements have been made to:  - Sales Report - End of Day Report - Account Customer Payments window |

## Resolutions

Below is a list of resolutions included in the latest Maintenance Release:

|  |  |
| --- | --- |
| Supplier Summary Report | Exporting the report now includes all results in the exported file |
| Multi PO Upload | An issue has been resolved where duplicate products were created in a Purchase Order via the Multi PO Upload feature (an error message will now be displayed if the same product exists on the order twice) |
| POS - Payments | In rare occasions clicking the note images would cause multiple separate payments to be placed against an order (instead of one payment increasing in value); this has been resolved. |
| POS - Laybys | An issue has been resolved when cancelling a layby with payments |
| Credit Notes | Auto-generated Credit Note refunds will now be rounded correctly |
| Promotional Campaign | Campaigns are now applied to items with prices discounted by more than 50% |
| Purchase Order Replenishment | An issue has been resolved in rare circumstances where Purchase Orders were created for an incorrect Outlet |
| Transfers | Barcodes are now displayed correctly on printed Transfers |

[]()**Features released in 2019:**

(in order of release date)

- [Afterpay integration](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Farticles%2F360000699996)
- [Support for multiple Shopify integrations](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Farticles%2F360000699996)
- [Customer Search filters and results](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Farticles%2F360000699996)
- [Updates to Customer Mass Download](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Farticles%2F360000699996)
- [Surcharges](https://galaxy.maropost.com/s/article/Release-Notes-v3-2-0-POS-and-Back-Office)
- [Stock Replenishment Minimum Order Quantity](https://galaxy.maropost.com/s/article/Release-Notes-v3-2-0-POS-and-Back-Office)
- [Shopify Gift Voucher integration for Shopify Plus customers](https://galaxy.maropost.com/s/article/Release-Notes-v3-3-0-POS-and-Back-Office)
- [Stock Replenishment via Transfer Source Outlet into Negatives feature](https://galaxy.maropost.com/s/article/Release-Notes-v3-3-0-POS-and-Back-Office)
- [Stock Replenishment via Transfer Outlet Priority List](https://galaxy.maropost.com/s/article/Release-Notes-v3-3-0-POS-and-Back-Office)
- [Scheduled Transfers via Stock Replenishment](https://galaxy.maropost.com/s/article/Release-Notes-v3-4-0-POS-and-Back-Office)
- [Shopify Fulfilment Locations](https://galaxy.maropost.com/s/article/Release-Notes-v3-4-0-POS-and-Back-Office)
- [New Purchase Order Matrix/Package Template](https://galaxy.maropost.com/s/article/Release-Notes-v3-5-0-Back-Office-and-PO)
- [Web Order Alerts](https://galaxy.maropost.com/s/article/Release-Notes-v3-5-0-Back-Office-and-PO)
- [External Order Reference Search](https://galaxy.maropost.com/s/article/Release-Notes-v3-5-0-Back-Office-and-PO)
- [Manually prompt a resync of Offline POS](https://galaxy.maropost.com/s/article/Release-Notes-v3-5-5-POS-and-Back-Offic)
- [External Order Reference field on POS emails](https://galaxy.maropost.com/s/article/Release-Notes-v3-6-0-POS-and-Back-Offic)
- [Updated POS Invoice email attachment filename](https://galaxy.maropost.com/s/article/Release-Notes-v3-6-0-POS-and-Back-Offic)
- [Stock Replenishment for Depleted Stock](https://galaxy.maropost.com/s/article/Release-Notes-v3-7-0-POS-and-Back-Offic)
- [Xero Integration - Direct Costs](https://galaxy.maropost.com/s/article/Release-Notes-v3-7-0-POS-and-Back-Offic)
- [Accounting Report - Stock in Transit Balance Report](https://galaxy.maropost.com/s/article/Release-Notes-v3-7-0-POS-and-Back-Offic)
- [Promotional Campaign updates](https://galaxy.maropost.com/s/article/Release-Notes-v3-8-0-POS-and-Back-Offic)
- [New Loyalty Point redemption restriction](https://galaxy.maropost.com/s/article/Release-Notes-v3-8-0-POS-and-Back-Offic)
- [Shopify Connector Updates](https://galaxy.maropost.com/s/article/Release-Notes-v3-8-0-POS-and-Back-Offic)
- [Franchise Connect](https://galaxy.maropost.com/s/article/Release-Notes-v3-8-0-POS-and-Back-Offic)
- [New Retail Express Onboarding Console](https://galaxy.maropost.com/s/article/Release-Notes-v3-8-0-POS-and-Back-Offic)
- [Loyalty Point Adjustment Reasons](https://galaxy.maropost.com/s/article/Release-Notes-v3-9-0-POS-and-Back-Offic)
- [Outlet-specific bank details on A4 invoices](https://galaxy.maropost.com/s/article/Release-Notes-v3-9-0-POS-and-Back-Offic)
- [Cash float included on POS Cash Up](https://galaxy.maropost.com/s/article/Release-Notes-v3-9-0-POS-and-Back-Offic)
- [Product Search & Management filter for Web Store products](https://galaxy.maropost.com/s/article/Release-Notes-v3-9-0-POS-and-Back-Offic)
- [Customer Activity Report Price Group filters](https://galaxy.maropost.com/s/article/Release-Notes-v3-9-0-POS-and-Back-Offic)
- [Sales Detail Export Report](https://galaxy.maropost.com/s/article/Release-Notes-v3-9-0-POS-and-Back-Offic)
- [Humm Payment Method](https://galaxy.maropost.com/s/article/Release-Notes-v3-9-0-POS-and-Back-Offic)
- [Default Price Group for Customers](https://galaxy.maropost.com/s/article/Release-Notes-v3-10-0-POS-and-Back-Offic)
- [Configurable Voucher Type Settings](https://galaxy.maropost.com/s/article/Release-Notes-v3-10-0-POS-and-Back-Offic)
- [New POS Themes](https://galaxy.maropost.com/s/article/Release-Notes-v3-10-0-POS-and-Back-Offic)
- [New accounting report for reconciling Surcharges](https://galaxy.maropost.com/s/article/Release-Notes-v3-10-0-POS-and-Back-Offic)
- [Shopify automatic sync](https://galaxy.maropost.com/s/article/Release-Notes-v3-10-0-POS-and-Back-Offic)
- [Email address placeholder on newsletters](https://galaxy.maropost.com/s/article/Release-Notes-v3-10-0-POS-and-Back-Offic)
- [Create new Customer Types](https://galaxy.maropost.com/s/article/Release-Notes-v3-10-4-POS-and-Back-Offic)

[Want more information? View all Release Notes.](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Fcategories%2F115000210393)