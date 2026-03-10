---
title: "Import Stocktakes"
articleID: 1543
category: "Use Neto > Products > Purchase Orders and Inventory"
knowledgeBase: "Neto By Maropost"
---

# Import Stocktakes

Stocktakes can be imported into Neto from a CSV file to quickly update your stock levels to their correct amounts. You can import up to 10,000 lines, and include multiple warehouses in a single CSV file.

**Please Note**: The Neto Commerce Inventory add-on is required to import stocktakes.

## Count Stock

When you import a stocktake into Neto the stock count replaces the existing warehouse quantity. So it's important that your counting is accurate before it's imported.

> **Important:** Sales orders that have been picked should not be included in the stocktake. Once an order is picked the stock is no loner part of the warehouse quantity calculations in Neto.

To ensure accuracy there are a number of free applications that can help you count stock easily which can export a CSV file:

| Application | Platform | Export Format |
| --- | --- | --- |
| Stock Count (recommended) | [Android](https://play.google.com/store/apps/details?id=com.sterling.stockcount&hl=en_AU) | CSV |
| Barcode to Sheet | [Android](https://play.google.com/store/apps/details?id=com.vel.barcodetosheet), [iOS](https://apps.apple.com/us/app/barcode-to-sheet/id1327326217) | Excel, CSV, XML |
| Barcode To CSV | [Android](https://play.google.com/store/apps/details?id=com.virtualmartplt.barcode_to_csv&hl=en_AU) | CSV |
| Mobile Inventory | [Android](https://play.google.com/store/apps/details?id=hr.foton.brzainventura) | Excel, CSV |
| Ocra Scan | [Android](https://play.google.com/store/apps/details?id=com.orcascan.bulkbarcodescanner&hl=en_AU), [iOS](https://apps.apple.com/us/app/orca-scan-barcode-app/id1161117971) | Excel, CSV, XML,HTML, JSON |

You can also use the [product export wizard](https://galaxy.maropost.com/kb/articles/501-product-export-wizard) to create a CSV file of all your products. It can then be divided into separate parts and assigned to staff to count stock. We recommend exporting the below fields:

- SKU
- Name
- Brand
- Specifics
- UPC/EAN
- Pick zone (use this to sort and divide your CSV file)

> **Note:** Exclude variation and kit parent products, as they cannot be added to a stocktake.

## Import Stocktakes

Once you've counted stock and have the data in a CSV file it can then be imported into Neto. Stocktakes that you import will be marked as completed, so you will not be able to edit the figures afterwards. An import template with all fields can be found [here](https://developers.neto.com.au/assets/downloads/templates/import-stocktake.csv).

> **Note:** To import a stocktake you need to have the **Access Control** > **Products** > **Stock take** permission enabled in your staff permission group.

To import your stocktakes:

1. In your Neto control panel navigate to **Stock control** > **Stocktake**.
2. Click the **Import completed stocktakes from CSV** button to start the import wizard.
3. Upload your file by dragging and dropping it into the pop-up window. Or click in the pop-up to browse to your completed stocktake CSV file. Click the **Next** button.
4.   - Select an existing template that you've already created.
  - Create a new template to import the same file format again in the future. Enter a name for your template if you select this option.
  - Import the stocktake using a one-off field mapping. The mapping you create won't be saved.

  Choose a field mapping template:

  Click the **Next** button to continue.
5. Map the fields in your CSV file to the stocktake fields in Neto:
  Click the **Next** button to continue.
6. Your file will be validated against the mapping. Any errors will appear and you'll be able to update your mapping or correct your file and upload a new one. When your file is validated successfully you'll get a preview of the number of rows and stocktakes that will be imported.

> **Important:** While your CSV file can have up to 10,000 lines, a single stocktake is limited to 2,000 once created. So even if you're import is for a single warehouse it may get split into multiple stocktakes when imported.

7. Click the **Confirm and import** button. Your stocktake will be imported into Neto, and the stock levels updated to match the counts in your file.

You can now click on the imported stocktake(s) to view the results.