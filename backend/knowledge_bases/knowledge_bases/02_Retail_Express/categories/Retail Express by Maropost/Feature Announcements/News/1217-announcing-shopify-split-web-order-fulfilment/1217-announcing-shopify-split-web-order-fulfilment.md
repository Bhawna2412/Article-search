---
title: "Announcing Shopify Split Web Order Fulfilment"
articleID: 1217
category: "Feature Announcements > News"
knowledgeBase: "Retail Express"
---

# Announcing Shopify Split Web Order Fulfilment

You can enable split web order fulfillment for Shopify orders in **Retail Express** to ship products from multiple locations when a single outlet cannot fulfill the entire order. This feature helps improve delivery speed and reduce stock transfers by allowing direct shipment from locations with available inventory, supporting faster customer delivery and more efficient multi-store operations.

Setting up split order fulfillment involves configuring fulfillment group settings to allow multi-location shipments. When properly enabled, split fulfillment typically leads to faster delivery times through direct shipment from multiple locations, reduced internal transfer requirements, and improved customer satisfaction through quicker order completion.

# Announcing Shopify Split Web Order Fulfilment

**Release Date:** 17th May 2021

We're excited to announce a new update to the Retail Express Shopify Integration, with support for Split Web Order Fulfilment! With this new feature you can::

- Split the fulfilment of a single order amongst multiple Outlets when needed
- Reduce the number of splits within an order or the need to transfer stock between Outlets
- Save on transportation costs
- Process online sales faster

Split fulfilment can be enabled per Fulfilment Group, so you can control when and where it's applied.

In this article:

- [What is Split Fulfilment?](https://galaxy.maropost.com/kb/articles/1217-announcing-shopify-split-web-order-fulfilment#what)
- [Using Split Fulfilment](https://galaxy.maropost.com/kb/articles/1217-announcing-shopify-split-web-order-fulfilment#using)
- [Examples](https://galaxy.maropost.com/kb/articles/1217-announcing-shopify-split-web-order-fulfilment#examples)

> **Note:** Use this feature in conjunction with the new Shopify Source and Fulfil Location optimisations

## []()What is Split Web Order Fulfilment?

When a sale is placed online, the Retail Express Shopify Integration begins an advanced calculation of the best location the stock should be dispatched from, factoring in information like the customer's address, and whether all stock can be fulfilled from a single location.

If the stock cannot be fulfilled from a single Outlet, Retail Express begins a process of transferring stock from different Outlets to one central location so that it can be combined together and shipped to the customer. While it's great the customer receives their order in one hit, there's several drawbacks:

- Higher shipping costs (due to the need to transport the stock multiple times)
- Slower delivery for the customer
- Increased load on staff to process stock multiple times

With Split Web Order Fulfilment enabled you can bypass all of this, reducing the number of Transfers, save shipping costs and dispatch the stock straight to the customer!

> **Note:** Split Web Order Fulfilment can be enabled/disabled per Fulfilment Group

## []()Using Split Web Order Fulfilment

To enable Split Web Order Fulfilment:

1. Navigate to **Settings > Integrations > Shopify > Edit your integration > Fulfilment Locations** tab
2. **Edit** your Fulfilment Group
3. Update **Fulfil from Multiple Outlets **to be "Enabled"
4. Click **Save**

![mceclip0 (10).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmHohEAE.jpg)

## []()Examples of Split Web Order Fulfilment

### Using Split Web Order Fulfilment to remove the need to Transfer stock

In this example we have two stores:

- Maroochydore
- Gold Coast

A customer places an order online for two pairs of shoes - a black pair (available at the Gold Coast outlet) and a blue pair (available at Maroochydore). The Fulfilment Location priority is as follows:

![mceclip2 (5).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmHp1EAE.jpg)
**Disabled Split Web Order Fulfilment:**

The order is received into Retail Express with the Source Outlets set as the Gold Coast and Maroochydore, and the Fulfilment Outlet of Maroochydore for both lines. In this case the staff will either need to edit the order to change the Fulfilment Location manually, or process a Transfer to send the stock to Maroochydore. If the stock is transferred:

1. Staff at the Gold Coast process a Transfer to send the shoes to Maroochydore
2. The shoes are shipped from Gold Coast to Maroochydore
3. The staff at Maroochydore receive the Transfer
4. The staff at Maroochydore then put both pairs of shoes together and dispatch it to the customer
5. The customer receives their order

As the stock is required to be transferred to Maroochydore, the staff end up double handling the stock - first to receive the Transfer, and again to dispatch the stock to the customer.![mceclip0 (11).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmHp6EAE.jpg)

**Enabled Split Fulfilment:**

With Split Web Order Fulfilment enabled, Retail Express receives the order and determines the Source Outlet to be Maroochydore and Gold Coast as per the previous example. However this time the Fulfilment Outlet is different for each line - the black shoe is fulfilled straight from the Gold Coast, and the blue shoe fulfilled from Maroochydore. This saves the staff from needing to manually intervene with the order to update the Fulfilment Location (since it's been calculated automatically), or transferring the stock between Outlets!

![mceclip1 (9).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmHpGEAU.jpg)

1. Staff at the Gold Coast send the stock to the customer
2. Staff at Maroochydore send the stock to the customer
3. The customer receives their order in two shipments

In this example, by enabling Split Web Order Fulfilment the Maroochydore staff only have to handle stock once, dispatching it straight to the customer. The company saves down on processing time and gets the stock to the customer days faster than it would have been if they had to wait for stock to arrive first from the Gold Coast.

### Disabling Split Fulfilment to prevent multiple International deliveries

There will be times when Split Fulfilment is not appropriate to be enabled. For example when there are Outlets located in multiple countries:

- Australia
- New Zealand

In this case it would be recommended to create separate Fulfilment Groups for each country, with Split Fulfilment disabled.

For example:

1. Customer in NZ places an order, stock is located in both Australia and New Zealand
2. Split Fulfilment is disabled for the New Zealand Fulfilment Group
3. Retail Express identifies the customer's address is in NZ
4. Stock from Australia is consolidated and sent to the NZ Outlet
5. Stock is shipped to the customer

**Remember: **Split Fulfilment is controlled by the setting in the Fulfilment Group matching the customer's address

If an order is received from a country where a Fulfilment Group doesn't match their address, the Default Fulfilment Group is used. In this case, it's best to have the Split Fulfilment option *Disabled.*

For example:

1. Fulfilment Groups exist for Australia and New Zealand (as above)
2. An order is received from a customer in America for stock located in:  - Brisbane
  - Sydney
  - Melbourne
3. The default Fulfilment Group is used with Split Fulfilment disabled (as there's no Fulfilment Group specified for America)
4. Transfers are created from Sydney and Melbourne to move the stock to Brisbane
5. Stock is sent to the customer in a single shipment from Brisbane to America