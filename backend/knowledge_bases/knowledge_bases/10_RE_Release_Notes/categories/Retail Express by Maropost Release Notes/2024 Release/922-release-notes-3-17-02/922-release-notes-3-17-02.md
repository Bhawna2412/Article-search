---
title: "Release Notes 3.17.02"
articleID: 922
category: "2024 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-06-10
---

# Release Notes 3.17.02

## POS System Check Status Notification

A new status icon feature is now available in Retail Express POS and related systems, providing users with visibility into the Retail Express status and easy access to the associated status page. 

Located at the Register Login Screen and the home screen of POS, users can access the associated status page by clicking the icon, without the need to log into the back office.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/MicrosoftTeamsimage.05T5g00001HYAN4EAP.png)

## Supplier Management - Disable Suppliers in the Back Office

- 
- 

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/fc7f407ee8c846edae3181329cc28b02.05T5g00001GqCDwEAN.png)

## New POS Settings and Enhancements

- 
  Implemented a new POS setting to display weight information on customer invoices.
- 
  Introduced a "Quote" section within the Order Conditions page in the back office, enabling customisation of terms and conditions for quotes.
- 

## General Enhancements

- 
  Label Printing
  - 
    Stock Receipt ID now shows for end users in Inventory > Label Printing Filter.
  - 
    PO to print the quantity equal to the PO Qty when filtered by PO ID/Stock Receipt ID.
- 
  Merge Customers - an issue preventing 3 or more customers at once has been resolved.
- 
  Resolved an issue where International PO’s did not appear to update COGS correctly in certain cases.
- 
  Sales Report / Sales Report Limited
  - 
    Updated to automatically trim leading/trailing spaces from Order Number and/or Customer Number filters.
  - 
    Updated the logic when passing an invoice ID to automatically not summarise by outlets, returning specifically that invoice in results to avoid the need to drill in.
  - 
    Resolved an issue where exporting would not work correctly if using the “Filter by Processed Date” checkbox or when using the “Web Order” source filter.
- 
  Shopify - Updated logic to prevent the default payment from being removed from Shopify settings if that payment method was disabled in Retail Express.
- 
  Resolved the issue of missing "Made Available By" data in the export file in the PO Stock Receipts Detail Report.
- 
  Fixed rounding calculation errors in the Scheduled Price Changes.
- 
  Resolved minimum character restriction issue for searching in the Mobile, Phone and Fax fields.
- 
  Fixed the malfunctioning PDF email functionality for Customer Account Statements.
- 
  Resolved errors in the Inventory Planning Export caused by excessive data in the ManSKU field.
- 
  Improved the functionality of transferring reports by enabling Export to Excel even when a specific transfer is searched for.
- 
  Product Sales Report
  - 
    Removed the 12-month maximum date span constraint on the product sales report.
  - 
    Resolved an issue where the Available Qty was not always calculated correctly depending on filters used.
  - 
    Resolved an issue where the report page would appear to “refresh” periodically.
- 
  Style Performance Report - Resolved an issue where certain cases could cause items to be excluded from the Qty Sold Calculation.
- 
  Transfer Detail Report - Resolved an issue with the exported report which was missing data in the Available column.
- 
  Resolved an issue preventing Franchise Connect from syncing data in certain cases.
- 
  Resolved an issue with the Return Reason Report where filtering by return dates failed to export.
- 
  Sales Detail Export - Resolved an issue where the report could return different values for large data spans in certain cases.
- 
  Webstore API's - Applies to EDS API and Webstore API methods: OrderCreateByChannel and OrderCreate
  - 
    Resolved an issue where the OrderCancel method always returned a successful response, even if the request was invalid/not applied.
  - 
    Update Behaviour to Obey "Quote" Status When No Payments are Passed, following existing POS logic for the resulting status of the order.
  - 
- 
  Updated the sort order of the Invoice Picklist to align with the POS sorting order, ensuring consistency.
- 
  Modified the invoice template to accommodate longer email addresses for improved readability.
- 
  Addressed an issue preventing the assignment of Quick Product Profiles to registers in specific cases.
- 

- 

## Coming Soon

Exciting new features will be available soon. Stay tuned for their launch in the coming weeks.

### Quick Product Create and Add to Sale Feature

This feature allows users to swiftly create new products directly during a sale transaction. It allows users to immediately add the product to the sale upon creation, streamlining the workflow and eliminating the need to switch to the back office.

To learn more, see [Quick Product Create and Add to Sale](https://galaxy.maropost.com/s/article/Quick-Product-Create-and-Add-to-Sale).

![image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00001HYkS1EAL.jpg)

### Mass Upload/Download Product Master via CSV Feature

Mass upload/download functionality allows users to efficiently manage large volumes of data by csv upload, streamlining data management processes.