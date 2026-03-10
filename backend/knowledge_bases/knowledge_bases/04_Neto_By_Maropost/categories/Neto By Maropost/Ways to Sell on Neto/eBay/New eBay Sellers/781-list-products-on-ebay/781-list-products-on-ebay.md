---
title: "List Products on eBay"
articleID: 781
category: "Ways to Sell on Neto > eBay > New eBay Sellers"
knowledgeBase: "Neto By Maropost"
---

# List Products on eBay

To list products on eBay, they must have a rules template assigned to them. The rules template has all the settings needed to tell eBay how the product should be listed.

## Assign Rules Templates to Products

To get your listings live on eBay you must apply your listing rules templates which can either be done [individually](https://galaxy.maropost.com/kb/articles/781-list-products-on-ebay#individually), [in bulk](https://galaxy.maropost.com/kb/articles/781-list-products-on-ebay#in-bulk), on a [rules template](https://galaxy.maropost.com/kb/articles/781-list-products-on-ebay#rules-template) or [via import](https://galaxy.maropost.com/kb/articles/668-product-import-wizard).

> **Note:** If your listings are already active you will need to [assign templates to the active listings](https://galaxy.maropost.com/kb/articles/781-list-products-on-ebay#rules-template) instead.

### Individually

To list a single product:

1. In your Neto control panel navigate to **Products** > **View Products**.
2. Go into a product and click the **List to eBay** section.
3. **Select a Listing Rules Template** and press **Add a New Listing**.
4. Press the **List** button and click **List Item Immediately** and click **Save.**
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ListProductsoneBay1.05T5g00000t0HVYEA2.png)

> **Note:** To remove templates from products, click the red X and it will no longer be assigned.

### In Bulk

Listing products on eBay in bulk is done by assigning the same template to multiple products:

1. In your Neto control panel navigate to **Products** > **Active**.
2. Click the relevant checkbox next to the products to be listed on eBay.
3. Click the **With x Selected** button.
4. Select **Add Selected to eBay Listing Rules Template** from the dropdown.
  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ListProductsoneBay2.05T5g00000t0GQaEAM.png)
5. Click the relevant template link.
6. Click the **OK** button.
7. Navigate **eBay** > **Listing Rules Templates**.
8. Click the corresponding **ID** link relating to the template the products have been added to.
9. Click the **Save Template & List Now** button.

> **Note:** If any errors occur during the listing, refer to eBay - Troubleshoot Error Codes article for further information.

### Rules Template

To assign and list products from a rules template:

1. In your Neto control panel navigate to **eBay** > **Listing rule templates**.
2. Click on the rules template that you want to assign products to.
3. Click on the **Assign Products** tab.
  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ListProductsoneBay3.05T5g00000t0JfcEAE.png)
4. Click the **By Name** field.
5.   - enter the product name and click the **Search** button or
  - Select the product from the displayed list and click the **Add Products** button.

  Either:
6. Repeat the process for each product to be added.
7.   - Click the **Save Template** button or
  - Click the **Save Template & List Now **button to list the products to eBay immediately.

  Once completed, either:

### Via Import

Listing rules templates can be assigned to products in bulk using the import system. The only required fields in your CSV import file are:

- **SKU**
- **eBay Items List** (the ID of the rules template)

