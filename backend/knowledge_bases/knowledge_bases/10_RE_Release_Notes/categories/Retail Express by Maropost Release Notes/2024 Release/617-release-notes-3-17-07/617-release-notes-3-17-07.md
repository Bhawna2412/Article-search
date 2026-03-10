---
title: "Release Notes 3.17.07"
articleID: 617
category: "2024 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2024-11-07
---

# Release Notes 3.17.07

## **Email Template Enhancements**

Introduced new placeholders to the email template builder in Retail Express, which determines what is included in the email body. This gives your salespeople more personalised experience when interacting with your customers via email.

Using the placeholders dynamically inserts the salesperson and/or the logged in user’s name in the desired position of the email you send from POS. These function similarly to our existing placeholders; for more details, please refer to [this](https://galaxy.maropost.com/s/article/Invoice-Email-Template-Manager) article.

* Salesperson First Name
* Salesperson First & Last Name
* Current User First Name
* Current User First & Last Name  
    
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20241107at100727AM.05TJ100000LVRFKMA5.png)

**Note**: Salesperson = the order sales person  
Current user = current logged in user who actually sends the email (which can be different to order sales person)

## **PO Supplier Template Setting Update**

A new setting has been introduced within the PO Supplier Template settings, allowing users to control the grouping of PO items with the same Product ID. Users can now choose to:

* Keep items grouped by Product ID on the PO template (default behavior), or
* Separate each item by unique descriptions when rendering the PO, even if they share the same Product ID.

This feature is especially useful for special orders where individual line items may have customized descriptions under same Product ID.

Go to Settings > Purchase Order Setup > PO/Supplier Return Settings

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20241106at75940PM.05TJ100000LVRSXMA5.png)![]()

**Note**: This setting only affects the Supplier-Facing document and does not apply to any other internal reports or features.

## **Customer Account Statements**

### Customer Activity Statement

The **Customer Activity Statement** feature has been enhanced with new filtering options to improve result clarity and relevancy:

* Hide Results with $0.00 balance

  + True By Default
  + Anyone whose balance is 0.00 is hidden from results.
* Hide Results with no Activity

  + Applies to just the date range selected, so you can hide results where no activity existed in that range
  + True By Default

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20241107at113304AM.05TJ100000LVVFwMAP.png)

* Resolved an issue with Account Statements where the PDF Documents previously contained an additional blank page unnecessarily.

## **API Enhancements**

### REST API - New Endpoint

* **GET /productdetailslog:** Enables external parties to retrieve “Product Details Log” data, supporting Filter By and Order By parameters. Full details at [Retail Express Developer Portal](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdeveloper.retailexpress.com.au%2F "http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdeveloper.retailexpress.com.au").
* **Core API /suppliers:** Added disable/enable options to supplier endpoints.

### EDS API - Updated EDS Notifications for Customer Records.

* EDS will now post notifications when a change is made to a customer/s loyalty balance, including any/all the methods that update the loyalty balance.
* **Additional Authentication Changes**

  + Password Expiry and Reset Functionality.
  + Mass Download now send the export job to the Export Download Manager

## **General Enhancements**

* Resolved an issue within Supplier returns whereby the Quanity would display as a currency value.
* **POS ITO Item Sourcing -** Resolved an issue with Inventory Movement Log and assocaited movements when changing POS ITO source against products after the original ITO had been received.
* **Inventory Allocation -** Resolved an issue with allocations when a Source/Fulfil location is changed on an invoice and the Fulfilment Report is used to fulfil the order, prior to the invoice being finalised to complete the change in sourcing.
* **PO & Stock Receipt -** Added change sto prevent cancelling a purchase order if it has an incomplete Stock Receipt. The receipt must be cancelled first.
* **POS Order Sort Setting** - Resolved an issue where the Order Item Sort setting was not obeyed in certain cases.
* **Inventory Movement Log** - Updated the writing of order allocation entries when receiving stock to be written *after* stock receipt entries, for continuity and ease of use.
* **Account Statements -** Resolved an issue which could caues timeouts/generation of documents to fail in certain cases.
* **MYOB Integration -** Resolved an issue where Supplier Return documents were exported with incorrect amounts in certain cases.
* Re-instated the ability to sort by any/all column headers within the results of the Product Search and Management feature.
* **Customer Types** - Customer type names are not required to be unique. Previously duplicate names could be created and cause confusion when managing customer records.
* **POS Voucher Redemption -** Resolved an issue which could cause vouchers to be come over-redeemed in certain cases.
* **Product Search and Management -**Resolved an issue with Account Statements where the PDF Documenets previously contained an additional blank page unnecessarily.
* **Stock List Report** - Resolved an issue related to the Disabled filter which caused descrepancies in certain cases.
* **PO Report** - Performance Enhancements added to assist with larger data sets.
* **EOM Inventory valuation Summary -** Resolved an issue where the exported report had incorrect totals in certain cases.