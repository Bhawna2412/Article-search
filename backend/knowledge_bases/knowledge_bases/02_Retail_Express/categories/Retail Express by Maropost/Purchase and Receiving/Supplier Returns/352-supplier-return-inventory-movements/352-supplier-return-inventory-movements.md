---
title: "Supplier Return Inventory Movements"
articleID: 352
category: "Purchase and Receiving > Supplier Returns"
knowledgeBase: "Retail Express"
---

# Supplier Return Inventory Movements

You can track supplier return inventory movements to understand how returns impact stock levels across different return scenarios, helping ensure accurate inventory valuation throughout the return process. This improves your retail operations by providing visibility into on-return quantities, available stock adjustments, and faulty stock handling, with properly configured inventory movement tracking typically enabling better audit trails and accurate financial reporting for supplier claims.

Understanding supplier return inventory movements involves recognizing different return-from options, inventory status changes through return stages, and the inventory movement log entries to help retail operators focus on the right stock tracking workflows, ensuring your retail strategy consistently drives better inventory accuracy and supplier return management outcomes.

Inventory levels will be updated throughout the process of using Supplier Returns. Inventory movements are triggered once a Supplier Return moves into the "In Progress" state by starting the Supplier Return.

Inventory movements depend on the Return From location selected, and if applying a Credit Note or cancelling the Return Item.

These movements can be reported using the Inventory Movement log.

![mceclip0 - 2023-07-10T023024.298.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiGsEAI.jpg)[Click to view full size](https://ress.zendesk.com/hc/article_attachments/4407426244623/mceclip0.png)

## Return Items have been Credited

When a Return Item has been credited, inventory movements will occur depending on the "Return From" selection:

- Available or Faulty - crediting the stock will remove the stock from inventory
- None - the stock will be removed from the inventory and re-added (refer to the Inventory Revaluation section below for more detail on this process)

**Return From: Available**

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Action** | **Return Status** | **Return From** | **Return Qty** | **Available** | **Faulty** | **On Rtn** |
| Create Return | Incomplete | Available | 5 | 10 | 0 | 0 |
| Start Return | In Progress | Available | 5 | **5  ** | 0 | **5  ** |
| Apply Credit | In Progress | Available | 5 | 5 | 0 | **0  ** |
| Finalise Return | Finalised | Available | 5 | 5 | 0 | 0 |

**Return From: Faulty**

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Action** | **Return Status** | **Return From** | **Return Qty** | **Available** | **Faulty** | **On Rtn** |
| Create Return | Incomplete | Faulty | 5 | 10 | 5 | 0 |
| Start Return | In Progress | Faulty | 5 | 10 | **0  ** | **5  ** |
| Apply Credit | In Progress | Faulty | 5 | 10 | 0 | **0  ** |
| Finalise Return | Finalised | Faulty | 5 | 10 | 0 | 0 |

**Return From: None**

When selecting "None" as your "Return From" option, a negative adjustment will be processed at the Incorrect Buy Price, following by a positive adjustment at the Correct Buy Price.

Refer to the Inventory Revaluation and Purchase Variances article for more detail on this process.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Action** | **Return Status** | **Return From** | **Return Qty** | **Available** | **Faulty** | **On Rtn** |
| Create Return | Incomplete | None | 5 | 10 | 0 | 0 |
| Start Return | In Progress | None | 5 | 10 | 0 | 0 |
| Apply Credit | In Progress | None | 5 | **-10  ** **+10  ** | 0 | 0 |
| Finalise Return | Finalised | None | 5 | 10 | 0 | 0 |

## Return Items have been Cancelled

When the Return Item is cancelled, if a "Return From" option has been selected it will be returned back to the original Inventory Bucket. If the "Return From" option is "None", no inventory movements will occur.

**Return From: Available**

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Action** | **Return Status** | **Return From** | **Return Qty** | **Available** | **Faulty** | **On Rtn** |
| Create Return | Incomplete | Available | 5 | 10 | 0 | 0 |
| Start Return | In Progress | Available | 5 | **5  ** | 0 | **5  ** |
| Cancel Item | In Progress | Available | 5 | **10  ** | 0 | **0  ** |

**Return From: Faulty**

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Action** | **Return Status** | **Return From** | **Return Qty** | **Available** | **Faulty** | **On Rtn** |
| Create Return | Incomplete | Faulty | 5 | 10 | 5 | 0 |
| Start Return | In Progress | Faulty | 5 | 10 | **0  ** | **5  ** |
| Cancel Item | In Progress | Faulty | 5 | 10 | **5  ** | **0  ** |

**Return From: None**

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Action** | **Return Status** | **Return From** | **Return Qty** | **Available** | **Faulty** | **On Rtn** |
| Create Return | Incomplete | None | 5 | 10 | 0 | 0 |
| Start Return | In Progress | None | 5 | 10 | 0 | 0 |
| Cancel Item | In Progress | None | 5 | 10 | 0 | 0 |