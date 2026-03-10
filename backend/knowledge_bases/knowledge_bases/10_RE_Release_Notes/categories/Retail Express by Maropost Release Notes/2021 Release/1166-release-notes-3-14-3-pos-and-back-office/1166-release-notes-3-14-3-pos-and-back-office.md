---
title: "Release Notes 3.14.3 - POS and Back Office"
articleID: 1166
category: "2021 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-07-09
---

# Release Notes 3.14.3 - POS and Back Office

# Release Notes 3.14.3 - POS and Back Office

This release will be available to all users between 29th November and 9th December 2021.

## Improvements

### Label Printing from Transfers

Printing Product Labels while processing a Transfer is now easier than ever!

With this release, we've introduced the ability to bulk print labels for Transfers you're actioning, right at the point of actioning them! You can print labels for multiple transfers in the following areas:

* Pick (Inventory > Transfer Management > Pick)
* Dispatch (Inventory > Transfer Management > Dispatch)
* Receive (Inventory > Transfer Management > Receive)
* Make Available (Inventory > Transfer Management > Make Available)

You can choose between the A4 and Zebra Labels, as well as print the quantity based on the Transfer stage e.g. Print Picked

![labelprinting.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppcCqEAI.jpg)

In addition to that, we've improved the default Label Printing feature (found under Inventory > Label Printing). If you filter by a specific Transfer Number, the default "Qty to Print" for Labels will match the number of products "Made Available" on that Transfer.

For example, if you forget to print the product labels while processing the Transfer, you can still use the Label Printing feature and print the exact amount of labels you need.

![mceclip2 (68).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppdd7EAA.jpg)

[Back to top](#top)

### Supplier Returns updated with Size and Colour

We've introduced the Size and Colour attributes to Supplier Returns to make it easier to identify and process your items.

![mceclip0 - 2023-07-09T164247.098.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppeaeEAA.jpg)

Size and colour have been added to the following locations:

* Product Search
* Supplier Return Item Grid (as above)
* Excel Export
* PDF/Emails

[Back to top](#top)

### Customer Fixed Price Groups in POS

We've enabled the ability to view and assign customers to Fixed Price Groups from [within POS](https://galaxy.maropost.com/s/article/Edit-a-Customer-on-a-Sale).

![Fixed_price_groups.gif](https://ress.zendesk.com/hc/article_attachments/4410430775567/Fixed_price_groups.gif)

As part of this change you can:

* View the assigned Fixed Price Group from the Customers tab in POS
* Edit and assign the customer to a Fixed Price Group
* Restrict access to changing fixed price groups to specific [POS Security Profiles](https://galaxy.maropost.com/s/article/Managing-POS-Security-Features) only

![pos-selectfixedpricegroups.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppebNEAQ.jpg)

[Edit the customer](https://galaxy.maropost.com/s/article/Create-a-Customer-in-Back-Office) in Back Office or via [Customer Mass Upload](https://galaxy.maropost.com/s/article/Legacy-Customer-Mass-Download) to remove Price Groups/Fixed Price Groups

[Back to top](#top)

### Other improvements

* Added totals to the [Supplier Returns Details Report](https://galaxy.maropost.com/s/article/Supplier-Return-Detail-Report)
* The Barcode displayed on the Supplier Return email/PDF can now be configured using the Preferred Barcode setting in the [General POS Settings](https://galaxy.maropost.com/s/article/General-POS-Settings)
* [Supplier Returns](https://galaxy.maropost.com/s/article/Create-a-Supplier-Return) will now display a warning if the Supplier Reference/Credit Note number entered on a Return already exists in any Outlet (not just the same Outlet)
* The [Supplier Return Detail Report](https://galaxy.maropost.com/s/article/Supplier-Return-Detail-Report) PLU field now accepts the following codes:
  + Product ID
  + Supplier SKU
  + Supplier SKU 2
  + Manufacturer SKU
  + Additional Barcodes
* Increased the number of product search results when [Creating Transfers](https://galaxy.maropost.com/s/article/Create-a-Transfer-in-Back-Office), including the ability to control the number of visible rows and navigate between multiple pages  
   (screenshot)

This release also includes updates to the Unified API - [click here to read more](https://galaxy.maropost.com/s/article/Release-Notes-3-14-3-AP).

[Back to top](#top)

---

## Resolutions

* The POS [Security Permission](https://galaxy.maropost.com/s/article/Managing-POS-Security-Features) "No Tax On the Order" option has been extended to restrict users from being able to remove tax for individual order items on the sale
* User passwords have been hidden and replaced with a "Reset Password" button
* Restored the Supplier Reference (Credit Note Number) from the [Supplier Return Summary Report](https://galaxy.maropost.com/s/article/Accounting-Supplier-Return-Summary-Report)
* Accounting Data Export will now include all Supplier Return Credits matching the date filters
* Deleting items from a Transfer will now reduce the "Requested" quantity correctly
* Resolved display issues so that now POS can be launched from the iPad home page (instead of only Safari bookmarks)