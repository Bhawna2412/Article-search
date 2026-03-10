---
title: "Approve Products to List on Catch"
articleID: 1118
category: "Neto by Maropost > Catch"
knowledgeBase: "Article Archive"
lastUpdated: 2025-12-01
---

# Approve Products to List on Catch

To list and sync products between Maropost Commerce and Catch you need to mark them as 'approved' in Maropost Commerce. This allows Maropost Commerce to update the price and stock levels on Catch, keeping them in sync with your other marketplaces.

> **Note:** Configure products to list on Catch by following the steps here.

Products in Maropost Commerce can be approved in three ways:

- Individually
- In Bulk
- Using the Import Wizard
- End a Catch Listing

> **Important:** Maropost Commerce cannot end or delete listings on your Catch account. If you unapprove products, they will no longer sync from Maropost Commerce, but will still be listed on Catch.

### Individually

1. 
  In your Maropost Commerce control panel navigate to the **Products** > **Active** page.
2. 
  Click on the SKU you want to list and update on Catch.

  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ProductstoListonCatch.05T5g00000tuPcHEAU.png)
3. 
  Click the **Approved for Catch** checkbox.
4. 
  Click the **Save** button.
5. 
  Repeat the process for each product to approve.

### In Bulk

1. 
  In your Maropost Commerce control panel navigate to **Products** > **Active**.
2. 
  Select the products to approve within Catch by selecting the checkboxes next to each product you want to approve.
3. 
  Click the **With x Selected ** button (beneath the product list) and select **Approve for Catch** from the pop up menu.
4. 
  In the confirmation pop-up, click the **OK** button.
5. 
  Repeat the process for each group of products to approve.

### Import Wizard

> **Note:** Export a list of products that you want to approve for Catch first using the export wizard.

1. 
  In your Maropost Commerce control panel navigate **Settings & Tools** > **Import Data**.
2. 
  Click the **Perform complex import** button and select **Start Data Import Wizard** from the menu.
3. 
  On the **Upload File** page, click the **Browse** button and locate the file to upload.
4. 
  Click the **Continue to Next Step button**.
5. 
  Select 'SKU*' within the **Database Field Name** field.

> **Note:** Remove any other fields to ensure other data isn't overwritten, and to speed up the import process.

6. 
  Click the **Add Extra Field** button.
7. 
  Select 'Approved For Catch' from the **Database Field Name**
8. 
  Change the **Column name** dropdown to 'Static Value'.

  A blank field will display beneath.
9. 
  Enter 'Y' in the blank field.
10. 
  Click the **Continue to Next Step**.
11. 
  Select **Update Existing Products Only** from the **How Do You Want To update Your Database** drop down box.
12. 
  Click the **Continue to Next Step** button.
13. 
  Click the **Process File Now** button.

  Maropost Commerce will start updating all the product SKUs imported as **Approved For Catch**. Allow up to 10 minutes to complete the import process depending on the number of products you've imported.

You have successfully approved products to list and update on Catch. Maropost Commerce will now be able to update the prices and stock levels of your products on Catch. This process occurs approximately every 15 minutes.

### End a Catch Listing

There are two steps you must perform to end a listing on the Catch marketplace:

1. 
  Un-approve the product in Maropost Commerce. Follow the steps to [approve products to list on Catch](https://galaxy.maropost.com/s/article/approve-products-to-list-on-catch), but instead Un-approve them.
2. 
  Log in to your [Catch marketplace seller account](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.catch.com.au%2Flogin) and end the listing.

### Related Articles

- [Set up Catch](https://galaxy.maropost.com/s/article/set-up-catch)
- [Configure Catch Category and Field Mapping](https://galaxy.maropost.com/s/article/set-up-catch-category-and-field-mapping)
- [Catch Overview](https://galaxy.maropost.com/s/article/catch-overview)