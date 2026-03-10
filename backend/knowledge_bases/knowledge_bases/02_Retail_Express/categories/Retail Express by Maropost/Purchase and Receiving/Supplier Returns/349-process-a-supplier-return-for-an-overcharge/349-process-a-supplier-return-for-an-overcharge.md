---
title: "Process a Supplier Return for an Overcharge"
articleID: 349
category: "Purchase and Receiving > Supplier Returns"
knowledgeBase: "Retail Express"
---

# Process a Supplier Return for an Overcharge

You can process supplier returns for overcharges by claiming the price difference without physically returning products, helping correct inventory valuation when suppliers invoice at incorrect prices. This improves your retail operations by automatically revaluing stock using weighted average cost calculations, with properly configured overcharge returns typically ensuring accurate inventory values and correct cost of goods sold reporting without manual calculations.

Understanding overcharge supplier returns involves recognizing "Return From: None" settings, claim amount calculations for price differences, and automatic inventory revaluation that removes and re-adds stock at the correct price to help retail operators focus on the right financial correction workflows, ensuring your retail strategy consistently drives better inventory valuation accuracy and supplier billing accountability outcomes.

If your supplier has overcharged you for a product you can use the Supplier Returns feature to process a claim for the difference e.g. if you normally pay $50 for a product but you were charged $60.

## Adding Items to the Return

When you add the items to the return you will need to add the product as per the following:

![mceclip5 (12).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWbjEAE.jpg)

|  |  |
| --- | --- |
| **Field** | **Details** |
| Return From | None - in this example we're not returning any stock to the supplier |
| Return Reason | We recommend creating a custom Return Reason for "Overcharge" or equivalent |
| Original Item Buy Ex | The overcharged amount you were incorrectly invoiced for the product e.g. $60 |
| Item Claim Amount Ex | The balance you're claiming from the supplier for the overcharge e.g. $10 ($60 - $50 = $10) |

## Inventory Movements

Retail Express uses a weighted average cost method to calculate the Cost of Goods Sold (COGS). If the products were purchased at an incorrect price the stock will be valued incorrectly.

To resolve this, Retail Express recalculates the inventory when an overcharge is processed via Supplier Returns:

- Stock is removed from the Inventory at the incorrect price
- Stock is readded to the Inventory at the correct price

This happens automatically and within seconds - no manual calculations required!

![mceclip0 - 2023-07-09T000642.130.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWYREA2.jpg)
You can use the Inventory Movement Log to view the Inventory Movements associated with a Supplier Return. Two entries will be recorded - one for the removal of stock, and one for the readding of stock.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Action** | **Return Status** | **Return From** | **Return Qty** | **Available** | **Faulty** | **On Rtn** |
| Create Return | Incomplete | None | 5 | 10 | 0 | 0 |
| Start Return | In Progress | None | 5 | 10 | 0 | 0 |
| Apply Credit | In Progress | None | 5 | **-10 ***** *** **+10 ***** *** | 0 | 0 |
| Finalise Return | Finalised | None | 5 | 10 | 0 | 0 |