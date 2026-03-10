---
title: "Context Passing from FE"
articleID: 2042
category: "Merchandising Cloud Dashboard > Multimarket"
knowledgeBase: "Merchandising Cloud"
---

# Context Passing from FE

You can pass contextual information from your frontend to Merchandising Cloud APIs, enabling more sophisticated personalization based on user attributes, session data, or business context not available in standard integration. This capability helps enhance AI personalization by providing additional signals about customer segments, preferences, or contexts-supporting more targeted search results and recommendations that improve relevance and conversion through deeper understanding of individual customer situations.

Implementing context passing helps unlock advanced personalization scenarios. You can send user segment information, loyalty status, geographic data, or custom attributes that inform search ranking and recommendations-enabling personalization strategies that consider business rules and customer attributes beyond behavioral signals, supporting more sophisticated merchandising that balances AI-driven relevance with strategic business priorities for improved customer experience and conversion.

In order to return correct data in a search, collection or recommendation, the correct context needs to be passed to Merchandising Cloud in the request.

Here is a request sample for search-api, the multi-market part is context where locale region currency should be provided and if not the code will fallback to the default values for these fields.

json

```plaintext
{  "user": {    "lang": ["en-GB"],    "uid": "test1",    "sid": "ssid",    "email": "test@test .com",    "ip": "192.168.0.1",    "ua": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"  },  "q": "TESTQUERY",  "t_client": 1484742065791,  "filters": [    {      "name": "category1",      "type": "category",      "values": [{ "value": "TEST CATEGORY" }]    }  ],  "rules": [    {      "action": "top",      "name": "brand",      "type": "text",      "values": [{ "value": "TEST BRAND" }]    }  ],  "sort": [{ "field": "price", "order": "desc" }],  "offset": 0,  "limit": 20,  "log": false,  "context": { "locale": "en", "region": "SE", "currency": "SEK" }}
```