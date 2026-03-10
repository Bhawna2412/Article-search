---
title: "Release Notes v3.5.0 - API updates"
articleID: 1314
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-12-01
---

# Release Notes v3.5.0 - API updates

# Release Notes v3.5.0 - API updates

In this release there are changes to several of the Retail Express APIs, including a new call for the Inventory Planning System, and updates to both the Webstore and Warehouse Management APIs introducing new fields for both calls and responses. Detailed information can be found further below.

Would you like your developer/integration partner to be kept up-to-date with any changes? Fill out the [External Party/Agency Authorisation Form](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fforms.zohopublic.com%2Fvirtualoffice112%2Fform%2FExternalPartyAuthorisation%2Fformperma%2FEeBbccuP4Wy9ZRbboZ_fbWiW-DJ3RNneZP4YWN1ycZ0) to subscribe them to updates now!

**On this page:**

- [Inventory Planning]()
- [Webstore API](#webstore)
- [Warehouse Management System](#wms)

### []()**Inventory Planning API**

A new call, **DailyStockMovement **has been added to the Inventory Planning API. Using this call, you can select an Outlet and/or Product SKU (Product ID or Supplier SKU) to retrieve details of the movement for that outlet/product for the required date.

The information returned includes:

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

For more information  on the Inventory Planning API refer to the [Inventory Planning documentation](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Farticles%2F217325707).

### []()**Webstore API (eCommerce) - New Features**

Four new features have been added to the Webstore API:

|  |  |
| --- | --- |
| **Call** | **Details** |
| OrderCreate OrderCreateByChannel | - "FreightType" is now available in both OrderCreate methods, used to indicate a Carrier Code for shipping. - The value passed in the ExternalOrderId will now be stored in Retail Express and searchable through POS and the [Fulfilment Report](https://galaxy.maropost.com/s/article/Using-the-Fulfilment-Report-to-fulfil-and-dispatch-products). |
| CreateUpdateCustomer | Two new fields have been added to the response:  - Customer Number - Custom Reference |

Please note these features have not been added to the standard Magento/Shopify eCommerce integration tools.

For more information on the Webstore API refer to the [eCommerce API refer to the API & Plugin](https://galaxy.maropost.com/s/article/API-Plugin-Documentation) documentation.

### []()**Warehouse Management System (WMS) API**

Several updates have been made to the Warehouse Management System (WMS) API

|  |  |
| --- | --- |
| **Call** | **Details** |
| GetCustomerOrders | - The field "FreightType" has been added to indicate the Carrier Code used for shipping - The product Supplier SKU is now included in the response after Product ID |
| GetPurchaseOrders & GetPurchaseOrdersByInvoice | - The "Special Order" flag has been added to both methods (Boolean value) - The product Supplier SKU is now included in the response after Product ID |
| GetInboundITOs & GetOutboundITOs | - The product Supplier SKU is now included in the response after Product ID |

For more information on the Warehouse Management API refer to the [WMS API documentation](https://galaxy.maropost.com/s/article/API-Plugin-Documentation).

> **Note:** Stay up-to-date with news from the Support team - subscribe now

Want more information? Find related articles here:

- [API updates and Release Notes](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Fsections%2F360000149596)
- [View all Release Notes](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Fcategories%2F115000210393)