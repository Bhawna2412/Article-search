---
title: "Stock Replenishment via Transfer"
articleID: 447
category: "Inventory > Transfers"
knowledgeBase: "Retail Express"
---

# Stock Replenishment via Transfer

You can optimize inventory distribution across your retail network through automated stock replenishment transfers in **Retail Express**, which help maintain optimal stock levels at each location by systematically moving inventory from warehouses or high-stock outlets to locations with low inventory. This strategic replenishment approach helps retail operators reduce stockouts and improve product availability, with effective transfer-based replenishment typically achieving better stock balance and improved sales performance across Australian retail operations.

Stock replenishment through transfers in **Retail Express** enables retail operators to respond proactively to inventory imbalances, helping ensure each outlet maintains appropriate stock levels while optimizing overall inventory investment. This replenishment capability helps ensure your retail operations can maintain consistent product availability, reduce lost sales from stockouts, and support efficient inventory allocation across your multi-store network.

Stock Replenishment via Transfer is an intelligent reordering process, creating Transfers through the use of various formulas to calculate a suggested quantity (instead of manually calculating the required quantities yourself). These formulas make it efficient in creating the Transfers by factoring in the current stock levels, historical sales periods, various inventory movements and more.

> **Note:** Using Retail Express you can run Stock Replenishment on demand as needed, or schedule your Transfers to be created automatically on a recurring basis

This article explains the Stock Replenishment via Transfer feature in more detail. Refer to the Inventory - Stock Replenishment via Purchase Order article for information on using Stock Replenishment to create Purchase Orders for your Suppliers.

## []()Stock Replenishment Formulas

Retail Express has 4 different formulas available to select from to calculate a recommended stock reordering quantity.

Once a formula has been selected the system will recommend a quantity to be re-ordered (this can be manually adjusted as required). Using filters and various preferences you can fine-tune your requirements and quickly create a number of Transfer Requests ready for processing.

Click on the headings below to view more detail.

> **Note:** The system only suggests a reorder quantity - you can overwrite the quantity as required.

