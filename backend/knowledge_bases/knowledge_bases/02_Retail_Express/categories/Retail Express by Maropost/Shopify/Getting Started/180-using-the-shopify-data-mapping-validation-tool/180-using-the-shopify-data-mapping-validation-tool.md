---
title: "Using the Shopify Data Mapping validation tool"
articleID: 180
category: "Shopify > Getting Started"
knowledgeBase: "Retail Express"
---

# Using the Shopify Data Mapping validation tool

You can use the Shopify data mapping validation tool in **Retail Express** to identify and resolve product data issues before they cause synchronization problems on your eCommerce store. This tool helps improve data quality and reduce launch complications by validating product configurations, identifying missing required fields, and highlighting potential synchronization issues before products go live online.

Using the validation tool involves running data quality checks, reviewing validation reports, and addressing identified issues systematically. When properly utilized, this tool typically leads to smoother Shopify launches, fewer product synchronization errors, and better overall data quality across your eCommerce integration.

The Retail Express Shopify Connector includes a Data Validation service that will check your products and compare the products in both systems. When you first connect Retail Express to Shopify, a check will be done to confirm if products already exist on the Shopify store. If products exist, you will be prompted to download a Validation File.

|  |  |  |
| --- | --- | --- |
| Shopify Data Mapping series |  |  |
| What is Data Mapping? | Preparing your products | Step-by-step User Guide |

The validation process can be completed multiple times (so you can make sure your data is correct before you synchronise), however once the integration has been enabled and your products have been synchronised the Data Mapping service will no longer be available.

> **Note:** The Product Mapping tool only checks for the most common scenarios, and should not be considered as an end-to-end validation tool. It's essential that you manually review your products prior to enabling the integration and synchronising your data. Retail Express does not take responsibility for any data that may be configured incorrectly.

## []()Downloading the Data Validation file

To access the Data Validation file you must first have connected Retail Express and Shopify together. Once connected, Retail Express will be able to access the product information on Shopify to compare the products and produce the validation file.

> **Note:** As part of this process you will be clicking the Enable button, however you should not confirm you are ready to synchronise the products until you have resolved any mapping errors. Mapping products can only be performed once.

1. Within Retail Express navigate to **Settings > Integrations > Shopify**
2. Click the **pencil icon **to edit the integration
3. Click **Enable Integration **(blue button in the bottom left-hand corner of the window)

> **Important:** Do not click Confirm and Sync on the following window. You are just prompting the Data Validation, and not synchronising your products yet.

4. Click **Download**
  ![rtaImage - 2023-07-10T051039.335.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjVBEAY.jpg)
5. Click **Start Processing**
  ![rtaImage - 2023-07-10T051043.645.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppixxEAA.jpg)
6. The system will begin processing the data - note this can take a few minutes.
7. Once complete click **Download File**
  ![rtaImage - 2023-07-10T051052.193.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjmpEAA.jpg)
8. A zip file will be downloaded
9. Click **Close**
10. Click **Cancel **to return to the Shopify Integration window

> **Important:** Do not click Confirm and Sync (otherwise your products will be mapped and synchronised; this process cannot be repeated).

Once your products have been modified to resolve any errors, follow the steps above to re-validate the data. You can re-validate your products multiple times until you are ready to synchronise and map your products.

**Reminder:** the Product Mapping process can only be run once.

**Ready to synchronise your products?**

When you are ready to synchronise and map your products follow the instructions in the Shopify - Enabling the Integration article.

## []()Using the Data Validation File

To use the Data Validation file, open the file downloaded in the previous section.

The validation file is separated into three sections:

- Shopify Products
- Retail Express Products
- Mapping Status

![rtaImage - 2023-07-10T051057.624.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjmuEAA.jpg)*Example of a Shopify Validation File*

To use the validation file:

1. **Open **the file
2. Click **Enable Editing**
3. **Resize** the columns by hovering over the side of the column to view the resize icon and clicking and dragging to the new position
  ![rtaImage (18).gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjn4EAA.jpg)
4. Click on the **Mapping Status **heading
5. Click **Sort & Filter**
6. Click **Filter**
  ![rtaImage - 2023-07-10T051108.185.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjQvEAI.jpg)
7. A **drop-down** box will appear, click the box to view the available filters
8. **Tick** only the box that to be reviewed e.g. Rex Only - Unpublished
  ![rtaImage - 2023-07-10T051112.819.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphlUEAQ.jpg)
9. Click **OK**
10. The results will be filtered accordingly
11. Follow the information below on the Mapping Status to begin troubleshooting the changes to be made to your products

## []()Validation File - Mapping Status

The Mapping Status column provides an indication of what to expect when the matching process is run. For example, if a product displays "Match - Published" it indicates that a match has been made between Retail Express and the product has been published. During the mapping process this product will be connected, and any future changes made in Retail Express will update the corresponding product on Shopify.

