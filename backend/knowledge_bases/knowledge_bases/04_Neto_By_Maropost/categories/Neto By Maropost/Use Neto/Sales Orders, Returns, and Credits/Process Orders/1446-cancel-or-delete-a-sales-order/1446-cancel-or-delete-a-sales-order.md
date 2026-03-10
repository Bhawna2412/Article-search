---
title: "Cancel or Delete a Sales Order"
articleID: 1446
category: "Use Neto > Sales Orders, Returns, and Credits > Process Orders"
knowledgeBase: "Neto By Maropost"
---

# Cancel or Delete a Sales Order

You can properly manage order cancellations and deletions to maintain accurate inventory levels and financial records, ensuring your B2B operations reflect the true state of customer transactions. Understanding when to cancel an order versus creating an RMA helps streamline operations while maintaining data integrity across sales, inventory, and accounting systems.

This capability enables you to handle order exceptions efficiently while preserving customer account balance accuracy and payment reconciliation. When you follow proper cancellation workflows, you typically improve operational accuracy and reduce administrative overhead associated with order management corrections.

## Overview

Sales orders can be cancelled only if they have not yet been dispatched or paid. If an order has been dispatched or paid for, we recommend that you create an RMA instead. The RMA is created from the sales order, and cancelling the order can create inconsistencies in reports and accounting. Refer to the flowchart below on when to cancel or create an RMA:

![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/rmaflowchart.05T5g00000OFEYIEA5.png)
Sales orders can be deleted once they are cancelled. You will need to be an admin user to delete an order.

Other prerequisites include:

- No consignments be on the order (the manifest needs to be un-lodged and the consignments deleted if there are any).
- The orderlines need to be unpicked and unshipped.
- The order must be unapproved.

> **Important:** If your customer has paid for the order you will need to create an [RMA](https://galaxy.maropost.com/kb/articles/649-return-merchandise-authorisation-rma-overview) and process the refund through your relevant payment gateway. We then recommend dispatching the order. This ensures the customer's account balance is calculated correctly, stock levels are correct, and all payments are accounted for.

## Cancel a Sales Order

To cancel a sales order:

1. In your Neto control panel navigate to **Sales Orders** > **View Orders**.
2. Click the relevant order in the **Order ID** column.
3. Click the **Hold or Edit Order** button.

> **Note:** A sales order can also be cancelled at any time before it has been moved into the dispatched status. To do so, the order must be unapproved for it to be cancelled. To unapprove an order, scroll to the bottom of the order page, and click the **Unapprove** button. Orders that are not unapproved are exported to accounting integrations as Completed(Dispatched).

4. Scroll to the bottom of the order page and click the **Cancel** button.

The selected items will be returned to stock (uncommitted) and the order status will change to cancelled.

## Delete a Sales Order

1. In your Neto control panel navigate to **Sales Orders** > **Cancelled**.
2. Click the checkbox next to each order (in the **Order ID** column) that you wish to delete.
3. In the **Bulk Actions** section, click the **Bulk Delete Selected** button.
4. Confirm that you wish to proceed and delete the sales orders.
5. Click the **Delete Selected Orders ** button to confirm the bulk delete process.
6. Confirm that you wish to proceed to delete the sales orders.

You will see a message that the order(s) are been deleted.

## Related Articles

- [Order statuses](https://galaxy.maropost.com/kb/articles/1593-sales-orders-overview)
- Pick, Pack and Dispatch a Sales Order