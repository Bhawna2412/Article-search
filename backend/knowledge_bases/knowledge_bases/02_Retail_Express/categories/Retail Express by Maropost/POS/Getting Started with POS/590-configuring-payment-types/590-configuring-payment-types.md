---
title: "Configuring Payment Types"
articleID: 590
category: "POS > Getting Started with POS"
knowledgeBase: "Retail Express"
lastUpdated: 2026-01-21
---

# Configuring Payment Types

You can configure diverse payment methods in Retail Express to accommodate customer payment preferences and integrate with ANZ payment systems, helping your retail operations provide flexible checkout options. This capability enables you to define and manage cash, card, EFTPOS, and alternative payment types, which helps ensure customers can pay using their preferred method while maintaining accurate financial tracking.

Setting up comprehensive payment type configurations enables your retail operations to support various payment scenarios, helping optimize checkout flexibility and financial reconciliation. This helps retail businesses meet customer payment expectations while ensuring all transaction types are properly categorized for accounting and reporting purposes.

There are many payments methods available in Retail Express, which can be enabled individually depending on your requirements. Each Payment Type has a range of options, including whether it should be available within POS, open the Cash Draw, accrue loyalty points and more.

You can also use Loyalty Points to pay for sales in POS

## Enabling a Payment Type

To enable a Payment Types:

