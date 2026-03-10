---
title: "Neto by Maropost Release Notes – 22 Apr 2024"
articleID: 2121
category: "2024 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-14
---

# Neto by Maropost Release Notes – 22 Apr 2024

## **Overview**

This release introduces some feature additions to Neto POS. This release also includes e-commerce versions **6.289.0** to **6.291.0**.

## **Enhancements and Updates**

### **View Gross Profit Margins on Neto POS**

A Profit Margin calculator has been added in Neto Point of Sale (POS), that allows merchants in real time to see what margins are applicable on individual products, so that discounts can be offered accordingly. This feature allows a Point of Sale operator (sales person) to adjust a product’s discount whilst viewing the calculated Gross Profit Margin for that product, ensuring that the discount they offer does not bring their Profit Margin below what they consider to be acceptable.

**What’s New?**

Neto Point of Sale (POS) Version 1.27.1 will include the following improvements:

- 
  You will now have the ability to view Gross Profit Margin (labelled as “Profit Margin”) at the orderline level. This is accessed by taping or clicking on the corresponding orderline item on the POS sale screen as shown below.

  ![msedge_WoomYwOHe9-20240409-035739](https://us.v-cdn.net/6038474/uploads/attachments/migrated/msedgeWoomYwOHe920240409035739.0685g00000NK7ifAAD.png)
- 
  The Profit Margin is recalculated in real-time along with the Discount and Total Price, when either of these are changed.

  ![msedge_gOfOlUdj8v-20240410-003839](https://us.v-cdn.net/6038474/uploads/attachments/migrated/msedgegOfOlUdj8v20240410003839.0685g00000NK7k8AAD.png)
- 
  In the Control Panel, a new permission labelled “View Profit Margin” has been created, under “Sales Channels” > “POS”. The permission is only enabled by default for the “Admin User” Permission Group.

  ![image-20240417-005113](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20240417005113.0685g00000NK7keAAD.png)

## **Fixes**

 **MyPost Business ‘origin_country_code’ retrieval returning empty**

When Neto was establishing a connection for a store with MyPost Business, the 'origin_country_code' was being returned as an empty field. This issue has been resolved. 

**Stock Warning/ Restock Report emails being sent under unusual circumstances**

In some cases, the stock warning/ restock report warning emails were being sent to the merchants, even when the quantity on hand was higher than either warning levels or the restock quantities. This behaviour has been modified to ensure the following- 

- 
- 
- 

**Message API failing to connect with Private MailGun account.**

MessageAPI was connecting to the default MaliGun account even when setup to use the private MailGun account. This issue has been resolved. 

**Findify API product sync issue**

Fixed an issue where in some specific instances, items were missing from the response from the GetItem API, when using pagination.