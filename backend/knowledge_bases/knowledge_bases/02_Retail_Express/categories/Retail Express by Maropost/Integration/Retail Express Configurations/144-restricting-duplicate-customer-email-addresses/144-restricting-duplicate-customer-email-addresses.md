---
title: "Restricting Duplicate Customer Email Addresses"
articleID: 144
category: "Integration > Retail Express Configurations"
knowledgeBase: "Retail Express"
---

# Restricting Duplicate Customer Email Addresses

You can configure **Retail Express** to restrict duplicate customer email addresses, improving customer data quality and ensuring smooth omnichannel operations between your physical stores and eCommerce platforms. This feature helps maintain accurate customer records by preventing multiple accounts with the same email address, which is essential for unified customer history across all sales channels.

Setting up duplicate email restriction involves cleaning existing data and enabling POS settings to prevent future duplicates. When properly configured, this helps ensure your customer synchronization works effectively with integrated web stores, maintaining consolidated order history and preventing customer account conflicts across retail channels.

Customers who purchase from your web store are also automatically created and saved as a Customer in Retail Express. The Customer record is treated just like a Customer who purchased an item from your physical retail outlet, visible through the same reports within Retail Express.

Likewise, customers that buy in-store and provide an email address will have an account created on your web store and will be emailed a password for future access.

This two-way communication between Retail Express and your web store uses the customer email address as the identifier, allowing you to see a consolidated order, payment and delivery history.

In order for this two-way synchronisation to work effectively, you will need to ensure there are no duplicate customer email accounts in Retail Express.

## Removing Current Duplicate Emails

This process is performed in Retail Express Back Office.

1. Perform a
2. Using the [Conditional Formatting](https://support.office.com/en-us/article/Use-formulas-with-conditional-formatting-fed60dfa-1d3f-4e13-9ecb-f1951ff89d7f) function within Excel, find and highlight all duplicate emails
3. Change the duplicate email entries to "CLEAR DATA". Upon uploading, CLEAR DATA will delete the existing email in that field.
4. Save the Customer Mass Download file
5. Perform a Customer Mass Upload to apply the changes

> **Note:** Future uploads can be restricted from importing duplicate emails (and Mobile Phone Numbers) by using the "Restrict Duplicates" feature in Mass Upload.

## Restrict Duplicates

To restrict the creation of duplicate email addresses being entered at POS, amend your customer settings. This setting is disabled in Retail Express Back Office.

![rtaImage - 2023-07-09T230919.857.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphggEAA.jpg)

1. Navigate to: **Retail Express Back Office > Settings > POS Settings > Customer Settings**.
2. Untick the option "Allow Duplicate Customer Emails"
3. Press "Save Changes"

> **Note:** You are required to log out completely from POS for these setting changes to take effect.