---
title: "Release Notes v3.7.0 - POS and Back Office"
articleID: 884
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-12-01
---

# Release Notes v3.7.0 - POS and Back Office

# Release Notes v3.7.0 - POS and Back Office

**Release date:** 31st July 2019

### []()**Run Stock Replenishment for Depleted Stock**

Building on the existing [Stock Replenishment via Transfers](https://galaxy.maropost.com/s/article/Stock-Replenishment-via-Transfer) feature to easily calculate stock reorder quantities for a Transfer Request, we've released a brand new formula, the "Depleted Stock" formula.

Where the existing formulas were based on sales, the Depleted Stock Formula looks at all negative inventory movements within the Outlet - ideal for businesses frequently processing Transfers or fulfilling stock from online orders e.g. Click and Collect.

![mceclip3 (47).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphFiEAI.jpg)
**At a glance:**

- **New Formula** added to the Stock Replenishment feature
- Depleted Stock formula uses **negative inventory movements** to calculate suggested reorder quantities
- **Inventory movements**:  - Invoices (where the selected Outlet is the Source/Fulfilment Outlet)
  - Stock Adjustments (including Mass Upload)
  - Stock Takes
  - Transfers
- Available for **Transfer Replenishment **only

For example, if you replenish your stock every 30 days, you can set the report "Days Cover" field for 30 days, but the period to review the past 60 days (to average out all movements over an extended period). The report will review all negative inventory movements, then suggest a reorder quantity for enough stock to last until your next Stock Replenishment Run, helping you avoid running out of stock!

![mceclip0 - 2023-07-09T222401.499.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfZAEAY.jpg)
For more information on Stock Replenishment refer to the [Stock Replenishment via Transfers](https://galaxy.maropost.com/s/article/Stock-Replenishment-via-Transfer) article.

### []()**Direct Costs added to Xero Accounting Integration**

The Retail Express Xero Integration now supports provisioning your Direct Costs to be expensed with the Buy Price as the Cost of Goods Sold.

> **Important:** You will need to review your Xero Integration Settings in Retail Express to confirm the Account Mappings for Direct Costs. For more information refer to the Xero Integration - Setup and FAQs article.

As part of this change we've updated several reports to provide Direct Cost information, making it easier to allow for reconciliation of the new transactions.

New and Updated Reports:

- [New! Stock in Transit Balance Report](https://galaxy.maropost.com/s/article/Reports-Stock-In-Transit-Balance-Report) (see the next section  for more information on this report)
- [Stock Adjustment Summary Report](https://galaxy.maropost.com/s/article/Reports-Stock-Adjustment-Summary-Report)
- [Accounting Transfers Report](https://galaxy.maropost.com/s/article/Reports-Transfers-Report-for-Accounting-Reconciliations) - new Direct Costs columns for both Outbound and Inbound Transfers
- [Fulfilled Sales Report](https://galaxy.maropost.com/s/article/Fulfilled-Sales-Report)

For detailed information and commonly asked questions about our Accounting Integrations, please refer to the [Accounting Integrations FAQs](https://galaxy.maropost.com/s/article/1Frequently-Asked-Questions) article.

### []()**New Report - Stock In Transit Balance Report**

We have a new report - the Stock In Transit Balance Report!

This report makes it easier to perform Account Reconciliations by showing you the status of stock currently in transit at a given date (the [Transfers Report](https://galaxy.maropost.com/s/article/Reports-Transfers-Report-for-Accounting-Reconciliations) displays a total for stock dispatched and received within a date range, rather than at a specific point in time).

**At a glance:**

- Used for **Accounting Reconciliations**
- Displays a total for stock **currently in transit at a give date**
- Used for the **Outlet **the stock is being **dispatched from**
- **Costs** are as at the **time of dispatch**

![mceclip0 - 2023-07-09T222408.886.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphJqEAI.jpg)
Using this report you can see a balance for stock that was in transit at any given date, for one or more Outlets. You can even filter by Store Type (to view Outlets only, or Warehouses only), or Country. For example, if you wanted to see the costs of stock in transit last week, you can select the date and the report will calculate the information for you.

**Important note:** Costs are set at the time the Transfer was created based on the product cost price at the Dispatch Outlet. If the product costs have changed since the stock was received the value in the report may be different to the current value of the stock.

To use the report:

> **Note:** To access the report you will first need to add the new report to your Security Profile

1. Navigate to **Staff > Profile Security**
2. Click **Edit Features **to edit the appropriate Profile
3. Tick the option for **Stock In Transit Balance Report**
  ![mceclip2 (77).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphJvEAI.jpg)
4. Click **Save Changes**
5. **Log Out** and log back into Back Office
6. Navigate to **Reports > Accounting Reports > Stock In Transit Balance Report**

To view more details refer to the [Reports - Stock In Transit Balance Report](https://galaxy.maropost.com/s/article/Reports-Stock-In-Transit-Balance-Report) article.

### []()**Improvements**

Below is a list of improvements included in the latest Maintenance Release:

|  |  |
| --- | --- |
| MultiBuy | Multibuys have been renamed to Promotional Campaigns in preparation for some exciting new features coming soon! |
| POS | When a discount is applied in POS you the original price will be displayed with the reduced price underneath: ![mceclip0 - 2023-07-09T222423.594.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphKFEAY.jpg) |
| POS | The icon to show when a Promotional Campaign (formerly called "Multibuy") has been applied has been moved to the left of the Price field ![mceclip5 (21).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfigEAA.jpg) |
| POS | If a duplicate customer email address has been entered an error will be displayed and the Email field will revert to the previously entered address. |
| Stock Adjustment Detail Report | New "Stock Bucket" filter added to filter by Inventory status e.g. Available, Transit In. |

### **Resolutions**

Below is a list of resolutions included in the latest Maintenance Release:

|  |  |
| --- | --- |
| Scheduled Replenishment | Changes to the time for scheduled replenishment runs are now retained when editing existing schedules |
| Financial Summary Report | Expired Vouchers now appear correctly in the Financial Summary Report for Outlets with 0% GST |
| Shopify Custom Domains | A new feature to the Shopify Connector Settings has been added to allow support for custom domains when using the Click and Collect feature. Navigate to **Settings > Integrations > Shopify** and edit your Shopify Store settings to access the new field: ![mceclip0 - 2023-07-09T222434.290.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphKPEAY.jpg) |

> **Note:** Stay up-to-date with news from the Support team - subscribe now

Want more information? Find related articles here:

- [View all Release Notes](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Fcategories%2F115000210393)