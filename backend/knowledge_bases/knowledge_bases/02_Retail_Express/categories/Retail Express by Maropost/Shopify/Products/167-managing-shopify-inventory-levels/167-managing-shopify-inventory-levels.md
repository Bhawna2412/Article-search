---
title: "Managing Shopify Inventory Levels"
articleID: 167
category: "Shopify > Products"
knowledgeBase: "Retail Express"
---

# Managing Shopify Inventory Levels

You can manage Shopify inventory levels through **Retail Express** to maintain accurate stock visibility for your online customers across all integrated locations. This capability helps prevent overselling and improves customer satisfaction by ensuring real-time inventory synchronization, supporting accurate stock availability information and better inventory planning across your omnichannel retail operations.

Setting up inventory level management involves configuring inventory locations, setting buffer quantities, and establishing synchronization frequencies. When properly configured, inventory management typically leads to reduced stockouts, fewer overselling incidents, and better customer confidence through accurate online stock availability information.

Within Retail Express you can select which Outlets are used to calculate the stock available to sell online. The available stock from these Outlets are combined to determine the total available stock for Shopify.

Once the Shopify integration has been enabled, Retail Express becomes the "point of truth". All updates to inventory levels are performed in Retail Express and synchronised to Shopify automatically (no manual updates to Shopify are necessary).

## []()Selecting Inventory Outlets

The "Inventory Locations" setting defines which Outlets are used to calculate the total inventory level available to sell online.

To manage the Inventory Locations:

1. Navigate to **Settings > Integrations > Shopify**
2. Locate **Inventory locations and Sourcing Priority **fields
3. Outlets assigned to Shopify are listed on the right. Outlets not assigned are listed on the left.
4. To **add** a new Outlet click and highlight the Outlet **on the left** and click the **right arrow**
5. To **remove** an Outlet click and highlight an Outlet **on the right** and click the **Left Arrow**
6. Use the **double arrows **to add/remove all Outlets
7. Click **Save**

![rtaImage - 2023-07-08T185456.561.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTuxEAE.jpg)

## []()Synchronising inventory updates

Inventory levels will naturally fluctuate as products are sold both in-store and online. Changes to the Available stock quantity will automatically trigger a synchronisation from Retail Express to Shopify.

Manual adjustments to stock levels should be processed in Retail Express only. Any updates to the stock levels in Shopify will not be synchronised to Retail Express. The next time the product synchronises the stock levels will be overwritten to match the quantity in Retail Express.

**Important Note**: Editing the Inventory levels within Shopify is not supported.

### Retail Express-triggered updates:

Stock updates in Retail Express are automatically sent to Shopify for products that have been published online. For example, during day-to-day business the stock levels for products will be updated continuously as sales are made in-store.

Once a sale is processed it will go through the following process:

1. A **change in the stock** level is made to increase/reduce the Available stock
2. Retail Express **adjusts the "Available" quantity** for that product
3. The change in inventory triggers a task to be added to the **synchronisation** queue
4. The product is synchronised, and the web store **updated with the new stock level**

> **Note:** Event Driven Synchronisation - How to trigger a synchronisation.

### Shopify-triggered updates:

Shopify can also trigger updates to the stock levels in Retail Express via incoming sales:

1. A **sale** is made online
2. The order is **sent to Retail Express**
3. Retail Express **reduces the "Available" quantity** for that product
4. The change in inventory triggers a task to be added to the **synchronisation** queue
5. The **product is synchronised**, and the web store **updated with the new stock level**

## []()Selling out of stock products

On occasion you may wish to sell products regardless of stock levels, for example pre-orders or stock you can obtain from the supplier quickly.

Using the "Prevent Disabling" feature within Retail Express you can sell a product online, even when the quantity is zero or in the negatives. Prevent Disabling can be enabled either individually or for multiple products at a time.

#### [Enable Prevent Disabling for individual products](https://galaxy.maropost.com/kb/articles/167-managing-shopify-inventory-levels#individual-product)

To control this feature for individual products:

1. Log into **Retail Express**
2. Open the **Edit Product** window e.g. enter the Product PLU code into the search bar in the top right-hand corner of Back Office
3. Scroll to the **Advanced Options **section
4. Tick the **Prevent Disabling **check box
  ![rtaImage (16).gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppToXEAU.jpg)
5. Click **Save Changes**

#### [Enable Prevent Disabling for multiple products](https://galaxy.maropost.com/kb/articles/167-managing-shopify-inventory-levels#multiple-products)

To enable the option for multiple products:

1. Log into Retail Express
2. Navigate to **Inventory > Product Search & Management**
3. Use the **Filters **to search for products as required
4. Click **Search**
5. From the **Apply Product Edit Setting **select the Prevent Disabling option
6. From the **Apply To **option select All Search Results

> **Note:** You can also select to apply this setting to Core Products only

7. Click **Apply**
  ![rtaImage (17).gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTvCEAU.jpg)

Once the changes have been applied the page will refresh. Note the "PD" column for the products is now ticked - this is the Prevent Disabling column.

> **Note:** Hover over the column heading for an explanation of the column

![rtaImage - 2023-07-08T185512.939.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTvHEAU.jpg)

## []()Multiple Outlets and automatic Stock Transfers

With the Retail Express and Shopify integration you can elect whether you would like the stock for web orders to be fulfilled from a central location (the **Sales and Pricing Outlet**) or from a range of outlets (depending on the customer's location and any matching **Fulfilment Locations**).

You can select between the two by enabling or disabling the Fulfilment Groups setting within the Shopify Integration configuration area.

> **Note:** Refer to the Shopify - Order Fulfilment Locations article for more information about Fulfilment Locations.

If you elect to use a central location, Retail Express will automatically create stock transfers where inventory has been sourced from another Outlet and needs to be transferred back to the Sales and Pricing Outlet before it's dispatched to the customer.

To explain the stock transfers, in the following scenario there are 3 outlets listed in priority order:

Outlet A   -    0
Outlet B   -    2
Outlet C   -    3
**Total:           5 Available**

Two example orders below would cause the following Transfers to be created:

|  |  |
| --- | --- |
| **Order** | **Result** |
| Order quantity = 2 | - Outlet A increases the Allocated stock by 2 units - Stock Transfer created from Outlet B to Outlet A for 2 units - Outlet A would have -2 Available units - Outlet B would have 0 Available units  Once the Transfer has been received Outlet A would be updated to have 0 Available (the stock will remain in Allocated until the order has been Fulfilled). |
| Order quantity = 5 | - Outlet A increases the Allocated stock by 5 units - Stock Transfer from Outlet B to Outlet A for 2 units - Stock Transfer from Outlet C to Outlet A for 3 units - Outlet A would have -5 Available units - Outlet B would have 0 Available units - Outlet C would have 0 Available units  Once the Transfers have been received Outlet A would be updated to have 0 Available (the stock will remain in Allocated until the order has been Fulfilled). |

> **Note:** All transfers should be processed prior to completing the sale and dispatching any products to the customer. Refer to the article Stock Transfer Essentials for more information on processing Stock Transfers.