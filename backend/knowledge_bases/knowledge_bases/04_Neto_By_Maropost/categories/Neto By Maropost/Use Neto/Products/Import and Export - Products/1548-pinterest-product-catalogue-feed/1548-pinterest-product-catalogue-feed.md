---
title: "Pinterest Product Catalogue Feed"
articleID: 1548
category: "Use Neto > Products > Import and Export - Products"
knowledgeBase: "Neto By Maropost"
---

# Pinterest Product Catalogue Feed

## Requirements

To populate your Pinterest catalogue with products from Neto you must first:

- [Import Google categories](https://galaxy.maropost.com/kb/articles/1066-import-google-shoppings-australian-product-categories#assign-google-product-categories-to-a-product) into your control panel and [categorise your products](https://galaxy.maropost.com/kb/articles/1066-import-google-shoppings-australian-product-categories#assign-google-product-categories-in-bulk).
- [Claim your website](https://help.pinterest.com/en/business/article/claim-your-website) in Pinterest by adding the meta tag to the header of a custom script.

## Create a Pinterest Export Template

Pinterest requires your product data in a specific format, so that they can import your products successfully. The best way to achieve this is by creating an export template:

1. In your Neto control panel navigate to **Settings & tools** > **Export data**.
2. Click the **Perform complex export** button, and choose **Create New Custom Export Template**.
3. Use the table below to complete the fields on the new export template:
4. Click the **Save Changes & Continue** button.
5. Your template will be created, and you'll now have a new section called **File Delivery.** This section lets you define where the created file will be sent to, and when:
6. Scroll down to the **File Builder** section. Here you will see where you can build the file header, body, and footer to match the columns and fields that Pinterest is expecting. For simplicity, the recommended fields can be copied from the below information:

> **Warning:** After you paste the information into each field, you must press the Enter key to move the cursor to a new line. If you do not, the file will not be generated correctly.

  This information determines the column headers in the file to match Pinterest's requirements:

  `"id","item_group_id","title","description","link","image_link","price","availability","condition","google_product_category","product_type","additional_image_link","sale_price","brand"`

  `"[@SKU@]","[@parent_sku@]","[@model@]","[%format type:'csv' noeol:'1' maxlength:'5000' %][@description_nohtml@][%/format%]","[@url@]","[@image_full@]","[@store_price@] AUD","in stock","new","[@category_12_ns@]","[@category_1_ns@]","[@thumb_full_1@]","[@promo_price@] AUD","[@brand@]"`

> **Note:** Pinterest accepts a number of optional fields. Consult the [Data source specification](https://help.pinterest.com/en/business/article/data-source-specification) article for more information.

7. Click on the **Filter** tab. In the **Store Quantity** section, enter `1` in the **From** field. This will ensure that products in the file will be in stock.

> **Note:** You can also set additional filters to control which products will appear on Pinterest. For example, you can choose to send specific categories of products in the **Product Category Filters** section.

8. Scroll to the bottom of the page and click the **Save Changes** button.

Your template is now created, and will generate an updated product file at the scheduled time.

## Configure Pinterest

You can now configure Pinterest to import your product file. Follow the steps in the [Data source setup](https://help.pinterest.com/en/business/article/data-source-setup) guide.

- The data source can be copied from the **File Location (HTTPS URL)** field in your export template.
- Set the file format as **CSV**.