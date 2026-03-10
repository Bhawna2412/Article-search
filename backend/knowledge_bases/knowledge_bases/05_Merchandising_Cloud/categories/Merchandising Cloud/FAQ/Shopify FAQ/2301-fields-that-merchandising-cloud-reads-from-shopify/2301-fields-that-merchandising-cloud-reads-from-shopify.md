---
title: "Fields that Merchandising Cloud reads from Shopify"
articleID: 2301
category: "FAQ > Shopify FAQ"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Fields that Merchandising Cloud reads from Shopify

There are 4 sources of data that Merchandising Cloud can read from Shopify to use as a filter/field: Default fields, Variant Options, Tags-Based Fields and Shopify Product Metafields.

# Default Fields

Merchandising Cloud loads a few fields from Shopify out of the box since they are marked as required in our system. Here is the list of these fields:

| Name in Merchandising Cloud | Name in Shopify |
| --- | --- |
| SKU | SKU of the variant |
| Title | Title of the product |
| Description | Description of the product |
| Price | Price of the variants |
| Category | Product Type |
| Brand | Product Vendor |
| Barcode | Barcode of the variant |
| Image_URL | Images of the Product |
| Tags | Product Tags |
| Quantity | Quantities of the variants (based on selected inventory locations) |

# Variant Options

All variant options that are set in Shopify will be loaded to Merchandising Cloud on the variant level, i.e. Color, Size, Material, etc.

Variant Options can be used to create custom filters: all you need to do is to populare the variants with Variant Options in Shopify and the custom field will be loaded by Merchandising Cloud.

# Tags-Based Custom Fields

### Steps to Add a New Tags-Based Filter:

1. Configure a tag so Merchandising Cloud can read it
2. Create a filter on Merchant Dashboard
3. Product Sync
4. Edit the Filters

### Step 1: Configure a tag so Merchandising Cloud can read it

If you wish to add information to the tag, you need to prefix this information with a common word. For instance, if you wish to add the "gender" information to a T-Shirt product, valid values would be:

- gender:Male
- gender:Female
- gender:Mixed
- gender:another value

### Step 2: Create a filter on Merchant Dashboard

After configuring the tags, you would need to go to our dashboard -> Setup -> Filtering, and click on 'Create Filter' button:

![Image](https://files.readme.io/bd3aff6-create_filter.png)
In the popup window, you would need to provide the prefix used in the tag setup, i.e. gender:, and the field name:

![Image](https://files.readme.io/ed8ba71-filter_setup.png)

### Step 3: Product Sync

After you complete the filter setup, you would need to perform a product sync, go to our [Merchant Dashboard](https://dashboard.findify.io/settings/product-sync)

![Image](https://files.readme.io/1693456-Product_sync.gif)

### Step 4: Edit the Filters

Once synced, you will be able to enable/disable and change the order of the filters in our [Merchant Dashboard](https://dashboard.findify.io/setup/filters)

![Image](https://files.readme.io/fce83de-filters.png)

> 📘 Variant Options or Tags?

> If a product has several variants and you wish to associate the filter at the variant level, then it makes more sense to add an *option*.
For instance, if you have 3 T-Shirts available in the colors "blue", "green" and "red", you will have to create 3 options "red", "blue" and "green". Here, you characterize the variant and associate the information at the variant level.

> On the other side, if you wish to add a filter on the product level (in case there are no options or if the filter applies to all options), then it makes more sense to add a *tag* associated with the product.

# Product Metafields

Merchandising Cloud has a feature to download product/variant metafields from Shopify.

Please, contact our support at [support@maropost.com](mailto:support@maropost.com) if you need to setup the metafields job.