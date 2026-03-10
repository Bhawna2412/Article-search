---
title: "Release Notes 3.12.1 - Warehouse Management System (WMS)"
articleID: 1279
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-05-11
---

# Release Notes 3.12.1 - Warehouse Management System (WMS)

# Release Notes 3.12.1 - Warehouse Management System (WMS)

**Release Date:** 17th June 2020

In this release we've added a new method to the Warehouse Management System API to further extend the integration capabilities.

---

### New Method "GetCustomerOrdersExtended"

The new "GetCustomerOrdersExtended" method builds upon the current "GetCustomerOrders" method to offer additional information on your orders and products:

|  |  |
| --- | --- |
| OrderHeader | New values:   * OrderTotal * TaxFree   Populated with values:   * ExternalOrderId * ExternalCustomerId * IsWebServiceOrder |
| OrderItems | New values:   * UnitPrice * TaxRateApplied   Populated with values:   * QtyOrdered * QtyFulfilled |

This method also excludes the following data:

OrderHeader:

* DateOfBirth
* DateOfBirthWithheld
* ReceivePost
* ReceiveSms
* OrderType
* ReceiveNews
* ExportToWSI

No changes have been made to the existing "GetCustomerOrders" method.

Want more information? [View all Release Notes](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Fsections%2F360000149596).