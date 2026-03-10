---
title: "Release Notes v3.16.02 - POS and Back Office"
articleID: 961
category: "2023 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2024-04-16
---

# Release Notes v3.16.02 - POS and Back Office

# Release Notes v3.16.02 - POS and Back Office

This release will be available to all customers by 31st March 2023.

## New Features

### Scheduled Price Changes "Revert" Functionality

We've introduced the ability to schedule a "revert job" which is used to undo (or "revert") a previously scheduled price change. This is a powerful addition to our existing Scheduled Price Change functionality and provides a great tool for short-term promotions or weekend sale pricing.

A revert job will restore the pricing of the affected product to how it was before the first schedule ran.   For more details, check out the [Scheduled Price Changes](https://galaxy.maropost.com/s/article/Scheduled-Pricing-Changes) article.

![mceclip2 (76).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfkuEAA.jpg)  
[Click to view full si](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Farticle_attachments%2F6611717379727)![mceclip3 (45).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfMFEAY.jpg)  

### Merge Customers - Now Enabled!

We recently enabled the Merge Customers features for all clients following the v3.16.01 release. The Merge Customers feature in Retail Express makes it easy by merging duplicates into a single customer profile (their "master record").  In case you missed it, or to see all the details, check out the [Merge Customers](https://galaxy.maropost.com/s/article/Merge-Customers-NEW-Feature-Enabled) article.

![mceclip1 - 2023-07-09T190929.118.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfkzEAA.jpg)  

## Improvements

* **Gross Profit Report - Fulfilled**
  + We've added the name of the Sales Person to the report results and exports.
* **Gross Profit Report - Invoiced**
  + We've added the name of the Sales Person to report results and exports, also removed the one year date range restriction previously in place on this report.
* **Fulfilled Sales Report Export** - we've added the Sales Person & Original Sales Outlet to the exported excel and CSV files to assist with using these reports for external analysis.
* **Return Reasons Report**
  + - We've added the original invoice number and original salesperson to the report results and exports. Renamed some existing column headings for clarity between the original invoice and return invoice details.
* Updated the interface of several existing reports to be consistent with other reports and improve performance.
  + Customer Deposits Summary
  + EOM Inventory Valuation
  + EOM Inventory Valuation Summary
  + Freight Report
  + Product Report
  + Gross Profit Report - Fulfilled
  + Gross Profit Report - Invoiced
* **POS - Refund Process**
  + We've improved the workflow when processing a refund at POS by prefilling the balance qty in either the Saleable or Faulty columns to save the need to fill in both fields manually.

## Resolutions

* Inventory Mass Uploads now obey the Outlet Access of the logged-in user at the time of upload and will not apply changes to Outlet/s the user cannot access.
* Resolved an issue when using the double quote character (") in Product Descriptions when changes are saved.
* Resolves an issue that occurred when attempting to edit Price Group details.
* Aged Stock Report now includes components received on a PO as a part of a package.
* Stocktake Reporting now correctly incorporates "Picked" quantity if used during the stocktake process.
* An issue with Outstanding payments due to rounding of cash payments has been resolved.
* Resolved issues where in some instances, EDS notifications were not being created/sent for Shopify users.
* Freight Report - an issue has been resolved whereby total quantity and values were overstated when multiple payments were applied to the order.
* Back Office Dashboard - resolved an issue preventing Outlet Filters from applying correctly.
* Resolved inconsistencies between the maximum length of "Customer Address" and "Customer Order Address" details that could interfere with transaction processing.