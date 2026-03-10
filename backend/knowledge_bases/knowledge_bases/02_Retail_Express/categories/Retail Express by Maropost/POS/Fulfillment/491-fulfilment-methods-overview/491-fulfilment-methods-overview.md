---
title: "Fulfilment Methods Overview"
articleID: 491
category: "POS > Fulfillment"
knowledgeBase: "Retail Express"
---

# Fulfilment Methods Overview

You can support diverse customer delivery preferences through multiple fulfilment methods in **Retail Express**, which enable click-and-collect, home delivery, and in-store pickup workflows for flexible order completion. This omnichannel capability helps retail operators meet customer expectations and expand service offerings, with effective fulfilment method support typically improving customer satisfaction and supporting competitive positioning across Australian retail operations.

Fulfilment method configuration in **Retail Express** enables retail operators to offer various delivery and pickup options, helping ensure customer convenience and supporting modern retail expectations. This fulfilment flexibility helps ensure your retail operations can compete effectively in omnichannel retail while providing customers with convenient delivery options matching their preferences.

This article outlines the various fulfilment options available, including delivery, in-store pickup, and third-party integrations, enabling you to select the best approach for meeting customer needs while optimizing operational workflows.

Fulfilment methods allow you to control how the customer receives the products e.g. immediately (cash & carry) or delivery.

![mceclip0 (60).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppNpDEAU.jpg)

## []()Selecting a Fulfilment Method

The fulfilment method for products can be changed individually or in bulk for all products by clicking on either the shopping basket (for an individual line) or the Pencil icon (for all products).

![mceclip1 (42).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppNpSEAU.jpg)
You can also update the Fulfilment Method from the fulfilment tab. For detailed information on the functionality of this tab refer to the POS - Fulfilment Tab of a sale article.

![mceclip2 (27).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppNpcEAE.jpg)
When clicked, the Layby/Fulfil button (or the individual icons on a product row) will display the **Fulfilment Method **selection window. Which option you select depends on the type of sale your processing and how the products should be provided to your customer. The inventory will be adjusted depending on the method; see below for more detail on each method.

> **Note:** To select **Cash & Carry**, the sale will need to be set to **Process As - Sale**.

## Fulfilment Methods

### []()Cash & Carry

![pos_cashcarryicon (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppNphEAE.jpg)
By default every product added to a sale is set as the Cash & Carry method, unless the Default Delivery Mode has been modified (refer to the General POS Settings article for more information), or you have selected for the product/s to be processed as a Special Order.

|  |  |
| --- | --- |
| Type of transaction | The customer is paying for the product and taking the products with them (aka "carry"). |
| Effect on Inventory | Available stock: reduced |
| Payment limitations | 100% payment required |
| Order status | Processed |

### []()Layby & Pickup

![pos_laybypickupicon (2).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppNpmEAE.jpg)
The Layby & Pickup method should be selected if the customer is placing an order but is not receiving the products immediately.

|  |  |
| --- | --- |
| Type of transaction | Typically used for laybys/layway transactions. The customer is placing an order but not yet taking possession of the product. |
| Effect on Inventory | Available: reduced Allocated: increased The product is no longer available to sell to other customers, but has been "allocated" to the customer. As the product remains physically in the Outlet as stock on hand (SOH) and needs to be accounted for the Allocated amount increases. When the customer collects the product the Allocated amount reduces. |
| Payment limitations | Minimum deposit required - configurable in POS Settings - Order Settings |
| Order status | Order will remain as "Awaiting Payment" until fully paid |

### []()Delivery

The **Delivery** method is used when you plan to deliver the product to the customers nominated delivery address.

![pos_deliveryicon (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppNpTEAU.jpg)

> **Note:** Retail Express has a Fulfilment Report that allows you to report on products that are awaiting Fulfilment. This report has a large number of filters that can be used to refine the results, including Payment Status to see all orders paid in full. This report is commonly used for tracking the dispatch of products to customers e.g. a warehouse processing online sales.

|  |  |
| --- | --- |
| Type of transaction | Commonly used for:  - Bulky goods retailers - Orders placed over the phone - Online orders - Selling at an Exhibition, Trade Show or Kiosk |
| Effect on Inventory | Available: reduced Allocated: increased The impact is similar to the layby in that the Available stock is reduced and the Allocated stock is increased. Once the product has been sent for shipment and left the Outlet the Allocated stock is reduced. |
| Payment Limitations | Minimum deposit required - configurable in POS Settings - Order Settings |
| Order status | Order will remain as "Awaiting Payment" until fully paid |

### []()Warehouse Pickup

Warehouse Pickup is used where the customer will be collecting the product from the warehouse stock location.

![pos_warehouseicon (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppNpwEAE.jpg)

> **Note:** When Warehouse Pickup is selected the **Source Location **will need the Warehouse to be selected on the Fulfilment Tab.

|  |  |
| --- | --- |
| Type of transaction | Typically used when the customer will be collecting the stock from the warehouse |
| Effect on Inventory | Available: decreased Allocated: increased The Available stock is reduced and the Allocated stock is increased. Once the product has been sent for shipment and left the Outlet the Allocated stock is reduced. If the sale has been processed at an Outlet separate to the Warehouse this will:  - Reduce the Available stock at the Warehouse - Increase the Allocated stock at the Warehouse - Have no impact on stock levels at the Outlet where the sale was processed |
| Payment Limitations | Minimum deposit required - configurable in POS Settings - Order Settings |
| Order Status | Order will remain as "Awaiting Payment" until fully paid |