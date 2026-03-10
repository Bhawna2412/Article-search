---
title: "Afterpay Barcode Integration (Legacy)"
articleID: 219
category: "Hardware > Integrated Payments"
knowledgeBase: "Retail Express"
---

# Afterpay Barcode Integration (Legacy)

You can accept Afterpay buy-now-pay-later payments in **Retail Express** stores through barcode-based integration, enabling popular payment option attracting customers who prefer installment payments. This helps optimize your retail operations by expanding payment options, attracting customers preferring BNPL services, and increasing average transaction values through flexible payment terms.

![afterpay_integration.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmGzZEAU.jpg)
Afterpay is available as a direct integration with Retail Express for in-store transactions. With Retail Express, customers can process a live payment at POS.

> **Note:** The Afterpay Barcode method will not be accepted in-store after 30 September. Click here for information on using the new Afterpay Card payment method.

## Setting up Afterpay Barcode

Follow the quick and easy setup instructions below. Once you have completed the Setup you can proceed with Processing Sales and Refunds at POS. Before you can configure Retail Express you will need to enable your security profile to have the required access which is detailed below also.

### Step 1 - Contact Afterpay (account sign up/migration)

> **Important:** If you're an existing Afterpay customer you will **still need to contact Afterpay before you can proceed.**

**You can sign up for an account by submitting your details on the **[**Retail Express Afterpay Integration page**](https://retailexpress.com.au/pos-integrations/payments/afterpay#afterpay-form-container)**. This page contains useful information on using Afterpay, including the benefits of adding this integration to your Retail Express POS system.**

**Once you enter your information a representative will be in touch with you to discuss further. Only once this is complete will you be able to proceed with the Retail Express configurations below.**

### **Step 2 - Obtain your Afterpay Information**

During the configuration of the Afterpay settings in Retail Express you will need specific information from Afterpay:

1. Merchant ID (either for all stores or an individual ID per location)
2. Device Name
3. Device Secret

> **Note:** This information is only available once you have completed the merchant signup process with Afterpay.

[Merchant ID](https://galaxy.maropost.com/kb/articles/219-afterpay-barcode-integration-legacy#merchant-id)

The merchant ID is configured within Retail Express, used in the Scope setting to determine whether the ID is applicable to all stores, or if each Outlet will have their own unique ID and currency.

|  |  |  |
| --- | --- | --- |
| Scope | Scenario | Details |
| Separate Settings for each Store | All stores use a single Afterpay account | Typically used for franchises or international retailers. Each Outlet is its own separate entity with its own individual transactions in a specified currency. |
| Same Settings for each Store | Individual Merchant IDs and Currency for each store | All Afterpay transactions are processed through a single merchant account. Typically suited for a business that operates a single store, or where all stores are owned and operated by a single party. |

[Devices (Device Name and Secret)](https://galaxy.maropost.com/kb/articles/219-afterpay-barcode-integration-legacy#device)

Each Retail Express Register that will be processing Afterpay payments must be registered as a Device (Afterpay will provide you with this information). Once registered these Devices must have their credentials registered in Retail Express (signalling to Afterpay it is active and ready-to-go).

> **Note:** This information is required to configure Afterpay for use at POS. You will be unable to proceed until they have provided you with this information.

### Step 3 - Configure Retail Express Security Profile settings

Before you can enable and configure the Afterpay integration you must configure your Retail Express Security Profile permissions. This will allow you to access the integration settings in the Back Office of Retail Express.

1. Navigate to Staff > Profile Security in the Back Office
2. Click Edit Features for the appropriate Profile
3. Tick the Afterpay Integration feature
4. Click Save
5. Log out of Retail Express to refresh the settings

![profilesecurity_afterpay.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmGJjEAM.jpg)

### Step 4 - Configure the Afterpay Merchant Settings

Once you have been provided with the integration information by Afterpay you will be able to proceed with enabling the integration following the steps below.

> **Note:** Once the Afterpay Integration has been enabled you will not be able to process a manual Afterpay transaction through POS using the Afterpay Payment Type (all sales from that point on use the integration method).

To configure the Afterpay Merchant settings:

1. Within Retail Express navigate to Settings > Integrations > Afterpay
  ![integrations_afterpay_menupath.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmCb0EAE.jpg)
2. Select a Scope
3. Enter the Merchant ID (this will be either a single field or per Outlet)
4. Enter the Currency (this will either be a single field or per Outlet)
5. Click Save
  ![integrations_afterpay_merchantsettings.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmGT0EAM.jpg)

### Step 5 - Activate Devices (Retail Express Registers)

Previously each Register was configured with Afterpay as a Device (reminder: you will need to contact Afterpay to create a new Device). Each Device will need to be activated within Retail Express.

> **Note:** If you have a Register that you're not planning on using with Afterpay (for example Back Office registers used for admin purposes only) it's not necessary to be a registered Device.

1. Navigate to Settings > Integrations > Afterpay > Devices tab
2. Select a Store
3. Select a Register

> **Note:** You can create additional Retail Express Registers at any time via Settings > POS Settings > Registers

4. Enter the Afterpay Device Name
5. Enter the Afterpay Device Secret
6. Click Activate

![integrations_afterpay_devicesettings.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmH3vEAE.jpg)

### Step 6 - Configure Afterpay Payment Type

The final step is to configure the Afterpay Payment Type for use in POS, and any loyalty rules if required.

1. Navigate to Settings > Payment Types
2. Scroll down to the Afterpay Payment Type
3. Tick the options as required (ensure Enabled and POS are enabled as a minimum)
4. Enter a Loyalty Multiplier to enable sales made using Afterpay to accrue Loyalty Points e.g. 1 for normal points, 2 for double points etc
5. Click Save Changes

![paymenttypes_afterpay.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmH4ZEAU.jpg)

> **Note:** The Afterpay Payment Type is located further down the list; this screenshot is edited to make it easier to review the purpose of each tick boxes.

For more information on configuring Payment Types refer to the Settings - Payment Types article.

## []()Frequently Asked Questions

[Which reports can I see Afterpay information in?](https://galaxy.maropost.com/kb/articles/219-afterpay-barcode-integration-legacy#afterpay-reports)

As Afterpay is an enabled Payment Type it will be displayed in the Income Report and End of Day Cash Up. For all other sales-based invoices there will just be a sales total rather than a specific payment type.

The Afterpay payment method, including the Reference Number, is also displayed on the POS Receipt and Invoice.

![pos_invoice_afterpaypaymenthistoryreference.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmH4oEAE.jpg)
[Can I use Afterpay for multi-store and franchise business models?](https://galaxy.maropost.com/kb/articles/219-afterpay-barcode-integration-legacy#afterpay-multiplestores)

Afterpay is supported for both single and multi-store/franchise business models. Using the Scope setting you will be able to select an appropriate option for your business.

|  |  |  |
| --- | --- | --- |
| Scope | Scenario | Details |
| Separate Settings for each Store | All stores use a single Afterpay account | All Afterpay transactions are processed through a single merchant account. Typically suited for a business that operates a single store, or where all stores are owned and operated by a single party. |
| Same Settings for each Store | Individual Merchant IDs and Currency for each store | Typically used for franchises or international retailers. Each Outlet is its own separate entity with its own individual transactions in a specified currency. |

> **Note:** it's not currently supported to use both Global and Individual settings within the same business. If you have a multi-store operation where some stores (but not all) are owned by a single entity we recommend using the individual option.

Please [contact Afterpay directly](https://www.afterpay.com/en-AU/for-retailers) if you require more information.

[Can I use Afterpay with the Shopify integration?](https://galaxy.maropost.com/kb/articles/219-afterpay-barcode-integration-legacy#afterpay-shopify)

Afterpay is available as an Additional Payment Provider within Shopify, meaning that it can be offered to your customers online. As orders are placed online payments are taken and processed online directly by Afterpay and Shopify, and orders are synchronised to Retail Express (including the total paid and the payment method used). To specifically have this sale show that Afterpay was the payment method you will need to ensure that you have mapped the Payment Method.

Mapping the Payment Method

Within the Retail Express Shopify settings you will be able to map the Afterpay payment type in Retail Express to the Shopify Afterpay payment method. This means that as orders are received from the online web store Retail Express will be able to identify Afterpay as a payment type and update the order in Retail Express to reflect this selection.

If the payment method is not mapped it will revert to the default Payment Type.

To map the Afterpay Payment Type navigate to Settings > Integrations > Shopify and edit your integration settings to map this payment method (refer to the Shopify - Connect to Retail Express article for more information).

Processing Shopify Refunds with Afterpay

Orders received from the Shopify integration will not have their Afterpay reference number stored in Retail Express. Only orders and payments made at POS contain this information and display the reference on invoices and receipts.

If processing a refund for a sale placed online you will need to refer to Shopify to obtain the Reference number prior to processing a refund through Retail Express. Refer to the Afterpay - Processing Sales and Refunds at POS article for detailed information on the Refund process.

[I purchased a new Outlet with Retail Express, can I use Afterpay in this Outlet?](https://galaxy.maropost.com/kb/articles/219-afterpay-barcode-integration-legacy#new-outlet)

Yes, you can, but your settings won't be automatically populated.

You'll first need to contact Afterpay to add any new devices (Registers) that will be connected to Afterpay. Depending on your settings, you may also need a new Merchant ID (if each Outlet in Retail Express has its own unique Merchant ID).