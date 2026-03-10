---
title: "Display the Cheapest Shipping Option to Customers"
articleID: 1617
category: "Set up Neto > Shipping > Maintenance & Tweaks - Shipping"
knowledgeBase: "Neto By Maropost"
---

# Display the Cheapest Shipping Option to Customers

Presenting customers with too many shipping options can lead to a negative shopping experience and cart abandonment. To alleviate this, Neto allows you to group your shipping options together into "routing groups" to show the lowest cost shipping option. You can also group the options into categories such as standard and express, to offer customers the cheapest option of several services.

Once set up, only the cheapest option from all the shipping options in the group will be displayed at checkout. Options not in a group will display as normal, provided that they are set to be visible on the site and that the order meets all shipping requirements (item can be shipped by the service, to the location, etc).

## Add Routing Groups

To add routing groups to your shipping options:

1. In your Neto control panel navigate to **Settings & Tools** > **Shipping**.
2. Click on **Shipping Options**.
  On this page is a **Routing Group** column which shows the allocated group of each option. By default, these will all be blank.
3. Click on one of the shipping options that you want to be grouped to edit it.
4. Enter a **Routing Group** number or name. Any alpha-numeric value can be used, but all options that you want in the same routing group must be identical.

> **Important:** To ensure that the cheapest option is shown, set the **Sort Order** field to **0**. This gives each option an equal priority, so that the cheapest option displays to your customer. To override this, [see below](https://galaxy.maropost.com/kb/articles/1617-display-the-cheapest-shipping-option-to-customers#result).

5. Click the **Save** button, and repeat for any other options.

Now test your website by adding a product to your cart and checking which shipping options display. You should only see one shipping option per routing group.

## Sort Orders in Routing Groups

The sort order field can force the display a more expensive shipping option to a customer, even when it is part of a routing group. The scenario below gives you an idea of when this might be needed.

### Scenario

> You have three regular shipping options, and to make checkout simple for customers, you only want to display one. You wish to primarily use Courier at all times, however it only services your local area.
> When Courier is not available, the second choice Freight needs to be selected, which delivers to the whole country, but not internationally.
> If neither options are available to a customers address, it should default to Standard Post, which has worldwide shipping.
> You also have two express options (Overnight and Next Day), but neither is preferred, so you just want to display the cheapest option to customers.

To meet these requirements, the routing groups and sort order could be configured to match the table below.

| Shipping Option | Service Area | Routing Group | Sort Order |
| --- | --- | --- | --- |
| Courier | Local | 1 | 1 |
| Freight | National | 1 | 2 |
| Standard Post | International | 1 | 3 |
| Overnight | National | 2 | 0 |
| Next Day | International | 2 | 0 |

> **Note:** Shipping option sort order works in **ascending** order. The option with the lowest number will be displayed first.

### Result

A local customer will see **Courier** (routing group 1) and the cheapest out of **Overnight** and **Next Day** (routing group 2) in checkout.

A customer outside of the local area, but in the same country will see **Freight** (routing group 1) and the cheapest out of **Overnight** and **Next Day** (routing group 2) in checkout.

An international customer will see **Standard Post** (routing group 1) and **Next Day** (routing group 2) in checkout.