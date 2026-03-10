---
title: "Announcing optimised Shopify Source and Fulfilment"
articleID: 1218
category: "Feature Announcements > News"
knowledgeBase: "Retail Express"
---

# Announcing optimised Shopify Source and Fulfilment

You can benefit from optimized Shopify source and fulfillment logic in **Retail Express** to improve order routing efficiency and reduce unnecessary stock transfers. This enhancement helps streamline omnichannel operations by implementing smarter algorithms for determining which outlets should fulfill online orders, supporting faster delivery and better inventory utilization across your retail network.

Understanding optimized fulfillment involves learning about improved source selection logic, enhanced transfer reduction strategies, and better multi-location coordination. When you leverage these optimizations, you can expect improved fulfillment efficiency through smarter outlet selection, reduced internal transfers, and better overall performance of your omnichannel retail operations.

# Announcing optimised Shopify Source and Fulfilment

**Release Date:** 17th May 2021

In the past, the Inventory Locations list for Shopify was always used to determine the Source Outlet for the stock, regardless of the customer location and where the stock would be fulfilled from. This could cause problems like:

- More transfers created than necessary
- Higher shipping costs if the location selected was further away from the customer's location than another Outlet

With this new release you can control where the stock is sourced and fulfilled from for each Shopify Fulfilment Group!

In this article:

- ["Source From" Outlet selection optimisation](https://galaxy.maropost.com/kb/articles/1218-announcing-optimised-shopify-source-and-fulfilment#source-from)
- ["Fulfil From" Outlet selection optimisation](https://galaxy.maropost.com/kb/articles/1218-announcing-optimised-shopify-source-and-fulfilment#fulfil-from)

> **Note:** Use this feature in conjunction with the new Shopify Split Web Order Fulfilment

## []()"Source From" Outlet selection optimisation

Using the new feature, when an order is placed by a customer, Retail Express finds the best matching Fulfilment Group from the order and uses those Source From Outlets first, followed by the Default Fulfilment Group.

> **Note:** the Default Fulfilment Group always contains all Inventory Locations available to the Shopify integration (specified on the "Settings" tab)

1. An order is placed for a customer
2. The matching Fulfilment Group is found
3. The Source From Outlets in the matching Fulfilment Group are used first
4. The Source From Outlets in the Default Fulfilment Group are used second

Let's compare the Fulfilment Groups for Queensland and New South Wales.

![Custom Source From outlets.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmHk6EAE.jpg)
In this example we can see how by using the Custom Source By Outlets, we can change our preferred Source From Outlets depending on the location of the customer order.

- The custom "Source From" list takes higher priority than the Default Fulfilment Group (so your preferred Outlets come first)
- Outlets are only added once (if an Outlet exists in both groups it will not be listed twice)
- All Outlets in the Inventory List are added to the Default Fulfilment Group (the Inventory List can be found on the main "Settings" page of the Shopify Integration settings).

To source the stock for the Shopify order, Retail Express will then work through that list to determine the most appropriate Source Outlet.

To configure your Source From Outlets, you will need to edit your Fulfilment Locations in your Shopify Integration settings.

1. Navigate to **Settings > Integrations > Shopify > Edit > Fulfilment Locations > Edit a Fulfilment Group**
2. You will see the separate **Sourcing** and **Fulfilment** tables
3. **Update** the Outlets as required by using the left/right arrows to add/remove the Outlets
4. Modify the **Priority** of an outlet by using the up/down arrows
5. Click **Save**

![mceclip0 (9).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmHjVEAU.jpg)

> **Note:** At the time of release, any existing Fulfilment Groups will have an empty "Source From" list i.e. the Source logic used has not been changed. You will need to add your Source From Outlets to begin using the new logic.

## []()Fulfil From Outlet selection optimisation

We have also optimised how Retail Express selects the preferred "Fulfil From" outlet i.e. where the stock is dispatched to the customer. The goal is to reduce the number of Outlets used to fulfil the order, so there are less Transfers and the stock can be dispatched faster with less shipping costs.

To calculate where stock is dispatched from, the process now works as follows:

![Shopify Fulfilment Logic.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmHkLEAU.jpg)
To see this in action, let's use the Fulfilment Groups as per the example above. The stock levels are as follows:

|  |  |  |
| --- | --- | --- |
| **Outlets** | **Black Shoes** | **Blue Shoes** |
| Maroochydore | 0 | 0 |
| Kawana | 0 | 2 |
| Noosa | 1 | 2 |
| Warehouse | 1 | 2 |

### Scenario 1 - entire order fulfilled

A customer in Queensland places an order online for 1 black shoes and 2 Blue shoes.

Following the logic above:

1. The customer's location matches the Queensland Fulfilment Group
2. Noosa can both source and fulfil the stock completely
3. Noosa is selected as both the Source and Fulfilment Outlet

### Scenario 2 - Transfers required

A customer in Queensland places an order online for 2 black shoes and 4 Blue shoes.

Using the same stock levels and following the logic above:

1. The customer's location matches the Queensland Fulfilment Group
2. There is not a single Outlet (matching Fulfilment Group or Default Fulfilment Group) that can fulfil the entire order
3. Review the Outlets in the matching Fulfilment Group to see which one can process the highest number of items (remembering the Warehouse Outlet is part of the Default Group and not considered at this point):  - Maroochydore: 0
  - Kawana: 2
  - Noosa: 3
4. Noosa is selected as the Fulfilment Outlet
5. Transfers created to Noosa so the order can be fulfilled to the customer:  - 1 Black Shoe from Warehouse to Noosa
  - 2 Blue Shoes from Kawana to Noosa

**Pro tip: **You can use the Shopify Split Fulfilment feature to remove the need for Transfers altogether