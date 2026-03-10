---
title: "Synchronising Orders to Shippit"
articleID: 494
category: "POS > Fulfillment"
knowledgeBase: "Retail Express"
lastUpdated: 2026-01-21
---

# Synchronising Orders to Shippit

You can automate shipping workflows through Shippit integration with **Retail Express**, which synchronizes orders to Shippit's delivery management platform for streamlined carrier coordination and tracking. This shipping automation helps retail operators reduce manual dispatch processes and improve delivery efficiency, with effective Shippit integration typically improving shipping accuracy and reducing administrative overhead across Australian retail operations.

Shippit synchronization in **Retail Express** enables retail operators to automatically send fulfilled orders to Shippit for carrier allocation and tracking, helping ensure efficient delivery coordination and customer communication. This shipping integration helps ensure your retail operations can maintain professional delivery workflows while reducing manual data entry and supporting excellent customer delivery experiences.

![shippit_integration (2).jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiIZEAY.jpg)
The Shippit integration combines the strength of Retail Express' inventory management with Shippit's advanced shipping features, allowing businesses to streamline their shipping processes and reduce manual double handling.

The Shippit Integration is available for **$19 per month**. To request a Licence, pleaseclick here.

If you are not already a Shippit customer, please [contact Shippit](mailto:heather@shippit.com?subject=Retail%20Express%20Integration) to set up an account

Using Retail Express, staff will be able to fulfil instore and online sales, sending the order automatically to Shippit. Switching to the Shippit portal, the staff member will then be able to print address labels and book the order for delivery.

The synchronisation is one-way, meaning that changes made to the order within Shippit will not apply to Retail Express e.g. editing product information, deleting products from the delivery etc.

## Before you begin

Before you can get started with Shippit you'll need to:

1. Purchase a Shippit Integration licence from Retail Express
2. Configure the integration with Shippit as per the Settings - Configure Shippit Fulfilment Service article. 1

## Order Synchronisation Overview

Sales marked for Delivery are sent to Shippit when they're fulfilled in Retail Express, as long as the customer address details have been populated, a mapped Freight Type has been chosen for the order, and the Shippit settings have been configured correctly (see the [Faqs](https://galaxy.maropost.com/kb/articles/494-synchronising-orders-to-shippit#Faqs) for more information).

