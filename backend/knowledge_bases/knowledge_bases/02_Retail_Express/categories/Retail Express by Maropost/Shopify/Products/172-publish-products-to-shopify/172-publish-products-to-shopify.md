---
title: "Publish Products to Shopify"
articleID: 172
category: "Shopify > Products"
knowledgeBase: "Retail Express"
---

# Publish Products to Shopify

You can publish products from **Retail Express** to your Shopify store, enabling seamless product synchronization and reducing manual data entry across your eCommerce integration. This feature helps improve operational efficiency by maintaining a single source of truth for product information while ensuring consistent product data across online and in-store retail channels.

Setting up product publishing involves configuring export settings, selecting appropriate sales channels, and establishing synchronization rules for product data. When properly configured, product publishing typically leads to reduced administrative overhead through automated synchronization, improved data accuracy across channels, and faster time-to-market for new products on your eCommerce platform.

Products are first created within Retail Express and then published to Shopify, using the Retail Express information to create the products online.

> **Note:** Synchronisation timeframes are limited by the Shopify API.

Products and inventory are synchronised separately, which means that when a product first appears on the Shopify store it may temporarily have no stock. This will be updated once the inventory for the product has been synchronised.

Once a product has been added to Shopify, further information can be uploaded to the product listing. This includes images, and categorising the products into a Collection.

