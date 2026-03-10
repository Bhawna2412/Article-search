---
title: "Release Notes v3.13.10 - Integrations"
articleID: 1302
category: "2021 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-05-11
---

# Release Notes v3.13.10 - Integrations

# Release Notes v3.13.10 - Integrations

This update will be rolled out to all customers between 23rd August - 2nd September.

## New Features

### Gift Voucher Integration now available for all Shopify plans

We're happy to announce that Integrated Gift Vouchers are now available for **all Shopify Plans that support Gift Cards**, not just Shopify Plus! The integration allows your customers to easily purchase and redeem gift vouchers instore and online, improving customer experience while simultaneously removing the need for manual intervention by staff.

[Read the announcement now.](https://galaxy.maropost.com/s/article/Integrated-Gift-Vouchers-available-for-all-Shopify-plans)

Ready to get started? [Click here](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fzfrmz.com%2FkUnQOQtFgSW2awRM0J4e) to purchase the Gift Voucher integration add-on!

**Reminder:**This will only become available once your system has been updated - a banner will be displayed in Back Office when you have been upgraded

### Warehouse Management System - Update Transfers to Allocated

Using the [AllocateITOs](https://galaxy.maropost.com/s/article/Release-Notes-v3-13-7-API-Change) method you can now update a "Proposed" Transfer to allocate stock (where previously the Transfer needed to be manually updated as "Requested" through Back Office first).

This upgrade allows a Third Party system to process transfer from creation through to dispatch, ready for your instore staff to receive the goods.

In order to use this feature:

* You will need to update the quantity via the AllocateITOs method
* The Allocated quantity must be less than or equal to the Proposed or Requested quantity
* The Allocated quantity must be less than or equal to the Requested quantity if Requested is greater than 0

For more information on using the Warehouse Management API please refer to the [Developer Portal](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdeveloper.retailexpress.com.au%2F).

---

## Improvements and Resolutions

* Resolved an issue with **Shippit** where the unit price is now correctly populated.