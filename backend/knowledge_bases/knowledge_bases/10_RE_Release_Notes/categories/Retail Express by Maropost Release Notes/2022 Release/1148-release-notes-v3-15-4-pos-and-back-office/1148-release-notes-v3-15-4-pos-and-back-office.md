---
title: "Release Notes v3.15.4 - POS and Back Office"
articleID: 1148
category: "2022 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-11-28
---

# Release Notes v3.15.4 - POS and Back Office

# Release Notes v3.15.4 - POS and Back Office

This update will be available to all users by **20th April 2022**.

[▶ Embedded Video](https://player.vimeo.com/video/696836951?h=17be26c999)

## Highlights

### Back Office Dashboard

![BO Dashboard.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfiPEAQ.jpg)
Featuring new reports and visual elements, the Back Office Dashboard includes:

- Trend analysis, with easy-to-read visual indicators for increases or decreases
- Powerful comparison feature, allowing you to compare by specific date ranges or periods e.g. Last Month, Last Quarter, etc
- Comparing your instore vs online sales has never been easier, especially using the Fulfilment Preference to view trends for instore vs delivery
- A wide range of comprehensive reporting, including:  - Trends
  - Hourly Sales
  - Products
  - Customers
  - Fulfilments
  - Staff

[Read the announcement](https://galaxy.maropost.com/s/article/Announcing-the-new-Back-Office-Dashboard).

### Purchase Orders no longer update Supplier Buy Price

After listening to feedback from Retail Express users, we have implemented a change where editing PO Item details will no longer update or overwrite the Product Master Supplier Buy Price (regardless of how this change was initiated).

> **Important:** We recommend advising your staff of this change.

The following actions will no longer overwrite the Master Supplier Buy Price:

- Adding items to a PO
- Editing the Qty or Supplier Buy of items on a PO
- Creating or updating PO's via API

To update the Product Master Supplier Buy price, the following actions can be taken:

- Edit the product ([manually](https://galaxy.maropost.com/s/article/Create-and-Edit-Products) or via [Mass Upload](https://galaxy.maropost.com/s/article/Using-Mass-Upload-to-create-products))
- Edit the product via API

## Resolutions

- Payment and voucher buttons will be disabled in POS until the total amount owing has been calculated successfully
- Resolved an issue with Special Orders Fulfilment where under specific circumstances products incorrectly showed as Available to be Picked
- Performance improvements made to Franchise Connect Sales Report

[Return to top](#top)

Want to see what else is coming in the future? Take a look at the [Product Portal](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fportal.productboard.com%2Fxjc5eqgr3wpp4lregjvharq3%2Ftabs%2F5-in-development) now!