---
title: "Stocktake - Create a Stocktake (Browser)"
articleID: 420
category: "Inventory > Stock Take and Stock Adjustments"
knowledgeBase: "Retail Express"
---

# Stocktake - Create a Stocktake (Browser)

A Browser Stocktake is the process of entering your Stocktake data directly into Retail Express. This can be done either using a barcode scanner (typically wireless for convenience) to scan stock, or by manually typing the count of products as well.

When using a Barcode Scanner the scan results are either sent back live to the receiver (typically connected via USB to your computer) or through a wireless base station (POS scanners have this functionality).

> **Note:** Need scanning hardware? Track n Trace provide stocktake scanner solutions for use with Retail Express. Click here to learn more.

## Overview

In order to perform a Browser Stocktake in Retail Express you will need to:

- Count products
- Submit the count for authorisation (this step is limited to Browser Stocktakes only - Excel Upload Stocktakes bypass the Authorisation step)
- Authorise the Stock Take

> **Note:** Check your scanner is compatible for stocktakes by reviewing the Hardware - Configuring Barcode Scanners for Retail Express article.

Using the Stocktake Method option you can choose what stock you're counting:

- **Stock on Hand** - available stock, plus any stock that's allocated to a sale (layby) or transfer
- **Available Stock** only

Note the Browser Stocktake feature has a **limit of 5000 products** so if you have more products, or don't wish to Filter your products and perform multiple stocktakes, the Excel Stocktake method (either manual or using a scanner) may be the best option for you.

> **Note:** It's best practice that you avoid trading while doing a Stocktake. However, if you need to continue to trade, we have a complete guide on how to adjust the stock to account for the sales during the Stocktake. Refer to the article Stocktake - Processing sales/trading while performing a stocktake for detailed information.

## Stocktake Methods (defining which stock is being counted)

The Stocktake Method you select depends on what stock you will be counting - Available and Allocated stock, or Available stock only. What option is selected will also affect what count value is available to use in the Stock Adjustment process (defined during the Stocktake Authorisation step).

> **Note:** Allocated stock is stock that is either sold but not yet Fulfilled (e.g. a Layby) or stock allocated to a transfer to another Outlet.

|  |  |  |
| --- | --- | --- |
| **Method** | **Stock calculation** | **Details** |
| Adjust Stock On Hand | Available = Total count - Allocated | The system looks at the total products that were counted during the Stocktake, and from that value deducts the Allocated stock. Whatever is remaining is assumed to be the correct value for the Available stock, and processes a Stock Adjustment to bring the Available qty to the equivalent of that number. E.g. There are 10 products counted, and 2 are layby products (Allocated stock). It assumes that 8 products are Available. If the system has recorded there are only 7 products currently in the Available status a stock adjustment is processed to increase Available stock by 1. The system now shows 8 Available, 2 Allocated for a total of 10 SOH.   > **Note:** If you select the Stocktake Filter "Include Picked Qty" you will need to ensure that you have included any Picked stock in the count i.e. stock in the process of being transferred via an Internal Transfer Order (ITO). This stock will be deducted in the calculation similar to Allocated. Refer to the "Filtering and setting Stocktake Options" below for detailed information on each filter.   ![stocktake_filters_picked.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfr0EAA.jpg) |
| Adjust Available | Available = Total count | Whatever stock is counted is the Available stock. Allocated stock is not factored into this calculation, and therefore should not be counted e.g. Laybys, stock awaiting transfer. E.g. There are 10 products counted, the system has only 7 in the Available status. A stock adjustment is created to increase the Available stock by 3, so that Available now shows 10.   > **Note:** Include Picked Qty should not be used with this method. |

## Filtering and setting Stocktake options

When selecting the products to be scanned you need to keep the following rule in mind:

> **Note:** Products cannot be included in more than one Stocktake for the same Outlet at a time. If you have the same product in a Saved or Awaiting Authorisation Stocktake for an outlet and you create another Stocktake, when that Stocktake is saved or submitted for Authorisation any products in an existing Stocktake will be removed/not saved. Navigate to Inventory > Stocktake > Saved Stock Takes/Stock Take Authorisation to review any outstanding Stocktakes.

To begin your stocktake by setting the filters and stocktake options:

1.   1. Navigate to **Inventory > Stock Take > Create Stock Take**
  2. Enter valid **User Account **details and click **Log In**
  3. Use the [filters](https://galaxy.maropost.com/kb/articles/420-stocktake-create-a-stocktake-browser#stocktake-filters) to narrow your product results

> **Note:** The Browser method has a limit of 5000 products in the results (not including multiples of the same stock e.g. a count of 10 for a single item is considered 1 product out of the 5000 limit, not 10). You will need to either filter the products to reduce the number being counted at one time, or use the scanner in the amended Excel stocktake using a Scanning Device method.

  4. Select a **Stock Take Method **i.e Adjust Stock on Hand or Adjust Available
    ![mceclip0 - 2023-07-10T020015.864.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphdNEAQ.jpg)

> **Note:** The method you select is extremely important and will determine which products you count - all stock on hand or Available stock only. See the Stocktake Methods section above for detailed information. Selecting the incorrect version can affect the accuracy of your Stocktake.

  5. Click **Browser Stocktake**
    ![mceclip1 - 2023-07-10T020019.713.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiCMEAY.jpg)
  6. The **Results **tab will be displayed with the products listed underneath

|  |  |
| --- | --- |
| **Filter** | **Details** |
| Sort Results By | The order in which the products are displayed on the Results page e.g. by Supplier, Supplier SKU, Description |
| Then Sort By | After the first Sort By result, what secondary option should the products be ordered e.g. if Supplier was selected in the first option and then Description, the products would be displayed in order of Supplier, with the products for each supplier appearing in alphabetical order |
| Product PLU | Used to filter the stock take to an individual selection only i.e. Product ID, Supplier SKU, or for multiple products with the same style code, Manufacturer SKU |
| Include Disabled Products | If products that have been marked as Disabled should be included in the results (note: this will affect the 5000 product limit) |
| Default Counts to Zero | Should be used with caution. When the products are initially filtered the stocktake process leaves the count field blank for all products. Products that aren't counted and have a blank "Count" field will be ignored when the Stocktake is approved - no inventory adjustment takes place. Ticking this option means that all products will automatically have a Count value of "0". When the stocktake is taken and submitted, any products with a Count value of zero will have their inventory levels reset back to zero. |
| Include Picked Qty | Includes into the SOH quantity any products currently in the "Picked" status of an Internal Transfer (refer to the article on Stock Transfers for more information) Should only be used when the Stock Take Method has been set to "Adjust Stock On Hand" method |
| Include Additional Barcodes | Tick this option to include additional product barcodes in your stocktake (otherwise products utilising an additional barcode may not be found when scanned). |
| Show only Negative Stock | Display only products where the SOH level is a negative |
| Include Core Products | The main or Core product lines only |
| Stock Take Method | This is an extremely important selection and will determine what stock should be counted - all stock on hand or available stock only. Refer to the Stocktake Methods section above for detailed information. |

## Scanning products

Once you have filtered your products and you're ready to begin scanning:

1. Click into the **PLU Scan **field
2. Scan a product; the **Count** column will increase by 1 for the matching product (the **Variance** column will also update based on the COGS value)

> **Note:** Ensure you have ticked the Stocktake option "Include Additional Barcodes" if using multiple barcodes with your products. The additional barcodes column is not shown, but scanning a valid barcode will increase the "Count" quantity.

  ![stocktake_wirelessscan_pluscan.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi60EAA.jpg)
3. Repeat for additional products (these can be in any order)
4. To manually adjust a count click into the **Count **column and type in the number e.g. if a product is accidentally scanned twice and you need to reduce the count by 1

> **Note:** Any products without a Count quantity will be ignored by the stocktake process and not updated; they will not have their stock levels set to zero. To reset the stock levels for these products click into the Count field and enter a 0, or tick the "Default Counts to Zero" option on the Filters to automatically set all products to 0 at the start of the count.

5. Click **Save **periodically to save the status of the count (refer to the Saved Stocktakes article for information on returning to a Saved Stocktake)

> **Note:** the behaviour on this page is controlled by your internet browser. This means the page may time-out if the page is inactive for too long. Saving the status will refresh the page and reduce the risk of losing any information.

6. Scroll to the bottom and update the **Stock Take Title **to a relevant name e.g. Furniture Department scan 01/07/2018
7. Review the **Comments** section at the bottom for any notes on products that were scanned but not found
8. Enter any additional **Comments **as required - these can be used for notes or to track which staff members were responsible for the count e.g. Counted by Brad and checked by Kelly, Product ID 125343 had 5 but one was broken. Entered count of 4 and stock adjusted 1 into Faulty.
9. Click **Export to Excel **to create a spreadsheet file of the count - this can be saved or printed from Excel for your records (note: this is note the same format as the Excel Stocktake method and cannot be used for adjusting stock levels)
10. Click **Submit for Authorisation**
11. Click **OK **to the message
12. The Stocktake will be placed into an **Awaiting Authorisation** status, where it can be reviewed, edited, or rejected and submitted for a recount.

> **Important:** Inventory levels are only adjusted when the Stocktake is Authorised. Any changes to the stock levels while a Stocktake is Awaiting Authorisation will not be reflected in the Stocktake e.g. if a product is sold. It's best practise to not trade while a Stocktake is in progress. Products can be submitted for recount if required, however this will increase the amount of time it takes to perform a total stocktake of your products.

> Next step: Authorise a Stocktake

## Frequently Asked Questions

[Managing Saved Stocktakes](https://galaxy.maropost.com/kb/articles/420-stocktake-create-a-stocktake-browser#saved-stocktake)

While undertaking a Browser Stocktake you may choose to save your stocktake (in fact it's recommended to do this periodically). Saving the stocktake allows you to either navigate away from the page and come back, or save your progress to reduce the risk of losing any data. As the behaviour on the Stocktake page is maintained within a browser the page may time-out; clicking Save will refresh the screen and the idle time, avoiding the time-out issue.

The inventory does not change when a Stocktake is saved - this only occurs when the Stocktake is authorised.

A Saved Stocktake can be created in two ways:

1. **Manually saving** a Browser Stocktake during the counting process
2. If a submitted Browser Stock Take is **sent back for a Recount** during the Authorisation process

> **Note:** The processing of a Stock Take requires the credentials of a User with Stocktake security access. Refer to the Users - Profile Security article for more information.

When managing a stocktake you have the option to:

- Delete the stocktake
- Rename the saved stocktake
- Resume the stocktake:  - Edit the count for existing products
  - Scan new products
  - Submit for Authorisation

To manage your Saved Stocktakes:

1. Navigate to **Inventory > Stock Take > Saved Stock Takes**
2. Enter valid **User Details **and click **Log In**
3. Select an **Outlet**
4. Click **Search**
5. The window will change to the **Results **tab and a list of the saved Stocktakes will be displayed
6. The **Status **column will indicate if a stocktake has been submitted for a Recount, or if it's one in progress (Counting)
7. To **remove** the stocktake altogether click **Delete**

> **Note:** There is no warning prior to deleting the Stocktake, care should be taken when pressing this button. Deleted stocktakes cannot be recovered.

8. To **rename** the stocktake click **Edit**
9. To **resume **the stocktake click **Select**
10. The window will change to the **Stocktake **items (to return to the list of saved stocktakes click the Results tab)
11. To edit the amount for a product that has already been counted click in the **Count** column and type in the new value
12. To continue scanning click the **PLU scan **field and begin scanning
13. Click **Save **periodically to save the status of the count (you will need to search and reselect the Stocktake to continue scanning)

> **Note:** The behaviour on this page is controlled by your internet browser. This means the page may time-out if the page is inactive for too long. Saving the status will refresh the page and reduce the risk of losing any information.

14. To finalise the stocktake click **Submit for Authorisation**
15. Click **OK **to the message

[Saved Stocktake is not showing](https://galaxy.maropost.com/kb/articles/420-stocktake-create-a-stocktake-browser#saved-not-showing)

If you have saved a stocktake and it's not showing it may have been submitted for Authorisation. Navigate to **Inventory > Stock Take > Stock Take Authorisation **to review a list of Stocktakes awaiting authorisation.

[Can you add products to an existing stocktake?](https://galaxy.maropost.com/kb/articles/420-stocktake-create-a-stocktake-browser#add-products-to-stocktake)

Once a stocktake has been created and saved it's not possible to add additional products (for example if the product was disabled, or had attributes that excluded it from the original search filters). You will need to create a new stocktake for the new products.

[Dealing with scanned products not found in the stocktake](https://galaxy.maropost.com/kb/articles/420-stocktake-create-a-stocktake-browser#product-not-found)

A common issue with the Stocktake is that products you expected to be available may not be there, either due to the filters in use or the limit of products.

The Browser stocktake feature has a **limit of 5000 products**, including multiples of the same stock e.g. a count of 10 for a single item is considered 10 products out of the 5000 limit, not 1. To account for this limitation you will need to either filter the products to reduce the number being counted at one time, or use the scanner in the amended Excel stocktake using a Scanning Device method. If more than 5000 products fit the search criteria only 5000 products will be displayed, and some will be left out).

In these cases you will still be able to scan the product, but instead of it updating the Count column a comment will be added to the bottom of the screen:

![stocktake_scan_comments_notfound.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiCREAY.jpg)
To resolve the issue and recount the products:

1. **Submit the existing stocktake for Authorisation **(to avoid losing any work already completed)
2. **Review the products and their attributes** to see if they may have been excluded based on the filters (so that you don't encounter the same issue next time)
3. **Create another stocktake** and ensure those products are included
4. **Recount** those products
5. **Submit the stocktake for authorisation**