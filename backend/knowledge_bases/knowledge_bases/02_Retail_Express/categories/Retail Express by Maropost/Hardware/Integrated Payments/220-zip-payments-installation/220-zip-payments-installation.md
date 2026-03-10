---
title: "Zip Payments installation"
articleID: 220
category: "Hardware > Integrated Payments"
knowledgeBase: "Retail Express"
---

# Zip Payments installation

You can integrate Zip payments (buy-now-pay-later) with **Retail Express** POS, enabling popular Australian payment service attracting customers seeking flexible payment options. This helps optimize your retail operations by providing popular BNPL payment option, increasing purchase conversion, and potentially increasing average transaction values through accessible payment plans.

Zip has partnered with Retail Express to be our 'Buy Now Pay Later' solution provider of choice. Zip is available as a direct integration with Retail Express POS for in-store "Buy Now Pay Later" transactions.

![rtaImage - 2023-07-10T065450.884.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppmZZEAY.jpg)
Follow the quick and easy setup instructions below, or [contact Zip directly](https://zippay.com.au/merchant/zippay-for-instore/) for more information.

## Before you begin

Before you configure the integration between Retail Express and Zip you will need to do the following:

1. Update your Security Profile to enable the feature "Zip Settings"
2. Visit the [Zip site](https://zip.co/au/business) to create a merchant account

## Step 1 - Obtain your Location ID and In-Store Key

During the configuration of the Zip settings in Retail Express you will need any relevant **Location IDs** and In-Store Key. See below for information on each of these items, and how to access it.

Once you have this information, keep this handy as you will need it during the next step of the configuration in Retail Express.

> **Note:** This information is required to configure Zip for use at POS. You will be unable to proceed until this has been obtained.

- **Location ID** - the Location ID format will be similar to 12345. Each store requires a unique Location ID.
	Contact Zip directly to acquire your Location ID, as this is not visible in the Zip Merchant Portal. You can email them directly via: [hello@partners.zip.co](mailto:hello@partners.zip.co)
- **In-Store Key - **you can access your Zip In-Store keys within your [Zip Merchant Dashboard](https://merchant.zipmoney.com.au/#/).

> **Note:** [Click here to Locate your Zip Merchant Details Guide](https://zip-int-details.api-docs.io/v1/zip-merchant-dashboard/locate-your-zip-merchant-credentials).

There are two types of In-Store Keys:

|  |  |  |
| --- | --- | --- |
| **Key Type** | **Scenario** | **Details** |
| Global In-Store Key | All stores use a single Zip account | All Zip transactions are processed through a single Head Office merchant account with multiple branches and transactions visible across stores Typically suited for a business that operates a single store OR, where multiple (all) stores are owned and operated by a single party |
| One In-Store Key per Outlet | Individual keys for each store, with their own unique Zip account | Typically used for a franchise model where each store is its own separate entity and should only see their specific transactions, not any from other stores. |

The In-Store key format will be similar to "**ihdedeHNuJiVZfdHVizKxbZYuyTMVzioR/RDBTphb7k**".

## Step 2 - Configure the Zip Settings

To configure the Zip settings:

1. Within Retail Express navigate to **Settings > Integrations > Zip**
2. Select the **In-Store Key Level **(this will determine if the In-Store Key field becomes available on a global level or against individual outlets (see the previous step if you're unsure)
3. Enter the In-Store key in the **In-Store Key** field
4. Enter the **Location ID **per outlet
5. Click **Save Changes**

## Step 3 - Enable Zip as a Payment Type

Your new Zip Payment Type needs to be enabled in Retail Express in order to be selected as a payment type at POS. To enable the payment type:

1. Within Retail Express navigate to **Settings > Payment Types**
2. Tick both **Enabled** and **POS** columns
  ![rtaImage - 2023-07-10T065500.486.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppmJ3EAI.jpg)
3. If using Loyalty and a customer should receive Loyalty Points for the purchase click the **Loyalty **tickbox
4. Click **Save Changes**
5. **Logout of POS** and back in again to refresh the changes (Note: closing the window will not apply the changes)

For more information on Payment Types, please see: How to Enable a Payment Type for use at POS. If you use an integrated Accounting solution, you will also need toMap the Payment Type to Accounting Link

## Step 4 - Get started using Zip!

Ensure you've logged out of POS and back in again to refresh the Payment Type changes. Zip is now visible as a Payment Type at POS.

![rtaImage - 2023-07-10T065505.966.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppldvEAA.jpg)
For help using Zip at POS, check out our guide to :Zip - Processing Sales and Refunds at POS

## FAQs

[Which Retail Express reports can I see Zip information in?](https://galaxy.maropost.com/kb/articles/220-zip-payments-installation#zip-reports)

As Zip is enabled as a Payment Type, it will now be available as part of your End of Day Cash Up and Income Report.

The Zip Reference number can be viewed on your POS receipts and Invoices

![rtaImage - 2023-07-10T065518.023.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppm0pEAA.jpg)
[I've got a "Gateway Error? after configuring my POS](https://galaxy.maropost.com/kb/articles/220-zip-payments-installation#collapsefaq22)

This issue is commonly associated with using the incorrect type of customer account when making a purchase.

> **Note:** zipPay and zipMoney are different products, and a **zipMoney customer account cannot transact with a zipPay merchant**, or vice versa.

Please ensure if testing your Zip transactions, that you have created the appropriate zipPay customer account, in line with what you have been registered and accredited as a merchant for by Zip

If this error occurs when a customer attempts to shop in-store, please ensure the user has the appropriate zipPay or zipMoney account.

[Yes, both zipPay AND zipMoney Customer Accounts can be used for Payment at POS  ](https://galaxy.maropost.com/kb/articles/220-zip-payments-installation#collapseThreeFAQ)

Retail Express allows and accept both zipPay and zipMoney customer payments.

However as a merchant, you will be usually registered as only one or the other, a zipPay Merchant OR zipMoney Merchant.

> **Note:** zipPay and zipMoney are different products, and a **zipMoney customer account cannot transact with a zipPay merchant**, or vice versa.

Please [contact Zip directly](https://zippay.com.au/merchant/zippay-for-instore/) if you require more information.

[Can I use Zip for multi-store and franchise business models? ](https://galaxy.maropost.com/kb/articles/220-zip-payments-installation#collapseFourFAQ)

Zip is supported for both single AND multi-store/franchise business models. There are two options available:

|  |  |  |
| --- | --- | --- |
| **Key Type** | **Scenario** | **Details** |
| Global In-Store Key | All stores use a single Zip account | All Zip transactions are processed through a single Head Office merchant account with multiple branches and transactions visible across stores Typically suited for a business that operates a single store OR, where multiple (all) stores are owned and operated by a single party |
| One In-Store Key per Outlet | Individual keys for each store, with their own unique Zip account | Typically used for a franchise model where each store is its own separate entity and should only see their specific transactions, not any from other stores. |

> **Note:** It's not currently supported to use both Global and Individual settings within the same business. If you have a multi-store operation where some stores (but not all) are owned by a single entity, we recommend using the Individual option.

Please [contact Zip directly](https://zippay.com.au/merchant/zippay-for-instore/) if you require more information.