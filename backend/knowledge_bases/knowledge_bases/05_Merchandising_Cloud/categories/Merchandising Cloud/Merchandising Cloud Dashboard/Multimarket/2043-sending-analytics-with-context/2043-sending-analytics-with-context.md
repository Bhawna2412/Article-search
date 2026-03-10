---
title: "Sending Analytics with Context"
articleID: 2043
category: "Merchandising Cloud Dashboard > Multimarket"
knowledgeBase: "Merchandising Cloud"
---

# Sending Analytics with Context

You can send contextual data along with analytics events to enrich behavioral tracking with business-specific attributes, enabling more sophisticated analysis and personalization based on customer segments, purchase history, or other contextual factors. This enhanced analytics capability helps you understand how different customer types interact with search and products, supporting data-driven optimization decisions that improve relevance and conversion for specific segments.

Implementing context-enriched analytics helps unlock deeper insights into customer behavior patterns. You can track how different user segments, loyalty tiers, or customer attributes correlate with search and conversion patterns-enabling more targeted personalization strategies and merchandising decisions that account for business context beyond basic behavioral signals, supporting optimization efforts that balance AI-driven personalization with strategic segmentation for improved overall conversion.

In order to correctly record analytics, the correct context needs to be passed into the feedback API.

Here is the sample for feedback-api, the multimarket part is context where locale region currency should be provided and if not the code will fallback to the default values for these fields.

json

```plaintext
{  "user": {    "lang": ["en-GB"],    "uid": "test1",    "sid": "ssid",    "email": "test@test .com",    "ip": "192.168.0.1",    "ua": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"  },  "t_client": 1484742065791,  "log": false,  "event": "click-item",  "properties": {    "rid": "r-ea052570-c9a6-4ff1-a5b4-538adb8a1050",    "item_id": "6411354119"  },  "context": { "locale": "en", "region": "SE", "currency": "SEK" }}
```