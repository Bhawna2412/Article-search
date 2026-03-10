---
title: "Set up a Generic Product Export Template"
articleID: 1460
category: "Use Neto > Data Import and Export > Products import export"
knowledgeBase: "Neto By Maropost"
---

# Set up a Generic Product Export Template

The information in this guide is a general resource on how to set up a generic product data feed to a third party website. Most third party sites will have their own data requirements, which this guide can help you achieve.

## Add an Export Template

To create a product export template to send products to a third party site:

1. In your Neto control panel navigate to **Settings & tools** and choose **Export data**.
2. Products will be selected as the type of data to export by default. Click the **Perform Complex Export button**, and choose **Use Existing Custom Export Templates**.
3. You'll be given a list of the default templates. Click the **Add New** button in the top right of the page, and click **Add New Export Template**.
4. Enter the details for your export. The below table provides and indication of how it should be set up.
  **Please Note**: Any field not mentioned can be left as the default value.
5. Click the **Save Changes & Continue** button.
6. Your template will be created, and you'll now have a new section called **File Delivery**. This section lets you define where the created file will be sent to:
7. Scroll down to the **File Builder** section. Here you will see where you can build the file header, body, and footer to match the columns and fields that a third party site is expecting. For simplicity, the recommended fields can be copied from the below information.

> **Warning:** After you paste the information into each field, you must press the Enter key to move the cursor to a new line. If you do not, the file will not be generated correctly.

  **File Header**

  This information determines the column headers in the file, and match a third party site's requirements.

  `"id","availability","condition","description","image_link","link","title","price","brand"`

  **File Body - body**

  The file body references your product fields to put the correct information into the file. You may need to modify this section if you sell used or refurbished products, or do not want to use the default product price.

  `"[@SKU@]","in stock","new","[%format type:'csv' noeol:'1' maxlength:'5000' %][@description_nohtml@][%/format%]","[@image_full@]","[@url@]","[@model@]","[@store_price@] AUD","[@brand@]"`

> **Important:** Each field needs to populated with data on your products, or they may not be accepted by your third party site.

## Customise the Data Feed Fields

With your template created you can now edit the File Body to replace product fields you don't want to use, with others you do.

For example, the condition **new** is hard coded into the file body. If you sell used and /or refurbished products as well, you may want to create a custom product field to store this data against your products, and export it to a third party site.

To replace a field, find the one you want to use in the **Insert Data Tag** drop down boxes. Then highlight the field you want to replace, and click the **Insert Data Tag Button.**

Other fields you may want to replace include:

| Field Name | Replacement | Notes |
| --- | --- | --- |
| `[@store_price@]` | `[@current_price_1@]` | This will change the price in your file to your price A or promo price A (if in a promotion date range). |
| `in stock` | `[@instock@]` | Change the hard coded in stock value for each product to display out of stock products on the third party site. This will require a find and replace in template, explained below. |
| `[@store_price@]` | `"[%calc [@store_price@] * 1.1 /%]"` | Most third party sites requires all prices to include tax. This change will add 10% to your store price to account for GST, if your product prices don’t include tax. |

## Product Filters

Click on the **Filter** tab. On this page you will see ways to exclude certain products from being included in the product file. We recommend that you only send **Active** products in the data file.

> **Important:** If you have copied the **File Body** code above, you will need to ensure that only products that are in stock are sent to a third party site. In the **Store Quantity** filter, set the From value to **1** to do this.

## Find and Replace Data

Click on the **Find & Replace** tab. This page allows you to find certain data that is generated in the file, and replace it.

> **Important:** If you use the [@in_stock@] field to add out of stock products to the file, it will only output a y or n in the file. Third party sites may not read this correctly, so you need to set up find and replace functions to insert values your third party site can read.

1. Click the **Add Find And Replace** button three times. Enter the values for each field as in the table below:
2. Scroll to the bottom of the page and click Save Changes.

Your product feed is now set up and ready for use by a third party site. Follow the steps provided by your third party site to set up the recurring import.

## Add Google Product Categories

Google product categories are not required for all third party sites, but can make your products easier to find.

To import Google product categories and assign them to your products, follow the steps in [this article](https://galaxy.maropost.com/kb/articles/1066-import-google-shoppings-australian-product-categories).

To edit the template to include the Google product category:

1. Add `"google_product_category"` to the end of the FILE HEADER field of your template.
2. In the **FILE BODY - body** section, place your cursor at the end of the line and enter `,"`.
3. In the **Insert Data Tag** drop-down menus, select **Category Table (Google Shopping)** and then **Google Shipping Full Path List**.
4. Click the **Insert** button and the data tag will be added to your template.
5. After the Google category data tag enter `"` to complete the format.
6. Click the **Save Changes** button.

Your product data feed to a third party site will now include the Google product category assigned to your products.