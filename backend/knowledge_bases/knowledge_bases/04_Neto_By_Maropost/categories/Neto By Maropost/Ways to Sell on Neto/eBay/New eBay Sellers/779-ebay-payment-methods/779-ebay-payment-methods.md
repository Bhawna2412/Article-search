---
title: "eBay Payment Methods"
articleID: 779
category: "Ways to Sell on Neto > eBay > New eBay Sellers"
knowledgeBase: "Neto By Maropost"
---

# eBay Payment Methods

Payment methods are set up on your listing rules templates on the **Payments, Shipping & Returns** tab (if you're using Business Policies) or the **Payment & Returns** tab if you're not. They specify to your buyers how to pay for their purchases.

Payment methods are limited to what eBay allows, your Neto payment gateways cannot be used. All eBay store accounts must accept PayPal as a payment method, as this also allows credit card payments. Payment methods can also be managed directly in eBay using business policies (recommended).

> **Important:** You need to set up payments using one of the three methods (Managed Payments, manually in your listing rules templates, or Business Policies), and map your payment methods, for your templates and orders to function properly.

## eBay Managed Payments

The easiest way to set up your payment methods is to register for [eBay managed payments](https://www.ebay.com.au/startpayments). With managed payments, the settings you have for payments in your listing rules templates will not apply to your eBay listings. Instead your listings will show the payment options for eBay managed payments, including PayPal, credit card, Afterpay, Apple Pay, and Google Pay.

**Please Note**: You are still required to select a payment policy or choose a payment method (e.g. PayPal) on your listing rules templates. This requirement will be removed in the future as the integration with managed payments is developed further.

When you register for managed payments, a payment method called "eBay Managed Payments" will be created in Neto for you. When a buyer pays through managed payments, the Neto managed payments method will be automatically mapped to the order.

> **Note:** If you have an integrated accounting program in Neto you will need to map an account to this payment method.

More information about managed payments can be found in the [eBay seller centre](https://sellercentre.ebay.com.au/managed-payments).

## Set up eBay Payment Methods in Neto

To set up the payment methods that will be available on your eBay listings, through Neto:

1. In your Neto control panel, navigate to **eBay** > **Listing Rules Templates**.
2. Click on the rules template where you want to set the payment methods.
3. Click on the **Payment & Returns** tab.
4. Select **PayPal** and any other payment options you want to accept from the available checkboxes.

> **Important:** Visa/Mastercard will only work on older eBay accounts. We recommend that you do not select this field, as PayPal can accept credit card payments.

5. Enter **Payment Instructions** into the available field.
6. Enter your **PayPal Account Email** address that is linked to your eBay account. Instructions to link PayPal to eBay can be found [here](https://www.ebay.com.au/help/selling/fees-credits-invoices/updating-billing-settings?id=4129#section3).
7. Select the **Require Immediate PayPal Payment** checkbox to avoid cart abandonment by customers.

> **Important:** If you decide to accept **Cash On Pickup** payment option, **Freight** as a shipping method, or sell an item over $10,000, then you will not be able to request immediate payment.

  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayPaymentMethods1.05T5g00000t0SbUEAU.png)
8. Click the **Save template** button to confirm your changes.

## Set up Payments via Business Policies

If you already have payment policies set up in eBay, or just prefer to manage payment options in eBay, you can still use these on your eBay listings. To set up payments using your eBay payment policies:

1. [Opt in and create your payment policies](https://sellercentre.ebay.com.au/ebay-for-business/business-policies) in eBay.
2. [Enable eBay business policies](https://galaxy.maropost.com/kb/articles/1079-ebay-business-policies#apply-business-policies-to-rules-templates) in Neto.
3. In your Neto control panel, navigate to **eBay** > **Listing Rules Templates**.
4. Click on the rules template where you want to set up payment methods.
5. Click on the **Payments, Shipping & Returns** tab.
6. Click on the **Payment Policies** section to view your available payment policies.
7. Select the payment policy you want for the listings on this template.
  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayPaymentMethods2.05T5g00000t0ScXEAU.png)
8. Click the **Save template** button to confirm your changes.

## Accept Credit Card Payments

Buyers can only pay via credit card through PayPal, or in person during pickup. eBay no longer support merchant credit card gateway payments in eBay listings. More information [here](https://www.ebay.com.au/help/selling/listings/choosing-get-paid/accepting-credit-debit-cards?id=4185).

## Map eBay Payment Methods

When a sales order from eBay is downloaded, Neto attempts to match the payment method used by the buyer to a matching method in Neto. This information helps you reconcile payments and can push through to your integrated accounting system automatically. Additionally, eBay sales orders may go to the on-hold status if payment methods aren't mapped.

> **Note:** Payment methods don't need to be integrated in Neto to be mapped. Instead, you can [create offline payment methods](https://galaxy.maropost.com/kb/articles/810-offline-payment-methods) with no functionality, and name them to match eBay payment methods.

To map your payment methods:

1. In your Neto control panel, navigate to **Settings and Tools** > **Payment methods**.
2. Click the **Configure** button next to the payment method to be mapped.
  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayPaymentMethods3.05T5g00000t0SdaEAE.png)
3. In the **eBay Payment Mapping** section, click the **Add eBay Payment Mapping** button.

> **Note:** eBay Managed Payments does not need to be mapped.

4. Select the **eBay Payment Method** from the dropdown menu that matches this payment method.

> **Note:** Multiple eBay payment methods can be mapped to a single Neto payment method.

5. Click the **Save & Close** button.

Repeat these steps so that each eBay payment method you use is mapped.

> **Note:** Set up the next tab of your listing rules template, [Returns](https://galaxy.maropost.com/kb/articles/778-ebay-returns-settings#category=Support__c:I_m_new_to_eBay__c).