---
title: "Shippit Installation and Configuration"
articleID: 245
category: "Store Settings > Fulfillment Setup"
knowledgeBase: "Retail Express"
---

# Shippit Installation and Configuration

You can streamline your shipping operations by integrating **Retail Express** with Shippit's advanced shipping platform, automatically sending fulfilled orders to Shippit for label printing and courier booking. This integration helps reduce manual double-handling and improves shipping efficiency, with support for multiple fulfilment outlets and automated delivery service matching based on your configured freight types.

Properly configuring the Shippit integration helps retail operators process both in-store and online orders more efficiently, with single or multiple Shippit accounts supported depending on your multi-location pickup requirements and shipping workflow preferences.

![Untitled design.png](https://us.v-cdn.net/6038474/uploads/X6K6H9QNF5H9/untitled-design.png)
The Shippit integration combines the strength of Retail Express' inventory management with Shippit's advanced shipping features, allowing businesses to streamline their shipping processes and reduce manual double handling.

The Shippit Integration is available at **$19 per month**. To request a Licence, pleaseclick here.

> **Note:** If you are not already a Shippit customer, please [contact Shippit ](mailto:support@shippit.com)to set up an account.

Using Retail Express, staff will be able to fulfil instore and online sales, sending the order automatically to Shippit. Switching to the Shippit portal, the staff member will then be able to print address labels and book the order for delivery.

## Purchase a Shippit Integration Licence

Before you can get started with Shippit you'll need to purchase a licence from Retail Express. Please complete the Shippit Integration Request Form and we will send you through the electronic paperwork to sign.

## Find your Shippit API key

As part of the installation process you will be required to provide your Shippit API key. A Shippit API key is required for each Outlet within Retail Express, and depending on your preferences you may wish to use one or more Shippit accounts - both options are supported.

> **Note:** You can only use a Live API key with Shippit (staging sites are not supported).

| **Single Shippit Account** | All Shipment Orders are sent to the same Shippit account To use multiple Pickup Locations, you will need to manage the location for each order on Shippit directly. |
| --- | --- |
| **Multiple Shippit Accounts** | Orders are sent to the Shippit account matching the Fulfilment Outlet, making it much easier to book in the pickup and delivery. To use multiple accounts you will need to upgrade your Shippit subscription to a higher service - please contact your Shippit Account Manager for more information. |

**To access your Shippit API key:**

1. Log into your [**Shippit dashboard**](https://id.shippit.com/u/login/identifier?state=hKFo2SA2eHNUbnVWX0VhaWYyT29yWTBCQnZGSERHRGdIektSNKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDZUOUhCNVNvd1ZZbk05cDlqRjhPX1I5TjBKeE5rNGVDo2NpZNkgMTI5UzBiYWZrNmJDalZ4WmtOUDRlTDBUakh3Y0RPUWo)
2. Open the drop down menu in the top right of your screen, and click *Settings* to open your profile.
3. Navigate to the *Integrations* section.
4. Your API key for the current store is shown in the *API Secrets* section.
5. Each store has its own unique API key. Use the drop down box at the top of the page to change store and see its unique API key.

![Shippit-RE.png](https://us.v-cdn.net/6038474/uploads/J03ZJ9AOVBLO/shippit-re.png)

## Connect to Shippit

If you're already using Shippit with an external source (for example, Shopify), you will need to disconnect Shippit before enabling the integration in Retail Express. This can be done by logging into your [Shippit Connect](https://connect.shippit.com/login) site, and clicking remove/delete. Contact your Shippit Account Manager for assistance.

> **Note:** Log into your [Shippit Connect](https://connect.shippit.com/login) site to remove/delete existing Shippit integrations before enabling the integration in Retail Express. Contact your Shippit account manager for assistance.

For more information regarding Shippit Integration, you can also check:[Shippit Documentation](https://support.shippit.com/en/articles/12298845-retail-express-integration)

**To connect Shippit to Retail Express:**

1. Navigate to **Settings > Fulfilment Setup > Fulfilment Services**
2. The Shippit service will be displayed in the list as Disabled

> **Note:** If Shippit is not displayed you either don't have an active Shippit Integration Licence or have not been granted access in the Security Profile.

3. Click the **Pencil **icon to edit the settings
  ![mceclip2 (85).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphrpEAA.jpg)
4. The **API Keys **tab will be displayed, with a list of Outlets
  ![mceclip0 - 2023-07-10T001500.930.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphZXEAY.jpg)

Enter the **API Key** from Shippit against the Outlet

> **Note:** Using multiple Fulfilment Outlets? Refer to the FAQs for more information on connecting more than one Outlet with a Fulfilment Service. Note: You can only use a Live API key with Shippit (staging sites are not supported)

5. Click **Save Changes**

## Matching Freight Types with Delivery Services

Shippit uses Delivery Services to determine the best courier for each sale. In order to select a Delivery Service automatically, each of your Freight Types within Retail Express need to be matched to a Shippit Delivery Service. Currently Shippit offer Standard, Express and Priority services - contact Shippit Support to learn more about these services.

To match a Freight Type with a Delivery Service in Retail Express:

1. Click the **Delivery Services **tab
  ![mceclip3 (56).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphqMEAQ.jpg)
2. A list of the Retail Express Freight Types will be displayed on the left
3. Use the **drop-down **box on the right to select the corresponding Shippit Delivery Service
  ![mceclip0 - 2023-07-10T001512.000.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphvfEAA.jpg)
4. Use **Do not send to Shippit **for any Freight Types that should *not* be sent to Shippit e.g. Click and Collect
5. Click **Save Changes**

## Select Order Reference Number

The integration gives you the option to synchronise either of the following fields as the Order Reference:

- Retail Express Order Number (default)
- External Reference

We recommend Shopify/eCommerce API customers use the External Reference field. In Shopify, the External Order Reference is the Shopify Order ID, imported automatically through the Shopify Connector integration.

Using the External Order reference will ensure the customer has a consistent order number throughout the entire process: Shopify/web store - Retail Express - Shippit. Where an External Order Number doesn't exist (i.e. instore orders) it will default back to the Retail Express Order Number automatically for that order.

1. Click the **Settings **tab
2. Select the **Order Reference **from the drop-down
  ![mceclip0 - 2023-07-10T001516.774.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphvkEAA.jpg)
3. Click **Save Changes**

## Enabling the Integration

Once the Integration has been configured you will need to activate it.

1. Navigate to **Settings > Fulfilment Setup > Fulfilment Services**
2. The Shippit service will be displayed in the list as Disabled

> **Note:** If Shippit is not displayed you have not been granted access in the Security Profile.

3. Click the **Pencil **icon to edit the settings

  4. Click the blue **Enable **button at the bottom of the page

1. 
  ![mceclip6 (16).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgiTEAQ.jpg)

## Frequently Asked Questions

**How do I connect Multiple Fulfilment Outlets to a Fulfilment Service?**

Each Shippit account only has one default Pickup address. If using the Retail Express integration with the same key for all Outlets, they will all be sent to the same default address.

To utilise multiple pickup locations you would then have the following options:

- Manually change the Pickup Location for each order
- Create a separate Shippit Account for each Pickup Location, and configure the Shippit settings in Retail Express to use the matching API keys for each Shippit Account/Pickup Location.

If you are using Shippit for multiple Outlets, you have the option of using either a single Shippit account, or multiple accounts. Each Shippit account has only one API key per account.

You can choose whether to use the same Shippit account for all orders, or use multiple accounts (one for each Outlet).

> **Note:** A higher Shippit subscription is required - please contact your Shippit Account Manager to discuss further.