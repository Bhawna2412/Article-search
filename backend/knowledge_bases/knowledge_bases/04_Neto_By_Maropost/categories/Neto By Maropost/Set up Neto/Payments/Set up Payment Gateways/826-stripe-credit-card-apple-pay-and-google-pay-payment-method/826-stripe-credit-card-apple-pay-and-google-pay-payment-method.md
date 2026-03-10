---
title: "Stripe Credit Card, Apple Pay, and Google Pay Payment Method"
articleID: 826
category: "Set up Neto > Payments > Set up Payment Gateways"
knowledgeBase: "Neto By Maropost"
---

# Stripe Credit Card, Apple Pay, and Google Pay Payment Method

Stripe provides online payment processing services for internet businesses. The Neto integration with Stripe lets you start accepting payments instantly. To learn more and view the pricing for Stripe, please visit the [Stripe website](https://stripe.com/au/pricing).

## Set up Stripe

To set up Stripe to take credit card payments on your webstore:

1. In your Neto control panel navigate to **Settings & Tools** > **Payment Methods**
2. On the payment methods page, click the **Complete Setup** button for Stripe.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/StripeCreditCardApplePayandGooglePayPaymentMethod1.05T5g00000xpuw1EAA.png)
3. If you have an existing Stripe account click the **Sign In** link in the top right corner.
  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/StripeCreditCardApplePayandGooglePayPaymentMethod2.05T5g00000xpux4EAA.png)
4. Enter your Stripe credentials and authenticate the link to Neto. You'll be taken back to your Neto control panel.
5. If you don't have a Stripe account enter your business details into the Stripe form.
6. Click the **Authorize access to this account** button. You'll be taken back to your control panel.

Your Stripe account is now set up in Neto. Your website and control panel can now accept credit card payments.

## Apple and Google Pay (Web payments)

In addition to credit cards, Stripe can also take payments through Apple and Google pay. Customers must be using a compatible browser, device, and have a card saved.

> **Important:** Without these, the web payment buttons will not appear in checkout.

The exact requirements for web payments to appear are:

### Safari (Apple Pay only)

- Safari on Mac running macOS Sierra or later.
- An iPhone (not an iPad) with a card in its Wallet paired to your Mac with Handoff, or a Mac with TouchID.

### Mobile Safari (Apple Pay only)

- Mobile Safari on iOS 10.1 or later.
- A card saved in Wallet, by going to Settings > Wallet & Apple Pay.

### Chrome (Google Pay only)

- Chrome 61 or newer.
- A saved payment card.

### Chrome Mobile for Android (Google Pay only)

- Chrome 61 or newer.
- An activated Google Pay card or a saved card (Settings > Payment methods).
- Access payment methods enabled (Settings > Privacy).

### Microsoft Edge for Windows

- Microsoft Edge 16.16299 or newer.
- A saved payment card.

To add web payments to your webstore:

1. In your control panel, navigate to **Settings & tools** > **Payment methods**.
2. In the Stripe section, click the **Configure** button.
3. In the pop-up that appears, click the **Add new** button.

> **Note:** If **Web payments** appears here you've already set up Apple and Google pay. Click on **Web Payments** to make it active or edit the settings.

  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/StripeCreditCardApplePayandGooglePayPaymentMethod3.05T5g00000xplbzEAA.png)
4. On the new payment method page, select the checkbox which corresponds with Apple and Google Pay.
  ![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/StripeCreditCardApplePayandGooglePayPaymentMethod4.05T5g00000xpuzoEAA.png)
