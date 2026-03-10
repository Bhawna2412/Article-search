---
title: "Release Note 3.18.02"
articleID: 1782
category: "2025 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-06-15
---

# Release Note 3.18.02

This release will be available to all users throughout June 2025

## **New Filters Added to Replenishment via Transfer: PLU & Stock Receipt ID**

We’ve introduced two powerful new filters for **Replenishment via Transfer** workflow — **PLU Search** and **Stock Receipt ID** — enabling users to better control and streamline stock distribution from central warehouses to outlets. 

This update supports all replenishment formula options (Sales, MSL, Run Rate, and Depleted Stock) and allows users to specifically target products that have just arrived in a recent stock receipt or narrow down the results using PLU lists. 

- Both support comma delimited values to search for multiple records.
- User PLU Search to filter for specific products or styles only.
- Use Stock Receipt ID to filter for items that just arrived via PO and can now be transferred to other locations before packing away.

![Screenshot 2025-03-28 at 9.46.05 PM (2).png](https://us.v-cdn.net/6038474/uploads/A45ZZAIVX4ZP/screenshot-2025-03-28-at-9-46-05-e2-80-afpm-282-29.png)

## General Enhancements & Resolutions

**Shopify Integration**:

- **Merged Customers - **Resolved an issue where merged customer profiles could result in outdated Customer IDs being used for Shopify orders, preventing proper sync and requiring manual intervention.
- **Performance Enhancement - **Added Performance enhancement for EDS Notifications to resolve a sporadic issue where notifications would not generate in certain cases.
- **Gift Card Add-On - **Updated Shopify Gift Card Add-on to correctly prompt for required permissions, preventing sync failures due to missing access scopes.
- **App Disconnect -** Resolved an issue where selecting the Retail Express app from within Shopify Search would cause the integration to disable/disconnect.

**PO Stock Receipt Bin Location Setting **

- Added new Setting to PO/Supplier Return Settings “Always show Current BIN Location for In Progress Stock Receipts”.
- When enabled, the bin location will show the current bin location assigned to the product at the PO outlet.
- The Bin location field is also read-only in this scenario always showing the live bin location upon page load or refresh.

![Screenshot 2025-06-06 at 2.01.39 AM.png](https://us.v-cdn.net/6038474/uploads/AZ1BSB0JGUM4/screenshot-2025-06-06-at-2-01-39-e2-80-afam.png)
**Special Order Selection Page in POS** - Updated to only show Outlets which the logged in user has access to. This is then in line with other areas of the system where outlet access is used to restrict what is visible to the user.

**POS Transfers -** Resolved an issue where the page counter was incorrect in cases of more than 10 transfers.

**Purchasing and Stock Receipt:**

- **PO Settings -** New Setting added that determines which code is shown as barcode on PO’s including hiding the column completely if not required to be shown.
- **Negative On Order Quantity Issue - **Resolved an issue which could lead to negative On-Order quantities in a specific workflow during stock receipt and editing PO’s simultaneously.
- **Matrix Template - **Resolved an error that occurred when the Matrix PO template was used with the “Obey outlet-specific settings” option.
- **Email From - **Fixed an issue where the “From” email address was not auto-populating when “Display outlet-specific settings” was selected.
- **Accidental Duplicate PO Creation - **Resolved an issue where duplicate Purchase Orders were being created unintentionally when clicking create button repeatedly.
- **PO Management -** Optimisation of PO items Tab when viewing purchase order items.
- **PO Manager -** Optimised the search functionality to increase performance and page load speeds.
- **PO/Stock Receipt - **Updated Tabbing Behaviour to allow moving between fields including Invoice Date which was skipped previously.

**API Enhancements**

- **REST API GET/orders Enhancements**  - Support filtering by multiple order ID’s on /orders endpoint in the REST API.
  - Add Support to Filter by External Order ID
- **Webstore API - **Addressed a conflict in the **OrderCreateByChannel API** where a Product ID matching a SupplierSKU or ManSKU from another product caused the item to be skipped.

**Accounts Receivable Movement Report -** Performance enhancements when expanding individual outlet data from results.

**Sales Performance Report: **Fixed a bug where the Sales Performance Summary Report would not export when both date fields were left empty.