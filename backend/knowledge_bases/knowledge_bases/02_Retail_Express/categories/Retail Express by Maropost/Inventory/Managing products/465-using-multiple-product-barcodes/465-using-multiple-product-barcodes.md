---
title: "Using Multiple Product Barcodes"
articleID: 465
category: "Inventory > Managing products"
knowledgeBase: "Retail Express"
---

# Using Multiple Product Barcodes

You can improve scanning flexibility and accommodate supplier variations through multiple barcode support in **Retail Express**, which enables associating additional barcodes with products beyond the primary Supplier SKU. This barcode versatility helps retail operators handle different pack sizes, supplier variations, or legacy codes, with effective multiple barcode use typically improving POS scanning efficiency and reducing product lookup time across Australian retail operations.

Multiple barcode functionality in **Retail Express** enables retail operators to configure alternative barcodes for the same product, helping ensure successful scanning regardless of which barcode variation customers present at checkout. This barcode flexibility helps ensure your retail operations can efficiently process transactions while accommodating product variations and simplifying the customer checkout experience.

Products often come with different barcodes for various packaging or supplier purposes. This guide provides steps to configure and manage multiple barcodes for a single product, ensuring seamless identification and scanning across all relevant contexts.

If your supplier uses different barcodes for the same product, you can store multiple barcodes for a product in Retail Express (so you can still find your product regardless of which barcode you scan).

## []()Adding Multiple Barcodes

To add an additional barcode:

1. **Edit a product** using Product Search & Management or the Product PLU look up box (top right-hand corner of Back Office)
2. Click the **Barcodes** tab
3. **Scan or type** the Barcode into the blank field

> **Note:** The Barcode needs to be unique i.e the same code cannot be used for more than one product

4. Click **Enter **or the** +** symbol
5. The new barcode will be added to the list

![Using multiple product barcodes.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000qWrQTEA0.jpg)
📋

Notes

:

- You can have a **maximum of 20 barcodes** per product
- You will still be required to enter a Supplier SKU barcode for your product (this is the main code used to display in reports etc)
- Creating products via an API will be validated to ensure the barcode doesn't conflict with any additional Barcodes in Retail Express
- To use a barcode against another product you will need to **delete **the barcode (disabling will just prevent the code from being scanned).

## []()Where to scan barcodes

You can scan barcodes in a number of places in Retail Express. Below we've listed  where the feature is Available and Not Available:

### Available Fields

|  |  |  |
| --- | --- | --- |
| Back Office | Home Page | - Global Search/PLU Look Up |
| Fulfilment Report | - The PLU Scan will check any additional barcodes to be able to fulfil a product |  |
| Purchase Orders | - Adding a product to a new/existing Purchase Order via the Product PLU field - Receiving Stock and scanning a barcode (both Basic and Standard methods) |  |
| Product Search & Management | - Searching for a product using the Product PLU field |  |
| Product Search | - Searching for a product using the Product PLU field |  |
| Managing Products | - Scanning the barcode into the Barcodes tab (to add a new barcode) |  |
| Stock Adjustment | - Searching for products using the "Barcode" field |  |
| Stocktake | - Browser Stocktake - scanning a barcode into the "PLU Scan" field will increase the count for that product by 1 - Excel Export - use the "Include Additional Barcodes" filter to display barcodes in a column in the export file |  |
| Transfers | - Creating a Transfer: Add products - Dispatch: Scan products - Make Available: Scan products - Pick: Scan products - Receive: Scan products - Transfer Report: The PLU scan field will locate the product (available for all Transfer stages) |  |
| POS and Offline POS | New Sale | - Search for a product using the PLU Scan and Search fields - Search for a product using the Advanced Search field - Search a customer's Order History by product using the "Description" field to scan the barcode |
| Refunds | - Searching for a product |  |
| Transfers | - Add products to the Transfer (creating and receiving) using the PLU Scan field |  |

### Limitations

Multiple Barcodes are not available to use in the following features:

- Viewing additional barcodes in POS (you will be able to scan and find the product using additional barcodes, but the product will be displayed using the primary Supplier SKU barcode
- Mass Download/Upload
- Reports - Search, filter or display additional barcodes
- Newsletters
- Promotional Campaigns
- Label Printing
- Stock Replenishment
- Franchise Connect