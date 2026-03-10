---
title: "Stamped"
articleID: 2220
category: "Shopify Liquid FE > Reviews Integrations (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Stamped

You can integrate Stamped.io reviews into your Merchandising Cloud product cards to help improve customer trust and product discovery. When review ratings appear directly in search results and collection pages, shoppers can quickly evaluate product quality without leaving their browsing experience, which tends to enhance conversion rates and reduce bounce rates.

Displaying customer reviews throughout your search and discovery experience enables you to leverage social proof at critical decision points in the customer journey. This helps customers find products that match their expectations while providing the confidence needed to complete purchases more quickly.

We support integration with Stamped.io, allowing you to showcase product reviews on your Shopify product pages. Follow the steps below to integrate Stamped Reviews with Maropost Merchandising Cloud (formerly Findify).

![6fb7ac29a482f20210406d0aa553f8c0d2458cca374e77f9443dc8ef07b1b902-Screenshot_2024-11-21_231747.png](https://us.v-cdn.net/6038474/uploads/OUX734VV79CY/6fb7ac29a482f20210406d0aa553f8c0d2458cca374e77f9443dc8ef07b1b902-screenshot-2024-11-21-231747.png)

## Step 1: Install and Configure Stamped on Your Shopify Store

1. 
2. 

## Step 2: Add Stamped Widget to `findify-product-card.liquid`

To display Stamped reviews on your product cards, paste the following widget code into your `findify-product-card.liquid` template:

HTML

```haskell
<spanclass="stamped-product-reviews-badge"data-id="{{ id }}"data-product-sku="{{ product.handle }}"data-product-type="{{ product.type }}"data-product-title="{{ product.title }}"style="display:block;"></span>
```

## Step 3: Customize the Integration (if necessary)

You may adjust the appearance of the Stamped widget according to your store’s design needs. Consult [Stamped's documentation](https://help.stamped.io/) for advanced customization.

For further assistance or inquiries, feel free to contact us at [support@maropost.com](mailto:support@maropost.com)