---
title: "Neto by Maropost Release Notes – 11 Apr 2025"
articleID: 2087
category: "2025 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-06-25
---

# Neto by Maropost Release Notes – 11 Apr 2025

## **OVERVIEW**

This release includes updates from eCommerce releases **6.325.0**, **6.326.0**, and **6.327.0**.

## **ENHANCEMENT**

### **Decommissioned Legacy Payment Gateways**

Continuing with the decommissioning of legacy payment gateways to streamline our systems and improve site speeds, the following payment gateways are no longer supported:

- eWay Hosted
Note: The eWay Rapid API and eWay Secure Panel are still supported.
- Paymark Click
- Maxis Pay

### **New Parameter OriginCountry in GetItem API**

A new response parameter - **OriginCountry** - has been added to the **GetItem** API.  See the [GetItem](https://developers.maropost.com/documentation/engineers/api-documentation/products/getitem) API for details.

## **BUG FIXES**

- Fixed an issue where in some cases, payment surcharges were removed from the order. The issue occurred if:  - the order was paid using Google Pay or Apple Pay
  - the order was put on hold and the product subtotal was recalculated after being placed