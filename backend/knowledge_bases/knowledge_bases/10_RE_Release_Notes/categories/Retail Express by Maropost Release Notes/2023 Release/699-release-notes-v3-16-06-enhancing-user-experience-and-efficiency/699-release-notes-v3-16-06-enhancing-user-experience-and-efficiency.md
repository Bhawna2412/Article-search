---
title: "Release Notes v3.16.06 - Enhancing User Experience and Efficiency"
articleID: 699
category: "2023 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2024-05-13
---

# Release Notes v3.16.06 - Enhancing User Experience and Efficiency

This release will be available to all users throughout October 2023.

## **Create Style/Matrix Products via Standalone Page**

In response to user feedback and industry trends, we are proud to introduce the standalone "Create Style/Matrix Product" page. This feature allows users to effortlessly create style items with ease. Previously confined to the purchase order items feature, this functionality now stands independently.

After creating your style, you'll seamlessly navigate to the product search and management page for a comprehensive review. To enhance user control, we've added a new profile feature, enabling administrators to control access to this page.

To access the new feature, Go to Inventory > then **Create Style/Matrix Products.** This feature adopts functionality from our existing “Create Style Product” feature that exists within PO Items page when managing Purchase Orders.

![]()![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/R061.05T5g00000tlAEzEAM.png)  
![]()  
![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/R062.05T5g00000tlAGWEA2.png)

