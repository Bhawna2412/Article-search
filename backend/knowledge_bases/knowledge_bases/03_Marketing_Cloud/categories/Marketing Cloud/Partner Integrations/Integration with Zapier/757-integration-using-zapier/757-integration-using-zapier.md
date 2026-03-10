---
title: "Integration Using Zapier"
articleID: 757
category: "Partner Integrations > Integration with Zapier"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Integration Using Zapier

You can automate data flow between Marketing Cloud and hundreds of popular business applications using Zapier, eliminating manual contact entry and reducing the risk of data inconsistencies. This integration streamlines your workflow by automatically syncing contacts, custom fields, and engagement data across your marketing technology stack, improving operational efficiency and ensuring no leads fall through the cracks.

When properly configured, Zapier automations help optimize your lead management process by instantly transferring new contacts from sources like CRM systems, form builders, or e-commerce platforms directly into your Marketing Cloud lists, enabling immediate email marketing follow-up.

Marketing Cloud is supported by **Zapier,** which is an automation tool used to create connections between two apps. You can use Zapier to create multiple connections between Maropost and any of the other supported apps.

An integration between two apps is called a Zap. A Zap is made up of a trigger and one or more actions or searches. Whenever the trigger event occurs in one app, Zapier automatically performs the action or searches in the other app.

In this article, you'll learn:

- Mapping Custom Fields
- Creating an Integration (Zap)

### Mapping Custom Fields

Marketing Cloud enables you to map up to 50 custom fields with Zapier so that you can use these custom fields in your zaps.

You can add and manage your custom field mappings on the Zapier Integration index page. To go to the index page, in Navigation, select INTEGRATIONS. Then, on the Integrations page, select Zapier.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ZapierIntegrationIndexPage.05T5g00000TkOpwEAF.png)
To add new custom field mappings, click ADD. The Zapier Source column displays the Zapier custom fields available for mapping. The Marketing Target drop-down list contains all the custom fields in your Marketing Cloud account as well as an option to add a new custom field.

To create a mapping with a Zapier Source field, you simply select the custom field from the corresponding Target drop-down list.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ZapierAddFields.05T5g00000TkOqBEAV.png)

### Creating an Integration (Zap)

This example will walk you through the process of creating an integration (known as a zap in Zapier) between HubSpot and Maropost. Once you have created and enabled the zap, whenever a new contact is added in HubSpot, the zap gets triggered and performs the action of adding the contact to your selected Maropost list.

Similarly, you can create zaps that get triggered on other events or perform other actions. For example, you can create a Contact tag in Maropost when a new contact is added in HubSpot, following the same steps, except for selecting Add a Contact Tag to a Contact in the Action Event drop-down list.

Follow the steps below:

1. Log into your Zapier account and on the Dashboard, click the **Create Zap** button.
2. Enter a name for your zap. Then, in the **App Event** field of the Trigger, search for and select HubSpot.
3. From the **Trigger Event** drop-down list, select: New Contact.
4. From the **Choose Account** drop-down list, select your HubSpot account. When you are creating your first zap using HubSpot, you'll be required to add your account by clicking the **Connect a new account** button.
5. Click the **Test trigger** button to check if the trigger works.
6. In the **App Event** field for Action, search for and select Maropost.
7. From the **Action Event** drop-down list, select: Subscribe Contact to Multiple List.
8. From the **Choose Account** drop-down list, select your Maropost account. When you are creating your first zap using Maropost, you'll need to add your account by clicking the **Connect a new account** button.
9.   - Email - The email address field of your HubSpot account.
  - List Ids - The Maropost lists to which the new contact is to be subscribed.

  In the **Set up action** step, you must map the following required fields:
10. Click the **Test action** button to check the action.
11. On the final page, you'll see the success message (as shown in the following screenshot), saying the zap is ready for use. Here, you can enable the zap by clicking the **Turn Zap On** button.

## Related Articles

**Integrations & APIs:**

- [Integrations Overview](https://galaxy.maropost.com/kb/articles/32-integrations-overview) - Understand available integration options
- [Using Maropost Identity App](https://galaxy.maropost.com/kb/articles/38-using-maropost-identity-app) - Set up identity management integration

**Contact Management:**

- [Creating a Contact List](https://galaxy.maropost.com/kb/articles/4-creating-a-contact-list-new) - Import contacts via API integrations
- [Email Contact Lists Overview](https://galaxy.maropost.com/kb/articles/13-email-contact-lists-overview-legacy) - Manage contacts through integrations

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Trigger campaigns via API