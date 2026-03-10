---
title: "Release Notes 3.17.01"
articleID: 698
category: "2024 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-12-01
---

# Release Notes 3.17.01

This release will be available to all users by the end of February 2024.

New Features and Enhancements

## **Create Returns via API - Phase 1 Integrated Returns Features**

We've expanded the capabilities of the SOAP OrderCreateByChannel API method to accommodate specific refund and return scenarios for integrators and API Users. This is phase one of our Integrated Returns project and includes the ability to process both blank returns and returns associated with existing orders, providing users with a more comprehensive toolset for managing returns.

It's important to note that in this initial phase, the system supports the return of stock to an "Available" status. However, it does not currently allow the cancellation of unfulfilled items; rather, it focuses on facilitating refunds exclusively for fulfilled items.

- Supports both blank returns and returns for existing orders.
- Currently supports returning stock to Available.
- Cancelling unfulfilled items is not yet supported within Phase 1, only fulfilled items can be refunded via this method.

To view the relevant API documentation, please visit[this link](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.retailexpressmedia.com%2Fdocumentation%2Fapi%2Fv2%2FRetail%2520Express%2520-%2520EDS%2520API.pdf)

## **PO & Stock Receipt Enhancements**

Based on feedback received since the project launched mid 2023, we've listened; and added several small improvements to the PO and Stock Receipt functionality. The various improvements are aimed at further streamlining your worklow and efficiency from creating PO's right through to finalising your invoices.

### **Column Selections Retained**

-   - Users Browser Storage to retain the last used arrangement i.e. the configuration is stored per browser and so any user accessing on that browser will see the previous user's configuration.
  - Clearing Cache will reset/clear back to default values.

  Added logic to retain Column Selections and Sort Orders for PO Item, Advanced Search, and Stock Receipt Pages.

### **Added PO Item ID to the Stock Receipt Grid**

- Hidden By Default but can be enabled via the column menu in "Codes and SKUs" category.
- Updated Default Sort Order of Stock Receipt Grid to be sorted by PO Item ID Ascending.

### **Added POS Price to the Stock Receipt Grid**

- Hidden By Default but can be enabled via the column menu.
- Display Outlet Specific POS Price for the PO Outlet if set, else shows the Master POS Price.

### **POS Pricing**

We have added the ability to update POS Pricing for Select Item(s) via the Bulk Edit Modal in PO Items Grid

- Users can set outlet or master POS pricing by using the "Set POS Price" toggle.
- User Access is limited to either or both options based on our existing user security permissions for Master vs Outlet Product Editing.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/42e093a46d6d498d8e1c23bbeca44c98.05T5g00001AHXRWEA5.png)

### **"Scan and Count" when Creating a PO**

- We've added the scan and count toggle/dropdown concept to the PO Items Grid
- This is based on the existing concept we have in the Stock Receipt grid.

### **Advanced Search Changes**

- **PLU Scan Field **added to Advanced Search page to assist when searching for specify SKU's or Style Codes and wanting to avoid partial-matching results in the Quick Search field.
-   - Added toggle switch to "Show All Suppliers Products" products as needed.
  - Added Support for pressing the "Enter" key after typing a qty, we now add that item to the PO upon pressing enter to save needing to click the "Add to PO" button.

  **Default Filtering **now in place to only show Products against the Supplier on the PO

### **Portrait Orientation of PO Template**

- We have introduced a portrait-oriented version of the Purchase Order (PO) template within the newly introduced PO/Supplier Return Settings page, allowing users to seamlessly toggle between landscape and portrait orientations for their POs.
- Users can configure the layout orientation for POs via a new settings page.
- Applies globally to all suppliers, excluding those using the "Matrix" template.
- Supplier Returns remain in landscape format.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/b105442b6aeb422abbe275e062cea0fc.05T5g00001AHXj1EAH.jpg)
![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/1280a0ae861448839f16df14d30f74bb.05T5g00001AHXTXEA5.png)
**Barcode Graphic Configurations**

