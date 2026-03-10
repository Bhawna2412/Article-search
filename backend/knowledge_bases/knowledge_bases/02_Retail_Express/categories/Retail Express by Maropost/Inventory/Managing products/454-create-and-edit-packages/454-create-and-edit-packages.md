---
title: "Create and Edit Packages"
articleID: 454
category: "Inventory > Managing products"
knowledgeBase: "Retail Express"
---

# Create and Edit Packages

You can offer bundled products and simplify complex product sales through package creation in **Retail Express**, which enables selling multiple component products as a single unit with streamlined pricing and inventory management. This package functionality helps retail operators create product bundles, gift sets, or kits, with effective package configuration typically improving sales of complementary products and reducing transaction complexity across Australian retail operations.

Package management in **Retail Express** enables retail operators to define component products, set package pricing, and automate inventory allocation across bundle components, helping ensure accurate stock tracking and simplified selling workflows. This packaging capability helps ensure your retail operations can efficiently manage bundled offerings while maintaining accurate inventory levels and supporting clear product presentation at point of sale.

A Package is defined as a product that contains multiple components. A Package may also be known as a Kit, Bundle or Bill of Materials.

Examples of Packages:

- Camping Kit: Tent, Sleeping Bag and Gas Burner
- Dining Suite Package: Six dining chairs and a table
- Nutrition pack: Protein powder, shaker and dietary guide

Packages are virtual inventory items, designed to allow you to bundle or combine multiple products in various quantities to make up a 'package' that can be sold to your customers - usually at a better price than purchasing the various components separately.

## Understanding Packages

The Cost Price of the package is exclusively the sum of the cost prices of its components. You cannot manually specify the cost price of a package.

For example:

|  |  |
| --- | --- |
| Product A | $15.00 |
| Product B | $12.50 |
| **Package Cost Price** | **$27.50** |

**Overview of Package Functionality in Retail Express**

|  |  |
| --- | --- |
| Inventory | - Packages do not have a quantity (whether a package is in/out of stock is determined by the individual components) - Number of packages available for sale is determined by the individual component stock levels i.e. how many packages can be built before one of the components is out of stock - Components of a package must be set up as individual products before they can be included in a package - Only affect the inventory quantities when a package is sold (the inventory level for the individual components are adjusted as a result of the sale) |
| Stock takes | - Packages are not included on stock take (only the individual components are counted) |
| Purchase Orders | - Available to order from Supplier |
| Stock Transfers | - Available to select for Transfer |
| Stock Adjustments | - Stock adjustment can be created for the package, which will automatically create adjustments for the individual components |
| POS | - Included in search - Only available for sale if there is enough individual components available to build the package (refer to the Inventory section) - Can be sold as a single line item (only the package is displayed on the receipt/invoice) - Can be sold as individual components (adding the package to the sale expands into a line per component) |

## []()Create a Package

To create a package you need to:

- Create the virtual Package product
- Configure the individual components

### []()Create a Package

To create a package you will need to first create the "virtual" product - i.e. the parent product that is used within Retail Express. Once this has been created you will be able to add the individual components (step 2).

To create a Package:

1. Navigate to** Inventory > Package Setup**
2. Enter a **Short Description **(if using the "Consolidated Group of Products" the Short Description will be the name of the package on the customer invoice)
3. Enter a **Supplier SKU/barcode for the product**

> **Note:** If you don't have a dedicated product code you can make your own, it will just need to be unique from other Supplier SKUs/barcodes in the system (you cannot use the same Supplier SKU or Barcode for multiple products)

4. Select a **Product Type**
5. Select a **Supplier**
6. Enter the **Weighted Average Buy Price**

