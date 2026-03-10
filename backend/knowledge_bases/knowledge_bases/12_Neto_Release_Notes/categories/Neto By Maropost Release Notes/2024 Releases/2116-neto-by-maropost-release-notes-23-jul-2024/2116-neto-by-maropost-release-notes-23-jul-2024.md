---
title: "Neto by Maropost Release Notes – 23 Jul 2024"
articleID: 2116
category: "2024 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-14
---

# Neto by Maropost Release Notes – 23 Jul 2024

## **Overview**

This release contains updates from eCommerce versions **6.300.0** and **6.301.0**.

## **Enhancements and Major Updates**

### **Updated File Extensions List for Upload Control**

Neto has added a file upload control to restrict file uploads to the following file extensions:

- 
- 
- 
- 

These restrictions are implemented for security reason on all pages where file uploads are supported including product images, product brochures, customer logos, staff user images, canned responses and the data import tool.

### **Ability to List All Kit Components Regardless of the Component Status**

You can now list all components that are part of a kit regardless of the component’s “Approved to show on Webstore” status. A new parameter, called ‘preview', has been added to the [%item_kitting%] function. The parameter accepts ‘y’ for Yes/True and “n” for No/False, with ‘n’ being the default value.

Set the preview parameter to “y” in the [%item_kitting%] function to list all kit components regardless of the component’s “Approved to show on Webstore” status. In order to identify the kit components that are approved for the webstore, use the [[@approval@]](https://galaxy.maropost.com/profile/approval%40%5D) tag.

### **Amazon Integration Updates**

We made improvements to the Amazon integration, to optimise the listing process by checking the availability of configured product attributes in the destination category. Attributes that are not available will be removed from the feed.

This update ensures more dynamic compliance with Amazon listing requirements and dramatically reduces the occurrence of the common "The attributes are invalid" error. 

## **Minor Updates and Fixes**

- Earlier, if a warehouse location ID (updated via API) had a space character at the start of the value, it was not possible to delete/edit it from the control panel. This issue has been fixed.
  ![img1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/img1.068J10000037JrWIAU.png)
- Earlier, the AddOrder API could accommodate only up to 4 customer-related fields (customer_ref1 through customer_ref4). The API has been modified to handle up to 10 custom fields per call.
- In cases where “Parcel Locker” was typed as “Postal Locker” in the shipping address, customers could select a shipping option that was disabled for PO Box addresses. This has been fixed so that the Postal Locker address is detected as a PO Box address.