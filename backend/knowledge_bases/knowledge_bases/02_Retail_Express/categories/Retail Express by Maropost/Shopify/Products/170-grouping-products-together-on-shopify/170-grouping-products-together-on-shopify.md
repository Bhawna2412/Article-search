---
title: "Grouping products together on Shopify"
articleID: 170
category: "Shopify > Products"
knowledgeBase: "Retail Express"
---

# Grouping products together on Shopify

You can group related products together on Shopify using **Retail Express** style matrix and manufacturer SKU functionality, improving product browsing and variant management on your eCommerce store. This feature helps enhance customer experience by presenting related products logically while streamlining product management and ensuring variant relationships are maintained correctly across channels.

Setting up product grouping involves configuring manufacturer SKUs and style matrices in Retail Express for synchronization to Shopify. When properly configured, product grouping typically leads to improved customer browsing experience, better product discoverability, and more efficient product variant management across your eCommerce operations.

You may have multiple products that come in multiple variations, such as sizes and/or colours. In these cases you can synchronise these products to your Shopify store in a group, creating one main "variant" product (the parent) with all the variations (available to select using size/colour drop-downs).

Grouping your products together is achieved easily within Retail Express using the **Manufacturer SKU** field.

![rtaImage - 2023-07-08T105235.065.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppO43EAE.jpg)
There are numerous benefits to grouping your products, including:

-   - Your customers can see available size/colour variations quickly and easily
  - Search and product pages aren't cluttered with the same product appearing repeatedly
  - You only have to maintain one product not multiple (for example with categories, images, descriptions etc)

## Before you begin

- Any product in Retail Express that does not have a Manufacturer SKU will NOT be grouped
- Any product that is grouped in Retail Express with a Manufacturer SKU, needs to have a unique size/colour variation. If there's a duplicate combination an error will be displayed during the synchronisation e.g. two products grouped together that are both size 10 in blue will not synchronise.

## []()Understanding Shopify Variants

When synchronising products grouped using Manufacturer SKU, your Shopify store will create the following products:

|  |  |
| --- | --- |
| Variable Product | The "parent" of the group, and the product that needs to be maintained. This is the only one that will be displayed to the visitors to your site. The Variable product will contain "Options" (the attributes i.e. size and colour) and Values (specific attributes for each option e.g. size 10, 12, colours red and green) |
| Variants | The individual product/s as per Retail Express, containing information on pricing and inventory levels. These products will be hidden from the from customers on the site (they will only see the Variable product with the Variant drop-downs). When the customer selects their size/colour options and adds the product to the cart, the Variant will be added, and the inventory for this unique product will be updated after the sale has been created. |

## []()Group Products in Retail Express

Products are grouped together in Retail Express using the Style Code, or Manufacturer SKU. Products in the group share the same code, with unique Supplier SKU codes for each individual variation.

> **Important:** When publishing a group for the first time products should be published using the Mass Download spreadsheet so they're published together; individually ticking products through Retail Express for the first time can potentially cause a duplicate individual product and a grouped Variable product.

Take the following products as an example on how they would be created in Retail Express:

