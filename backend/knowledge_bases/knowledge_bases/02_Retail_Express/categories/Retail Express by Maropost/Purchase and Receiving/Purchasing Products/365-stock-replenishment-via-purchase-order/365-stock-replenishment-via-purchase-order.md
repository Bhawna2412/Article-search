---
title: "Stock Replenishment via Purchase Order"
articleID: 365
category: "Purchase and Receiving > Purchasing Products"
knowledgeBase: "Retail Express"
---

# Stock Replenishment via Purchase Order

You can use automated stock replenishment to generate purchase orders based on stock levels and sales velocity, helping maintain optimal inventory without manual monitoring. This improves your retail operations efficiency by automatically identifying reorder needs across your product catalog, with properly configured replenishment workflows typically reducing stockouts and improving inventory turnover through data-driven ordering.

Understanding stock replenishment involves recognizing reorder point calculations, minimum/maximum stock level settings, and supplier lead time considerations to help retail operators focus on the right automated procurement workflows, ensuring your retail strategy consistently drives better inventory availability and reduced carrying costs outcomes.

Stock Replenishment is an intelligent reordering process, creating Purchase Orders for both Products and Packages through the use of one of three formulas to calculate a suggested reorder quantity (instead of manually calculating the required quantities yourself). These formulas make it efficient in creating the Purchase Orders by factoring in the current stock levels, historical sales periods, and more.

This article explains the Stock Replenishment via Purchase Order feature in more detail. Refer to the Inventory - Stock Replenishment via Transfer article for more information on using the Stock Replenishment feature to transfer stock within your Outlets.

## []()Stock Replenishment Formulas

Retail Express has 3 different formulas available to select from to calculate a recommended stock reordering quantity.

Once a formula has been selected the system will recommend a quantity to be re-ordered (this can be manually adjusted as required). Using filters and various preferences you can fine-tune your requirements and quickly create a number of Transfer Requests ready for processing.

Click on the headings below to view more detail.

> **Note:** The system only suggests a reorder quantity - you can overwrite the quantity as required.

