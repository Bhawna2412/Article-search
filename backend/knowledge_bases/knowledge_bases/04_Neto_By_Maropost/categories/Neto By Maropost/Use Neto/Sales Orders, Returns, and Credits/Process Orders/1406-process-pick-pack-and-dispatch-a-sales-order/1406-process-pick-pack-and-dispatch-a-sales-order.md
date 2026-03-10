---
title: "Process (Pick, Pack and Dispatch) a Sales Order"
articleID: 1406
category: "Use Neto > Sales Orders, Returns, and Credits > Process Orders"
knowledgeBase: "Neto By Maropost"
---

# Process (Pick, Pack and Dispatch) a Sales Order

Sales orders can be created in Neto in different ways, and have accordingly different statuses. This guide is broken up based on the order processing flow chart to help you process any orders no matter what status they have. For more information on the sales order page please refer to our [overview and anatomy help article](https://galaxy.maropost.com/kb/articles/1593-sales-orders-overview).

## Quote

Quotes are a type of sales order where the purchase has not been finalised. This may be due to the customer shopping around for different prices, or waiting on a freight cost to be calculated. To turn a quote into a sales order, follow the steps in [this article](https://galaxy.maropost.com/kb/articles/670-edit-a-sales-order).

> **Note:** When you change a quote to an order click the **Save** button. Saving the order sets the invoice date.

## Unapproved

While not technically a sales order status, unapproved orders still need to be actioned before you can process them. Sales orders which are unapproved are most likely waiting on payment, however you can still approve them for processing. To process an unapproved sales order:

- [Apply a Payment](https://galaxy.maropost.com/kb/articles/1406-process-pick-pack-and-dispatch-a-sales-order#2)
- [Approve Without Payment](https://galaxy.maropost.com/kb/articles/1406-process-pick-pack-and-dispatch-a-sales-order#3)
- [Apply Payments to Multiple Sales Orders](https://galaxy.maropost.com/kb/articles/1406-process-pick-pack-and-dispatch-a-sales-order#4)
- [Apply Payments in Bulk](https://galaxy.maropost.com/kb/articles/1406-process-pick-pack-and-dispatch-a-sales-order#bulk-payments)

### Apply a Payment

Sales orders can be paid for directly through the control panel by your sales staff. Every time you apply a payment, the date paid will be updated.

**Please Note**: Stripe requires a valid customer email address to process credit card payments.

To apply a payment:

1. In your Neto control panel, navigate to **Sales Orders** > **View Orders**.
2. Click on the order ID that you want to apply a payment to.
3. At the top of the page click the **View as Sales** button if it's not already selected.
4. Add any discounts or coupons that you'd like to apply to the order for your customer.
5. Scroll down to the page to the **Payment** tab and select the **Pay Now** radio button (if not already selected).
6. Choose the radio button that corresponds to the option the customer wants to pay with. If you select **Payment method** you also need to select which of your payment methods to use.
7. Consult the table below to apply the details of the customer payment:
8. Enter the amount being paid or click the **Use Amount Owed** link.
9. Click the **Make payment** button.

The payment will be applied to the sales order. You can repeat these steps to use a different method until the full amount owing is paid. When fully paid, the sales order will change status to Approved.

Once a payment has been applied the payment details will appear under **Payment & Refund History** tab.

### Approve Without Payment

To approve a sales order without taking a payment:

1. In your Neto control panel, navigate to the **Sales Orders** > **View Orders**.
2. Click on the order ID that you want to approve.
3. Scroll to the bottom of the page to the the **Amount Owed** section.
4. Click the **Pay Later** radio button.
5. Select a **Payment Due Date** or payment **Terms** (optional).
6. Click the **Approve** button.

Your sales order will be approved and ready for processing.

### Apply Payments to Multiple Sales Orders

If a customer has several orders with amounts owing, you can take a single payment and apply it to all orders:

1. In your Neto control panel, navigate to **Sales Orders** > **Receipt Payment**.
2. Search for the customer or order you want to receipt payment to.
3. Open the customer's details by clicking on the customer's username.
  A list of all unpaid orders for that customer will then appear.
4. Select the payment method and the amount you want to receive.
5. Enter the amount you want to apply to each order in the space provided, or use the **Apply All** button.
  Continue to apply payments to orders until the **Out Of Balance** amount (at the bottom of the page) is 0.
6. Click the **Process Payment** button.

The sales orders will now have their payments applied, and change status to approved.

### Apply Payments in Bulk

Payments can be assigned to multiple sales orders at once, even across different customers. To apply payments in bulk:

1. In your Neto control panel, navigate to **Sales Orders** > **View Orders**.
2. Select the unpaid orders that you want to apply payments to. You can use the filters at the top of the page to search for orders with no payment.
3. Select the payment method for each order, and enter the amount that has been paid. Click the **Apply Payments To Selected Orders** button.
4. At the prompt, confirm that the payment details are correct and click **Ok**.

Payments are now applied to your sales orders.

## New/Approved

Sales orders that have been fully paid will display as new and approved. Click the **Pick** button at the bottom of the page to progress the sales order to the next stage in the sales order process.

> **Note:** Fully paid orders (that haven't been created manually in the control panel) can be set as pick automatically with in the [Sales Order Settings](https://galaxy.maropost.com/kb/articles/1583-sales-order-settings#invoice-statement-settings).

## Pick

Once an order has been assigned a pick status, warehouse staff will pick the ordered products and bring them to the packing table for packing.

In pick status the stock committed to the sales order gets removed from the warehouse quantity, as staff physically set it aside for shipment to the customer. To fully pick a sales order:

1. Enter the amount of stock picked in the **Qty to Pick** field of each orderline. By default this value will be set to the amount ordered (if available).
2. If you are unable to pick the full amount ordered, enter the difference into the **Backorder** field. You will need to communicate this with your customer to ensure they're ok to receive their order in more than one part.
3. Click the **Save & Pack Order** button.

The orderlines will be marked as picked, and the sales order status will be updated to pack.

> **Note:** To unpick a sales order follow the steps [here](https://galaxy.maropost.com/kb/articles/670-edit-a-sales-order#unpick-or-unpack-a-sales-order).

## Pack

When an order reaches the packing stage, staff physically pack the order into boxes or shipping bags, and create consignments in preparation for dispatch.

> **Note:** For more information on consignment labels and manifests please see [this article](https://galaxy.maropost.com/kb/articles/1387-consignment-labels-and-manifests).

To create consignments and change the sales order status to dispatched:

1. In your Neto control panel navigate to **Sales Orders** > **Pack**.
2. Click on the order ID that you want to dispatch.
3. Click the **Auto Generate Shipping Consignment ** button.
4. If you are connecting via a carrier API (e.g. Sendle) the tracking details will automatically populate. If not, manually enter the tracking number and click the **Save Changes** button.
5. Click the **Create Consignments & Dispatch** button.

The sales order status is updated to dispatched, and the consignments are added to the carrier's manifest.

> **Note:** To unpack a sales order follow the steps [here](https://galaxy.maropost.com/kb/articles/670-edit-a-sales-order#unpick-or-unpack-a-sales-order).

## Dispatched

Dispatched sales orders have a consignment and are added to the manifest. You now need to print the consignment labels and apply them to the packages.

> **Note:** We recommend using a thermal label printer as they are more cost effective.

To print your consignment labels:

1. In your Neto control panel navigate to **Sales Orders** > **Dispatched**.
2. Click on the order ID that you want to print labels for.
3. Scroll to the bottom of the page, and click the **Print Shipping Consignments** button.

A label for each article will print so that you can attach them to the package. At this stage the order is considered fully processed.

> **Note:** To cancel a shipping consignment follow the steps [here](https://galaxy.maropost.com/kb/articles/1387-consignment-labels-and-manifests#7).

## Print Documents

By default the following document types can be printed for an order:

- Delivery Docket (a list of products being dispatched).
- Pick Slip (a list of products that need to be picked from shelves in the warehouse).
- Product labels (barcode labels for each product on the order).
- Order (prior to an order being invoiced you can print an order).
- Tax Invoice (after an order is invoiced you can print an invoice to tax purposes).
- Quote (when an order is in the quote status you can print a quote).

You can print these documents for individual orders or in bulk.

### Individual

To print individual documents:

1. In your Neto control panel, navigate to **Sales Orders** > **View orders**.
2. Click on the order ID you wish to print the documents for.
3. At the top of the page, click the **Print Docs** dropdown menu and select the document you wish to print for the order.

### In Bulk

To print documents in bulk:

1. In your Neto control panel, navigate to **Sales Orders** > **View Orders**.
2. Select the orders you wish to print using the checkboxes.
3. Scroll down to the bottom of the page to the bulk actions section. Click the **Print** dropdown menu and choose the document you want to print.

Your printer will print the selected document for each order you've selected.

## Process Sales Orders in Bulk

Updating sales orders individually can take a lot of time, particularly if you process several orders at once. Instead, sales orders can be processed in bulk using the buttons at the bottom of the sales orders pages.

**Please Note**: To process sales orders in bulk install the [Batch Order Processing](https://galaxy.maropost.com/kb/articles/1365-batch-order-processing) paid add-on

To process sales orders in bulk:

1. In your Neto control panel, navigate to **Sales Orders** > **View Orders**.
2. Select all the orders where you wish to make the bulk changes using the checkboxes on the left hand side.
3. At the bottom of the page click the **Pick** button.
4. A bulk pick job is created, with the orderlines that need to picked. On this page you can print pick slips for individual orders, or a consolidated pick slip which lists all the products that need to be picked.

> **Note:** You can partially pick orders by clearing the **Done** checkbox. Order lines can also be back ordered by entering the backorder amount.

5. When the orderlines have been picked, click the **Complete Bulk Pick Now** button.
6. The orderlines will be marked as picked, and you can now pack the orders. When they've been packed, click the **Bulk Pack selected Lines** button.

> **Note:** Clear the checkbox next to the order or orderlines that haven't yet been packed.

7. The orders can now be consigned and dispatched. Adjust any articles if single orders are sent in multiple boxes. You can manually enter the consignment numbers or have them automatically generated with Neto Commerce Ship. Click the **Create Shipping Consignments & Dispatch** button.

The orders will be marked as dispatched, consignments created, and added to the shipping manifests.

## Backorders

When an item cannot be shipped immediately, the order can be set to backorder. Two of the most common reasons to create a backorder are when an item has been sold that is out of stock or the customer has requested a delay in delivery. For example, if your warehouse has 2 out of 3 items ordered and your customer is willing to wait for the third item, you have the option of splitting the order into the goods that can be shipped and the goods that cannot.

The order line for the out of stock item is sent to backorder and a new order with the status is created in Neto. This enables you to manage backorder items easily and progress the order through the system when the item is available. Goods that can be dispatched are shipped and the remaining item can be shipped at a later date, which is preferable to cancelling the order altogether.

To turn on the backorder functionality, refer to the [Sales Order Settings](https://galaxy.maropost.com/kb/articles/1583-sales-order-settings) article.

This will change the **Out Of Stock** buttons on your webstore to say **Backorder**, allowing customers to add products to their cart and make purchases.

### Approve a Backorder

Backorders should be approved before processing, to indicate that more stock has been ordered and so that you can set expectations with the customer. To approve a backorder:

1. In your Neto control panel, navigate to **Sales Orders** > **New Backorder**. Here you will see any backorders that have not been approved.
2. Click the order ID of the backorder you want approved.
3. Click the **Backorder Approved** button. This will mark the order as approved, and it will move to the **Sales Orders** > **Backorder Approved** menu.

The backorder will wait until stock arrives to be processed.

### Process a Backorder

When you receive a purchase order Neto Commerce Inventory will automatically alert you when backorders are able to be processed.

If you don't have Neto Commerce Inventory you will need to monitor the backorders menus periodically when you receive stock. To process a back order:

1. In your Neto control panel, navigate to **Sales Orders** > **Backorder Approved**.
2. Click the order ID that you want to process.
3. Click the **Mark as New** button to change the status of the sales order. You can also click pick, pack or dispatch depending on your own internal order processing workflow.

You can now process the sales order using the [steps above](https://galaxy.maropost.com/kb/articles/1406-process-pick-pack-and-dispatch-a-sales-order#bulk-payments).