More information on editing your Products in Shopify can be found within the [Shopify Help Centre](https://help.shopify.com/manual/products).

## []()Before you begin

Before publishing products to Shopify, care should be taken to ensure products have been configured appropriately:

- Should the products be grouped together e.g. as a single style, with size/colour selections
- Have all synchronised fields been populated correctly - product prices, size, colour, brand, short description

Products deleted from Shopify must be disabled/unpublished in Retail Express, otherwise they will be recreated in Shopify the next time a synchronised field is updated in Retail Express. Click here for information on unpublishing a product.

## []()Publishing and maintaining products

Products are synchronised using the "Publish to Shopify" process within Retail Express either individually through editing a single product, or for multiple products using the Mass Download/Upload process.

> **Important:** It's not recommended to use the Duplicate Product feature within Retail Express to use an existing product; this will create a duplicate Handle Within Shopify (the URL to navigate to the product).

### Publish a single product

**To publish a product to Shopify:**

1. Open the product for editing
2. On the **Main **tab scroll down and locate the new **Publish to Shopify** section
3. Tick the online store/s the product should be published to
  ![rtaImage - 2023-07-09T003851.147.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppX9MEAU.jpg)
4. Ensure the product **does not have Disabled ticked** (if the product is disabled it will not synchronise; untick the box if necessary)
  ![rtaImage - 2023-07-09T003855.737.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppUluEAE.jpg)
5. Click **Save Changes**
6. The product will be queued to synchronise to Shopify.
7. If the product is to be sold as a pre-order, follow the steps in Configuring Pre-Orders to enable the product for sale

> **Note:** There is an additional set of fields entitled Web that include detail such as Export to Web Service. These fields are not used for Shopify integration and should be ignored.

## Publishing multiple products

Retail Express offers a **Mass Download** feature to edit products en-masse. This can be used for managing products online, including: publishing products to Shopify, updating names and pricing updates.

**To Publish products to Shopify:**

1. Navigate to: **Inventory > Mass Download**
2. Use the filters to search for the required products
3. Click **Export to Excel**
4. **Open** the downloaded file in Microsoft Excel
5. On the **Product Master** tab locate the column "Shopify:abc" (where abc is the name of the store)
6. Enter a value of **True** for the product to be published
  ![rtaImage - 2023-07-09T003901.079.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppX9gEAE.jpg)
7. Ensure the **Disabled **column displays **False **(disabled products will not synchronise)
8. **Save** the file
9. Return to Retail Express, navigate to **Inventory > Mass Upload**
10. Click the **Upload Excel** tab
11. Click the **Browse For File** button and navigate to the saved file
12. Click **Upload**
13. The file will be uploaded and the products will be queued for synchronisation.
14. If the product is to be sold as a pre-order, follow the steps in Configuring Pre-Orders to enable the product for sale

More information on the Mass Download/Mass Upload feature can be found within the following articles:

- Create or Edit Products by Mass Upload and Mass Download
- [Perform a Mass Upload](https://ress.zendesk.com/hc/en-us/articles/216064177)

## **Publish from Product Search & Management Enhancement**

With the "Publish To Shopify" action, Users can now publish and unpublish products to the Shopify store directly from the Product search results. It helps users to publish/unpublish products once they are already updated in the Retail Express Systems.

1. Navigate to Inventory >> Product Search and Management
2. On the Search Page, Filter the Products that user wants to Publish
3. Click on **Search**
4. Result Page will show the filtered products
5. Select Publish dropdown from 'Publish to Shopify' option
6. Click on Apply

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240614at75818AM.05TJ1000004xsPTMAY.png)
Once the products are Published, users will see the notification "XXX rows updated"

## Common data configuration scenarios

Below you'll find some common data configuration scenarios, and how to set up the products in Retail Express.

[Display products online with size and/or colour drop-downs](https://galaxy.maropost.com/kb/articles/172-publish-products-to-shopify#cdc-attribute-dropdown)

![rtaImage - 2023-07-09T003909.121.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppX9qEAE.jpg)
To display a product with size/colour drop-downs, all the individual variations must be grouped together in Retail Express using a common Manufacturer SKU. This will create a "master" product on Shopify with all the individual products listed as variants.

Refer to the Shopify - Grouping products together (Matrix/Variable products) article for more information.

[Automatically assign products to collections/categories](https://galaxy.maropost.com/kb/articles/172-publish-products-to-shopify#cdc-auto-collection)

Shopify has the ability to automatically assign products to a collection (category) based on specific conditions. For example, an automated collection could be set up to display products with a matching vendor (brand). Whenever a product for that brand is added to Retail Express and published to Shopify the product will automatically appear within that collection.

![rtaImage - 2023-07-09T003913.977.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppXA0EAM.jpg)
Find more information see the Shopify Help Center article on[Automated Collections.](https://help.shopify.com/en/manual/products/collections/automated-collections)

[Products sent using Australia Post](https://galaxy.maropost.com/kb/articles/172-publish-products-to-shopify#cdc-products-auspost)

Australia Post automatically calculates shipping costs depending on the weight of the products. In order for this to work appropriately with the Retail Express integration, the following needs to be completed:

- Products must have a weight in Retail Express (this can be entered individually or en-masse using the Mass Upload process)
- The weight in Shopify must been configured to match the weight values entered against the products in Retail Express. For example, if the product has a value of "1" in Retail Express )(the equivalent of 1kg), then "Kilogram (kg)" should be selected on Shopify. Refer to the "Configure Shopify" section in the article "Shopify - Connect to Retail Express" for more information.

When the product is synchronised the weight value will be added to the product, and Shopify will assign the default weight unit accordingly. The Australia Post app will then be able to calculate the shipping rate for the product automatically.

![rtaImage - 2023-07-09T003919.045.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppXAFEA2.jpg)

## Frequently Asked Questions

If a product synchronisation hasn't occurred as expected, check the product doesn't match any of the below conditions.

[Disabled products won't synchronise](https://galaxy.maropost.com/kb/articles/172-publish-products-to-shopify#disabled-product)

If a product hasn't been created online, check whether the product is marked as Disabled or Enabled in Retail Express. Even if the product has been ticked to publish to Shopify, if the product is Disabled the product will not synchronise.

![rtaImage - 2023-07-09T003922.927.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppXAPEA2.jpg)
[Searching for Products integrated with Shopify](https://galaxy.maropost.com/kb/articles/172-publish-products-to-shopify#products-web-store)

To search for products integrated with your Shopify Store:

1. Navigate to **Inventory > Product Search & Management**
2. Click the **Refine Search **heading to expand the section
3. Use the **Sales Channels **filter to select your Shopify store
4. Use the remainder of the filters as required
5. Click **Search**

For more information refer to the Inventory - Product Search & Management article