---
title: "Test Payment Methods"
articleID: 1035
category: "Set up Neto > Payments > Set up Payment Gateways"
knowledgeBase: "Neto By Maropost"
---

# Test Payment Methods

- [Payment Gateway Testing](https://galaxy.maropost.com/kb/articles/1035-test-payment-methods#paypal-afterpay-zipmoney-once-testing)
- [Paypal, Afterpay, Zipmoney, Once Testing](https://galaxy.maropost.com/kb/articles/1035-test-payment-methods#bpay-testing)
- [Bpay Testing](https://galaxy.maropost.com/kb/articles/1035-test-payment-methods#3)

## Payment Gateway Testing

1. Install the **Failed Checkouts** add-on from the Neto add-on store. This will allow us to lookup errors for payments made through your gateway.
2. Once this is installed, navigate to **Sales Orders** and either create a new order or find a test order you can apply a payment to.
3. Scroll down to the bottom of the order, select your newly created payment gateway and process a payment using live card details. If you encounter any errors, it will appear above the payment tab. You can use our guide on [troubleshooting gateway payments](https://galaxy.maropost.com/kb/articles/1038-troubleshoot-payment-issues) to assist you further.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TestPaymentMethods00001.05T5g00000xqI5REAU.png)
4. If you ever need to refer back to your gateway errors, simply navigate to **Sales Orders** > **Checkout Errors**. On the top right hand side, click **Update Report**.

## Paypal, Afterpay, Zipmoney, Once Testing

To check if your integration is working correctly, go to the front end of the webstore, create an order and check out using your payment option. If the page redirects to the external payment method web page, then it is working correctly.

If there is an issue with the integration, it will error out prior to redirecting.

## Bpay Testing

1. To check if your integration is working correctly, go to the front end of the webstore, create an order and check out using Bpay.
2. Make a payment to the Bpay biller code and CRN provided on the invoice with your banking institution to ensure the payment is accepted. If the payment goes through, then it's working as it should.