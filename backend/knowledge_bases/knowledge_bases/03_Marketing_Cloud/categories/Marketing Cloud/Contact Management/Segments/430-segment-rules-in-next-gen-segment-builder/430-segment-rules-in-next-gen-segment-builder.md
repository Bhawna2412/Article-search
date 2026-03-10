---
title: "Segment Rules in Next-Gen Segment Builder"
articleID: 430
category: "Contact Management > Segments"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-05
---

# Segment Rules in Next-Gen Segment Builder

Advanced segment rules enable you to create highly targeted email campaigns by precisely defining audience criteria based on customer behavior, purchase history, and engagement patterns. This sophisticated targeting approach can substantially improve campaign performance and help optimize your email marketing ROI by ensuring messages reach the most relevant prospects.

You can build complex audience segments using multiple criteria and logic operators, which typically leads to better engagement rates and more effective marketing automation. When properly configured, these segment rules help maximize email marketing effectiveness by delivering personalized content to specific audience groups based on their actions and preferences.

**Segment rules** are a set of criteria that you define while grouping contacts. While creating a segment, you need to define at least one rule, each containing at least one criterion within it.

With the introduction of the **Next Generation Segment Builder**, segment rules are now grouped within the category field, which can be chosen from the drop-down list. These segment categories can be selected while constructing a criterion within a rule.

![segment18.png](https://us.v-cdn.net/6038474/uploads/5ZR2IEC1X6SS/segment18.png)
Depending on the segment category selected, you may need to specify additional conditions or attributes that the contacts must fulfill to be included in the segment.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/segment19.05T5g000013H1eWEAS.png)

A rule can also comprise multiple criteria connected with an “**OR**” or “**AND**” logic. Similarly, a segment can be a combination of several main rules.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/segment20.05T5g000013H2N6EAK.png)

> **Note:** **Note:** By default, criteria within a rule are connected by an “**OR**” operator, while the main rules are connected with an “**AND**” operator.

- 
- To change the operator between the main rules to “**OR**,” disable the “**AND** (**Match all**)” toggle at the top right corner of the segment creation page.

## Segment Categories

- 
- 
- 
- 
- 
- 

### Contact Attributes

This category fetches contacts that contain some form of contact or domain-related information. For example, you can create a segment that pulls in contacts having only Gmail or Hotmail domain email addresses.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/segrules0.05T5g00001IVPMxEAP.png)

Upon choosing contact attributes, you can select the following fields within them:

- 
- 
- 
- 
- 
- 
- 

In addition to fetching contacts containing basic bio-details such as name, phone number, and address, Maropost also enables you to create segments by fetching contacts based on their engagement level with your brands and, most importantly, their purchasing history with your business. 

Thus, using the “**RFM Group**” and “**Engagement Level**” fields, we can create segments based on how recently and frequently the contact has purchased from your store in the last 7, 30, 90, and “X” days and group them according to how often they reached out to your campaigns.

