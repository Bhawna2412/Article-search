---
title: "Print Product Labels"
articleID: 202
category: "Hardware > Label Printers"
knowledgeBase: "Retail Express"
---

# Print Product Labels

You can print product labels efficiently from **Retail Express** for new stock arrivals, price changes, or promotional items, ensuring accurate product identification and pricing on your retail floor. This helps optimize your retail operations by maintaining current pricing displays, supporting efficient stock replenishment, and ensuring product barcodes are scannable at POS.

Product Labels can be printed from multiple locations in Retail Express:

- Label Printing feature
- When receiving a Purchase Order (perfect for when processing new incoming stock)
- From the Edit Products screen

Labels can be printed using either a Zebra Label Printer or any standard A4 printer.

**Reminder**: You will need to install and configure your Label printer prior to printing labels from Retail Express

## Label Printing

![rtaImage - 2023-07-09T000013.806.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWYzEAM.jpg)This is the most common method used to print multiple labels at once, as it enables you to:

- Find products that have had a price change (products on sale, price increase/decreases)
- Products with expired discounts (if labels are required post-sale)
- Products on a specific Transfer or Purchase Order number (you can also print directly from the Purchase Order window - refer to the next section)
- From a specific supplier
- In a specific Outlet (useful when the number of labels to print automatically updates based on the number of products in stock)

and more...

To print labels:

1. Log into the Retail Express Back Office
2. Navigate to **Inventory > Label Printing**
3. Use the search filters to search for products matching your requirements
4. Click **Search**
5. The window will swap to the **Results **tab
6. The **Qty to Print **column will automatically populate a number based on the number of products in stock (if there is zero or a negative stock value the Qty to Print will be zero)
  ![rtaImage - 2023-07-09T000025.158.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWKAEA2.jpg)
7. Update the value in the **Qty to print **column as required

> **Note:** To quickly set a single value for all products enter a number in the **Quantities to Print **field at the top and click **Update Quantities**

8. If printing using a Zebra Label Printer, select the Zebra **Label Template **from the dropdown box (click here for information on configuring Zebra Label Templates)
  ![rtaImage - 2023-07-09T000030.004.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWZEEA2.jpg)
9. Select the Printer from the drop-down
  If you don't select your printer you may encounter an error similar to "Job cancelled: printer "The Operating System's available printers" doesn't exist"
10. Click either the **Zebra Label Print **or **A4 Label Print **button depending on the printer you're using
11. Follow the printer prompts to print the labels

**Search filters**

|  |  |
| --- | --- |
| **Filter** | **Description** |
| Description | The product Short Description (or product name) |
| Product ID | The unique system-generated Product ID code given to a product when added to the Retail Express system |
| Manufacturer | The Manufacturer of the product, not to be confused with the Manufacturer SKU/Code. The Manufacturer is a separate field entirely, used for tracking the company associated with manufacturing the product. |
| Supplier SKU | The Supplier SKU code (unique for every product, so this is only useful when searching for a single specific product) |
| Manufacturer Code | The Manufacturer SKU or Style Code of a product. Useful when printing labels for a single style of product that comes in variations of size and/or colour. |
| Custom | Used to search the Custom 1, Custom 2 and Custom 3 fields for matching content |
| Transfer # | Returns products on that specific Transfer (in addition to matching any other filters in use) |
| POID | Purchase Order ID Number - returns products on a specific Purchase Order (in addition to matching any other filters in use) |
| Price Updated From/To | Date ranges to display products with any variations in price within the selected date range |
| Show Disabled | Select Enabled products only, Disabled products only, or both |
| Show products with a discount | Tick to display products with a promotional price only (products with expired promotional prices will still be displayed) - ticking this option enables the next three options |
| Expired Discounts | Used to display products with an expired discount only (products with an active promotional price will not be shown) |
| Discounts that are more than Normal Price | Displays products where a discounted price has been added but is more than the normal POS price |
| Discounts that are less than the Buy Price | Displays products where the discount is less than the Buy price (typically products on clearance) |
| Show products with no long description | The Long Description field is a legacy field used for older web stores, and not typically used. |
| Auto Generate PO (Always) | Returns products where the option "Auto Generate PO (Always)" is ticked  - for more information refer to the Purchase Order video series |
| Auto Generate PO When Sold (Out of Stock) | Used to return products where the option "Auto Generate PO when sold (Out of Stock)" is ticked - for more information refer to the Purchase Order video series |
| Prevent Disabling | Displays products where the Prevent Disabling option is ticked (used to prevent a product from being marked as disabled when out of stock) |
| Core Product | Displays products marked as "Core Products" only |
| Show Packages | If package products should be included in the results, or just individual Products only |
| Sort By | How the search results should be sorted e.g. if sorting by Manufacturer SKU it means all barcodes for products of the same style will be printed together. |
| Outlet | Returns products with the previous filters matching a certain outlet e.g. if Outlet B has a promotional price but outlet A is selected on this window along with the tick for Show products with a discount, the product will be omitted from the results |
| Suppliers | Used to filter products of a certain supplier only (hold the Ctrl button to select multiple suppliers) |
| Products | The Product Type for a product |
| Last Sold | Products sold within a particular time frame only |

