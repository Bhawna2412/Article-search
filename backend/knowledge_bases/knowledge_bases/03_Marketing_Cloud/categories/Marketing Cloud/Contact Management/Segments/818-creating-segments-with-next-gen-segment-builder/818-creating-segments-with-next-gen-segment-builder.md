---
title: "Creating Segments with Next-Gen Segment Builder"
articleID: 818
category: "Contact Management > Segments"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-05
---

# Creating Segments with Next-Gen Segment Builder

You can create highly targeted audience segments based on contact behavior, preferences, and engagement patterns to send more relevant email campaigns. This segmentation capability enables marketing teams to deliver personalized messaging that can substantially improve engagement rates and campaign effectiveness compared to mass email approaches.

The Next Generation Segment Builder, including AI-powered segment creation, streamlines the process of building complex audience criteria while ensuring precision targeting. When properly utilized, strategic segmentation typically leads to better campaign performance through improved relevance and helps optimize email marketing ROI by targeting audiences more efficiently.

Maropost Marketing Cloud enables you to group contacts and build segments based on certain criteria, which you can use to send personalized campaigns.

To learn briefly about segmentation and its importance in Maropost Marketing, see [**Introduction to Segments**](https://galaxy.maropost.com/s/article/Introduction-to-Segments). Likewise, to learn more about the rules and conditions applicable to creating the segment, see [**Segment Rules**](https://galaxy.maropost.com/s/article/Segment-Rules-in-Next-Gen-Segment-Builder).

## Creating a New Segment Manually

To create a new segment, perform the following steps:

1. From your Maropost Marketing Cloud account, visit the **Audience** section and select **Segments**. On the Email Segments Index page, click on **New Segment**.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/segment9.05T5g000013H1VGEA0.png)
2. We are currently providing two options. You can either choose the **Legacy Builder **to create segments in the original UI format, or you can select our recommended option of the **Next-Generation Builder**, wherein you can build segments with up-to-date rules, criteria, and attributes. In this example, let's focus on the Next-Generation Segment Builder.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/segment10.05T5g000013H1ctEAC.png)
3. On the Next Generation Builder page, enter the segment name. Select the "**Include all active contacts**" option if you want to include all contacts that are registered in Maropost Marketing Cloud, irrespective of whether they are subscribed to a list or not. This option, however, will still exclude contacts that are in the **DNM** (**Do Not Mail**) lists. If you wish to create segments for only subscribed users, you can uncheck the **active contacts** checkbox.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/segment11.05T5g000013H1A2EAK.png)
4. `Note:``The “Match All” (AND) toggle will be enabled by default.`
  ![segment24.png](https://us.v-cdn.net/6038474/uploads/CJKSBS8X1FYS/segment24.png)
5. Next, start building your ruleset by first choosing a category. Upon selecting a category, a new placeholder field emerges. Select an option from the given list.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/segment12.05T5g000013H1eVEAS.png)
6. Now select an attribute for the selected field. Sometimes, you will be asked to insert specific conditions depending on the attribute you have chosen. The contacts must fulfill these additional conditions so they can be fetched into the segment.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/segment13.05T5g000013H1cuEAC.png)
7. `Note:``Criteria within a rule are connected by an “OR” logic by default. This logic can, however, be switched to “AND” logic by clicking on the “AND” bubble displayed to the right of the “OR.”`
  ![segment14.png](https://us.v-cdn.net/6038474/uploads/AJHJQEWIX3A2/segment14.png)
8. The Next Generation Segment page allows you to drag and rearrange the rules (or the conditions within them) according to your needs.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/segment15.05T5g000013H1g7EAC.gif)
9. Once you have finished preparing the rules, click on the Confirm icon to see the human-readable explanation of your segment criteria. Please note that you'll still need to save your segment for your changes to take effect. If you wish to delete any rule or condition, a **Discard** icon is also available.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/segment16.05T5g000013H1gHEAS.png)
10. `Note:``The maximum number of rules and the criteria within them comprise the entire segment. To improve the segment's performance and efficiency, keep the total number of filters (i.e., rules & criteria altogether) limited to 100.`
  ![segment17.png](https://us.v-cdn.net/6038474/uploads/7SOQMMOA9J7C/segment17.png)

## Creating a New Segment via the AI Builder

Instead of manually inputting the conditions in the segment builder, you can use our Natural Language Processing toolkit, based on our AI builder, to systematically create a set of conditions for your segments in no time.

1. To begin creating segments, select the **Next Generation Segment Builder** option.
  ![segment10.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ1000005rrkJMAQ.jpg)
2. The segment builder page opens up, and a side panel gets expanded, prompting you to enter a segment rule keyword or a basic description of the segment.
  ![segment26.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ1000005rs85MAA.jpg)
3. If you are having difficulty mentioning certain keywords, use the **Segment Prompts** to view a list of general sentences that can be used to create a rule based on your requirements.
  ![segment27.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ1000005rs8tMAA.jpg)
4. Click on the **Preview Rule** to see the layout structure and the order in which the segment categories and their attributes are inserted in the segment builder region. It also displays a list of contact records that meet the criteria, along with the total segment count.
  ![segment29.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ1000005rs93MAA.jpg)
5. Once you are satisfied with the results provided by the AI builder, save the changes made.
  ![segment30.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ1000005rs9mMAA.jpg)
6. The segment category and its conditions get preloaded in the segment builder. Similarly, you can use the **Build With AI** button to create multiple rules or conditions within a rule to create segments much more quickly and effectively.
  ![segment31.png](https://us.v-cdn.net/6038474/uploads/VMWFP0AO5Z00/segment31.png)

<details>
<summary>How to create RFM-based segments using the AI Builder?</summary>

With the AI builder, you can construct segments that fetch contacts based on their recency, frequency, and monetary (RFM) purchasing patterns with your business, as well as how often they engage with your promotional efforts.

To begin constructing the segment, first type in the keywords that denote contacts in the RFM groups (such as Champions, Loyals, etc.) that are important for your business growth. Next, fetch contacts who have recently kept in touch with your email reminders/notifications by typing in keywords that describe a high activity rate (such as "high engagement") and the date/time at which they last interacted with your campaign.

![segment43.png](https://us.v-cdn.net/6038474/uploads/K1RP9Z2LSL8M/segment43.png)
Thus, the AI builder can develop complex RFM & engagement-type segments for different time intervals. With several such segments at your disposal, you can plan and strategize your marketing initiatives by sending only relevant messages to your target audience.

To learn more about analyzing a contact's purchasing and engagement metrics, read our [**Unlock Customer Insights with eRFM Analysis**](https://galaxy.maropost.com/s/article/Unlock-Customer-Insights-with-eRFM-Analysis) article.

</details>