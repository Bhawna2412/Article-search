---
title: "Sales Orders Overview"
articleID: 1593
category: "Use Neto > Sales Orders, Returns, and Credits > Overview orders"
knowledgeBase: "Neto By Maropost"
---

# Sales Orders Overview

Sales orders are the central hub of your control panel, and where you'll process the purchases made from your website, eBay, Amazon or other sales channels. Sales orders bring together your products, customers, shipping, payment methods and carrier labels to create a smooth combined process.

## Sales Order Workflow

Sales orders are generally processed through several stages in Neto, that correspond to actions in your order fulfilment process. The basic stages are:

1. **New**: Order arrives.
2. **Pick**: Orderlines are collected in warehouse.
3. **Pack**: Orderlines are packed, consignment label created ready for shipping.
4. **Dispatched**: Package is shipped to customer.

Depending on the circumstances, sales orders may need to go through more stages outlined in the flowchart below. These steps are explained further in this article.

## Anatomy of a Sales Order

The Neto order screen is divided into multiple sections, providing you with all the information you need to process your order:

1. [Quick Actions](https://galaxy.maropost.com/kb/articles/1593-sales-orders-overview#10)
2. [View as Sales/View as Warehouse](https://galaxy.maropost.com/kb/articles/1593-sales-orders-overview#11)
3. [Order Details](https://galaxy.maropost.com/kb/articles/1593-sales-orders-overview#12)
4. [Combine Orders](https://galaxy.maropost.com/kb/articles/1593-sales-orders-overview#13)
5. [Address Details](https://galaxy.maropost.com/kb/articles/1593-sales-orders-overview#14)
6. [Order Line](https://galaxy.maropost.com/kb/articles/1593-sales-orders-overview#15)
7. [Coupons and Discounts](https://galaxy.maropost.com/kb/articles/1593-sales-orders-overview#16)
8. [Shipping](https://galaxy.maropost.com/kb/articles/1593-sales-orders-overview#17)
9. [Customer Fields](https://galaxy.maropost.com/kb/articles/1593-sales-orders-overview#3)
10. [Totals](https://galaxy.maropost.com/kb/articles/1593-sales-orders-overview#4)
11. [Action Buttons](https://galaxy.maropost.com/kb/articles/1593-sales-orders-overview#16)
12. [Payments](https://galaxy.maropost.com/kb/articles/1593-sales-orders-overview#17)

### Quick Actions

The Order Quick Action Menu allows you to perform the following actions:

- Clone the current order you are viewing.
- Email a copy of the order invoice to any email address.
- Download the order invoice as a PDF.
- Apply a payment to the order.
- Create an RMA or credit from the order.
- View the customer card.
- Print various order documents:  - Delivery Docket
  - Pick Slip
  - Product Labels
  - Address Label

### View as Sales/View as Warehouse

Sales orders can be viewed in 2 modes:

- **View as Sales**: Edit the order, take a payment, apply credits and view the order history. This view is typically used before the sale is complete.
- **View as Warehouse**: Process the order through pick, pack and dispatch as well as create and print shipping consignments.

Your default view will differ if the order is approved or unapproved. Sales orders with an outstanding amount owing will be unapproved, and will open in the sales view. Once payment is made, or the order is manually approved, the default view will change to the warehouse view.

### Order Details

The order details section shows information specific to that order, such as the order ID, customer details, status of the order, important dates, sales channel and more.

### Combine Similar Orders

Combine orders requires an add-on to use. When more than 1 order for the same customer is available, the combine similar orders section will display a message prompting you to combine the sales order. More information can be found in [this article](https://galaxy.maropost.com/kb/articles/670-edit-a-sales-order#combine-sales-orders).

### Address Details

The address details section displays the customer's billing and shipping addresses, along with other contact information such as email address and phone numbers. Addresses are stored against the customer account and can be managed by customers in the my account section of your website.

### Order Lines

The order lines section displays all of the product information for the sales order, such as:

- Quantity ordered
- Backordered quantity
- Product SKU
- Product name
- Warehouse fulfilling the order line
- Unit price
- Discount %
- Coupon discount
- Orderline total
- Tax free status

This section may include additional fields, such as [serial numbers](https://galaxy.maropost.com/kb/articles/1420-serial-tracking) and [kit components](https://galaxy.maropost.com/kb/articles/669-add-kit-hamper-bundle-products).

### Coupons and Discounts

In this section you can search for and apply [discount coupons](https://galaxy.maropost.com/kb/articles/1360-add-a-discount-coupon) directly to the order. It will also display any discounts the customer used.

### Shipping

The shipping option the customer has selected will show here. [Shipping options](https://galaxy.maropost.com/kb/articles/601-custom-shipping-overview-and-setup) must be configured in you control panel to be selected here.

### Customer Fields

Customer order fields include:

- Customer delivery instructions
- Gift messages
- Internal notes

You can also [create your own custom fields](https://galaxy.maropost.com/kb/articles/1583-sales-order-settings) to display in checkout and on the sales order in this section.

### Totals

Here you can see the subtotals of orderlines, discounts, shipping and tax that make up the grand total for the sales order.

### Action Buttons

The order action buttons allow you to process the sales order through it's stages, or put it on hold to make changes. Depending on where your sales order is in the process, will depend on the buttons displayed in this section.

To learn more about order processing, please see this article.

### Payments

The payments section displays any outstanding amount on the sales order as well as the fraud score (if enabled). You can also apply payments/credits directly to the order from this section.

## Sales Order Statuses

As sales orders are processed they move through different statuses to identify where they are in the process. The below list contains the order statuses you'll find in Neto:

- **Approved**: Order is fully paid (or approved manually) and can be processed (stock committed).
- **Unapproved**: Order has not been fully paid (stock committed).
- **Quote**: Quote not yet changed to order (stock not committed).
- **New**: New order not yet processed (stock committed).
- **On Hold**: Order on hold to be checked (stock committed). Orders with warnings (eg. payment required or check address) will go to on-hold status until they are manually approved for processing.
- **New Backorder**: Order is new and has immediately moved to backorder, as there is no stock available at the present time.
- **Backorder Approved**: Order has been approved and is waiting on stock to arrive before it can be fulfilled.
- **Backorder**: Order is waiting for stock to arrive before it can be processed (stock committed).
- **Pick**: Order pending picking (stock committed).
- **Pack**: Order pending packing / shipping label generation (stock level reduced).
- **Pending Dispatch**: Some (but not all) orderlines have been dispatched. You can also assign it manually to orders ready for dispatch.
- **Pending Pickup**: Some (but not all) orderlines have been picked up. You can also assign it manually to order ready for collection by the customer from the warehouse. Pick up orders only.
- **Dispatched**: Order fully dispatched (with all order lines shipped) or otherwise completed.
- **Uncommitted**: Order on hold until future date (stock uncommitted / not reserved). Ideal in cases where orders are taken in advance of shipment date and pending orders are not to affect available stock levels.
- **Cancelled**: Order with no payment and not partially/fully processed has been cancelled (stock uncommitted / released).

## Sales Order Filters

To find a specific sales order you can filter your search results on key fields, such as:

- Date
- Order ID
- Customer Name
- Product SKUs
- Account Manager
- Date Required
- Warehouse
- Operator
- Grand Total