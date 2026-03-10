---
title: "Release Notes 3.18.01.2"
articleID: 2
category: "2025 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-03-17
---

# Release Notes 3.18.01.2

## **Purchase Order & Supplier Enhancements**

Various Purchase Order & Supplier Enhancements additional functionality and flexibility in purchase order management. These enhancements optimize stock replenishment processes, improve data tracking, and provide new export functionalities for greater efficiency in procurement operations.

* Stock Replenishment via PO - New **“Include Incomplete PO’s”** Filter option

  + Users can now optionally include incomplete purchase orders in replenishment calculations by deducting the "On Order" quantity for Incomplete PO’s when the "Include Incomplete PO's" flag is enabled.
  + Prevents over-ordering by adjusting suggested replenishment quantities to exclude items already on incomplete purchase orders.

![](src)![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/11.05TJ100000YbSuHMAV.png)

### 

* **PO Email "From Address" Enhancement**
  + New logic added to ensure that when sending PO emails, the "From Address" obeys the **Master vs. Outlet PO setting** for **PO Manager** and **Stock Replenishment via PO.**
  + To configure this setting, Go to **Settings > PO & Supplier Return Settings** > select **"Display Master or Outlet Data on PO’s"** > choose between "Master" (uses global email) or "Outlet" (uses the warehouse’s email, if available).  
    ![](src)![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/21.05TJ100000YbSubMAF.png)

* **PO Flat File -** Users can **download Excel PO flat files directly** from the final step in the **Stock Replenishment via PO** process.
  + **New "Export Excel" column** added beside each PO ID along with "Export All" button to download all POs in a single **ZIP file**
* **Supplier Comments within Email Message Body -** Introduced a new setting to dynamically insert **Supplier PO Comments** from **Settings > PO & Supplier Return Settings**.
  + If enabled, the email will include:
    - First line: "Please find attached Purchase Order #XXXX for [Company Name]"
    - Supplier comments from settings.
    - If disabled, only the first line is included.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/31.05TJ100000YbSulMAF.png)

  
  

![](src)

* **PO "Created" and "Modified By"**
  + Added logging and visibility of “Created By” and “Modified By” against Purchase Orders.
  + Values are displayed in the PO Items, and PO Details page and also PO Detail Report & Export.

## **POS - Email Template and Invoice “Salesperson” Enhancements**

**Salesperson Placeholders -** We have introduced additional placeholders in the **Email Template Builder**, allowing users to dynamically control the content displayed in the **email body**.

* Salesperson First Name.
* Salesperson First & Last Name
* Current User First Name
* Current User First & Last Name

  📋 **Note**: "Salesperson" represents the sales person assigned to the invoice wheras "Current User" is the current logged in user who actually sends the email (which can be different to order sales person).

**![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/4.05TJ100000YbvUhMAJ.png)  
  
  
  
Hide/Show Salesperson Name on Invoices:** Implemented a setting to hide the Salesperson field in PDFs (invoice, pick, dispatch) as well as Thermal Receipts and POS email invoices.

* Configured under Settings > POS Settings > Invoice/Receipt Settings > "Display Sales Person Name on Invoices & Receipts"  
    
  *![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/5.05TJ100000YbvWTMAZ.png)*

## **General Enhancements & Resolutions**

* **Creating/Editing Products & Packages:** Mass Upload 2.0 / Legacy Upload / Create and also Duplicate Product features now support ' “ and / characters in uploads and product create/editing.
* **Stock List Matrix Report** - Resolved an issue where longer descriptions would extend beyond page width.
* **AVG COGS Calculation:** Fixed an issue where the report incorrectly calculated average COGS and other metrics when no Supplier SKU/PLU filter was applied.
* **PO Display:** Fixed an error of displaying incorrect supplier information due to outlet settings and "Display Master or Outlet Specific Data" configuration.
* **PO Stock Receipt:** Resolved issue preventing previously made available stock receipts from being finalized.
* **Transfers PDF** - Updated Logo Scaling to avoid overlap with page content.
* **Account Statements:** Resolved an issue with Account Statements where the PDF Documents previously contained an additional blank page unnecessarily.
* **POS Advanced Search Price Input Field Issue:** Fixed an issue where the Price field was not accepting decimal values in certain cases in Advanced Search.
* **Financial Movement Log Enhancement:** Added Supplier Return filter and updated "API" source to differentiate between UI (now "UI") and integrator-driven (remains "API") supplier returns.
* **POS Voucher Reprint Discrepancy:** Shopify vouchers reprint in POS with incorrect formatting (not centered) and missing barcode delimiters, preventing scanning, unlike POS-generated vouchers.
* **Statement Print Issue:** Resolved an issue where the bottom of multi-page customer statements was cut off when all outlet fields were populated.
* **Supplier Return Edit Performance Issue:** Improved loading time for supplier return edit page which was slow and causing "something went wrong" errors for customers with large returns.
* **Outlet Setting Enhancement:** Improved PO/Invoice outlet setting flexibility and consistency.
* **Supplier Name Added to POS Product Edit Modal:** Added Supplier details to POS product edit in POS. Only available for users with exsiting access to edit product page in back office.
* **Customer Edit Page Enhancement:** Added "Home Outlet" dropdown to back-office customer edit.
* **EDS Notification Enhancement:** Added notifications for customer loyalty and potential price group changes.
* **Stock Replenishment** - Added a 2 Year maxmum date span restriction when searching for results, this it to ensure performance for larger data sets.
* **REST API** - GET /Customers - Optimisations made to assist with performance and resolved an issue with queries exceeding timeouts in certain cases.
* Other minor fixes and enhancements.