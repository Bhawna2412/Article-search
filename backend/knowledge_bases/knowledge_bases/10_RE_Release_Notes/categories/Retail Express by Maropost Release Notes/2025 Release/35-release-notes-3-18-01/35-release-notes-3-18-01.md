---
title: "Release Notes 3.18.01"
articleID: 35
category: "2025 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-02-17
---

# Release Notes 3.18.01

## **Zebra Label Printing - Advanced Presets**

The **Advanced Label Presets** feature allows users to create highly customizable label templates by inputting raw EPL/ZPL text. Unlike standard drag-and-drop configurations, these advanced presets are designed for expert users who require full control over label formatting.

This feature includes options to enable or disable presets and name them for easy reference. While Retail Express provides the interface, the customization of these labels is intended for users with expertise in label design.

* Advanced presets allow raw EPL/ZPL text entry, configured under **Settings > Label Printing > Zebra Label Presets**.![](src)![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20250213at110358AM.05TJ100000VpOYXMA3.png)
* Presets require a name and can be set as "Active." Retail Express advises that these presets are for expert users only.
* Added a new **"Printed Date"** placeholder to templates, displaying the current date in **DD/MM/YYYY** format. Additionally, introduced a **Duplicate** button to quickly copy the code for the next entry.

📋 **Note**: This is an advanced label printing technique. We recommend using it once you've gained experience with the basic method. Otherwise, you can continue to use the basic printing method. To know more about Zebra Label Printing - Advanced Presets, click [here](https://galaxy.maropost.com/s/article/Zebra-Label-Printing-Advanced-Presets "https://galaxy.maropost.com/s/article/Zebra-Label-Printing-Advanced-Presets")

**Important**: Launching Soon - Sales Performance Summary Report

* **Group-by Concept:**

  + Provides aggregate figures based on nominated groupings such as Style/Man SKU, Outlet, Brand, Product Type, and more.
  + Allows users to view summed data for variants within a style, presenting one line per style code.
* **Previous 4 Weeks Sales Data:**

  + Includes dedicated columns displaying sales quantities for the previous four weeks, calculated up to the current date at the time of report execution.

## **API Enhancements**

### **New REST API Endpoint: Product Details Log API**

This endpoint **GET /productdetailslog** is designed to provide external parties with seamless access to product change logs, mirroring the data available in the Back Office report. This endpoint enables businesses to integrate, analyze, and act on product details, filtering various parameters.

### **Suppliers Endpoint**

The /suppliers endpoint in the REST API now supports the following features:

* Enable or disable suppliers via POST and PUT requests.
* Filter suppliers based on their enabled/disabled status.
* Set additional parameters for displaying SKUs on PO templates (e.g., `PO Enable SKU1` and `PO Enable SKU2`).

For details visit [Retail Express API Documentation](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdeveloper.retailexpress.com.au%2F)

## **Transfer Replenishment Filter**

We’ve introduced a new filter in the **Transfer Replenishment** process that enhances inventory management by ensuring source outlets retain their Minimum Stock Level (MSL) when fulfilling transfer requests.

* This feature applies to all replenishment formulas within the Transfer Replenishment process, including **Sales**, **MSL**, **Run Rate**, and **Depleted Stock**.
* It prevent stock levels at the source outlet from dropping below the defined Minimum Stock Level (MSL), ensuring operational efficiency and availability.
* When this filter is applied, only quantities exceeding the source outlet's MSL will be available for transfer.

To access Transfer Replenishment, Go to **Inventory > Stock Replenishment > Stock Replenishment via Transfers**

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20250212at72048PM.05TJ100000VosabMAB.png)  
![](src)

## **PO Supplier Template Setting**

Added a new setting to control how to group product’s on a purchase order PDF in cases of the same Product Id but with different descriptions.

The new setting via: Settings >Purchase Order Setup > PO/Supplier Return Settings > “Purchase Order PDF Item Grouping” lets the items remain grouped by Product ID/SKU when rendering the PO template for email/print as per current behaviour, or to instead group by each unique description.

This caters for when product descriptions are modified at POS for difference variations of the same product ID - particularly common for special order items. The Setting only impacts the Supplier-Facing document, no other internal reports/features respect this new setting.

## **General Enhancements**

* **Accounts Receivable Movement Report:** Performance Enhancements to expedite results returned from report.
* **Customer Types -** Customer type names are now required to be unique. Previously duplicate names could be created and cause confusion when managing customer records.
* **Edit Product Page**: All fields, including URLs, checkboxes, and custom fields, now have consistent grey backgrounds when in read-only mode.
* **Inventory Movement Log** - Updated the writing of order allocation entries when receiving stock to be written *after* stock receipt entries, for continuity and ease of use.
* **MYOB Integration -** Resolved an issue where MYOB Integrations could expereince Journal Unbalanced errors in certain cases.
* **PO Creation by Excel:** Fixed an error to show correct product addition to POs when Product ID and Supplier SKU are from different products.
* **POS Invoice Email Formatting:** Fixed an issue where customized messages in the POS invoice email section did not retain line breaks or formatting, appearing as one large paragraph.
* **POS Invoice Template:** Adjusted layout to prevent text from overlapping in cases of long name/business names.
* **POS Order Sort Setting -** Resolved an issue where the Order Item Sort setting was not obeyed in certain cases.
* **POS Search:** Updated POS customer search tab to trigger searches with two-character entries when pressing Enter.
* **POS Voucher Redemption -** Resolved an issue which could cause vouchers to be come over-redeemed in certain cases.
* **Product Search & Management:** Re-instated the ability to sort by any/all column headers within the results of the Product Search and Management feature.
* **Style Performance Report**: A new column for Brand is added, providing additional insights for the Style Performance Report.
* **Stock Adjustment Security:** Introduced separate permissions for managing stock adjustment reasons and settings for improved access control via Staff > Profile Security. New options include:

  + Stock Adjustment Reasons
  + Stock Adjustment Settings
* **Supplier Returns:** Resolved an issue within Supplier returns whereby the Quanity would display as a currency value.
* **Transfer Report - Export Flat File**: Users can now directly export transfer details to Excel from the Transfer Report results page and Transfer Details page.
* **WMS SOAP API -** Resolved an issue with Warehouse Management API - FulfillOrders endpoint where partial fulfillment of an order item could cause overfulfilments in certain cases (Released in January).
* **Webstore/EDS API** - Support for Refunding/Cancelling Freight Values via SOAP OrderCreateByChannel Method (Released in January).
* **EDS API -** Updated to now Send EDS notification for refund order created in POS for an original order created via SOAP/on a sales channel (Released in January).
* **Back Office Login -** Resolved a permissions issue related to disabled user accounts and back office access (Released in January).