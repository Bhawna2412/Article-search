---
title: "Marketing Cloud Release Notes – 6 Feb 2024"
articleID: 1794
category: "2024 Releases"
knowledgeBase: "MC Release Notes"
lastUpdated: 2025-08-07
---

# Marketing Cloud Release Notes – 6 Feb 2024

### **OVERVIEW:**

This release consists of an important API update.

### **ENHANCEMENT:**

#### **Changed Return Type for the GET /orders API**

For any Order ID, the GET /orders API now returns an array of all the order records associated with it, instead of a single order record.

This change eliminates the shortcoming in cases where there are multiple Order records, all having the same Original Order ID. Such a case is when the integration with an e-commerce platform posts status updates for the same order.

See the API details and the sample codes in the **PRODUCT/REVENUE API section** of the [**API Reference**](https://api.maropost.com/api).

Please check your integration for any impact, if you haven’t already! And, if you have any questions, please reach out to **support@maropost.com**.