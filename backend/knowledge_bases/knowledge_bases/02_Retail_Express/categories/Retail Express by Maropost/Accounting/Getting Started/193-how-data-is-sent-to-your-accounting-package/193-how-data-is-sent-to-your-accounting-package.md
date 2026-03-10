---
title: "How Data Is Sent To Your Accounting Package"
articleID: 193
category: "Accounting > Getting Started"
knowledgeBase: "Retail Express"
---

# How Data Is Sent To Your Accounting Package

You can understand how **Retail Express** transmits financial data to accounting systems including Xero and MYOB, comprehending synchronization methods, timing, and data formatting that enable automated accounting integration. This helps optimize your accounting operations by understanding when data transfers occur, what information synchronizes, and how to verify successful integration supporting accurate financial records.

Comprehending data transmission processes enables you to set appropriate expectations for synchronization timing and troubleshoot issues when they arise. When you understand how accounting data sends, you can expect better ability to verify successful synchronization, improved troubleshooting when issues occur, appropriate timing expectations for accounting updates, confidence in integrated accounting processes, and optimized workflows coordinating retail and accounting operations effectively.

Data sent from Retail Express to your Accounting Package can be broken up into 3 different components:

1. Daily Summary Invoice
2. Bills to Pay/Service Purchases
3. General Journals

You can download a list of all accounting movements and the applicable reports to run in Retail Express below. The sections in this file will be referenced throughout this article:

