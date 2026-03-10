---
title: "Trustpilot"
articleID: 2215
category: "Shopify Liquid FE > Reviews Integrations (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Trustpilot

You can integrate Trustpilot reviews with Merchandising Cloud to display customer ratings and reviews directly on product cards in search results and collections. This social proof integration helps customers make more confident purchasing decisions by surfacing trust signals at the moment of product discovery.

Trustpilot integration brings verified customer reviews into your search experience, helping improve conversion by providing credibility indicators when customers are evaluating products. By displaying star ratings and review counts on product cards, you leverage social proof to build trust and help customers feel more confident in their purchasing decisions.

We offer a number of integrations with complementing services and plugins. In this guide, we will walk you through how to set up the Trustpilot reviews app on your Shopify store using Maropost Merchandising Cloud (formerly Findify) and Liquid.

To start, you must have already downloaded the Trustpilot app from the [Shopify App Store.](https://apps.shopify.com/trustpilot-reviews)

![4b24d94-Trustpilot.png](https://us.v-cdn.net/6038474/uploads/715FLBGUPW0G/4b24d94-trustpilot.png)

## Step 1: Configure SKU Field in Merchant Dashboard

1. 
2. 

![0aa0af8-Untitled_10.png](https://us.v-cdn.net/6038474/uploads/QPO2RDU8AF0Y/0aa0af8-untitled-10.png)

## Step 2: Embed Trustpilot Widget in `findify-product-card.liquid`

1. 
2. 

HTML

```kotlin
<div  id="trustpilot"  className="trustpilot-widget"   data-locale="en-GB"   data-template-id="54d39695764ea907c0f34825"   data-businessunit-id="5bc466923a10040001a46a8f"   data-style-height="24px"   data-style-width="100%"   data-theme="light"   data-sku="{{ sku }}"  data-star-color="#00b67a"   data-no-reviews="hide"   data-scroll-to-list="false"/>
```

> **Note:** **Note:** Ensure that the Trustpilot widget code is correctly embedded within your `findify-product-card.liquid` file. Replace `{{ sku }}` with the Liquid variable that contains the SKU for each product.

By following these steps, you can seamlessly integrate Trustpilot Reviews into your Shopify store. This integration enhances customer trust and provides valuable social proof directly on your product pages.

For further assistance or inquiries, feel free to contact us at [support@maropost.com](mailto:support@maropost.com)