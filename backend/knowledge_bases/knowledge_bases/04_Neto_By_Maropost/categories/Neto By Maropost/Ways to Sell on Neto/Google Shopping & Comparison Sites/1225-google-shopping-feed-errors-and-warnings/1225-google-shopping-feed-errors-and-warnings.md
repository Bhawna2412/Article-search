---
title: "Google Shopping Feed Errors and Warnings"
articleID: 1225
category: "Ways to Sell on Neto > Google Shopping & Comparison Sites"
knowledgeBase: "Neto By Maropost"
---

# Google Shopping Feed Errors and Warnings

An error will stop the product being available for sale on Google Shopping, while a warning is only a recommendation and will still allow the product to be listed.

To view the errors and warnings in the data feed, login to your Google Merchant Center account and click on Feeds and the name of the feed. You will find the details at the bottom of the Status tab. This will show examples of the products with the error or warning. It does not display every product with the issue. Click on Show item to see the details for a particular product.

## Errors

Here is a list of the common errors/warnings you may encounter and how to fix them:

**Automatic item disapproval’s due to policy violation**

These products may have violated Google’s policies. You will need to check with Google for more details.
Empty column headers

This is an issue with the format of the exported file. The FILE HEADER is missing a column header or there are two tab characters between two columns. To check, you can copy and paste the FILE HEADER to a word processor or text editor that can display invisible characters and turn on that feature. Also check the FILE BODY – body for extra tab characters.

**Insufficient product identifiers: Missing two out of three attributes [GTIN, brand, mpn]**

The GTIN and Brand attributes are required and the MPN is recommend. The GTIN can be one of the following: Universal Product Code (UPC), European Article Number (EAN), Japanese Article Number (JAN) or International Standard Book Number (ISBN). The MPN is the Manufacturer Part Number. Two of the three attributes are required and all three are recommended.

**Invalid price in attribute: price**

The product price is zero. Change the price of the product in your website control panel.

**Item requires a GTIN**

The GTIN can be one of the following: Universal Product Code (UPC), European Article Number (EAN), Japanese Article Number (JAN) or International Standard Book Number (ISBN). Google added this as a required field in early 2016. Here are the instructions to add the field to the Google Shopping export template:

1. To make changes to the data feed, you will need a text editor like TextEdit on the Mac or Notepad in Windows.
2. To add the column, go to **OTHER > ****Shopping Comparison feeds** and click on **Edit** in Google Shopping tile.
3. Scroll down to the **FILE HEADER** field. Click on the field and press Command-A (Mac) or Ctrl-A (Windows) to select all the text in the field.
[Image: User-added image]
4. Copy the contents and paste it into your text editor. Click at the end of the line and press the tab key and enter **GTIN**. Select all text in the text editor.

[Image: User-added image]
5. Copy and paste it into the field under**FILE HEADER**. Make sure it replaces the text already in the field.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/chromeDrYhh7axz3.05T5g00000nHbdoEAC.png)
6. To add the tag, scroll down to **FILE BODY - body** and click at the end of the text line. Select all the text in the field. Copy the contents and paste it into your text editor.
7. Click just before the square bracket for the tag you just added and press the tab key and add **[@upc@]**.
8. Then select the text, copy and paste it back into the field under**FILE BODY - body**. Make sure it replaces the text already in the field.

**Items pre-emptively disapproved due to data quality violation (Data Quality: Promotional Text or Watermarks)**

The product image can’t have watermarks (i.e. logo) or text embedded in the image. The images with the watermarks to text will need to be upload for each affected product.

**Missing shipping information**

Google now requires the cost of shipping to be included for each product. The way that Google handles shipping is not a flexible as your Neto webstore. Since how the shipping cost is passed to Google in the feed will differ between sites, we have not included it in the default feed.

**Temporary item disapproval’s due to incorrect prices**

The price in the feed is different from the price on the your website. Check the price. This can happen when a product price is changed on your site but the feed has not been uploaded with the new price. Check out this article for mote details: [https://support.google.com/merchants/answer/6098334?hl=en](https://support.google.com/merchants/answer/6098334?hl=en)

**Unknown ‘google product category’ value**

Either the Google Product Category is missing from the product or the Google Product Category is not one used by Google.

To fix, go to the product details and in the categorisation section and add a Google Product Category. If you don’t have Google Product Category in the drop-down, follow our guide on importing [Google Shopping Product Categories](https://galaxy.maropost.com/kb/articles/1066-import-google-shoppings-australian-product-categories).

**URLs do not belong to your website**

The web address of the product does not match the verified web address you used when creating the Google Merchant Center account. This can happen if you change from your Neto staging site web address to your own domain name or you change the your site’s domain name.

You will need to register the new web address in Google Merchant Center and make sure it matches the details that are exported in the Google Shopping Feed.

## Warnings

**Long Titles**

You can submit up to 140 characters for a product name but only the first 70 characters will be seen. Google recommends that you keep the product names fewer than 70 characters.

**Low image quality**

The size of the product image is too small. Images must be larger than 32 x 32 pixels and cannot be larger than 64 megapixels. Upload a larger main image for the product in your website control panel.
Missing images

The products with this warning are missing the main product image. To fix, upload the image to each product in your website control panel.

**Missing microdata for condition**

Google Merchant Center now has a feature that will scan the product pages between updates from the data feed so it has the most up to date details. The details on your site need to be coded in a certain way so Google can get the product details. Currently the product condition (i.e. new or used) is not coded on the product page. You have two options:

1. You can ignore the warning. It will not affect the shipping feed.
2. The template for the product page can be changed to add the condition.

**Missing recommended attribute: google product category**

To add the Google Product Categories to your products, check out our guide on [how to import Google shopping product categories](https://galaxy.maropost.com/kb/articles/1066-import-google-shoppings-australian-product-categories).

**Missing recommended attribute: image link**

The products with this warning are missing the main product image. To fix, upload the image to each product in your website control panel.

**Missing recommended attribute: product type**

The Google Shopping Feed uses the product category name that has been assigned to the product as the product type attribute. These products are not assigned to a product category (website not Google Product Category). You can add these products to a product category in your website. Just edit the product details and scroll down to the categorisation section and add a category.

**Missing schema.org microdata for price**

Some older themes have the old microdata standard or do not have microdata at all. This article explains how to add/update microdata for your products: [https://support.google.com/merchants/answer/6069143](https://support.google.com/merchants/answer/6069143)

**Short descriptions**

The product description is too short. By default the product name is also used for the description. You can look at longer product names to fix.

**Unknown ‘google product category.’ value**

Check your products to make sure they can a Google Product Category allocated to them. If you have not installed the Google product categories on your site, [see our article](https://galaxy.maropost.com/kb/articles/1066-import-google-shoppings-australian-product-categories) on achieving this.

Also make sure that no custom Google product categories are allocated to products.