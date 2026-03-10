---
title: "HTTP Post URL"
articleID: 1428
category: "Setup and Configuration > Application Settings"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-07
---

# HTTP Post URL

You can automate data synchronization between Marketing Cloud and your other business systems by setting up "**HTTP POST URL**" webhooks for contact changes. 

This streamlines your workflow by automatically notifying your external systems whenever contact information is added, updated, or deleted, eliminating the need for manual data exports or periodic sync processes. When properly configured, this real-time integration helps ensure your customer data remains consistent across all platforms.

Setting up webhook notifications enables more sophisticated marketing automation by allowing your CRM, analytics tools, and other systems to react immediately to contact changes. This helps optimize campaign effectiveness by ensuring all your systems work with the most current subscriber data.

Using the **HTTP Post URL** feature, you can set up a webhook API call to get notified of any changes to the contacts.

## How Does It Work?

The webhook is fired whenever a new contact is added or an existing one is modified or deleted in the system. All the details of the new/updated contact (default and custom fields) are sent in a JSON-formatted payload to the API endpoint that you specify in the field.

If a default field of any contact is updated, the changed attribute information in the payload includes the field that was updated, along with the date and time at which it was updated. However, if a custom field of any contact is updated, the changed attribute information in the payload includes only the date and time at which the field was updated.

> **Note:** **Note:** The webhook does not fire when you update the tags for the contacts.

The following is an example of the JSON payload that was sent after the default fields **first_name** and **last_name** were updated for a contact:

```json
{
  "subscriptions": [
    {
      "list_id": 1169,
      "list": "Test_12312",
      "status": "Hard-Bounced"
    }
  ],
  "changed_attributed": {
    "first_name": "Friend",
    "last_name": "",
    "updated_at": "2020-07-22T16:34:02.000Z"
  },
  "contact": {
    "1234": "abc",
    "id": 12133221,
    "account_id": 1000,
    "email": "vidushi.sood123@hotmail.com",
    "first_name": "Sam",
    "last_name": "Jones",
    "domain_name_id": 11,
    "created_at": "2020-07-22T12:34:01.000-04:00",
    "updated_at": "2020-10-08T10:40:17.000-04:00",
    "age": null,
    "language": "english",
    "favourite_colour": null,
    "vacation_spot": null,
    "shirt_size": null,
    "custom_field_001": false,
  },
  "tags": []
}
```

## Setting Up the HTTP Post URL

The following are the steps for setting up the HTTP Post URL:

1. Click your username in the top-right corner of the application, and then from the drop-down menu, select **Settings**.

2. On the Settings page, in the Connections section, click **HTTP Post URL**.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SettingsHTTPPostURL.05T5g00000SRkbEEAT.png)
3. On the **HTTP Post URL** page, enter the webhook API endpoint in the HTTP POST URL field.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/HTTPPostURL.05T5g00000SRkbJEAT.png)
4. Click **Save Changes**.

## Related Articles

**Integrations & APIs:**

- [Integrations Overview](https://galaxy.maropost.com/kb/articles/32-integrations-overview) - Understand available integration options
- [Using Maropost Identity App](https://galaxy.maropost.com/kb/articles/38-using-maropost-identity-app) - Set up identity management integration

**Contact Management:**

- [Creating a Contact List](https://galaxy.maropost.com/kb/articles/4-creating-a-contact-list-new) - Import contacts via API integrations
- [Email Contact Lists Overview](https://galaxy.maropost.com/kb/articles/13-email-contact-lists-overview-legacy) - Manage contacts through integrations

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Trigger campaigns via API