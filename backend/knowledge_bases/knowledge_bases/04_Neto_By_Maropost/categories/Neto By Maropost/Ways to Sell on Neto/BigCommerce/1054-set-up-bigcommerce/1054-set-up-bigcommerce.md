---
title: "Set up BigCommerce"
articleID: 1054
category: "Ways to Sell on Neto > BigCommerce"
knowledgeBase: "Neto By Maropost"
---

# Set up BigCommerce

**Please Note**: The BigCommerce integration is available upon application. Please [contact us](https://www.netohq.com/support/s/ask-us) if you would like to have this enabled on your account.

## Before you Begin

Before you connect your Neto control panel to BigCommerce, you will need to prepare the API key, shipping, and payment methods:

1. Create a BigCommerce API account by following these steps in the BigCommerce help centre. Set the OAuth scopes as per the table below:
  **Please Note**: Only store owners can create API keys in BigCommerce.

  Record the **API Path** (the part between store/ and /v3), **Client ID**, **Client Secret** and **Access Token**.
2. Make a note of the exact names of your payment methods in BigCommerce. These will be mapped to Neto equivalents during setup, so if need be, add any as [offline payment methods](https://galaxy.maropost.com/kb/articles/810-offline-payment-methods) in Neto so payments can be reconciled.
3. Make a note of the exact names of your shipping options in BigCommerce. These will be mapped to Neto equivalents during setup, and will appear on orders automatically to make dispatching orders a smooth process.

## Set up the BigCommerce Integration

To connect your Neto control panel to BigCommerce and set up the integration:

1. In your Neto control panel click the **BigCommerce** menu.
2. Click the **Set up BigCommerce** button.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupBigCommerce1.05T5g00000xHt1sEAC.png)
3.   - Store Hash
  - Access Token
  - Client ID
  - Client Secret

  Enter your **BigCommerce** seller account details to link it to Neto:

  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupBigCommerce2.05T5g00000xHt2WEAS.png)

  Click the **Next step** button.
4. Toggle the **Enable the order sync** settings so that BigCommerce orders download to Neto. Configure the additional settings using the table below as a guide:
  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupBigCommerce3.05T5g00000xHt3AEAS.png)

  Click the **Next step** button.
5. In the pricing step, choose if you want product prices to be managed from Neto, or BigCommerce. If you select pricing from Neto, configure the additional settings using the table below as a guide:
  ![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupBigCommerce4.05T5g00000xHt4DEAS.png)

  Click the **Next step** button.
6. In the stock step, choose if you want product stock levels to be managed from Neto, or BigCommerce. If you select stock from Neto, configure the additional settings using the table below as a guide:
  ![image5](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupBigCommerce5.05T5g00000xIA6AEAW.png)

  Click the **Next step** button.
7. Enter the name of a payment method in BigCommerce, and map it to an equivalent in Neto. Click the **Save** button, then **Add New** to add additional payment methods.

> **Important:** Ensure the names match exactly so that the payment method can be applied to orders correctly.

  ![image6](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupBigCommerce6.05T5g00000xIA6yEAG.png)

  Click the **Next step** button.
8. Enter the name of a shipping method in BigCommerce, and map it to an equivalent in Neto. Click the **Save** button, then click **Add New** to add additional shipping options.

> **Important:** Ensure the names match exactly so that the shipping option can be applied to orders correctly.

  ![image7](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupBigCommerce7.05T5g00000xIA7DEAW.png)

  Click the **Next step** button.
9. Review your settings and click the **Complete BigCommerce setup** button.

Your integration to BigCommerce is complete, and products can now be marked as Approved to sync the stock level and price with your BigCommerce products.

## Approve Products for BigCommerce

To sync products between Neto and BigCommerce you need to mark them as 'approved' in Neto. This will allow Neto to update the price and stock levels on BigCommerce, keeping them in sync with your marketplace listings.

