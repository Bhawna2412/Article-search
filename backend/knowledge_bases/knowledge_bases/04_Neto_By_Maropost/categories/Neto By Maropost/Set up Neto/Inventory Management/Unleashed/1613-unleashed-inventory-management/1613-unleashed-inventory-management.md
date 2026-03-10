---
title: "Unleashed Inventory Management"
articleID: 1613
category: "Set up Neto > Inventory Management > Unleashed"
knowledgeBase: "Neto By Maropost"
---

# Unleashed Inventory Management

![Image](https://www.neto.com.au/assets/thumb/APP-94.png)

### This add-on was built by Maropost

Add-ons and Integrations built in-house by Maropost are documented and supported by our customer service team. If you're having issues with this integration, [let us know](https://www.netohq.com/support/s/ask-us)!

## Overview

Easy-to-use inventory management at the heart of your business.

Unleashed is a powerful inventory management platform with advanced features such as costed purchase orders, kitting and multi-warehouse support. Find out more at[http://www.unleashedsoftware.com](http://www.unleashedsoftware.com)

Neto integrates with Unleashed for seamless inventory and purchase order management. Neto's Unleashed integration eliminates the need for duplicate data entry and can even extend the functionality of your Unleashed solution.

## Add-on Data

Unleashed to Neto:

- Products
- Bill of Materials (Kitting)
- Stock on Hand
- Tax Rates
- Suppliers
- Warehouses
- Customers

Neto to Unleashed:

- Invoices
- Returns / Stock Adjustments

## Data Preparation

- Check that the warehouses you have set up in Unleashed match the warehouses you have set up in Neto, even if you just have one warehouse. You can edit the warehouse code and warehouse ref of existing warehouses in both systems to match.
  To locate and edit warehouse reference codes from the Neto dashboard, navigate to **Stock Control** > **Locations / warehouses**.

  To locate and edit warehouse codes in Unleashed, navigate to **Settings** > **System** > **Warehouses**.
- Add your Neto RMA reasons to Unleashed. So that returns (RMAs) in Neto can adjust stock in Unleashed (return products to stock), you need to add your Neto RMA reasons to Unleashed.
  In Unleashed navigate to **Settings** > **System** > **Adjustment Reasons** and add each RMA reason here.

  You can find a list of your Neto  RMA reasons in your Neto control panel by navigating to **Settings & tools** > **All settings & tools** > **Returns & Disputes** > **RMA Reasons**.

## Install and Set up the Unleashed Add-on

**Step 1 - Get Started**

1. In your Neto control panel click on the **Addons** menu.
2. Find the **Unleashed** add-on and click the **Install** button.
3. Enter a start date for your integration (only invoices and returns after this date will be exported to Unleashed)
4. Select whether or not you want invoices to be individually exported to Unleashed or if you would prefer for these to be exported in batches.
5. Export invoices to this customer only (Select customer username if batching is on).
6. Select Export invoices when Dispatched or Approved.
7. Select the relevant workflow.
8. Click the **Continue** button.
9. Enter your Unleashed API Credentials. You can obtain this in Unleashed by going to Integration > Unleashed API Access or use **Get My API Credentials** link to be redirected to this page automatically.
10. In Neto, add the API Credentials and click the **Continue** button.
11. Define the accounts and tax codes that are used by default for exports to Unleashed.
12. Click the **Continue** button.
13. Your Unleashed add-on data sync is now in progress. When complete, click the **Save** button.
14. Navigate to **Unleashed** > **Setup & Tools** and click on the Name or ID of the new integration to complete the configuration.
15. In Neto, map the warehouse(s) downloaded from Unleashed under warehouse mapping as shown below.
16. Click the **Save** button.

Neto will automatically start to export and import data between the two systems based on the settings you have defined.

## Integration Tasks

An integration task is an import or export process that pushes data to or pulls data from Unleashed.

To see a full list of tasks that run between the systems in Neto, navigate to **Unleashed** > **Tasks**.

The tasks required for your integration will automatically run on the schedule set. You can edit a tasks schedule by drilling into it. We do not recommend editing the default schedules that have been set up for you.

You can manually run an integration task at any time by selecting the task from the list of active tasks and clicking the **with selected** > **run selected task** button. This will run the chosen task within a minute.

Every single invoice and adjustment that is pushed to Unleashed from Neto is logged in the integration export log. This log provides in depth reporting into the success or failure of each transaction as well as an overview of what has not yet been exported. From this log you can also re-export any transaction at the click of a button.

## Product Field Mapping

The below product fields are imported to Neto from Unleashed. You can configure on a per field basis whether or not Unleashed is the master (source for updates). This is done under the advanced config section of the Unleashed integration setup (to gain access to the advanced configuration, please contact our integration's support).

| Neto Field Name | Unleashed Field Name |
| --- | --- |
| SKU | ProductCode |
| Name | ProductDescription |
| Default Purchase Price | DefaultPurchasePrice |
| Store Price (default price) | DefaultSellPrice |
| Price A to J | SellPriceTier1 to SellPriceTier10 |
| UPC/EAN | Barcode |
| Internal Notes | Notes |
| Length (Shipping) | Depth |
| Width (Shipping) | Width |
| Height (Shipping) | Height |
| Weight (Shipping) | Weight |
| Reorder Qty | ReOrderPoint |
| Restock Qty | MinStockAlertLevel |
| Pick Zone | BinLocation |
| If SKU has kit components | IsAssembledProduct |
| If SKU is a component of a kit | IsComponent |
| Primary Supplier | Supplier |
| Product Group | Group |
| Unit of Measure | Unit of Measure |

## Link Unleashed to Neto Tax Codes

In Neto, navigate to

Unleashed

>

Setup & Tools

> Click on the integration ID or name. In here, you need to define a default:

- Sales tax code (The default tax code for product sales exported to Unleashed)
- Sales account (The default Xero sales account for products exported to Unleashed)
- Product tax code (The default Xero sales tax code for products exported to Unleashed)
- Product tax rate (The default Xero sales tax rate for products exported to Unleashed)
- Product purchase tax code (The default Xero purchase tax rate for products exported to Unleashed)
- Product purchase tax rate (The default Xero purchase tax code for products exported to Unleashed)

Below is an example of a completed setup: