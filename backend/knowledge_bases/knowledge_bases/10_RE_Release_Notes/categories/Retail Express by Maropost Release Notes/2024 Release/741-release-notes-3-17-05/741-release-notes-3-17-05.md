---
title: "Release Notes 3.17.05"
articleID: 741
category: "2024 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2024-08-06
---

# Release Notes 3.17.05

## POS Enhancements

### Gift Receipts at POS

After receiving feedback around the ability to offer Gift Receipts to your customers, we have introduced the ability to print a gift receipt via thermal/docket printers at POS.

Users can print a gift receipt from the “Invoice” tab which contains key product and invoice information without references to customer information or payment and discount details.

**Please Note:** Hardware Utility re-installation may be required in certain scenarios [Click Here for Details](https://galaxy.maropost.com/s/article/Installing-Receipt-Printers-and-Integrated-EFTPOS "Click Here for Details"). Phase two of the rollout in the coming weeks, stands to avoid the need to do this, if you prefer to wait for the subsequent enhancement to avoid the need to perform this step.

![image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ1000008K41fMAC.jpg)

![GiftReceiptProof.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ1000009HtStMAK.jpg)

## Purchase Order Enhancements

### PO Flat File Excel Attachment

Based on client feedback via our [product portal](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fretail-express.webflow.io%2F "http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fretail-express.webflow.io%2F"), we have added the ability to optionally include an Excel document along with the PDF attachment when emailing Purchase Orders to suppliers.  
  
The “Flat File” contains Outlet/Company Information, Purchase Order and Product information, providing the users with the necessary details to ingest the document into their external ERP/Platform.

With this setting enabled, purchase order emails will automatically include the flat file (.xlsx) as an attachment when sent from both Stock Replenishment and PO Details. The Flat File can also be exported directly from the PO Details and PO Item/s tabs in the Back Office.

This feature is optional and can be configured via **Settings > Purchase Order Setup > PO/Supplier Return Settings >** “Include PO Details via Excel Flat File as Attachment.”

### PO Master vs Outlet Information

A new Purchase Order setting allows users to configure whether to display Master or Outlet information on the Purchase Order Template sent to suppliers.  
  
The setting determines whether the Company Name, ABN, Address, Contact Details, and Logo shown on POs are from Master (Global Settings) or Outlet Details (Outlet Settings).

![image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ1000008K3z4MAC.jpg)

To configure information - Go to **Settings > Purchase Order Setup > PO/Supplier Return Settings Page** “Display Master or Outlet Specific Data on Purchase Orders.”

### PO and Stock Receipt Pages - Items with Linked Transfer - "Truck" Icon

* For PO Items where a transfer is linked to the item to be sent to another locaiton after receipt:
* The truck icon appears beside any PO Items to signify if they have a linked Transfer.
* The icon displays in both the PO Items and Stock Receipt/Invoice Pages.
* The truck icon will appear only after the item is received (Made Available/Finalised Stock Receipts).

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240718at103253AM.05TJ1000008JZPpMAO.png)

## REST API Enhancements

The summary of the release is listed below. For detailed API technical documentation, please visit [developer.retailexpress.com.au](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fdeveloper.retailexpress.com.au%2F "http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fdeveloper.retailexpress.com.au")

### Loyalty Endpoints

We have introduced new endpoints that allow integrations to interact with Customer Loyalty points in Retail Express. The endpoints facilicate the management of loyalty adjustment reasons, creation of loyalty point adjustments, as well as the ability to review previous loyalty history/transactions of customer records.

**Loyalty Adjustment Reasons**

* New endpoints for GET/POST/PUT/DELETE /loyaltyadjustmentreasons have been added to manage Loyalty Adjustment Reasons needed when processing direct updates to points.
* These are currently configured in the UI under Customers > Loyalty Configuration > Adjustment Reasons.

**Create Loyalty Adjustments**

* POST Loyalty Adjustments allows adding or removing points for a customer along with an associated reason. This functions similarly to processing adjustments via the Customer Activity Report.

**Loyalty History**

* GET Loyalty History allows retrieving all transactions and adjustments that change a customer’s loyalty balance, mirroring the Loyalty History tab in a Customer record in Back Office.

### Transfer Endpoints

New endpoints allow users and integrators to create new Transfers in Retail Express to then be managed by the users within the platform itself.

* **POST /transfers** creates a Transfer with or without any product.
* **POST /transfers/{id}/transferitems** adds items to existing Transfers.

Transfer Items are created in the status of “Proposed” for further action in the back office or through other integrations.

### Price Group Management

We have extended our REST API to now support Fixed Price Group management against your products. You can now access Fixed Price Group data in the /products endpoint.

* **GET /products**

  + Extended to include Fixed Price Group data in the response, including support for filtering.
  + Extended to include calculated Price Group “POS” and “WEB” pricing at Product Master level, including support for filtering.
* **PUT/POST /products**

  + Extended to allow users to manage the values defined against a specific product for specific Fixed Price Groups

### Stock Adjustment Reasons

