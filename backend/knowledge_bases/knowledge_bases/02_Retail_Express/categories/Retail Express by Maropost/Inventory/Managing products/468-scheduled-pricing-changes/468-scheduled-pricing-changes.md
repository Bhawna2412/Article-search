---
title: "Scheduled Pricing Changes"
articleID: 468
category: "Inventory > Managing products"
knowledgeBase: "Retail Express"
---

# Scheduled Pricing Changes

You can execute time-based promotional strategies efficiently through scheduled pricing changes in **Retail Express**, which enable automated price updates at predetermined dates and times without manual intervention. This pricing automation helps retail operators coordinate sales events and seasonal pricing, with effective scheduled pricing typically improving promotional execution accuracy and reducing administrative overhead across Australian retail operations.

Scheduled pricing functionality in **Retail Express** enables retail operators to plan future price changes in advance, helping ensure coordinated promotional pricing across outlets and reducing the risk of manual pricing errors. This pricing automation capability helps ensure your retail operations can execute complex promotional calendars while maintaining pricing accuracy and supporting consistent customer pricing experiences.

Using Retail Express you can schedule any price changes to your product selling price in advance, taking the stress out of preparing for sales and price updates. Prices can be increased or decreased by either a dollar ($) or percentage (%) amount or a whole value. Prices can even be rounded by whole dollars or a decimal.

You can optionally schedule a **"Revert Job"** to run sometime after the original/standard scheduled job, to undo the price changes and restore to the product pricing before the first schedule. This is a great tool for short-term promotions or weekend sales pricing and is particularly useful for pricing fields that do not have date range features such as POS Pricing.

## []()Available Price Fields

The price fields available for modification are as follows:

![mceclip5 (24).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfQSEAY.jpg)

|  |  |
| --- | --- |
| Global POS Price | The "POS Price (Inc Tax)" field on the Main tab of a product |
| Global Promotional Price | The "Promotional Price (Inc Tax)" on the Main tab of a product |
| Web Price | Used exclusively for web store integrations, found on the Main Tab |
| RRP | The Recommended Retail Price, used as a reference only. The RRP field allows you to enter a Recommended Retail Price and display it (along with your price) on product labels or web store. |
| Outlet-specific POS Price | The POS Price for an individual Outlet specified on the Pricing tab of a product. When configured, the POS Price field will be shaded in red. When sales are processed at that Outlet the Outlet-specific price will be used before a Global Price. |
| Outlet-specific Promotional Price | The Disc Price Inc price specified on the Pricing tab of a product. When configured, the Disc Price Inc field will be shaded in red. When sales are processed at that Outlet the Outlet-specific promotional price will be used before a Global Price. |

> **Note:** If an Outlet-specific price has been specified when adding a product to the sale at POS the Outlet-specific price is used before a Global price.

If you have a web integration with Retail Express, when the price change takes effect this will update the product's "Last Updated" date, so the price is updated the next time the web store synchronises the product.

## []()Scheduling Options

When specifying a scheduled price change, you can configure the following options on how the price should be modified and if a revert-job is to also be scheduled to undo the changes at a later date:

![mceclip6 (15).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphp3EAA.jpg)

