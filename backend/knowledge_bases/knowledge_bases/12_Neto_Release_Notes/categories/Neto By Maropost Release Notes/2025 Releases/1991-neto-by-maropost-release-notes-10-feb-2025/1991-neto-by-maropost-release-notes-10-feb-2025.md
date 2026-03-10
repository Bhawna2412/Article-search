---
title: "Neto by Maropost Release Notes – 10 Feb 2025"
articleID: 1991
category: "2025 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-06-25
---

# Neto by Maropost Release Notes – 10 Feb 2025

## **OVERVIEW**

This release includes updates from eCommerce releases **6.318.0**, **6.319.0**, **6.319.1** (Hotfix), **6.320.0, **and **6.321.0**. 

## **ENHANCEMENTS**

### **Triggering the Confirmation Email From AddOrder API**

You can now trigger the sending of the confirmation email from the AddOrder API. A new attribute - **SendConfirmationEmail** - has been added to the **AddOrder** API. The attribute accepts a boolean value - True or False.

To learn more about the API, see [**AddOrder API**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdevelopers.maropost.com%2Fdocumentation%2Fengineers%2Fapi-documentation%2Forders-invoices%2Faddorder).

### **Purchasing Gift Vouchers Through Afterpay Disallowed**

The Afterpay integration has been updated to disallow purchasing Gift Vouchers through Afterpay, in compliance with Afterpay’s Terms & Conditions.

## **BUG FIXES**

- Fixed an issue in which the users could not save an order with an empty “State” shipping address field, even though the ORDER_ALLOW_EMPTY_STATE config was enabled.
- Fixed an issue where customer statements were generated as blank PDF documents when no start date was selected in case of a large number of order records. This issue has been fixed now - the Start Date field now defaults to the 1st of the current month and can be manually adjusted.
- Fixed an issue in which the Control Panel users who have a full stop in their username, and did not have the **See all customers** permission enabled, were not able to add an order.
- Fixed an issue where orderline SKUs added to orders through the API were case-sensitive, leading to the created order not being associated with the matching SKUs.
- Fixed an issue where, in some cases, the **Daily Receipts** widget in the Control Panel dashboard was causing a distorted Control Panel UI.
- Fixed an issue where, in some cases, users could not move the new Amazon orders to the Pick or Pack status.
- Fixed an issue in which duplicate Purchase Orders were created if the user double-clicked on the Next button during PO creation.
- Fixed a minor issue in the Discount creation flow, wherein if a Discount was edited, the **Last Edited** timestamp was shown in the UTC timezone instead of the store’s system timezone.
- Fixed an issue where, in some cases, the order ID and Orderline sort order were incorrect on the View Orders page.