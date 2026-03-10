---
title: "PayPal Payment Method"
articleID: 811
category: "Set up Neto > Launch your Store > Launch Webstore > Set up Payments"
knowledgeBase: "Neto By Maropost"
---

# PayPal Payment Method

[https://www.youtube.com/embed/e1YzGF9GPHM](https://www.youtube.com/embed/e1YzGF9GPHM)

## Overview

PayPal is a payment processor for online vendors, auction sites, and other commercial users, for which it charges a small fee in exchange for benefits such as one-click transactions and password memory. There are no setup fees, and once configured, PayPal can be offered to customers immediately.

Once set up, a Checkout with PayPal button will appear on your web store checkout page. This allows your customers to check they will be able to use PayPal (i.e. pay for their order) and pre-fill the checkout page with their details stored in PayPal. Customers will still need to complete any other required fields and choose PayPal in the payment method section to complete checkout.

> **Important:** Only one PayPal account can be linked per Neto account.

## Set up PayPal

There are two PayPal payment method options available within Maropost: **PayPal Checkout** and **PayPal Advanced Credit & Debit Cards**. Both can be active though will need to be set up separately.

> **Note:** We also support [PayPal Pay in 4](https://www.paypal.com/us/digital-wallet/ways-to-pay/buy-now-pay-later) through an addon widget built by Maropost. For more information, including the setup instructions, see [Set up PayPal Pay in 4](https://galaxy.maropost.com/kb/articles/1127-add-paypal-pay-in-4-to-your-web-store).

> **Note:** While we still support the older PayPal payment method - **PayPal Express**, we recommend that you use the latest PayPal payment methods - **PayPal Checkout** and **PayPal Advanced Credit & Debit Cards**. To learn about the additional benefits offered by these latest payment methods, see our Community post on the same - [Should You be Upgrading Your PayPal Payment Method?](https://galaxy.maropost.com/s/question/0D55g00002qoV6dCAE/should-you-be-upgrading-your-paypal-payment-method)

To set up your PayPal account in Neto to accept payments:

1. In your Neto control panel navigate to **Settings & Tools** > **Payment Methods**.
2. Scroll to the bottom of the page and click the **Add payment method +**.
3. In the control panel, click the tile of the PayPal payment method you are looking to set up.
4. In the **Authentication** section, click the **Connect with PayPal** button.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AddingPayPalAuthentication.05T5g00000kWcchEAC.png)
5. Enter the email address you use for your PayPal account. If you don't currently have a PayPal account, enter the email address you want to use and an account will be created for you.

> **Note:** If you are already registered, once you enter your email address and click next you will be able to complete the setup.

6. Select your **Country** and click the **Next** button.

> **Important:** [Customer groups](https://galaxy.maropost.com/kb/articles/693-customer-groups) that use a currency different from your PayPal account will not have PayPal as a payment option.

7. Enter your PayPal **Email address**.
8. Enter (and re-enter) your PayPal **Password**.
9. Complete the fields in the **Basic Business Information **section.
10. Click the **Create Application** button.

You will be redirected back to Neto and can start accepting web store payments immediately.

## Configure 3DS2 for PayPal Cards

We support 3D Secure 2 authentication (3DS2) for PayPal Cards. 3D-Secure is a protocol designed to ensure enhanced security and strong authentication for online credit and debit card transactions. To learn more about 3D Secure, see

PayPal's 3D-Secure FAQs

.

Follow the steps below to configure 3DS2 for your PayPal Cards:

1. In your Neto control panel navigate to **Settings & Tools** > **Payment Methods**.
2. On the Payment Methods page, find **PayPal Advanced Credit & Debit Card Payments** and then select **Configure**. Select the payment method to edit.

> **Note:** You can also configure 3DS2 for a PayPal Card at the time of adding the payment method.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/PayPalCardsConfigure.05T5g00000rMyjgEAC.png)
3. On the **Edit Payment Method** page, scroll down to the **Configuration** section, and then from the **PayPal 3DS2 Selection** drop-down list, select **SCA Always (Strong Customer Authentication)**.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/PayPal3DS2.05T5g00000rMyjlEAC.png)
4. Click **Save**.

## Test PayPal

To test the setup, create a test order on the front end of your website and checkout using PayPal. Authenticate your PayPal account and you will redirect back to the Neto checkout. This will confirm your PayPal setup is working. There is no need to complete the transaction.

![Image](https://neto.com.au/assets/images/docs/7353/paypal-final.gif)