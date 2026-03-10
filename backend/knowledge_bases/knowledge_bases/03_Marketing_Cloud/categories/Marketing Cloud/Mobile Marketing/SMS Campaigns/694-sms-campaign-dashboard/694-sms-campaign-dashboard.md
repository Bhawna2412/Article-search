---
title: "SMS Campaign Dashboard"
articleID: 694
category: "Mobile Marketing > SMS Campaigns"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# SMS Campaign Dashboard

SMS Campaign Dashboard enables you to track the performance of your text message marketing campaigns and measure engagement metrics that complement your email marketing strategy. This helps optimize your multichannel marketing effectiveness by providing insights into SMS delivery, response rates, and customer interactions that can inform broader campaign strategies.

When properly monitored through the SMS dashboard, text marketing campaigns can substantially improve engagement by revealing which messages drive immediate responses, helping you refine messaging and timing for better multichannel campaign results.

The **SMS Dashboard** provides all relevant information about an SMS campaign, helping you find campaign information and track its performance in a single place.

On the dashboard, you can see a preview of the SMS along with the campaign details such as important dates, lists, mobile keywords used in the campaign, and so on. Most importantly, the SMS dashboard enables you to track the performance of your SMS campaign by providing key metrics at a glance and their respective drill-down reports.

To learn about SMS Campaigns, see [**Introduction to SMS Campaigns**](https://galaxy.maropost.com/s/article/Introduction-to-SMS-Campaigns) and [**Creating SMS Campaigns**](https://galaxy.maropost.com/s/article/Creating-SMS-Campaigns).

On the SMS Campaigns index page, Click the SMS campaign name on the SMS Campaigns index page to go to its dashboard.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SMSCampaignDashboard.05T5g00000jDTuJEAW.jpg)
The dashboard can be visually divided into three sections and consists of the following:

- Message Preview
-   - Click Report
  - Send Report

  Campaign Performance Insights
- Campaign Details

### Message Preview

A preview of how your message is displayed to your contacts. It shows the SMS content and is scrollable if the content is long.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SMSCampaignDashboardPreview.05T5g00000jDjt7EAC.jpg)

### Campaign Performance Insights

The campaign performance insights for the SMS campaign are shown as tiles.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SMSCampaignDashboardTiles.05T5g00000jDjsiEAC.jpg)

- **Total Sends: **The total number of SMS sent in the campaign.
- **Total Delivered:** The number of delivered SMS. The percentage shown in the tile is calculated as **(SMS Delivered)/(SMS Sent) x 100**.
- **Total Not Delivered:** The number of SMS that were not delivered. The percentage shown in the tile is calculated as **(SMS Undelivered)/(SMS Sent) x 100**.
- **Total Replies:** The number of replies received for the SMS. The percentage shown in the tile is calculated as *(***Total Replies)/(SMS Sends) x 100**.
- **Total Clicks: **The total number of times the links in the SMS were clicked. The unique click count refers to the unique clicks coming from different sources and the unique click percentage is calculated as **(Unique Clicks)/(Total Clicks) x 100**.

You can click the individual tiles to see a detailed report for that particular insight.

The count of Total Replies includes the number of text messages received back from the campaign's recipients within the **first 2 hours** of when the campaign was sent.  The reason for this cutoff period is due to the asynchronous nature of SMS messaging.  Interpreting an inbound text message received from one of your SMS contacts as a reply to a campaign most recently sent is an educated guess. Studies have shown that most people respond directly to a text message within the first 90 seconds of receipt.  Maropost believes that a 2-hour attribution window is more than enough.

Inbound text messages will always be verified against any Mobile Keywords that you've created for your mobile account.  An inbound text message received matching a Mobile Keyword is considered **valid,** and the keyword's message is sent back in response.  An inbound text message not matching a Mobile Keyword is considered **invalid,** and the invalid keyword's message is sent back in response.

> **Note:** If you used keywords in your SMS campaign, only those words that people text back within the first 2 hours count as valid. If someone sends any other word during this period, it will be considered an invalid reply, and they'll receive back the invalid keyword's response message.  This short period of keyword exclusivity makes sure that people reply to the correct deal in your messages.

#### Click Report

