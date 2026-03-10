---
title: "Neto by Maropost Release Notes – 24 May 2023"
articleID: 1960
category: "2023 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-16
---

# Neto by Maropost Release Notes – 24 May 2023

## **Improvements**

- Continued improvements around failed PayPal authorisation, not releasing pre-authorisation amounts when the transaction could not be completed.
- Added GetItem, AddItem, and UpdateItem functions to the API for the Default Purchase Price field.
- Updated Hunter Express Postcodes and Zones to reflect the newest changes for April.

## **Fixes**

- Fixed an issue with the Forgot Password page would generate a new password and send a new email if the page was refreshed.
- Fixed an issue with the Daily Sales -By Date dashboard widget where the link to the full report was not setting the corresponding filters correctly.
- Fixed an issue with PayPal Checkout where it was possible, in some situations, that no error was presented to the customer when the transaction could not be completed.
- Fixed an issue with Stripe where it was possible, in some situations, that a failed or incomplete transaction remained Uncaptured on Stripe rather than being removed.
- 
- Fixed an issue where any UTF-8 characters in the From field of emails from your store (automatic or manual) were preventing the email from sending.
- Fixed an issue with the Theme Editor where preview themes were not being cleared correctly when clicking the “Click Here” link in the banner display area.
- Fixed an issue with PayPal Cards payment method where, if the price of a product was updated while a customer was at checkout, the order was created with the new price, though payment would be for the old price. This led to orders with amounts still owing on them. If the price has changed between the customer opening checkout and completing the purchase, the order will not be placed, and the transaction request will be cleared from PayPal. The customer will receive a message on the checkout page to inform them of the change.
- Fixed an issue with PayPal payment methods when the customer has not met the minimum spend requirements for the method, and the pre-authorisation amount was not released.

-