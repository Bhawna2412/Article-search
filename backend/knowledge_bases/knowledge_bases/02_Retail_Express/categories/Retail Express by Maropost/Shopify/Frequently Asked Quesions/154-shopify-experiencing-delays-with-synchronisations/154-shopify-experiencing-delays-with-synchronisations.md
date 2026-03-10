---
title: "Shopify - Experiencing delays with Synchronisations"
articleID: 154
category: "Shopify > Frequently Asked Quesions"
knowledgeBase: "Retail Express"
---

# Shopify - Experiencing delays with Synchronisations

If you're experiencing delays with the Shopify Connector, it's important you understand how the synchronisations occur and the potential bottlenecks.

## []()API Limits

As items change in Retail Express and Shopify, updates are queued for processing to ensure API throttle limits in both systems are not breached. Shopify allows for approximately 2 API calls per second per store, Retail Express allows approximately 10 API calls per client. These API limits restrict the overall rate that changes can be processed for a given store.

## []()Synchronisation Queue Priority

Changes in the queue are processed in order with the oldest changes being processed first based on the below priority:

1. **New orders** from Shopify to Retail Express
2. **Payment** details from Shopify to Retail Express and visa versa
3. **Fulfilment** of orders from Retail Express to Shopify
4. **Gift voucher** creation and balance updates (if using the Integrated Gift Vouchers add-on)
5. **Product** updates from Retail Express to Shopify
6. **Customer** updates from Retail Express to Shopify and visa versa

Typically orders, payments and fulfilments will sync within a few minutes regardless of queue status. Product updates are by far the most frequent and generate the most jobs in the queue.

## []()Queue bottlenecks

If many product updates are occurring, these changes will queue up and may take some time to process due to the following factors:

- **Matrix/Variant products - **Whenever any sort of change is made to a product in Retail Express (product details change, attributes change, pricing changes, inventory changes) everything about not only that product but any other products in the same style matrix currently needs to be synchronised. This can lead to a larger number of changes being queued than you expect. For example, if a style matrix contains 30 products, an inventory change to one variant will cause all 30 products in that matrix to be queued for synchronisation.
- **Product Updates - **Updating a product in Shopify requires multiple API calls which further increases the number of jobs in the queue.
- **Frequency of updates - **If there are many frequent updates occurring to products, particularly bulk changes via mass upload or scheduled price changes, a significant number of jobs may need to be processed via the queue which is the most common cause of delays in processing.
- **SKU count - **The Connector has been tested as suitable for clients with up to 30,000 SKUs; for larger data sets delays may be experienced depending on the frequency of change.

As customer updates are the lowest priority job in the queue, if large numbers of product updates are queued, there may be lengthy delays in the processing of the customer updates while the higher priority jobs are completed.

## []()Infrastructure Constraints

Finally, there are some infrastructure constraints within the Shopify integration that can lead to congestion when many clients are syncing large amounts of data all at the same time. While the queue processor does process jobs for each client with equal priority, there are currently some constrains to how many jobs can be processed at once which can lead to longer than normal processing due extreme peak loads. Typically these periods are cleared within 30-60 minutes but this may further impact processing times.

We also constantly review the performance of the queue and have a number of changes both to how products are synchronised and to the underlying infrastructure constraints in progress that will assist in reducing incidents of delays in processing.