---
title: "Neto by Maropost Release Notes – 1 Aug 2024"
articleID: 2110
category: "2024 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-14
---

# Neto by Maropost Release Notes – 1 Aug 2024

## Overview

This release contains updates of Ecommerce versions v.**6.302.0 **to v.**6.304.0**.

## **Enhancements and Updates**

### **Implementation of Cross-Site Scripting (XSS) in Neto**

- 
- 
  The system will detect and cleanse input submissions with disallowed, potentially malicious scripts. Users attempting to input such scripts will be presented with the error:

  ![error message](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image4.068J10000038cxLIAQ.png)
- 
  The automated detection can be turned off by admin users by disabling the **ENABLE_XSS_PROTECTION** config under **Settings & Tools** > **All Settings & Tools** > **Other** > **Advanced Configuration**.

  ![enable_xss_protection](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240731at24748PM.068J10000038cxzIAA.png)

## **Fixes**

**Process Refund UI fixed**

In a few instances, when double-clicking the **Process Refund** button on the refund page, duplicate refund entries were getting created in the system. This has been fixed to accommodate only 1 refund entry at the time of processing the request. 

**Character Limit for Promotion Tag decreased**

Previously, the **Promotion Tag** field on the Pricing & Tax section of the product page displayed a limit of 30 characters. The UI has been updated to the correct limit of 25 characters as shown below:
![Promotion Tag Character Limit](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240731at21352PM.068J10000038cy9IAA.png)

**eWay Payment Gateway Incorrectly Reporting Unsuccessful Payments**

In the case of payment attempts returning a **Timeout** response from the eWay payment gateway, such payments were previously marked as successful in Neto, and therefore the order would appear as fully paid even if the payment eventually failed.

To prevent this, orders with payments returning a **Timeout** response from eWay are now put **On Hold** with a high Fraud Score to indicate that the payment outcome should be reviewed.

**AddRma API Issue Fixed**

An issue affected the AddRma API, where the below error was returned if the RefundAmount was greater than the Product Subtotal:

**<Message>Refund: RefundAmount XXX exceed Rma refund total of XX</Message>**

The issue was due to the system not including the Shipping cost in the Rma refund total, and has now been resolved.

**Stripe Payment Forms Failing to Load on Mobile**

In some cases, when customers tried to pay on the checkout page using a mobile phone browser, the Stripe card payment forms did not load when selected. This issue has been fixed.