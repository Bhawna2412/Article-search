---
title: "Stock Adjustment in Neto Commerce Inventory"
articleID: 675
category: "Use Neto > Products > Purchase Orders and Inventory"
knowledgeBase: "Neto By Maropost"
---

# Stock Adjustment in Neto Commerce Inventory

A stock adjustment is used to alter stock level for reasons such as write-offs, stock-takes, donations etc. You can also use it to adjust the value of a product.

> **Important:** This article requires the **Neto Commerce Inventory** add-on. If you are not using Neto inventory, please refer to the [standard instructions](https://galaxy.maropost.com/kb/articles/1549-product-stock-level-quantity-management).

## Create a Stock Adjustment

To alter your stock levels with a stock adjustment:

1. In your Neto control panel navigate to **Stock Control** > **Stock Adjustment**.
2. From the **Stock Adjustments** page click **Add Stock Adjustment**.
  ![Screen Shot 2024-09-24 at 3.46.37 pm.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Gn6wIMAR.jpg)
3. Select the **Location **you wish to create a stock adjustment for, and the **Reason **for the adjustment.
  ![Screen Shot 2024-09-24 at 3.47.33 pm.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Gn6wNMAR.jpg)
4. ![Screen Shot 2024-09-24 at 3.48.47 pm.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Gn6wcMAB.jpg)
  Add products to your stock adjustment by typing or scanning the product SKU, name or barcode. Continue to do this for all the products that you would like to add to your stock adjustment
5. ![Screen Shot 2024-09-24 at 4.28.14 pm.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Gn6wmMAB.jpg)  - Cost prices will default to that products ACOG (Average Cost of Goods).
  - The quantity change will default to 1 and cannot equal 0.
  - Stock adjustments cannot be changed once they have been saved.
  - Cost prices can accommodate values up to 4 decimal places.

  You can adjust quantity and prices on each stock adjustments lines. As you adjust the stock, the line adjustment values and total adjustment values will calculate.

  It's important to remember the following:
6. Add a comment to the stocktake for future reference. Click the **Save** button.
  ![Screen Shot 2024-09-24 at 4.30.10 pm.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Gn6wrMAB.jpg)

Your stock adjustment will be recorded, and stock levels updated.

## Create a Stock Adjustment from the Product Page

Rather than adding each product individually to a stock adjustment, they can be added in bulk from the product page:

1. In your Neto control panel navigate to **Products** > **View products**
2. **Filter** your product selection to the products that you would like to Stock Adjustment, bulk select products and click **With selected** > **Create New Stock Adjustment**.
  ![Screen Shot 2024-09-24 at 4.38.46 pm.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Gn7KAMAZ.jpg)
3. This will load the create **Stock Adjustment** page with the products you have selected pre-populated.
  ![Screen Shot 2024-09-25 at 11.19.29 am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Gnb9vMAB.jpg)
4. Once you hit save, the **Stock Adjustment** will be actioned and Stock/ACOG changes applied.

## Adjust Stock in Bulk

Stock adjustments can be performed in bulk by importing a CSV file. To add the products in bulk:

1. In your Neto control panel navigate to **Stock Control** > **Add Stock Adjustment**.
2. Click on the **Populate via CSV** button to view the instructions on how to create and upload a stock adjustment file.
  **Please Note**: The maximum number of adjustments per file is limited to 250 records.

  ![Screen Shot 2024-09-25 at 11.20.11 am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000GnbAjMAJ.jpg)
3. Click the **Download Template** button to save a blank CSV template file to your computer.
4. Open the file and populate it with your data. Save the file once complete.
5. In your Neto control panel click the **Choose File** button and browse to the file where you saved your data, and click the **Open** button.
6. Click the **Populate Stock Adjustment** button to upload your file, and adjust your stock levels.

Stock levels of imported products will be adjusted as per the file you've uploaded.

## Stock Transfers

Please refer to our specific documentation to perform a [stock transfer](https://galaxy.maropost.com/kb/articles/1540-stock-transfers).

## Revalue Stock

You can also use stock adjustments to revalue your stock:

1. Create a new Stock Adjustment.
2. Add your products.
3. Enter a **negative value** for the SOH (Stock On Hand) at ACOG (Average Cost Of Goods) to bring the quantity of the item to zero.
4. Enter a** positive value** for the SOH (Stock On Hand) and a new ACOG (Average Cost of Goods) to bring the quantity back to it's original value.

Repeat these steps for each warehouse.