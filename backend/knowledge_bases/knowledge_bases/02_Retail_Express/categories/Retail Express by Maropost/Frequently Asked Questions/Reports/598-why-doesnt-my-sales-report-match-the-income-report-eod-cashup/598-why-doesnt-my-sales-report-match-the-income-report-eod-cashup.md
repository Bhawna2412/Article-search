---
title: "Why doesn't my Sales Report match the Income Report / EOD / Cashup?"
articleID: 598
category: "Frequently Asked Questions > Reports"
knowledgeBase: "Retail Express"
---

# Why doesn't my Sales Report match the Income Report / EOD / Cashup?

# Problem

My Sales Report Doesn't match the Income Report, or my Cash Up/End of Day figures!

## Answer

These reports are designed for different purposes, so they won't always match. It's important to understand how each of the reports function:

|  |  |
| --- | --- |
| Sales Report | Reports on the **sales** created within a specific date/time range (regardless of how much was paid) |
| Income Report | Reports on the **income/payments **received within a specific date/time range (not the total amount of the sale) |
| End of Day Report | Reports on completed Cash Ups performed at POS within a specified date range |

Below we've covered the most common reasons why the reports don't match. If you're still unsure, please contact our [Support Team](https://www.retailexpress.com.au/contact) for assistance!

**Investigating Discrepancies**

We recommend using the Income Report and comparing it to the End of Day Report.

- Locate the date range and exact time of the End of Day Report (Date From and Date Counted)
- Run the Income Report using the same Date and Time range
- Compare the data
- 

## Common Scenarios

### Layby Sales

- Layby sale created to the value of $1000
- Deposit received of $100

|  |  |
| --- | --- |
| **Sales Report** | $1000 |
| **Income Report** | $100 |

You create a new Layby to the value of $1000, however you accept a deposit of $100. The Sales Report will report 'Sales' of $1000, however the Income Report will report only on the payment (Income) received of $100.

- Customer returns to pay another $150 payment

|  |  |
| --- | --- |
| **Sales Report** | No sale (sale associated with the date it was created) |
| **Income Report** | $150 |

This scenario is repeated for any additional layby payments, including the final pickup and fulfilment payment.

### Completed or Incomplete Sales

A Cancelled or Incomplete Sale *can* have income associated it.

- Staff create a sale
- Payment of $75 is applied
- The sale is cancelled without the payment being removed

|  |  |
| --- | --- |
| **Sales Report** | Cancelled or incomplete transactions are excluded by default (can be selected to view) |
| **Income Report** | $75 |

The Income Report will report on Income (received or refunded) within the specified date/time range *regardless of the Sales Status.*

It is always recommended to remove/delete any payment *prior* to voiding the sale.

If the Payment is not deleted, it will remain associated with the sale and continue to appear in both the Cash Up (End of Day Report) and the Income Report (even if the sale is voided).

### Sale of Vouchers

Vouchers created are a non-inventory item and not considered a true "Product". As such their sales are not included on the Sales Report (nor the Product Sales Report).

However, as there was a payment received for the voucher the income accepted as payment for these Voucher is included on the Income Report.

- Customer purchases a $50 store voucher
- $50 is received as payment for the voucher

|  |  |
| --- | --- |
| **Sales Report** | Transaction is included (the Sales Report only shows sales of inventory products) |
| **Income Report** | $50 |

### Backdating or Forward dating Sales

Users can modify the Invoice Date and Payment Date separately which means there can be a scenario where the Sales date differs to the Payment date.

![rtaImage - 2023-07-10T061313.864.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgovEAA.jpg)
![rtaImage - 2023-07-10T061318.344.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppl7ZEAQ.jpg)
The Sales Report will report sales on the Invoice Date, and the Income Report will report any payments accepted on the Payment date.

You can restrict access to these features via POS Security.

### Staff has placed the Cash Up On Hold

As soon as you begin a Cash Up the "Date To" is selected, with any further transactions created after that date/time not included in the cash up.

If a staff member needs to place the Cash Up On Hold, for example, to process another customer sale, it's recommended to "Refresh" the Cash Up when resuming. That way the "Date To" field is updated and any new transactions will be included in the "Income" count.

1. Staff begins Cash Up
2. Places Cash Up On Hold
3. Processes another transaction for $25
4. Resumes Cash Up
	- If transactions are refreshed, the $25 will be included
	- If transactions are not refreshed the $25 will be included in the next Cash Up instead

-