---
title: "Campaign Deliverability for Individual Seed Addresses"
articleID: 1672
category: "Inbox Monitoring"
knowledgeBase: "InboxAware"
lastUpdated: 2022-03-22
---

# Campaign Deliverability for Individual Seed Addresses

In your InboxAware control panel navigate to the **Inbox monitoring** menu to open the **Campaign deliverability** page. Click on the name of a mailbox provider to see inbox placements for each seed address of that provider.

This screen is helpful when you want to inspect the email headers of a specific email in order to ascertain why one particular email’s inbox placement differs from another. If you’re looking at the seed addresses for Gmail, you’ll also see which category Gmail assigned to the email for each individual email account.

This page shows you the following information:

* **Email address**: the specific email address of the seed list.
* **IP Address**: the IP address that your Email Service Provider used to send the email to the specific email address.
* **Status**: whether email was delivered to the inbox or spam folder, or missing entirely.
* **Category**: the Gmail-assigned category (only shown when viewing Gmail email accounts).
* **Email Time Stamp**: this timestamp is automatically set for all email accounts of the seed list when the very first email of your campaign is detected. The individual timestamp for each email address is subsequently updated when the email is detected in the address’ account.

Click on any email address to view the entire source code of the specific email including its headers. You can download the entire email source so that you can send it to your postmaster, your Email Service Provider, or Mailbox Provider to help remediate any inbox placement issues.