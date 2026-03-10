---
title: "Understanding Purchasing, Receiving and Invoicing"
articleID: 373
category: "Purchase and Receiving > PO and Stock Receipt 2.0"
knowledgeBase: "Retail Express"
lastUpdated: 2025-12-11
---

# Understanding Purchasing, Receiving and Invoicing

You can understand the complete purchasing, receiving, and invoicing cycle to ensure proper inventory and financial management throughout the procurement process. This improves your retail operations by clarifying the relationship between purchase orders, stock receipts, and supplier invoices, with properly configured procurement workflows typically enabling better inventory accuracy and accounting reconciliation.

Understanding purchasing cycles involves recognizing the distinction between ordering, receiving, and invoicing stages, plus timing impacts on inventory valuation to help retail operators focus on the right end-to-end procurement workflows, ensuring your retail strategy consistently drives better operational accuracy and financial control outcomes.

## Multiple Stock Receipts and Invoices for a single PO

![New PO-invrec.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiTSEAY.jpg)
Multiple Stock Receipts can be created from a single Purchase Order, with the Invoice for each Stock Receipt created in a separate process. This is useful when you have different staff responsible for processing the stock and entering the invoice, or when your supplier sends stock in multiple shipments.

View Additional Details:[Purchasing, Receiving and Invoicing](https://galaxy.maropost.com/kb/articles/373-understanding-purchasing-receiving-and-invoicing)

| **Make Available** | **Finalise** |
| --- | --- |
| Products are received into Retail Express:  - Inventory count increases - Triggers a synchronisation of inventory with integrated web stores using - Updated quantity visible in POS - Stock ready to fulfil to customer | Finalises the Stock Receipt and Invoice, so that more Stock Receipts can be created in the future i.e. when using partial deliveries.  - Inventory is revalued if there is a difference between the Received Cost and Invoiced Cost |

You can control which staff profiles can perform either or both actions via Staff > Profile Security. We have two independant profile secuiry options: "Stock Receipt (Make Available Only)" and "Stock Receipt (Finalise invoice)". This gives granular control over which staff can enact the two step worklow, or if you want to disable it entirely simply ensure no one has access ot the "Make Available Only"  option.

Back to top

### Distributed Costs

When creating an Invoice for your Stock Receipt, you'll be able to enter your on-costs, such as freight, duty, or "other". These costs are applied to products and used to calculate the Cost of Goods Sold calculation.

You can control how the costs are allocated to each product using the Distribute Costs By drop-down on the Stock Receipt:

![mceclip0 - 2023-07-10T032559.054.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiTXEAY.jpg)
To understand the breakdown, we'll review a Purchase Order for $100, with $40 in Direct Costs.

| **Method** | **Details** |
| --- | --- |
| Value | Costs are distributed based on the value of the product compared to the total Purchase Order value.   - Total PO: $100 - Product A: 2 products for a total of $80, with Direct Costs of $32 ($80 is 80% of the total order value, and receives an 80% share of the Direct Costs) - Product B: 1 product for $20, with Direct Costs of $8 (20% of the total PO Value) |
| Weight | Costs are allocated depending on the weight of products, with heavier items receiving a larger share of the costs. At least one product on the Stock Receipt must have been configured with weight (maintained via the Edit Product screen).  - Total weight of the PO: 2kg - Product A weight: 2 products for 1kg total, direct costs $20 (50% of the total PO weight) - Product B weight: 1 product for 1kg total, direct costs $20 (50% of the total PO weight) |
| Quantity | Based on the quantity of that particular product compared with the total PO quantity.   - Total quantity on the order: 3 items - Product A quantity: 2 items, direct costs $26.80 (67% of the total PO quantity) - Product B quantity: 1 item, direct costs $12.20 (33% of the total PO quantity) |