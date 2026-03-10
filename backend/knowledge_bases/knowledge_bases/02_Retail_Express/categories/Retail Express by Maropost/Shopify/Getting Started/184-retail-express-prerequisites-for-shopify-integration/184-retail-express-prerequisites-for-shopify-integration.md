---
title: "Retail Express Prerequisites for Shopify Integration"
articleID: 184
category: "Shopify > Getting Started"
knowledgeBase: "Retail Express"
---

# Retail Express Prerequisites for Shopify Integration

You can ensure your **Retail Express** system meets all prerequisites for Shopify integration to avoid implementation delays and ensure smooth synchronization from the start. This preparation helps optimize your integration success by verifying system configuration, data quality, and required settings are in place before connecting your eCommerce platform.

Reviewing Retail Express prerequisites involves checking product configurations, verifying outlet setups, ensuring data quality standards, and confirming licensing requirements. When prerequisites are properly addressed, your integration typically leads to faster implementation, fewer post-launch issues, and more reliable synchronization across retail channels.

Prior to connecting Shopify to Retail Express, the Retail Express settings will need to be updated to ensure users have access to all the settings and the integration performs correctly. For example, if the Checkout mandatory fields are not updated, the ability to process online orders within POS will be impacted.

## []()Enable Permissions to Shopify Integration

Before the systems can be connected access permissions must be granted to the appropriate users within Retail Express.

1. Log into **Retail Express **as an admin user, or another user with the rights to configure Profile Security
2. Navigate to **Staff > Profile Security**
3. Click **Edit Features **For the appropriate profile
4. Tick the **Shopify Integration **option
5. Click **Save Changes**

![rtaImage - 2023-07-09T231256.303.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphjoEAA.jpg)

## []()Enable "Shopify Payments" Payment Type

You will need to enable the "Shopify Payments" Payment Type to be able to select this method when connecting the two different payment methods between systems.

1. Within Retail Express, navigate to **Settings > Payment Types**
2. Enable the **Shopify Payments **Payment Type; this will be used as part of the connection process later

> **Note:** You will only need to tick the first option so the Payment Method is available to the Shopify Integration, but not available for users to select within POS etc. If using Loyalty, tick the last option to ensure customers will accrue loyalty points for purchases made using this method.

  ![rtaImage - 2023-07-09T231301.702.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgu1EAA.jpg)
3. Click **Save Changes**

## []()Prevent Duplicate Customer Accounts

If you have duplicate customer accounts within Retail Express you will **not be able to synchronise your customers to Shopify**.

![rtaImage - 2023-07-09T231306.357.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphkXEAQ.jpg)
To prevent duplicate accounts:

1. Navigate to: **Retail Express Back Office > Settings > POS Settings > Customer Settings**.
2. Untick the option "Allow Duplicate Customer Emails"
3. Press "Save Changes

If you need to remove any duplicate accounts already in your system, refer to the Restricting Duplicate Customer Emails article for more information.

## []()Order Mandatory Fields

Retail Express contains the ability to mark some of the fields within POS as mandatory for a customer, so that the sale cannot be processed without that information. However some of this information may not synchronise from Shopify. When the order is opened in POS, without those fields being completed the order will not be able to be processed.

|  |  |
| --- | --- |
| **Non-mandatory** fields | - Company - Custom Reference - Customer Type - Home Outlet - Date of Birth - Address 2 |
| **Mandatory Fields** based on the individual business requirements * Bear in mind this will affect both online and in-store sales; refer to the Shopify - Configure Shopify for Retail Express Integration article for information on Shopify mandatory fields | - Email - First Name - Last Name - Address 1 - Suburb - Postcode - Phone - Country |

To configure the required fields:

1. Log into Retail Express
2. Navigate to **Settings > POS Settings > Customer Settings**
3. Locate the field **Required fields for customers**
4. Update the preferences as required
5. Click **Save Changes**

![rtaImage - 2023-07-09T231312.317.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphkcEAA.jpg)