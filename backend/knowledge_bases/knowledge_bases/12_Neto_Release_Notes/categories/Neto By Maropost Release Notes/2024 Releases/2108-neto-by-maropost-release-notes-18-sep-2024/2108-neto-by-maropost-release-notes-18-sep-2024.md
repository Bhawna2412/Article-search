---
title: "Neto by Maropost Release Notes – 18 Sep 2024"
articleID: 2108
category: "2024 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-14
---

# Neto by Maropost Release Notes – 18 Sep 2024

## **Overview**

This release contains updates of eCommerce versions **6.308.0** to **6.310.0**.

## **Enhancements and Updates**

### **PayPal error logs now visible on Cpanel and Failed Orders page**

Neto has now been updated to show PayPal error logs on the notes section and the Failed Orders Page in the Cpanel. We have added additional details to the **paypal_checkout_payer_fail** error commonly seen in the **Checkout Error** report in the Cpanel. The description of the error will now include the error messages returned by Paypal. This update will help merchants identify the root cause of the payment failure. The generic error message visible to the buyer on the Checkout page is unchanged.

- 
  This is an example of the error message displayed in Cpanel-

  ![Cpanel PayPal error log message](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20240917141612.068J1000004cgXjIAI.png)
- 
  The error message shown in Checkout Page remains unaffected-

  ![checkout page error message](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20240917141938.068J1000004cgXJIAY.png)

## **Fixes**

**Issue with recurring bills**

In some cases, if the merchant has set up recurring payments for the customers at a set interval, the system was failing to extract a payment at the end of the said interval. This issue has been fixed.

**Failure to convert 301 redirect bulk import in a correct format**

An issue has been resolved where in some cases, importing 301 redirects would allow duplicate records, and these records could not be updated. The issue was resolved by implementing better URL re-formatting (trimming the hostname and leading “/” from the URL) and displaying error messages in the case of duplicate records in the import.

**Bulk Pick/Pack jobs not releasing orders when assigned to mobile pick/packers**

An issue has been resolved where the **Assign Bulk Job to Mobile Packers** button in a bulk Pack job would not release the orders, preventing packers from dispatching the orders from the Pick n Pack mobile application. You can now use this button and use the Bulk Pack Job ID in the **Current Proc #** filter in Pick n Pack to narrow down the list of orders to pack in the Pick n Pack mobile application.

**Tax Free Product Setting can Override the NZ GST Exempt Setting on the Orders Page but Not Checkout**

In an ideal scenario, when the **Tax Free Product** setting is marked in the Product page, the system exempts any tax rates that have been included on the** currency and settings** page. In some cases, where the **NZ GST Exempt** option has been marked unchecked in their respective product pages, the system was showing inflated rates, which included the NZ tax rates, on the Checkout page, but were not reflected on the Order page. This issue has been fixed.

**Bypassing quote options on Quote Only sites to Checkout**

In some cases, it was observed that a user was able to access the Checkout page for items added to the cart while accessing a Quote Only site. The issue was found to be that the URL for the cart remains consistent across all sites, so borrowing the URL from one site can allow you to bypass another. This issue has been resolved. 

**Issue regarding Apple Pay Cancelled Payments**

When checking out with Apple Pay through Stripe Web Payments, the billing first name and last name from Apple Pay are visible to Neto together in 1 field, for e.g., “John Andrew L Smith”. Neto then needs to split that name to populate the corresponding Billing First and Last name of the Neto order.

It was found that the splitting algorithm Neto uses for the same wasn’t optimal and in some cases failed, particularly when the payer name included multiple spaces or double spaces. As a result, affected buyers would not be able to checkout, as the Apple Pay details override any details manually entered on the Checkout page.

This issue has now been resolved, thus increasing the overall successful payment rate through Apple Pay.