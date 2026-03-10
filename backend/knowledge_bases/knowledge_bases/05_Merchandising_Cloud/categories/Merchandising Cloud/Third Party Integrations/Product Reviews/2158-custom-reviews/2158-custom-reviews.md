---
title: "Custom Reviews"
articleID: 2158
category: "Third Party Integrations > Product Reviews"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-09-26
---

# Custom Reviews

If you are not using a specific platform for reviews, we offer a way to integrate your reviews within our products, thanks to a review feed.

The review feed is a file, publicly available, that Maropost Merchandising Cloud (formerly Findify) can download at any moment. We support these formats: **json**, **jsonl** and **csv**

## Format of the review feed

Each review must be composed of the next 3 information:

- **product_id**: String representing your product ID
- **rating**: Double containing the average score of the reviews on your product
- **count**: Int representing the total number of reviews on your product

JSONJSONLCSV

```json
[{"product_id":"7398263","rating":4.8,"count":5},{"product_id":"3726293","rating":3.7,"count":13},{"product_id":"2638351","rating":5,"count":1},{"product_id":"1653590","rating":3.8,"count":28}]
```

## Enable the reviews

Send an email to [support@maropost.com](mailto:support@maropost.com) with your URL containing all the reviews information formatted like the above. We will enable the reviews for you on your products.