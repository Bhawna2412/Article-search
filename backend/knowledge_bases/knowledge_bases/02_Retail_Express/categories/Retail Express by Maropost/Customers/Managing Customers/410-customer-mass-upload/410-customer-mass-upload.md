---
title: "Customer Mass Upload"
articleID: 410
category: "Customers > Managing Customers"
knowledgeBase: "Retail Express"
---

# Customer Mass Upload

You can perform customer mass uploads to efficiently add or update large numbers of customer records using spreadsheet imports, helping streamline database management tasks. This improves your retail operations efficiency by enabling bulk customer data management, with properly configured mass upload workflows typically reducing administrative time and improving data accuracy through standardized templates.

Understanding customer mass upload involves recognizing file format requirements, field mapping specifications, and validation processes to help retail operators focus on the right bulk data management workflows, ensuring your retail strategy consistently drives better operational efficiency and customer database accuracy outcomes.

Retail Express offers a Customer Mass Upload tool with field mapping and on-screen validation for upload errors, so you can efficiently manage your customer details in bulk. Mass Upload can be combined with the Mass Download tool, by downloading existing customer data, updating records, and reporting the information back into Retail Express.

## Before you Begin

- Only **one upload** can be processed at a time per database
- Customer data must be saved in a **CSV file** format
- A list of **Upload fields and data requirements** (including character limits) can be found in the Customer Mass Upload Field Requirements article
- Mass Upload is not compatible with the legacy Retail Express Customer Upload Excel Template - download a new CSV template to upload your data
- We **recommend adding an apostrophe (')** before some fields to ensure the data format is retained, and not truncated by Excel (see a list of these fields here)
  ![mceclip3 (15).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powMYEAY.jpg)

## Uploading Customer Data

To upload your customer data:

1. Navigate to **Customers > Customer Management > Customer Mass Upload**
2. You can either import existing CSV files from other systems and map the fields (we recommend checking the Field Requirements first) or click **Download New Template **for a blank file
  Click Download a Sample File for example data and guidelines on each of the columns
3. Click **Browse for File **or drag and drop your file onto the window
4. Click **Upload**
5. You will now be prompted to map the Retail Express columns to match data in your spreadsheet
  ![mceclip0 (42).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powMsEAI.jpg)
6. Use the **First Row in File is headers **toggle to indicate whether the first row of your spreadsheet contains column headers
  The Preview column will update to show the first row of data as you change the toggle
7. Toggle on **Upload includes new customers **if your file contains new customers to be created - if this option is disabled, the Customer ID or Customer Number will be mandatory for all rows to ensure an existing customer record is found
8. To map your data fields for upload, ensure the **Retail Express Field** is toggled on, then select the corresponding column from your spreadsheet in the **Upload File Column **dropdown

> **Note:** If a column is found with a Name that matches the Retail Express field it will be automatically selected in the Upload File Column dropdown

9. Use the **Prevent Duplicates **toggle to be notified if there are duplicate mobile numbers or email addresses detected within your existing customer data or the file you're uploading
10. Click **Continue**
11. The file will begin uploading and validating the data (the time taken will depend on the size of your file - you can navigate away from this page and come back)
12. Once processed, the Validation Details will be displayed, with a list of any detected errors underneath e.g. duplicate emails
  ![mceclip1 (22).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powMxEAI.jpg)
13. Work your way through any errors by performing one of the following actions
	- Editing the values (click into the Value field to edit on-screen)
	- Selecting to "Clear Data" (set back to empty or zero)
	- Select from the drop-down for existing options
	- or click "Keep this row" on the row to be retained when there are duplicates detected
  For assistance with troubleshooting and resolving any errors refer to the Customer Mass Upload Validation Errors article

  ![mceclip2 (17).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powHoEAI.jpg)
14. Once all errors are processed click **Continue**
15. The file will now be uploaded and replace the data in Retail Express

## Frequently Asked Questions

[How do I prevent duplicate customer mobile numbers and email addresses?](https://galaxy.maropost.com/kb/articles/410-customer-mass-upload#duplicate)

The Upload Tool includes a Prevent Duplicates column that allows you to prevent duplicates for both mobile and email addresses.

> **Note:** If your POS Customer Settings option "Allow duplicate email addresses" is not enabled (i.e. restrict duplicates) the Prevent Duplicates setting will be automatically toggled on for the Customer Mass Upload.

When the Prevent Duplicates is toggled on and a duplicate is detected during the upload, a warning will be displayed and you will be able to select which customer row should be retained.

If you have not toggled on "Prevent Duplicates", when you upload the file you will not be notified if the same data appears for multiple customer records.

[Can I select which Upload fields are mandatory?](https://galaxy.maropost.com/kb/articles/410-customer-mass-upload#mandatory)

Mandatory fields are determined by whether the "Upload includes new Customers" option is enabled:

- Disabled: If there are no new customers to be created, therefore Customer ID or Customer Number will become mandatory fields to ensure an existing customer record will be updated
- Enabled: New customers require a FirstName as a minimum when uploaded via Back Office, so this field will become mandatory

While you won't be able to specify custom mandatory fields for the Upload process, you can control which fields are required for your staff at POS.