![mceclip1 - 2023-07-10T014326.604.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiAGEAY.jpg)
[Sales Formula](https://galaxy.maropost.com/kb/articles/447-stock-replenishment-via-transfer#sales-formula)

The Sales Formula is based directly on product sales. The system re-orders the same quantity of products that were sold in your store during your selected "Sales Period" (this time frame is defined in the Filters).

**Formula example:**

|  |  |
| --- | --- |
| Sales Period | 30 days |
| Number of product units sold in the sales period | 20 units |
| **Suggested re-order quantity** | **20 units** |

[Minimum Stock Level (MSL) Formula](https://galaxy.maropost.com/kb/articles/447-stock-replenishment-via-transfer#msl-formula)

Products within Retail Express have a Minimum Stock Level setting (MSL) for each of your individual Outlets. This is your ideal stocking holding figure, and may vary for each Outlet.

![products_editproduct_minimumstocklevel (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiALEAY.jpg)

> **Note:** Access your Minimum Stock Levels setting by **editing a product** and clicking the **Inventory** Tab, or by doing a **Mass Download/Mass Upload **(ensure you include your Outlet) and editing the MinQty column on the Outlet tab.

The Stock Replenishment MSL formula checks inventory levels to determine which products have a stock quantity below the MSL value. The suggested re-order quantity is the equivalent of the number of units that would be required to bring the stock quantity back to the Minimum Stock Level.

The calculation includes all of the following levels to determine the overall total inventory value:

- Available
- Transit-In
- Received
- Requested
- On-Order

**Prerequisite: **Your products must have a Minimum Stock Level configured to use this formula - see the Inventory - Create and Edit a Product article for more information.

Formula example:

|  |  |
| --- | --- |
| Formula used: | Suggested re-order Quantity = MSL - (Available + Transit-In + Received + On-Order + Requested) |
| Product MSL for Outlet A | 10 units |
| Current stock level | 4 units |
| **Suggested re-order quantity** | **6 units** |

[Run Rate Formula](https://galaxy.maropost.com/kb/articles/447-stock-replenishment-via-transfer#runrate-formula)

The Run Rate formula is a more detailed formula taking into account historical sales information, product settings and current inventory levels.

|  |  |
| --- | --- |
| **Field** | **Details** |
| Daily Run Rate | Average quantity sold per day (using historical sales data to calculate this average automatically). You can specify how many days the Run Rate should take into consideration during Step 2 of the transfer process. Entering a larger number will result in a more accurate prediction. The Run Rate will change all the time based on how many products are sold. Some products are seasonal and have peak and low sales periods. |
| Lead Time | The time it takes to order your stock from your suppliers. Lead time is entered on the Edit Product window in the value of days e.g. a Lead Time of 4 means 4 days from ordering to receiving the stock from the supplier. Alternatively you can select a global Lead Time during Step 2 of the Stock Replenishment process; all products on the transfer will use the same Lead Time. |
| Inventory Levels | The following inventory levels are combined to calculate the current Inventory level for the product:  - Available - Transit-In - Received - OnOrder - Requested |

Using these data fields the system is able to suggest a re-order quantity to ensure that you have enough stock to cover the typical average of sales of this product.

> **Note:** If you're heading into a peak sales period you may need to adjust the numbers manually to account for greater sales e.g. Christmas retail trading will not be reflected in the trading figures for the months prior to Christmas. Using the average Run Rate may not result in an accurate prediction.

**Formula example:**

|  |  |
| --- | --- |
| Formula Used | Suggested Re-order Quantity =  (Daily Run Rate x Lead Time) - (Available + Transit-In + Received + OnOrder + Requested) |
| Daily Run Rate | 10 units |
| Lead Time | 4 days |
| Current Stock Level | 12 units |
| **Suggested Re-Order Quantity** | **28 units** Calculation: (10 x 4) - (12) |

[Depleted Stock Formula](https://galaxy.maropost.com/kb/articles/447-stock-replenishment-via-transfer#depleted-formula)

The Depleted Stock method is based on inventory movements within the system reducing your stock based on the Inventory Status.

- Invoice
- Stock Adjustment
- Stock Take
- Transfer

|  |  |
| --- | --- |
| **Field** | **Details** |
| Depleted Stock | Stock that has been reduced i.e. had a negative movement recorded. This can be through either a Transfer, an order (where the Available stock has been reduced and the product Allocated to a customer), or a modification to the level through a Stock Adjustment or Stock Take. |
| Last Sold date | Refers to the date on which an order is moved to processed status |
| Last Fulfilled | Refers to the date on which an order is processed or awaiting payment, and the fulfilled quantity is greater than zero. |
| Days Cover | The number of days you would like to ensure you have stock available for. For example, if you do a Stock Replenishment run every 30 days, you would enter "30" into the field. This will ensure you're calculating a stock reorder quantity to cover you until you do your next Stock Replenishment run. |
| Inventory Status | The Depleted Stock formula factors in the following status fields for a product:  - Available - On-Order - Transit In - Received - Requested   > **Note:** If the system calculates you require 5 products for the Days Cover period, but you already have 15 on order no Transfer request will be created. |
| Inventory Movements | The following Inventory Movement types are factored into the Formula:  - Invoice - Stock Adjustment (including adjustments performed through the Mass Upload) - Stock Take - Transfer |

**Formula example:**

|  |  |
| --- | --- |
| Formula Used | Suggested Re-order Quantity = ((Depleted Stock/Period) x Days Cover) - (Available + On-Order + Transit In + Received + Requested) |
| Period | 60 Previous days |
| Days Cover | 30 days |
| Movement Type | Transfers (dispatch to other Outlets) |
| Transfers in the previous 30 days: | 24 |
| Current Stock Level | 8 |
| **Suggested Re-Order Quantity** | **4** **units** Calculation: ((24/60) x 30) - (8) |

## []()Using Stock Replenishment via Transfers

Click on the headings below to view detailed information on creating Transfers using the Stock Replenishment feature.

[Creating Transfers immediately (Run Now)](https://galaxy.maropost.com/kb/articles/447-stock-replenishment-via-transfer#create-transfers-runnow)

Using the Stock Replenishment by Transfer feature you can review the suggested re-order quantities and make amendments as required.

> **Note:** You may typically run a replenishment based on sales made in the previous period. In the lead up to a peak trading period (Christmas etc) you can increase the re-order quantity to ensure you have enough stock on hand.

[Step-by-step Instructions](https://galaxy.maropost.com/kb/articles/447-stock-replenishment-via-transfer#create-transfers-runnow-steps)

To create Transfers using the Stock Replenishment feature:

1. Navigate to **Inventory > Stock Replenishment > Stock Transfers**
2. Select the **Stock Reorder **formula (see above for detailed information on each option)
  ![mceclip0 - 2023-07-10T014346.927.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiAQEAY.jpg)
3. Click **Run Now**
4. Click **Refine Search**
5. Select an **Outlet From **and an **Outlet To**
  ![replenishment_transfers_outlet.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiAVEAY.jpg)
6. Select from the remaining **Search Fields** options as required (see below for a detailed explanation of each option)

> **Note:** Use the option "Hide Where Order Qty = 0" to hide products where a Transfer is not required (i.e. the suggested reorder quantity is zero)

7. Click **Search**
8. The proposed Reorder Products values will be displayed in the Qty column (detailed information on each of the columns can be listed below)
9. Enter a manual value in the **Qty **column to override the amount if required
10. Click **Export to Excel **to export a list of proposed Reorder Products
11. Click **Create ITOs** to create the Internal Transfer Orders
12. The **Transfer Report** page will automatically open
13. Select the **Transfer Status** of In Progress
  ![transferreport_transferstatus.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiAaEAI.jpg)
14. Click** Search**
15. Your Transfers are now ready to be picked and dispatched

> **Note:** Once the transfers are created they will have the **Transfer Status** of **In Progress,** with the Stock at the stage of** Allocated.**

[**Explanation of the Search Fields options**](https://galaxy.maropost.com/kb/articles/447-stock-replenishment-via-transfer#create-transfers-options)

The Filters window is made up of three sections:

- Search Fields (covered below)
- Refine Search
- Refine By Attributes

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240614at104710AM.05TJ1000004y04JMAQ.png)
The Refine Search and Refine By Attributes sections are self-explanatory, but the details of the Search Fields are covered further below.

|  |  |
| --- | --- |
| Fields | Details |
| Sales From/Sales To | The sales period for which to suggest a re-order quantity of all products made in this period *Used in the Sales formula |
| Run Rate Period | The number of days to consider the average units sold per day e.g. "60" is the equivalent of 60 days. The Run Rate will change all the time based on how many products are sold. Some products are seasonal and have peak and low sales periods. Selecting a longer Run Rate period will result in more accurate suggestions. *Used in the Run Rate formula |
| Lead Time | The number of days it takes to reorder the stock from the supplier *Used in the Run Rate formula |
| Days Cover | The number of days you would like to ensure you have enough stock. For example, if you only do a Stock Replenishment run every 30 days, entering 30 will ensure the system calculates enough stock required to cover those 30 days. *Used in the Depleted Stock formula |
| Order from Source | Controls the amount of stock that can be requested from the Source Outlet. If "Available Only" is selected the Transfer will only be created for the maximum available stock, even if it's not the full requested quantity. If "Full Re-Order Quantity" is selected the Transfer will be created for the full amount requested, even if that means the Source Outlet will be reduced to a negative value. The Source Outlet will be able to see that additional stock has been requested and use this information in its own Stock Replenishment to order more stock from the supplier. |
| Sales Only | Transfers will only be created for products that have been sold during the sales period |
| Core Products | Products with the "Core Product" option ticked in the product settings |
| Disabled | By default disabled products are not included in results, ticking this option includes any products that have been disabled |
| Carton Quantity | Always order carton - the suggested re-order quantity will default to the value of a carton Round to carton - the suggested re-order quantity will be rounded to the value of a carton. This feature is useful when the supplier only sells products in cartons rather than individually. Order Required Quantity - order the suggested re-order quantity |
| Avail Below MSL | Used to display only products currently below the Minimum Stock Level (MSL). |
| Hide Where Order Qty = 0 | Hide products where the suggested re-order quantity is zero. This reduces a lot of clutter from the screen |
| Stock Levels | Some AVL Some Stores - At least 1 Outlet selected in the Search Filters has an Available quantity above 0 Zero AVL All Stores - All Outlets selected in the Search Filters have an Available quantity of 0 or less Zero AVL Some Stores - At least 1 Outlet selected in the Search Filters has an Available quantity 0 or below |
| Cubic Measurement | Adds the sum total of the items being ordered based on their cubic value to determine if the Transfer request will fit into a container for shipping, or a warehouse/storage area. |
| Sort Direction | Which direction the report should be sorted by - ascending or descending. Clicking on a column heading in the Results tab will sort the results by that column e.g. Product ID. |
| Display Product Attributes | The results tab shows only the default attributes automatically - Brad, Size, Colour and Season. If you have created custom Attributes these can be displayed by selecting "All" |
| Source Stock > 0 | Display only products where the Source Outlet has Available stock. |
| Show Supplier SKU2 | Enable 'Show Supplier SKU 2' filter to display additional supplier-specific product identifiers |

[Explanation of the Reorder Product columns](https://galaxy.maropost.com/kb/articles/447-stock-replenishment-via-transfer#create-transfers-reorderproductcolumns)

![stockreplenishment_transfers_results.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiAkEAI.jpg)

|  |  |
| --- | --- |
| Field | Details |
| Avl (Available) Odr (On order) TrfIn (Transfer In) Faulty (Faulty Stock) Rcd (Received) Req (Requested) | Current stock levels in the To Outlet (where the stock is being transferred to). For detailed explanations on each of these fields refer to the Products - Edit Products/Packages fields article |
| Sold | The number of products sold during the Sales From/To range on the Filters tab |
| YTD (Year to Date) | The number of products sold Year to Date |
| Depleted | The number of products the stock was reduced by during the selected period *Used only in the Depleted Stock formula |
| Rate | The run rate for the product - average quantity sold per day |
| DOH (Days on Hand) | The expected number of "days on hand" before the product sells out. The value is based on the current stock on hand, plus stock on order, and factoring in the current ?run rate? of sales per month. |
| SI (Sales Indicator) | Sales Indicator as per the Product Type for the product. Used as a manual indicator for how fast the product sells. |
| MSL (Minimum Stock Level) | The minimum stock level for the product as configured on the Edit Product window. |
| Qty | The Quantity of stock to be transferred to the To outlet  > **Note:** This field is populated based on the reorder method selected during step 1 |
| Value | The Order Total for the stock to be transferred (based on the Weighted Average Buy Price (Ex Tax) and the Quantity of stock being ordered) |
| Cubic | The cubic value of the product (configured on the Edit Product window) |
| Rg Cubic (Running Cubic) | The cubic value for the total quantity being ordered |
| Frm Avl (From Available) | The current Available stock quantity at the From Outlet (Source Outlet - where the stock is being transferred from) |
| Frm Odr (From On Order) | The current On Order quantity at the Source Outlet. |

[Preparing Transfers in advance (Run on Schedule)](https://galaxy.maropost.com/kb/articles/447-stock-replenishment-via-transfer#scheduled-replenishment)

Using the Scheduled Replenishment feature you can prepare Transfers in advance to be run on an automatic schedule.

For example, you may buy all of your stock at the start of the season and store it in a Warehouse. Using the Scheduled Replenishment you could set up Transfers to be created automatically on a regular basis from the Warehouse Outlet to your store Outlets. This saves your employees from having to manually run this process - the transfers are already created for them!

Any special ordering (e.g. peak sales periods) could be processed using the "Run Now" Stock Replenishment process to create Transfers immediately.

> **Important:** The Scheduled Replenishment process is a resource-intensive process; it's highly recommended to create the schedule to be run outside of business hours.

[Creating the schedule](https://galaxy.maropost.com/kb/articles/447-stock-replenishment-via-transfer#create-transfers-schedule)

The first step is to create the schedule, including the Formula to be used and the frequency.

1. Navigate to Inventory > Stock Replenishment > Stock Transfers
2. Select the Stock Reorder formula
3. Click Run on Schedule
4. The Configure Schedule window will be displayed
  ![scheduledreplenishment_configureschedule.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphsEEAQ.jpg)
5. Enter a unique Name for the schedule
6. Enter the Execution Time of day the process should begin (it's strongly recommended that this is performed out-of-hours as per the note above)

> **Note:** This time is in the Sydney timezone of AEST, or ADST when Daylight Savings is in effect

7. Enter the Execution Period i.e. when the scheduled Transfers should begin and when they should end

> **Note:** You must have an end date; to run the schedule ongoing set a Year far in the future e.g. 2099

8. Enter the Recurrence using the weeks and the day of the week e.g. to run it every day you would enter every 1 week with all days ticked, or for once a month every 4 weeks on only one specific day
9. Click Next
10. Select the Replenishment Settings as required; see the next section for a detailed explanation of these fields (you can refine your product search further using the Refine Products and Refine Products by Attributes filters)

> **Note:** The fields you see on this screen will differ depending on the Formula selected e.g. the Sales formula will not see anything related to Run Rate

11. Click Save Changes

Any Transfers created automatically in the future from this replenishment schedule will be created in the name of the user who created the schedule originally.

[Replenishment Settings](https://galaxy.maropost.com/kb/articles/447-stock-replenishment-via-transfer#scheduled-replenishment-settings)

The Replenishment Settings will appear differently depending on which Formula has been selected. All of the settings have been described below.

![schedulereplenishment_transfers_replenishmentsettings.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiApEAI.jpg)

|  |  |
| --- | --- |
| Field | Details |
| Sales Period | - x previous days: Selects sales processed the entered number of days before the scheduled transfer process runs e.g. If 7 days is selected and the schedule runs on the 29th of March, sales from 22nd - 29th will be returned. If the schedule runs again in 4 weeks on the 26th April, it will return sales from the 19th - 26th of April - Date range: used to select a specific date period for sales; this will be the same period used every time the schedule runs e.g. if the period 22nd - 29th of March is selected and the schedule runs every 4 weeks, when the schedule runs again in April it will still use the period 22nd - 29th of March.   > **Note:** If the setting "Product with Sales Only" is ticked this field will become mandatory. |
| Run Rate Period | The number of days to consider the average units sold per day e.g. "60" is the equivalent of 60 days. The Run Rate will change all the time based on how many products are sold. Some products are seasonal and have peak and low sales periods. Selecting a longer Run Rate period will result in more accurate suggestions. You can select this field based on the number of days previous, or from a specific period in time e.g. if preparing for Christmas trade, you could select the Christmas period from the previous year. |
| Days Cover | The number of days you would like to ensure you have enough stock. For example, if you only do a Stock Replenishment run every 30 days, entering 30 will ensure the system calculates enough stock required to cover those 30 days. *Used in the Depleted Stock formula |
| Lead Time | The number of days it takes to reorder the stock from the supplier |
| Order Quantity | - Always order carton - the suggested re-order quantity will default to the value of a carton - Round to carton - the suggested re-order quantity will be rounded to the value of a carton. This feature is useful when the supplier only sells products in cartons rather than individually. - Order Required Quantity - order the suggested re-order quantity |
| Create Transfers as | The status of the Transfers when created. This will have a direct impact on the inventory levels for the product e.g. selecting "Allocated" will immediately reserve the stock for the transfer (reducing the Available quantity and increasing the Allocated quantity) whereas "Requested" will not affect the Available quantity, and only put in a request for the stock. |
| Order from Source | Controls the amount of stock that can be requested from the Source Outlet.  - Available Only - the Transfer will only be created for the maximum available stock, even if it's not the full requested quantity. - Full Re-Order Quantity - the Transfer will be created for the full amount requested, even if that means the Source Outlet will be reduced to a negative value. The Source Outlet will be able to see that additional stock has been requested and use this information in its own Stock Replenishment to order more stock from the supplier. |
| Source Outlet | Where the stock is being transferred from |
| Destination Outlets | Where the stock will be transferred to  > **Note:** Hold Ctrl and click to select multiple outlets (Transfers will be created for the Outlets individually). |
| Products with Sales Only | Transfers will only be created for products that have been sold during the sales period  > **Note:** This is useful when used with the Run Rate formula method e.g. Replenish stock that sells (run rate) but if I haven't sold it in the Sales Period specified don't reorder any new stock. |
| Core Products Only | Products with the "Core Product" option ticked in the product settings |
| Include Disa |  |