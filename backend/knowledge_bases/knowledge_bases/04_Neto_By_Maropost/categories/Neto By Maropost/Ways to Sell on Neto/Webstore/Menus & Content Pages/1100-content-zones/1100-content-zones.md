---
title: "Content Zones"
articleID: 1100
category: "Ways to Sell on Neto > Webstore > Menus & Content Pages"
knowledgeBase: "Neto By Maropost"
---

# Content Zones

Content zones makes it easy to add a tag into a source code of a page or listing design template on eBay to be displayed across all pages or listings.

Best of all, if you need to update the information, it's stored in one location and is simple to update.

## Add a Content Zone

To add a content zone, and populate it with information:

1. In your Neto control panel navigate to **Webstore > Content Zones**.
2. Click the **Add New** button.
3. Enter a unique **Zone Name / ID**. This is what you will use to reference the contact zone.
4. In the **Content** section, you can enter HTML code by clicking on the **Source Code** tab or click on the **WYSIWYG Editor** to enter the content and it will generate the code for you.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ContentZones1.05T5g00000txATQEA2.png)
5. Once done, click the **Save** button.

You can now insert the following tag anywhere in your templates or content pages for the content zone to appear:

`[%content_zone id:'ZONEID'%][%end content_zone%]`

> **Note:** Make sure you replace **ZONEID** with your **Zone Name / ID**

### Example Uses

In the above example screenshot, we've are created a holiday message to our customers to display on our website. We named our content zone ID **holiday_message**. So here is how the tag will look:

`[%content_zone id:'holiday_message'%][%end content_zone%]`

In this example, the content zone is being added to the about us page. To add this code to a webpage:

1. In your Neto control panel navigate to **Webstore** > **Information Page**.
2. Click the **About Us** page.
3. In the **Page Content** section, paste the code into either the WSYIWYG Editor or source code and click **Save**.
  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ContentZones2.05T5g00000txAUxEAM.png)

Now if you view the front end of the website, you will now see the message.

![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ContentZones3.05T5g00000txAXhEAM.png)