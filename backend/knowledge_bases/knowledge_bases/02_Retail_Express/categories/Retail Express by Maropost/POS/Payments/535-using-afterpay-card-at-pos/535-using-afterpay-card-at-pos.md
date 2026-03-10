---
title: "Using Afterpay Card at POS"
articleID: 535
category: "POS > Payments"
knowledgeBase: "Retail Express"
---

# Using Afterpay Card at POS

You can expand payment options through accepting Afterpay Card at **Retail Express** POS, which enables customers to use Afterpay's buy-now-pay-later service through standard card processing workflows. This payment option helps retail operators attract customers seeking flexible payment arrangements, with Afterpay Card acceptance typically improving conversion rates and supporting larger transaction values across Australian retail operations.

Afterpay Card processing in **Retail Express** enables retail operators to accept Afterpay payments through simplified card terminal workflows, helping support customer payment flexibility while maintaining straightforward POS operations. This payment integration helps ensure your retail operations can offer modern payment options supporting customer purchasing power and competitive positioning.

Afterpay Card uses the EFTPOS terminal to process the payment - there's no integration directly between Retail Express and Afterpay. The customer simply opens the app on their phone (loading the Afterpay Card) and taps the payment terminal with their phone - exactly like any other contactless payment.

From the staff's point of view, the transaction is processed like any other credit card payment. There are no additional steps required to process an Afterpay Card payment. The payment is recorded as either Mastercard (Australia) or Visa (New Zealand).

## []()Getting Started with Afterpay Card

To get started with Afterpay Card:

