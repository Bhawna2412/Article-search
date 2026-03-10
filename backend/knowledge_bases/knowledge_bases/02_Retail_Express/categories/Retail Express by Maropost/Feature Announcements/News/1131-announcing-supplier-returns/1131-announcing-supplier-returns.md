---
title: "Announcing Supplier Returns"
articleID: 1131
category: "Feature Announcements > News"
knowledgeBase: "Retail Express"
---

# Announcing Supplier Returns

You can process supplier returns using the new feature in **Retail Express** to manage defective inventory and track vendor credits more effectively. This capability helps improve inventory accuracy and vendor accountability by providing dedicated workflows for returning products to suppliers, maintaining proper documentation, and ensuring financial records reflect actual stock holdings.

Understanding supplier returns functionality involves learning about return workflows, credit note handling, and inventory adjustment procedures. When you utilize this feature, you can expect better vendor relationship management through documented returns, improved inventory accuracy, and more reliable financial reporting for cost of goods and inventory valuation.

You can process supplier returns using the new feature in **Retail Express** to manage defective inventory and track vendor credits more effectively. This capability helps improve inventory accuracy and vendor accountability by providing dedicated workflows for returning products to suppliers, maintaining proper documentation, and ensuring financial records reflect actual stock holdings.

Understanding supplier returns functionality involves learning about return workflows, credit note handling, and inventory adjustment procedures. When you utilize this feature, you can expect better vendor relationship management through documented returns, improved inventory accuracy, and more reliable financial reporting for cost of goods and inventory valuation.

# Announcing Supplier Returns

We're excited to announce the release of Supplier Returns, an exciting new addition to Retail Express.

Returning goods and claiming credits from your Suppliers is a key function for many retailers and we are excited to offer you a new tool to effectively manage this process.

This feature will be available to all users between the 6th - 14th of October 2021.

## What's new

![Supplier Returns.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmHuzEAE.jpg)
Supplier Returns allows you to manage claims to your Suppliers, for example:

- Faulty/damaged products
- Short shipped
- Overcharged
- Sale or Return arrangements

As Suppliers may make decisions about your claims at different times, you can apply multiple Credit Notes against a single Supplier Return, or cancel items if a Supplier rejects the claim.

### Features of Supplier Returns

- Create and manage Supplier Returns
- Customise Return Reasons, such as Short Shipped, Damaged or Overcharged
- Capture notes and comments to provide detailed information to your Suppliers
- Isolate inventory from available or faulty goods using the new "On Return" stock bucket
- Process incorrectly invoiced inventory e.g. your Supplier overcharged you, by applying the credit Retail Express will revalue your inventory correctly
- Process multiple Credit Notes against a single Supplier Return
- Cancel items from a return

### User Interface Update

Supplier Returns is built using a new user interface with some exciting new productivity features:

- Selecting multiple items will display bulk actions available for all Return Items
- Sort by multiple headings
- Resize the columns
- Reorder the columns using drag-and-drop

![returns_columns.gif](https://ress.zendesk.com/hc/article_attachments/4407292134415/returns_columns.gif)
Please note these column preferences will only be retained when using Supplier Returns - if you navigate away and come back you will need to reconfigure your view.

## What's changed

As part of this feature release, there have been some new changes to the existing features in Retail Express.

- New "On Return" Stock Bucket
- User Security
- Manual Accounting Integration Update for Variances

### New "On Return" Stock Bucket

While waiting for your Supplier's decision, we want to ensure you can isolate inventory using a new Stock Bucket called "On Return". As you start processing Supplier Returns we move inventory into the bucket, and if you apply a Credit Note, we adjust it back out of this bucket.

This "On Return" stock bucket is visible in many areas of Retail Express, including:

|  |  |
| --- | --- |
| **Area** | **Details** |
| Products | New "On Return" column to the Inventory tab |
| Item Detail Export | New column "On Return" to the Excel file |
| Stock Value vs Sales | The "Stock Value Based On" filter now has "On Return" as an option (included in the stock value by default) |
| Inventory Movement Log | New Movement Type of "Supplier Return" - when stock is updated as a result of the Supplier Returns an entry will be made in the report. "On Rtn" column in the results  "On Rtn" column added to the Excel/CSV Export |
| Stock Control Report | Added a new filter "On Return > 0" (used to filter products that are currently On Return) Included a new "Rtn" column in the results and printout |

### User Security

To allow you to control which users have access to the Supplier Returns feature we've introduced new Security Features within Profile Security:

- Supplier Return Reasons (to create your custom Return Reasons)
- Supplier Returns (create and manage Returns)
- Accounting Supplier Return Summary Report (to control access to the report)

### Manual Accounting Integration

Supplier Returns integrates with the Manual Accounting Export feature (Xero and MYOB integration will be available in the near future).

When a Supplier Credit/Credit Note is created, the following information is sent to accounting:

- Adjustments to inventory/stock value (the Applied Credit)
- Unapplied credits (Purchase Variance)
- Total Credit Note Value (sum of the Applied Credit and the Purchase Variance)

One Supplier Credit is sent per Credit Note processed, summarised as a total (not per individual product):

- Adjustment for the Applied Credit Value is sent to the Inventory account
- Leftover credit, the Purchase Variance, is sent to the Purchase Variance account

> **Important:** MYOB Manual Accounting Export integration users will need to download new setup files before using Supplier Returns (due to the new Purchase Variance account - 59999).

## Future Improvements

This is just the start of our Supplier Return feature, and we've already got more exciting features still to come:

- Synchronising Credit Notes to Xero and MYOB via the Cloud Integration
- Filtering Supplier Returns
- More detailed reporting to drill into Supplier Returns and Credit Notes
- The ability to capture Return Authorisation Numbers (RA#)
- Export to Excel
- Adding Product Attributes for Return Items e.g. size, colour
- Adding a warning if you forget to enter a Credit Note number, or use a Credit Note Number previously used for the Supplier