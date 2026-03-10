---
title: "View ETA and Stock Availability"
articleID: 495
category: "POS > Fulfillment"
knowledgeBase: "Retail Express"
---

# View ETA and Stock Availability

You can improve customer service and manage expectations through viewing ETA and stock availability in **Retail Express**, which provides visibility into expected product arrivals and current inventory status across locations. This availability visibility helps retail operators provide accurate delivery timeframes and product availability information, with effective ETA visibility typically improving customer satisfaction and reducing disappointment across Australian retail operations.

ETA and stock availability features in **Retail Express** enable retail staff to access expected arrival dates for incoming stock and current availability across outlets, helping support informed customer communication and sales decisions. This visibility helps ensure your retail operations can provide accurate product availability information while managing customer expectations effectively throughout the sales process.

When performing a sale in POS, the fulfilment tab shows the stock availability at both the fulfilment and source locations:

![mceclip2 - 2023-07-10T054720.710.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppkPcEAI.jpg)
This availability status takes into account several conditions:

1. If the sale is a Special Order with a linked PO or Transfer
2. If this sale has a Transfer attached to it and the Transfer stock status
3. This sale?s place in the queue.
	- Customer sales are fulfilled in order of the date the sale was committed
	- Transfers for a customer are fulfilled in the order of the date the Transfer was created
	- All customer sales come before internal stock distribution - Transfers that are yet to be picked
4. Stock currently available
5. Stock received on an internal stock distribution Transfer that has not yet been made available
6. Stock On order
7. The lead time for the product if it was to be ordered today
8. The settings selected at: **Settings > POS Settings >Product Settings > Prioritise ETA for Orders by Purchase Order**

## Sales without a linked Transfer

The calculation of the fulfilment location and source location will operate in the same way. For sales where the fulfilment location and source location are the same, the status would be the same for both locations, therefore the status will only be shown against the fulfilment location.

The calculation of stock availability will first take into account this sales place in the queue compared to other sales and Transfers. The stock status will then be calculated. Each product may require several statuses to ensure the total quantity can be fulfilled. The status will be shown in the following priority order:

|  |  |
| --- | --- |
| **Status** | **Details** |
| Available | If all or part of the stock requested can be fulfilled from available stock, the status *?X Available?* will be displayed where X is the total stock that can be fulfilled from available stock. |
| Received | If all or part of the stock requested can be fulfilled from stock that has been received on an internal distribution Transfer, and this stock is not required to fulfil other already allocated sales, the status ?*X Received?* will be displayed where X is the total stock that can be fulfilled from received stock. |
| On Order | If all or part of the stock requested can be fulfilled from stock that is on order from a supplier, and this stock is not required to fulfil other already allocated sales, the status *?X On Order?* will be displayed where X is the total stock that can be fulfilled from On Order stock. If there is an ETA for the purchase order, this date will be shown. If there is no ETA for the purchase order, the status will display the words *?ETA Pending?*. |
| Lead Time | If there is still stock that cannot be fulfilled using any of the above stock levels, the status *?X Lead Time?* will be displayed where X is the total stock that cannot be fulfilled from other stock levels. This status will also display the expected lead time for the product eg 6 days. |

![mceclip3 (80).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppkQ6EAI.jpg)

## Sales with a linked Transfer

For sales that have had a Transfer generated, the fulfilment location?s ?Available? and ?Received? status will be calculated slightly differently.

|  |  |
| --- | --- |
| **Status** | **Details** |
| Available | The status will be displayed as ?*X Available?* where X is the sum of unallocated available stock and the quantity made available on the Transfer linked to this sale. |
| Received | The status will be displayed as ?*X Received?* where X is the sum of unallocated received stock and the quantity received on the Transfer linked to this sale. |

If the Transfer is only partially received or made available, the rest of the stock will be shown through the regular statuses.

![mceclip5 (33).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppkQBEAY.jpg)
For sales that have had a Transfer generated, the source location?s status will have the following additional statuses which are prioritised over the regular statuses:

|  |  |
| --- | --- |
| Status | Details |
| Dispatched | Once the Transfer has been at least partially dispatched, the status will be displayed as ?*X Dispatched?* where X is the total dispatched on the Transfer linked to this sale. |
| Picked | Once the Transfer has been at least partially picked, the status will be displayed as ?*X Picked?* where X is the total picked on the Transfer linked to this sale. |

Once the Transfer is fully dispatched the status will not change from ?*Dispatched?*.

![mceclip6 (20).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppkQVEAY.jpg)