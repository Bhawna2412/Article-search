---
title: "Product Settings"
articleID: 581
category: "POS > Settings"
knowledgeBase: "Retail Express"
lastUpdated: 2026-01-20
---

# Product Settings

You can establish product management standards in Retail Express through system-wide product settings, helping your retail operations maintain consistent product data handling across all locations. This capability allows you to define default behaviors for product creation, SKU generation, inventory tracking, and attribute management, which helps ensure uniform product data quality throughout your catalog.

Setting up proper product settings enables your retail operations to standardize how product information is captured and maintained, helping optimize catalog management efficiency. This helps retail businesses maintain consistent product data structures while reducing data entry errors and ensuring all locations follow the same product management practices.

Product settings allow you to manage how products are displayed in POS and customize essential configurations such as Estimated Time of Arrival (ETA) and pricing options.

This article provides step-by-step guidance to help you tailor product attributes, types, and pricing strategies to suit your business needs while optimizing inventory management.

## Configuring Product Settings

To configure the Product Settings:

1. Navigate to **Settings > POS Settings > Product Settings**
  ![Screenshot 2026-01-20 at 3.08.43 PM.png](https://us.v-cdn.net/6038474/uploads/MCYEDGP4QF17/screenshot-2026-01-20-at-3-08-43-e2-80-afpm.png)
2. Update the settings as required (see below for detailed explanations on each field)
  ![Screenshot 2026-01-20 at 3.10.10 PM.png](https://us.v-cdn.net/6038474/uploads/BECEO7KIDLNY/screenshot-2026-01-20-at-3-10-10-e2-80-afpm.png)
3. Click **Save Changes**

## Product Setting Options

|  |  |
| --- | --- |
| **Field** | **Description** |
| Display Product Elements | Which codes should be displayed in POS. You can choose from:  - Product ID and SKU (Supplier SKU) - Product ID and Code (Manufacturer SKU) - SKU and Code |
| Prioritise ETA for Orders by Purchase Order | - Ticked - the ETA will be as close as possible to the Due Date on the sale, allowing in-store stock to be sold to walk-ins (rather than keeping excess stock set aside for something that may not be due for a period of time) - Unticked - the ETA will be as close as possible to the current date, so that the ETA is based on a "first in first served" method |
| Round GP Target Prices By | Rounds the POS Price to the nearest selected value when calculating the POS price based on Cost of Goods Sold (COGS) + Markup % (configured on the Edit Product screen). Options available:  - 0.01 (to the nearest cent) - 0.05 (to the nearest 5c) - 0.10 (to the nearest 10c) - 0.50 (to the nearest 50c) - 1.00 (to the nearest dollar)  Click here for more information on calculating product prices. |
| Show Discount Group Pricing in Product Details | Displays the Discount Group Pricing in the Product Details screen (accessed by double-clicking on the Product in the Products tab, or by press & holding for touch screens/mobile devices). |
| Show RRP | Displays the Recommended Retail Price (RRP) in the Product Search Results |
| Show Size & Colour | Displays the Size and Colour columns on the Products tab |

## Serial Number Capture for Products

Retail Express supports **serial number capture at the product level**, allowing retailers to track individual items during the sales and fulfilment process.

When enabled, serial numbers can be recorded for applicable products at POS and during fulfilment, helping improve traceability, warranty tracking, and inventory accuracy.

When creating or editing a product, one of the following serial number options can be applied:

- **Required** — A serial number must be recorded before the product can be fulfilled or the sale finalised.
- **Optional** — A serial number can be recorded, but it is not mandatory to complete the sale.
- **Disabled** — Serial number capture is not used for the product.

By default, **all existing products** and **newly created products** are set to **Disabled** unless the serial number option is explicitly updated.

> **Note:** **For more details on serial number capture, **[**click here**](https://galaxy.maropost.com/kb/articles/2373-serial-number-recording-at-pos?)**.**

### Auto-Prompt for Serial Number Entry

This setting controls whether POS displays an **automatic pop-up prompt** when adding products that **require serial number capture** to a sale.

When enabled, the auto-prompt modal appears **as soon as a product configured with a Required serial number setting is added at POS**, prompting the user to enter or scan the serial number immediately.

### How the Auto-Prompt Works

- The prompt is triggered **only for products with the serial number setting set to Required**.
- Products marked as **Optional** or **Disabled** do not trigger the auto-prompt.
- Once the serial number is recorded, the sale can continue as normal.
- If your staff usually have the goods on hand at the point of sale, enabling the pop-up provides a quick and easy way to capture serial numbers as you add each item to a sale.
- If you often don’t have the serial number available immediately you might prefer to disable the pop-up to avoid interruptions, entering the serial number later before fulfilment.

### Configuration Path

This setting can be configured via:**Settings → POS Settings → Product Settings → Auto-Prompt for Serial Number for Applicable Products**