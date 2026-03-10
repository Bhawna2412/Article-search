---
title: "Hunter Express Shipping Setup"
articleID: 425
category: "Set up Neto > Shipping > Set up Shipping Carriers"
knowledgeBase: "Neto By Maropost"
---

# Hunter Express Shipping Setup

You can configure Hunter Express shipping integration to provide reliable domestic delivery options across Australia with automated rate calculation and shipping label generation. This helps streamline warehouse operations and reduces order processing time, with properly configured carrier integrations typically improving fulfillment accuracy while providing competitive shipping rates for Australian B2B deliveries.

Implementing Hunter Express integration enables efficient order fulfillment by automating shipping calculations based on product weight, dimensions, and delivery zones. This streamlines complex B2B workflows by generating consignment labels automatically, providing tracking information to business customers, and integrating seamlessly with your order management system to improve operational efficiency across your Australian fulfillment operations.

### This add-on was built by Maropost

Add-ons and Integrations built in-house by Maropost are documented and supported by our customer service team. If you're having issues with this integration, [let us know](https://www.netohq.com/support/s/ask-us)!

> **Important:** This article assumes a good knowledge of Microsoft Excel and Neto shipping (including zones, rates and options).

To set up a Hunter Express shipping option you need to complete the below steps in order.

> **Note:** Neto partners can set this up for you. [Visit the job request portal](https://www.netohq.com/job-request-portal) for a quote.

## Import Shipping Zones

The Hunter Express zones need to be imported so that postcodes in Australia can be grouped into geographic zones.

1. Download the [Hunter Express - Shipping Zones](https://neto.com.au/assets/docs/7982/HunterExpress-ShippingZones.csv) file and save it to your computer.
2. In your Neto control panel navigate to **Settings & Tools** > **Shipping**.
3. Click **Shipping Zones**.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ImportProductsfromBigCommerce2.05T5g00000xVi8sEAC.png)
4. Click **Import Shipping Zones**.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup03.05T5g00000xViAKEA0.png)
5. Click **Choose File** and upload the Hunter Express zones file downloaded in step one.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup04.05T5g00000xViBrEAK.png)
6. Click **Upload File**, and the Hunter Express zones will be imported into Neto.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup05.05T5g00000xVgmIEAS.png)

## Prepare your Data

Hunter Express will provide your rates in an excel spreadsheet which isn't importable into Neto as is. The data will need to be transposed into Neto's template for it to be imported.

1. Open the excel spreadsheet provided by Hunter Express. It should look similar to this.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup06.05T5g00000xVi8UEAS.png)
2. Select everything on the sheet (Ctrl-A/Cmd-A) and copy it to your clipboard (Ctrl-C/Cmd-C). On a new sheet, paste the values only. You can do this by right clicking the new sheet, selecting, **Paste Special** and then **Values**.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup07.05T5g00000xVhcJEAS.png)
3. Delete the blank and header rows, but keep the fuel levy, as it will be used later. It may be easier to move it over to the right, so it doesn't get deleted accidentally. There are also some extra rows at the bottom of the sheet that can be deleted also.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup08.05T5g00000xVgEnEAK.png)
4. Move the data on the right-hand side so that all information runs down the page and delete any other blank rows.
5. You'll now need to do a series of find and replace (Ctrl-H/Cmd-H) functions on the data, to change the estimated delivery days. For the first one, replace `Overnight`, with `1`.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup010.05T5g00000xVgxNEAS.png)
6. Next, enter `*-` in the **Find** field (asterisk, hyphen, space), and replace with nothing.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup011.05T5g00000xVh01EAC.png)
7. Replace `days` (note the space at the start) with nothing as well.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup012.05T5g00000xViLdEAK.png)
8. Once column will be made up of suburbs and zone numbers. These need to be changed so they have the word **Zone** and the zone number. Type the formula `=TEXTJOIN(,,"Zone ",B2)` where **B2** is the first zone number, as in the example below. Then copy this formula for the entire column.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup013.05T5g00000xViOlEAK.png)

  You can now close the find and replace window, and the last column should only have numbers in each row.
