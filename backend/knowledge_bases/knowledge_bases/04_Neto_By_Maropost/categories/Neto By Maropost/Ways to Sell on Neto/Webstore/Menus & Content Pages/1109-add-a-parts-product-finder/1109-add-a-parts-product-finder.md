---
title: "Add a Parts / Product Finder"
articleID: 1109
category: "Ways to Sell on Neto > Webstore > Menus & Content Pages"
knowledgeBase: "Neto By Maropost"
---

# Add a Parts / Product Finder

A parts/product finder is an awesome navigational tool that allows users to quickly narrow down products using a selection of drop-down boxes.

![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AddaPartsProductFinder1.05T5g00000twSOmEAM.png)
It is sometimes referred to as fitment information, as the different category levels assist customers in finding automotive parts specifically suited to fit their vehicle.

> **Note:** Neto partners can set this up for you. [Visit the job request portal](https://www.netohq.com/job-request-portal) for a quote.

## Overview

Traditionally, finding a part for a specific make, model and year of a car can be a cumbersome experience. The Parts/Product Finder is here to fix that!

Using the example of car auto parts, you might offer 3 unique drop-downs:

- Make
- Model
- Year

When the customer chooses a make, the model field auto-populates with the models related to the chosen make. The year drop down will work in the same way - when a model is chosen, the year field auto-populates with the available years related to the model.

After a choice is made for the final drop-down (e.g. the year), the user is redirected to a search results page, showing the products relevant to their choice.

You can also see a working example in one of the [premium Neto themes](https://rapidtheme.neto.com.au/).

## Prepare your data

**Please Note**: Parts/Product finders involve a complex data set. As such, we recommend having an experienced Maropost partner set up the data on your behalf. If you would like a quote to set this up you can order a [Product Data Setup](https://www.netohq.com/job-request-portal).

The content for the product finder is hierarchical in nature. In the below example, **Holden** is the top-level content, **Commodore** is a child of Holden as a second-level piece of content, and 2016 is a child underneath Commodore, as third-level content.

When using the product finder on the website, this hierarchical structure ensures that when choosing a manufacturer (e.g. Holden), only the models that are direct children will be shown (e.g. Commodore, Barina, etc.)

**Holden > Commodore > 2016**

Each level has its own drop-down box, and you can have as many levels as you like for your parts/product finder (although we would recommend making it as concise as possible, for the sake of usability).

There's usually a lot of data involved with a product finder, so be sure to set some time aside to create the spreadsheet for the import process.

## Add the Content Tree

Uploading your product finder information requires a specific **Content Type** to house the information levels (e.g. Make, Model, Year). This works the same as a category tree, with different parent and sub-categories to define the levels in your product finder.

To create a content type, follow the steps in our set up guide. Be sure to name it **Product Finder** to match the coding instructions in a future step.

Once the content type is created you can now populate it with information. This can be done in the same manner as [product categories](https://galaxy.maropost.com/kb/articles/685-add-a-product-category). The only difference is that your content type will be found under the **Webstore** menu (e.g. **Webstore** > **Parts Finder**).

Alternatively, you can [create the data for your content type and assign them to your products at the same time](https://galaxy.maropost.com/kb/articles/685-add-a-product-category#category-seo). Again, this process is similar to adding product categories, just substitute **Product Category** for your content type name.

## Assign Parts Finder Categories to Products

Now that your parts finder structure is in place you're ready to link up your products to their correct parts finder hierarchy. Like adding categories to products, there's two methods you can use to assign parts finder information, individually or in bulk.

**Individually**

Parts finder categories are assigned to products in the same way as product categories. Please follow the [how to add a product to a product category](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products#edit-products-in-bulk) instructions, remembering to select **Parts Finder** instead of **Product Category**.

**Bulk Method**

To assign parts finder categories to multiple products at once use the Neto [Import Wizard](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products) to upload a csv file with your products and the associated parts finder information.

Below is an example of how you can structure the layout of the csv file.

| SKU | Year | Make | Model | Submodel | Variant | Engine | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SKU_1 | 2002 | Holden | Commodore | i V8 | (2000-2002) RWD Sedan | 5665cc 225KW (Petrol) | Auto |
| SKU_1 | 2002 | Holden | Commodore | i V8 | (2000-2002) RWD Ute | 5665cc 225KW (Petrol) | Auto |
| SKU_1 | 2002 | Holden | Commodore | i V8 | (2000-2002) RWD Wagon | 5665cc 225KW (Petrol) | Auto |
| SKU_1 | 2002 | Holden | Commodore | i V8 | (2000-2002) RWD Sedan | 5665cc 225KW (Petrol) | Auto |
| SKU_2 | 2004 | Holden | Commodore | i V8 | (2000-2002) RWD Ute | 5665cc 225KW (Petrol) | Auto |

The template for importing the above file would look like this:

![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AddaPartsProductFinder3.05T5g00000twSQSEA2.png)
**Please Note:** The notes section uses :: as a separator which is defined on the **Update Options** tab.

![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AddaPartsProductFinder4.05T5g00000twSQwEAM.png)

## The Design

Once your data is set up some design work is required to add the product finder to your Neto site.

You can either [Submit A Design Tweak](https://www.netohq.com/job-request-portal) for a quote to install this for you, or follow the steps in to [add the code yourself](https://developers.neto.com.au/documentation/neto-designer-documentation/tweak-documents/header/product-finder/). This second option requires SFTP access. If you don't already have SFTP access, you can request it [here](https://www.neto.com.au/assets/Neto-Services-Forms/requestftp.html).

Alternative layouts can be quoted, for example you might want to emphasise the product finder by placing it inside a large banner section on your home page, or have the finder fixed to the top of the page when scrolling, so that it's always visible.