---
title: "Braintree Credit Card Payment Method"
articleID: 1040
category: "Set up Neto > Payments > Set up Payment Gateways"
knowledgeBase: "Neto By Maropost"
---

# Braintree Credit Card Payment Method

![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/BraintreeCreditCardPaymentMethod1.05T5g00000xprsGEAQ.png)

> **Important:** The Braintree credit card gateway can no longer be installed. Please speak with our customer success team on 1300 730 300 to discuss our available payment gateway options.

## Overview

> Braintree is your payments partner, not just a payments platform. We create tailored, seamless e-commerce experiences that maximize business opportunities for companies across the globe, from small businesses to large enterprises.
> Whether you're planning to build operations in Australia or overseas, Braintree has the solution for you. Accept payments in all major currencies.

Braintree also offers world class anti-fraud protection with [Kount Advanced](http://www.kount.com/fraud-detection-software/kount-complete).

Other benefits include:

- No monthly fees
- No hidden costs
- Most payouts are made within 2 days

## Fraud Protection

### **Braintree - Advanced Fraud Tools**

Neto supports Braintree's advanced fraud tools - Kount Standard and Kount Custom. These tools are the most advanced that Braintree offers, and between the two offer coverage that will suit both growing merchants and our largest enterprise customers.

**How do I enable Kount Standard for Braintree purchases run through Neto?**

Kount Standard needs to be enabled through your Braintree control panel. You can turn this feature on by following the instructions in [this article](https://articles.braintreepayments.com/guides/fraud-tools/advanced/overview#enabling-advanced-fraud-tools).

Once enabled through your Braintree control panel, Kount Standard should start taking effect. There are no configurations required to enable this functionality in Neto.

**How do I enable Kount Custom for Braintree purchases run through Neto?**

Kount Custom needs to be enabled through your Braintree control panel. At the time of writing, this is not a feature that you will be able to enable yourself. You should contact Braintree on accounts@braintreepayments.com and request activation.

Once enabled through your Braintree control panel, you will need to add your Kount ID into your Braintree configuration in your Neto control panel. This will ensure your Kount ID is correctly sent to Braintree and then through to Kount.

**Does Kount Standard and Kount Custom work for all Braintree transactions?**

These tools are only applied on transactions that run through your website front end for payments initiated by customers. This includes transactions placed on your website checkout, or when a customer is paying for an order from their 'My account' page.

Payments charged through the control panel (MOTO payments) should not be impacted by these tools.

### **Braintree - 3D Secure support**

You can now enable 3D Secure for web store payments that are processed with Braintree. With 3D Secure enabled for Braintree, a lookup is performed during the checkout process to determine whether the card is eligible to use 3D Secure. If it is, the customer will be shown a webpage from their card issue (e.g., Visa or MasterCard) asked to authenticate their purchase. The customer will then be prompted to verify their identity, which is typically done by entering a password. This additional layer of security can reduce your risk of fraud and charge-backs.

**How can I enable 3D Secure for Braintree?**

3D Secure is not available to all Braintree accounts, and varies from country to country. To have 3D Secure enabled for your Braintree account, contact Braintree on accounts@braintreepayments.com and request activation.

Once enabled through your Braintree control panel, you will need to enable 3D secure for your Braintree configuration in your Neto control panel.

**Does 3D Secure affect all Braintree transactions?**

3D Secure should only be applied on transactions that run through your website front end for payments initiated by customers. This includes transactions placed on your website checkout, or when a customer is paying for an order from their 'My account' page.

Payments charged through the control panel (MOTO payments) should not be impacted by these tools.

## Set up Braintree

To set up your Braintree payment methods in Neto:

1. In your Neto control panel navigate to **Settings & Tools** > **Payment Methods**.
2. Click the **Other Payments** link and then click **Add other payment method**.
  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/BraintreeCreditCardPaymentMethod2.05T5g00000xproeEAA.png)
3. Click the Mastercard, Visa + more tile, and select Braintree from the first dropdown menu. Then click the **Continue** button.
  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/BraintreeCreditCardPaymentMethod3.05T5g00000xprvGEAQ.png)
