---
title: "Campaign Deliverability History"
articleID: 1669
category: "Inbox Monitoring"
knowledgeBase: "InboxAware"
lastUpdated: 2022-03-22
---

# Campaign Deliverability History

In your InboxAware control panel navigate to the **Inbox Monitoring** page. This report shows you the following information:

* **Subject Line**: The campaign’s subject line. If the subject line included an emoji, then that emoji will appear in the subject line here as a sub-string characters looking something like `=?UTF-8?Q?`.
* **Campaign ID**: The unique identifier of the campaign assigned by your email service provider
* **Inbox Percentage (and count)**: The percentage of emails found in the inboxes of the seed list.
* **Spam Percentage (and count)**: The percentage of emails found in the spam folders of the seed list.
* **Missing Percentage (and count)**: The percentage of emails that never made it to the seed list.
* **First Seen**: The timestamp when the campaign was first read in the seed list.
* **Sending Domain**: The domain that was used to set the email’s [DKIM](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDomainKeys_Identified_Mail) signature.
* **Duration**: How long it took for the email campaign to be delivered to the entire seed list. A campaign’s duration that is unusually lengthy compared to others could indicate that the campaign was being throttled by one or more mailbox providers.

By default this page shows the 10 most recent campaigns by when they were first seen in the email accounts of the InboxAware seed list. You can change the sort order by clicking on any of the column headers, with the exception of Missing and Duration. You can also change the number of campaigns that you want to see on a single page. Click the Rows per Page dropdown menu to view 10, 25, 50, or 100 campaigns per page.

---

### Filters

Click the **Filter** button to set filters for this page. Choose any combination of filters and click the **Apply** button. The table will change to show the inbox placement metrics based on those filters.

To remove the filter options, click the **Filter** button again and click the **Reset** button.

The available selections for every filter option (with the exception of date range) are based on your campaigns that InboxAware has read in its email accounts of the seed list. If you’re expecting to see a particular filter selection (i.e. an IP address) but don’t, then it’s most likely that InboxAware hasn’t yet received your email with that information.

#### Filter by Date Range

Use this option when you want to do a historical analysis of our campaigns’ inbox placement. The first time you click a date displayed in the calendar, the From Date is set. The second time you click a date displayed in the calendar, the To Date is set.

#### Filter by Subject Line

Use this option if you’ve received feedback from many of your subscribers stating that they’ve not received your email. Filter by the subject line to you quickly find that campaign in InboxAware so that you can determine if there was an exceptionally high percentage of emails routed to the spam folder and/or missing. This filter option is helpful when you’re doing A|B testing and (assuming each test group has the same subject line) you want to see if there’s any inbox placement variance between each group.

#### Filter by Sending Domain

Use this option if you use multiple sending domains for your campaigns and you want to see if you’re experiencing deliverability issues with campaigns sent from any particular domain. The choices in this filter option come from the “from address” of all your campaigns that have been sent to your InboxAware seed list.

Use this option if you use multiple sending from domains for your different campaigns to see deliverability issues with campaigns sent from any particular domain

#### Filter by IP Address

This option is very helpful if your campaigns are being sent from a shared pool of IP addresses. It’s also helpful if you have multiple IP addresses dedicated to your account at your email service provider. The options in this filter come from the email headers of all your campaigns that have been sent to your InboxAware seed list.

This option is very helpful if your campaigns are being sent from a shared pool of IP addresses. It’s also helpful if you have multiple IP addresses dedicated to your account at your ESP. By setting the option to filter by IP address, you can quickly spot specific IP addresses that may be suffering poor deliverability compared to the other IP addresses

#### Filter by Mailbox Provider

The choices in this filter are defined by the seed addresses themselves. Use this option when you want to quickly see if your campaigns are suffering poor deliverability to specific mailbox providers. Combine this filter with the date range filter to see if you can spot any trends in which your deliverability with an mailbox provider started declining (or improving). It’s also helpful to know when poor inbox placement started occurring.