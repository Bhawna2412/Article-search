---
title: "Set up the MYOB AccountRight Live Accounting Integration"
articleID: 1607
category: "Set up Neto > Accounting Integrations > MYOB"
knowledgeBase: "Neto By Maropost"
---

# Set up the MYOB AccountRight Live Accounting Integration

## Overview

This guide will take you through MYOB AccountRight integration setup steps and procedures. If you have any questions outside of this guide, please [ask us](https://www.neto.com.au/ask-us).

You must be using one of the following versions of MYOB to use this service:

- 
- 
- MYOB AccountRight Premier – Cloud

The integration synchronises data between MYOB AccountRight Live and Neto by Maropost in the following ways:

### **Exported from Neto into MYOB:**

- Customers: Matched by the Neto customer username to MYOB customer ID.
- Invoices: Sales orders in Neto that are approved and completed (includes cancelled orders).
- Payments: Must have an associated invoice to be exported to MYOB.
- 
- RMAs

> **Warning**: This integration does not support MYOB's multiple warehouses. Disable this functionality before you connect MYOB to Neto to prevent errors during exports from MYOB.

### **Imported from MYOB into Neto:**

- 
- Products (Items): Matched by product Custom Label in Neto to the MYOB item code.
- 
- Chart of Accounts and Tax Codes

Sync schedules can be viewed and changed in the **MYOB Live** > **Tasks** page.

> **Important**: Products Custom Labels in Neto must match Item Codes in MYOB when using any of the standard workflows 1-3. 

## Set up MYOB AccountRight Live

1. In your Neto control panel, click **Addons** from the navigation menu.
2. Under Accounting, install **MYOB AccountRight Live**.
3. Once installed, you will be taken to the **Add New Integration Page.** Name the integration, setthe  integration start date, choose an integration workflow then Continue.
**Note**: The integration workflow will depend on your own workflow. Please ensure you read each workflow carefully and select the appropriate one.
4. Connect to your **MYOB AccountRight Live account** - click connect to my.MYOB
5. Click the "Connect to MYOB AccountRight Live" button below. This will take you to your MYOB AccountRight Live account where you will be asked to login and authorise access to your my.MYOB account.
6. Follow on screen instruction to generate MYOB AccountRight Live token
7. Follow on screen instruction to complete configuration of MYOB AccountRight Live.
8. Select the **Company File** to be integrated from the dropdown list. Enter the **Username** and **Password** used to authenticate the company file when starting MYOB (this is not the same as your my.MYOB login details) then click **Continue**.        **Please Note**: If you do not currently use a password with your company file, you will need to create one as it is required for authentication.
9. Map your default **Account/Tax code** settings and set **Inventory Import Settings**, **Invoice Export Settings** and **Customer Export Settings**. Click **Continue**.                
**Tip**: For more help on how to setup these accounts in MYOB, click [here](http://help.myob.com/wiki/display/ar/Set+up+accounts).
10. Your **MYOB AccountRight Live** integration setup with Neto is now complete and data integration will commence based on the pre-selected configuration options. Click **Save**.

Your MYOB account is now integrated with your Neto control panel. To ensure smooth operation run the import tasks below first, before any export tasks.

## Set up a new Company File

When starting a new MYOB company file, you will need to uninstall and reinstall the MYOB integration. This will clear all previous export and import logs that where linked to your old file, allowing for a new sync to your new company file.

To uninstall the MYOB integration:

1. Ensure all previous invoices, customers, and payments have been exported successfully.
2. In your Neto control panel, click on the **Add-on** menu.
3. Find the MYOB AccountRight add-on and click the **uninstall** button.
4. Confirm that you want to uninstall the add-on.
5. Follow the steps above to reinstall MYOB.

## Run Import Tasks

Your MYOB integration operates on individual tasks that run on a schedule. This allows you to set up the integration and only import or export specific information while finalising the rest of the integration. Once the integration is set up, disable all tasks except for:

- 
- 
- Company File.

From there, work downwards running the tasks one by one, checking all the data that comes through. The main tasks that need to run (in order) are:

1. **Import Products**
Import products links the product in Neto and MYOB, and is required to export invoices with items. Item number in MYOB will be matched to the custom label product field in Neto. If there is no custom label entered on the product, item number will be matched with the product SKU.
2. **Import Customers**
The MYOB card ID field is matched to the Neto customer username field. Once the customers are linked up, similar to item, it should be fine to start exporting.

The customers and products need to exist in MYOB first, so you will now be able to export invoices to MYOB Live AccountRight.