---
title: "Reports - Transfers Report (for Accounting Reconciliations)"
articleID: 323
category: "Reporting > Accounting"
knowledgeBase: "Retail Express"
---

# Reports - Transfers Report (for Accounting Reconciliations)

Find [**related articles**](https://galaxy.maropost.com/kb/articles/323-reports-transfers-report-for-accounting-reconciliations#Faqs)** **at the bottom of this page

The Transfers report is generally used for Accounting purposes to reconcile your accounting package In-transit account and the inventory movements with Retail Express. The report provides a total for stock dispatched and received for each day per Outlet within the selected date range, and can be expanded to show more values for each transfer.

> **Note:** Reconciliation via this report is performed at a detailed transaction level. For help with account or summary level reconciliation, please see [related articles](https://galaxy.maropost.com/kb/articles/323-reports-transfers-report-for-accounting-reconciliations#Faqs).

### Considerations when using this report:

- Outbound transfers are negative as they represent a value *removed* from stock
- Inbound transfers are positive as they represent a value *added* to stock
- This report only includes the movements when transfers are dispatched and received - not created. The point of dispatch/receiving is when the inventory movement occurs within Retail Express.
- By default your stock in transit account will be adjusted by the Buy Price value as Direct Costs will already have been expensed on the supplier invoice.
- If you are using Direct Cost Provisioning your stock in transit movements will be for the COGS value with Buy Price coming from your inventory account and the Direct Costs coming from your direct cost provisioning account.

To access the Transfers Report:

1. Navigate to** Reports > Accounting Reports > Transfers**
2. Update the **Search Fields **and **Refine Search **sections as required
  ![transferreport_filters.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pperFEAQ.jpg)
3. Click **Search**
4. Results are displayed grouped by date. Click to expand and view individual transfers and amounts within each date.
  ![transferreport_results.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphb2EAA.jpg)
5. Use the icons on the right-hand side to **Export to Excel **as required
  ![reports_transferreconciliation_export.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphYXEAY.jpg)

> **Note:** Product details for each transfer can be reviewed via the Transfer Detail Report, however the Transfer Detail report returns based on created date, not dispatch/receiving date.

## []()Frequently Asked Questions

#### [What are the Transfer Types?](https://galaxy.maropost.com/kb/articles/323-reports-transfers-report-for-accounting-reconciliations#transfer-types)

|  |  |
| --- | --- |
| **Transfer Type** | **Details** |
| Customer Order | Transfer created as a result of a sale requesting stock from another Outlet |
| Store Request | Transfer created manually via Back Office |
| H.O. Distribution | Transfer created as a result of a bulk action e.g. Stock Replenishment |
| Store Transfer | Transfer created manually at POS |

Want more information? Find related articles here:

- Stock Reports - Transfer Detail Report
- Reports - Stock In Transit Balance Report
- Accounting Integrations - How to Verify Retail Express Data Imported to your Accounting Package
- [View all Accounting Integration articles](https://ress.zendesk.com/hc/en-us/sections/360000006716)