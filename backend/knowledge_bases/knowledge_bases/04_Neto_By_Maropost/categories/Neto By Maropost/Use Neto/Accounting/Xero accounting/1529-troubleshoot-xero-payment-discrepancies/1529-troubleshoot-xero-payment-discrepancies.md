---
title: "Troubleshoot Xero Payment Discrepancies"
articleID: 1529
category: "Use Neto > Accounting > Xero accounting"
knowledgeBase: "Neto By Maropost"
---

# Troubleshoot Xero Payment Discrepancies

If you sell online and your store feeds sales directly into Xero, or you receive payments on invoices via payment processing services, you may receive an aggregate remittance to your bank account that makes it difficult to reconcile with individual sales invoices.

Creating an intermediary clearing/suspense account is an easy way to handle this, and streamlines the work involved.

### Accounts setup

We need to setup some extra accounts in our chart of accounts. These clearing accounts allow us to easily apply payments and reconcile monies received without having to directly match up daily settlements to individual invoices.

An account should be created for each payment type received that does something a little different e.g.

- EFTPOS and credit card payments can be held in the same account provided the fees are not deducted before the funds are remitted
- AMEX or Diners Club should be separate accounts as these are generally remitted net of fees
  Ensure you have checked the '**Enable payments to this account**' option when creating the account.

### Invoices in Xero

We have a bunch of invoices in Xero. Regardless of whether they were created in Xero and payments were received through an external gateway, or the invoices were inserted from an external application like a shopping cart, we now have a bunch of invoices created on the same date, with payments applied:

Note that these invoices have been paid. Via the API, a payment has been created on each invoice. In this example, the payment has been linked to our EFTPOS account we created previously.

### Payments clearing account

If we take a look at our balance sheet report right now, we will see under current assets, that our Eftpos clearing account has a balance of $3,500 - this matches the total of the sales invoices created and marked as paid today:

Reconciling

If we take a look at our bank account in Xero, we can see we have received some funds from our payment processor. These are lump sums that do not correspond directly to a specific invoice.

We create a receive money transaction, coding this to our Eftpos clearing account:

Final outcome

We now have the following:

- Sales invoices have been marked as paid in Xero
- Bank statement has been reconciled
- Eftpos clearing account now has a zero balance

The next time the user goes to reconcile, the Xero bank reconciliation screen should auto suggest the receive money transaction - the user just needs to click OK.

## Manage Refunds & Fees

### Refunds

In the event a charge is refunded, you can handle this by the following:

- Create a credit note raised against the customer in question, reversing the sales invoice
- Apply a payment to the credit note, coding the payment to the Eftpos clearing account. This reduces the balance of the clearing account
- Your next remittance will be less than the total sales as it will also include the refund. This will therefore match the balance of the clearing account

### Fees

Some payment services such as American Express will remit funds net of fees. This is a little trickier as it means your remitted funds will be less than your sales, leaving the clearing account with an outstanding balance.

- Hopefully you will have access to a report from this payment service that indicates the fees charged on a weekly/monthly basis
- Using this information, you can create a [manual journal](http://help.xero.com/#ManualJournals) that moves the fee amount out of the clearing account and into an expense account such as a bank fees account. Consult your accountant or tax professional for advice on how to do this.