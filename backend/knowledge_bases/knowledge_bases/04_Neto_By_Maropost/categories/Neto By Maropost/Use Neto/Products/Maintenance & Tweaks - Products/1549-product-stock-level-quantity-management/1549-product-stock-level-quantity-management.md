---
title: "Product Stock Level / Quantity Management"
articleID: 1549
category: "Use Neto > Products > Maintenance & Tweaks - Products"
knowledgeBase: "Neto By Maropost"
---

# Product Stock Level / Quantity Management

> **Note:** If you are using the Neto Commerce Inventory add-on, see our documentation on stock control here.

## Adjust a Single Product Quantity

The stock level of a single product can be easily be adjusted by editing the warehouse quantity. To change the quantity of a single product:

1. In your Neto control panel navigate to **Products** > **View Products**.
2. Click on the Product/SKU you want to edit.
3. Go to the **Stock Control** section and enter the stock quantity for the location.
4. Click the **Save** button.

## Adjust Product Quantity from the Stock Adjustment Page

Stock adjustment is a great tool when you need to quickly add or reduce stock without the need to recalculate your products stock. This is handy when you have new stock arriving and you want to add this to your current inventory or if you find broken stock and you want to deduct this from your inventory.

**Example 1**

I have stock count of 15 and 20 more have just arrived in the post. I can add 20 in the adjustment which will show 35 in the stock total.

**Example 2**

I have a stock count of 15 and I found 5 which were broken. I can add -5 in the adjustment which will show a total of 10 in stock.

To adjust product quantity from the stock adjustment page:

1. 
  In your Neto control panel navigate to **Stock Control** > **Stock Adjustment**.
2. Enter the changes to the stock level of your products per warehouse location.
3. Click the **Save** button.

Your stock levels will be updated according to the changes you've made.

## Adjust Product Quantity with the Import Wizard

If you have a spreadsheet (such as a CSV file) with your current stock levels, you can use Neto's import wizard to upload these into Neto in bulk.

Steps to use the import wizard can be found in [this article](https://galaxy.maropost.com/kb/articles/668-product-import-wizard).

## Perform a Stocktake

Stocktake is used to make a full count of your products. When you change stock levels on the stocktake page, it will completely replace the stock levels. This is where it differentiates itself from the stock adjustment page. To perform a stocktake:

1. Count the stock levels of your products to get an accurate picture of your inventory.
2. In your Neto control panel navigate to **Stock Control** > **Stock Take**.
3. Enter the new stock levels in the **Qty Counted**fields to replace the current stock levels.
4. Click the **Apply Stock Take** button.

Your product stock levels will adjust to reflect the new values you've entered.

## Set Products to Always Have Stock

Products can be configured individually to always have stock available for purchase by turning off stock management. There's two ways to change the setting covered in this article:

- [Individually](https://galaxy.maropost.com/kb/articles/1549-product-stock-level-quantity-management#7)
- [In bulk](https://galaxy.maropost.com/kb/articles/1549-product-stock-level-quantity-management#8)

### Individually

Turning off stock control will essentially cause the product to permanently be available for sale. This feature is often used when stock is always present and management is not necessary or if the product is digital.

1. In your Neto control panel, navigate to **Products** > **View Products**.
2. Click on the product you wish to edit. Go to the **Stock Control** section and under the **Inventory Policy** heading, select **Don't track inventory for this SKU** from the dropdown menu.
3. Click the **Save** button and repeat these steps for each product required.

### In bulk

Individually opening products to change stock control can be quite time intensive, so for a large number of products we recommend using the export/import wizards.

1. Follow the steps in the [Export Wizard article](https://galaxy.maropost.com/kb/articles/501-product-export-wizard). When choosing the fields to export, you must include the **SKU*** and **Virtual** fields.

> **Note:** Include the **Name** field and set your product export filters as well so you can identify products easily.

2. Once exported, open the file and change the virtual field to `Yes` for any product that should have unlimited stock.
3. Save the file, and perform the steps in the [Import Wizard guide](https://galaxy.maropost.com/kb/articles/668-product-import-wizard) to upload your file. Your fields should map automatically, but if not, match the **SKU*** and **Virtual** Neto fields to the ones in your file.

After completing the wizard your products will update automatically to always be in stock.

## Recalculate Product Stock Levels

The **Recalculate Stock** button updates product stock level totals to include any changes to order status, showing new totals for committed or dispatched stock.

1. In your Neto control panel navigate to **Stock Control** > **Stocktake**.
2. Click the **Recalculate Stock** button on the top right hand side and a process will be generated to complete this task.

### Neto Commerce Inventory

If you have the Neto Commerce Inventory add-on installed the recalculate button will no longer be in the stocktake or stock adjustment pages. To recalculate stock:

1. In your Neto control panel navigate to **Settings & tools** > **All settings & tools**.
2. Select **Processes & Scheduled Jobs** from the side menu and choose **System Scheduled Tasks**.
3. Locate the **Inventory Cache** task and click the **Run Now** button.
4. 
  Click the link for the **Batch Process** that is created.
5. Then click **Run Now** to start the process.