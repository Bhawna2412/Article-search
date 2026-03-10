---
title: "Release Notes v3.14.0 - POS and Back Office"
articleID: 1309
category: "2021 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-05-11
---

# Release Notes v3.14.0 - POS and Back Office

# Release Notes v3.14.0 - POS and Back Office

**Release Date:** 13 September 2021

In this update, we've added some exciting new features to Payment Types and Cash Up/End of Day, as well as released 8 resolutions.

This update will be rolled out to all customers between the 13th - 21st September.

* We've updated [Payment Types](https://galaxy.maropost.com/s/article/Configuring-Payment-Types) to added the ability to **Auto-Reconcile Payments**during the Cash Up process. The amount expected will be automatically populated in the "Amount Reconciled" field in Step 3 of the Cash Up. Cash is not eligible to be auto-reconciled.
* The **Cash Up Float Amount**has been added to the [End of Day Report](https://galaxy.maropost.com/s/article/End-Of-Day-Report) (both the results tab and the detailed EOD Banking  Details)
* **Suppliers** can no longer be deleted when they are linked to Products or Purchase Orders
* Improved the performance of **Stock Receipts** to allow for receiving of a Purchase Order with a large number of products
* Products on the **Fulfilment Report** can now be updated by scanning the barcode into the PLU Scan field if the product is not on the first page of the results
* Performance improvements to the **Purchase Order Product Search** functionality to return results faster when containing products grouped by Manufacturer SKU
* **Purchase Orders emails** now display Barcodes in the PDF attachment
* Formatting improved for **A4 Product Labels** with multiple pages
* Resolved an issue with step 3 of the **Stock Replenishment results** where historical Purchase Orders were displayed incorrectly as having been created as part of the Replenishment process
* Performance improvements with the **Inventory Planning Export** to improve the speed
* We've added **new Payment Type** options. These are non-integrated methods used to allocate to your Payments (and can be used for mapping Payments in eCommerce integrations)
  + Stripe
  + Bad Debt
  + The Iconic
  + David Jones
  + David Jones Concession
  + Qoin
  + Refund - Surcharge
  + Ebay
  + PinPay
  + Adyen
  + Amazon
  + Kogan
  + Catch