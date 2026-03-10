---
title: "Set up Amazon Mapping for Product Registration"
articleID: 700
category: "Ways to Sell on Neto > Amazon > Launch Amazon Australia"
knowledgeBase: "Neto By Maropost"
---

# Set up Amazon Mapping for Product Registration

### Overview

Amazon mapping is required if you want to register your products on Amazon.com.au. To register products you will need to set up your Amazon category mapping and product field mapping. Both involve matching the data in your Neto control panel to an Amazon equivalent. The mapped fields will then be used to populate Amazon automatically when you register products that aren't already in the Amazon catalogue. Because some data required by Amazon may not be entered on your products, you may need to create [custom product fields](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products#add-product-categories-to-products-via-import) to hold the data, and populate then with the [product import wizard](https://galaxy.maropost.com/kb/articles/668-product-import-wizard).

> **Note:** The mapping allows you to "set and forget" your Amazon integration. New products can register automatically when you enter them into Neto . You will only need to maintain the mapping when you add new product fields or categories.

### Category Mapping

Category mapping determines which Amazon category your products will be registered in, based on the Neto category. We recommend that you set up category mapping first.

1. In your Neto control panel navigate to **Amazon Australia** > **Category Mapping**.
2. Select a Neto category that you want to sell on Amazon Australia using the drop down boxes, and click the **Add Category** button. You don't need to select every category level if a parent category matches an Amazon category.

> **Note:** You can change the content type used for you category mapping in **Amazon Australia** > **Settings** under the **Category Mapping** section.

  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupAmazonMappingforProductRegistration1.05T5g00000tu6TvEAI.png)
3. The category will be added, and you can now select the corresponding Amazon Australia category it applies to. Top level categories will reveal subcategories for you to choose from. Keep selecting categories down to the final level, as products cannot be listed in an Amazon parent category.
  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupAmazonMappingforProductRegistration2.05T5g00000tu7pSEAQ.png)
4. You may also need to select a **Product Type** that the category applies to. Some categories only have one product type, in which case it is selected for you.

> **Note:** Product types determine other required and optional fields you can add to your product listing. These are explained further in the product field mapping.

  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupAmazonMappingforProductRegistration3.05T5g00000tu6IsEAI.png)
5. Once complete, click the **Save** button.
6. Repeat these steps for each category you're authorised by Amazon to sell in.

**Please Note**: Amazon update categories regularly. When Amazon categories change you'll need to revisit this page to update your mapping.

Now that all of your product categories have been mapped, you can move on to product field mapping.

### Product Field Mapping

Product field mapping is broken up into several parts based on Amazon Australia's requirements. You can select from product fields (including custom product fields), product specifics, or hard coded values when you match them to Amazon.

> **Important:** Amazon expects specific data for some product fields. Click the "i" icon to see what Amazon is expecting, and any specific data will be displayed.

To map your product fields:

1. In your Neto control panel navigate to **Amazon Australia** > **Product Field Mapping**.
2. You will see two main sections, **Product Field Mapping** and **Product Types**, each with several subsections. Click on **Core** to expand the core fields which require mapping.
3. Match up the core Amazon fields to appropriate Neto fields, or use the defaults already selected. Click the **Save** button.

