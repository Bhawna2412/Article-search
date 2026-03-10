---
title: "Release Notes 3.12.2 - API Updates"
articleID: 1280
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-05-11
---

# Release Notes 3.12.2 - API Updates

# Release Notes 3.12.2 - API Updates

**Release Date:** 8th July 2020

In this release we've added a new Special Orders indicator to the Inventory Planning API, and resolved an issue with the eCommerce API.

|  |  |
| --- | --- |
| Inventory Planning | Added a new field to the **GetPurchaseOrdersDetailed** method to indicate whether a Purchase Order is linked to Special Order Items. The "**HasLinkedSpecialOrders**" field should not be confused with the legacy field "**SpecialOrder**", which always returns False for new orders.  Details:   * Name - HasLinkedSpecialOrders * Type - Boolean * Description - Contains items for Special Order items |
| eCommerce | Resolved an issue with the **OrderCreate** method to return a Successful response when an order is created to a Fulfilment Outlet containing the "&" symbol. |