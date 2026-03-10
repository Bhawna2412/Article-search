---
title: "Custom Unique Identifier (Custom UID)"
articleID: 25
category: "Account Management"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-07
---

# Custom Unique Identifier (Custom UID)

You can implement custom unique identifiers to enable advanced contact management scenarios where your organization requires specific identification systems beyond standard email-based tracking. This helps optimize marketing effectiveness when dealing with shared email addresses or complex customer hierarchies, while ensuring accurate reporting and personalization across your email campaigns.

Custom UID configuration significantly impacts how your Marketing Cloud account operates across contacts, segments, journeys, and reporting, making it essential to understand these changes thoroughly before implementation since the configuration cannot be reversed.

**Unique Identifier** (**UID**) is an alphanumeric string unique to each contact and, thereby, can be used as an identifying attribute for a contact. Generally, Marketing Cloud automatically generates the UID, which is then mostly used internally within the system. 

However, there are scenarios where you may want to provide a unique identifier for your contacts, and you can do so using the custom UID feature.

> **Important:** **Important:** To avail the custom UID feature, your account will need to be specifically configured, and these changes cannot be reverted. The custom UID feature comes with certain limitations, and therefore, please consult your customer success manager thoroughly before opting for the feature.

This article covers the changes and limitations in various Marketing Cloud features for custom UID-based accounts:

## Contacts

### Creating Contact Manually

When manually creating a new contact, you must provide a unique UID for the contact. The email address or phone number is a must only if you want to add the contact to a list. Also, the email address and phone number don’t have to be unique.

The rest of the contact creation process remains the same as in the regular accounts. See [**Creating and Managing Contacts**](https://galaxy.maropost.com/s/article/Creating-and-Managing-Contacts-New) for detailed information.

![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Y5miRMAR.jpg)
### Viewing and Managing Contacts

The Contacts index page (in Navigation > CONTACTS) contains an additional column for displaying the custom UID. You can click the UID to go to the contact’s 360-degree overview. See [**Contact 360-Degree Overview**](https://galaxy.maropost.com/s/article/Contact-360-Overview-New). 

![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Y5mivMAB.jpg)
### Importing Contacts

For custom UID-based accounts, the UID must be unique for importing contacts, while the email address or phone number need not be unique.

During the import, you’ll see a field for UID in the Mappings section. Map your account’s UID field with the UID column in the import file. The UID provided in the import file determines whether a new contact is created or an existing contact is updated.

The rest of the import process remains the same as in the regular accounts. For more information, see [**Creating and Managing Contacts**](https://galaxy.maropost.com/s/article/Creating-and-Managing-Contacts-New). 

![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Y5mkcMAB.jpg)
## Segments

You can query a Segment using UID. Also, note that a UID-based segment query could potentially return a higher number of contacts than the actual campaign sends. This is because some contacts could be missing an email address or phone number.

To learn about Segments, see [https://galaxy.maropost.com/s/article/Introduction-to-Segments](https://galaxy.maropost.com/s/article/Introduction-to-Segments).

## Journeys

In a custom UID-based account, when using the API Event trigger in Journey, you can use the UID to trigger a contact’s journey.

If the API Event trigger is used to trigger a Journey using an email address, then all UIDs associated with the email address will go through the journey. For example, if Jane and Bob share the email address [millers@me.com](mailto:millers@me.com), and the API Event trigger is used to trigger a Journey for [millers@me.com](mailto:millers@me.com), then both Jane's and Bob’s UID will go through the Journey.

To learn about Journeys, see [https://galaxy.maropost.com/s/article/Introduction-to-Journeys](https://galaxy.maropost.com/s/article/Introduction-to-Journeys). 

![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Y5mgzMAB.jpg)
## Integrations

For custom UID-based accounts, only the following integrations are supported:

- [**Keap**](https://galaxy.maropost.com/s/article/Integration-with-Keap-New-UI)
- [**Zapier**](https://galaxy.maropost.com/s/article/Integration-Using-Zapier)
- [**Salesforce**](https://galaxy.maropost.com/s/article/IntegrationwithSalesforce)
- [**Magento**](https://galaxy.maropost.com/s/article/Integration-with-Magento)
- [**Abandoned Cart REST API**](https://galaxy.maropost.com/s/article/Abandoned-Cart-REST-API-Integration)

For Keap, Zapier, Salesforce, and Magento integrations, the exact column matching the **UID** must be** **selected during the integration setup to import contacts through the integration.

For the Abandoned Cart REST API, the UID parameter must be included in the API call.

## Acquisition Forms

For custom UID-based accounts, both UID and email address fields are mandatory. Therefore, you’ll need to create a script to auto-populate the UID value.

To learn about Acquisition Forms, see [https://galaxy.maropost.com/s/article/Acquisition-Forms](https://galaxy.maropost.com/s/article/Acquisition-Forms).

![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Y5mhnMAB.jpg)

## Email Content

When previewing email content, you can select a contact using their UID. To learn about previewing content, see [**Previewing Content in Content Editors**](https://galaxy.maropost.com/s/article/Previewing-Content-in-Content-Editors).

![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Y5ldRMAR.jpg)

## Preference Management

In the case of a shared email address, if a contact unsubscribes, then all contacts (UIDs) sharing the email address will also be unsubscribed.

To learn about preference management, see [https://galaxy.maropost.com/s/article/Preference-Management-Overview](https://galaxy.maropost.com/s/article/Preference-Management-Overview).

## Reports and Analytics

Email engagement metrics are counted based on UID. When an email address is associated with multiple UIDs, the activity from separate UIDs is counted as separate for reporting. For example, if Bob (UID 1) and Jane (UID 2) share an email address, and both click the email once each, then the email address will have two unique clicks.

To learn about reports, see [https://galaxy.maropost.com/s/article/Reports-and-Analytics-Overview](https://galaxy.maropost.com/s/article/Reports-and-Analytics-Overview).

## Related Articles

**Contact Management:**

- [7 Best Practices For Making The Most Of An Email Unsubscribe](https://galaxy.maropost.com/kb/articles/1720-7-best-practices-for-making-the-most-of-an-email-unsubscribe) - Optimize your unsubscribe processes and contact data management
- [Acquisition Overview](https://galaxy.maropost.com/kb/articles/1211-acquisition-overview) - Build and grow your contact database effectively
- [Application Settings Overview](https://galaxy.maropost.com/kb/articles/991-application-settings-overview) - Configure your Marketing Cloud settings for advanced features
- [Application Version Update Prompts](https://galaxy.maropost.com/kb/articles/642-application-version-update-prompts) - Stay current with application updates and features