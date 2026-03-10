---
title: "Creating Segments with Legacy Segment Builder"
articleID: 919
category: "Contact Management > Segments"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Creating Segments with Legacy Segment Builder

You can create segments to group contacts based on specific criteria like engagement behavior, demographics, or purchase history, enabling more targeted campaigns that typically lead to better engagement rates. This helps optimize campaign performance by allowing you to send relevant messages to specific audience groups rather than broadcasting the same content to your entire contact database.

When properly configured, segments can substantially improve email marketing ROI by focusing your efforts on contacts most likely to engage with specific types of content or offers.

Maropost Marketing Cloud enables you to group contacts and build segments (via the **Legacy Builder**) based on certain criteria, which you can use to send personalized campaigns.

To learn briefly about segmentation and get an introduction to Segments in Maropost, see [**Introduction to Segments**](https://galaxy.maropost.com/s/article/Introduction-to-Segments). And to learn more about the rules and all the conditions available for creating the segment, see [**Segment Rules in Legacy Segment Builder**](https://galaxy.maropost.com/s/article/Segment-Rules-in-Legacy-Segment-Builder).

### Creating a New Segment

Perform the following steps to create a new segment:

1. 
  In the Navigation, go to AUDIENCE, and select Segments. On the Email Segments page, click **NEW SEGMENT**.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/seg1.05T5g000013H2HKEA0.png)
2. 
  On the Create New Segment page, select **Legacy Segment Builder**.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CreateSeg.05T5g000013H2MSEA0.jpg)
3. 
  On the New Segment page, enter a segment name.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/seg2.05T5g000013H2MXEA0.png)
4.   1.     - SELECT CONTACTS WHO MATCH ALL RULES DESCRIBED BELOW:

The rules will be separated by an 'AND' operator. This means the rules **are dependent** on each other. Eg. Clicked AND Location is Toronto will fetch all contacts that both rules apply to.
    - SELECT CONTACTS WHO MATCH ONE OR MORE OF THE RULES DESCRIBED BELOW:

The rules will be separated by an 'OR' operator. This means the rules are independent of each other. Eg. Clicked OR Location is Toronto will fetch all contacts that meet ONE or BOTH of these rules.

    Select either of the following options to determine whether to fetch contacts satisfying any one or all the rules:
  2. INCLUDE ALL ACTIVE CONTACTS:

The Select All Active Contacts option relaxes the rules for selecting contacts and will include all contacts except for those that are in the 'Do Not Mail' list or have hard-bounced. Use this option when you are using a process other than list subscriptions to define active contact.

  Choose the basis of segmentation.

  A rule contains at least one set of criteria. However, you can add multiple criteria within a rule. Click Add Criteria to add new criteria. By default, the criteria within a rule follow the 'OR' operator behavior, that is, contacts who satisfy any one of the criteria are fetched as part of the rule. Select the Match all criteria checkbox to change the behavior to "AND' operator. That is, only contacts who satisfy all the criteria defined for a rule are fetched.

**Note**: The Total Filter Count shows the number of filters used in the segment. Keep the total number of filters limited to 100 for better performance and efficiency of the segment.
5. 
  Click **Add New Rule** to add a new rule. You must add at least one rule. However, you can add as many rules as you need.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/seg3.05T5g000013H2MwEAK.png)
6. Click **Save Segment** to create the segment.

## Related Articles

**Contact Management & Segmentation:**

- [Introduction To Segments](https://galaxy.maropost.com/kb/articles/920-introduction-to-segments) - Understanding segment fundamentals and benefits
- [Acquisition Overview](https://galaxy.maropost.com/kb/articles/1211-acquisition-overview) - Build your contact database for segmentation
- [7 Best Practices For Making The Most Of An Email Unsubscribe](https://galaxy.maropost.com/kb/articles/1720-7-best-practices-for-making-the-most-of-an-email-unsubscribe) - Manage contact preferences and retention

**Campaign Targeting:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Apply segments to targeted campaigns
- [Campaign Tags](https://galaxy.maropost.com/kb/articles/926-campaign-tags) - Organize targeted campaigns using tags