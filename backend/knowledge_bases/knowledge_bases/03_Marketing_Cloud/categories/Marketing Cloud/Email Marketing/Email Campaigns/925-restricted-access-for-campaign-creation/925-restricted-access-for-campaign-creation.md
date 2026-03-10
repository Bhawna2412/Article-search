---
title: "Restricted Access for Campaign Creation"
articleID: 925
category: "Email Marketing > Email Campaigns"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-19
---

# Restricted Access for Campaign Creation

You can implement restricted access workflows to separate campaign creation responsibilities from sending permissions, which helps improve operational efficiency by allowing team specialization while maintaining quality control. This approach helps ensure campaign accuracy by requiring approval processes for critical sends while streamlining routine campaign management tasks.

When properly configured, restricted access workflows reduce manual oversight requirements while maintaining campaign quality standards by utilizing appropriate approval gates and role-based permissions.

Some marketing organizations will structure their teams with a separation of responsibilities in a workflow process.

Maropost Marketing Cloud offers two types of restricted access workflows for campaign creation. They are, namely, "**Schedule and Send Only**" and "**Requires Approval**" access types.

![campaign_access.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWo5.05T5g00000BkWo5EAF.png)

## Schedule and Send Only

This restricted access supports workflows in which the responsibility of creating a campaign, including its content and targeted audience, is separated from the responsibility of scheduling and sending the campaign.

A user having this access restriction is limited as follows:

- 
- 
- 
- 
- 
- 
- Cannot access any of these fields:  - 
  - 
  - 
  - 
  - 
  - 
  - 
  - 
  - 
  - 
  - 
  - 
  - 
  - 
  - 

## Requires Approval

This restricted access supports workflows in which the responsibility of staging a campaign (creation and scheduling) is separated from the responsibility of sending the campaign.

A user having this access restriction can create and edit a campaign all the way to scheduling it but is not allowed to send it. Instead, the user must select at least one campaign approver and submit the campaign for approval at the final step.

> **Note:** **Note:** A Campaign Approver is a user who has full access rights to the Campaigns user account settings.

The campaign is saved in DRAFT mode to prevent it from being sent if it has not been reviewed and approved before its scheduled send date and time. When the user submits the campaign for approval, an email is immediately triggered to the Campaign Approver(s), notifying them that the campaign requires their approval.

![requires_approval_email.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWo6.05T5g00000BkWo6EAF.png)The email includes a link to the specific campaign, so all they need to do is click the link, log in to Maropost for Marketing, review the campaign settings, and then send it.

## Related Articles
**Campaign Management:**

- [Email Campaigns Overview](https://galaxy.maropost.com/kb/articles/930-email-campaigns-overview) - Understanding campaign fundamentals
- [Managing Email Campaigns](https://galaxy.maropost.com/kb/articles/928-managing-email-campaigns) - Organize and track your campaigns
- [Campaign Tags](https://galaxy.maropost.com/kb/articles/926-campaign-tags) - Tag campaigns for better organization
**User Access & Permissions:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Basic campaign creation guide
- [Creating Ab Campaigns](https://galaxy.maropost.com/kb/articles/927-creating-ab-campaigns) - Advanced campaign testing