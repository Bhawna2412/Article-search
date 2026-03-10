---
title: "Creating A/B Campaigns"
articleID: 927
category: "Email Marketing > Email Campaigns"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-19
---

# Creating A/B Campaigns

You can use A/B campaigns to systematically improve your email marketing performance by testing different elements of your campaigns before sending to your full audience. This approach helps optimize campaign effectiveness by identifying which subject lines, content, or sender names typically perform better with your specific audience, leading to measurable improvements in engagement metrics like open rates and click-through rates.

A/B testing enables data-driven decision-making in your email marketing strategy, allowing you to make informed choices about campaign elements rather than relying on assumptions. When properly configured, this testing methodology helps maximize email marketing ROI by ensuring you send the most effective version of your campaign to the majority of your subscribers.

An **A/B campaign** (also known as a **split test campaign**) is a method used to test which campaign your contacts are the most receptive to or most engaged with.

In other words, it’s a way to test which campaign is the most effective to increase the engagement of your contacts, in terms of opens, clicks, or purchases. You can choose what you want to test (content, subject, or from name) and compare the results, as even marginal improvements in drop-off rates can represent a significant gain in sales.

## **Creating an A/B Campaign**

Perform the following steps to create a new A/B campaign:

1. In Navigation, go to **CAMPAIGNS** and select **Email Campaigns**. On the **Email Campaigns** page, click **NEW CAMPAIGN**.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ABCampaignNav.05T5g00000bCUI2EAO.png)
2. On the **Create New Campaign** page, click **A/B Email Campaign**.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/NewCampaignSelectType.05T5g00000bCUIgEAO.png)
3. On the **New A/B Campaign** page, in step 1, provide the A/B campaign details.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ABCampaignStep1.05T5g00000bCUMOEA4.jpg)

- In the **Campaign Information** section, enter the name of the campaign. Then, enter the "from email" and "reply to" email addresses*.*
- In the **Contacts** section, select the target group(s) from the given options: lists, segments, suppress lists, suppress segments, and suppress workflows*.* You may also select a campaign tag to associate with your campaign.
- 
- Enable the "**Show email preview link**" toggle to attach an option for email preview. When the toggle is enabled, the text "If you are having trouble viewing this email, click here” is automatically inserted at the top of your campaign.

4. Click **NEXT**.

5. In Step 2 of the **New A/B Campaign** page, select the winning criteria for A/B testing.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ABCampaignStep2.05T5g00000e4CRMEA2.png)
 The following options are available:

- **Top Choices: **The campaign sent to the final group combines the subject line and from name from the test group having the highest open rate, together with the content from the test group having the highest click rate.
- 
- 
- 
- 
- **Highest Conversion Rate**: Everything from the email sent to the test group having the highest conversion rate is replicated and sent to the final group.

6. Enter the split group information for the A/B test. You must* *fill in all fields for split groups. Two or more groups are required for an A/B split test to be sent. You can select different content, subjects, 'from names,' pre-headers, and 'send at' times for all different groups. Allocate a percentage to each group; the sum of percentage allocations should not exceed 100%. 

> **Note:** **Note:** The percentage you don’t allocate to split groups will be automatically allocated to the final group (for example, if you only send to 70% of the lists, the remaining 30% will be sent to the final group). If the allocated percentages add up to 100%, there will be no emails sent to the final group based on the winning criteria. You can also set a schedule for when the final campaign will be sent. 

**Duplicating Test Groups:** If you want to send your A/B campaign to more than two test groups, you can simply duplicate the split groups and enter different values for the new ones. To create duplicate split groups, select the test groups and then click the Duplicate icon in the top right corner.

> **Note:** **Note:** The Duplicate and Delete icons for the split groups are disabled until a split group is selected. You can select multiple split groups to duplicate or delete in bulk.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SplitGroups.05T5g00000cTYRpEAO.png)

7. Optionally, you can send a test email for the campaign. Enter up to 30 recipients for the test email and click Send Test.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SendTest.05T5g00000cTlqOEAS.png)

> **Note:** **Note: **The test email recipients do not have to be from the same contact lists that you have selected for the campaign. You can select up to 20 contacts in the form of contact lists and manually enter up to 10 contacts in the form of email addresses. You can select multiple lists for the test email, but the total contacts must be limited to 20.

8. Optionally, you can use the **Pre-Send Calculation** toggle button to start calculating the audience three hours prior to sending the campaign. You can use the option to prevent any possible delays in delivering campaigns that contain numerous segments or suppressions.

> **Note:** **Note: **The "**pre-send calculation**" option can be used only if you are scheduling the campaign to be sent after at least three hours. If you enable the "**pre-send calculation**" toggle and schedule the campaign for under three hours, you will get an error.
> 
> Once the "**pre-send calculation**" begins working (three hours before send time), the campaign gets locked, and you can no longer edit the campaign details. However, you can edit the items selected in the campaign. For example, you cannot select different content for the campaign, but you can edit the selected content in the content editor.

9. Click the **SAVE** button to save the campaign as a draft, **SCHEDULE CAMPAIGN** to schedule the campaign to be sent, or **SEND NOW** to send the campaign regardless of the scheduled send time.

The option for scheduling the campaign is available only if:

1. A winning criterion other than Manual Send is selected.
2. The total size of the test groups is less than 100%.

## Related Articles

**Campaign Testing & Optimization:**

- [Email Campaigns Overview](https://galaxy.maropost.com/kb/articles/930-email-campaigns-overview) - Understanding campaign fundamentals
- [Ab Campaign Reports](https://galaxy.maropost.com/kb/articles/632-ab-campaign-reports) - Analyze A/B test results
- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Master basic campaigns before A/B testing

**Campaign Management:**

- [Managing Email Campaigns](https://galaxy.maropost.com/kb/articles/928-managing-email-campaigns) - Organize and track your campaigns
- [Campaign Tags](https://galaxy.maropost.com/kb/articles/926-campaign-tags) - Tag campaigns for better organization