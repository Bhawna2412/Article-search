---
title: "Neto by Maropost Release Notes – Jul/Aug 2022"
articleID: 1948
category: "2022 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-15
---

# Neto by Maropost Release Notes – Jul/Aug 2022

## **Overview**

In this release note, we’ll list the major release changes that have taken place in Maropost Commerce Cloud over the past two months, covering releases 6.209.0 through 6.216.0. 

Along with the changes noted here, the developers have been a working on several smaller fixes and planning for upcoming changes. They’ve also been busy finalising some exciting new features we’ll be announcing over the coming weeks.

** **

## **New Feature**

- 
- 

## **Improvements**

- Moved the majority of the Amazon sales channel integration to use Amazon’s SP-API
- Improved caching of location functions to improve performance
- Updated to allow eBay specifics to be managed external through third party tools outside of Maropost Commerce Cloud
- Updated the bulk import template for 301 Redirects with current notes/instructions
- Made improvements to the Amazon integration’s installation and settings pages
- Webpayments option is now available as an option during initial Stripe configuration
- Made changes to shipping so that if the carrier live shipping rates API does not provide a Delivery Time estimate then the Delivery Time from the manual Shipping Rates Table will be used if entered
- Additional checks have been added to ensure Restock Alert Emails are sent when required.
- Made changes to the UpdateItem API function to allow Parent SKU to be cleared via API
- Made changes to the UpdateItem API function to allow Promo Start Date and Promo End Date fields to be cleared via API
- Made changes to the UpdateItem API function to allow SEO Page Title, SEO Meta Keywords, SEO Meta Description, SEO Page Heading, and SEO Canonical URL fields to be clear via API
- Increased the history limitation from 1000 days (approx. 3 years) to 2000 days (approx. 5 years) when exporting the Forecast Demand report
- Added performance warning message to Forecast Demand Report Export when attempting to export more than 1000 days (approx. 3 years) of historical data
- Added error message to Forecast Demand Report Export when attempting to export over 2000 days (approx. 5 years) worth of data, and automatically set the value to 2000 days.
- Fixed an issue where Shopify orders were being allocated to the default Customer Group. Shopify orders now allocate to the mapped group.
- Made refinements to the Stock Allocation Report to improve performance and speed, especially when viewing and exporting the report.
- Updated import functions to allow import of files saved with BOM encoding
- Added ability to set the Service Item flag on products via import and API

## **Deprecation**

- Removed the “Once” payment option from Maropost Commerce Cloud

## **Fixes**

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- Fixed an issue on orders where the displayed weight of kitted products was showing not calculating correctly when multiple quantities were present on the orderline.