![mceclip0 - 2023-07-10T013806.213.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi9mEAA.jpg)
[Sales Formula](https://galaxy.maropost.com/kb/articles/365-stock-replenishment-via-purchase-order#sales-formula)

The Sales Formula is based directly on product sales up to a maximum of 12 months from the current date.

The system re-orders the same quantity of products that were sold in your store during your selected "Sales Period" (this time frame is defined in the Filters).

**Formula example:**

|  |  |
| --- | --- |
| Sales Period | 30 days |
| Number of product units sold in the sales period | 20 units |
| **Suggested re-order quantity** | **20 units** |

[Minimum Stock Level (MSL) Formula](https://galaxy.maropost.com/kb/articles/365-stock-replenishment-via-purchase-order#msl-formula)

Products within Retail Express have a Minimum Stock Level setting (MSL) for each of your individual Outlets. This is your ideal stocking holding figure, and may vary for each Outlet.

![products_editproduct_minimumstocklevel.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi9rEAA.jpg)

> **Note:** Access your Minimum Stock Levels setting by **editing a product** and clicking the **Inventory** Tab, or by doing a **Mass Download/Mass Upload **(ensure you include your Outlet) and editing the MinQty column on the Outlet tab.

The Stock Replenishment MSL formula checks inventory levels to determine which products have a stock quantity below the MSL value. The suggested re-order quantity is the equivalent of the number of units that would be required to bring the stock quantity back to the Minimum Stock Level.

The calculation includes all of the following levels to determine the overall total inventory value:

- Available
- Transit-In
- Received
- Requested
- On-Order

**Prerequisite: **Your products must have a Minimum Stock Level configured to use this formula - see the Inventory - Create and Edit a Product article for more information.

**Formula example:**

|  |  |
| --- | --- |
| Formula used: | Suggested re-order Quantity = MSL - (Available + Transit-In + Received + On-Order + Requested) |
| Product MSL for Outlet A | 10 units |
| Current stock level | 4 units |
| **Suggested re-order quantity** | **6 units** |

[Run Rate Formula](https://galaxy.maropost.com/kb/articles/365-stock-replenishment-via-purchase-order#runrate-formula)

The Run Rate formula is a more detailed formula taking into account historical sales information, product settings and current inventory levels.

|  |  |
| --- | --- |
| **Field** | **Details** |
| Daily Run Rate | Average quantity sold per day (using historical sales data to calculate this average automatically). You can specify how many days the Run Rate should take into consideration during Step 2 of the transfer process. Entering a larger number will result in a more accurate prediction. The Run Rate will change all the time based on how many products are sold. Some products are seasonal and have peak and low sales periods. |
| Lead Time | The time it takes to order your stock from your suppliers. Lead time is entered on the Edit Product window in the value of days e.g. a Lead Time of 4 means 4 days from ordering to receiving the stock from the supplier. Alternatively, you can select a global Lead Time during Step 2 of the Stock Replenishment process; all products on the transfer will use the same Lead Time. |
| Inventory Levels | The following inventory levels are combined to calculate the current Inventory level for the product:  - Available - Transit-In - Received - OnOrder - Requested |

Using these data fields the system is able to suggest a re-order quantity to ensure that you have enough stock to cover the typical average of sales of this product.

> **Note:** If you're heading into a peak sales period you may need to adjust the numbers manually to account for greater sales e.g. Christmas retail trading will not be reflected in the trading figures for the months prior to Christmas. Using the average Run Rate may not result in an accurate prediction.

**Formula example:**

|  |  |
| --- | --- |
| Formula Used | Suggested re-order Quantity =  (Daily Run Rate x Lead Time) - (Available + Transit-In + Received + OnOrder + Requested) |
| Daily Run Rate | 10 units |
| Lead Time | 4 days |
| Current Stock Level | 12 units |
| **Suggested Re-Order Quantity** | **28 units** Calculation: (10 x 4) - (12) |

## []()Using Stock Replenishment via Purchase Order

1. Navigate to **Inventory > Stock Replenishment > Stock Re-Orders via Purchase Order**
2. Select your **Order Quantity Formula**
3. Click **Continue**
4. Click **Refine Search**
5. Select the **Outlet/s** to create Purchase Orders for

> **Note:** Hold the Ctrl button to select multiple Outlets.

6. Select from the remaining **Search Fields **as required ([see below](https://galaxy.maropost.com/kb/articles/365-stock-replenishment-via-purchase-order#h_01GK0ATW31HW174VTB3S1VJ1NN) for a detailed explanation of each option)

> **Note:** Use the **Hide Where Order Qty = 0 **tick box to hide products where an order is not required (i.e. the suggested reorder quantity is zero); this will reduce the number of results and simplify your order creation.

7. Click **Search**
8. The proposed quantities to be ordered will be displayed in the **Qty **column (detailed information on each of the columns on the Results tab can be found further below)
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20230918at43546AM.05T5g00000v6NYAEA2.png)
9. Click **Export to Excel **to export a list of proposed Reorder products
10. Click **Save Changes** to save the Replenishment Run and return to it at another time (the Purchase Orders will not be created at this point)
11. Click **Process Orders** to create the Purchase Orders
12. Select your **Delivery Details**
  ![mceclip1 - 2023-07-10T013826.497.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiA1EAI.jpg)

> **Note:** Individual Store Delivery will create a Purchase Order to each Outlet, while Consolidate Single Delivery will deliver all stock to a single outlet, and create Transfers from the single Outlet to the individual Outlet; refer to the Purchase Orders - Consolidating Delivery to a single Outlet with Transfers article for more information.

13. The Purchase Orders will be generated; when complete click **Proceed**
14. The Step 3 of 3 review page will be displayed, this page is separated into two sections:  - A table at the top with a list of Purchase Orders
  - A display at the bottom showing the content of the PO
    ![mceclip0 - 2023-07-10T013831.745.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiA6EAI.jpg)
15. Click on the link in the **POID** column to view each Purchase Order
16. Click **Send & Order **to email the Purchase Order to the Supplier and simultaneously update the Purchase Order status to "On-Order".

> **Note:** The email is sent to the address stored in the Supplier settings in Settings > Suppliers, although you can manually update the email address on the Stock Replenishment window if required (it will only be temporarily used for this order, and not update the Supplier details.

17. Alternatively, you can click **Print** then **Place On Order **for your Purchase Orders so finalise the process without emailing your Suppliers
18. **Repeat the steps for ****each order**
19. As each Purchase Order is placed On Order the **Sent/Ordered **column will display the time stamp of the update
20. Once each order shows the Sent/Ordered date, the process has been completed

> **Note:** Purchase Orders cannot be received unless they have been placed On Order. If you navigate away from this window, you can still access the Purchase Orders that were created via Inventory > PO Management > PO Manager (the orders will have the status of "Incomplete")

## Search fields

The Filters tab is made up of three sections:

- Search Fields (covered below)
- Refine Search
- Refine by Attributes

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240614at103902AM.05TJ1000004xzpiMAA.png)
The Refine Search and Refine By Attributes sections are self-explanatory, but the details of the Search fields are covered further below.

|  |  |
| --- | --- |
| **Fields** | **Details** |
| Sales From/Sales To | The sales period for which to suggest a re-order quantity of all products made in this period. This can be run to a maximum of 12 months from the date the report is run. |
| Run Rate Period | The number of days to consider the average units sold per day e.g. "60" is the equivalent of 60 days. The Run Rate will change all the time based on how many products are sold. Some products are seasonal and have peak and low sales periods. Selecting a longer Run Rate period will result in more accurate suggestions. You can select this field based on the number of days previous, or from a specific period in time e.g. if preparing for Christmas trade, you could select the Christmas period from the previous year. |
| Stock Levels | The available options for this field are:  - Some AVL Some Stores - At least 1 Outlet selected in the Search Filters has an Available quantity above 0 - Zero AVL All Stores - All Outlets selected in the Search Filters have an Available quantity of 0 or less - Zero AVL Some Stores - At least 1 Outlet selected in the Search Filters has an Available quantity 0 or below |
| Sort Direction | Which direction the report should be sorted by - ascending or descending. Clicking on a column heading in the Results tab will sort the results by that column e.g. Product ID. |
| Display Product Attributes | The results tab shows only the default attributes automatically - Brad, Size, Colour and Season. If you have created custom Attributes these can be displayed by selecting "All" |
| Lead Time | The number of days it takes to reorder the stock from the supplier.  Entering a number here will override the default Lead Time set at the product level, this time only, for all products. It can be used to enter the number of days of stock on hand you want to hold. |
| Disabled | By default disabled products are not included in results, ticking this option includes any products that have been disabled |
| Sales Only | Suggests a reorder quantity for only products that were sold during the Sales From/To Period selected above. |
| Include Special Orders | Suggests a calculated Reorder Quantity including sales marked as Special Orders in POS |
| Core Products | Suggests a reorder quantity for only products with the "Core Product" option ticked in the product settings |
| Carton Qty | The available options for this field are:  - Always order carton - will always order the full carton quantity, even when only 1 unit is required  				e.g. if you had -7 SOH, and a carton quantity of 6, the system would recommend 12 (equal to the first carton, plus an additional carton to cover the remaining additional product) - Round to carton - the suggested re-order quantity will be rounded to the closest value of a carton. This feature is useful when the supplier only sells products in cartons rather than individually.  				e.g. if you had -7 SOH and a carton quantity of 6, the system would recommend 6 as the Order Quantity (due to there not being at least half of a second carton required in order to round up to 2 cartons) - Order Required Quantity - order the suggested re-order quantity for individual units, not the carton quantity  				e.g. if you had -7 SOH and a carton quantity of 6, the system would recommend 7 units |
| Avail Below MSL | Used to display only products currently below the Minimum Stock Level (MSL). |
| Cubic Measurement | Adds the sum total of the items being ordered based on their cubic value to determine if the Transfer request will fit into a container for shipping or a warehouse/storage area. |
| Hide Where Order Qty = 0 | Hide products where the suggested re-order quantity is zero. This reduces a lot of clutter from the screen  > **Note:** It's always recommended to enable this setting |
| Include | Used to select the types of products to be ordered:  - Only Products - Only Packages (various products grouped together) - Both Products & Packages |
| PLU Search | Enter a Supplier Code, Product ID or Manufacturer SKU to filter by specific product/s |
| Show Supplier SKU2 | Enable 'Show Supplier SKU 2' filter to display additional supplier-specific product identifiers |

## Results fields

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20230918at43546AM.05T5g00000v6OOJEA2.png)
The fields on the Results tab are as follows:

**Supplier information**

|  |  |
| --- | --- |
| **Field** | **Details** |
| Supplier | Default Supplier for the product |
| Supplier Buy | The Supplier purchase price for the product (as configured in the product settings) |
| Buy Ex | The last purchase price paid when ordering the product on a Purchase Order (the last purchase price will be the default price used for new Purchase Orders to be created) |
| Weight | The weight for the product (as configured in the product settings) |
| Cubic | The cubic field is based off the length, breadth and depth (as configured in the product settings) |

**Product Grid**

|  |  |
| --- | --- |
| **Field** | **Details** |
| Avl (Available) Odr (On order) TrfIn (Transfer In) Rcd (Received) Req (Requested) | Current stock levels in the displayed Outlet For detailed explanations on each of these fields refer to the Products - Edit Products/Packages fields article |
| Sold | The number of products sold during the Sales From/To range on the Filters tab |
| 12Mths | Number of units sold in the last 12 months |
| Rate | The "Run Rate" i.e. the number of units sold per day during the Sales From/Sales To range on the Filters tab |
| DOH | Days On Hand - the expected number of days on hand before the product sells out (based on the current Stock on Hand, stock On Order and the Run Rate) |
| SI | Sales Indicator (as configured within Product Types) e.g. Fast. Once set it will calculate automatically |
| MSL | Minimum Stock Level as configured in the product settings |
| Supplier Buy | The value previously entered as the Supplier Buy Price |
| Qty | The quantity to be ordered from the Supplier. This value will be calculated automatically based on the Sales Formula used, but can also be manually overwritten as required |
| Value | The value is calculated from the Buy Price and the Quantity |
| Weight | The total weight is calculated by the product Weight and the Quantity |
| Cubic | The cubic weight is calculated from the total weight and the Quantity |
| Rng Cubic | Running Cubic - the cubic value for the total quantity being ordered - will increase as additional products ordered from other Outlets |

Depleted Stock Formula

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
| Depleted Stock Formula | The Depleted Stock method is based on inventory movements within the system reducing your stock based on the Inventory Status.  - Invoice - Stock Adjustment - Stock Take - Transfer |