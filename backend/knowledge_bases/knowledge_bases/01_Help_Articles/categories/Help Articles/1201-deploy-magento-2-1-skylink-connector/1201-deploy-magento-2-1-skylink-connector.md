---
title: "Deploy - Magento 2.1 Skylink Connector"
articleID: 1201
knowledgeBase: "Help Articles"
lastUpdated: 2023-07-06
---

# Deploy - Magento 2.1 Skylink Connector

# Deploy - Magento 2.1 Skylink Connector

This article explains how to deploy a Magento 2.1 Skylink Connector once a signed contract has been received and paid for:

Enable EDS

![rtaImage (45).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powbnEAA.jpg)

1. Login to MGMT

2. Navigate to **BackOffice > BO Site List**

3. Filter by company name in **Admin Link**

4. Click on **Edit** and tick **EDS Enabled**

5. Select **Identifier** (Client ID) and copy onto clipboard (Ctrl C)

![rtaImage (46).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powbsEAA.jpg)

1. Login to clients Retail Express

2. Navigate to **Quick Links > Web Services Configuration**

3. Set **WebStoreEDS** to enabled

4. Set **WebStoreV2** to enabled

5. Save Changes

Zendesk - Sending the email 

![rtaImage (47).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powbxEAA.jpg)

1. Add a new ticket

2. Add the email address for the contact on the solutions agreement

3. Select the macro **eCommerce > BYO >** **Skylink BYO Documentation (Magento 2)**

4. Replace the [CLIENT ID] section with the Identifier/Client ID you copied out of MGMT

5. Submit the ticket as Pending in Skystore Triage Queue (as they need to send back SSH key)