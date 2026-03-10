---
title: "Release Notes 3.15.8 - POS and Back Office"
articleID: 1294
category: "2022 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-05-11
---

# Release Notes 3.15.8 - POS and Back Office

# Release Notes 3.15.8 - POS and Back Office

This release will be available to all users by the 19th of August 2022.

## Improvements

* Performance Improvements to Aged Stock Report for large data volumes

## Resolutions

* The Fulfilment Report shows the correct Available quantity where the same product is listed on an order multiple times (sourced from different Outlets)
* Sales with a remaining balance due of 1 or 2c will now have a rounding payment applied to show $0.00 balance due
* Corrected an issue where newly arrived stock could be allocated to two different orders for Fulfilment
* Minimum Payment Due rules are now enforced to prevent Layby Sales previously marked as On Hold from being fulfilled, excluding sales for Account Customers.
* Cash and Carry sales retrieved from On Hold will not be able to be closed if there is a payment balance remaining.
* Updated the Accounts Receivable Balance Report so that Cancelled sales without any payments will not be displayed
* Resolved a permissions issue that prevented users from accessing Cross Sell and Upsell configuration
* Resolved an issue with the Customer Mass Upload caused by regional formatting issues with the Date Of Birth field