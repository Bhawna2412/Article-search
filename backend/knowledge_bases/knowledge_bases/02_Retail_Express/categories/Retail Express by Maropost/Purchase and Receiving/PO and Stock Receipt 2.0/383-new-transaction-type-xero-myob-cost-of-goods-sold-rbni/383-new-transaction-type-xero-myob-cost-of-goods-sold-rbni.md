---
title: "New Transaction Type - Xero/MYOB - Cost of Goods Sold RBNI"
articleID: 383
category: "Purchase and Receiving > PO and Stock Receipt 2.0"
knowledgeBase: "Retail Express"
---

# New Transaction Type - Xero/MYOB - Cost of Goods Sold RBNI

Within the new set of Purchase Order and Stock Receipt 2.0 Features, Retail Express will be introducing the concept of "two-step" stock receipts. This is where a user may receive some items today and elects to "Make Available" to sell to customers but may only receive or wish to apply and "Finalise" the invoice at a later date.

## Functionality in Retail Express

To handle the transactions that occur to support this flow, Retail Express has implemented a new transaction type and associated accounting mapping option, which is used for Xero and MYOB integrations called "Cost of Goods Sold RBNI".  The term "RBNI" stands for "Received But Not Invoiced" and the transaction type used to post transaction values that are created when a stock receipt is "Made Available" and again when it is later "Finalised".

The account appears in both the Xero and MYOB Integration Settings pages and will need to be mapped accordingly:

- **Transaction Type:** Cost of Goods Sold RBNI
- **Account Type:** Current Liability
- **Suggested/Default Account:** 2-9999 RE Cost of Goods Sold RBNI

More documentation will follow on this concept closer to the release of phase 2. For now, you can map the account and to re-connect your integration, different a count can be mapped later if you wish, however, it must be mapped to resume integration sync.

Additional Note

:

- This account is only used when the associated data is generated, which can only occur* ***after** phase 2 of the purchase order and stock receipt features are released/enabled** AND** only when using the two-step stock receipt process, which remains optional for users.
- The "temporary' value of the goods (including direct cost amounts) is posted via this account/transaction type to cater for the time between "Making Available" and "Finalising" the invoice, which could be days or weeks.
- When finalised, any amounts that need to be adjusted to cater for a change in the value of the received inventory are posted and the total value of the Invoice is posted as a Supplier Bill.

More documentation will follow on this concept closer to the release of phase 2.