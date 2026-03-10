---
title: "Release Notes v3.4.0 - API Changes"
articleID: 1313
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-12-01
---

# Release Notes v3.4.0 - API Changes

# Release Notes v3.4.0 - API Changes

In this release we have added some new calls to our Inventory Planning and Warehouse Management APIs, as well as updated existing API calls. It's strongly recommended that you review the changes to assess if there will be any impact to existing integrations.

**On this page:**

- [Inventory Planning call GetStockAdjustments](#ip-stock-adjustments)
- [Inventory Planning call GetPurchaseOrdersDetailed](#ip-purchaseorders)
- [Warehouse Management call ReceivePurchaseOrders](#wms-purchase-orders)
- [Inventory Planning updates to multiple existing methods](#ip-updates)
- [ Warehouse Management System update to GetCustomerOrders](#wms-customers)
- [Web store/eCommerce API updates](#web-api)
- [Resolutions](#resolutions)

### []()**Inventory Planning - new call GetStockAdjustments**

We're introducing the ability for the Inventory Planning API to retrieve information about stock adjustments within Retail Express.

**Request:**

Using the method, the API will accept the following parameters:

> **Note:** You must provide either a date range or an Adjustment ID in the request.

- Date From/Date To
- Adjustment ID*
- Warehouse ID (Outlet ID)*

* Optional fields

**Response:**

The query response will return the following information:

- Stock Adjustment ID
- Product ID
- SKU
- Warehouse ID (Outlet ID)
- Outlet External Reference
- Quantity
- Status (inventory status e.g. Available)
- Comment
- User Code
- Product Buy Ex
- Product Direct Costs
- Date Created

For more information on the Inventory Planning API, please refer to the [Inventory Planning System API Technical Document](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Farticles%2F217325707).

### []()**Inventory Planning - new call GetPurchaseOrdersDetailed**

A new method has been added to the Inventory Planning API to return detailed information about Purchase Orders.

**Request:**

You can use the following parameters on the GetPurchaseOrdersDetailed method:

> **Note:** You must provide either a date range or an Purchase Order ID in the request.

- Date From/Date To
- PO ID
- Warehouse ID (Outlet ID)*
- Outlet External Reference*

* Optional fields

**Response:**

The query response will return the following information:

- Warehouse ID (Outlet ID)
- Supplier ID
- Purchase Order ID
- Create Date
- ETA
- Shipment Type
- FOB Currency Name
- Warehouse Comments
- Original Time of Departure
- Date Received (as entered by the User)
- Date of Receipt (the date a stock receipt was entered into Retail Express)
- Shipping Status
- Container Number
- Supplier Invoice Number
- Date Sailed
- Date Deposit Due
- Date Balance Due
- Payment Terms
- Shipping Terms
- External Order ID
- Status

When the items on the Purchase Order are listed the following fields will be returned for each product:

- Supplier SKU
- Product ID
- Supplier ID
- Quantity Ordered
- Quantity Outstanding
- Buy Price Ex (from the Purchase Order where available)
- Direct Costs (from the Purchase Order where available)
- Supplier Buy Price

For more information on the Inventory Planning API, please refer to the [Inventory Planning System API Technical Document](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Farticles%2F217325707).

### []()**Warehouse Management - new call ReceivePurchaseOrders**

Using the new call you will be able to update Purchase Orders within Retail Express to be set to "Receiving in Progress".

> **Note:** This can only be used for Purchase Orders currently in the On-Order status.

You will need to provide the Purchase Order ID, the Product (using either the Product ID or Supplier SKU) and the quantity.

For detailed information on this method refer to the detailed [Warehouse Management API](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.retailexpressmedia.com%2Fdocumentation%2Fapi%2Fv2%2FRetail%2520Express%2520-%2520V2%2520Warehouse%2520Management%2520System%2520API.pdf) documentation.

### []()**Inventory Planning updates**

Updates to existing methods for the Inventory Planning API are as follows:

|  |  |
| --- | --- |
| **API Method** | **Details** |
| GetSuppliers | The following fields will be added to the GetSuppliers method:  - ContactName - StreetAddress - State - Suburb - PostCode - Phone - ContactEmail - Fax - OrderEmail - Comments - AdminOrdersOnly - DepositRequired - PaymentTerms - ShippingTerms - ExternalReference - SupplierID - Country  These fields can be maintained for individual suppliers via the [Supplier Settings](https://galaxy.maropost.com/s/article/Managing-Suppliers). |
| GetITOs | New fields added to the GetITOs response:  - External Order ID - Notes - Created By - User Code - the User Code as maintained for the user within Retail Express |
| GetProductsDetailed | The following fields have been added to the GetProductsDetailed method:  - RRP - Web Price - Product Discount Price - Product Discount End - Length - Depth - Breadth - Shipping Cubic - Weight - Freight Cost - Lead Time  These fields can be maintained within Retail Express on the [Product Edit](https://galaxy.maropost.com/s/article/Create-and-Edit-Products) screen. |
| GetStockByOutlet | The following Stock Status options and product fields will be added to the GetStockByOutlet methods. These additional status options allows for all stock status to be queried for a complete stock valuation.  - Picked - Transit In - Received - MSL - Minimum Stock Level - Bin |

For more information on the Inventory Planning API, please refer to the [Inventory Planning System API Technical Document](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Farticles%2F217325707).

### []()**Warehouse Management System (WMS) GetCustomerOrders update**

Two new fields have been added to the GetCustomerOrders response:

- Customer Email
- Public Comments

> **Note:** These fields are as per the information on the order i.e. if the Customer Email for their account is different to the email on the order, the email from the Order will be returned.

For more information on the Warehouse Management System API, please refer to the [API & Plugin Documentation](https://galaxy.maropost.com/s/article/API-Plugin-Documentation) article.

### []()**eCommerce/Web Store API updates**

Two methods have been updated for the web store/eCommerce API.

> **Note:** this is the same API used by the Magento Plugin, however the Plugin will not been updated to use these new changes.

|  |  |
| --- | --- |
| **Method** | **Details** |
| CustomerGetBulkDetails | New fields added to the response:  - Credit Limit - Credit Terms (0, 30, 60 or 90 days) - Custom Reference |
| CreateUpdateCustomer | Added fields to the method when creating customers:  - Credit Limit* - Credit Terms* (the available options are 0, 30, 60 and 90 - all other values will return an error) - Custom Reference*  * Optional fields |

For more information on the [eCommerce API refer to the API & Plugin Documentation](https://galaxy.maropost.com/s/article/API-Plugin-Documentation) article.

### []()Resolutions

Below is a list of resolutions included in the version 3.4.0 Maintenance Release:

|  |  |
| --- | --- |
| Webstore API | An error has been resolved where DateOfBirthWithheld was automatically set as true if not sent in the Webstore API. |

Want more information? Click to[view all API Release Notes](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Fsections%2F360000149596-API-Updates)