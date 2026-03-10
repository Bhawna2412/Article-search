---
title: "Understanding Inventory"
articleID: 475
category: "Inventory > Getting Started With Inventory"
knowledgeBase: "Retail Express"
---

# Understanding Inventory

You can maintain accurate stock control through understanding inventory concepts in **Retail Express**, including stock statuses (Available, Allocated, Faulty), multi-location tracking, and stock movement workflows. This inventory comprehension helps retail operators establish reliable stock management practices, with proper inventory understanding typically improving stock accuracy and supporting effective inventory decision-making across Australian retail operations.

Inventory understanding in **Retail Express** enables retail operators to leverage the complete inventory management system effectively, helping ensure accurate stock tracking and supporting optimal inventory levels. This inventory knowledge helps ensure your retail operations can maintain reliable stock records, prevent stockouts, and make informed purchasing and transfer decisions supporting operational efficiency.

Retail Express tracks detailed information about the inventory of your product and uses a series of statuses to track the movements of each product throughout your business. From within the "Edit Product" window, you can click the Inventory tab to get an overview of the Inventory for that product, and manage the Carton Quantity and Minimum Stock Levels (used for reordering and reporting purposes.

## []()Inventory Status Definitions

When you open a product for editing and click the "Inventory" tab you can see a list of the different Inventory Statuses, along with the quantity of products in that status.

These statuses are referred to in many areas of Retail Express, and can even be used to filter reports e.g. using the Stock Value vs Sales Report to control how the stock value is calculated.![rtaImage - 2023-07-10T032002.163.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiMhEAI.jpg)

|  |  |
| --- | --- |
| **Status** | **Details** |
| Available | Products that are in stock and ready to sell for customers |
| Allocated | Products awaiting fulfilment/dispatch e.g sales, layby or Internal Transfer Order  > **Note:** Click the allocated number (underlined) to open the **Allocated Stock **window, this will display a list of orders/ITOs etc for the allocated stock (including reference numbers, quantities and Outlets). |
| Picked | Internal Transfer Order (ITO) - products that are in the process of being transferred with the "Picked" status |
| Transit Out | Internal Transfer Order (ITO) - products that are in the process of being transferred with the "Transit Out" status |
| Transit In | Internal Transfer Order (ITO) - products that are in the process of being transferred with the "Transit In" status |
| Received | Internal Transfer Orders that have been marked as Received but the stock is not yet Available  > **Note:** this is a legacy feature for Purchase Orders |
| Requested | Products that have been requested through an ITO |
| OnOrder | Products that have been ordered through a Purchase Order |
| OnReturn | Products currently being processed on a Supplier Return |
| Faulty | Products that are still physically stored but not fit for sale; these can only be updated using Stock Adjustments or when doing a Return/Refund through POS |
| Bin | Used to enter a reference for the physical location for the product within the Outlet/Warehouse e.g. Aisle 10, Bay 2, Shelf 25 |

## []()Carton Qty

![rtaImage - 2023-07-10T032010.336.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiRHEAY.jpg)
Carton Qty allows you to enter (as a whole number), the number of units contained within a Carton as you purchase it from your Supplier e.g: you may sell soft drinks by the single can however when you purchase it from your Supplier the cans come in a Carton of 24.

> **Note:** Carton Qty can be used with the Stock Replenishment feature, and can be bulk updated via Mass Upload.

## []()Location & Status

![rtaImage - 2023-07-10T032014.549.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiGQEAY.jpg)
These fields display all stock level information for the different Outlets/Stores within your business, including both quantities and Total Stock Values.

> **Note:** Refer to our Stock Transfer Essentials article for everything you to know about transfers.

## []()Minimum Stock Levels

![rtaImage - 2023-07-10T032019.567.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiRMEAY.jpg)
This feature allows you to enter a Minimum Stock Level (MSL) - the minimum level of stock that you would like to keep on hand at all times e.g. 5. When using the Stock Re-Orders/Replenishment feature if the stock level is less than 5 it will suggest you reorder enough stock to return your quantity level back to meet the MSL.

The Stock Re-Orders module also offers an alternate, more sophisticated formulas for re-ordering stock than by MSL.  For more information please see:Stock Re-orders / Replenishment via PO