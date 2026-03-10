---
title: "Neto by Maropost Release Notes – 5 Apr 2024"
articleID: 2119
category: "2024 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-14
---

# Neto by Maropost Release Notes – 5 Apr 2024

## **Overview**

This release includes e-commerce versions **6.287.0** to **6.288.0**.

## **Enhancements and Updates**

### **MyPost Business Carrier Labels**
![Screenshot 2024-04-03 at 6.29.22 PM](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240403at62922PM.0685g00000NHg9nAAD.png)Neto by Maropost now supports MyPost Business integration that enables you to set up carrier labels for MyPost Business on Neto platform itself. MyPost Business is your go-to solution for streamlining shipping and logistics processes. For detailed instructions, check out our [**Help Article**](https://galaxy.maropost.com/s/article/Set-Up-MyPost-Business-Carrier-Labels) on label setup. 

> **IMPORTANT:** This feature is **only** available as part of the Maropost Commerce Cloud Ship module. Please refer to the [**Maropost Commerce Cloud Ship**](https://galaxy.maropost.com/s/article/maropost-commerce-cloud-ship) help article to know more.

### **Upgrade eBay Trading API Version **

Neto has been upgraded to use the eBay Trading API v. 1327 from v.1277. Please be advised that this is a system update and it does not affect the merchants directly. 

### **Distribution of Updated TNT label**

Neto has added a ‘Signature Required' label to TNT labels. Now, when ‘Signature Required’ is selected for a TNT consignment, Neto by default prints 'Signature Required’ on the Customer Instructions section of the label.

### **GetItem API optimisation**

The query returning the “VariantInventoryIDs” OutputSelector of the [**GetItem API**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdevelopers.maropost.com%2Fdocumentation%2Fengineers%2Fapi-documentation%2Fproducts%2Fgetitem) has been optimised to improve speed and address latency related to this particular OutputSelector:
![Screenshot 2024-04-05 at 10.49.10 AM](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240405at104910AM.0685g00000NHgC4AAL.png)

### **Added a new permission in the POS menu**

In preparation for an upcoming Neto POS update, a permission to “View Profit Margin” has been added under “Sales Channels” > “POS” in the “Edit Permission Group” page. Please be advised that the feature to ‘View Profit Margin’ at orderline level on POS will be released shortly. The permission is defaulted to “Deny” on all Permission Groups, except for the default “Admin” group.
![image-20240403-234133](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20240403234133.0685g00000NHgAWAA1.png)

## **Fixes**

**Incorrect Classification Type on eParcel International label**

While creating a consignment using International Express service, If the ClassificationType is valid, ‘Sales of Goods’ should be selected as the ‘Category of Item’, instead of ‘Other’. This issue has been resolved.

**MyFastway not returning ETA**

When ETA (Delivery Time) is defined in the shipping rate table, the associated ETA for the shipping zone should be displayed. MyFastway API was not returning an ETA. Hence, no ETA was being displayed on cPanel and website by live MyFastway rates. This issue has been fixed.

**NZ eBay orders returning shipping and borderline tax via API**

In some cases, the system’s GetOrder API was recalculating taxes for every order-line item fetched from eBay, even after the pre-calculated taxes for each order was already present. This led to duplicate tax additions. The actual behaviour has been fixed to identify the order-line items that don’t have taxes associated with them, calculate the same, and add the value accordingly. 

**Server error when adding eBay Listing**

In some cases, while adding an eBay Listing Template, if the ‘Currency’ option was checked, and when you click on the ‘Save and verify items with eBay’ option, the system was showing an incorrect server error for the same. This issue has been fixed.