---
title: "Stock Value Vs Sales Report"
articleID: 283
category: "Reporting > Stock Related Reports"
knowledgeBase: "Retail Express"
---

# Stock Value Vs Sales Report

You can analyze the relationship between inventory investment and sales performance by accessing the Stock Value vs Sales Report, which compares inventory holdings against sales velocity for products and categories. This report helps retail operators identify overstock situations, optimize inventory levels, and improve inventory turnover by aligning stock investment with actual sales demand across product lines.

Using the Stock Value vs Sales Report helps retail operators balance inventory investment against sales performance, reduce excess stock holdings, and improve cash flow through better inventory efficiency and turnover optimization.

The Stock Value vs Sales Report is used to review Sales, Gross Profit, Purchases, Inventory Values or Stock Turns. This report is split into three sections (Sales, Stock Value and Purchase Orders) and includes:

- Purchase Orders (PO)
- Sales and Stock Value information
- Current Stock Value
- Value of Sales
- Value of Purchase Orders

> **Note:** Data presented in the Stock Value vs Sales report is **current at the time of running the report**. This report is unable to provide data from a historical point in time.

The Report can be grouped by Product Type or Outlet and is designed to provide summary information. It can be used in conjunction with the Sales Report to review detailed transaction information.

## []()Using the Stock Value vs Sales Report

To use the report:

1. Navigate to **Reports > Stock Reports > Stock Value vs Sales Report**
2. Update the **Filters **as required (see below for detailed information)
  ![stockvaluevssales_filters.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiBdEAI.jpg)
3. Click **Search**
4. The report results will be displayed, broken up into different sections indicated by the headings at the top (Sales etc)
5. To **export the report** click the Excel or CSV icons in the top right-hand corner of the table
  ![mceclip0 - 2023-07-10T015543.098.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiBiEAI.jpg)

> **Note:** You may need to scroll across to view these buttons

![blobid0 (42).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiBnEAI.jpg)

## []()Filters

Most of the filters are self-explanatory, however, see the detailed information below for the more advanced filtering explanations.

|  |  |
| --- | --- |
| **Filter** | **Details** |
| Group By | Used to select how the report results should be grouped, either by Product Type, Outlet or Supplier |
| Exclude below zero stock units | Used to exclude products that are in a negative stock quantity e.g. if using miscellaneous products, or have products dedicated for services (these types of products are typically sold into negatives).  > **Important:** Products with a negative quantity will **detract from your inventory valuation** when included in this report. |
| Sales Dates and PO Dates | Used to filter the Sales and Purchase Orders Made Available section of the report only. These fields **do not impact Current Stock results** and can be ignored if you only wish to review the Current Stock Inventory Valuation. |
| Outlet | Used to filter the results to specific Outlets only.   > **Note:** this is useful for reviewing how much stock is held in each location, and can be combined with the Group Results By Outlet option. |

## Reconciling Values

The Stock Value Vs Sales report can be reconciled against the Item Detail Export should you need to see the item-by-item breakdown.

As with many reports, it?s important to be consistent with the inventory statuses used to calculate the stock value. Some reports, including the Stock Value vs Sales report, allow you to select which status, or provide a breakdown of each within the report so you can provide your own manual calculations.

![mceclip0 - 2023-07-10T015553.829.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphlSEAQ.jpg)Default Stock Value fields in the Stock Value vs Sales Report

![mceclip1 - 2023-07-10T015558.544.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiBoEAI.jpg)Break down of the individual status within Item Detail Export

## []()Frequently Asked Questions

[Why shouldn't I compare the Stock Value vs Sales results with the Sales Report results?](https://galaxy.maropost.com/kb/articles/283-stock-value-vs-sales-report#collapseOne)

The sales values reported in the Stock Value vs Sales Report won't necessarily equal the sales values of the Sales Report. The results of these reports cannot be compared to each other, as the filtering works differently when applied to each report.

Example:

- You sold 1 x T-Shirt for $20, and 1 x Chair for $100 on a single invoice.
- The Order total equals $120.

In the **Sales Report, **an applied filter of 'Chairs' will display a sales value of $120 - because the *total order* contains a chair.

In the **Stock Value vs Sales Report**, an applied filter of 'Chairs' will display a sales value of $100 - because it exclusively shows the sales values of chairs, and NOT other products included on the same invoice.

[How are the Current Stock columns calculated?](https://galaxy.maropost.com/kb/articles/283-stock-value-vs-sales-report#stock-columns)

The columns in the Current Stock section of the report use the following data:

|  |  |
| --- | --- |
| **Column** | **Details** |
| Current Value POS Ex Price | Current stock value calculated from your POS sell price, Ex GST |
| Current Value Buy Ex | Current stock value calculated from your Buy Price, Ex GST |
| Current Value Direct Costs | Current value of direct costs |
| Current Value COGS | Current stock value calculated from Buy Price Ex + Direct Costs (COGS is Cost of Goods Sold) |
| COGS % of Total | % value of COGS (Cost of Goods Sold) compared with other Product Types/Outlets |
| Current units | Current Units for each Product Type/Outlet |
| Current Avg Unit Value | Average unit value for each Product Type/Outlet |