---
title: "Approve Products to List on Amazon"
articleID: 774
category: "Ways to Sell on Neto > Amazon > Launch Amazon Australia"
knowledgeBase: "Neto By Maropost"
---

# Approve Products to List on Amazon

To list and sync products between Neto and Amazon you need to mark them as 'approved' in Neto. This will allow Neto to update the price and stock levels on Amazon, keeping them in sync with your other marketplaces.

> **Note:** Register products on Amazon Australia by following the steps [here](https://galaxy.maropost.com/kb/articles/700-set-up-amazon-mapping-for-product-registration).

Products in Neto can be approved in three ways:

- [Individually](https://galaxy.maropost.com/kb/articles/774-approve-products-to-list-on-amazon#individually)
- [In Bulk](https://galaxy.maropost.com/kb/articles/774-approve-products-to-list-on-amazon#in-bulk)
- [Using the Import Wizard](https://galaxy.maropost.com/kb/articles/774-approve-products-to-list-on-amazon#import-wizard)

> **Important:** Neto cannot end or delete listings on your Amazon account. If you unapprove products they will no longer sync from Neto, but will still be listed on Amazon.

## Individually

1. In your Neto control panel navigate to the **Products** > **Active** page.
2. Select the SKU you want to list and update on Amazon.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/servlet1.05T5g00000N0YbDEAV.png)
3. Click the **Approved for Amazon** checkbox.
4. Click the **Save** button.
5. Repeat the process for each product to approve.

## In Bulk

1. In your Neto control panel navigate to **Products** > **Active**.
2. Select the products to approve within Amazon by selecting the checkboxes next to each product you want to approve.
3. Click the **With x Selected ** button (beneath the product list) and select **Approve for Amazon** from the pop up menu.
4. In the confirmation pop-up, click the **OK** button.
5. Repeat the process for each group of products to approve.

## Import Wizard

1. Login to your Amazon seller account.
2. From the tool bar, navigate **Inventory** > **Inventory Reports**.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/servlet2.05T5g00000N0YPcEAN.png)
3. Select **Inventory Report** from the **Select Report Type field.**
  Amazon will generate a file and display for download in the **Check Report Status & Download** section.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/servlet3.05T5g00000N0YbwEAF.png)
4. Click the **Download** link to download the report for view.
5. Open the downloaded file in MS Excel.

> **Important:** The data may save as a Notepad (.txt) file. If so, copy the data from the notepad file and paste in a blank MS Excel document.

  When the report is opened within MS Excel, an Import Wizard will open, preparing to format report data into columns.

> **Note:** The Import Wizard can still run (if it doesn't display) by highlighting the relevant column and navigating **Data > Text to Columns**.

6. In the **Text Import Wizard - Step 1 of 3** window, click the **Next** button.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/servlet4.05T5g00000N0YYeEAN.png)

  The **Text Import Wizard - Step 2 of 3** window displays.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/servlet5.05T5g00000N0Yd4EAF.png)
7. Click the **Next** button.
  The **Text Import Wizard - Step 3 of 3** window displays.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/servlet6.05T5g00000N0Y8gEAF.png)
8. Click the **Finish** button.
  Information will display in selected columns - **SKU**, **Amazon Standard Identification Number (ASIN)**, **Price** and **Quantity**.
9. Delete the **Amazon Standard Identification Number (ASIN)**, **Price** and **Quantity**.
10. Save the document in a '.csv' (Comma Separated Values) format (File > Save As).
11. In your Neto control panel, navigate **Settings & Tools** > **Import Data**.
12. Click the **Perform complex import** button and select **Start Data Import Wizard** from the Pop-up menu.
13. From the **Upload File** page, click the **Browse** button and locate the file to upload.
14. Click the **Continue to Next Step button**.
  The **SKU** field in Neto must be matched with the **SKU** field in Amazon.
15. Select 'SKU*' within the **Database Field Name** field.
16. Click the **Add Extra Field** button.
17. Select 'Approved For Amazon' from the **Database Field Name**
18. Change the **Column name** dropdown to 'Static Value'.
  A blank field will display beneath.
19. Enter 'Y' in the blank field.
20. Click the **Continue to Next Step**.
21. Select **Update Existing Products Only** from the **How Do You Want To update Your Database** drop down box.
22. Click the **Continue to Next Step** button.
23. Click the **Process File Now** button.
  Neto will start updating all the products that exist on your Amazon account as **Approved For Amazon**. Allow up to 10 minutes to complete the import process depending on the number of products you've imported.

You have successfully approved products to list and update on your Amazon account. Neto will now be able to update the prices and stock levels of your products on Amazon. This process occurs approximately every 15 minutes.