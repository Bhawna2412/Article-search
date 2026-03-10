---
title: "Accounts Receivable Movement Report"
articleID: 327
category: "Reporting > Accounting"
knowledgeBase: "Retail Express"
---

# Accounts Receivable Movement Report

You can use the Accounts Receivable Movement Report to track all transactions contributing to your debtors account balance within a selected period, helping ensure accurate reconciliation between **Retail Express** and your accounting package. This improves your retail operations efficiency by providing detailed visibility into account customer sales, payments, vouchers, and freight charges, with properly configured accounts receivable tracking typically leading to better cash flow management and faster accounting reconciliation.

Understanding accounts receivable movement reporting involves recognizing sales type classifications, opening and closing balance verification, and movement type filtering to help retail operators focus on the right customer account transactions, ensuring your retail strategy consistently drives better financial management outcomes.

This report will detail all transactions that contribute to the movement in your Accounts Receivable (Debtors) account within the period selected, including:

- Sales
- Vouchers
- Freight
- Payments

This report provides information at a detailed transactional level, however if you need help with account or summary level information, please refer to the article Verifying Data Imported to your Accounting Package.

## Before you Begin

Your Accounts Receivable sales will move through a General Ledger Asset account, not your linked control account for Trade Debtors.

- Account sales includes all sales made to an Account Customer, even if they are sold as "cash and carry". These will all move through your debtors account in your accounting package.
- The opening balance should match the Accounts Receivable account balance in your Accounting Package as at the start of the date period you're reporting on
- The closing balance should match the Accounts Receivable (Debtors) account balance in your Accounting Package as at the end of the date period you're reporting on
- Sale Types are NOT related to the fulfilment or payment method selected at POS
- This report only includes fulfilled products under ?sale? movements - regardless of payment status.

> **Note:** Sales are flagged at the time they are committed.  If a customer has their account terms removed, any sales created prior will continue to be considered account customer sales.

## Using the Accounts Receivable Movement Report

To use the Accounts Receivable Movement Report:

1. Navigate to** Reports > Accounting Reports > Accounts Receivable Movement Report**
2. Update the **Filters **as required (see below for details)
3. Click **Search**
4. The **Results **will be grouped by Outlet sorted by Date
5. Click the **Arrow **to expand/collapse each section
6. Click the **Export to Excel** or **CSV** buttons to export a list of transactions for each outlet
7. Click the **Column Headings **to re-sort the data

## Filters

Most of the filtering fields are self explanatory, however see the detailed information below for the more advanced fields.

|  |  |
| --- | --- |
| Filter | Details |
| Ignore Date From | Unticked by default, this option allows you to override the "Date From" and "Date To" date range. Tick the box to include all sales up to the "Date To" option (regardless of the "Date from" selection) |
| Movement Type | Used to filter by specific transaction types only:  - **Sales **- Fulfilled items on the date fulfilled - **Vouchers** ? vouchers on the date purchased - **Freight** ? freight charged on sales on the date applied to the sale - **Payment** ? all payments made on the sale based on the Payment Date entered against the payment |
| Store Type | Filters based on the type of Outlet as selected in the Outlet Settings |