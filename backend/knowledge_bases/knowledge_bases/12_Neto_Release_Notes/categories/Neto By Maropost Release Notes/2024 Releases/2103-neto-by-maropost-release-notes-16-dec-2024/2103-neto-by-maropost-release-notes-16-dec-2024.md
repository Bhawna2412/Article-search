---
title: "Neto by Maropost Release Notes – 16 Dec 2024"
articleID: 2103
category: "2024 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-11
---

# Neto by Maropost Release Notes – 16 Dec 2024

## **OVERVIEW**

This release includes updates from the eCommerce version **6.315.0**.

## **ENHANCEMENTS**

### **Automatically Convert Images to WebP Format on Upload**

You can now automatically convert the JPG and PNG images to WebP at the time of upload. 

We have introduced the following new Product Image Settings on the **Image Settings** page (**Settings & tools** > **Image Settings**):

- 
- Convert product images from PNG to WEBP

To learn more about image settings, see [**Image Settings**](https://galaxy.maropost.com/s/article/image-settings).

![ImageSettings](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ImageSettings.068J1000007PiWgIAK.png)

### **Further Support for WebP Image Format**

WebP Image is now supported across other parts of the Neto application including the following:

- 
- 
- 

### **Updated Customer Import Process Flow and Templates**

The Customer import flow and templates have been updated so that Username is no longer a required attribute. It is now consistent across the platform, wherein, you can use email addresses as the unique IDs and don’t require usernames for the customers.

> **Note**: This functionality request is currently the most popular item on the Idea Portal and we are delighted to make it happen.

### **Optimised Inventory Update Process**

The inventory update process after order creation has been optimised to avoid running long queries when the account inventory does not require kit quantity update. 

### **Customer Address Books Available Through API**

You can now retrieve the Customer Address Books using the newly updated **GetCustomer** API.

### **Ability to Specify a Street Address in GetShippingQuote API**

The GetShippingQuote API has been updated and two new fields have been added to specify the Street Address (ShipStreetLine1, ShipStreetLine2) when calling the endpoint. This can be useful, for instance, to detect PO boxes.

### **Payment and Checkout Improvements**

- 
- 
- 

### **eBay Version Upgrade**

The eBay integration has been updated to remove the following unnecessary and decommissioned fields:

- 
- 

### **Updated Location List for Couriers Please**

The location list has been updated for **Couriers Please** integration to reflect the latest changes.

## **BUG FIXES**

- 
- 
-