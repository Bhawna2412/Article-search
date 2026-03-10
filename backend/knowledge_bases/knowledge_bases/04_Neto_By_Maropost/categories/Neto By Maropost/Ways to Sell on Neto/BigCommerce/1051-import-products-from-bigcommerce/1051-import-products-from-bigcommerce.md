---
title: "Import Products from BigCommerce"
articleID: 1051
category: "Ways to Sell on Neto > BigCommerce"
knowledgeBase: "Neto By Maropost"
lastUpdated: 2025-12-05
---

# Import Products from BigCommerce

Like Maropost Commerce, BigCommerce has a product export function that can be used to populate your entire product list in Maropost Commerce. It's important to note that this process does not import all product information exactly as it was in BigCommerce, due to differences in how products are structured.

You will still need to perform some data entry tasks in the file you download from BigCommerce. This process creates a template to import your BigCommerce data, so any changes you make in the CSV file can be easily imported without needing to go through the wizard each time. These tasks are discussed further at the end of this article.

### In this Article

- [Create a BigCommerce Product File](#2)
- [Create the Import Template in Maropost Commerce](#)
- [Variation Specifics](#4)
- [Next Steps](#5)

### Create a BigCommerce File

Create a CSV file of your products in BigCommerce so that they can be imported into Maropost Commerce:

1. 
  In BigCommerce navigate to **Advanced Settings** > **Export Templates**.
2. 
  Click the **Create an Export Template** button.
3. 
  Name the template **Maropost Commerce **and deselect all export options except **Enable Products Exporting**.
4. 
  In the advanced settings, change **Sub Items** to **Expand sub items across the csv**.
5. 
  Save and generate the file.

### Create the Import Template in Maropost Commerce

BigCommerce fields match up quite well with Maropost Commerce product fields, though you will need to make some edits. For that reason, start by creating an import template using the wizard:

1. 
  Follow the steps in the [import wizard](https://galaxy.maropost.com/s/article/Importing-Products) to upload your file and map the fields to Maropost Commerce. The table below provides a good match between Maropost Commerce and BigCommerce fields.
2. 
  In the **Update Options** step, expand the advanced settings. Change the settings mentioned in the table above so that it matches the image below.

  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ImportProductsfromBigCommerce1.05T5g00000tkYasEAE.png)
3. 
  At the **Process File** step, ensure you save the settings as a template, then process the file.

Your file will import however not all products will be created correctly. These issues are easily fixed with some manipulation of the template.

1. 
  Navigate to **Settings & Tools** > **Import Data**.
2. 
  Click **Complex Import** and choose **Use Existing Custom Import Templates**.
3. 
  Find your BigCommerce template and click on it to edit the settings.
4. 
  Click on the **Find & Replace** tab and add the three find and replace entries mentioned in the above table, so that it matches the image below.

  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ImportProductsfromBigCommerce2.05T5g00000tkXpdEAE.png)
5. 
  **Save** the template. You can now click **Go Back** to upload your file again. If you have products with variations, we recommend the below steps to add your variation specifics.

  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ImportProductsfromBigCommerce3.05T5g00000tkYcKEAU.png)

### Variation Specifics

BigCommerce outputs variation specifics into the product name field of each variation, in a format that isn't readable by Maropost Commerce. This data can be manipulated quite easily using excel (or a similar spreadsheet program) so that it can be imported into the **Item Specifics** field.

> **Warning:** These steps involve manipulating the product name field in bulk by adding special characters. If your product names contain commas, colons, or equals signs, perform these steps after your initial import.

1. 
  Open the csv file exported from BigCommerce.
2. 
  Select the **Product Name** column, so every row in this column is selected.
3. 
  Run a find and replace (Ctrl + H) to format the item specifics for variation products.

  Your product name field will change so that the variations are now formatted correctly to be imported into Maropost Commerce.
4. 
  Save your **CSV** file.
5. 
  In Maropost Commerce, open your BigCommerce import template.
6. 
  Find where the **Name** field is mapped to **Product Name**.
7. 
  Change the Maropost Commerce field from **Name** to **Item Specifics** and click **Save Changes**.
8. 
  Click **Go Back** and you'll be taken to the list of import templates. Upload your file and run the import.

![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ImportProductsfromBigCommerce4.05T5g00000tkYeuEAE.png)
All of your variation products will now be updated with their item specifics.

### Next Steps

Before you start selling product on other sales channels, you may want to update your products further to fill the gaps not covered by this process. You can do this by manually changing the CSV file, performing an export & import from Maropost Commerce, or manually editing products. Some of the steps we suggest are:

- [Link product variations to the parent products](https://galaxy.maropost.com/s/article/How-can-I-link-variation-parent-and-child-SKUs).
- Add a name for product variations.
- [Link shipping categories to products](https://galaxy.maropost.com/s/article/How-do-I-setup-a-shipping-category).
- [Build kit products](https://galaxy.maropost.com/s/article/How-to-setup-a-kit-or-bunch-of-productsFixed-kits).