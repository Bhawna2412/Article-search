---
title: "REST APIs"
articleID: 825
category: "API Guide"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# REST APIs

You can use REST APIs to automates routine tasks and significantly improves the efficiency of your email marketing operations. This enables you to programmatically manage campaigns, contacts, and content while integrating Marketing Cloud with your existing systems to streamline your workflow.

REST APIs help optimize your marketing automation by providing comprehensive access to campaign creation, contact management, and performance data retrieval. When properly configured, this approach reduces manual effort and enables you to build custom integrations that enhance your email marketing effectiveness and operational efficiency.

Maropost for Marketing's API is based on the **RESTful **Framework. The extensive catalog of API methods allows system developers to create, read, update, and delete data within the platform.

Also, see:

- [**API Overview**](https://galaxy.maropost.com/s/article/API-Overview)
- [**GraphQL APIs**](https://galaxy.maropost.com/s/article/GraphQL-APIs)

### Tips for Correct Usage

- Access the API methods via HTTPS to take advantage of the security inherent to this protocol.
- Always include **auth_token** as a query string parameter - even for POST, PUT, and DELETE method calls. To learn how to create and manage API keys, see [**API Keys**](https://galaxy.maropost.com/s/article/API-Keys).
- The HTTP protocol is not designed for socket connections that remain open for extended periods. There is an inherent time-out that all web servers observe.  For this reason, REST is not normally appropriate for retrieving a vast amount of data out of Maropost for Marketing. Consider using [**Data Journeys**](https://galaxy.maropost.com/s/article/Introduction-to-Data-Journeys) for automated bulk data imports and exports instead.
- Use the [**streaming API option**](https://galaxy.maropost.com/s/article/Data-Streaming-via-API) for bulk data retrieval that can only be obtained through an API.

### REST API Reference

The REST API Reference lists all the supported REST APIs in detail. You can access the REST API Reference on the Connections page of the application.

1. Click your username in the top-right corner of the application, and from the drop-down menu, select Connections.
2. Then, click the REST API tab to see all the supported REST APIs categorized into different tabs.
3. Click the tab for each category to see the available API methods.

The REST APIs are grouped into the following categories:

- **Reports API** - Methods in this API are used primarily to retrieve campaign response data for contacts within a date range, regardless of which campaign has been sent. Methods also include those to retrieve aggregate delivery and response metrics for campaign reports, test reports, journey reports, and custom reports.
- **Contents API** - View/create/edit/delete email content templates.
- **Content Templates API** - View/create/edit/delete email content.
- **Content Image API** - Adds an image to the Image Library from an external source specified by the image's file path URL.
- **A/B Test Campaigns API** - Create and send A/B test campaigns.
- **Campaigns API** - Create and send marketing promotional campaigns. Also, retrieve delivery and response metrics for a specified campaign.
- **Contacts API** - Subscribe and unsubscribe contacts to email marketing lists; add/remove contact tags. View all information for a given contact, including standard and custom fields, list subscriptions, journeys, and product purchase history.
- **Tags API** - Create/view/delete contact tags.
- **Custom Fields API** - Create/view/delete custom fields.
- **Lists API** - Create and delete lists, also view aggregate delivery and response metrics for campaigns sent to a given list.
- **Secure Lists API** - Create and import a secure suppression list.
- **Do Not Mail List API** - Add and remove a contact from the Do Not Mail list. Or, search if the contact is present in the Do Not Mail list.
- **Brands Do Not Mail List API** - Add and remove a contact in a specific Brand Do Not Mail list. Search if the contact is present in a specific Brand Do Not Mail list.
- **Product/Revenue API** - Add a contact's purchase history data to the Product/Revenue database.
- **Journeys API** - Pause, restart, reset, and stop a contact's flow through a journey.
- **Relational Tables API** - Create/modify/delete/view the metadata of a relational table's structure. This is not the API to use to add/view/edit/delete data within the tables themselves. Instead, use the APIs for each [**relational table**](https://galaxy.maropost.com/s/article/Introduction-to-Relational-Tables).
- **SMS Campaigns API** - Create and Send SMS Campaigns. Create and manage contact lists for SMS Campaigns.
- **Transactional API** - Create and send a transactional message. Includes the ability to include personalized content within the body of the transactional message.
- **Push Notifications API** - Create and send a mobile app broadcast message. Also can create and send a transactional push notification.