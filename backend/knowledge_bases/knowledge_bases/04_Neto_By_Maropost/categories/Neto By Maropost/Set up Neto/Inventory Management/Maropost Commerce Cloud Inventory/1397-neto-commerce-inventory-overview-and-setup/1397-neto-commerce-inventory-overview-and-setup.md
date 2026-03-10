---
title: "Neto Commerce Inventory Overview and Setup"
articleID: 1397
category: "Set up Neto > Inventory Management > Maropost Commerce Cloud Inventory"
knowledgeBase: "Neto By Maropost"
---

# Neto Commerce Inventory Overview and Setup

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/MaropostCommerceCloudInventoryOverviewandSetup1.05T5g00000VJZgpEAH.png)

## Neto Commerce Inventory Overview

Neto inventory will allow you to streamline you inventory management and deliver a true omni-channel experience. Neto inventory has powerful tools than the basic inventory functions included in your Neto subscription. The main benefits of the inventory system include:

- The ability to accurately maintain real time inventory levels irrespective of the sales channel.
- Spending less time managing suppliers with ability to create domestic or foreign currency purchase orders.
- Track quantity, price and costing for products.
- Perform advanced stock-takes and create stock adjustments.
- Generate inventory management reports including stock valuation and cost analysis.
- Seamless integration with Xero accounting platform.

**Please Note**: Neto Commerce Inventory is only compatible with Neto's direct Xero accounting integration, or without an accounting integration.

## Before you Begin

Neto inventory is free on some plans, and available as an upgrade for others. Before proceeding, check if your [plan is eligible](https://www.netohq.com/pricing/plans) for this add-on.

If you are planning on migrating from Unleashed to Neto Commerce Inventory, it's best to review our comparison guide to make the best decision before switching over.

## Set up Neto Commerce Inventory

At the end of this setup, the [average cost of goods (ACOG's)](https://galaxy.maropost.com/kb/articles/615-add-a-purchase-order) on all products will be calculated and your first stock adjustment will be completed.

> **Important:** Once Neto Commerce Inventory is installed you will no longer be able to edit stock levels manually or by import. Only purchase orders or stock adjustments will be able to change the stock level. This does not affect drop shipping warehouses.

To install Neto inventory:

1. In your Neto control panel navigate to **Stock Control** > **Purchase Orders** and click the green **Install Neto Commerce Inventory** button.
  Alternatively navigate to **Addons**, click on the **Neto Modules** tab on the left hand side to locate **Neto Commerce Inventory**, and click **Install**.
2. Before enabling Neto Commerce Inventory, you may be asked to make some changes to your products to ensure the inventory system is tracking your data correctly.
  In the example below, it's warning us that cost prices are missing from products. This means when a sale is complete, it's going to calculate the cost of the product as free, with a 100% profit margin.

  You will also be asked if you would like to clear any **Incoming Quantities** you have previously set. Neto Commerce Inventory will automatically update incoming quantities based on the purchase orders your create. It is important to clear these, as once the Advanced Inventory setup is complete you will not be able to modify this data.

  Click **Next Step** to fix the products in question.
3. Click the **Generate product export** button and download the CSV file to add the cost price for each product in Excel. Follow the steps on the page to re-import the file. Once complete, click **Next Step**.
4. If you have Xero installed, you will be presented with the option to **Configure Xero** for inventory.
  In this section, you'll be asked to map your accounts. None of these fields are mandatory as they can be set by the user later by directly going to the accounting integration page later. Once complete, click **Next Step**.
5. On this page, you can review the changes the system is about to make on your products. For Xero users, when you are completing the wizard on the review step you will get a value for your stock. This inventory balance will need to be completed manually or adjusted in Xero.

> **Important:** Please consult with your accountant to set up this initial inventory balance in Xero.

  This initial balance can also be retrieved at any time on your stock valuation report (located in **Stock Control** > **Stock Valuation Report**).

  Upon enabling inventory, the initial stock adjustments will set in Neto only. All other adjustment types will be synced in your accounting platform.

  Once you have set your initial inventory value in Xero and all exports are synced, this value should match the value of your inventory account.

> **Note:** If you need to make an adjustment to stock value in Neto without updating Xero you can use the stock adjustment reason of **initial stock adjustment**.

  Once you are happy with the integration, click the **Enable inventory** button.

Neto Commerce Inventory is now installed, and you can begin using its powerful reporting, purchase order, and stock take functions.

## Stock Returns and Transfers

Neto inventory does not currently have the ability to process a stock return to a supplier. You will need to reduce the stock level with a stock adjustment instead.

[Stock Transfers](https://galaxy.maropost.com/kb/articles/1540-stock-transfers)are now available for all users of Neto Commerce Inventory. Please refer to our specific documentation for more information on how to perform a [stock transfer](https://galaxy.maropost.com/kb/articles/1540-stock-transfers).

## Troubleshooting

**Q. Purchase orders aren't appearing in Xero**

A. Ensure that the **Export Purchase Orders** task is turned on in your Xero integration (**Xero** > **Tasks**).

**Q. When creating a Purchase Order, no Supply Price is populating.**

A. Default purchase price on your product has not been entered.

**Q. Quantity in stock does not reflect warehouse qty minus quantity committed.**

A. Recalculate stock levels from **Stock Control** > **Stock Adjustment** > **Recalculate Stock**

**Q. Incoming quantity not appearing when creating purchase orders.**

A. It's likely that the incoming qty was already there before Neto Commerce Inventory was turned on. Since it is not linked to a purchase order, the figure will remain on that product. This includes purchase orders in other inventory programs.