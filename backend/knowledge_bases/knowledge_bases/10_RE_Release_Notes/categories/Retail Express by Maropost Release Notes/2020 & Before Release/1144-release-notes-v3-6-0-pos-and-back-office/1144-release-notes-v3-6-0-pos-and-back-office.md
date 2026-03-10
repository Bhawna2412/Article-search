---
title: "Release Notes v3.6.0 - POS and Back Office"
articleID: 1144
category: "2020 & Before Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2025-12-01
---

# Release Notes v3.6.0 - POS and Back Office

# Release Notes v3.6.0 - POS and Back Office

**Release Date: ** 27th June 2019

In this release we've made some changes to our POS Invoice Email Templates (with the addition of a new field and the renaming of the attachment), extended the functionality of our key APIs, and made **10 **improvements and resolutions.

**In this release:**

- [New - External Order Reference field on POS emails](#)
- [Improved - POS Invoice email attachment filename](#)
- [API Update Release Notes](https://galaxy.maropost.com/s/article/Release-Notes-v3-6-0-API-change) (will open in a new window)
- [Improvements and resolutions](#improvements)

**Please note: **This release also includes the deprecation of retired APIs - MYOB and eCommerce/Webstore v1. Refer to the API Release Notes for more information.

### **New - External Order Reference field on POS emails**

In [v3.5.0](https://galaxy.maropost.com/s/article/Release-Notes-v3-5-0-Back-Office-and-PO) we introduced the feature to be able to store an External Order Reference against invoices i.e. the transaction number from an integrated web store.

With this update, you can now display the External Order Reference field on the template used to email customers from POS.

**At a glance...**

- External Order Reference from v3.5.0 shows the transaction number from integrated webstores
- This field can be added to the POS email template (optional)
- Example: Send an email from POS but display the Shopify invoice number

This feature offers a lot of benefits, including:

- Consistency for the customer to be able to refer to the same number regardless of which system the email originated from
- Easier to find transactions in either system (Retail Express or the web store) if a customer enquires on an order, as both transaction reference numbers are available on a single page

The best example of this is the ability to send an email from POS at the same time as Fulfilling the order to advise the customer their product has been shipped (the email transaction number will be consistent with the order number the customer saw when they placed the order online).

![360-posemailtemplate.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphJbEAI.jpg)Image: adding the External Order Reference to the POS email template

To add the External Order Reference field (placeholder):

1. Log into **Back Office**
2. Navigate to **Settings > POS Settings > Email Templates**
3. Click the **pencil **icon to edit the template
4. Click into the body of the email the location you would like to insert the Placeholder

> **Note:** To add it to the Subject or Custom Message you will need to add it first to the body of the email and copy/paste it to the required field

5. Click the P **Placeholder** button
  ![mceclip0 - 2023-07-09T222122.106.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphJgEAI.jpg)
6. Select **External Order Reference **from the dropdown
7. Click **OK**
8. The field will be added to the template
  ![mceclip1 - 2023-07-09T222126.824.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfZ9EAI.jpg)

> **Note:** For information on using the External Order Reference field refer to the Version 3.5.0 Release Notes.

### **Improved - POS Invoice email attachment filename**

When sending an invoice via email from POS, the Invoice PDF file attached to the email was previously called Invoice.pdf. With the new release the file will have the Invoice Number for the PDF filename instead e.g. 19-00002671.pdf.

![3.6_email_filename.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphJlEAI.jpg)

> **Note:** For more information on POS Email Templates, please see the POS Settings - Email Templates article.

### []()Improvements

Below is a list of improvements included in the latest Maintenance Release:

|  |  |
| --- | --- |
| [Outlet Configuration](https://galaxy.maropost.com/s/article/Managing-Outlets-and-Stores) | The Country is now a mandatory field on the Outlet configuration window. |
| [Shopify integration](https://galaxy.maropost.com/s/article/Connect-Shopify-to-Retail-Express) | We have improved the notifications to indicate when changes to the configuration settings have been saved. |
| [Laybys](https://galaxy.maropost.com/s/article/Create-a-Layby) | Prompts will now be displayed in POS to remind users about product fulfilment where an integrated payment has been processed but no new products have been marked to be dispatched to the customer. |
| Purchase Orders | The new [PO Matrix Template](https://galaxy.maropost.com/s/article/Release-Notes-v3-5-0-Back-Office-and-PO#po-matrix) introduced in [v3.5.0](https://galaxy.maropost.com/s/article/Release-Notes-v3-5-0-Back-Office-and-PO#po-matrix) can now be selected for printing/emailing when generating Purchase Orders using the [Stock Replenishment via PO](https://galaxy.maropost.com/s/article/Stock-Replenishment-via-Purchase-Order) feature and from the [PO Manager](https://galaxy.maropost.com/s/article/Purchase-Order-PO-Manager). It will use the template selected for the Supplier by default, but can be changed individually as required. |
| [Video Tutorials](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Fcategories%2F203272568) | The Video Tutorials Link under the Help & Support menu has been updated to a new section of the Knowledge Base, making it easier to search for training videos (stay tuned for more exciting news on this in the future). |

### Resolutions

Below is a list of resolutions included in the latest Maintenance Release:

|  |  |
| --- | --- |
| [Stock Replenishment via PO](https://galaxy.maropost.com/s/article/Stock-Replenishment-via-Purchase-Order) | Selecting a different delivery address from the PO review screen will update the Purchase Order so the correct address displays on the print out/email. |
| [Xero Accounting Integration](https://galaxy.maropost.com/s/article/Xero-Integration-Setup) | Discounts applied to taxable and non-taxable items on a Purchase Order are now correctly synchronised to Xero. |
| [Purchase Orders](https://galaxy.maropost.com/s/article/Create-a-Purchase-Order) | When searching for a product to be added to an Order you can now select the last product in the search results |
| [Offline POS](https://galaxy.maropost.com/s/article/Installing-Offline-POS) | Synchronisations can now be manually prompted for servers that have not yet performed their first synchronisation |
| [Scheduled Replenishment via Transfer](https://galaxy.maropost.com/s/article/Stock-Replenishment-via-Transfer) | After a Replenishment Run has been processed the next schedule will be created with the Sales To date correctly updated to match the new schedule. |

> **Note:** Stay up-to-date with news from the Support team - subscribe now

Want more information?

- [View all Release Notes](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Fcategories%2F115000210393)