For more details and step-by-step configuration of **Create Style Matrix Product**, click [here](https://galaxy.maropost.com/s/article/Create-Styles-Matrix-Products-Variations-with-Unique-Styles "https://galaxy.maropost.com/s/article/Create-Styles-Matrix-Products-Variations-with-Unique-Styles").

When you create a new style/matrix product, you are automatically redirected to the results page of the Product Search and Management Feature, pre-filtered to show the items you just created.

* If you do not have permission to “Product Search and Management”, you will be redirected to the results of “Product Search”, instead.
* Additional Filters have been added to Product Search and Management to assist in locating recently created and modified products.
* When creating a new style product, you can now select “None” as the value for either the Size or Colour attributes.

  **Please Note**: To access the new security profile feature, you will need to configure your staff profile have access to “Create Style/Matrix Products” from within Staff > Profile Security > Edit Features.

  For more details about **Profile Security** area controls click [here](https://galaxy.maropost.com/s/article/Using-Profile-Security-to-enable-Back-Office-features "https://galaxy.maropost.com/s/article/Using-Profile-Security-to-enable-Back-Office-features").

## **Background Reports - Additional Reports and Functionality**

Our commitment to empowering users with data-driven insights continues with the addition of Background Exporting to more reports. This feature streamlines your workflow, making data retrieval a breeze. The following reports now support Background Exporting:

* PO Stock Receipt Details Report
* Stock List Report
* Return Reasons Report & Return Reasons Report (Limited)

  + Additionally, we've incorporated new columns and filters into the Return Reasons Reports, allowing for precise filtering of in-store vs. online sales channels and various attributes.
* Product Search and Management Results

  + We also added new filters to assist with filtering by product created/modified dates.

### **Enhancements include:**

* Queueing Logic added to the Export Download Manager

  + To optimise performance of the job completion times, only one instance of a given report can run concurrently, any others will queue behind and will commence upon the completion of the prior.
  + New Job Status “Queued” is used to depict such cases.
* Added additional date/time values for export jobs in the Export Download Manager page

  + We now show: Date Requested, Date Started, Date Completed for each job
* Added Hyperlinks to the Report Name values in the Export Download Manager

  + Click the Report Name of a previous job to revisit the report page directly in a new browser tab.
* Performance enhancements to the Product Sales Report for large data sets and custom attributes.

## **POS Invoices - Display Customer Email Address on the A4 Invoice.**

* New Setting added to: Settings > POS Settings > Invoice and Receipt Settings

  + “Display Customer/Order Email on Invoice”
  + When enabled, the email address associated with the order will be displayed on the A4 Invoice document, including Dispatch and Delivery Invoices.
  + This setting is obeyed when invoices are printed/emailed from POS and also the Back Office

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Changes.05T5g00000tlBM2EAM.jpeg)

## **General Enhancements for 3.16.06**

As part of our ongoing commitment to delivering excellence, we've made significant enhancements in this release:

* **Item Detail Export**: Now includes Last Sold/Last Fulfilled Dates in the Excel/CSV file when exporting via the Download Manager.
* **End of Day Report**

  + Added row totals to the exported report when using Export Download Manager.
* **PO & Stock Receipt**

  + **Stock Receipt/Invoicing:**

    - Enhanced performance during the scanning/entering of Stock Receipt Items.
    - Added a new footer button to facilitate the transition of purchase orders to the "Available" status when all items have been removed or cancelled manually.
  + **PO Manager / Details**

    - Updated the sorting behaviour to allow users to sort by Supplier Invoice Number by clicking the column heading. If multiple invoices exist against a single PO, the sort order is applied based on the first invoice number.
    - Resolved an issue where the invoice Number if added after PO creation, was not always depicted in the PO Manager Results.
    - Once an invoice has been finalised against the PO, the Invoice Number in the PO Details tab, becomes read-only and can only be edited within the stock receipt/invoice page directly.
    - Resolved an issue that could result in negative on order quantities for purchase order items that could occur in certain, isolated scenario’s.
    - Resolved an issue when opening specific purchase orders and implemented performance enhancements for better efficiency when searching for a specific POID or supplier invoices.
  + **PO Upload via Excel**

    - Implemented logic to prevent accidentally uploading the same spreadsheet multiple times if the “Upload” button was double clicked.
    - Updated the handling of Supplier SKU and Supplier SKU 2 within the same upload file which could in certain cases, create more PO items than expected.

## **API Enhancements:**

* **Cash Sale Account Security Enhancement:** The cash sale account can no longer be overridden via SOAP - EDS or Webstore API when utilizing the "ordercreatebychannel" feature.
* **OrderCreateByChannel - Enhanced Functionality**: We have improved the functionality of the "OrderCreateByChannel" feature within our API with Apply Source Priority function.
* **CreateOrder or CreateOrder by Channel -** For Orders created by Channel, we've ensured that the invoice status in POS accurately reflects the payment status when users make API calls for No Payment, Partial Payment, or Full Payment.

  |  |  |
  | --- | --- |
  | **Payment** | **Status** |
  | No Payment by API call | Awaiting Payment |
  | Partial payment by API call | Awaiting Payment |
  | Full payment by API call | Processed |

## **Bug Fixes and Performance Enhancements**

In addition to our exciting new features, this release includes crucial bug fixes and performance enhancements. We are committed to providing a seamless and error-free experience for our users. Here are some of the key issues addressed:

* **Delivery Suburb Field displaying Billing Suburb**: We've fixed this issue to display the correct delivery suburb in the Fulfilment Report.
* **Financial Summary Report**: Resolved an issue to improve report performance when exporting.
* **EFTPOS Payment on Cancelled Invoice**: Implemented changes so that, for cancelled invoices in POS, if you click any type of payment type in the payment screen a message is displayed saying you cannot take payments on Cancelled sales.
* **Style Holdings Report**: The Style Holdings Report has been updated to accommodate a maximum number of sizes in a single search. The report displays correct results without error unless exceeds the try-catch limit.
* **Shopify Fulfilment Locations**

  + Changes have been implemented to prevent removing an Inventory location/s that are currently also assigned as Fulfilment Locations.
* **POS Search - Advanced search button is hidden**: An issue in POS Product Search has been fixed, ensuring that the Advanced Search button is always accessible, even for products with long descriptions.
* **Stock Re-Orders via Purchase Orders**: This issue has been resolved to prevent products from duplicating across multiple pages of results in replenishment scenarios.
* **PO Shipping Status not displayed for SO items**: We've resolved an issue where the shipping status of Special Order POs was not displayed in POS, providing better transparency for users.
* **Delivery Details Overriding Customer First Name**: An issue in POS where Customer Details incorrectly auto-populated into Delivery Details has been successfully resolved.

**Coming Soon**: **Product Detail Log Report**   
We're excited to announce the upcoming release of the Product Detail Log Report. While it will not be immediately visible upon the release of v3.16.06, this new report is on the horizon. Stay tuned for the feature launch which will be announced separately.