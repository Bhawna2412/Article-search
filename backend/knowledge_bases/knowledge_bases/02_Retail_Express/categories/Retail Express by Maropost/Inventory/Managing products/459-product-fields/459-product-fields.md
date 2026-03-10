---
title: "Product Fields"
articleID: 459
category: "Inventory > Managing products"
knowledgeBase: "Retail Express"
---

# Product Fields

You can configure comprehensive product information through the extensive product fields available in **Retail Express**, which support detailed product attributes, pricing configurations, supplier relationships, and inventory settings. Understanding these product fields helps retail operators establish accurate product records that drive reliable retail operations, with proper product configuration typically improving data accuracy and supporting effective inventory management across Australian retail operations.

The product field structure in **Retail Express** enables retail operators to capture essential product details, configure pricing strategies, manage supplier relationships, and control product behavior throughout retail operations. This comprehensive product configuration capability helps ensure your retail operations maintain accurate product data supporting reliable POS transactions, effective inventory management, and insightful business reporting.

The details you enter against a product affect the way the product is used in POS, display on integrated web stores, and appear within reports. You don't have to enter information for every field on a product window - as a helpful guide, the mandatory fields appear with a red asterisk (*) and a red border on the field.

There are different types of products:

- Individual Products
- Package Products

Depending on the type of product you're creating some fields may not be visible. This article talks about individual products, for more information on creating a Package see Inventory - Create/Edit a Package.

## Description & Codes

The Description & Codes section is used to maintain the main reference information for the product e.g. the SupplierSKU, and Custom fields.

![products_editproduct_main_descriptions&codes.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWleEAE.jpg)
* indicates a mandatory field required to create a new product

| **Field** | **Details** |
| --- | --- |
| Short Description* | The basic product description used at the POS and appears on most reports and transactions e.g. Customer Statements, Invoices, Receipts and Purchase Orders etc. If using a web store integration, the Short Description will typically form the product name online unless configured otherwise. |
| Supplier SKU* | The unique "Master" code used for products, usually the scannable product barcode or unique code provided by the supplier. This field can be any length of characters, however for compatibility with barcode scanners should only contain:  - Upper Case Letters - Numbers - Hyphen (-) - Forward Slash (/)   > **Note:** Using lower case letters, spaces or any other symbols can cause issues within the system - refer to the Valid Characters article for more information. |
| Manufacturer SKU | Can be used for a Group or Style Code (the code that applies to the entire range of the same product e.g. a t-shirt in 4 colours and 5 sizes). This can also be used as an alternative code for the product. When used for a Group/Style Code all products in the group must share the *exact same *Manufacturer SKU.  > **Note:** This is the only field in Retail Express that can be used as a Style Code, and is responsible for the grouping of products together for web stores and Style reports (e.g. Style Performance). |
| Custom1, Custom2, Custom3 | Generic text fields where you can enter any extra information to be associated with the product. These fields can be searched in the Product Search in POS and via the Product Search & Management.  > **Note:** There are no reports in Retail Express that filter or search by these fields. |

## Properties

The properties section is used to maintain information on the details of the product - physical characteristics, and the ordering.

![products_editproduct_main_properties.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWlyEAE.jpg)

| **Field** | **Details** |
| --- | --- |
| Product Type* | Groups used to categorise your inventory, used extensively for reporting within Retail Express. Product Types can be created as required, for more information refer to the Product Types article. |
| Lead Time | The estimated number of days it takes to get the product to you once it's been ordered e.g. a next day delivery would have a lead time of "1", 2 weeks would be "14". This field only accepts whole numbers in the unit of days. |
| Weight | The weight of the product. Entered as a numerical value with up to 2 decimal places. You can use whatever unit of measure you prefer but the units cannot be entered e.g. 500 will be accepted but not 500g. The same weight identifier/unit should be consistent for all products e.g. enter a value of 0.5 to represent 500g and 1 to represent 1kg. |
| Length Breadth Depth | The dimensions of the product. Entered as a numerical value with up to 4 decimal places. You can use whatever unit of measure you prefer but the units cannot be entered. e.g. 50 will be accepted but not 50mm. The same unit should be consistent for all product e.g. enter a value of 0.5 for 50cm, and 1 for 1m. |
| Shipping Cubic Measurement | The cubic size of the box(es) the product is shipped in |
| Supplier* | The default supplier for the product. The product can still be ordered from any supplier in a Purchase Order. New suppliers can be created as required, for more information see the Suppliers article. |
| Supplier SKU 2 | Used to store a separate Supplier Order Code against the product. For example, where the supplier has a preferred ordering code different to the Supplier SKU. The Supplier SKU 2 field appears on Purchase Orders. |
| Core Product | Used to indicate if the product is a main seller or staple product stocked continuously, or expect never to be out of stock of. Various reports have a "Core Product" filter and you can use this during the Stock Replenishment process. |
| Requires Assembly | If the product requires Assembly or not - useful for large or bulky goods. |
| Auto Generate ITO From | Legacy feature no longer used in the current version of Retail Express. |

