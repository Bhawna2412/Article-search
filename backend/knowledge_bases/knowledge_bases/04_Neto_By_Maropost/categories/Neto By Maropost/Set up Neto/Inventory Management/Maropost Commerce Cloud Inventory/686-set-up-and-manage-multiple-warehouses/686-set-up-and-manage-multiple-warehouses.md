---
title: "Set up and Manage Multiple Warehouses"
articleID: 686
category: "Set up Neto > Inventory Management > Maropost Commerce Cloud Inventory"
knowledgeBase: "Neto By Maropost"
---

# Set up and Manage Multiple Warehouses

## Add a Warehouse

1. In your Neto control panel navigate to **Stock Control** > **Locations/Warehouses**
2. Select **Add New Location**.
  ![Screen Shot 2024-09-16 at 10.22.22 am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000FqJXhMAN.jpg)
3. Enter the details of your location/warehouse in the fields provided.
  ![Screen Shot 2024-09-16 at 10.39.22 am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000FqJwDMAV.jpg)

## Allocate Products to Multiple Warehouses

A product can be assigned to multiple warehouses and have different stock quantities in each warehouse. To enter the stock into multiple warehouses:

**Please Note**: If you are using the **Neto Commerce Inventory** add-on stock levels can only be changed through a **Stock Adjustment** or [**Purchase Order**](https://galaxy.maropost.com/kb/articles/615-add-a-purchase-order).

1. ![Screen Shot 2024-09-16 at 10.42.53 am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000FqK0KMAV.jpg)
  In your Neto control panel navigate to **Products** > **View Products**
2. Choose a product by selecting the **SKU.**
  ![Screen Shot 2024-09-16 at 10.42.53 am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000FqK3JMAV.jpg)
3. From the side menu choose **Stock Control** and enter the stock available for each warehouse, and **Save** the changes.
  ![Screen Shot 2024-09-16 at 10.45.53 am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000FqK6NMAV.jpg)

You now have stock allocated to multiple warehouses. It's recommended that you also choose the [warehouse priority]() as well, so the closest or primary warehouse fulfills the order.

## Warehouse Priority

When an order is placed, stock will be deducted from the primary warehouse first, unless a warehouse has had specific [shipping zones](https://galaxy.maropost.com/kb/articles/500-edit-shipping-zones) applied to it. The primary warehouse can be set at the warehouse level, or the product level.

### Warehouse Level Priority

Warehouse level priority is set in the **Stock control** > **Warehouse / locations menu**, by clicking on the warehouse.

![Screen Shot 2024-09-16 at 10.48.26 am.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000FqKAyMAN.jpg)

### Product Level Priority

You can set the priority for individual products by editing a product, and selecting the primary warehouse in the stock control section.

![Screen Shot 2024-09-16 at 10.55.25 am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000FqKMzMAN.jpg)

### Add Shipping Zones to a Warehouse

Shipping zones give you much more control over geographical areas served by your warehouses. As a result, they take more time to set up correctly. To add zones:

1. Navigate to **Stock Control** > **Locations/warehouses**.
2. Click on your warehouse to edit it.
3. Scroll to **Zones**, and search for the shipping zones you want to add to this warehouse.
  ![Screen Shot 2024-09-16 at 10.59.54 am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000FqKQhMAN.jpg)

You can also enable the `USE_WAREHOUSE_WITH_STOCK` advanced configuration to ensure sales orders deduct stock only from warehouses that can fulfil the order. To enable this, navigate to:

- Settings & Tools > All Settings & Tools > Advanced Configuration
- Paste `USE_WAREHOUSE_WITH_STOCK` into the name field
- Set value to 'Yes'

## Calculate Available Quantity

If you have multiple warehouses the combined stock qty in each warehouse, less any unpicked or committed orders, will become your available quantity. This is the quantity available for customers to order on your web shop.

For example, if you have 19 in warehouse stock and you have 5 on new orders then your total available stock will be 14 (19-5).

`Store Quantity (qty available) = Combined Physical Stock In Warehouses - Unpicked Orders (includes backorders)`

A product on order is **Committed** when it is in any of the following status:

- New
- Pick
- New Backorder
- Backorder Approved

You can uncommit products that are on orders by moving the related orders to the **Uncommitted** status. This is ideal when a customer has placed an order that they do not want shipped until a date in the future. This will allow you to free up the stock for other orders.

## Adjust Stock Quantities

**Please Note**: If you are using the **Neto Commerce Inventory** add-on, stock levels can only be changed through a **Stock Adjustment** or [**Purchase Order**](https://galaxy.maropost.com/kb/articles/615-add-a-purchase-order).

There are 4 ways to adjust stock levels for a product:

- Adjust quantity on product management page. Navigate to **Products > View Products** and select a product. From the side menu choose **Stock Control** and enter the stock available for each warehouse.
  ![Screen Shot 2024-09-16 at 10.45.53 am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000FqKR1MAN.jpg)
- Adjust quantity from **Stock Adjustment** page. Navigate to **Stock Control** > **Stock Adjustment** and enter values in the **Qty To Adjust** fields.
  ![Screen Shot 2024-09-16 at 11.02.30 am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000FqKSJMA3.jpg)
- Adjust qty from **Stock Take** page. Navigate to **Stock Control** > **Stock Take** and enter values in the **Qty Counted** fields.
  ![Screen Shot 2024-09-16 at 11.03.52 am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000FqKUAMA3.jpg)
- Import new stock levels using the [**Import Wizard**](https://galaxy.maropost.com/kb/articles/668-product-import-wizard).
- Import the stock quantity using the [Neto API](https://developers.neto.com.au/documentation/engineers/api-documentation/).

In all cases the number you enter less the qty committed on incomplete orders will become your new stock qty.

**Please Note**: If you are using a Neto compatible accounting or inventory management system then your stock quantity will come up from that application and will be adjusted in Neto periodically.

## Display Warehouse Stock Levels on your Website

This requires custom programming. You can perform [this tweak](https://developers.neto.com.au/documentation/neto-designer-documentation/b-se-tag-library/function-tags/product-information/warehouse_qty/) yourself, or [request a quote](https://forms.neto.com.au/services/designtweak.html?) from a Neto  design partner.

## Delete a Warehouse

Warehouses can only be deleted under certain circumstances. You can only delete a warehouse if:

- It is not the primary warehouse.
- No stock is assigned to products in the warehouse.
- No sales orders are fulfilled from the warehouse.
- There are no purchases orders recorded for the warehouse.
- All point-of-sale registers are unlinked from the warehouse.

If these conditions are met you can delete the warehouse by following these steps:

1. In your Neto control panel navigate to **Stock Control** > **Locations/Warehouses**
2. Select the box next to the warehouse ID of the warehouse you want to delete.
3. Click the **With 1 selected** box and choose **Delete** from the drop down menu.
4. Click the **Ok** button to confirm.

The warehouse is now deleted. If you see any errors you will need to correct the issues before trying again. If you cannot correct them, you can make the warehouse inactive instead.

> **Warning:** Ensure that all products have 0 stock in the warehouse before you make it inactive. Stock in an inactive warehouse will still be available for sales channels. You cannot make the primary warehouse inactive.

1. Click on the name of the warehouse to open the edit warehouse page.
2. Clear the **Active** box, and click the **Save & close** button.

Your warehouse is now inactive.