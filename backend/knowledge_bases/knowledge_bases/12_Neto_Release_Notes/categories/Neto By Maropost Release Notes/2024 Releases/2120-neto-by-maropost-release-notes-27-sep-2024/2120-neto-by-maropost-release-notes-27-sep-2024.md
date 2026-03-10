---
title: "Neto by Maropost Release Notes – 27 Sep 2024"
articleID: 2120
category: "2024 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-14
---

# Neto by Maropost Release Notes – 27 Sep 2024

## **Overview**

This release contains updates of eCommerce versions **6.311.0** and **6.312.0**.

## **Enhancements and Updates**

### **Error message displayed if** **RMA Limit is exceeded**

Neto has been enhanced for better handling of scenario where the user attempts to create an RMA for kitted products that exceeds the maximum number of orderlines as configured in the **MAX_ORDERLINES** advanced configuration. The line limit is 128 lines. If the line limit is exceeded, the system will display an error as shown below-
![Error message for exceeding RMA line limit](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240927at94137AM.068J1000004e4IwIAI.png)

### **Enhanced Default Shipping Option configuration**

Neto has been updated to display a '**None**' option for the **Default Shipping Option** configuration, which will allow Neto to intimate the user to select a shipping method option exclusively before proceeding with the checkout.
![displaying None option for Default Shipping Option configuration](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20240927040802.068J1000004e4JBIAY.png)

### **Enhancing terms and conditions configuration for the checkout page**

Earlier, if configured, a user must agree to a Terms and Conditions clause before checkout. To ease the user experience, Neto has introduced a new option which allows the user to agree to the Terms and Conditions displayed by just placing an order. 
![Terms and Conditions display configurations](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240926at54850PM.068J1000004e4JzIAI.png)

As a result, Neto users will now be allowed to pick a terms and condition configuration from a drop down menu in the Control Panel as per convenience. Login to the Control Panel. Navigate to **Webstore** > **Checkout Settings** > **Checkout Rules**. In the **Customer must agree to terms and conditions** option, a drop down menu will display these 3 options-

- 
- 
- 

## **Fixes**

**Resolved a caching optimisation issue**

Resolved an issue where in some cases, caches were not automatically cleared after an edit was made to a product on its respective product page in Control Panel, resulting in stale information on the product page. This update will allow the system to display the accurate set of information for the corresponding product on the selected webstore. 

**Issue with Customer Shipping Address Export to Xero when there are Multiple Shipping Addresses**

Earlier, If an end user has registered multiple addresses for their user account, Xero was exporting only the first address by default. This issue has been resolved that allows Xero to check for the keywords ‘Delivery’, 'Street' in the said order of priority in the given addresses and export the one which contains those keywords. If the keyword is missing, Xero will export the addresses in the order of registration. 

**Tax Rounding Issue between Checkout and Control Panel**

In some cases, it was observed that tax rounding for Tax Exclusive products was inconsistent between the checkout and order page, particularly in cases when the tax value contained a decimal ending in 5 (for eg, .xx5). This issue has been resolved to ensure consistent tax rounding between the checkout and backend.

**Duplicate Voucher Getting Created if Cart Contains 2 Different Voucher SKU's**

In some cases, it was observed that a duplicate voucher was getting created if the order from the webstore had 2 unique voucher SKU's associated with it. When the webstore order is created in Neto, the sales order has an additional voucher field with the same value of the last added voucher. This issue has been resolved to avoid adding a duplicate voucher with the purchase.