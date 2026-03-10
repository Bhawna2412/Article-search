---
title: "Release Notes v3.6.0 - API changes"
articleID: 1271
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-05-11
---

# Release Notes v3.6.0 - API changes

# Release Notes v3.6.0 - API changes

**Release date:** 27th June 2019

In this release we've updated some of our existing APIs with new features and information. Please see below for information.

---

## Inventory Planning API updates

We've added new fields to the following Inventory Planning methods:

|  |  |
| --- | --- |
| **Method** | **Updates** |
| GetCustomers | The following fields have been added to the response:   * Loyalty Enabled * Date of Birth Withheld |
| GetOutlets | The following fields will be returned in the responsedepending on the Country selected for the Outlet  **Note:**Countries are configured via **Settings > Locations/Outlets > Countries**   * Tax Rate * Tax Label * Currency Multiplier |

For more information on the Inventory Planning API, please see the [API Technical Document](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Farticles%2F217325707)

[Back to top](#top)

---

## Warehouse Management System (WMS) API updates

The following updates have been made to the Warehouse Management System API:

|  |  |
| --- | --- |
| **Method** | **Updates** |
| GetCustomerOrders | The responsenow includes the OrderID |

For more information on the current version of the Warehouse Management System (WMS) API, please see the [API Technical Document](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Farticles%2F216771948).

[Back to top](#top)

---

## eCommerce/Webstore API updates

The following changes have been made to the eCommerce/Webstore API methods:

|  |  |
| --- | --- |
| **Method** | **Updates** |
| OrderCreateByChannel | The following changes were made to this method:   * The field Qty Fulfilled is no longer a required field on the request * If a customer is created as part of this request you can add the CreditLimit and CreditTerms for the customer |
| OrderCreateByChannel (request and response)  WebOrderGetBulkFulfillmentByChannel (response)  OrdersGetHistoryByChannel (response) | These methods now support the field ExternalOrderItemId to allow an external order item reference to be stored against the Retail Express Order line - e.g. the Shopify Item line ID.  **Note:** Only OrderCreateByChannel includes this field on the request - all other calls return the field in the response. |

For more information on the current version of eCommerce/Webstore API the see the [eCommerce/Webstore API Technical Document](https://galaxy.maropost.com/s/article/API-Plugin-Documentation).

[Back to top](#top)

---

## Retired APIs

The following deprecated APIs are being retired and will not be accessible:

* MYOB API
* eCommerce/Webstore V1

**Note:**These APIs were designed for V1 of Retail Express and are not used by any of our currently supported tools or plugins e.g. Accounting Link or Magento plugin. All clients currently operate on the latest version, 3.5.0 - it is only if you have built an external solution using our V1 API that you may need to review.

If you believe you are still using either API please contact [support@retailexpress.com.au](mailto:support@retailexpress.com.au?Subject=Retired%20APIs)

Want more information? [View all release notes.](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Fcategories%2F115000210393)