> **Note:** This is only to complete the requirement of the mandatory field so you can add the product - once you add individual components this value will be recalculated to match the total of the components; refer to the [Cost](https://galaxy.maropost.com/kb/articles/454-create-and-edit-packages#cost) section above for more information

7. Enter the **POS Price**
8. Complete the rest of the fields as required

> **Note:** For more information on individual product fields refer to the Inventory - Create and Edit a Product article

9. Add additional barcodes on the **Barcodes** tab if required
10. Click **Save Changes**

### []()Add Products to the Package

![packageproducts.PNG](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000povzPEAQ.jpg)
To add a Product to the Package:

1. Once the Package has been created a new **Package Products **section will be displayed
2. Enter the **Product ID **or **Supplier SKU **into the **Products** field
3. Click **Add Product**

> **Note:** You must click Add Product. Pressing Enter on your keyboard saves the Package information only and does not add Products. Products must be added one at a time.

4. The **Weighted Average Buy Price** for the Package will update
5. Click **Save**

To remove a Product from the Package

1. Edit the Qty to 0 (zero)
2. Click Update Qty

To change the quantity of a Product

1. Edit the Qty
2. Click Update Qty

![packageproductsadded.PNG](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000povzeEAA.jpg)
**Select your Package Options**

The Package Options determine how the package is handled in various areas of the system, such as POS, Reporting and Ordering.

|  |  |
| --- | --- |
| **Treat Package as a Consolidated Group of Products** | - Package is displayed in POS as a single Product - Package info is displayed - SKUs, description and price - Reports display details on the Package e.g. Sales Report |
| **Treat Package as individual products** | - Individual components displayed in POS and not the Package - Individual product information is displayed but price/discount for the package is applied across all products - Sales reported on the individual products |

To report on your Packages, use the Package Details Report.

## []()Using Packages

Click the headings below to see how Packages function in various parts of the system.

[Add a Package to a Purchase Order ](https://galaxy.maropost.com/kb/articles/454-create-and-edit-packages#collapseThree)

Save time on ordering and receipting by working directly with the Package Product instead of the individual components. Packages can be added to Purchase Orders and receipted via Stock Receipt.

1. Add a Package Product to a Purchase Order
2. Place On Order
3. The individual product components will be flagged as On Order
4. Perform a Stock Receipt once the stock is delivered
5. The Package Product and the individual components are entered into available stock

The Purchase Order lists only the Package Product (not the components), however, both the individual components and the package will be flagged as being On-Order on the Inventory tab of a product.

![podetails.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pow03EAA.jpg)
The Package Product is also visible as On Order on:

- Edit Product/Package > Inventory tab
- PO Detail Report

[Stock Receipt](https://galaxy.maropost.com/kb/articles/454-create-and-edit-packages#stock-receipt)

Once your stock is delivered, perform a Stock receipt as normal. The stock is receipted against the individual package components, and the Buy Ex of the Package is applied across the product components as a weighted average

![stockreceipt.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pow0JEAQ.jpg)

> **Note:** Packages are only shown as being available in stock if there are enough component products to make at least one package.The number of packages shown as available in stock reflects the number of packages that can be built from the available inventory of the component products.

[Add a package to a Transfer ](https://galaxy.maropost.com/kb/articles/454-create-and-edit-packages#collapseFour)

Packages can be included on internal transfers, created via both POS and Back Office.

> **Note:** The Transfer lists only the Package Product (not the components).

![mceclip0 (23).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pow0SEAQ.jpg)
Once your stock arrives in-store, complete the Transfer as normal.

- Stock is receipted and the Transfer is moved to a Closed status
- Once the Transfer is complete each individual component of the package will have been transferred

![package_transfer_closed.PNG](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pow0hEAA.jpg)
Extract from the Inventory Movement Log:

![packagetransfer_inv movement log.PNG](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pow0rEAA.jpg)
[Perform a Stock Adjustment on a Package](https://galaxy.maropost.com/kb/articles/454-create-and-edit-packages#collapseFive)

> **Note:** Stock Adjustment can be actioned, however Packages are NOT available to be included in a stocktake.
> To process a manual Stock Adjustment, navigate to :** Inventory > Stock Adjustment **and enter the product details as normal.
> ![mceclip1 (9).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000povxBEAQ.jpg)
> Once the Stock Adjustment is complete each individual component of the package will have been adjusted.
>  
> Extract from the Inventory Movement Log:
> ![packagetransfer_inv movement log (1).PNG](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pow0wEAA.jpg)
> 
> The Stock Adjustment Report will reflect the adjustment on a Package
> ![package_stock_adj_report.PNG](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pow1GEAQ.jpg)

## Frequently Asked Questions

[My package price is incorrect when added to POS](https://galaxy.maropost.com/kb/articles/454-create-and-edit-packages#package-pricing-incorrect)

If you add the Package to an order in POS and the price is higher than configured in the Back Office, check if any of the individual components has a Maximum Discount Rule. If so, this will affect the total cost of the package. You will need to either adjust the Package price or modify the Maximum Discount Rule to allow the Package discount to take effect.