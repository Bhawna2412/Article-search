---
title: "Release Notes v3.8.0 - Shopify Connector"
articleID: 1142
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-12-01
---

# Release Notes v3.8.0 - Shopify Connector

# Release Notes v3.8.0 - Shopify Connector

**Release Date:** 19th September 2019

In this release we have made 2 changes to the Shopify Connector. For detailed information about all updates to the connector, please refer to the [Shopify Connector Release Notes](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Fsections%2F360000126276).

### **Synchronise SEO Title**

A new setting has been introduced to synchronise the SEO Title for products directly from Retail Express.

The title tag is shown in search engine results, and provides information to people searching for keywords related to your products. A good title  encourages customers to click the link in search results to visit your store.

Using Retail Express, you can select which of your Product fields you would like to use as the SEO Product Title (from the Short Description or one of the Custom fields)

![rtaImage (81).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphMfEAI.jpg)

### Do not Sync option

If you prefer not to synchronise the SEO Title from Retail Express, you can utilise the "Do not Sync" option. When a product is first synchronised from Retail Express to Shopify the Product Title will be used as the SEO title (the default Shopify behaviour). Any further synchronisations from Retail Express will ignore this field.

During the initial setup and mapping of existing products on Shopify, if the Do not Sync option has been selected the information on Shopify will not be overwritten.

If you choose to synchronise this information from a Retail Express field at a later date, a full product synchronisation will be triggered.

![mceclip0 - 2023-07-09T223312.809.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphMkEAI.jpg)

### Configure the SEO Title field

1. Navigate to **Settings > Integrations > Shopify**
2. Click the **pencil icon **to edit your Integration settings
3. Locate the **Product Sync Settings **section
4. Select your preference from the **Sync SEO Title From **field
5. Click **Save**

### **Resolutions**

Below is a list of resolutions included in the latest Maintenance Release:

|  |  |
| --- | --- |
| Gift Voucher Synchronisation | Vouchers without an expiry date are now synchronised to Shopify correctly (note voucher codes must have a minimum of 8 characters and a maximum of 20 in order to synchronise) |

Want more information? Find related articles here:

- [View All Release Notes](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Fcategories%2F115000210393)
- [Release Notes - API Updates](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Fsections%2F360000149596)