---
title: "3. TradeMe Setup - File Builder"
articleID: 682
category: "Ways to Sell on Neto > Trademe"
knowledgeBase: "Neto By Maropost"
---

# 3. TradeMe Setup - File Builder

In this article, we’ve added a recommended setup for your integration, including disabling subtitles and auctions [due to the extra fees](http://www.trademe.co.nz/help/18/fees-and-fee-calculator) it incurs. Familiarise yourself with Trade Me’s fees and charges before making any changes to the recommended settings.

**Tip**: Neto partners can set this up for you. [Visit the job request portal](https://www.netohq.com/job-request-portal) for a quote.

1. In **FILEHEADER**, insert the following line into the text field:
  **Warning**: Ensure the cursor moves onto the next line after pasting the code. A line break is required for it to function correctly.
2. The fields we’ve just added are the names of the available product fields in Trade Me. In **FILE BODY - header**, we need to build out the values of these fields by linking (or mapping) them to available fields in Neto.
  To do this, we’re going to be using a combination of the **Custom Product Fields** tags we created earlier, along with product fields already in Neto.

  With every **Custom Product Field** you created, [a field ID](https://www.neto.com.au/assets/images/docs/7776/miscfields.png) will also be created, eg. ‘misc5’. When using the **FILE BODY - header** section, we turn this into a tag which looks like this: `[@misc5@]`

  You can also add values from the default fields in Neto if you don’t wish to recreate data again in any of the Custom Product Fields. Eg. Using the title and description that already exist in Neto without the need to use ‘Trade Me Title’ and ‘Trade Me Description’.

  To do this, simply go into any product in Neto and look for the associated tag icon besides any field as shown in [this example](https://www.neto.com.au/assets/images/docs/7776/tagicon.png).
3. Now it’s time to build out our **FILE BODY - header**. Similar to the **FILEHEADER** section, we just add the values of all fields, separating each value with a comma. Using the table below, we just add the the values listed under the **Neto Fields** column.
4. Lets start on the first 4 fields (Sku, Title, Subtitle and Description) together. We’ve already added recommended values for each field however you will be required to change some of these fields as per the **Description** column.
  The first 3 values will look like this:

  Now continue to build out the remainder of the fields using the table below.
5. If you get stuck, here is an example of a completed**FILE BODY - header**:
  [Image: image1]
6. Click the **Save Changes** button to complete the file builder setup.

You can now move onto the next step, setting up your order imports from Trade Me.

Next step: TradeMe Order Export.