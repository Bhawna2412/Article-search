---
title: "Advanced eBay Filtering"
articleID: 1081
category: "Ways to Sell on Neto > eBay > Manage your eBay Store"
knowledgeBase: "Neto By Maropost"
---

# Advanced eBay Filtering

By filtering via **SKU** separated by commas (SKU1, SKU2, SKU3, etc) you can generate your list of SKU’s by using the export wizard, and modify the file to copy and paste into the filter.

The below example shows you how to select listing with variations, however you can use any filters available in the export wizard.

## Generating The File

1. In your Neto control panel navigate to **Settings & Tools** > **Export Data**.
  [Image: image1]
2. Select **Perform Complex Export** and choose **Start Data Export Wizard**.
  [Image: image2]
3. Name your file and **Continue To Next Step**.
  [Image: image3]
4. Choose the fields you want to filter by clicking **Add New Field To File**, and selecting them from the drop down box. You also need to include **SKU**. When complete, **Continue To Next Step**.
  [Image: image4]
5. Filter the products you want exported. In this example we’re getting a list of parent products, so the filter used is **Has Child Product**. When ready, select **Continue To Next Step**.
  [Image: image5]

  **Tip**: By sorting the Excel file (e.g. weight smallest to largest) you can also filter listings by values that aren’t in the export filters.
6. Set the **Send Export File To** drop down box to **Local URL**. This will save your file to your site, and give you a web address to download it from.
  Check the box to save the export configuration if you wish, and click **Export Now**.

  [Image: image6]
7. After 5 - 10 minutes the export will be completed and you can click the link to download and open your file. If you’re using Microsoft Excel, right click on the column header next to the **SKU**, and select **Insert**.
  [Image: image7]
8. 
  You’ll now have an empty column next to the **SKU**. Enter a comma (,) into each row, per SKU. Highlight all the **SKU**’s and commas, and copy it to your clipboard.

  ![image8](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AdvancedeBayFiltering8.05T5g00000v53zVEAQ.png)
9. In your Neto control panel navigate to **eBay** > **Active Listings**.
  [Image: image9]
10. Expand the filters and **Paste** the data from Excel into the **SKU** field, and select **Apply Advanced Filter**.
  [Image: image10]
11. You’ll now only see active listings, where the linked product is a variation parent.