---
title: "Release Notes v3.11.6 - POS and Back Office"
articleID: 962
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-12-01
---

# Release Notes v3.11.6 - POS and Back Office

# Release Notes v3.11.6 - POS and Back Office

**Release Date:** 30th March 2020

In this release we've added some exciting new additions to Scheduled Price Changes, as well as some new fields and filters on various reports and the Transfers Picking Excel Export file. We've also made **8** improvements and resolutions.

In this release:

- [Scheduled Pricing](#scheduled-pricing)
- [Voucher Creation Report - Expiration filters](#voucher-creation)
- [Transfers - Picking: Additional columns available in Export to Excel ](#transfers)
- [Package Details Report - On Order Quantity column](#package-details)
- [Improvements and resolutions](#improvements)

### []()**Scheduled Pricing**

In this release we've added new options to the Scheduled Pricing feature, making it more powerful than ever.

- A new **Sales Channels filter** (to filter specifically by products synchronising with online web stores)
- Schedule a new Promotional Price (Master or Outlet-specific) **Set Price To POS Price Minus **to calculate a price based on the POS price
- Schedule the POS Price (Master and Outlet-specific) to be adjusted by a **Markup Target %**

For example, to calculate a new Promotional Price the equivalent of the POS Price minus 10%, you would select an "Adjustment Detail" of "Set Price to POS Price Minus", and enter your percent value.

![mceclip6 (13).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfWYEAY.jpg)
To have this *only *apply to products synchronised with the web store, select your online store from the new Sales Channel filter.

![mceclip7 (12).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfWsEAI.jpg)
For detailed information on creating a Scheduled Price Change refer to the [Inventory - Scheduled Price Change](https://galaxy.maropost.com/s/article/Scheduled-Pricing-Changes) article.

### []()**Voucher Creation Report - Expiration Date filters**

Three new fields have been added to the Voucher Creation Report to allow you to filter by Voucher Expiration dates.

- Expiration Date From
- Expiration Date To
- Ignore Expiration Date Filters

![mceclip0 - 2023-07-09T184830.305.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfWxEAI.jpg)
When the Ignore Expiration Date Filters option is ticked (ticked by default) all vouchers will be displayed in the results, providing they match the remaining search criteria e.g. Date Created.

Refer to the [Reports - Voucher Creation Report](https://galaxy.maropost.com/s/article/Reports-Voucher-Creation-Report) for more information.

### []()**Transfers - Picking: Additional columns available in Export to Excel**

New columns have been added to the Transfers - Picking Export to Excel spreadsheet, to make it easy to find your products.

- Product ID
- Transfer Number

To access the spreadsheet:

1. Navigate to **Inventory >Transfer Management > Pick**
2. Use the **Filters** to search for your Transfers as required
3. Click **Search**
4. Click **Export To Excel**
  ![mceclip1 - 2023-07-09T184840.827.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfX2EAI.jpg)
5. **Open** the downloaded file
6. The new columns are displayed accordingly

![mceclip2 (74).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppeYqEAI.jpg)[Click to view full screen](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Farticle_attachments%2F360003956916%2Fmceclip2.png)

Refer to the [Inventory - Pick an Allocated Transfer](https://galaxy.maropost.com/s/article/Pick-an-Allocated-Transfer) article for more information.

### []()**Package Details Report - On Order Quantity column**

A new "On-Order" column has been added to the Package Details Report, making it easier than ever to report on your Packages.

To view the new column:

1. Navigate to **Reports > Stock Reports >Package Details Report**
2. Use the **Filters **to search for your packages as required
3. Click **Search**
4. The new column will be displayed after the Avl column for both the header and detailed lines

![mceclip4 (30).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfXMEAY.jpg)
![mceclip5 (18).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfSDEAY.jpg)

### []()**Improvements**

|  |  |
| --- | --- |
| End of Day Summary Report | Performance Improvements |
| Accounting Link | Accounting Link will now convert sales paid by Afterpay and Zip to upload them to your accounting package. |

### **Resolutions**

|  |  |
| --- | --- |
| POS | An issue with the search filter date changing to the previous date for NZ customers has been resolved. |
| Stock Receipts | A4 Labels can now be printed from the Stock Receipt window, even if there are no custom attributes setup |
| Staff Sales Report | The From/To Date now defaults to the current date |
| Customer Mass Upload | Customers can now be created via Mass Upload even without a Price Group or setting a default Price Group for new customers |
| Promotional Campaigns | When editing a sale, campaign prices will no longer apply to products already fully or partially fulfilled and dispatched to the customer |
| POS - Editing Customers | The Customer Type will be retained when editing existing Customers via POS |

Want more information? [View all release notes](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Fsections%2F360000116916).