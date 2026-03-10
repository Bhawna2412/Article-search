---
title: "Australia Post eParcel Shipping Manual Rates Setup"
articleID: 428
category: "Set up Neto > Shipping > Set up Shipping Carriers"
knowledgeBase: "Neto By Maropost"
---

# Australia Post eParcel Shipping Manual Rates Setup

Both eParcel regular post and eParcel express post will need to be set up individually. Services, rates and shipping options must be separate to account for the two services. Naming conventions should be kept the same throughout the setup to avoid confusion. Additionally, if it is unknown if there is an existing eParcel service in place, add an asterisk in the name so the new service can be easily identified (eg. eParcel*).

### Benefits & Limitations

- Shipping quotes are faster using a manual setup as it's not relying on the API to return shipping rates.
- No downtime for customers in receiving shipping quotes if the carrier is experiencing technical difficulties or downtime.
- Shipping Rates and zones will not automatically update when the carrier makes updates. These will need to be updated manually in Neto.

> **Note:** Neto partners can set this up for you. [Visit the job request portal](https://www.netohq.com/job-request-portal) for a quote.

## Prepare eParcel Zone File

eParcel zones are provided in PDF format from your eParcel account manager. As eParcel regularly update their zones it is important to convert and import the zones before you setup the rates to ensure the zones are accurate.

1. Open your eParcel zones file and copy the entire contents including the destination, zones and postcodes into a spreadsheet (e.g. MS Excel/Google Sheets). Alternatively, convert the eParcel Zones from PDF to Excel using a converter (e.g. [https://smallpdf.com/pdf-to-excel](https://smallpdf.com/pdf-to-excel)).
2. [Download the Neto shipping zone template file](https://www.neto.com.au/assets/docs/shipping/shipping_zone_import.csv), or create a new excel sheet with the following column names: `Zone Name`, `Zone code`, `From Post Code`, `To Post Code`, `Courier` and `Country`.
3. Copy the data from the eParcel zone file into the correct fields in the CSV file. Use the following table to assist in placing the data into the correct fields.
4. Once complete, save it as a CSV file so it can imported into Neto.

## Prepare eParcel Rate Files

Like zones, rates will be provided to you by your eParcel account manager, in a PDF. As such, the process is similar.

1. Open the eParcel Shipping Rates Table.
2. Copy the regular post rates into a spreadsheet (e.g. MS Excel/Google Sheets). Alternatively, convert the eParcel Zones from PDF to Excel using a converter (e.g. [https://smallpdf.com/pdf-to-excel](https://smallpdf.com/pdf-to-excel)).
3. [Download the Neto rates file](https://www.neto.com.au/assets/docs/shipping/shipping_rate_import.csv), or create a new excel sheet with the following column names: `Courier Name`, `Zone Name`, `Zone Code`, `1st Parcel`, `Per Subsequent Parcel`, `Per KG`, `Minimum` and `Maximum`.
4. Copy the data from the eParcel rates table into the correct fields in the CSV file. Use the following table to assist in placing the data into the correct fields.
5. Once complete, save it as a CSV file so it can imported into Neto.
6. Repeat these steps for the express rates.

## Import Zone File

Once you have the CSV file for the shipping zones, you will need to import this information into Neto. To import the shipping zones:

1. In your Neto control panel navigate to **Settings & Tools** > **Shipping**.
2. Select **Shipping Zones**.
3. Click the **Import Shipping Zones** button.
  ![Image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AustraliaPosteParcelShippingManualRatesSetup1.05T5g00000xrxmZEAQ.png)
4. Click the **Choose file** button.
5. Locate the zone file on your computer, and click **Open**.
6. Check the **Test Upload** box and click the **Upload File**.
7. A preview of the file will display so that you can ensure there are no errors. If you're happy with the test, uncheck the **Test Upload** checkbox, and click the **Upload File** button.
8. The shipping zones will now be imported.
  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AustraliaPosteParcelShippingManualRatesSetup2.05T5g00000xrysvEAA.png)

## Import Rate Files

Once the Shipping Zones have been imported, you will then need to setup the services and rates. To setup the services and rates:

Click the **Add New** button.

1. Hover over **Settings & Tools** > **Shipping**.
2. Select **Shipping Services & Rates**.
  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AustraliaPosteParcelShippingManualRatesSetup3.05T5g00000xrzRkEAI.png)
3. Enter a **Name** for your standard rates (e.g. eParcel- Parcel Post).
4. Configure the fields as per the table below.
5. Click the **Save** button.
  ![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AustraliaPosteParcelShippingManualRatesSetup4.05T5g00000xry7fEAA.png)
6. Click the **Import Zones and Rates .CSV File [+]** button.
7. Click **Choose File**, locate the standard rates file on your computer, and click **Open**.
8. Click the **Upload File** button.
9. Click the **Save** button.
  ![image5](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AustraliaPosteParcelShippingManualRatesSetup5.05T5g00000xrybLEAQ.png)
10. Repeat these steps for the express rates.

## Create Shipping Options

Once you have imported your zones and shipping rates, you can create shipping options for standard and express. To create the shipping option:

1. Navigate to **Settings & Tools** > **Shipping**.
2. Click **Shipping Options**.
  ![image6](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AustraliaPosteParcelShippingManualRatesSetup6.05T5g00000xrzZAEAY.png)
3. Click the **Add New** button.
  ![image7](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AustraliaPosteParcelShippingManualRatesSetup7.05T5g00000xrzbQEAQ.png)
4. Enter a **Name** for the shipping option that will display to your customers (e.g. Parcel Post).
5. Configure the shipping option according to the table below. Fields which aren't mentioned can be set to your own requirements.
  ![image8](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AustraliaPosteParcelShippingManualRatesSetup8.05T5g00000xruL5EAI.png)
6. Click the **Add Shipping Category** button.
7. Select the shipping category from the drop down (e.g. Default).
8. Select the service/rates from the drop down that matches your shipping option (e.g. eParcel- Parcel Post).
9. Continue to add shipping categories and link to the shipping service and rates.
10. Select the **This option only applies to products in the categories defined above** checkbox.
11. Click the **Save** button.
  ![image9](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AustraliaPosteParcelShippingManualRatesSetup9.05T5g00000xry7gEAA.png)
12. Repeat these steps for the express shipping option.

## Label Configuration

If the label already exists:

1. Navigate to **Settings & Tools** > **Shipping**.
2. Select **Carriers & Labels** and select the label you wish to edit.
3. Scroll down to **Shipping Services**.
4. Tick the related shipping services and rates for each of the applicable services.
  ![image10](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AustraliaPosteParcelShippingManualRatesSetup10.05T5g00000xrzfhEAA.png)
5. Click **Save**.