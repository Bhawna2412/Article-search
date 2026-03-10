---
title: "Stocktake - Stocktake Authorisation"
articleID: 432
category: "Inventory > Stock Take and Stock Adjustments"
knowledgeBase: "Retail Express"
---

# Stocktake - Stocktake Authorisation

You can maintain control and accuracy over inventory adjustments through the Stocktake Authorisation process in **Retail Express**, which provides a critical review gate before stock levels are updated in the system. This authorisation workflow helps prevent incorrect inventory adjustments and supports accountability in retail operations, with proper authorisation controls typically reducing stocktake errors and improving inventory accuracy across Australian retail operations.

The Stocktake Authorisation feature enables **Retail Express** users to selectively approve or reject individual product counts, send items back for recount, and apply appropriate update methods to ensure accurate inventory adjustments. Understanding the difference between Absolute and Variance update methods helps ensure your retail operations process stocktake results correctly, avoiding common calculation errors and maintaining reliable stock levels for operational decision-making.

# Stocktake - Stocktake Authorisation

Find [**FAQs and related articles**](https://galaxy.maropost.com/kb/articles/432-stocktake-stocktake-authorisation#Faqs)** **at the bottom of this page

Once a Stocktake has been created it will need to be submitted for Authorisation. This provides a chance to review the values prior to applying the changes to the inventory in Retail Express. Any products that are not authorised will be submitted for a recount, and will not have their inventory levels adjusted.

> **Important:** Inventory levels are not adjusted in Retail Express until the Stocktake has been authorised. If any sales are processed during this time it may result in an incorrect stock qty after the Stock Take has been Authorised. It's best practise to not trade while a Stock Take is in progress. Products can be submitted for recount if required, however this will increase the amount of time it takes to perform a total stocktake of your products.

The Authorisation process is limited to Browser Stocktakes, as the Excel Upload Stocktake method assumes the file has been authorised prior to upload.

[]()[Stocktake Authorisation Update Method - defining how the stock levels are updated](https://galaxy.maropost.com/kb/articles/432-stocktake-stocktake-authorisation#authorisation-update-method)

Compared to the Stocktake Method (i.e. what stock is being counted), the Stocktake Authorisation Update Method determines how the stock levels are updated (i.e. what number will be used to perform a Stock Adjustment).

The values that appear in the "Count" and "Variance" columns of the Stocktake Authorisation screen are dependent on the Stocktake Method explained in the previous section.

> **Note:** Selecting the wrong Update Method is one of the most common issues with Stocktake as the system will calculate incorrect stock levels. Please ensure you select the correct method when authorising the stock take.

|  |  |  |
| --- | --- | --- |
| **Update Method** | **Stock Calculation** | **Details** |
| Absolute Method | Available = Count | The Available Quantity is updated to equal the value in the **Count** column e.g. if the count was 5, the Available stock will be set to 5. |
| Variance Method | Available = Variance | The Available Quantity will be adjusted by the calculated difference displayed in the **Variance **column. If there is a 0 variance the product will not be adjusted. The difference is calculated from what stock was expected (Stock on Hand) compared to what stock was counted (Count). For example, if there were 2 products expected but only 1 was counted a stock adjustment will be processed for -1, to reduce the stock from 2 to 1.  This method can theoretically be used where sales may have been processed during a Stocktake if there weren't any variances for the product (as the product stock levels won't be amended for a 0 variance and therefore will maintain the Qty level after the sale), however it is not recommended to process sales while undertaking a stocktake. |

#### [Authorising a Stocktake](https://galaxy.maropost.com/kb/articles/432-stocktake-stocktake-authorisation#authorise-stocktake)

1. Navigate to **Inventory > Stock Take > Stock Take Authorisation**
2. Enter valid **User Account **details and click **Log In**
3. A list of submitted stocktakes awaiting Authorisation will be displayed
4. To delete a Stocktake click the **Delete **button
  Please exercise caution before deleting a Stocktake - there are no warnings once the button has been clicked and they cannot be recovered.
5. To proceed with the Authorisation click **Select**
6. Select an **Update Method**
7. Review the fields as required (detailed information can be found below)
8. Click **Export to Excel **to create a spreadsheet file of the count - this can be saved or printed from Excel for your records.

> **Note:** This is not the same format as the Excel Stocktake method and cannot be used for adjusting stock levels)

9. To **authorise individual products **click the **Authorise **tick box for each relevant product
10. To **authorise all products **click the **Select All **button
11. To **send a product back for recount **ensure the Authorise button is unticked for that product. The count will not be submitted and the inventory will not be adjusted. Products can be accessed via Saved Stocktakes
12. Enter any notes** **into the **Comments** box e.g. if a product is suspected to have been counted incorrectly. These notes will be included on the stocktake details if there are any products sent back for Recount.
13. Click **Authorise Selected**

![stocktake_wirelessscan_authorise.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfYVEAY.jpg)
Authorised Stocktakes can be reviewed and reported using the Stocktake Report available at **Reports > Stock Reports > Stocktake Report**. Refer to the Reports - Stocktake Report article for more information.

Want more information? Find related articles here:

- Stocktake - Create a Stocktake (Browser)
- Stocktake - Stocktake Overview
- User Accounts
- Stocktake Report