- **New to Afterpay:**  - Create an account with[ Afterpay](https://www.afterpay.com/en-AU)
  - Obtain your Merchant ID (the Merchant ID is for your payment terminal, and will be provided to you by your EFTPOS provider)
- **Existing merchant: **Afterpay is in the process of rolling out the updates to all merchants (for more information on the rollout process please contact Afterpay directly)

## []()Retail Express Configuration

### Integrated EFTPOS

If using an integrated EFTPOS system (Fiserv, Tyro, PC-EFTPOS etc) you will be able to use that method to process Afterpay Card transactions (as if it was a Credit Card) i.e. click PC-EFTPOS to trigger the terminal. If your Integrated EFTPOS is already working with Retail Express then no further configuration is required.

**Related: **Click here for details on how to get started withFiserv Integrated EFTPOS

### Non-integrated EFTPOS

If you're not using an integrated EFTPOS method, you will need to ensure you have enabled a Payment Method for use in Retail Express e.g. Afterpay, Mastercard (Australia) or Visa (New Zealand), or you can use a separate payment method altogether if preferred.

> **Note:** If your EFTPOS terminal does not allow Contactless Payments you will not be able to use the Afterpay Card method - you will need to upgrade your terminals.

1. Navigate to **Settings > Payment Types**
2. Locate the Payment Type row (Mastercard for Australia, or Visa for New Zealand, or another Payment Type if preferred)
3. Ensure you have ticks for **Enabled **and **POS**
4. Tick the remaining boxes as required
5. Click **Save**

![mceclip0 - 2023-07-10T042342.859.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppj1JEAQ.jpg)
**Related: **Click here for more information on configuringPayment Types

## []()Processing a Sale

Using Afterpay Card in POS is the same process to take a regular Credit Card Payment.

**Related:**POS - Create a sale

To add an Afterpay Card payment to POS:

1. Create the sale in POS
2. Click the **Payment** tab
3. If using an Integrated EFTPOS method select your Payment Method on the left e.g. PC-EFTPOS

> **Note:** Using the "Afterpay" method will trigger the former Integrated Afterpay process and request a barcode to be scanned

4. If not using an Integrated EFTPOS method select either Mastercard/Visa on the left (double click it to add the payment to the sale)
  ![mceclip2 - 2023-07-10T042349.274.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppijIEAQ.jpg)
5. Use your Payment Terminal to process the payment
6. The customer will need to load the Afterpay app to access the card and process a contactless payment

> **Note:** If the terminal requests a PIN number just press **OK**

7. Follow the prompts to finish processing the sale

## []()Processing a Refund

Process a Refund of an Afterpay Card transaction in Retail Express is handled in the same manner as a regular Credit Card/EFTPOS transaction.

Click here to view a detailed guide to processing a refund.

If the sale was an **online ****sale** (Shopify etc) the refund will need to be managed in both systems independently using the following process:

1. Refund processed in the online store (this will show in the customer history online)
2. Refund processed in Retail Express, including payment (this will not show in the customer history online, but will be visible in the customer history in Retail Express)

> **Note:** Retail Express supports Gift Voucher integration with Shopify, allowing vouchers to be redeemed either online or in-store. See the Shopify - Gift Voucher Integration article for more information.

For detailed information on processing a refund/cancellation refer to the articleIntegrated web stores - Managing Refunds/Cancellations of web orders

## []()Frequently Asked Questions

[Will Afterpay Cards be separated from other payments for End of Day, reconciling Accounting etc?](https://galaxy.maropost.com/kb/articles/535-using-afterpay-card-at-pos#reconciling)

Afterpay Card acts like a Mastercard (Australia) or Visa (New Zealand), so as far as Retail Express knows it's considered a Mastercard/Visa in all transactions. This means it will not be separated from other Mastercard/Visa transactions within Retail Express reports or in POS.

You will need to obtain an [Afterpay Detailed Reconciliation](https://help.afterpay.com/hc/en-au/articles/217427506) from your Merchant Portal for a list of Afterpay payments.

> **Note:** The Afterpay Reconciliation data is updated once a day, typically within a few hours of the end of the calendar day i.e. early morning the following day

[When will Afterpay Card be available?](https://galaxy.maropost.com/kb/articles/535-using-afterpay-card-at-pos#available)

Now - please contact Afterpay directly to upgrade.

> **Important:** Once you have upgraded, ensure your staff are aware of how to process the sales using the standard Credit Card payment method, not using the former integrated Afterpay Barcode method.

[Terminal displays a "Not Authorised" error](https://galaxy.maropost.com/kb/articles/535-using-afterpay-card-at-pos#not-auth)

If your customer tries to pay with their Afterpay Card and the terminal shows "Not Authorised", this means the *Merchant* is not authorised (not the customer). You have not been enabled to use the Afterpay Card payment method, and will need to use the former integrated Afterpay Barcode payment method.

Customers using the new Afterpay Card can still access a Barcode for scanning by clicking the Barcode symbol in the top right-hand corner of the app:

![afterpay-barcode.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppj6oEAA.jpg)
[What is the difference between Afterpay Card and the Afterpay Integration](https://galaxy.maropost.com/kb/articles/535-using-afterpay-card-at-pos#differences)

|  |  |
| --- | --- |
| **Afterpay Card** | **Afterpay Integration/Barcode** |
| Customer loads a "card" stored in the phone Digital Wallet/Afterpay card and taps it on the payment terminal | Customer loads a barcode in the Afterpay app scanned at POS by the staff member |
| Processed via your Payment terminal/bank | Processed through a connection directly between Retail Express and Afterpay |
| Integrated payment terminals - Payment identified in Retail Express as either "Mastercard" (Australia) or "Visa" (New Zealand) Payment Types in reports | Payment identified using Afterpay Payment Type |

[Why is the "Afterpay" Payment Type still integrated?](https://galaxy.maropost.com/kb/articles/535-using-afterpay-card-at-pos#payment-types)

Retail Express still has customers using the integrated Afterpay barcode system. The integration remains intact to allow those businesses to continue to process Afterpay payments successfully. Afterpay have confirmed the Barcode method will be retired from 30 September - a review of the Afterpay Payment Type will be conducted after that. Any changes to this feature will be advised.