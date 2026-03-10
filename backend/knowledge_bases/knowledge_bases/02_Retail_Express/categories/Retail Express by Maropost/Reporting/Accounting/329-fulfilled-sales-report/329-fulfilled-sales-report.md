---
title: "Fulfilled Sales Report"
articleID: 329
category: "Reporting > Accounting"
knowledgeBase: "Retail Express"
---

# Fulfilled Sales Report

You can use the Fulfilled Sales Report to track completed transactions with detailed cost and sales information, helping ensure accurate financial reconciliation and order completion monitoring. This improves your retail operations efficiency by providing detailed visibility into fulfilled items, cost of sales calculations, and direct cost provisioning, with properly configured fulfillment reporting typically leading to better inventory accounting accuracy and faster financial reconciliation.

Understanding fulfilled sales reporting involves recognizing sales type classifications, direct cost provisioning impact, and buy price versus COGS calculations to help retail operators focus on the right completed transactions, ensuring your retail strategy consistently drives better financial management and sales performance outcomes.

The Fulfilled Sales Report provides detailed insights into sales that have been fully fulfilled, offering a clear picture of completed transactions. The **Fulfilled Sales Report** provides details of items fulfilled including cost and sales information, grouped by date.

This report is essential for tracking sales performance, verifying delivery statuses, and ensuring all fulfilled sales align with business accounting records. It aids in streamlining financial reconciliation and monitoring order completion rates effectively.

> **Note:** This report provides information at a detailed transactional level

**Considerations when using this report:**

- The [Sales Types](https://galaxy.maropost.com/kb/articles/329-fulfilled-sales-report#sales-type-filter) are not related to the fulfilment method selected at POS
- This report only includes fulfilled products and doesn't include voucher-only sales
- By default, your cost of sales account will be Debited by the Buy Price Ex value as Direct Costs will already have been expensed on the supplier invoice.
- If you are using direct cost provisioning your cost of sales will be for the COGS Ex value with Buy Price Ex coming from your inventory account and the Direct Costs Ex coming from your direct cost provisioning account

## Using the Fulfilled Sales Report

To access the Fulfilled Sales Report:

1. Navigate to:** Reports > Accounting Reports > Fulfilled Sales**
2. Select required filters (see below for detailed information on [Sales Type](https://galaxy.maropost.com/kb/articles/329-fulfilled-sales-report#sales-type-filter))
3. Click** Search**
  ![reports_fulfilledsalesreport.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppN6YEAU.jpg)
4. Results are displayed grouped by date
5. Click to expand and view individual invoice detail within each date
  ![reports_fulfilledsalesreport_results.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppNnvEAE.jpg)

> **Note:** Click column headings to sort into ascending or descending order

## []()Sales Type Filter

See below for detailed information on the Sales Type filter

|  |  |
| --- | --- |
| Account | Account sales include all sales made to an Account Customer, even if they are sold as "cash and carry". These will all move through your Debtors account in your accounting package. |
| Layby | Layby sales include sales made to a non-account customer that is not fully fulfilled and paid on the same single day in the same store. This may include web sales that are fully paid through your web store and fulfilled via delivery at a later date or from a different store. These sales will all move through your layby account in your accounting package. |
| Cash | Cash sales include sales made to a non-account customer that is fully paid and fully fulfilled on the same single day in the same store. This may include sales with a fulfilment method of Layby in POS. These sales go directly to your sales account in your accounting package. |