---
title: "Kogan"
articleID: 1070
category: "Ways to Sell on Neto > Kogan"
knowledgeBase: "Neto By Maropost"
---

# Kogan

You can expand your marketplace presence through Kogan.com's online platform, enabling you to reach new customer segments while maintaining centralized control over product listings, inventory levels, and order fulfillment through your Neto control panel. This marketplace integration helps streamline multi-channel operations by synchronizing product data, pricing, and stock levels automatically, reducing manual management overhead while providing the flexibility to use custom fields for marketplace-specific product information and pricing strategies.

Setting up the Kogan sales channel enables you to leverage an established marketplace platform while maintaining operational efficiency through automated synchronization that occurs approximately every 15 minutes. The ability to approve products individually, in bulk, or via import gives you complete control over which items appear on Kogan, helping you strategically manage your marketplace presence while ensuring accurate product representation and inventory availability that supports positive customer experience and business growth.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Kogan1.05T5g00000gPiwYEAS.jpg)

### This add-on was built by CrescoData

Visit add-on website!

Kogan.com is an online marketplace for retailers to advertise and sell through the Kogan website. With the Kogan integration you can:

- Easily fulfil Kogan orders
- Create and manage Kogan listings
- Manage stock and updates in a centralised place
- Maintain pricing for your listings
- Use custom fields for the Kogan name/title and description
- Set a specific price group just for Kogan listings

## Before you Begin

