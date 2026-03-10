---
title: "Trading while performing a Stocktake"
articleID: 424
category: "Inventory > Stock Take and Stock Adjustments"
knowledgeBase: "Retail Express"
---

# Trading while performing a Stocktake

You can maintain business continuity during stocktakes by implementing strategic workflows that account for sales processed during inventory counts, ensuring accurate stock adjustments even when trading during stocktake hours. This flexible stocktake approach helps retail operators avoid business disruption while maintaining inventory accuracy, with properly configured update methods typically achieving reliable stock reconciliation despite concurrent trading activity.

**Retail Express** provides multiple stocktake update methods and tracking tools that enable Australian retail operators to manage inventory counts during trading hours through systematic variance calculations and sales tracking. Understanding the relationship between absolute and variance update methods, combined with effective use of the Inventory Movement Log, helps ensure your retail operations achieve accurate stocktake results while maintaining customer service and sales performance.

To make things easier it's typically recommended to perform a Stocktake when your stock levels aren't fluctuating i.e. out of hours.

However sometimes this is not always an option, and the stocktake is required to be performed during trading hours. In these cases, we have a series of recommendations for you to follow, covered further below.

## Tips for Trading while performing a Stocktake

- The Stocktake Update Method you select depends on whether you counted stock before or after units have been sold
- Separate the stock you've already counted vs not counted
- Download the Stocktake file before you start counting - this gives you a "before" value
- Process your Stocktake in smaller batches - use the Stocktake filters
- Use the Inventory Movement Log to track which products were sold

## []()Selecting a Stocktake Update Method

The Stocktake Update Method defines how stock should be adjusted - using the exact number of products you counted during the stocktake, or the variance detected during the count.

**Before the stock has been sold**

The below example demonstrates the impact of selecting each method if the count was performed *before* units of stock have been sold.

|  |  |
| --- | --- |
| **Absolute** | **Variance** |
| Retail Express shows 7 Available for product A.  - One unit is sold before being counted (Retail Express now shows 6) - Your count: 3 - Stocktake uploaded with a count of 3  New Available Value: 3 | Retail Express shows 7 Available for product A.  - One unit is sold before being counted (Retail Express now shows 6) - Your count: 3 - Stocktake uploaded with a count of -4 variance  New Available Value: 6 (6-4 = 2) |
|  |  |

**After the stock has been sold**

The below example demonstrates the impact of selecting each method if the count was performed after units of stock have been sold

|  |  |
| --- | --- |
| **Absolute** | **Variance** |
| Retail Express shows 7 Available for product A.  - Your count: 4 - One unit is sold after being counted (Retail Express now shows 6, in reality, it's 3) - Stocktake uploaded with a count of 4  New Available Value: 4 | Retail Express shows 7 Available for product A.  - Your count: 4 - One unit is sold after being counted (Retail Express now shows 6, in reality it's 3) - Stocktake uploaded with a count of -3 variance  New Available value: 3 (6-3 = 3) |
|  |  |

## []()Process Stocktake in smaller groups of products

As a way of simplifying the process of accounting for sales during a Stocktake, it's recommended to break the Stocktake down into smaller groups of products, rather than counting the entire store in one process.

When you trade while doing Stocktake, you'll need to keep track of what products are sold so you can ensure the products are accounted for in your count (we'll explain how to do this further below). If you're counting a smaller group of products, there's less to keep track of (and much easier to process).

The Retail Express Stock Take feature has the ability to filter by Product Type and Supplier, and you can even filter down to a Product PLU using a Manufacturer SKU to limit to a single style only.

![stocktake_filters.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiMgEAI.jpg)

## []()Track which products were sold

The most important thing is to track which products have been sold during the Stocktake so you can adjust your count as required.

The easiest method for this is to use the Product Sales Report within Retail Express. Using this report you can filter on the Date/Time and Outlet to obtain a list of products that were sold during the time a stocktake was taking place.

1. Navigate to **Reports > Product Performance > Product Sales Report**
2. Enter the **Date From **and **Date To **values based on the time frame the Stocktake was being processed
3. Use the **Refine Search **section to filter your products

> **Note:** Breaking down the stocktake into smaller groups (as covered earlier in this article) will make it easier to identify these times and reduce the amount of adjustments that may need to be entered.

4. Select the **Outlet **the Stocktake was completed for
5. Click **Search**
6. To **export** the file click the Excel button in the top righthand corner
  ![mceclip1 - 2023-07-10T025552.271.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphW2EAI.jpg)

The results of this report will be used in the next step.

![mceclip0 - 2023-07-10T025557.268.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiMlEAI.jpg)

## []()Performing inventory corrections

Once you have a list of what stock was modified during the course of the stocktake you will need to determine the action you will take to correct your inventory.

- **Modify the stocktake values** before authorising/uploading the Stocktake
- Authorise/upload the stocktake as-is, and then **re-perform a Stocktake for affected products only**

For example, in the following scenario, the staff have already counted an individual product during the stocktake.

- Product A has an inventory level in Retail Express of **5 Available, 1 allocated**
- Stocktake staff are counting **Available Only** (i.e. Stocktake Method = Adjust Available)
- After the sale was processed the stock levels in Retail Express are 4 Available, 1 allocated

|  |  |
| --- | --- |
| **Stocktake Upload** | **Effects** |
| Stocktake uploaded as-is with a count of 5 | The stock expected and the stock counted at the same time was 5,  resulting in no variance. No stock adjustment is required and will not take place. As no adjustment takes place, the stock level will remain as 4 in Retail Express i.e. the current stock level after the sale.  **No further action is required.** |
| Stocktake amended with a count of 4 | If the count of 4 is entered, and there were 5 expected at the point of doing the stock take, a variance of -1 will be calculated. When the Stocktake is entered the system will adjust the current stock level by -1. After the sale was created the current stock level is 4, so when the Stocktake is entered it will be reduced from 4 to 3.  **Process another Stocktake or a Stock Adjustment **to update the inventory levels to 4. |