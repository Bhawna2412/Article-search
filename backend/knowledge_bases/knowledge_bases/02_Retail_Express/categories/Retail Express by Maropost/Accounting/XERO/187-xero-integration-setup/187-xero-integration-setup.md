---
title: "Xero Integration Setup"
articleID: 187
category: "Accounting > XERO"
knowledgeBase: "Retail Express"
---

# Xero Integration Setup

You can set up Xero accounting integration with **Retail Express** to automate financial data synchronization and reduce manual accounting work. This integration helps improve financial accuracy and efficiency by automatically transferring sales data, inventory movements, and purchase information to your accounting system, supporting streamlined bookkeeping and accurate financial reporting.

Setting up Xero integration involves configuring connection settings, mapping chart of accounts, establishing synchronization preferences, and defining data transfer rules. When properly configured, this integration typically leads to reduced accounting overhead through automation, improved financial accuracy through direct data transfer, and better financial visibility across your retail operations.

Retail Express offers an integration with the Xero accounting package, synchronising data to create invoices, journals and more.

View how data is synchronised with theXero Data Synchronisation Overview

[▶ Embedded Video](https://player.vimeo.com/video/292259687)

## Step 1 - Connect Retail Express to Xero

To set up a new integration:

Ensure you have a Xero account with an organisation set up.  For assistance visit [Xero Central Support](https://central.xero.com/s/) or contact your Accountant or Bookkeeper.

1. Navigate to **Retail Express Back Office >****Settings > Integrations > Xero**
2. . If this is your first integration, you will be directed to connect to Xero immediately![rtaImage - 2023-07-10T061950.221.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pplPYEAY.jpg)
3. Click **Connect to Xero**
4. Click **Allow Access **to enable Retail Express access to Xero (to automatically upload accounting data on your behalf)
5. You will be re-directed to the Retail Express setup page to complete the configuration.

## Step 2 - Configure the Integration Overview tab

The Overview tab contains two sections:

- **Configuration Details** - to be completed
- **Configuration Status** - initially these statuses may be red. As you complete the configuration, each status will update to green OK.

Complete the fields as per below:

![rtaImage - 2023-07-10T061956.011.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pplPiEAI.jpg)
![rtaImage - 2023-07-10T062000.934.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pplPnEAI.jpg)

|  |  |
| --- | --- |
| **Field** | **Details** |
| Name | Your integration will be given the same name as your Xero organisation to assist in identifying where your data will be uploaded |
| Accounting Method | Currently, only the **Accrual method** is supported - please confirm this suitability with your bookkeeper or accountant |
| Use Direct Cost Provisioning | By default, Direct Costs (including duty, freight and any miscellaneous charges) are expensed on receipt, therefore all other cost transactions only relate to the Buy Price.  If you choose to use Direct Cost Provisioning these direct costs will be provisioned for in an Asset account and then expensed along with the Buy Price as the Cost of Goods Sold. |
| Include Supplier Returns in Purchases | Supplier Returns will send data to your accounting system when the Credit Note is processed (not when creating a Supplier Return). |
| Email address for Alerts | The email address to be notified if there are any issues with uploading data. Once you've entered your email address the **Configuration Status** of Email Address for Alerts update to green. |

## Step 3 - Select Stores

The **Stores tab** allows you to configure which Outlets in Retail Express you would like to upload to Xero.

> **Note:** Each Store can only be uploaded in a single integration (you cannot create separate integrations to the same Xero Company in order to use different account codes per store).

![rtaImage - 2023-07-10T062007.151.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphw0EAA.jpg)
You can configure one Xero integration per Xero Company:

- If you have multiple stores that are all managed in one Xero Company, you will need to create one Xero Integration and select each store on the Stores tab (each store can be separated by Tracking Category)
- If you have multiple stores that are each managed in a separate Xero Company, you will need to configure one Xero Integration per Xero Company and choose the correct store for the company in the Stores tab

**Fields to be configured:**

|  |  |
| --- | --- |
| **Field** | **Details** |
| Include in Upload | Used to select any Stores to be integrated |
| Tracking Category | Used to filter reports  > **Note:** We recommend setting up a Tracking Category with a different option per store (optional). |

Tracking Categories need to be created in Xero prior to being available via the drop-down. To add additional Tracking Categories to Xero:

1. Click **Save All**
2. Open Xero to set up up your Tracking Categories
3. Return to this screen when complete and click **Refresh Configuration**

For more information about Tracking Categories in Xero, please see:Xero Central - Track Transactions

## Step 4 - Transaction Types

To exclude a Transaction Type from Xero simply untick the option and click **Save all**.

![rtaImage - 2023-07-10T062012.423.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pplQ2EAI.jpg)

## Step 5 - Account mappings

The **Accounts tab** allows you to choose which General Ledger Accounts are used for different transaction types. These will initially be pre-populated with default accounts.

> **Note:** Creating new accounts specifically for your integration keeps your Retail Express data separate from other data in Xero, making reconciliation easier.

![rtaImage - 2023-07-10T062016.754.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppj8REAQ.jpg)
If you would like to create and use a pre-populated default **Account**, click **Create This Account** or** **click **Create All Accounts** to create them in bulk.

The Accounts may take a moment to create. If you see a processing icon, please wait until this has disappeared and the status changes to OK to ensure the account creates successfully in Xero.

![rtaImage - 2023-07-10T062021.669.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pplQqEAI.jpg)
If you are using existing accounts in your Xero organisation, these will be filtered by the Account Type required for the type of transaction.

For more information:

- Chart of Accounts in Xero - [Xero Central - Chart of Accounts](https://central.xero.com/s/topic/0TO1N0000017kp2WAA/chart-of-accounts#business)
- Which transactions flow to which accounts - refer to the Retail Express - Integrated Data article

## Step 6 - Payment mappings

The **Payments tab** lets you configure which accounts your Payments should integrate to.

![rtaImage - 2023-07-10T062026.358.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pplR5EAI.jpg)

|  |  |
| --- | --- |
| **Field** | **Details** |
| Default Account for Payments | If you already created the default Payment Clearing account via the Accounts tab, the status will display as OK - Please note you can select an Existing Bank Account in Xero if preferred (Please ensure an Account Code has been allocated so the account will be visible by the integration - **Refresh Configuration** once updated in Xero) See illustration below: |
| Manual Configuration (Optional) | Select any specific Payment Types which should upload to an alternate account, including existing Bank Accounts. In order to choose a different account, you will need to make sure your Xero account has been enabled for payments and Bank Accounts have an Account Code allocated in Xero (Please ensure an Account Code has been allocated so the account will be visible by the integration -** Refresh Configuration** once updated in Xero) See illustration below: |

For more information about setting up an account to receive payments in Xero, please see:Xero Central - Enable payments to an account

![rtaImage - 2023-07-10T062032.894.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pplReEAI.jpg)

> **Note:** Gift Voucher redemption will upload to your Gift Voucher account as set up on the Accounts tab.Direct Deposits will be uploaded as individual payments. Your other payment methods will be uploaded as a total value per payment method, per store, per day. (). Because Direct Deposits are handled differently, they may show the specific Account in the drop-down, even if you are using the default Account.This behaviour can be changed if required through the Payment Types area in Settings.

## Step 7 - Tax Rate mappings

The **Tax tab** allows you to configure which tax rate to use for each transaction.

![rtaImage - 2023-07-10T062045.245.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjmvEAA.jpg)
Xero will already have recommended tax rates set up named based on the type of transaction.

For more information on Tax Rates in Xero, please see:[Xero Central - Tax rates](https://central.xero.com/s/topic/0TO1N0000017kpZWAQ/tax-rates#business)

## Step 8 - Review and Enable the Xero Integration

Once you've completed your configuration, return to the **Overview tab** to ensure the Configuration Status is green and OK for all settings.

You can now enable the integration.

> **Note:** If you're not ready to begin uploading data yet, leave the configuration as disabled.![rtaImage - 2023-07-10T062049.987.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pplQmEAI.jpg)

To enable the configuration:

1. Click on the **Overview** tab
2. In the **Configuration Details **section set the **Status **field to **Enabled**
3. Click **Save All**
4. Select the **First Date for Upload to Xero** (the selected date to begin your upload)
  ![rtaImage - 2023-07-10T062054.803.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppkx6EAA.jpg)

> **Note:** This date can be back-dated by 3 months from the start of the current month e.g. if you are setting up a new integration on the 5th of September you can backdate it to the 1st of June

5. Click **Continue **to confirm the upload date and confirm the setup

## Data Being Sent From Retail Express to Xero

The table below represents how information from Retail Express is synchronised with Xero, including the transactions created.

For more detailed information regarding how transactions are integrated, please see:Accounting Integrations - Integrated data sent from Retail Express

|  |  |
| --- | --- |
| **Retail Express** | **Xero** |
| Cash and Carry sales Layby movements Debtors movements Cost of Goods Sold (COGS) Freight on sales Voucher sales Expired Vouchers Surcharges | Daily Invoice (per store) |
| Payments (per Payment Type) | Summary Payment (on Store Invoice) |
| Direct Deposits | Individual Payments (on Store Invoice) |
| Purchase Orders (received) | Bills (per Purchase Order) |
| Direct Costs | Bills (per Purchase Order) |
| Suppliers | Contacts |
| Duty | Manual Journal |
| Stock Transfers | Manual Journal |
| Stock Adjustments | Manual Journal |
| Cash Up Variances | Manual Journal |
| Purchase Variance | Manual Journal |
| Petty Cash (Money In/Out) | Manual Journal |