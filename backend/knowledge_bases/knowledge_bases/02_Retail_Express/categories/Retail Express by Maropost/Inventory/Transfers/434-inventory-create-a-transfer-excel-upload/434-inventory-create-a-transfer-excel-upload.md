---
title: "Inventory - Create a Transfer (Excel Upload)"
articleID: 434
category: "Inventory > Transfers"
knowledgeBase: "Retail Express"
---

# Inventory - Create a Transfer (Excel Upload)

Find **related articles and FAQs **at the bottom of this page

This article details how to create a Stock Transfer in Back Office using a purpose built Excel spreadsheet to populate your products and quantities. You can transfer stock from one Store/Outlet to a single Store, or choose to transfer stock to multiple different Stores at the same time.

> **Note:** Ensure you download a new copy of the template each time you use it to avoid any data integrity issues.

![createtransafer.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppQKYEA2.jpg)

### [Step 1 - Get the Transfer Template](https://galaxy.maropost.com/kb/articles/434-inventory-create-a-transfer-excel-upload#collapseOne)

The Transfer Template is prepared based on the options selected from the Create Transfer screen.

To create a new Transfer Template:

1. Navigate to **Inventory >****Transfer Management > Create**
2. Make a select from the fields as required (see below for detailed information)
3. Click **Get Excel Template**
4. Open the spreadsheet that downloads
5. Click **Enable Editing**

|  |  |
| --- | --- |
| Transferred By | User creating the transfer |
| Method | Method used to create a transfer (for this process select Product Upload)  > **Note:** If you're looking for information on using Product Search Method, see: How to Create a Transfer via the Search Method. |
| Outlet From | The Store/Outlet stock is to be transferred from |
| Transfer To | The Store/Outlet stock is to be transferred to  > **Note:** You can select a single location or multiple/all locations |
| Notes | Enter internal notes or details to be populated onto the transfer/s |

### [Step 2 - Populate the Transfer Template](https://galaxy.maropost.com/kb/articles/434-inventory-create-a-transfer-excel-upload#collapseTwo)

Within the Transfer Template begin entering the Product ID or Supplier SKU and quantities of the products for transfer.

If you selected multiple *Transfer To* Outlets when downloading the template, ensure to also enter the ToWarehouseName for each Product.

> **Note:** The ToWarehouseName on the template must match exactly with your Outlet name. You can check your Outlet names via: Settings > Locations / Outlets > Outlets.

![excelitoupload.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppQ6rEAE.jpg)
Save the file once complete, taking note of the saved location.

### [Step 3 - Upload the Transfer Template ](https://galaxy.maropost.com/kb/articles/434-inventory-create-a-transfer-excel-upload#collapseThree)

Return to the Create Transfer screen to upload the Transfer template.

1. N
2. Click the **Upload Excel** tab
3. Click **Select**
4. Browse to the location of the saved Transfer Template
5. Click **Upload**
6. If the Upload was successful a message will be displayed
7. If there were errors they will be detailed at the bottom of the screen; correct the errors and repeat the steps above to try again

![uploadtransfer.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppQQpEAM.jpg)

## Viewing created Transfers

The Transfer Report will show any created Transfers, allowing you to confirm any data that has been uploaded.

> **Note:** If you upload the Transfer file again it will duplicate the transfer.

To run the Transfer Report:

1. Navigate to **Inventory > Transfer Management > Transfer Report**
2. Select the **Outlet From** and **To** filters leaving other filters at the default
3. Click **Search**
4. Any created transfers for your selected Outlets created that day will be displayed (you can click the Transfer number to open and review the products within).

### [Step 4 - Process your Transfers ](https://galaxy.maropost.com/kb/articles/434-inventory-create-a-transfer-excel-upload#collapseFour)

Transfers created via Upload will have a Transfer status of **In Progress**

> **Note:** In Progress Transfer are created with the Stock at the stage of Allocated.

An In Progress status for your Transfer results in the below stock movement occurring (example image contained below is an extract from the Inventory Movement Log):

- - the *From Outlet* has the Available stock decreased and the Allocated stock increased
- - the *To Outlet* has the Requested stock increased

![blobid0 (17).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppQQzEAM.jpg)
**FAQs**

### **Process Transfers in Bulk**

To manage your Transfers in bulk:

1. Navigate to: Inventory > Transfer Management > Bulk Edit
2. Enter filters to review and action your selected Transfers
3. Click Search
4. All associated Transfer products are displayed.

For detailed information on managing Transfers en-masse refer to the Mass Edit Transfers article