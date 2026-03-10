---
title: "Release Notes v1.9.1 - Shopify Connector"
articleID: 1157
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-12-01
---

# Release Notes v1.9.1 - Shopify Connector

# Release Notes v1.9.1 - Shopify Connector

**Release version:** 1.9.1 | **Release Date:** 18th November 2019

The latest update to the Shopify Connector provides support for third-party Fulfilment Services (offering greater flexibility and shipment tracking for online purchases) as well as an improvement to the order synchronisation process.

In this release:

- [Support for third-party Fulfilment Services](#fulfilment)
- [Resolutions](#resolutions)

### []()**Support for Third-Party Fulfilment Services**

When fulfilling orders from your online store, you may wish to utilise the services of various third-party fulfilment services, like couriers and specialised eCommerce transport companies. Some of these services offer online systems for tracking and dispatching your stock, and forwarding tracking reference numbers to your customers so they can view the status of their delivery.

Retail Express now supports the use of these services, so that fulfilment can be processed successfully.

> **Note:** Orders utilising a third-party fulfilment service must be processed in a single fulfilment - Retail Express does not support partial dispatch in these circumstances.

### Before you begin:

Before installing third-party shipping and fulfilment apps, please keep in mind the following:

- Retail Express should remain as the selected **Variant Fulfilment Service** for products in Shopify
- **Partial dispatch** is not supported
- **Shipping Confirmation emails** within Shopify should be **disabled** to avoid the customer receiving duplicate emails (as emails are typically sent directly from the third-party shipping software)
- **Retail Express must be used to fulfil the stock** at the end of the transaction process to ensure the inventory levels are correct and orders are finalised correctly

### The Fulfilment Process

Fulfilling online orders remains a three-step process:

1. Order is placed online
2. Third-party software used to dispatch the stock
3. Retail Express used to fulfil the order (and mark as complete)

Once orders have been placed online, the order will still flow through to Retail Express for inventory tracking and management. The third-party system is used to process and dispatch the order, which is then synchronised to Shopify. You would then use Retail Express (your point-of-truth for sales) to mark the order as Fulfilled, and therefore completed.

![shopifyfulfilmentprocess.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdyxEAA.jpg)
Related:[Shopify - Processing Online Sales](https://galaxy.maropost.com/s/article/Processing-Shopify-Sales)

For detailed information on how to fulfil your order within Retail Express, refer to the[ Shopify - Processing Online Sales](https://galaxy.maropost.com/s/article/Processing-Shopify-Sales) article.

## []()**Resolutions**

|  |  |
| --- | --- |
| Order synchronisation | A fix has been made to resolve an intermittent issue where payments were not synchronised to the order in Retail Express. Typically this would occur when there were delays in receiving notifications from Shopify. |

Want more information?[View all release notes](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Fcategories%2F115000210393)