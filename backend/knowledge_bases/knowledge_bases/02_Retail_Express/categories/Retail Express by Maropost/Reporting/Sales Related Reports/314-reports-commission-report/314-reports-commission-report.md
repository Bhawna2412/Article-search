---
title: "Reports - Commission Report"
articleID: 314
category: "Reporting > Sales Related Reports"
knowledgeBase: "Retail Express"
---

# Reports - Commission Report

The Commission Report is designed to deliver calculated commissions for your staff based on sales made across a calendar month. Within Retail Express you can calculate your commission based on a number of variables, including a Commission Threshold, specific Product Types or Processed sales only.

> **Note:** The Commission Report is used to report on single Calendar Months only

![Commission Report1.JPG](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgqfEAA.jpg)[Click to view full size](https://ress.zendesk.com/hc/article_attachments/115000173893/Commission_Report1.JPG)

## Using the Commission Report

To use the Commission Report:

1. Navigate to **Reports > Sales Reports > Commission ****Report**
2. Select the **Month **and **Year**
3. Select the **Filters **as required (see below for more information on each filter)

> **Note:** Click **View Help **to see information on the Filters

4. Click **Search**
5. The results will be displayed

> **Note:** Click **View Legend **for information on the columns on the Results tab

6. Click **Print **to print the report
7. Click **Export to Excel **to download a copy of the report in a Microsoft Excel spreadsheet format

#### [Search filters](https://galaxy.maropost.com/kb/articles/314-reports-commission-report#filters)

The filters for the Commission Report are below in more detail.

To view information on the Filters from within Retail Express click the **View Help **button in the top right-hand corner.

![commissionreport.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphP0EAI.jpg)

|  |  |
| --- | --- |
| **Filter** | **Details** |
| Month and Year (mandatory) | The date the sales were made |
| Filter by Processed Date | Select this option to include only sales that were Processed (fully paid) during the selected month/year |
| % Paid over Commission Threshold (%OTC) | Calculates the sales percentage paid as an extra |
| Commission Threshold (CT) | The sales dollar value target for the period to be exceeded to qualify for a commission |
| Bonus Threshold | The quantity of bonus products required to be sold to earn the bonus amount e.g. if you have a sales target to sell 30 products to earn a bonus, enter 30 |
| Bonus Amount | The dollar value of the additional Commission amount to be earned by selling the required quantity in the Bonus Threshold |
| Warehouse (mandatory) | Outlet (store location) to be included in the results  > **Note:** Hold ctrl and click each Outlet to select multiple locations |
| Sales Product Types | The Product Types selects the range of products to be included in the calculation of the Units Sold in the results |
| Other Product Types | Will display in the results in the Sales Values, separate to the Sales Product Types (for example if using Product Types to separate service-related products like "Labour" that shouldn't be included in the sales unit quantities) |
| Bonus Products Special Products Service Products | These fields are free text and accept Product ID's and SKU's separated by a comma.  - Bonus Product - These are the Product ID/s or SKU/s that staff can target their sales towards to earn extra bonus per the Bonus Amount field. - Special Products - These are Product ID/s or SKU/s you can choose to enter related to 'Assembly' or 'Installation' (e.g. Assembly of a flat-pack product prior to delivery or installation and setup of a stereo) - Service Products - These are the Product ID/s or SKU/s you can choose to enter related to 'Free Services' (e.g. Free one month service for a new bike or Free jewellery cleaning) |

#### [Results tab](https://galaxy.maropost.com/kb/articles/314-reports-commission-report#results)

The **Results **tab displays information on the sales and products sold for the selected month, along with a Projected Commission amount.

To view information on each of the columns from within Retail Express click the **View Legend **button in the top right-hand corner.

![commissionreport_resultslegend.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgcPEAQ.jpg)

|  |  |
| --- | --- |
| **Column** | **Details** |
| Sales Person | The staff member within Retail Express |
| Modified Total (MT) | Calculation: Gross Profit + (50% of Other Sales) + (Special Units x 60) + Service Units x 37.5) |
| Projected Modified Total (PMT) | The expected total for the month based on the calendar month and the current date. The calculation for this field is: (Modified Total/Day of Month) x Days in Month |
| Projected Commission (PC) | The amount expected to be earned in Commission by the staff member. The calculation for this field varies depending on whether the Projected Modified Total is above or below the Commission Threshold configured on the Filters tab, and uses the following fields :  - Projected Modified Total (PMT) - Commission Threshold (CT) - configured on Filters - % Paid over the Commission Threshold (%OTC) - configured on Filters - Bonus $  If Projected Modified Total is *less than* the Commission Threshold:  - PC = 10% PMT + Bonus $  If the Projected Modified Total is *equal to or greater than *the Commission Threshold:  - PC = 10% CT + %OTC of the* amount over the threshold + *Bonus $.  				For example if the PMT was $1100 and the CT was $1000, %OTC would be calculated on $100. |
| Gross Profit | Gross profit across all products |
| Units Sold | The number of units sold of products with matching Product Types as selected in the "Sales Product Types" filter |
| Special Units | The number of units sold of products with codes entered in the the "Special Products" filter |
| Other Sales | The Gross Profit of products sold with matching Product Types as selected in the "Other Product Types" filter |
| Service Units | The number of units sold of products with codes entered in the the "Service Products" filter |
| Bonus Units | The number of units sold of products with codes entered in the the "Bonus Products" filter |
| Bonus $ | The Bonus Amount commission earned (as configured on the Filters tab) if the Bonus Units value exceeds the value entered in the Bonus Threshold field |
| Commission Threshold | The Commission Threshold as configured on the Filters Tab |
| Annual Leave | The "Days Off" field as configured in the User's account |

Want more information? Find related articles here:

- Staff Sales Report
- Staff Sales Export