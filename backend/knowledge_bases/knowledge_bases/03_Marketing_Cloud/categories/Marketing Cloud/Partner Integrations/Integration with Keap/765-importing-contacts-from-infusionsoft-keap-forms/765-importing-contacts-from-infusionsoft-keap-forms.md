---
title: "Importing Contacts from Infusionsoft/Keap Forms"
articleID: 765
category: "Partner Integrations > Integration with Keap"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Importing Contacts from Infusionsoft/Keap Forms

You can automatically capture leads from InfusionSoft order forms and import them directly into Marketing Cloud contact lists, eliminating manual data entry and ensuring immediate follow-up opportunities. This integration streamlines your workflow by connecting e-commerce activity with email marketing campaigns, enabling you to nurture new customers and drive repeat purchases through targeted messaging.

When properly configured, form-based contact import helps optimize your email marketing effectiveness by ensuring no potential customers are lost in the transition between purchase completion and marketing follow-up communications.

Use the **Form Contact Import** option to import the contact information (such as email, first_name, last_name, etc.) from the Infusionsoft order forms into Maropost's list.

### Setting Up the Form Contact Import Integration

Perform the following steps to set up the integration for importing contacts from Infusionsoft forms into Maropost's list:

1. On the Connections page, in the Infusionsoft tab, click Add Settings.
2. 
  In the Integration Types dialog box, click Form Contact Import.

  ![Form_Contact_Import_Option.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWpB.05T5g00000BkWpBEAV.png)
3.   - **Name -** Enter a name for the integration settings.
  - **API URL -** Enter the URL of your Infusionsoft account. For example, [https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsignin.infusionsoft.com%2Flogin%3Fservice%3Dhttps%253A%252F%252Fpd208.infusionsoft.com%252F%253Fjwt%253Dtrue](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsignin.infusionsoft.com%2Flogin%3Fservice%3Dhttps%253A%252F%252Fpd208.infusionsoft.com%252F%253Fjwt%253Dtrue)[**https://pd208.infusionsoft.com**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fpd208.infusionsoft.com).
  - **API Key -** Enter your Infusionsoft API key. To find this key, log into your Infusionsoft account and select Admin >> Settings >> Application, then scroll down to the API section.
  - **Integrate with list -** Select the name of the list to which you want to add the contacts.
  - **Thank you URL -** The URL of the 'Thank You' page where users are redirected after an order in Infusionsoft is placed successfully.

  On the Form Contact Import Settings dialog box, provide the configuration details for the integration and then click Save.

  ![Form_Contact_Import.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX63.05T5g00000BkX63EAF.png)

  You can select from or enter the details of the integrations as follows:
4. After you've saved your configuration, you'll see the integration displayed in the list of integrations. Copy the full POST URL.
5. Next, log into your Infusionsoft account and navigate to Main menu >> E-Commerce >> E-Commerce setup.
6. Under checkout, click Order Forms. Then, click the name of your form, and a new page opens.
7. Click the Thank you page tab and then paste the post URL you copied from Maropost.
8. Ensure that you have selected the "Pass contact information to the Thank you page" option.
9. Click Save.

## Related Articles

**Integrations & APIs:**

- [Integrations Overview](https://galaxy.maropost.com/kb/articles/32-integrations-overview) - Understand available integration options
- [Using Maropost Identity App](https://galaxy.maropost.com/kb/articles/38-using-maropost-identity-app) - Set up identity management integration

**Contact Management:**

- [Creating a Contact List](https://galaxy.maropost.com/kb/articles/4-creating-a-contact-list-new) - Import contacts via API integrations
- [Email Contact Lists Overview](https://galaxy.maropost.com/kb/articles/13-email-contact-lists-overview-legacy) - Manage contacts through integrations

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Trigger campaigns via API