---
title: "Welcome to Fruugo"
articleID: 662
category: "Ways to Sell on Neto > Fruugo"
knowledgeBase: "Neto By Maropost"
---

# Welcome to Fruugo

![Fruugo](https://us.v-cdn.net/6038474/uploads/attachments/migrated/fruugo2.05TJ1000009KJ7qMAG.png)
In this article, we'll walk you through the steps to install the Fruugo add-on in Neto.

## [Before you Begin]()

Fruugo is a closed marketplace, meaning Fruugo must review and approve your application before you can sell on their site. If you do not already have a Fruugo Seller account contact Fruugo:[Retailer Register Form - Fruugo.com](https://sell.fruugo.com/identify-retailer/register)

> **Note:** Domestic Selling is not available for AU Sellers on Fruugo.

## [Install the Fruugo Add-on]()

To set up the Fruugo sales channel:

1. In your Neto control panel navigate to the **Addons** page
2. In the Sales Channel section, find the Fruugo add-on and click the **Install **button
3. In the popup that appears click the **Install** button. Please note, there may be additional fees associated with activating this sales channel
4. Click **Configure Fruugo**

The Fruugo application is built and maintained by CrescoData. You will be redirected to the Fruugo app to accept Cresco's terms and privacy policy and to configure your Fruugo integration.

## [Set up the Fruugo Integration]()

Once installed you can access the Fruugo application via your Neto control panel. In the Sales Channel section of the sidebar menu, navigate to **Other > Fruugo**. Or from the **Addons** page, locate the Fruugo add-on and click **Configure**.

To configure your Fruugo settings follow the steps in the [Cresco help centre](https://crescodata.com/help-center-faq/integrations/fruugo).

## [Approve Products to list on Fruugo]()

To list and sync products between Neto and Fruugo you need to mark them as 'approved' in your Neto control panel. This will allow Neto to update the price and stock levels on Fruugo, keeping them in sync with your other marketplaces.

Products in Neto can be approved in three ways:

- Individually Approve Products
- Approve Products in Bulk
- Approve Products via Import

### Individually Approve Products

1. In your Neto control panel navigate to the **Products** > **Active** page.
2. Click on the SKU you want to list and update on Fruugo.
3. Select the **Approved for Fruugo** checkbox.
4. Click the **Save** button.

Repeat the process for each product to approve. The products will now be sent to list on Fruugo.

### Approve Products in Bulk

1. In your Neto control panel navigate to **Products** > **Active**.
2. Select the products to approve within Fruugo by selecting the checkboxes next to each product you want to approve.
3. Click the **With x Selected **button (beneath the product list) and select **Approve for Fruugo** from the pop up menu.
4. In the confirmation pop-up, click the **OK** button.
5. Repeat the process for each group of products to approve.

### Approve Products via Import

> **Note:** Export a list of products that you want to approve for Fruugo first using the export wizard.

1. In your Neto control panel navigate to **Settings & tools** > **Import data**.
2. Click the **Perform complex import** button and select **Start Data Import Wizard** from the menu.
3. On the **Upload File** page, click the **Browse** button and locate the file to upload.
4. Click the **Continue to Next Step button**.
5. Select 'SKU*' in the **Database Field Name** field.
**Tip**: Remove any other fields to ensure other data isn't overwritten, and to speed up the import process.
6. Click the **Add Extra Field** button.
7. Select 'Approved For Fruugo' from the **Database Field Name**.
8. Change the **Column name** dropdown to 'Static Value'. A blank field will display beneath.
9. Enter `Y` in the blank field.
10. Click the **Continue to Next Step** button.
11. Select **Update Existing Products Only** from the **How Do You Want To update Your Database** drop down box.
12. Click the **Continue to Next Step** button.
13. Click the **Process File Now** button.

Neto will start updating all the product SKUs imported as **Approved For Fruugo**. Allow up to 10 minutes to complete the import process depending on the number of products you've imported.

You have successfully approved products to list and update on Fruugo. Neto will now be able to update the prices and stock levels of your products on Fruugo. This process occurs approximately every 15 minutes.

## [Process Fruugo Sales Orders]()

Fruugo sales orders downloaded to Neto are processed the same as other sales orders. You can find more info on how to pick, pack, and dispatch sales orders here.

## [End a Fruugo Listing]()

Products listed on Fruugo can be removed by unapproving them in Neto. Similar to product approval, the product listing can be ended in the same three ways. Depending on your chosen method, perform either of the following:

- For ending an individual product listing, navigate to **Products** > **Active**. Click the product SKU to go to the product page and then deselect the **Approved for Fruugo** checkbox. (see individual product approval)
- For ending product listing in bulk, navigate to **Products** > **Active**. Select the products and then from the **With x Selected **drop-down list (at the bottom of the product list), select **Unapprove for Fruugo**. (see bulk product approval steps)
- For ending product listing via import, perform the import with the **Approved For Fruugo** column set to N. (see import steps)

## [Resync Products in Cresco]()

Not all setting changes will force resync of your data from Cresco to Fruugo. To manually resync your products follow the steps CrescoData provide in the [Publishing Products](https://crescodata.com/help-center-faq/integrations/kogan/) section of their documentation.

## [Uninstall the Fruugo Integration]()

The remove the Fruugo integration:

1. In your Neto control panel navigate to the **Addons** menu.
2. In the Sales Channels section, find the Fruugo add-on and click the **Uninstall** button.
3. Confirm that you want to uninstall the integration.

Fruugo is now uninstalled from your Neto control panel.