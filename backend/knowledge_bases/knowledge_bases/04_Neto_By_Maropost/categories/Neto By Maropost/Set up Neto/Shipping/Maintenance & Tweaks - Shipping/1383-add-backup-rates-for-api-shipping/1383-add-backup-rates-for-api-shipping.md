---
title: "Add Backup Rates for API Shipping"
articleID: 1383
category: "Set up Neto > Shipping > Maintenance & Tweaks - Shipping"
knowledgeBase: "Neto By Maropost"
---

# Add Backup Rates for API Shipping

Neto by Maropost supports real-time shipping carrier rates which are pulled through to the carriers API. This is a great tool to ensure customers get the latest and best rates. However, sometimes these API’s have downtime or occasionally fail so it’s important to have a plan B so your customers can still get rates and checkout.

In this setup, we’ll be creating manual rates which will be triggered when the API fails. You can choose to add the rates provided by your carrier or can set a flat fee.

1. To setup a backup rate for your carriers, navigate to **Settings & Tools** > **Shipping**.
2. Click on **Shipping Services & Rates**.
3. Click on the the services and rates which relate to the API carrier you wish to backup, eg. eParcel.
4. Note the settings used here as we’ll need to create a replicator of this in a separate services and rates table.
5. When you’re ready to create a replicator, go to the Neto control panel and navigate to **Settings & Tools** > **Shipping**, click **Shipping Services & Rates** and click the **Add New** button from the top right hand side.
6. Give your rates a name, we recommend the carrier name with the words backup rates.
7. Change the status to **Active**.
8. Fill out the **details**, **levies and allowances** and optionally the **Consignment Transit Cover** sections using the details from the original rates table.
9. Click **Save**.
10. Upon saving, the **Shipping Rates Table** section will appear for you to enter your manual rates which will be used instead of the API rates when the system is unresponsive. Use the drop down menu next to the **Add Zones** button to select your carriers zones, in our example we’re using eParcel.
11. You now have the option to manually input the costs for each zone or alternatively you can [import zones](https://galaxy.maropost.com/kb/articles/500-edit-shipping-zones) and [rates](https://galaxy.maropost.com/kb/articles/1223-add-or-edit-shipping-rates) into this table.
12. Click **Save & Close**.
13. Now that we’ve completed the backup rates, we need to go into our API setup and map the backup rates. Navigate to **Settings & tools** > **Shipping**.
14. Click on **Shipping Services & Rates** and go into the services and rates which relate to the API carrier you wish to backup.
15. Scroll down to **3rd Party Calculators** section. Under **Backup Shipping Rate**, select the backup rates we just created and click **Save & Close**.