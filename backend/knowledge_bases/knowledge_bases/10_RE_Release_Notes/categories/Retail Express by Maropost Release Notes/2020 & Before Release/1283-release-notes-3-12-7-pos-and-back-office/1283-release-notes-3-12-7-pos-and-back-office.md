---
title: "Release Notes 3.12.7 - POS and Back Office"
articleID: 1283
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-05-11
---

# Release Notes 3.12.7 - POS and Back Office

# Release Notes 3.12.7 - POS and Back Office

**Release Date:** 28-10-2020

In this release we've made **9** improvements and resolutions to Retail Express, including one change to the webstore/eCommerce API.

**Please note:**This release includes some modifications to APIs - please refer to the [API Release Notes](https://galaxy.maropost.com/s/article/Release-Notes-3-12-7-API-Update) for more details.

|  |  |
| --- | --- |
| Mass Download (Products) | Improved the performance of Mass Download when exporting a large number of custom attributes |
| POS - Cash Up | The "Submit" button now becomes disabled after being pressed to remove the ability to submit the Cash Up multiple times |
| Price Groups | The default text for customers without price groups has been renamed to "No Default Price Group" to avoid confusion with customer's being explicitly set to "None". |
| Promotional Campaigns | An issue has been resolved where multiple discounts are applied and one of the item prices was below the Campaign price. |
| Purchase Orders | Resolved an issue where a message was displayed about Linked Transfers (even though there was no Transfers linked to the order) |
| Purchase Orders | Resolved an issue caused by Purchase Orders with Supplier Codes in the incorrect case e.g. lower case. |
| Purchase Orders | Users are no longer able to cancel Purchase Orders marked as Receiving In Progress. |
| Purchase orders | The "Deliver To" address on Purchase Orders is now displayed with line breaks correctly on both the email preview and the email sent to the Supplier. |
| Transfers | Restored the "Product Not Found" error when scanning a product processing Transfers and the product is unable to be found. |