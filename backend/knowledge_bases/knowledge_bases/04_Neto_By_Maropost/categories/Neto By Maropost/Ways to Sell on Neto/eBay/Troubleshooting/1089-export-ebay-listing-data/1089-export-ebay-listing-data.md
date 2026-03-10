---
title: "Export eBay Listing Data"
articleID: 1089
category: "Ways to Sell on Neto > eBay > Troubleshooting"
knowledgeBase: "Neto By Maropost"
---

# Export eBay Listing Data

We recommend using both Google Sheets, and Microsoft Excel to complete these steps.

1. In your Neto control panel navigate to **eBay** > **View Listings**.
2. Set your filters to only show the listings that you would want to export. In this example, the filters have been set to show **Ended** listings.
  [Image: image1]
3. Click and drag to highlight all the listings that are returned, and copy them to your clipboard.
  [Image: image2]

  **Please Note**: It’s important that the area you copy covers the whole table, from the top left to bottom right corner as indicated with the arrows.
4. Paste this information into [Google Sheets](https://docs.google.com/spreadsheets/).
  [Image: image3]
5. You now need to remove the formatting of the table. Select the table, and go to **Format** > **Clear Formatting**.
  [Image: image4]
6. Copy the data, and paste it into Microsoft Excel.
  [Image: image5]
7. Select the table and right click, then choose **Remove Hyperlinks**.
  [Image: image6]
8. You can now delete any unnecessary columns, such as **Edit**, **Fee**, **Listed On**, and **Status**. To do this, right click on a column header and select **Delete**.
  [Image: image7]
9. To change the **Information** field so that it only shows the quantity, you need to use the find & replace function. Hold down **Ctrl** and press **H**. In the find box, type in `*Available:`. Leave the replace field blank and click **Replace All**.
  [Image: image8]
10. With the replace box still open, type `Out*` in the find field and click **Replace All**.
  [Image: image9]
11. With the replace box still open, in the find field hold **Ctrl** and press **J**. You’ll see a small dot in the find field but nothing else. Click **Replace All** and any line breaks will be removed.
  [Image: image10]
12. All that’s left in the field will be the quantity. You can now perform similar steps on the **Item** field depending on what data you want to extract.
13. **Save** your spreadsheet as a CSV file (MS-DOS), and you can use it to import into Neto.