> **Note:** Use the [simple export](https://galaxy.maropost.com/kb/articles/501-product-export-wizard#simple-export) process to generate a CSV file with your product SKUs.

The following additional fields can also be imported to the **eBay Items List** field as a [pipe (|) delimited string](https://en.wikipedia.org/wiki/Delimiter-separated_values). This is only required if you want to define eBay category or listing design template details on a per product basis, rather than having them determined by the listing rules template or category mapping. Each field, however should end in a semicolon (;) to denote the end of the record.

- **Design Template ID** - your eBay listing template design ID
- **eBay Category 1** - the primary eBay category ID
- **eBay Category 2** - the secondary eBay category ID (incurs an additional charge)
- **eBay Store Category 1** - your primary eBay store category ID
- **eBay Store Category 2** - your secondary eBay store category ID

> **Important:** You must use numeric IDs for the eBay category and eBay store categories, not eBay category names.

Once you have populated your CSV file with data you can begin the [import process](https://galaxy.maropost.com/kb/articles/668-product-import-wizard).

Ensure **Ebay Items List** is selected from the second database field name field. Map your template ID to this field.

![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ListProductsoneBay4.05T5g00000t0JhOEAU.png)
On the **Update Options** tab, select either **Update Existing Products Only** or **Add New / Update Existing Products** from the **How Do You Want To update your Database** dropdown.

Within the **Other Options** section, select **Replace Existing Record** from the **eBay Items Update Options** dropdown.

This means that if the product already has a rules template applied to it, a second won't be added and instead the original will be removed first.

![image5](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ListProductsoneBay5.05T5g00000t0JiMEAU.png)
If you have each of the required fields in separate fields in your spreadsheet, you can combine them together into a string using the **Join To** feature in the field mapping to link different columns in your file together. e.g

`[Listing Template ID]|[Design Template ID]|[eBay Category 1]|[eBay Category 2]|[eBay Store Category 1]|[eBay Store Category 2]`

It also uses the **Static Value** function to insert the pipe (|) separators, and the semicolon (;) to indicate the end of the record.

![image6](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ListProductsoneBay6.05T5g00000t0JiqEAE.png)

> **Note:** Remove templates from product via import by importing `|||||;` into the eBay items list field. On the update options tab, set it to Update Existing Products Only. Click the advanced options and set the **eBay Items Update Options** to Replace Existing Record.

## List Variation Products

To list variation products on eBay via Neto, you need to have:

- A valid [variation product in Neto](https://galaxy.maropost.com/kb/articles/1354-add-variation-products).
- [A listing rules template configured to list variation products](https://galaxy.maropost.com/kb/articles/786-ebay-categorisation-listing-rules#listing-rules).

A variation product consists of a parent product, and one or more child products. The parent acts as a container for the child products, and it is the parent that gets assigned a listing rules template, and listed to eBay.

> **Note:** Certain eBay categories don't allow variation products. This may mean you need to assign a specific webstore category or update your category mapping to be valid. Refer to eBay's guide on variation products [here](https://pages.ebay.com.au/help/sell/listing-variations.html#categories).

Once you have created a variation product you can then configure listing rules templates to list them on eBay, separate from regular listings. Standard products cannot be listed on a rules template configured for variations.

Because of this, the easiest way to create a listing rules template for your variation products is to clone an existing template that is in use for regular products.

1. In your Neto control panel navigate **eBay** > **Listing rule templates**.
2. Click the **Clone** button (on the right-hand side of the page) next to the template you wish to clone. This copies all the existing Listing Rules template settings, including shipping, field mapping and specifics.
  ![image7](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ListProductsoneBay7.05T5g00000t0JjtEAE.png)
3. Edit the **Template Name** of the template to include the word `variation` (or similar), to differentiate the template is for variation products.
4. Click on the **Categorisation & Listing Rules** tab.
  ![image8](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ListProductsoneBay8.05T5g00000t0JIzEAM.png)
5. Within the **Variations** section, select the **Variation Listing Template** checkbox.
  ![image9](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ListProductsoneBay9.05T5g00000t0JmTEAU.png)
6. Click the **Save Template** button.

This listing rules template can now be assigned to products to be listed on eBay, as well as existing listings so that they can be revised through Neto.

## Link Products to Active eBay Listings

It is essential your active eBay listings match up to product SKUs in Neto. If they do not then your orders will not link up correctly when they get imported as the eBay listings will not have a linked product. Another issue you may have is if you import data from another site but do not use the product SKU as your eBay custom labels, then there is no way eBay listings will automatically match up to your products. The solution around these issues is to assign products in Neto to active listings either per product or in bulk on eBay. Note that if you are simply importing products from eBay and do not need to link up to existing SKUs, Neto will automatically create the products with a uniquely generated SKU, or whatever you use as the eBay custom label.

### Link Listings Per Product

1. In your Neto control panel navigate to **eBay** > **Active Listings**.
2. Select the **Listing ID** number of the listing you are changing
3. At the bottom of the page select **Search Products By Name** section and type in the name or SKU of the product you wish to link to this listing, and select the product.
  ![image10](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ListProductsoneBay10.05T5g00000t0JcpEAE.png)
4. Click **Save & Revise**.
  ![image11](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ListProductsoneBay11.05T5g00000t0IOqEAM.png)

### Linking In Bulk Via eBay

Rather than linking listings to products on an individual basis you can update the listings in your eBay account, and add a **Custom Label** that matches the product **SKU** in Neto.

1. Log into your **eBay** account and go to your **Active** listings.
2. You should see a column for each of the listings called **Custom Label**. If you don't see this, click **Customise** and check the corresponding box.
  ![image12](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ListProductsoneBay12.05T5g00000t0JsWEAU.png)
3. You can now click the listings **Custom Label** and change it to match your product SKU.
4. To sync this data with the listings in your Neto control panel, navigate to **eBay** > **Active Listings**.
5. Change the **# Per Page** to 250 and click the refresh button.
6. **Select All** listings on the page and at the very bottom, click **Download Latest Details From eBay**.
  ![image13](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ListProductsoneBay13.05T5g00000t0JsNEAU.png)
7. Repeat step 6 for any additional pages of listings.

## Assign Rules Templates to Active Listings

If you have imported your listings into Neto it's important to apply a listing rules template. A listings rule template ensures your stock levels, shipping requirements and design templates are in sync with Neto.

You should only apply listing templates to active listings once you are certain a listing template is performing as you are expecting. It's recommended testing 1 or 2 listings before applying in bulk.

> **Note:** Rules templates cannot be assigned to active eBay listings via CSV import or API.

### Individually

1. In your Neto control panel navigate to **eBay** > **Active Listings**.
2. Click on the Listing ID.
3. Click on the **Listing Designer** tab.
4. **Select your eBay Listing Template** from the drop down menu and then tick all 3 options below it.
5. Click **Save & Revise**.

### In Bulk

1. In your Neto control panel navigate to **eBay** > **Active Listings**.
2. Select the check boxes of the listings you wish to assign templates to.

> **Note:** Use the filters at the top of the page to display a selection of listings that all require the same template.

3. Scroll down to **Bulk Apply Listing Template to Active Listings** section.
4. **Select the eBay listing template** from the dropdown menu.
5. Select the **Define Shipping Rules** checkbox.
  ![image14](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ListProductsoneBay14.05T5g00000t0JuSEAU.png)
6. Click **Bulk Apply Listing Template**.
7. Select the listing's again, scroll down to **Bulk Actions** section and click **Revise Selected on eBay**.
  ![image15](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ListProductsoneBay15.05T5g00000t0JvQEAU.png)

## Duplicate Listings

> **Warning:** eBay does not permit duplicate items to be listed on eBay and as a result Neto does not take any responsibility in listings being ended by eBay for this reason.

After importing products from eBay, you may find that similar listings are assigned to a single product in Neto. This is usually because the same custom label on the eBay listing was used as the product SKU in Neto.

In this scenario, the products and active listings need to be separated so they do not revise to be identical, and they can continue to be managed individually. If you wish to list the same product multiple times with different details, you will need to set up new products that are single kits of original SKUs.

> **Note:** Products can be listed multiple times to different eBay accounts without the need for splitting listings.

When you create kits, you're also able to allocate stock to multiple listings. So if you have a small amount of stock for a product (e.g. 3) you can list the full amount on each listing.

- [Split Duplicate Listings into Kits](https://galaxy.maropost.com/kb/articles/781-list-products-on-ebay#kits)
- [List a Product to Two or More eBay Accounts](https://galaxy.maropost.com/kb/articles/781-list-products-on-ebay#sites)

### Split Duplicate Listings into Kits

When you create kits you can use the stock level form one product to control the stock level on other products. For more information on kit products see [this article](https://galaxy.maropost.com/kb/articles/669-add-kit-hamper-bundle-products). To split active listings from one product into multiple products:

1. In your Neto control panel navigate to **Products** > **Active**.
2. Find the product that has multiple active listings, and click the **Edit** icon, then select **Clone**.
3. Give the new product a unique **SKU** and **Continue**.
4. Edit the **Name**, **Description**, **Price**, **Category** and any other information you would like to display differently on the second listing.
  This is essential when listing to the same eBay account, as even though you have created a new product to manage the identical listing, if of all the information is the same on both eBay listings one or both may be removed.

> **Note:** If you do not wish for the identical product to be visible on your website, please uncheck **Approved To Show On Webshop**.

  ![image16](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ListProductsoneBay16.05T5g00000t0J8tEAE.png)
5. Select **Kitting** from the side menu and click the green **Add Product(s)** button. Set the **Qty** to 1, and in the **SKU** field, add the **SKU** of the product this was cloned from. **Save**.
  ![image17](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ListProductsoneBay17.05T5g00000t0KmyEAE.png)

> **Note:** The new product will have its stock levels controlled by original product (the kit component), so theres no need to enter a stock level on this product.

6. You can now [assign the product to this listing](https://galaxy.maropost.com/kb/articles/781-list-products-on-ebay#in-bulk).

### List a Product to Two or More eBay Accounts

To list on more than one eBay account you will need to have both linked to Neto, and rules templates created for both stores. You also need to change the below setting:

1. In your Neto control panel navigate to **eBay** > **Setup & Tools**.
2. Select **Settings**.
3. Check the setting **Allow Duplicate SKU's On Separate eBay Stores**, and **Save**.
  ![image18](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ListProductsoneBay18.05T5g00000t0KN6EAM.png)

You can now list the product twice on different eBay accounts, using the different listing rules templates.

## End eBay Listings

Please read our in depth article on how to [End and Delete eBay Listings](https://galaxy.maropost.com/kb/articles/1078-end-and-delete-ebay-listings).

## Remove Listing Rules Templates from Products

Products that you no longer wish to list on eBay should have their listing templates removed, so that they can't be accidentally relisted. While you can do this one at a time from the product, it's much quicker to do in bulk through the data export and import.

1. [Export a list of products](https://galaxy.maropost.com/kb/articles/501-product-export-wizard) that you don't want to list on eBay anymore. For example, you can export products that have 0 stock. Include the `eBay item list` field to see which products have a rules template assigned to them.
2. Open the CSV file and change the value in the eBay Items List column to `NULL`
3. Use the [data import wizard](https://galaxy.maropost.com/kb/articles/668-product-import-wizard) to import your file into your control panel. In the Update Options section, find the **eBay Items Update Options** setting and change it to **Replace Existing Records**.
  ![image19](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ListProductsoneBay19.05T5g00000t0KrUEAU.png)

The listing rules template will be removed from all the products in the file.