---
title: "Neto by Maropost Release Notes – 7 Aug 2024"
articleID: 2111
category: "2024 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-14
---

# Neto by Maropost Release Notes – 7 Aug 2024

## Overview

This release contains updates of the eCommerce version v.**6.305.0 **and POS version **v.1.30.0.**

## **Enhancements and Updates**

### **Introducing Neto POS Stock Control**

The [Neto POS Stock Control](https://galaxy.maropost.com/s/article/Setup-POS-Stock-Control) feature helps merchants prevent overselling, especially for items physically not present at the register. It checks live (available) stock levels and alerts the operator at the register’s location if any item lacks sufficient stock for the sale. 

### **View Available Stock for Each Item**

After adding products to checkout, the merchant can click on the quantity for each item to adjust it using a num-pad window, where the **Current Available Quantity** is displayed, based on available stock.
![current available quantity](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image5.068J10000039d6kIAA.png)

### **Insufficient Stock Warning while Paying**

When you select **Pay Now**, if stock is insufficient for any order line, Neto POS will display an **Insufficient Stock Warning**. You can review and adjust quantities or ignore the warning to proceed with payment. Proceeding with the order may result in negative stock, not a backorder.
![insufficient stock warning](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image6.068J10000039bjMIAQ.png)

### **Highlighting the Order Line with a Red/Green/Grey Icon**

These icons appear in 2 scenarios: by initiating manual quantity changes or by clicking on **Pay Now.** A **green** icon means sufficient stock is available.
![green icon suggests sufficient stock](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image8.068J10000039d7TIAQ.png)

The **red** icon indicates that there is **Insufficient Stock** to accommodate the order.
![red icon suggests insufficient stock](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image7.068J10000039d7xIAA.png)

A **grey** icon indicates that stock has not been checked against live available quantity.
![grey icon suggests non verified quantity check](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20240731015116.068J10000039d8CIAQ.png)

For more information, please refer to the help article linked[ here](https://galaxy.maropost.com/s/article/Setup-POS-Stock-Control).

## **Fixes **

**Failure to Pay via Stored Card Details using eWay Payment Gateway **

In some cases, when the customer tried to initiate a payment using stored card details via eWay payment gateway, the payment turned out to be unsuccessful and the system shows an error. This issue has been resolved.