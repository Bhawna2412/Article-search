---
title: "Preparing for Shopify Product Data Mapping/Validation"
articleID: 181
category: "Shopify > Getting Started"
knowledgeBase: "Retail Express"
---

# Preparing for Shopify Product Data Mapping/Validation

You can prepare your product data for Shopify integration validation in **Retail Express** to ensure smooth synchronization and prevent common data quality issues. This preparation helps minimize launch complications by systematically reviewing and cleaning product information before enabling the integration, supporting a more successful eCommerce implementation with fewer post-launch issues.

Preparing for data mapping validation involves reviewing product configurations, cleaning data quality issues, and ensuring required fields are populated correctly. When properly prepared, this process typically leads to smoother integration launches, fewer synchronization errors, and better overall product data quality across your eCommerce platform.

**Version Note**: Retail Express Shopify Connector

It is essential that you review and cleanse your product data prior to the first synchronisation. For detailed information on configuring your products, see:Shopify - Product Synchronisation.

|  |  |  |
| --- | --- | --- |
| Shopify Data Mapping series |  |  |
| What is Data Mapping? | Preparing your products | Step-by-step User Guide |

## []()SKU Configuration

Products are matched in Retail Express and Shopify by their SKU, and as such should be reviewed prior to synchronisation to ensure they're configured correctly. SKUs can be found in Shopify as per below:

- **Individual product** - in the "Inventory" section of a product edit window
  ![rtaImage - 2023-07-08T235515.356.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWSYEA2.jpg)
- **Variant products: **In the Variants table for each individual variation
  ![rtaImage - 2023-07-08T235520.005.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWTzEAM.jpg)

You should review your product SKUs to ensure they meet the following criteria:

> **Note:** If integrating with multiple Shopify stores it's essential that if the same product exists on multiple stores that the product shares the same SKU on each store.

|  |  |
| --- | --- |
| SKUs must **match** in both systems | Every product in Shopify will need a SKU that matches to a product in Retail Express. Products without matching SKUs will not be mapped, and any future orders of the product will not be synchronised to Retail Express |
| Every Shopify SKU must **exist** in Retail Express | Products without a matching SKU will not be created in Retail Express automatically. |
| Every Shopify SKU must be **unique** | If there are duplicates in Shopify the mapping tool will only map to the first product (all other products with the same SKU will not be mapped). |

## []()Products with Variants

Products that come in the same style but with different colours and sizes are referred to as Variant Products.

![rtaImage - 2023-07-08T235528.799.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWU9EAM.jpg)
These products will need to be configured in the following manner to ensure the products are mapped correctly.

|  |  |
| --- | --- |
| **Identical Manufacturer SKU** in Retail Express | ![rtaImage - 2023-07-08T235533.094.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWUJEA2.jpg) |
| Same **Attribute Configuration** | All published products in this group **must have the same attribute configuration **in Retail Express. For example, if one product has a size and colour, then all products must have a size and colour ![rtaImage - 2023-07-08T235537.664.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWSOEA2.jpg) |
| **No multiple** Manufacturer SKUs/Handles | One product handle in Shopify cannot have multiple Manufacturer SKUs in Retail Express. Likewise, one Manufacturer SKU cannot have multiple handles in Shopify |

## []()Other Important Settings

- Ensure the **names of the products and the attributes are "customer friendly"** in Retail Express. This information will overwrite the Title, Size, Colour, Vendor and Type in Shopify with the spelling in Retail Express. Any misspellings or typos should be corrected before the product is synchronised.
- **Products must be configured in Retail Express as Enabled and set to Publish****to Shopify** to be synchronised and mapped. Disabled products do not synchronise and therefore will not be mapped. If a disabled product is enabled at a later date and then published it will create a duplicate product on Shopify.

> **Note:** The Product Mapping tool only checks for the most common scenarios, and should not be considered as an end-to-end validation tool. It's essential that you manually review your products prior to enabling the integration and synchronising your data. Retail Express does not take responsibility for any data that may be configured incorrectly.

|  |  |  |
| --- | --- | --- |
| Shopify Data Mapping series |  |  |
| What is Data Mapping? | Preparing your products | Step-by-step User Guide |