---
title: "MYOB AccountRight - Review Synchronised Data"
articleID: 192
category: "Accounting > MYOB Accounting Data Export"
knowledgeBase: "Retail Express"
---

# MYOB AccountRight - Review Synchronised Data

**Version Note**: The Accounting Data Export feature exports MYOB files formatted for direct upload to MYOB Desktop v19+ and MYOB AccountRight 2018+.

Once the data has been synchronised from Retail Express you can review the data in MYOB Desktop.

To view detailed information on data being exported refer to Integrated data sent from Retail Express andVerifying Data Imported to your Accounting Package

[▶ Embedded Video](https://player.vimeo.com/video/292255585)

## Reviewing Journals

The following transactions are uploaded as General Journals:

- Stock Adjustments
- Stock Transfers
- Cash Up variances
- Petty Cash (Money In/Out)
- Duty on Purchases
- Purchasing Variance from Supplier Returns

> **Note:** As of February/March 2023, we now present accounting data as already inclusive of tax (for applicable transaction types). This is to avoid rounding discrepancies previously incurred when the accounting package calculated tax independently, sometimes resulting in small variances between each system’s “tax-inclusive” total.

To view General Journals:

1. Navigate to **Command Centre > Accounts > Transaction Journal**
  ![rtaImage - 2023-07-08T220304.347.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVTjEAM.jpg)
2. Enter the **Dates **for the imported journals
3. Journals ID codes will be displayed for the following, with the rest of the journal ID code referencing the date of the transactions

	SA = Stock Adjustments
	TX = Inter-store Transfers
	CV = Cash Variance
	PC = Petty Cash
	DT = Duty on Purchases
  ![rtaImage - 2023-07-08T220309.278.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVToEAM.jpg)
4. Click the **arrow **to view full Journal details

## Reviewing Purchases/Bills/Credit Notes

Completed Purchase Orders (Supplier Invoices) are imported as Service Purchases.  To view Service Purchases:

1. Navigate to **Command Centre > Purchases > Transaction Journal**
2. Enter the dates of the imported data
3. Completed Purchase Orders are imported in the format of R(Retail Express Purchase Order ID) e.g. R0000024.

![rtaImage - 2023-07-08T220318.940.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVTtEAM.jpg)
**Notes:**

- The total of all items on the PO will be uploaded in summary
- Miscellaneous costs will also be uploaded as a separate line

![rtaImage - 2023-07-08T220326.064.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVTyEAM.jpg)
Completed Credit Notes on Supplier Returns are imported as Service Purchases. To view Service Purchases:

1. Navigate to **Command Centre > Purchases > Transaction Journal**
2. Enter the dates of the imported data
3. Completed Credit Notes are imported in the format of C(Retail Express Credit Notes ID) e.g. C0000024.
4. The Journal Memo contains all Supplier Return information in the format of ?SRID:123|CNID:456|Ref:123456789?

## Reviewing Sales and Payments

Sales and Payments are imported as Service Sales.

To view Service Sales:

1. Navigate to **Command Centre > Sales > Transaction Journal**
  ![rtaImage - 2023-07-08T220330.924.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVUIEA2.jpg)
2. Enter the dates of the imported data
3. You will see invoices for each day's sales - the Customer Purchase Order number will have the format of RS(date) e.g. RS180720
  ![rtaImage - 2023-07-08T220338.106.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVUSEA2.jpg)
4. Click the **History **button to view the details of the payments for the day
5. Select an** Invoice** to view the details

> **Note:** The balance of all Invoices imported from Retail Express should have a zero balanceAll debtors and layby movements are handled through account movements so will not impact the invoices final balance