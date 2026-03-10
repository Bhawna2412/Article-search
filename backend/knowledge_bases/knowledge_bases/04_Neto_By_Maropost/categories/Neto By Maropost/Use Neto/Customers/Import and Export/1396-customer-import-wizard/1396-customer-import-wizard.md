---
title: "Customer Import Wizard"
articleID: 1396
category: "Use Neto > Customers > Import and Export"
knowledgeBase: "Neto By Maropost"
---

# Customer Import Wizard

> **Note:** Neto partners can set this up for you. [Visit the job request portal](https://www.netohq.com/job-request-portal) for a quote.

You can import your customers from another platform in bulk by through the data import wizard. There are 2 methods you can use:

> **Note:** Learn more about the import & export wizards in our [online course](https://galaxy.maropost.com/kb/articles/1662-course-data-import-and-export).

## Simple Import

The simple import wizard is best use to initially populate your customers in Neto. The fields available cannot be modified, and must match one of the available templates:

- [Popular customer fields](https://developers.neto.com.au/assets/downloads/templates/import_customers_popular.csv)
- [All customer fields template](https://developers.neto.com.au/assets/downloads/templates/import_customers_all.csv)

To use the simple import wizard:

1. Download one of the above templates and populate your customer data in the appropriate fields. Ensure you save the file as a .CSV (comma separated values).

> **Note:** If you cannot migrate your customers passwords from your existing platform, see our [passwords guide](https://galaxy.maropost.com/kb/articles/923-import-customer-passwords-in-bulk) for a workaround.

2. In your Neto control panel navigate to **Customers** > **View customers & prospects**.
3. Click the **Import** button at the top of the page.
4. Click the **Choose File** button and upload your CSV file. Click the **Upload file** button.
5. You'll see a preview of the column headers and the first line of data to ensure they are correct. If so, click **Start import**.

Your customers file will be imported and will usually appear in your control panel within 15 minutes.

## Complex Import

The complex import wizard is the preferred method to load your customers into Neto. It's also useful to update details in bulk. For example, you can create a new user group and move customers into the group using the complex import wizard. You will still need a CSV file of your customers, however the column names don't need to match the templates and can be in any order. You can find a list of all import/export fields [here](https://galaxy.maropost.com/kb/articles/1443-customer-import-and-export-fields).

To import customers using the complex import wizard:

1. In your Neto control panel navigate to **Settings & tools** > **Import data**.
2. Select the **Customers** radio button.
3. Click the **Perform complex import** button and choose **Start data import wizard**.
4. Click the **Choose File** button and upload your CSV file. Then click the **Continue to Next Step** button.
5. You'll now be on the field mapping step. On the left hand side are a list of the column names in Neto (database field names). To the right of them are column headers from your file. To ensure data from your file goes into the correct field in Neto, select the database field name that best matches your file field names.
  Once all the fields you want are mapped, click the **Continue to Next Step** button.
6. The update options step lets you change how certain data is updated. For example, new customer addresses are added to the existing ones by default. You can change the setting to replace any existing address with the ones uploaded instead.
  Set your update options (if any) and click **Continue to Next Step**.
7. You're now ready to import your customer file. If you want to save your settings select the checkbox and enter a template name. Click the **Process File Now** button to complete the import wizard.

The import process will be queued to run, and update your customer data.

> **Note:** Click on the export process ID to view a page with the status of your import. Click the **Run Now** button on this page to start the process immediately.