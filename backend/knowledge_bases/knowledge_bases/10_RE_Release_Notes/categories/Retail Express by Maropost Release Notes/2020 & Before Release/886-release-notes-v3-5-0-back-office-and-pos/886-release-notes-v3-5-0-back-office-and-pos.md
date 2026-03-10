---
title: "Release Notes v3.5.0 - Back Office and POS"
articleID: 886
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-12-01
---

# Release Notes v3.5.0 - Back Office and POS

# Release Notes v3.5.0 - Back Office and POS

**Release version:** 3.5.0 | **Release Date:** 20 May 2019

In this release we've added a brand new Purchase Order print/email layout for Matrix Products and Packages. We've also made it easier to manage orders with an updated Web Alert feature and the ability to easily search for external Order reference numbers. Finally, we've made a large number of improvements and resolutions, listed below in detail for you!

**Update 6-Jun-19:** [Version 3.5.5](https://galaxy.maropost.com/s/article/Release-Notes-v3-5-5-POS-and-Back-Offic) hotfix has been released with additional functionality and fixes, please see the [Release Notes](https://galaxy.maropost.com/s/article/Release-Notes-v3-5-5-POS-and-Back-Offic) for more information.

**On this page:**

- [New Purchase Order Matrix/Package Template](#po-matrix)
- [Web Order Alerts](#web-alerts)
- [External Order Reference search](#external-reference)
- [Improvements and Resolutions](#improvements)

Please note there have been updates to other Retail Express products. Click the links below to view the associated Release Notes for changes included in Version 3.5.0

- [API Changes](https://galaxy.maropost.com/s/article/Release-Notes-v3-5-0-API-update)
- [Franchise Connect](https://galaxy.maropost.com/s/article/Release-notes-v-3-5-0-Franchise-Connec)

### []()**New Purchase Order Matrix/Package Template**

A new Purchase Order template is available for emailing or printing Purchase Orders to send to your suppliers. The new layout has been designed especially for Matrix Products and Packages, and displays quantities of products based on their size and colour attributes.

For example, if you typically place orders for the same style of product in varying size and colour, the new Email/Print Template will group these products together, with dedicated columns and rows for the sizes and colours. This makes it easier for your Supplier to understand which products you're ordering.

![mceclip0 - 2023-07-09T193337.410.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgI3EAI.jpg)The same product in two different sizes and two different colours grouped together on the order below

![pomatrixtemplate.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgI8EAI.jpg)[The new PO format as seen on an email - click to enlarge](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Farticle_attachments%2F360002156036%2Fpomatrixtemplate.png)

> **Note:** The Term Matrix products refers to products sharing a common Manufacturer SKU (sometimes referred to as a Style Code). For example, the same shirt in different sizes/colours will have unique Supplier SKU codes and size/colour combinations, but share the same Manufacturer SKU. These products are typically displayed in a "matrix" table format.

### How to use the new Template:

The new template is available when emailing or printing your order.

1. Navigate to **Inventory > PO Management > Create PO**
2. [Create your Purchase Order](https://galaxy.maropost.com/s/article/Create-a-Purchase-Order) as normal

> **Note:** the method for creating your order has not changed

3. From the **Supplier Details** section select **Matrix Template with Packages Exploded**
  ![mceclip13 (3).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfA4EAI.jpg)
4. Click the **Email/Preview PO button**
5. The new layout will be displayed

**To enable this feature**[**contact support**](mailto:support@retailexpress.com.au?subject=Enable%20PO%20Matrix%20Template)

### Selecting the new template

The new format can be configured in either of the following two places:

1. In the **Supplier Settings** - The new template can be selected as a default when configuring individual Suppliers i.e. when creating new orders for these Suppliers it will automatically use the new Matrix layout
  ![mceclip12 (5).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgIhEAI.jpg)
2. Selected **individually per Order**; where you have orders that don't have matrix products you can use the regular PO template
  ![mceclip13 (4).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgImEAI.jpg)
3. Available to select for both **Print** and **Email** Purchase Orders

### Information displayed

The new template includes extensive details about the products to be ordered, including:

- **Product Details** (Barcode, Manufacturer SKU, Product name, Attributes e.g. Brand)
- **Package Information** (if the products are part of a Package it will list each of the individual products within the package, including the number of units included in a standard package)
- **Attribute information** in a matrix format (the colour in the header, sizes listed vertically)
- **Unit Quantity** (the matrix grid showing the number of units per size/colour quantity - if not part of a matrix it will display the qty for the individual product)
- **Order Qty** information (for Packages this will display the Package quantity, not the sum total of units making up the package)
- **Total Units **- at the bottom of the matrix/package the total number of individual units to be ordered

For more information refer to the [Purchase Orders - Create a Purchase Order](https://galaxy.maropost.com/s/article/Create-a-Purchase-Order) article.

[Return to top](#top)

### []()**Improved Web Order Alerts functionality**

The Web Order alert functionality within POS has been improved!

- **Outlet-specific** - only see the orders outstanding for the Outlet
- Orders from **any date** (when you click the alert the Look Up functionality defaults to the past 6 months but you can search for longer if required)
- Orders will be highlighted if they are:  - **Awaiting Payment**
  - Have** stock to be Fulfilled/Dispatched**

### How to see the new alert:

The alert will be automatically displayed on the main window of POS as a new Web Order is placed, or if there are existing Web Orders that require action.

1. Click the alert to open the **Look Up **window (login will be required)
2. A list of the orders that require attention will be displayed

> **Note:** The date range will automatically select the previous 6 months, and the filter will be set to Open Web Orders

![350-webalertlookup.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgCaEAI.jpg)
For more information on processing web store sales, please see[Web Store - Processing Online Sales](https://galaxy.maropost.com/s/article/Processing-online-sales)

### []()**Easily find orders using the External Reference field**

In this release we've improved the ability to search for orders with external reference numbers in both POS and the Fulfilment Report.

For example, if using the Retail Express Shopify Connector you can search for the Shopify Order number and still be able to find the sale within Retail Express. Or if the customer has provided you with a PO number, you can type this into the External Reference field and search for this from within POS or using the Fulfilment Report.

### How to access the External Reference Field

The "External Reference" field (formerly called the "Customer PO Number" field) can be updated in the following ways:

- Editing the order in **POS**
  ![mceclip4 (31).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgIwEAI.jpg)
- When using a **web store integration** using the eCommerce API ([click here](https://galaxy.maropost.com/s/article/Release-Notes-v3-5-0-API-update) for the API Release Notes on using this field - your developer will need to implement the functionality)
- The Retail Express **Shopify Connector** will automatically display the Shopify Order Number for any transactions following the release

> **Note:** This field was formerly referred to as "Customer PO Number" in POS.

### Searching for an External Reference Code

Both POS Lookup feature and the Fulfilment Report have been updated to allow users to search for external reference numbers:

![mceclip5 (20).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppes0EAA.jpg)Look up feature in POS

![mceclip11 (5).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgJ6EAI.jpg)Fulfilment Report in Back Office

The Fulfilment Report also include the External Order references on the Results tab, making it easier to cross-reference orders as they're being prepared for dispatch.

![mceclip10 (7).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdZWEAY.jpg)
Click here for more information on the [Fulfilment Report](https://galaxy.maropost.com/s/article/Using-the-Fulfilment-Report-to-fulfil-and-dispatch-products) or the [POS Look up](https://galaxy.maropost.com/s/article/Look-Up-Search) feature.

### []()**Improvements**

Below is a list of improvements included in the latest Maintenance Release:

|  |  |
| --- | --- |
| **Area** | **Details** |
| [Afterpay](https://galaxy.maropost.com/s/article/Afterpay-Barcode-Integration-Legacy) | Laybys paid using Afterpay can now be cancelled successfully |
| System Settings | A count of associated products can now be seen when viewing the following screens:  - [Suppliers](https://galaxy.maropost.com/s/article/Managing-Suppliers) - [Product Types](https://galaxy.maropost.com/s/article/Using-Product-Types)  ![350-supplierproductcount.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgJLEAY.jpg) |
| [Stock Value vs Sales Report](https://galaxy.maropost.com/s/article/Stock-Value-Vs-Sales-Report) | The Default Sales Date To and PO Date To filters will automatically select the day after the current date. ![mceclip3 (46).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgJQEAY.jpg) |
| [Item Detail Export Report](https://galaxy.maropost.com/s/article/Item-Detail-Export) | Disabled products can now be excluded from the report using the new "Exclude Disabled Products" check box Reports > Stock Reports > Item Detail Export ![mceclip0 - 2023-07-09T193442.516.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgJVEAY.jpg) |
| [Fulfilment Report](https://galaxy.maropost.com/s/article/Using-the-Fulfilment-Report-to-fulfil-and-dispatch-products) | The Zone, Time and Driver column on the Results tab has been widened to display the contents of the drop-downs clearly. ![mceclip1 - 2023-07-09T193446.742.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgJpEAI.jpg) |
| [Stock Replenishment via Purchase Orders](https://galaxy.maropost.com/s/article/Stock-Replenishment-via-Purchase-Order) | Packages can now be reordered using the Stock Replenishment via Purchase Orders feature. When running a Stock Replenishment run you can select to order only products, only packages, or both using the "Include" drop-down option. ![mceclip7 (14).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgKJEAY.jpg) |

### []()**Resolutions**

Below is a list of resolutions included in the latest Maintenance Release:

|  |  |
| --- | --- |
| **Area** | **Details** |
| [Loyalty](https://galaxy.maropost.com/s/article/Loyalty-Configuration) | The configuration option "Allow Product Discounts AND Points Cash Redemption in same transaction" has been retired from the Loyalty Configuration window; this feature is not available. |
| [Product Maintenance](https://galaxy.maropost.com/s/article/Create-and-Edit-Products) | An issue has been resolved where in specific incidents users were unable to upload Product Images |
| [Product Search & Management](https://galaxy.maropost.com/s/article/Using-Product-Search-Management) | The "Never" option of the "Has Not Sold" filter now correctly restricts products with sales |
| [Price Groups (Fixed)](https://galaxy.maropost.com/s/article/Create-Edit-Fixed-Price-Groups) | Fixed Price Groups can now be deleted successfully |
| [Purchase Order - Receiving](https://galaxy.maropost.com/s/article/Stock-Receipt-Overview) | The PO Receiving window now displays the correct GP % figure for non-taxable products already received |
| [Customer Activity Report](https://galaxy.maropost.com/s/article/Customer-Activity-Report) | The Customer Activity Report can now be filtered by Brand |
| [Wireless/On Screen/In Browser Stocktake](https://galaxy.maropost.com/s/article/Stocktake-Create-a-Stocktake-Browser) | When the "Adjust Available" Stock Take method is selected, the column used to show the expected stock count is now called "Available" instead of "SOH" (Stock on Hand) |
| [Item Detail Export](https://galaxy.maropost.com/s/article/Item-Detail-Export) | Filtering products by Brand will exclude any products that don't have a brand assigned at all, and only return products of the matching Brand/s. |
| [Product Sales Report](https://galaxy.maropost.com/s/article/Product-Sales-Report) | The Bin Location for a product is now displayed in the Product Sales Report Export |
| [Stock Replenishment via PO](https://galaxy.maropost.com/s/article/Stock-Replenishment-via-Purchase-Order) | An issue has been resolved where the Stock Replenishment via PO process consolidated the Purchase Orders to a single outlet and created a Transfer with the same source/destination Outlet. |
| [MultiBuy](https://galaxy.maropost.com/s/article/Creating-Promotional-Campaigns-and-Coupons) | MultiBuy now applies when selecting product types |
| [POS](https://galaxy.maropost.com/s/article/Understanding-the-Product-Tab) | The tax value for Fulfilled products is unable to be amended |

> **Note:** Stay up-to-date with news from the Support team - subscribe now

Want more information? View all [Release Notes](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Fcategories%2F115000210393-Release-Notes) now.