---
title: "Release Notes - 3.19.01"
articleID: 2378
category: "2026 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2026-01-19
---

# Release Notes - 3.19.01

Release 3.19.01 will be available to users throughout January/February 2026.

## **Launching Soon! Outlet Specific Payment Types**

### **POS – Outlet-Specific Payment Types**

We are adding the ability to configure and reorder payment types at the outlet level. This ensures each store only displays the payment options they offer at the point of sale, reducing confusion and misclicks. If no outlet-specific configuration exists, the system will behave as before. 

Further announcements will be shared as this feature launches in the coming weeks.

![PaymentSettings.gif](https://us.v-cdn.net/6038474/uploads/2Y572ZHCAGIF/paymentsettings.gif)

### **Customer Mass Download Filter Row**

Enhanced the Customer Mass Download feature to provide greater flexibility and consistency with the Product Mass Download page. Key improvements include:

- **Column Picker **– Choose which columns to display, with the ability to reset to default view.
- **Header Row Filter** – Filter by any column directly in the grid.
- **Drag-and-Drop Column Ordering** – Adjust column order easily.
- **Persistent Layout **– Column visibility and order are retained in browser cache for the next session.
- **Export Options** – Two buttons added: Export All Columns and Export Visible Columns.
These updates make the Customer Mass Download page more powerful and user-friendly.

![image.png](https://us.v-cdn.net/6038474/uploads/5WH48NDD65MB/image.png)

### **New Payment Types**

Added two new payment types for use across POS, Back Office, and Accounting Integrations:

- Sponsorship
- Bank Gateway

## Additional Enhancements & Resolutions:

### **POS – Refund Calculation**

Fixed an issue where refund amounts were calculated incorrectly for orders that included discounts in certain scenarios. The refund amount now correctly reflects the actual price paid by the customer, ensuring accurate refunds.

### **Product Search - Back Office**

Resolved an issue where the pagination panel and page size selector disappeared after setting the view per page size greater than the total number of items. These controls will now remain visible, even when all items fit on a single page.

### **PO Receipt Items – Scan and Count**

Fixed an issue where the list of PO receipt items was not displayed in the grid when using the Scan and Count option. The grid now correctly shows all receipt items, even after scanning and clearing the input field.

### **Customer Upload – Deleted Customer Types**

Fixed an issue where deleted customer types were displayed and selectable during the validation step when uploading new customers. These deleted types will no longer appear in the list.

### **Product Detail Log**

Resolved an issue where the Product Detail Log displayed incorrect user information when bulk editing products via Product Search & Management. The log now correctly records the actual user who performed the update, ensuring accurate audit trails.

### **Stock Replenishment via PO**

Fixed an issue where using the MSL formula in Stock Replenishment via PO caused a Timeout error in certain cases. The process now runs successfully without timeouts.

### **Shippit**

Improved error handling for orders with Priority shipping that fail to sync with Shippit. Errors are now displayed according to Shippit’s documentation, providing clearer explanations of possible causes. For example:

- Cannot get a quote right now – This often occurs if the delivery address hasn’t been updated correctly.
- Shippit Now is not available – This means the order is outside the merchant or courier service time range.

### **Fulfilment Report**

Fixed an issue where the Fulfilment Report ignored outlet access restrictions and displayed invoices from all outlets when the default (null) option was selected. The report now correctly respects user outlet access permissions.

### **Financial Summary Report **

Resolved an issue where the Financial Summary Report would time out when using the default date range and filtering by outlet. The report has been optimised for performance and now loads successfully without timeouts, even for large datasets.

### **Xero Integration – Duplicate Stock Receipts**

Fixed an issue where Finalised Stock Receipts were being sent to Xero twice. This occurred when purchase order details were updated after the PO status was set to Available. Stock Receipts will now only sync once as expected.

### **PO Stock Receipt**

Optimised the Make Available and Finalise processes for purchase orders containing a large number of products. These queries have now been streamlined for better performance and reliability.

### **POS – Customer Outstanding Balance**

Resolved an issue where incorrect outstanding balances were displayed in the Customers tab on POS. This occurred when refund orders had a fulfilled quantity of zero but a manual refund amount was entered. The calculation logic has been updated to correctly reflect these scenarios.

### **Inventory – Product Images**

Fixed an issue where product images were appearing on unrelated products. Previously, blank Manufacturer SKU values were treated as valid for grouping, causing products without SKUs to be grouped together and share images. Blank values are now excluded from grouping, ensuring images only appear on the correct products.

### **POS – Long Customer Names**

Fixed an issue where orders could not be opened in POS if the delivery name or billing name exceeded 50 characters. The system now handles longer names gracefully, preventing errors when opening invoices.

### **Sales Report**

Solved an issue where selecting two or more Order Source filters in the Sales Report caused a generic error message. You can now apply multiple order source filters without any errors.

### **REST API – Orders Endpoint**

Resolved an issue where the /Orders endpoint was returning duplicate entries on the first page of results. API calls will now return unique data as expected.

### **REST API – Customers Endpoint**

Enhanced the Customers endpoint in the REST API to support filtering and sorting on additional parameters. This update allows more flexible and efficient queries when retrieving customer data.

### **Default birthdate on customer accounts**

Fixed an issue where blank Date of Birth fields in customer accounts were defaulting to 01/01/1900, causing errors during customer mass downloads because the system could not handle customers over 100 years old.
The system has now been updated to support older dates without error.

### **POS Email Templates**

CC field in POS Email Templates now supports multiple email addresses. Previously, emails were only sent when a single address was entered; multiple addresses were ignored.

### **PO Items**

Resolved an issue where a negative on order quantity could occur in certain scenarios

### **Supplier Upload**

Optimised to better support large uploads containing alphanumerical supplier names

### **Purchase Order Export**

Resolved an issue preventing exporting of PO’s to PDF when outlet names contained specific characters.

### **Customer Mass Download (Legacy)**

Adjusted the default filters in Customer Mass Download so that all customers are included by default, not just those with a price group.

### **Purchase Order Matrix PDF**

Improved layout to accommodate more than 12 variants by automatically wrapping onto additional rows. This enhancement prevents data from being cut off at the page edge, which occurred previously when more than 12 variants were present.