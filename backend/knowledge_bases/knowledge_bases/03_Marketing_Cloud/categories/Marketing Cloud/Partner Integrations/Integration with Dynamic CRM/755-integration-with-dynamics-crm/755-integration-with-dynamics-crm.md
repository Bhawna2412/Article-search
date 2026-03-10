---
title: "Integration with Dynamics CRM"
articleID: 755
category: "Partner Integrations > Integration with Dynamic CRM"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Integration with Dynamics CRM

You can leverage your Microsoft Dynamics CRM data for more targeted email marketing by integrating it with Marketing Cloud. This connection enables automatic contact synchronization and real-time campaign scheduling, helping optimize your lead nurturing process and improving conversion rates through better audience targeting.

The integration streamlines your workflow by automatically importing new CRM contacts and enabling immediate campaign deployment to specific customer segments. This approach helps ensure your email marketing stays synchronized with your sales pipeline activities, typically leading to better campaign performance and more effective lead management.

**Microsoft Dynamics** integration enables you to import contacts into Marketing Cloud and helps you schedule campaigns for contacts available in your Dynamics CRM account.

For Dynamics CRM integration, there are two types of integration supported. One is a **Contacts Import** integration that imports contacts from the Dynamics CRM account into the selected contact list in Marketing Cloud. The other one is the **Send Campaign** integration, which enables you to schedule campaigns in real-time to contacts available in the Microsoft Dynamics CRM account.

> **Note:** The import contacts integration runs at 8 AM EST every day and imports the contacts added to your Dynamics CRM account the previous day into Marketing Cloud's contact lists.

### In This Article

- Before You Begin
- Adding a Dynamics CRM Integration

### Before You Begin

When adding a new Dynamics CRM integration to your Marketing Cloud account, you'll need the following details regarding your Dynamics CRM account:

- Application URL
- Tenant + Client ID
- Secret Key

We recommend that you first get these details by following the steps below and keep them handy during the integration setup:

1. 
  Visit the Azure portal or Microsoft Dynamics 365 Business Central. Go to the **Azure Directory** and click on **App Registrations**.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/dyncrm0.05T5g00001Foz8YEAR.png)
2. 
  Under All/Owned applications, select **Dynamic CRM** from the list.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/dyncrm1.05T5g00001FoxT1EAJ.png)
3. 
  The Resource URL, Client (Application) ID, and Tenant (Directory) ID are displayed on the page. Click the **Copy to Clipboard** link to paste it into your Marketing Cloud integration page.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/dyncrm2.05T5g00001FozBrEAJ.png)
4. 
  To access the Secret Key, click on the client credentials link.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/dyncrm3.05T5g00001FozElEAJ.png)
5. 
  The Secret IDs are displayed. Click on the **Copy** link.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/dyncrm4.05T5g00001FozGNEAZ.png)

Using these credentials, you can begin to set up your Dynamics CRM Integration with Marketing Cloud.

### Adding a Dynamics CRM Integration

Follow the steps shown below to set up the Dynamics integration in your Marketing Cloud account:

1. 
  To begin with, you can either access the Navigation panel and select **Integrations**, or you can click on your user name and select **Connections**.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/dyncrm5.05T5g00001FozJbEAJ.png)
2. 
  If you have selected **Integrations** from the Navigation panel, choose the **Dynamics CRM** option from the given list.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/dyncrm6.05T5g00001FozLmEAJ.png)
3. 
  If you have chosen **Connections** under your user name, select the **Dynamics CRM** tab.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/dyncrm7.05T5g00001FozN4EAJ.png)
4. 
  To set up the integration, click on **Add Settings**.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/dyncrm8.05T5g00001FozNOEAZ.png)
5. 
  Choose **Contacts Import** or **Send Campaign**. We recommend setting up both, so you can fully utilize the Dynamics CRM integration capabilities.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/dyncrm9.05T5g00001FozJcEAJ.png)
6.   - **Name**: Enter a name for the integration.
  - **Tenant ID**, **Client ID**, **Client secret**, **Resource URL**: These details are specific to your Dynamic CRM account and are required to securely connect with the specific account. For steps discussing how to get the information, see the **Before You Begin** section.
  - **Username and Password:** Add your Dynamics CRM account login credentials.
  - **Integrate with list**: Select a Marketing Cloud list to import the contacts from the Dynamics CRM account.

  Now, provide the following information to set up the integration and click **Save**:

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/dyncrm10.05T5g00001FozPfEAJ.png)
7. 
  Perform similar steps to set up the campaign settings integration by selecting **Send Campaign**. Then, click **Save**.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/dyncrm11.05T5g00001FozRLEAZ.png)

Once you have set up both integrations, the CRM contacts start importing into your Marketing Cloud's contact lists, from which you can schedule campaigns for the contacts in real time.