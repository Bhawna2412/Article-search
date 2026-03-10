---
title: "Marketing Cloud Release Notes – 13 Mar 2025"
articleID: 1820
category: "2025 Releases"
knowledgeBase: "MC Release Notes"
lastUpdated: 2025-09-26
---

# Marketing Cloud Release Notes – 13 Mar 2025

## **OVERVIEW**

To enhance the email security of our clients, we have made certain upgrades to our sending domain functionality.

To learn more, read ahead!! 

## **SENDING DOMAINS ENHANCEMENT**

To comply with industry standards, we have increased the DKIM key length from **1024 bits to 2048 bits. **This enhancement will significantly reduce the risk of forgery and cryptographic attacks.

Previously, while creating a sending domain, you would have to manually enter the DKIM selector, which, at times, would cause DNS-related issues while migrating DKIM keys across servers. To avoid such problems, we are now generating the DKIM selectors internally for each sending domain created in the account. 

![DKIM4(1)](https://us.v-cdn.net/6038474/uploads/attachments/migrated/DKIM41.068J1000009hSFRIA2.png)We have also replaced **TXT**-based DKIM records with **CNAME**-based records. This not only simplifies the setup configuration process but also makes it convenient for the service provider to update the DKIM key without requiring any changes on your part. By switching to a CNAME-based record, you will most likely avoid domain setup and email authentication errors.

![DKIM8](https://us.v-cdn.net/6038474/uploads/attachments/migrated/DKIM8.068J1000009hSFbIAM.png)
Once your CNAME-based DKIM records are verified, your old TXT-based DKIM records are no longer required. 

![DKIM7](https://us.v-cdn.net/6038474/uploads/attachments/migrated/DKIM7.068J1000009hSFgIAM.png)
To learn more about such authentication methods, read our [**Set Up and Manage Sending Domains**](https://galaxy.maropost.com/s/article/Set-Up-and-Manage-Sending-Domains) article.