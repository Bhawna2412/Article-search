---
title: "Special Orders - Receive a Purchase Order"
articleID: 343
category: "Purchase and Receiving > Special Orders"
knowledgeBase: "Retail Express"
---

# Special Orders - Receive a Purchase Order

In this article:

- [Special Order Training Video Series](https://galaxy.maropost.com/kb/articles/343-special-orders-receive-a-purchase-order#video-series)
- [How received stock is allocated to Customer Orders](https://galaxy.maropost.com/kb/articles/343-special-orders-receive-a-purchase-order#stock-allocation)
- [Discrepancy Handling (Back Order v POE Manager)](https://galaxy.maropost.com/kb/articles/343-special-orders-receive-a-purchase-order#back-order)

## []()Special Orders Video Series

To find the training video series on Special Orders, see Video - Special Orders.

## []()How received stock is allocated to Customer Orders

To receive your Purchase Order:

- If you know the PO Number navigate to **Inventory > PO Management > Stock Receipt**
- If you don't know the PO number navigate to **Inventory > PO Management > PO Manager** (you will be able to search & locate the Order)

For detailed information on how to receive a Purchase Order, refer to the Purchase Orders - Receive a Purchase Order article.

Once the Purchase Order has been received, the stock will be allocated based on the following process:

|  |  |
| --- | --- |
| **Condition** | **Details** |
| 1. Special Order items with the earliest Due Date | Stock will be allocated to linked Special Order items with the earliest Due Date. If there are Transfers linked to the Special Order items, the stock will be allocated to the Transfer instead (as the stock will be allocated to the Special Order items when the Transfer is received) |
| 2. Multiple matching Due Dates - Oldest Order Items based on date Committed | If there are multiple linked Special Orders with the same Due Date, the stock will be allocated to the oldest Order Items based on the Date Committed.  If there are Transfers linked to the Special Order items, the stock will be allocated to the Transfer instead (as the stock will be allocated to the Special Order items when the Transfer is received) |
| 3. Oldest Order Items based on Date Committed | If there are multiple linked Special Order items with no Due Date, stock will be allocated to the oldest Order Items based on the date committed.  If there are Transfers linked to the Special Order items, the stock will be allocated to the Transfer instead (as the stock will be allocated to the Special Order items when the Transfer is received) |
| 4. Insufficient stock for oldest order | If insufficient stock was received to fully allocate the stock to a given Special Order Item, the amount available will still be allocated to the Order Item (or the Transfer Item linked to the Special Order Item) e.g. if the Order quantity was 3, and there's only 1 available, 1 will be allocated to the Order. |
| 5. Lower priority orders "miss out" if there is a short fall | Transfers or Orders that are higher priority (based on Due Dates or the date committed) will be fully allocated first. Lower priority orders will miss out on stock if the full order quantity isn't received. |
| 6. Allocate stock to linked Replenishment Transfers | Any remaining stock would be allocated to linked replenishment Transfers (i.e. non-special order Transfers). This would only happen when there are multiple Purchase Orders or Purchase Order items consolidated, leading to linked Transfers for both Replenishment and Special Order requests. |

## []()Discrepancy Handling (Back Order v POE Manager)

When using Special Orders, you must consider how you will handle stock discrepancies.

|  |  |
| --- | --- |
| **Back Order** | **POE Manager (Purchase Order Error Manager)** |
| This option is typically used when the two (or more) deliveries are received on a single supplier invoice  - Maintains link to Special Orders - Will not send the PO to accounting packages (via Accounting integration) | This option is typically used when the supplier is providing you with a new supplier invoice number for back order goods  - Will not maintain links to Special Orders (Special Order to be managed manually from that point on) - Use "Re-Order" to create a new Purchase Order for remaining stock - Will send the PO to Accounting Packages (via the accounting integration) |

> **Note:** Only Purchase Orders placed on Back-Order will maintain the links (where the Back-Order quantity is recorded against the original Purchase Order).

To select a Discrepancy Handling method, you will need to select your preferred option when doing a Stock Receipt.

![mceclip0 - 2023-07-10T005723.921.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphc7EAA.jpg)
If you select Back Order, POS will be updated to show the status on the Fulfilment Tab accordingly.

![mceclip1 - 2023-07-10T005729.343.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi4IEAQ.jpg)
Want more information? Find related articles here:

- Special Orders - Special Orders Overview
- Special Orders - Selling Special Order Items
- Special Orders - Process a Purchase Order
- Special Orders - Processing Transfers
- Special Orders - Fulfilling Sales
- Special Orders - Special Orders Report
- POS Settings - Order Conditions