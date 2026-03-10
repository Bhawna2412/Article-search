---
title: "Direct Freight Shipping Setup"
articleID: 1023
category: "Set up Neto > Shipping > Set up Shipping Carriers"
knowledgeBase: "Neto By Maropost"
---

# Direct Freight Shipping Setup

You can configure Direct Freight shipping integration to provide accurate freight rates for your B2B customers, which helps streamline shipping operations for larger or bulk orders. Direct Freight integration enables automated rate calculation based on weight, zone, and suburb-specific pricing, which typically improves operational efficiency by reducing manual rate lookups and quote generation time for freight shipments.

Setting up Direct Freight involves importing shipping zones and rate tables from spreadsheets into your Neto platform, configuring shipping options, and installing the Direct Freight label add-on. This helps merchants manage complex freight pricing scenarios efficiently and provides customers with transparent shipping costs at checkout, supporting better B2B customer experience and enabling expansion of your product catalog to include larger items.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/DirectFreightShippingSetup1.05T5g00000xW28tEAC.png)

### This addon was built by Maropost

Add-ons and Integrations built in-house by Maropost are documented and supported by our customer service team. If you're having issues with this integration, [let us know](https://www.netohq.com/support/s/ask-us)!

> **Important:** This article assumes a good knowledge of Microsoft Excel and Neto shipping (including zones, rates and options).

> **Note:** Neto partners can set this up for you. [Request a shipping set up](https://www.netohq.com/job-request-portal) quote.
> This support article requires the **Neto Commerce Ship** add-on.

## Before you Begin

You will need:

- Spreadsheet of your shipping rates from Direct Freight.
- Neto rates import file (available [here](https://www.neto.com.au/assets/docs/shipping/shipping_rate_import.csv)).
- Microsoft Excel (or similar spreadsheet program that you're familiar with).

## Rates File Part 1

The rates provided by Direct Freight need to be transposed into a format that can be imported into Neto. To build the rates file:

1. Open the rate spreadsheet provided by Direct Freight. It should look similar to the example below.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/DirectFreightShippingSetup2.05T5g00000xW2arEAC.png)

> **Note:** If Direct Freight provided a PDF file of your rates, you can use a converter such as [SmallPDF](https://smallpdf.com/pdf-to-excel) to convert it to a spreadsheet.

2. Using the sort and filter options in Excel to filter out all rows that have the keyword PALLET in the Type column.

> **Note:** Ensure that the **FromZone** column is the same for every row, and represents where you will be sending orders from using the [Direct Freight zone file](https://www.neto.com.au/assets/docs/shipping/Direct_Freight_zones.csv).

3. You will notice that the Direct Freight rate file includes some suburb specific rates. Filter out the **CityTo** column to only include cells with values and insert a new column.
4. Create a new column to the right of column E and call it `ToZone CityTo concat`.
5. Join the **ToZone** and **CityTo** cells with the concatenate function (remember to add a space in the middle).
6. Apply the formula through the entire column. Copy this entire column, as you now need it for the zone file.

The rates file still needs some changes, but at this point it's easiest to set up the zone file and import it into Neto.

## Zone File

1. Download and open the [Direct Freight zone file](https://www.neto.com.au/assets/docs/shipping/Direct_Freight_zones.csv).
2. Paste the column you copied earlier, into column N of the Direct Freight zone file.
3. In the adjacent column, enter "y" in the second row, and replicate it for all rows in the column.
4. If your zone file has no data in column I, enter **zonecode suburb** into cell I1, and `=CONCAT(TRIM(C2)," ",TRIM(G2))` into cell I2. Copy this code down the column for every row in the spreadsheet.
5. You will need to look for all locations in the zone file that have a suburb specific rate. Use the function `=vlookup(I2,N:O,2,0)` in column K.
  N/A indicates rows that don't have a suburb specific rate while all others with 'y' are those that have a suburb specific rate. We will need this while creating zone codes for suburbs that have specific pricing.
6. To find the final zone codes enter the function `=if(isna(K2),B2,concat(trim(I2)," ",trim(J2)))` into the column next to the suburb specific rate.
7. Copy the values from this column (not the formula), and replace the data in columns B and C with it.
8. Delete everything from column I onward and save your file as a CSV (comma separated values). Your final zone file will look like this.
9. Upload the shipping zones using the steps in [this article](https://galaxy.maropost.com/kb/articles/601-custom-shipping-overview-and-setup#shipping-zones).

You can now go back to the rates file to complete and import it.

## Rates File Part 2

1. Open your the Direct Freight rates file. Except for the filter on the "Type" column, remove all other filters.
2. Insert a new column to the right of column F and call it `finalzone`.
3. Enter the function `=if(isblank(E2),C2,F2)` into each row of this column, and then copy the values from this column.
4. Open the Neto rates file, and transpose the data from the Direct Freight rate file into the Neto rates file using the table below:
5. Save the Neto rates file.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/DirectFreightShippingSetup10.05T5g00000xW44JEAS.png)

The Neto rates file can now be uploaded into a rates table in your control panel.

## Create a Shipping Rates Table

To create a shipping rates table via import in Neto, follow the steps in [this article](https://galaxy.maropost.com/kb/articles/1223-add-or-edit-shipping-rates#2).

## Create a Shipping Option

So that customers can select Direct Freight in checkout, you need to create a shipping option. Follow the steps in [this article](https://galaxy.maropost.com/kb/articles/1385-add-a-shipping-option) to create a shipping option.

## Direct Freight Shipping Labels

To set up the Direct Freight labels:

1. In your Neto control panel navigate to the **Addons** menu.
2. In the Shipping section locate Direct Freight and click the **Install** button.
3. Fill in the [Shipping Carrier Label Setup Form](https://forms.neto.com.au/services/shippingcarrierlabelsetup.html) and Neto staff will set up the shipping labels for you for free.

## Related Articles

- [Custom Shipping Overview and Setup](https://galaxy.maropost.com/kb/articles/601-custom-shipping-overview-and-setup)
- Shipping Category Setup
- Display the Cheapest Shipping Option to Customers