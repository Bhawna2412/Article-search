---
title: "Neto by Maropost Release Notes – 7 Jun 2024"
articleID: 2114
category: "2024 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-14
---

# Neto by Maropost Release Notes – 7 Jun 2024

## **Overview**

This release contains updates of Ecommerce versions **6.294.0** and **6.295.0**.

## **Enhancements and Updates**

### **Neto Pick'n Pack iOS App**

Neto has released a new version of the Neto Pick'n Pack iOS App v2.0.1. Below are the changes implemented in this release-

- 
- 
- Integration with an iOS device's camera to scan barcodes for picking and packing.
- Integration with AirPrint to print consignment labels and other shipping-related documents.
- Introduced a Camera Scanner Setting to configure the wait time between barcode code scanning.
- 
  Targeted minor UI fixes to App's configuration UI and added a built-in camera scanner button to the top button list.

  ![Built-in Scanner](https://us.v-cdn.net/6038474/uploads/attachments/migrated/2032366C5CC546D1A03F0AA7F020B3DE20240528021852.068J1000001VXNGIA4.png)
- 
- 

## **Fixes**

 **Failure to show error while processing unpaid order**

Earlier, if a customer was attempting to pay for an unpaid order via the My Account page, and the customer uses an invalid AC/DC card in doing so, there was no error message displayed on the screen to alert the customer of the same. This issue has been fixed and an error prompt has been added in the backend to be triggered in such scenarios.

**GetOrder API returning OrderLineTax value as 0 after order completion**

In a few instances, while gauging order data using the GetOrder API, some orders were returning a 0 tax value (if present), if neither the "OrderLine.Tax" / "OrderLine.TaxAmount" output selectors were included in the API request. This issue has been fixed.

**Incorrect Field Mapping of Merchant Reports in Xero**

In some cases, it was observed that while exporting merchant reports in Xero, the shipping address is overriding the billing address fields. This has been fixed and from here on, Neto billing address will be mapped to Xero Postal Address and Neto Shipping address will be mapped to Xero Street Address.