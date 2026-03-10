---
title: "Maropost Commerce Cloud POS Payment Method Setup"
articleID: 758
knowledgeBase: "Help Articles"
lastUpdated: 2025-12-01
---

# Maropost Commerce Cloud POS Payment Method Setup

**Please Note**: Maropost Commerce Cloud POS is not available outside of Australia and New Zealand.

### In this Article

- [Supported Payment Types in POS](#1)
- [Set up Credit Card Payments](#2)
- [Gift Vouchers](#3)
- [Custom Payment Methods](#5)
- [AfterPay Workflow](#4)

### Supported Payment Types in POS

Maropost POS supports payment by:

- Cash
- Eftpos / Credit card
- Alipay (supported Tyro terminals only)
- Account credit
- Gift vouchers
- Custom payment methods
- [Split payments](https://galaxy.maropost.com/s/article/apply-payments-to-pos-sales#how-to-split-a-payment)
- [Refunds](https://galaxy.maropost.com/s/article/process-a-return-in-maropost-commerce-cloud-pos)

Cash and credit card payments methods are created automatically in your Maropost Commerce control panel as POS Cash and POS Card respectively. These payment methods need to be active, but do not need to appear on your webstore (if you have the webstore add-on installed).

**Important Note:** Do not remove or rename these payment methods whilst you are using Maropost POS, as this can cause issues preventing registers from synchronising transactions.

Custom payment methods are not integrated with Maropost, but allow you to track how customers paid for orders and reconcile in your accounting system (e.g. payment by cheque or Afterpay).

### Set up Credit Card Payments

The POS Card payment method will be automatically created when you add the Maropost POS add-on to your account. To complete set up you should configure the settings:

1. 
  In your point of sale dashboard, select the menu and choose **Settings**.
2. 
  in the payment methods section, select **Card Payments**.
3. 
  Tap or click on **Select Payment Processor**.
4.   - 
    **Manual (external payment terminal):** Maropost POS can be used in conjunction with any standalone payment terminal. In this mode there is no direct communication between POS and the terminal. Instead you need to manually capture the payment through the terminal and afterwards click on the "Card" button to record the payment.

> **Important:** Because there is no communication with the terminal, the responsibility is on the user to ensure payment is correctly received when using this mode.

  - 
    **Tyro:** In this mode Maropost POS integrates with a Tyro payment terminal to guide you through the payment workflow. POS will verify that payment was correctly captured before recording it against the sale/refund. To get started, see our [guide on configuring Tyro with Maropost POS](https://galaxy.maropost.com/s/article/tyro-eftpos-terminal-pos-setup).

  Maropost POS allows you to receive payments via credit card in 2 different ways. This can be set from the Settings page in POS. The options available are:

  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/MaropostCommerceCloudPOS1.05T5g00000szFpXEAU.png)

  Choose between **Manual** or **Tyro**.
5. 
  Tap or click **Save** to confirm your settings.

### Gift Vouchers

Maropost POS can use a customer's gift voucher as full or partial payment. To set up gift vouchers in Maropost POS:

1. 
  Install the [Gift Vouchers](https://galaxy.maropost.com/s/article/gift-vouchers) add-on in your control panel.
2. 
  [Create your gift voucher products](https://galaxy.maropost.com/s/article/gift-vouchers#edit-a-voucher-program) so that they can be sold in your webstore or in store.

You can now [take payments in store](https://galaxy.maropost.com/s/article/apply-payments-to-pos-sales#3) for customers using gift cards.

### Custom Payment Methods

Custom payment methods allow you to take payments with non-integrated systems, such as Afterpay or cheque. The payment method is recorded on the sales order for easy reconciliation. To create a custom payment method for Maropost POS:

1. 
  In your Maropost Commerce control panel navigate to **Settings & tools** > **Payment methods**.
2. 
  Click the **Add New Method** button at the bottom of the page.
3. 
  Click the **POS Custom** button.

  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/MaropostCommerceCloudPOS2.05T5g00000szP9kEAE.png)
4. 
  Enter the **Display name** of your custom POS payment method.
5. 
  Toggle the **Active/Enabled** and **Show on POS** settings.
6. 
  You can also toggle the POS configuration settings to determine how your register behaves when this payment method is used.

  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/MaropostCommerceCloudPOS3.05T5g00000szPBqEAM.png)
7. 
  Click the **Complete** button.
8. 
  To make the method appear in your register you need to [synchronise data between POS and your control panel](https://galaxy.maropost.com/s/article/sync-data-from-pos-to-your-control-panel).

Your custom payment method will now appear in your POS register. If you have an integrated accounting program, be sure to map the custom payment method to the appropriate accounts.

### Afterpay Workflow

Custom POS payment methods can be used to offer Afterpay in store if you have an Afterpay merchant account.

> **Note:** Afterpay merchant accounts need to be enabled for in store purchases. Contact Afterpay here to get it enabled on your account.

Although the payment method won't have any direct functionality in your POS register, the same result can be achieved with the following workflow:

1. 
  Create an Afterpay custom POS payment method using the instructions above as a guide.
2. 
  In your POS register, scan or enter the products the customer wishes to purchase, and select AfterPay as the payment method.
3. 
  When you get to the screen that lets you print the receipt, take note of the order number, but DO NOT complete the sale yet.
4. 
  Have the customer open their Afterpay app and open their in-store barcode.
5. 
  Log into the Afterpay merchant portal on your tablet or PC.
6. 
  Select the **In Store** tab.
7. 
  Scan the customer barcode (or manually enter thr barcode number). Enter the amount of the sale, and the order number (from your POS register).
8. 
  Tap or click the **Create Order** button. The customer's Afterpay app will confirm the payment has been processed, and your merchant Afterpay account will display the order.
9. 
  In your POS register, print or email the receipt and tap or click the **Complete Sale** button.

Funds will be transferred to you via the normal Afterpay process, and the sales order will display Afterpay as the payment method for your reconciliation.

### Related Articles

- [Sell a Gift Voucher using Maropost POS](https://galaxy.maropost.com/s/article/maropost-commerce-cloud-pos-sales-process#3)
- [Set up Maropost POS (Point of Sale)](https://galaxy.maropost.com/s/article/set-up-maropost-commerce-cloud-pos-point-of-sale)
- [Tyro Eftpos Terminal POS Setup](https://galaxy.maropost.com/s/article/tyro-eftpos-terminal-pos-setup)