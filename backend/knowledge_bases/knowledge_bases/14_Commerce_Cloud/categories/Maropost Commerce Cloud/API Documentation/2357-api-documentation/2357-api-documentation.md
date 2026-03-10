---
title: "API Documentation"
articleID: 2357
category: "API Documentation"
knowledgeBase: "Commerce Cloud"
lastUpdated: 2025-12-09
---

# API Documentation

The Maropost Commerce Cloud (MCC) API allows developers to integrate directly with your online store, enabling automation, custom storefronts, data sync, and third-party application development. This article provides an overview of the API and links to the full developer reference.

## **What You Can Do With the API**

Developers can use the MCC API to programmatically manage store data across a wide range of business functions, including:

- **Products & Catalog Management** Create, update, import, or fetch product information, variants, pricing, and categories.
- **Orders & Fulfillment** Retrieve order details, update fulfillment statuses, manage shipping, and sync external systems.
- **Customers** Create customer accounts, update profile information, retrieve purchase history, or manage contact records.
- **Inventory** Fetch or update stock levels, manage warehouses, and sync inventory with external systems.
- **Sales Channels** Automate sales channel creation, configuration, and store management tasks.

# **API Base URL**

All API endpoints are served via:

```css
https://commerce-api.maropost.com/
```

# **Authentication**

The MCC API uses **API Keys** for authentication. You must include your API key in every request:

```http
Authorization: Bearer YOUR_API_KEY
```

If the key is missing or invalid, the request will return a `401 Unauthorized` error.

# **Available Resources & Endpoints**

The API provides read and write access to all major data types in Commerce Cloud. Below is a high-level summary:

### **Products & Variants**

- Create or update products
- Retrieve product data
- Manage variants, attributes, images, and custom fields

### **Orders**

- Retrieve order lists
- Get detailed order data
- Update order or fulfillment status
- Manage shipments

### **Customers**

- Create and manage customer accounts
- Retrieve customer profiles and orders
- Update contact information

### **Inventory**

- Get stock by warehouse
- Update inventory quantities
- Manage availability across channels

### **Store Settings**

- Retrieve store configurations
- Update store properties where supported

### **Sales Channels**

- Fetch existing channels
- Create or manage sales channel configurations

### **Webhooks**

- Register webhook endpoints
- Subscribe to event types
- Receive real-time notifications

To view all endpoints, parameters, schemas, and response objects, use the full API reference below.

# **API Documentation (Full Reference)**

For complete endpoint definitions, request/response schemas, authentication details, and response examples, visit the official Maropost Commerce Cloud API documentation: [API Documentation](https://commerce-api.maropost.com/redoc/)

This documentation is updated automatically with every API release.

# **Sample Request (GET Products)**

```nginx
curl -X GET "https://commerce-api.maropost.com/v1/products" \  -H "Authorization: Bearer YOUR_API_KEY" \  -H "Content-Type: application/json"
```

**Example Response (simplified):**

```json
{  "data": [    {      "id": "12345",      "title": "Men’s Running Shoes",      "sku": "RUN-001",      "price": 89.99    }  ]}
```

# **Error Handling**

Common error codes include:

| Status Code | Meaning |
| --- | --- |
| **400** | Bad Request (invalid parameters) |
| **401** | Unauthorized (missing/invalid API key) |
| **404** | Resource Not Found |
| **409** | Conflict (duplicate data, processing issue) |
| **429** | Rate Limit Exceeded |
| **500** | Internal Server Error |

# **Need Help?**

If you need assistance integrating with the MCC API, contact your us at [support@maropost .com](mailto:support@maropost.com) or submit a support request via the Help Center.