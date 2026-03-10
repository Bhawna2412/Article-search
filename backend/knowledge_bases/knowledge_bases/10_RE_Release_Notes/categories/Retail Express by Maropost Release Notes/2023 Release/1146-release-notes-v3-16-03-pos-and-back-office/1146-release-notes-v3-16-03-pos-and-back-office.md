---
title: "Release Notes v3.16.03 - POS and Back Office"
articleID: 1146
category: "2023 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-07-09
---

# Release Notes v3.16.03 - POS and Back Office

This release will be available to all customers by 31st May 2023.

## New Features

### "Copy to Clipboard" Shortcut in Edit Product Page

We've made it easier to select and copy the key product codes within the header of the **Edit Product** page in the back office. A simple change, but it's sure to speed up many workflows when managing your products.

The **new** **Copy to Clipboard** icons allow you to copy the Product ID, Supplier SKU, or Manufacturer SKU to your clipboard ready to paste into other search fields or systems.  
![rtaImage - 2023-07-09T191050.256.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfmWEAQ.jpg)

---

## Improvements

* **Edit the Product Page** 
  + The carton Qty has now moved from the Inventory Tab to the Main Tab. This is in preparation for future changes regarding user access restrictions to certain tabs within Edit Product.
* **Report Enhancements**
  + Updated the interface of several existing reports to be consistent with other reports and improve performance.
    - Transfer Detail Report
    - EOM Customer Deposits Report
    - Staff Purchases Report
    - Sales & GP Payments Report
    - Voucher Creation Summary
* **Supplier Returns**
  + Updated the supplier return page when creating a return. Users can now see the Supplier ID and Supplier Name in the drop-down selector when starting a return.
* **Customer Search - Back Office**
  + We've added support for comma-delimited customer IDs or Customer Numbers in the search filters page of the Back Office Customer Manager.
    - This enables users to specify one or many customer IDs to assist with the management or merging of records. For details on merging customer records please see: [Merge Customers](https://galaxy.maropost.com/s/article/Merge-Customers-NEW-Feature-Enabled)
* **PO & Stock Receipt 2.0 Enhancements**
  + **Please Note** - These changes are only applicable to clients using PO & Stock Receipt 2.0. The phased rollout of the new features is still underway, with all clients due to have access to the new features by the end of June.
  + **API Enhancements -** To assist external integrators/partners to update purchase orders more readily via their third-party systems.
    - We've added support to filter by created\_on and modified\_on dates to the GET /purchaseorders and /purchaseorderitems endpoints. For details please visit: [Retail Express REST API](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdeveloper.retailexpress.com.au%2Fgetting-started)
  + **Linked Transfers and Linked Special Orders**
    - Buttons to access linked transfers and special orders have been added to the footer of the Stock Receipt & Invoice Page for Stock Receipt 2.0 Users.
  + **General Enhancements and Preparation for Phase 2**
    - We have made minor enhancements preparations in advance of the second phase of the Purchase Order & Stock Receipt 2.0 Features.

[Back to top](#top)

---

## Resolutions

* Resolved an issue that would cause errors when running the EOM Inventory Valuation Summary for certain clients.
* An issue which prevented the successful export of the EOM Inventory Valuation report has also been resolved.
* Resolved a spelling error in Voucher Text used in the default wording used on the customer-facing voucher when printed at POS.
* Purchaser Order Report - An issue has been resolved that could cause the same PO to appear multiple times in results in certain cases.
* Resolved a security permission issue related to the Voucher Creation and Voucher Creation Summary Reports in Back Office.
* Package Products
  + Resolved an issue when creating package products that would prevent items from being added to the package if you pressed "enter" instead of clicking Add Product.
  + Added a User-Friendly message that displays when attempting to add an item that already exists within the package.
* Income Report - Performance and Timout issues affecting some clients have been resolved.
* Financial Summary Report - Performance and Timout issues affecting some clients have been resolved.
* Supplier Upload - When creating suppliers via Excel, the Supplier SKU 2 Feature is now set to be enabled for the new suppliers by default.
* An issue that could cause payments to incorrectly upload for MYOB users in certain cases, has been resolved.
* Resolved an issue with the REST API that would return an incorrect ETA response in certain cases using the GET /producteta endpoint
* Resolved an issue with GET /orderfulfilments in the REST API which would match based on the order created date, instead of the fulfilment created date.
* Fulfilled Sales Report - Performance improvements.
* Stock Replenishment via PO - Resolved an issue that would display incorrect "on-order" quantities in the results in certain cases.
* Product Types - can now be deleted provided no longer assigned to a product. Previously historical promotional campaigns would also prevent deletion.

[Back to top](#top)