---
title: "Judge.me"
articleID: 2218
category: "Shopify Liquid FE > Reviews Integrations (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Judge.me

You can integrate Judge.me reviews with Merchandising Cloud to display customer ratings and verified reviews on product cards in search results and collections. This review integration helps build customer confidence by providing social proof at the critical product discovery stage.

Judge.me integration enables you to leverage customer reviews as a conversion tool by displaying ratings and review counts directly in search results. This social proof helps customers make faster, more confident purchasing decisions by providing trust signals during the browsing phase, which can help improve conversion rates by reducing purchase hesitation.

This guide provides detailed instructions on how to integrate Judge.me reviews into your Shopify store using our app. The integration enhances product cards by displaying Judge.me review badges, improving customer trust and engagement.

![24ce75005df589c5e17ca4d992a64acab5698a1c75d3b72156f541267c6497ae-Screenshot_2024-08-06_113533.png](https://us.v-cdn.net/6038474/uploads/KN15IKFNEMUZ/24ce75005df589c5e17ca4d992a64acab5698a1c75d3b72156f541267c6497ae-screenshot-2024-08-06-113533.png)

## Steps to Integrate Judge.me Reviews

### Step 1: Enable Judge.me App

1. 
  **Install and Configure Judge.me:**
  - 

### Step 2: Add Judge.me Widget Code to Product Cards

1. 
  **Open the Product Card Template:**
  - 
  - 
  - 
2. 
  **Insert Judge.me Widget Code:**
  - 

HTML

```twig
<div class='jdgm-widget jdgm-preview-badge' data-id='{{ product.id }}'>  {{ product.metafields.judgeme.badge }}</div>
```

### Step 3: Save and Publish

1. 
  **Save Changes:**
  - 
2. 
  **Verify Integration:**
  - 

## Customization and Further Enhancements

- 
  **Customizing the Badge Appearance:**
  - 
- 
  **Testing and Debugging:**
  - 

For further assistance or inquiries, feel free to contact us at [support@maropost.com](mailto:support@maropost.com)