---
title: "Understanding the Shopify Order synchronisation"
articleID: 178
category: "Shopify > Getting Started"
knowledgeBase: "Retail Express"
---

# Understanding the Shopify Order synchronisation

You can understand how order synchronization works between Shopify and **Retail Express** to effectively troubleshoot issues and optimize your omnichannel order fulfillment workflow. This knowledge helps improve operational efficiency by understanding order data flow, synchronization timing, and potential failure points, supporting more reliable order processing across your retail channels.

Understanding order synchronization involves learning about data mapping, synchronization triggers, error handling, and status updates between systems. When you understand these processes, you can expect better troubleshooting capabilities, more reliable order processing, and improved ability to resolve synchronization issues that may impact customer experience.

During the end-to-end order process there are various synchronisations that take place between both Shopify and Retail Express. The workflow to process an order once it has been received into Retail Express is covered in more detail below.

![rtaImage - 2023-07-10T034246.000.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiZVEAY.jpg)

## Order created in Retail Express

When a sale is placed online, the following occurs:

1. A customer order is created in Retail Express (marked awaiting payment, as the payment synchronises separately)
2. "Shopify Integration" is assigned as the Salesperson on the sale

Shopify sales can be found within Retail Express via:

- The Sales Report (use the "Shopify" Order Source filter)
- The Fulfilment Report (use the "Shopify" Order Source filter)
- POS (an alert will be created on the home page, you can also use the Lookup filter to search for all or open web orders)

## Payment Synchronisation

Payments are synchronised separately from the order to allow for any delays from the merchant e.g. PayPal.

If the payment can't be immediately associated with an order when the payment notification is received, the system will wait 10mins before the first retry. During this time, the order will remain as "Awaiting Payment" in Retail Express.

The payment synchronisation will be retried at the following intervals:

- Initial synchronisation
- 10mins
- 30mins
- 60mins
- 100mins

If your payment has still not synchronised after 100mins, please [contact the Support team](https://www.retailexpress.com.au/contact) for assistance.

When the payment is received it will be allocated to the Retail Express Payment Type as per the Shopify settings in Retail Express. If no Payment Type is allocated it will instead use the Default Payment Type.

## Order Processed

When processing sales, Retail Express should be used for the fulfilment and shipping of all online sales. Any fulfilments processed directly within Shopify will not be synchronised to Retail Express, meaning:

- the order will remain outstanding
- inventory levels will be inaccurate as the stock will remain in the allocated status in Retail Express

> **Note:** Retail Express does not support the use of any third-party fulfilment services on Shopify. Changes made to the Fulfilment Service for an order on Shopify are reverted during the synchronisation.

When using a third-party fulfilment service in Shopify (like Retail Express) there are two stages in the order fulfilment process:

1. Fulfilment Requested
2. Fulfilled

Shopify is automatically updated as the order is fulfilled within Retail Express. Tracking information is added manually (automatically if using the Shippit integration), but following that no further action is required.

![rtaImage - 2023-07-10T034254.495.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiZaEAI.jpg)
The customer automatically receives the Shipment email notification at the conclusion of the fulfilment process.