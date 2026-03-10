---
title: "Custom Reviews"
articleID: 2221
category: "Shopify Liquid FE > Reviews Integrations (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Custom Reviews

You can integrate custom review data from your existing review system into Merchandising Cloud to help improve product discovery and customer confidence. When review ratings and counts appear on product cards, shoppers can make more informed decisions during search and browsing, which helps improve conversion rates and reduces product return rates.

Custom review integration enables you to leverage your existing review infrastructure while maintaining consistent social proof throughout the shopping experience. This helps customers find highly-rated products faster and provides the trust signals needed to guide purchase decisions effectively.

For stores that do not use a third-party review app, we allow you to integrate custom reviews via a review feed. This feed can be in JSON, JSONL, or CSV format and must be publicly accessible.

## Step 1: Format the Review Feed

To enable custom reviews, you must create a review feed with the following format:

1. 
2. 
3. 

Here are examples of how the feed should look in different formats:

**JSON Format:**

JSON

```json
[{"product_id":"7398263","rating":4.8,"count":5},{"product_id":"3726293","rating":3.7,"count":13},{"product_id":"2638351","rating":5,"count":1},{"product_id":"1653590","rating":3.8,"count":28}]
```

**JSONL Format:**

```json
{"product_id":"7398263","rating":4.8,"count":5}{"product_id":"3726293","rating":3.7,"count":13}{"product_id":"2638351","rating":5,"count":1}{"product_id":"1653590","rating":3.8,"count":28}
```

**CSV Format:**

```applescript
"product_id","rating","count""7398263","4.8","5""3726293","3.7","13""2638351","5","1""1653590","3.8","28"
```

## Step 2: Submit the Review Feed

Once you have created the review feed in one of the supported formats, send it to us for integration:

1. 
2. 

## Step 3: Display Reviews on Product Pages

After the reviews are enabled, you can display the ratings on your product cards by adding the following code to your `findify-product-card.liquid` file:

HTML

```applescript
<div class="custom-review" data-product-id="{{ product.id }}">  <span class="rating">{{ custom_reviews[product.id].rating }}</span>  <span class="review-count">({{ custom_reviews[product.id].count }} reviews)</span></div>
```

This code snippet will display the average rating and the total number of reviews for each product based on your custom review feed.

For further assistance or inquiries, feel free to contact us at [support@maropost.com](mailto:support@maropost.com)