## Purchase Orders

Retail Express allows you to print labels at the time of receiving a Purchase Order, for either:

- Products that are being received
- Products that have already been received (useful if the PO has already been received but the labels need to be reprinted)

> **Note:** If further refinement is required to filter the products the Purchase Order ID number can also be used in the standard Label Printing feature available at **Inventory > Label Printing - **refer to the first section of this article for more information.

To print the labels:

1. **Receive a Purchase Order** (if you're unsure of this process refer to the Receive a Purchase Order article or the Purchase Orders Stock Receipt video series)
2. Process the fields on the **Stock Receipt **window (**do not press Receive Stock **yet)
3. At the bottom of the Stock Receipt window click the **Label Printing **button
  ![rtaImage - 2023-07-09T000038.254.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWZTEA2.jpg)
4. Select from the **A4 Labels **or **Zebra Labels **option as required (see below for more information on each field)
5. Follow the prompts to print the labels
6. Press **Close **to return to the Stock Receipt window

![rtaImage - 2023-07-09T000044.061.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVmNEAU.jpg)

|  |  |
| --- | --- |
| **Option** | **Description** |
| A4 Label Print Receiving | Displays a preview of the labels with the same number of labels for each product as entered in the **RCVing column** for stock not yet marked as received (Press **Ctrl+P **to select a printer and print the labels) |
| A4 Label Print Received | Displays a preview of the labels with the same number of labels for products in the **Rcd column** (this doesn't include any new products currently in the RCVing column) (Press **Ctrl+P **to select a printer and print the labels) |
| Label Template | Select from different Zebra Label Templates |
| Label Printer | Displays a list of printers installed on the computer - select the Zebra Label Printer |
| Zebra Label Print Receiving | Prints the same number of labels for each product as entered in the **RCVing column** for stock not yet marked as received  If using an external printing solution you can also download EPL and ZPL files by clicking the links. |
| Zebra Label Print Received | Prints the same number of labels for products in the **Rcd column** (this doesn't include any new products currently in the RCVing column) If using an external printing solution you can also download EPL and ZPL files by clicking the links. |
| Zebra Label Print | Prints the quantity entered in the Qty to Print column of the Stock Receipt |

## Edit Product screen

If you just need the odd one-off label, the most efficient and easy way to print a label is straight from the Edit Product window.

![rtaImage - 2023-07-09T000059.717.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWZiEAM.jpg)
To print a label:

1. Open the **Product Edit **window (this can be done by entering the product code in the Product Search/PLU field, or navigating to Inventory > Product Search & Management, locating the product and clicking the Edit button)
2. Click on the **Label Printing **tab
3. Click on the required option to print a label

|  |  |
| --- | --- |
| **Option** | **Description** |
| Pricing | Used to control which prices are displayed on the Labels (Zebra Label Printing only) |
| Label Template | Used to select a Zebra Label Template e.g. if using specific templates for different Outlets. If using an external printing application you can click the EPL or ZPL links to download the label file instead |
| Label Printer | Displays a list of installed printers on the computer - select the Zebra Label Printer. |
| A4 Label Print | Displays a preview of the label, press **Ctrl+P **to select a printer and print the label |