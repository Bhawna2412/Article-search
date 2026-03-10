---
title: "Gift Vouchers"
articleID: 1435
category: "Use Neto > Products > Add Products products"
knowledgeBase: "Neto By Maropost"
---

# Gift Vouchers

### This add-on was built by Maropost

Add-ons and Integrations built in-house by Maropost are documented and supported by our customer service team. If you're having issues with this integration, [let us know](https://www.netohq.com/support/s/ask-us)!

## Overview

You can sell electronic gift vouchers through your website and Neto Point of Sale. When a customer purchases a gift voucher they will be asked:

- **Who** the voucher is from (the senders details).
- The recipients **email address**.
- The recipients **name**.
- A **message** for the recipient.
- The **date and time** the voucher must be delivered.

The gift voucher will be sent automatically to the recipient at the date and time specified, with instructions on how to redeem it.

Only orders for vouchers that are fully paid and approved will be sent to recipients. An automated process checks every 30 mins for vouchers that need to be sent.

You do not have to manually print or send the gift voucher, as Neto manages this process for you. Recipients can redeem gift vouchers at checkout on your web shop or in store with Neto POS. Any credit not used in a shopping session will remain as credit on their account.

You can view all gift voucher credit outstanding in your control panel by navigating to **Sales Orders** > **Voucher/Reward Program**.

## Install the Add-on

To set up gift vouchers the add-on needs to be installed:

1. In your Neto control panel, select the **Addons** menu.
2. In the marketing category, find the Gift Vouchers add-on and click the **Install** button.
3. A pop-up window appears. Confirm installation by clicking the **Install** button in this window.
4. Once installed, click the **Close** button.

Gift vouchers can now be created. Follow the rest of the steps in this guide to create your voucher programs, and voucher products.

## Turn on Voucher Payment Method

Your webstore checkout may not accept gift vouchers by default. To turn on the voucher payment method:

1. In your Neto control panel navigate to **Webstore** > **Checkout Settings**.
2. In the Order Rules section, toggle the **Enable coupon/promo codes** setting so that it is on.
3. Click the **Save** button.

## Add or Edit a Voucher Program

To edit an existing voucher program:

1. In your Neto control panel navigate to **Marketing** > **Vouchers/Reward Program**.
2. Select the **Program ID** to edit an existing program, or select **Add New**.
3. You can now edit the program details as desired.

> **Note:** Leave the **End Date** blank for gift vouchers. After the end date vouchers can no longer be redeemed.
> 	If you sell gift vouchers in Australia, set the expiry to 1096 days, to comply with [consumer laws](https://www.accc.gov.au/consumers/misleading-claims-advertising/gift-cards-discount-vouchers).

If necessary you can create multiple voucher program and assign different program to different products.

> **Note:** To create PDF vouchers set the program type to **3rd Party Gift Voucher Program**. Select a PDF template in the design section, and then change the program type back to Gift Voucher and save. The PDF setting will be retained.

For example, if you only wanted a specific voucher to be valid for 6 months, you could setup a new voucher program with this rule. You would then add a new product and assign this program to it.

> **Important:** Once a voucher expires it is gone forever and cannot be recovered.

## Create a Gift Voucher

To create a gift voucher:

1. In your Neto control panel navigate to **Products** > **Add Product**.
2. When asked the type of product you wish to create, select **Electronic Gift Voucher**.
  **Please Note**: Vouchers cannot be parent products, they can only be stand alone products.
3. Enter a **SKU**, **Name** and **Price** for the gift voucher. Be sure to set the tax settings as **Tax Free (clear the ****Includes Tax checkbox)**. You must also select a **Voucher/Reward Program** that has been created. By default, you will have a **Gift Voucher** option which will work fine.
4. Change the **Shipping** to **This Product Is Not Shipped** and then **Continue**. This will only appear when creating the voucher, afterwards the field is called **Service Item**.
5. In the side menu select **Voucher/Reward Programs** and confirm the voucher details have been added with the **Voucher/Reward Program Title**.

> **Note:** Click the **Customise Layout** button to enable the Voucher/Reward Programs section if you don't see it.

  If they haven't, below the **Add Voucher** dropdown menu select **Gift Voucher** and click the green **+** button. Add the **Value**, as well as any **Images** or **Description** to the product and **Save**.
6. Confirm the Inventory Policy is set to **Do Not Track Inventory for this SKU**.

By applying the product to a voucher program in step 5 above, you are defining that the product is a voucher and as such it will be treated differently in the system. Vouchers are virtual service products. They do not hold stock and they do not attract shipping fees.

The voucher program determines the expiry date of the voucher and other redemption rules. By default your gift vouchers will be valid for 12 months from date of purchase. This should be edited to comply with any legislation where you operate (e.g. Gift vouchers must be valid for 3 years in Australia).

## Add an Electronic Delivery Method

So that customers can complete checkout you will need to create an electronic delivery method. To do this:

1. In your Neto control panel navigate to **Shipping** > **Shipping Options**.
2. Click **Add New Shipping Option**.
3. Click **Set My Own Pricing**.
4. Select **Flat-rate**.
5. Choose **Select Countries** and **Select All** to allow anyone world wide to purchase gift vouchers.
6. Enter **0** as the price, and click **Next Step**.
7. Toggle the PO Box setting and enter the name **Electronic Delivery**. Click **Next Step**, then **Complete**.
8. Once you're back on the **Shipping Options** page, click on **Electronic Delivery** to edit the shipping option.
9. Change the **Product Type** drop down box to **Electronic Delivery**, and **Save**.

## Check a Gift Voucher Balance

1. In your Neto control panel, navigate to **Sales Orders** > **Vouchers & Rewards**.
2. Here, you will be able to view the balance of all active vouchers as well as the expiry date and it's usage.
3.   - **Not yet redeemed**: The voucher recipient hasn't yet claimed or used the voucher.
  - **Assigned to customer**: The voucher has been used partially, or the recipient has claimed it and the voucher has been allocated to them.

  Status of the voucher is one two values:

## Resend a Gift Voucher

1. In your Neto control panel, navigate to **Sales Orders** > **Vouchers & Rewards**.
2. Click on the voucher you want to resend.
3. Select the **Send voucher message on save** checkbox.
4. Click the **Save** button.

The gift voucher details will be resent to the customer.

## Find a Voucher Using the Payment Details

You can search for a voucher in the **Sales Orders** > **Vouchers & Rewards** page by using a number of different filters. One of the available fields is the voucher code. You can find the voucher code if it's been used to pay for an order, and then use it as one of the search filters. To find the voucher code:

1. Open the order and (ensure you're in the **Sales View** and at the bottom bottom of the page click the **Payment & Refund History** tab to view the payment.
2. Click the Ref# to view the payment details.
3. On the payment details page you'll see the Authorisation Message, which corresponds with the Voucher Code for the voucher that was used as payment.

## Edit the Gift Voucher Templates

Gift vouchers have 2 templates that can be customised, the email alert, and the PDF voucher that is attached to the email. You can find these templates in your control panel in the **Settings & tools** > **All settings & tools** page, in the **Email Templates** section. The templates are:

- voucher
- voucher_pdf

For more information on system email templates see [this article](https://galaxy.maropost.com/kb/articles/1041-edit-system-email-templates).