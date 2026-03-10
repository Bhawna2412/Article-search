---
title: "Return Merchandise Authorisation (RMA) Overview"
articleID: 649
category: "Use Neto > Sales Orders, Returns, and Credits > Returns, Credits, Refunds, RMAs"
knowledgeBase: "Neto By Maropost"
---

# Return Merchandise Authorisation (RMA) Overview

## Overview

An **RMA** (return merchandise authorisation) is the process of returning a product to receive a refund, replacement, or repair. While some returns are required by law, your own returns policy may allow replacement, refund or store credit for any reason.

In Neto, an RMA is also used for any general credit being applied to an order, even if the goods are not returned. Different outcomes are used to determine whether items need to be returned to stock.

> **Important:** RMAs should only be created for orders which are paid. If the order is unpaid you can cancel it instead.

## RMA Process

To return a product, a typical process is:

- The customer must call or email a support person within the online business. The support person helps to determine whether the product is indeed defective. This usually involves the customer answering several questions and following the support persons directions for testing the product in question. If the support person feels that the product is defective, the support person issues an RMA. Some merchants allow the customer to send an e-mail message requesting an RMA instead of having to call.
- The customer writes the RMA number on the outside of the box that the product is being shipped in. It is important to mail all the original boxes, manuals, and any other items along with the product. If a return is sent without an RMA number, the merchant can return the product to the customer or charge a restocking fee.
- The customer mails the product. Most merchants recommend using a shipping company that can track packages.
- Returned product is received, inspected, and deemed defective/fit for return.
- Credit, replacement item, or refund can be processed. Or if the item is not fault or was not in the condition it was originally sent in, it can be returned to the customer and the RMA can be closed.

RMA numbers are important to both the merchant and customer. An RMA number tells the merchant that a return is being made and offers protection against fraudulent returns.

The customer can use the RMA number to inquire on the progress of a return. For example, if the customer hasn't received any information about the return, the customer can call the merchant and use the RMA number as a reference.

## RMA Reasons

For reporting purposes, Neto allows you to assign individual reasons for RMAs.

Reasons are used for reporting purposes so that you can track why RMAs are being created. This data can then be used to audit your sales channels, shipping carrier, dropship supplier, and different products.

The following RMA reasons already exist in your system. You can also add your own RMA reasons by following the steps [below](https://galaxy.maropost.com/kb/articles/649-return-merchandise-authorisation-rma-overview#create-new-reasons-statuses-or-outcomes).

- Wrong Address
- Ordered Incorrectly
- Fitted Incorrectly
- Missing Component
- Defective Secondary Component
- Defective Primary Component
- Other
- Not Listed
- Lost In Transit
- Could Not Find Address
- Stolen
- Damaged In Transit
- Order Mistake
- Changed Mind
- Cannot Use
- Ordered Incorrectly
- Rough Handling/Misue
- Expectations Not Met
- Address Incorrect
- Instructions Not Followed
- Packed Incorrectly

## RMA Statuses

RMA statuses are used to organise RMAs by their stage in the process. This helps you stay on top of RMAs that need attention and quickly find any to be actioned.

You can also add your own RMA statuses by following the steps [below](https://galaxy.maropost.com/kb/articles/649-return-merchandise-authorisation-rma-overview#create-new-reasons-statuses-or-outcomes).

By default, the RMA statuses available are:

- No Return Required
- Awaiting info from customer
- Awaiting product return
- Item Received - Pending Outcome
- Item Received - Pending Repair
- Complete

## RMA Outcomes

The outcome of the RMA line is the most important field in the RMA. Outcomes determine what the end rs action is taken by the system. Once an outcome is selected, the status of the RMA line is automatically changed to complete.

You can also add your own RMA outcomes by following the steps [below](https://galaxy.maropost.com/kb/articles/649-return-merchandise-authorisation-rma-overview#create-new-reasons-statuses-or-outcomes).

The following outcomes are available by default:

| Outcome | Description | System Action |
| --- | --- | --- |
| Return to stock issue credit | Items returned to stock and customer is issued a credit. Used when the products are re-sellable or the customer changes their mind. | Adjustment note generated for credit amount and item returned to stock. Credit added to customer account. `Negative item invoice (stock adjustment) generated for accounting system.` |
| Write off issue credit or replacement | Item is written off and customer is issued a credit. Used when the product is defective or faulty. | Adjustment note generated for credit amount. Credit added to customer account. `Negative service invoice generated for accounting system.` |
| Issue Credit or Replacement | Customer issued a credit. Used when the product is not being returned to you, and you still wish to credit or refund. | Adjustment note generated for credit amount. Credit added to customer account. `Negative service invoice generated for accounting system.` |
| Return to customer | Item returned to customer and customer is issued a credit (if required). | Adjustment note generated for credit amount. Credit added to customer account. `Negative service invoice generated for accounting system.` |
| Send Replacement For Incorrect Item | Correct item sent to customer and customer is issued a credit (if required). | Adjustment note generated for credit amount. Credit added to customer account.`Negative service invoice generated for accounting system.` |
| Neto POS: Issue refund and return stock in store | Items are returned to stock and customer is issued with a refund in store. | Adjustment note generated for credit amount. `Negative item invoice (stock adjustment) generated for accounting system.` |
| Neto POS: Issue refund and write off stock | Items are written off and customer is issued with a refund in store. | Adjustment note generated for credit amount. `Negative service invoice generated for accounting system.` |

## Create new Reasons, Statuses or Outcomes

Reasons are used for reporting purposes so that you can report on why RMA's are being created. You can create your own RMA reasons/outcomes/status types, etc. by following these steps:

1. In your Neto control panel navigate to **Settings & Tools** > **All settings & tools**.
2. Under the **Returns & Disputes** section, click the option you wish to edit (reasons/ outcomes/statuses).
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ReturnsAndDisputesReasonsAndOutcomes.05T5g00000fbb3pEAA.png)
3. Click **Add New** in the top right hand side and create your new option. Some areas ask you to define a **Group** which allows you to further categorise issues within certain areas of your business.