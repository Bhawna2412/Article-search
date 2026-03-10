---
title: "Segment Rules in Legacy Segment Builder"
articleID: 918
category: "Contact Management > Segments"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Segment Rules in Legacy Segment Builder

You can define segment rules to create highly targeted contact groups based on engagement behavior, purchase history, or demographic criteria, which enables more relevant messaging and improved campaign effectiveness. These targeted segments typically lead to better engagement rates by allowing you to send personalized content that matches specific audience characteristics and behaviors.

Segment rules help optimize your email marketing ROI by focusing campaign efforts on contacts most likely to engage, while reducing unsubscribe rates through more relevant targeting.

The **segment rules** describe the conditions by which your contacts will be segmented. To create a segment, you must define at least one rule. Your segment may, however, contain multiple rules.

You can also choose whether the segment will fetch contacts that satisfy all the rules or just one of the rules defined in the segment.

![Add_Rule.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWkJ.05T5g00000BkWkJEAV.png)
A rule can be a combination of one or more criteria. You can add more criteria within a rule by clicking the **Add Criteria** button. You can choose whether to fetch contacts satisfying all the criteria or just one of the criteria defined in the rule. This can be done by using the **Match all criteria** checkbox. The checkbox is left unselected by default, meaning the contacts satisfying any one of the criteria are fetched as part of the rule (the concept of OR operator applies).

![Add_Criteria.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWkI.05T5g00000BkWkIEAV.png)

### **Rule Conditions**

> **Note:** For the time-based segment conditions (for example, Opened), the 'In Past' and the 'Timeframe' filters behave differently when it comes to the end date of the date range. The 'In Past' filter excludes the ending date of the range, whereas the 'Timeframe' filter includes it. However, remember that the selection is inclusive of the starting date of the range for both filters.For example,  suppose today is Sept. 8th. The condition "In Past 30 days and before 0 days ago" selects data from 12 AM Aug 9 to 12 AM Sep 8 (excluding data from the specified date).  The condition "In Timeframe Aug 9 to Sep 8" selects data from 12 AM Aug 9 to 12 AM Sep 9 (including the data from the specified date).

### Contact Information

Fetches contacts based on a default or custom field value. For example, you can use the condition to fetch all the contacts that have a gmail.com domain email address. When creating a Contact Information condition, you can choose from the following default fields and the custom fields that you may have:

- domain name
- email
- first name
- last name
- phone number
- fax
- created at

### Random

Fetches a certain number or percentage of random contacts from all lists or an individual list. Only active subscribed contacts will be pulled into the segment, eliminating the need to remove DNM or inactive contacts.

When creating a Random condition, you can choose from the following filtering options:

- Percentage
- Count

### In List

Fetches contacts that are included in a particular list. You can use multiple In List criteria if you want to fetch contacts from multiple lists.

### Not In List

Fetches contacts that are not present in a particular list. You can use multiple Not In List criteria if you want to avoid contacts from multiple lists.

### Opened

Fetches contacts who have opened any campaign. You can further use the filtering options to get specific contacts.

When creating an Opened condition, you can choose from the following filtering options:

- Today
- Anytime
- In Past
- Timeframe
- Campaign
- Browser Language
- Platform - mobile, tablet, desktop
- Campaign Tag

For 'Today', 'Anytime', 'In Past', 'Timeframe', 'Campaign', and 'Campaign Tag' filtering options, you can filter further based on whether the opens are affected by Apple's Mail Privacy Protection (MPP). The available options are:

- All Opens
- MPP Enabled
- MPP Disabled

### Opens

Fetches contacts based on the frequency of opening the email campaigns. You can further use the filtering options to get specific contacts. When creating an "Opens" condition, you can choose from the following filtering options: Today, Anytime, In Past, Timeframe, Campaign, Campaign Tag.

### Did Not Open

