---
title: "TouchCart Mobile Application"
articleID: 2353
category: "Ways to Sell on Neto > TouchCart"
knowledgeBase: "Neto By Maropost"
---

# TouchCart Mobile Application

Use the “**TouchCart**” add-on to transform your store into a native mobile application available on both the Apple App Store and Google Play. Deliver an enhanced shopping experience to your customers through faster performance, seamless navigation, push notifications, exclusive in-app offers, and streamlined one-tap checkout.

**Add-on built by:**
TouchCart

**Add-on website:**
[**Visit the add-on website!**](https://touchcart.com/)

**Add-on support link:**
For support with this add-on, [**contact TouchCart**](https://touchcart.com/contact-us).

## Install the TouchCart Add-on

Follow the steps below to set up the TouchCart add-on:

1. Log in to your Neto Control panel and visit the **Addons** section via Navigation.
  ![touchcart0.png](https://us.v-cdn.net/6038474/uploads/SM4ABO03U3T5/touchcart0.png)
2. Navigate to the Sales Channel section, locate the TouchCart add-on, and select **Install**.
  ![touchcart1.png](https://us.v-cdn.net/6038474/uploads/UTE1BUXPPLPD/touchcart1.png)
3. When the pop-up window opens, click **Install**. Please note that TouchCart billing is handled separately from Neto and won't be counted against your sales channel limit.
  ![touchcart2.png](https://us.v-cdn.net/6038474/uploads/PF198CRRCRWT/touchcart2.png)
4. Select **Configure TouchCart** to proceed.
  ![touchcart3.png](https://us.v-cdn.net/6038474/uploads/50Q41DX52XZB/touchcart3.png)

## Set up the TouchCart Add-on

After installation, you can access TouchCart through your Neto control panel. 

1. To get there, go to the Sales Channel section from the Navigational sidebar menu and select **Other** >> **TouchCart**.  Alternatively, find the TouchCart add-on on the **Addons** page and click **Configure**.
  ![touchcart4.png](https://us.v-cdn.net/6038474/uploads/BD8YYCOSEF3B/touchcart4.png)
2. For first-time users, the TouchCart team will contact you to assist with the onboarding process or help you schedule a demo with them. Additional details are available on the [**TouchCart**](https://touchcart.com/platforms/maropost)** **website.
  ![touchcart5.png](https://us.v-cdn.net/6038474/uploads/XYBQPYM1W7SW/touchcart5.png)

## Approve Products to List on TouchCart

To display and synchronize products on TouchCart, you must designate them as “**Approved to show on TouchCart**” within your Neto control panel. There are three methods for approving products in Neto:

- Individually Approve Products
- Approve Products in Bulk
- Approve Products via Import

### Individually Approve Products

1. From your Neto control panel, go to **Products** >> **Active**.
  ![touchcart6.png](https://us.v-cdn.net/6038474/uploads/KC37LNUI0W9M/touchcart6.png)
2. Open the product by clicking on its SKU that you wish to list and sync with TouchCart.
  ![touchcart7.png](https://us.v-cdn.net/6038474/uploads/J2X26HWUIS8R/touchcart7.png)
3. Select the "**Approved to show on TouchCart**" checkbox.
  ![touchcart8.png](https://us.v-cdn.net/6038474/uploads/CMVJKMF039J7/touchcart8.png)
4. Save your changes by clicking the **Save** button.

Follow these steps for every product you want to approve. Once completed, the products will automatically sync with TouchCart and become available on your mobile app.

### Approve Products in Bulk

1. Access **Products** >> **Active** from your Neto control panel.
  ![touchcart6.png](https://us.v-cdn.net/6038474/uploads/BQXO433KC2DD/touchcart6.png)
2. Mark the target products for TouchCart approval by selecting their respective checkboxes.
  ![touchcart9.png](https://us.v-cdn.net/6038474/uploads/ROZXE2FL877F/touchcart9.png)
3. Access the "**With x Selected**" dropdown menu (located below the product listing) and choose "**Approve for TouchCart**".
  ![touchcart10.png](https://us.v-cdn.net/6038474/uploads/LNP1TI8X9L60/touchcart10.png)
4. Repeat this workflow for additional product batches as needed.
  ![touchcart11.png](https://us.v-cdn.net/6038474/uploads/HAZ43LDYUMQ8/touchcart11.png)

### Approve Products via Import

First, export the products you want to approve for TouchCart using the [**export wizard**](https://galaxy.maropost.com/kb/articles/501).

1. Navigate to **Settings & Tools** >> **Import data** from your Neto control panel.
  ![touchcart12.png](https://us.v-cdn.net/6038474/uploads/YD3GYT5OQAH5/touchcart12.png)
2. Click "**Perform complex import**" and select "**Start Data Import Wizard**" from the dropdown menu.
  ![touchcart13.png](https://us.v-cdn.net/6038474/uploads/7V3SL6WFBM6E/touchcart13.png)
3. On the Upload File page, click **Browse** to locate and select your import file. Proceed by clicking "**Continue to Next Step**".
  ![touchcart14.png](https://us.v-cdn.net/6038474/uploads/NIEQ2QZL6DJB/touchcart14.png)
4. Map the "**SKU***" field in the **Database Field Name** parameter.*
*`Tip:``Remove extraneous field mappings to prevent unintended data overwrites and optimize import processing time.`
5. Click "**Add Extra Field**" to append an additional mapping.
6. Select “**Approved For TouchCart**” from the Database Field Name selector.
7. Configure the Column Name dropdown to “**Static Value**”. An input field will appear below.
8. Enter "**Y**" in the static value field.
9. Click "**Continue to Next Step**" to proceed.
  ![touchcart15.png](https://us.v-cdn.net/6038474/uploads/M40SVJQLGMX5/touchcart15.png)
10. Select "**Update Existing Products Only**" from the database update mode dropdown.  Advance by clicking "**Continue to Next Step**".
  ![touchcart16.png](https://us.v-cdn.net/6038474/uploads/TSEHLYBQ0MT7/touchcart16.png)
11. The Neto system will begin processing the import and updating all specified product SKUs with TouchCart approval status. Allow approximately 10 minutes for completion, depending on the volume of products in your import batch.

Products have been successfully configured for TouchCart listing and synchronization.
  ![touchcart17.png](https://us.v-cdn.net/6038474/uploads/05N5UDGXBDT6/touchcart17.png)

## Create Product Export Templates

In addition to product data synchronization through the Neto API, TouchCart implements auxiliary export templates to execute incremental synchronization operations, ensuring real-time data consistency between the Neto platform and the TouchCart mobile application.

These export templates contain account-specific configuration parameters unique to your TouchCart account. Export template operations must be performed post-onboarding. Contact [**TouchCart**](https://touchcart.com/contact-us) technical support for implementation assistance or configuration inquiries.

## Process TouchCart Sales Orders

Sales orders transmitted from TouchCart to the Neto platform follow standard order processing workflows identical to those of other sales channels. Refer to the [**order fulfillment documentation**](https://galaxy.maropost.com/kb/articles/1406) for detailed procedures on order picking, packing, and dispatch operations.

## End a TouchCart Product Sync

To remove products from TouchCart synchronization, revoke product approval status within Neto. Product synchronization can be terminated using three distinct methods:

- **Individual Product Termination**: Navigate to **Products** >> **Active**. Access the product detail page by selecting the relevant SKU, then deselect the "**Approved to show on TouchCart**" attribute.
- **Bulk Product Termination**: Navigate to **Products** >> **Active**. Select target products using the corresponding checkboxes, then execute the "**Unapprove for TouchCart**" action from the "**With x Selected**" dropdown menu located at the base of the product list.
- **Import-Based Termination**: Execute a product import operation with the "**Approved For TouchCart**" column value set to "**N**".

## Uninstall the TouchCart Add-on

> **Important:** **Important:** Account closure must be completed with TouchCart before initiating the uninstallation sequence. Contact [**TouchCart**](https://touchcart.com/contact-us) support for account termination procedures.

To uninstall the TouchCart add-on:

1. Access the **Addons** page within your Neto control panel. Locate the TouchCart add-on within the Sales Channels section and select the **Uninstall** option.
  ![touchcart18.png](https://us.v-cdn.net/6038474/uploads/CHSXTOTBCYVU/touchcart18.png)
2. The TouchCart add-on has been successfully removed from your Neto control panel upon completion of these steps.
  ![touchcart19.png](https://us.v-cdn.net/6038474/uploads/605VL8YSRHPS/touchcart19.png)