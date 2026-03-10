---
title: "Release Notes 3.15.9 - POS and Back Office"
articleID: 1161
category: "2022 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-12-01
---

# Release Notes 3.15.9 - POS and Back Office

# Release Notes 3.15.9 - POS and Back Office

This release will be available to all customers by the 6th September 2022.

## Video Overview

[▶ Embedded Video](https://player.vimeo.com/video/739592423?h=b086ca9b30&badge=0&autopause=0&player_id=0&app_id=58479)

## New Features

### New Customer Mass Download and Upload Tools

![Customer Mass Upload.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdqjEAA.jpg)
We've been working on improving our Mass Upload & Download experience, and we're excited to announce our new Customer Data tools are now available, with Product Data to follow soon!

Features at a glance:

- Handle larger volumes of customer data
- New CSV Template with additional fields added (hint: survey segments)
- More filters to download only the data you need
- No more copy & paste - map the columns in your file to the relevant Retail Express fields when importing data from other systems
- Resolve any issues with your data on-screen, rather than having to edit and re-upload your file
- Improved tools to help detect and prevent customer duplication by email or mobile number
- Navigate away from the page without losing your progress

These new time-saving features will be available alongside the existing Mass Download and Upload (now renamed "Legacy") so you can continue to use the tools you're familiar with while you get used to using the new ones.

Take a look at [the Announcement](https://galaxy.maropost.com/s/article/Announcing-the-new-Customer-Mass-Download-Upload?utm_source=release-notes&utm_medium=display&utm_campaign=3.15.9-rel) for all the details.

## Improvements

### Account Statements

We've introduced new settings to simplify the information displayed on Customer Account Statements:

- You can now hide the Aging Bands and display only the Total Outstanding
- You can hide the customer's Account Terms and display a generic Terms message instead

![mceclip2 (71).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfJ0EAI.jpg)
The Aging Bands and Default Terms can be enabled/disabled from within the [Global Settings](https://galaxy.maropost.com/s/article/Global-Settings).

![mceclip3 (42).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfJ5EAI.jpg)

### Additional improvements

Other improvements included in this release:

- We've updated our menu, renaming "CRM" to Customers (not to be confused with the CRM feature in the list) and introduced the new Customer Management menu with both new and legacy Customer Mass Upload tools
  ![mceclip0 - 2023-07-09T182042.621.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfJFEAY.jpg)
- DEPRECATED FEATURE - Following the update to the [Afterpay Card](https://galaxy.maropost.com/s/article/News-Afterpay-launches-new-Afterpay-Card) method, we have removed the legacy Afterpay integration feature. Now, using Afterpay at POS will act like other manual payment methods (Mastercard, Visa etc) in that it can be used to categorise the payment, and will not trigger a prompt for Afterpay details. [Click here](https://galaxy.maropost.com/s/article/Using-Afterpay-Card-at-POS) for detailed instructions on using Afterpay Card.
- DEPRECATED FEATURE - We have removed the Accounting Link Reconciliation Reports from the Reports menu due to the Accounting Link tool reaching [End of Life](https://galaxy.maropost.com/s/article/Accounting-Link-End-of-Life) as of 1st July 2022.

## Resolutions

- The Product Sell Price is now calculated including GST when creating a product using Quick Create with a Markup Target %
- Freight totals are now calculated correctly on the Accounts Receivable Balance Report and Account Statement for Shopify sales where freight was added after the sale was created (POS always displayed the correct totals owing).
- [Updates to the Shopify Integration](https://galaxy.maropost.com/s/article/Release-Notes-3-15-9-Shopif)