- The Barcode Graphic for Supplier Returns documents is now configurable to represent one of many codes/SKU values.
- It can also be hidden from Supplier Returns if not required by your business.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/07fcb1a28d7f4208b77ffbe45a138c1c.05T5g00001AHXMcEAP.png)
For more details on PO/Supplier Return Settings, please[click here](https://galaxy.maropost.com/s/article/PO-Supplier-Return-Settings)

**Other PO Stock Receipt Enhancements**

- Updated the Supplier Invoice Field when viewing PO details. It can now be expanded by clicking and drag to show more details if needed.
- Once an invoice has been finalised against the PO, the Invoice Number in the PO Details tab, becomes read-only and can only be edited within the stock receipt/invoice page directly.
- Updated the Legacy Stock Receipt Page to hide all PO details for PO's received via the new Stock Receipt/Invoice Process.
- Resolved an issue where Quick Receipt could cause duplicate stock receipts in certain cases.
- Updated behaviour to allow users to delete a product from a PO even after it's associated Special order invoice was Fulfilled in POS.
- Added Logic to Prevent placing empty PO's on order.
- Updated the Back-Order Button - Removed Icon and added a prompt when moving a PO from On-Order to Back Order. Also removed "Save and Close" footer button as is now redundant.
- Updated PO Items page "POS Price" value to display the Outlet POS Price if Outlet Specific Pricing is set instead of Master Pricing.
- MYOB Integration - An issue where negative Purchase Variances previously caused integrations to disconnect for certain users has now be resolved.

## **POS Enhancements**

### **POS - Company Name in Search Results**

- Added the Company Name to the results panel when searching for customer records in POS.
-   - 
    Company is also shown in results when searching via Lookup for customers and invoices.

    ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/775f0749995a4565899a2d122510556e.05T5g00001AHVKhEAP.png)

  Will display beside the First and Last Name values if the Company Name is populated against the customer record.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/88e49d4a82254f90865cdfbf425edd9d.05T5g00001AHXVOEA5.png)
![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/42d21342f9dc431fbf102773d33598fc.05T5g00001AHXVsEAP.png)

- **Special Order Allocation** - We've introduced a convenient shortcut for quick access to the "Select PO To Allocate From" link, fromw within the "Product Details" page streamlining the allocation process.
- **Copy to Clipboard** icon has been integrated into various key areas, including  - Invoice Preview
  - Customer Lookup
- **Core Products Checkbox **has been added to the Advanced Search Filters Grid for user control and customization in search criteria.
- **Advanced Search **- Resolved an issue with Advanced search qty filters when using greater or less than options returns invalid results.
- **Dashboard -** Added a checkbox to allow users to display data across the entire 24-hour time span for the date selected.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/f9befa150ee740ee9a9a12de030d5ec2.05T5g00001AHXY3EAP.png)

### **Scheduled Price Change Enhancement - Clear Outlet Specific Pricing**

This feature enhancement allows users to clear outlet-specific POS pricing from one or many outlets using Scheduled Price changes.

With the new "Clear Price" button (which you can find for Outlet Promo and POS Pricing) users can execute scheduled price changes that eliminate outlet-specific pricing.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/8b7b8a4b5a5846cbbb3597aa07d2ebb7.05T5g00001AHWuYEAX.jpeg)

> **Note:** It allows products to seamlessly revert to the master pricing configuration in cases where one or many outlets previously had outlet-specific POS/Promo Pricing configured

- The new "Clear Price" option deletes outlet-specific pricing, defaulting products back to using master pricing.
- Provides an easier alternative to the legacy mass upload "Clear Data" concept.

### **User Management - Enhancements**

We have added the ability to store an email address against users within the back office **under Staff > Users.** When using Export Download Manager, if your user profile has an email address set, it will auto-populate in the email field to send the export. Specify the email when creating or editing a user in the users page, or when creating via mass upload.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240206at124117PM.05T5g00001AIAtoEAH.png)
When uploading users on mass via Excel, we also added support to optionally include the Outlet Access, Stock Outlet Access and Security Profile that are to be assigned to the new user upon creation.

- List the word "All" to set all outlet/stock outlets, or specify the outlet ID's in a comma-delimited string.
- Specify the Profile ID to allocate a profile to the user, you can see the ID within Staff > Profile Security.
- The new fields are visible in the blank "User Upload" Excel template and are entirely optional.

### **General Enhancements**

