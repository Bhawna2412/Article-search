---
title: "Importing Contacts from Infusionsoft/Keap Transactions"
articleID: 767
category: "Partner Integrations > Integration with Keap"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Importing Contacts from Infusionsoft/Keap Transactions

You can automatically capture leads from both successful and failed InfusionSoft transactions, ensuring no potential customers are lost during the purchase process. This integration helps optimize your email marketing follow-up by enabling targeted recovery campaigns for abandoned purchases and welcome sequences for new customers, improving conversion rates through timely and relevant messaging.

When properly configured, transaction-based contact import enables sophisticated e-commerce email campaigns, including cart abandonment recovery sequences and post-purchase nurturing workflows that drive repeat business and customer loyalty.

Using the **Product Contact Import** option, you can import the contacts that are in the process of purchasing a product. It fetches contacts from both failed and successful transactions.

### Setting Up the Product Contact Import Integration

Perform the following steps to set up the integration for importing new contacts from Infusionsoft into Maropost's list:

1. On the Connections page, in the Infusionsoft tab, click Add Settings.
2. 
  In the Integration Types dialog box, click Product Contact Import.

  ![Product_Contact_Import_Option.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkV5E.05T5g00000BkV5EEAV.png)
3.   - **Name -** Enter a name for the integration settings.
  - **API URL -** Enter the URL of your Infusionsoft account. For example, [https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsignin.infusionsoft.com%2Flogin%3Fservice%3Dhttps%253A%252F%252Fpd208.infusionsoft.com%252F%253Fjwt%253Dtrue](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsignin.infusionsoft.com%2Flogin%3Fservice%3Dhttps%253A%252F%252Fpd208.infusionsoft.com%252F%253Fjwt%253Dtrue)[**https://pd208.infusionsoft.com**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fpd208.infusionsoft.com).
  - **API Key -** Enter your Infusionsoft API key. To find this key, log into your Infusionsoft account and select Admin >> Settings >> Application, then scroll down to the API section.
  - **Integrate with list -** Select the name of the list to which you want to add the contacts.
  - **Import contact tags -** Select the option if you also want to include the Infusionsoft tags during the import process. If selected, then the Infusionsoft tags will be created in Maropost and the contact records will show the corresponding tags.

  On the Product Contacts Imports Settings dialog box, provide the configuration details for the integration and then click Save.

  ![Product_Contact_Import.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkV5F.05T5g00000BkV5FEAV.png)

  You can select from or enter the details of the integrations as follows:
4. After you've saved your configuration, you'll see the integration displayed in the list of integrations. Copy the full POST URL.
5. Next, log into your Infusionsoft account and navigate to Main menu >> E-Commerce >> Actions. Under Default settings, click Contact creation Action.
6. Select 'Send an HTTP post to another server' and paste the POST URL copied from Maropost, and then click Save.

## Related Articles

**Integrations & APIs:**

- [Integrations Overview](https://galaxy.maropost.com/kb/articles/32-integrations-overview) - Understand available integration options
- [Using Maropost Identity App](https://galaxy.maropost.com/kb/articles/38-using-maropost-identity-app) - Set up identity management integration

**Contact Management:**

- [Creating a Contact List](https://galaxy.maropost.com/kb/articles/4-creating-a-contact-list-new) - Import contacts via API integrations
- [Email Contact Lists Overview](https://galaxy.maropost.com/kb/articles/13-email-contact-lists-overview-legacy) - Manage contacts through integrations

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Trigger campaigns via API