---
title: "Import And Export Purchase Orders"
articleID: 1363
category: "Use Neto > Products > Purchase Orders and Inventory"
knowledgeBase: "Neto By Maropost"
---

# Import And Export Purchase Orders

## Import Purchase Orders

Neto Commerce Inventory allows you to import multiple purchase orders and orderlines in one CSV file, to speed up your stock control activities.

> **Note:** You can import up to 50 purchases orders and 5,000 orderlines per file.
> An individual purchase order can have a maximum of 2,000 orderlines.

To import purchase orders into Neto:

1. In your Neto control panel navigate to **Stock control** > **Purchase orders**.
2. Click the **Import purchase orders from CSV** button.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ImportPurchaseOrders1.05T5g00000hvrqMEAQ.png)
3. Click in the pop-up window to select your CSV file, or drag and drop it into the window.

> **Note:** Download a CSV file with an example import format [here](https://developers.neto.com.au/assets/downloads/templates/purchase_order_import.csv).

  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ImportPurchaseOrders2.05T5g00000hvr1TEAQ.png)
4.   - Select an existing template that you've already created.
  - Create a new template to import the same file format again in the future. Enter a name for your template if you select this option.
  - Import the order lines using a one-off field mapping. The mapping you create won't be saved.

  Choose a field mapping template:

  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ImportPurchaseOrders3.05T5g00000hvr8BEAQ.png)
