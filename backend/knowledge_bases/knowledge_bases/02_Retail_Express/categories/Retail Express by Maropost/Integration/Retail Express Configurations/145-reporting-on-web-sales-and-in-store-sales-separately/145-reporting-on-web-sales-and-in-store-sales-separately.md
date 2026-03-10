---
title: "Reporting on Web Sales and In-Store Sales Separately"
articleID: 145
category: "Integration > Retail Express Configurations"
knowledgeBase: "Retail Express"
---

# Reporting on Web Sales and In-Store Sales Separately

**Version Note**: eCommerce API, Shopify

All orders that come in from an integrated Web Store can be reported separately from the In-Store sales using various reports. Most reports have a simple filter in the search options.

Before you begin, it's important to understand the different kinds of Order Sources:

|  |  |
| --- | --- |
| **Order Source** | **Description** |
| POS | Sales processed in-store using Retail Express POS |
| Shopify | Orders from integrated Shopify web stores |
| WebService | Orders from integrated web stores using the"Web Store/eCommerce API |
| Web Store | A legacy web store integration, not commonly used. |

## Sales Report

**Access via:**

- Customers > Sales Report
- Reports > Sales Reports > Sales Report
- Quick Links > Sales Report

To report on web-related Orders in the Sales Report select an Order Source of "WebService" in the Refine Search section.

![rtaImage - 2023-07-09T224354.294.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphObEAI.jpg)

## Fulfilment Report

**Access via:**

- Inventory > Fulfilment Report
- Quick Links > Fulfilment Report

![rtaImage - 2023-07-09T224359.730.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphOgEAI.jpg)
To report on web-related Orders in the Fulfilment Report, select only the "Web Service" option, leaving the "POS" and "Webstore" options deselected.

## Stock Value Vs Sales Report

**Access via:**

- Reports > Stock Reports > Stock Value Vs Sales

![rtaImage - 2023-07-09T224406.560.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphOlEAI.jpg)
To report on web Orders, similarly to the Sales Report, untick "Include Store Sales" and "Include Web Sales" options, leaving only the "Include Web Service Sales" option selected.

> **Note:** that as this report simultaneously displays stock turn, sales, stock on hand and Purchase order information, this filter will only affect the sales information in the results.

## Style Performance Report

**Access via:**

- Reports > Product Performance > Style Performance Report

![rtaImage - 2023-07-09T224416.075.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphOqEAI.jpg)
Similarly to the Stock Value Vs Sales Report, the Style Performance Report can be filtered to show only web sales by unticking the "Include Store Sales" and "Include Web Sales" options in the "Search Fields" section, leaving only the "Include Web Service Sales" option selected.

## Other Reports

In conjunction with these specific reports, there are other creative ways you can report specifically on web store sales by using various other filters.

Example: as part of the configuration of an integrated Web Store you are instructed to set up a staff User account in Retail Express for the Web Store to use - this is the User that is assigned to sales that the Web Store creates in Retail Express.

If you have done so correctly you can search for Web Store Orders in many other reports by specifying the "Sales Person".

In this example: we created a User "**A A**". By specifying that Sales Person in any report with a standard Sales Person filter the results will only include sales that were made by that user.

![rtaImage - 2023-07-09T224421.475.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphOvEAI.jpg)