- **Style Reporting**  - New Filter Checkboxes Added to several reports to allow users to optionally group style products based only on style code.
  - To access more details for each report, please click on the links below.    - [Style Holdings Report](https://galaxy.maropost.com/s/article/Style-Holdings-Report)
    - [Stock Sales Matrix By Colour Report](https://galaxy.maropost.com/s/article/Stock-Sales-Matrix-by-Colour)
    - [Style on Hand Matrix Report ](https://galaxy.maropost.com/s/article/Style-Inventory-On-Hand-Matrix)

- **Style On Hand Inventory Report - Added New Grouping Filter**  - To be a style product, the product must have several values populated, For example, Style Code and Size and Colour and Brand.
  - In this enhancement, we've added a new filter, to let users decide what fields are used when grouping by style.
  -     - "Default" which requires Style Code AND (Size OR Colour OR Brand OR Season) to be set.
    - "Style Code Only"
    - Only Requires Style Code and shows Blank Value for "Brand", and "Colour" in results for any where no Colour/Brand is set.

    The "Group Style Based on" Filter has now been added and allows users to select:

-   - Restructured the report and added a new column "Freight/Surcharges/Vouchers"
  - Freight, Surchargers and Vouchers were previously included in the fulfilled/unfulfilled values which was ambiguous as these are fulfilment agnostic.
  - Updated the calculations used for Fulfilled Values + Unfulfilled Values to ensure consistency with the total overall order value.

  **EOM Customer Deposit Report**

-   - Back Office Edit Product Page - Resolved an Issue preventing changes to MSL values from saving correctly.
  - UI Enhancement to the Day Diary Outlet Selection box in the Back Office which overlapped when long outlet names existed.
  -     - Added the ability to search for up to 25 commas or space-delimited customer ID's on the filter page. This will assist with searching for known duplicates that were identified via other means, ready for merging using the "Merge Customers" feature.

    Customer Manager - Back Office
  -     - Item Sales Report, Gross Profit Report - Fulfilled, Gross Profit Report - Invoiced
    -       - Customer Type
      - Price Group
      - Price Group Fixed
      - Order Source

      Also includes new filters for both the Fulfilled and Invoiced Gross Profit Reports
    - Customer Type added to the Results Grid for Invoiced/Fulfilled GP Reports

    Additional Reports Now use Export Download Manager

  **Other Enhancements**

### **API Enhancements**

-   -     -       -         - product_id
        - outlet_id
        - sell_price_inc
        - promotional_price_inc
        - promotional_price_start
        - promotional_price_end

        pricing

      Response now Includes outlet specific pricing details within the "pricing" submodel

    /purchaseorderitems, ​/purchaseorderreceipts​/, {id}​/purchaseorderreceiptitems, /purchaseorderreceipts/{id}, /purchaseorderreceiptitems/batch

  Enhanced existing endpoints and extended their response to include a pricing submodel allowing retrieval of outlet-specific pricing information for the PO Items and PO Receipt Items.

-   -     - pricing_sell_price_inc
    - pricing_promotional_price_inc
    - pricing_promotional_price_start
    - pricing_promotional_price_end

    filter_by, order_by

  Extended GET to support filtering:

-   -     - sell_price_inc

    product
  -     - sell_price_inc

    pricing

  Updated PUT for the above endpoints to allow users to update master and/or outlet-specific POS prices:

- Add Support to Filter by "created_on" date for the below endpoints.  - GET /orders
  - GET​/orders​/ {id}​/orderitems
  - GET​/orders​/{id}
  - GET ​/payments
  - GET​/orderfulfilments
  - GET​/orderitems
  - GET ​/orderpayment

- For Full Details on the chanes made to our API's in this release - Visit: [Retail Express API Documentation](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdeveloper.retailexpress.com.au%2F).

## **Minor Updates and Fixes**

Below is a list of improvements and resolutions included in the release:

- **Sales Report: **Updated logic to allow sorting by the "Sales Inc" column header.
- **Supplier Returns: **Updated the exported PDF file to prevent truncating of labels/columns in certain cases.
- **POS:**  - Resolved an issue where removing tax from an item in POS was not calculating correctly when Fixed Price Groups were in play.
  - Resolved an issue preventing voucher redemptions less than $1.00 from applying correctly.
  - Resolved an issue where coupons would not apply and correctly triggered promotional campaigns in some cases.
  - **POS Order Items: **Resolved an issue where removing tax from an item in POS was not calculating correctly when Fixed Price Groups were in play.
  - **PO Report: **Resolved an issue where the Supplier Filter was not obeyed in search results in certain cases.
- **Return Reasons & Return Reason (Limited) Reports: **Updated the calculation used to display Ex Tax Pricing, which was previously showing as including tax.
- **Account Customer Activity Statements: **Updated to now display credit note payments within the statement transaction listings.
- **Newsletters: **Prevented the upload of attachments/images with spaces within the file names to ensure they display correctly for recipients across various mail platforms.
- **Receive Transfers Page: **Resolved an issue causing errors on the Receive Transfers page when searching for specific ITO's in certain cases.
- **Customer Mass Download: **Resolved an issue where Outlet Names containing special characters would cause errors upon download.
- **Promotional Campaigns:**  - Changes are made to ensure the best price is offered when both "Fixed Price" and "Promo Campaign" discounts are present.
  - Resolved an issue where discounts could be applied to the wrong item in certain cases.
  - Display correct results when filtering by the correct Promotional Campaign.
  - Prevented an issue where discounts appeared to stack in cases when using "Buys at Least" discount rules and multiple qualifying quantities are purchased.
- **Account Statements: **Removed the Logo Column from the exported Excel File, which could cause exporting to fail in some cases.
- **Transfers - Pick List Export: **Resolved issue where the Excel export from the Pick Transfers page contained no values for SOH.
- **New Payment Type - MyDeal: **Added a new Payment Type named "MyDeal" to Settings > Payment Types.

> **Important:** We're excited to announce the upcoming release of several new features. While these features may not be immediately visible in your Retail Express system, they are planned to launch in the coming weeks. Stay tuned for a separate announcement regarding the below features:

- **Financial Movement Log** - Monitor cost change movements for products
- **Product Detail log** - Tracks the values of before and after modifications to key product attributes and price details.
- **Invoice Date Feature** - For PO Stock Receipts, users will be able to designate the invoice date as part of the stock receipt process.