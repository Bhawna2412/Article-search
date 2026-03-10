---
title: "Add Suppliers"
articleID: 1437
category: "Set up Neto > Inventory Management > Maropost Commerce Cloud Inventory"
knowledgeBase: "Neto By Maropost"
---

# Add Suppliers

Setting up your suppliers in Neto is a two stage process, creating your suppliers, then assigning them to your products:

## Add Suppliers in Neto

To create a new supplier and add the supplier details:

1. In your Neto control panel navigate to **Stock Control** > **Suppliers**.
2. Click the **Add New** button in the top right hand side. Fill in your suppliers details and click **Save**. Repeat this process for your remaining suppliers.

> **Important:** Ensure your billing and shipping addresses are added. Address information should be your suppliers address. It is used during a purchase order creation to determine whether tax is applied. The shipping address should be your suppliers return address for RMA's.

## Add Suppliers in Purchase Orders

Suppliers can also be created on the fly when creating a purchase order. When creating a purchase order, select the **Suppliers** drop down menu, and click **+ Create New Supplier**.

## Assign Suppliers to Products

Suppliers that are created in Neto can be assigned to products individually, or [in bulk](https://galaxy.maropost.com/kb/articles/1437-add-suppliers#4). To assign suppliers to products individually:

1. In your Neto control panel navigate to **Products** > **View Products**.
2. and click on the **Warehouse & Picking** tab on the left hand side menu. Select your **Primary Supplier** and click **Save**.
  Click on the product you wish to add a supplier to.

Repeat these steps for any other products.

## Assign Suppliers to Products in Bulk

Suppliers can be added to products in bulk using the export and import wizards:

1. In your Neto control panel navigate to **Products** > **View Products**.
2. From the top right hand side, click the **Export** button and select **Export CSV file with all fields**.
3. Open the CSV file and fill out the **Primary Supplier** column with the Supplier ID (not the name) which is located on the supplier card created in the previous steps.
4. Once you've completed the CSV file, save and close and use the [Product Import Wizard](https://galaxy.maropost.com/kb/articles/668-product-import-wizard) to update your products.