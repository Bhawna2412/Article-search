---
title: "eBay Field Mapping"
articleID: 782
category: "Ways to Sell on Neto > eBay > New eBay Sellers"
knowledgeBase: "Neto By Maropost"
---

# eBay Field Mapping

The **Field Mapping** tab (in the Listing Rules Template) allows you to set different fields in Neto to match certain values on eBay. For example, you may wish to use a different eBay product title or price group to the one used on your Neto website. Other fields that can be mapped include:

- Subtitle (incurs an additional fee)
- Prices
- Brand
- Product identifiers (ePID/UPC / EAN / ISBN)

## Set up Field Mapping

1. In your Neto control panel navigate to **eBay** > **Listing rule templates** and click on the template you're working on.
2. Click on the **Field Mapping** tab.
3. In the **Product Title** region, select a product field (e.g. Name).
  The **Product Title** region allows you to set how the eBay listing product title will display.
4. The second dropdown allows you to determine how you will either join fields together or perform a calculation.
5.   - This example displays the **Product Title** on eBay as the **Name** and **Subtitle** together.
    ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayFieldMapping000000001.05T5g00000t03FZEAY.png)
  - This example displays the **Product Title** on eBay with the words 'BRAND NEW!' at the end.
    ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayFieldMapping0001.05T5g00000t03XhEAI.png)
  - This example displays the **Product Title** on eBay as **Genuine**, followed by the **Product name** with **+ Warranty!** at the end.
    ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayFieldMapping003.05T5g00000t03cDEAQ.png)

  The third dropdown allows you to add another field.

  The following screenshots display three examples of how the dropdown values can be used.

> **Warning:** By default, the **Product Subtitle** is not selected, as this will generate an additional charge per listing if populated. You can read more about the fees from [eBay's seller fees page](http://pages.ebay.com.au/help/sell/fees.html).

6. Within the **Start Price** region, select values from the available dropdowns.
7. Continue by mapping the **Brand**, **UPC**, **EAN**, **ISBN** and **eBay Global Reference ID** if they are relevant to your products.

> **Note:** The eBay Global Reference ID is used to map the eBay product identifier (ePID) from you products. More information can be found [here](https://galaxy.maropost.com/kb/articles/1080-ebay-product-based-shopping-experience#map-epid-on-listing-rules-template).

  ![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayFieldMapping1.05T5g00000t03eEEAQ.png)
8.   - [Item Condition](https://galaxy.maropost.com/kb/articles/1083-sell-used-and-refurbished-items-on-ebay)
  - [Best Offer](https://galaxy.maropost.com/kb/articles/1392-ebay-promotion-tools#2)
  - [Strikethrough Pricing (Original Retail Price)](https://galaxy.maropost.com/kb/articles/1392-ebay-promotion-tools#example-3)

  Click the **Show Additional Fields** button to set up more options for your listings, including:

> **Note:** Set up the next part of your listing rules template, Shipping.

## Use Different Product Titles on eBay

If you would like to use a different product name for your eBay listings from the one on you website or you want to make sure the product name is not truncated on eBay, you can create a custom product field and map it in your eBay listings.

This will also allow you to add in specific keywords to your eBay titles, while keeping your webstore titles clean and simple.

> **Note:** Adding and populating this field is completely optional, giving you an additional level of control over your product listing.

To add an eBay Title field, you will need to:

1. Create the custom product field
2. Add the eBay titles to the products
3. Map the field in the eBay Listing Templates

### Create the custom product field

1. [Create a custom product field](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products#add-product-categories-to-products-via-import) in the **eBay** section called **eBay Title**.
2. Set the **Field Type** to **Short Text** and a **Maximum Length** of **80**.
3. Under **Section** select **Naming & Visibility**.
  ![image5](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayFieldMapping2.05T5g00000t03g5EAA.png)
4. **Save** the details.

### Add eBay Titles to Products

Enter the eBay Title for each product via the control panel or a [bulk import](https://galaxy.maropost.com/kb/articles/668-product-import-wizard#complex-import). The field will be found in the **Naming & Visibility** section of the product details.

### Map the field in your eBay Listing Templates

1. In your Neto control panel navigate to **eBay > Listing Rules Templates** and select the template you want to change.
  ![image6](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayFieldMapping3.05T5g00000t03gyEAA.png)
2. Click on the **Field Mapping** tab.
3. Next to **Product Title** click on the drop down menu (second line) and select the name of the field you created.
  ![image7](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayFieldMapping4.05T5g00000t039HEAQ.png)
4. Save the template or if you like **Save Template & Revise Active Listings**.
5. Repeat for the other listing templates.

> **Note:** Make sure the eBay Title fields for all products have been populated before revising the products.

## Specify Item Condition

eBay's Item Conditions can be specified **Categorisation & Listing Rules** tab of the listing rules template by selecting an option from the drop down list. For more control over which conditions apply to your products you can instead set it up on the on the **Field Mapping** tab. This allows you to select a custom product field to match the desired item condition to your listing, and is particularly useful if you're selling brand new, used, or refurbished items on the same listing rules template.

### Before you begin

1. [Create custom product fields](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products#add-product-categories-to-products-via-import) in the **eBay** section called **eBay Item Condition**, and if you sell used or refurbished items, **Condition Description**.
2. Familiarise yourself with the [ available item conditions, and which categories they apply to](http://developer.ebay.com/Devzone/finding/CallRef/Enums/conditionIdList.html).

### Enter condition ID's on products

Condition ID's need to be entered onto your products so that it can be read by eBay.

1. In your Neto control panel navigate to **Products** > **Active**.
2. Open a product and in the left side menu click **eBay**. You should see your custom fields called **eBay Item Condition** and **Condition Description**.
3. Enter the ID that corresponds to the condition of your product, and the category you're listing it in. For example, new shoes without a box use the ID 1500, whereas new shoes with a box are 1000. Once done, click **Save**.
4. Enter the **Condition Description** to describe your used or refurbished item.
5. Repeat these steps for all products you wish to list this way.

Alternatively, you can populate these fields in bulk by using the [export wizard](https://galaxy.maropost.com/kb/articles/501-product-export-wizard) to download csv of the product **SKU**, **Name**, **eBay Item Condition** and **Condition Description** fields. Add the item conditions and descriptions to the spreadsheet, save, and upload it through the [import wizard](https://galaxy.maropost.com/kb/articles/668-product-import-wizard).

### Set up the listing rules templates

1. In your Neto control panel navigate to **eBay** . **Listing Rules Templates** and click on a template to open it.
2. Click on the **Field Mapping** tab, and click the **Show Optional Fields** button to show more field mapping options.
3. In the **Item Condition** field, click in the dropdown box, and select the **eBay Item Condition**. Map the **Condition Description** as well if you sell second hand or refurbished items.
  ![image8](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayFieldMapping5.05T5g00000t03NnEAI.png)
4. Click **Save Template & Revise Active Listings**, and repeat for any other rules templates.

Your listings on eBay will now have their item condition and description set from the data entered onto your products.