---
title: "Cancel a Purchase Order"
articleID: 381
category: "Purchase and Receiving > PO and Stock Receipt 2.0"
knowledgeBase: "Retail Express"
---

# Cancel a Purchase Order

You can cancel purchase orders when supplier arrangements change or orders are no longer needed, helping maintain accurate procurement records and prevent unwanted deliveries. This improves your retail operations by providing proper order cancellation workflows, with properly configured PO cancellation typically enabling better supplier communication and clean procurement records.

Understanding PO cancellation involves recognizing cancellation requirements, inventory impact considerations, and supplier notification processes to help retail operators focus on the right order management workflows, ensuring your retail strategy consistently drives better procurement control and supplier relationship outcomes.

Purchase Orders can be cancelled if the Stock Receipt has not yet been started for any of the products on the PO, or the item is not linked to a Special Order.

If the Stock Receipt has already begun, you can instead cancel the remaining balance for the products on the order.

## Cancel a Purchase Order

1. Navigate to **Inventory** > **PO Management** > **PO Manager**
2. Use the **Filters** to locate the Purchase Order
3. Click the **Search **button at the bottom left to display the results
4. Click on the **PO ID**
5. Click the **Cancel PO** button
6. Click the **Yes **button

## Cancel Balance/Cancel Remaining

It will reduce the order quantity by whatever the remaining balance is being cancelled. Also, it will put the qtys into cancelled, so you can reference/report on cancellations.

If the incorrect item has unintentionally been added, you can use the delete function instead of cancel (same reason for not being able to delete if stock receipt/special order etc).

### **Notes**

- Incomplete or On-Order (no receipt yet)
- If you can't see the Cancel PO - it's either not complete, stock receipt in progress (if not made available/finalised - cancel that) or special order items
- Special orders:  - Change the sale from SO to normal sale (removes link) and PO will be cancelled
  - Reallocate the special order to a different PO and then cancel the PO.
- Can be actioned on a PO Line Item basis during Stock Receipt Process or from within a PO (apply to all or apply to selected line items)
- Is always actioned against the Remaining Qty (Order Qty - Received Qty) - you cannot specify a partial Qty to cancel
- Cancelling will increase the Qty Cancelled, so a record will remain on the PO itself for future reference
- To ensure the Order Qty does not include Cancelled Qtys, the Order Qty will be reduced by the Cancelled Qty
- This will also remove the Qty from On-Order Inventory Status, and therefore an entry will be written to the IML  - Cancel via PO IML Entry: "PO Stock cancelled and removed from On-Order"
  - Cancel via Stock Receipt IML Entry: ?PO Stock cancelled and removed from On-Order during Receipt?
- Purchase Order will remain in On-Order Status  - Unless no further items remain outstanding then PO will move into status ?Available?
- An entry will be written to POE Report
- Restrictions apply to Cancelling PO Item Qtys that are linked to Special Order Qtys:  - You cannot cancel or delete PO Items linked to Special Order Qtys, you need to either:    - Reallocate the Special Order to a different PO (recent feature release) OR
    - Change the Processing Mode of the Special Order back to the sale, to sever the connection
  - Additionally, a user may choose to cancel an entire Purchase Orders    - This is only supported if there are no pending or finalised receipts against the PO
    - Cancelling an entire PO will not write to POE Report