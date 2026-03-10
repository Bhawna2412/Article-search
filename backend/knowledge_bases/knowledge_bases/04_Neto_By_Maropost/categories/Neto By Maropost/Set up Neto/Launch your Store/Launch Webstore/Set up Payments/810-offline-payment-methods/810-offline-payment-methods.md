---
title: "Offline Payment Methods"
articleID: 810
category: "Set up Neto > Launch your Store > Launch Webstore > Set up Payments"
knowledgeBase: "Neto By Maropost"
---

# Offline Payment Methods

Let customers pay the way they want to. You can allow offline payment methods for specific customer groups, like your VIPs or wholesale customers. Offline payment methods must be reconciled manually. This usually involves checking your bank account to ensure funds have cleared before approving the sales order for processing.

## Direct Deposit

Direct deposit requires that your customers transfer money directly into your bank account. As such it's important to ensure your details are correct. To set up a direct deposit payment method:

1. In your Neto control panel navigate to **Settings & Tools** > **Payment Methods**.
2. Click the **Other payments** header and click the **Add other payment method** link.
3. Click the **Direct Deposit** tile.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/OfflinePaymentMethods1.05T5g00000sz6ZfEAI.png)
4. Enter your **bank details**. Keep in mind that the display name is what the customer can see when selecting a payment method. Click **Continue** to add the method.
  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/OfflinePaymentMethods2.05T5g00000sz85vEAA.png)

## Cheque

Due to the time it takes for cheques to be mailed and then clear, we recommend only offering it to wholesale customers that have account limits. To set up a cheque payment method:

1. In your Neto control panel navigate to **Settings & Tools** > **Payment Methods**.
2. Click the **Other payments** header and click the **Add other payment method** link.
3. Click the **Cheque** tile.
  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/OfflinePaymentMethods3.05T5g00000sz86ZEAQ.png)
4. Fill out the bank account details and press **Continue** which will save and make the method active.
5. To view and change the instructions provided to the customer, navigate to **Settings & Tools** > **All settings & tools**.
6. Click on the **Sales Orders & Invoices** tab and click **Invoice & Statement Settings**.
7. Scroll down to **Electronic transfer description text**. This information will affect both cheque and direct deposit instructions. You can edit the text in either HTML source code or regular text.
8. When an invoice is generated, the description text appears at the bottom right hand corner in the invoice
  ![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/OfflinePaymentMethods4.05T5g00000sz87SEAQ.png)

## BPAY

BPAY is an electronic bill payment system in Australia which enables payments to be made through a financial institution's online, mobile or telephone banking facility to organisations which are registered BPAY billers.

To set up a BPAY payment method:

1. In your Neto control panel navigate to **Settings & Tools** > **Payment Methods**.
2. Click the **Other payments** header and click the **Add other payment method** link.
3. Click the **BPAY** tile.
  ![image5](https://us.v-cdn.net/6038474/uploads/attachments/migrated/OfflinePaymentMethods5.05T5g00000sz87yEAA.png)
4.   - **Your BPAY biller code**: This is provided via your bank or financial institution.
  - **The length of your BPAY CRN**: This is the number of characters in your BPAY CRN. The default number for this is 8.
  - **Generate BPAY CRN for every order**: If this box is ticked a new BPAY CRN will be generated for each order, regardless of the payment method that is chosen. This allows your customers to pay via Bpay even if they have chosen another payment option at checkout.
  - **BPAY CRN check digit routine used**: The BPAY CRN check digit routine used by your banking institution. The default is MOD10V01. If you're not sure, please confirm with your bank.

  Fill in the fields:

  ![image6](https://us.v-cdn.net/6038474/uploads/attachments/migrated/OfflinePaymentMethods6.05T5g00000sz822EAA.png)
5. Click **Save** and your setup is complete. [Download our sample invoice](https://neto.com.au/assets/images/docs/7351/bpayinvoice.pdf) to see how Bpay will display on your orders.

## Test BPAY

Before going live with your BPAY payment method, you must ensure the invoice displays the Bpay section accurately and live transaction has been successful.

1. Create a test order in control panel or checkout and check out using **Bpay** as the payment option.
2. Using the invoice details, make a live payment of $1.00 through your internet banking using the Biller Code and CRN (Customer Reference Number) provided on the invoice.
3. Within your internet banking, if the CRN is incorrect, an error will be occur and will not let you proceed with the payment. If the payment is able to be processed, then the integration is successful.
4. If the payment fails because there is too few digits in the CRN, it's likely the 'payment check digit routine used' within your BPAY payment method is incorrect.
  The default is MOD10V01 however this varies from bank to bank. Contact your bank to ensure you are using the right check digit routine and update it in **Settings & Tools** > **Payment Methods** > Select **BPAY** and update this in the **Configuration** section.