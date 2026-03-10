---
title: "Sales Report - Outstanding Order Balance Detail Export"
articleID: 271
category: "Reporting > Financial Reporting"
knowledgeBase: "Retail Express"
---

# Sales Report - Outstanding Order Balance Detail Export

The Sales Report - Outstanding Order Balance Detail Export is used to export all products not yet fulfilled (i.e. given to the customer) across Processed and Awaiting Payment Orders. The report displays extensive detail, including:

- Invoices
- Products
- Customer details

As per the name, the report immediately creates a file to download rather than displaying the results on-screen.

View detail right down to invoice, product and customer information.

## Using the Outstanding Order Balance Detail Export

To access the Sales Report - Outstanding Order Balance Detail Export:

1. Navigate to **Reports > Finance Report > Sales Report - Outstanding Order Balance Detail Export**
  ![blobid0 (36).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphnlEAA.jpg)
2. Select from the **Filters **as required (see below for details)
3. Click **Export to Excel**
4. The screen will refresh and a download link will be displayed at the top of the page
  ![mceclip0 - 2023-07-09T233137.495.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphnXEAQ.jpg)
5. Click the link to download the zip file (the Excel spreadsheet will be in the zip file)

## Results

![blobid1 (24).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppho0EAA.jpg)
See detailed information below for calculations used for the more advanced fields.

|  |  |
| --- | --- |
| **Filters** | **Details** |
| Unit Price | The final price per unit paid at the time of the sale (after all discounts) |
| Sale Price Ext | Unit Price multiplied by Quantity ordered |
| Sale Price Unfulfilled | Unit Price multiplied by the Unfulfilled quantity |
| COGS Unit | Buy Ex 1x plus Direct Costs 1x |
| COGS Ext | COGS 1x multiplied by Quantity ordered |
| COGS Unfulfilled | Unit Price multiplied by the unfulfilled quantity |

## Filters

Most of the filtering fields are self-explanatory, however, see the detailed information below for the more advanced fields.

|  |  |
| --- | --- |
| **Filter** | **Details** |
| Invoice Number | Entering an invoice number will ignore all other search options |
| Product PLU Code | Entering a PLU Code will ignore all other search options. Valid PLUs are:  - SupplierSKU - ManufacturerSKU - Product ID |
| Include Tax in Sales Figures | Tick to include tax in the Unit Price and Sale Price of results |