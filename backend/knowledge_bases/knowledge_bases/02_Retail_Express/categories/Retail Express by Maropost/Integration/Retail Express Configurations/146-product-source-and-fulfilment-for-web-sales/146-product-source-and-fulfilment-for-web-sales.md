---
title: "Product Source and Fulfilment for Web Sales"
articleID: 146
category: "Integration > Retail Express Configurations"
knowledgeBase: "Retail Express"
---

# Product Source and Fulfilment for Web Sales

You can configure source and fulfilment rules in **Retail Express** to control how online orders are processed across your multi-store operations, improving inventory efficiency and customer satisfaction. This feature helps optimize omnichannel retail operations by determining which locations fulfill web orders, managing stock allocation across sales channels, and enabling click and collect capabilities.

Setting up source and fulfilment configurations involves defining sales channels, source groups, and fulfilment priorities to match your business model. When properly configured, these settings help ensure accurate inventory allocation, reduce manual transfer work, and support efficient order processing across your retail network while maintaining appropriate stock levels at each location.

This article details some basic fulfilment concepts of Retail Express and then expands on these to explain how they relate to your web store sales and how online sales are Fulfilled and Sourced.

## []()Basic Fulfilment Concepts

These basic fulfilment concepts apply to *all* sales in Retail Express (not just web sales).

|  |  |
| --- | --- |
| Sales Location | The sales location is the Store (Outlet) to which the sale is attributed in your Retail Express reporting and through your accounting integration. |
| Fulfilment Location | The Fulfilment location is the store responsible for providing the item to the customer. This store will show the movement of the item out of the company inventory. |
| Fulfilment Methods | There are 4 methods:  - Cash & Carry - Layby & Pickup - Delivery - Warehouse Pickup  Refer to the article Inventory - Fulfilment Methods Overview for detailed information on each of these methods. |

## []()Web Store Fulfilment Concepts

#### [Sales Channels](https://galaxy.maropost.com/kb/articles/146-product-source-and-fulfilment-for-web-sales#collapseTwo)

**Version Note**: eCommerce API only (Shopify uses separate concepts).

Sales Channels are designed to allow you to configure certain options for each integrated webstore that may be connected to Retail Express. Sales channels determine:

- Sales Location - for web sales, this will always be the Primary Sales Outlet configured on your Sales Channel.
- Source Groups ? this allows you to determine which products are supplied through which stores and thereby controls the overall stock levels provided to the webstore.
- PO Threshold ? this allows you to use 'on-order' stock from Purchase Orders for the fulfilment of web store orders. If this value is not set, the system will default to seven (7) days.
- Depending on the configuration and whether a specific fulfilment location is sent from the web store (through customised API development) the Sales Channel "Primary Outlet" is the default Fulfilment Location (see the Fulfilment Location section below for more information).

For more information, please see:How do Sales Channels work?

#### [Click and Collect](https://galaxy.maropost.com/kb/articles/146-product-source-and-fulfilment-for-web-sales#collapseThree)

**Version Note**: eCommerce API only

A Click and Collect sale is processed to Retail Express with a Fulfilment Method of Pickup and the Fulfilment Location set to the Store (Outlet) selected by the customer.

Provided Click and Collect is enabled, the Fulfilment Location will be set to the location provided through the API and the Source will be chosen based on the Source groups.

For more information, please see:How does Click and Collect work?

#### [Fulfilment Location](https://galaxy.maropost.com/kb/articles/146-product-source-and-fulfilment-for-web-sales#collapseFour)

The concept of Fulfilment Locations differs depending on your version; select the appropriate version below to view more details.

#### [eCommerce API](https://galaxy.maropost.com/kb/articles/146-product-source-and-fulfilment-for-web-sales#fulfilment-magento-api)

> **Note:** Click and Collect must be enabled for the Retail Express database (contact support@retailexpress.com.au if you're unsure).
> In order for the Fulfilment Location to be configured, it must be specified by the web store to Retail Express. For example, when a customer places an order through Click and Collect the Fulfilment Location will be the Outlet from where the customer will be collecting the goods.
> Not specified: If the Fulfilment Location is not passed through the API, or Click and Collect is disabled, the Fulfilment Location will be the Default Fulfilment Location as configured in the Outlet Setup for the Sales Location - in this case, the Primary Sales Outlet of the Sales Channel.If the Outlet does not have a Default Fulfilment Location configured, the Sales Location will also be the Fulfilment Location.

#### [Shopify](https://galaxy.maropost.com/kb/articles/146-product-source-and-fulfilment-for-web-sales#fulfilment-shopify)

Using Fulfilment Groups you can create rules for which Outlets will be fulfilling web orders with customers in specific locations.

Retail Express will set the Source and Fulfilment Outlets depending on whether the customer's address matches any of the Fulfilment Groups configured within Retail Express (you can maintain this to create your own groups). If there's a match, it will select the highest priority outlet with Available stock to dispatch the products to the customer.

#### [Source Groups](https://galaxy.maropost.com/kb/articles/146-product-source-and-fulfilment-for-web-sales#collapseFive)

**Version Note**: eCommerce API only

Source groups determine:

**1. Which items are available on a sales channel**

To configure an item so that it is available on a Sales Channel, you must set the following options on the product edit page:

1. Enable the product for Export to Web Service
2. For each Sales Channel, set the Source Group to be used to supply the product

> **Note:** If an item is received through the API which is not part of the Source Group for the specified Sales Channel, it is ignored.  The item will not be added to the sale, nor will an error be thrown.

**2. The total stock available on the website**

The stock level that is exported as the Available quantity on the web is the total quantity available across all Stores (Outlets) in the Source Group.

**3. The Source Location of sales**

When the ?Source Group Priority? setting is *disabled - *the products will be sourced from the Fulfilment Location and staff are required to process stock transfers manually.

When the ?Source Group Priority? setting is *enabled - *the products will be sourced following the below priority order:

1. Fulfilment Location (see the previous section)
2. First Store in Source Group
3. Second Store in Source Group
4. etc

The item will be sourced from as many locations as required to fulfil the total quantity ordered.  The quantity that will be sourced from each location will be the Available quantity + On-Order quantity when the On-Order ETA falls within the PO threshold.

Example:

In this example, the available quantity to fulfil stock at this store would be 8.  3 from available stock and 5 that are arriving within the next 5 days.

Available Stock: 3
PO Threshold: 5 days
On Order:

- Quantity 5 ETA 3 days
- Quantity 10 ETA 7 days
- Quantity 50 ETA unknown

> **Note:** Any stock for pending sales will be allocated from the source group before new stock for new sales.  Therefore if the total Available stock for the source group is less than one (1) unit, any On-Order stock in the source group, will be used to bring the Available stock back to zero (0) before allocating to new sales created through the web store. If there is still no Available stock once all Purchase Orders are taken into account, the stock will be sourced in priority order, ie from the first store.

For example, if there are -10 available at the first store in the source group and 5 available at the second store, the total available for the source group is -5, if the total on order is 5 or less, the item will be sourced from the first store in the source group.

For more information, please see: How do source groups work? or you can click here to view the training video.

#### [Fulfilment and Source Flow Chart](https://galaxy.maropost.com/kb/articles/146-product-source-and-fulfilment-for-web-sales#collapseSix)

![rtaImage - 2023-07-09T003417.307.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppX5yEAE.jpg)