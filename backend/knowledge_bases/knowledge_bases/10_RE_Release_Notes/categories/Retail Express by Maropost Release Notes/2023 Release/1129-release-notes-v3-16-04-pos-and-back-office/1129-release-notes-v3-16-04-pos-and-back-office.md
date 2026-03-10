---
title: "Release Notes v3.16.04 - POS and Back Office"
articleID: 1129
category: "2023 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-07-10
---

# Release Notes v3.16.04 - POS and Back Office

---

## New Features and Enhancements

### Edit Product - New Security Profiles

We have introduced five new security profiles that aid you in setting up role-based access when managing products and packages.

These user profile permissions can be combined in a number of ways to support a variety of scenarios:

* **Create Products/Packages**: Allows the users to create products and packages.
* **Edit Product/Package Master Details**: Allows the users to edit product and package master details.
* **Edit Product/Package Outlet Specific Detail**: Allows the users to view and edit outlet-specific details limited to the assigned outlets only.
* **Edit Product - Access All Outlets**: Allows the users to view and edit all outlet-specific details regardless of assigned outlet access.
* **View Products/Packages**: Allows the users to view products and packages but doesn’t allow editing.

To learn more, see [Edit Products - User Permissions](https://galaxy.maropost.com/s/article/Edit-Products-User-Permissions).

The following screenshots show the Security Profiles for a selected profile (Staff > Profile Security > Edit Features) with the new security profiles highlighted:

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SecurityProfiles1.05T5g00000qW6VTEA0.png)  
  
![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SecurityProfiles2.05T5g00000qW7BXEA0.png)

Additional Improvements related to managing your products include:

* Removing the the auto-save behaviour on the Edit Product > Pricing Tab, replacing it with a dedicated Edit Details/Save Button, providing users with more control over their changes.
* Additionally, we have updated the "Duplicate a Product" process to ensure that the Supplier SKU 2 of the newly created product is also updated, maintaining consistency and accuracy.
* Enhanced Purchase Order Uploads to adhere to outlet access restrictions, allowing for better control and management of purchase orders.
* We have also made several minor UI enhancements to refine the overall user experience.

### New Product Fields – Last Sold and Last Fulfilled

We are pleased to introduce two new fields – **Last Sold** and **Last Fulfilled** – that provide valuable insights into product performance and inventory management, enhancing your overall workflow.

The Last Sold date refers to the date on which an order is moved to processed status whereas the Last Fulfilled date refers to the date on which an order is processed or awaiting payment, and the fulfilled quantity is greater than zero. At the Master level, the last sold/fulfilled date is the most recent across any outlet within the system. Whereas, the Last Sold and Last Fulfilled dates at the Outlet level enable you to track the specific dates for each outlet.

The following screenshot shows the Edit Product page with the new fields highlighted  under the Advanced Options section:

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/LastSoldLastFulfilled.05T5g00000qW718EAC.png)

These fields are automatically populated and updated whenever a sale is made or an item is fulfilled. Refunds or voided sales do not update the Last Fulfilled date to accurately capture the physical existence and delivery of the item to a customer. Items with no sales or fulfillments will show blank or N/A as appropriate.

You can find these new date fields in various locations and reports within the back office:

* **Legacy mass Download**: Displays Master Last Sold/Last Fulfilled in the product master sheet and outlet-specific dates in respective outlet worksheets.
* **Stock Replenishment**: Shows both master and outlet-specific dates in the results screen and Excel export file.
* **Item Detail Export**: Includes outlet-specific dates in the export file.
* **Edit Product Main Tab/Pricing Tab/Inventory Tab**: The Main Details page displays the Master Last Sold/Last Fulfilled date, while the Pricing and Inventory tabs show the outlet-specific dates.
* **Product Search & Management**: When searching for All Outlets, the Master dates are shown in the results. Selecting one or multiple outlets in the filter displays the most recent outlet-specific dates.

### POS Enhancements

To enhance the functionality in POS we have:

* Optimized the Outlet Selection Limit in POS Advanced Product Search and removed the previous restriction of selecting a maximum of 10 outlets at once.
* Introduced the "Supplier Buy Price Ex" field in the Product Details Modal of the POS. This field is exclusively visible to users with the "Show Costs" feature permission, allowing them to access and view supplier buy prices.
* Added a new Security Profile Feature that gives administrators control over user access to the "Cash-Up" feature in the POS. This feature ensures tighter security and allows for precise management of financial processes.
* We have exposed the "Item Reference" field in the POS Fulfilment Details Page, making it viewable and editable directly in the POS interface. Previously, this field was only accessible in the back office Fulfilment Report, improving convenience and efficiency in order fulfillment and tracking.
* Added the ability to disable a register via Settings > POS Settings > Registers. Once disabled, a given register will no longer appear in the POS Register Login Screen. Not available for default/back-office registers.
* Added the ability to reprint the POS End of Day Cash-Up Summary. To reprint, visit the back office End of Day Report in the finance reports menu. A new column named "POS Summary" now exists in the results of the report which opens the pdf file.

### Background Export Download Manager

A brand new **Export Download Manager** feature is designed to enhance the process of viewing and exporting completed jobs for background-enabled reports. With this implementation, customers now have a convenient way to manage their exported reports. The Export Download Manager allows you to access, and download completed jobs seamlessly and helps alleviate delays or timeouts when previously exporting large reports or data sets.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/mceclip3.05T5g00000qW7HQEA0.png)

For a more efficient experience, we have incorporated an Email Notification functionality. Once the download is complete and ready to access, you will receive an email notification informing you of its availability. When you click the link provided in the email, the back office will open. If you are already logged in, the download will begin automatically, saving you valuable time and effort. For more information, see [Export Download Manager](https://galaxy.maropost.com/s/article/Export-Download-Manager).

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/mceclip1.05T5g00000qW7HVEA0.png)  
  