1. Navigate to: **Settings > Payment Types**
  ![Screenshot 2026-01-20 at 5.38.49 PM.png](https://us.v-cdn.net/6038474/uploads/376FOAPI94DB/screenshot-2026-01-20-at-5-38-49-e2-80-afpm.png)
2. On Account is a legacy payment type and should not be used; it will not add any amounts owing to a customer account. For information on Account Customers please refer to the article Customers - Creating Account Customers.
3. To display the payment method in POS tick the box in the **POS **column
4. Please confirm your requirements with your Accountant/Bookkeeper.Changing this setting will require MYOB or Xero to be disconnected and reconnected to update the configuration.
5. Tick **Auto-Reconcile in Cash Up **to automatically insert the Expected Amount into the Amount Reconciled column during the Cash Up process
6. Click **Save Changes**
7. To see the changes in POS you will need to **Log Out **and **Log In **again

## Outlet-Specific Payment Types

Retail Express now supports configuring and reordering **payment types at the outlet level**, allowing each store to display only the payment options they actively offer at the point of sale.

This enhancement helps streamline the POS experience by reducing on-screen clutter, minimising misclicks, and ensuring staff select from relevant payment methods during checkout.

If no outlet-specific payment configuration is applied, Retail Express will continue to use the existing global payment type behaviour, ensuring backward compatibility.

[▶ Outlet Specific Payment Settings](https://youtu.be/yOVIa6WY1pU)

## Payment Type columns

Each column has individual tick boxes relating to the Payment Type on the left-hand side. See below for details on each column.

|  |  |
| --- | --- |
| **Column** | **Details** |
| Enable | Enables the Payment Type for use, including visibility in reports. e.g. Income Report |
| POS | Enable this Payment Type to be available in the Payments tab in POS |
| Money Out | The Payment Type becomes available as tender when using the Money In / Out feature at POS |
| Cash Drawer | Tick to enable the cash drawer to open when this Payment Type is used |
| Loyalty | Enable the Payment Type to allow accrual of Loyalty points when used for payment |
| Summarise for Accounting | Used with Accounting Integrations. Tick to send only a single total for all payments made using that Payment Type or untick to send individual totals. |
| Auto-Reconcile in Cash Up | Enabling this option will automatically populate the "Expected Amount" into the "Amount Reconciled" field in Step 3 of the Cash Up. Cash is not eligible to be auto-reconciled. |
| Loyalty Multiplier | The number of points accrued when the payment type is used e.g. entering a value of 1 would accrue 1 point for every $1 dollar paid. |

The POS option must be ticked to display in POS.

**Example Scenarios:**

Some integrated EFTPOS solutions will determine the card type on its use at POS, and assign the payment to the specific Payment Type i.e. a payment made via integrated EFTPOS with a VISA card would report in the Income Report as VISA, even though Tyro or PC-EFTPOS was selected as the Payment Type at POS.

This scenario may also be used if you wanted to have Paypal available for use for web store payments, but wouldn't want PayPal available for selection as a tender at POS. Again, using the Enabled tick still allows you to run reports filtering for that Payment Type.

PC-EFTPOS has been renamed to Linkly but is still currently referred to as PC-EFTPOS within the Retail Express application.

## Available Payment Methods

| Payment Method | Description |
| --- | --- |
| Adyen | Payments processed via the Adyen payment gateway. |
| Afterpay | Buy Now Pay Later payments via Afterpay. |
| Alipay | Digital wallet payments via Alipay. |
| Amazon | Marketplace payments associated with Amazon orders. |
| AMEX | American Express card payments. |
| Apple Pay | Contactless payments using Apple Pay. |
| Bad Debt | Records write-offs for unrecoverable amounts. |
| Bank Gateway | Payments processed through a bank gateway integration. |
| Barter | Records non-cash barter or trade-based payments. |
| BasicsCard | Australian government BasicsCard payment method. |
| BPAY | Payments processed via the BPAY banking system. |
| Braintree | Payments processed via the Braintree gateway. |
| Buy Aussie Now | Payments related to the Buy Aussie Now marketplace. |
| Cash | Records payments made using physical cash at POS. |
| Catch | Marketplace payments associated with Catch. |
| Cheque | Records payments received by cheque. |
| CreditCard | Generic credit card payment option. |
| Crypto | Payments made using supported cryptocurrency methods. |
| David Jones | Marketplace payments associated with David Jones. |
| David Jones Concession | Concession-based payments for David Jones stores. |
| Diners | Diners Club card payments. |
| Direct Deposit | Payments made via bank transfer or direct deposit. |
| Donation | Accepts donation amounts as part of a transaction. |
| DoorDash | Payments associated with DoorDash marketplace orders. |
| Ebay | Marketplace payments associated with eBay. |
| EFTPOS | Standard EFTPOS card payments. |
| eWay | Card payments processed via the eWAY gateway. |
| External Voucher | Third-party or external voucher payments. |
| Finance | Payments processed through finance or instalment providers. |
| Gift Voucher | Accepts store-issued gift vouchers as payment. |
| Givex Gift Card | Gift card payments processed through the Givex integration. |
| HICAPS | Health industry claims and payments via HICAPS. |
| Humm | Buy Now Pay Later payments via Humm. |
| Internal Voucher | Store-issued internal vouchers. |
| JCB | JCB card payments. |
| Klarna | Buy Now Pay Later payments processed through Klarna. |
| Kogan | Marketplace payments associated with Kogan. |
| Latitude | Finance payments via Latitude. |
| Laybuy.com | Buy Now Pay Later payments via Laybuy. |
| Loyalty | Payments or redemptions using loyalty points. |
| MasterCard | Credit or debit card payments using MasterCard. |
| Money Out | Records money-out transactions such as cash payouts. |
| MyDeal | Payments linked to MyDeal marketplace orders. |
| Myer | Marketplace payments associated with Myer. |
| None | Placeholder payment type with no financial impact. |
| NZ PC EFTPOS | EFTPOS payment processing specific to New Zealand setups. |
| On Account | Charges the sale to a customer account for later payment. |
| Online | Payments originating from online channels or integrations. |
| Openpay | Buy Now Pay Later payments via Openpay. |
| OxiPay | Buy Now Pay Later payments via OxiPay. |
| PayPal | Payments made using PayPal. |
| PC EFTPOS | Payments processed using PC EFTPOS integration. |
| PinPay | Payments processed via PinPay gateway. |
| Podium | Payments processed through Podium integrations. |
| Promotion | Applies promotional credits or internal promotions as payment. |
| Qoin | Payments made using Qoin trade currency. |
| Refund – Head Office | Refunds processed centrally by head office. |
| Refund – Surcharge | Refunds related specifically to surcharge amounts. |
| SecurePay | Payments processed via SecurePay gateway. |
| Shopify Payments | Card payments processed via Shopify Payments. |
| Shopify Refund | Refund transactions originating from Shopify sales. |
| Sponsorship | Payments or credits related to sponsorship arrangements. |
| Square | Card payments processed via Square terminals. |
| Stripe | Payments processed via Stripe gateway. |
| TAGr | Third-party or integration-based payment method used for external settlements. |
| The Card Network | Card payments processed through a custom card network. |
| The Iconic | Marketplace payments associated with The Iconic. |
| Trade In | Credit applied for traded-in items. |
| Tyro | Integrated EFTPOS payments processed via Tyro terminals. |
| Uber Eats | Payments associated with Uber Eats orders. |
| UnionPay | UnionPay card payments. |
| VISA | Credit or debit card payments using VISA. |
| WePay | Payments processed via the WePay payment gateway. |
| Westfield Direct | Payments linked to Westfield Direct marketplace. |
| Woolworths | Marketplace settlement payments from Woolworths. |
| Zip | Buy Now Pay Later payments via Zip. |