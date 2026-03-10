---
title: "New In Sticker"
articleID: 2183
category: "Shopify Liquid FE > Grid and Product Cards (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# New In Sticker

You can add "New In" stickers to product cards to highlight recently added items and draw customer attention to fresh arrivals in your catalog. These visual badges help customers quickly identify new products, supporting your merchandising strategy by showcasing the latest additions and keeping your store feeling current and dynamic.

Implementing "New In" badges enables you to spotlight fresh inventory and seasonal collections, encouraging customers to explore recent additions they might otherwise miss. This visual merchandising tool helps maintain customer interest by highlighting catalog freshness, which can help improve engagement with new product launches and support your ongoing merchandising initiatives.

This guide outlines the steps to add a "New In" sticker to products in your Shopify store using the Maropost Merchandising Cloud (formerly Findify) app. This feature will highlight new products added to your store within the last 30 days.

## Steps to Implement the "New In" Sticker

### Step 1: Configure `created_at` Field in Merchant Dashboard

1. 
  **Go to the Merchant Dashboard:**
  - 
2. 
  **Enable **`<strong>created_at</strong>`** Field:**
  - 

![62b83914497611953c21401bb705f577f869a58b45776061224683eca164c94a-Untitled_17.png](https://us.v-cdn.net/6038474/uploads/7U0VCCIJXWT0/62b83914497611953c21401bb705f577f869a58b45776061224683eca164c94a-untitled-17.png)

### Step 2: Assign `created_at` Variable in Shopify Theme

1. 
  **Navigate to Shopify Theme Editor:**
  - 
  - 
2. 
  **Edit **`<strong>findify-product-connector.liquid</strong>`** File:**
  - 
  - 

```twig
{% if query_parameters contains "created_at=" %}  {% assign created_at = query_parameters | split: "created_at=" | last | split: "&" | first %}{% endif %}
```

![74b1c9b152a9c28658a952f353d23dd6404738e1f50a06fc9a461e02b0c16744-Untitled_18.png](https://us.v-cdn.net/6038474/uploads/08XENAC25O8B/74b1c9b152a9c28658a952f353d23dd6404738e1f50a06fc9a461e02b0c16744-untitled-18.png)

### Step 3: Display the "New In" Sticker in Product Cards

1. 
  **Edit **`<strong>findify-product-card.liquid</strong>`** File:**
  - 
  - 

```twig
{% assign current_time = 'now' | date: "%s" | times: 1000 %}{% assign time_difference = current_time | minus: created_at %}{% assign days_difference = time_difference | divided_by: 1000 | divided_by: 60 | divided_by: 60 | divided_by: 24 %}{% if days_difference < 30 %}  <div class="findify-sticker">    New In  </div>{% endif %}
```

### Step 4: Add CSS for the Sticker

1. 
  **Edit **`<strong>findify-product-card.css</strong>`** File:**
  - 
  - 

CSS

```css
.findify-sticker {  position: absolute;  top: 10px;  right: 10px;  background: #fff;  font-size: 12px;  padding: 2px 4px;  border-radius: 4px;  color: #333;  font-weight: bold;}
```

## Conclusion

By following these steps, you will successfully add a "New In" sticker to products that have been added to your store within the last 30 days. This will help highlight new products and potentially increase customer engagement and sales.

For further assistance or inquiries, feel free to contact us at [YourFriends@Findify .io](mailto:YourFriends@Findify.io)