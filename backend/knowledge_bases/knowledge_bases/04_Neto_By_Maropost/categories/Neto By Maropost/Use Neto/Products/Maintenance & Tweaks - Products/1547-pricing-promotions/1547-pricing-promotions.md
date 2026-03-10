---
title: "Pricing Promotions"
articleID: 1547
category: "Use Neto > Products > Maintenance & Tweaks - Products"
knowledgeBase: "Neto By Maropost"
---

# Pricing Promotions

### This add-on was built by Maropost

Add-ons and Integrations built in-house by Maropost are documented and supported by our customer service team. If you're having issues with this integration, [let us know](https://www.netohq.com/support/s/ask-us)!

## Overview

Applying sale pricing to products can be completed within the product level as a fixed amount or can be completed in bulk as a fixed price/percentage discount in the pricing promotions section under **Marketing** section.

> **Note:** To put variation or kit products on sale, you will need to add the **Promo Price** to each child/component product, not the parent.

## Install the Add-on

To install the Pricing Promotions add-on:

1. In your Neto control panel, navigate to the **Addons** menu.
2. In the marketing section, find the **Pricing Promotions** add-on and click the **Install** button.
3. Confirm by clicking the **Install** button in the pop-up that appears.

The promo price fields will now show on all products in your control panel.

## Add Promotions to Products

**Please Note**: Each product can have only one promotion at a time. To end the promotion you can set the **Promo End Date** to a day in the past and save.

To add price promotions to individual products:

1. In your Neto control panel navigate to **Products** > **View Products**.
2. Select the **SKU** of the product you wish to add the promotion to.
3. Click on the **Pricing & Tax** tab.
4. Apply the sale price in the **Promo Price** field.
5. Scroll down and enter a **Promo Start Date** and **Promo End Date** and a **Promotion Tag** to activate the promotion.

> **Note:** The promotion tag is used as a search filter in your control panel, on the product list page.

6. Repeat these steps for all customer groups and price bands. Promo prices are not inherited from the default group, and groups without a promo price will not be on promotion if the group price is left blank.

While the promotion is active, your product prices will show the promotion price as a sale price on your webstore.

## Add Promotions In Bulk

You can create bulk discount promotions by fixed price or by percentage in this section. You can set filters to discount by individual products, entire categories and different user groups. This is also an easier way to add promotions to kit and variation products.

**Please Note**: Each product can have only one promotion at a time. If you add a new promotion it will overwrite any existing promotion.

1. In your Neto control panel navigate to **Marketing** > **Pricing Promotions**.
2. Click the **Add New** button on the top right hand side.
3. Fill in the **Promotion Code** (unique identifier), **Promotion Name** and **Start/End Date**.
4. In **Discount Bands** you can set the user group this affects and set the **%** or **$** discount type and value.
5. **Add Product to Promotion** by either looking up individual products or adding entire categories.
6. Click **Save & Close**.

## Delete a Promotion

Promotions that are applied in bulk can only be deleted if they are not currently running. If you need to delete a promotion that is running:

> **Note:** Promotions that have been added to productions individually are deleted by clearing the promotion price fields.

1. In your Neto control panel navigate to **Marketing** > **Pricing Promotions**.
2. Click on the promotion that you want to delete.
3. Set the end date to a day in the past.
4. Click the **Save & Close** button.
5. Select the checkbox next to the promotion you want to delete and click the **With 1 Selected** box, then click **Delete**.

Your promotion is now deleted.

## Import Promotion Prices

Before you begin, download the [sample pricing promotions template](https://neto.com.au/assets/images/docs/5285/promo-pricing-example.csv) and populate your promotion information for each product. In this sample, we've added pricing promotion for price group A, B, C, added a promotion tag for tracking purposes and a promotion start and finish date.

**Please Note**: Each product can have only one promotion at a time. If you import a new promotion it will overwrite any existing promotion.
Parent products can't have promotion prices added to them. Add the promotion prices to the child products, and the parent will update when promotion date starts.

1. In your Neto control panel navigate to **Settings & Tools** > **Import Data**.
2. Click **Products** as the import type and select **Perform complex import** > **Start Data Import Wizard**.
3. Upload the file and continue to the **Next Step**.
4. Map the fields in Neto with the fields in the CSV template like the example below. Click **Next Step.**
5. Set your update options. It's recommended selecting **Update Existing Products Only**. Click **Next Step.**
6. In the process file section, click **Process File Now** and press **Ok**. This will create a batch process for the information to update. Once this has been completed, go into one of the products and click on the **Pricing & Tax** section to ensure the data was loaded.

> **Note:** If you add a promotion price to a group that does not have a regular price, the data will not load. eg. setting a Promo Price D but there is no value in Price D.