---
title: "Add HS (Harmonised System) Tariff Codes to Maropost Commerce Products"
articleID: 1585
category: "Use Neto > Sales Orders, Returns, and Credits > Maintenance and Tweaks"
knowledgeBase: "Neto By Maropost"
---

# Add HS (Harmonised System) Tariff Codes to Maropost Commerce Products

## Overview

The Harmonized Commodity Description and Coding System (also known as the Harmonized System (HS)) is a worldwide standard system of names and numbers to classify traded products. The HS forms a part of all international free trade agreements. For more information about the HS Code, please see the [Department of Foreign Affairs and Trade's](https://ftaportal.dfat.gov.au/help/hs-code) website.

Merchants sending international orders are required to put a HS code for the product/s on customs declaration forms. For convenience, this code can be added to every product in Neto in bulk.

## Update HS Tariff Number on Products

While you can update each product individually, it's much easier to add the HS Tariff to each product in bulk, via export/import. First, create a file with a list of your product SKUs, category and name.

1. In your Neto control panel navigate to **Settings & Tools** > **Export Data**.
2. Click the **Perform Complex Export** button and choose **Start Data Export Wizard**.
3. Fill in the **Name Your File** field and click the **Continue to Next Step** button.
4. Click the **Add New Field to File** button four times, and select the **SKU***, **Name**, **Product Category Full Path List** and **HS Tariff Number** fields. The name and category will help you identify which codes to apply to your products.
5. Click the **Continue to Next Step** button until you're ready to generate the file. In the **Send Export File to** field select **Local URL**. This will save the file in your site database so that you can download it.
6. Click the **Export Now** button and confirm by clicking **Ok**. The export process will be automatically started, and you will also see a URL you can click on to download the file.
  You can either check the process has run (by clicking on it and looking for a **Complete** status) or wait five minutes and click the URL to download the file.
7. Open the file and add the codes to the HS tariff field in your spreadsheet. You can find a list of codes on [DFAT website](https://ftaportal.dfat.gov.au/help/hs-code).
  When complete, save your file so it can be uploaded.
8. The file can now be imported. Navigate to **Settings & Tools** > **Import Data**.
9. Click the **Perform Complex Import** button, and choose **Start Data Import Wizard**
10. Click **Browse** to select the exported file you downloaded, then click the **Continue to Next Step** button.
11. Set the **Name** and **Product Category** lines to **Ignore Column**, as they don't need to be updated. The **HS Tariff Number** and **SKU*** will already be mapped correctly. Click **Continue to Next Step**.
12. Click the **Continue to Next Step** button to advance through the import steps, and click the **Process File Now** button when you get to it.
  An automatic process will import the product file you've uploaded.

Your products are now updated with the HS Tariff number.