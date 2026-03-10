---
title: "Disabling Products"
articleID: 456
category: "Inventory > Managing products"
knowledgeBase: "Retail Express"
---

# Disabling Products

You can manage product lifecycle and prevent unwanted sales through product disabling in **Retail Express**, which removes products from active selling while preserving historical transaction data and product records. This product status management capability helps retail operators handle discontinued items, seasonal products, or obsolete inventory, with proper product disabling typically improving catalog clarity and preventing accidental sales of unavailable items across Australian retail operations.

Product disabling functionality in **Retail Express** enables retail operators to systematically remove products from POS visibility and purchasing workflows while maintaining complete historical records for reporting and analysis. This product management capability helps ensure your retail operations can maintain clean active catalogs while preserving data integrity and supporting accurate historical reporting on discontinued products.

Products can be disabled in Retail Express, however for historical and auditing purposes, they cannot be deleted. When a product is disabled it has the following effect:

- Hides the product from **reports** and **Stocktake** by default (unless explicitly selected to include Disabled Products)
- Turns off communication between Retail Express and eCommerce/Web Store **integrations** (depending on the integration the product may not be removed from the online web store
- Excluded from Product Search in POS

> **Note:** Disabled Products can still be sold in POS via scanning or manually entering the Product ID/Supplier SKU as it's assumed you are intentionally entering the product to be sold e.g. if you physically have it in your hand.

There are 3 ways to disable products within Retail Express:

1. [Disabling a single product](https://galaxy.maropost.com/kb/articles/456-disabling-products#single-product)
2. [Using Product Search & Management](https://galaxy.maropost.com/kb/articles/456-disabling-products#psm) (single/multiple)
3. [Using Mass Download/Upload](https://galaxy.maropost.com/kb/articles/456-disabling-products#mass-upload) (single/multiple)

## []()Disable a Single Product

To disable a single product:

1. Open **Back Office**
2. **Edit** the product (either by entering the code in the Product Search in the top right-hand corner or via Product Search & Management etc)
3. On the **Main** tab scroll to the **Advanced Options** section
4. Tick **Disabled**
  ![mceclip0 (51).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powjXEAQ.jpg)
5. Click **Save Changes**

## []()Using Product Search & Management

To disable products using Product Search & Management:

1. Navigate to **Inventory > Product Search & Management**
2. Use the **Filters **to search for the products to be disabled

> **Note:** The filter "Has Not Sold (Slow)" is a great indicator for products that may not be stocked or in use any longer for quickly disabling unused products

3. On the **Results** tab click the **Apply Product Edit Setting** drop-down
4. Select **Product Disabled**
  ![mceclip1 (29).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powjcEAA.jpg)
5. Click the **Apply **button on the right-hand side of the row
  ![mceclip2 (19).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powjhEAA.jpg)

By default the Product Search & Management filter is set to only show Disabled products, but if performing a search that includes All/Disabled products, the Disabled products will be indicated with a tick in the **DP **column:

![mceclip3 (17).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powjmEAA.jpg)
Refer to the Inventory - Using Product Search & Management article for more information.

## []()Mass Download/Upload

The Mass Download/Upload process is extremely effective for bulk applying changes to products.

1. Navigate to **Inventory > Mass Download**
2. Select the **Filters **required to include the products to be disabled
3. Ensure the **Outlet **filter is selected to "No Outlet" (unless you are explicitly making changes to Outlet-related information

> **Note:** Outlet tabs contain information on live stock levels - re-uploading this file into Retail Express will overwrite any changes to the stock since the file was downloaded. It's recommended to not download Outlet information unless necessary.

  ![mceclip4 (10).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powjrEAA.jpg)
4. Click **Export to Excel**
5. **Open** the downloaded file
6. Update the **Disabled **column to TRUE
7. **Save **the file
8. In Retail Express navigate to **Inventory > Mass Upload**
9. Click the **Upload Excel **tab
  ![mceclip5 (4).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powkLEAQ.jpg)
10. Click **Browse For File**
11. Untick **update the supplier SKU using the Product Id**
12. Click **Upload**

> **Note:** If you encounter any errors during the upload, refer to the Inventory - Using Mass Upload/Mass Download to create & edit products article for tips on resolving the errors.

## []()Frequently Asked Questions

#### [How to tell which method was used to disable a product](https://galaxy.maropost.com/kb/articles/456-disabling-products#disable-method)

Once the product has been disabled an indicator will appear in Retail Express. This indicator will explain which method was used to disable the product.

|  |  |
| --- | --- |
| Disabled Manually | The Product was disabled directly within Retail Express via the Product Edit screen |
| Disabled by System | The Product was disabled either by:  - Product Search & Management - Mass Upload |