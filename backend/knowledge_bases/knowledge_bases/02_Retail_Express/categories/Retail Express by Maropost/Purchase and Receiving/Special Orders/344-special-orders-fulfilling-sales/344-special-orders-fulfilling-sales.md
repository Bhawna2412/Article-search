---
title: "Special Orders - Fulfilling Sales"
articleID: 344
category: "Purchase and Receiving > Special Orders"
knowledgeBase: "Retail Express"
---

# Special Orders - Fulfilling Sales

Special Orders are when a customer order is processed at POS for a product ordered directly from the supplier (not kept in stock). Retail Express will automatically create Purchase Orders (and Transfers if required) to track the items right through the supply chain, from ordering from the supplier to dispatching to the customer.

Once the Purchase Order containing the Special Order item/s has been received (and the Transfers processed if applicable) the Special Order items can be processed and Fulfilled.

> **Note:** Using POS you can still fulfil the sale even if the stock is not yet available; the user will need to be assigned to a Security Profile with access to "Allow Fulfilment for Unavailable Special Orders" - a prompt will be displayed when trying to update the sale in POS to allow the fulfilment override of unavailable stock. Refer to the POS Security Features article for more information.

Fulfilling sales can be done multiple ways:

- Using the Fulfilment Report (ideal for bulk processing)
- Through POS:  - Open POS and use the Lookup functionality
  - Use the Special Orders report to search and open the order in POS

**Related: **For detailed information on processing a sale refer to the POS - Fulfilment Tab of a sale or Inventory - Fulfil Products from the Fulfilment Report articles.

## []()Special Orders Video Series

To find the training video series on Special Orders, see Video - Special Orders.

## Fulfilment Report

Special Order items can be processed in the Fulfilment Report in much the same way as any other order items. However, as it's recommended that Special Order items aren't fulfilled until the stock has arrived, the results in the Fulfilment Report will only consider the Special Order items available for picking once available and allocated to the order (depending on the filters used).

#### **Filters**

By default, the Special Order items will *not *be included in the search results in the Fulfilment Report (to allow for regular processing of sales).

To include Special Order items you'll need to use the Special Orders filter:

![mceclip0 - 2023-07-10T004259.157.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi2REAQ.jpg)
Combining this filter with the **Only Show Stock Available for Picking **filter will restrict search results to products that have stock available for fulfilment of the order.

![mceclip1 - 2023-07-10T004303.119.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi2WEAQ.jpg)

#### **Results**

Once you have used the Fulfilment Report to show a list of products available for picking, you will be able to use the Results tab to pick and dispatch the products to your customers (including printing labels and more).

The Source and Fulfil columns will display information relevant to the handling of the customer order i.e. where the stock is coming from, and where the stock is being dispatched from. The Source column will even display both PO and ITO details.

![mceclip1 - 2023-07-10T004307.501.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi2bEAA.jpg)
To dispatch the stock:

- Use the **PLU Scan** field to scan product barcodes
- Click the **Copy Across **button to automatically fulfil all results
- Enter a value in the **Disp **column

Click **Submit **to update the stock levels.

**Related: **For detailed information on fulfilling sales using the Fulfilment Report, see Inventory - Fulfil Products using the Fulfilment Report.

## POS

Orders can be fulfilled directly within POS by updating the values on the Fulfilment tab and updating the sale. However, there are multiple ways to locate the sale to open in POS:

|  |  |
| --- | --- |
| **POS Alerts** | ![mceclip1 - 2023-07-10T004313.435.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi2gEAA.jpg) The Special Order Alert will be displayed once the Special Order products have been received and are available to be dispatched to the customer.  			  Clicking the alert will open the Sales Orders, Invoices & Quotes window displaying Open Special Orders. Click Open to edit the order for fulfilment. 			  View the POS - Using POS Alerts article for more information. |
| **POS Look Up** | Available from the home page of POS, by clicking on the blue Look Up tile: ![mceclip0 - 2023-07-10T004318.311.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi2lEAA.jpg)  The Look Up feature allows you to search for orders based on:  - Time period (Today, Yesterday, Past 7 Days) - Invoice # - Customer - External Reference - Company - Phone |
| **Special Orders Report** | The Special Orders report is available via **Inventory > Special Orders**. This report contains multiple filters, making it easy to narrow the search results for Special Order:  - Order details (customer sales information including invoice number, date created from/to range, Date Due) - Purchase Order details (PO number, date created from/to range, PO received from/to date range) - Customer details (name, Company name, email address, phone number, email address, custom reference) - Product PLU - Supplier - PO Status - PO Outlet - Fulfilment Status - Fulfilment Outlet  The benefit with this report is that it displays the details of Special Order transactions linked together - Purchase Order, Transfer and Customer Sale. Each transaction is linked so you can open the transaction for more detail. 			  Clicking on the Order Number (customer sale) will open the sale in POS for editing/fulfilment.  ![mceclip1 - 2023-07-10T004324.137.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi2qEAA.jpg) For detailed information on using this report, refer to the Special Orders - Special Orders Report article. |

#### **Fulfilling the sale in POS**

![mceclip15 (2).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi2vEAA.jpg)
To fulfil the sale you will need to:

1. Click the **Fulfilment** Tab
2. Fulfill the products by using any of the following methods:  - Click the **arrow** on an individual line to automatically fulfil the remaining balance
  - Enter a quantity into the **Fulfil Now** box
  - Click the arrow on the **table header** to fulfil all items
3. Click **Update**

The stock will be fulfilled accordingly. Once all products are fulfilled the sale process is complete.

Want more information? Find related articles here:

- Special Orders - Special Orders Overview
- Special Orders - Selling Special Order Items
- Special Orders - Process a Purchase Order
- Special Orders - Receive a Purchase Order
- Special Orders - Processing Transfers
- Special Orders - Special Orders Report
- POS Settings - Order Conditions