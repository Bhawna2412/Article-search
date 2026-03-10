---
title: "Understand PayPal Error Messages"
articleID: 1034
category: "Set up Neto > Payments > Troubleshooting payments"
knowledgeBase: "Neto By Maropost"
---

# Understand PayPal Error Messages

Neto provides appropriate error messages for each of these failures to help your buyers understand what's causing them.

The following table discusses the PayPal payment failures scenarios, the error messages that are displayed in case of those failures, and other relevant information:

## Payment Method: PayPal Checkout

## Payment Method: PayPal Cards

|  |  |  |  |
| --- | --- | --- | --- |
| ### Displayed On | ### Error Scenario | ### Error Message | ### Transaction Status |
| Checkout page | One or more product stock has changed after the payment was initiated and therefore, there's not enough stock to fulfill the order. | Sorry, we don't have enough '[*ProductName*]' in stock to fulfill your order: we have 0 available. Please change the quantity on [*Quantity*] in your shopping cart and click update. Then try to checkout again. | Voided |
| Checkout page | The product price changed after the payment was initiated. | Sorry, there was an error processing your PayPal payment. Please try again or call during business hours for assistance. | Voided |
| Checkout page | Amount mismatch detected between Neto order grand total and the PayPal payment total. Many unknown scenarios can lead to such amount discrepancy. | Sorry, there was an error processing your PayPal payment. Please try again or call during business hours for assistance. | Voided |
| Checkout page | Payment intent was created in PayPal but for unknown reasons, the transaction details could not be captured at the end of checkout. | Sorry, there was an error processing your PayPal payment. Please try again or call during business hours for assistance. | Voided |
| My Account page | The currency type with which the order was placed is different from the current currency type. | Currency is not supported by the selected payment method. | Voided |
| My Account page | The store currency was changed in the merchant’s Control Panel, but not on the payment method configuration page. | We are sorry, but the payment could not be processed. Please try again or change your payment method. | Voided |
| My Account page | Checkout is initiated and the payment is created in PayPal with Authorised status, but for an unknown reason, the payment capture failed. | We are sorry, but the payment could not be processed. Please try again or change your payment method. | Voided |
| Checkout page, My Account page | The merchant’s PayPal account is still unverified and therefore cannot accept payment yet. | Error while processing PayPal Payment. Please try again or contact the seller. | Voided |
| ### Displayed On | ### Error Scenario | ### Error Message | ### Transaction Status |
| Checkout page | 3DS authentication failed and the buyer couldn't complete the transaction. | 3DS authentication failed! Try again or try with other card! | No Transaction |
| Checkout page | The 3DS verification popup was closed by the buyer before the authentication was complete. | 3DS authentication failed! Try again or try with other card! | No Transaction |
| Checkout page | One or more product stock changed after the payment was initiated and therefore, there's not enough stock to fulfill the order. | Sorry, we don't have enough '[*ProductName*]' in stock to fulfill your order: we have [*Quantity*] available. Please change the quantity on order in your shopping cart and click update. Then try to checkout again. | Voided |
| Checkout page | Checkout is initiated and the payment is created in PayPal with Authorised status, but for an unknown reason, the payment capture failed. | We are sorry, but your card could not be verified. Please try again or change your payment method. If you believe this is an error, please contact us. | Voided |
| My Account page | Checkout is initiated and the payment is created in PayPal with Authorised status, but for an unknown reason, the payment capture failed. | We are sorry, but the payment could not be processed. Please try again or change your payment method. | Voided |