5. Configure the settings as desired. All settings are described in a [section below](https://galaxy.maropost.com/kb/articles/826-stripe-credit-card-apple-pay-and-google-pay-payment-method#apple-and-google-pay-web-payments).
6. Click the **Complete** button.

Web payments are now set up for customers to pay for their orders.

> **Warning:** Do not change the name of the web payments method. Changing the name will remove the icons in the footer of your website.

## Web Payment Website Tweaks

You can display web payment icons in the footer of your website with a website tweak. We also recommend amending the invoice template to display which specific method (Apple Pay or Google Pay) was used. The steps to make these tweaks can be found in our[developer documentation.](https://developers.neto.com.au/documentation/neto-designer-documentation/tweak-documents/generic/update-footer-and-invoice-page-to-better-support-w/)

The tweaks require knowledge of the Neto B@SE language and HTML. If you're not confident making these changes yourself, we recommend that you engage the services of a [Neto partner](https://www.netohq.com/experts#filter=).

## Configure Settings

Once Stripe is set up you can set up the available settings in Neto. To set up your Stripe payment gateway settings:

1. In your Neto control panel navigate to **Settings & Tools** > **Payment Methods**
2. Click the **Configure** button that corresponds to the Stripe credit card gateway.
3. Select the card type you wish to edit.
4. You can now edit the settings for the card you selected:
  ![image5](https://us.v-cdn.net/6038474/uploads/attachments/migrated/StripeCreditCardApplePayandGooglePayPaymentMethod5.05T5g00000xpv5hEAA.png)
5. Click the **Save & close** button when complete.

Repeat these steps for each credit card type as required.

## Stripe 3D Secure 2 Card Authentication

Stripe uses 3D Secure as a way to safeguard against potentially fraudulent transactions. More customer information (such as shipping address) is securely transmitted to the card issuer, to determine if the customer is the card holder. If the issuer is suspicious, the customer may need to perform additional identity verification to complete their purchase. When 3D Secure is used to authenticate a payment, the customer's bank/card issuer assumes liability for the payment. Any disputes from a fraudulent transaction can be raised directly with your card issuer (other dispute reasons follow their normal process).

### Workflow

1. Customer selects a Stripe credit card method on your checkout page.
2. Request is sent to the card holder's bank/issuer for verification.
3. Bank/issuer evaluates the information and decides if the transaction is legitimate.
4. If the transaction is deemed legitimate, no further information is requested, and the transaction proceeds as normal.
5. If the bank/issuer decides it needs further proof, the transaction is challenged, and your customer will need to provide further authentication.
  This usually involves showing the customer an authentication page on their bank's website, where they are prompted to enter a password associated with the card, or a verification code sent to their phone.

  **Please Note**: Additional verification is required on all transactions made by customers in the European Union due to their [banking regulations](https://stripe.com/guides/b-customer-authentication).
6. If the additional step is authenticated, the payment is processed successfully.

### 3D Secure Settings

You can change when the additional verification is triggered in [your Stripe account](https://dashboard.stripe.com/radar/rules) based on Stripes hard coded rules.

If you have Stripe Radar for Fraud Teams, you can create custom rules with [specific criteria](https://stripe.com/docs/radar/rules/reference). For example, you can request the additional verification steps for customers in specific countries.

We recommend that you review these settings to ensure they meet your needs. For more information, please refer to [Stripe's documentation](https://stripe.com/docs/payments/3d-secure).

## Stripe Fraud Protection

Stripe incorporates a fraud protection system called Radar. Radar uses machine learning to help identify fraudulent transactions and provide alerts. Neto displays these alerts in several different ways:

### Allowed

- If risk level is Normal the sales order will be created in Neto as usual.

### Place in Review

- The sales order will be created in Neto and place on Hold with an internal note.

### Blocked

- The sales order will not be created in Neto.

Should these occur you will need to view the payment in Stripe to either [approve or refund the payment](). You can learn more about Stripe Radar in [this article](https://stripe.com/docs/radar).

Stripe Radar is included for all users. Stripe also offers more detailed information with Stripe Radar for Fraud Teams. This upgrade is available directly through Stripe. See [this article](https://stripe.com/au/radar/fraud-teams) for more information.

## Refund or Approve a Stripe Payment

When Stripe detects that a transaction has a high or elevated risk it needs to be reviewed for you to receive the funds. Direct links to the payment in Stripe are accessible from the sales order and payments pages.

> **Important:** Refunds in Stripe don't update the status of the orders in Neto. If you cancel a payment in Stripe, you must also [cancel the order in Neto](https://galaxy.maropost.com/kb/articles/1446-cancel-or-delete-a-sales-order) manually.

### Sales Orders Page

To find the payment and refund or approve it from the sales order:

1. In your Neto control panel navigate to **Sales orders** > **View orders**
2. Open the order that has the payment you want to review.

> **Note:** Ensure the order is set to "View as Sales".

3. At the bottom of the page, click the **Payment & Refund History** tab.
4. This tab displays a list of payments. On the right hand side is an edit icon. Click it, and choose **View Payment in Stripe** from the drop down menu.
  ![image6](https://us.v-cdn.net/6038474/uploads/attachments/migrated/StripeCreditCardApplePayandGooglePayPaymentMethod6.05T5g00000xpt4sEAA.png)
5. Stripe will open and display the payment for you to review.

### Payments Page

The payments page lists all the payments you have received for your sales orders. To open a Stripe payment from the payments page:

1. In your Neto control panel navigate to **Sales orders** > **View payments**.
2. Find the payment in the list by using the filters.
3. Click the edit icon and choose **View Payment in Stripe** from the drop down menu.
4. Stripe will open and display the payment for you to review.

## []()Payment Statuses

Stripe provides information regarding payment status for every transaction for the ease of both business and customer’s understanding. These statuses provide valuable insights into the journey of a transaction, from initiation to completion or potential issues. Let’s take a look at the different payment statuses provided by Stripe.

Completed Transactions-

This status indicates that the payment has been successfully processed, the funds have been transferred, and the transaction is considered finalised.

Failed Transactions-

This status indicates that there was an issue during the payment process that prevented it from being completed successfully. This could be due to reasons such as insufficient funds, expired card details, or other payment gateway-related issues.

Incomplete Payments-

These occur when a customer initiates the checkout process. Whenever such an event is encountered, Neto registers it as a

payment intent

in the system. This acts as a placeholder for the beginning of a payment transaction, which can be initiated from the user’s end. Please keep in mind that this status is not a reflection of a technical issue. Incomplete payments also don't authorise any card charges

This placeholder can have several outcomes:

- **Cancelled:** If the customer opts for a non-Stripe payment method during checkout.
- **Failed:** If the customer attempts to pay with Stripe but encounters issues like insufficient funds.
- **Complete:** If the payment is successfully processed.
- **Incomplete:** If the customer doesn't complete the checkout process, rendering the payment incomplete for an indefinite period of time.

Expired Transactions-

This status indicates that the buyer initiated the checkout process through one of the BNPL payment methods (via Stripe) but abandoned the payment without gracefully cancelling it (e.g closed the browser window rather than clicking a cancel button). After a given period of time that varies depending on the payment method, the payment session with the BNPL provider is expired, and the Stripe payment status will reflect this with the “Expired” status.

Uncaptured Transactions-

These are unexpected and require attention. This status occurs between payment authorisation and capture and typically lasts only a few seconds. Any payment left uncaptured beyond this brief period indicates an issue, as it means an authorisation is placed on the customer's card, which expires after 7 days. In such cases, please contact our support team for assistance or to report the problem.

## []()Setup Stripe BNPL configurations

Stripe's Buy Now, Pay Later (BNPL) feature allows customers to split their purchases into manageable instalments via flexible payment options through Afterpay, Klarna, and Affirm, enhancing affordability and convenience. In this section, we'll guide you through essential steps to get started with Stripe BNPL configurations.

Login to your Maropost Control Panel and follow the steps to add new payment methods:

1. In your control panel, navigate to **Settings & tools** > **Payment methods**.
2. In the Stripe section, click the **Configure** button.![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/1.05TJ1000004yO98MAE.png)
3. A pop-up screen will appear. Click the **Add New** button.![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/2.05TJ1000004yO9IMAU.png)
4. Select the checkboxes which correspond to the new payment methods (e.g Afterpay) that you wish to add.![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/3.05TJ1000004yO9NMAU.png)
5. Configure the settings as desired.
6. Click the **Complete** button at the bottom of the page.![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/4.05TJ1000004yO9SMAU.png)
7. Check whether the payment method configured shows up on the Checkout page. Make sure to place dummy orders to check whether the payment method is working.![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/5.05TJ1000004yO9XMAU.png)

**Warning** Please ensure that you do not have both the native Afterpay and the Stripe Afterpay payment options enabled simultaneously.

## [Setup Stripe BNPL Widget (Optional)]()

Following the previous section, let's take a look at how you can install the Stripe BNPL widget for your webstore. Follow the steps as shown below-

1. In the Addons store in the Control Panel, find the **Stripe Pay Later Widgets** addon and install it.![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/1.05TJ1000004yODeMAM.png)
2. Find your Stripe API "Publishable Key" on this page in your Stripe account.![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/2.05TJ1000004yODoMAM.png)

Copy it and paste it into the addon's **Stripe Publishable Key** field. To know more about API keys, please refer to this [link](https://dashboard.stripe.com/apikeys) here.![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/3.05TJ1000004yOESMA2.png)

1. Additionally, once you have installed the widget, you can click **Configure** on the addon, and change the appearance of the widget by selecting one of the 3 available themes:

- stripe
- `night`
- `flat`

Enter the chosen theme's name in the **Widget Theme** field or alternatively leave it blank for the default theme.![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/4.05TJ1000004yOEwMAM.png)

1. You can now see the widget on your webstore in the following pages:

- **Product Page**
![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/5.05TJ1000004zA0hMAE.png)
- **Cart Page****
**![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/6.05TJ1000004zTomMAE.png)

> **Warning:** Please be aware that the widget's appearance and positioning may vary with customised webstore templates.

To know more about rates, Stripe's pricing is available [here](https://stripe.com/en-au/pricing/local-payment-methods). Please contact Stripe directly to discuss pricing.