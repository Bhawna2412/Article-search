---
title: "Special Orders - Processing Transfers"
articleID: 346
category: "Purchase and Receiving > Special Orders"
knowledgeBase: "Retail Express"
---

# Special Orders - Processing Transfers

A Transfer is created for the Special Order process when the Source Outlet receiving the stock is different to the Fulfilment Outlet dispatching the stock to the customer. The Source Outlet is selected when the customer sale was initially created, or updated on the Purchase Order before it was placed on order.

In this article:

- [Special Orders Training Video Series](https://galaxy.maropost.com/kb/articles/346-special-orders-processing-transfers#video-series)
- [Searching for Special Order Transfers](https://galaxy.maropost.com/kb/articles/346-special-orders-processing-transfers#search)
- [Editing Special Order Transfers](https://galaxy.maropost.com/kb/articles/346-special-orders-processing-transfers#editing)
- [Picking and Dispatching Special Order Transfers](https://galaxy.maropost.com/kb/articles/346-special-orders-processing-transfers#picking)
- [Receive and Make Available Special Order Transfers](https://galaxy.maropost.com/kb/articles/346-special-orders-processing-transfers#receive)

## []()Special Orders Video Series

To find the training video series on Special Orders, see Video - Special Orders.

## []()Searching for Special Order Transfers

Special Order Transfers can be found using either of the following methods:

- Using the View Linked Transfers button within Purchase Orders
- Using the Transfer Management "Transfer Type" filter

The Transfer status can also be viewed any time from within POS on the Fulfilment tab:

![mceclip1 - 2023-07-10T005012.889.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphf9EAA.jpg)

#### **Within a Purchase Order**

When viewing a Purchase Order, the "Linked Transfers" button automatically opens the Transfer Report filtered to the specific Transfer.

![mceclip0 - 2023-07-10T005017.539.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi3PEAQ.jpg)

#### **Using the Transfer Report**

With the Transfer Report you can search for Special Orders specifically using the Transfer Type search filter:

![mceclip2 (88).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi3UEAQ.jpg)
To access the Transfer Report:

1. Navigate to **Inventory > Transfer Management > Transfer Report**
2. Use the **Transfer Type **filter to select "Special Order"
3. Fill out the rest of the **Filters** as required
4. Click **Search**
5. The list of Transfers will be displayed
6. Click the **Pencil **icon to open a Transfer for editing

Transfers can be updated and edited directly from within the Transfer, or using the other menu options under the Transfer Management menu.

> **Note:** For detailed information refer to the Inventory - Transfer Report article.

## []()Editing Special Order Transfers

When editing a Special Order Transfer some fields are not available for modification, as they're controlled by the detailed Special Order process. These fields are:

- Transfer Status
- Transfer Type
- Outlet From
- Outlet To

The Approved and Approved By fields can still be edited.

![mceclip1 - 2023-07-10T005028.055.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi3ZEAQ.jpg)
Some of the fields will automatically be populated with the details of the linked items that make up the Special Order. Note that a Transfer can only be associated with a single Purchase Order, and single Customer Order.

To begin processing the transfers, refer to the next section on Picking and Dispatching Special Order Transfers.

## []()Picking and Dispatching Special Order Transfers

The Transfer is created automatically when the Purchase Order is received, with stock automatically allocated to the Transfer.

> **Note:** If you're using the Simple mode for Transfers, the next Stage to select is Dispatch. If using the Advanced method the next Stage is Pick (Propose, Request and Allocate has already been completed for you automatically during the receipt of the Purchase Order).

### Picking Transfers

Special Order Transfers can be picked using the normal Picking process.

> **Note:** For detailed information on how to Pick a Transfer refer to the Transfers - Pick an Allocated Transfer article.

A "Special Order" Transfer Type is available to make it easier to find Transfers creating linked Special Order items.

![mceclip2 (89).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgHaEAI.jpg)

### Dispatching Transfers

Once the Transfer has been picked it needs to be dispatched to indicate its on the way to the new Outlet.

> **Note:** For detailed instructions on how to dispatch a Transfer refer to the Inventory - Dispatch a Picked Transfer article.

Partial Dispatching is supported with Special Orders, meaning that you can send your stock in multiple shipments. The status in POS will reflect the current stage of the Transfer vs the original order quantity.

Once items on the Transfer have been received and made available at the Fulfilment Outlet, any subsequent updates to the Transfer will also be displayed. POS will show the current Available Special Order items, as well as the furthest stage of any updates to the Transfer based on the original order quantity.

For example:

**POS will display: **6 Available | 4 Requested (10 Requested minus 6 already Available)

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Proposed | Requested | Allocated | Picked | Dispatched | Received | Made Available |
| 10 | 10 | 6 | 6 | 6 | 6 | 6 |

**POS will display: **6 Available | 4 Allocated

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Proposed | Requested | Allocated | Picked | Dispatched | Received | Made Available |
| 10 | 10 | 10 | 6 | 6 | 6 | 6 |

## []()Receive and Make Available Special Order Transfers

Once the Transfer has been received and made available at the Fulfilment Outlet, the stock will be immediately allocated to the linked Special Order items. The customer order is then available for dispatch to the customer.

> **Note:** For detailed information on receiving a Transfer refer to Inventory - Receive a Dispatched Transfer.

Transfers can be received either via the Transfer Report or via **Inventory > Transfer Management > Receive**. The Search Fields include a "Transfer Type" field so you can filter for Transfers containing Special Order items only.

![mceclip0 - 2023-07-10T005042.593.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi3eEAA.jpg)
Want more information? Find related articles here:

- Special Orders - Special Orders Overview
- Special Orders - Selling Special Order Items
- Special Orders - Process a Purchase Order
- Special Orders - Receive a Purchase Order
- Special Orders - Fulfilling Sales
- Special Orders - Special Orders Report
- POS Settings - Order Conditions