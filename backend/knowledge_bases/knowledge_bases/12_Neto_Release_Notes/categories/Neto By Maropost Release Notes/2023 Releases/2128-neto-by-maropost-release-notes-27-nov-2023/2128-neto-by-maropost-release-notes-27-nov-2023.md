---
title: "Neto by Maropost Release Notes – 27 Nov 2023"
articleID: 2128
category: "2023 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-14
---

# Neto by Maropost Release Notes – 27 Nov 2023

## Overview

This release includes eCommerce releases **6.271.0**, **6.272.0**, **6.273.0**, and **6.274.0**.

## **Enhancements**

### **Ability to Set an Explicit Sort Order for Kit Components**

The Product Import Wizard is now updated to enable Sort Order values to be assigned to Kit Components. Previously, these were assigned in the order the components were listed and could not be empty, 0, or include duplicates.

Import a Sort Order by adding the Sort Order value to the end of the kit component import value, for example:

***[SKU]=[quantity]:[price_breakdown]:[min_qty]:[max_qty]:[assemble_group]:[sort_order]***

If ***:[sort_order]*** is omitted, the import will use the component counter as the sort order value.

### **Hidden PayPal Cards Option for Ineligible Merchants**

In cases where merchants' accounts are not eligible to offer the PayPal Cards payment method, the payment option will be hidden from the prospective buyers on both the Checkout page and the My Account page.

### **Removed the Download Latest eBay Data Section**

The option to download the latest eBay data has been removed from the eBay Site Manager (eBay Settings > Site Manager). The eBay site data is now managed by Neto in a common database, removing the need to download the data manually.

### **New API field - HSTariffNumber**

The [**Product APIs**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdevelopers.maropost.com%2Fdocumentation%2Fengineers%2Fapi-documentation%2Fproducts)** **(GetItem, AddItem, and UpdateItem APIs) now support a new field called **HSTariffNumber**. The field is of string type and enables you to capture tariff codes for products for international shipment.

## **Fixes**

- 
- 
- 
- 
- 
-