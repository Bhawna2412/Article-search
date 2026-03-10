---
title: "Reports Overview"
articleID: 1445
category: "Use Neto > Dashboard and Reporting > Use your Reports"
knowledgeBase: "Neto By Maropost"
---

# Reports Overview

Neto includes useful default reports that can be accessed through **Reports** in the navigation menu.

These reports aren't customisable and are standard for all customers. If you don't find a suitable report for your needs, you can instead use the [export wizard](https://galaxy.maropost.com/s/global-search/export%20wizard) to produce data specific data instead.

## Filter Reports

Neto report filters can be used to narrow your data by specific date ranges, customer groups, sales channels or other criteria. To see the search filters, the arrow on the right hand side, indicated in the screenshot below.

Different reports have different filters depending on the kind of data in the report. When a report is run it is a snapshot of the data at that time. To run the report again you need to apply the same filters as before.

## Export Reports

Reports can be printed or exported as a CSV (comma separated values) file, allowing you to share and manipulate the data for presentation purposes. Run the report, and set your filters as desired, then select **Export** in the top right corner.

The CSV file will be created and download to your computer.

## Sales Reports

| Reports | Description |
| --- | --- |
| Sales By Order | List of all sales with total summaries and amount owing per sale in a given date range. |
| Profit By Order | List of all sales and the profit margin of each sale in a given date range. Cost price is based on cost at time of sale. |
| Sales By SKU | Invoiced sales and closed returns summary per SKU in a given date rate. Results include tax and are based on date invoiced. |
| Monthly Totals | Snapshot of invoiced sales totals on a month to month basis for comparative purposes . Results include tax and are based on date invoiced. |
| Monthly Totals By SKU | Snapshot of invoiced sales by SKU on a month to month basis for comparative purposes . Results include tax and are based on date invoiced. |
| Sales by Warehouse | Snapshot of invoiced sales totals total by warehouse. Results are based on date invoiced. |
| Sales By Shipping Method | Breakdown of shipping revenue by shipping option per warehouse. An order can contain multiple warehouses with a single shipping cost. In such instances shipping is divided equally among the warehouses. |
| Sales By Category | Breakdown of revenue by category per warehouse. Products can be assigned to multiple categories, in such cases revenue will be assigned to each category, therefore inflating your totals. Results are based on date placed. |
| Sales By Warehouse By SKU | Breakdown of revenue by SKU per warehouse. Results are based on date placed. |
| Sales By Shipping Service | Breakdown of shipping revenue by service per warehouse. An order can contain multiple warehouses with a single shipping cost. In such instances shipping is divided equally among the warehouses. |
| Sales by Suburb/Postcode/State | Breakdown of total sales by SKU per billing suburb, postcode, state or country. |
| Customer State Sales | Total invoiced sales by billing address state. Results include, product, shipping and tax revenue and are based on date invoiced. |
| Item sales by voucher report | List of gift vouchers sold. |

## Accounting Reports

| Reports | Description |
| --- | --- |
| Sales Summary | Summary of invoiced sales by SKU AND summary of payment receipts by payment method for a given date range. Results are based on data invoiced and date payment receipted. Ideal for recording sales and payments for bookkeeping purposes. |
| Returns, Refunds & Credit Summary | Summary of credits issued, products returned to stock and refunds paid. Credits and returns based on date related RMA was closed. Refunds based on date refund was paid. |
| Aged Receivables | List of unpaid invoices and unused credits by date range per customer. |
| Sales Summary By Tax Code | Invoiced sales tax breakdown by income type, based on invoiced date. |

## Stock Management Reports

| Reports | Description |
| --- | --- |
| Forecast Demand | Breakdown of sales performance by SKU in a given date range. Includes estimated re-order quantities based on supplier lead times and qty sold in given date range. Handy when placing purchase orders. |
| Stock Allocation Report | Breakdown of stock allocation by SKU. Includes on hand qty, committed qty, build (kit) qty and incoming qty. |
| Out of Stock Notifications | List of out of stock notification requests per SKU. Handy for gauging the demand for out of stock products. |
| Restock Alerts | Breakdown of stock allocation by SKU. Includes qty by warehouse, committed qty, qty kitted and incoming qty. |
| Stock Valuation Report (requires Neto Commerce Inventory add-on) | This report allows you to view your current levels of inventory and displays the total value of each item. |
| Cost Analysis Report (requires Neto Commerce Inventory add-on) | View and analyse how a product's average cost changed over time |

## Customer Reports

| Reports | Description |
| --- | --- |
| Sales By Customer | Summary of sales by customer in a given date range. |
| Sales By Order | List of all sales with total summaries. |
| User Custom Fields | List of all customers and data entered into the available custom fields. |

## Neto POS

| Reports | Description |
| --- | --- |
| Register Shifts | Shift closures compare your cash and card payment totals from each register against what you have physically receipted for each shift. |

## Other Reports

| Reports | Description |
| --- | --- |
| Shipping Consignments | List of shipping consignments with related order and tracking numbers in a given date range. Shipping cost displayed is total cost of shipping paid by the customer. |
| Coupon Usage | List of discount coupons / codes used in a given date range. Includes value of discount issued for product, tax and shipping. |
| Sales Commission Report | List of all sales with total summaries in a given date range. Includes the option to filter by sales person, account manager and sales channel. |
| Custom Review Fields Report | List of all customer reviews / comments with all related review fields in a given date range. |
| Picker Performance Report | List of staff users and the number of orders, order lines and units picked. Used to measure the productivity of a warehouse user. |
| Backorder History | Log of products being added to and removed from backorders by staff user. |

## Log Reports

| Reports | Description |
| --- | --- |
| Transaction Log | List of all sales orders, payments, credits and refunds in a given date range. Includes whether the transaction is a debit or a credit against the related customers account. |
| Order Change Log | Log of all sales order changes. |
| Inventory Change Log | Log of all inventory quantity changes / adjustments. |
| Batch Process Log | Log of all batch processes that run. Includes outcome summary for each process. |
| eBay Process Log | Log of all batch processes that run to integrate Neto with eBay. |
| Shipping API Error Log | Log of all error received from 3rd party shipping carrier rate APIs. Handy for investigating issues with API driven shipping rates. |
| Abandoned Checkout Log | Log of failed payments at checkout. |
| Referral Commission Log | Log of referral commission earned and used per customer. |
| Staff User Log | Log of all staff user activity. Includes pages visited and actions taken throughout the control panel. |

## Export Template Examples

To create your own custom reports you can use the data export templates to extract almost any information you need. TO create a template:

1. In your Neto control panel navigate to **Settings & tools** > **Export data**.
2. Click the **Perform complex export** button, and choose **Create new custom export template**.
3.   - Export Template Name
  - Export Template Description
  - File Name
  - File Type - CSV Data is recommended

  Enter the below details:
4. Click the **Save & Continue** button.
5. You can now create your export template by entering the header row (column names) and selecting data tags for the body.

> **Note:** We recommend you change the **Send File To** drop down menu to Local Server. The File Location (HTTPS URL) field displays where the file can be downloaded once it is generated.

  Below are some examples of the export template file builer details.

> **Important:** Ensure you press enter/return to move the cursor to a new line after pasting the below code. Otherwise your report data will be generated on one continous line.

### Stock Valuation (product)

File Header

```plaintext
"Location","SKU*","Product Category Full Path List","Name","Specifics","On Hand Qty","Average Cost Price","Total Value At Cost Price","Retail Price","Total Value At Retail price"
```

FILE BODY - body

```plaintext
[%if ![@is_kit@]%][%warehouse_qty id:'[@sku@]' showall:'1'%][%param *body%]
"[@warehouse_name@]","[@SKU@]","[@category_1_ns@]","[@model@]","[@ebay_specifics@]","[%calc [@warehouse_qty@] - [@committed_quantity@]/%]","[@cost@]","[%calc ([@warehouse_qty@] - [@committed_quantity@])*[@cost@]/%]","[@price_1@]","[%calc ([@warehouse_qty@] - [@committed_quantity@])*[@price_1@]/%]"
[@spacer@]
[%/param%][%/warehouse_qty%][%/if%]
```

### Stock Valuation by Warehouse organised by Brand (product)

FILE HEADER

```plaintext
"Brand","SKU*","Location","Name","On Hand Qty (warehouse qty - committed qty)","Average Cost Price","Total Value At Cost Price","Retail Price","Total Value At Retail price"
```

FILE BODY - body

```plaintext
[%site_value id:'output_[@brand@]'%][%if ![@is_kit@]%][%warehouse_qty id:'[@sku@]' showall:'1'%][%param *body%][%set [@warehouse_qty_onhand@] %][%calc [@warehouse_qty@] - [@committed_quantity@]/%][%/set%][%if [@warehouse_qty_onhand@] ne '0' %]"[@brand@]","[@SKU@]","[@warehouse_name@]","[@model@]","[@warehouse_qty_onhand@]","[@cost@]","[%calc [@warehouse_qty_onhand@]*[@cost@]/%]","[@price_1@]","[%calc [@warehouse_qty_onhand@]*[@price_1@]/%]"
[@spacer@][%/if%][%/param%][%/warehouse_qty%][%/if%][%/site_value%]
```

FILE FOOTER

```plaintext
[%content_menu content_type:'brand' sortby:'sortorder' %]
[%param *level_1%]
[@name@]
[%site_value id:'output_[@name@]' type:'load' /%][%/param%]
[%/param%]
[%/content_menu%]
```

### Profit by Order (order)

FILE HEADER

```plaintext
"Date Placed","Date Invoiced","Username","Order ID","Order Status","Purchase Order ID","Sales Channel","Payment Method","Product Subtotal (Tax Exclusive)","Shipping Cost","Surcharge Total","Total Tax","Grand Total","Cost of Sales","Gross Margin","Margin %"
```

FILE BODY - header

```plaintext
[%set [@Grand_Total@] %][%show_order id:'[@order_id@]'%][%param *header%][@grand_total@][%/param%][%/show_order%][%/set%][%set [@Margin@] %][%calc [@subtotal_exctax@] - [@total_cost@] /%][%/set%]"[@date_placed@]","[@date_invoiced@]","[@username@]","[@order_id@]","[@order_status@]","[@customer_po@]","[@sales_channel@]","[@payment_method@]","[@subtotal_exctax@]","[@shipping_cost@]","[@total_surcharge@]","[@total_tax@]","[@Grand_Total@]","[@total_cost@]","[@Margin@]","[%format type:'percent'%][%calc ([@Margin@] / [@subtotal_exctax@]) * 100 /%][%/format%]"
```

### Profit by SKU per order with warehouse (order)

FILE HEADER

```plaintext
"Date Placed","Date Completed","Order ID","Sales Channel","Warehouse","QTY","SKU","Orderline Subtotal","Orderline Discount total","Orderline Cost Individual","Orderline Cost Total","Orderline Total","Gross Margin"
```

FILE BODY - header

```plaintext
[%set [@warehouse_ids@] %]1,2,3,4,5[%/set%][%split delimiter:','%][%param data1%][@warehouse_ids@][%/param%][%param *body%]
[%picking_list order_id:'[@order_id@]' warehouse_id:'[@data1@]'%][%param *order_body%][%set [@orderline_price@] %][%calc [@unit_price@]*[@quantity@] /%][%/set%][%set [@sku_cost@] %]123[%/set%][%set [@sku_cost_total@] %][%calc [@unit_cost@]*[@quantity@] /%][%/set%]"[@date_placed@]","[@date_completed@]","[@order_id@]","[@sales_channel@]","[@data1@]","[@quantity@]","[@sku@]","[@orderline_price@]","[@product_discount@]","[@unit_cost@]","[@sku_cost_total@]","[%calc [@orderline_price@]-[@product_discount@] /%]","[%calc ([@orderline_price@]-[@product_discount@])-[@sku_cost_total@] /%]"
[@spacer@]
[%/param%][%/picking_list%][%/param%][%/split%]
```