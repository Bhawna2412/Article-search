---
title: "Integrate Xero with Neto by Maropost Inventory"
articleID: 1416
category: "Set up Neto > Inventory Management > Maropost Commerce Cloud Inventory"
knowledgeBase: "Neto By Maropost"
---

# Integrate Xero with Neto by Maropost Inventory

## Integrate Xero with Neto Commerce Inventory

When you install Neto Commerce Inventory there is an opportunity to set up your Xero integration as well. If this step was missed or if Xero was installed at a later date, this guide will help you set up your settings.

1. In your Neto control panel navigate to **Xero** > **Setup & Tools**.
2.   - Track cost of goods sold (this setting will update your cost of goods sold and inventory accounts on sales when the inventory addon is enabled)
  - Export purchase order when sent, received or both (recommended). This Determines when an purchase order is exported to Xero based on the status in Neto.
  - Convert foreign currency purchase orders to base currency (If you choose to convert your purchase orders they will be sent to Xero in your site's default currency. Otherwise, you will need to ensure you have multi-currency set up in Xero)
  - Export purchase orders to Xero as **Draft** so that they can be updated in Neto when received.

  In the **General Settings** section, there are four settings which affect inventory:

  ![IntegrateXerowithMaropostCommerceCloudInventory1.05T5g00000VJaQTEA1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/IntegrateXerowithMaropostCommerceCloudInventory1.05T5g00000VJaQTEA1.png)
3. Under the **Field Mapping** header, you can set the **default inventory account** which is the asset account in Xero that represents your inventory.
  ![IntegrateXerowithMaropostCommerceCloudInventory2.05T5g00000VJaSPEA1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/IntegrateXerowithMaropostCommerceCloudInventory2.05T5g00000VJaSPEA1.png)
4. Under the **Map Stock Adjustment Reason** header, you can map expense/direct costs account in Xero to stock adjustment reasons for better cost tracking. If you do not select an option the product or default cost of goods account will be used.
  ![IntegrateXerowithMaropostCommerceCloudInventory3.05T5g00000VJaSeEAL.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/IntegrateXerowithMaropostCommerceCloudInventory3.05T5g00000VJaSeEAL.png)
5. **Save** your changes and the setup is complete.

## Summary of Transactions Between Neto & Xero

Below is the list of transactions that can be made between the platforms.

### Purchases

| Neto | Xero |
| --- | --- |
| Purchase Order Fully Received | Draft Bill (Purchase) |
| Supplier | Adding supplier in Neto adds the supplier as a contact in Xero. The contact will be marked as a supplier when you purchase from that supplier to create and complete a purchase order |

### Inventory

| Neto | Xero |
| --- | --- |
| Stock Adjustments | Stock Journal, A journal is created in Xero. These journals are created in the form of a Bill with the total balance of 0, i.e. Debit expense 100 and Credit inventory 100 |
| Cost Revaluation | Manual stock adjustment of type cost revaluation is pushed across Xero as stock adjustment. |
| Stock take | A journal is created in Xero. These journals are created in the form of a Bill with the total balance of 0. |

### Sales

| Neto | Xero |
| --- | --- |
| Completed sales order | Draft Receivable (Sales) and a Stock Journal to account for COGS. i.e. Debit COGS 100 and Credit inventory 100 |
| Customers | If you are using batching to send the invoices and payments from Neto to Xero, then it will be exported to one customer in Xero and if batching is off then customer from Neto is created in Xero when sale invoice is exported. |
| Credit | A credit note for the customer is created in Xero but you need to manually apply overpayments / credits that have been applied to invoices in Neto to related invoices in Xero. |

### Purchases, Invoices, Expenses, and Suppliers

| Neto | Xero |
| --- | --- |
| Purchases are created in Neto for a stock value and quantity. They are in sent or fully received status in Neto. | Once in Sent or fully received, a bill is sent to Xero depending on the configuration. This is both for the reconciliation of payment and the Xero stock on hand account, which updates with the stock value. Note: Value of stock will be created in inventory asset when the bill is created in Xero. |
| Local expenses recorded on a purchase order when received. | Expenses exported on the supplier bill in Xero. |
| Invoices are raised in Neto for sales. | Once sales invoices are completed, the stock is removed from Neto and an invoice is sent to Xero; this is used for the payment reconciliation. And a COGS (Cost of Goods Sold) journal is sent, which moves the stock value sold from your Stock on Hand account to your Costs of Goods Sold account. No COGS are sent for products marked 'do not track inventory'. |
| Suppliers and customers are created/updated in Neto. You can also import customer and supplier data into Neto from Xero. | You can import customers / suppliers from Xero to Neto. |

## Reconcile Neto and Xero

If the values in the **Stock on Hand** asset in Xero is different to the **Stock Valuation Report** in Neto, then simply follow each step outlined below in order:

1. Look at when the two values last matched.
2. Ensure transactions from Neto are processed in Neto and approved in Xero. In your Neto control panel you will see your failed exports. You can check the export log for more information. Inside Xero you will need to make sure all your Accounts Payable / Purchase drafts from Neto are approved.
3. If it is not matching by now, then you should run a 'Account Transactions' report inside Xero for your Stock on Hand account. Every single transaction being made to this account should be from Neto so anything being posted from elsewhere will cause a variance. The report can be found under 'All Reports' in Xero
4. If you still find the discrepancy, then kindly check the export log in Neto and make sure there are no errors and if there is any missing transaction then you need to re-export the data from Neto to Xero
5. If these steps do not help in finding the variance, then you may need to make an adjustment in Xero and monitor the balances going forward. To make sure you have the right stock figure do a stock-take in Neto and confirm the costs are correct. Once you have done that you can run a stock valuation report and get the correct stock figure. You can then make the relevant changes in Xero to make them match up.

## Export Purchase Orders

There are two settings that control when purchase orders will be exported to Xero. **Automatically export purchase order when** (sent, received or both) and **Export purchase orders to Xero as** (draft, awaiting approval, awaiting payment).

The below table shows the options available with these two settings.

|  | Sent | Received | Both |
| --- | --- | --- | --- |
| Draft | x | x | x |
| Awaiting Approval | x | x | x |
| Awaiting Payment |  | x |  |

### Sent

Neto will automatically export or re-export the bill, when the purchase order is sent, marked as sent, or if any changes made on a purchase order in the sent status.

Neto will **not** automatically export the bill again when the purchase order is received. If the exported bill is approved or paid in Xero, and Neto (or you) attempts to re-export it, Xero will prevent it and will return an error.

### Received

Once the purchase order is received, Neto will automatically export the bill to Xero. Because the received purchase order cannot be edited, it will not be automatically re-exported. The exported bill is safe for approval or payment in Xero. However, if the exported bills is approved or paid in Xero, and then you manually re-export this purchase order, you will receive an error.

### Both

Neto will automatically export or re-export the bill when:

- The purchase order is sent, or marked as sent.
- If any changes made on the purchase order in the sent status.
- The purchase order is received.

Neto exports to the unique ID in Xero for each bill, so if the purchase order is exported at both status, it will attempt to update any changes made. Xero will block any updates to a PO if the bill has been authorized or paid. This may lead to errors which need to be manually adjusted in Xero if there is any difference between a sent and a fully received purchase order. We recommend using Fully Received to avoid errors.