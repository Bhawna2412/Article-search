---
title: "Release Notes 3.14.1 - POS and Back Office"
articleID: 965
category: "2021 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2024-04-16
---

# Release Notes 3.14.1 - POS and Back Office

This release will be available to all users between 6th - 15th October 2021

## New Features

### Supplier Returns are here

We're excited to announce the release of Supplier Returns, an exciting new addition to Retail Express.

Returning goods and claiming credits from your Suppliers is a key function for many retailers and we are excited to offer you a new tool to effectively manage this process.

![Supplier Returns.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppeWhEAI.jpg)

Supplier Returns allows you to manage claims to your Suppliers, for example:

* Faulty/damaged products
* Short shipped
* Overcharged
* Sale or Return arrangements

As Suppliers may make decisions about your claims at different times, you can apply multiple Credit Notes against a single Supplier Return, or cancel items if a Supplier rejects the claim. 

Find out more - [click here to read the announcement](https://galaxy.maropost.com/s/article/Announcing-Supplier-Returns)

**Important:**MYOB Manual Accounting Export integration users will need to [download new setup files](https://galaxy.maropost.com/s/article/MYOB-Accounting-Data-Export-Setup) before using Supplier Returns (due to the new Purchase Variance account - 59999).

[Back to top](#top)

### MYOB Cloud Integration

We're excited to announce we've expanded our Accounting Integration options, with a new MYOB Cloud Integration!

Streamline your accounting processes and get accurate financial insights to make better business decisions.

![accounting integration.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppeWmEAI.jpg)

Compatible with MYOB AccountRight19+ (where the Company File is stored online), this integration offers a daily automated synchronisation of data from Retail Express to create transactions within MYOB.

Find out more - [click here to read the announcement](https://galaxy.maropost.com/s/article/Announcing-the-new-MYOB-Cloud-Integration).

[Back to top](#top)

### Receipts and Invoices display card digits

Receipts and Invoices paid using Fiserv, Linkly or PC-EFTPOS (both Australia and New Zealand) integrations now display the last 4 digits of the card used to pay!

Please note: this feature is not available for payments made via Tyro or non-integrated Payment Types

To display the last 4 digits of the card, you will need to enable the "Show Payment History" option in the [Invoice and Receipt Settings](https://galaxy.maropost.com/s/article/Invoice-and-Receipt-Settings).

[Back to top](#top)

---

## Improvements

### Purchase Order Total Order Quantity

We've added the "Total Order Quantity" to Purchase Orders, both when creating a PO and on the PO Templates printed and provided to the supplier.

![mceclip3 (40).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppeSbEAI.jpg)  

![mceclip4 (28).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppeWrEAI.jpg)

[Back to top](#top)

### Purchase Order Supplier SKU and Original Departure Date

You can now customise your Purchase Orders, optionally displaying the following:

* Whether to show the Supplier SKU and/or Supplier SKU2
* The Original Date of Departure

![mceclip0 - 2023-07-09T163605.057.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppeWwEAI.jpg)

These settings are available per supplier and can be enabled via the [Supplier Settings](https://galaxy.maropost.com/s/article/Managing-Suppliers).

[Back to top](#top)

### Package Total Units

When creating a package, the total row now includes the sum of individual quantities for each component within the package.

**Before:**  
![mceclip1 - 2023-07-09T163610.858.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdRjEAI.jpg)  

**After:**  
![mceclip2 (67).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppeXQEAY.jpg)

[Back to top](#top)

### Other Improvements

* We've enabled [Cash Up](https://galaxy.maropost.com/s/article/Cash-Up-End-of-Day) toggle in Payment Types to enable Auto-Reconciling for Gift Vouchers and Cash Rounding;  the amount expected will be automatically populated in the "Amount Reconciled" field in Step 3 of the Cash Up.