* **StockAdjustmentReasons** Endpoint has been added to allow users to create and manage the Adjustment Reasons, now also available as part of the Stock Adjustments feature in Retail Express.

  + Supports GET | PUT | POST | DELETE /stockadjustmentreasons

### Inventory Endpoint

* Added **SOH (Stock on Hand)** to the response of the **GET /inventory** endpoint.
* SOH is the Sum of Avail and Allocated (same as we have throughout the system logic and SOAP API)
* Supports Order By and Filter By

### SOAP API Enhancement

* **“CreateSavedLists”** - New, optional parameter added to three methods which interact with Transfers. This allows the external system to define if a saved list should be created or not. If not specified, saved list will be created as per current/legacy behaviour.

  + PickITOsByOutlet
  + DispatchITOs
  + ReceiveITOs"

Please refer to [developer.retailexpress.com.au](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fdeveloper.retailexpress.com.au%2F "http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fdeveloper.retailexpress.com.au") for API technical documenation.

## Stock Adjustment Reasons

**Stock Adjustment “Reasons”**

* We have implemented the ability to select "Reasons" from a dropdown menu when performing stock adjustments.
* Reasons are configurable in Back Office and via the REST API. Previous "reasons" are now "comments", to assist in reporting on the configurable "Reasons".
* Added settings to make "Comments" and "Reasons" optional or mandatory. This is configured via Settings > Stock Adjustment Settings in Back Office and determines what options are required when creating a manual stock adjustment.

**Reporting on Adjustment Reasons**

Key reports now also display the Adjustment Reason as a filter, and column in the results of the report.

* Stock Adjustment Report
* Adjustment Report

## Supplier Management

**Edit Suppliers on Mass via Upload**

* Use the Supplier Code as an identifer, make bulk updates/changes to your existing suppliers via upload.
* Using the Supplier Upload template is required, and the Supplier Code Must Match the Existing Supplier In order for udpates to apply.

**Additional Fields in Upload Template**

* Disabled/Enabled
* SKU’s Displayed on PO’s
* Country
* PO Template
* “Admin Only” field is no longer mandatory in the upload file. Defaults to FALSE unless specified otherwise in the file."

## Report Enhancements

* **Sales Report and Sales Report Limited:** A new Checkbox “Include Extended Customer Information” has been added to display Customer Number, Billing Phone, Billing Mobile, Billing Email, Bill Post Code, and Country.
* **Sales Detail Export:** The “Bill Country” field has been added to the results.
* **Inventory Valuation Report:** A new checkbox “Show Extended Stock Buckets” shows the individual relevant stock buckets normally summarized by the report along with a total column.
* **Freight Report:** Removed legacy sales statuses from the “Sales Status” filter.
* **Inventory Valuation Report** - Resolved an issue where incorrect COGS values were displayed in certain cases.
* **Style Performance Report** - Removed legacy sales statuses from the Sales Status filter.
* **Fulfilment Report/s** - Updated logic to no longer show 0 qty order items (for cases where items were canceled).
* **PO Detail Report** - Updated the default sorting to sort as per the purchase order items, which defaults to PO Item ID Ascending.

## General Enhancements & Resolutions

* **Xero Integration** *-* Updated the integration to automatically remove trailing spaces from Invoice Numbers to avoid sync disconnections.
* **POS Hardware Auto-Retry**- Added logic to allow POS to auto-retry connection to the Hardware Service in cases where the service was not running as-at the moment of logging into the register.
* **Product Mass Download** - Added PLU Filter to the download page.
* **PO Items - Create Product**

  + Added the ability to create new custom attributes when using PO Items > Create Product feature.
* **PO Details Page**

  + Added support to manually specify the “Linked Transfers” status that related transfer/s will be set to when PO item/s received.
  + Previously this was only available for PO’s created with Linked Transfers directly via Special Orders/Replenishment.
* **Product Search & Management**

  + Added a loading spinner when applying actions
  + Added popup modal when actions are complete advising of total number of products updated.
* **Mobile Dashboard** - Resolved an issue where Outlets listed did not obey logged in user’s Outlet Access.
* **Stocktake Authorisation** - Updated the behaviour to prevent users unknowing submitting a stocktake for authorisation without first selecting any items to approve. This caused the page to not save changes. New behaviour will prompt for at least one item to be selected before proceeding.
* **Product Search & Management** - Resolved an issue where a Product ID folllowed by a comma could cause errors when searching.
* **POS Advanced Product Search** - Resolved an issue with the Available Qty Filter not always applying and sorting correctly.
* **MYOB Integration** - Resolved an issue in specific scenarios where a PO has negative rounding adjustment values which previously caused the integration to disconnect.
* **Xero Integration** - Resolved an issue where special characters in supplier names could cause disruption to the integration.
* POS discount calculation issue resolved when using advanced search and multiple quantities.
* **Edit Product Page** - Performance enhancements to resolve delays when saving changes to products in certain scenarios.
* **Other General Enhancements and Fixes**