This new Export Download Manager simplifies the retrieval of background-enabled reports, streamlining your workflow and ensuring a smooth and seamless export process. Initial Reports that are updated to use the background exporting include the below, with more to follow in future releases:

* Item Detail Export
* Sales Detail Export
* Sales Report
* Fulfilled Sales Report

### Style Create Modal Enhancements

We’ve added various Enhancements to the Syle Create Modal which is used within the Purchase Order page to create style products.

* Added Buy Ex and Direct Costs fields to the modal.
  + Provides more granular control over cost pricing.
  + These fields work in conjunction with the existing Supplier Buy field and users can specify either or both during the process.
* New “Additional Details” page to the modal which allows the user to optionally specify more product information such as:
  + Product Details - Custom Fields, Measurements and Weight, RRP and Web Pricing, and more.
  + Attributes - You can specify the custom attributes to assign the style variants being created.
* We’ve added the ability to publish products to Shopify directly from the modal.
* Updated the logic to ensure products are created in appropriate sequential order and other performance improvements.

**Note**: These changes are applicable only to the PO Stock Receipt 2.0 users.

### PO Stock Receipt 2.0 Enhancements

* Added Hyperlinks and Copy icons to the PO ID Values in the Stock Receipt Pages.
* “Choose Receipt Type” Modal now supports entering the ID and pressing “enter” (previously had to click the button).
* Linked Transfer Buttons are now enabled when special order is received and a transfer gets generated.
* POS Logic updated to correctly display Special Order Avail Qty when some items are received and PO is still On-Order.
* Updated PO Stock Receipt Details Report FIlters to ignore default status filter when using PO ID or Stock Receipt ID.
* Updated Supplier Invoice Page Validation to prevent finalizing if ANY direct cost values are below $0.00.
  + Users must instead utilize the rounding adjustment field if looking to balance the invoice to match their document.

**Note**: These changes are applicable only to the PO Stock Receipt 2.0 users.

### Mass Upload/Download Legacy Enhancements

We’ve added the **“Prevent Disabled”** flag as a new column to the “Product Master” sheet for Mass Upload/Download of Products.

* It's a True/False column and enables users to manipulate this setting on mass.
* Applies to Product and Purchase order uploads.

---

## Resolutions

We have addressed several issues and resolved them in this release. Some notable resolutions include:

* Updated the interface of several existing reports to be consistent with other reports and improve performance.

  + EOM Customer Deposits Report
  + Staff Purchases Report
  + Transfer Detail Report
  + Voucher Creation Summary Report
  + Sales & GP Payments Report
* Stocktake - Excel Format and Upload Fixes:

  + Updated the default file type for “Excel Stocktake” from .xls to .xlsx to support larger data sets and prevent performance issues.
  + Also Updated the upload process to support the xlsx file type during upload.
* Dashboard - Updated the Back Office dashboard to show “Today’s” data by default and as an option within the various filters.
* Order Conditions - Introduced the ability to specify page breaks by entering the text: [[PageBreak]] at preferred positions throughout the body of the order condition text. This can be used to prevent longer text spanning multiple pages undesirably.
* Introduced a warning/prompt when unsaved changes were not applied on Customer Account Payments page.
* Updated the POS “On Hold” behaviour to prevent sales from being taken off hold unintentionally.
* Updated the YTD value to depict the qty sold this calendar year, previously incorrectly displayed the quantity sold in the last 12 months.
* Introduced a Retry button for any failed/erroneous Shippit Tracking Details.
* Customer Type can no longer be deleted if it is currently assigned to one or more Customers.
* Updated validation on Edit Product > Supplier SKU field to prevent setting an SKU that matches a barcode against the product.
* Added line breaks to the Delivery Address field on the purchase order PDF to prevent display issues.
* Fixed errors in the EOM Inventory Valuation Summary and resolved issues with exporting the report.
* Resolved a spelling error in the default wording of customer-facing vouchers printed at POS.
* Fixed a bug causing duplicate appearances of purchase orders in the Purchaser Order Report.
* Resolved a security permission issue related to the Voucher Creation and Voucher Creation Summary Reports in Back Office.
* Resolved issues related to package product creation, income report performance, financial summary report performance, supplier uploads, MYOB payment uploads, and various REST API endpoints.
* Resolved an issue where incorrect total quantities were displayed for POs in certain scenarios.
* Resolved an issue where an empty PO could not be opened in Back Office. It is no longer possible to upload a purchase order without any quantities.
* Resolved an issue preventing new installations from syncing as expected in certain scenarios.
* Resolved an issue where incorrect price calculations exist due to concurrent promotional campaigns.
* Resolved an issue where certain user profiles were unable to void/cancel processed sales.
* Resolved an issue whereby an additional, new special order PO could be created accidentally after opening and viewing the PO Allocation Modal.
* Resolved incorrect behaviour of the “Greater Than” and “Less Than” filter operators on the Advanced Search page.
* Resolved an issue where customer “Credit Limit Exceeded” would incorrectly display in certain scenario’s.
* Resolved an issue whereby the “Exclude Disabled Products” caused unexpected results when used in conjunction with Supplier Filter.
* Resolved an issue where in certain circumstances upon editing existing orders, the “All Items Fulfilled” date would not be updated correctly.
* Resolved an issue when creating new transfers in POS for touchscreen users.
* Resolved an issue where Money In/Out cash values could appear incorrect in certain scenarios involving refunds.
* Resolved an issue where the payment requested for Integrated EFTPOS could be less than the order total in certain, rare cases.