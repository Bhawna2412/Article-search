---
title: "Shopify Inventory Buffers"
articleID: 177
category: "Shopify > Getting Started"
knowledgeBase: "Retail Express"
---

# Shopify Inventory Buffers

You can configure inventory buffers for your Shopify integration in **Retail Express** to prevent overselling by maintaining safety stock levels for online sales. This feature helps reduce customer service issues by reserving a portion of inventory for in-store sales while still making significant quantities available online, supporting balanced omnichannel inventory allocation across retail channels.

Setting up inventory buffers involves defining buffer quantities per product or location and establishing synchronization rules for available stock calculations. When properly configured, inventory buffers typically lead to reduced overselling incidents, better balance between online and in-store inventory availability, and improved customer satisfaction through more reliable stock information.

Inventory Buffers allows you to control the number of products available to sell on your Shopify store, so you can set some stock aside to keep on hand e.g. floor stock.

When calculating the Available quantity online, Shopify will factor in the buffer and reduce the quantity of products accordingly.

![rtaImage - 2023-07-10T002733.896.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphyZEAQ.jpg)
About Inventory Buffers:

- Inventory Buffers are configured** per Shopify Store** (meaning if you have multiple stores connected, you can control different buffers to suit)
- If you'd like to configure the same buffer for all products you can use the **Global Default Buffer **(configured to 0 by default to sell the full available quantity online)
- If you'd like to apply different buffers to different products, you can configure **Custom Buffers **per Product Type e.g. Shoes might have a buffer of 3, while Accessories have a buffer of 1
  Custom Buffers will take priority, and if a product doesn't have a Custom Buffer configured the Default Buffer will be used.

## Calculating Stock Available to Sell

The stock available to sell online is calculated by adding all the Available Stock from your Inventory Locations, then subtracting the Inventory Buffer levels. For example, a product with a quantity of 15 Available and an Inventory Buffer of 5 would have 10 available to sell online.

**Calculation method: **Available to sell = Available minus Inventory Buffer

|  |  |
| --- | --- |
| Available Qty | 15 |
| Inventory Buffer | 5 |
| Available to sell online | 10 |

### **Out of Stock Products:**

If you have an Inventory Buffer and your products reach a zero level quantity, the buffer will cause the product to appear as a negative online. This is only visible from the admin page, the product will be displayed as "Out of Stock" to customers.

For example, if you have an Inventory Buffer of 5, and your product reaches 0 available in Retail Express, the quantity will be displayed as -5 in Shopify.

## Configuring Inventory Buffers

The Default Inventory Buffer is automatically set to zero (0) so all available stock can be sold online. You can customise this if required. Any product with a Product Type not assigned to a Custom Inventory Buffer will use the Default Inventory Buffer.

> **Note:** Editing the Default Inventory Buffer will trigger a resynchronisation of all products and will take some time. We recommend doing this after hours.

1. Navigate to **Settings > Integration > Shopify**
2. Click the **Pencil **icon to edit your Shopify store
3. Click the **Inventory Buffers **tab
4. To create a new Custom Buffer enter a **Name**
  ![rtaImage - 2023-07-10T002745.011.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphXtEAI.jpg)
5. Enter the **Buffer** quantity
6. Select the **Product Types** to apply the Buffer to

> **Note:** Select multiple Product Types by clicking holding the Ctrl button and mouse clicking (or press Shift + Click to select a range)

7. Click the **right arrow **to move the selected Product Types to the right box
  ![rtaImage - 2023-07-10T002749.264.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphyeEAA.jpg)
8. Click the **double right****arrow** to add all Product Types
9. Click **Create**
10. A reminder will be displayed that all products with the selected Product Types will be synchronised
11. Click **Continue**

To edit the Default Inventory Buffer:

1. The Default Buffer will appear in the Inventory Buffers tab at the bottom of the page
  ![rtaImage - 2023-07-10T002753.748.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphyjEAA.jpg)
2. Click the **Pencil** icon to edit the value
3. Change the value in the **Inventory Buffer Settings** table at the top
  ![rtaImage - 2023-07-10T002759.821.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphyoEAA.jpg)
4. Click **Update**
5. A warning will be displayed to remind you that synchronisation will be triggered for all products, click **Continue**
  Reminder: Synchronising all products may take some time - we recommend doing this out of peak trading hours.
6. The updated Default Inventory Buffer level will be displayed at the bottom

## Frequently Asked Questions

[Can I configure buffers for specific products only?](https://galaxy.maropost.com/kb/articles/177-shopify-inventory-buffers#products)

No, currently you can only configure custom buffers per Product Type.

[What happens if my Custom Buffer is lower than my Default Buffer?](https://galaxy.maropost.com/kb/articles/177-shopify-inventory-buffers#custom)

The Custom Buffer will always take priority. For example, you might want to apply a buffer to most of your products except for one category. Configure the Default Buffer eg. 2, and create a Custom Buffer of 0 for the Category that should not have a buffer applied.

[How can I use the same buffer for most of my products (but not all)?](https://galaxy.maropost.com/kb/articles/177-shopify-inventory-buffers#custom-some)

Easy - configure the Default Buffer eg. 2, and create a Custom Buffer of 0 for the Category that should not have a buffer applied.