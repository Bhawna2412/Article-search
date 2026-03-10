---
title: "Only X Left Sticker"
articleID: 2182
category: "Shopify Liquid FE > Grid and Product Cards (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Only X Left Sticker

You can display "Only X Left" inventory stickers on product cards to create urgency and encourage faster purchasing decisions when stock levels are low. This scarcity indicator helps customers understand product availability at a glance, which can motivate quicker action and help improve conversion rates for limited-inventory items.

Showing real-time inventory levels through stickers leverages scarcity as a conversion driver, helping reduce hesitation when customers are considering a purchase. This transparency about stock availability not only creates urgency but also sets appropriate expectations, potentially reducing cart abandonment by signaling when products are in limited supply.

The ‘Only X Left!’ sticker is a valuable tool to create a sense of urgency and scarcity, encouraging customers to make a purchase decision quickly.

This documentation outlines the steps to set up the "Only X Left!" sticker on product cards within your Merchandising Cloud-powered Shopify store.

**Integration Steps**

**Step 1: Activate Toggle in Merchant Dashboard**

1. 
2. 

![d8024da646e64d3bb6a0dea90b4798260ef7ff57cef383f40009a051f29a1638-image_20.jpeg](https://us.v-cdn.net/6038474/uploads/KHM0WKDZZ5U2/d8024da646e64d3bb6a0dea90b4798260ef7ff57cef383f40009a051f29a1638-image-20.jpeg)
**Step 2: Create **`<strong>findify-product-stickers.liquid</strong>`** in Snippets**

1. 
2. 
3. 

JSX

```twig
{%- liquid  assign quantity = quantity | plus: 0-%}<div class="findify-quantity-sticker">  {% if quantity > 0 -%}    Only {{ quantity }} left!  {% else -%}    out of stock  {%- endif %}</div>
```

**Step 3: Add Styles to **`<strong>findify-product-card.css</strong>`

1. 
2. 

CSS

```css
.findify-quantity-sticker {  color: #515151;  font-family: Inter;  font-size: 8px;  font-style: normal;  font-weight: 700;  line-height: 2;  text-transform: uppercase;}
```

**Step 4: Integrate Code into **`<strong>findify-product-card.liquid</strong>`

1. 
2. 

JSX

```twig
{% render 'findify-product-stickers', quantity: quantity %}
```

**Conclusion**

By following these straightforward steps, you can effectively set up the "Only X Left!" sticker on product cards within your Shopify store. Create a sense of urgency and drive conversions by showcasing product availability in a clear and compelling manner.

For further assistance or inquiries, feel free to contact us on [support@maropost.com](mailto:support@maropost.com)