---
title: "Release Notes 3.18.05"
articleID: 2335
category: "2025 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-10-30
---

# Release Notes 3.18.05

Release 3.18.05 will be available to users throughout November 2025.

**POS – Special Order Permission Control**

New Permission Setting: Added “Allow The User To Create New Special Orders In POS” under Settings > POS Security features. 

- Enabled by default to maintain existing behavior, users can revoke access as required.
- Restricted Access: Users without this permission must get a manager/admin override to create or change items to Special Order, including bulk updates and when editing order item details.
- Applies to fulfillment selection modal, bulk update modal, and the edit product details modal.

![image.png](https://us.v-cdn.net/6038474/uploads/H08MNURX172T/image.png)
**New Optional Pop-Up when selling a Disabled Product** 

Added a new “Allow Selling of Disabled Products at POS” setting under Back Office > Settings > POS Settings > Product Settings.  This is designed to allow control over the sale of disabled products if required by the retailer. 

The setting offers three options: 

- Allow (No Prompt)
- Allow with Confirmation (soft stop with alert)
- Prevent Adding to Sale (hard stop with explanatory popup).

![image.png](https://us.v-cdn.net/6038474/uploads/BV00TS0WEHMW/image.png)
**Note:** This feature is not currently available in Offline POS mode. While operating offline, all products remain eligible for sale. Support for this feature whilst offline, will be introduced in a future update.

**POS Security Profiles – "Create Quote" Setting**

Introduced a new POS security setting allowing businesses to control which users can create quotes in POS.  

- The new “Create Quotes” option can be found under Settings > POS Security features.
- Users without permission cannot tick the “Quote” checkbox to create new quotes but can untick it to convert existing quotes into invoices.
- Users with permission (e.g., managers) retain full access to toggle between quotes and invoices.
- When unauthorised users attempt to create a quote, an admin override popup appears for manager approval. The same user however, is able to convert an existing Quote to Invoice by un-checking the tickbox.

![image.png](https://us.v-cdn.net/6038474/uploads/C4FXPYR1ZZYS/image.png)
**PO Manager – Supplier Invoice Date Filtering**

Added new Supplier Invoice Date From/To filters to the PO Manager, allowing users to refine purchase order results by supplier invoice date/s — matching the functionality available in the PO Stock Receipt Details Report. 

![image.png](https://us.v-cdn.net/6038474/uploads/BCKGV1ADW7FQ/image.png)

## **General Enhancements & Fixes**

**Back Office – Edit Customer Page** – Resolved an issue where invalid characters in the First Name or Last Name fields prevented saving changes without displaying an error message. Validation messages now correctly appear when restricted characters (such as brackets or unsupported symbols) are entered, ensuring users are informed and can correct the input before saving.

**Financial Movement Log** – Enhancements to the recording of “origin” for stock receipt entries to now record as UI – Back Office as expected.

**Fulfilled Sales Report** – Performance enhancements to reduce time to display results for larger data sets.

**Fulfilment – Shopify Split Fulfilment** – Fixed an issue where Shopify orders using Split Fulfilment were not sourcing items from the correct locations. Orders now correctly fulfil from the designated stock locations instead of defaulting to the primary outlet.

**Fulfilment Report** – Resolved an issue where the Copy Across and Print A4 Labels functions did not work as expected in certain cases.

**PO Stock Receipt** – Resolved an issue where duplication of browser tabs could cause pages not to load correctly or fully during stock receipt.

**POS Search Results: Qty/SOH Values** – The Default Qty Available and Stock On Hand now depict the quantities from the Default Source Outlet if configured to be different to the logged-in outlet. Smart fallback: If no default source location is defined, POS will continue to show stock for the logged-in outlet as before. Default source locations are set in Back Office > Settings > Locations/Outlets > Outlets. Each outlet can have its own setup or default to itself.

**Product Management – Mass Download** – Improved performance for Product Mass Downloads, reducing export time for large datasets (100k+ products). Exports are now faster while maintaining data consistency.

**Product Mass Upload – Promotional Expiry Date** – Fixed an issue where promotional expiry dates uploaded via the new-style product sheet were incorrectly swapped to American date format (MM/DD/YYYY). Dates now remain in the correct DD/MM/YYYY format as entered.

**Product Search and Management** – The DiscountType column has been removed from CSV and XLS exports on the Product Search & Management page. This field was not displayed in the on-screen report and contained unclear or incomplete data (blank, “”, or “/”).

**Purchase Order PDF Export** – Resolved an intermittent issue where company details were not displayed on the first PDF export of a Purchase Order but appeared on subsequent exports. The PDF generation now consistently includes company information in the top-right section on every export, regardless of outlet or master data settings.

**Register Management – **Added “Total Billable Registers” tally to the page to assist with reconciling billable registers.

**REST API – Customer Endpoint** – Resolved an issue where updating a customer via the REST API would return an error if the same email address was included in the request — the API now correctly recognises identical emails and allows other fields to update successfully.

**REST API and other services** – Various performance improvements.

**Special Order Report** – Resolved an issue where the report displayed all orders regardless of the user’s outlet access. The report now correctly restricts results to only show special orders for outlets the user has permission to access.

**Stock Adjustment Detail Report** – Resolved an issue where selecting an individual user in the ‘Created By’ filter caused a generic “Something went wrong” error. The report now runs correctly when filtered by specific users, returning the expected results without error.

**Stock Receipt & Invoicing – Label Printing** – Resolved an issue where users encountered a 500 error when printing A4 labels for Quantity Received or Quantity Expected.

**Voucher Creation Report – Merged Customer Records** – Resolved an issue where credit notes from merged customers were not displaying correctly in the Voucher Creation Report. The report now consistently shows the Customer Name instead of the original bill name, ensuring merged records display accurately and eliminating discrepancies caused by static bill-name data.

**Webstore API’s** – OrderCreateByChannel Methods updated - Delivery Due Date field now ignores the time component from datetime. This avoids issues with time zone differentials causing wrong dates to appear in certain cases.

**Zip Pay Integration** – Updates to the Integration at POS to migrate to Zip’s new API domain.

**ZipPay Configuration** – Extended the Location ID field length from 5 to 6 characters to align with ZipPay’s updated support for 6-character IDs.