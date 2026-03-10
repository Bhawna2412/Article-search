---
title: "Webhook Integrations"
articleID: 1399
category: "Partner Integrations"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Webhook Integrations

You can implement webhook integrations to receive real-time notifications about contact activities and list changes, which enables automated workflow triggers and better customer data synchronization across your marketing stack. This helps streamline your workflow by automatically updating external systems when subscriber data changes, reducing manual effort while maintaining data accuracy.

When properly configured, webhooks can enhance subscriber interaction by enabling immediate response to subscription changes and contact updates, leading to more timely and relevant customer communications.

Marketing Cloud enables you to integrate webhooks in two areas of the application: **Settings** and **Contact Lists**.

### Webhook Integration in Settings

You can integrate webhooks in your account-level settings to get notified of any changes to the contacts. For detailed information, see [**HTTP Post URL**](https://galaxy.maropost.com/s/article/HTTP-Post-URL).

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HTTPPostURL.05T5g00000SRkcbEAD.png)

### Webhook Integration in Contact Lists

You can integrate webhooks in your lists to get notified of any changes to the subscription status of contacts in the lists. The webhook is fired when a contact is added to the list and also when the subscription status of contacts within the list changes.

When creating a new list or editing an existing list, enter the webhook API endpoint in the Post URL field.

![List_-_Webhook.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWoj.05T5g00000BkWojEAF.png)
The following is an example of the JSON payload that was sent after a contact subscribed to the list:

```plaintext
{  "subscriptions": [    {      "list_id": 1248,      "list": "tester sk",      "status": "Subscribed"    },    {      "list_id": 1275,      "list": "sk test list",      "status": "Subscribed"    }  ],  "changed_attributed": {    "id": 12944266,    "account_id": 1000,    "list_id": 1275,    "contact_id": 12407494,    "active": true,    "status": 0,    "created_at": "2020-10-08T11:58:11.000-04:00",    "updated_at": "2020-10-08T11:58:11.000-04:00"  },  "status_code": 0,  "active": true,  "list": "sk test list",  "list_id": 1275,  "status": "Subscribed",  "contact": {    "1234": "abc",    "id": 12407494,    "account_id": 1000,    "email": "sonakshi@yopmail.com",    "first_name": "Maropost",    "last_name": "",    "domain_name_id": 8924,    "created_at": "2020-10-08T06:58:38.000-04:00",    "updated_at": "2020-10-08T06:58:41.000-04:00",    "age": null,    "language": "english",    "favourite_colour": null,    "vacation_spot": null,    "shirt_size": "Free Size",     "custom_field_001": false,  },  "tags": []}
```

### Ensuring Security When Using Webhooks

By default, Maropost does not include any authentication token in its webhook callbacks to your API endpoint. If you want to ensure stronger security, you can create a JSON Web Token that will then be included in all your webhook callbacks. The JSON Web Token can be created on the Connections page.

For more information on JSON Web Tokens and steps to create them, see [**JSON Web Tokens (JWTs)**](https://galaxy.maropost.com/s/article/JSON-Web-Token-JWT).

## Related Articles

**Integrations & APIs:**

- [Integrations Overview](https://galaxy.maropost.com/kb/articles/32-integrations-overview) - Understand available integration options
- [Using Maropost Identity App](https://galaxy.maropost.com/kb/articles/38-using-maropost-identity-app) - Set up identity management integration

**Contact Management:**

- [Creating a Contact List](https://galaxy.maropost.com/kb/articles/4-creating-a-contact-list-new) - Import contacts via API integrations
- [Email Contact Lists Overview](https://galaxy.maropost.com/kb/articles/13-email-contact-lists-overview-legacy) - Manage contacts through integrations

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Trigger campaigns via API