**Reminder: **During the synchronisation data is sent **from Retail Express to Shopify**. Products in Retail Express should be updated with the appropriate information (name etc) or if required, codes changed to avoid products being matched incorrectly.

See below for an explanation of each status.

|  |  |  |
| --- | --- | --- |
| **Status** | **Details** | **Synchronised?** |
| Match - Published | A product that exists on Shopify has a matching product in Retail Express. As the product has been set to Published, when the first synchronisation takes place these products will be connected, and the data from Retail Express will be used to update the product in Shopify. Compare the Shopify Product Title and the Retail Express Short Description. If this doesn't appear to be the same product you should update one of the product SKUs on either system to avoid incorrect changes being applied. | Y |
| Match - Unpublished | The product exists on both Shopify and Retail Express, however the product has not been marked as Published in Retail Express. For these two products to be matched the product will need to be marked in Retail Express as Published. | N |
| REX Only - Unpublished | The SKU in Retail Express could not be matched to a SKU on Shopify. The product is also not marked to be published, and will not be synchronised. If there is a product on Shopify that matches this product the SKU on Shopify will need to be updated to match Retail Express, or vice versa. The product will also need to be marked in Retail Express as Published. | N |
| REX Only - Published | The SKU in Retail Express could not be matched to a SKU on Shopify. The product is marked as published, so a new product will be created in Shopify during the first synchronisation. | Y |
| Shopify Only | The SKU in Shopify could not be matched to a SKU in Retail Express.  > **Note:** This can be caused by duplicate SKUs - check your products to ensure there are not multiple products with this code and adjust the products in Shopify as required.   This product will not be created in Retail Express. Any actions taken with this product online will not be synchronisation to Retail Express, including sales. | N |

|  |  |  |
| --- | --- | --- |
| Shopify Data Mapping series |  |  |
| What is Data Mapping? | Preparing your products | Step-by-step User Guide |

## []()Frequently Asked Questions

[How can I check if my existing Shopify product was mapped to a Retail Express product? ](https://galaxy.maropost.com/kb/articles/180-using-the-shopify-data-mapping-validation-tool#collapseFour)

Prior to the initial synchronisation taking place you can refer to the Validation File's "Mapping Status" column to confirm if the product will be mapped.

If the synchronisation has already taken place, you can use the "Fulfilment Method" section of Shopify to confirm the mapping status. Our Connector will set the Fulfilment Method of your products to "Retail Express". You can view this in your Shopify product variant screen or in your csv downloads in column ?Variant Fulfillment Service? (for help exporting your Shopify products, visit the [Shopify Help Centre](https://help.shopify.com/en)).

If the Fulfilment Method is not "Retail Express" the product has not been mapped.

![rtaImage - 2023-07-10T051120.376.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjnEEAQ.jpg)
[Do I need to map all products at once, even if they're not available/published on my store?](https://galaxy.maropost.com/kb/articles/180-using-the-shopify-data-mapping-validation-tool#map-all-products)

We recommend that you map all products at the beginning. Any unmapped products purchased by a customer will not synchronise to Retail Express. If you plan on keeping this product on your store and making it available in the future it's best to map it now so that it's ready when you need it.

The **mapping process can only be run once** when the integration is first enabled and won't be available to use later.

[How can I check my data is configured correctly before I synchronise and map my products?](https://galaxy.maropost.com/kb/articles/180-using-the-shopify-data-mapping-validation-tool#check-data)

To check your products:

1. Check the information above in the section "Preparing your Products" to ensure they meet the criteria for mapping products
2. Review the Shopify - Product Synchronisation article for the standard Retail Express published settings
3. Use the Data Validation File process above to confirm that your products exist on both Shopify and Retail Express and have the Mapping Status of "Matched - Published".

[Can I trade with my online store while I am mapping my data?](https://galaxy.maropost.com/kb/articles/180-using-the-shopify-data-mapping-validation-tool#trading-while-mapping)

While you're preparing your data for the mapping process it's fine to continue trading.

However, directly before you begin the mapping and synchronisation process we highly recommend you put your Shopify store into [Password Protection](https://help.shopify.com/en/manual/using-themes/password-page) mode (subsequent synchronisations will not require this mode). As per the "How the Connector Maps your Products" section above, there are some critical impacts during the synchronisation that affect your store:

- **Unavailable products will be set to Available** (you will need to manually change these products back to Unavailable after the synchronisation is complete). Exporting your product data before running the Mapping process will help you to identify these products.
- **Inventory level updates are delayed**. Retail Express first maps the products and then updates the inventory levels, this can temporarily affect the inventory numbers on your store.
- **Synchronising and Mapping your data can take a long time**. On average 1000 SKUs can take about 1.5 - 2 hours to fully synchronise.