4. Set your **Braintree Environment** to Production. You can change this to **Sandbox** if you need to test payments without making live transactions or troubleshoot errors.
5. Enter your **Braintree Merchant ID**, **Account ID**, **Public Key** and **Private Key**. These details are provided by Braintree when you sign up and are available in your Braintree account.
  ![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/BraintreeCreditCardPaymentMethod4.05T5g00000xprxkEAA.png)
6. Click the **Continue** button.

Once complete we recommend enabling the [CVV rules](https://articles.braintreepayments.com/guides/fraud-tools/basic/avs-cvv-rules) in your Braintree account as this helps prevent failed checkouts.

## Test Braintree

- [Enable Sandbox Environment](https://galaxy.maropost.com/kb/articles/1040-braintree-credit-card-payment-method#6)
- [Test Cards](https://galaxy.maropost.com/kb/articles/1040-braintree-credit-card-payment-method#7)
- [Transaction Amount Responses](https://galaxy.maropost.com/kb/articles/1040-braintree-credit-card-payment-method#8)
- [CVV responses](https://galaxy.maropost.com/kb/articles/1040-braintree-credit-card-payment-method#8)

### Enable Sandbox Environment

To test your Braintree credit card gateway you need to use the **Sandbox environment**, which is Braintree's own testing system. To test in the Braintree to the sandbox environment:

1. Generate your [Braintree sandbox credentials](https://articles.braintreepayments.com/control-panel/important-gateway-credentials). You will need to enter these details in Neto.
2. In your Neto control panel navigate to **Settings & tools** > **Payment Methods** and click on the **Configure** button next to **Braintree**.
3. Click on one of the payment methods (such as Mastercard or Visa). It doesn't matter which one you choose as it will affect all methods.
4. Under **Configuration**, set **Braintree Environment** to **Sandbox**.
5. Enter your sandbox credentials into the fields.
6. Click **Save & Close**.

> **Important:** When testing payments, create a test order in the control panel so you can see the response codes. You will not be able to see these responses on the front end of checkout.

Once you've finished testing, ensure you set your environment back to **Production** and change your credentials back, otherwise you will not receive payments from customers.

### Test Cards

Use the following test cards, amounts and CCV/CID's to trigger specific responses.

| Test Card Number | Card Type |
| --- | --- |
| 378282246310005 | American Express |
| 371449635398431 | American Express |
| 6011111111111117 | Discover |
| 3530111333300000 | JCB |
| 6304000000000000 | Maestro |
| 5555555555554444 | Mastercard |
| 4111111111111111 | Visa |
| 4005519200000004 | Visa |

### Transaction Amount Responses

When working with transactions, you can pass specific amounts to simulate different processor responses.

| Amount | Authorisation Response | Settlement Response |
| --- | --- | --- |
| $0.01 - $1999.99 | Authorised | Settled |
| $2000.00 - $3000.99 | Processor Declined with a processor response equal to the amount | n/a |
| $3001.00 - $4000.99 | Authorised | Settled |
| $4001.00 - $4001.99 | Authorised | Settlement Declined on certain transaction types with a processor |
| $4002.00 - $4002.99 | Authorised | Settlement Pending on PayPal transactions with a processor response equal to the amount; Settled on all others |
| $4003.00 - $5000.99 | Authorised | Settlement Declined on certain transaction types with a processor response equal to the amount; Settled on all others |
| $5001.00 | Gateway Rejected with a reason of Application | incomplete |
| $5002.00 and up | Authorised | Settled |

### CVV Responses

The CVV (security code on the back of a card) can also return different responses depending on what you enter.

| CVV | CID (Amex) | Response |
| --- | --- | --- |
| 200 | 2000 | N (does not match) |
| 201 | 2011 | U (not verified) |
| 301 | 3011 | S (issuer does not participate) |
| no value passed | no value passed | I (not provided) |
| any other value | any other value | M (matches) |