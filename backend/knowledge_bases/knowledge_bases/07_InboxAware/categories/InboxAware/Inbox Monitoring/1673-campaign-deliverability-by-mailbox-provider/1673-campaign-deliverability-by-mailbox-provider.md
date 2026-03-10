---
title: "Campaign Deliverability by Mailbox Provider"
articleID: 1673
category: "Inbox Monitoring"
knowledgeBase: "InboxAware"
lastUpdated: 2022-03-22
---

# Campaign Deliverability by Mailbox Provider

In your InboxAware control panel click on the **Inbox monitoring** menu to open the Campaign Deliverability page. This page displays information about all of your email campaigns that have been sent to the seed list. To get more details about a specific campaign click on the subject line.

On this page you'll see information about the campaign including its subject line, campaign ID (assigned by your email service provider), when it was first seen in the InboxAware seed list, the sending domain, and how long it took for your campaign to be delivered to the entire seed list. If the subject line included an emoji, then that emoji will appear in the subject line here as a sub-string of characters looking something like `=?UTF-8?Q?`.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/1.05T5g000006XMnaEAG.png)

The Inbox, Spam, and Missing boxes show you the deliverability results in percentage for this campaign for the entire seed list. The Sending IPs shows you how many IP addresses your email service provider used to send this campaign.

The Mailbox Provider table helps you quickly identify if the campaign’s overall inbox placement percentage was across every mailbox provider, or if it was impacted by just a few of them.

**Tip**: By default this page shows 25 mailbox providers sorted in alphabetical order. You can change the sort order by clicking on any of the column headers, with the exception of Missing and Duration. Click the **Rows per Page** dropdown menu to view 10, 25, 50, or 100 mailbox providers per page.

This report shows you the following information:

* **Mailbox Provider**: The name of the mailbox provider that the email address of the seed list was created.
* **Inbox Percentage (and count)**: The percentage of emails found in the inboxes of the seed list.
* **Spam Percentage (and count)**: The percentage of emails found in the spam folders of the seed list.
* **Missing Percentage (and count)**: The percentage of emails that never made it to the seed list.
* **First Seen**: The timestamp when the campaign was first read in the seed list.
* **Duration**: How long it took for the email campaign to be delivered to the entire seed list. A campaign’s duration that is unusually lengthy compared to others could indicate that the campaign was being limited by one or more mailbox providers.

---

### Filters

Click the **Filter** button to open the filter options. Choose any combination of filters and click the **Apply** button. The filter options close, and the table will change to show the inbox placement metrics based on those filters.

To remove the filter options, click the **Filter** button again and click the **Reset** button. The filter options close, and the table returns to its original state.

The available selections for every filter option are based on your campaigns that InboxAware has read in its email accounts of the seed list. If you’re expecting to see a particular filter selection (i.e. an IP address) but don’t, then it’s most likely that InboxAware hasn’t yet received your email with that information.

#### Filter by IP Address

The options in this filter come from the email headers of each email when you sent the campaign to your InboxAware seed list. This option is very helpful if your campaigns are being sent from a shared pool of IP addresses. It’s also helpful if you have multiple IP addresses dedicated to your account at your email service provider. By setting the option to filter by IP address, you can quickly narrow down low inbox placement to specific IP addresses compared to the other IP addresses.

#### Filter by Mailbox Provider

Use this option when you want to quickly see if your campaign suffered poor deliverability with specific mailbox providers. Since this screen already shows you the deliverability metrics for each mailbox provider, this filter still is valuable if you want to export the data for a specific group of mailbox providers for further analysis.

The filter is also helpful in giving you a quick count of how many different sending IP addresses were used to send the emails to the selected mailbox providers. When you apply the filter, you’ll notice that the information presented in the Inbox, Spam, Missing and Sending IPs sections are automatically calculated according to your filter.