---
title: "Xero integration update - 15th October"
articleID: 1257
knowledgeBase: "Help Articles"
lastUpdated: 2025-12-01
---

# Xero integration update - 15th October

# Xero integration update - 15th October

**Release Date: 15 October 2019**

Following the recent release of [Direct Cost Provisioning](https://galaxy.maropost.com/s/article/1Frequently-Asked-Questions-Accounting-Integrations-FAQs#general-import) we've made a change to the Duty journals in our Xero integration to make the functionality more consistent.

> **Note:** This change only impacts the Retail Express direct integration to Xero (MYOB, Accounting Link or third-party integrations are not affected)

### **What is the change?**

Where Duty is charged on a Purchase Order, these charges will be integrated to Xero as a separate journal (as they're invoiced by a third-party rather than your supplier).

Currently, these journals:

- Debit your Duty account
- Credit your Expense or Provisioning account.

In order to reflect the correct provisioning and ensure consistence across both methods, this has been changed to:

- Debit your Expense or Provisioning account
- Credit your Duty account

### **Will you be impacted?**

If you use the Direct Cost Provisioning feature, you will be impacted - please refer to the action points below.

This change *won't* impact you if:

- You don't use the Duty field on the Stock Receipt screen in Retail Express
- You don't use a specific Duty account in your accounting package and run duty through your Direct Cost account.

The [Purchase Order Reconciliation Report](https://galaxy.maropost.com/s/article/1Purchase-Order-Report?utm_source=hotfix-email&utm_medium=email&utm_campaign=xero-integration-changes) can provide details of duty processed through Retail Express for a given time period.

> **Important:** You should discuss these changes and any impact on your specific accounts with your Accountant/Bookkeeper.  As everyone?s business and accounts are handled differently and there are many other external transactions that are entered into your accounting package, we are unable to provide individual advice.

**Using Direct Cost Provisioning:**

If you are using our new Direct Cost Provisioning feature (i.e your Duty and Freight are held in an asset account and direct costs are expensed with Cost of Goods) you should do the following:

**Not using Direct Cost Provisioning:**

If you use the Duty field on the Stock Receipt screen in Retail Express or use a specific Duty account in your accounting package, *and** *you immediately expense Duty and Freight:

- The Journal is running from one expense account to another - it is up to you and your Accountant/Bookkeeper if you wish to do any manual journals to balance your accounts
- Assuming you are currently coding Duty invoices to your Direct Cost expense account you should code these to your Duty account from now on.

> **Note:** Stay up-to-date with news from the Support team - subscribe now

Want more information? Find related articles here:

- [Zero Integration - Setup and FAQs](https://galaxy.maropost.com/s/article/Xero-Integration-Setup)