## Attributes

The attributes section consists of the default Attributes plus any Custom Attributes that have been created.

The default Attributes are:

- Brand
- Season
- Size
- Colour

![products_editproduct_main_attributes.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWUREA2.jpg)
In the above screenshot, the Width and Material attributes are Custom Attributes.

Attributes can be viewed and searched for within POS, synchronise with the web store and appear on many reports within Retail Express. Products can be grouped together in combination with the Manufacturer SKU, with their individual elements being identified through the attributes.

For information on creating and maintaining both default and custom Attributes refer to the Settings - Product Attributes article.

## Web

![products_editproduct_main_web.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWmDEAU.jpg)

| **Field** | **Details** |
| --- | --- |
| Export to Web Service | Used for web store integrations utilising the Magento Plugin or eCommerce API e.g. Magento. Ticking this option enables the product for synchronisation through the API. For more information refer to the Web Integration - Enabling products for web store integration article |
| Source Groups | Used for web store integrations utilising the Magento Plugin or eCommerce API e.g. Magento. Source Groups all you to control where products are sourced from when they're sold online. For more information refer to the Source Groups Overview article. |
| Long Description | Legacy feature no long used within Retail Express, but still available in some API integrations. |

## Pricing

This section allows you to create global Buy and Sell prices for products, and is commonly referred to as the Global Price or Master Price.

> **Note:** Outlet-specific prices can be set via the Pricing tab - see the Pricing Tab section below for more information on that area.

![products_editproduct_main_pricing.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWmNEAU.jpg)

| **Field** | **Details** |
| --- | --- |
| Supplier Buy Ex | The estimated price of the product in the **supplier's native currency**. This field is used for creating a Purchase Order only to give you an estimated value of a Purchase Order i.e. at the point when you may not yet know the final price in your local currency.  > **Note:** For a detailed explanation of the differences between the Supplier Buy Ex and the Weighted Avg Buy Price refer to this article. |
| Weighted Avg Buy Price (Ex Tax)* | The buy price (excluding tax and direct costs) of the product in your local currency i.e. if the product is $100 USD and the Australian Dollar was at $1.11 per USD this would be $111.26.  > **Note:** For a detailed explanation of the differences between the Supplier Buy Ex and the Weighted Avg Buy Price refer to this article. |
| Direct Costs (Ex Tax) | The additional cost (in local currency) associated with receiving the product. This may include Freight, duties or handling fees etc. Used to calculate the Cost of Goods Sold (Ex Tax) |
| Cost of Goods Sold (Ex Tax) (referred to as COGS) | The final value the product cost to the business to receive. This is a read only field calculated via: COGS = Weighted Average Buy Price (Ex Tax) + Direct Costs (Ex Tax) |
| Markup Target % | A value used to calculate the POS price; as you can only have one global POS price you can select between the Markup Target % and a Fixed Price. When this value is entered the POS price is calculated and rounded based on the settings specified at Settings > POS Settings > Product Settings > Round GP Target Prices By. The Markup Target % Formula: POS Price = (COGS + (COGS * Markup % /100)) * (1 x TaxRate) |
| Calc POS by % Markup Target/Fixed Price | Used to select between the Markup Target or a Fixed Price to determine the POS Price. |
| POS Price (Inc Tax)* | The Global price for the product.  This can either be calculated using the Markup Target % field or by entering a fixed value directly into the field. |
| Date POS Price Changed | A read-only field used to display the last time the POS Price was changed (either manually or through the Mass Upload process). |
| Promotional Price (Inc Tax) | Used to discount the product for a set period of time.   > **Note:** This promotion will apply from the moment you update the field with a valid price and an Expiry Date. To set future promotional pricing you can use outlet specific prices. |
| Promotional Price Expiry | Used to set a date for the Promotional price to expire. This field is **inclusive**, so if the date was set to the current date the promotion would still apply until midnight. |
| Maximum Discount Rule | Used to prevent the product from being discounted beyond a specified amount. For detailed information on this feature refer to the Maximum Discount Rules article. |
| Web Price (Inc Tax) | Used by web store integrations to specify prices for the web store separate from the in-store price.  > **Note:** If this field is used it will override all other prices online. For more information refer to the Magento - Calculating Product Prices article. |
| RRP (Inc Tax) | Used as a reference only, allows you to enter a Recommended Retail Price and display it, along with your price, on product labels or web store. |
| Freight Cost (Inc Tax) | Legacy field This field was previously used to charge customers freight when purchasing the product on a Retail Express web store (not including Magento/Shopify/eCommerce API sites - the freight is controlled on the web store itself for these integrations). |

