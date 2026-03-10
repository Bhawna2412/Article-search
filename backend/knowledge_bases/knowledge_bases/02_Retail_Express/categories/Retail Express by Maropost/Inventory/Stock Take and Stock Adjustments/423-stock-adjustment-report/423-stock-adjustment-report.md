---
title: "Stock Adjustment Report"
articleID: 423
category: "Inventory > Stock Take and Stock Adjustments"
knowledgeBase: "Retail Express"
---

# Stock Adjustment Report

You can gain valuable insights into inventory accuracy and stocktake results through the Stock Adjustment Report in **Retail Express**, which provides detailed variance analysis and adjustment tracking for post-stocktake review. This comprehensive reporting capability helps retail operators identify inventory trends and discrepancies, supporting better decision-making and inventory control across Australian retail operations.

The Stock Adjustment Report enables **Retail Express** users to analyze applied variances, adjustment reasons, and quantity changes across stocktakes and manual adjustments, helping retail operators understand inventory movements and maintain accountability. This reporting feature helps ensure your retail operations can track adjustment patterns, validate stocktake accuracy, and export detailed records for financial reconciliation and audit purposes.

The Stock Take Adjustment Report displays detailed information about your submitted stocktakes and manual stock adjustments for post-adjustment review of Product quantities, values and variances applied.

## Using the Stock Adjustment Report

To access the Stock Adjustment Report:

1. Navigate to **Reports > Stock Reports > Stock Adjustment Report**
2. Update the **Filters **as required (see below for detailed explanations)
  ![mceclip1 - 2023-07-10T011846.315.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphgWEAQ.jpg)
3. Click **Search**
4. The **results** will be displayed
  ![mceclip2 (90).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi6JEAQ.jpg)
5. Scroll to the right to view more detail
6. Click **View Legend **for information on some of the columns
7. To **export the report to Excel**, click the icons in the top right-hand corner of the table (xls or CSV)
  ![mceclip0 - 2023-07-10T011856.494.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi6OEAQ.jpg)

The "Applied Variance" column will display how your inventory was impacted i.e. negative numbers indicate a decrease in stock, positive numbers show an increase in stock.

The Stock Adjustment Report includes "Adjustment Reason" as a filter option and a column in the report results. This allows for more detailed analysis and reporting on the reasons for inventory adjustments.

## **Stock Adjustment Reasons:**

Users have the ability to select "Reasons" from a dropdown menu when performing stock adjustments has been implemented. Users can configure these reasons in the Back Office and via the REST API.

- Supports GET | PUT | POST | DELETE /stockadjustmentreasons

Additionally, settings to make "Comments" and "Reasons" optional or mandatory can be configured in 'Settings', allowing for better customization and control.

Configurable via Settings > Stock Adjustment Settings in Back Office and determines what options are required when creating a manual stock adjustment.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240730at100517AM.05TJ100000A2kFfMAJ.png)
![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240730at100624AM.05TJ100000A2kFkMAJ.png)

## Filters

Most of the filters are self-explanatory, however, please see detailed information below for the more advanced filters.

|  |  |
| --- | --- |
| **Filter** | **Details** |
| Product PLU Codes | The product code. Enter multiple codes separated by a comma to report on specific products only. The codes available to be used are:  - Supplier SKU - Manufacturer SKU - Product ID |
| Stocktake ID | The system-generated ID assigned when a stocktake is created (view the Stock Take Detail Report for more information). |
| Report Opening & Closing | Used to select a preferred option for stock quantities. Options available:  - Available - Stock On Hand |
| Adjustment Type | How the Stock Adjustment was performed |

## Frequently Asked Questions

[Can I view which stocktake file was uploaded via the Excel Method?](https://galaxy.maropost.com/kb/articles/423-stock-adjustment-report#use_a_unique_name)

You can identify Excel uploads by either the following:

- Use the **Adjustment Type** filter set to "Stocktake - Upload" only (this will limit the results to Excel uploads)
- View the **Adjustment Type **column and look for lines with the Adjustment Type of "Upload"