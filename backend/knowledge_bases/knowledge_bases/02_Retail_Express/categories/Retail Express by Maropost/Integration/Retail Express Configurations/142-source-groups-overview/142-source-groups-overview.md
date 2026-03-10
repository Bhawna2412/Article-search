---
title: "Source Groups overview"
articleID: 142
category: "Integration > Retail Express Configurations"
knowledgeBase: "Retail Express"
---

# Source Groups overview

You can configure source groups in **Retail Express** to control exactly where your online orders are fulfilled from, improving inventory management and customer satisfaction across your multi-store operations. This feature helps optimize stock availability by defining fulfillment hierarchies, ensuring web store inventory is sourced efficiently from warehouses or retail locations based on your business priorities.

Setting up source groups involves defining which outlets contribute inventory to your eCommerce channels and in what order products should be sourced. When properly configured, source groups help ensure smooth omnichannel operations by preventing stockouts, enabling automatic transfer workflows, and maintaining accurate inventory availability across all sales channels.

> **Important:** eCommerce API

Source Groups allow you to control exactly where your products are sourced from when they're sold online.

For example, you may have a warehouse that is purely for web store inventory and not your Retail outlets. Using source groups you could ensure the web store stock comes from the warehouse first, and only if sold out there it can be sourced from individual Retail stores. Your Retail stores will continue to operate as normal with their own inventory.

> **Note:** Source Groups do not apply for the Shopify Connector (rules for sourcing/fulfilling stock is controlled within the Shopify Integration settings).

Source groups can also be used to calculate the estimated time of arrival (ETA) by factoring in any incoming Purchase Orders, as well as creating automatic Internal Transfer when products need to be transferred between stores as a result of a sale placed online (please note these Transfers will need to be processed manually as part of processing online sales).

Once a source group has been created, you will be able to select the source group for your site via the Sales Channel (refer to the article on Sales Channels for more information).

## Source Group Rules

- Each source group can have multiple products
- For an individual product, only one source group can be selected for each sales channel (for example, for Sales Channel A, source group A may be selected, but for Sales Channel B a different source group may be selected). This typically only applies for customers running multiple web sites from their Retail Express database.
- The same outlet may be selected in multiple source groups
- Outlets can be ordered in a hierarchy to control from which outlets the products are taken first

In the example below, the website has been set up to have the Sales Channel "Channel A", with the source groups "Source Group A" and "Source Group B" selected.

> **Warning:** Products will not synchronise without at least one Sales Channel and Source Group.

![rtaImage (83).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi2HEAQ.jpg)

|  |  |
| --- | --- |
| One Source Group | Best used where there is a single outlet, or multiple outlets with a specific order priority but all products follow the same pattern e.g. take from store A first, then store B, then store C and so on. |
| Multiple Source Groups | Where there are products that are not available in specific outlets or should be sourced in a different order from other products, you can set up a source group to control the outlets the products are available from. Bulky products are a great example of this, where they can only be sourced from specific warehouses and not individual retail stores. |

## Edit Source Groups

Source groups are maintained via **System Settings > Locations/Outlets > Source Groups**.

## Example Scenarios

The below scenarios provide examples of how source groups can be used:

> **Note:** If you have multiple different websites, these would first be set up with their own individual Sales Channel assigned to different source groups.

|  |  |  |
| --- | --- | --- |
| **Scenario** | **Configuration** | **Example** |
| All products are available from one outlet | Single Source Group with the Outlet assigned to that Source Group.  All products assigned to the source group. | All products are available from a single store that also services the website. |
| All products are available from multiple outlets | Single Source Group with all Outlets assigned to the Source Group.  All products assigned to the source group. | Store has two outlets, Brisbane and Mooloolaba. All products are available from both stores and can be sourced by the web store. |
| Some products available from one outlet, other products not synchronised to the web store. | Single Source Group with the Outlet assigned to that Source Group.  Only required products assigned to the source group. Other products not set to Export to Web and not assigned to a Source Group. | The business only synchronises a limited range of products to the web store, from Mooloolaba only.  A Source Group is created with the Mooloolaba outlet only (not Brisbane). Only the Products that are synchronised with the web store are configured and assigned that Source Group. |
| Some products available from multiple outlets (same outlet for these products) | Single Source Group with multiple Outlets assigned to the Source Group.  Only required products assigned to the source group. Other products not set to Export to Web and not assigned to a Source Group. | The business only synchronises a limited range of products to the web store, from both Brisbane and Mooloolaba. A Source Group is created with the both outlets. Only the Products that are synchronised with the web store are configured and assigned that Source Group. |
| Some products available from Outlet A, some products available from Outlet B | Separate Source Groups:  - Source Group 1 has Outlet A assigned - Source Group 2 has Outlet B assigned  Products are assigned to the appropriate Source Group based on where they're available from | The business has a warehouse set up in Brisbane that handles bulky goods e.g. Furniture. The store in Mooloolaba handles smaller products. The web store sells both products online. Source Group 1 is configured to have the Brisbane Outlet. Source Group 2 is configured to have the Mooloolaba Outlet.  Products are assigned to either Source Group 1 or Source 2 based on whether they're bulky or not. The Sales Channel has both Source Groups assigned. |
| Some products should come from Outlet B first, and then A. Some products should come from Outlet A only. | Separate Source Groups:  - Source Group 1 has Outlet B assigned first, then Outlet A - Source Group 2 has Outlet A only  Products are assigned to the appropriate Source Group based on where they're available from | The business has a warehouse set up in Brisbane that handles bulky goods e.g. Furniture. The stores have some bulky goods in stock, but prefer the web store to take it from the warehouse first so that store stock is mainly used by customers shopping in-store. The store in Mooloolaba handles smaller products. The web store sells both products online. Source Group 1 is configured to have the Brisbane Outlet first, and then Mooloolaba. Source Group 2 is configured to have the Mooloolaba Outlet only.  Products are assigned to either Source Group 1 or Source 2 based on whether they're bulky or not. The Sales Channel has both Source Groups assigned. |