[Download Summary Accounting Movements.](https://www.retailexpressmedia.com/downloads/support/summaryaccountingmovementsandreports.xlsx)

## Daily Summary Invoice

The Daily Summary Invoice is the summary of all Sales and applicable Inventory movements performed in Retail Express during the 24-hour period from 12am-12am AEST.

It can contain a separate line for each of the following transaction types, per Outlet, per 24-hour period:

- Cash and Carry Sales (Referenced under Sales)
- Layby Movements - Including Payments, Sales and Conversion (Referenced under Sales & Layby Movement)
- Debtors Movements ? Including Sales, Receivables and Payments (Referenced under Sales & Accounts Receivable Movement)
- Cost of Goods ? between Inventory and Expense accounts (Referenced under Inventory Movement)
- Freight on Sales (Referenced under Freight)
- Voucher Sales ? for tracking liabilities (Referenced under Gift Vouchers Sold)
- Voucher Expiry ? conversion of expired vouchers to a sale (Referenced under Sales)
- Surcharges (Referenced under Surcharges)

> **Note:** Sales are sent to the Accounting Package as each product is FulfilledSales are always attributed to the Outlet that completed Fulfilment. To create journals for the Sales Outlet, the Gross Profit Report - Fulfilled can be used to view the difference in sales between the original sales outlet and fulfilling outlet. However, the Order Outlet can be changed so it is not recommended to use this report for reconciliations.All transactions are linked to their respective Outlet.
> Xero uses Tracking CategoriesMYOB uses Jobs

![rtaImage (32).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppOH2EAM.jpg)
![rtaImage (33).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppOHMEA2.jpg)

### Payments

Payments on Retail Express sales are summarised daily, broken up per payment method, and paid against the daily summary invoice. (Referenced under Income & Payment Method)

The payment date of the receipt will match the payment date entered at POS when processing.

To allow for the integration of back-dated payments to be recorded on the correct date, multiple invoices may be created for the same date in your Accounting Package.

Payments will be coded against the Payment Clearing Account or Bank Account that is selected per Payment Type in the Integration (if using the MYOB Accounting Data Export all Payments will be coded against the RE Payment Clearing Account).

![rtaImage (34).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppOHREA2.jpg)
Direct Deposit payments are paid individually, with the customer number used as a reference (in the format 'Customer Acct Number + Company Name') to enable easier bank reconciliation.

**Processing a Bank Reconciliation**

To reconcile payments to the bank account in your Accounting Package you will either:

- Use match transactions for Payments mapped to a Bank Account directly.
- Code the Payments from the Bank Account to the appropriate Payment Clearing Accounts, then reconcile the Payment Clearing Accounts.

## Bills to Pay / Service Purchases

Stock Receipts that complete a Purchase Order and move it into Available status in Retail Express will generate a Bill to Pay in your Accounting Package linked to the relevant supplier.

Credit Notes will be created when Supplier Returns are completed in Retail Express.

### Purchase Orders (Received)

- Bills to Pay will include the PO # and Invoice # entered in the PO in Retail Express (in the format ?PO: 123 / Inv: 12345?)
- Available status Purchase Orders in Retail Express will generate an appropriate Bill to Pay in your Accounting Package against the matching Supplier Card/Contact
  If an exact, matching Supplier Card/Contact does not exist, a new Supplier Card/Contact will be created in your Accounting Package.
	This match is case / symbol sensitive, so the Retail Express Supplier must match your Accounting Package exactly.
![rtaImage (35).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppO6ZEAU.jpg)
- Back Ordered Purchase Orders will not generate a Bill to Pay until all items have been received in Retail Express, and the Purchase Order is completed in Available status.

Bills to Pay will contain a separate line for each of the following:

- Purchasing Inventory (Referenced under Purchases)
- Purchasing Freight Expense (Referenced under Purchases & Direct Costs)
- Purchasing Miscellaneous Expense (Referenced under Purchases & Direct Costs)

> **Note:** Accounts Payable payments are only processed in your Accounting Package and are not handled in Retail Express.The date applied to a Bill to Pay in your Accounting Package will always be the date the final Stock Receipt is processed and the Purchase Order is moved into Available status in Retail Express, not the date entered in the Date Received field in the Stock Receipt screen. This date can be modified once the Bill to Pay is created in your Accounting Package if required.

**Xero**

![rtaImage (36).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppO3pEAE.jpg)
**MYOB**

![rtaImage (37).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppNcWEAU.jpg)

### Credit Notes

Supplier Returns will generate a Credit Note in your Accounting Package only once a Credit Note has been applied in Retail Express.

Credited must be displayed in the Status column against a line item in the Supplier Return.

![rtaImage (38).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppMaeEAE.jpg)
The Supplier Return ID, Credit Note ID and the Reference Number from Retail Express will be displayed in the title of the Credit Note in your Accounting Package (in the format ?SRID:123|CNID:456|Ref:123456789?).

Credit Notes will contain separate lines for each of the following:

- Purchasing Inventory (Referenced under Purchases)
- Purchasing Variance (Referenced under Purchases)

**Xero**

![rtaImage (39).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppNvCEAU.jpg)
![rtaImage (40).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppOH3EAM.jpg)

## General Journals

General Journals will be created for each of the following transactions and will contain a separate line per Outlet, per 24-hour period.

### Duty

Will not be added to a Bill to Pay, but will be journaled to an expense account to be dealt with as required. (Referenced under Direct Costs)

### Stock Transfers

The cost of stock transferred between stores will be journaled through an ?In Transit? account.

Stock will be journaled on the **date of dispatch at the sending store** and the **date of receipt at the receiving store**. The total value of goods 'In Transit' will be available through this account. (Referenced under Inventory Movement)

### Stock Adjustments (Manual or Stocktake)

Negative Stock Adjustments (where stock is removed from the total) will be journaled as a daily total from a current asset account to an expense account. (Referenced under Inventory Movement)

Positive Stock Adjustments (where stock is added to the total) will create the opposite journals.

### Cash Up Discrepancies

Negative Cash Up discrepancies (where you have less money than expected) will be journaled from a clearing account as a daily total direct to an expense account.  (Referenced under Income)

Positive Cash Up discrepancies (where you have more money than expected) will create the opposite journals.

### Purchase Variance

Purchase Variances will be created when stock has been re-valued by applying an overcharge Credit Note to a Supplier Return. These variances will be journaled to the declared Purchase Variance and Inventory accounts. (Referenced under Purchases)

### Petty Cash (Money In/Out)

Money Out transactions will be journaled from a clearing account as a daily total direct to an asset clearing account. (Referenced under Income)

Money In transactions will create the opposite journals.

**Xero**

![rtaImage (41).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppOIFEA2.jpg)
**MYOB**

![rtaImage (42).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppO6yEAE.jpg)