---
title: "Set up the Direct Xero Accounting Integration"
articleID: 1388
category: "Set up Neto > Accounting Integrations > Xero"
knowledgeBase: "Neto By Maropost"
---

# Set up the Direct Xero Accounting Integration

**This add-on was built by Maropost**

Add-ons and Integrations built in-house by Neto by Maropost are documented and supported by our customer service team. If you're having issues with this integration, [let us know](https://galaxy.maropost.com/categories/neto-by-maropost-contact-us)!

## Integration Overview

Xero is a cloud accounting application for SMEs. Over 120,000 Australian businesses use Xero to power their businesses.

Neto integrates with Xero for seamless account management. Neto's Xero integration eliminates the need for duplicate data entry and can even extend the functionality of your Xero solution. When used in conjunction with Neto Inventory or Unleashed integration, you can create a powerful ecosystem of e-commerce, inventory, and accounting.

### What Data is Integrated?

**Neto to Xero:**

- Invoices: Sales orders in Neto that are approved and completed (including cancelled orders).
- Credit Notes (RMAs)
- Payments
- Customers
- Products
- Purchase Orders

**Xero to Neto:**

- Accounts
- Tax Rates
- Customers
- Products​

> Note: Product SKUs have a maximum Length of 25, cannot contain spaces or special characters. We recommend modifying your SKUs in Xero to ensure they meet this requirement prior to integration.

### Handle Large Transaction Volumes With Ease

Neto does not limit the number of invoices you enter per month, with many Neto customers processing thousands of invoices every single day. Xero does not recommend that customers enter more than 1,000 invoices into its application per month.

Invoices will export automatically to Xero at 6 am and 6 pm by default. Depending on what status you've set up, invoices will only be exported when they are either approved or dispatched. Orders that have been invoiced after that integration start date will be exported.

For larger and growing businesses, this could become restrictive. To get around this issue, Neto has developed an innovative and scalable solution that negates the need to have more than a few transactions written to Xero each day (no matter how many invoices you enter into Neto). We call it "batching".

If you are a business that issues more than 100 invoices per day, you can turn on batching. As the name implies, batching will automatically batch invoices, payments, and credit notes by date or time and enter them into Xero as a single or just a few transactions.

Invoices, credit notes, payments, and even customer statements are all managed in Neto, and therefore, there is no need to have this data duplicated into your accounting system.

Our batch integration method still allows you to split income by account (so that you can record income by product category for example), and it still allows you to properly reconcile payment receipts by payment method and account.

Streamline your operations today and turn on Neto's batching feature for Xero!

​

### Set up your Xero Integration

1. In your Neto control panel click the **Addons** menu.
2. In the **Accounting** menu, install **Xero**.
3. Once installed you will be taken to the **Add New Integration** page to set up the **General Settings**:
  **Please Note**: If you plan to process more than 30 invoices per day through Neto you must select to batch invoices. If you do not, you will quickly exceed Xero's transaction limits.

  When complete click the **Continue** button.
4. Click the **Connect to Xero** button.
5. Click the **Click Here To Generate Your Xero Token** button.
6. **Login** to Xero if you're not already logged in.
7. Click the **Allow Access** button. If you have more than one organisation in your Xero account, select the organisation first.

> **Note:** If you're reconnecting the Xero account you won't need to select and organisation to connect to.

8. You will be taken back to Neto and your Xero information will be downloaded. Allow several minutes for this to complete.
  **Please Note**: If you're reconnecting to Xero you'll be prompted to select an organisation in Neto first.
9. Once this is done click the **Click Here To Complete Configuration Of Xero** button.
10. **Map Your Xero Accounts** to the applicable Neto accounts. If you need to create or modify an account, do so in Xero and then click **Refresh Chart Of Accounts** in Neto.
  You can map accounts on a product and payment method level. To map accounts for each payment method, go to **Settings & Tools** > **Payment methods**. To map accounts per product open each product and scroll to the **Accounting** section.

> **Note:** Mapping your accounts, customers and items ensures that orders exported to Xero are marked as paid.

  When complete click **Save** to finalise your Xero integration.

## Activate your Xero Integration

To activate (go live) your new Xero integration, change the status of the integration from "inactive" to "active".

### Running your Xero Integrated Store

Now that you have turned on your Xero integration, Neto will automatically start to export and import data between the two systems based on the settings you have defined.

### Integration Tasks

An integration task is an import or export process that pushes data to or pulls data from Xero.

