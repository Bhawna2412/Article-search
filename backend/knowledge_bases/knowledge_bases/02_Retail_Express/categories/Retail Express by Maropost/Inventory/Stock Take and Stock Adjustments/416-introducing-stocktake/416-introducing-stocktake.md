---
title: "Introducing Stocktake"
articleID: 416
category: "Inventory > Stock Take and Stock Adjustments"
knowledgeBase: "Retail Express"
---

# Introducing Stocktake

You can use **Retail Express** stocktake functionality to perform physical inventory counts and reconcile with system records, helping maintain accurate stock levels and identify discrepancies. This improves your retail operations by providing structured count processes, with properly executed stocktakes typically improving inventory accuracy and reducing shrinkage through regular verification.

Understanding stocktake processes involves recognizing count methodologies, variance handling, and adjustment procedures to help retail operators focus on the right inventory accuracy workflows, ensuring your retail strategy consistently drives better stock control and financial reporting accuracy outcomes.

Retail Express has multiple different methods available to perform a stocktake, from scanning directly into a computer to using mobile devices. You can even use multiple devices at once and consolidate the counts prior to upload.

## []()Interactive Stocktake Guide

Below you will find an interactive guide to the different available options to processing a Stocktake using Retail Express. Each method has its own individual requirements, and the best method to use will depend on your business requirements e.g. the number of staff processing stocktake, available hardware/device resources etc. A more detailed comparison of each method can be found below.

> **Note:** To create/process a Stock Take you will need a user account with access to the "Stock Take" feature, and if using the Browser scan method the "Stock Take Authorisation" feature. Refer to the Users - Profile Security article for more information.

## Stocktake Comparison

Click on the Method name to view detailed information.

