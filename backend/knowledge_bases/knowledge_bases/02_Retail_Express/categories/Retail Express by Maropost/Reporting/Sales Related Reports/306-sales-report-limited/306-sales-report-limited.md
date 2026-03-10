---
title: "Sales Report (Limited)"
articleID: 306
category: "Reporting > Sales Related Reports"
knowledgeBase: "Retail Express"
---

# Sales Report (Limited)

You can access sales performance data without viewing sensitive cost and profitability information by using the Sales Report Limited version, which provides revenue and unit sales metrics while hiding cost prices and gross profit margins. This restricted reporting helps retail operators share sales performance with staff members who need transaction data but shouldn't access confidential pricing information.

Using the Sales Report Limited helps retail operators maintain appropriate information security while still providing sales team members with performance metrics they need to understand sales results and customer purchasing trends.

The Sales Report (Limited) is a reduced version of the Sales Report. This report is recommended to be used when you want staff to access the Sales Report, but don't wish for them to view Cost or GP information.

Use the Sales Report as a supplement to the Stock Value Vs Sales Report when more detail is required, or in conjunction with the Income Report when investigating cash discrepancies.

> **Note:** This report should not be used as a single reference for overall sales information but in conjunction with the Stock Value vs Sales Report.

## Using the Sales Report (Limited)

To use the Sales Report (Limited):

1. Open Retail Express
2. Navigate to **Reports > Sales Reports > Sales Report (Limited)**
3. Use the **Search** fields and **Filters** as required (see below for detailed information)
4. Click **Search**
5. To **Export **the report click either the XML or CSV buttons in the top right-hand corner

![mceclip0 - 2023-07-09T232704.810.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphmZEAQ.jpg)

## Filters

Most of the filters are self-explanatory, however, see the detailed information below for the more advanced filtering explanations.

|  |  |
| --- | --- |
| **Filter** | **Details** |
| Order Number | The order number for the invoice  > **Note:** Entering an Order Number will ignore all other filters and display this order only |
| Product PLU Code | Can be used to enter multiple codes when separated by a comma e.g. 1234, 1235, 1236. Valid codes for this field are:  - Supplier SKU - Manufacturer SKU - Product ID   > **Note:** When filtering by a PLU the report will show the entire order including the matching PLU; not just the line item for that product only. For reports on specific products only refer to the Product Sales Report. |
| Date From/Date To | The date range for the transactions on the report (used in conjunction with other filters).  > **Note:** Match date and time with your Income Report. |
| Filter by Processed Date | Tick this box to report on **sales that reached the Processed status within the date range. **This will exclude any orders marked as Awaiting Payment. |
| Do not Summarise by Outlet | Tick to display invoices in a consecutive order, not grouped by Outlet |
| Performed Online/Offline | If a sale was processed while the system was Online or operating in Offline Mode |
| Sales Status | Used to filter orders by a **current status** where the **order was created within the date from/to range **  > **Note:** this filter should not be confused with the Filter by Processed Date filter |
| Order Source | Where the sale originated from.   > **Note:** All sales placed through the eCommerce API are from an order source of "WebService". The "Webstore" option is a legacy system. |

![salesreportlimited_results.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphT4EAI.jpg)

> **Note:** If you require assistance or training is using Excel, free help is available directly from Microsoft - https://support.office.com/en-IN/Excel.