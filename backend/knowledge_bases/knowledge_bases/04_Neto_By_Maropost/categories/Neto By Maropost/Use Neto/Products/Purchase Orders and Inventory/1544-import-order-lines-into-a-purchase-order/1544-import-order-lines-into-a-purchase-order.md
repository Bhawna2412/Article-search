---
title: "Import Order Lines into a Purchase Order"
articleID: 1544
category: "Use Neto > Products > Purchase Orders and Inventory"
knowledgeBase: "Neto By Maropost"
---

# Import Order Lines into a Purchase Order

## Import Order Lines

To speed up creating a purchase order, you can import the order lines, their quantity, purchase price and more. This is especially useful if you create orders in your supplier's portal, and then need to replicate the information in Neto. To import order lines:

1. Add a purchase order by following [these steps](https://galaxy.maropost.com/kb/articles/615-add-a-purchase-order#add-purchase-orders-manually), up to the point where you add order lines.
2. Click the **Import/Export CSV** button and then click **Import lines from CSV**.
3. Click in the pop-up window to select your CSV file, or drag and drop it into the window.

> **Note:** Download an example CSV file with the import format [here](https://developers.neto.com.au/assets/downloads/templates/orderline-import.csv).

4.   - Select an existing template that you've already created.
  - Create a new template to import the same file format again in the future. Enter a name for your template if you select this option.
  - Import the order lines using a one-off field mapping. The mapping you create won't be saved.

  Choose a field mapping template:
5. Click the **Next** button. If you're creating a new template, or doing a one off import you'll be taken to the field mapping, otherwise skip to step 8.
6. Select a unique identifier to match the order lines in your Datasource (CSV file) to products in Neto.
7. Match the Neto order line fields to fields in your CSV file, to populate the order lines in your purchase order:

> **Note:** Click the **Save** button if you're creating a template that you will use again.

8. Click the **Next** button, and your file will be validated. Any errors with the data will appear here, refer to our troubleshooting section for information on how to resolve them.
9. Click the **Confirm and import** button.

Your file will be processed and the order lines added to the purchase order.

> **Note:** Click the Edit button to add more order lines, or adjust the existing order lines in the purchase order before you approve it.

## Troubleshoot Import Errors

Most errors with your file will give you directions on how it needs to be fixed. This includes the Neto field, your datasource field it's mapped to, and the lines in the file where the error occurred.

| Error | Cause | Solution |
| --- | --- | --- |
| The file selected has more rows then the maximum allowed (2000). | Purchase orders can’t contain more than 2000 order lines, total. | Split the CSV file into 2 or more files that have 2000 or less rows. |
| The CSV file does not contain any data. | The CSV file doesn’t contain any order lines. | Open your CSV file and check that it has order lines. |
| Multiple product matches found for the column ‘xxxx’, mapped to xxxx. To import, your Product UPC must be unique on each product in Neto. | When trying to match order lines to your Neto products multiple matches were found. | Check the lines identified as duplicates, and either update these products to have a unique identifier, or use a different field to match products to your file. |