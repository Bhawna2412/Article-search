---
title: "Updates to the Supplier Returns feature"
articleID: 960
category: "Feature Announcements > News"
knowledgeBase: "Retail Express"
---

# Updates to the Supplier Returns feature

You can leverage enhanced supplier return capabilities in Retail Express with improved functionality for managing merchandise returns to vendors, helping your retail operations process returns more efficiently and maintain accurate records. This capability provides streamlined workflows for documenting and tracking supplier returns, which helps ensure proper credit application and supports better vendor relationship management.

Setting up updated supplier return processes enables your retail operations to handle vendor returns systematically, helping optimize inventory management and financial tracking. This helps retail businesses maintain accurate inventory levels and financial records by ensuring all returns to suppliers are properly documented with appropriate inventory and accounting adjustments.

# Updates to the Supplier Returns feature

We've introduced some new features to further extend Supplier Returns, making this feature even more useful for managing the claims process.

This feature will be rolled out gradually to all users between **1st - 11th November 2021**.

## Filtering

You can now filter the Supplier Returns window, making it easier to find the Supplier Returns you need.

![supp_ret_filter.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiRTEAY.jpg)
Any column that displays the funnel icon (![mceclip1 - 2023-07-10T034659.927.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiBPEAY.jpg)) can be filtered - only the quantity and claim columns are excluded.

Clicking the icon will display a dropdown of the options for that column. You can either type the name (to filter the list and select the items you need) or click individual items, then click Filter.

Click the Clear button to remove the filter.

Filters can be applied to multiple columns at a time e.g. Return to Supplier and Return from Outlet.

> **Note:** Some Filters will be automatically applied depending on user access e.g. the Outlets filter will update automatically to only display the Outlets the user has access to.

Date columns include the ability to filter by a range

![mceclip0 - 2023-07-10T034708.047.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphnrEAA.jpg)

## Export to Excel

You can now export data to Excel from within Supplier Returns. Even better, if you've modified the data on screen the export will output the data in the same way!

For example, if you have filtered by a specific supplier, then sorted by the Return From Outlet, with the Status column first - that's how the data will be displayed in your Excel file.

The export will display based on:

- Filters applied (list of Supplier Returns only, filters are not available on the Supplier Return Items grid)
- Column order
- Sorting preference

**List of Supplier Returns**

![mceclip6 (19).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppicPEAQ.jpg)
**Supplier Return Items**

![mceclip5 (31).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiaFEAQ.jpg)

## Return Authorisation (RA #)

Some suppliers may require you to reference a Return Authorisation Number (RA#) provided on Supplier Return documentation or deliveries.

We've added the ability to capture, display and search by RA # to make it easier to locate the correct Return and communicate more effectively with your suppliers.

The RA # will also be displayed on the print and email PDF documents.

![mceclip7 (20).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppicUEAQ.jpg)

## Credit Note Validation

We've introduced a helpful new warning into the Apply Credit Note process for Supplier Returns.

If you forget to enter a Supplier Reference (Supplier Credit Note Number) or if you accidentally enter an existing Supplier Reference, we'll let you know with a warning.

![mceclip0 - 2023-07-10T034741.916.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiceEAA.jpg)
**Prompt to enter a Supplier Reference**

If you leave the Supplier Reference Number field blank when applying a Credit Note, you'll receive a reminder to enter a Supplier Reference. Credit Notes cannot be amended once applied, so you'll be unable to enter a Supplier Reference Number later.

You can still proceed without entering a Supplier Reference Number (if you choose not to enter one).

Credit Notes cannot be edited once applied (including entering a Supplier Reference Number).

![mceclip0 - 2023-07-10T034746.391.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppicjEAA.jpg)
**Prompt about duplicate Supplier Reference Numbers**

If you enter a Supplier Reference Number used on a previous Credit Note for the same supplier, you'll receive a warning to advise it's a duplicate. You can continue to apply the Credit Note with the duplicate Supplier reference, however, it can impact Accounting Integrations.

The Credit Notes will only check for a matching Supplier Reference for the same supplier (matching Supplier Reference Numbers for different Suppliers will not display a warning).

![mceclip1 - 2023-07-10T034751.149.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppid3EAA.jpg)

## Supplier Return Detail Report

The new Supplier Return Detail Report provides a deeper look at the Supplier Returns, with extensive filters. Use this report to make informed decisions and get a better view of the status of your Returns e.g. to view all damaged items, or find all outstanding Short Shipped items for a particular supplier.

![mceclip0 - 2023-07-10T034756.309.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppidNEAQ.jpg)
To access the report, navigate to **Reports > Stock Reports > Supplier Return Detail Report.**

You will need to update your Security Profiles to enable the feature "Supplier Returns Detail Report".

The Supplier Return Detail Report includes a variety of filters. Using the Report you'll be able to:

- Filter by individual Supplier Returns
- Find all Returns associated with an individual Supplier Invoice
- Search for the status of the entire Supplier Return document, or individual line items
- View a list of all individual Supplier Return Items matching your filters
- Export the report to Excel

## Accounting Integrations

We've introduced some new features specific to our Accounting Integrations:

- The [Financial Summary API](https://v1apidocumentation.retailexpress.com.au/apis/vd0ld51rce) has a new endpoint to retrieve Supplier Credits
- Credit Notes are now synchronised to our Xero and MYOB Cloud integrations
- Create a Purchase Variance Account Code for the Xero and MYOB Cloud integrations

Before you can begin using the Supplier Credit integration, you will need to update your Xero/MYOB Cloud Integration settings.

Supplier Returns (including Purchase Variances) will not synchronise to your accounting package until you have configured these settings.

1. Navigate to **Settings > Integrations > Xero** or **MYOB** (depending on which integration you have enabled)
2. Tick **Include Supplier Returns in Purchases**
  ![mceclip0 - 2023-07-10T034802.446.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiHXEAY.jpg)
3. Click the **Accounts **tab
4. Select a **Purchase Variance **account from the dropdown
  ![mceclip1 - 2023-07-10T034806.083.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppidcEAA.jpg)
5. Click **Save All**

## Still Coming - Product Attributes

We're still working on one more feature to come with Supplier Returns - Product Attributes (like Size, Colour, Season etc). This feature will allow you to:

- View Product Attributes when entering items on a Return
- View the Product Attributes in the Supplier Return Items grid
- View Product Attributes on the Supplier Return Email/Printed PDF