9. You now need to transpose the data into our rates template. Download the [Hunter Express - Shipping Rates](https://neto.com.au/assets/docs/7982/HunterExpress-ShippingRates.csv) template and open the file.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup014.05T5g00000xViPtEAK.png)
10. Copy the **Zone #** column into the template under **Zone Names**. Make sure you paste the values only, using the same option in step 2. Paste the same data in **Zone Code** as well.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup015.05T5g00000xViqzEAC.png)
11. The next column in the data from Hunter Express is the **1st Parcel** charge. Copy and paste it into the rates template.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup016.05T5g00000xVisHEAS.png)
12. The next column in the data from Hunter Express is the **Per KG** rate. Copy and paste it into the rates template.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup017.05T5g00000xVfU0EAK.png)
13. The next column in the data from Hunter Express is the **Minimum Charge** amount. Copy and paste it into the rates template (take care not to get this mixed up with the Minimum column, which is pre-populated with 0).
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup018.05T5g00000xVit0EAC.png)
14. The last column in the data from Hunter Express is the **Delivery Time**. Copy and paste it into the rates template and save the template file.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup019.05T5g00000xVittEAC.png)

## Import your Shipping Rates

Now that the template of rates is complete, it can be imported into Neto.

1. In your Neto control panel navigate to **Settings & Tools** > **Shipping**.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup020.05T5g00000xViumEAC.png)
2. Select **Shipping Services & Rates**.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup021.05T5g00000xViwYEAS.png)
3. In the top right corner, select **Add New**.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup022.05T5g00000xVixREAS.png)
4. Enter a **Name**, set the **Status** to **Active**, **Charge Type** to **Weight/Cubic**, **Cubic Weight Modifier** to **250**, uncheck **Ship to PO Box**, set the tracking URL to **Hunter Express**, and add in your **Fuel Levy %**. When done, click **Save**.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup023.05T5g00000xVizmEAC.png)
5. Scroll down the page and select **Import Zones and Rates .CSV File [+]**, then **Choose File** to upload your rates.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup024.05T5g00000xVj5uEAC.png)
6. You'll be given a preview of the rates. Check a few and confirm the data is correct, then **Save**.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup025.05T5g00000xVj7WEAS.png)

## Create your Shipping Option

The shipping option is what displays to customers on the front end of your site. To create a shipping option:

1. In your Neto control panel navigate to **Settings & Tools** > **Shipping**.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup026.05T5g00000xVjA6EAK.png)
2. Select **Shipping Options**.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup027.05T5g00000xVhphEAC.png)
3. In the top right corner select **Add New**.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup028.05T5g00000xVjGJEA0.png)
4. Enter a **Name**, set the status to **Active**, **Visible To Customer** to **Yes**, and turn delivery to PO Boxes off, then **Save**.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup029.05T5g00000xVjHHEA0.png)
5. At the bottom of the page select **Add Shipping Category**, select the default (or your own defined shipping category), and choose **Hunter Express** for the rates. Check the indicated checkbox and **Save**.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HunterExpressShippingSetup030.05T5g00000xVj60EAC.png)

## Hunter Express Shipping Labels

To set up the Hunter Express labels:

1. In your Neto control panel navigate to the **Addons** menu.
2. In the Shipping section locate Hunter Express and click the **Install** button.
3. Fill in the [Shipping Carrier Label Setup Form](https://forms.neto.com.au/services/shippingcarrierlabelsetup.html) and Neto staff will set up the shipping labels for you for free.

## Related Articles

- [Custom Shipping Overview and Setup](https://galaxy.maropost.com/kb/articles/601-custom-shipping-overview-and-setup)
- Shipping Category Setup
- Display the Cheapest Shipping Option to Customers