To see a full list of integration tasks in Neto, go to: **Xero** > **Tasks**.

The tasks required for your integration will automatically run on the schedule set. You can edit a tasks schedule by clicking the tasks ID number. We do not recommend editing the default schedules that have been setup for you.

### Manually Run Integration Tasks

You can manually run an integration task at any time by clicking the "Run Task" button on the right side of the task. This will run the chosen task within a minute. Click "OK" when the popup appears to confirm your request.

### Handling Overpayments

Xero does not allow you to overpay an invoice in the same way that Neto does. Instead when an order is overpaid it creates an over-payment which appears as a credit in the "Credits Pending Allocation" list, under the Xero tab.

Once an overpayment is used up in Neto, you must manually assign the overpayment as a payment against its related sale in Xero.

> Important: Your bookkeeper or accountant should periodically access this log and manually apply any used credits to their related sales in Xero.

At the end of any accounting period, this log should be cleared. This does not need to be done on a daily basis, but you should try to keep this log under control.

### Advanced Configuration

Advanced configuration settings can be accessed by selecting Xero in the menu bar, then Setup & tools, and clicking either the Integration ID or Name. You'll see the system's default settings under General Settings, which we recommend sticking with. If you require Advanced/Custom Configuration for your Xero setup, please contact our integration support team for further advice.

### Common API Error Messages

Xero errors and solutions can be found in our help article here.

## Set Multiple Neto Accounts to Integrate with a Single Xero Account

There are two ways you can have multiple Neto accounts pushing data into one Xero account.

#### Manually Update Xero Tokens Daily

For this exercise, you require access to Xero's advanced configuration. Please contact [Neto Support](https://galaxy.maropost.com/categories/neto-by-maropost-contact-us) to enable this on your behalf.

One option is to manually refresh the Xero token daily for each website to sync the data between the system. To do this from the Neto dashboard, navigate to **Xero** > **Setup & Tools** and click the **Connect** button.

You will be required to set unique accounting prefixes to prevent clashes (eg, generating the same invoice number for both websites) when it's exported to Xero. This involves adding prefixes to invoice, credit note, and payment numbers exported to Xero by each Neto site. This ensures each site's transactions are always unique.

You are only required to make the following changes on one website.

1. In your Neto panel, navigate to **Xero** > **Setup & tools**.
2. Under **Integration Options**, click **Create My Own Custom Configuration** (will only appear once enabled by Neto staff)
3. Under the **Advanced Configuration** section, enter a unique prefix (two alpha characters will be fine) into the following fields:  - Invoice number prefix
  - Credit note number prefix
  - Payment transaction ID prefix
  - Overpayment transaction ID prefix

### Use Datafeeds to Process Orders on one Account

Alternatively, you can set up a datafeed that includes your orders, payments, customers, and products to be processed on one website.

On your secondary site, you will need to change your invoice prefix (default is 'N' eg, N11177) so that invoices don't clash when it's imported to your primary website. You can change this in your [Sales Order Settings](https://galaxy.maropost.com/kb/articles/1583-sales-order-settings).

Additionally, you should edit the field "export invoices to this contactID (eg, the name of your secondary store) to be a contact that you have set up specifically for the Neto website you are exporting from.

### Integration Logs

Every single invoice, customer, payment or credit note that is pushed to Xero from Neto is logged in the accounting integration logs. These logs provide in-depth reporting into the success or failure of each transaction as well as an overview of what has not yet been exported. From these logs you can also re-export any transaction at the click of a button.

## Customer Fields

The following mappings occur between Neto and Xero for customers:

| Neto | Xero |
| --- | --- |
| Company Name OR First Name + Last Name | Contact Name |
| First Name + Last Name | Contact Person |
| Email Address | Email Address |
| Username | Contact ID/Number |

Neto will first look for a contact in Xero with a Contact ID that matches the customer's username. If a contact cannot be found this way, Neto will then look for a match by Company Name and then email address. If a match is found, the contact ID for that contact in Xero is then updated with the customer's username.

> Important: If you want to merge customers, the customer username in Neto is matched to the Contact ID in Xero. Ensure that the customers are merged in the same direction on both platforms. For example, if customer x is merged into customer y in Neto, then contact x must be merged into contact y in Xero.

If you buy and sell from the same company, ensure that the supplier ID and customer username match in Neto. This ensures that purchase orders and sales made to this company are exported to the same card in Xero. Alternatively, if you want to maintain two different customer cards, then ensure the supplier ID and customer username are different.