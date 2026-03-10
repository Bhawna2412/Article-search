---
title: "Trigger a Synchronisation with Event Driven Synchronisation"
articleID: 149
category: "Integration > Retail Express Configurations"
knowledgeBase: "Retail Express"
---

# Trigger a Synchronisation with Event Driven Synchronisation

You can configure event-driven synchronization in **Retail Express** to automatically update your eCommerce platforms when product, customer, or order data changes, improving operational efficiency and data accuracy across all sales channels. This technology helps ensure your online store inventory and customer information remains current without manual intervention, reducing administrative overhead and preventing stockouts or overselling.

Setting up event-driven synchronization involves understanding which data changes trigger automatic updates to your web store platforms. When properly configured, this synchronization approach typically leads to faster web store performance, more accurate real-time inventory visibility, and improved customer experience through up-to-date product information and pricing across all retail channels.

The Retail Express Web Services API (used by eCommerce integrations, including Shopify) uses a technology called "Event-Driven Synchronisation" (EDS) to synchronise most of the data. When there is an update made to Retail Express, the web store will be notified to trigger a synchronisation.

## []()How synchronisations occur

The way this happens is through the following process:

1. Data is edited in Retail Express (see the sections below for details on which fields trigger a synchronisation)
2. Retail Express pings the web store to notify it of the change
3. Any additional changes are captured in a "change set" until the web store synchronises the data
4. The web store receives the notification and connects to Retail Express to synchronise the latest data
5. The web store is updated - the list of changes is marked in Retail Express as 'sent'
6. Any further changes are logged in a new change set and the process begins again

This type of synchronisation offers many benefits, including faster-performing web stores and efficient data retrieval from Retail Express.

> **Note:** some information still requires a request/response method of synchronisation, where the web store only requests updated information from Retail Express when prompted through a manual action by the User. This is covered in more detail below.

## []()Products

To trigger a synchronisation from Retail Express to the web store, any of the following Product information will need to be updated. The synchronisation occurs at an individual Product level only ie: only Products amended will be synchronised.

- Stock level (from a sale/refund in POS, Mass Upload, Stock Take, Purchase Order or Stock Adjustment)
- Product name
- SupplierSKU
- ManufacturerSKU
- Prices:  - Web Price
  - Global Pricing
  - Promotional Pricing
  - Fixed Prices
  - New Price Groups
- Attributes:  - Size
  - Colour
  - Season
  - Brand
  - Product Type
- Weight
- Tax flag
- Custom fields:  - Custom 1
  - Custom 2
  - Custom 3
- Max discount rule
- Export to Web flag
- Disabled flag
- Long Description
- Freight

> **Note:** Not all of these fields are used by Shopify however they will still trigger a synchronisation.

## []()Customers

To trigger a synchronisation from Retail Express to the web store, any of the following Customer information will need to be updated:

- First name
- Last Name
- ABN
- Website
- Address (Billing/Delivery)
- Phone number (Billing/Delivery)
- Mobile (Billing/Delivery)
- Fax (Billing/Delivery)
- Email
- Custom Reference
- Price Group
- Credit Limit
- Remaining Credit
- If the customer is flagged/unflagged as an Account Customer
- Newsletter subscription
- SMS Subscription
- Post Subscription
- Date of birth
- Loyalty points

> **Note:** Not all of these fields are used by Shopify however they will still trigger a synchronisation.

## []()Orders

Different events for an order will determine when they synchronise to/from Retail Express, including:

- When an order is placed online
- When the Order is amended in Retail Express to be marked as Fulfilled

> **Note:** Due to the functionality of some online eCommerce platforms, it's not possible to edit existing Orders (e.g.: to exchange/refund a product). In these cases, you process the exchange/refund through Retail Express and manually mark the sale as cancelled online. The exchange/refund is handled as an in-store sale, rather than an online one.

## []()Outlets

Differing from Products and Customers, Outlets are not synchronised as they're updated in Retail Express.

Instead, your Outlets are synchronised when you navigate to the Click and Collect settings via **Stores > Configuration > Shipping Methods**. Then your new Outlet will appear, and you can add it to the pick-up groups as required.

If you're adding a new Inventory Location/Source Group to your site, this will be treated similarly to a Product change and will prompt an immediate synchronisation so that stock levels are updated.

> **Note:** This setting affects integrations custom-built using the eCommerce API - Shopify uses a separate method for Click and Collect and will not synchronise Outlets.

## []()Product Attributes

Within Shopify, Attributes are synchronised as part of product synchronisation. For example, if you rename an attribute, products using that attribute will be prompted to synchronise within the two systems.