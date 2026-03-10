---
title: "Neto by Maropost Release Notes – 19 Oct 2023"
articleID: 2133
category: "2023 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-15
---

# Neto by Maropost Release Notes – 19 Oct 2023

## **Overview**

This release includes eCommerce releases** 6.267.0**, **6.268.0**, **6.269.0**, **6.270.0**.

## **Enhancements**

### **Enhanced Security at Checkout**

To mitigate the risk of card testing attacks, we have strengthened our bot detection rules on Checkout. Visitors who are deemed likely to be bots will be presented with a Captcha upon accessing the Cart or Checkout page.

** **

### **New Parameters for AddOrder API**

A new parameter called **Extra Options** is introduced in **AddOrder** and **CreateOrder** APIs. The parameter accepts a list of objects consisting of name-value pairs and enables you to include additional personalized details for the orders.

For more information, refer to [**AddOrder API**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdevelopers.maropost.com%2Fdocumentation%2Fengineers%2Fapi-documentation%2Forders-invoices%2Faddorder).

**  **

### **Custom Configuration for Automatically Synching eBay Data**

We introduced a new advanced configuration that automatically re-synchs the eBAY orders and transactions from the last 24 to 72 hours, once per day - overnight. The purpose of this feature is to catch any order that may have failed to sync to Neto as part of the normal order sync process that takes place throughout the day.

By default, the process checks for and imports any missing orders and transactions for the last 24 hours. You can edit the configuration to change the time interval to any value between 0 to 72 hours.

![Config](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Config.0685g00000HgwRwAAJ.png)

### **Changed Default Settings for PayPal Pay in 4**

The PayPal Pay in 4 feature is by default enabled in PayPal configuration, that is, on the Edit Payment Method page. You can update this option as per your requirements.

![Payin4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Payin4.0685g00000HgwG5AAJ.png)

## **Fixes**

- 
- 
- 
- 
- 

** **