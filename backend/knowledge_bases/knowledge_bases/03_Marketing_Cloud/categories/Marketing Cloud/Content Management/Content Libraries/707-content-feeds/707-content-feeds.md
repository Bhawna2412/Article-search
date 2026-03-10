---
title: "Content Feeds"
articleID: 707
category: "Content Management > Content Libraries"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-26
---

# Content Feeds

The **Content Feeds** feature enables you to create a reusable email template and use a structured data file to provide specific content at send time. This feature is very helpful for content publishers who use email to distribute their syndicated content.

Maropost Marketing Cloud uses the [**Liquid scripting engine**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fshopify.github.io%2Fliquid%2F) for content personalization. You can use the same scripting language to display elements from the content feed in the email body.

You must ensure that the structured data file meets the following requirements:

- 
- 
- 

> **Note:** **Note:** Content Feeds are intended for promotional campaigns and journey campaigns only.  They are not intended for transactional email campaigns.

## Managing Content Feeds

The Content Feeds index page shows all the content feeds created in your account. On this page, you can create new content feeds and edit the previously created content feeds.

To go to the Content Feeds page, in Navigation, go to CONTENT, then select Content Feeds.

> **Note:** **Note:** If you do not see the Content Feeds menu option, then notify **Success@maropost.com**, and we'll activate it for your account right away.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ContentFeedIndexPage.05T5g00000GmZ9hEAF.png)

## Creating Content Feeds

Marketing Cloud enables you to create two kinds of content feeds:

- **Single Feed:** Only one content feed.
- **Merge Feed:** A combination of multiple feeds.

### Creating a Single Feed

1. On the **Content Feeds** index page, click **New Feed**.

2. In the **New Feed** dialog box, provide the details of the feed.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/NewFeed.05T5g00000kWFXFEA4.png)
3. Select from or enter a value for the following fields:

- **Feed Type:** Retain the selection as Single Feed.
- **Name:** Enter a name for the content feed.
- **Update Content Feed On:**  - **Day of the Week:** Select the days on which the feed is to be updated. You can select multiple days, including the option to update every day.
  - **Hour of the Day:** Select an hourly time schedule on which the feed is to be updated. You can select to update at a specific hour of the day or to update every hour.
- **URL:** URL from which to pull the feed.

4. Optionally, you can click the eye icon next to the URL field to see a preview of the feed.

5. Click **Save**.

### Creating a Merge Feed

1. On the **Content Feeds** index page, click **New Feed**.

2. In the **New Feed** dialog box, provide details for the merge feed, including the details of feeds that are to be included in it.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/NewMergeFeed.05T5g00000kWFcDEAW.png)
3. Select from or enter a value for the following fields:

- **Feed Type:** Select the Merge Feed option.
- **Name:** Enter a name for the feed.
- **Update Content Feed On:**  - **Day of the Week:** Select the days on which the feed is to be updated. You can select multiple days, including the option to update every day.
  - **Hour of the Day:** Select an hourly time schedule on which the feed is to be updated. You can select to update at a specific hour of the day or to update every hour.
- **Key:** Enter an alphanumeric value to be used as the key. The key you define here can then be used to refer to this feed when creating content or dynamic content.
- **URL:** URL from which to pull the feed.

> **Note:** **Things to be considered:**
> 
> You must select the option to update the content feed only if you will be using it for workflow messages or transactional messages. For normal broadcast messages, Marketing Cloud pulls the data from the source URL and caches it when sending it to all contacts targeted to receive the email.
> 
> Workflow emails and transactional emails are different types of emails. These types of emails are 1-to-1 emails; hence, Maropost will be hitting your content server every time a workflow email or a transactional email is to be sent.
> 
> Under certain circumstances, this scenario can put an unnecessary load on the content server. But when you use the 'Update Content Feed' option, the cached version is refreshed on a periodic basis to avoid repetitive hits to the content server.

4. Optionally, click the [three dots] menu next to the URL field for actions available for that specific feed.

- **View Feed:** To see a preview of the feed. This action is helpful to reference the elements in the feed when writing the Liquid script in the email content.
- **Delete Feed:** To remove the feed from the Merge Feed.

5. Click **Save**.

## Using Content Feeds in Email Content

Since you will be combining Liquid scripting with your HTML code to display the elements of the content feed in the email, it is recommended that you use the [**HTML Code content editor**](https://galaxy.maropost.com/s/article/HTML-Code-Content-Builder). This is a pure code editor that gives you the best control over your HTML and Liquid scripting code.

In the content editor, click the Advanced tab. Then, from the Content Feed drop-down list, select the name of the content feed from those you’ve created in the Content Feed library. Click the [Eye] icon next to the Content Feed field to preview what the fully assembled email will look like when it is sent to the contacts.

The following screenshot shows the Advanced tab of the HTML Code content editor:

![HTML_Content_Editor_-_Content_Feed.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWjc.05T5g00000BkWjcEAF.png)
## Related Articles
**Content Design:**

- [Product Recommendations](https://galaxy.maropost.com/kb/articles/879-product-recommendations) - Enhance feeds with intelligent product suggestions
- [Content Dynamic Tags](https://galaxy.maropost.com/kb/articles/897-content-dynamic-tags) - Personalize feed content with dynamic elements
- [Wysiwyg Content Builder](https://galaxy.maropost.com/kb/articles/749-wysiwyg-content-builder) - Build rich layouts incorporating content feeds
- [Liquid Script Examples](https://galaxy.maropost.com/kb/articles/46-liquid-script-examples) - Advanced scripting for feed customization
**Integrations:**

- [Integration With Shopify](https://galaxy.maropost.com/kb/articles/732-integration-with-shopify) - Connect product feeds from your ecommerce platform