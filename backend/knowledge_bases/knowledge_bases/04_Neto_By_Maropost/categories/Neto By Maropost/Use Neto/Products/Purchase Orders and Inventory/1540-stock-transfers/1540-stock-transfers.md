---
title: "Stock Transfers"
articleID: 1540
category: "Use Neto > Products > Purchase Orders and Inventory"
knowledgeBase: "Neto By Maropost"
---

# Stock Transfers

**Please Note**: Stock transfers requires the **Neto Commerce Inventory** add-on.

## Overview

### Statuses

- **Draft**: The stock transfer is stil being created and products can be added.
- **Pending**: The stock is committed, and the transfer is approved pending dispatch.
- **Dispatched**: Stock removed from source warehouse, incoming to the destination warehouse. Can't be edited
- **Received**: Stock has been received at the destination warehouse and added to the quantity on hand. Can't be edited
- **Cancelled**: Stock transfer has been cancelled and was not be completed. Can't be edited

### Stock Calculations

The table below shows how stock level for the source and destination warehouses change at different stages of a stock transfer. In this example, 40 units are moving from one warehouse to another.

|  | Source location | Destination location |
| --- | --- | --- |
| Status | On Hand | Committed | Available | In-transit | Incoming | On Hand | Committed | Available |
| Draft | 100 | 0 | 100 | 0 | 0 | 0 | 0 | 0 |
| Pending | 100 | 40 (+40) | 60 (-40) | 0 | 40 (+40) | 0 | 0 | 0 |
| Dispatched | 60 (-40) | 0 (-40) | 60 | 40 (+40) | 40 | 0 | 0 | 0 |
| Received | 60 | 0 | 60 | 0 (-40) | 0 (-40) | 40 (+40) | 0 | 40 (+40) |
| Cancelled | Dependant on previous status. Draft: no stock modification. Pending: un-commits stock from source and moves back to stock on hand. |  |

### Staff Permissions

To use stock transfers staff users require the following permissions found in **Access Control** > **Stock Control**:

- **Stock transfer read**: Allows the user to see stock transfers. They will not be able to add, update or process them.
- **Stock transfer write**: Allows the user to add, update and process stock transfers. Staff users will also need the **Stock transfer read** permission to allow them to see the stock transfers as well.

### Landed Costs and Average Cost Price Calculations

Landed costs are not recorded or accounted for when transferring stock between warehouses. They are only recorded when recieving a purchase order.

Average cost price is calculated at the time a stock transfer is received, based on the cost price when dispatched. If a purchase order has been received between a dispatch and receipt of a stock transfer, you may see an additional change to the average cost price when the transfer is received.

## Add a Stock Transfer

Stock transfers must be accurately recorded so that stock levels in your warehouses reflect the true values. To add a stock transfer:

1. In your Neto control panel, navigate to **Stock Control** > **Stock Transfers**.
2. Click the **Add stock transfer** button.
3. Enter the details of your stock transfer:
  Click the **Next** buton to add the products that are being transferred.

> **Important:** Once you click Next, the source and destination can no longer be edited. If these are incorrect, cancel the stock transfer and add a new one.

4. In the Product section, select the products that will be transferred. Search by entering the SKU or product name. After you've selected the product, click the **Add Product** button.
  **Please Note**: Parent products, kit products, and service products cannot be added to a stock transfer.
5. Products are added to the stock transfer so you can see the amount of stock available in both warehouses. Enter the amount of stock to be transferred in the **Transfer qty** field. You cannot transfer less than 1 unit, or more than the available qty in the source warehouse.
6. Repeat these steps untill all the products lines and stock amounts you wish to transfer have been added.
  **Please Note**: Please Note: Stock transfers are limited to 750 product lines.
7. Click the **Approve** button.

Your stock transfer is now saved in **Pending** status. Products and stock levels can still be edited in this status.

## Dispatch a Stock Transfer

When all stock has been added to the stock transfer you can pick the transfer lines and dispatch it. To dispatch your stock transfer:

1. In your Neto control panel, navigate to **Stock Control** > **Stock Transfers**.
2. Click on the stock transfer you want to dispatch.
3. Click on the **Print** button at the top of the page, and select **Print pick slip**.
4. Pick and pack the items on the list, and arrange for dispatch.
5. Click the **Edit** button on the stock transfer and enter the tracking number.
6. Click the **Dispatch** button.

Your stock transfer is now marked as dispatched, and cannot be edited any further.

## Receive a Stock Transfer

When stock arrives at the destination warehouse the stock transfer needs to be marked as received. To receive a stock transfer:

1. In your Neto control panel, navigate to **Stock Control** > **Stock Transfers**.
2. Click on the stock transfer you want to receive.
3. Click the **Receive** button. All transfer lines will be recieved and added to warehouse stock.

> **Important:** You can't receive a different quantity than what was dispatched. If the recieved amount is different, add an additional stock transfer or stock adjustment to update the stock levels to their correct amount.

4. Add any additional notes and click the **Receive stock transfer** button in the pop-up window that appears.
5. Click on the **Print** button, and then click **Print put-away sheet**. You can use this information to locate where in your warehouse received stock should be stored.

Your stock transfer is received, and stock levels added to the destination warehouse.

## Troubleshooting

You may encounter the below errors when creating and processing stock takes. Use the information below to resolve these errors:

**This movement will generate a negative committed stock count of -1 for product "xxxx" at location "xxx".**

This error occurs when the product has a negative quantity, usually because too many have been picked on an order.

To resolve this issue:

1. In your Neto control panel navigate to **Sales orders** > **View orders**.
2. Filter by the product SKU and the Pick Status **Over Picked**.
3. Open the order where too much stock has been picked and locate the over picked order line.
4. Click the **Hold or Edit Order** button and changes the status to **Pick**.
5. Correct the stock in the Pick field so that it matches the amount ordered.

Confirm the stock level of the warehouse is now correct. If this error is occuring and the product is not over picked please contact our support team.