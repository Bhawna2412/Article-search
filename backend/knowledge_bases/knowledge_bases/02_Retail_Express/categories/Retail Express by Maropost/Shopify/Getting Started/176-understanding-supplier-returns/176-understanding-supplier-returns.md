---
title: "Understanding Supplier Returns"
articleID: 176
category: "Shopify > Getting Started"
knowledgeBase: "Retail Express"
---

# Understanding Supplier Returns

You can process supplier returns in **Retail Express** to manage defective inventory, track vendor credit, and maintain accurate stock levels when returning products to suppliers. This capability helps improve inventory accuracy and vendor relationship management by properly documenting return transactions, tracking credits owed, and ensuring financial records reflect actual inventory holdings across your retail operations.

Setting up supplier returns involves understanding return workflows, configuring credit note handling, and establishing procedures for inventory adjustment. When properly managed, supplier returns typically lead to better inventory accuracy, improved vendor accountability through documented returns, and more accurate financial reporting for cost of goods and inventory valuation.

A Supplier Return is the process of a claim being made to a Supplier.

You might create a Supplier Return to manage credit notes for faulty or damaged goods, where you have been short shipped or overcharged, or to process a sale or return (to return stock for full credit after a specific time frame).

Depending on your claim, you might have different desired outcomes:

- 
- 
- 

## Key Concepts

![rtaImage - 2023-07-10T033316.720.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiTYEAY.jpg)
A **Supplier Return **is a central document used to manage multiple **Return Items **you want to claim from your supplier.

One Supplier Return can be associated with multiple **Credit Notes**. As you make a claim, your Suppliers may issue you with a Credit Note for one portion of the claim, before deciding on the remainder of the items. They may even choose to reject the claim, in which case you may **cancel the item** and write it off at your own cost.

## Stages of processing a Supplier Return

|  |  |
| --- | --- |
| **Stage** | **Details** |
| Incomplete | The Return has been created but it's in a "Draft" stage and still available to edit. Items can be added to the return, but no stock movements or cost adjustments will occur |
| In Progress | Once a Supplier Return has been started, inventory is moved from the selected "Return From" location (Available or Faulty) to "On Return". At this point, nothing is sent to your accounting system. Depending on the supplier's decision, you now have two options:  - You can apply one or more Credit Notes against Return Items. In that case, inventory will be removed from "On Return" and the Credit Notes will be sent to your Accounting Platform (support for the Xero and MYOB cloud integrations will be available in the near future) - You can cancel the Return Items, and the inventory will be moved back to the original stock status |
| Finalised | All Return Items have been processed |
| Cancelled | All Return Items have been cancelled |

## Inventory Movements

While waiting for your Supplier's decision on the claim, you can isolate the inventory using the "On Return" stock bucket.

When you create a Supplier Return, your inventory may be either:

- Available e.g. you've noticed damage or short shipped items when receiving a Purchase Order
- Faulty e.g. the customer has returned a product due to a manufacturer fault
- Neither - in some cases you may not want to change your inventory at all, for example, you've received the correct items but have been charged an incorrect price

Using the "Return From" field you can isolate the inventory and move it from Available or Faulty to "On Return". The stock will be moved automatically as you begin processing your Supplier Return.

If you apply a Credit Note against a Return Item, we adjust the inventory out of the "On Return" bucket to reduce the Stock on Hand. If you cancel the Return Item, we move the inventory out of the On Return Bucket back to its original location.

These movements will be displayed in the Inventory Movement Log - click here to view more detailed information on these Inventory Movements related to Supplier Returns.

![rtaImage - 2023-07-10T033323.864.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiVJEAY.jpg)

## Inventory Revaluation

Retail Express uses an Average Weighted Buy Price method for inventory valuation.

Supplier Returns will impact your Inventory Value depending on the "Return From" selection:

|  |  |
| --- | --- |
| **Return from** | **Inventory Value** |
| Available or Faulty | Items are removed from Inventory at the Current Average Weighted Buy Price. |
| None | The inventory value is revalued, removing the products at the incorrect price and re-adding the products at the correct price |

The amount the overall stock value changes is considered the **"Applied Credit"**. If the Total Credit Received is different to the Applied Credit, we are left with a **"Purchase Variance"**.

Variances are likely to occur, given the charged price from the supplier can be different from the Average Weighted Buy Price (where the Buy Price has been averaged as prices fluctuate).

For detailed information, including examples, please refer to the articles Inventory Revaluation and Purchase Variances.

## Accounting Integrations

Supplier Returns will send data to your accounting system when the Credit Note is processed (not when creating a Supplier Return).

When a Supplier Credit/Credit Note is created, the following information is sent to accounting:

- Adjustments to inventory/stock value (the Applied Credit)
- Unapplied credits (Purchase Variance)
- Total Credit Note Value (sum of the Applied Credit and the Purchase Variance)

One Supplier Credit is sent per Credit Note processed, summarised as a total (not per individual product):

- Adjustment for the Applied Credit Value is sent to the Inventory account
- Leftover credit, the Purchase Variance, is sent to the Purchase Variance account

Before you can begin using the Supplier Credit integration, you will need to update your Xero/MYOB Cloud Integration settings or download and import the Accounting Data Export Setup Files again.

Supplier Returns (including Purchase Variances) will not synchronise to your accounting package until you have configured these settings.

### Xero / MYOB Cloud Integration

1. Navigate to **Settings > Integrations > Xero** or **MYOB** (depending on which integration you have enabled)
2. Tick **Include Supplier Returns in Purchases**
  ![rtaImage - 2023-07-10T033330.359.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgiUEAQ.jpg)
3. Click the **Accounts **tab
4. Select a **Purchase Variance **account from the dropdown
  ![rtaImage - 2023-07-10T033334.068.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiRIEAY.jpg)
5. Click **Save All**

### MYOB Accounting Data Export

1. Navigate to **Settings > Integrations > Accounting Data Export**
2. Click Download Setup Files
3. Follow the steps in the following article

## Limitations

When processing a Supplier Return there are some limitations, including:

- Searching for items to add to Supplier Returns is only available using product codes (Product ID, Supplier SKU, Supplier SKU 2, Manufacturer SKU or Barcode); you cannot search by description, custom fields or any other field
- The tax setting automatically applies to all items on a Supplier Return, if you need to process Returns for items that include and exclude tax, please create two separate Supplier Returns
- We don't offer the ability to credit additional charges such as freight, duty or other miscellaneous costs ? we recommend entering these directly into your Accounting platform
- We don't offer the ability to convert foreign currency Buy Prices or add Discounts to Supplier Returns ? we recommend overwriting the values to align with the correct local cost of the items (link to FAQ)