---
title: "Stock Take Detail Report"
articleID: 292
category: "Reporting > Stock Related Reports"
knowledgeBase: "Retail Express"
---

# Stock Take Detail Report

You can review complete stock take results and variance analysis by accessing the Stock Take Detail Report, which shows counted quantities versus system quantities for all products included in physical inventory counts. This report helps retail operators identify count discrepancies, investigate shrinkage causes, and improve inventory accuracy through regular stock verification and adjustment processes.

Using the Stock Take Detail Report helps retail operators validate stock take accuracy, identify products with recurring count variances, and implement corrective actions that improve overall inventory accuracy and reduce shrinkage.

The Stock Take Detail Report and Stock Take Details Report (Limited) displays a detailed breakdown of Stocktake counts, variances, and associated cost values.

Both reports access the same information and allow the same search options however the Limited report displays basic product information and count quantities without displaying cost-related information (Buy Ex and Variance).

The Stock Take Detail Report can also be accessed by running the Stock Take Report and clicking "View Details".

## Using the Stock Take Detail Report

To use the Stock Take Details Report:

1. Navigate to **Reports > Stock Reports > Stocktake Detail Report**
2. Select from the **Filters** (see below for more detailed information)
3. Click **Do not summarise by Product Type** to immediately see a list of products (instead of being grouped)
4. Click **Search**
5. Click the Down arrow in the left column to view more detailed information
  ![mceclip0 - 2023-07-10T015313.700.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiBOEAY.jpg)
6. Click the icons in the top-right hand corner to export the report in an Excel spreadsheet or CSV
  ![mceclip1 - 2023-07-10T015318.276.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiBTEAY.jpg)

**Grouped by Product Type**

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20250107at101449PM.05TJ100000RiqMFMAZ.png)
**Ungrouped**

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20250107at101504PM.05TJ100000RiqMKMAZ.png)

## Filters

Most of the filters are explanatory however we have covered the details of some specific fields below.

|  |  |
| --- | --- |
| **Filter** | **Details** |
| Stock Take Id | The identifying number of the Stock Take, used to filter the report to a single Stock Take only. If you have opened the Stock Take Detail Report via the Stocktake Report this field will be automatically populated for you. |
| Date From/Date To | Used to narrow the results to a particular date range when the Stock Take was performed |
| Do not summarise by Product Type | Unchecked by default, products will be grouped according to their Product Type |

## Results

The Results tab displays detailed information on products included in the Stock Take.

Click the Arrow in the left column to expand/collapse rows

![mceclip4 (36).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiBYEAY.jpg)

|  |  |
| --- | --- |
| **Column** | **Details** |
| Product Type | Displayed if the filter option "Do not summarise by Product Type" is unchecked |
| Counted | The number of products counted on the Stock Take |
| Expected | The number of products expected to be counted (calculated inventory levels in Retail Express) |
| Variance | The difference between the stock counted and expected |
| Buy Ex | The Buy Ex price for either a **single product** (if on a product row) or the total for **one of each product** in the Stock Take e.g. in the screenshot above one of the products 126648 (Black Dress) has a Buy Price of $24.80 |
| Total Counted | The total Buy Price Ex value for all products counted e.g. 20 x product 126648 (Black Dress) for a total of $496 |
| Total Variance | The difference in the total Buy Price Ex value for what was counted vs what was expected |