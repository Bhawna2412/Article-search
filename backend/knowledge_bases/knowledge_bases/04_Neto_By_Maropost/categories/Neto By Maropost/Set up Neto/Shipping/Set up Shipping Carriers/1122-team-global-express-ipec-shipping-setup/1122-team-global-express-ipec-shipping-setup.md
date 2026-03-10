---
title: "Team Global Express IPEC Shipping Setup"
articleID: 1122
category: "Set up Neto > Shipping > Set up Shipping Carriers"
knowledgeBase: "Neto By Maropost"
---

# Team Global Express IPEC Shipping Setup

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/teamglobalexpresslogo.05T5g00000rMyYEEA0.jpeg)

### This addon was built by Maropost

Add-ons and Integrations built in-house by Maropost are documented and supported by our customer service team. If you're having issues with this integration, [let us know](https://www.netohq.com/support/s/ask-us)!

There are four steps to add an IPEC shipping option and labels to your Neto control panel.

> **Note:** Neto partners can set this up for you. [Visit the job request portal](https://www.netohq.com/job-request-portal) for a quote.

## Import IPEC Shipping Zones

Postcodes and suburbs that are close to each other geographically are grouped into shipping zones. Each zone can then have shipping costs associated with it in the rates table.

The IPEC zones file can be downloaded [here](https://neto.com.au/assets/docs/8007/TollIPEC-ShippingZones.csv).

To import the IPEC shipping zones file, follow the steps in [this article](https://galaxy.maropost.com/kb/articles/601-custom-shipping-overview-and-setup#shipping-zones).

## Prepare your Rates File

IPEC will provide your rates in either a PDF document or a spreadsheet. These steps assume that you have received a spreadsheet. If you have a PDF document, you will need to convert it to a spreadsheet using a service like smallpdf.com

Your first step is to create a rates file that is compatible with Neto, and populate it with your data from IPEC:

1. Download the Neto rates template file [here](https://neto.com.au/assets/docs/8007/NetoRatesTemplate.csv) and open the file.
2. Open the rates file you have received from IPEC as well, and copy the data across to the Neto template file (below the existing data). Use the table below to copy the data into the correct fields:
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TollIpecShippingSetup2.05T5g00000szoxsEAA.png)
3. Enter `Toll Ipec*` into the **Courier Name** column and copy it down the page for each row.
4. Sort the zone code column alphabetically using Excel's sort and filter function.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TollIpecShippingSetup3.05T5g00000szpNEEAY.gif)
5. Your goal is to find the rows where the **Minimum charge**, **Per Subsequent Parcel** and **per kg** fields are empty. For each one that is empty, copy the data from the row above into it.
6. Click into cell E2 (**1st Parcel**) and enter the following formula `=F2+L2`.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TollIpecShippingSetup4.05T5g00000szpLXEAY.png)

  Once complete, you will have no empty fields for these three columns.

  Repeat this formula for the entire column (i.e. `E3=F3+L3`, `E4=F4+L4` etc). This will populate the **Per Subsequent Parcel** cost for most of the rows. Any remote regions that require a surcharge will have their additional cost added from column L.
7. **Save** your Neto rates template file.

With the rate file created, you can now upload this file into Neto.

## Create a Shipping Rate Table

The rates file created can be uploaded into a Neto rates table, which works out the cost based on the zone the package will be shipped to. To create a shipping rate table:

1. Follow the steps in [this article](https://galaxy.maropost.com/kb/articles/1223-add-or-edit-shipping-rates) to create your shipping rate table. Use the table below to populate the required fields:
2. The rates file from Team Global Express has other details that also need to be entered into the rate table:

> **Note:** The other fields can be set as desired, but are fine to be left as their default values.

The Ipec rates table is ready to be added to a shipping option.

## Create a Shipping Option

So that the costs can display on your web store or be used on sales orders, you need to create a shipping option.

Follow the steps in [this article](https://galaxy.maropost.com/kb/articles/1385-add-a-shipping-option) to create a shipping option.

> **Note:** You'll select the IPEC rates in the **Map Shipping Categories** section.

## Shipping Labels

Complete the [shipping carrier label setup](http://forms.neto.com.au/services/shippingcarrierlabelsetup.html) form and Neto staff will configure your labels for free.