---
title: "Stocktake - Excel Advanced with a Barcode Scanner"
articleID: 421
category: "Inventory > Stock Take and Stock Adjustments"
knowledgeBase: "Retail Express"
lastUpdated: 2026-01-28
---

# Stocktake - Excel Advanced with a Barcode Scanner

The Excel Stocktake Scan Method uses the Retail Express Excel Stocktake functionality with the addition of a scanning device, including Mobile Phones, Devices and Tablets.

To complete the stocktake products are loaded into the Excel Scan tool, the stocktake completed, results loaded back into the Stocktake spreadsheet and imported into Retail Express.

> **Note:** The Excel Stocktake Scan process is only compatible with Windows computers, and will not work with a Mac OS.

[Download the Excel Scan Tool now](https://s3.ap-southeast-2.amazonaws.com/www.retailexpressmedia.com/downloads/support/ExcelWirelessScanv5_V3.xlsm)

## Overview

There is **no Authorisation step** for the Excel upload. If you require authorisation for your stock count you can adjust the Security Profile permissions to limit access to the "Stocktake" functionality to only those authorise to upload (they will need to provide the Excel spreadsheet to staff performing the Stocktake that are unable to access this feature).

### Stocktake Methods (defining which stock is being counted)

The Stocktake Method you select depends on what stock you will be counting - Available and Allocated stock, or Available stock only. What option is selected will also affect what count value is available to use in the Stock Adjustment process (defined when uploading the file).

This method is selected **at the point of creating the Excel file**.

> **Note:** Allocated stock is stock that is either sold but not yet Fulfilled (e.g. a Layby) or stock allocated to a transfer to another Outlet.

|  |  |  |
| --- | --- | --- |
| **Method** | **Stock calculation** | **Details** |
| Adjust Stock On Hand | Available = Total count - Allocated | The system looks at the total products that were counted during the Stocktake, and from that value deducts the Allocated stock. Whatever is remaining is assumed to be the correct value for the Available stock, and processes a Stock Adjustment to bring the Available qty to the equivalent of that number. E.g. There are 10 products counted, and 2 are layby products (Allocated stock). It assumes that 8 products are Available. If the system has recorded there are only 7 products currently in the Available status a stock adjustment is processed to increase Available stock by 1. The system now shows 8 Available, 2 Allocated for a total of 10 SOH.  > **Note:** if you choose Include Picked Qty you will need to ensure that you have included any Picked stock in the count (it will be deducted in the calculation similar to Allocated). |
| Adjust Available | Available = Total count | Whatever stock is counted is the Available stock. Allocated stock is not factored into this calculation, and therefore should not be counted e.g. Laybys, stock awaiting transfer. E.g. There are 10 products counted, the system has only 7 in the Available status. A stock adjustment is created to increase the Available stock by 3, so that Available now shows 10.  > **Note:** Include Picked Qty should not be used with this method. |

### Stocktake Update Methods (defining which stock is being adjusted)

The Stocktake Update Method defines what stock is being *adjusted*, compared to the Stocktake Method which relates to which stock is being *counted*. The values are dependant on the Stocktake Method selected when the Stocktake was created - for example how the Stock On Hand figure was calculated.

> **Note:** What Stocktake Update Method you select directly affects the update to the quantity levels in Retail Express, so it's essential you choose carefully.

|  |  |  |
| --- | --- | --- |
| **Method** | **Excel field** | **Details** |
| Absolute | Your Count | Updates the Available quantity with the figure entered into the "Your Count" column as an absolute quantity e.g. if the value was 5 the stock will be adjusted to equal 5. |
| Variance | Variance | The Available Quantity will be adjusted by the calculated difference displayed in the Variance column. If there is a 0 variance the product will not be adjusted. The difference is calculated from what stock was expected (Stock on Hand) compared to what stock was counted (Your Count). For example, if there were 2 products expected but only 1 was counted a stock adjustment will be processed for -1, to reduce the stock from 2 to 1. |

### Stocktake Filters

|  |  |
| --- | --- |
| **Option** | **Details** |
| Sort Results By | The order in which the products are displayed on the Results page e.g. by Supplier, Supplier SKU, Description |
| Then Sort By | After the first Sort By result, what secondary option should the products be ordered e.g. if Supplier was selected in the first option and then Description, the products would be displayed in order of Supplier, with the products for each supplier appearing in alphabetical order |
| Product PLU | Used to filter the stock take to an individual selection only i.e. Product ID, Supplier SKU, or for multiple products with the same style code, Manufacturer SKU |
| Include Disabled Products | If products that have been marked as Disabled should be included in the results (note: this will affect the 5000 product limit) |
| Default Counts to Zero | Should be used with caution. When the products are initially filtered the stocktake process leaves the count field blank for all products. Products that aren't counted and have a blank "Count" field will be ignored when the Stocktake is approved - no inventory adjustment takes place. Ticking this option means that all products will automatically have a Count value of "0". When the stocktake is taken and submitted, any products with a Count value of zero will have their inventory levels reset back to zero. |
| Include Picked Qty | Includes into the SOH quantity any products currently in the "Picked" status of an Internal Transfer (refer to the article on Stock Transfers for more information) Should only be used when the Stock Take Method has been set to "Adjust Stock On Hand" method |
| Include Additional Barcodes | Tick this option to include additional product barcodes in your stocktake (otherwise products may not be found when scanned if using a barcode other than Supplier SKU). |
| Show only Negative Stock | Display only products where the SOH level is a negative |
| Include Core Products | The main or Core product lines only |
| Stock Take Method | This is an **extremely important** selection and will determine what stock should be counted - all stock on hand or available stock only. Refer to the Stocktake Methods section above for detailed information. |

## Performing a Stocktake

### Step 1 - Exporting Retail Express products

To identify the products that will be included on the stocktake you will need to export a list of the products from Retail Express. This will then be imported into the Excel Scan tool ready for your barcode scanner.

1. Navigate to **Inventory > Stock Take > Create Stock Take**
2. Enter valid **User Account **details with access to Stocktake and click **Log In**
3. Use the **filters** to generate your file (see above for detailed information on each filter and option)
4. The method you select is extremely important and will determine which products you count - all stock on hand or Available stock only. See the Stocktake Methods section above for detailed information. Selecting the incorrect version can affect the accuracy of your Stocktake.
5. Click **Create Excel File**
6. A file will begin **downloading **to your computer - this is your **Excel Stocktake File**. Depending on the number of products you have selected it may take a minute for the file to generate and begin downloading.
7. Make a **note of the saved location **- you will need this file in the next section.
8. **Do not open this file **- this file will be used in a future step to import into the excel scan file; no modifications should be made to the file.

![mceclip0 - 2023-07-10T020249.021.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiCbEAI.jpg)

### Step 2 - Downloading the Excel Scan Tool

The Excel Scan tool is used during the Stocktake Process to scan and count products. This file is initially blank, but during a later step the products will be downloaded from Retail Express and imported into this file.

> **Note:** The file is a "Macro-enabled Excel Workbook" and is only compatible with Windows PCs running Microsoft Office 2010+. This is not compatible with Mac OS.

To download the file:

1. Click the [ExcelWirelessScanv5.xlsm](https://s3.ap-southeast-2.amazonaws.com/www.retailexpressmedia.com/downloads/support/ExcelWirelessScanv5_V3.xlsm)** **link
2. The file will download to your computer
3. **Save **the file in an appropriate location
4. **Open **the file
5. If you encounter a **Security Risk error** follow the instructions in the Frequently Asked Questions to unblock the file
  ![rtaImage - 2023-07-10T020255.095.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi2SEAQ.jpg)
6. Click the **Enable Editing **button to unlock the file
7. Click **Enable Content** to enable the Scanning features
  ![mceclip2 (96).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiCgEAI.jpg)
8. Keep this file open ready for importing the Stocktake spreadsheet

### Step 3 - Importing the Stocktake Spreadsheet into the Excel Scan tool

The Stocktake spreadsheet is populated into the Excel Scan Tool in order to give your scanned products something to reference. As each product is scanned and located the count will be updated.

To import the spreadsheet:

1. Open the [ExcelWirelessScanv5.xlsm](https://s3.ap-southeast-2.amazonaws.com/www.retailexpressmedia.com/downloads/support/ExcelWirelessScanv5_V3.xlsm) file downloaded in step 2.
2. Click **Start**
3. A warning will be displayed reminding about an empty Stocktake spreadsheet downloaded from Retail Express. Click **Yes**
4. Browse to the location of the file downloaded in section 2 and click **Open**
5. The products will be populated into the Excel Scan spreadsheet **ExcelWirelessScanv5.xlsm**
  ![mceclip3 (63).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiClEAI.jpg)

### Step 4 - Performing a stocktake

To perform a stocktake:

1. Click the empty **Search **field
2. **Scan** a product barcode
3. The file will filter to the scanned product and enter a **Your Count **value of 1
  ![stocktake.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiCqEAI.jpg)
4. Continue to scan additional products - if you scan a different product it will filter to that product and add the count, but the count values will remain intact for any other products you have already counted
5. If you select Short Description but enter a Supplier SKU the results will be limited to the Short Description field only and may not return the intended product.
6. Press **Clear Filters **to reset the view and see all products (the Your Count value will be retained)
7. Ensure that if you have used Search that you have cleared theLookup option so that it resumes updating the Your Count value for products.
8. For **multiple products **click into the **Your Count **column and manually enter a value
9. When a barcode is scanned and there are **No Matching Products** the product results section will be blank and an alert tone will sound to indicate the error (the speakers on the computer must be enabled and the volume at an appropriate level)
10. Click the **Errors **tab of the spreadsheet - a list of products will be displayed
  ![mceclip4 (37).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiCvEAI.jpg)
11. Click the **Stocktake **tab to resume counting products
12. Click **Save **to save the progress

### Step 5 - Complete and save the Stocktake file

Once you have completed your Stocktake and you're ready to upload the file into Retail Express you will need to click Finish and follow the prompts.

1. On the spreadsheet click **Finish**
2. A message will be displayed to confirm you would like to proceed, click **Yes**
3. The **Default Counts to Zero **option gives you the ability to reset the inventory to zero if the product wasn't counted; click **Yes** to reset those products, or click **No** to leave their inventory levels untouched (it will remain the current level in Retail Express)
4. The file will be saved in the same location as the existing file you have been working on - [ExcelWirelessScanv5.xlsm](https://www.retailexpressmedia.com/downloads/support/ExcelWirelessScanv5.xlsm).
5. Click **OK**
6. The new file will be opened in the format required by Retail Express to upload the stocktake. **Close the file without making any changes**
  ![mceclip5 (27).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiBpEAI.jpg)

### Step 6 - Upload the Stocktake file into Retail Express

Once the upload file has been created you can upload it into Retail Express to update the stock levels for your products.

> **Note:** If you have processed sales while the Stocktake was underway you will need to either adjust the Stocktake file prior to upload, or enter Manual Adjustments into Retail Express afterwards. Refer to the Stocktake - Processing sales/trading while performing a stocktake article for detailed information on this process.

To upload the Stock Take Excel File:

1. Log into Retail Express
2. Navigate to **Inventory > Stock Take > Create Stock Take**
3. Enter valid **User Account **details and click **Log In**
4. Click the **Skip to Upload** button in the bottom left-hand corner
  ![mceclip1 - 2023-07-10T020329.242.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiD0EAI.jpg)
5. Click **Browse **and locate the Stocktake Excel file
6. Select the **Outlet** for the Stocktake
7. Select an **Update Method**
**Important - **ensure you select the correct method to ensure the adjustments to the Inventory are processed correctly. Refer to the Stocktake Update Methods section above for detailed information
8. Enter any **Comments **as required e.g. the name of the staff responsible for the count
9. Click **Submit Stocktake**

The result will be applied to your Inventory levels immediately. To report on the Stocktake refer to the Stock Take Report.

**Did you know?**:If you have a mobile device (tablet or smart phone) you can use the Retail Express Mobile Stocktake options to perform a Stocktake (including a simplified Excel version and a web app).

## Frequently Asked Questions

I get a "Security Risk" error about blocked macros when I try to load the Excel Scan Tool

Depending on your security settings you may encounter a "Security Risk" error when Microsoft tries to open the file.

![rtaImage - 2023-07-10T020335.106.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiD5EAI.jpg)
You will need to unblock the file before you can begin using it.

1. Open **Windows File Explorer**
2. Navigate to where you downloaded the file e.g. Downloads folder, Desktop etc
3. **Right-click** on the file > select **Properties**
4. Tick the **Unblock **option at the bottom of the window
  ![rtaImage - 2023-07-10T020340.467.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiD6EAI.jpg)
5. Click **OK**

To resolve the issue permanently, you can add our Knowledge Base to your list of trusted sites.

1. Click the **Start **menu
2. Type **Control Panel **and click the Control Panel option
3. Click **View By **and select "Small Icons"
4. Click **Internet Options**
5. Click the **Security** tab
6. Click the green **Trusted Sites **option
7. Click **Sites**
8. Enter the **URL **"[https://galaxy.maropost.com](https://galaxy.maropost.com)" and click **Add**
9. Click **Close**
10. Click **OK **to close the Internet Properties