---
title: "Release Notes v3.12.3 - POS and Back Office"
articleID: 893
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-12-01
---

# Release Notes v3.12.3 - POS and Back Office

# Release Notes v3.12.3 - POS and Back Office

**Release Date:** 22-07-2020

This release we've updated the powerful Customer Activity Report and introduced a new efficient way to filter and report on products with Auto Replenishment options selected (the ability to automatically create Purchase Orders based on sale conditions in POS). We've also made **13 **improvements and resolutions.

**Please note: **This release includes some modifications to APIs - please refer to the [API Release Notes](https://galaxy.maropost.com/s/article/Release-Notes-v3-12-3-API) for more details.

In this update:

- [Customer Activity Report](#car)
- [Product Auto Replenishment](#replenishment)
- [Improvement and Updates](#improvements)

## []()Customer Activity Report Update

The Customer Activity Report, a powerful tool for targeting your customer base, has an updated design and new CSV export format.

To access the Customer Activity Report navigate to **CRM > Customer Activity Report.**

#### **Design**

- Updated visual design of the report
- Easier to navigate through multiple pages of results
- Updated CSV file format
- All the same great functionality remains:  - Click headings to sort data
  - Use the buttons in the top right-hand corner to export the report

![mceclip2 (75).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfXlEAI.jpg)
![mceclip3 (44).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfXqEAI.jpg)[New design ](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Farticle_attachments%2F360004605135%2Fmceclip3.png)

#### **New CSV Export format**

As part of the update the export of the report has also been modified. The new CSV file wraps each field with inverted commas e.g. "your data here".

> **Note:** If you use the Customer Activity Report for any automated reporting, you may need to review your configuration to ensure it supports the new format.

![CARnotepad.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppf5EEAQ.jpg)
To access the export file:

1. Navigate to **CRM > Customer Activity Report**
2. Update the **filters** as required
3. Click **Search**
4. Click the **CSV Export** button in the top right-hand corner of the results table
  ![mceclip5 (19).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfY5EAI.jpg)
5. The file will be downloaded

## []()Auto Replenishment updates

In [version 3.12.2](https://galaxy.maropost.com/s/article/Release-Notes-3-12-2-POS-and-Back-Offic) we introduced a new Auto Replenishment field to automatically generate Purchase Orders for sales with insufficient available stock.

To further extend this functionality, we have introduced several improvements within Retail Express to make it easier to filter/update the preferred auto-replenishment option.

|  |  |
| --- | --- |
| **Feature** | **Details** |
| [Product Search & Management](https://galaxy.maropost.com/s/article/Using-Product-Search-Management) - Filters  [Product Search](https://galaxy.maropost.com/s/article/1Product-Search) | New Auto Replenish drop-down box to replace the following fields:  - Auto Generate PO Always - Auto Raise PO when SOH=0  ![mceclip7 (13).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfJGEAY.jpg) |
| [Product Search & Management](https://galaxy.maropost.com/s/article/Using-Product-Search-Management) - Results | Added the Auto Replenishment options to the Apply Product Edit Setting drop-down. This feature allows you to bulk apply a replenishment option to products in the search results ![mceclip8 (6).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfYAEAY.jpg) We've also added the ability to change the Replenishment option for individual products with the Auto Replenishment column. To update the product select the new option from the drop-down and click "Save Changes" at the bottom of the screen. ![mceclip9 (10).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfVoEAI.jpg) |
| [Product Search & Management](https://galaxy.maropost.com/s/article/Using-Product-Search-Management) - Export | A column has been added to the Excel export file displaying the Replenishment option for products. This replaces the previous two columns:  - AutoGeneratePOAlways - AutoGeneratePOStockZero  ![mceclip10 (6).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfYPEAY.jpg) |
| [Label Printing](https://galaxy.maropost.com/s/article/Print-Product-Labels) | Added the Auto Replenish filter to Label Printing, replacing the previous filters:  - Auto Generate PO (Always) - Auto Generate PO When Sold (Out of Stock)  ![mceclip11 (4).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfYjEAI.jpg) |

## []()Improvements

|  |  |
| --- | --- |
| Purchase Order Upload | The Free Onboard (FOB) Currency will now be calculated based on a hierarchy, using the first available value:  - Outlet FOB Currency (as per the [Outlet Configuration](https://galaxy.maropost.com/s/article/Managing-Outlets-and-Stores)) - Country Currency (as per the [Country configuration](https://galaxy.maropost.com/s/article/Country-Configuration)) - If no other values set assume AUD |

## Resolutions

|  |  |
| --- | --- |
| Fulfilment Report | Fulfilment Report now displays the correct Available count for products that are out-of-stock |
| Mass Upload | Restored the error message about invalid attributes when uploading products with size, colour or season attributes that don't exist in Retail Express |
| PO Detail Report | Re-added the Invoice Number details to the report |
| POS | Products from voided sales are now added as Available stock correctly |
| POS | Promotional Campaign icons are now displayed in full on the Products tab |
| POS Surveys | Users will be able to configure Surveys again after deleting all existing survey options |
| Product Sales Report | Performance improvements when filtering the report by Product Type and Custom Attributes |
| Purchase Orders | Restored the ability to use the "Tab" button on the keyboard to move between fields when editing a Purchase Order |
| Purchase Order Upload | Improved the message displayed when using PO upload with an error in the Supplier SKU2 field. |
| Refunds | Resolved an issue where freight was unable to be refunded if it was processed earlier on a cancelled refund. |
| Refunds | Refunds of products now update the Available and Allocated stock correctly |
| Transfers | The "Delete" button is now disabled for products on Transfers in progress when products have a GRA record in the Transfers Variance Manager (as these products are unable to be deleted). |

Want more information? View all [Release Notes](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Fcategories%2F115000210393) now!