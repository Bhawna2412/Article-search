---
title: "Update Hunter Express Shipping Zones"
articleID: 1032
category: "Set up Neto > Shipping > Maintenance & Tweaks - Shipping"
knowledgeBase: "Neto By Maropost"
---

# Update Hunter Express Shipping Zones

Follow these steps if you are using current rates and need to update the shipping zones for them.

## Requirements

To complete these steps you will need:

- The most recent shipping zones CSV file, supplied by Hunter Express.
- Neto's [shipping zone template](https://developers.neto.com.au/assets/downloads/templates/import_shipping_zones.csv), so the Hunter Express zones can be transposed and imported.

## Prepare your Zone File for Import

The data in the Hunter Express zone file needs to be copied into the Neto template so that it can be imported:

1. Open the Hunter Express zone file, and the Neto zone template file. Add a column heading called **City / Suburb** to the Neto template file.
2. Transpose data from the Hunter express zone file to the Neto file as per the table below.
3. There will be two empty columns in the Neto template. Set them as below, for every row in the file:

> **Note:** Use the current date in the Courier name so that you can easily identify when the zones were added later, e.g. **Hunter Express 25-10-2020***.

4. Save your Neto zone file as a CSV (comma separate values).
5. Upload the shipping zones into your control panel using the steps in [this article](https://galaxy.maropost.com/kb/articles/500-edit-shipping-zones#import).

The new zones are now in your control panel.

## Apply Rates to the Zones

The zones by themselves won't work unless there are rates (i.e. prices) applied to them. The best way to get rates is to export your existing rates out of Neto.

1. In your Neto control panel navigate to **Settings & tools** > **Shipping**.
2. Click on **Shipping Services & Rates**.
3. Click on your existing Hunter Express rates.
4. At the bottom of the page, click the **Export Shipping Rate Table as .CSV File** button.
5. The rates will download to your computer. Once the download is complete make a copy of the file to use as a backup (as the rates will be overwritten soon), and open the file.
6. Change the values in the **Courier** column so that they match step 4 of the Prepare your Zone File for Import section (e.g. `Hunter Express 25-10-2020*`).
7. Back in your Neto control panel, click the X button to remove the all of the current rates.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/UpdateHunterExpressShippingZones.05T5g00000xqUWTEA2.png)
8. Click the **Import Zones and Rates** button. Upload your file and click the **Save & close** button.

Your new zones now have the correct rates applied to them.