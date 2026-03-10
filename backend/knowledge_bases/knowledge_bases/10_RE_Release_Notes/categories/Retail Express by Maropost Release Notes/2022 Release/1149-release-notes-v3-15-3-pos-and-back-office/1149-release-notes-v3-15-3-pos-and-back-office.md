---
title: "Release Notes v3.15.3 - POS and Back Office"
articleID: 1149
category: "2022 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-11-28
---

# Release Notes v3.15.3 - POS and Back Office

# Release Notes v3.15.3 - POS and Back Office

These updates will become available to all customers by the **30th March 2022.**

## Video Overview

[▶ Embedded Video](https://player.vimeo.com/video/690355967?h=b835b6a65f)

## New Features

### Invoice Pick List

![mceclip0 - 2023-07-09T190322.862.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdi6EAA.jpg)[Click to view full size](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Farticle_attachments%2F4538349638031%2Fmceclip0.png)

Streamline your fulfilment processes with the new Invoice Pick List! If your Fulfilment Team use a picking process by customer order, the new Invoice Pick List will provide all the information they need to easily locate and dispatch the stock quickly and efficiently.

The Invoice Pick List contains key information, including:

- Product information, Bin Locations and Product Attributes
- Stock availability information e.g. Available to Pick, or Reference for Inbound Stock
- Customer Details
- Freight Information
- and more

If printing a large number of invoices for picking at once, the new Batch Generation feature will also split the batch into multiple files for printing.

[Find out more...](https://galaxy.maropost.com/s/article/Invoice-Pick-List)

### Shopify Pre-Orders

![Pre-Orders.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfgOEAQ.jpg)
Using the new [Shopify Pre-Orders integration](https://galaxy.maropost.com/s/article/Understanding-Shopify-Pre-Orders) you can now sell products online before they arrive in stock, generating cash flow while reducing inventory risk.

Features of Pre-Orders:

- Independent configuration for each Shopify Store connected to Retail Express
- Manage which products are available for Pre-Order
- Provides workflows for preselling only what you've ordered vs only ordering what has been presold
- Display ETA Dates to customers, so they understand when Purchase Orders are expected to arrive

To improve your customer experience online we recommend using [Pre-Order Now](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fapps.shopify.com%2Fpreorder-now), available in the Shopify App Store e.g. display a "Pre-Order" button instead of "Add to Cart" (alternatively you can custom develop your own solution).

[Read more...](https://galaxy.maropost.com/s/article/Understanding-Shopify-Pre-Orders)

### Shopify Inventory Buffers

![Inventory Buffers.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfgTEAQ.jpg)
Reduce your risk of overselling due to stock discrepancies with Shopify Inventory Buffers!

Using Inventory Buffers you can specify a quantity level (buffer) of products to be excluded from the stock available to sell online.

Buffers can be set:

- Per Shopify Store (meaning if you have multiple stores connected you can control different buffers to suit each store)
- Globally (as a default for all products) or as a custom buffer set per Product Type

[Read more...](https://galaxy.maropost.com/s/article/Shopify-Inventory-Buffers)

### New Endpoints for the REST API

The following new endpoints will be added to the REST API:

|  |  |
| --- | --- |
| **Endpoint** | **Details** |
| GET /productbarcodes | Gets all the additional Product Barcodes Can be searched based on the Product ID or Barcode, or return all barcodes in the system. |
| GET /producteta | Get all Product estimated times of arrival. Requires either the Product ID or SKU, a quantity ordered, and either a Fulfilment Outlet ID or Sales Channel ID. |
| POST /products | Creates Products |
| DELETE /products/{id} | - Disables specific product by ID - Hides the product from reports and Stocktake by default - Turns off communication between Retail Express and ecommerce/Web Store integrations - Excludes from Product Search in POS |
| PUT /products/{id} | Updates Product by ID |
| GET?/shipmenttypes | Searches Shipment Type by parameters |
| POST?/shipmenttypes | Creates Shipment Type |
| GET?/shipmenttypes?/{id} | Gets Shipment Type by ID |
| PUT?/shipmenttypes?/{id} | Updates Shipment Type |
| DELETE?/shipmenttypes?/{id} | Deletes Shipment Type by ID |
| GET /shippingports | Search Shipping Port by paremeters |
| POST?/shippingports | Creates Shipping Port |
| GET?/shippingports?/{id} | Get specific Shipping Port by unique ID |
| DELETE?/shippingports?/{id} | Deletes Shipping Port by ID |
| PUT?/shippingports?/{id} | Update Shipping Port by ID |
| GET?/shippingstatus | Searches Shipping Status by parameters |
| POST?/shippingstatus | Create Shipping Status |
| GET?/shippingstatus?/{id} | Gets Shipping Status by ID |
| PUT?/shippingstatus?/{id} | Updates Shipping Status by ID |
| DELETE?/shippingstatus?/{id} | Deletes Shipping Status by ID |

Additional changes:

- new order_by parameter added to GET /products which allows results to be ordered by id, supplier_sku, supplier_sku2, manufacturer_sku, short_description, product_type, supplier, size, colour, core_product, disabled
- new filter_by parameter added to GET /supplierreturns which allows results to be filtered by supplier, outlet, supplier_return_status, return_authorisation, created_on, started_on, finalised_on, modified_on. Various operators are available and filters can be combined - please see documentation for more details

Please note the [Developer Portal](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdeveloper.retailexpress.com.au%2F) information will be available after 30th March (when the roll out to all customers has been complete).

## Improvements and Resolutions

### Improvements

- The Customer's Loyalty History Tab in Back Office is now sorted in chronological order of when the transaction was created.
- Removed the "Install Drivers" link from the Back Office Help Menu as these drivers are no longer required following the [update to Label Printing](https://galaxy.maropost.com/s/article/IMPORTANT-Label-Printing-Changes) to use JS Print (if you need to install the Barcode font you can access it [here](https://galaxy.maropost.com/s/article/Installing-Barcode-Font-and-Drivers)).
- Updated the [Global Settings](https://galaxy.maropost.com/s/article/Global-Settings) to remove the Purchase Order and Label Print settings (these features are redundant and no longer used)
- Updated [Zebra Label Printing Templates](https://galaxy.maropost.com/s/article/Create-a-Zebra-Label-Preset-template) so you can now test print a new label before the template has been saved

### Resolutions

- Resolved an issue where under some instances the wrong Purchase Order number was displayed against a transaction on the Fulfilment Report
- Resolved an issue with the Shopify Connector where specific countries weren't synchronised