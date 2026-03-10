---
title: "Add a Purchase Order"
articleID: 615
category: "Set up Neto > Inventory Management > Maropost Commerce Cloud Inventory"
knowledgeBase: "Neto By Maropost"
---

# Add a Purchase Order

**Please Note**: Integrating Xero and Neto Commerce Inventory has limitations for sellers outside of Australia. Contact our support team for advice before proceeding.

This article requires the Neto Commerce Inventory add-on.

## Overview

Neto supports the use of purchase orders (PO) for you to buy products and services from their suppliers in a controlled environment. Purchase orders contain products, quantities, agreed prices and supplier information.

One major benefit of this system is that it calculates the average costs of goods over time. For example, you order an item from your supplier on two occasions. If first time it costs $1.00, but on the second time it's costs $1.25, the average cost of goods (ACOG) is recalculated to adjust your 'cost price' for your reporting. Here is the exact formula:

![Add a Purchase Order 1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000MyVa4MAF.jpg)
You can add purchase orders in a number of ways with Neto Commerce Inventory. For this article, we'll cover the 4 main methods of creating, as well as how to receive purchase orders.

- [Add a Purchase Order Manually](https://galaxy.maropost.com/kb/articles/615-add-a-purchase-order#add-purchase-orders-manually)
- [Add Purchase Orders from the Products Page](https://galaxy.maropost.com/kb/articles/615-add-a-purchase-order#creating-purchase-orders-from-product-level)
- [Add Purchase Orders from the Forecast Demand Report](https://galaxy.maropost.com/kb/articles/615-add-a-purchase-order#creating-purchase-orders-from-the-forecast-report)
- [Add Purchase Orders from Sales Orders (cross-docking)](https://galaxy.maropost.com/kb/articles/615-add-a-purchase-order#add-a-purchase-order-from-sales-orders-cross-docking)
- [Export a Purchase Order](https://galaxy.maropost.com/kb/articles/615-add-a-purchase-order#import/export)

## Add Purchase Orders Manually

To add a purchase order from scratch:

1. In your Neto control panel, navigate to **Stock Control** > ** Add Purchase Orders**.
2. In the **Warehouse / Location** drop-down menu, select the warehouse that your supplier will to deliver to.
3. Choose the supplier this purchase order is for. This automatically updates the currency to the set for the supplier and fetches the exchange rate.
  You can set your own exchange rate which overwrites the automatic rates. If your supplier currency is different to your store base currency, the conversion totals will appear at the bottom of the page.
4. Select your order date (default's today's date) and set the **Required by date** when the delivery is expected.
5. Add any additional information for your supplier in the **Supplier reference** field.
6. You can your own **Comments** to the purchase order. These are currently internal comments and will not print on the purchase order.
7. Click the **Next** button, and you'll be able to add product orderlines.

> **Note:** You can also [import your order lines](https://galaxy.maropost.com/kb/articles/1544-import-order-lines-into-a-purchase-order) for each purchase order.

8. Add products to your purchase order by typing or scanning the product SKU/Name or UPC. If your SKU is under 3 characters, type the title or UPC instead. The table below explains each field:
  Click the **Add** button and the orderline will be added to the purchase order.

  ![Add a Purchase Order 2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000MyW0VMAV.jpg)

> **Note:** Your purchase order is automatically saved every 10 seconds after a change is detected. This allows you to walk away or attend to other tasks without losing the information you've entered.

9. Continue adding products to your purchase order, up to 2,000 product lines.
10. Once completed, click the **Approve** button. The purchase order will be put into a pending status ready for you to send to your supplier. While in a pending state, the purchase order can be edited or cancelled. You can access all pending purchase order's later by navigating to **Stock Control** > **Pending**.
11. You can now email, fax or print your purchase order to send to your supplier. Once this is done, click the **Mark as sent** button. If emailing, the **From** field will default to the company email set in your business details (located in **Settings & Tools** > **Business Details**).

> **Note:** You can send to multiple emails by separating each address with a comma - **,**

Your purchase order is now added. When it comes time to receive this purchase order these details will be saved separately, so that you can track the differences between ordered and received.

## Add Purchase Orders from the Product Page

The product page filters are very powerful, and you can use them to add a list of products that need to be ordered. To add a purchase order from the product page:

1. In your Neto control panel, navigate to **Products** > **View Products**.
2. Select the products you want to order using the check boxes on the left hand side of the page.
3. At the bottom of the page, click the **With x selected** button. Choose **Create purchase order with selected** in the menu that appears.
4. In the pop-up window, select if you want to **Create a new purchase order** or **Add items to existing purchase order**.
  If you choose to add the selected items to an existing purchase order, choose the purchase order from the list that appears and click **Confirm**.

  **Please Note**: You can only add items to purchase orders in the Draft or Pending status.
5. Select the **Location** to be delivered to, and the **Supplier** of the products.
  If you select **Use product's primary supplier**, several purchase orders may be addedd.
6. Click the **Confirm** button, and a new purchase order will be added in **Draft** status.
7. **Supply price** will be populated from **Default Purchase Price** on the product. Likewise, **Order QTY** values for each product line will prefill according to the **Reorder Qty** on the product, or 1 if reorder qty is blank. You can also add and remove product lines if required.

> **Note:** Your purchase order is automatically saved after a change is detected, every 10 seconds. This allows you to attend to other tasks without losing the information you've entered.
> You can also [import your order lines](https://galaxy.maropost.com/kb/articles/1544-import-order-lines-into-a-purchase-order) for each purchase order.

8. Click the **Approve** button when complete, and the purchase order will be moved to pending status. You can now email, fax or print your purchase order to send to your supplier. Once this is done, click the **Mark as sent** button.

## Add a Purchase Order from the Forecast Demand Report

Purchase orders can be added from the products in the **Forecast Demand** report. This powerful report analyses sales data, stock on hand, and your supplier delivery times to estimate when more inventory needs to be ordered to meet demand. For more information on how this data is calculated, please see our in-depth article.

To add a purchase order from the forecast demand report:

1. In your Neto control panel navigate to **Stock Control** > **Forecast Demand**.
2. Select the products you wish to add to a purchase order using the check boxes on the left hand side.
3. At the bottom of page click **With x Selected** and choose **Add to New Purchase Order**.

> **Note:** If you choose **Create purchase order will selected**, the primary supplier and warehouse information will be automatically populated.

  ![Add a Purchase Order 4.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000MyW3ZMAV.jpg)
4. Select the warehouse and supplier from the drop-down menu, and click the **Next** button.
5. Your purchase order is added. Make any edits to the purchase order that you require, and click the **Approve** button when complete.

> **Note:** You can also [import your order lines](https://galaxy.maropost.com/kb/articles/1544-import-order-lines-into-a-purchase-order) for each purchase order.

6. Your purchase order will be moved to pending status. You can now email, fax or print your purchase order to send to your supplier. Once this is done, click the **Mark as sent** button.

## Add a Purchase Order from Sales Orders (cross-docking)

Cross-docking is a warehouse management method where little to no stock is stored long term. Instead, incoming stock is unpacked, split, and repacked into outgoing orders. Neto allows you to cross-dock by creating purchase orders from the sales orders page. To do this:

1. In your Neto control panel navigate to **Sales Orders** > **View Orders**.
2. Select the orders or individual product lines you wish to add to a purchase order.
3. Click the **Create Purchase Order(s)** button that appears. You'll then be given links to the purchase orders added, so that you can edit, approve, and send them.

> **Note:** You can also [import your order lines](https://galaxy.maropost.com/kb/articles/1544-import-order-lines-into-a-purchase-order) for each purchase order.

  ![Add a Purchase Order 5.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000MyW4NMAV.jpg)

## Export a Purchase Order

Purchase orders can be exported as a CSV file so that you can upload them into your supplier's portal. To export a purchase order:

1. In your Neto control panel navigate to **Stock control** > **Purchase orders**.
2. Click on the purchase order ID that you want to download.
3. Click the **Import/Export** button and choose **Export purchase order**.
  ![Add a Purchase Order 6.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000MyW4XMAV.jpg)

Your purchase order will be saved to your computer as a CSV file.