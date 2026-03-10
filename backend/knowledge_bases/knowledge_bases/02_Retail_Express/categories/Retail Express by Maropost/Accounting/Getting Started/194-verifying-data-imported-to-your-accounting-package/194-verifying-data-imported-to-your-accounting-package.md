---
title: "Verifying Data Imported to your Accounting Package"
articleID: 194
category: "Accounting > Getting Started"
knowledgeBase: "Retail Express"
---

# Verifying Data Imported to your Accounting Package

You can ensure accounting integration accuracy by systematically verifying that data imported from **Retail Express** matches expected transactions, amounts, and account allocations in your accounting software. This helps optimize your financial data quality by implementing verification procedures that catch integration issues early, prevent accounting errors from propagating, and maintain confidence in financial reports used for business decisions.

Implementing verification procedures involves comparing **Retail Express** reports to accounting system transactions, checking totals, and validating account mappings. When you verify imported data regularly, you can expect early detection of integration or mapping issues, maintained accounting accuracy supporting reliable financial reporting, reduced month-end reconciliation challenges, caught configuration problems before they accumulate, and confidence that accounting records accurately reflect retail operations.

This article provides a guide for verifying that your Retail Express data has been uploaded correctly**. **There are two recommended reports to use to verify the uploaded data - one within your accounting package, and one within Retail Express.

## Printing Reports for comparison

### Run a General Ledger Summary in your Accounting Package

The easiest way to verify your Retail Express data has uploaded successfully to your accounting package is by running a General Ledger Summary.

Run the General Ledger Report for the period you wish to reconcile.

> Tip: If you're unsure about the report to use, refer to the MYOB Account Reports Help Page or the Xero Accounting Reports Help Page.

Your report should look something like this:

![rtaImage - 2023-07-10T051633.067.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjuFEAQ.jpg)

### Run the Financial Summary Report in Retail Express

To access the Financial Summary Report:

1. Navigate to **Retail Express > Reports > Accounting Reports > Financial Summary Report**
2. Use the same period that you entered for the General Ledger Summary (see above)

For further details, see: Financial Summary Report.

![rtaImage - 2023-07-10T051638.561.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjuPEAQ.jpg)

## Verifying different transaction types

Find below the detailed information on how to verify individual transaction types.

### Inventory

To verify your Inventory data to the Financial Summary Report - the** Total Ex GST** from the *Inventory Movement* section of the Financial Summary can be compared to the net movement on your Inventory Account.

Your inventory account will contain the total transactions from:

- Stock Adjustments
- Transfers
- Cost of Goods sold
- Inventory Purchases

![rtaImage - 2023-07-10T051643.891.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjuUEAQ.jpg)

| Stock Adjustments | Stock adjustments will be uploaded to your Stock Adjustment account and your Inventory account.  The value of your Stock Adjustment account on your General Ledger can be compared to the Ex GST cost of the Stock Adjustment line in the Inventory Movement section of the Financial Summary report. To view detailed Stock Adjustment transactions in Retail Express, please see the Stock Adjustment Summary and the Stock Adjustment Report |
| --- | --- |
| Transfers | Transfers will be uploaded to your In-Transit account and your Inventory account.  The value of your In-Transit account on your General Ledger can be compared to the Ex GST cost of the Transit Dispatched and Transit Received lines in the Inventory Movement section of the Financial Summary report. To view detailed Transfer transactions in Retail Express, please see the Accounting Transfers Report and the Accounting Stock in Transit Balance Report. |
| Cost of Goods Sold | The cost of goods sold will be uploaded to your Cost of Goods Sold account and your Inventory account.  The value of your Cost of Goods Sold account on your General Ledger can be compared to the Ex GST cost of the Cost of Goods Sold line in the Inventory Movement section of the Financial Summary report. To view detailed Cost of Sales transactions in Retail Express, please see the Fulfilled Sales Report. |

### Direct Costs

> Note: This section only applies if you use Direct Cost Provisioning.  For more information, refer to the Accounting Integrations FAQs article.

To verify your Inventory data to the Financial Summary Report - the** Total Ex GST** from the **Inventory Movement** section of the Financial Summary can be compared to the net movement on your **Inventory Account**.

If you are using **Direct Cost Provisioning** you will also need to verify your Direct Cost data to the Financial Summary Report. The **Total Ex GST** from the **Direct Costs Movement** section of the Financial Summary can be compared to the net movement on your **Direct Cost Provisioning Account**.

Your inventory account will contain the total transactions from:

- Stock Adjustments
- Transfers
- Cost of Goods sold
- Inventory Purchases

![rtaImage - 2023-07-10T051649.232.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiGkEAI.jpg)

| Stock Adjustments | Direct Costs for Stock adjustments will be uploaded to your Stock Adjustment account and your Direct Cost Provisioning account.  The value of your Stock Adjustment account on your General Ledger can be compared to the Ex GST cost of the Stock Adjustment line in the Inventory Movement section of the Financial Summary report plus the Ex GST Cost of the Stock Adjustment line in the Direct Costs section of the Financial Summary Report. To view detailed Stock Adjustment transactions in Retail Express, please see the Stock Adjustment Summary and the Stock Adjustment Report |
| --- | --- |
| Transfers | Direct Costs for Transfers will be uploaded to your In-Transit account and your Direct Cost Provisioning account.  The value of your In-Transit account on your General Ledger can be compared to the Ex GST cost of the Transit Dispatched and Transit Received lines in the Inventory Movement section of the Financial Summary report plus the Ex GST cost of the Transit Dispatched and Transit Received lines in the Direct Costs Movement section of the Financial Summary report. To view detailed Transfer transactions in Retail Express, please see the Accounting Transfers Report and Accounting Stock in Transit Balance Report. |
| Cost of Goods Sold | The direct costs component of the cost of goods sold will be uploaded to your Direct Costs Expense account and your Direct Cost Provisioning account.  The value of your Direct Cost Expense account on your General Ledger can be compared to the Ex GST cost of the Cost of Goods Sold line in the Direct Costs Movement section of the Financial Summary report. To view detailed Cost of Sales transactions in Retail Express, please see the Fulfilled Sales Report. |

