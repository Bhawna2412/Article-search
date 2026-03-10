---
title: "Release Notes 3.14.2 - POS and Back Office"
articleID: 1167
category: "2021 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-07-09
---

# Release Notes 3.14.2 - POS and Back Office

# Release Notes 3.14.2 - POS and Back Office

This release will be rolled out gradually to all users between **1st - 11th November 2021**.

## Additional Supplier Returns Features

![Supplier Returns (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppeXuEAI.jpg)

We've extended Supplier Returns with some exciting new features:

* Filtering
* Export to Excel (both Supplier Returns and Supplier Return Items)
* Return Authorisation Number (RA#) tracking
* Credit Note Validation
* New Supplier Return Detail Report
* New Accounting Features
  + Supplier Credits available in the Financial Summary API
  + Synchronisation of Credit Notes to Xero and MYOB Cloud Integration
  + Create Purchase Variance Account Codes in Xero and MYOB Cloud Integration

[Read the announcement](https://galaxy.maropost.com/s/article/Updates-to-the-Supplier-Returns-feature) for detailed information on each of these exciting new features.

[Back to top](#top)

---

## User Discounts

![User Discount Rules.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppeN3EAI.jpg)

We've expanded the Maximum Discount Rule concept to allow for more flexibility and control when discounting in Retail Express!

With User Discount Groups you can limit the manual discount that staff can apply at POS without impacting automated discounts e.g. Promotional Campaigns.

Maximum Discount Rules can now be applied to Security Profiles (as well as products) allowing you to control:

* Which staff members can discount up to your configured levels e.g. 10% off POS price
* Which staff members can authorise higher discounts

[Read the announcement](https://galaxy.maropost.com/s/article/Announcing-User-Discounts) for more details.

---

## Resolutions

Please note this release also includes [Improvements and Resolutions to APIs](https://galaxy.maropost.com/s/article/Release-Notes-3-14-2-API-Update) (opens in a new tab).

|  |  |
| --- | --- |
| **Area** | **Details** |
| MYOB | Resolved an issue where not all MYOB accounts were displayed in the Accounts Mapping settings |
| Accounting Export File | Supplier Invoice Numbers have been restored to the Purchases File |
| Purchase Orders (Accounting) | Supplier Invoice Numbers have been restored to the Purchase Orders Report |
| Inventory Planning Export | Resolved an issue where an error about a temp table would occur trying to export the report under certain circumstances |
| Loyalty Points | Resolved an issue where loyalty points older than 60 days didn't expire |
| Purchase Orders | Internal Purchase Order Comments are no longer displayed on the Purchase Order |
| Transfers | An issue has been resolved where cancelling quantities entered in the Transfer > Pick screen would still mark the items as Picked |
| Item Detail Export | Resolved an issue that prevented the report from exporting if some products contained invalid special characters |