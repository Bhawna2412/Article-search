---
title: "Release Notes 3.17.04"
articleID: 836
category: "2024 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2024-06-12
---

# Release Notes 3.17.04

## **Product Price Changes via Product Search & Management**

New **"Set/Update Prices"** Action has been introduced on the results page of ‘Product Search and Management’. The new feature allows users to efficiently set or update price fields for multiple products directly from the search results.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240531at84224PM.05TJ1000003I1PPMA0.jpg)

**Price Fields Update:** Set or update various price fields, including:

* Master POS Price
* RRP Price
* Web Price
* Promotional Price
* Promotional Price Expiry Date
* Supplier Buy

**New: Style Code Filter:** The new Style Code Filter added to the Product Search and Management Filter Page is designed to streamline product management by allowing users to easily locate a range of products based on a specific style.

## **Publish Products to Web/Channels/Groups**

* Publish Products To Web & Sales Channels/Source Groups directly from the results of a search.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240531at64614AM.05TJ1000003I1QEMA0.jpg)

### **Promotional Campaigns - Bulk Activate/De-Activate**

* Added the ability to multi-select “Activate” and “DeActivate” one or many campaigns.

### **Product Mass Download - New Filters**

* Added Man SKU/Style Code Filters to the Mass Download page to assist when filtering
* Man SKU/Style Code supports comma-delimited values to assist in downloading a series of styles at once.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240604at115522AM.05TJ10000044fbhMAA.jpg)

**Promotional Campaigns - Bulk Activate/De-Activate**

* Added the ability to multi-select “Activate” and “DeActivate” one or many campaigns.

## **POS Enhancements**

### **Gift Voucher Re-Printing from POS**

Users can now re-print a voucher directly from the voucher lookup screen within the POS system. This new feature includes displaying the voucher’s “current remaining value” at the time of printing, ensuring accurate and up-to-date information.

Furthermore, users can print via the thermal document printer (if configured) or an A4 document printer, providing flexibility based on available resources and specific needs. Additionally, for those who need to review the original sale or voucher details further, we’ve added a shortcut to “open the sale” directly from the voucher lookup screen.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240530at111203AM.05TJ1000003I1ObMAK.png)

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240530at111051AM.05TJ1000003HytyMAC.png)

For more information regarding Gift Vouchers, please click [here](https://galaxy.maropost.com/s/article/Create-a-Gift-Voucher-or-Credit-Note "https://galaxy.maropost.com/s/article/Create-a-Gift-Voucher-or-Credit-Note")

### **POS Quick Create Product - Create New Attributes**

Users can now conveniently create attribute values within the POS Product Create page. This enhancement extends to all attributes, including custom types on the "additional details" page, and product types. Only users with existing access to create attributes via back office can perform this function in POS.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240530at122604PM.05TJ1000003I1Q8MAK.jpg)

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240530at122708PM.05TJ1000003I1QDMA0.jpg)

**Additional Details Page:**

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240530at123015PM.05TJ1000003I1QXMA0.jpg)

### **Generate a SKU On The Fly**

* Users can now quickly generate SKUs when creating products, particularly when the specific SKU value is unknown. Users can utilize the "Generate SKU" option within the POS system during product creation. Later, if necessary, they can update the SKU value via the Edit Product page in the Back Office.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240530at111752AM.05TJ1000003I1QrMAK.png)

* Disabled suppliers are now automatically removed from the "Supplier" dropdown list in the POS. If users attempt to pre-fill product information from a disabled supplier, all fields except the supplier field are auto-filled, guiding users to select an alternative supplier
* Unauthorized users are now restricted from accessing Cost Pricing Information when pre-filling from existing products unless granted "Show Costs" permission. Critical fields such as Supplier Buy Ex, Buy Price Ex, and Markup Target are greyed out to prevent unauthorized access.

To Grant access for ‘Show Cost’ >> Staff >> POS Security features >> “Show Costs”

## **Back Office Product Creation Enhancements**

* Updated the Product Detail Logging to record where new items are created, POS or back Office.
* In **Style/Matrix Product Creation**, users with existing access to back-office functionalities can now generate New Attribute Values.
* The PO Quick Create product feature has been added to the "Generate SKU" Functionality, assisting in the workflow when the SKU is not available/known.
* Create Product/Package Pages have also been equipped with the "Generate SKU" functionality, enabling users to efficiently handle scenarios where the SKU details are not yet known.

