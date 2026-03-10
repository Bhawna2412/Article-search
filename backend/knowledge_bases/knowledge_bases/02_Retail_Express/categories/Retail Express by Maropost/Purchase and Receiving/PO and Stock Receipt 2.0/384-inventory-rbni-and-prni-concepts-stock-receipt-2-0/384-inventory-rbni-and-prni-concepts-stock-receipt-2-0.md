---
title: "Inventory RBNI and PRNI Concepts - Stock Receipt 2.0"
articleID: 384
category: "Purchase and Receiving > PO and Stock Receipt 2.0"
knowledgeBase: "Retail Express"
---

# Inventory RBNI and PRNI Concepts - Stock Receipt 2.0

Within the new set of Purchase Order and Stock Receipt 2.0 Features, Retail Express has introduced the concept of "two-step" stock receipts. This is where a user may receive some items today and needs to "Make Available" to sell to customers, but may only receive or wish to apply and "Finalise" the invoice at a later date.

**Step 1** is Referred to as** "Make Available" ** whereas,  **Step 2** is **"Finalising"** the stock receipt/invoice.  A given user may perform 1 & 2, or perhaps skips directly to step 2.

The two-step process means that certain scenarios can arise in the time "in-between ", such as selling items before the final invoiced values were known or applying an invoice later but the goods are already sold and fulfilled to customers. Differences between the expected invoice price, and the final invoice price when it arrives also need to be considered, as the price may vary for item/s between Steps 1 and 2.

Retail Express has introduced two new Accounting Concepts to cater to these complexities. These are predominantly only applicable to users with Accounting Integrations or who use our Accounting Data Export files, though you may see reference to these concepts in some back office reports.

> **Note:** You may wish to review this document with your accountant or bookkeeper to ensure you understand the features and how the dataflow will operate between Retail Express and your Accounting Platform.

## New Concepts

### Inventory RBNI

Inventory "Received But Not Invoiced" (RBNI) is a term used in accounting and inventory management that refers to the quantity of inventory that a company has received from a supplier, but for which an invoice has not yet been received or the details are not yet known. In other words, it is inventory that has been received by the company, but the supplier has not yet provided a bill for the goods.

Inventory RBNI can occur due to several reasons. For example, the supplier may have sent the inventory without generating an invoice, or there may have been a delay in the processing of the invoice by the supplier. In some cases, there may be discrepancies between the quantity or value of inventory received and what was expected, which may result in a delay in receiving the invoice.

### Inventory PRNI

Inventory "Previously Received Now Invoiced" (PRNI) refers to the inventory that a company has received and made available via a stock receipt previously, for which an invoice has now been added and finalised. PRNI can occur due to various reasons, for example, the supplier may have experienced a delay in issuing the invoice, or the company may have requested that the invoice be held until a later date.

When the invoice for a previously made-available invoice is applied and finalised, the value of the inventory will be adjusted to reflect the cost of the goods as stated in the invoice. This will impact the company's financial statements, as the cost of the inventory will be reflected in the cost of goods sold (COGS) and the inventory balance will be adjusted accordingly.

## Functionality in Retail Express

To handle the RBNI and PRNI Data flow, Retail Express has implemented a new transaction type and associated accounting mapping option, which is used for Xero and MYOB integrations.

- **Transaction Type:** Cost of Goods Sold RBNI
- **Account Type:** Current Liability
- **Suggested/Default Account:** 2-9999 RE Cost of Goods Sold RBNI

This account is only used when the associated RBNI/PRNI data is generated, which can only occur* after* phase 2 of the purchase order and stock receipt features are released/enabled** AND** only when using the two-step stock receipt process, which remains optional for users. The "temporary' value of the goods (including direct cost amounts) is posted via this account/transaction type to cater for the time between "Making Available" and "Finalising" the invoice, which could be days or weeks.

When finalised, any amounts that need to be adjusted to cater for a change in the value of the received inventory are posted and the total value of the Invoice is posted as a Supplier Bill.

- When applying and finalising an invoice, if there is a difference in buy price or direct costs between the "Received" price and the "Finalised" invoice price, the value of the discrepancy i.e. "Invoice Variance" needs to be catered for and handled.
- The "Made Available" inventory needs to be re-valued using our existing average weighted cost formulas. However, this revaluation needs to incorporate the price discrepancy to accurately reflect the stock value.
- This "change in value" is represented as an Inventory PRNI entry, posted to accounting to correctly increase or decrease the inventory value appropriately.
- For items that are already sold out, or no longer available at the Purchase Order Outlet when the invoice is finalised, Retail Express re-values only the items that remain and posts any discrepancy as a Purchase Variance to accounting (using the existing Purchase Variance Account used by Supplier Returns.  - The system revalues the inventory based on having *at least* the invoiced quantity still available at the time the invoice is finalised.
  - If Stock on Hand* is less than* the Invoice QTy for a given item, Retail Express revalues as many as remain on hand and posts a Purchase Variance for the value not able to be re-valued as they are sold/no longer on hand.
  - If stock on hand when finalising is 0 or less, the entire Invoice Variance is posted as a Purchase Variance as we simply have no items left to "re-value".
- When first "Making Available" the initial stock receipt, Retail Express uses the PO Item Buy Ex values as the assumed "temporary" price, this is known and referred to as the "Received COGS"  - The user can (optionally) adjust this price - if they are aware of the actual expected invoice price but do not yet have the invoice document or other details.
  - The user can also specify direct costs which are then used in the Received COGS value for each item.
- Any Items that were sold or transferred out at the outlet in the period between when the stock receipt was Made-Available and Finalised, will be moved at the COGS as-at the time of the transaction and this value is NOT updated if there is a price variance on the supplier invoice when the invoice is finalised.  - For this reason, we understand this two-step receipt process is not for everyone, and have added user-security controls which determine if a given user can perform the two-step process, or if they can only "finalise" the PO.
  - If your business expects to have large discrepancies between the original receipted costs and the final invoice costs, coupled with significant delays between receiving the items and being able to finalise the invoice & direct costs:    - You may prefer to only use the "finalise" step, i.e. Single Step Stock Receipt, and revoke access from your staff to prevent such discrepancies from impacting on sales GP values in Retail Express.