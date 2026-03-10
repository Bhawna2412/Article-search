---
title: "Neto by Maropost Release Notes – 14 Jun 2024"
articleID: 2113
category: "2024 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-14
---

# Neto by Maropost Release Notes – 14 Jun 2024

## **Overview**

This release contains updates of eCommerce versions **6.296.0** and **6.297.0**.

## **Enhancements and Updates**

### **View Warehouse-Specific Stock Availability on Neto Point of Sale**

Neto now enables you to access real-time data for any product’s Available Qty based on the warehouse from which the sale is being processed. The Available Qty represents the difference between the total Stock on Hand (product physically available in the Warehouse) and the Committed Qty (product allocated for unpicked orders).

The Available Qty is visible alongside the Stock on Hand in the Product Information screen.

![AvailableQty](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AvailableQty.068J1000001WoRsIAK.png)

### **Added a Scheduler task to update eBay category mappings**

Neto has introduced an automated task to periodically update the new eBay category mappings by running the GetCategoryMappings task. This ensures that the deprecated eBay categories are re-mapped to the corresponding newer eBay categories. This task will run monthly. 

### **Hunter Express Port Codes List Updated**

Neto has updated its Hunter Express Port Codes list with the latest additions, enabling a better shipping process.

## **Fixes**

**Failure to send POS Order Receipt Email **

Earlier, if the merchant attempted to send an order receipt email at the end of a sale, the customer did not receive one. This issue has been fixed.

**Google Pay/Apple Pay payments failing**

In some cases, payments made via Google Pay or Apple Pay were failing as the system was unable to fetch a shipping phone detail (a requirement for Neto’s checkout process). This has been resolved by considering the billing phone details as default if the shipping phone detail is not present.

**Incorrect Purchase Order Date Mapping of Merchant Reports in Xero**

In a few instances, it was observed that while exporting merchant reports in Xero, the purchase order dates were all shown to be the 1st of January. The root was that a particular config named **EXPORT_PURCHASE_ORDER_DATE **was missing while exporting merchant reports. This has been fixed.

**Wrongfully exporting Supplier Bank Account details via Xero**

In some cases, it was noticed that when a supplier’s details were exported via Xero, their bank account details were also being exported temporarily, which was unexpected behaviour. This has been fixed.