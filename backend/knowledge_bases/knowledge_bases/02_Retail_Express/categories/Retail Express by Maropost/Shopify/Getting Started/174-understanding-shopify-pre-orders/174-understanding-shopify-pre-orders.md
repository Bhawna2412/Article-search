---
title: "Understanding Shopify Pre-Orders"
articleID: 174
category: "Shopify > Getting Started"
knowledgeBase: "Retail Express"
---

# Understanding Shopify Pre-Orders

The Retail Express Shopify Pre-Order feature allows customers to purchase products that have not yet arrived, or are not currently in stock. By accepting orders early, you can generate sales and cash flow, and gauge the market interest in a product to make educated forward-planning business decisions.

![rtaImage - 2023-07-10T032721.782.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiTcEAI.jpg)
Features of Retail Express Shopify Pre-Orders:

- Independent configuration for each Shopify Store connected to Retail Express
- Manage which products are available for Pre-Order
- Allow unlimited number of Pre-Orders, or limit the number of Pre-Orders based on the incoming quantity for this product on one or more Purchase Orders
- Display ETA Dates to customers, so they understand when Purchase Orders are expected to arrive

To improve your customer experience online, we recommend using one of the third-party Shopify Pre-Order apps available in the Shopify App Store e.g. display a "Pre-Order" button instead of "Add to Cart" (alternatively you can custom develop your own solution). Visit the [Shopify Blog](https://www.shopify.com/au/blog) to read more about Pre-Ordering, including a list of recommended apps.

> **Note:** Retail Express has tested Pre-Order functionality with the Pre-Order Now app only (other apps have not been tested).

## Pre-Orders Concepts

### Using Third-Party Pre-Order apps

There's a variety of Pre-Order apps available to use on Shopify, and which one you select will depend on your business requirements. To achieve the maximum customer experience, the Pre-Orders on Shopify requires the third-party app to:

- Change the Add to Cart behaviour to display "Preorder Now"
- Display badges to highlight products as Pre-Order
- Add Notes to Orders in the cart/checkout to highlight the Pre-Order items
- Display custom content or enforce custom rules regarding "mixed product" orders i.e. Pre-Order products with items already in stock

The Shopify third-party Pre-Order apps all work slightly differently, and it's important to understand how Retail Express interacts with Shopify, so you can choose the right app and app settings for your use case. We recommend the Pre-Order Now extension.

Retail Express tags a product with a "PREORDER" tag, and sets the 'Continue selling when out of stock' flag against the variant. It's important the app you choose allows you to utilise these two settings to successfully setup the Pre-Order functionality.

> **Note:** We are not able to customise this behaviour if your chosen Pre-Order app works in a different way. We'd recommend switching to an app that can utilise these core concepts.

### Product Tag

The "PREORDER" tag is synchronised and added to the product as soon as a product has been enabled for Pre-Order in Retail Express.

> **Note:** the "PREORDER" tag is hard-coded and cannot be customised.

Tags are applied at a product level, so even if one variant of a product is enabled for preorder, the entire product will be tagged with "PREORDER". However, that doesn't mean all variants will be able to be purchased on Pre-Order as the inventory requirements will need to be met as well (covered below).

The "PREORDER" tag allows third-party Pre-Order apps on Shopify to manage the product e.g. change the "Add to Cart" button to "Pre-Order" etc. How this functions will depend on the third-party app you select.

![rtaImage - 2023-07-10T032728.212.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphkaEAA.jpg)
This tag is automatically removed if the product is removed from Pre-Orders within Retail Express.

No other tags will be overwritten or removed.

### Inventory Configuration

When a product is available for Pre-Order, Retail Express will synchronise and update the "Continue Selling When Out of Stock" flag.

This will allow Shopify to sell the stock regardless of the quantity, and Retail Express will control when this option is unticked (and thus removing the product from Pre-Order). How Retail Express manages this will depend on the Pre-Order settings configured in your Shopify Store settings (discussed further in this article).

![rtaImage - 2023-07-10T032735.809.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphVQEAY.jpg)

### ETA Button

As part of the Pre-Order installation, we have included code that your developers can install on your site to show the ETA date of Purchase Orders to customers i.e. the date the stock is expected to arrive into your Outlet or Warehouse.

![rtaImage - 2023-07-10T032740.569.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiTrEAI.jpg)
If the ETA of the Purchase Order is blank, or set to a date in the past, the ETA will display a warning e.g. Get in touch for Availability. If the PO ETA is set to a date in the future, Shopify will display the date as per the date on the purchase Order. If you have Pre-Orders enabled and using the Shopify Buffers feature, the ETA may display today's date if there's available stock in Retail Express (but below the Buffer Limit).

### Pre-Order Configuration Options

![rtaImage - 2023-07-10T032745.470.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiTwEAI.jpg)
When enabling Pre-Orders for your store, you will need to select from one of the following options to define the number of products available for Pre-Order, and the impact on Purchase Orders.

|  |  |
| --- | --- |
| **Setting** | **Details** |
| Disabled | Stock will not be available for Pre-Order |
| Accept Pre-Orders for On Order Stock | Products on selected Purchase Orders will be included in the stock available for Pre-Order. When a new Pre-Order is received, a Special Order will be created and linked to an existing Purchase Order. |
| Accept Pre-Orders | A new Special Order Purchase Order will be created each time a Pre-Order product is sold Inventory levels disregarded - customers can order as many as you want |

> **Important:** Only one option can be selected at the Shopify Integration option (i.e. you cannot have some products set up using Sell On-Order Stock and other products set up with Create new Special Orders.

If you select to sell the On-Order stock option, the quantity available to sell online is calculated using the On-Order quantity.

|  |  |
| --- | --- |
| Available to Pre-Order | On-Order quantity + Available Quantity |

### Purchase Order Pre-Order Eligibility

The requirements for a Purchase Order to be eligible for Pre-Orders are:

1. The Purchase Order must be assigned to an Inventory Location Outlet in the Shopify Store settings (e.g. Purchase Orders for Queen St Mall would not be included in the example below)
  ![rtaImage - 2023-07-10T032751.634.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiU1EAI.jpg)
2. The Purchase Order must be marked as On-Order
	Incomplete or Back Order Purchase Orders are not eligible for Pre-Orders
  ![rtaImage - 2023-07-10T032756.579.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiU6EAI.jpg)
3. The Purchase Order must have been marked as Available for Pre-Order
  ![rtaImage - 2023-07-10T032801.317.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiUBEAY.jpg)

## Limitations

- There is a minor risk of overselling. The Purchase Order quantity is not synchronised to Shopify - if the customer purchases more on a single order than what is remaining the order will still be placed, and the product will be updated after the order has been received to be marked as out of stock. You can utilise the "Check ETA" feature (used to check the date of the next incoming Purchase Order with Available Stock) as a way to communicate this to the customer. For example:  - If the customer puts in a quantity *less than or equal to what's remaining* on the Purchase Order and clicks the "Check ETA" button, the date of the next Purchase Order will be displayed (intended functionality)
  - If the customer puts in a quantity *more than the remaining On-Order stock* and uses the "Check ETA" feature, the system will return "Get in touch for Availability". This wording can be configured to indicate to the customer there may not be all of their requested quantity available e.g. "Please contact the store to confirm available quantity".
- Purchase Orders are only considered when "On-Order'. If a PO is on Back Order, or Incomplete (not yet placed On-Order) it will not be included for Pre-Orders.
- You cannot change which Purchase Order the customer Special Order is assigned to
- Currently only products can be added individually - we are adding a future enhancement to add products by Style Code to bulk add products.
- Products must already be published to Shopify before they can be enabled for Pre-Order
- Only one configuration option can be selected at the Shopify Integration Level. You cannot select for some products to be sold using the quantity from Purchase Orders, while other products are configured to create new Special Orders (ignoring inventory levels).

## Synchronisation Behaviour

The below table explains the synchronisations that occur as products are updated in Retail Express.

|  |  |
| --- | --- |
| **Scenario** | **Impact on Shopify** |
| Product enabled for Pre-Order | "PREORDER" Tag added to product |
| Product disabled for Pre-Order | "PREORDER" Tag removed from product |
| Product has Available Stock | "Continue selling when out of stock" is disabled Shopify displays "Add to Cart" |
| Product has On-Order Stock | Product "Continue selling when out of stock" enabled Shopify displays "Pre-Order" |
| Product has On-Order Stock but quantity has been exhausted (i.e. all Pre-Order stock has been purchased) | "Continue selling when out of stock" is disabled Shopify store displays "Out of Stock" |