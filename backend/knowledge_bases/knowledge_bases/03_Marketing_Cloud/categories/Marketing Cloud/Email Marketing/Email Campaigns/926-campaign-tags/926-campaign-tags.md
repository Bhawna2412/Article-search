---
title: "Campaign Tags"
articleID: 926
category: "Email Marketing > Email Campaigns"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-19
---

# Campaign Tags

You can use campaign tags to organize and categorize your email campaigns for more efficient reporting and analysis, which streamlines your workflow by allowing you to group related campaigns automatically. This helps optimize campaign management by enabling you to track performance across campaign categories, content types, or marketing initiatives without manually selecting individual campaigns.

Campaign tags enhance your reporting effectiveness by allowing you to analyze performance trends across grouped campaigns, which improves marketing effectiveness through data-driven insights and better campaign optimization.

**Campaign Tags** provide powerful flexibility for custom reporting. All you need to do is select the keyword that you’ve tagged your campaigns with. Custom Reports will automatically select those campaigns you’ve tagged with the keyword, so you don’t have to.

## Managing Campaign Tags

You can manage your campaign tags and create sub-tags of campaign tags on the Campaign Tags index page. The page also acts as the starting page for creating new campaign tags.

In Navigation, go to **Campaigns**, and select **Campaign Tags**.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CampaignTagsIndexPage.05T5g00000TjK66EAF.png)You can use the Action drop-down menu to do the following:

- **Add Campaign Sub-Tag:** Use the option to create sub-tags for the campaign tag. The campaign tags support a nested hierarchy. You can create as many parent-level and child-level tags as you want. The purpose of this hierarchy is to provide a convenient way of organizing your campaign tags.
You can click the name of a tag to view all its sub-tags.
- 
- 
- **Delete Tag: **Use the option to delete the campaign tag. Deleting a tag deletes its sub-tags.

> **Note:** **Note: **When you delete a campaign tag, it is removed from all campaigns that are tagged with it. You cannot delete a tag if it is used in a custom report.

## Creating a Campaign Tag

You can create a new campaign tag with a quick single step. On the Campaign Tags index page, click New Tags. Then, in the New Tag dialog box, enter a name for your tag and click Create.

> **Note:** **Note:** You can also create a new campaign tag on the campaign builder flow. For more information, see [**Creating Email Campaigns**](https://galaxy.maropost.com/s/article/Creating-Email-Campaigns).

## Importing Campaign Tags

If you intend to use many campaign tags, you can first organize them in either an XML-formatted or a JSON-formatted file and then import them into your Maropost account.

Here’s an example of a nested hierarchy of campaign tags in JSON format:

```clojure
{
  "Featured": {
    "Daily": [
      "The Daily Bite",
      "Doctor's Daily",
      "Women's Health"
    ],
    "Frequent": [
      "Living Better",
      "Men's Health"
    ],
    "Occasional": [
      "Sponsored",
      "What's New"
    ]
  }, ...
```

Importing the file is primarily for creating your nested hierarchy of campaign tags, ensuring they are organized from the start. When you re-import a file, it will replace the campaign tags that currently exist. For this reason, once you’ve tagged a campaign or used a campaign tag in a report, you can no longer import it from the file.

## Tagging Your Campaigns

You can tag any campaign in Marketing Cloud, including scheduled campaigns, A/B campaigns, journey campaigns, data journey campaigns, and transactional campaigns.

- 
- 
- **Journey Campaigns**: When sending a journey campaign using the "Send Email" action widget, use the "Campaign Tags" tab on the dialog box to select the campaign tags you want to assign to the campaign.
- **Data Journey Campaigns**: When sending a data journey campaign using the "Send Email" action widget, use the "Campaign Tags" tab on the dialog box to select the campaign tags you want to assign to the campaign.
- **Transactional Campaigns**: When creating a transactional campaign, you can select from the available campaign tags to assign it to the campaign.

## Related Articles

**Campaign Organization:**

- [Email Campaigns Overview](https://galaxy.maropost.com/kb/articles/930-email-campaigns-overview) - Understanding campaign fundamentals
- [Managing Email Campaigns](https://galaxy.maropost.com/kb/articles/928-managing-email-campaigns) - Organize and track your campaigns
- [Creating Transactional Email Campaigns](https://galaxy.maropost.com/kb/articles/921-creating-transactional-email-campaigns) - Automated messaging with tags

**Contact Organization:**

- [Contact Tags](https://galaxy.maropost.com/kb/articles/917-contact-tags) - Tag contacts for better segmentation
- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Apply tags to targeted campaigns