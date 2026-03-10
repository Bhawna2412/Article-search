---
title: "Processing Shopify Sales"
articleID: 161
category: "Shopify > Selling"
knowledgeBase: "Retail Express"
---

# Processing Shopify Sales

You can process Shopify sales orders directly within **Retail Express**, streamlining your omnichannel order fulfillment and ensuring accurate inventory synchronization across all sales channels. This integration helps improve operational efficiency by centralizing order management, reducing manual data entry, and maintaining consistent customer experience across online and in-store retail operations.

Setting up Shopify sales processing involves configuring order synchronization, payment mapping, and fulfillment workflows within Retail Express. When properly configured, this integration typically leads to faster order processing, improved inventory accuracy, and better customer communication through automated fulfillment updates across your retail channels.

Shopify sales should be processed in Retail Express as the "point of truth" for inventory. For detailed information on the synchronisations that occur during the Order Synchronisation process please refer to the article Understanding the Shopify Order Synchronisation.

Process a refund? View the detailed step-by-step guide here.

## Processing Sales

### Process Transfers (Multi-Store only)

Depending on whether the inventory was sourced from, the stock may need to be transferred between Outlets before being sent to the customer. 

If you would prefer not to Transfer stock, we recommend enabling Split Web Order Fulfilment for future orders, or edit the current sale to change the Source and Fulfilment Locations to be the same one.

### Fulfil the sale

Fulfilment can be completed using either of the following methods:

1. Fulfilment Report (great for efficiently managing bulk orders)
2. POS (when processing sales individually by either opening the sale from the Web Alert or using the Lookup feature).

You can email customers directly from POS at the time of dispatching an order e.g. "Your order has been processed." It's recommended to amend your POS Email Template to ensure the External Order Reference has been included on the email to display the Shopify invoice number.

If Partial Dispatch has been enabled, or using Split Web Order Fulfilment, you can process products as they're available to pick for the customer, rather than waiting for one bulk shipment.

## []()Adding tracking information

Adding tracking numbers allows both your business and your customer to see the package is on the way, including an estimated time of delivery.

Retail Express integrates with Shippit for advanced shipping and order fulfilment

To add Tracking Numbers to an order in Shopify:

1. Log into **Shopify**
2. Open the **Orders **page
3. Click on the appropriate order
4. Click **Add tracking**
5. Enter the **Tracking number**
6. The **Tracking URL **field will appear - leave blank and move to the next step
7. Select a **Carrier **(if the required Carrier isn't displayed click "Other", and enter a Tracking URL if known)
8. By default the option **Send notification email to customer **will be selected, untick if this should not be sent to the customer
9. Click **Save**

The tracking information will be updated and emailed to the customer.

> **Note:** Transactions from online stores will be added to the Back Office register; you should process a Cash Up/End of Day to reconcile the income accordingly.

## Reporting on Shopify Sales

When a Shopify sale is created in Retail Express the following occurs:

- The sale is created using the "Shopify Integration" Sales Person
- and can be filtered by the Order Source of "Shopify". This is useful when viewing reports within Retail Express, for example the Sales Report or the Fulfilment Report.

## Frequently Asked Questions

[Processing cancellations/refunds/exchanges](https://galaxy.maropost.com/kb/articles/161-processing-shopify-sales#cancellations-refunds)

If an order needs to be cancelled and refunded or a product is returned, this will need to be managed in both systems independently. Refer to the article Integrated web stores - Managing Refunds/Cancellations of web orders for details.

[How Shopify discounts are applied to orders](https://galaxy.maropost.com/kb/articles/161-processing-shopify-sales#order-discounts)

Total order discounts are applied to all products in an order, while item specific discounts (for example Buy One Get One Free) are applied to the relevant products when the order is synchronised to Retail Express.

[What User account does Shopify use in Retail Express to create sales?](https://galaxy.maropost.com/kb/articles/161-processing-shopify-sales#salesperson)

As part of setting up the integration a new Sales Person will be created called "Shopify Integration", assigned to all sales within Retail Express created via Shopify. This enables you to report on any Shopify sales within Retail Express where a Sales Person can be selected e.g. the Sales Report

![rtaImage - 2023-07-09T001854.295.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWkHEAU.jpg)

> **Note:** You can also use the Order Source of "Shopify" or "Web Service" where this filter exists on any reports.