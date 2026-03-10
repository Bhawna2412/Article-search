---
title: "Managing Email Campaigns"
articleID: 928
category: "Email Marketing > Email Campaigns"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-25
---

# Managing Email Campaigns

You can use the Email Campaigns page to efficiently oversee your entire email marketing operation, providing centralized access to campaign performance metrics and management tools that help streamline your workflow. This centralized approach significantly improves operational efficiency by allowing you to monitor campaign status, assess performance data, and make necessary adjustments from a single location.

Effective campaign management enables data-driven decision-making by providing quick access to key performance indicators and campaign metrics. When properly utilized, these management capabilities help optimize your email marketing ROI by identifying high-performing campaigns that can be duplicated and underperforming ones that need adjustment.

The **Email Campaigns** page is the starting point from which you can view and manage previously created campaigns, as well as create new ones.

## Viewing Campaigns and Their Performance Metrics

To access the Email Campaigns page, in the **Navigation**, go to **Campaigns**, and select **Email Campaigns**.

On the Email Campaigns page, you can view all your existing campaigns and their details, including the campaign name, the number of contacts, the campaign's status, the date the campaign was sent, and the date the campaign was last updated. You can use the filtering options, such as Draft, Sent, Journeys, and so on, to view specific campaigns.

To see a report on how your campaign is performing, click on the campaign row. The campaign report contains various data metrics that can help you assess the campaign delivery and performance.

> **Note:** **Note:** The same report can also be accessed from the **Analytics** section. To learn more about the campaign report, see [**Custom Reports**](https://galaxy.maropost.com/s/article/Custom-Reports-Overview).

## Managing Email Campaigns

You can manage the email campaigns using the action menu (three dots) available under the Actions column. You can perform the following actions: editing, deleting, and duplicating.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/EmailCampaignsIndexPage.05T5g00000TjgeSEAR.png)

### Editing an Email Campaign

Click the action menu (three dots) for the campaign and select **Edit Campaign**. You can update the campaign as needed.

When editing a finished campaign (saved as a draft or scheduled), you can easily move between the steps just by clicking the step progress bar at the top.

> **Note:** **Note:** After you make an edit, you can only move forward by clicking Next.

### Deleting an Email Campaign

Click the action menu (three dots) of the campaign and select **Delete Campaign Permanently**. You will be prompted to confirm, and upon selecting "**Yes**," the campaign will be deleted permanently.

> **Note:** **Note:** You cannot delete a campaign that is already sent. However, you can delete a campaign that is in Draft or Scheduled status or is a recurring campaign.

### Duplicating an Email Campaign

Click the action menu (three dots) for the campaign and select **Duplicate Campaign**. Enter a new name for the campaign. You may retain the other details as they are or update them as needed.

## Changing the Links (URLs) in Content of Sent Campaigns

You can replace a URL in your sent email campaign by clicking the **Change Content URL** button on the bottom left of the **Email Campaigns** page. In the **Change Content URL for Campaigns** dialog box, enter the old URL that was sent in the email and the new URL that you want to replace the old one with. Then, click **Change**, and the old URL gets replaced by the new URL in all the sent and scheduled email campaigns.

> **Note:** **Note: **You cannot change a URL that contains relational tags, transactional tags, or local variables. If the link is used in the HTML part of the content, then the URL will not be replaced. However, the contacts who click the link will be redirected to the new URL.

## Receiving High Spam Alerts

While creating and sending email campaigns to your clients, you must ensure your emails fall under your clients' inboxes and not their "**Spam**" folder. If not done correctly, your client's spam folder will become inundated with your emails, which can negatively impact your sender's reputation score with your ISP and affect your campaign's deliverability rate.

To keep you informed, whenever your campaign breaches the spam threshold, Marketing Cloud sends one spam alert to your primary point of contact or the account's admin via email and an in-app notification pop-up. 

As an admin, you can set a user (or an agent) as a primary source of communication with Maropost from the [**Users & Permissions**](https://galaxy.maropost.com/kb/articles/47-managing-users-and-permissions-in-marketing-cloud) module. Furthermore, admins and agents with access to the [**Reports & Analytics**](https://galaxy.maropost.com/kb/articles/1125-reports-and-analytics-overview) section will have the ability to reset and calibrate the spam report threshold, which gives them greater control and flexibility when sending campaigns in large volumes without risking ISPs flagging the emails as unsolicited junk email.

For one-time campaign broadcasts, the system sends a single email notification to the deliverability team and admin, plus one in-app notification.

For recurring or journey campaigns that trigger a spam alert, you can fix the email content or modify your audience group, then reset the alert. When you resend the campaign, you'll only receive a new spam alert notification (both email and in-app) if the subsequent campaigns surpass the 2% complaint threshold based on total emails sent.

## Related Articles

**Campaign Management:**

- [Email Campaigns Overview](https://galaxy.maropost.com/kb/articles/930-email-campaigns-overview) - Understanding campaign fundamentals
- [Campaign Tags](https://galaxy.maropost.com/kb/articles/926-campaign-tags) - Organize campaigns using tags
- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Basic campaign creation process

**Advanced Campaign Features:**

- [Creating Ab Campaigns](https://galaxy.maropost.com/kb/articles/927-creating-ab-campaigns) - Test different campaign approaches
- [Creating Transactional Email Campaigns](https://galaxy.maropost.com/kb/articles/921-creating-transactional-email-campaigns) - Automated messaging setup