## Replenishment

![mceclip0 - 2023-07-09T002045.394.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWBIEA2.jpg)
The Replenishment section allows you to configure the conditions for a Purchase Order to be created automatically when a sale is made in POS.

| **Field** | **Details** |
| --- | --- |
| Never Auto Replenish | When selected this product will never have a Purchase Order generated automatically as a result of a sale |
| Always Auto Replenish | Any time a product is sold a Purchase Order will be created, regardless of stock level. This option can be useful for products that you don't keep in stock regularly but always order in for customers e.g. expensive or oversized products  > **Note:** There is a Global "Generate Purchase Order" setting which must be enabled to use this function. Navigate to Settings > Global Settings > 4. Outlet > Auto Generate PO. |
| Auto Replenish when Out of Stock | This option will automatically create a Purchase Order for the product if it is sold *and *the stock level is at or below 0. This is useful for core type products that you always want to have in stock.  > **Note:** There is a Global "Generate Purchase Order" setting which must be enabled to use this function. Navigate to Settings > Global Settings > 4. Outlet > Auto Generate PO. |
| Auto Replenish when insufficient On order | Automatically create a Purchase Order if a sale is made in POS but there is not enough stock in Retail Express to cover the sale.  When calculating the total stock accessible Retail Express will review how many products are:  - Available i.e. currently in the Outlet available to be sold - On-Order i.e. stock already ordered from the Supplier and en-route  If there is not enough stock Retail Express will create an Incomplete Purchase Order for the total sale quantity (not just the difference) e.g. if 5 products are added to the sale and there is currently 1 Available and 3 On Order (a total of 4) a PO will be created for 5 products. |

## Advanced Options

![mceclip1 (89).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWmwEAE.jpg)

| **Field** | **Details** |
| --- | --- |
| Prevent Disabling | Used to stop a product from becoming disabled automatically. When disabled products will not show up in searches or reports unless specifically included in the search filters. For eCommerce integrations, this feature will allow the product to be sold online even when stock is not available. |
| Disabled | Marks a product as Disabled; this will prevent them from showing in searches or reports unless Disabled Products have been specifically included. |
| Manual Edit | This will prevent the product from being updated when using Product Search & Management bulk actions. |
| Product is a Voucher | Legacy feature to indicate if the product was a voucher |
| Loyalty Ratio | Used to calculate the number of loyalty points awarded to a customer when this product is purchased. This will override the Global Loyalty Ratio. The field accepts a single decimal place e.g. 0.5 For example, if you have a product you want customers to earn double points for you would enter a ratio of 2. To prevent points from being accrued enter a value of 0. |
| Global ID | Used with Franchise Connect to match products within multiple Franchises. |
| Date Created | The date and time the product was created within the database |
| Last Updated | The date and time the product was last updated |

## Publish to Shopify

![products_editproduct_main_publishtoshopify.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWnBEAU.jpg)
This section is only displayed if you have an active Shopify license and have connected a Shopify store to Retail Express.

Each store will be displayed with their url e.g. example.myshopify.com. Tick the box to trigger a synchronisation of that product to the Shopify store.

For more information see the Shopify Integration Overview article.