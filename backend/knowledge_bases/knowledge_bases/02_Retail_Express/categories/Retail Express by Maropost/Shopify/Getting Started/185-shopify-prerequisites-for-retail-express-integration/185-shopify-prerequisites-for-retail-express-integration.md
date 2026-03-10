---
title: "Shopify Prerequisites for Retail Express Integration"
articleID: 185
category: "Shopify > Getting Started"
knowledgeBase: "Retail Express"
---

# Shopify Prerequisites for Retail Express Integration

You can ensure your Shopify store meets all prerequisites for **Retail Express** integration to enable successful synchronization and avoid common implementation issues. This preparation helps streamline your integration process by verifying Shopify settings, plan requirements, and configuration standards are met before establishing the connection.

Reviewing Shopify prerequisites involves checking subscription plan capabilities, verifying payment gateway configurations, ensuring theme compatibility, and confirming app installation permissions. When prerequisites are properly addressed, your integration typically leads to smoother implementation, better feature availability, and more reliable omnichannel operations from launch.

Prior to connecting Shopify to Retail Express settings will need to be updated to ensure the integration performs correctly for orders and the customer account sign up process.

> **Note:** If integrating **multiple Shopify stores** to Retail Express these settings will need to be updated on each Shopify store.

## []()Tax Settings

To ensure order values are synchronised correctly the tax settings will need to be updated.

1. Log into **Shopify**
2. Navigate to **Settings > Taxes**
3. The **Tax Regions **should display your country (if not update your Shipping Profiles)
  ![rtaImage - 2023-07-10T002955.461.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphz3EAA.jpg)
4. Click **Manage**
5. Tick **Collect GST **(this may also display "Collect Sales Tax" instead of GST depending on your region)
6. Enter your **ABN/Tax Number**
7. Click **Collect GST** (or "Collect Sales Tax")
8. Click the **Taxes** option from the left menu to return to the Taxes window
9. Update the **Tax Calculations **section to tick **All prices include tax **and **Charge tax on shipping rates**
  ![rtaImage - 2023-07-10T003006.536.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphz8EAA.jpg)
10. Click **Save**

For more information on managing tax in Shopify please refer to the [Shopify Help Center](https://help.shopify.com/en/manual/taxes).

## []()Checkout Mandatory Fields

The Shopify checkout mandatory fields should be checked to confirm the data is configured in parallel with the mandatory data for Retail Express (covered in the next section).

To adjust the mandatory fields for Shopify:

1. Log into **Shopify**
2. Navigate to **Settings > Checkout > ****Form Options**
3. Ensure the settings are configured as below
4. Press **Save **to save the changes

|  |  |
| --- | --- |
| **Field** | **Recommendation** |
| Full name | Depends on whether the First *and* Last Names have been enabled as Mandatory in Retail Express. The recommendation is to set this option to "Require first and last name" |
| Company Name | Not typically used by individual customers, so it?s recommended to set this to either Optional or Hidden. |
| Address line 2 | Not all addresses utilise a second address line, it's recommended to set this to Optional |
| Shipping address phone number | Used if there is a separate phone number for the delivery address compared to the billing. Default is for this field to be hidden. *It's recommended to have the Billing Address Phone Number as a mandatory field to ensure you can contact the customer for any concerns regarding their order. |

![rtaImage - 2023-07-10T003013.501.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgb7EAA.jpg)

## []()Customer Contact settings

Retail Express requires an email address for all customers created online. As such, the Customer Contact settings need to be updated to remove the ability to check out using a mobile number.

1. Navigate to **Settings > Checkout**
2. Locate the **Customer contact **section
3. Change the **Primary contact method **option to **Customers can only check out using email**
4. Click **Save**

> **Note:** Customers can still elect to add a phone number or email address to receive shipping updates (the option under **Additional contact method**). This will not interfere with their ability to create an account using email only.

![rtaImage - 2023-07-10T003020.131.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphzIEAQ.jpg)

## []()Configure the weight unit

Shopify will automatically assign a unit based on the default settings e.g. grams, kilograms. The default settings in Shopify are controlled via **Settings > Store Details > Standards and Formats**.

The unit selected on this window will determine how the product weights are configured in Retail Express.

> **Note:** If you select Kilograms, ensure you enter your weights into Retail Express in Kilograms. If you select grams, ensure you enter product weights in Retail Express as grams.

![rtaImage - 2023-07-10T003025.765.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphjgEAA.jpg)

## []()Products created on Shopify

Products created directly on Shopify, are not supported unless they have been mapped to an existing product in Retail Express (the Mapping process is only available during the initial synchronisation directly after Retail Express and Shopify have been connected).

Products not linked to a product in Retail Express will cause the order synchronisation to fail when purchased online. The customer will still be able to check out and pay for the goods, however the sale will not synchronise to Retail Express.

Any new products should be created in Retail Express and synchronised across.

> **Note:** If connecting **multiple Shopify stores **to Retail Express and products will appear on more than one store you will need to ensure the same SKUs are used across all Shopify stores and Retail Express.

Refer to the Shopify - Mapping Existing Shopify Products article for more information.

## []()Gift Vouchers

Retail Express uses the Gift Card functionality to allow for the purchase and redemption of Retail Express Gift Vouchers. However Gift Cards must be created in Retail Express and synchronised to Shopify (not created directly within Shopify).

Retail Express does not support the Shopify native Gift Card feature - Gift Cards created directly on Shopify.

These Shopify Gift Cards are unable to be mapped to a relevant product in Retail Express. Any orders that are created containing a Gift Card would be unable to synchronise to Retail Express. Additionally, any payment made via redeeming a Shopify Gift Card would also fail to synchronise to Retail Express, leaving the order as "Awaiting Payment".

We therefore do not recommend switching this feature on when using the Shopify Connector. Retail Express has an Integrated Gift Voucher Add-On available to purchase which will automate creating and selling gift vouchers online and instore.

If you don't wish to purchase the add-on a manual process is also available.