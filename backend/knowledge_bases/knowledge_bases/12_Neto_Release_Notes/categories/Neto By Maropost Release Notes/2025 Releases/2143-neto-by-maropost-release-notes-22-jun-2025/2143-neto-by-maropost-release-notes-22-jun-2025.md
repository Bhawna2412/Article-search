---
title: "Neto by Maropost Release Notes – 22 Jun 2025"
articleID: 2143
category: "2025 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-17
---

# Neto by Maropost Release Notes – 22 Jun 2025

## Overview

This release contains updates for the eCommerce versions 6.333.0, 6.334.0, 6.335.0, and 6.336.0.

## Enhancements and Changes

### Updated Unleashed Integration as Per the New Breaking Change

Unleashed is introducing a breaking change to their API that requires all API connections to send a Client-Type header in the HTTP request, which will allow tracking connected APIs and monitoring usage.

Neto has updated the [Unleashed Inventory Management](https://galaxy.maropost.com/kb/articles/1613-unleashed-inventory-management) integration to ensure compliance with the new change.

### Deprecated Payment Gateways

The following payment gateways have been deprecated and hence, removed:

- Neto Gateway
- Merchant Warrior
- ANZ eGate 3-Party Payments
- Payflow Pro or Website Payment Pro

## Fixes

- Fixed an issue where selecting the “Due 7 days from Dispatch” option on customer default invoice terms resulted in “Cash on Delivery” as the payment method, rather than the one selected. This has been fixed, and the selected payment method is retained upon saving.
- Fixed a rounding issue in the template that was causing a difference in RRP and Price A, making it look like the product was on sale. This has been fixed.
- Fixed an issue with webstore orders paid using Stripe, where the order total did not include the surcharge.