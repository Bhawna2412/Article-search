---
title: "Using Packages with Shopify"
articleID: 169
category: "Shopify > Products"
knowledgeBase: "Retail Express"
---

# Using Packages with Shopify

You can sell product packages on Shopify using **Retail Express** package configuration, enabling bundled product sales and promotional sets across your eCommerce platform. This capability helps improve average transaction values by offering curated product combinations while simplifying inventory management for multi-item offerings across your retail channels.

Setting up package products involves creating package configurations in Retail Express and synchronizing them to Shopify with appropriate settings. When properly configured, package selling typically leads to higher average transaction values through bundled offerings, simplified inventory management for sets, and improved promotional flexibility across retail channels.

A Package is defined as a product that contains multiple components. A Package may also be known as a Kit or Bill of Materials.

Examples of Packages:

- Camping Kit: Tent, Sleeping Bag and Gas Burner
- Dining Suite Package: Six dining chairs and a table
- Nutrition pack: Protein powder, shaker and dietary guide

Packages are not the same as "Bundles" used commonly with eCommerce platforms

In Retail Express there are two types of packages:

|  |  |
| --- | --- |
| **Consolidated Group** | - Package is displayed in POS as a single Product - Package info is displayed - SKUs, description and price - Reports display details on the Package e.g. Sales Report |
| **Individual Products** | - Individual components displayed in POS and not the Package - Individual product information is displayed but price/discount for the package is applied across all products - Sales reported on the individual products |

## Package Synchronisation Features

|  |  |  |
| --- | --- | --- |
| **Feature** | **Consolidated** | **Individual** |
| Synchronise to Shopify | * * | * * |
| Package inventory is updated as individual components are sold | * * | * * |
| Buying package and synchronise order to Retail Express | Retail Express adds the package as a single Package product on the sale | Retail Express splits the package product into individual items added to the sale |
| Fulfilment synchronises to Shopify | * * | * * 			Not available, as individual package components do not match the order on Shopify (where the Package product is listed instead) |

## Packages Comparison

For this comparison imagine we have two packages. Both packages contain the exact same components, but one package is treated as consolidated while the other is treated as individual products.

### Sales Report

When the products appear on the Sales Report, the Packages will appear as follows:

- Consolidated: one single product
- Individual: components are separated into the individual products as a row on the sale

In the screenshot below you can see two sales, one of each package - note the difference in the products on each sale.

![rtaImage - 2023-07-10T044640.795.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiD8EAI.jpg)

### Fulfilment Report

The Fulfilment Report will list the products similarly to the Sales Report:

- Consolidated: one single product
- Individual: components are separated into the individual products as a row on the sale

In the Fulfilment Report screenshot below, the first row is the Consolidated Package, while the products under the orange line are the Individual Products Package.

![rtaImage - 2023-07-10T044654.022.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiVAEAY.jpg)

### Shopify Fulfilment

This is the main point of difference. Once products are fulfilled in Retail Express only the Consolidated Package will synchronise back to Shopify and fulfil the sale.

![rtaImage - 2023-07-10T044658.956.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjOsEAI.jpg)