---
title: "Integration with ClickBank"
articleID: 746
category: "Partner Integrations > Integration with Shopping Carts"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-07-15
---

# Integration with ClickBank

An integration between ClickBank and Maropost Marketing Cloud allows you to import the order and contact information in real time from your ClickBank account to your Marketing Cloud account.

### In This Article

- Integration Overview
- Managing ClickBank Integration

### Integration Overview

When integrated, the Marketing Cloud imports and syncs data, such as order history, product and service information, subscription status, and contact details, from ClickBank in real time. Newly created and updated products are synced into Maropost Cloud every 30 minutes.

**Note**: Marketing Cloud also imports and syncs data of those customers who may or may not have a purchase history with ClickBank. However, customers without any email addresses are not imported.

#### Product Field Mapping

| **ClickBank Fields** | **Marketing Cloud Fields** |
| --- | --- |
| item_id | “itemNo“ |
| status | N/A |
| image_url | N/A |
| name | "productTitle" |
| store_url | “site" |
| product_price | “accountAmount“ |
| description | "productTitle" |
| Product Category | N/A |
| availability | N/A |
| brand | N/A |
| published | N/A |
| product_type | lineItemType |

#### Customer Field Mapping

| **ClickBank Fields** | **Maropost Cloud Fields** |
| --- | --- |
| First Name | “firstname” |
| Last Name | “lastname” |
| Email | “email” |
| Status | "declinedConsent" |

#### Additional Customer Details Field Mapping

| **ClickBank Fields** | **Maropost Cloud Fields** |
| --- | --- |
| Phone | NA |
| Postal Code | ”OrderData”[0][“**postalCode**”] |
| Vendor type | NA |
| City | ”OrderData”[0][“**customerContactInfo**”][3][“**value**“] |
| State | ”OrderData”[0]["**state**"] |
| Country | ”OrderData”[0][“**country**”] |
| Role | ”OrderData”[0][“**role**“] |
| Vendor | ”OrderData”[0][“**vendor**“] |

**What does the “Status” field in Integration mean? **

The “**Status**” field in Marketing Cloud denotes a contact's email list subscription status. If the status is “**true**,” the contact has subscribed, and if the status is “**false**,” the contact has unsubscribed from the email list.

### Managing ClickBank Integration

The **ClickBank Integration** page is the starting page for creating and managing ClickBank integrations. In **Navigation**, go to **Integrations**, and then on the **Integrations** page, click **ClickBank**.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cbank12.05T5g00000w5ulpEAA.png)
On the **ClickBank Integration** page, you can add new integrations using the **ADD** button and view and manage your existing integrations. To learn more about adding a new integration, see [**Adding a ClickBank Integration**](https://galaxy.maropost.com/s/article/Adding-a-ClickBank-Integration).

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cbank43.05T5g00001IX44cEAD.png)
On the page, you can find the following information and actions:

- **ClickBank Nickname:** The name of your ClickBank Integration connection.
- **Maropost Lists:** The Marketing Cloud contact lists into which the contacts are imported and synced from ClickBank.
**Note**: You can associate multiple Marketing Cloud lists with a single ClickBank integration.
- **Secret Key:** The business ID linked to your ClickBank account. It is a numerical code or an identifier used to facilitate payment transactions for your business.
- **INS (Instant Notification Service) URL:** The domain details of a ClickBank integration.
- **Status:** Status of the integration connection, indicating whether the connection is active or pending verification.
- **Integration Type:** Denotes whether the integration is created either for a seller or a ClickBank affiliate. To know more about how an affiliate integration works, visit and read our [**Integration with an Affiliate ClickBank Account**](https://galaxy.maropost.com/s/article/Integration-with-an-Affiliate-ClickBank-Account) article.
- **Actions:** The drop-down menu with actions that enable you to modify and delete the connection.

On the **ClickBank Integration** page, you can view and manage all the lists associated with an integration connection. Although you can select only one contact list while adding an integration, you can change the contact list from the editing section under the **Actions** tab.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cbank29.05T5g00000w5um4EAA.png)
To add multiple lists, go to **Audience** >> Select a Contact List from the Index page >> Click on the **Add Cart** tab under the Integration Carts panel >> Choose the integration platform and add the integration link in the given field. For more information, see [**Creating a Contact List**](https://galaxy.maropost.com/kb/articles/4-creating-a-contact-list-new?utm_source=community-search&utm_medium=organic-search&utm_term=creating+a+contact+list).

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cbank41.05T5g000013I8tQEAS.png)
**Note**: The Integration with Carts section is displayed only if you have any 3rd-party e-commerce platform (such as ClickBank) integrated with Maropost.

Once you have added a new list to your integration, make sure you configure and verify your ClickBank’s **Instant Notification Service** (**INS**) URL to allow your integration to sync historical and real-time data to your Maropost Marketing Cloud account. Always perform this step after you add a new list to an existing ClickBank integration. To learn more about ClickBank INS configuration, visit and read the [**ClickBank verification**](https://galaxy.maropost.com/s/article/Adding-a-ClickBank-Integration#Verifying%20ClickBank%20Integration) topic.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cbank42.05T5g000013I8uTEAS.png)