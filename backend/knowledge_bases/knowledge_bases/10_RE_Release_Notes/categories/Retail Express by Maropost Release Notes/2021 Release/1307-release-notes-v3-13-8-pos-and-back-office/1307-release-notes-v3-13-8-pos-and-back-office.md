---
title: "Release Notes v3.13.8 - POS and Back Office"
articleID: 1307
category: "2021 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-12-01
---

# Release Notes v3.13.8 - POS and Back Office

# Release Notes v3.13.8 - POS and Back Office

**Release Date:** Week beginning 12th July 2021

In this update we've made several improvements and resolutions as part of our commitment to continuous evolution and improvement to Retail Express.

In this release:

- [Improvements](#improvements)
- [Resolutions](#resolutions)
- [API Updates](https://galaxy.maropost.com/s/article/Release-Notes-v3-13-8-API-Change) (opens in a new tab)

## []()Improvements

- Added a new "Sales Status" filter for the **Special Orders Report** with Cancelled sales excluded by default

## []()Resolutions

- Resolved an issue where the quantity on a **Stock Receipt** would be doubled if the Purchase Order was updated in another window at the same time
- Resolved an issue with **POS****refunds** preventing a return of a product that was previously exchanged
- Users can now update both the Due Date and the Fulfilment Outlet on a **POS sale** at the same time
- Users can now export Special Orders from the **Special Order Report** if the Billing Customer Last Name field is blank
- We updated **POS Transfers** (Receive) to resolve a display issue where a product was hidden - there are now 8 products displayed per page
- Resolved an issue where printing **A4 Labels** from the Fulfilment Report would display an error
- When creating a **POS sale** and scanning products, the cursor will remain in the PLU scan field (ready to add more products) after adding a Coupon or Gift Voucher, or adding products from Advanced Search
- Resolved an issue where the **Purchase Order On-Order quantity** was updated incorrectly after editing and cancelling an existing Purchase Order
- The **Fulfilment Report** now ignores zero quantities to avoid incorrect inventory updates when the Fulfilment Report is open multiple times e.g. separate tabs by the same user, or multiple users at the same time
- Resolved an issue preventing **Franchise Connect** synchronisations in rare circumstances