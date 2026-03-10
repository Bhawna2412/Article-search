---
title: "Edit a Sales Order"
articleID: 670
category: "Use Neto > Sales Orders, Returns, and Credits > Process Orders"
knowledgeBase: "Neto By Maropost"
---

# Edit a Sales Order

## Place a Sales Order On Hold

Most of the changes to sales orders can only be performed if the sales order is in the on hold status. There are two ways to place orders on hold, individually and in-bulk:

> **Note:** If you can't find the order you want to place on hold, change the **Empty Orders** filter to **Show All Orders**.

### Individually

To place an individual sales order on hold:

1. In your Neto control panel, navigate to **Sales Orders** > **View Orders**.
2. Click the relevant order in the **Order ID** column to open the sales order.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/EditaSalesOrder1.05T5g00000sxdyKEAQ.png)
3. Click the **Hold or Edit Order** button.

Your sales order will now indicate that it is on hold.

### In Bulk

To place multiple sales orders on hold at once:

1. In your Neto control panel, navigate **Sales Orders** > **View orders**.
2. Select the checkboxes in the **Order ID** column next to each order that you want on hold.
3. In the bulk actions section at the bottom of the page, select **On Hold** from the change order status dropdown menu.
4. Click the **Apply** button.

All selected orders will now be placed on hold.

## Edit Orderlines

To edit the orderlines of a sales order, you first need to place it on hold if it's in one of the below statuses:

- Pick
- Pack
- Pending Dispatch

It's important that stock is adjusted correctly when changing the orderlines on a sales order. Items which are picked or packed need to be unpicked/packed to ensure stock integrity. Consult the workflow diagram below for the steps to edit your orderlines correctly.

![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/EditaSalesOrder2.05T5g00000sxeTWEAY.png)

> **Note:** Sales orders that are marked dispatched (but haven't been physically sent) need their consignment deleted from the manifest. See our guide on how to delete a consignment [here](https://galaxy.maropost.com/kb/articles/1387-consignment-labels-and-manifests#7).

> **Note:** Neto does **not** recommend editing orderlines for an order already being processed for dispatch to avoid irregularities in order fulfilment. If the customer has a paid/approved order already and wants to add additional items or increase an existing QTY, a new order should be raised, where the additional items and/or QTY's can be added. The 'New' order can then be combined with the 'Paid/Approved' order, so only a single order is picked, packed and dispatched.

## Change a Quote to a Sales Order

> **Note:** You can control the quote function on the [checkout settings](https://galaxy.maropost.com/kb/articles/1583-sales-order-settings#order-processing-rules) page.

Your website customers are able to approve quotes through their account in your website, which will turn them into sales orders automatically. Use the steps below if your customer has approved a quote and you want to manually change it to a sales order in your control panel:

1. In your Neto control panel, navigate to the **Sales Orders** > **Quote** page.
2. Locate the quote and click on the ID to open it.
3. Click the **Create New Order From This Quote** button at the bottom of the page.
  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/EditaSalesOrder3.05T5g00000sxeP6EAI.png)
4. Click the **Save** button to set the invoice date on the order.

A new sales order will be created from the quote, ready for receive payment and processing.

## Combine Sales Orders

Sales orders can only be combined if they are in the below statuses:

- New
- On Hold
- Pick
- New Backorder
- Backorder Approved

To change which statues allow orders to be combined:

1. In your Neto control panel navigate to **Settings & tools** > **All settings & tools**.
2. Locate and click on **Control panel settings**.
3. In the **Order status for combining orders** setting select the order statuses you want to allow for combining order. Use CTRL or Shift to select multiple statuses.
4. Click the **Save** button.

Sales orders can be combined in two ways, individually or in bulk:

- [Individually](https://galaxy.maropost.com/kb/articles/670-edit-a-sales-order#individually-1)
- [Bulk](https://galaxy.maropost.com/kb/articles/670-edit-a-sales-order#combine-in-bulk)

### Individually

To individually combine sales orders:

1. In your Neto control panel, navigate to **Sales Orders** > **View Orders**.
2. Open the sales order you want to combine by clicking on the ID.
3. Click on the **Orders Are Available To Combine With This Order** link. You will see a list of the sales orders that can be combined with this order.
  ![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/EditaSalesOrder4.05T5g00000sxeUtEAI.png)
4. Click the **Combine** button to combine the order with the order you are currently viewing.
5. Once the page reloads, repeat the process if there are most orders to combine.

The orders will be combined with the current order and the orders that have been combined will be deleted.

## Combine in Bulk

> **Note:** These steps require the **Bulk Combine Order** add-on.

To combine sales orders in bulk:

1. In your Neto control panel, navigate to **Sales Orders** > **Combine Orders**.
2. You will see a list of orders that can be combined in separate groups that have been placed by the same customer. Select the checkboxes for the groups of orders that you want combined.
3. At the bottom of the page click the **With Selected** button and select **Combine Orders** from the drop down menu.
  ![image5](https://us.v-cdn.net/6038474/uploads/attachments/migrated/EditaSalesOrder5.05T5g00000sxeVNEAY.png)

The selected orders will now be combined into one sales order.

## Add Notes to a Sales Order

If you want make a sales order predominately stand out, or record special instructions, you can add a sticky note which is displayed brightly on the order screen:

1. In your Neto control panel, navigate to **Sales Orders** > **View Orders**.
2. Click on the order ID that you wish to edit.
3. At the top of the page click the **More** button and then click **Add Sticky Note**.
  ![image6](https://us.v-cdn.net/6038474/uploads/attachments/migrated/EditaSalesOrder6.05T5g00000sxcdJEAQ.png)
4. Enter a title and description, and click the **Save changes** button.

Your sticky note will be added to the sales order.

## Unpick or Unpack a Sales Order

If you need to edit an order that is already in the pick or pack status, there's a specific workflow you must follow to ensure the order is not overpicked:

**Please Note**: If the sales order is **Dispatched** we recommend you create an RMA instead.

1. Place the order **On Hold** so that it can be edited.
2. Move the order into the status you need by clicking the **Pick** or **Pack** buttons at the bottom of the sales order page. For example, if you need to unpick the order, move it to the pick status.

> **Note:** If all the orderlines need to be unpicked, click the **Uncommit** button to automatically remove the packed and picked quantities. It is important to move the to the pick status or new status right away, otherwise the quantities will not be committed and overselling can occur.

3. Ensure **View as Warehouse** is selected. Find the orderline and enter in the negative amount that has been picked/packed. For example, if 5 items has been picked, then -5 would be entered into the Pick column to unpick the order. The same process applies for packed orders.
4. Click the **Save Changes** button. Repeat these steps if the order was packed and still needs to be unpicked.

You can now edit the orderlines as required before processing the order again.