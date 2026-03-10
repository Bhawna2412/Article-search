---
title: "eBay Vehicle Parts Compatibility"
articleID: 1226
category: "Ways to Sell on Neto > eBay > Launch eBay Sell"
knowledgeBase: "Neto By Maropost"
---

# eBay Vehicle Parts Compatibility

## Overview

Parts compatibility allows sellers to show a variety of vehicles that are compatible with a part or accessory in a single listing.

With parts compatibility, you can create one listing describing a single part, and add a complete list of compatible vehicles from more than 37,000 models.

## Benefits

**More potential sales**

- Buyers can easily find parts that fit their specific vehicle.
- Listings with parts compatibility information appear higher in search results as they are more relevant to the buyer.
- Gives customers more confidence that the part will fit the vehicle they are buying.

**Less potential cost**

- Decreased fees from duplicate listings.
- Less time and money spent on returns.
- Fewer resources are devoted to answering customer questions about whether the part will fit their specific vehicle.

## Set up Parts Compatibility

There are various ways to set up eBay parts compatibility, as discussed below:

- [ePID in Custom Product Field](https://galaxy.maropost.com/kb/articles/1226-ebay-vehicle-parts-compatibility#epid-in-custom-product-field)**[Recommended]**
- [ePID as Content Type](https://galaxy.maropost.com/kb/articles/1226-ebay-vehicle-parts-compatibility#epid-as-content-type)
- [Make, Model & Submodel](https://galaxy.maropost.com/kb/articles/1226-ebay-vehicle-parts-compatibility#make-model-submodel)**[Legacy]**
- [kType](https://galaxy.maropost.com/kb/articles/1226-ebay-vehicle-parts-compatibility#ktype)**[Legacy]**

### ePID in Custom Product Field

> Note: This is the recommended method. Also, know that it does not support compatibility notes.

This method tags the vehicles that are compatible with a given SKU by using the Custom Product field to host the list of compatible eBay Product IDs (ePIDs).

Follow the Steps below:

1. Create a Custom Product Field as per the instructions in the [Add and Manage Products](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products) article. Make sure that the **Field Type is** selected as "**Text**". Other fields can be filled as per your preference. See the screenshot below as an example:
  ![ePID_CPF_Step1.png](https://us.v-cdn.net/6038474/uploads/J5LAEKOMKTEQ/epid-cpf-step1.png)
2. On the Listing Rule Template, navigate to the **Categorisation & Listing Rules** tab.
  ![ePID_CPF_Step2.png](https://us.v-cdn.net/6038474/uploads/A88MQWB3E84J/epid-cpf-step2.png)
3. Scroll down to locate the **eBay Compatibility List** menu and select "**Map to custom product field with comma (,) separated list of ePIDs**".
  ![ePID_CPF_Step3.png](https://us.v-cdn.net/6038474/uploads/UXJ0K8JLMVMC/epid-cpf-step3.png)

> **Note:** The **eBay Compatibility List** menu will only be visible if the selected Fallback Primary Category is compatible with eBay Parts Compatibility.

4. In the dropdown menu, select the Custom Product Field that you created in Step 1.
  ![ePID_CPF_Step4.png](https://us.v-cdn.net/6038474/uploads/AANZG7JMMGBN/epid-cpf-step4.png)
5. On the product Edit page of any product associated with the Listing Rule Template, enter a comma-separated list of vehicle ePIDs. The ePIDs can be found in the [eBay Master Vehicle List (MVL)](https://www.ebay.com.au/help/selling/selling/selling-vehicles-parts-accessories?id=4647#section6).
  ![ePID_CPF_Step5.png](https://us.v-cdn.net/6038474/uploads/BSR8A7XRATPN/epid-cpf-step5.png)

> **Note:** The default "ePID for eBay Australia" field visible in the "List to eBay" section refers to Product ePIDs used for [eBay Product Based Shopping Experience](https://galaxy.maropost.com/kb/articles/1080-ebay-product-based-shopping-experience) configuration. It is not suitable to host the vehicle ePIDs.

6. You may now revise your listings to push the vehicle list to eBay.

### ePID as Content Type

> Warning: Only use this method if compatibility notes are absolutely required. Creating a "content type" tree, that is category tree, may affect webstore performance even if unused on the webstore frontend.

This method tags the vehicles that are compatible with a given SKU by using Content Type to assign ePIDs to the products as a Category.

Follow the steps below:

1. Create a new Content Type with the following settings:  1. Name: "ePID"
  2. Unique Code: "ePID"
    ![ePID_CT_Step1.png](https://us.v-cdn.net/6038474/uploads/4ECIQEIOYM9D/epid-ct-step1.png)
2. Download and open the eBay Master Vehicle List.  1. Rename the "ePID" column to "Name".
  2. Delete all other columns.
  3. Save the file as a CSV.
3. Start the Data Import Wizard. Select "What are you importing?" as "Category or Content" and upload the file created in Step 2.
  ![ePID_CT_Step2.png](https://us.v-cdn.net/6038474/uploads/CY86BZ5DN4GK/epid-ct-step2.png)
4. Click "Continue to Next Step" and on the Field Mapping step, map as below:

Name -> Column Name = "Name" 

Add Extra Fields:  1. Content Type* -> Static Value = "ePID" (this MUST match the Content Type name created on Step 1 of these instructions)
  2. Label 1 -> Static Value = "ePID" (this MUST BE exactly "ePID")
Then, complete the Import Wizard.
    ![ePID_CT_Step3.png](https://us.v-cdn.net/6038474/uploads/HS2NYELEYF9P/epid-ct-step3.png)
5. On the Listing Rule Template, navigate to the **Categorisation & Listing Rules** tab and locate the **eBay Compatibility List** menu.
  ![ePID_CT_Step4.png](https://us.v-cdn.net/6038474/uploads/FOTERTFG4P01/epid-ct-step4.png)

> **Note:** The "eBay Compatibility List" menu will only be visible if the Fallback Primary Category selected is compatible with eBay Parts Compatibility. 
> Select **Map to product compatibility List** = "ePID" (the Content Type created on Step 1) and Save.

6. You can now select or import the relevant ePID onto the products. Follow the instructions in [Add and Manage Products](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products) to add Categories (in this case, "ePID") to products manually or in bulk.
7. You may now revise your listings to push the vehicle list to eBay.

### Make, Model, Submodel

> Warning: This is a legacy method and may cause backend and front-end latency.

If your product has data that correlates to the make, model, year, variant, and so on, you can use this to match to an eBay parts compatibility tree. The compatibility tree requires you to map make, model, variant, year, submodel & engine.

- Create the Category Tree
- Assign Parts Compatibility to Products
- Set up the Listing Rules Template

#### Create The Category Tree

Before you begin to categorise your products, you first need to create a category tree to house the category data.

1. In your Neto control panel, navigate to **eBay** > **Setup & Tools** and choose **Import eBay Categories**.
2. Select **Import eBay Vehicle Compatibility Categories** from the drop-down menu and click **Continue**.
3. Choose the **eBay Category Tree** to download. If you are setting up parts compatibility for the first time, select **Create A New Category Tree** and **Only Insert New Records**. Name the tree **Parts Compatibility**.
4. When complete, click **Import Data**.

#### Assign Parts Compatibility To Products

Now that you've created your category structure, you can assign it to your products. There are two methods, individually and in bulk (though export & import).

**Individually**

Parts Compatibility can be assigned to products in the same way as product categories. Please follow the [how to add a product to a product category](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products#product-category) instructions, remembering to select **Parts Compatibility** instead of **Product Category**.

**Bulk Method**

To assign parts compatibility to multiple products at once, use the Neto [Import Wizard](https://galaxy.maropost.com/kb/articles/668-product-import-wizard) to upload a CSV file with your products and the associated compatibility information.

Below is an example of how you can structure the layout of the CSV file.

| SKU | Make | Model | Submodel | Year | Variant | Engine | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SKU_1 | Holden | Commodore | VX Sedan 3.8 i V6 | 2002 | RWD Petrol 3.8L 6cyl 152kW L36(231CUV6) | 3791cc 152kW (Petrol) | Auto |
| SKU_1 | Holden | Commodore | VU Ute 3.8 | 2002 | RWD Petrol 3.8L 6cyl 152kW | 3791cc 152kW (Petrol) | Auto |
| SKU_1 | Holden | Commodore | VY Wagon 3.8 i V6 | 2002 | RWD Petrol 3.8L 6cyl 152kW L36(231CUV6) | 3791cc 152kW (Petrol) | Auto |
| SKU_1 | Holden | Commodore | VY Sedan 3.8 i V6 | 2002 | RWD Petrol 3.8L 6cyl 152kW L36(231CUV6) | 3791cc 152kW (Petrol) | Auto |
| SKU_2 | Holden | Commodore | VZ Sedan 3.6 i V6 | 2004 | RWD Petrol 3.6L 6cyl 175kW HB,LE0 | 3565cc 175kW (Petrol) | Auto |

The template for importing the above file would look like this

![eBayVehiclePartsCompatibility1.05T5g00000jF8AJEA0.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayVehiclePartsCompatibility1.05T5g00000jF8AJEA0.png)

> Important: The notes section uses :: as a separator which is defined on the Update Options tab of the import wizard.

![eBayVehiclePartsCompatibility2.05T5g00000jF7vaEAC.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayVehiclePartsCompatibility2.05T5g00000jF7vaEAC.png)

#### Set up the Listing Rules Template

All products using this rules template will now push the Parts Compatibility data assigned through to eBay.

1. In your Neto control panel, navigate to **eBay** > **Listing Rule Templates**.
2. Open the template you wish to use to list parts compatibility by clicking on the appropriate **ID**.
  ![eBayVehiclePartsCompatibility3.05T5g00000jF8AdEAK.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayVehiclePartsCompatibility3.05T5g00000jF8AdEAK.png)
3. On the **Categorisation & Listing Rules** tab, select a fallback category that allows part compatibility (e.g., Vehicle Parts & Accessories > Car, Truck Parts > Exterior > Other).
  ![eBayVehiclePartsCompatibility4.05T5g00000jF8AiEAK.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayVehiclePartsCompatibility4.05T5g00000jF8AiEAK.png)
4. A drop-down will appear under the **Specifics** section called **Compatibility List**. Select **Parts Compatibility** and click **Save**.
  ![eBayVehiclePartsCompatibility5.05T5g00000jExrtEAC.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayVehiclePartsCompatibility5.05T5g00000jExrtEAC.png)

### KType

> Warning: This is a legacy method and may cause backend and front-end latency.

The kType mapping allows you to define which makes and models of cars are compatible with the product by a reference number associated with each product. That reference number is called a kType code.

The master list of kType data is available to [download from eBay](http://pages.ebay.com.au/help/sell/contextual/master-vehicle-list-manually.html).

- Create the Category Tree
- Import kType Codes into Neto
- Set up the Listing Rules Template to use kType

#### Create the Category Tree

1. In your Neto control panel, navigate to **Settings & Tools** > **All Settings & Tools**.
2. Under **Control Panel**, click **Content Types Manager**.
  ![eBayVehiclePartsCompatibility6.05T5g00000jF4wzEAC.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayVehiclePartsCompatibility6.05T5g00000jF4wzEAC.png)
3. Click **Add New**.
  ![eBayVehiclePartsCompatibility7.05T5g00000jF5OEEA0.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayVehiclePartsCompatibility7.05T5g00000jF5OEEA0.png)
4. Populate the **Name** and **Unique Code** fields with **kType** and click **Save & Close**.
  ![eBayVehiclePartsCompatibility8.05T5g00000jF8CjEAK.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayVehiclePartsCompatibility8.05T5g00000jF8CjEAK.png)

#### Import kType Codes into Neto

1. [Download](https://www.neto.com.au/assets/files/ktype-2021.csv) the latest kType code list.
2. In your Neto control panel, navigate to **Settings & Tools** > **Import**.
3. Click **Perform Complex Import** and then choose **Start Data Import Wizard**.
  ![eBayVehiclePartsCompatibility9.05T5g00000jF6H5EAK.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayVehiclePartsCompatibility9.05T5g00000jF6H5EAK.png)
4. Select **Category Or Content** in the **What Are You Importing?** drop-down box. Then click **Choose File** and upload the kType code list. When complete, click **Continue To Next Step**.
  ![eBayVehiclePartsCompatibility10.05T5g00000jF5OFEA0.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayVehiclePartsCompatibility10.05T5g00000jF5OFEA0.png)
5. Modify the field mapping to look like the image below and click **Continue To Next Step**.
  ![eBayVehiclePartsCompatibility11.05T5g00000jF6BkEAK.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayVehiclePartsCompatibility11.05T5g00000jF6BkEAK.png)
6. Click **Continue To Next Step** again and then **Process File Now**.

> Note: Due to the size of the file, it may take several minutes for the file to be imported.

#### Assign kTypes codes to products

Like category information, kTypes also need to be applied to your products so eBay can read the information, and this can be done individually or in bulk.

**Individually**

KType codes can be assigned to products in the same way as product categories. Please follow the [how to add a product to a product category](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products#product-category) instructions, remembering to select **kType** instead of **Product Category**.

**Bulk Method**

To assign kType codes to multiple products at once, it is best to use the Neto [Import Wizard](https://galaxy.maropost.com/kb/articles/668-product-import-wizard) to upload a CSV file with your products and the associated kType codes.

#### Set up the Listing Rules Template to use kType

1. In your Neto control panel, navigate to **eBay** > **Listing Rule Templates**.
2. Open the template you wish to use to list using kType codes by clicking on the appropriate **ID**.
  ![eBayVehiclePartsCompatibility12.05T5g00000jF8AeEAK.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayVehiclePartsCompatibility12.05T5g00000jF8AeEAK.png)
3. On the **Categorisation & Listing Rules** tab select a fall back category that allows compatibility.
  ![eBayVehiclePartsCompatibility13.05T5g00000jF1N7EAK.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayVehiclePartsCompatibility13.05T5g00000jF1N7EAK.png)
4. A drop-down will appear under the **Specifics** section called **Compatibility List**. Select **kType** and click **Save**.
  ![eBayVehiclePartsCompatibility14.05T5g00000jF80jEAC.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayVehiclePartsCompatibility14.05T5g00000jF80jEAC.png)
5. All products using this rules template will now push the kType data assigned through to eBay.

## Update eBay Parts Compatibility Categories

- Download the Latest Parts Compatibility Information
- Update eBay Parts Compatibility Categories
- Update Products With Inactive Compatibility

#### Download the Latest Parts Compatibility Information

If you haven't yet downloaded the parts compatibility information at all, follow these steps.

1. In your Neto control panel, navigate to **eBay** > **Setup & Tools**.
2. Click **Site Manager**.
3. Select the boxes which correspond to the eBay sites you're trading on (e.g. Australia, US, UK).
4. This download will take 15 - 30 minutes to complete, depending on the number of sites you've selected.
  ![eBayVehiclePartsCompatibility15.05T5g00000jF7WeEAK.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayVehiclePartsCompatibility15.05T5g00000jF7WeEAK.png)

#### Update eBay Parts Compatibility Categories

eBay periodically updates its category structure, including its parts compatibility. So that you can access the latest data, the categories need to be downloaded into Neto so they can be applied to your products. Follow the steps below to update your parts compatibility.

1. In your Neto control panel, navigate to **eBay** > **Setup & Tools**.
2. Click on **Import eBay Categories**.
  ![eBayVehiclePartsCompatibility16.05T5g00000jF850EAC.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayVehiclePartsCompatibility16.05T5g00000jF850EAC.png)
3. From the drop-down list, choose **Import eBay Vehicle Compatibility Categories** and click **Continue**.
  ![eBayVehiclePartsCompatibility17.05T5g00000jF5gaEAC.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayVehiclePartsCompatibility17.05T5g00000jF5gaEAC.png)
4. Select the compatibility tree you wish to download. For eBay Australia, this will be **Vehicle Parts & Accessories > Car, Truck Parts > Exterior > Other**.
5. Select the Neto category tree to update, or to start over from scratch, select **Create New Category Tree**.

#### Update Products With Inactive Compatibility

eBay will often remove outdated parts compatibility categories in their updates, so these must also be removed from products. To find products with inactive categories:

1. Select if you want to replace the existing category tree or just insert new records. If you only insert new records, old categories that are no longer in use won't be marked inactive.
2. Once these settings are selected, click **Import Data**. Parts compatibility will now be downloaded, and may take up to an hour to complete. Once done, you'll receive a confirmation screen telling you how many categories were created and updated.
3. In your Neto control panel, navigate to **Webstore** and choose the parts compatibility tree.
4. Expand the search filters. Set the status to **Inactive**, and **No. Of Items** from **1** to blank, then click **Apply**.
  ![eBayVehiclePartsCompatibility18.05T5g00000jF82zEAC.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayVehiclePartsCompatibility18.05T5g00000jF82zEAC.png)
5. For each inactive category, click the number in **No. Of Items** to see the products affected. Open them and remove the inactive category to prevent revision errors.
  ![eBayVehiclePartsCompatibility19.05T5g00000jF2U6EAK.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayVehiclePartsCompatibility19.05T5g00000jF2U6EAK.png)