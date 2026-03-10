---
title: "Release Note 3.18.03"
articleID: 2099
category: "2025 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-08-18
---

# Release Note 3.18.03

This release will be available to all users throughout July/August 2025

## **Split Fulfilment & Sales Outlet Allocation via Webstore API**

Retail Express now supports split fulfilment and sales outlet assignment directly through the Webstore API's OrderCreateByChannel methods. This enhancement enables integrators to define, per order item, which outlet should fulfil it and, also optionally, which outlet the overall order should be recorded against for reporting.

These changes are similar to our Shopify integration’s fulfilment logic and provide greater flexibility for clients managing multi-location fulfilment or dispatch strategies using the Webstore API.

- A new optional field, OrderItemFulfilmentWHID, is available for each item in the OrderItems section of the OrderCreateByChannel request.
- A new optional header-level parameter, OrderOutletWHID, can now be used to specify the sales outlet against which the entire order will be recorded.

For full details, Check [Webstore](https://www.retailexpressmedia.com/documentation/api/v2/Retail%20Express%20-%20V2%20Web%20Store%20API.pdf) and [API](https://galaxy.maropost.com/kb/articles/151-api-plugin-documentation?utm_source=community-search&utm_medium=organic-search&utm_term=API+%26+Plugin+Documentation) Documentation

## **POS Auto Generate Voucher Code Setting**

A new configuration option has been added under POS Settings > Voucher Settings, giving users greater control over how voucher codes are created during the sale of gift vouchers at the POS.

Previously, Retail Express would automatically pre-fill the voucher code field with a unique, system-generated code whenever a voucher sale was attempted at POS. we’ve introduced a new setting that gives retailers the ability to disable auto-generation of voucher codes.

- To access the setting, go to **Settings > POS Settings > Voucher Settings**
- Once configured, refresh your POS browser to  observe the behaviour change in POS when creating a voucher.

![RN 3.png](https://us.v-cdn.net/6038474/uploads/J0TAPI96MYG0/rn-3.png)
The new setting controls whether or not the below voucher code will be prepopulated with a random generated code when you attempt to sell a voucher at POS. 

![image.png](https://us.v-cdn.net/6038474/uploads/WV0YKO52Q1BD/image.png)
Users who have pre-printed gift voucher cards may prefer this setting to be disabled to ensure their staff are required to correctly scan/enter the voucher code from the physical gift card.

## **Legacy Stock Receipt Retirement**

The legacy Purchase Order receipt process is being phased out. 

When starting a purchase order receipt, the “Quick Receipt” option now uses the newer receipt method by default, providing a faster, more reliable experience. **“Quick Receipt & Invoice”** option is available directly under **Inventory** > **PO Management > Stock Receipt**

![Screenshot 2025-07-03 at 4.17.04 PM.png](https://us.v-cdn.net/6038474/uploads/BBNV37S00RBU/screenshot-2025-07-03-at-4-17-04-e2-80-afpm.png)
![Screenshot 2025-07-03 at 4.18.40 PM.png](https://us.v-cdn.net/6038474/uploads/6J6PVXVJWZSZ/screenshot-2025-07-03-at-4-18-40-e2-80-afpm.png)
Access to the old method is still temporarily available via PO Management. Users can access Legacy PO via Inventory > PO Management > Stock Receipt (Legacy).

## General Enhancements & Resolutions

- **PO & Stock Receipt Page Enhancement**  - **PO Stock Receipt Filtering - **Users can now filter line items on the stock receipt screen, aiding reconciliation.
  - **New Column - **The Stock Receipt & Invoice screen now displays both a per-item COGS Ex column and the total COGS Ex for easier reconciliation.
  - **Stock Receipt - ** Resolved an issue that could cause negative qty in the balance ramaining in certain cases.
  - **Stock Receipt -** Resolved an issue where Tax disabled products were re-instating tax on after finalising
- **Supplier Returns PDF Adjustment - **The PDF no longer displays the Barcode column when the config is set to “None”.
- **Mass Upload / Product Creation Validation - **Product validation now supports special characters like `'`, `"` and `/` during upload and create/edit processes.
- **REST API - Purchase Order Items - **The `/orders/purchaseorderitems` endpoint now returns `modified_on` as `created_on` when `modified_on` is null to ensure reliable sync filtering.
- **REST API - Orders & Refund Support**  - `/orders` now includes `original_order_id` (null if not a refund) in the response and as a filter.
  - `/orderItems` now includes `original_order_item_id`, `return_reason` object (id and name), and related fields in `filter_by` and `order_by`.
- **User Management Country Field - **Added “Country” as an optional column in the Users List.
- **Stocktake BIN Filter - **Added support for filtering stocktake by BIN values via comma-separated list (max 10), with guidance tooltip for formatting.

## Maintenance

- **Session Timeout Error - **Resolve an issue causing a session timeout to occur prematurely in back office.
- **Customer Mass Download **- Resolved an issue that limited the number of customer types shown in the filter control to 20. Limit is now removed.
- **PO Duplicate Creation Safeguard** - Prevents accidental duplicate POs by disabling the “Create” button after the first click.
- **Product Attribute Auto-Trim** - Automatically removes leading/trailing spaces from attributes and values to prevent hidden-space errors.
- **Product Type Creation/Upload Improvements** - Blocks characters like < and >, and trims spaces during product creation or uploads.
- **POS Fulfilment Tab – Due Date Fix** - Resolved issue where due dates would incorrectly change when unrelated items were modified.
- **Financial Summary Report** – Voucher Payment Fix - Corrected summary logic when "Summarise for Accounting" wasn't used for voucher methods.
- **PO Manager Filter Defaults** - Improved default filters in PO Manager for performance and usability (e.g. default to “Month to Date”).
- **Stock Adjustment Report Enhancements** - Filters now accurately target “Created By”; results and filters now show both “Created By” and “Authorised By” columns.
- **Promotional Campaigns** – Performance Improvements - Enhanced performance for running multiple campaigns simultaneously.
- **POS PLU Field Focus Improvement **- The PLU input remains focused after entry, enabling quick successive scans.
- **Fulfilled Sales Report – Performance** - Optimized report for faster loading.
- **Customer Account Statement** - Improved PDF email/print performance.
- **REST API - OrderCreateByChannel Email Fix** -Resolved issue when creating orders with emails not found in the system.
- **Transfers** – Inactive User Exclusion - Disabled users no longer appear in the transfer creation user list.
- **PO Save Button Fix** - When editing a made-available PO, fields are now either made read-only or the Save button is enabled.
- **Label Printing Limitation Removed** - Labels can now include the word “bin” as expected.
- **Webstore API - Product ID Conflict Fix** - Resolved issue when line items matched SKU/ManSKU of another product.
- **Shopify Connector** – **eWay Sync Fix** - Resolved syncing issues with eWay payments on the Shopify connector.
- **EDS Notifications for Customer Name Changes** - Updates to first/last name now correctly trigger EDS notifications and syncing without requiring profile republishing.
- **New Payment Methods: **Crypto & Uber Eats Added to Payment Methods
- **POS Transfers All Status Fix** - Selecting “All” for transfer statuses now correctly includes all applicable records.
- **Sales Report Visibility Fix**-  Resolved an issue where the Customer No column would only appear after expanding a row.

![image.png](https://us.v-cdn.net/6038474/uploads/9WCQCT2NZ98E/image.png)