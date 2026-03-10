---
title: "Processing Manual Stock Adjustments"
articleID: 422
category: "Inventory > Stock Take and Stock Adjustments"
knowledgeBase: "Retail Express"
---

# Processing Manual Stock Adjustments

You can maintain accurate inventory levels in **Retail Express** by processing manual stock adjustments for shrinkage, damaged products, or theft, ensuring your stock records reflect actual physical inventory. This essential inventory management capability helps retail operators quickly correct stock discrepancies and maintain operational accuracy, with configurable adjustment reasons supporting better tracking and accountability across Australian retail operations.

Manual stock adjustment functionality in **Retail Express** enables retail operators to efficiently manage stock status changes between Available and Faulty inventory, supporting proper inventory control and financial accuracy. The ability to configure mandatory adjustment reasons and comments helps ensure your retail operations maintain audit trails and accountability, improving inventory accuracy and reducing unexplained stock variances.

You may need to manually adjust Available and Faulty stock levels, from time to time - usually for theft, damaged stock or shrinkage. The Manual Stock Adjustment feature allows you to manage small, one-off adjustments, however, you may also choose to use this feature in conjunction with your Stocktake.

> **Note:** Manual Stock Adjustments involves the editing of live stock levels and requires the credentials of a User with Stock Adjustment security access.

## []()Perform a Stock Adjustment

To perform a Manual Stock Adjustment:

1. Navigate to  **Inventory > Stock Adjustment**
2. Log in with sufficient User credentials
3. Enter the **Product ID** or **Barcode** to locate the product to be adjusted
4. Check the **Description **to ensure the correct product has been selected
5. Select the **Location **(Outlet or Warehouse)
6. Select a **Status**
7. Enter the **Qty** to be adjusted e.g. 5 to increase stock, or -5 to reduce stock
8. Enter a **Reason **for the adjustment
9. Click **Save **- the inventory will be updated immediately
10. Repeat for any other products or statuses to be updated

> **Note:** We have implemented the ability to select "Reasons" from a dropdown menu when performing stock adjustments. These reasons are configurable in Back Office and via the REST API.

![mceclip1 (88).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWbkEAE.jpg)
Settings have been added to make "Comments" and "Reasons" optional or mandatory. This can be configured via **Settings > Stock Adjustment Settings** in Back Office. These settings determine what options are required when creating a manual stock adjustment.[Return to Top](https://galaxy.maropost.com/kb/articles/422-processing-manual-stock-adjustments#Top)

## []()Moving stock between different statuses

To transfer stock between different statuses is a two-stage process. You need to process two adjustments - one to reduce the previous status, and one to increase the new status. For example, if you wanted to remove stock from Available and move it to Faulty you would need to create two stock adjustments:

- Reduce the Available status
- Increase the Faulty status

To remove stock from Available:

1. Navigate to  **Inventory > Stock Adjustment**
2. Log in with sufficient User credentials
3. Enter the **Product ID** (or Supplier SKU/Barcode) for the product to be returned
4. Select the **Outlet**
5. Select the **Available** status
6. Enter a **minus quantity** for the number of products to be returned e.g. if 5 products are being removed from Available because they're faulty enter -5

> **Note:** Entering a minus quantity reduces the Available quantity

7. Enter a **Description **e.g. Faulty - add details like RA number, the date, who authorised the change etc.
8. Click **Save**
  ![mceclip3 (33).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWeiEAE.jpg)

To add stock to Faulty:

1. Navigate to  **Inventory > Stock Adjustment**
2. Log in with sufficient User credentials
3. Enter the **Product ID** (or Supplier SKU/Barcode) for the product to be returned
4. Select the **Outlet**
5. Select the **Faulty** status
6. Enter a **positive quantity **for the number of products being added to the Faulty status e.g. if 5 products are faulty enter 5
7. Enter a **description** e.g. e.g. Faulty - add details like RA number, the date, who authorised the change etc.
8. Click **Save**
  ![mceclip4 (19).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWexEAE.jpg)

The stock has now been removed from Available and moved to Faulty. Use the Inventory Movement Report to view changes to the stock.

## []()Stock Adjustment for Packages

**Stock Adjustment Reasons:**
Users have the ability to select "Reasons" from a dropdown menu when performing stock adjustments has been implemented. Users can configure these reasons in the Back Office and via the REST API.

- Supports GET | PUT | POST | DELETE /stockadjustmentreasons

Additionally, settings to make "Comments" and "Reasons" optional or mandatory can be configured in 'Settings', allowing for better customization and control.

Configurable via Settings > Stock Adjustment Settings in Back Office and determines what options are required when creating a manual stock adjustment.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240730at100517AM.05TJ100000A2kKkMAJ.png)![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240730at100624AM.05TJ100000A2hddMAB.png)**Reporting on Adjustment Reasons**

Key reports now also display the Adjustment Reason as a filter, and column in the results of the report.

- Stock Adjustment Report
- Adjustment Report

## []()Stock Adjustment for Packages

Stock Adjustments can be made for Packages. When the adjustment is added the quantity of all of the components of the package will be adjusted accordingly.

For example, package "123" contains 3 x Product A and 1 x Product B. If a Stock Adjustment is made to reduce the Available stock by -2, the following updates will take place:

- Product A will be reduced by 6 (2 x 3, as there is a quantity of 3 in the package)
- Product B will be reduced by 2 (2 x 1 as there is a quantity of 1 in the package)

The Inventory Movement Report will display the stock was adjusted manually due to being part of a package:

![mceclip0 - 2023-07-09T001115.039.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWbfEAE.jpg)
To create a Stock Adjustment for a package follow the instructions above but enter the code for the Package (instead of the individual products).