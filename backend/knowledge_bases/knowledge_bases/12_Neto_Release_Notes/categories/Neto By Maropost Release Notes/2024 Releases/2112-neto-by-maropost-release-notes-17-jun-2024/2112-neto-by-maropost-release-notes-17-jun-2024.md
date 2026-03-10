---
title: "Neto by Maropost Release Notes – 17 Jun 2024"
articleID: 2112
category: "2024 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-14
---

# Neto by Maropost Release Notes – 17 Jun 2024

## Overview

This release contains updates of eCommerce versions **6.298.0** and **6.299.0**, which include the upgrades to Stripe integration.

## **Enhancement**

### **Stripe Payments Upgrades**

In this update, Neto has upgraded its integration to the Stripe Payment Element, allowing seamless payments with significantly lower downtime for payment processing.

We have introduced a few enhancements to the Stripe Payment method, allowing enhanced visibility over transactions via [**payment statuses**](https://galaxy.maropost.com/s/article/stripe-credit-card-payment-method#Payment_Statuses) and an improved UI for credit card forms.

We have also introduced [**Stripe’s BNPL options**](https://galaxy.maropost.com/s/article/stripe-credit-card-payment-method#Stripe_BNPL_Configs) like Afterpay, Klarna, and Affirm that allow customers to split their purchases into manageable instalments via flexible payment options.

#### What’s New?

**Stripe Payment Element**

Following the upgrade, you will notice these changes:

- 
  You now have visibility over **Incomplete** transactions in your Stripe dashboard. You can now identify the incomplete transactions on the Stripe dashboard. The transactions which have not reached completion are shown as incomplete.

  ![netoreleaseimg1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/netoreleaseimg1.068J1000001X8KxIAK.png)

  The incomplete status indicates a ***payment intent**** *from the customer’s end, acting as a placeholder for the beginning of a payment transaction. This status is not a reflection of a technical issue.
- 
  The UI of the Stripe Payment Element credit card form has been updated as shown below - Change in UI of credit card form on Checkout.

  ![netoreleaseimg2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/netoreleaseimg2.068J1000001X8L7IAK.png)

  Customers on eligible devices or web browsers may also see an option to use their Google Pay or Apple Pay card wallets.

  ![netoreleaseimg3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/netoreleaseimg3.068J1000001X8LCIA0.png)

#### **What action is required?**

Though the upgrade will be seamless and does not require any action from you, we do recommend:

- 
- 
- 

#### **Introducing Stripe BNPL options**

You will now be able to **configure BNPL options** via Stripe in Neto. Use payment methods like Afterpay, Klarna, and Affirm to split payments accordingly, which enhances affordability for the customers. You will also be able to install a widget for the same for your webstore.