---
title: "Sales Channels overview"
articleID: 143
category: "Integration > Retail Express Configurations"
knowledgeBase: "Retail Express"
---

# Sales Channels overview

You can configure sales channels in **Retail Express** to manage multiple eCommerce stores with different pricing, inventory, and fulfillment rules from a single system. This feature helps improve retail operations efficiency by allowing you to control which outlets receive online orders, what prices apply to each web store, and how inventory is allocated across different sales channels.

Setting up sales channels involves defining primary sales outlets, assigning source groups, and configuring pricing strategies for each eCommerce integration. When you configure sales channels properly, you can expect better visibility of multi-channel sales performance while maintaining control over inventory allocation and pricing across all your online retail operations.

> **Important:** eCommerce API

Sales Channels are used to instruct the web store:

- Which outlet should the sales be entered against
- What prices should apply to products
- What source groups control the inventory for this integration

The best use of this is when you have multiple web stores all connected to the same Retail Express database. Using Sales Channels, you can specify a particular outlet for your sales to be entered against so that you have visibility of the sales from each website. You can also maintain different pricing for each store, and different inventory levels by picking and choosing various source groups.

All of this is completed through a Retail Express feature where the user combines their Source Groups into "Channels".

## Primary Sales Outlet

For each channel and its associated outlets, you will need to set one outlet to receive orders into and base web store pricing from. This outlet is known as the **Primary Sales Outlet**.

## Assigning Source Groups

Assigning one or more **Source Groups** to the Sales Channel will allow the user to control which outlets contribute their stock count to the channel's available stock i.e. how many products are available to sell online.

![rtaImage (82).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphmYEAQ.jpg)

## Example Configurations

### Single outlet

- 
- 

### Multiple stores with Warehouse

A retailer with multiple stores and a warehouse would like all web store sales to be entered into the warehouse for processing, but the stock from their stores should be included for sale online as well.

- 
- 

### Multiple stores and a Warehouse with some products being warehouse-only

A retailer with multiple stores and a warehouse would like all web store sales to be entered into the warehouse for processing. They have bulky products that can only be shipped from the warehouse (although the stores sell them, the Retailer doesn't want to ship from there). They do have smaller objects, that can come from either the warehouse or the smaller retail stores.

- One **Sales Channel** with the Warehouse as the **Primary Sales Outlet**
- Two **Source****Groups**, one for the Bulky Products, and one for everything else. All bulky products are associated to the bulky source group only, other products to the other source group
- The sales channel will have both source groups selected