Products in Neto can be approved in three ways:

- [Individually](https://galaxy.maropost.com/kb/articles/1054-set-up-bigcommerce#individually)
- [In Bulk](https://galaxy.maropost.com/kb/articles/1054-set-up-bigcommerce#bulk)
- [Using the Import Wizard](https://galaxy.maropost.com/kb/articles/1054-set-up-bigcommerce#import)

## Individually

1. In your Neto control panel navigate to the **Products** > **Active** page.
2. Click on the product SKU you want to sync with BigCommerce.
3. Select the **Approved for BigCommerce** checkbox.
  ![image8](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupBigCommerce8.05T5g00000xIA8zEAG.png)
4. Click the **Save** button.
5. Repeat the process for each product to approve.

## In Bulk

1. In your Neto control panel navigate to **Products** > **Active**.
2. Select the checkboxes next to each product you want to approve for BigCommerce.
3. Click the **With x Selected ** button (beneath the product list) and select **Approve for BigCommerce** from the options.
  ![image9](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupBigCommerce9.05T5g00000xIABPEA4.png)
4. Click the **OK** button in the confirmation.
5. Repeat the process for each group of products to approve.

## Import Wizard

The import wizard can be used to update the **Approved for BigCommerce** field for every product at the same time. It's easiest to generate a list of product SKUs that you want approved first. You can do this one of two ways:

- Generate a list from BigCommerce
- [Generate a list from Neto](https://galaxy.maropost.com/kb/articles/501-product-export-wizard#simple-export)

The method you use depends on your own situation. If you have products in Neto that aren't in BigCommerce that you want exported, create the list from Neto. If you don't want them in BigCommerce, generate the file in BigCommerce. In both instances you only need the SKU of the products. Once you have your file:

1. In your Neto control panel navigate **Settings & Tools** > **Import Data**.
2. Click the **Perform complex import** button and select **Start Data Import Wizard** from the Pop-up menu.
3. On the **Upload File** page, click the **Browse** button and locate the file to upload.
4. Click the **Continue to Next Step button**.
  The **SKU** field in Neto must be matched with the **SKU** field in BigCommerce.
5. Select 'SKU*' from the **Database Field Name** field dropdown menu.
6. Click the **Add Extra Field** button.
7. Select 'Approved For BigCommerce' from the **Database Field Name** drop down menu.
8. Change the **Column name** dropdown to 'Static Value' and a blank field will display beneath.
9. Enter 'Y' in the blank field. This will hard code the approved field so that it's yes for all the products you import.
  ![image10](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupBigCommerce10.05T5g00000xIADuEAO.png)
10. Click the **Continue to Next Step**.
11. Select **Update Existing Products Only** from the **How Do You Want To update Your Database** drop down box.
12. Click the **Continue to Next Step** button.
13. Click the **Process File Now** button.

Neto will start updating all the product SKUs as **Approved For BigCommerce**. Allow up to 10 minutes to complete the import process depending on the number of products you've imported.

Neto will now be able to update the prices and stock levels of your products on BigCommerce.

## BigCommerce Parcel Tracking

Dispatched orders can send the consignment/tracking number back into BigCommerce, so your customers can track their order correctly. To display the correct carrier in the customer notification, you need to map the Neto shipping rates to the BigCommerce shipping method:

1. In your Neto control panel navigate to **Settings & tools** > **Shipping**.
2. Click on **Shipping Services & Rates**.
3. Click on one of the shipping rates that you use for BigCommerce orders to edit its details.
  ![image11](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupBigCommerce11.05T5g00000xIAEdEAO.png)
4. Scroll down to the Marketplace carrier mapping section. In the drop down menu, select the carrier that these rates apply to for BigCommerce.
  ![image12](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupBigCommerce12.05T5g00000xIAFvEAO.png)
5. Click the **Save & Close** button.
6. Repeat these steps for any other rates you use for BigCommerce orders.