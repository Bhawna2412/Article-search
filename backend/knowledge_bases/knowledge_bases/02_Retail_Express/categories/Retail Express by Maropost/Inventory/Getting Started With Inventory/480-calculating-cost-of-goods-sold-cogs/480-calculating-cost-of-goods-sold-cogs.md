---
title: "Calculating Cost of Goods Sold (COGS)"
articleID: 480
category: "Inventory > Getting Started With Inventory"
knowledgeBase: "Retail Express"
---

# Calculating Cost of Goods Sold (COGS)

You can maintain accurate financial reporting and margin analysis through understanding Cost of Goods Sold (COGS) calculations in **Retail Express**, which support precise profitability tracking and inventory valuation. This cost accounting comprehension helps retail operators monitor margins and make informed pricing decisions, with proper COGS understanding typically supporting better financial accuracy and improved profitability management across Australian retail operations.

COGS calculation in **Retail Express** enables retail operators to track actual product costs and understand margin performance across sales transactions, helping ensure accurate financial reporting and supporting strategic pricing decisions. This cost tracking helps ensure your retail operations maintain accurate margin visibility and support effective financial management throughout retail operations.

In order to accurately calculate costs, Retail Express applies a **weighted average** model of calculations. This weighted average occurs automatically as transactions are created and processed. If Retail Express were to use just the last received price, the costs would not accurately reflect the costs of all of the units in stock.

## How COGS is calculated

As transactions are processed the COGS value will update accordingly:

|  |  |
| --- | --- |
| New Sale created | COGS is set as the price at the store where the order is created |
| Sale is Fulfilled | Cost of Goods updated as the price at the Outlet fulfilling the goods  > **Note:** This average is weighted if there are partial fulfilments at different costs |
| Transfer is created | The cost of the incoming stock is the current Average Weighted Cost at the Outlet sending the stock. |
| Stock is received (Transfer or Purchase Order) | The cost at the Receiving Outlet is updated based on the cost of the incoming Stock (in local currency), including Direct Costs |

> **Note:** Gross Profit is calculated based on the Cost of Goods Sold (COGS) and the Sell Price set against each item on a sale (not the current price).

### Example of COGS Calculations:

Starting with a brand new product with zero inventory (to demonstrate the increase/decrease accordingly):

1. Product A has a **Weighted Avg Buy** Price of $25, and a COGS of $25![Calculating Cost of Goods Sold (COGS) 1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CalculatingCostofGoodsSoldCOGS1.05T5g00000pC2JEEA0.png)
2. A **PO is ordered****and received** at Bondi with the Supplier Ex price at $30
3. **Buy Price Ex updated** for Bondi, **COGS updated** to $30![Calculating Cost of Goods Sold (COGS) 2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CalculatingCostofGoodsSoldCOGS2.05T5g00000pC33kEAC.png)
4. Chapel St creates and **receives a PO** with the Supplier Ex at $25
5. **Buy Price Ex** updated for Chapel St, **COGS Updated** to $25 for Chapel St, remains at $30 for Bondi and the remaining outlets have **averaged COGS**![Calculating Cost of Goods Sold (COGS) 2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CalculatingCostofGoodsSoldCOGS2.05T5g00000pC33kEAC.png)
  ![Calculating Cost of Goods Sold (COGS) 5](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CalculatingCostofGoodsSoldCOGS5A.05T5g00000pC35REAS.png)
6. **A new sale is created** at Oxford St, sourcing the product from Chapel St (sale unfulfilled)
  ![Calculating Cost of Goods Sold (COGS) 2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CalculatingCostofGoodsSoldCOGS2.05T5g00000pC33kEAC.png)
