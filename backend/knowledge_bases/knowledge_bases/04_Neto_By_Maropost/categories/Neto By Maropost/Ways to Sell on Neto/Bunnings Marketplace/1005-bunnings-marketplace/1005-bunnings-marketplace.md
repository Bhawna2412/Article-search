---
title: "Bunnings Marketplace"
articleID: 1005
category: "Ways to Sell on Neto > Bunnings Marketplace"
knowledgeBase: "Neto By Maropost"
lastUpdated: 2025-12-11
---

# Bunnings Marketplace

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/BunningsIcon.05T5g00001BWDZUEA5.jpeg)
**Addon built by:**
CrescoData

**Addon website:**[Visit the Add-on Website!](https://crescodata.com/help-center-faq/integrations/bunnings)

**Addon support link:**
For support with this integration [contact Cresco](https://crescodata.atlassian.net/servicedesk/customer/portal/1).

## Before you Begin

Bunnings Marketplace is a closed marketplace, meaning Bunnings must review and approve your application before you can sell on their site. If you do not already have a Bunnings Seller account, please contact Bunnings:
[Marketplace Seller Interest Form - Bunnings Australia](https://www.bunnings.com.au/marketplace-seller-interest-form).

## Install the Bunnings Marketplace Add-on

To set up the Bunnings Marketplace sales channel:

1. In your Neto control panel, navigate to the **Addons** page.
2. In the Sales Channel section, find the Bunnings Marketplace add-on and click the **Install **button.
3. In the popup that appears, click the **Install** button.

> **Note:** There may be additional fees associated with activating this sales channel.

4. Click **Configure Bunnings Marketplace**.

The Bunnings Marketplace application is built and maintained by CrescoData. You will be redirected to the Bunnings Marketplace app to accept Cresco's terms and privacy policy and to configure your Bunnings integration.

## Set up the Bunnings Marketplace Integration

Once installed you can access the Bunnings Marketplace application via your Neto control panel. In the Sales Channel section of the sidebar menu, navigate to **Other > Bunnings Marketplace**. Or from the **Addons** page, locate the Bunnings Marketplace add-on and click **Configure**.

To configure your Bunnings Marketplace settings, follow the steps in [Cresco Help Centre](https://crescodata.com/help-center-faq/integrations/bunnings).

## Approve Products to list on Bunnings Marketplace

To list and sync products between Neto and Bunnings Marketplace you need to mark them as 'approved' in your Neto control panel. This will allow Neto to update the price and stock levels on Bunnings Marketplace, keeping them in sync with your other marketplaces.

Products in Neto can be approved in three ways:

- [Individually Approve Products](https://galaxy.maropost.com/kb/articles/1005-bunnings-marketplace#individually-approve-products)
- [Approve Products in Bulk](https://galaxy.maropost.com/kb/articles/1005-bunnings-marketplace#approve-products-in-bulk)
- [Approve Products via Import](https://galaxy.maropost.com/kb/articles/1005-bunnings-marketplace#approve-products-via-import)

### []()Individually Approve Products

1. In your Neto control panel, navigate to the **Products** > **Active** page.
2. Click on the SKU you want to list and update on Bunnings Marketplace.
3. Select the **Approved for Bunnings Marketplace** checkbox.
4. Click the **Save** button.

Repeat the process for each product to approve. The products will now be sent to the list on Bunnings.

### []()Approve Products in Bulk

1. In your Neto control panel, navigate to **Products** > **Active**.
2. Select the products to approve within Bunnings by selecting the checkboxes next to each product you want to approve.
3. Click the **With x Selected **drop-down list (below the product list) and select **Approve for Bunnings Marketplace**.
4. In the confirmation popup, click the **OK** button.
5. Repeat the process for each group of products to approve.

### []()Approve Products via Import

> **Note:** [Export a list of products](https://galaxy.maropost.com/kb/articles/501-product-export-wizard) that you want to approve for Kogan first using the export wizard.

1. In your Neto control panel, navigate to **Settings & tools** > **Import data**.
2. Click the **Perform complex import** button and select **Start Data Import Wizard** from the menu.
3. On the **Upload File** page, click the **Browse** button and locate the file to upload.
4. Click the **Continue to Next Step button**.
5. Select 'SKU*' in the **Database Field Name** field.

> **Note:** Remove any other fields to ensure other data isn't overwritten, and to speed up the import process.

6. Click the **Add Extra Field** button.
7. Select 'Approved For Bunnings Marketplace' from the **Database Field Name**.
8. Change the **Column name** dropdown to 'Static Value'. A blank field will be displayed beneath.
9. Enter Y in the blank field.
10. Click the **Continue to Next Step** button.
11. Select **Update Existing Products Only** from the **How Do You Want To update Your Database** drop-down box.
12. Click the **Continue to Next Step** button.
13. Click the **Process File Now** button.

Neto will start updating all the product SKUs imported as **Approved For Bunnings Marketplace**. Allow up to 10 minutes to complete the import process depending on the number of products you've imported.

You have successfully approved products to list and update on Bunnings Marketplace. Neto will now be able to update the prices and stock levels of your products on Bunnings. This process occurs approximately every 15 minutes.

## Process Bunnings Marketplace Sales Orders

Bunnings Marketplace sales orders downloaded to Neto are processed the same as other sales orders. You can find more info on how to pick, pack, and dispatch sales orders here.

## End a Bunnings Marketplace Listing

Products listed on Bunnings Marketplace can be removed by unapproving them in Neto. Similar to product approval, the product listing can be ended in the same three ways. Depending on your chosen method, perform either of the following:

- For ending an individual product listing, navigate to **Products** > **Active**. Click the product SKU to go to the product page and then deselect the **Approved for Bunnings Marketplace** checkbox. ([see individual product approval](https://galaxy.maropost.com/kb/articles/1005-bunnings-marketplace#individually-approve-products))
- For ending product listing in bulk, navigate to **Products** > **Active**. Select the products and then from the **With x Selected **drop-down list (at the bottom of the product list), select **Unapprove for Bunnings Marketplace**. ([see bulk product approval steps](https://galaxy.maropost.com/kb/articles/1005-bunnings-marketplace#approve-products-in-bulk))
- For ending product listing via import, perform the import with the **Approved For Bunnings Marketplace** column set to N. ([see import steps](https://galaxy.maropost.com/kb/articles/1005-bunnings-marketplace#approve-products-via-import))

## Resync Products in Cresco

Not all setting changes will force the resync of your data from Cresco to Bunnings Marketplace. To manually resync your products, follow the steps CrescoData provides in the [Publishing Products](https://crescodata.com/help-center-faq/integrations/kogan/) section of their documentation.

## Uninstall the Bunnings Marketplace Integration

To remove the Bunnings Marketplace integration:

1. In your Neto control panel navigate to the **Addons** menu.
2. In the Sales Channels section, find the Bunnings Marketplace add-on and click the **Uninstall** button.
3. Confirm that you want to uninstall the integration.

Bunnings Marketplace is now uninstalled from your Neto control panel.