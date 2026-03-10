---
title: "Neto by Maropost Release Notes – 30 Jun 2023"
articleID: 2122
category: "2023 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-14
---

# Neto by Maropost Release Notes – 30 Jun 2023

## **Overview**

This release note covers the eCommerce release **6.255.0** and **6.256.0**.

## **Enhancements**

### **Added New Parameters to the Product APIs**

Three new parameters have been added to the Product [**AddItem**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdevelopers.maropost.com%2Fdocumentation%2Fengineers%2Fapi-documentation%2Fproducts%2Fadditem)/[**GetItem**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdevelopers.maropost.com%2Fdocumentation%2Fengineers%2Fapi-documentation%2Fproducts%2Fgetitem)/[**UpdateItem**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdevelopers.maropost.com%2Fdocumentation%2Fengineers%2Fapi-documentation%2Fproducts%2Fupdateitem%2F) APIs to help you get your reporting data easily:

- 
- 
- 

To learn more about the Product API endpoints, see [Engineers API documentation Products](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdevelopers.maropost.com%2Fdocumentation%2Fengineers%2Fapi-documentation%2Fproducts). 

### **Updated the Default Cache Time for Order Count in the Order Status Menu**

The default cache time for order count in the order status menu has been reduced to 180 seconds. The default cache time was recently increased to 360 seconds to optimize performance. However, based on multiple merchant feedback, we are reducing it to 180 seconds, so as to find a balance between the performance and database change reflection.

### **Continued Improvement in Error Handling and Logging**

We have continued to make improvements in error handling and logging around payment transactions/failures. You’ll notice more targeted error messages and specific details in error logs, helping you assess and fix issues faster.

![Error Message Example](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ErrorMessageExample.0685g00000FRlrVAAT.png)

## **Fixes**

- 
- 
- 

## **Deprecation**

The **TradeSquare** addon (built by **CrescoData**) is no longer supported. [TradeSquare](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.tradesquare.com.au%2F) is shutting its operation, and therefore, the TradeSquare addon has been removed from our Addon store. If you're already using it, you may still continue to do so. However, the addon is not available to be installed.