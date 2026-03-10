---
title: "Adding a ClickBank Integration"
articleID: 743
category: "Partner Integrations > Integration with Shopping Carts"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-07-15
---

# Adding a ClickBank Integration

This article consists of guided steps for creating and verifying a new ClickBank integration.

For detailed information about the ClickBank integration, see [**Integration with ClickBank**](https://galaxy.maropost.com/s/article/Integration-with-ClickBank).

### In This Article:

- 
- 
- 

### Before You Begin

You'll need your Secret ID and API Key when adding a new ClickBank integration. So, we recommend that you retrieve them from your ClickBank account before you begin the setup in Marketing Cloud. 

Follow the steps below to retrieve your Secret ID and API Key:

1. 
  To find your Secret Key, you need to first log in to your ClickBank account. Click on **Vendor Settings**.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cbank21.05T5g00000w5unMEAQ.png)
2. 
  Scroll down to **Advanced Tools**, and next to **Secret Key**, copy the credentials.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cbank22.05T5g00000w5sELEAY.png)
3. 
  For your API Key, visit the ClickBank **Dashboard** section >> **Settings** >> **API Management** and copy the credential under the **API** Key column.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cbank24.05T5g00000w5uk5EAA.png)

📋 **Note**:

If you're setting up a new ClickBank Affiliate account, don't forget to grant it access to your API key. 

1. 
2. 
3. 
  Click the **Save** button.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/editapikey.05T5g00001K7opQEAR.png)

### Adding a ClickBank Integration

Follow the steps as shown below to add a new ClickBank Integration:

1. 
  In Navigation, go to **INTEGRATIONS**, and then on the **Integrations** page, select **ClickBank**.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cbank12.05T5g00000xs3JoEAI.png)
2. 
  On the **ClickBank Integration** page, click **ADD**. In the integration slider, choose whether you are a ClickBank **Seller** or an **Affiliate **under the "**Integration** **Type**" field. To know more on how an affiliate integration works, visit and read our [**Integration with an Affiliate ClickBank Account**](https://galaxy.maropost.com/s/article/Integration-with-an-Affiliate-ClickBank-Account) article.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cbank44.05T5g00001IX5XzEAL.png)
3. 
  Next, enter a nickname for the new ClickBank integration. Then, enter the Secret Key that you retrieved from your ClickBank account (refer **Before You Begin** section).

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cbank45.05T5g00001IX5b8EAD.png)
4. 
  Select a list from the drop-down menu that you have already created in Marketing Cloud in order to import and sync all contact information from your ClickBank account to your Marketing Cloud account. You can also create a new list and insert it in the field by clicking **Create List**.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cbank32.05T5g00000w5uoFEAQ.png)
5. 
  Now, enter the API Key that you retrieved from your ClickBank account (refer **Before You Begin** section). It is a unique identifier used to perform certain authenticated API requests.
📋 **Note**: **Integration type, ClickBank nickname, Secret Key, Lists,** and **API Key** are required to create a new integration.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cbank46.05T5g00001IX5huEAD.png)
6. 
  Select the **Sync** **Historical data** checkbox to allow the integration to sync customer data of the **past 45 days** from your ClickBank account to your Maropost Marketing Cloud account.
📋 **Note**: Customer data includes information such as order history, product and service details, subscription status, and basic consumer data.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cbank34.05T5g00000w5uoPEAQ.png)
7. 
  If a customer has abandoned their shopping carts and you would like to send emails to alert them of their pending purchase, select the timing information under the **Abandoned Cart Delay** section. This option allows you to send timely reminders to your potential customers and nudge them to complete their orders.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cbank18.05T5g000018nGIxEAM.png)

  📋 **Note**:
  - 
  - 
  - 
8. 
  To properly import and sync data from your ClickBank account to the Maropost Marketing Cloud account, mention the ClickBank source and Marketing Cloud target under the **Custom Field Mapping** section. Once you have added the details, click on **CONNECT**.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cbank35.05T5g00000w5uoUEAQ.png)

  📋 **Note**: The **Custom Mapping** functionality will map the user's phone, consent request, postal ID, country, state and residential status, city, and vendor type data to the **Maropost Marketing Cloud** sections.
📋 **Note**: With the help of frontend and backend implementations, customers can manually create and map fields (including custom fields) in their Marketing Cloud accounts.
Your Integration is created with the status set to **Pending**. To activate the integration, you’ll need to manually verify your ClickBank’s INS (Instant Notification Service) URL.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cbank40.05T5g00000w5uoZEAQ.png)

### Verifying the ClickBank Integration

Configuring and Verifying ClickBank’s Instant Notification Service:

1. 
  To configure your INS (Instant Notification Service) URL, visit the ClickBank Integration page on your Maropost Marketing account. Copy the **INS URL** of an unverified integration.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cbank36.05T5g00000w5uooEAA.png)
2. 
  Log in to your ClickBank account >> Access **Vendor Settings** >> **My Site >> Advanced Tools** >> Click **Edit**. Now paste the Notification URL into any one of the INS URL fields that are not yet verified and click **TEST IPN**.  Make sure that you select API version 8.0 or above.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/vendorsettings.05T5g00001K7otmEAB.png)
3. 
  The ClickBank account will check whether the INS link is working or not. If it's working, the INS link gets verified. After INS (Instant Notification Service) verification, you will be notified to verify the changes you have made. Once the checks have been carried out, the integration verification process is completed.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/apiverified.05T5g00001K7ouLEAR.png)