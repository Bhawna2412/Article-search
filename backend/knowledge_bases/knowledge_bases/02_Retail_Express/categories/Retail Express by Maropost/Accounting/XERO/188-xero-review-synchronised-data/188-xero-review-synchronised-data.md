---
title: "Xero Review Synchronised Data"
articleID: 188
category: "Accounting > XERO"
knowledgeBase: "Retail Express"
lastUpdated: 2025-10-08
---

# Xero Review Synchronised Data

You can review data synchronized between **Retail Express** and Xero to ensure accurate financial records and troubleshoot any synchronization issues. This capability helps maintain accounting accuracy by validating data transfers, identifying discrepancies, and ensuring your financial system accurately reflects retail operations across all locations.

Reviewing synchronized data involves checking sales summaries, inventory valuations, purchase transactions, and payment records in both systems. When you regularly review synchronized data, you can expect better financial accuracy, earlier identification of integration issues, and improved confidence in your accounting records for business decision making.

Once data has been synchronised from Retail Express you can review the data in Xero. 

To view detailed information on data being exported refer to [Integrated data sent from Retail Express](https://galaxy.maropost.com/s/article/Integrated-Data) and [Verifying Data Imported to your Accounting Package](https://galaxy.maropost.com/s/article/Verifying-Data-Imported-to-your-Accounting-Package)

**Reviewing Journals**

The following transactions are uploaded as General Journals:

* Stock Adjustments
* Stock Transfers
* Cash Up variances
* Petty Cash (Money In/Out)
* Duty on Purchases
* Purchasing Variance from Supplier Returns

To view General Journals:

1. Navigate to **Accounting > Reports > Journal Report**![rtaImage - 2023-07-10T062535.818.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjhgEAA.jpg)
2. Enter the **Dates**for the imported journals
3. Tick **Show Posted Manual Journals Only** and click **Update**
4. Journal ID codes will be displayed for the following, with the narration displaying relevant information such as Movement, Supplier or Supplier Return information![rtaImage - 2023-07-10T062542.877.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pplUgEAI.jpg)

**Reviewing Purchases/Bills/Credit Notes**

Completed Purchase Orders (Supplier Invoices) are imported as Bills to Pay.  To view Bills to Pay:

1. Navigate to **Business > Bills to Pay**
2. Completed Purchase Orders are imported in the format of **?PO: 123 / Inv: 12345?**![rtaImage - 2023-07-10T062550.308.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pplZTEAY.jpg)

📋 **Note**:

* The total of all items on the PO will be uploaded in summary
* Direct Costs will be uploaded as separate lines![rtaImage - 2023-07-10T062554.987.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppieyEAA.jpg)

Completed Credit Notes on Supplier Returns are imported as Bills to Pay.  To view Bills to Pay:

1. Navigate to **Business > Bills to Pay**
2. Completed Credit Notes are imported in the format of **?SRID:123|CNID:456|Ref:123456789?**![rtaImage - 2023-07-10T062605.869.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppkzCEAQ.jpg)

**Reviewing Sales and Payments**

Sales and Payments are imported as Invoices.

To view Invoices:

1. Navigate to **Business > Invoices**
2. Click **Search** to refine the Start and End Dates of the imported data
3. You will see Invoices (INV) for each day's sales and Credit Notes (CN) for each day?s refund amounts  
    The Ref field will contain the Outlet Name and Date  
   ![rtaImage - 2023-07-10T062613.491.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pplKFEAY.jpg)
4. Click the **Invoice** line to view the details of the invoice for that day![rtaImage - 2023-07-10T062618.739.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pplSnEAI.jpg)

📋 **Note**:

* The balance of all Invoices imported from Retail Express should have a zero balance
* All debtors and layby movements are handled through account movements so will not impact the invoices final balance

  
  

## Related Articles

**Reporting & Analytics:**

* [Sales Report](https://galaxy.maropost.com/kb/articles/article-271-sales-report)
* [Aged Stock Report](https://galaxy.maropost.com/kb/articles/article-278-aged-stock-report)

**Purchase Orders & Suppliers:**

* [Po Payments Report](https://galaxy.maropost.com/kb/articles/article-274-po-payments-report)
* [Supplier Return Detail Report](https://galaxy.maropost.com/kb/articles/article-300-supplier-return-detail-report)