---
title: "Neto by Maropost Release Notes – 9 Oct 2024"
articleID: 2105
category: "2024 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-14
---

# Neto by Maropost Release Notes – 9 Oct 2024

## **Overview**

This release contains updates of the eCommerce version **6.313.0**.

## **Enhancement and Update**

### **Added the Ability to Upload WebP Images**

Neto has been enhanced to allow users to upload WebP images via the Control Panel for the products in their catalogue, allowing the images to load faster in web browsers. The WebP images can be uploaded while adding a Product listing, editing a Product listing, and during Bulk upload of Images.

## Fixes

**Resolved a Bulk Consignment issue**

Resolved an issue where in some cases, while placing an order and initiating a bulk process for the consignment, the system would select the “My Fastway A5 Satchel“ option by default, despite the user configuring a shipping method from the Control Panel for this scenario. After resolving, the system will

be triggered to pick the shipping method configured (or the cheapest available one) and select the “PARCEL POST + SIGNATURE“ option.

**Issue with displaying eBay Product Templates with Pagination**

Earlier, if a user tried to navigate to the Assign Products section in the eBay Listing Rule Template page, the selected page would display the SKU/Product listing. If the user chooses the number of results to be displayed and from which page, the first result is shown without any error. It was found that when the page number was changed, the results did not differ and only changed to the correct list of products when the page was refreshed. This issue has been resolved.