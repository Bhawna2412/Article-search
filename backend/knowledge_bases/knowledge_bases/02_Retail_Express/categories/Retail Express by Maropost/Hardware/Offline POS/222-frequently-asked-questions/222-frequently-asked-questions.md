---
title: "Frequently Asked Questions"
articleID: 222
category: "Hardware > Offline POS"
knowledgeBase: "Retail Express"
---

# Frequently Asked Questions

You can find answers to common questions about **Retail Express** Offline POS functionality, understanding how offline mode works, what features are available, and how data synchronizes when connectivity returns. This helps optimize your retail operations by understanding offline capabilities and limitations, enabling informed decisions about offline POS deployment, and setting appropriate expectations for offline functionality.

This information relates to the native Retail Express accounting integrations, including the **Xero Cloud Integration** and **Accounting Data Export** solutions. View details on all the accounting integration options we offer here.

## Moving to the Accounting Integrations

[What will I need to do to move from my current integration method to this new cloud integration? ](https://galaxy.maropost.com/kb/articles/222-frequently-asked-questions#collapseNine)

For more information, please see the Accounting Integrations - Getting Started guide

[I currently use the desktop version of MYOB installed on my local machine, how can I integrate this? ](https://galaxy.maropost.com/kb/articles/222-frequently-asked-questions#collapseTen)

As part of the reporting changes, we will be allowing users to generate import files designed for MYOB AccountRight v19+. You will be able to download the following files with your daily summarised transactions allowing you to upload the data quickly into MYOB:

- Journals ? Stock adjustments, inter-store transfers, money in/out and cash discrepancies
- Purchases
- Sales
- Payments

The data will appear in your MYOB  file in the same way as it does in the MYOB Account Right screens. You will also be able to verify the data uploaded using the same reports as the Cloud integration.

[I manually reconcile off my bank statements/the End of Day report. How will this solution help me? ](https://galaxy.maropost.com/kb/articles/222-frequently-asked-questions#collapseEleven)

If you are only interested in tracking sales through your Accounting Package, you would still need to reconcile your bank statement to the integrated sales transactions.

The Retail Express Accounting Integration solution will allow you to automatically bring in sales, as well as:

- Layby and gift voucher liabilities
- Purchase orders
- Stock adjustments
- Inter-store transfers

[Would you recommend I integrate with Xero or MYOB? ](https://galaxy.maropost.com/kb/articles/222-frequently-asked-questions#collapseDifferences)

The differences between our integrations are highlighted below. We would recommend reviewing these with your accountant, along with other FAQs in this article and the What data will be Integrated to my Accounting Package? to discuss which is the best package for your business.

|  |  |  |
| --- | --- | --- |
| **Feature** | **MYOB** | **Xero** |
| Track liabilities (including Laybys and Gift Vouchers) | ? | ? |
| Based on immutable data | ? | ? |
| Reconciled to Retail Express reports | ? | ? |
| Automatic Daily upload | ? | ? |
| Configure own account codes | ? | ? |
| Limit the type of transactions imported e.g. import Sales but not Purchases | ? | ? |
| Integrate individual account/wholesale customers | ? | ? |
| Integrates on a Cash basis | ? | ? |

## Accounts

[I have a different bank account for each store, how will my payments be integrated? ](https://galaxy.maropost.com/kb/articles/222-frequently-asked-questions#collapseFour)

If you have a different bank account for each store, your payment methods will need to be configured to integrate to a clearing account.

When you are doing your bank reconciliation you would need to:

- Allocate payments received to this clearing account
- Reconcile the clearing account back to a nil balance

> **Note:** Xero and MYOB do not support the scenario of multiple connections to the same organisation.

[Which transactions flow to each of my accounts?](https://galaxy.maropost.com/kb/articles/222-frequently-asked-questions#account-transactions)

|  |  |  |  |
| --- | --- | --- | --- |
| **Transaction Type** | **Account Type** | **Credit** | **Debit** |
| Cash Variance | Expense |  | Cash Variance |
| Cost of Sales | Direct Costs |  | Cost of Goods Sold |
| Debtors | Current Asset | Account Customer Payments | Account Customer Sales |
| Direct Costs Expense | Direct Costs | Duty on Goods Receipt | Freight Misc Costs on Goods Receipt |
| Duty | Direct Costs |  | Duty on Goods Receipt |
| Freight | Sales | Cash and Carry Freight Layby Freight Account Customer Freight |  |
| Gift Vouchers | Current Liability | Gift Voucher Sales | Gift Voucher Redemption Expired Gift Vouchers |
| In Transit | Current Asset | Stock Transfer Receipt | Stock Transfer Dispatch |
| Inventory | Current Asset | Cost of Goods Sold Stock Transfer Dispatch Stock Adjustment | Goods Receipt from Supplier Stock Transfer Receipt |
| Layby | Current Liability | Layby Payments | Layby Conversion |
| Payment Clearing | Current Asset | Petty Cash Cash Variance | Cash and Carry Payments Layby Payments Account Customer Payments |
| Petty Cash | Current Asset |  | Petty Cash |
| Sales | Sales | Cash and Carry Sales Layby Conversion Account Customer Sales Expired Gift Vouchers |  |
| Stock Adjustments | Expense |  | Stock Adjustment |
| Surcharges | Sales | Cash and Carry Payment Surcharges Layby Payment Surcharges Account Customer Payment Surcharges |  |
| Direct Costs Expense* | Direct Costs |  | Cost of Goods Sold Direct Costs Stock Transfer Dispatch Direct Costs Stock Adjustment Direct Costs |
| Direct Costs Provisioning* | Current Asset | Duty on Goods Receipt Cost of Goods Sold Direct Costs Stock Transfer Dispatch Direct Costs Stock Adjustment Direct Costs | Freight and Misc Costs on Goods Receipt |

* Only applicable if using Direct Cost Provisioning

## Customers

[I have wholesale/account customers in Retail Express, how will I manage my debtors/accounts receivable if these aren?t integrated with my Accounting Package? ](https://galaxy.maropost.com/kb/articles/222-frequently-asked-questions#collapseOne)

If you had previously been using Accounting Link and integrating your wholesale/account customers on an individual basis, you will need to begin to manage these in Retail Express to avoid double handling. The debtor movement will still be reflected in your accounting package allowing you to reconcile the debtors balance between Retail Express and the balance sheet in your accounting software.

In your accounting package a daily invoice per store will be raised reflecting:

- A line for the total of payments received from your wholesale/account customers; and
- A line for the total fulfilments/sales to your wholesale/account customers.

The balance of these will be reflected in the Debtors/Accounts Receivable asset account in your accounting package.

## General Import Configuration

[I use Accrual accounting, why is the data imported at Fulfilment and not the invoice date? ](https://galaxy.maropost.com/kb/articles/222-frequently-asked-questions#collapseTwo)

Retail Express is a Point of Sale system, not an accounting system, and as such is designed to allow a certain amount of flexibility with changes to invoice dates as well the ability to add new items at any time and remove any unfulfilled items.

Accounting systems provide this flexibility through a Sales Order which is only converted to an invoice when finalised.

Invoices in your accounting system are designed to be much more rigid in terms of flexibility to mitigate auditing and reconciliation issues. In addition, the financial reporting relies on periods being locked to ensure that financial reporting is reliable and consistent.

Without Sales Order functionality in Retail Express, to provide the required level of consistency in your accounting software it is necessary to integrate only immutable data. Within Retail Express the only immutable data available, without restricting the current flexibility, is the date the products were actually fulfilled.

Sales are declared at the time each product on an invoice is marked as Fulfilled (i.e. provided to the customer). For more information on fulfilling products refer to the articleFulfil Products from the Fulfilment Report.

[I want to configure my own accounts for my transactions, do I have to use the account codes you specify? ](https://galaxy.maropost.com/kb/articles/222-frequently-asked-questions#collapseFive)

Based on our experience and extensive feedback from customers, the most difficult part of the accounting integration are:

- The initial configuration
- Reconciliation

It's critical that reconciliation is possible and that you can consistently produce source documents from Retail Express for the ATO if required.

In the **Xero Cloud** integration, you can choose the accounts you wish to upload transactions to but the default setup will allow you to easily create new accounts to make reconciliation easier.

In the **MYOB Cloud** Integration, you can choose the accounts you wish to upload transactions to but the default setup will allow you to easily create new accounts to make reconciliation easier.

If you wish to use the **Accounting Data Export Files** you will need to use the default Retail Express specific accounts (listed in the next section).

Using the default suggested accounts means that:

- Configuration is quick and simple
- Only Retail Express transactions will appear in the Retail Express specific accounts (allowing you to reconcile your accounting package easily)
- The Retail Express Accounting reports can be utilised to verify transactions against the specific general ledger codes in your accounting package

If you would prefer more flexibility, you can manually enter the required transactions from the Financial Summary Report.

[What are the standard GL Accounts in the setup file?](https://galaxy.maropost.com/kb/articles/222-frequently-asked-questions#standard-gl-codes)

The standard GL Accounts in the setup file are as follows:

|  |  |  |
| --- | --- | --- |
| **Account Number** | **Account Name** | **Account Type** |
| 19990 | REX Clearing | Bank |
| 19998 | REX Inventory | Other Asset |
| 19980 | REX Petty Cash | Other Asset |
| 19997 | REX In Transit | Other Asset |
| 19996 | REX Accounts Receivable | Other Asset |
| 29996 | REX Gift Voucher | Other Current Liability |
| 29998 | REX Duty | Other Current Liability |
| 49998 | REX Sales | Income |
| 49996 | REX Freight | Income |
| 59998 | REX Cost of Sales | Cost of Sales |
| 59997 | REX Stock Adjustments | Cost of Sales |
| 59996 | REX Direct Costs | Cost of Sales |
| 69997 | REX Cash Variance | Expense |

[I have separate inventory accounts for each product category, how would I integrate this? ](https://galaxy.maropost.com/kb/articles/222-frequently-asked-questions#collapseSix)

Having worked with numerous retailers, we found that this feature was primarily used by larger retailers who are more suited to accounting packages such as MYOB Exo or Advanced. Rather than complicate things for our smaller MYOB Account Right and Xero customers, we have excluded this functionality.

If this is a requirement for your periodic management reporting, it is possible to obtain this information from Retail Express using the Fulfilled Sales Report on a periodic basis, and have your Accountant/Bookkeeper manually produce journals to the various inventory or income codes in your accounting package.

[What is Direct Cost Provisioning?](https://galaxy.maropost.com/kb/articles/222-frequently-asked-questions#direct-costs)

Direct costs are the costs to the business outside of the Inventory Value (freight on board) when receiving stock from a supplier. In Retail Express these direct costs are split into freight, duty and miscellaneous costs. The total cost (or Cost of Goods Sold) of your products is the Buy Price + Direct Costs.

In our Xero and MYOB Cloud integration we support two methods of expensing these direct costs:

- Expensed in full at the point of goods receipt
- Provisioned in an Asset account and expensed along with the Buy Price as the Cost of Goods Sold

For more information on our Xero integration and configuring this option refer to the Xero Integration - Setup and FAQ  article.

## Multiple Stores/Outlets

[I have different MYOB/Xero files for each store, can I integrate per store? ](https://galaxy.maropost.com/kb/articles/222-frequently-asked-questions#collapseSeven)

Yes.

- **Accounting Data Export Files: ** you can choose which store(s) you wish to export and can export stores individually if required.
- **MYOB Cloud integration:** it is possible to link each store to a different MYOB organisation if required however it isn't possible to integrate the same store to more than one MYOBorganisation.
- **Xero integration:** it is possible to link each store to a different Xero organisation if required however it isn't possible to integrate the same store to more than one Xero organisation.

> **Note:** Xero and MYOB do not support the scenario of multiple connections to the same organisation.

## Orders and Sales

[Can I integrate detailed Purchase Orders which show each item received/invoiced? ](https://galaxy.maropost.com/kb/articles/222-frequently-asked-questions#collapseThree)

Having worked with numerous retailers, we found that this feature was primarily used by larger retailers who are more suited to accounting packages such as MYOB Exo or Advanced. Rather than complicate things for our smaller MYOB Account Right and Xero customers, we have excluded this functionality, at least from this initial project.

[I only want to integrate my sales, do I have to integrate purchases etc as well?](https://galaxy.maropost.com/kb/articles/222-frequently-asked-questions#collapseEight)

In the Manual Export screen, you can choose which types of transactions you would like to be included in the export files.

The Xero Cloud integration currently doesn't support integrating only certain transactions.

[When are sales sent to my accounting system?](https://galaxy.maropost.com/kb/articles/222-frequently-asked-questions#sales-fulfilled)

Sales are declared at the time each product on an invoice is marked as Fulfilled (i.e. provided to the customer). For more information on fulfilling products refer to the articleFulfil Products from the Fulfilment Report.

[What Outlet is my sale attributed to?](https://galaxy.maropost.com/kb/articles/222-frequently-asked-questions#sales-outlet)

Sales are attributed to the outlet that completes the **Fulfilment** i.e. dispatches the products to the customer.

The Gross Profit Report - Fulfilled can be used to view the differences in sales, between the original sales outlet and the fulfilling outlet (so that journals can be created to the sales outlet if required).

> **Note:** The Order Outlet can be changed at any time in Retail Express so we don't support reconciliations via this report.