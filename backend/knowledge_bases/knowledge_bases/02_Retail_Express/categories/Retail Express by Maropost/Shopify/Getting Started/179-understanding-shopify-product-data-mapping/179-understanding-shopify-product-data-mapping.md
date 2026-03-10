---
title: "Understanding Shopify Product Data Mapping"
articleID: 179
category: "Shopify > Getting Started"
knowledgeBase: "Retail Express"
---

# Understanding Shopify Product Data Mapping

You can understand how product data maps between **Retail Express** and Shopify to ensure accurate product information management and prevent synchronization conflicts. This knowledge helps optimize your eCommerce product data strategy by clarifying field relationships, synchronization hierarchy, and data ownership between systems, supporting consistent product presentation across retail channels.

Understanding product data mapping involves reviewing field relationships, synchronization rules, and data transformation logic between systems. When you understand these mappings, you can expect fewer data conflicts, more predictable synchronization behavior, and better planning for product information management across your integrated retail platforms.

The Mapping feature allows Shopify products to be matched with products in Retail Express. Once connected, the data can begin to synchronise from Retail Express to update inventory, pricing and more. During this process, you'll be able to check your data ("Data Validation") and make any corrections, prior to finalising the synchronisation and the mapping process.

|  |  |  |
| --- | --- | --- |
| Shopify Data Mapping series |  |  |
| What is Data Mapping? | Preparing your products | Step-by-step User Guide |

## []()Before you begin

There are some important considerations regarding the mapping process:

- **Review your products **- there are very **specific requirements on how the****products should be configured**. It's important that you review the article Shopify - Preparing your products for Data Mapping/Validation beforehand - including both Shopify and Retail Express.
- **Third party apps - **Retail Express does not accept responsibility for any data used by third-party Shopify apps. These apps may not be compatible with the Retail Express Shopify Connector, and should be tested by your company after the mapping process has been completed to ensure they work as expected.

> **Note:** The Mapping feature is only available the first time the Shopify synchronisation is enabled (future products should be created in Retail Express first and synchronised to Shopify). If you need to re-map your products you will need to delete the integration and reconnect the two systems.

## []()What is Data Mapping?

Once you have connected Retail Express and Shopify, new products are first created within Retail Express then synchronised to create new products online. However, you may already have products in your Shopify store - products with existing information you want to keep.

That's where the Retail Express Shopify Connector Mapping Tool comes in.

Mapping is the process of matching related information from your Shopify products to related information on your Retail Express products.

- The Connector product mapping is performed based on the SKU
- The SKU field in Shopify is matched to the Supplier SKU in Retail Express
- Products are connected and synchronised from that point on

## []()How products are matched

The Supplier SKU (Stock Keeping Unit) in Retail Express is a unique identifier assigned to each product, usually a scannable barcode or other unique number or code provided by the Supplier.

In Retail Express, the **Supplier SKU must be unique**, you cannot duplicate it or copy it to another product. This makes it a perfect candidate to be used for mapping individual inventory products.

If the SKU doesn't exist in Shopify a new product will be created instead.

## []()Data Validation Process

![rtaImage - 2023-07-10T033030.176.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphQxEAI.jpg)

|  |  |
| --- | --- |
| **Phase** | **Details** |
| Minor Validation | In the Minor Validation phase you will be able to connect Retail Express and Shopify and perform an initial Data Validation file. This file will match products based on their SKUs and confirm whether they're prepared to synchronise between both systems. A list of errors are provided, along with Retail Express resources to identify methods of resolution. Once these errors are resolved, the data is re-validated. |
| Major Validation | In the Major Validation phase Retail Express completes a more in-depth validation to identify more challenging data scenarios. The support team will provide details on methods for resolution, and can provide additional validations & resolution suggestions as required.   > **Note:** Synchronisation should not occur at this point until all identified issues have been resolved. |
| Sync & Audit | The integration is enabled and the synchronisation begins. Once products have been mapped and synchronised, the data is reviewed to confirm that products to confirm the data has been synchronised correctly. Data is exported from Shopify for your records. |

## []()Data modified during the mapping process

There are some critical changes made during the synchronisation. It's important this is reviewed and adjusted as required once the synchronisation is complete.

|  |  |
| --- | --- |
| **Shopify data the Connector WILL modify** | **Shopify data the Connector will NOT overwrite** |
| - **All fields synchronised from Retail Express will be updated in Shopify** including Product Name, Price, Compare At Price etc. - **Products set as "Unavailable" will be set to "Available"** - once the products have been mapped and the synchronisation has been completed these will need to be manually reset to Unavailable. - During the synchronisation all relevant products are mapped first before the inventory levels are synchronised. This **may temporarily affect the inventory numbers** on your Shopify store. - Once the products have been mapped, the Supplier SKU can be changed in Retail Express and the updated SKU will be synchronised to Shopify | - Any field not explicitly synchronised from Retail Express - The Handle - The SEO Title (if configured to not be overwritten) |

|  |  |  |
| --- | --- | --- |
| Shopify Data Mapping series |  |  |
| What is Data Mapping? | Preparing your products | Step-by-step User Guide |

## []()Frequently Asked Questions

[Can I trade with my online store while I am mapping my data?](https://galaxy.maropost.com/kb/articles/179-understanding-shopify-product-data-mapping#trading-while-mapping)

While you're preparing your data for the mapping process it's fine to continue trading.

However, directly before you begin the mapping and synchronisation process we highly recommend you put your Shopify store into [Password Protection](https://help.shopify.com/en/manual/using-themes/password-page) mode (subsequent synchronisations will not require this mode). As per the "How the Connector Maps your Products" section above, there are some critical impacts during the synchronisation that affect your store:

- **Unavailable products will be set to Available** (you will need to manually change these products back to Unavailable after the synchronisation is complete). Exporting your product data before running the Mapping process will help you to identify these products.
- **Inventory level updates are delayed**. Retail Express first maps the products and then updates the inventory levels, this can temporarily affect the inventory numbers on your store.
- **Synchronising and Mapping your data can take a long time**. On average 1000 SKUs can take about 1.5 - 2 hours to fully synchronise.