---
title: "Enable Shopify Pre-Orders"
articleID: 171
category: "Shopify > Products"
knowledgeBase: "Retail Express"
lastUpdated: 2025-11-27
---

# Enable Shopify Pre-Orders

Related:[Understanding Pre-Orders](https://galaxy.maropost.com/s/article/Understanding-Shopify-Pre-Orders)

This feature will be available to all Shopify Connector customers by the **30th of March 2022.**

## Shopify Settings

![rtaImage (73).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powtXEAQ.jpg)
When enabling Pre-Orders for your store, you will need to select from one of the following options to define the number of products available for Pre-Order, and the impact on Purchase Orders.

|  |  |
| --- | --- |
| **Setting** | **Details** |
| Disabled | Stock will not be available for Pre-Order |
| Accept Pre-Orders for On Order Stock | Products on selected Purchase Orders will be included in the stock available for Pre-Order. When a new Pre-Order is received, a Special Order will be created and linked to an existing Purchase Order. |
| Accept Pre-Orders | A new Special Order Purchase Order will be created each time a Pre-Order product is sold Inventory levels disregarded - customers can order as many as you want |

> **Important:** Only one option can be selected at the Shopify Integration option (i.e. you cannot have some products set up using Sell On-Order Stock and other products set up with Create new Special Orders.

If you select to sell the On-Order stock option, the quantity available to sell online is calculated using the On-Order quantity.

|  |  |
| --- | --- |
| Available to Pre-Order | On-Order quantity + Available Quantity |

To enable Pre-Orders:

1. Navigate to **Settings > Integrations > Shopify**
2. Click on the **Pencil **icon to edit the store
  Pre-Orders can be enabled independently for each store
3. Select a **Pre-Orders **option
  ![rtaImage (74).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powtcEAA.jpg)
4. Click **Save**

## Enabling Products

Once Pre-Orders have been enabled a new "Pre-Order Products tab" will be displayed within the Shopify settings.

1. Click the **Pre-Order Products **tab
  ![rtaImage (75).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powthEAA.jpg)
2. Click the **PLU Scan **field and either scan or type the product code (products will populate in a list below as you type them in). Codes available to be used: Product ID, Supplier SKU, Supplier SKU 2, and Manufacturer SKU.
  ![rtaImage (76).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powtmEAA.jpg)

  Products must be already published to Shopify to be available for Pre-Orders
3. Enter a **Style Code **to add all sizes and colours of that style
4. The Product/s will be added to the table at the bottom of the page
  ![rtaImage (77).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powtrEAA.jpg)
5. A synchronisation will be triggered to update the product on Shopify to add a "PREORDER" tag
  ![rtaImage (78).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powtwEAA.jpg)

  For more information on how Retail Express manages Pre-Order tags please refer to [Understanding Shopify Pre-Orders](https://galaxy.maropost.com/s/article/Understanding-Shopify-Pre-Orders).
6. If the Shopify configuration is set to "Accept Pre-Orders" no additional changes are required for the product to be available for Pre-Order (Retail Express will synchronise and enable the "Allow Overselling" flag on Shopify so the product/variants is available for purchase immediately)
7. If the Shopify configuration is set to "Accept Pre-Orders for On Order stock" the product/variant will also need to be on an [eligible Purchase Order](https://galaxy.maropost.com/s/article/Understanding-Shopify-Pre-Orders) to be available for Pre-Order online
8. To remove products from Pre-Orders tick the box on the left
  ![rtaImage (79).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powu1EAA.jpg)
9. Click **Remove Products**

**Reminder: If Pre-Orders are configured to "Accept Pre-Orders for On Order stock" the product will need to be on an eligible Purchase Order to be available for Pre-Order online**

## Enabling Purchase Orders

If you have configured Pre-Orders to "Accept Pre-Orders for On-Order Stock" you will need to enable your Purchase Orders to make the products eligible for pre-order.

1. The Purchase Order must be **assigned to an Inventory Location Outlet** in the
2. The Purchase Order must be **marked as On-Order**
	Incomplete or Back Order Purchase Orders are not eligible for Pre-Orders
3. The Purchase Order must have been **marked as Available for Pre-Order**.

To update the Purchase Order as Available for Pre-Order:

1. Use the [Purchase Order Manager](https://galaxy.maropost.com/s/article/Purchase-Order-PO-Manager) to locate the Purchase Order to be updated (or complete the steps below when creating the Purchase Order)
2. On the **PO Details** tab tick the option "Available for Pre-Order"
  ![rtaImage (80).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powu6EAA.jpg)
3. Continue to update/create the remainder of the Purchase Order as required
4. Click **Save Changes** or place the Purchase Order On Order (if creating the order)

Now you're all set to begin promoting and selling your Pre-Order products. Click here for information on how to [process Pre-Order sales](https://galaxy.maropost.com/s/article/Processing-Shopify-Pre-Orders).

## Frequently Asked Questions

[How is my ETA calculated?](#eta-calculation)

The ETA calculation looks at a few different factors, such as:

- Your current Available stock
- Purchase Orders that are marked as On-Order and set to "Available for Preorder" (and the Priority of those Purchase Orders)

If you have sufficient available stock to fill the order, the ETA displayed will be today's date. If a product does not have available stock and would be sourced from a Purchase Order, the returned ETA date will be the ETA stored against the Purchase Order.

If you have several Purchase Orders that meet the above criteria, we will prioritise Purchase Orders by their ETA date (the PO with the earliest ETA date will be chosen).

If the qualifying Purchase Orders do not have ETA dates or have matching ETA dates, we will prioritise the Purchase Orders based on Outlet Priority.

[Why does my ETA button show today's date?](#eta-today)

This can occur if you have available stock in Retail Express, but have applied an [Inventory Buffer](https://galaxy.maropost.com/s/article/Shopify-Inventory-Buffers) to your Shopify Synchronisation.

Buffers will deduct from your global inventory and reduce the Inventory synchronised with Shopify. Once the inventory falls below 0 and all Pre-Order conditions are fulfilled, the product will be available for Pre-Order.

[Why is my ETA set to Unknown / Contact Store for Availability?](#eta-unknown)

This occurs when we cannot retrieve a valid ETA date from Retail Express.

Reasons for this could be that you have forgotten to enter an ETA date against the Purchase Order, or the ETA date against the Purchase Order is in the past.