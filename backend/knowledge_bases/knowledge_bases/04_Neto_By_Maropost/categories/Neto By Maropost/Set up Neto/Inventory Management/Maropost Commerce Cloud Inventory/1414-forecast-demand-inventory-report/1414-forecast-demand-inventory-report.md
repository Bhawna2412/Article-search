---
title: "Forecast Demand Inventory Report"
articleID: 1414
category: "Set up Neto > Inventory Management > Maropost Commerce Cloud Inventory"
knowledgeBase: "Neto By Maropost"
---

# Forecast Demand Inventory Report

The forecast demand report estimates when stock needs to be re-ordered and how much. Calculations for the final 3 columns of the report are explained below.

## Est Re-Order Date

The **Est Re-order Date** predicts when you will need to order inventory to meet demand. To calculate this date, several factors are taken into account:

- Total stock level (current stock on hand and any incoming stock on purchase orders).
- How long until you sell out of them based on the current sales per day.
- Supplier lead time.

The estimated re-order date cannot be in the past, so at a minimum it display the current date.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/002ForecastDemandInventoryReport002.05T5g00000VJo0WEAT.png)
The incoming quantity in this calculation is the quantity ordered on the purchase orders, when the due date:

- Is not filled.
- Or, it's today or tomorrow, and before the initial estimated reorder date.

If the purchase order due date is outside the estimated reorder date range, then the incoming quantity will be 0, even if you have pending purchase orders.

![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/0001ForecastDemandInventoryReport.05T5g00000VJo0bEAD.png)

## Est Re-Order Qty

The estimated re-order quantity is the amount of stock that you need to purchase to meet demand.

![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/0000003ForecastDemandInventoryReport000003.05T5g00000VJo0gEAD.png)
Although the quantity on back orders aren't shown as a column on the forecast demand report, it is taken into account when calculating the estimated re-order quantity. Also of note:

- If sales per day is not equal to 0.
- And lead time is 0 days.
- And the backorder quantity is 0.

Then the estimated reorder quantity is calculated as 1 (instead of 0).

## Emergency Re-Order Qty

The emergency re-order quantity is used when the est re-order date is less than the lead time. It tells you that you need to order extra inventory to make sure you don't run out of stock before the next stock shipment can arrive.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/00004ForecastDemandInventoryReport.05T5g00000VJo0lEAD.png)
**Please Note**: **|Available Qty|** is used to represent a positive number, even when quantity on hand is negative. For example, if quantity on hand is -8, the |Available Qty| will be 8.

If there are **no** open purchase orders for this product:

- When Available Qty is greater than 0, the emergency reorder quantity = 0.
- When Available Qty is 0, the emergency reorder quantity = sales per day.
- When Available Qty is negative, the emergency reorder quantity = |Available Qty|.

If there **are** open purchase orders for this product:

- When quantity on hand is greater than or equal to 0, and the incoming quantity is due **before** the estimated reorder date, the emergency reorder quantity = 0.
- When quantity on hand is greater than or equal to 0, and the incoming quantity is due **after** the estimated reorder date, the emergency reorder quantity = sales per day multiplied by the out of stock period.
- When quantity on hand is less than 0, and the incoming quantity is due before the estimated reorder date, emergency reorder quantity = |Available Qty|.
- When quantity on hand is less than 0, and the incoming quantity is due after the estimated reorder date, the emergency reorder quantity = Sales per day multiplied by Out of stock period + |Quantity on hand|.

## Additional Information

### Incoming Quantity

The incoming quantity reflects the amount of stock that is expected to arrive before the estimated reorder date. This can help you determine if you will need to order additional stock, or if any existing purchases orders are sufficient. If the incoming quantity displays a 0, there is either no stock ordered, or stock is not arriving until after the estimated reorder date.