Fetches contacts who did not open any campaign. You can further use the filtering options to get specific contacts. When creating a Did Not Open condition, you can choose from the following filtering options: Today, Anytime, In Past, Timeframe, Campaign, Campaign Tag.

### Clicked

Fetches the contacts who have clicked any campaign link in a given time frame or who have clicked a link within a specific campaign or campaign tag.

### Clicks

Fetches contacts based on the frequency of the clicks. When creating a Clicks condition, you can select contacts based on who clicked more than, less than, or equal to X times (where X is a number).

### Did Not Click

Fetches the contacts who have not clicked any campaign link. You can further use the filtering options for specifying a time frame or a specific campaign, or a campaign tag.

### Subscribed

Fetches contacts that subscribed in a particular time frame to a specific list or all lists. To select multiple lists without selecting all lists, use multiple conditions.

### Sent

Fetches contacts who have been sent a campaign. The contacts can be selected by sent date, anytime, in the past, timeframe, and campaign name.

### Received

Fetches all contacts that received a campaign or received any campaign from a campaign tag or in a particular time frame.

### Did Not Receive

Fetches contacts that didn't receive a specific campaign or any campaign from a campaign tag or in a particular time frame.

This condition fetches only the contacts that have soft bounced. For example, you have sent a campaign to 10000 contacts, out of which 500 contacts are now listed as a soft bounce. So to fetch them using segment, you may want to use the condition 'did not receive >> campaign >> campaign name.'

### Deliveries

Fetches contacts based on the number of contacts to whom a campaign was delivered or any campaign was delivered in a particular time frame. When creating a Deliveries condition, you can further select contacts based on whether the deliveries are more than X, are equal to X, or are less than X, where X is a number.

### Form Subscription

Fetches contacts who have filled out a form successfully.

### Product

Fetches contacts who have purchased a product in your e-commerce system. This condition uses the following options: Purchased, Not Purchased, Purchased Today, Date of Purchase, Purchase in Past, Purchased Only, Purchased with Status, Purchased with Frequency, and Product Brand. It also includes the option to pick specific products.

> **Note:** This condition requires that you are transferring the purchase data to Marketing Cloud's Product/Revenue database.  You will have done so either through the Product/Revenue API or the web tracking script.

### Revenue

Fetches contacts based on the revenue spent on your products, specifically any contact who has placed at least one order having a total order amount filtered by either less than, more than, or equal to a monetary amount.

> **Note:** This condition requires that you are transferring the purchase data to Marketing Cloud's Product/Revenue database.

### Revenue with Order Status

Fetches contacts based on their lifetime value filtered by the order status.

> **Note:** This condition requires that you are transferring the purchase data to Marketing Cloud's Product/Revenue database.

### Location

Fetches contacts based on the geographic location of the contact's IP address. The location of an IP address is a statistical best estimate based on a myriad of data sources.  The accuracy of the location of an IP address varies from country to country and even from regional locale to locale.

> **Note:** The location rule segment is not supported for Yes/No and Case journey filters.

When creating a Location condition, you can choose from the following filtering options:

- **is known**: Gets all contacts in your account whose location is saved.
- **is in** and i**s in Country**: These two options are retained because of legacy segments. We recommend that you use 'is near' as it is more accurate**.**
- **is near**: Gets contacts who are within a square boundary of the geographical center of the location that you specify. The size of the square boundary can be expressed in either miles or kilometers. Given the same boundary size, the set of contacts that this segment filter returns may differ depending upon whether your specified location is a city, state/province, or country because the respective geographical centers may differ.

### Website

Fetches contacts that opened, did not open, and spent time on any tracked pages on your website within the specified recency and frequency. You can further segment your contacts based on a specific page URL or page title of a particular website they may have viewed.  If you select the option to segment by a specific page URL, you can use the wildcard character, '*', at the beginning, in the middle, and at the end of the URL.

> **Note:** To use this condition, you must have the Maropost web tracking enabled on your site. To learn about web tracking, see Web Tracking.

