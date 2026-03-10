---
title: "Manage Sales Order Overpayments"
articleID: 1586
category: "Use Neto > Sales Orders, Returns, and Credits > Returns, Credits, Refunds, RMAs"
knowledgeBase: "Neto By Maropost"
---

# Manage Sales Order Overpayments

When a sales order's total is less than the amount paid on it the order is overpaid. An overpayment acts as a credit on the customer's account, but does not behave the same as a regular customer account. You have the option on how you'd like the overpayment credit to be used by your customer.

Overpayments will display in sales orders with a negative amount owing. The overpayment will also display on the customer card as a credit under the **Account** section. So that it is not confused with a regular account credit, the overpayment credit will show the related sales order ID as well as an option to refund the credit from the customer card.

## Causes of an Overpayment

There are two common scenarios that lead to overpayments:

- Sales order is created with an amount owing, and a customer makes payment against it for more than the amount owing.
- Sales order is created as fully paid, and is edited in the control panel so that amount paid exceeds amount owing.

> **Note:** Modify paid orders by creating an RMA instead of removing orderlines.

## Identify Overpaid Orders

To find sales orders that are overpaid:

1. In your Neto control panel navigate to **Sales Orders** > **View Orders**.
2. Expand the search filters and find the **Paid Status** filter.
3. Select **Over Paid** from the drop down menu.
4. Click the **Apply advanced filter** button.

Orders that have been overpaid are displayed.

## Resolve an Overpayment

An overpayment is money owed to your customer, that needs to be re-allocated. There are 3 different ways you can resolve an overpayment.

### Apply the Overpayment to a Sales Order

If your customer wishes to make another purchase, you can apply the overpayment credit to a sales order as a payment method.

You can only do this on the sales order in the control panel. The overpayment credit cannot be used by the customer on the checkout page.

### Refund the Overpayment Credit to the Customer

If your customer prefers a refund, open the customer card and click the **Pay refund** button next to the overpayment credit amount. Full steps can be found in [this article](https://galaxy.maropost.com/kb/articles/1587-manage-customer-credits#2).

This removes the credit in Neto, it doesn't initiate a transfer to your customer. You will still need to refund/transfer the credit amount through your payment gateway or bank account.

### Convert an Overpayment to a Customer Credit

If your customer would like to use the credit on a future order, you can convert it to a customer credit:

1. Open the customer card and scroll down to the Account section.
2. Take a note of the overpayment amount, and click the **Pay refund** button next to the overpayment credit amount.
3. Now enter the overpaid amount into the **Manually Add Credit to Account** field and click the **Add** button.

Your customer can now use their credit as a payment method during checkout on your webstore.