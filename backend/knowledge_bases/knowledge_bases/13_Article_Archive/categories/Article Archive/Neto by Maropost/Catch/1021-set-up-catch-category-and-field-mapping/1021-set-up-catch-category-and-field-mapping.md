---
title: "Set up Catch Category and Field Mapping"
articleID: 1021
category: "Neto by Maropost > Catch"
knowledgeBase: "Article Archive"
lastUpdated: 2025-12-01
---

# Set up Catch Category and Field Mapping

### In this Article

- Overview
- Category Mapping
- Product Field Mapping

### Overview

Catch mapping is required if you want to list products on Catch, that don't yet exist in the Catch catalogue. To register products you will need to set up  your Catch category mapping and product field mapping. Both involve matching the data in your Maropost Commerce control panel to a Catch equivalent. The mapped fields will then be used to populate Catch automatically when you register products that aren't already in the Catch catalogue. Because some data required by Catch may not be entered on your products, you may need to create [custom product fields](https://galaxy.maropost.com/s/article/add-and-manage-products#10) to hold the data, and populate then with the [product import wizard](https://galaxy.maropost.com/s/article/product-import-wizard).

> **Note:** The mapping allows you to “set and forget” your Catch integration. New products can register automatically when you enter them into Maropost Commerce. You will only need to maintain the mapping when you add new product fields or categories.

### Category Mapping

Category mapping determines which Catch category your products will be registered in, based on the Maropost Commerce category. We recommend that you set up category mapping first.

1. 
  In your Maropost Commerce control panel navigate to **Catch** > **Category Mapping**.
2. 
  Select a Maropost Commerce category that you want to sell on Catch using the drop down menus, and click the **Add Category** button. You don't need to select every category level if a parent category matches a Catch category.

> **Note:** You can change the content type used for you category mapping in Catch > Settings under the Category Mapping section.

3. 
  The category will be added, and you can now select the corresponding Catch category it applies to. Top-level categories will reveal subcategories for you to choose from. Keep selecting categories down to the final level, as products cannot be listed in a Catch parent category.

  **Please Note**: The Catch categories in Maropost Commerce reflect what can be seen in the back end of Catch, not their front-end website.
4. 
  Click the **Use Category** button to add your mapping.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CategoryMapping.05T5g00000zfRDXEA2.png)
5. 
  Repeat these steps for each Maropost Commerce category you're selling in. Once complete, click the **Save** button.

**Please Note**: Catch regularly updates their categories. When they do, you will need to revisit this page to update your category mapping.

Now that all of your product categories have been mapped, you can move on to product field mapping.

### Product Field Mapping

Product field mapping is broken up into several parts based on Catch's requirements. You can select from product fields (including custom product fields), product specifics, or hard-coded values when you match them to the Catch fields.

> **Important:** Catch expects specific data for some product fields. Click the "i" icon to see what Catch is expecting, and any specific data will be displayed.

To map your product fields:

1. 
  In your Maropost Commerce control panel navigate to **Catch** > **Product field mapping**.
2. 
  You will see two main sections, **Product fields** and **Category specific product fields**, each with several subsections. Click on **Core** to expand the core fields which require mapping.
3. 
  Match up the core Catch fields to appropriate Maropost Commerce fields, or use the defaults already selected.

> **Note:** Catch uses logistic classes to calculate the shipping cost of orders. They must be set up in Catch. We recommend that you map the Logistic Class field to a custom product field (selection box) and populate your products with the logistic class names you've made in Catch. You can use either the full name or abbreviation. To see allowed values, click the 'i' icon.

4. 
  If you opted for manual barcode detection you will have 2 extra fields to map in the Core section, **Product Identifier** and **Product Identifier Type**.

  The product identifier must be mapped to a field that stores the product barcode (e.g. UPC, EAN), or MPN (manufacturer part number) value. For example, you may [create a custom product field](https://galaxy.maropost.com/s/article/add-and-manage-products#10) called Barcode, and populate it with the product barcode number for each product.

  The product identifier type describes what type of identifier the product has on it. If all of your products use the same identifier (e.g. UPC) you can choose **Type in a value** and then enter the identifier type. If you use a mix of different identifier types, you will need to [create a custom product field](https://galaxy.maropost.com/s/article/add-and-manage-products#10) or [item specific](https://galaxy.maropost.com/s/article/add-specifics-or-filters-to-a-product). You can then populate them individually, or in bulk using the [product import wizard](https://galaxy.maropost.com/s/article/product-import-wizard).

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CoreProductFields.05T5g00000zfQE6EAM.png)

  Click the **Save** button.
5. 
  Click **Product Discovery** and map the key product features to your product fields. If you intend to list variation products, ensure that the **Variant Colour Value** and **Variant Size Value** fields are mapped to the colour and size specifics correctly. To learn more about variations on Catch, see the [Catch Overview](https://galaxy.maropost.com/s/article/catch-overview#7) help article.

> **Note:** Colour refers to the base colour of the product, and Catch won't accept custom colour names. Click the 'i' icon to see a list of allowed values.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ProductDiscoveryFields.05T5g00000zfQj4EAE.png)

  Click the **Save** button.
6. 
  Click **Images** and map your product images to the Catch image fields. The defaults will be set, but you can change them to specific image fields.

  Click the **Save** button.
7. 
  Click **Offer** to map the selling dates, max order quantity and other fields.

  Click the **Save** button.
8. 
  You can now move into the **Category specific product fields** section. Each category has specific fields that are required or optional to help you enhance your product listings.

  Click on each product type and map any required fields.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CategorySpecific.05T5g00000zfPzgEAE.png)
9. 
  Repeat for each product type, remembering to click the **Save** button in each section.

**Please Note**: Catch regularly update their categories. When they do, you will need to revisit this page to update your product field mapping.

You've completed your product field and category mapping, and are now ready to register and list products on Catch. To choose which products you list, please follow the steps to [approve products for Catch](https://galaxy.maropost.com/s/article/approve-products-to-list-on-catch).

### Related Articles

- [Set up Catch](https://galaxy.maropost.com/s/article/set-up-catch)
- [Approve Products to List on Catch](https://galaxy.maropost.com/s/article/approve-products-to-list-on-catch)
- [Catch Overview](https://galaxy.maropost.com/s/article/catch-overview)