- [Browser](https://galaxy.maropost.com/kb/articles/416-introducing-stocktake#browser)
- [Excel (Basic)](https://galaxy.maropost.com/kb/articles/416-introducing-stocktake#excel-basic)
- [Excel (Advanced)](https://galaxy.maropost.com/kb/articles/416-introducing-stocktake#excel-adv)
- [Mobile/PDA](https://galaxy.maropost.com/kb/articles/416-introducing-stocktake#mobile)

### Browser Stocktake

**Requirements:**

- Barcode Scanner

**Details**

- Scan barcodes of products directly into Retail Express to increase the count i.e. directly into your Internet Browser.
- The count is submitted for Authorisation.
- Stock levels updated once Authorised.
- **Limit of 5000 products.**
- Products can be filtered and multiple stocktakes conducted to account for all products (to avoid product limit).

**Multiple staff:**

- Multiple staff members can create Stocktakes at the same time **providing the same products are not on more than one list**.
- Use the Filters to generate separate lists for counting e.g. one staff member counting clothing, another counting accessories.

### Excel Basic

**Requirements:**

- Computer with Microsoft Excel

**Details**

- Products are downloaded into a Microsoft Excel spreadsheet.
- Count manually entered into the column.
- The file can be emailed to be reviewed prior to upload.
- Stock levels are updated when the file is imported.

**Multiple staff:**

- Multiple staff members can do a Stocktake at the same time.
- **Product counts must be manually combined in Excel prior to upload **e.g. two staff members counting the same clothing.
- Separate uploads will replace previous counts.
- Counts of separate products can be uploaded individually e.g. a count of clothing, a count of accessories.

### Excel Advanced

**Requirements**

- Computer with Microsoft Excel
- Barcode Scanner

**Details**

- Products are scanned and counted directly into Excel.
- A custom-built Excel tool will automatically count products as scanned and report on any missing products.
- The file is converted into a Retail Express Stocktake spreadsheet ready for upload.
- The file can be emailed to be reviewed prior to upload.
- Stock levels are updated when the file is imported.

**Multiple staff:**

- Multiple staff members can do a Stocktake at the same time.
- **Product counts must be manually combined in Excel prior to upload **e.g. two staff members counting the same clothing.
- Separate uploads will replace previous counts.
- Counts of separate products can be uploaded individually e.g. a count of clothing, a count of accessories.

### Mobile Devices

**Requirements**

- Mobile Device (can be either a PDA device, or Mobile Device (phone or tablet) with spreadsheet functionality, and Bluetooth scanner
- Barcode Scanner
- Email address
- Computer with Microsoft Excel

**Details**

- Using a Mobile Device/PDA the following options are available:
	- Scanned into an Excel file (devices must be using Microsoft Excel)
	- Scanned into a PDA text file 
	- Scanned into the Retail Express Stocktake web app
- Data is then imported into the Excel Scan tool used in the previous method, then converted into a Retail Express Stocktake spreadsheet ready for upload.
- The file can be emailed to be reviewed prior to upload.
- Stock levels are updated when the file is imported.

**Multiple staff:**

- Multiple staff members can do a Stocktake at the same time.
- **Product counts must be manually combined in Excel prior to upload **e.g. two staff members counting the same clothing.
- Separate uploads will replace previous counts.
- Counts of separate products can be uploaded individually e.g. a count of clothing, a count of accessories.

> **Note:** Need scanning hardware? Track n Trace provides stocktake scanner solutions for use with Retail Express. Click here to learn more.

## []()Stocktake Methods (which stock is being counted)

The Stocktake Method you select depends on what stock you will be counting - Available and Allocated stock, or Available stock only. What option is selected will also affect what count value is available to use in the Stock Adjustment process (defined when uploading the file).

There are different advantages to using a particular method:

- **Adjusting the Stock On Hand** - count all stock in your Outlet; there's no need to separate stock that's already been allocated to a sale
- **Adjust Available - **you are only counting stock still available to sell (not already allocated to a sale). This reduces the amount of stock to be counted, and therefore the total time required to perform a Stocktake.

This method is selected **at the point of creating the Excel file**.

> **Note:** Allocated stock is stock that is either sold but not yet Fulfilled (e.g. a Layby) or stock allocated to a transfer to another Outlet.

|  |  |  |
| --- | --- | --- |
| **Method** | **Stock calculation** | **Details** |
| Adjust Stock On Hand | Available = Total count - Allocated | The system looks at the total products that were counted during the Stocktake, and from that value deducts the Allocated stock. Whatever is remaining is assumed to be the correct value for the Available stock, and processes a Stock Adjustment to bring the Available qty to the equivalent of that number. E.g. There are 10 products counted, and 2 are layby products (Allocated stock). It assumes that 8 products are available. If the system has recorded there are only 7 products currently in the Available status a stock adjustment is processed to increase Available stock by 1. The system now shows 8 Available, 2 Allocated for a total of 10 SOH.  > **Note:** if you choose Include Picked Qty you will need to ensure that you have included any Picked stock in the count (it will be deducted in the calculation similar to Allocated). |
| Adjust Available | Available = Total count | Whatever stock is counted is the Available stock. Allocated stock is not factored into this calculation, and therefore should not be counted e.g. Laybys, stock awaiting transfer. E.g. There are 10 products counted, the system has only 7 in the Available status. A stock adjustment is created to increase the Available stock by 3 so that Available now shows 10.  > **Note:** Include Picked Qty should not be used with this method. |

## []()Stocktake Update Methods (which stock is being adjusted)

The Stocktake Update Method defines what stock is being *adjusted*, compared to the Stocktake Method which relates to which stock is being *counted*. The values are dependant on the Stocktake Method selected when the Stocktake was created - for example how the Stock On Hand figure was calculated.

There are advantages to using each method:

- **Absolute - **No calculations are required - whatever number you enter is what the stock will be adjusted to
- **Variance - **If there is no variance between what you have counted and what there is in Retail Express no adjustment will be entered. This method can also be used for processing a Stocktake while continuing to trade

> **Note:** What Stocktake Update Method you select directly affects the update to the quantity levels in Retail Express, so it's essential you choose carefully.

|  |  |  |
| --- | --- | --- |
| **Method** | **Excel field** | **Details** |
| Absolute | Your Count | Updates the Available quantity with the figure entered into the "Your Count" column as an absolute quantity e.g. if the value was 5 the stock will be adjusted to equal 5. |
| Variance | Variance | The Available Quantity will be adjusted by the calculated difference displayed in the Variance column. If there is a 0 variance the product will not be adjusted. The difference is calculated from what stock was expected (Stock on Hand) compared to what stock was counted (Your Count). For example, if there were 2 products expected but only 1 was counted a stock adjustment will be processed for -1, to reduce the stock from 2 to 1. |

## []()Stocktake Reports

Once you have completed the Stocktake, there are a variety of reports within Retail Express that you can use to report on the data.

|  |  |
| --- | --- |
| **Report** | **Purpose** |
| Stocktake Report | Reports on Authorised Stocktakes including variance details |
| Stock Value vs Sales report | Used for reporting on the current stock/inventory value |
| Stock Adjustment Report | Detailed information about stock movements as a result of submitted stocktakes (as well as any manual adjustments), including quantities, values and variances |