1. If you don't have a Kogan account yet, sign up [here](https://www.kogan.com/au/kogan-supplier-application-form/?utm_source=neto&utm_medium=website&utm_campaign=oct).
2. Contact your Kogan account manager for your **Seller ID** and **Seller Token**. They are required to connect your Kogan account to the CrescoData application.
3. Shipping costs are set up in your Kogan account. Contact your Kogan account manager to arrange this. Alternatively, you can set a cost on your product in Neto using a [custom field](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products#add-product-categories-to-products-via-import) with a rate per product, or set a flat rate (or free shipping) in the CrescoData settings.
4. When you receive a Kogan order the payment method on it will say **Kogan Payments**. To ensure you can reconcile these payments with your accounting system, [add a new direct deposit payment method](https://galaxy.maropost.com/kb/articles/810-offline-payment-methods) called **Kogan Payments**. Set the Show on Website and Point of Sale settings off, so that it isn't accidentally used for other channels.
5.   - Map your Neto categories (or other content type) to Kogan categories.
  - Use a [custom product field](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products#add-product-categories-to-products-via-import) to directly enter the [name of the Kogan category](https://www.kogan.com/au/seller/all_categories.csv) on the product edit page in Neto.

  Prepare your product categories. There are two ways to select your product categories on Kogan:

## Install the Kogan Add-on

To start selling on Kogan through Neto you first need to install the Kogan add-on. Kogan is a sales channel which may incur additional fees on your Neto invoice. To install the Kogan add-on:

1. In your Neto control panel navigate to the **Addons** menu.
2. In the Sales Channels section, find the Kogan add-on and click the **Install** button.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Kogan2.05T5g00000w4feDEAQ.png)
3. Confirm any additional costs and click the **Install** and **Confirm** buttons.
4. The Kogan marketplace application is built and maintained by Cresco Data. You'll be redirected to the Kogan app to accept the Cresco Data terms and privacy policy.

You're now ready to set up the Kogan integration.

## Set up the Kogan Integration

The settings to list products and download sales orders are in the Kogan application. You can access the settings from your Neto control panel in the Sales Channels section, by navigating to **Other** > **Kogan**.

To configure the Kogan settings follow the steps in the [Cresco Data help centre](https://crescodata.com/help-center-faq/integrations/kogan/).

**Please Note**: For a product category to be available for mapping in the Cresco dashboard, it must be assigned to a product approved for Kogan, and have the highest priority set. For greater control over the categories in Cresco [create a custom product field](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products#add-product-categories-to-products-via-import) and enter the value from the Example column in [this spreadsheet](http://www.kogan.com/au/seller/all_categories.csv).

## Approve Products to list on Kogan

To list and sync products between Neto and Kogan you need to mark them as 'approved' in Neto. This will allow Neto to update the price and stock levels on Kogan, keeping them in sync with your other marketplaces.

Products in Neto can be approved in three ways:

- [Individually Approve Products](https://galaxy.maropost.com/kb/articles/1070-kogan#individually)
- [Approve Products in Bulk](https://galaxy.maropost.com/kb/articles/1070-kogan#in-bulk)
- [Approve products via Import](https://galaxy.maropost.com/kb/articles/1070-kogan#via-import)

### Individually Approve Products

1. In your Neto control panel navigate to the **Products** > **Active** page.
2. Click on the SKU you want to list and update on Kogan.
3. Select the **Approved for Kogan** checkbox.
  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Kogan3.05T5g00000w4ff1EAA.png)
4. Click the **Save** button.
5. Repeat the process for each product to approve.

The products will now be sent to list on Kogan.

### Approve Products in Bulk

1. In your Neto control panel navigate to **Products** > **Active**.
2. Select the products to approve within Kogan by selecting the checkboxes next to each product you want to approve.
3. Click the **With x Selected ** button (beneath the product list) and select **Approve for Kogan** from the pop up menu.
  ![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Kogan4.05T5g00000w4ffQEAQ.png)
4. In the confirmation pop-up, click the **OK** button.
5. Repeat the process for each group of products to approve.

### Approve Products via Import

> **Note:** [Export a list of products](https://galaxy.maropost.com/kb/articles/501-product-export-wizard) that you want to approve for Kogan first using the export wizard.

1. In your Neto control panel navigate to **Settings & tools** > **Import data**.
2. Click the **Perform complex import** button and select **Start Data Import Wizard** from the menu.
3. On the **Upload File** page, click the **Browse** button and locate the file to upload.
4. Click the **Continue to Next Step button**.
5. Select 'SKU*' in the **Database Field Name** field.

> **Note:** Remove any other fields to ensure other data isn't overwritten, and to speed up the import process.

6. Click the **Add Extra Field** button.
7. Select 'Approved For Kogan' from the **Database Field Name**
8. Change the **Column name** dropdown to 'Static Value'. A blank field will display beneath.
9. Enter `Y` in the blank field.
  ![image5](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Kogan5.05T5g00000w4eyEEAQ.png)
10. Click the **Continue to Next Step** button.
11. Select **Update Existing Products Only** from the **How Do You Want To update Your Database** drop down box.
12. Click the **Continue to Next Step** button.
13. Click the **Process File Now** button.
  Neto will start updating all the product SKUs imported as **Approved For Kogan**. Allow up to 10 minutes to complete the import process depending on the number of products you've imported.

You have successfully approved products to list and update on Kogan. Neto will now be able to update the prices and stock levels of your products on Kogan. This process occurs approximately every 15 minutes.

## Process Kogan Sales Orders

Kogan sales orders downloaded to Neto are processed the same as other sales orders. You can find more info on how to pick, pack, and dispatch sales orders here.

## End a Kogan Listing

> **Important:** This requires the **Status** sync to be enabled in the Cresco portal.

Products listed on Kogan can be removed by unapproving them in Neto. Follow the steps in one of the methods above, but instead of selecting Approve (or Y for the import) clear the Approved checkbox, select unapprove, or import N.

## Resync Products in Cresco

Not all setting changes will force resync of your data from Cresco to Kogan. To manually resync your products follow the steps CrescoData provide in the [Publishing Products](https://crescodata.com/help-center-faq/integrations/kogan/) section of their documentation.

## Uninstall the Kogan Integration

To remove the Kogan integration:

1. In your Neto control panel navigate to the **Addons** menu.
2. In the Sales Channels section, find the Kogan add-on and click the **Uninstall** button.
3. Confirm that you want to uninstall the integration.

Kogan is now uninstalled from your Neto control panel.