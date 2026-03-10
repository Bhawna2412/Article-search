---
title: "Release Notes v3.16.05"
articleID: 1086
category: "2023 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-09-11
---

# Release Notes v3.16.05

This release will be available to all users by the end of September 2023.

## **New Features and Enhancements**

### **Consolidate On-Order/Backorder Purchase Orders**

We have introduced an enhancement to the existing Consolidate Purchase Orders functionality, designed to provide you with flexibility and efficiency in managing your purchase orders. With this enhancement, you can now consolidate on-order and back-ordered purchase orders, streamlining your order management process.

**Key Features and Benefits**

* **Multi-Status Selection**: You now have the ability to select multiple purchase orders across various statuses, including Incomplete, On-Order, and Backorder. This enables you to consolidate orders based on their current status.
* **Preservation of Related Data**: When you consolidate purchase orders, any related store transfers and special order quantities will be carried through to the consolidated order.
* **Handling In-Progress Stock Receipts**: In scenarios where selected purchase orders have in-progress stock receipts, you have the option to cancel the receipt first and then proceed with the consolidation.
* **Status Determination for Consolidated Orders**: If your selection contains purchase orders with varying statuses (e.g., Incomplete, On-Order, Backorder), the consolidated purchase order will assume the status of the most progressed order. This automatic status determination simplifies your workflow.

**Examples of Status Determination:**

1. Incomplete PO 1, OnOrder PO 2, Back-Order PO 3 → The consolidated PO 3 will be assigned an On-Order status.
2. Incomplete PO 1, Incomplete PO 2, Back-Order PO 3 → The consolidated PO 3 will be assigned a Back-Order status.
3. Incomplete PO 1, OnOrder PO 2, OnOrder PO 3 → The consolidated PO 3 will be assigned an On-Order status.
4. Incomplete PO 1, Back-Order PO 2, Back-Order PO 3 → The consolidated PO 3 will be assigned a Back-Order status.

To Consolidate Orders, they must be from the same supplier and same outlet.

**Note**: To improve the user experience, the multi-select checkboxes have moved to the left-hand column

### **Upgraded Reports with Export Download Manager Support**

Additional Reports have been upgraded to support Background Processing/Export Download Manager. With this enhancement, users can now effortlessly export data from a comprehensive selection of reports, including:

* Sales Report
* End-of-Day Report
* EOM Inventory Valuation Report
* Product Sales Report
* PO Detail Report
* Transfer Detail Report
* Income Report
* Layby Movement Report
* Style Performance Report
* Inventory Valuation Report
* Inventory Planning Export
* Stock Sales Matrix by Colour  
   We have introduced Background Exporting to the Stock Sales Matrix by the Colour report. This report can now be exported to a flat-file format via the Export Download Manager.

