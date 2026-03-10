---
title: "List Products on Amazon Australia"
articleID: 775
category: "Ways to Sell on Neto > Amazon > Launch Amazon Australia"
knowledgeBase: "Neto By Maropost"
---

# List Products on Amazon Australia

To sell on Amazon Australia, products need to be registered in Amazon's catalogue. Products that are already registered on Amazon can be listed from Neto, even if you are not the one who registered them. In both cases your products must have a valid GTIN (Global Trade Item Number). More information on Amazon's GTIN policy can be found [here](https://sellercentral.amazon.com.au/gp/help/external/G200317470).

**Please Note**: Products with a GTIN exemption must be listed through Amazon's seller central.

## Set up Neto to List Products Automatically

**Please Note**: Products listed to Amazon will use the default shipping template set up in Seller Central. You can safely change the listing settings once it has been listed.

1. In your Neto control panel navigate to **Amazon Australia** > **Settings**.
2. Click on **Listing Management**.
3. Choose the **Create and manage from Neto, using the product's UPC** option, and click the **Save Changes** button.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ListProductsonAmazonAustralia1.05T5g00000t0k1eEAA.png)

You are now set up to list products from Neto to Amazon.

## Approve Products to List on Amazon

Neto will automatically try and list products on Amazon once you have selected the products you want to list.

To select which products you want to list, you must mark them as **Approved To Show On Amazon AU**. There are several ways you can mark your products as [Approved To Show On Amazon AU](https://galaxy.maropost.com/kb/articles/774-approve-products-to-list-on-amazon), which is why they're covered in their own article.

> **Important:** Neto cannot end or delete listings on your Amazon account. If you unapprove products, they will no longer sync from Neto, but will still be listed on Amazon.

Marking a product as approved for Neto will attempt to find an existing Amazon Australia product listing with the same **ASIN** or **UPC** as yours, and then use that product info for your own listing.

> **Note:** UPC (universal product code) is the registered bar code for your product, that Amazon can match to their catalogue. To add a UPC to a product, open a product, and go to the **Warehouse & Picking** section. Enter the barcode or ASIN into the **UPC/EAN** field. This field can also be populated using the [Import Wizard](https://galaxy.maropost.com/kb/articles/668-product-import-wizard) by mapping your data into the [UPC/EAN](https://galaxy.maropost.com/kb/articles/687-product-import-and-export-fields) field.

Once products have been marked as approved, you can monitor their status on the **Amazon Australia** > **Listings** page. This will tell you if a products are **Waiting to be listed**, **Listed**, or have encountered an **Error**.

## List Variation Products

[Variation products](https://galaxy.maropost.com/kb/articles/1354-add-variation-products)can be listed on Amazon Australia in much the same way as standard products. If the product is registered in the Amazon catalogue:

- Parent and child products must be marked approved for Amazon Australia.
- Child products must have a valid identifier (ASIN/UPC/EAN/GTIN etc).

> **Note:** Amazon allows variation listings in certain categories. If you try and list a variation product in a category that doesn't allow variations, Neto will list the child products separately.

If the variation product isn't registered in the Amazon catalogue, you can register and list it through Neto. In addition to the above, you will need to:

- Set up category mapping for [Amazon product registration](https://galaxy.maropost.com/kb/articles/700-set-up-amazon-mapping-for-product-registration#category-mapping).
- Set up product field mapping for [Amazon product registration](https://galaxy.maropost.com/kb/articles/700-set-up-amazon-mapping-for-product-registration#product-field-mapping).

In the **Category specific product fields**, there is a section called variation. You must map the variation theme using one of the available values. To see the available values, click the **i** icon.

**Variation theme** is used to specify how a the child products in a variation listing differ, and what the types of variations are. For example, if you have a variation theme for size and colour, you would need to have a field (or product specific) on the product that contains the word `sizecolor`. This can then be mapped to the variation theme, so that Amazon knows the listing has both size and colour variations.

We recommend that you create a [custom product field](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products#add-product-categories-to-products-via-import) called Variation Theme, and populate this with the accepted Amazon values on your products. The accepted values can differ depending on the Amazon category, so remember to click the 'i' icon to see a list of accepted values. The variation theme name should be populated to both the parent and child products.

![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ListProductsonAmazonAustralia2.05T5g00000t0kACEAY.png)

## End an Amazon Listing

There are two steps you must take to end an Amazon listing correctly:

1. Edit the product and clear the **Approved for Amazon AU** checkbox. Instructions on how to do this can be found in [this article](https://galaxy.maropost.com/kb/articles/774-approve-products-to-list-on-amazon), but rather than selecting the checkbox you must be clear it instead. This prevents Neto from relisting the product.
2. Log in to your [Amazon Australia seller central](https://sellercentral.amazon.com.au) account, and [end the listing](https://sellercentral.amazon.com.au/gp/help/external/help.html?itemID=202010040&language=en_AU&ref=efph_202010040_cont_69116).

> **Important:** Neto cannot end or delete listings on your Amazon account. This must be done in your Amazon seller central account.