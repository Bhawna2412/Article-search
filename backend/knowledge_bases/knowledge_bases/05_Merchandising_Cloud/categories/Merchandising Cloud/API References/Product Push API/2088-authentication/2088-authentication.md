---
title: "Authentication"
articleID: 2088
category: "API References > Product Push API"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Authentication

This section illustrates a complete example scenario of how data is structured and ingested when using the Multimarket Push API from Maropost Merchandising Cloud (formerly Findify). It defines market setups, product catalog data, translations, pricing, availability, and warehouse configurations - giving developers a full context for building and validating test cases.

## **Base URL**

**POST **[`https://pushapi.findify.io/v3/${endpoint}`](https://pushapi.findify.io/$%7Bendpoint%7D)

Before you push data, contact support at [support@maropost.com](mailto:support@maropost.com) to enable Push API and Multimarket functionality for your account.

## API Authentication

To authenticate API requests, use your **Private Access Key**.

### Get Your Key

Visit the Merchant Dashboard:➡️ [https://dashboard.findify.io/setup/integration](https://dashboard.findify.io/setup/integration)

![jxnd4o.png](https://us.v-cdn.net/6038474/uploads/S277M268H85Q/jxnd4o.png)

### Authorization Header

When you have your private API key, you simply need to provide a header **Authorization** with the value **Bearer PRIVATE_ACCESS_KEY**.

```bash
--header 'Authorization: Bearer ${ACCOUNT_PRIVATE_ACCESS_KEY}' 
```

Need help? Contact [support@maropost.com](mailto:support@maropost.com)

## **Response Codes**

| **HTTP Code** | **Description** |
| --- | --- |
| 201 | Operation has been successfully executed |
| 400 | Payload contains item groups that don't pass validation |
| 401 | Your Private Access Key is not valid |
| 403 | Push API is not configured. Reach out to Support |