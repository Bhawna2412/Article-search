---
title: "Integration with Keap (New UI)"
articleID: 771
category: "Partner Integrations > Integration with Keap"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-07-11
---

# Integration with Keap (New UI)

Maropost Marketing Cloud allows you to establish multiple integration connections with **Keap,** enabling the import of contacts, tags, and order details into your Maropost account.

The latest UI provides a simpler way to create and manage your Keap integrations. However, if you are using the old UI, know that it is still supported. To learn more about the integration process on the old UI, see [**Integration with InfusionSoft/Keap (Old UI)**](https://galaxy.maropost.com/s/article/Integration-with-InfusionSoft-Keap-Old-UI).

**Note**:

- The contacts, tags, and order details are synced from Keap to Marketing Cloud in real time.
- The historical data are not imported as part of the integration yet. However, you can use the file import feature to import the existing Keap contacts into your Maropost list. For more information on the file import feature, see [**Importing Contact Lists**](https://galaxy.maropost.com/kb/articles/8-creating-and-managing-contacts-new#CreatingContactsThroughImport).
- You can integrate multiple Keap accounts with one Marketing Cloud account. Also, you can integrate one Keap account with multiple Marketing Cloud accounts.

### Supported Integration Types

The following integration types are supported:

- **Orders with Contacts** – Imports new contacts from the purchase order in real time.
- **Contacts Import** – Imports new contacts along with their associated tags in real time.

### Subscription Status Changes

The following table shows how a contact's status is determined when importing contacts from Keap to Marketing Cloud:

| In Keap | In Marketing Cloud |
| --- | --- |
| Contact is created with an email Opt-in status | Contact is created with Subscribed status |
| Contact is created with an email Opt-out status | Contact is created with Unsubscribed status, and the contact is added to the Do Not Mail (DNM) list |

**Note**:

- When you update the status of your contact to Unsubscribed in Marketing Cloud, the contact's status is not updated in Keap.
- If you want to update the contact status in Keap from opt-out to opt-in, we recommend you do the following in the given order:  1. In Marketing Cloud, remove the contact from the DNM list and change the contact status in the list to Subscribed.
  2. Then, update the status in Keap to opt-in.

### Tag Import

After you set up a Contact Import type integration, all the new contacts and their associated tags are imported from Keap to Marketing Cloud in real time. Additionally, if you tag an existing contact in Keap, the integration creates the contact and the associated tag in the Marketing Cloud.

**Note**: If a tag already exists in Marketing Cloud, then the existing tag is associated with the contact instead of creating a new one.

### Creating and Managing Keap Integrations

You can create and manage your Keap integrations on the Keap Integration index page. To access the Keap Integration index page, in Navigation, go to Integrations, and then on the Integrations index page, select Keap.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/KeapIntegrationIndexPage.05T5g00000ENCPAEA5.png)
If you are adding a new integration for the first time, you'll be required to create a connection first. After the connection is established, it is displayed on the Keap Integration index page. You can then select Add from the Actions drop-down menu to add an integration. For a step-by-step procedure to add a new Keap integration, see [**Adding a Keap Integration (New UI)**](https://galaxy.maropost.com/s/article/Adding-a-Keap-Integration-New-UI).

For a connection, you'll find the following actions:

- **Add**: Enables you to add new integrations.
- **Delete**: Enables you to delete the connection. When you delete a connection, all the integrations created under it will also get deleted.

For an integration setup, you'll find the following actions:

- **Edit**: Enables you to edit an integration setting. You cannot change the integration type; you can only change the Maropost list into which the contacts are to be imported.
- **Delete**: Enables you to delete the integration.