![Image](https://ress.zendesk.com/hc/en-us/article_attachments/201581804/Matrix_products.PNG)
In this situation **2 products** would be visible on the front-end of the web store for customers:

- Plain Polo Shirt with Size (S, M, L) and Colour (Blue/Orange) drop-downs
- Panel Polo Shirt with Size (S, M, L) drop-down only (default colour of Black/Red)

|  |  |
| --- | --- |
| **Retail Express field** | **Information required** |
| Manufacturer SKU | The Style Code / Number (this should match for all products in the same group) |
| Supplier SKU | The unique code for each product, commonly the barcode. This field is mandatory for all Retail Express Back Office products |
| Short Description | The name of the product with Retail Express, and mandatory for all Retail Express products. You can select which field Shopify uses as the Product Title from the Integration settings. For example, you may want to give your products descriptive names in Retail Express, like "Check Shirt Red Small", but on Shopify you'd prefer the product to be called "Check Shirt Long Sleeve". To achieve this you can use a Custom field within Retail Express to populate the product name instead of the Short Description.   > **Note:** The Variable product in Shopify will use information from the first product in the group e.g. Product Name. |
| Size | The size value of the product. Each size variant of a product requires its own line (or row as above) in Retail Express Back Office. This allows for accurate inventory levels and reporting on that specific variation of product. |
| Colour | The colour value of the product Each colour variant of a product requires its own line (or row as above) in Retail Express Back Office. This allows for accurate inventory levels and reporting on that specific variation of product. |

## []()Adding/Removing a product from the Group

For various reasons it may be necessary to edit products to group/ungroup products on Shopify. The below scenarios explain what would happen in each case.

> **Note:** it's assumed that all products had previously been synchronised to Shopify before being updated in Retail Express.

|  |  |
| --- | --- |
| **Change in Retail Express** | **Resulting actions** |
| Product is updated in Retail Express to contain a Manufacturer SKU | - The previous individual/simple product in Shopify will be disabled and tagged inactive; the product will no longer receive updates through the Synchronisation process. - The Matrix product on Shopify is updated to contain the new individual "variant" product. - If the size/colour attributes in Retail Express are not unique amongst the remainder of the products with the same Manufacturer SKU, an error will occur during synchronisation and the product will not be published. - Any previous images/descriptions configured on the product will still be available on the original product unless the product was manually deleted from Shopify. |
| One or more products have the Manufacturer SKU removed | - If one or more products are removed from the matrix (i.e. the Manufacturer SKU removed) leaving less than two products with the same Manufacturer SKU the matrix will be disabled and tagged as "Inactive". - A new simple product for the single remaining product will be created. - Any previous images/descriptions configured on the product will still be available on the original product unless the product was manually deleted from Shopify - The product with the lowest Product ID in the group is used as the "Master" product to populate the matrix product's details e.g. Name. If this is the product that's removed, the product with the next lowest Product ID becomes the new "master", and the details will be updated to match that product. |
| One or more products have a previous Manufacturer SKU re-added | - If one or more products are re-added to a matrix product that was previously deactivated due to no variations the matrix product will be re-enabled and the inactive tag will be removed. - Any previous images/descriptions configured on the product will still be available on the original product (unless the product was manually deleted from Shopify). - The previous individual/simple product in Shopify will be disabled and tagged inactive; the product will no longer receive updates through the Synchronisation process. |

## []()Frequently Asked Questions

[Why is my product marked as disabled (Duplicate Variant combinations)](https://galaxy.maropost.com/kb/articles/170-grouping-products-together-on-shopify#duplicate-variant-options)

Variants cannot contain multiple products with matching option combinations. For example, it's not possible to have two variants of size 10 and the colour red. Either the size or the colour would need to be changed to a unique combination before the product can be created online.

If the product matrix is invalid due to duplicate size/colour variations the associated Shopify product will be disabled/marked as unavailable.

[Adding the Size attribute to existing Variant products causes products not to synchronise](https://galaxy.maropost.com/kb/articles/170-grouping-products-together-on-shopify#adding-variant-options)

Prior to synchronisation, products are grouped in Retail Express using the Manufacturer SKU. Whether those products have different sizes and/or colours determines the attributes the customer can select from on the web store when the products are synchronised to Shopify to create a Variant product. For example, if all the sizes match and only the colour options are different, the customer will only see a "Colour" drop-down box. If both options are different amongst all products, the customer will see both a "Size" and "Colour" drop-down.

If a Variant product is created with only a "Colour" drop-down, and later different size options are added to the group, these products will not synchronise to Shopify. This is due to an issue with the Shopify API. This is a known issue that Retail Express will be updating in a future release.