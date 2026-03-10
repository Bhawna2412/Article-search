---
title: "Troubleshoot Payment Issues"
articleID: 1038
category: "Set up Neto > Payments > Troubleshooting payments"
knowledgeBase: "Neto By Maropost"
---

# Troubleshoot Payment Issues

## Reviewing Abandoned Checkout Logs

1. In your Neto control panel select **Reports** from the navigation menu.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TroubleshootPaymentIssues1.05T5g00000xpu1yEAA.png)
2. Locate and select the **Abandoned Checkout Log** report.
  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TroubleshootPaymentIssues2.05T5g00000xpu5lEAA.png)
3. Click **Update Report** and let the process run. Once complete, review the error messages in the description field.
  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TroubleshootPaymentIssues3.05T5g00000xpuBoEAI.png)

## Getting a '**creditcard_notinservice**' response from error logs.

This means your integration has not made a connection with the gateway. This is caused by missing or mistyped credentials into the gateway. If you are using Westpac Payway, it's also best to ensure your gateway certificate is installed.

The most common issues occur when credentials are put into the wrong sections or passwords are copy/pasted into the credentials section. Sometimes when this happens, accidental spaces are pasted as well.

In both scenarios, it's best to re-enter your credentials again and run another test. Failing this, redo the steps of the original integration to ensure you have not missed any steps, including any advanced configurations outlined in the setup.

## Login to Gateway Facility to check transactions

We recommend logging in to your relevant Gateway Facilities and checking the transaction logs contained within.

The information provided here will give you more insight on why the payment was not processed. If no transaction appears, it means the transaction did not reach the relevant payment gateway.

Check with your chosen Gateway Facilities for more information on transaction logs available to you.

## Checking your account details

The most common mistake when setting up a Payment Method is a simple copy and paste error. Spaces can be added to the end of the password and causes errors when attempting to process payments.

Review your gateway details, enter them again and attempt another transaction to see if this resolves the issue.

1. In your Neto control panel navigate to **Settings & tools** > **Payment Methods**.
  ![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TroubleshootPaymentIssues4.05T5g00000xptOUEAY.png)
2. Select the relevant **Payment Method(s)** you would like to check and confirm the details are correct.
  ![image5](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TroubleshootPaymentIssues5.05T5g00000xpqViEAI.png)

## Multi-Currency setups

Multi-currency is supported by some gateway facilities, however in order for them to function correctly, your clearing account (where the payment is deposited) must also support multiple currencies.

[NAB is currently the only Australian bank that will provide you with this facility](https://www.nab.com.au/business/accounts/specialised-accounts/nab-foreign-currency-account). It can provide you with the following currencies:

- USD
- GBP
- JPY
- HKD
- NZD
- EUR
- CAD
- CHF
- SGD

**If you're attempting payments in other currencies without a suitable NAB account, you can still accept AUD payments instead.**

1. In your Neto control panel navigate to **Settings & Tools** > **Payment Methods**.
  ![image6](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TroubleshootPaymentIssues6.05T5g00000xptkbEAA.png)
2. Select the relevant **Payment Methods** you would like to set to accept on AUD payments.
3. Under the **Configuration** section ensure Currency is set to **AUD - Australian dollar**.
  ![image7](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TroubleshootPaymentIssues7.05T5g00000xpuHSEAY.png)

## Fraud Security System

Errors can also occur if credit cards are caught up in [Neto's fraud security check](https://galaxy.maropost.com/kb/articles/427-fraud-filter) .

A common error on the shopping cart may look like this:

`We are sorry, but your card could not be verified. Please try again or change your payment method.`
`If you believe this is an error, please contact us.`

This error will also be reflected in the Abandoned Checkout Log as `**creditcard_high_risk** (No description)` or `**creditcard_declined** (515 Fatal Unknown Error)`.

These errors are common when the customer is overseas in high risk countries (however this is not the only reason). You may wish to adjust these settings if this is where your target market is located but this is not recommended by Neto as it leaves you more vulnerable to fraudulent transactions.

## What does a Fraud Score of 99 mean?

A fraud score of 99 occurs when a there has been no response from the 3rd party payment gateway, which is most likely an intermittent connection issue. When this occurs, Neto cannot verify that the payment has come through correctly, as such, the order will be marked with a high fraud score and will not apply a payment to the order.

Please manually confirm that payment has been received with the relevant gateway facility. Once the payment had been confirmed, you can apply the payment in Neto and process the order as usual.

The fraud calculator is a a score based system which can be adjusted to be more flexible if needed.

## PayPal Instant Payment Notifications (IPN) Error

PayPal's IPN (Instant Payment Notification) system is just simply a response sent back to Neto from PayPal to confirm the order went through without any problems.

Customers may receive the following email from PayPal about IPN issues:

`Please check your server that handles PayPal Instant Payment Notifications (IPN). Instant Payment Notifications sent to the following URL(s) are failing: (Your URL will be given).`

`If you do not recognize this URL, you may be using a service provider that is using IPN on your behalf. Please contact your service provider with the above information. If this problem continues, IPNs may be disabled for your account. Thank you for your prompt attention to this issue.`

`Sincerely, PayPal`

This will generally happen when you've come come across from a different platform or have been using the PayPal Standard integration at one stage.

When using Neto's PayPal Express integration, this process will already be handled by Neto and doesn't need to be on. Even though you may be receiving these messages, it doesn't cause any problems with your integration and customers will still be able to make payments without any issues. However it can be annoying to get constant emails about it.

## Steps to Correct

1. Login to PayPal and click the **Profile** button on the top right hand side (next to Log Out button) and click **Profile and settings**.
2. Click on the **Selling Tools** tab, find **Instant payment notifications** and click the **Update** link.
  ![image8](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TroubleshootPaymentIssues8.05T5g00000xpuIVEAY.png)
3. Press the **Choose IPN Settings** button.
  ![image9](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TroubleshootPaymentIssues9.05T5g00000xpuKREAY.png)
4. Select **Do not receive IPN messages (Disabled)** and click Save.
  ![image10](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TroubleshootPaymentIssues10.05T5g00000xpuKlEAI.png)