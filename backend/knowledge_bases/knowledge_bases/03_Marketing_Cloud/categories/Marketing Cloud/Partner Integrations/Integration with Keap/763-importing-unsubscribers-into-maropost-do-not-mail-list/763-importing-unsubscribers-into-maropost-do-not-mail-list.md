---
title: "Importing Unsubscribers Into Maropost Do Not Mail List"
articleID: 763
category: "Partner Integrations > Integration with Keap"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Importing Unsubscribers Into Maropost Do Not Mail List

You can automatically synchronize unsubscribe preferences from InfusionSoft to Marketing Cloud's Do Not Mail list, ensuring consistent email compliance across both platforms. This integration helps protect your sender reputation and maintains regulatory compliance by immediately honoring opt-out requests, reducing the risk of sending unwanted emails to contacts who have unsubscribed.

When properly configured, real-time unsubscribe synchronization helps optimize your email marketing compliance by preventing accidental mailings and maintaining customer trust through consistent preference management.

Using the **Add to DNM List** option, you can import the Infusionsoft/Keap unsubscribes into Maropost's Do Not Mail list.

Infusionsoft has only one email list. A contact is either subscribed or not. Maropost for Marketing, on the other hand, allows a contact to be subscribed to multiple lists, giving the contact more control over which email streams to opt in and out of.

Unsubscribing a contact from the Infusionsoft email database immediately ceases all emails from Infusionsoft from being sent to the contact. The counterpart of that action in Maropost is to add the contact to the Do Not Mail list.

### Setting Up the Add to DNM List Integration

Perform the following steps to set up the integration for importing unsubscribers from Infusionsoft into Maropost's DNM list:

1. On the Connections page, in the Infusionsoft tab, click Add Settings.
2. 
  In the Integration Types dialog box, click Add to DNM List.

  ![Add_to_DNM_List_Option.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXF7.05T5g00000BkXF7EAN.png)
3.   - **Name -** Enter a name for the integration settings.
  - **API URL -** Enter the URL of your Infusionsoft account. For example, [https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsignin.infusionsoft.com%2Flogin%3Fservice%3Dhttps%253A%252F%252Fpd208.infusionsoft.com%252F%253Fjwt%253Dtrue](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsignin.infusionsoft.com%2Flogin%3Fservice%3Dhttps%253A%252F%252Fpd208.infusionsoft.com%252F%253Fjwt%253Dtrue)[**https://pd208.infusionsoft.com**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fpd208.infusionsoft.com).
  - **API Key -** Enter your Infusionsoft API key. To find this key, log into your Infusionsoft account and select Admin >> Settings >> Application, then scroll down to the API section.

  On the DNM List Settings dialog box, provide the configuration details for the integration and then click Save.

  ![DNM_List.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXF5.05T5g00000BkXF5EAN.png)

  You can select from or enter the details of the integrations as follows:

> **Note:** This integration occurs in real-time. As soon as a contact is unsubscribed from your Infusionsoft email list, the contact is automatically added to Maropost's general Do Not Mail list.

4. After you've saved your configuration, you'll see the integration displayed in the list of integrations. Copy the full POST URL.
5. Next, log into your Infusionsoft account. From the Marketing menu, select Settings and then select Email Defaults.
6. Scroll down the page to the 'Email' section where you see 'When someone opts out of all email marketing', and then click the Actions button.
7. In the 'Add New Action' list, select 'Send an http post to another server.'
8. 
  In the Post URL field, paste the POST URL that you copied from Maropost.

  ![15.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXF6.05T5g00000BkXF6EAN.png)
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