---
title: "OzSale (MySale) Marketplace Sales Channel"
articleID: 1634
knowledgeBase: "Neto By Maropost"
---

# OzSale (MySale) Marketplace Sales Channel

![OZSale.png](https://us.v-cdn.net/6038474/uploads/7ZDYTDUONEIX/ozsale.png)

#### This integration was built by CrescoData

[Visit Add-on Website!](https://crescodata.com/help-center-faq/integrations/ozsale/)

For support with this integration [contact Cresco](https://crescodata.atlassian.net/servicedesk/customer/portal/1)

## Before you Begin

- 
- 
- 

## Install and Set up the OzSale Sales Channel

To set up the OzSale sales channel:

1. In your Neto control panel, click the **Addons** menu.
2. 
  In the Sales Channels section, find the OzSale add-on and click the **Install** button.
3. 
  In the pop-up window that appears click the **Install** button.
4. 
  The add-on will be installed. When complete, click the **Configure OzSale** button.
5. 
  You’ll be directed to the Cresco portal to configure your OzSale integration settings. These settings are explained further in the [Cresco help centre](https://crescodata.com/help-center-faq/integrations/ozsale/).

## Approve Products to list on OzSale

To list and sync products between Neto and OzSale you need to mark them as approved in Neto. This will allow Neto to update the price and stock levels on OzSale, keeping them in sync with your other marketplaces.

Products in Neto can be approved in three ways:

- 
- 
- 

> **Note:** **Important**: Please allow 1-5 business days for the OzSale Team to verify your listings and launch your store.

### Individually Approve Products

1. In your Neto control panel, navigate to the **Products** > **Active** page.
2. 
  Click on the SKU you want to list and update on OzSale.
3. 
  Select the **Approved for OzSale** checkbox.
4. 
  Click the **Save** button.
5. 
  Repeat the process for each product to approve.

The products will now be sent to list on OzSale.

### Approve Products in Bulk

1. In your Neto control panel, navigate to **Products** > **Active**.
2. 
  Select the products to approve within OzSale by selecting the checkboxes next to each product you want to approve.
3. 
  Click the **With x Selected ** button (beneath the product list) and select **Approve for OzSale** from the pop up menu.
4. 
  In the confirmation pop-up, click the **OK** button.
5. 
  Repeat the process for each group of products to approve.

### Approve Products via Import

> **Note:** **Tip**: [Export a list of products](https://galaxy.maropost.com/kb/articles/501-product-export-wizard) that you want to approve for OzSale first using the export wizard.

1. In your Neto control panel, navigate to **Settings & tools** > **Import data**.
2. 
  Click the **Perform complex import** button and select **Start Data Import Wizard** from the menu.
3. 
  On the **Upload File** page, click the **Browse** button and locate the file to upload.
4. 
  Click the **Continue to Next Step button**.
5. 
  Select `SKU*` in the **Database Field Name** field.

  **Tip**: Remove any other fields to ensure other data isn’t overwritten, and to speed up the import process.
6. 
  Click the **Add Extra Field** button.
7. 
  Select `Approved For OzSale` from the **Database Field Name**
8. 
  Change the **Column name** dropdown to `Static Value`. A blank field will display beneath.
9. 
  Enter `Y` in the blank field.
10. 
  Click the **Continue to Next Step** button.
11. 
  Select **Update Existing Products Only** from the **How Do You Want To update Your Database** drop down box.
12. 
  Click the **Continue to Next Step** button.
13. 
  Click the **Process File Now** button.

Neto will start updating all the product SKUs imported as **Approved For OzSale**. Allow up to 10 minutes to complete the import process depending on the number of products you’ve imported.

You have successfully approved products to list and update on OzSale. Neto will now be able to update the prices and stock levels of your products on OzSale. This process occurs approximately every 15 minutes.

## Process OzSale Sales Orders

OzSale sales orders downloaded to Neto are processed the same as other sales orders. You can find more info on how to pick, pack, and dispatch sales orders here.

## End a OzSale Listing

> **Note:** **Important**: This requires the **Status** sync to be enabled in the Cresco portal.

Products listed on OzSale can be removed by unapproving them in Neto by Maropost. Follow the steps in one of the methods above, but instead of selecting Approve (or Y for the import) clear the Approved checkbox, select unapprove, or import N.

## Resync Products in Cresco

Not all setting changes will force resync of your data from Cresco to OzSale. To manually resync your products follow the steps CrescoData provide in the [Publishing Products](https://crescodata.com/help-center-faq/integrations/ozsale/) section of their documentation.

## Uninstall the OzSale Integration

To remove the OzSale integration:

1. In your Neto control panel, navigate to the **Addons** menu.
2. 
  In the Sales Channels section, find the OzSale add-on and click the **Uninstall** button.
3. Confirm that you want to uninstall the integration.

OzSale is now uninstalled from your Neto control panel.