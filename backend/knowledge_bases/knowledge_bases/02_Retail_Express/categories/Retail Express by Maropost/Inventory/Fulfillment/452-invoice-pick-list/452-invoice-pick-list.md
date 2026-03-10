---
title: "Invoice Pick List"
articleID: 452
category: "Inventory > Fulfillment"
knowledgeBase: "Retail Express"
---

# Invoice Pick List

You can streamline order picking and packing workflows through invoice pick lists in **Retail Express**, which provide systematic product gathering documentation for efficient order fulfilment processing. These pick list capabilities help retail operators reduce picking errors and improve warehouse efficiency, with properly utilized pick lists typically achieving faster order processing and better fulfilment accuracy across Australian retail operations.

Invoice pick list functionality in **Retail Express** enables retail operators to generate organized picking documentation that guides warehouse staff through efficient product gathering, helping ensure accurate order assembly and supporting timely dispatch. This picking workflow helps ensure your retail operations maintain efficient fulfilment processes while reducing errors and supporting consistent order accuracy across your fulfilment operations.

The Sales Invoice Picklist allows you to streamline your picking process by providing you with all the information to efficiently fulfil your products to customers.

## Accessing the Sales Invoice Picklist

### Back Office

1. Navigate to **Inventory > Fulfilment Report**
2. Use the Fulfilment Report filters
3. Click **Search**
4. Click **Invoice Pick List **in the menu at the bottom
  ![mceclip0 (81).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppQfGEAU.jpg)
5. The invoices will be displayed in a new tab
6. Click **Ctrl+P **to print the invoices as required
7. If the list of invoices exceeds the limit it will batch the invoices into groups of 50, and display a window to allow you to print each batch:
  ![mceclip7 (3).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppQfQEAU.jpg)
8. Click **Generate PDF **to display the invoices
9. Press **Ctrl+P **to print the invoice batch
10. Repeat for all additional batches

### POS

The Invoice Pick List is available in POS when editing a sale on the Fulfilment Tab. Click the Invoice Picklist button to display the PDF for that sale only (press Ctrl+P to print the Pick List).

![mceclip0 (82).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppQfVEAU.jpg)

## Invoice Picklist Template

The information displayed on the Invoice Pick List is as follows:

![picklist.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppQfuEAE.jpg)[Click to view full size](https://ress.zendesk.com/hc/article_attachments/4518422867471/picklist.png)

1. Customer Details
2. Freight Type chosen and Freight Amount charged
3. Whether Partial Dispatch is allowed
4. Sales Person, and the Outlet where the invoice was generated
5. Invoice Number, External Reference, Status and Date, as well as Barcodes for both the Invoice Number and the External Reference
  If using a third-party shipping integration (e.g. Shippit) the External Reference can be scanned to find the Shipping Labels faster
6. Bin Location where the product is located

> **Note:** Products are listed in order of Bin Location, then Supplier SKU

7. Product Details - products will display the Supplier SKU, Manufacturer SKU (if entered), and Attributes, including Custom Attributes
8. Qty Ordered, Qty Fulfilled and Qty Remaining / Balance
9. Available to Pick status
10. Source and Fulfilment Locations, including the visibility of inbound stock that?s required to fulfil the order, and the reference number for the inbound stock transaction i.e. Purchase Orders ID, Transfer ID.
11. Fulfilment method chosen (pickup, delivery etc)
12. Space for adding notes and comments related to the picking of the invoice (for ticking items off etc)
13. Order Comments (if there are no comments this area won't be visible)
14. Invoice details, and information on who picked the items
15. The date the list was generated on (not printed)
16. Invoice Page number (useful if there are multiple pages for the invoice)
  If there are items that have been previously fulfilled on the order they will be displayed on a separate grid below the unfulfilled items, along with the date each item was fulfilled (and other details)

## Frequently Asked Questions

[Barcodes are not displayed correctly](https://galaxy.maropost.com/kb/articles/452-invoice-pick-list#barcode)

Barcodes are displayed in Code 39. If the barcode is not displayed correct, you will need to check the following:

- Code 39 is installed on the computer (click here to install the Barcode Font)
- If the External Reference includes characters not supported by Code 39 (check the Fulfilment Report results tab to view the External Reference; edit the sale in POS to amend the reference if required)

If your external reference includes characters that are not supported by Code39, the barcode will not display correctly. To ensure the barcode prints, make sure the external reference does not contain lowercase characters.

Supported for Code 39 are: uppercase letters (A through Z), numeric digits (0 through 9) and a number of special characters (-, ., $, /, +, %, and space)

If using a prefix for your orders with Shopify, you can edit the prefix to upper case characters via[Shopify settings.](https://help.shopify.com/en/manual/intro-to-shopify/initial-setup/setup-business-settings)