7. Sale is fulfilled from Chapel St, **COGS for the sale** is as per Chapel St
[https://ress.zendesk.com/hc/article_attachments/360002251516/mceclip5.png](https://ress.zendesk.com/hc/article_attachments/360002251516/mceclip5.png)

### []()Frequently Asked Questions

#### [Why doesn't Retail Express use the price when the stock was last received](https://galaxy.maropost.com/kb/articles/480-calculating-cost-of-goods-sold-cogs#not-received-cost)

If Retail Express were to use the last price from the Stock Receipt, it can potentially over/undervalue the COGS.

For example, if you have 1 in stock which was $11 and you receive another in at $10, the total cost of the 2 is $21, which averages out to $10.50 each.

If Retail Express were to use the last cost, then the last cost in that example would be $10, meaning both items at $10 is $20 total, which means your total costs for that product is $1 less than what you actually spent.

#### [Example: Weighted Average Cost Example](https://galaxy.maropost.com/kb/articles/480-calculating-cost-of-goods-sold-cogs#weighted-average-cost)

|  |  |
| --- | --- |
| Batch 1 ordered | - Ordered: 10 items at $10 each - Received with a direct cost (freight) of $10 for the order - $10 direct cost is divided among the 10 items ($1 each)  COGS: Purchase Order shows COGS per item at $11.00 each - $110.00 total COGS If 5 of those items are sold, the COGS will show $11.00. There are 5 items on hand still at $11 each ($55 total COGS). |
| Batch 2 ordered | - Ordered: 10 items at $20 each (price rise from the supplier) - Received with a direct cost (freight) of $20 for the order - $20 direct cost is divided among the 10 items ($2 each)  COGS: Purchase Order shows COGS per item at $22 each (buy price plus direct cost per product) |
| Effect on COGS in Retail Express | - If all 10 from Batch 1 had sold would only be 10 items from Batch 2 in stock, so COGS would be $220 total (10 items at $22 each). - There are 5 items from Batch 1 that remain, so in total 15 items in stock (5 from Batch 1 at $11 each, 10 from Batch 2 at $22 each). The COGS for each item is added together and averaged to determine the Weighted Average Cost:  - (Qty Remaining from Batch 1 x Batch one COGS) + (Qty Batch 2 x Batch 2 COGS) divided by Total Qty = Weighted Average Cost (WAC)   - (5x $11) + (10 x $22) / 15 = WAC   - 55 + 220 / 15 = $18.33  The COGS for each item is now valued at $18.33. |

#### [Example: Outlet Specific Pricing](https://galaxy.maropost.com/kb/articles/480-calculating-cost-of-goods-sold-cogs#outlet-specific-pricing)

Outlet Specific COGS is calculated as the weighted average of the Outlet level COGS Pricing (to maintain a specific store?s own/independent COGS value. The calculation works much like the above example, but each store has its own independent WAC to represent what ?that store? has paid for items and to maintain its own inventory valuation separate from other stores.

Valid and common scenario?s here is that Store A may be geographically much closer to the supplier of a product than say, Store B. Store B accrues a higher freight charge than Store A and so can expect a higher WAC as compared to Store A. This could also occur if one store simply buys in greater quantities than another, and thus receives a supplier order discount due to the volume purchased. ?That store? stands to benefit by way of a lower WAC compared to the other store.

Example: If you have a quantity of 3 at one Outlet with a COGS of $10, and another quantity of 3 available at a second Outlet with a COGS of $12, the global total QTY is 6, with a COGS of $11.

*3 at 10, plus 3 at 12, divided by the total qty.*

(3 x $10) + (3 x $12) / 6 = Weighted Average COGS $11.

When an outlet sells a product, it?s that store's specific COGS that is stamped on the sale.

Outlet specific pricing is also supported for POS Price/Sell price. This is to allow for stores to sell at different prices (again for various reasons but often to cover additional freight costs to supply the goods to their store). This is the ?pink? pricing in the Retail Express back office. Whilst it?s common to add/remove this outlet specific pink POS pricing, it is rare, and *not recommended*, to override the calculated buy ex/direct costs against a product that has already been received in the system. Users should tread with caution and be aware that doing so removes the record of the actual weighted average cost price that the system had determined.

Only if a significant error was made on the receipt process and needs amending is this suitable. Standard practice for ?price changes? is to change the ***Supplier Buy*** price which is used for *future* purchase orders. Else, by changing ***Buy Ex*** to represent the new supplier price, you?re also updating the COGS of the items ?already on hand? even though they were rightly purchased at the previous supplier price.