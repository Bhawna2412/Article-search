---
title: "Add Products and Print Product Labels in Maropost POS"
articleID: 794
category: "Use Neto > Point of Sale (POS) > Use Point of Sale"
knowledgeBase: "Neto By Maropost"
---

# Add Products and Print Product Labels in Maropost POS

**Please Note**: Neto POS is not available outside of Australia and New Zealand.

You can add products and categories to Maropost POS from your Maropost control panel or back office one at a time or by importing in bulk.

Product categories are used to organise your products both on your POS register interface and on your webstore. This makes it quick and easy for customers and staff to find products.

## Recommended Product Fields in POS

Neto supports a number of product types and fields, the following fields are the most popular fields used by POS merchants.

|  |  |  |  |
| --- | --- | --- | --- |
| **Field Name** | **Description** | **Example** | **Notes** |
| **SKU** | The products unique ID or Code | CB838 | Max 25 characters, no spaces or special characters. Must be unique. |
| **Name** | The name of the product | Bottle of Corona | Max 255 characters. Will appear on receipts. |
| **Price** | The price of the product | 5.95 | Decimal |
| **Barcode** | The barcode of the product, used for scanning at the cash register | 786349264 | Max 100 characters |
| **Category** | The category of the product | Drinks > Beer | Use ">" to define category tree when importing |

## Add Products in POS

Creating products from your Maropost POS register is quick and easy. Whilst your register is online, tap on the menu and tap the 'Add Product' button.

**Please Note**: Maropost POS only supports creating standard products from the register interface. To create variation products or kits, you need to use the control panel interface. Continue reading for more details.

Now you can enter the details of your product, and assign the product into categories. If you have the eCommerce add-on installed you can even create products that will appear on your web store.

When you are finished making changes, tap the save button and you are done! The changes will be reflected in your Maropost control panel and your webstore (if you have the webstore add-on installed). Remember to synchronise your other registers for new products to be downloaded.

This is a great way to add a few individual products. To add a larger amount, please use one of the methods in [this article](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products).

## Product Images

To assist staff users in locating products quickly on the register, we recommend adding images to your products. Images should be in .jpg, .gif or .png and should be less than 2MB in size when uploaded. Maropost will automatically resize the images you upload.

**Please Note**: Images are downloaded and adjust in the background, and for Maropost POS are processed overnight. Be sure to synchronise your registers the next day for the images to appear.

When a product does not have an image Maropost POS will assign a two letter code to the product tile to help you identify it.

## Barcode Printer Set up

> **Note:** This feature will only work on the Dymo 450 printer with Mac and Windows only. Labels cannot be printed from an iPad and the option to select a label printer/print a label will not appear until a printer is installed.

If you haven't done so already, you'll need to install Dymo 450 Label Printer on your PC/Mac. You will also need 11352 size labels.

- Installing your Dymo 450 Label Printer for PC
- Installing your Dymo 450 Label Printer for Mac

You'll now be able to print labels.

## Add a Barcode to a Single Product

Barcodes are printed on product labels so that you can scan products into POS or when receiving purchase orders. Barcodes are generated from the UPC on your products. To add a UPC to your product:

1. In your Neto control panel, navigate to **Products** > **View Products**.
2. Edit the product you wish to add a barcode to.
3. Click on the **Warehouse & Picking** tab and populate the barcode / UPC field with a unique code. Maropost supports numbers, letters and special characters in the barcode field.

## Add Barcodes to Products in Bulk

UPCs can be added to your products in bulk through the Maropost import wizard. To add UPCs in bulk:

1. Create a .CSV spreadsheet with two columns called **SKU*** and **Barcode**.
2. Populate the .CSV spreadsheet with all your SKUs and their related barcodes (Maropost supports numbers, letters and special characters in the barcode field).
3. Import your CSV using the [Neto product import wizard](https://galaxy.maropost.com/kb/articles/668-product-import-wizard).

## Print Product Labels in POS

To print a product label in POS:

1. In POS, click/tap the menu and select **Settings**.
2. Click/tap **Label Printer**
3. Select your label printer printer to print product labels.
4. Go back to the main POS screen. Find a product you wish to print a label for, and click/tap it's info icon.
5. Click/tap on **Print**.
6. Toggle the options you wish to print and click/tap **Print** again.

## Print Product Labels in Bulk

To print the labels for multiple products are once:

1. In your Neto control panel navigate to **Products** > **View Products**.
2. Use the filter at the top of the page to display the products you want to print labels for.

> **Note:** Remove the **Has Parent: No** filter to show variation products.

3. Select the products you want to print barcode labels for by selecting the checkboxes next to each product.
4. Scroll down to the bottom of the page and click **With Selected** >** Print Barcode For Selected**.