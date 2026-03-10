---
title: "Using the Fulfilment Report to Fulfil and Dispatch Products"
articleID: 449
category: "Inventory > Fulfillment"
knowledgeBase: "Retail Express"
lastUpdated: 2026-01-20
---

# Using the Fulfilment Report to Fulfil and Dispatch Products

You can efficiently process customer orders and manage inventory allocation through the Fulfilment Report in **Retail Express**, which provides comprehensive order management capabilities for dispatching products and updating fulfilment status. This essential order fulfilment tool helps retail operators streamline picking, packing, and dispatch workflows, with efficient fulfilment processing typically improving order accuracy and reducing fulfilment time across Australian retail operations.

The Fulfilment Report in **Retail Express** enables retail operators to filter and batch-process orders, update dispatch quantities, and systematically complete order fulfilment while maintaining accurate inventory tracking. This fulfilment workflow helps ensure your retail operations can efficiently manage high order volumes while maintaining visibility over pending fulfilment, supporting timely customer delivery and accurate stock management.

The Fulfilment Report is designed to allow you to locate customer sales awaiting processing for dispatch. This report can be used for:

- In-store orders - e.g. when having products delivered at home via courier or delivery service, or if being picked up from another location (warehouse, another store etc)
- Online orders through an integrated web store

Each individual product within each Order is listed, allowing you to address your fulfilment at an individual Product level. i.e. you can choose to fulfil *some* items on an order and leave others for future Fulfilment. This can be especially beneficial if you offer home deliveries or you're a retailer that sends out several orders worth of products via large deliveries at pre-scheduled times.

## Search for Orders to Fulfil

To use the Fulfilment Report:

1. You can also access the Fulfilment Report from the Quick Links drop-down
2. Update the **Search Fields** as required
3. Click the **Refine Search **section to expand the detailed search filters e.g. specific Outlets, Order or Delivery status etc
4. Click **Search**
5. Any orders and products matching the filters will be displayed on the **Results** tab

![Screenshot 2026-01-20 at 5.00.18 PM.png](https://us.v-cdn.net/6038474/uploads/S4Y78VN7H7N8/screenshot-2026-01-20-at-5-00-18-e2-80-afpm.png)

## Process Orders

The Results tab displays detail on each individual product to be dispatched to customers, with the oldest invoices at the top.

![Screenshot 2026-01-20 at 5.01.38 PM.png](https://us.v-cdn.net/6038474/uploads/JL4ULQ8NMGHL/screenshot-2026-01-20-at-5-01-38-e2-80-afpm.png)
Invoices with multiple products will be split with each product on a separate line (if there are multiples of the same product on the same invoice these will be combined on one line).

When a sale is fulfilled the stock will be removed from the Allocated status, and the order will be marked as Complete.

To dispatch products:

- Update the number of products to be sent to the customer (Dispatch quantity) by either:
- Scanning product barcodes using the PLU scan field
- Typing a quantity in the Disp column
- Use the "Copy Across" button (to dispatch all items)

1. Where you have multiple line orders for the same Product (ie: multiple invoices for differing customers awaiting the same Product) the PLU Scan will increase the Disp column for the first result in the list.
2. To save the dispatched quantities without updating the inventory or fulfilling the sales - refer to Create and Save Fulfilment Report Lists for more information (not recommended for Shippit integrations).

## Advanced Features

There are many other benefits to the Fulfilment Report beyond just updating the dispatch quantities.

The results tab can be used to:

- Print a Pick List by Invoice
- Dispatch products
- Enter reference notes
- Select a zone, time and driver to organise delivery efficiently
- Printing - reports, pick lists, run sheets, labels, invoices etc.

For example, you can coordinate delivery drivers by allocating a Zone or Driver, and your Warehouse staff by printing out Pick Lists ready to use for packing your stock. See below for detailed information on each option.

![mceclip3 (76).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiMmEAI.jpg)
![mceclip2 - 2023-07-10T050404.667.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjgIEAQ.jpg)

|  |  |
| --- | --- |
| **Feature** | **Details** |
| Item reference | Used to enter a note for the Delivery Driver when using a Runsheet  > **Note:** This will only work if using the Save List function. |
| Zone, Time and Driver | Select Zone, Time and Driver (previously configured options) from the drop-down options to better organise the delivery and manage Fulfilment. For example, if you run the Fulfilment Report and sort by Suburb, you could assign all deliveries within the suburbs to a Zone. The nearest suburbs could be assigned the earliest time and the farthest with the latest time. These could all still be assigned to a single driver, and assist the driver with planning a route for deliveries. |
| Invoice Pick List | Prints a Pick List in order of invoices; can be printed individually or in a batch. Click here for detailed information on using the Pick List. |
| XLS Picklist | Generates a Pick List in Microsoft Excel format to assist staff with picking the products for fulfilment. |
| Print | - Report - print the report to your A4 printer - Labels - Print packing labels from your A4 Printer. These are basic Pre-Formatted labels that contain Delivery Address, Delivery Name, Return Address and Return Name, to be attached to the box the goods are packaged in. To set up the preset label templates, navigate to Settings > Label Printing > A4 Logistics Label Presets - Invoices - print a POS A4 Invoice for each Invoice included in the results   > **Note:** Invoices are consolidated, where multiple Products exist on the same Invoice number within the Results, and a single Invoice is generated. This can be used if you'd like to include a copy of the A4 Invoice with the goods being delivered to the customer. |
| XLS Runsheet | There are three different Run Sheets available, each providing different information. These are to be provided to your Delivery Drivers. Each Run Sheet has a different combination of:  - Customer information - Delivery Address (Run Sheet B omits the delivery address but has space for a map reference number to be entered) - Product information - Notes/Comments - Customer Signature  You should review each Run Sheet to determine which is the most suitable to your specific business requirements. |

## Frequently Asked Questions

[Product not available for picking](https://galaxy.maropost.com/kb/articles/449-using-the-fulfilment-report-to-fulfil-and-dispatch-products#product-no-pick)

If you have a product marked as Available in the system but it's not available for picking, check your **Partial Dispatch **setting on orders. It may be that you're unable to dispatch the product to the customer because they're waiting for all products on their order to be available.

The Partial Dispatch option for a sale can be found on the **Fulfilment **tab, and be configured to be enabled by default by editing the POS Settings.

![mceclip3 (77).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjgXEAQ.jpg)