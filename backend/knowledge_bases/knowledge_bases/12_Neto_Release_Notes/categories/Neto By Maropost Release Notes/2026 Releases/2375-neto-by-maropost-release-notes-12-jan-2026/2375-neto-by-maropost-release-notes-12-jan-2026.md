---
title: "Neto by Maropost Release Notes – 12 Jan 2026"
articleID: 2375
category: "2026 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2026-01-15
---

# Neto by Maropost Release Notes – 12 Jan 2026

## OVERVIEW

In this release, we have introduced some important updates, bug fixes, and enhancements for Neto versions **6.353.0** and **6.354.0**, respectively.

## NEW FEATURE

### ABILITY TO ADD TARIFF/SURCHARGE ON SHIPMENT ORDERS

Merchants can now configure “**Landed Cost Surcharge**” rates on a per-country basis for deliveries to different destinations.

![shiprate38.png](https://us.v-cdn.net/6038474/uploads/STOCW618VJTK/shiprate38.png)
These surcharges are levied to compensate for import duties imposed by destination countries for incoming shipments.

- The surcharge is calculated as a percentage of the product’s subtotal.
- A typical use case for this feature is to add a shipping surcharge to cover the cost of import tariffs on US-bound shipments

![shiprate40.png](https://us.v-cdn.net/6038474/uploads/3ZV8SIL6GK84/shiprate40.png)
You can also apply default extra rates on non-configured country of origin shipments, e.g., when the COO is not configured for a product or when the COO surcharge is not configured in the rate table.

![shiprate39.png](https://us.v-cdn.net/6038474/uploads/841FT1Q8PKZQ/shiprate39.png)
To learn more about delivery charges and the subsequent tools used to configure a complex consignment mechanism, refer to our [**Add or Edit Shipping Rates**](https://galaxy.maropost.com/kb/articles/1223-add-or-edit-shipping-rates) and [**Advanced Shipping Options**](https://galaxy.maropost.com/kb/articles/1047-advanced-shipping-options) articles.

## FIXES AND IMPROVEMENTS

- We have deprecated and removed the "**OPTIN_EBAY_ORDER_USERS**" configuration code from the database to resolve issues that were occurring during eBay order customer creation.
- Added a security improvement that allows merchants to generate a new Neto API key while verifying a webhook request, thereby strengthening the overall Neto webhook API security.
- Fixed an issue in which the system was showing a gateway error while recalculating a customer’s account balance with an extensive transaction history.
- Fixed an issue that caused the “**Sales By SKU**” to automatically generate a report, which would take several minutes to finish, thus causing an inconvenience to the merchant.
- Addressed and resolved an issue where a secondary sitemap was generating several errors on a merchant’s website.
- Resolved an issue in which customer details failed to export from Neto to MYOB due to missing customer records.
- Fixed an issue that was causing the system’s logic on the** My Account** page to generate a numeric username instead of creating a username from the email part preceding the “**@**” during customer registration.
- Made necessary updates and improvements that strengthen JavaScript dependencies on several Neto applications.
- Fixed a bug where users were being redirected back to the registration form after completing the sign-up process with Maropost Identity.
- Resolved an issue related to the inconsistent rounding behavior of the cubic shipping import function when set to the default m3 setting.
- Improved the **User Visibility** UI layout section on the **Shipping Option** page, resulting in a better user experience.
- Fixed issues with the multilevel pricing logic that were incorrectly ignoring the "**max qty**" price condition and choosing the first matching tier instead of analyzing all tiers to select the one with the lowest price based on quantity and predefined rules.