![segment42.png](https://us.v-cdn.net/6038474/uploads/GD67LOFBBCDE/segment42.png)
To understand more about a contact’s purchasing and engagement patterns, read our [**Unlock Customer Insights with eRFM Analysis**](https://galaxy.maropost.com/s/article/Unlock-Customer-Insights-with-eRFM-Analysis) article.

Besides the standard fields, you can also create your own "contact type" custom field segment rules in Maropost Marketing Cloud.

### Purchase Activity

The conditions selected under this category fetch contacts who have purchased products or services from you.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/segrules1.05T5g00001IVPhqEAH.png)

- **Purchased Product**:** **Fetches contacts who have purchased a product in your e-commerce system. This field contains additional purchasing criteria that pull in contacts who have either made a recent purchase or have frequently bought from your website/in-app store. You can also select your customers based on the brand and/or category of products they’ve purchased.

> **Note:** **Note:** This condition requires transferring the purchase data to Marketing Cloud's Product/Revenue database. You will have done so either through any of Marketing Cloud’s native integrations, the Product/Revenue REST API, or through the [**web tracking script**](https://galaxy.maropost.com/s/article/Capturing-Web-Conversions).

- **Converted Campaigns**: Selects contacts who have made a purchase directly as a result of an email campaign they’ve received. For best results, we recommend enabling the [**Last-Touch Attribution**](https://galaxy.maropost.com/s/article/Conversion-Attribution) setting for your account.
- **Placed Orders**: Pulls in contacts that have made an online purchase from your website. Additional conditions can be further added based on their order status.
- **Lifetime Value**: It represents the total revenue a user can generate over a timespan while being a customer. You can filter this field via its order status.

> **Note:** **Note:** This condition requires transferring the purchase data to Marketing Cloud's Product/Revenue database.

- **Received Coupons**: Fetches contacts that have been [**issued coupons**](https://galaxy.maropost.com/s/article/Coupon-Bank) or have redeemed them in the past.

### Email Activity

The conditions present in this category allow marketers to create segments based on contacts who have either received or interacted with your email campaigns.

![segment36.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ10000047nu8MAA.jpg)

- **Was Sent Email:** Fetches contacts based on emails that were previously sent to them.
- **Received Email:** This rule allows segments to select an audience that has received the email campaigns.
- **Opened Email:** The segment will include contacts whose open event has been recorded for a campaign they’ve received. Depending upon their email app’s mail privacy protection setting, an open event doesn’t necessarily mean they’ve actually read the email. The segment will fetch contacts depending on their email app’s mail privacy protection setting, language setting, and device type.
- **Clicked Email:** Fetches contacts that have opened your email campaigns and have clicked on an email link that has redirected them to a desired website.

### Membership

This category is useful for creating segments that include an audience group having a subscription history with your promotional campaigns.

![segment38.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000BurjKMAR.jpg)

- **Lists:** Fetches contacts that are present in all the lists or a particular list created in MMC. By selecting this rule, not only can you fetch contacts as per their current status or subscription recency, but you can also pull a certain number or percentage of randomly selected contacts from all listings or a single list by using the “**Random**” filter option. By default, only active subscribed contacts will be pulled into the segment, eliminating the need to remove DNM or inactive contacts.
- **Journeys:** It allows segments to include contacts that have flowed through a journey either in the past or present.
- **Segments:** It enables you to choose a preconfigured audience segment by applying the rules of a previously created segment in Marketing Cloud.
- **Contact Tags:** It fetches contacts that have been assigned specific tags for specific purposes. To learn more about contact tags, see [**Contact Tags**](https://galaxy.maropost.com/s/article/Contact-Tags). While selecting this rule, you can further define when the Contact Tag was applied to the contact.
- **Opted-In From Forms:** Pulls in contacts that have filled out a form successfully.

### Relational Data

The Relational Data rule category enables you to retrieve contacts from your relational database. You can choose from the following rules depending on whether you want to use data from relational tables or SQL queries:

![segmentRule-RelationalData.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Q0tCpMAJ.jpg)

- **Relational Tables**:** **Use this rule to fetch contacts from the relational table based on a specific condition.
- **SQL Queries**: Use this rule to fetch contacts from the [**SQL Query**](https://galaxy.maropost.com/s/article/SQL-Queries) based on a specific condition.

### Site Visits

This segment retrieves contacts who have visited, interacted with, downloaded, or spent time on a website to which they were redirected via a campaign. Contact data can be further filtered based on how frequently the contacts visited the website, as well as how recently these visits occurred.

![segment40.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Q0szqMAB.jpg)

- **Visited Site:** Fetches contacts that have accessed your website either frequently or recently through a campaign or promotional email.
- **Entered Funnel:** Fetches contacts who have entered a web funnel that you have defined. You can segment them based on which funnel they have entered, whether they finished, abandoned, or recovered the funnel, and how recently and frequently they did it.

> **Note:** **Note:** To use this condition, you must have the Maropost web tracking enabled on your site. To learn about web tracking and visualizing a pathway for users to follow, see [**Web Tracking**](https://galaxy.maropost.com/s/article/Introduction-to-Web-Tracking) and [**Web Funnel Tracking**](https://galaxy.maropost.com/s/article/Web-Funnel-Tracking).

Stay tuned for future updates, as we will be launching new segment categories for our Next-Gen segment builder. To know more about the segment rules present in the Legacy builder, visit and read our [**Segment Rule: Legacy**](https://galaxy.maropost.com/s/article/Segment-Rules-in-Legacy-Segment-Builder) page.

## Related Articles

**Contact Management:**

- [Creating a Contact List](https://galaxy.maropost.com/kb/articles/4-creating-a-contact-list-new) - Build targeted audience segments
- [Email Contact Lists Overview](https://galaxy.maropost.com/kb/articles/13-email-contact-lists-overview-legacy) - Understand contact management fundamentals

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Use contact lists in campaign creation
- [Campaign Tags](https://galaxy.maropost.com/kb/articles/926-campaign-tags) - Organize campaigns by contact segments

**Analytics & Reporting:**

- [A/B Campaign Reports](https://galaxy.maropost.com/kb/articles/632-ab-campaign-reports) - Track contact engagement across campaigns