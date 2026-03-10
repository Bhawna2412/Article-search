---
title: "Set up InboxAware"
articleID: 1436
category: "Get Started"
knowledgeBase: "InboxAware"
lastUpdated: 2022-08-04
---

# Set up InboxAware

InboxAware uses seed email address to monitor your email campaigns, and determine if they've been received, lost, or marked as spam. To get started using InboxAware you need to download your seed list, upload it to your email provider, and send campaigns to the seed list.

---

### Download your seed list

Your seed list is a group of email accounts that InboxAware monitors to measure the deliverability of your email campaign.

To download your seed list:

1. In your InboxAware control panel navigate to the **Account Settings** page.
2. Click on the **Seed list** tab.

   ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/1.05T5g000006XMEuEAO.png)
3. Click the **Download CSV** button.

   ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/3.05T5g000006XMFTEA4.png)

Your email seed list will download so that you can add it to your email service provider account.

**Important**: Do not share this seed list with anyone else. Your list includes a set of email addresses that are unique to your account to monitor your campaign performance.

  
  

---

### Upload your seed list to your email service provider

Your seed list needs to be added to your email service provider account so that campaigns can be sent to the email accounts.

**Tip**: Upload the seed email addresses as a separate contact list or group so they don’t get mixed up with subscribers.

Your email service provider will need to include a specific attribute in the header of every email it sends, so that InboxAware can distinguish which email campaign sent to the seed list belongs to which account (also known as “x-headers”). InboxAware supports the following x-headers:

* X-250ok-CID
* X-rpcampaign
* rpcampaign
* X-PVIQ
* X-Campaign-ID
* X-CampaignID
* x-job

Confirm that your email service provider uses any of the above x-headers, and if not, request that they do. If your email service provider uses a different x-header to identify its unique email campaigns, please notify support@inboxaware.com and we’ll investigate adding it to our supported list.

---

### Send email campaigns to the seed list

Include the seed list contacts in every campaign you send to your subscribers or customers. The addresses in the seed list will receive your emails and populate deliverability results in InboxAware.

---

### Read your inbox placement reports

InboxAware receives the emails sent to your seed list and creates inbox placement reports for each campaign that you’ve sent to your seed list. The reports show you the percentage of emails delivered to the inboxes and to the spam folders for each of the mailbox providers.

Initially, the percent of missing emails will be high, and the percentage of inbox and spam emails very low. Then, as each mailbox provider starts accepting the emails sent to it, the percent of missing will start to decrease, and conversely, the percentage of inbox and spam emails will increase.