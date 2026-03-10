---
title: "Legacy Customer Mass Download"
articleID: 413
category: "Customers > Managing Customers"
knowledgeBase: "Retail Express"
---

# Legacy Customer Mass Download

You can use legacy customer mass download functionality for data migration and system transition purposes, helping export customer information in compatible formats. This improves your retail operations by supporting data portability, with properly configured legacy download workflows typically enabling smoother system migrations and data backup processes.

Understanding legacy download processes involves recognizing format compatibility, data field mapping, and export timing to help retail operators focus on the right data migration workflows, ensuring your retail strategy consistently drives better system transition efficiency and data preservation outcomes.

Customer Mass Download is designed to let you mass edit customer information efficiently. Customer records are downloaded into an Excel file, edits are made, and the file is saved and reimported back into Retail Express.

Take a look at the **new** **Customer Mass Download** feature here, including additional filters and new CSV file format.

## Download existing customers

To perform a Customer Mass Download using the Legacy Customer Mass Download Download Tool:

1. Navigate to **Customers > Customer Management > ****Legacy Customer Mass Download**
2. Use the Filters to define the download required (see below for detailed information on each filter)
3. If using an older version of excel select the **File Format **from the option on the right
4. Click **Export to Excel**
5. The spreadsheet will be downloaded

|  |  |
| --- | --- |
| **Filter** | **Details** |
| Export to Web Service (exact) | If the customer has been configured to export through the web service API |
| Account Terms | Used to filter Account Customers by their account terms e.g. 30 days |
| Stop Credit | If the Stop Credit option is ticked (enabled) on the Customer record or not (disabled). Stop Credit is a setting that prevents the customer from purchasing  any further products on account |
| Date Created From/To | Used to select a date range for when the customer record was created in the database |
| File Format | This field defaults to the most current Microsoft Excel format, and only needs to be changed if using version 2003 or older. |
| Date Last Updated From/To | Used to select a date range for when the customer record was last updated within Retail Express (including any changes made via POS) |
| Price Group | Can be used to filter any customers part of a specific Customer Price Group.  > **Note:** Hold the Ctrl button when selecting an option to select multiple Price Groups. |
| Price Group Fixed | Used to filter by any customers part of a specific Fixed Price Groups. Fixed Price Groups have a set price for each product (the standard Price Group calculates the product price based on a defined rule).  > **Note:** Hold the Ctrl button when selecting an option to select multiple Price Groups. |

## Editing customer details

To edit an existing customer:

1. Open the file downloaded in the previous section
2. Ensure you **do not change **the** Customer ID **or** Customer Number fields**

> **Important:** the Customer UID and Customer Number fields are used by the system to identify the existing customer record to be updated and should not be modified - changing these fields may cause a duplicate new record to be created

3. To **update a field **modify the field as required (refer to the tips below)
4. To **remove data from a field **in Retail Express type the words **CLEAR DATA **(in capitals) in the appropriate field e.g. if removing an incorrect address field.

> **Note:** This will blank the contents of the field from the Customer record in Retail Express when the file is uploaded. In the screenshot below the AddressLine2 field will be blank for the customer after the upload has been completed. Deleting the contents of the cell in Excel will indicate the field should be ignored during the upload and the data in Retail Express will remain as-is. Data cannot be deleted from mandatory fields e.g. Password.

5. Scroll across the file to see all fields and update as necessary
6. **Save the file **when you have made the required changes

![customers_customermassupload.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppPIOEA2.jpg)[Click to enlarge](https://ress.zendesk.com/hc/article_attachments/360001818116/customers_customermassupload.png)

**Tips for updating Customer Records**

- **Field limits: **Row 8 of the spreadsheet indicates the limits for each field e.g. 30 chars means a limit of 30 characters, including spaces, in the field.
- **True/False fields:** you will need to enter either of the words True or False e.g. to subscribe the customer to Emails the column ReceiveEmail would be changed to be "True"
- **Text (lookup) fields:** to add one of the lookup values to the Customer record you will need to match the name of the Lookup value exactly e.g. to add the customer to a Price Group called "VIP" the value "VIP" would be added to the PriceGroups column

## Adding new customers

New customers can be added to the spreadsheet to be uploaded at the same time as updating existing customers.

To create a new customer:

1. Ensure the **Customer ID** and **Customer Number fields are empty** (these will be generated automatically by Retail Express when the customer is created)
2. Add a **FirstName** and** Surname**

> **Note:** These fields are mandatory for the customer file to be uploaded successfully.

3. Add any additional remaining information
4. **Save the file** and follow the steps for uploading the file

## Uploading edited/new customers

Once your changes have been made to the file you will need to upload the spreadsheet into Retail Express to apply the changes.

1. Log into Retail Express
2. Navigate to **Customers > Customer Management > Legacy Customer Mass Upload**
3. Click the **Upload Excel **tab
  ![mceclip0 (90).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppQrMEAU.jpg)
4. Click **Browse for File**
5. Navigate to where you saved the file and click **Open**
6. Click **Upload**
7. A progress bar will be shown while the upload is processed
8. The system will advise when completed

## Frequently Asked Questions

[Illegal characters causing the upload to fail](https://galaxy.maropost.com/kb/articles/413-legacy-customer-mass-download#illegal-characters)

Errors with the upload are commonly related to special characters such as question marks, commas, dollar signs and other special characters. These are not accepted within customer creation and need to be removed before re-attempting the upload process.