A total click count and drill-down click report are available on the dashboard if the click tracking option is enabled for the SMS campaign. To learn more about the click tracking option, see the [**Step 1: Compose**](https://galaxy.maropost.com/s/article/Creating-SMS-Campaigns#Step%201:%20Compose) section in the [**Creating SMS Campaigns**](https://galaxy.maropost.com/s/article/Creating-SMS-Campaigns) article.

The click report contains two tabs - OVERVIEW and DETAILED REPORT.

On the OVERVIEW tab, you can see a separate click and unique click count for all the links in your SMS campaign.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ClickReportOverview.05T5g00000jDjoWEAS.jpg)
On the DETAILED REPORT tab, you can find the following information:

- Phone number of the contact who clicked the link.
- The link that was clicked.
- Browser/OS/device type that was used.
- Source showing whether it was a data center or a non-data center (other).
- The time at which the link was clicked.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ClickReportDetailed.05T5g00000jDjobEAC.jpg)

#### Send Report

From this section, you can check the additional drill-down report of your total sent campaigns to a particular segment group.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/smssend0.05T5g000018ochXEAQ.png)
The report is organized with the following information:

- **Phone Number:** Includes the contact details of the receiver.
- **Status:** Depicts whether the SMS message has been sent, delivered, or has failed to reach a particular audience.
- **Reason:** Provides further insight into the status of an SMS campaign. For example, if the message status is showing failed for a contact, it will provide reasoning as to why the contact hasn't received the campaign.
- **Type of Failure:** Mentions whether a failed status is due to a temporary problem, such as poor network coverage, or a permanent one, such as an invalid service type or a campaign that is restricted in another country.
- **Message Segments:** Displays the total message batches that are present in a campaign. Since many network carriers have a character limit in an SMS, a large message would be broken down into multiple segments that would incur additional charges from the telecom company. Smaller messages will normally contain 1 or 2 segment batches.
- **Created At:** Indicates the date and time the campaign was created and sent.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/smssend1.05T5g000018oci6EAA.png)
**What is the difference between a "Sent" and a "Delivered" status?**

A "**Sent**" status means your campaign has been sent by the service provider but has not yet reached its destination. A "**Delivered**" status implies that the message has been sent and received on the recipient's smartphone.

Besides viewing the campaign status and its delivery success rate, you can download a detailed report for an in-depth review of your campaign metrics.

The reports can be curated depending on whether the campaign has been successfully sent or delivered. Plus, you can also include within a report wherein a receiver may have inputted an incorrect/correct response to your campaign. Once the report criteria are chosen, select the timelines during which the campaigns were sent. Click on **Export**.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/smssend2.05T5g000018ociBEAQ.png)
The report will be available in .xlsx format. Upon opening the spreadsheet, you can view various report metrics present for your various campaigns sent via your Marketing Cloud account.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/smssend3.05T5g000018ociGEAQ.png)

### Campaign Details

The Details section shows the important campaign information.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SMSCampaignDashboardDetails.05T5g00000jDjuPEAS.jpg)
The details available are:

- Status of the SMS campaign, stating whether it is in Draft or Sent.
- The ID of the SMS campaign.
- The date on which the SMS campaign was created.
- The date on which the SMS campaign was last updated.
- The date on which the SMS campaign was sent.
- Lists selected in the SMS campaign.
- Mobile Keywords used in the SMS campaign.

## Related Articles

**SMS & Mobile Marketing:**

- [Creating SMS Campaigns](https://galaxy.maropost.com/kb/articles/998-creating-sms-campaigns) - Learn how to create effective text marketing campaigns
- [Creating SMS Contact Lists](https://galaxy.maropost.com/kb/articles/1126-creating-sms-contact-lists) - Build and manage your SMS subscriber database
- [Campaigns For Mobile Apps](https://galaxy.maropost.com/kb/articles/1735-campaigns-for-mobile-apps) - Integrate SMS with mobile app engagement

**Multi-Channel Marketing:**

- [Bulk Messaging Examples](https://galaxy.maropost.com/kb/articles/814-bulk-messaging-examples) - Best practices for mass messaging campaigns
- [Create Social Media Content](https://galaxy.maropost.com/kb/articles/985-create-social-media-content) - Coordinate SMS with social media campaigns

**Performance Tracking:**

- [Bulk Messaging Personalised Email Headers](https://galaxy.maropost.com/kb/articles/815-bulk-messaging-personalised-email-headers) - Enhance multichannel message personalization