|  |  |
| --- | --- |
| Select Outlets | Displayed only if an Outlet-specific price has been selected, and is used to assign the Outlets where the price change will occur |
| Adjustment Details | Available Options:  - **Set Price To** - allows you to specify the absolute value of the new price e.g. a $50 product with the "Set Price To" value of $45 will have the selected price field updated to $45 after the scheduled price change occurs - **Set Markup Target % to - **Available for the Master or Outlet-specific POS prices only. Enter a new Markup Target % to be used for the calculation of the new POS price (the final POS price will be calculated using the Markup Target % in conjunction with COGS - Cost of Goods Sold). - **Set Price To POS Price Minus** - Available for the Master or Outlet-specific Promotional Prices only. Used to calculate a new promotional price using the current POS price, minus a dollar ($) or percentage (%) value. - **Increase By - **The *difference *in the price (not the final value). Can be set to either a dollar ($) or percentage (%) figure e.g. a $100 product with an "Increase By" value of 10% will be updated to have a price of $110 - **Decrease By - **The *difference *in the price (not the final value). Can be set to either a dollar ($) or percentage (%) figure e.g. a $100 product with a "Decrease By" value of $10 will be updated to have a price of $90 - **Clear Price - **This will clear any outlet specific POS pricing that exists for the product/s and outlet/s selected and revert to using Master POS pricing. |
| Rounding (Whole Dollars) | Available Options:  - **No Rounding** - **Rounding To The Nearest Multiple Of** - rounds the whole dollar portion to a multiple of this value e.g. entering round to the nearest $1 means a price of $12.50 would be rounded to $13. |
| Rounding (Decimals) | Available Options:  - **No Rounding** - **Rounding To The Nearest Multiple Of - **Rounds the *decimal *portion of calculated prices to a multiple of this value, entered as a whole value e.g. entering "50" will round decimal prices to the nearest 50c; a price of $12.25 will become $12.50, and a price of $13.15 will become $13 |
| Promotional Price End Date | Only visible if the Global Promotional Price option has been selected. Used to select the last day the promotion is valid.  > **Note:** The promotion will start at the scheduled price change time. |
| Promotional Price Date Range | Only visible if the Outlet Promotional Price field has been selected. Used to enter a Start & End date for the promotion (the End Date being the last day the promotion is valid).   > **Note:** The price and start/end date will be updated at the scheduled price change time, but the promotion will only apply as per the start date. |
| Schedule Price Change For | The date and time of when the scheduled price change will begin processing. Depending on the number of changes to be processed this may take a little bit of time. |
| Create Revert Job | Optionally schedule a revert job to "undo" the pricing changes applied by the first job. Select a date/time in the future for the revert job to run. |

## []()Scheduling a Price Change

To schedule a new Price Change:

1. Navigate to **Inventory > Scheduled Price Change**
2. Click **Create New**
3. The **Settings **window will be displayed
  ![mceclip3 (53).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphp8EAA.jpg)
4. Enter a **Job Name **(internal description for the changes)
5. Select the **Price to Change**
6. If you've selected an Outlet-specific price change, you will be able to **select the Outlets **by clicking the right arrow to move the required Outlets to the box on the right.

> **Note:** This field will be hidden if an Outlet-specific price has not been selected.

7. Select the **Adjustment Details **from the drop-down
8. Select either the **$** or % option or Clear Price

> **Note:** If using the Set Price To Adjustment Reason the % field will be unavailable as the price will be updated to the value entered (not adjusted by the amount). 
> 	If you select 'Clear Price' option, it will will clear any outlet-specific POS pricing that exists for the product/s and outlet/s selected and revert to using Master POS pricing

9. If you've selected an increase or decrease price change, select a **Rounding **option
10. If you've selected a Promotional Price change, enter a **Promotional Date**
11. Select a date from the **Schedule Price Change For **the field
12. Select if you want to schedule a **Revert Job** and if so, select the time and date to revert the prices.
13. Click **Next**
14. Use the **Filters** to select the products that should be adjusted

> **Note:** If you want to adjust a specific list of products assign a Custom Attribute to the products, then filter the change by this Attribute to apply the price change.

  ![mceclip0 - 2023-07-09T233356.893.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphlREAQ.jpg)
15. Click **Save Changes**
16. The scheduled job will appear on the **Scheduled** tab
  ![mceclip7 (16).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphLEEAY.jpg)

## Creating a "Revert" Job

We've added support for "reverting" a schedule that ran previously. A "revert" job can be configured when you are first creating a job, or it can be added to an existing job that is yet to run, simply by editing the existing job and checking the "Create Revert" button.

A "revert" job when it runs, will restore the pricing of the affected products, at the affected outlets to how they were *before* the original job was run.

**It is important to note:**

- A revert job will use the "Price Before" for each product from the time the original job runs. Note: You can view the ?Price Before? in the history tab of the original job.
- If you have made manual changes to products since the original job, but before the revert, those changes will be overridden by the revert job.
- You can delete or reschedule a revert job if you need to remove or adjust its schedule.
- A revert job cannot be scheduled ?before? the standard job.
- If a standard job is still running at the time the revert job is scheduled to start, the revert will delay until the completion of the standard job. This is only likely to occur in case of very short schedule periods with large combinations of outlets and products.

To create a revert, simply select the checkbox "Create Revert Job" when you are configuring your scheduled price change. A new field appears with the date/time at which you want the prices to be reverted.

Once it has been scheduled, the standard job (the parent) and the revert job (the child job) appear in the schedule list in order of the date/time at which they are set to run.

![mceclip0 - 2023-07-09T233407.756.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphpDEAQ.jpg)
![mceclip1 - 2023-07-09T233411.973.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfYpEAI.jpg)