To learn about the Export Download Manager, see [Export Download Manager](https://galaxy.maropost.com/s/article/Export-Download-Manager "https://galaxy.maropost.com/s/article/Export-Download-Manager").

### **REST API - Brand New Endpoints for Transfers and Transfer Details**

We introduced a series of new REST API endpoints, designed to streamline and simplify access to crucial information about stock transfers and Inventory Movement Log data.  
  
Transfers

* GET /transfers
* GET /transfer/{id}
* GET /transfers/{id}/transferitems
* GET /transfers/{id}/transferitems/{id}

Transfer Status

* GET /transferstatus
* GET /transferstatus/{id}

Transfer Types

* GET /transfertypes
* GET /transfertypes/{id}

Transfer Items

* GET /transferitems

These endpoints grant users seamless access to details such as transfers, transfer items, transfer status, and transfer types. Notably, we have added "Created On" and "Last Modified On" dates for transfer items, further enhancing usability and data management.

### **REST API - Brand New Endpoints for Inventory Movement Log Data**

We now offer enhanced REST API endpoints for the Inventory Movement Log, providing users and integrators with vital inventory movement details.

* GET /inventorymovementlogs
* GET /inventorymovementlogs/ {id}

This update includes cost information, facilitating external platforms to manage and analyse cost fluctuations over time.

* Changes in the background will track cost movements associated to various actions within the Retail Express system such as Purchase Order Receipts, Manual Price changes, and more.
* Visit [Retail Express API](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdeveloper.retailexpress.com.au%2F "http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdeveloper.retailexpress.com.au%2F") for full details.

### **Copy to Clipboard icons In Back Office > Edit Customer**

We introduced a **Copy to Clipboard** icon for various fields on the **Edit Customer** page, allowing users to easily capture essential information with a single click. Upon clicking the icon, the adjacent field's value is copied to your clipboard instantly. This feature eliminates the need for manual data entry or copying.

The **Copy to Clipboard** icon is available for the following fields on the **Edit Customer** page: Customer Number, Customer ID, First Name, Last Name, Company, ABN, Website, Email, Password, Date of Birth, Phone, Fax, and Mobile.

![]()![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CopytoiClipboard.05T5g00000v3IbFEAU.png)

### **Purchase Order & Stock Receipt 2.0 Enhancements**

* Resolved an issue where Purchase Order Report would not show supplier invoice numbers in certain cases.
* Updated logic to allow users to cancel special order PO’s if the special-order items were already fulfilled and PO is no longer needed.
* Resolved an issue where Supplier Order Comments would be cleared after placing PO On-Order
* Enhancements to prevent placing empty PO’s On-Order
* Resolved an issue where the PO Items Grid would not display the Carton Qty of the products.
* PO Manager - Resolved an issue opening specific purchase orders in some cases, also included performance enhancements when searching for a specific POID, Supplier Invoice or External ID.

### **Stock Replenishment Enhancements**

We introduced some minor enhancements to the Stock Replenishment feature. The most notable enhancements include:

* Hyperlinks to open Purchase Orders in a new tab from the results page.
* Addition of Last Sold and Last Fulfilled dates to the PO Depletion Method Results page.
* Updated the page logic to allow tabbing between fields.
* Resolved an issue where pressing enter at any time would cause the page to refresh and manually entered values would be lost.

### **Sales Detail Export Enhancements**

* New Columns added to the results of the report:

  + Customer Type, Billing Email, Billing Phone, Billing Post Code, Price Group, Price Group (Fixed)
* New Filters added to the report:

  + Customer Type Filter, Customer Number, Price Group, Price Group (Fixed).

**Note**: The price group and customer type represent the values assigned to the customer at the time of running the report, which may differ from the values against the customer at the time of sale.

**Item Detail Export**

* New Filtering functionality is introduced to the Item Detail Export.
* The report now excludes package products by default (though it can be included via the use of the new “Show Packages” filter.

### **API Enhancements**

**Shopify Pre-Orders for Packages**

We’ve changed the way the Stock Available for Pre-Order is calculated when selling package products online.

* The Quantity Available for Pre-Order is now determined by the total quantity on order, as well as the quantity on the order of associated package products that could together, form a package.
* As always, only POs flagged as available for pre-order are considered in this calculation.

**EDS API - Enhancements for Voucher Sales**

We have introduced a significant enhancement to the existing EDS API Method "Ordercreatebychannel," specifically designed to improve the support for selling gift vouchers online.

* Users can specify the voucher code, voucher expiry and voucher type.
* The enhanced API Method now supports the specification of the voucher type as an optional parameter.
* Vouchers can be categorised based on their types

For more details Refer to [Retail Express eCommerce API](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fwww.retailexpressmedia.com%2Fdocumentation%2Fapi%2Fv2%2FRetail%2520Express%2520-%2520EDS%2520API.pdf "http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fwww.retailexpressmedia.com%2Fdocumentation%2Fapi%2Fv2%2FRetail%2520Express%2520-%2520EDS%2520API.pdf")

**REST API - Enhancement**

We have released enhancements for usability and added a new endpoint for return reasons.

* **GET /inventory**

  + Added filter\_by/order\_by and have all the stock buckets available within GET /inventory
  + Added Last Sold / Last Fulfilled Dates to the response.
* **GET /users**
* **GET /users/{id}**

  + Extended the response to include Outlets and Stock Outlets assigned to the User/s.
* **New REST API Endpoints added:**

  + **GET /returnreasons**
  + **GET /returnreasons/{id}**

### **POS Enhancements**

**Streamlined POS Login with Hide Back Office Registers**

* Back-office registers: Users now have greater control over your Point of Sale (POS) experience by being able to disable back-office registers as an option to select, resulting in a more focused and streamlined POS login screen.
* On the **Registers Setup** page (Settings > POS Settings > Registers), a new column with a **POS Enabled** checkbox has been added which you can select or deselect to make the back office Registers enabled or disabled.

**Please Note**: You must have at least one back office Register enabled

         To learn how to create and manage Registers, see [Create a Register.](https://galaxy.maropost.com/s/article/Create-a-Register "https://galaxy.maropost.com/s/article/Create-a-Register")

### **New Payment Type**

We added a new Payment Type – **GiveX Gift Card** – for use in POS and back office. To learn how to configure the payment types, see [Configuring Payment Types](https://galaxy.maropost.com/s/article/Configuring-Payment-Types "https://galaxy.maropost.com/s/article/Configuring-Payment-Types").

![]()![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/NewPaymentType.05T5g00000v3Jf2EAE.png)  

**Coming Soon**:

* For Purchase Order and Stock Receipt 2.0 - the ability to define the invoice date when processing a stock receipt/invoice.
* Financial Movement Log for visibility over cost Movements and changes made by system transactions and user editing.
* Enhanced Supplier Return Barcode Settings with new configuration option for Supplier Returns PDFs for clients to choose display information like: Product IDs, Supplier SKUs, or even hide the barcode column entirely.

  
  

---

## **Minor Updates and Fixes**

Below is the list of improvements and resolutions included in the release:

* Invoice Lookup - Extended the POS Invoice Lookup functionality to include the delivery name fields to assist when searching for orders where the delivery name may differ from the primary customer/account holder name.
* Offline POS:Resolved an issue preventing new installations from syncing for selected clients.
* Performance enhancements to handle large data sets for improved efficiency.
* Resolved the issue of auto-created transfer items not displaying item descriptions in certain cases.
* Tweaked POS Last Sold Date logic to set the date upon sale finalisation, ensuring accurate tracking from the start.
* UI Enhancement to the main landing page.
* Added a loading spinner/icon to the Product Search and Management results page when applying actions/changes to the products on the page.
* General Improvements to Background Export functionality and the Export Download Manager page.
* Resolved an issue whereby Account Customer Statements would not exactly match the POS Invoice values in certain scenarios involving discounts.
* Resolved an issue where users would receive an unexpected error when creating products using legacy mass uploads, in certain cases.