## **Product & Pricing Management Enhancements**

### **Fixed Price Group Mass Download**

* Added “Custom Attributes” filters to the Download Page to assist with managing product price group data.
* Expand/Collapse Filter Sections are now available, similar to other back office reports/features.
* Resolved an issue where discounts could not apply in the event a Normal Price Group, and a Fixed Price Group resulted in the same discount for the customer.

For more information regarding Create & Edit Fixed Price Groups, please click [here](https://galaxy.maropost.com/s/article/Retail-Express-V2-Create-and-Edit-Fixed-Price-Groups "https://galaxy.maropost.com/s/article/Retail-Express-V2-Create-and-Edit-Fixed-Price-Groups")

## **Fulfilment & Stock Replenishment Enhancements**

* **Fulfilment Module Enhancements**
  + Added the “Available Qty Filter” to assist users in distinguishing between currently available and unavailable stock for customer orders.
  + **Bulk Order Cancellation** - Added the ability to Bulk Cancel Selected, eligible orders.
* **Stock Replenishment**
  + Added Supplier SKU 2 to Replenishment Results, optionally included via new checkbox filter “Show Supplier SKU 2”.
  + Available in both Purchase order and Transfer Replenishment methods.
* **Other Enhancements**
  + Resolved an issue causing Supplier SKU to wrap onto 2 rows unnecessarily on PO templates.
  + **PO Items Advanced Search** - Resolved an issue where keyword matches did not always find results in certain cases.
  + **PO Items** - Resolved an issue where the Edit Items button could be visible when the PO contained no items.
  + **PO Items** - Resolved an issue where the “Re-Order Selected” variance method did not retain the special order link for applicable items.
  + Updated logic to Capture “Created By” user for POs created via replenishment, manually, mass upload & duplicate PO and new special order methods.

## **General Enhancements & Resolutions**

* **Export Download Manager -** Performance Improvements and Loading Spinner Improvements
* **Back Office Menu -** Added Colour Gradients for the Menu Tree to avoid ambiguity when navigating and menus need to overlap each other due to page width.
* **Saved Lists -** Updated Saved lists in the Transfer Management pages in the Back office. Each now has the Transfer Numbers Listed and a New “Search” Filter.
* **POS - Product Details** - Added “Weight” to the left side panel along with the existing dimension values.
* **Mobile Dashboard** - Resolved an issue where the Outlets listed did not obey the logged-in user’s Outlet Access.
* **PO Detail Report** - Updated the default sorting to sort as per the purchase order items, which defaults to PO Item ID Ascending.
* **Stocktake Authorisation** - Updated the behaviour to prevent users from unknowingly submitting a stocktake for authorisation without first selecting any items to approve. This caused the page to not save changes. New behaviour will prompt for at least one item to be selected before proceeding.
* **Product Search & Management** - Resolved an issue where a Product ID followed by a comma could cause errors when searching.
* **POS Advanced Product Search** - Resolved an issue with the Available Qty Filter not always applying and sorting correctly.
* **MYOB Integration** - Resolved an issue in specific scenarios where a PO has negative rounding adjustment values which previously caused the integration to disconnect.
* **Xero Integration** - Resolved an issue where special characters in supplier names could disrupt the integration.
* **POS** **Product Creation** - Added tracking capabilities to log the origin of new product creation, whether from the POS or Back Office.
* **Allocated Stock Grid** - Added Hyperlinks from the grid to link you to the Invoice or Transfer related to the allocation
* **Edit Product Page -** Performance enhancements to resolve delays when saving changes to products in certain scenarios.
* **Fulfilment Report/s -** Updated logic to no longer show 0 qty order items (for cases where items were cancelled).
* Other General Performance Enhancements.

[![SignUp](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ10000046tKAMAY.jpg)](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fretail-express.webflow.io%2Fproduct-news-sign-up%3Futm_source%3Din-app%26utm_medium%3Dbanner%26utm_campaign%3Drex-cdp%26utm_id%3Drex-cdp "Sign Up")