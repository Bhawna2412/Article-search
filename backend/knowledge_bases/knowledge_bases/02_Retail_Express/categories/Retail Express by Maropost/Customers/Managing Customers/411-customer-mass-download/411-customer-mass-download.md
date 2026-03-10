---
title: "Customer Mass Download"
articleID: 411
category: "Customers > Managing Customers"
knowledgeBase: "Retail Express"
lastUpdated: 2026-01-21
---

# Customer Mass Download

You can download customer data in bulk for analysis, backup, or integration with other systems, helping leverage customer information for business intelligence. This improves your retail operations by enabling data export flexibility, with properly configured mass download functionality typically supporting better customer analytics and external system integration.

The Customer Mass Download exports your data into a CSV file, enabling you to open the file in a spreadsheet program (Excel, Google Sheets etc), or import the data into another third-party system. Extensive filters mean you can target just the information you need.

You can even manage your customers in bulk, by editing the data and reimporting the information back into Retail Express using the Customer Mass Upload.

## Exporting Customer Data

To use the Customer Mass Download file:

> **Note:** Only one download by any user can be actioned on a database at one time. Click Start New Download to ensure you're downloading the latest customer data each time.

1. Navigate to **Customers > Customer Management > Customer Mass Download**
2. Click the **Filter **icon  to filter your customer data (each of the filters are covered in more detail below)
  ![Screenshot 2026-01-20 at 6.15.19 PM.png](https://us.v-cdn.net/6038474/uploads/AFFIE1PA3CIX/screenshot-2026-01-20-at-6-15-19-e2-80-afpm.png)
3. After making your filter selections click **Apply. **The number of results will be displayed in the bottom right-hand corner
4. **Sort your results** by clicking the column headings to sort in order (you can sort by multiple columns) or **rearrange the columns** using click and drag.
5. You can navigate away from this page, and the file will continue processing - return back to the page later to download the file.
  ![mceclip3 (14).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powLzEAI.jpg)
6. Click **Download CSV **to download the Customer List. This download file will remain available (you can re-download it) until **Start New Download **is clicked
7. The "Download Progress" window will remain until you click **Start New Download** at the bottom of the screen (you should always start a new download each time you perform a Mass Download to ensure you have the latest customer data).
  ![mceclip0 (41).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powMEEAY.jpg)

When the file is opened, you may note that some of the fields may display an apostrophe before them. This is to retain the format of the data in third-party systems e.g. Excel. Otherwise, the format may be changed into scientific notation, truncated, or leading zeroes removed.

![mceclip5 (3).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powMJEAY.jpg)

## Filters

An extensive number of filters are available to allow you to narrow the export file to your required customer records only.

|  |  |
| --- | --- |
| Filter | Details |
| Has Email Address | Whether the customer has an email address recorded against their account |
| Customer Type | Categories assigned to customers e.g. Member, Retail Customer etc. |
| Home Outlet | The Outlet assigned to customers as their preferred outlet, can be used for marketing purposes e.g. targeted advertising. |
| Date Created | The date the customer was created in the database. Use the from/to date ranges to select a period |
| Last Modified | The date the customer record was last updated. Use the from/to date ranges to select a period |
| Export to Web | Indicates if the customer has been enabled to synchronise through the eCommerce API channels |
| Receive Email | If the customer is subscribed to receive email communications |
| Receive Post | If the customer is subscribed to receive physical posted communications e.g. pamphlets |
| Receive SMS | If the customer is subscribed to SMS notifications |
| Is Loyalty Enabled | If using a Loyalty program, customers can opt-in to be part of the program. |
| Points Available | The number of Loyalty Points available to be redeemed |
| Points To Date | The number of Loyalty Points the customer has accrued over their lifetime (regardless of whether redeemed or not) |
| Points Dollar Value | The dollar value of the Points Available for the customer, based on the Dollars per Points ratio in the Loyalty Configuration settings |
| Standard Price Group | The Price Group the customer is assigned to |
| Fixed Price Group | The Fixed Price Group the customer is assigned to |
| Is Account Customer | If a customer has been assigned Credit Terms (enabling them as an Account Customer) |
| Payment Terms | The Credit Terms for the customer |
| Credit Limit | The total dollar value of credit available for the customer |
| Sales Channel | The web API channel the customer's data is synchronised with e.g. Shopify stores |

### Column Availability and Customisation

All fields available in the Customer CSV export template are now supported as columns within the grid. The grid loads with the current (existing) columns as the default view. Users can customise the grid by enabling additional columns as needed or reverting back to the default layout using the reset option.

Columns can be reordered using drag and drop, allowing users to arrange data in a way that best suits their workflow. Column order and visibility preferences are retained in the browser cache and automatically restored on the next page load.

![Screenshot 2026-01-21 at 2.28.38 PM.png](https://us.v-cdn.net/6038474/uploads/BTUD01WXZJA5/screenshot-2026-01-21-at-2-28-38-e2-80-afpm.png)

### Column Grouping

Customer fields in the Mass Download grid are organised into logical column groups to make it easier to find, enable, and manage related data. These groups are displayed within the **Column Picker**, where users can expand or collapse each section and select the columns they want to view.

![Screenshot 2026-01-21 at 2.31.00 PM.png](https://us.v-cdn.net/6038474/uploads/1X03VMPAHAPA/screenshot-2026-01-21-at-2-31-00-e2-80-afpm.png)
The available column groups include:

- **Codes and SKUs**
Customer identifiers and reference codes used across the system and integrations.
- **Descriptions**
Customer names and descriptive fields used for identification and display.
- **Attributes**
Core customer attributes and profile-related fields.
- **Pricing**
Price group assignments and pricing-related customer settings.
- **Supplier and Purchasing**
Purchasing-related fields associated with the customer record.
- **Dimensions**
Dimensional or measurement-based fields where applicable.
- **Other Settings**
Miscellaneous configuration fields not covered by other groups.
- **Custom Properties & URLs**
Custom fields and external URL values configured against customer records.
- **Sales Channels**
Fields related to channel visibility and publishing (for example, web or platform-specific settings).

Users can quickly **Select All**, **Clear All**, or **Reset** columns using the controls at the top of the Column Picker.
The **Reset** option restores the default column set shown when the page first loads.

Column visibility and order are retained in the browser cache and automatically restored on the next page load.

### Header Row Filtering

A header row filter allows users to filter customer records directly within the grid. Filters can be applied to any visible column and combined across multiple columns. Filtering is session-based and is not retained when the page is refreshed.

### Export Options

The footer actions have been updated to provide more control over exports:

![Screenshot 2026-01-21 at 2.34.35 PM.png](https://us.v-cdn.net/6038474/uploads/1YL4WGVFP7GR/screenshot-2026-01-21-at-2-34-35-e2-80-afpm.png)

- **Export All Columns** – Exports all available customer fields, regardless of column visibility
- **Export Visible Columns** – Exports only the columns currently displayed in the grid

The exported file respects the current column order shown in the grid.

### Sorting and Persistence

Column sorting continues to behave as before. Column visibility, order, and sorting preferences are retained per browser session, while applied filters are not saved.