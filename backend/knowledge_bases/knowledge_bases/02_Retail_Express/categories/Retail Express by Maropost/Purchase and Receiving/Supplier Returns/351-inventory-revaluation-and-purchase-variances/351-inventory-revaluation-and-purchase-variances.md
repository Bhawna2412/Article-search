---
title: "Inventory Revaluation and Purchase Variances"
articleID: 351
category: "Purchase and Receiving > Supplier Returns"
knowledgeBase: "Retail Express"
---

# Inventory Revaluation and Purchase Variances

You can understand how credit notes impact inventory value through either returning physical inventory or revaluing kept inventory, helping ensure accurate stock valuation using weighted average buy price calculations. This improves your retail operations by automatically handling purchase variances when supplier credits differ from inventory adjustments, with properly configured inventory revaluation workflows typically ensuring accurate cost of goods sold reporting and seamless accounting integration without manual intervention.

Understanding inventory revaluation involves recognizing weighted average buy price calculations, total credit versus applied credit differences, and purchase variance scenarios to help retail operators focus on the right inventory valuation workflows, ensuring your retail strategy consistently drives better financial accuracy and stock value management outcomes.

How Credit Notes impact the inventory value depends on your choice of claim:

- Return From is Available or Faulty = return the inventory
- Return From is None = keep the inventory but revalue it

Retail Express uses an Average Weighted Buy Price to calculate the Inventory Value.

When a Credit Note is processed against a Supplier Return, we remove the inventory at the current Average Weighted Buy Price for the Outlet chosen (called **"Applied Credit"**). The amount your Supplier actually has credited (called **"Total Credit"**) may be different to this applied credit. If that's the case, we are left with a **Purchase Variance**.

If you purchase the same item at differing prices, it's very likely that your Average Weighted Buy Price is different to the amount you've been credited.

Additionally, we are also left with a Purchase Variance if you have been credited for more items than you have in stock. Any items you have in stock will be removed at their Average Weighted Buy Price, and the balance will be applied as a Purchase Variance.

Purchase Variances are sent to Xero and MYOB if using anintegrated accounting package

## Key Concepts

|  |  |
| --- | --- |
| **Term** | **Details** |
| Weighted Average Buy Price | An average of the Buy Price each time the product is ordered and received; used to calculate Stock Value |
| Total Credit | The credit amount received from the Supplier |
| Applied Credit | The amount the inventory has been reduced by (via the Average Weighted Buy Price) applicable for this outlet. |
| Purchase Variance | Occurs when there is a difference between the credit from the supplier (Total Credit) and the adjustment to the inventory (Applied Credit) |

## Returning Inventory

Selecting a "Return From" option of Available or Faulty indicates that stock will be removed from Retail Express.

When returning inventory we essentially process a "negative stock receipt" i.e. Stock is removed from the inventory at the current average weighted price. The remaining stock is not revalued.

**New Inventory Value = Current Inventory Value - (Return Qty x Weighted Average Buy Price)**

Example:

We need to process a Supplier Return for 5 products. These products were purchased at $14 each, but in the past, we had been able to buy the products at a discounted price. As a result, the Average Weighted Buy Price is only $12.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **Action** | **Weighted Avg Buy Price** | **SOH Qty** | **SOH Value** | **Credit applied** | **Variance** |
| Current Stock | $12 | 10 | $120 |  |  |
| Return 5 items - $70 credit (5 items at $14 per item) | $12 | **5  ** | **$60  ** (5 x $12 Avg Buy) | $70 | $10 |

## Revaluing Inventory

Selecting a "Return From" option of "None" indicates that you want to keep the inventory, but the Buy Ex price will need to be revalued to ensure an accurate stock value (based on the credit received).

To revalue the Inventory the following inventory movements will occur:

- Negative Stock Adjustment to remove items at the Original Buy Price (incorrect price from the Supplier)
- Positive Stock Adjustment to re-add items at the Corrected Buy Price (Original Buy Price minus the Claim Amount)

![mceclip0 (78).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppQZcEAM.jpg)[Inventory Movement Log showing an Inventory Revaluation (click to view full size)](https://ress.zendesk.com/hc/article_attachments/4407450885007/mceclip0.png)

Example:

We normally purchase products for $15 each, however, the supplier incorrectly charged us $17. We need to claim back $2 per item from the supplier.

- Original Buy Price = $17
- Claim Amount = $2
- Corrected Buy Price = $15

This impacts the Inventory Valuation as follows (this entire process takes place in seconds after the Supplier Return has been processed).

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Action** | **SOH** | **Rtn Qty** | **Price per Item** | **Inventory Amount** | **Stock Value** | **Weighted Avg Buy Price** |
| Before | 10 |  |  |  | $150 | $15 |
| Negative Adjustment |  | **-5  ** | $17 (Original Buy Price) | **-$85  ** | **$65  ** | **$13  ** |
| Positive Adjustment | ** ** | **5  ** | $15 (Corrected Buy Price) | **+$75  ** | **$140  ** | **$14  ** |
| After | 10 | ** ** |  | ** ** | $140 | $14 |

In this example, the Applied Credit was $10 (5 items at $2 per item). As this matches the Total Credit Amount from the Supplier no variance is declared.

## Purchase Variances

A **Purchase Variance **occurs if there is a difference between the credit from the supplier and the adjustment to the inventory (called "**Applied Credit**"). This is likely to occur given the Average Weighted Buy Price is likely to differ from the Original Buy Price as prices fluctuate.

Purchase Variances are sent to integrated Accounting Packages for Supplier Credits (refer to Understanding Supplier Returns for more details).

In the example below, products are purchased from the supplier but returned as they're faulty.

The Average Weighted Buy Price of the products is different which means when the stock is revalued there is a variance.

|  |  |  |  |
| --- | --- | --- | --- |
| **Action** | **Weighted Buy Price** | **SOH Qty** | **SOH Value** |
| 10 products purchased for $10 each | $10 | 10 | $100 |
| 10 products purchased for $11 each (price increase from supplier) - $110 total New Average Weighted Buy price is calculated:  - 10 x $10 products plus 10 x $11 products = $210 - $210/20 products = $10.50 each | $10.50 | 20 | $210 |
| Products are deemed to be faulty, Supplier Return created:  - Returned products at $11 each - 10 products - Stock value reduced by $110 - Credit received from Supplier for $110 (Total Credit) - Applied Credit calculated by the reduction of stock: 10 units at $10.50 each, $105 reduction - **Purchase Variance (remaining credit from the supplier) is $5** | $10.50 | 10 | $105 |