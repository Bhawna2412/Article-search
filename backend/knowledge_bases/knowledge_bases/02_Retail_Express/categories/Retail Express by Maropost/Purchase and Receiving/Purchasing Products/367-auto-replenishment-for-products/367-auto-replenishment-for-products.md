---
title: "Auto Replenishment for Products"
articleID: 367
category: "Purchase and Receiving > Purchasing Products"
knowledgeBase: "Retail Express"
---

# Auto Replenishment for Products

You can configure auto-replenishment settings at the product level to automatically generate purchase orders when stock levels reach predefined thresholds, helping eliminate manual monitoring tasks. This improves your retail operations efficiency by ensuring continuous stock availability for key products, with properly configured auto-replenishment typically reducing stockouts and freeing staff from repetitive ordering activities.

Understanding auto-replenishment configuration involves recognizing min/max stock levels, reorder point calculations, and supplier lead times to help retail operators focus on the right automated inventory management workflows, ensuring your retail strategy consistently drives better stock availability and operational efficiency outcomes.

# Auto Replenishment for Products

Using the Product Replenishment feature you can automatically reorder your stock when the product is sold in POS. You can select from a range of conditions for the frequency of when a Purchase Order is created, from every time a sale is made through to only creating an order when the stock is not available.

For example, if you have rare products that you only keep a small number in stock, you can automatically create a Purchase Order each time one of the products is sold. The PO will be created for you by Retail Express, saving you from having to find the time to create a new order (or remembering to place the order in the first place). Simply place the PO on order and send it to your supplier!

## []()Replenishment Options

The available Replenishment options are:

|  |  |
| --- | --- |
| Never Auto Replenish | Purchase Orders are never created automatically by Retail Express when the product is sold |
| Always Auto Replenish | A new Purchase Order will be created for every sale in POS. |
| Auto Replenish when Out of Stock | A Purchase Order will only be created when the stock level reaches 0 or less |
| Auto Replenish when insufficient On Order | Automatically create a Purchase Order if a sale is made in POS but there is not enough stock in Retail Express to cover the sale. When calculating the total stock accessible Retail Express will review how many products are: Available i.e. currently in the Outlet available to be sold 			On-Order i.e. stock already ordered from the Supplier and en-route 			If there is not enough stock Retail Express will create an Incomplete Purchase Order for the total sale quantity (not just the difference) e.g. if 5 products are added to the sale and there is currently 1 Available and 3 On Order (a total of 4) a PO will be created for 5 products. |

## []()Enabling Auto Replenishment

There is a two-step approach to begin using Auto Replenishment:

- Update **Global Settings** to enable the feature
- Update **Products** to select a Replenishment option (this can be done individually or on a bulk basis)

### Global Settings

To update the Global Settings:

1. Open Back Office
2. Navigate to **Settings > Global Settings**
3. Scroll to **4. Outlet**
4. Tick **Auto Generate PO**![mceclip0.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pnIfdEAE.jpg)
5. Click **Save Changes**

### Update Products

**Individually:**

1. Open the **Edit Product** window

> **Note:** You can open a product for editing by typing the product code into the search box in the top right-hand corner of Back Office, or by using Product Search/Product Search & Management.

2. Locate the **Replenishment **section on the Main tab![mceclip1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pnFV9EAM.jpg)
3. Click the **radio button** (circle) to select a Replenishment option

> **Note:** Hover/click on the green question mark icons to see an explanation of each of the options.

4. Click **Save Changes**

**Bulk update:**

1. Navigate to **Inventory > Product Search and Management**
2. Use the **Filters **to search for your products as required
3. Click **Search**
4. Click the **Apply Product Edit Setting **drop-down box
5. Select a **Replenishment **option![mceclip2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pnIkEEAU.jpg)
6. Click the **Apply To **drop-down box on the same row as the Apply Product Edit Setting field
7. Select which products should be affected
8. Click **Apply**

> **Note:** You can also update individual products by selecting a new option from the Auto Replenish column in the product search results and clicking Save Changes.

![mceclip4.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pnIbwEAE.jpg)Individual updates on the Product Search & Management results[(click to view full size)](https://ress.zendesk.com/hc/article_attachments/360004738556/mceclip4.png)

## []()Auto Generated Purchase Orders

Purchase Orders will be created as an Incomplete PO when a sale is made in POS based on the conditions [above](https://galaxy.maropost.com/kb/articles/367-auto-replenishment-for-products#options).

To view the Purchase Order:

1. Navigate to **Inventory > PO Management > PO Manager**
2. Change the **PO Status** to Incomplete
3. Update the other filters as required
4. Click **Search**
5. The **Auto Replen Inv #** column will display the customer invoice number (if the PO was created through the Auto Replenishment feature)
  ![mceclip2 (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pnIl4EAE.jpg)
6. Click the **PO ID** or the **Pencil** icon to open the Purchase Order for editing
7. The Auto Replenishment For section will display details on the original customer sale that triggered the Purchase Order ![mceclip0 (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pnInNEAU.jpg)
8. Update the PO as required
9. Click **Place On-Order**

> **Note:** Using the PO Consolidation feature you can combine the Purchase Order with all other outstanding POs for the same supplier, however please note it will no longer display the original POS Invoice Number.