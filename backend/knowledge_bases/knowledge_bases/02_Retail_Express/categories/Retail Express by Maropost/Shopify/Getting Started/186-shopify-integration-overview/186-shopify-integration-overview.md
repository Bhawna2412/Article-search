---
title: "Shopify Integration Overview"
articleID: 186
category: "Shopify > Getting Started"
knowledgeBase: "Retail Express"
---

# Shopify Integration Overview

You can understand the capabilities and benefits of the Shopify integration with **Retail Express** to make informed decisions about your omnichannel retail strategy. This overview helps evaluate integration suitability by explaining features, synchronization scope, and operational benefits, supporting strategic planning for your eCommerce implementation.

Understanding the Shopify integration involves learning about synchronized data types, available features, workflow automation, and best practices for omnichannel operations. When you understand these capabilities, you can expect better strategic planning for eCommerce launch, more realistic expectations for integration scope, and improved ability to leverage features effectively across retail channels.

**Version Note**: Retail Express Shopify Connector

The Retail Express Shopify Integration connects the Retail Express POS platform with Shopify online stores. This allows for a pain-free experience when synchronising products, customers and orders, making it easy to sell products online.

**Check out the Integration Overview video below:**

[▶ Embedded Video](https://player.vimeo.com/video/299108575)

## How it works

When the two systems are connected, Retail Express becomes the source of truth for data. Information is sent between both systems using an Event Driven Synchronisation method, meaning that when an "event" occurs, either in Retail Express or online, the data is updated across both systems.

![rtaImage - 2023-07-10T002610.928.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphyUEAQ.jpg)
Related:Shopify - Connect to Retail Express

#### [Products](https://galaxy.maropost.com/kb/articles/186-shopify-integration-overview#products)

All products are first created within Retail Express, before being published to Shopify. Once published, the product is created online using the data already entered into Retail Express e.g. the Short Description in Retail Express is used to create the product Title in Shopify.

Shopify is then manually updated with any additional information, including images and detailed descriptions.

Any changes to the synchronised product fields in Retail Express are updated using the Event Driven Synchronisation process.

If the product has been enabled for Pre-Order, Shopify will be updated to tag the product and depending on the configuration in Retail Express, update the Inventory Settings in Shopify.

For more information:

- Product Synchronisation
- Event Driven Synchronisation - How to Trigger a Synchronisation

#### [Customers](https://galaxy.maropost.com/kb/articles/186-shopify-integration-overview#customers)

Customers are created in two ways:

1. When a customer is added to Retail Express, the customer information is sent to Shopify and creates a customer record online
2. A new customer entering their details when making a purchase online will synchronise the customer information into Retail Express

Customer address details are recorded against their individual orders within Retail Express.

As customers make purchases online, if Loyalty is enabled within Retail Express they will automatically receive points for any online sales.

For more information:

- Restricting Duplicate Customer Emails
- Edit customers by Mass Download
- Event Driven Synchronisation - How to Trigger a Synchronisation

#### [Orders](https://galaxy.maropost.com/kb/articles/186-shopify-integration-overview#orders)

New sales made online can be handled in the following ways:

- Automatically sent to Retail Express against a nominated Outlet (referred to as the "Sales and Pricing Outlet"), allocating inventory to the order in Retail Express to reduce the available stock.
- Compare the customer's address to the Fulfilment Groups to determine the Source and Fulfilment Outlet (the order is assigned to the highest priority Outlet with Available stock)
- Where a Click and Collect license has been enabled, orders are sent to Retail Express against the nominated Sales and Pricing Outlet, with the Pickup Location set as the Source and Fulfil Outlet.

When an order is placed a notification will appear in the Retail Express POS system of any incoming sales to alert staff members.

The Shopify system is responsible for sending an email to the customer of their purchase, and if configured, an email notification to staff of a new order.

Shopify can also be used to control when an order can be placed of a product:

- If there is Available stock
- If the product inventory tracking has been turned off in Shopify
- If it can still be purchased when out-of-stock

Staff should then process and complete the order within Retail Express.

For more information:

- Processing online sales
- Managing Inventory on Shopify
- Order Fulfilment Groups
- Event Driven Synchronisation - How to Trigger a Synchronisation
- Shopify - Click and Collect

#### [Inventory](https://galaxy.maropost.com/kb/articles/186-shopify-integration-overview#inventory)

When connecting Retail Express to Shopify, Outlets are added to an Inventory Outlets list. Available stock levels from these Outlets, combined with any Inventory Buffer settings, are used to determine the quantity available to sell online.

As a sale is placed the stock can be handled in the following ways:

- The order is created against the nominated Outlet, the Sales and Pricing Outlet. If stock is sourced from a different Outlet, a Transfer will be created to transport the product to the Sales and Pricing Outlet and fulfilled/dispatched to the customer from there.
- Retail Express compares the customer's address to the Fulfilment Groups to determine if there is a matching Group, with the order being assigned to the highest priority Outlet with Available stock. The order will be placed against this Outlet; the Available stock is reduced when the order is received.
- Where a Click and Collect license has been enabled, orders are sent to Retail Express against the nominated Sales and Pricing Outlet, with the Pickup Location set as the Source and Fulfil Outlet. All stock on the order must be available in the same Outlet, no Transfers are available to Click and Collect orders.

As sales are processed in-store, any changes to the inventory levels for the products listed online are synchronised automatically using the Event Driven Synchronisation process. This means that once a product is sold out, the available stock count will be updated in Shopify to mark the product as zero available (depending on the settings in Shopify this product can also still be available to purchase).

For more information:

- Managing Inventory on Shopify
- Shopify - Order Fulfilment Locations
- Event Driven Synchronisation - How to Trigger a Synchronisation
- Shopify Inventory Buffers

## []()Limitations

There are some limitations to the use of the integration between Retail Express and Shopify, which are listed below for consideration.

Retail Express are constantly building and releasing new features to the integration, and this may change in the future. Information on all new releases can be found in the [Release Notes](https://galaxy.maropost.com/s/retail-article) section of our Knowledge Base - stay tuned for new updates!

#### [General](https://galaxy.maropost.com/kb/articles/186-shopify-integration-overview#unsupported-general)

- **Existing Shopify stores: **Existing Shopify stores with products will undergo a mapping process when the integration is first enabled. Products with a matching SKU will be connected to their Retail Express counterpart, products without a matching SKU will be newly created. Refer to the Shopify - Mapping Existing Shopify Products article for more information.

#### [Products](https://galaxy.maropost.com/kb/articles/186-shopify-integration-overview#unsupported-product)

|  |  |
| --- | --- |
| Pricing hierarchy is the same for all products | It's not possible to select an outlet-specific price for one product and a different outlet-specific price for a different product. If an outlet-specific price is utilised, it's the same outlet for all products (the outlet nominated as the Sales and Pricing Outlet) |
| Promotional pricing with multiple Shopify integrations | If utilising the Retail Express Web Price and RRP fields to update the Shopify "Compare At" field and display discounting pricing, these fields are Global fields and will synchronise to all connected Shopify stores. Different pricing can be maintained for multiple Shopify stores by using Outlet-specific pricing for the nominated Sales & Pricing Outlet (defined in the integration settings), however, this will reduce the product price and the Gross Profit value for the sale in Retail Express, rather than apply a promotional discount. Refer to the Shopify - Product Synchronisation article for more information (specifically the section "Displaying Discounted Pricing"). |
| SKU field synchronisation | The SupplierSKU field in Retail Express synchronises to the SKU field, and not the Barcode field |
| Limitation on variants | Please note there is a limitation of 100 variants against a product in Shopify. This means there can be no more than 100 products that are published to Shopify with the same Manufacturer SKU in Retail Express. |
| Packages | A Package is a product containing multiple components (individual products also within Retail Express available separately). Packages may also be known as Kits or Bundles. The Shopify integration only supports the use of the Package Option "Treat package as a consolidated group of products" i.e. the "Package" is treated as a single product, and only displayed a single line on transactions e.g. Invoice in POS. The integration does *not *support the use of Packages with the Package Option "Treat package as individual products", where the package is "exploded" when added to a sale i.e. displays the individual components of the package on the invoice, rather than a single "Package" product. |
| Gift Vouchers | To create Gift Vouchers to sell online a product should be created in Retail Express as per the Shopify - Gift Voucher Integration process. This product will synchronise through to Shopify available for customers to purchase. Redemption of the Retail Express Gift Voucher code is available either in-store or online; the outstanding balance will be updated in both systems.  Native Shopify Gift Cards are not supported with the Retail Express integration. These products will not be created by the Retail Express integration, and should not be created online. Any orders involving the purchase or redemption of a Gift Card will not synchronise to Retail Express. |
| Non-physical products | Shopify contains the ability to control whether products are "physical" or "non-physical" products. Non-physical products are not required to be shipped in the traditional sense and can be emailed/downloaded e.g. ebooks, or tickets. These types of products should still be created through the standard Retail Express process, and the shipping configured on Shopify to be at a value of $0. The inventory policy can be set to allow the sale of these products regardless of inventory if required. |
| Inventory Policy | The inventory policy for products will need to remain at "Shopify tracks this product's inventory". This setting is required by the Retail Express integration; if modified it will be reset during the next product synchronisation. Products can be configured to sell when out of stock using Retail Express. |
| Existing products on Shopify | Existing Shopify stores with products will undergo a mapping process when the integration is first enabled. Products with a matching SKU will be connected to their Retail Express counterpart, and products without a matching SKU will be newly created. Refer to the Shopify - Mapping Existing Shopify Products article for more information. When integrating with multiple Shopify stores, if a product appears in multiple stores it will need the same SKU on all stores and Retail Express. |
| Using Pre-Orders | There is a minor risk of overselling when using Pre-Orders from On Order stock if the customer purchases more than what is remaining on the Purchase Order. Purchase Orders are only considered when "On-Order". Back Order and Incomplete Purchase Orders are excluded. Only one Pre-Order configuration option can be selected at the Shopify Integration level.  Refer to the Pre-Orders article for more details. |
| Information not synchronised | - Long description - Custom fields, Custom Attributes and Custom Attribute labels - Purchase Orders and the ETA dates - Images - Multi-buy promotions - Promotional Pricing, including customer-specific pricing - Fixed Prices - Inbound Purchase Order ETAs |

#### [Sales-related](https://galaxy.maropost.com/kb/articles/186-shopify-integration-overview#unsupported-sales)

|  |  |
| --- | --- |
| Multiple integrated Shopify stores and reporting in Retail Express | Some reports in Retail Express allow you to select "Shopify" as the Order Source. If using multiple Shopify stores it's not possible to select an individual store as the Order Source. It's recommended that if reporting for individual stores is required that each store is connected to a separate Sales and Pricing Outlet in Retail Express (inventory can still be sourced from any outlet). Reports can then be run by filtering on that Outlet with an Order Source of Shopify. |
| SMS Checkout | Customers are only able to checkout using an email address, as this is necessary for a customer account in Retail Express. SMS checkout functionality is not supported (customers can still enter their mobile number for shipping updates) |
| Gift Vouchers | To create Gift Vouchers to sell online a product should be created in Retail Express as per the Shopify - Gift Voucher Integration process. This product will synchronise through to Shopify available for customers to purchase. Redemption of the Retail Express Gift Voucher code is available either in-store or online; the outstanding balance will be updated in both systems.  Native Shopify Gift Cards are not supported with the Retail Express integration. These products will not be created by the Retail Express integration, and should not be created online. Any orders involving the purchase or redemption of a Gift Card will not synchronise to Retail Express. |
| Loyalty Points | Loyalty points will accrue in Retail Express for any orders placed online, but they don't synchronise to display a balance online or to be used for redemption. |
| Cancelled/Returned Orders, Credit Notes | If an order needs to be cancelled and refunded or a product is returned, this will need to be managed in both systems independently. |
| Order Comments | Any order comments made online are not synchronised to Retail Express. |
| Tracking Numbers | Tracking numbers are not synchronised between Retail Express and Shopify |
| Information not synchronised: | - Cancelled/Returned orders (orders will need to be cancelled in both systems) - Credit notes (all other types of Gift Vouchers are supported) |

#### [Third-party Apps](https://galaxy.maropost.com/kb/articles/186-shopify-integration-overview#third-party-apps)

The below covers only known limitations, and should not be considered as an exhaustive list of supported/unsupported apps.

- **Third-party freight/shipping providers:** Retail Express is the defined Fulfilment Service for orders placed in Shopify. Any changes to the order to use a third-party Fulfilment Service will be overwritten during the order synchronisation with Retail Express.
- **Apps creating duplicate SKUs: **some apps may create duplicate SKUs for various reasons; these are not compatible with the Retail Express integration.
- **Apps modifying product prices: **Changes to prices may cause interference with the connector
- **Pre-Orders: **If utilising the Pre-Order feature we recommend using a third-party Shopify app for the best customer experience. Please refer to the Understanding Pre-Orders article for further information and recommendations.

## []()Glossary of terms

The Shopify integration introduces new terms and concepts to Retail Express. Below we have covered the most common ones, with an explanation and overview of how they apply to Retail Express.

|  |  |
| --- | --- |
| **Term** | **Definition** |
| Simple Product | A single product that maintains a one-to-one relationship with a Shopify product based on the ProductID in Retail Express |
| Matrix/Variable Product | A group of products with the same ManufacturerSKU, maintaining a many-to-one relationship with a Shopify product i.e. many products in Retail Express combine to form a single product within Shopify. Each product in the matrix is synchronised as a variant of the Shopify product, based on product ID, differentiated by their unique size and colour combinations. |
| Inactive/Disabled/Unpublished product | A Shopify product is not displayed in the front end of the store to customers. Synchronised products are unpublished and marked as Inactive in Shopify under the following conditions:  - The "Published to Shopify" option is unticked in Retail Express - The product is Disabled in Retail Express - There is a problem with the configuration of the product e.g. products in a matrix with matching size/colour variations. |
| Collection | Used to group products into categories e.g. Clothing, On Sale, New, Birthday. Links to Collection pages are added to the menu/web store navigation. Collections can be created [automatically](https://help.shopify.com/en/manual/products/collections/automated-collections) based on a number of conditions, or manually. |
| Product with Variants | A single product with different attributes is used to customise the product. For example, a t-shirt with different sizes and colours would have the following terms:  - Product: t-shirt - Options: size, colour - Value: small, blue - Variant: T-shirt size small in blue.  Each combination of values and options forms a single variant of the main product. Retail Express uses the ManufacturerSKU to group products together, automatically creating the options and values to make the product with individual variants. |
| Price | The current price of the product to be charged to the customer. |
| Compare At price | The original price for the product (typically used to display the RRP). |
| Product Type | An internal category for the product, not to be confused with Collections. However the Product Type can be used to automatically assign products to Collections if required, and as a filter in the catalogue navigation on the front-end to customers. |
| Tags | Searchable keywords associated with products. These can be used to help customers search for products, and create [automated collections](https://help.shopify.com/en/manual/products/collections/automated-collections). |
| Vendor | The Manufacturer or Brand of the product. |