---
title: "Enabling Products for Web Store Integration"
articleID: 147
category: "Integration > Retail Express Configurations"
knowledgeBase: "Retail Express"
---

# Enabling Products for Web Store Integration

You can enable products for web store synchronization in **Retail Express**, streamlining your omnichannel product management by maintaining a single source of truth for inventory data. This feature helps improve operational efficiency by eliminating duplicate data entry, ensuring product information like pricing and stock levels automatically synchronize between your POS system and eCommerce platforms.

Setting up product synchronization involves configuring export settings and assigning appropriate sales channels and source groups to each product. When you enable products for web integration, you can expect reduced manual administration, improved pricing accuracy across channels, and better inventory visibility for your online customers.

Retail Express offers the ability to synchronise products through the eCommerce API into web store platforms ready for sale online. Using the eCommerce API, information already entered into Retail Express can be used to create the product, removing the need to re-enter the information.

Using Shopify? Click here for information on Publishing Products.

## Where to update information

There are specific pieces of product information **managed directly through Retail Express**. It is essential that any updates to these items are made within Retail Express, otherwise, the **changes online will be overwritten** during the next synchronisation.

For example, if you were to change the product price on your web store when the product is synchronised next the price would be reset to match Retail Express. The Retail Express system should be considered the "Point of Truth" where the list below is concerned.

### Maintained within Retail Express

- Stock Levels
- Product Prices
- Short Description (this is created as the "Name" of the product in your web store)
- Product Style Groups (using the ManufacturerSKU, there is another section of your Implementation Console dedicated to covering this process in more detail)
- Tax (applicable Y/N - actual tax rates are managed on the web store itself)
- Size
- Colour
- Product Type
- Brand
- Season
- Weight
- Prevent Disabling (whether to manage stock)

All of these can be edited individually product-by-product or through the Mass Download process.

### Maintained within the web store

- Additional product descriptions
- Product Images
- Product Categories
- Freight and Shipping Rules
- Payment Methods

## Enabling products for web

To enable the products for the web, you can do this either individually, or on a bulk basis, using either of the following methods:

### Individual

1. **Open the product** for editing within Retail Express
2. From the main tab, locate the **Web Service** section
3. Tick the **Export to Web Service** option
4. Highlight the appropriate **Sales Channel** in the left box
5. Highlight the appropriate **Source Group** from the right box
6. Click **Update**

![rtaImage (84).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powvnEAA.jpg)

### Bulk Products

1. Navigate to: **Inventory > Mass Download**
2. Follow the prompts to **download the spreadsheet** of the products within the database
3. For each product that you want to export, in the column **ExportToWebService** change the option to **True**
4. Each Sales Channel has it's own column; to select the appropriate Sales Channel and Source Group **enter the name of the Source Grou**p in the appropriate column.
5. **Save** the spreadsheet
6. **Upload** the file through the **Inventory > Mass Uploa**d method (ensure you have *unticked *the options "Update the Supplier SKU using the Product Id" and "Update Inventory").

![rtaImage (85).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powrYEAQ.jpg)