> **Note:** Most HTML tags that aren't allowed by Amazon are automatically stripped out of your description when Neto sends the data to Amazon. The only allowed tags are **b**, **br**, **i**, **em**, **p**.
> If you map the **Shipping-Template** to a [custom product field](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products#add-product-categories-to-products-via-import) you can ensure each product uses the correct shipping in Amazon.
> [https://www.youtube.com/embed/4d2C5o4R6b4](https://www.youtube.com/embed/4d2C5o4R6b4)
> 	Make sure the names in Neto and Amazon match exactly, so that the correct shipping costs are applied to the listing on Amazon. Otherwise Amazon will use the default template.

4. If you opted for manual barcode detection you will have 2 extra fields to map in the Core section, **Product Identifier** and **Product Identifier Type**.
  The product identifier must be mapped to a field that stores the product barcode (e.g. UPC, EAN), Amazon identifier (GCID) or MPN (manufacturer part number) value. For example, you may [create a custom product field](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products#add-product-categories-to-products-via-import) called Barcode, and populate it with the product barcode number for each product.

  The product identifier type describes what type of barcode the product has on it. If all of your products use the same identifier (e.g. UPC) you can choose **Type in a value** and then enter the identifier type. If you use a mix of different identifier types, you will need to [create a custom product field](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products#add-product-categories-to-products-via-import) or [item specific< to store the correct value on each product.](https://galaxy.maropost.com/kb/articles/1553-add-specifics-or-filters-to-a-product)

  ![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupAmazonMappingforProductRegistration4.05T5g00000tu7xHEAQ.png)

> **Note:** The Fulfilemnt Centre ID field only applies to sellers using [Fulfiment By Amazon](https://services.amazon.com.au/services/fulfilment-by-amazon/benefits.html). Products that aren't fulfilled by Amazon need this set as DEFAULT.

5. Click **Product Discovery** and map the key product features to your product fields. This is a great place to add in specifics such as colour, size, or even the brand.
  ![image5](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupAmazonMappingforProductRegistration5.05T5g00000tu7yPEAQ.png)

  Click the **Save** button.
6. Click **Images** and map your product images to the Amazon image fields. The defaults will be set, but you can change them to specific image fields where you've uploaded images that meet [Amazon's requirements](https://sellercentral.amazon.com.au/gp/help/external/201270290).
  ![image6](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupAmazonMappingforProductRegistration6.05T5g00000t1F7qEAE.png)

  Click the **Save** button.
7. Click **Offer** to map the selling dates, and max order quantity.
  ![image7](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupAmazonMappingforProductRegistration7.05T5g00000tu84rEAA.png)

  Click the **Save** button.
8. You can now move into the **Category specific product fields** section. Each product type has specific fields that are required and optional to help you enhance your product listings.

> **Note:** Click the 'i' icon to see a list of accepted values. This is particularly important for **Color Map** and **Size Map**.

  Click on each product type and map any required fields. To show optional fields, deselect the **Show required fields only** box.

> **Note:** Neto will automatically map fields that match an Amazon field name. These fields will be highlighted with the message **Auto-selected for you, please check**. If these are correct you can leave them as they are.

  The **Variation** section is especially important if you intend to list variation products on Amazon. **Variation theme** is used to specify how a the child products in a variation listing differ, and what the types of variations are. So for example, if you have a variation theme for size *and* colour, you would need to have a field (or product specific) on the product that contains the word `sizecolor`. This can then be mapped to the variation theme, so that Amazon knows the listing has both size and colour variations.

  We recommend that you create a [custom product field](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products#add-product-categories-to-products-via-import) called `Variation Theme`, and populate this with the accepted Amazon values on your products. The accepted values can differ depending on the Amazon category, so remember to click the 'i' icon to see a list of accepted values. The variation theme name should be populated to both the parent and child products.

  ![image8](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupAmazonMappingforProductRegistration8.05T5g00000tu74mEAA.png)
9. Repeat for each product type, remembering to click the **Save** button in each section.

**Please Note**: Amazon update categories regularly. When Amazon categories change you'll need to revisit this page to update your product field mapping.

You've completed your product field and category mapping, and are now ready to register and list products on Amazon Australia. To choose which products you list, please follow the steps to [approve products for Amazon Australia](https://galaxy.maropost.com/kb/articles/774-approve-products-to-list-on-amazon).

## []()Amazon Listing and Offer Creation (Feature Limitations)

The Neto-Amazon integration allows for both listing creation and offer creation. Creating new listings for products not yet available in the Amazon catalog, is more complex than simply making offers on existing products.

In addition to this, the Amazon Selling Partner API is still being improved, and existing limitations may affect your ability to create new listings (registering new products in the Amazon catalog).

### Category Mapping Limitations

Some categories do not yet support creating new listings. Such categories will get mapped to the PRODUCT product type in the Category Mapping page in Neto. Amazon is working towards adding support for listing creation in more categories over time.![category mapping](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20240604054318.05TJ100000ERgHTMA1.png)

### Product Sync and its Potential Issues

A product sync might be accepted by the Amazon API but still be rejected for reasons not shown in the API response. In this case, the product's **Sync status** on the** Amazon Australia listings** page in Neto will show a "Success" status (since it was successfully submitted to Amazon without an error), but the **Listing status** will remain blank (indicating the listing wasn't created). Typically, successful listing statuses are updated within 1 hour. Amazon is working to display more potential rejection reasons within the Selling Partner API.![product description](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20240604054942.05TJ100000ERgI2MAL.png)

Some of the errors that are returned by the API and visible within the Neto dashboard may be vague, making troubleshooting difficult, e.g "The attributes are invalid."

Amazon is working towards refining the API attribute-related errors with more specific or more granular messaging, to facilitate troubleshooting. In the meantime, we at Neto have collated a few troubleshooting tips that you can implement on your end to help resolve potential issues.

#### []()Troubleshooting Tips

1.   1.     - On the **Amazon Australia listings** page in Neto, use the preview function to check what Product Type (productType) the product is mapped to:![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20240605014510.05TJ100000ERgIqMAL.png)
    - Check the Neto category assigned to the product, then check what Amazon category and Amazon Product Type this category is mapped to on the **Amazon Australia category mapping** page:![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20240605014843.05TJ100000ERgJPMA1.png)
      If the Product Type is set to PRODUCT, it means that the Amazon Seller Partner API does not yet support creating new listings in the selected category. Products can be created directly through Amazon Seller Central.

    Check that the listing is not mapped to a category that belongs to the PRODUCT product type. You can do this by either:
  2. Check that the listing is not present in the **Complete your Drafts** section of your Amazon Seller Central, with some error:![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20240605015416.05TJ100000ERgJjMAL.png)
  3. If you cannot find the product listing anywhere, or cannot resolve the error in the Draft section, please contact Amazon for assistance.

  **Product sync is successful but Listing status remains blank:**

There are some common reasons for a listing to not be created by Amazon. These could be some of the following-

- Seller not approved to sell the brand
- Seller not approved to sell in the chosen category
- The product listing already exists in Amazon, but some of the data does not match and is incompatible, e.g the Brand, Manufacturer or Color are different on the existing listing.
- Listing details are incomplete
- Listing details did not pass some validation from Amazon post-submission

1.   1. Check the available values within the Product Field Mapping page by clicking the ![:info:](https://pf-emoji-service--cdn.us-east-1.prod.public.atl-paas.net/atlassian/info_64.png) icon next to an attribute name, and ensure that the value that you provided is valid:![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20240605020005.05TJ100000ERgKXMA1.png)
  2. Should you have difficulties finding the relevant configuration, understanding its function, or believe that the system is not behaving as expected, please contact Neto Support to help troubleshoot.
  3. Should the Neto Support team confirm that all requirements are met, please contact Amazon for further assistance.

  **Product returns the error "The attributes are invalid."**