---
title: "Release Notes v1.9.20 - Shopify Connector"
articleID: 1298
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-05-11
---

# Release Notes v1.9.20 - Shopify Connector

# Release Notes v1.9.20 - Shopify Connector

**Release Date:** 8th June 2021

In this release we've made some improvements to the payment and order synchronisations.

**Changes:**

|  |  |
| --- | --- |
| Payment Synchronisation | Payments are synchronised separately from the Order synchronisation to allow for delays in payment success responses from merchants e.g. Paypal. If the payment synchronisation cannot be performed on the initial attempt it will be retried at regular intervals - 10mins, 30mins and so on.  In this release we've added an additional retry at 5mins to allow for faster synchronisation of payments against an order.  The payment synchronisation will be retried at the following intervals:   * Initial synchronisation * 5mins * 10mins * 30mins * 60mins * 100mins   Refer to the [Processing Online Sales](https://galaxy.maropost.com/s/article/Processing-Shopify-Sales) article for more information on the Order and Payment Synchronisation process. |
| Order synchronisation | Resolved an issue that prevented orders from synchronising in specific circumstances where the customer was duplicated in the Shopify Connector. |