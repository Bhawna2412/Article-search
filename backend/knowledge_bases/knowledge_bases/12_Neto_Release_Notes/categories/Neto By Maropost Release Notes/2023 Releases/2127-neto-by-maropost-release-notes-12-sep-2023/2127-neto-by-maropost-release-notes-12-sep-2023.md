---
title: "Neto by Maropost Release Notes – 12 Sep 2023"
articleID: 2127
category: "2023 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-14
---

# Neto by Maropost Release Notes – 12 Sep 2023

## **Overview**

This release includes eCommerce releases **6.265.0** and** 6.266.0**.

## **Enhancements**

### **Increased Password Security**

The password requirements have been updated in compliance with the **Payment Card Industry Data Security Standard** (PCI DSS). The introduction of complexity in passwords is done to ensure greater account security and data integrity.

As per the current password requirements, the password:

- 
- must include at least one of the following: upper case letter, lower case letter, number, and symbol.

You’ll notice that the validation messages are in place to guide you through password setup and reset processes.

![passwordvalidation](https://us.v-cdn.net/6038474/uploads/attachments/migrated/passwordvalidation.0685g00000GxcJnAAJ.png)

### **Introduced Express Shipping Option in Catch Integration**

You now have the ability to map the express shipping option in your Catch integration. Catch marketplace has started offering express shipping and in accordance, we have introduced the express shipping option in Catch integration.

![Catch Shipping Option](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CatchShippingOption.0685g00000GxcLFAAZ.png)

## **Fixes**

Fixed an issue in which merchants were facing mail delivery issues if they were on the shared Mailgun account and used a Gmail, Hotmail, or Outlook email address as their system email address or staff email address.