> **Note:** See the [Frequently Asked Questions](https://galaxy.maropost.com/kb/articles/494-synchronising-orders-to-shippit#Faqs) for a detailed look at the Order Synchronisation Conditions.

Prior to being fulfilled, staff will be able to make modifications to the order (for example changing the Source or Fulfil location). Once the product has been fulfilled it can't be modified on the sale, and staff can use Shippit to print labels and book a courier.

Products can be fulfilled through both POS and the Fulfilment Report - both methods will send the order to Shippit.

For more detailed information on the Order Synchronisation process please refer to the [Frequently Asked Questions](https://galaxy.maropost.com/kb/articles/494-synchronising-orders-to-shippit#Faqs). For a list of Features and Limitations please refer to the Settings - Configure Shippit Fulfilment Service article.

## Send a sale to Shippit - POS

Any unfulfilled sale can be sent to Shippit using POS - they don't need to be new sales created manually (e.g. incoming web store sales processed through POS).

The order will synchronise as long as the sale is not yet fulfilled, the customer address details have been populated, a mapped Freight Type has been chosen for the order, and the Shippit settings have been configured correctly (see the [Faqs](https://galaxy.maropost.com/kb/articles/494-synchronising-orders-to-shippit#Faqs) for more information).

> **Note:** See the [Frequently Asked Questions](https://galaxy.maropost.com/kb/articles/494-synchronising-orders-to-shippit#Faqs) for a detailed look at the Order Synchronisation Conditions.

For this example we'll create and fulfil the sale through POS, although sales can also be fulfilled in bulk through the Fulfilment Report and synchronised with Shippit (covered in the [Fulfilment Report](https://galaxy.maropost.com/kb/articles/494-synchronising-orders-to-shippit#send-sale-fulfilmentreport) section below).

1. Log into **POS**
2. Create a **new sale**
3. Change the **Fulfilment Method **to Delivery for at least one product by clicking on the Shopping Basket icon
  ![mceclip0 - 2023-07-10T023804.939.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiIeEAI.jpg)
4. Click the orange **Freight **link in the total bar
5. Select a **Freight Type**
  ![freight_value.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiIjEAI.jpg)
6. Enter a **Freight Amount** if the customer is being charged a delivery fee
7. Click **Done**
8. Click the **Customers **tab
9. Ensure all the customer fields have been completed as per the [Order Criteria](https://galaxy.maropost.com/kb/articles/494-synchronising-orders-to-shippit#order-criteria) below
10. Add a **Payment**
11. **Finalise **the sale

At this point the sale has not synchronised to Shippit, and can be amended by staff if required. Sales are only synchronised at the point of fulfilment (covered in more detail below).

### Fulfil the sale

When products are fulfilled a Shipment Order will be sent to Shippit. Products can be fulfilled altogether, or individually as required (partial fulfilment). Products on a sale cannot be modified once they have been fulfilled - you will need to refund the product before re-adding it to the sale.

1. Open the sale in POS
2. Click the **Fulfilment **tab
3. To use different freight types for individual products on the same sale, refer to the Frequently Asked Questions
4. **Finalise **the order
5. If you review the order in POS, the **Fill** column has been updated to show the product has been fulfilled
  ![mceclip3 (64).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiItEAI.jpg)
6. The Retail Invoice number displayed in Shippit will match either the Retail Express Order Number or the External Order Reference depending on your Shippit Integration settings
  ![mceclip3 (65).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiGZEAY.jpg)

## Send a sale to Shippit - Fulfilment Report

Sales from online stores can either be fulfilled individually through POS (using the process described above) or in bulk using the Fulfilment Report.

1. Navigate to **Inventory > Fulfilment Report**
2. Freight Types that have been deleted/disabled from the system are still associated with historical sales, and available to filter by.
  ![mceclip8 (7).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiGAEAY.jpg)
3. Select an **Order Source **if required e.g. Shopify
4. Use the remaining filters to search for your products as required
5. The Freight Type will be displayed in the **Delivery Options **column
  ![mceclip9 (11).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiIyEAI.jpg)
6. For a detailed walk through of using the Fulfilment Report refer to the Inventory - Fulfil Products from the Fulfilment Report article.
7. Click **Submit**
8. Click **OK**

The stock will be marked as fulfilled and synchronised with Shippit to create a Shipment order.

## View Tracking Information

You can use POS to check if an order has been sent to Shippit, as well view the Tracking Number and a link to viewing the Shipment on Shippit.

1. Open the sale in POS
2. Click the **Fulfilment **tab
  ![mceclip4 (38).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiJ3EAI.jpg)
3. Press and hold for touch screens/tablet
4. The Tracking Details will be displayed on the right-hand side
  ![mceclip5 (28).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphmeEAA.jpg)
5. Click the **Link **button to open the Shippit Order
6. A more detailed view of the order will be displayed in Shippit
  ![mceclip7 (17).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiKkEAI.jpg)

You will now be able to use Shippit to print labels, packing lists and book the shipment in for delivery.

## Frequently Asked Questions

[Can I use different Freight Types on the same invoice?](https://galaxy.maropost.com/kb/articles/494-synchronising-orders-to-shippit#different-freight-types)

To use different Freight Types on the same invoice you will need to fulfil products individually. For example, if using Express delivery for some products, but Standard shipping for other products:

1. Select the Freight Type "Express" on the Products tab
2. Fulfil *only *the products being sent via Express Shipping
3. Finalise the order
4. Select the Freight Type "Standard" on the Products tab
5. Fulfil *only *the products being sent via Standard Shipping
6. Finalise the order

Each time the sale is finalised the Order will synchronise with Shippit to create a Shipment Order. In the example above, two separate Shipment orders will be created.

[What happens if my order didn't synchronise/shows as pending?](https://galaxy.maropost.com/kb/articles/494-synchronising-orders-to-shippit#order-synchronise-fail)

- If your order shows as Pending, it means Retail Express is trying to send your order to Shippit. Retail Express will try 5 times, and if it fails you will need to manually create the shipment within Shippit.
- If you're unable to see a Tracking Details section at all, please check the Order Criteria - either your settings are incomplete or the Order did not match the criteria required to synchronise with Shippit. You will need to create this shipment manually, and correct your settings for future synchronisations to occur.

[Order Synchronisation Conditions i.e. when a sale is sent to Shippit](https://galaxy.maropost.com/kb/articles/494-synchronising-orders-to-shippit#faq-order-sent)

Orders are synchronised with Shippit when they're fulfilled in Retail Express, and provided the following criteria is met:

|  |  |
| --- | --- |
| **Setting** | **Configuration/Fields required** |
| Shippit Integration | * * - Enabled |
| Product Fulfilment Method (one or more products) | ![mceclip0 - 2023-07-10T023919.927.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiKpEAI.jpg) |
| Fulfilment Outlet for products on the sale | API Key added |
| Freight Type | - Option other than "None" or "Do not send to Shippit" - Mapped to a Shippit Delivery Service |
| Customer Details | - First Name - Email Address - Address line 1 - Surburb - State (if in Australia) - Country (for countries other than Australia) - Post Code/Zip Code |

[What Order Number/Invoice Number does Shippit use?](https://galaxy.maropost.com/kb/articles/494-synchronising-orders-to-shippit#faq-order-number)

By default the Retail Express Order Number will be sent to Shippit, although this can be configued to use the External Order Reference field.

The External Order reference is used by the Shopify Connector and some ecom/web store API integrations to display the web store's invoice number (API developers would need to custom build this in).

We recommend configuring your Shippit settings to use the External Order Reference field as the synchronised Order Reference number. Customers shopping online will see the same order number both on the web store and Shippit (if using Shippit tracking emails to customers). If an External Order Reference doesn't exist (e.g. an instore order) it will default back to using the Retail Express Invoice number.

> **Note:** If using Shopify or the eCommerce API, we strongly recommend configuring the Shippit settings in Retail Express to synchronise orders using the External Order Reference for the Order reference.

[How many Shipment Orders are created in Shippit?](https://galaxy.maropost.com/kb/articles/494-synchronising-orders-to-shippit#faq-shipment-number)

How many Shipment Orders are created in Shippit will depend on the Shippit settings in Retail Express, and the conditions of each sale.

### Multiple Pickup Outlets

Used when products are fulfilled from multiple Outlets in Retail Express:

|  |  |  |
| --- | --- | --- |
| **Sale conditions** | **Shippit API Key configuration** | **Shipments created in Shippit** |
| All products fulfilled | Separate API key for each Outlet in Retail Express | Separate order for each Outlet |
| All products fulfilled | Same API key for multiple Outlet in Retail Express | Single order sent to Shippit account. Pickup Location manually selected in Shippit |
| Partial Fulfilment - multiple Pickup Outlets | Separate API key for each Outlet | Shippit orders will be created each time products are fulfilled. Separate order for each Outlet for each fulfilment |

### Single Pickup Outlet

Used when products are fulfilled from a single Outlet in Retail Express:

|  |  |
| --- | --- |
| **Sale conditions** | **Shipments created in Shippit** |
| All products fulfilled | Single order for all items |
| Partial fulfilment | New Shipment Order each time products are fulfilled |

[What information is synchronised to Shippit?](https://galaxy.maropost.com/kb/articles/494-synchronising-orders-to-shippit#faq-synchronised-data)

The following data is synchronised when a sale is sent from Retail Express to Shippit:

Order Details:

- Freight Type (the Shippit Delivery Service/Courier Type)
- Delivery Address
- Delivery Post Code
- Delivery Suburb
- Delivery State (Australian orders)
- Delivery Country Code
- Receiver Phone Number (based on a priority of Delivery Mobile, Billing Mobile, Delivery Phone, Billing Phone, or if none found, blank)
- Invoice Number (External Order Reference or Retail Express Order Number, depending on configuration settings)
- Total Weight of all products

Product Attributes:

- Supplier SKU
- Short Description (Product Title)
- Price
- Quantity Ordered
- Quantity Fulfilled

Recipient details:

- Email address
- First Name
- Last Name
- Mobile Number (based on a priority of Delivery Mobile, Billing Mobile, or blank)

## Shippit Error Messages During Order Processing

When processing orders through the **Retail Express–Shippit integration**, you may occasionally see error messages displayed in the **Fulfilment Details** or **Tracking Details** section while attempting to send an order to Shippit.

These messages are **intentional responses returned directly from Shippit**. They are designed to highlight issues related to shipping configuration, order data, or Shippit account setup (for example, missing delivery details, invalid service selection, or account-level restrictions).

### What You Should Do

If you encounter one of these error messages:

- Review the error message shown in the **Tracking Details** panel for guidance.
- Verify the order details (delivery method, address, freight type, or fulfilment outlet).
- If the issue persists or the message is unclear, **contact Shippit Support or your Shippit Account Manager** for assistance, as they can confirm the exact reason for the rejection and advise on next steps.

> **Note:** 📋 **Note:** Retail Express cannot override or resolve Shippit-generated errors, as they originate from Shippit’s shipping and validation logic.

Want more information? View related articles:

- [Shippit Installation and Configuration](https://galaxy.maropost.com/kb/articles/245-shippit-installation-and-configuration?utm_source=community-search&utm_medium=organic-search&utm_term=shippit)
- [Shippit - Integration Overview](https://galaxy.maropost.com/kb/articles/246-shippit-integration-overview)