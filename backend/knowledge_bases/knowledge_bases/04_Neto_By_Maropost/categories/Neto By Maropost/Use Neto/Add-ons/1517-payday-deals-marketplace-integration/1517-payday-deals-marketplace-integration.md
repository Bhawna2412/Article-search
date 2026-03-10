---
title: "Payday Deals Marketplace Integration"
articleID: 1517
category: "Use Neto > Add-ons"
knowledgeBase: "Neto By Maropost"
---

# Payday Deals Marketplace Integration

This add-on was built by **CrescoData**.
[Visit add-on website!](https://crescodata.com/)
For support with this add-on [contact CrescoData](https://crescodata.atlassian.net/servicedesk/customer/portal/1).

## Overview

Payday Deals is Australia's biggest interest free shopping experience. With a customer-centric approach and solely Australia based suppliers, Payday Deals continue to support locals and partners with local inventory brands. From homewares to technology, Sports goods to beauty products, Payday Deals offers everything all in one spot for Australians. With the Payday Deals add-on you can:

- Easily fulfil Payday Deals orders.
- Create and manage Payday Deals listings.
- Manage stock and updates in a centralised place.
- Maintain pricing for your listings.
- Use custom fields for the Payday Deals name/title and description.
- Set a specific price group just for Payday Deals listings.

## Before you Begin

- [Register]() for a Payday Deals account.

## Install and Set up the Payday Deals Add-on

To install and set up the Payday Deals add-on:

1. In your Neto control panel navigate to the **Addons** menu.
2. In the Sales Channels section find the **Payday Deals** add-on and click the **Install** button.
3. Confirm by clicking **Install** in the pop-up window.
4. The add-on will be installed. When installation is complete, click the **Configure Payday Deals** button.
  You'll be taken to the CrescoData portal to complete the set up.
5. Follow the set up steps in the [CrescoData help guide](https://crescodata.com/help-center-faq/integrations/paydaydeals/).

## Approve Products for Payday Deals

To list and sync products between Neto and Payday Deals you need to mark them as 'approved' in Neto. This will allow Neto to update the price and stock levels on Payday Deals, keeping them in sync with your other marketplaces.

- [Individually](https://galaxy.maropost.com/kb/articles/1517-payday-deals-marketplace-integration#individually)
- [In Bulk]()
- [Using the Import Wizard](https://galaxy.maropost.com/kb/articles/1517-payday-deals-marketplace-integration#import-wizard)

### Individually

1. In your Neto control panel navigate to the **Products** > **Active** page.
2. Click on the SKU you want to list and update on Payday Deals .
3. Select the **Approved for Payday Deals** checkbox.
4. Click the **Save** button.

Repeat the process for each product to approve.

### In Bulk

1. In your Neto control panel navigate to **Products** > **Active**.
2. Select the products to approve for Payday Deals by selecting the checkboxes next to each product you want to approve.

> **Note:** Use the search filters to display products in a specific category, brand or type.

3. At the bottom of the page click the **With x Selected button** and select **Approve for Payday Deals** from the menu.
4. In the confirmation window, click the **OK** button.

Repeat the process for each group of products to approve.

### Import Wizard

> **Note:** [Export a list of products](https://galaxy.maropost.com/kb/articles/501-product-export-wizard) that you want to approve for Payday Deals first using the export wizard.

1. In your Neto control panel navigate **Settings & tools** > **Import data**.
2. Click the **Perform complex import** button and select **Start Data Import Wizard** from the menu.
3. On the Upload File page, click the **Browse** button and select your file to upload.
  Click the **Continue to Next Step** button.
4. Select **SKU*** in the Database Field Name drop down menu.

> **Note:** Remove any other fields to ensure other data isn't overwritten, and to speed up the import process.

5. Click the **Add Extra Field** button.
6. Select **Approved For Payday Deals** from the Database Field Name drop down menu.
7. Change the Column name dropdown to **Static Value**. A blank field will display beneath.
8. Enter `Y` in the blank field.
9. Click the Continue to Next Step.
10. Select **Update Existing Products Only** from the How Do You Want To update Your Database drop down box.
11. Click the **Continue to Next Step** button.
12. Click the **Process File Now** button.

Neto will start updating all the product SKUs imported as Approved For Payday Deals Allow up to 10 minutes to complete the import process depending on the number of products you've imported.

You have successfully approved products to list and update on Payday Deals. Neto will now be able to update the prices and stock levels of your products on Payday Deals . This process occurs approximately every 15 minutes.

## Process Payday Deals Sales Orders

Payday Deals sales orders are processed in the same manner as other sales orders in Neto.

You can find more info on how to pick, pack, and dispatch sales orders here.

## Returns

Returns must be processed in both Neto and Payday Deals.

You can find more info on how to create a return (RMA) in Neto here.

## End a Payday Deals Listing

> **Important:** This requires the Status sync to be enabled in the Cresco portal.

Products listed on Payday Deals can be removed by unapproving them in Neto. Follow the steps in one of the methods above, but instead of selecting Approve (or Y for the import) clear the Approved checkbox, select unapprove, or import N.

## Uninstall the Payday Deals Integration

To remove the Payday Deals integration:

1. In your Neto control panel navigate to the **Addons** menu.
2. In the Sales Channels section, find the Payday Deals add-on and click the **Uninstall** button.
3. Confirm that you want to uninstall the integration.

Payday Deals is now uninstalled from your Neto control panel.