5. Click the **Next** button and you'll be taken to the field mapping.
6.   - [Unique Identifiers](https://galaxy.maropost.com/kb/articles/1363-import-and-export-purchase-orders#export-purchase-orders)
  - [Purchase Order Field Mapping](https://galaxy.maropost.com/kb/articles/1363-import-and-export-purchase-orders#5)
  - [Order Line Mapping](https://galaxy.maropost.com/kb/articles/1363-import-and-export-purchase-orders#6)

  Field mapping is broken up into 3 sections that each need to be mapped. If you're using an existing template you'll be able to change and save any mapping before you proceed.

## Unique Identifiers

These fields determine how Neto will identify the product order lines, locations (warehouses) the purchase order is for and suppliers in your CSV file. Mapping these fields will let you draw information from the products and suppliers in the other sections of the mapping. They also determine how many purchase orders will be created.

**Please Note**: If the **Supplier** or **Location** information is different for any order lines, separate purchase orders will be created.

| Field | Description | Notes |
| --- | --- | --- |
| Product SKU | Stock keeping unit. Unique identifier for the product in Neto. | Only one of Product SKU, Product ID and Product supplier SKU is required in your file. |
| Product ID | The ID of the product assigned by Neto automatically. Found in the URL of the product. | Only one of Product SKU, Product ID and Product supplier SKU is required in your file. |
| Product supplier SKU | Supplier SKU field entered on the product. | Only one of Product SKU, Product ID and Product supplier SKU is required in your file. |
| Product Barcode/UPC | Matches against all UPC/EAN fields entered on the product, in order (e.g. UPC/EAN before UPC/EAN1). | Only one of Product SKU, Product ID and Product supplier SKU is required in your file. |
| Location ID | The unique ID of the warehouse in Neto. The purchase order will be created for this location/warehouse. 			Can be taken from the primary warehouse in Neto or on each product. | Only one of Location ID and Location reference is required in your file. |
| Location reference | The unique location/ref of the warehouse in Neto. The purchase order will be created for this location/warehouse. 			Can be taken from the primary warehouse in Neto or on each product. | Only one of Location ID and Location reference is required in your file. |
| Supplier ID | The unique ID of the supplier in Neto. The purchase order will be created for this supplier. 			Can be taken from the primary supplier on each product. | Only one of Supplier ID and Supplier reference is required in your file. |
| Supplier code | The unique supplier code of the supplier in Neto. The purchase order will be created for this supplier. 			Can be taken from the primary supplier on each product. | Only one of Supplier ID and Supplier reference is required in your file. |

![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ImportPurchaseOrders4.05T5g00000hvrjuEAA.png)

## Purchase Order Field Mapping

Map the Neto purchase order fields to fields in your CSV or static values.

**Please Note**: If you import different data for any of the fields in this section a separate purchase order will be created.

| Field | Description | Field Type |
| --- | --- | --- |
| Supplier currency | The currency code of your supplier. Can be populated from the **Currency** field on your supplier. | String (text) |
| Reference | The purchase order reference information from your supplier. | String (text) |
| Tax inclusive | Set if the purchase order should display as tax inclusive or exclusive for invoicing purposes. | Boolean (yes or no) |
| Currency exchange rate | The exchange rate of your store currency to your supplier’s currency. | Numeric up to 8 decimal places. |
| Order date | The date the order is being placed. | Date (CSV: YYYY-MM-DD, static value DD/MM/YYYY) |
| Supplier invoice date | The date your supplier has invoiced you. | Date (CSV: YYYY-MM-DD, static value DD/MM/YYYY) |
| Delivery due date | The date you expect to receive the order. | Date (CSV: YYYY-MM-DD, static value DD/MM/YYYY) |
| Supplier invoice due date | The due date of your supplier’s invoice. | Date (CSV: YYYY-MM-DD, static value DD/MM/YYYY) |

![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ImportPurchaseOrders5.05T5g00000hvrlMEAQ.png)

## Order Line Field Mapping

Map the Neto order line fields to fields in your CSV file, to populate the orderlines in your purchase order:

| Field | Description | Field Type |
| --- | --- | --- |
| Supplier SKU | Can be populated from the product. | String (text) |
| Order line QTY | Amount of inventory being ordered. Can be populated from the product **Reorder QTY** field or 1 if reorder qty is empty. | Integer (whole number) |
| Order line supply price | Price per unit ordered. Can be populated from the product **Default Purchase Price** field. | Numeric up to 4 decimal places. |
| Order line tax rate | Tax percentage for the order lines. Can be populated from the supplier and product. If your product is tax free or your supplier is from a different country to you it will be 0%, otherwise it will be your default tax rate. Must be 0 or your store tax rate. | Numeric |
| Order line tax inclusive | Select if the order line supply price in your CSV file does or doesn’t include tax. This mapping is only used during import, the purchase order will display as tax inclusive or exclusive based on the Purchase Order Field Mapping. | Boolean (yes or no) |
| Order line discount % | Percentage discount of the order line. If set, will automatically calculate the order line discount amount, and order line total. | Numeric |
| Order line unit discount amount | Discount amount for the order line. If set, will automatically calculate the order line discount %, and order line total. | Numeric up to 4 decimal places. |
| Order line total | Total cost for the qty ordered of this order line. If set, will automatically calculate the order line discount %, and order line discount amount. | Numeric up to 4 decimal places |
| Order line notes | Individual note added per orderline and sent to your supplier. | String (text) |

![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ImportPurchaseOrders6.05T5g00000hvqa4EAA.png)

## Validate & Import

Your file will be validated against your mapping and will display any errors with the data. If there are no errors, you'll see how many purchase orders and orderlines will be added.

Click the **Confirm and import** button, and you purchase order(s) will be imported into Neto.

![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ImportPurchaseOrders7.05T5g00000hvs8jEAA.png)

## Export Purchase Orders

Neto Commerce Inventory allows you to export individual purchase orders.

**Please Note**: Purchase orders can only be exported individually from within the purchase order itself. You cannot export purchase orders in bulk.

To export purchase orders into Neto:

1. In your Neto control panel navigate to **Stock control** > **Purchase orders**.
2. From the Purchase Order list page, locate the purchase order and click the corresponding **Order ID** to open it.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/chromeX7Ja7jOJfA.05T5g00000hw1cNEAQ.png)
3. Click the **Export lines to CSV** button in upper right corner.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/chrome2cYiZWSQqb.05T5g00000hw1sCEAQ.png)

  **Please Note**: For purchase orders in the Draft, Pending, or Sent status, Export lines to CSV can be found by clicking the Import/Export CSV button.
 [https://us.v-cdn.net/6038474/uploads/attachments/migrated/chromeDPiTONYCF3.05T5g00000hw1rEEAQ.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/chromeDPiTONYCF3.05T5g00000hw1rEEAQ.png)

After clicking Export lines to CSV, a csv file is created and downloaded to your computer.