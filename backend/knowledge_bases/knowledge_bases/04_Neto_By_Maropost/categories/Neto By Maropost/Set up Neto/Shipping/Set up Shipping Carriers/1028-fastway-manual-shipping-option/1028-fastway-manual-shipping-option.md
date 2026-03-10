---
title: "Fastway Manual Shipping Option"
articleID: 1028
category: "Set up Neto > Shipping > Set up Shipping Carriers"
knowledgeBase: "Neto By Maropost"
---

# Fastway Manual Shipping Option

> **Note:** Neto partners can set this up for you. [Request a shipping set up](https://www.netohq.com/job-request-portal) quote.

## Before you Begin

You will need:

- Spreadsheet of zones from Fastway (TSS file).
- Spreadsheet of rates for your services (Fastway products) from Fastway.
- Microsoft Excel (or similar spreadsheet program that you're familiar with).

## Zone File

Your Fastway zones (TSS file) need to be copied into the Neto template so that they can be uploaded.

1. Open the Fastway zone file. Using the Sort & Filter function in Excel, hide any blank rows in the **Local Product** column.
2. Transpose data from the Fastway zone file to the Neto zone file as per the table below:
3. Reset the filter in the Fastway zone file to display all values.
4. Filter out the blanks on the **Road Product** column in the Fastway zone file.
5. Transpose data from the Fastway zone file to the Neto zone file as per the table below:
6.   - Shorthaul Product
  - Satchel Product
  - Fastway Boxes Product

  The process you've completed for the Local Product and Road Product columns needs to be repeated for the below columns:
7. Save your Neto zone file as a .CSV (comma separated values).
8. Upload the shipping zones into your control panel using the steps in [this article](https://galaxy.maropost.com/kb/articles/500-edit-shipping-zones#import).

You can now go back to the rates file to complete and import it.

## Rates Tables

Fastway services you offer will need separate rate tables created in Neto. The table below provides information on which service should be separate, and which can be combined.

> **Important:** Your individual services and weight bands may be different from those below. Confirm these with Fastway as you many need to create additional or less rate tables and weight bands.

| Neto Rate Table Name | Fastway Zone Name | Weight Bands |
| --- | --- | --- |
| Fastway A5 Satchel | A5 Satchel | 0 - 0.5 kg |
| Fastway A4 Satchel | A4 Satchel | 0 - 1 kg |
| Fastway A3 Satchel | A3 Satchel | 0 - 3 kg |
| Fastway A2 Satchel | A2 Satchel | 0 - 5 kg |
| Fastway Small Box | SML Box | 0 - 1 kg |
| Fastway Medium Box | MED Box | 0 - 3 kg |
| Fastway Large Box | LRG Box | 0 - 9 kg |
| Fastway Lime and Local | BROWN/BLACK/BLUE/YELLOW 			LIME | 0 - 25 kg |
| Fastway Road | RED 			ORANGE 			GREEN 			WHITE 			GREY | 0 - 10 kg 			10.001 - 15 kg 			15.001 - 20kg 			20.001 - 25 kg |

You can only set one max weight (dead or cubic) on each service, so we recommend you set the max weight in each weight band as the dead weight. Using the cubic weight may result in issues when generating consignments, and leave you out of pocket.

To create the rate tables:

1. In your Neto control panel navigate to **Settings and tools** > **Shipping**.
2. Click **Shipping Services & Rates**.
3. Click the **Add New** button in the top right corner of the page.
4. Enter the information below into the rate table fields:
5. Click the **Save** button (not Save & Close).
6. Scroll down to the **Shipping Rates Table** section. Click the **Search and Add Zone(s) To Weight Band Button**.
7. In the **Zone Presets** section, click on **Fastway - all**.
8. In the **Zone Code**, enter the Fastway zone name (e.g. A5, A4, SML Box, GREEN).
9. Click the **Search Zone** button and select the checkboxes that correspond to the zone names you want to add.
10. Enter the parcel weight **From** and **To** amounts.
11. Enter the **1st Parcel** cost provided to you by Fastway.
12. If you have additional weight bands to add, click the **Add Another Weight Band** button and repeat steps 10 and 11.
  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/FastwayManualShippingOption3.05T5g00000xs2RoEAI.png)
13. Click the **Save & Close** button.

Repeat these steps until you've created rate tables for all of the Fastway zones.

More information about shipping rate tables can be found in the [Maropost Galaxy Support Hub](https://galaxy.maropost.com/kb/articles/1223-add-or-edit-shipping-rates).

## Add Shipping Options

You can now create your shipping options and link them to your rates. You will need to create separate shipping options for each rate table.

Follow the steps in [this article](https://galaxy.maropost.com/kb/articles/1385-add-a-shipping-option) to create shipping options.

> **Note:** Add the same value to the **Routing Group** field in each Fastway shipping option. This will ensure that only the cheapest Fastway service displays to your customers.