### Purchases

You can verify your purchase orders (supplier invoices) as a total by comparing the Trade Creditors account in your General Ledger to the Inc GST total of the Purchases section of the Financial Summary report.

![rtaImage - 2023-07-10T051654.558.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjvDEAQ.jpg)

| Inventory | See the previous section for verifying inventory from your purchases. |
| --- | --- |
| Direct Costs | Freight and Miscellaneous Costs entered on your purchases will be expensed directly to the Direct Costs account. You can verify this by adding the Ex GST column from the Direct Costs Section with the Ex GST section in the Duty section of the Financial Summary report and comparing to the Direct Costs account |
| Duty | Any duty entered on Purchases will be sent to a Duty clearing account to be handled separately from the Supplier invoices. Compare your Duty Clearing account to the Duty section on the Financial Summary Report. |
| GST | The total GST paid on your Purchases will be sent to the linked GST account. Compare the total of the GST column in the Purchases section of the Financial Summary report to the GST Paid account in your General Ledger Summary To view detailed Purchase Order transactions in Retail Express, please see the Accounting Purchase Order Report  > **Note:** If you have other suppliers for non-inventory expenses such as electricity and rent, you may need to run a General Ledger Detail report in order to verify your data for Retail Express Suppliers. |

> Note: As of February/March 2023, we now present accounting data as already inclusive of tax (for applicable transaction types). This is to avoid rounding discrepancies previously incurred when the accounting package calculated tax independently, sometimes resulting in small variances between each system's "tax-inclusive" total.

### Sales

You can verify your sales data by comparing the Sales account in your General Ledger Report to the Financial Summary Report - Ex GST total of the Sales section.

Your sales account will contain the total transactions from:

- Fulfilled Cash sales
- Fulfilled Layby Sales
- Fulfilled Account Sales
- Expired Gift Vouchers

> Note: Laybys and Accounts Receivable are tracked through non-linked accounts so the Trade Debtors account on your General Ledger Summary should always have a Net Activity of $0.00

![rtaImage - 2023-07-10T051700.553.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphKsEAI.jpg)

| GST | The total GST collected on your Sales will be sent to the linked GST account. To verify the data compare the GST Collected account in the General Ledger Summary to the Financial Summary Report > total of the GST column in the Sales section plus the total of the GST column in the Freight section. |
| --- | --- |
| Freight | Freight will be sent to a specific freight account and will not necessarily flow through the linked freight account. To verify your freight data, you can compare the Ex GST column of the freight section of the Financial Summary report to the freight account in your General Ledger. |

To view detailed Fulfilled Sales transactions in Retail Express, please see theFulfilled Sales Report.

### Payments

You can verify your payments by comparing the Clearing account in your General Ledger Report to the Financial Summary Report > total of the Income section.

Your Clearing account will contain the total transactions from:

- Payments (Income)
- Petty cash movements
- Variances from cash ups

![rtaImage - 2023-07-10T051708.105.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjvcEAA.jpg)
If you are not using a clearing account and integrating directly to your bank account, you will need to review the individual transactions as the bank account will contain transactions that haven't originated from Retail Express.

To view detailed Payment transactions in Retail Express, please see theIncome Report

### Gift Vouchers

You can verify your gift vouchers by comparing the Gift Vouchers account in your General Ledger Report to the Financial Summary Report > total of the Gift Voucher section.

Your Gift Voucher account will contain the total transactions from:

- Vouchers Sold
- Vouchers Expired
- Vouchers Redeemed

![rtaImage - 2023-07-10T051713.887.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppid4EAA.jpg)
To view detailed Gift Voucher transactions in Retail Express, please see the Voucher Creation Report and theIncome Report

### Laybys and Account Sales

**Laybys**

Layby movements will occur at anytime that money is received and fulfilment does not occur on the same day for a customer that does not have account terms nominated within Retail Express.

eg: Online order and payment processed in Retail Express on 1/1/2020 -  however, goods are not fulfilled until 2/1/2020.

You can verify your laybys by comparing the Layby account in your General Ledger Report to the Financial Summary report "Layby" section.

![rtaImage - 2023-07-10T051721.938.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjvwEAA.jpg)
To view detailed Layby transactions in Retail Express, please see the Layby Movement Report and theLayby Balances Report

**Account Sales**

Verify your account sales by comparing the Accounts Receivable account in your General Ledger Report to the Financial Summary Report "Accounts Receivable Movement" section total.

![rtaImage - 2023-07-10T051728.658.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjw1EAA.jpg)
To view detailed Accounts Receivable transactions in Retail Express, please see the Accounts Receivable Movement Report and theAccounts Receivable Balances Report

> Note: Laybys and Accounts Receivable are tracked through non-linked accounts so the Trade Debtors account on your General Ledger Summary should always have a Net Activity of $0.00.

## Summary upload videos

- [Xero Upload Overview](https://www.retailexpressmedia.com/training/webinars/current/XeroUploadOverview.mp4)
- [MYOB Upload Overview](https://www.retailexpressmedia.com/training/webinars/current/MYOBUploadOverview.mp4)