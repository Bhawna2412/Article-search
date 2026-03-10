---
title: "Sales Order Import Wizard"
articleID: 1580
category: "Use Neto > Sales Orders, Returns, and Credits > Add Orders"
knowledgeBase: "Neto By Maropost"
---

# Sales Order Import Wizard

You can significantly reduce manual data entry and streamline multi-channel operations by importing sales orders from external systems, marketplaces, or legacy platforms directly into Neto. This automated order import capability helps reduce operational costs and enables unified order management across all sales channels, improving operational visibility and reducing errors associated with manual order creation.

The complex import wizard provides flexible field mapping that enables you to integrate with virtually any external system format, helping ensure accurate data synchronization between platforms. Properly configured order imports typically improve order processing efficiency and enable faster order fulfillment by eliminating duplicate data entry and ensuring all order information flows seamlessly into your unified commerce operations.

Sales orders can be imported into Neto through either a simple (predefined) or complex (custom) file format. For either method you will need to convert the order into a file type that can be imported by our system, either CSV (preferred) or XML.

> **Note:** Neto partners can set this up for you. [Visit the job request portal](https://www.netohq.com/job-request-portal) for a quote.

## Simple Import

Simple imports use Neto's CSV template files to define the sales order data. Before importing your sales orders, download one of the template files below to populate your data:

- All fields
- Popular fields

We recommend only using the simple import if your data is not already in a format that Neto can read. To import sales orders using the simple import:

1. In your Neto control panel navigate to **Sales orders** > **View orders**.
2. Click the **Import** button at the top of the page.
3. Click the **Choose File** button and upload the CSV file with your sales order data.
4. Click the **Upload file** button.
5. You'll see a preview of your file headers and the first row of data. Confirm that they match, and click the **Start import** button.

Your sales orders will be imported into Neto. Allow 10 minutes for them to appear.

## Complex Import

Complex imports allow you to upload customised data files from other systems and platforms. Not only can you use it to populate information, it's also useful to make changes in bulk. To use complex import you will need to have your orders in a CSV file ready to upload:

1. In your Neto control panel navigate to **Settings & tools** > **Import data**.
2. Select the **Orders** radio button.
3. Click the **Perform complex import** button and choose **Start Data Import Wizard**.
4. Click the **Choose File** button and upload your CSV file. Then click **Continue to Next Step**.
5. You'll now be on the field mapping step. On the left hand side are a list of the column names in Neto (database field names). To the right of them are column headers from your file. To ensure data from your file goes into the correct field in Neto, select the database field name that best matches your file field names.

> **Note:** Addresses, names and other values that are in multiple columns can be merged into one by selecting **Join To** in the dropdown menu next to the column name. You can also perform simple mathematical functions on number fields or insert separators (e.g. :,;).

  Once complete, click the **Continue to Next Step** button.
6. In the **Update Options** section, you can change how certain fields are updated. For example, you can set a priority of how sales orders are matched between your file and the customer data with the **search for customers when importing by** drop down menu.
  Set any update options you require, and click the **Continue to Next Step** button.
7. You're now ready to import your sales order file. If you want to save your settings select the checkbox and enter a template name. Click the **Process File Now** button to complete the import wizard.

The import process will be queued to run, and update the your sales orders.

> **Note:** Click on the export process ID to view a page with the status of your import. Click the **Run Now** button on this page to start the process immediately.

## Related Articles

- [Proof of Delivery Data Import Wizard](https://galaxy.maropost.com/kb/articles/1454-proof-of-delivery-data-import-wizard)
- Sales Order Import and Export Fields
- [Sales Orders Export Wizard](https://galaxy.maropost.com/kb/articles/1457-sales-orders-export-wizard)