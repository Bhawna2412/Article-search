---
title: "Yotpo"
articleID: 2219
category: "Shopify Liquid FE > Reviews Integrations (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Yotpo

You can integrate Yotpo reviews directly into your product search and discovery experience to help improve customer confidence and conversion rates. When customer reviews and ratings are visible on product cards, shoppers can quickly assess product quality during their search, which helps improve purchase decisions and tends to enhance add-to-cart rates.

Displaying social proof through review integrations enables you to leverage customer feedback to guide product discovery. This helps customers find products that match their needs while reducing purchase hesitation through authentic product ratings displayed throughout the shopping journey.

We integrate seamlessly with Yotpo Reviews to display customer feedback on your Shopify product pages. Follow the steps below to display Yotpo reviews on your product cards.

![86b6b75ac320842b56206230251ef7afb2b8e9af57b10aa606a852bdbcab6de3-Screenshot_2024-11-21_231515.png](https://us.v-cdn.net/6038474/uploads/QTR1YN0PNUXH/86b6b75ac320842b56206230251ef7afb2b8e9af57b10aa606a852bdbcab6de3-screenshot-2024-11-21-231515.png)

## Step 1: Install and Configure Yotpo on Your Shopify Store

1. 
2. 

## Step 2: Add Yotpo Widget to `findify-product-card.liquid`

To display Yotpo reviews on your product cards, you need to insert the following widget code into your `findify-product-card.liquid` template.

HTML

```haskell
<div  class="yotpo bottomLine"  data-product-id="{{ product.id }}"  data-name="{{ product.title | escape }}"  data-url="{{ shop.url }}{{ product.url }}"  data-image-url="{{ product.featured_image | product_img_url: 'large' | replace: '?', '%3F' | replace: '&', '%26' }}"  data-price="{{ variant.price | money_without_currency }}"  data-currency="{{ shop.currency }}"  data-description="{{ product.description | escape }}"></div>
```

## Step 3: Customize the Integration (if needed)

You can customize the styling or additional attributes of the Yotpo widget by referring to the [Yotpo documentation](https://help.yotpo.com/).

For further assistance or inquiries, feel free to contact us at [support@maropost.com](mailto:support@maropost.com)