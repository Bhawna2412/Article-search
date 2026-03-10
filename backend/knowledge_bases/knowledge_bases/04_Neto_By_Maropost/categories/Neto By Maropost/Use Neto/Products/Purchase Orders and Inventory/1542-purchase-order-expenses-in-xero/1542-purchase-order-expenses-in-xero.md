---
title: "Purchase Order Expenses in Xero"
articleID: 1542
category: "Use Neto > Products > Purchase Orders and Inventory"
knowledgeBase: "Neto By Maropost"
---

# Purchase Order Expenses in Xero

Expenses are incurred when you order inventory from your suppliers. The most common expenses are delivery and freight costs, but can also include credit card surcharges, warehouse handling and more. Neto Inventory allows you to record an unlimited number of expenses when you receive a purchase order. After a purchase order is received, you cannot add or edit its expenses.

You can also incorporate expenses into the cost price of your products. We refer to these apportioned expenses as “landed costs”. There are four different ways to apportion your expenses, which are covered below.

When you apportion your expenses you get an accurate representation of your cost of goods, so you can adjust the margin and measure profitability. The information is also sent through to your Xero accounting integration, creating relevant expense bills and adjusting your inventory account accordingly.

Expenses can be added for the same supplier of your products (local expenses) in the same currency as your supplier. You can also apportion expenses from other suppliers (international expenses) to your purchase order, in any currency required.

## Apportion Expenses to Product Cost Price

Expenses associated with ordering stock can cause a significant impact on the cost of the products you sell. Apportioning allows you to record the expense as part of the product cost. There are four ways you can apportion an expense across the inventory received:

- **Value**: Landed Unit Cost = Receive Line subtotal / Receive Subtotal x Subtotal Expenses / Orderline Received Qty
- **Quantity**: Landed Unit Cost = Orderline Received Qty/Total Received Qty x Subtotal Expenses $ /Orderline Received Qty
- **Volume**: Landed Unit Cost = Receive Line cubic volume / Receive Total cubic volume x Subtotal Expenses / Orderline Received Qty.
- **Weight**: Landed Unit Cost = Receive Line Weight / Receive Total Weight x Subtotal Expenses / Orderline Received Qty.

Each landed cost can be apportioned differently. For example, you can apportion a credit card surcharge by value, and freight by volume.

## Xero Workflow

Neto’s direct Xero accounting integration is able to receive purchase order expenses and apportioned cost prices. To make use of this functionality:

1.   - Purchase Tax Imports (All tax)
  - GST liability accounts

  Check the below default settings in Neto’s Xero integration to confirm they are correct:
2. Create expense accounts in Xero (if you haven’t already), and map them to Neto's expense accounts in the Xero integration.
3. Map the tax codes for expenses.

Expenses and landed costs are exported to Xero differently depending on the type of expense (apportioned or not) and who it is paid to (the product supplier or another party). The flowchart below demonstrates the different types of expenses added to a Neto purchase order, and the resulting bills in Xero.

**Please Note**: All products have their tax component removed and summarised into a single line item when exported to Xero. This is required by the [ATO for reporting on landed costs](https://www.ato.gov.au/law/view/document?docid=TXR/TR20068/NAT/ATO/00001#P1).

Expenses are added to either the product supplier bill (A) or their own separate bill (C & D).

All landed costs are added to the product lines when exported to Xero, so you won’t see a separate line item on the supplier bill (B). The exception is international apportioned expenses (E).

While they are still added to the orderlines cost, a negative entry is made in the same amount so that the product supplier bill is correct. The expense is also raised as a separate bill in Xero so it can be paid to the correct party.

## Xero Examples

Below are three examples of local expenses on purchase orders, and how they appear in Xero. International expenses are raised in a separate bill to the supplier you specify in the purchase order.

### Local Expenses

### Local Landed Cost

### Mixed Local Expense and Landed Cost