### Web Funnel

Fetches contacts who have entered a web funnel that you have defined.  You can segment them based on which funnel they have entered, whether they finished, abandoned, or recovered the funnel, and how recently and frequently they did it.

> **Note:** To use this condition, you must have Marketing Cloud's web tracking enabled on your site. To learn about web tracking and web funnels, see Web Tracking and Web Funnel Tracking.

### In Journey

Fetches contacts that have a journey status of finished, active, or paused.

### Segment

Fetches contacts from a specific segment. When creating a Segment condition, you select the segment name from the drop-down list. The condition fetches contacts that are part of the specified segment.

> **Note:** If the SQL query finds results that contain a sendable column that is an email address and the email address does not exist in the Contacts database, then a contact is automatically created with the same email address.

### Not In Segment

Fetches contacts who are not from a specific segment. When creating a Not In Segment condition, you select the segment name from the drop-down list. The condition will fetch contacts that are not part of the specified segment.

### Table

Fetches contacts from a specific relational table. You can use one of the search operators along with one of the table fields to create the condition criteria that you need. This condition supports the following search operators: begins with, ends with, contains, does not contain, is equal, is not equal, is in, is not in, is null, is not null, is empty.

### SQL Query

Fetches contacts based on a specific SQL query. When creating a SQL Query condition, you select the SQL query name from the drop-down list. The condition will fetch contacts that are retrieved from the specified SQL query.

### Order Status

Fetches contacts based on their order status - processed, refunded, partially refunded, and so on.

### Tags

Fetches contacts that have been assigned specific contact tags within a specified date range. To learn more about contact tags, see [**Contact Tags**](https://galaxy.maropost.com/s/article/Contact-Tags).

When creating a Tags condition, first specify the contact tags using one of the following search operators: is equal, is not equal, contains, does not contain, starts with, ends with. Then, select a period within which the tags were created.

### Product Category

Fetches contacts based on the product category of their purchases. When creating a Product Category condition, first specify the product category using the search operator, such as begins with, contains, ends with, or is equal to. Then, select from the following filtering options: Anytime, In Past, Timeframe, Campaign, Campaign Tags.

In this condition, you can further specify the number of times a purchase was made.

> **Note:** This condition requires that you are transferring the purchase data to Maropost for Marketing’s Product/Revenue database.

### Conversion

Fetches contacts who have or haven't purchased and have subsequently purchased products in response to your email campaigns' call to action. When creating a conversion condition, you first select "Converted" or "Not Converted" and then choose the campaigns by selecting from the following options: campaign tags, all campaigns, or a specific campaign. You can then choose from the following options to specify a time period: Anytime, in the past, timeframe.

When using the Converted option, you can further specify the number of times the conversion occurred.

> **Note:** This condition requires that you are transferring the purchase data to Marketing Cloud's Product/Revenue database.

### Coupon Codes

Fetches contacts who have been issued or have redeemed coupons a specific number of times. You can further use the filtering options. When using the Coupon Codes condition, you can choose from the following filtering options: Anytime, In Past, Timeframe, Campaign, Campaign Tags.

### In Brand

Fetches contacts from a specific list that is associated with a specific brand.

## Related Articles

**Contact Management & Segmentation:**

- [Acquisition Overview](https://galaxy.maropost.com/kb/articles/1211-acquisition-overview) - Build your contact database for segmentation
- [7 Best Practices For Making The Most Of An Email Unsubscribe](https://galaxy.maropost.com/kb/articles/1720-7-best-practices-for-making-the-most-of-an-email-unsubscribe) - Manage contact preferences and retention
- [Application Settings Overview](https://galaxy.maropost.com/kb/articles/991-application-settings-overview) - Configure contact management preferences

**Campaign Targeting:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Apply segments to targeted campaigns
- [Campaign Tags](https://galaxy.maropost.com/kb/articles/926-campaign-tags) - Organize targeted campaigns using tags