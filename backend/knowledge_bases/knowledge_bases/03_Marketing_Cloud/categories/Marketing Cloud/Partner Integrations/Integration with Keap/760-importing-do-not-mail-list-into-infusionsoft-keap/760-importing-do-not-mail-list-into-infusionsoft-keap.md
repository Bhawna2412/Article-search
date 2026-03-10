---
title: "Importing Do Not Mail List into Infusionsoft/Keap"
articleID: 760
category: "Partner Integrations > Integration with Keap"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Importing Do Not Mail List into Infusionsoft/Keap

You can automatically synchronize your Do Not Mail lists between Marketing Cloud and InfusionSoft to maintain consistent unsubscribe preferences across platforms. This integration helps ensure compliance with email marketing regulations while reducing manual list management tasks, protecting your sender reputation and maintaining customer trust.

When properly configured, this automated synchronization helps optimize your email marketing compliance by immediately updating unsubscribe status in both systems, preventing accidental mailings to contacts who have opted out.

Using the **DNM to Infusionsoft** option, you can automatically unsubscribe a contact in your Infusionsoft email list when the contact is added to Maropost's Do Not Mail list.

### Setting Up the DNM to Infusionsoft Integration

Perform the following steps to set up the integration for importing contacts from Maropost's DNM list to Infusionsoft unsubscribers:

1. On the Connections page, in the Infusionsoft tab, click Add Settings.
2. 
  In the Integration Types dialog box, click DNM to Infusionsoft.

  ![DNM_to_Infusionsoft_Option.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXA5.05T5g00000BkXA5EAN.png)
3.   - **Name -** Enter a name for the integration settings.
  - **API URL -** Enter the URL of your Infusionsoft account. For example, [https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsignin.infusionsoft.com%2Flogin%3Fservice%3Dhttps%253A%252F%252Fpd208.infusionsoft.com%252F%253Fjwt%253Dtrue](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsignin.infusionsoft.com%2Flogin%3Fservice%3Dhttps%253A%252F%252Fpd208.infusionsoft.com%252F%253Fjwt%253Dtrue)[**https://pd208.infusionsoft.com**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fpd208.infusionsoft.com).
  - **API Key -** Enter your Infusionsoft API key. To find this key, log into your Infusionsoft account and select Admin >> Settings >> Application, then scroll down to the API section.

  On the DNM Infusionsoft Settings dialog box, provide the configuration details for the integration and then click Save.

  ![DNM_Infusionsoft.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXA6.05T5g00000BkXA6EAN.png)

  You can select from or enter the details of the integrations as follows:

At this point, any contact that is added to the general Do Not Mail list of Maropost will be immediately unsubscribed from your Infusionsoft email list.

### Points to Consider

- Your account can have only one Maropost DNM-to-Infusionsoft integration. That is why once you have created the integration, it will no longer appear in the Integration Types menu.
- Using the native integration with Infusionsoft lets you import the correct date and time data. The integration will pass data as YYYY-MM-DD to ensure a seamless transition to Maropost.
- A contact that is added to the Maropost Do Not Mail list will be unsubscribed from all existing contacts in your Infusionsoft email list that have the same email address as the one coming from Maropost.
- If there are no contacts in your Infusionsoft email list having the same email address as that coming from the Maropost Do Not Mail list, then no action will occur. Maropost will not create an 'unsubscribed'  contact in your Infusionsoft email list.

## Related Articles

**Integrations & APIs:**

- [Integrations Overview](https://galaxy.maropost.com/kb/articles/32-integrations-overview) - Understand available integration options
- [Using Maropost Identity App](https://galaxy.maropost.com/kb/articles/38-using-maropost-identity-app) - Set up identity management integration

**Contact Management:**

- [Creating a Contact List](https://galaxy.maropost.com/kb/articles/4-creating-a-contact-list-new) - Import contacts via API integrations
- [Email Contact Lists Overview](https://galaxy.maropost.com/kb/articles/13-email-contact-lists-overview-legacy) - Manage contacts through integrations

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Trigger campaigns via API