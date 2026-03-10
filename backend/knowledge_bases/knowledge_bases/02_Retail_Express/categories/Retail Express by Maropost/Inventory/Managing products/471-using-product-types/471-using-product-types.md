---
title: "Using Product Types"
articleID: 471
category: "Inventory > Managing products"
knowledgeBase: "Retail Express"
---

# Using Product Types

You can organize your product catalog and enhance reporting capabilities through Product Types in **Retail Express**, which enable systematic product categorization supporting detailed sales analysis and inventory management. This classification system helps retail operators segment product performance and maintain organized catalogs, with effective Product Type use typically improving reporting insights and supporting strategic merchandising decisions across Australian retail operations.

Product Type configuration in **Retail Express** enables retail operators to establish meaningful product categories that support business intelligence, inventory segmentation, and operational reporting. This categorization capability helps ensure your retail operations can analyze performance by product category, manage inventory by type, and make informed merchandising decisions based on category-level insights.

A Product Type is a mandatory product field used to categorise products into groups, offering the following benefits:

- Easier to search for groups of products
- Create Stocktakes for specific Product Types only
- Filtering Reports e.g. Sales Report

![settings_producttypes.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjVtEAI.jpg)

## []()Product Type Sales Indicators

Sales Indicators help you to identify the sales performance of various products, making it easier to determine which products to re-order when using the Stock Replenishment feature.

Indicators are calculated by looking at transactions over the past 90 days.

![producttypes_salesindicators.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjW3EAI.jpg)

### Default Sales Indicators

The indicators automatically calculated by Retail Express are as follows:

|  |  |
| --- | --- |
| **Sales Indicator** | **Details** |
| New | If the product is less than 30 days old and the number of units sold is zero |
| Slow | Slow-moving products - automatically set to 90 days |
| Dead | Products created more than 30 days ago and have not sold in the past 90 days |
| Undefined | Products without any Sales Indicators set |

### Customised Sales Indicators

You can manually enter a value for the Rocket, Fast and Average indicators based on how many units are sold over a 90 day period.

![mceclip0 - 2023-07-10T045452.860.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjTGEAY.jpg)
Using the example above, we can review two products to determine which indicator would apply:

- Product 1: sold 180 units in the past 90 days  - The sales rate for this product is 0.5, aka 1 unit every half-day (90 divided by 180)
  - This product would be a "Rocket" product

- Product 2:  sold 45 products in 90 days  - The sales rate would be 2 (1 product every 2 days, or 90 divided by 45)
  - This product would be a "Fast" product

Using the example above, any product that has been sold in the past 90 days but with a sales rate greater than 5 would be considered a "slow" product.

> **Note:** Using the Stock Replenishment Filters you can set up a frequent reordering process to ensure you always have enough stock on hand of your rocket/fast-moving stock.

![stockreplenishment_salesindicators.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjWcEAI.jpg)

## []()Creating a Hierarchy/Department Category structure

Retail Express has a flat level for Product Types, rather than a Department - Category structure. This means that only a single Product Type can be assigned per product.

If you would like to use a Department, Category and Sub Category structure you can still achieve this by putting all of the information together into one line. For example:

|  |  |
| --- | --- |
| **Hierarchy** | **Retail Express Format** |
| - Clothing  - Ladies    - T-Shirts     - Skirts     - Pants | - Clothing - Ladies - T-shirts - Clothing - Ladies - Skirts - Clothing - Ladies - Pants |

Product Types are sorted alphabetically, which means all of these items would appear together in the Product Type lists e.g. in Reports or Product Search & Management features

> **Note:** Hold Ctrl or Shift to select multiple items in the list (as shown below).

![producttypes_multiselect.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjX1EAI.jpg)

## []()Creating Product Types

Product Types can be created either individually directly within Retail Express, or in bulk using Excel to upload multiple Product Types at once.

Click on the headings below to view more details.

[Individually](https://galaxy.maropost.com/kb/articles/471-using-product-types#create-individually)

### To create a Product Type:

1. Navigate to **Settings > Product Types**
2. Enter a name into the **Product Type **field
3. Click **Insert**
  ![producttypes_create.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjE5EAI.jpg)

[Create multiple Product Types (bulk create)](https://galaxy.maropost.com/kb/articles/471-using-product-types#create-bulk)

### To create multiple Product Types:

1. Navigate to **Settings > Product Types > Upload Via Excel**
2. Click on the link **Click here to download template**
  ![producttypes_excelupload_step1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjPrEAI.jpg)
3. Open the downloaded file
4. Enter the **Name **into the first column, "ProductType"
5. Enter the **Sales Indicators **into the Rocket, Fast, Average, Slow columns (see above for detailed information)
  ![producttypes_uploadexcel_edit_step2.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiecEAA.jpg)
6. **Save **the file
7. Open **Retail Express**
8. Under **Step 2 **click on the **Choose File **button
9. Locate the file you saved in the earlier step and click **Open**

> **Note:** The filename will be displayed beside the Choose File button

10. Click **Upload File**
  ![producttypes_excelupload_step2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjXkEAI.jpg)
11. Review the content of the files at the bottom

> **Note:** If there are any errors you will need to correct them in the file and repeat the steps to upload the file

12. Click **Import Excel Data** to import the new Product Types
13. A **Data Imported **message will appear at the bottom of step 1 to confirm the successful upload
  ![producttypes_uploadexcel_step3.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjYJEAY.jpg)

## []()Editing Product Types

### To edit a Product Type:

1. Click the **Pencil** icon on the row
2. The fields will become available for editing
3. Update the fields as required (see above for detailed information on Sales Indicators)
4. Press the blue **tick **icon to save the changes
5. Press the blue **x** icon to cancel without saving your changes

![settings_producttypes_edit.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjYYEAY.jpg)