---
title: "Optimize on Open Image Groups"
articleID: 706
category: "Content Management > Content Libraries"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-26
---

# Optimize on Open Image Groups

You can create engaging email experiences that adapt to when your recipients open their messages using Optimize on Open image groups. This feature enables you to display different offers or calls to action based on the timing of email opens, helping optimize engagement rates for time-sensitive campaigns and promotional sequences.

Optimizing on Open functionality streamlines your workflow by automating the display of relevant content without requiring separate email sends. When properly configured, this helps ensure your messaging remains current and compelling, whether contacts open emails immediately or days later, enhancing subscriber interaction with dynamically relevant content.

In this day and age, it is critical for a marketer to test and optimize emails. An **Optimize on Open Image Group** is a single image tag that can display a different image in an email depending on the date and time the email is being viewed. You can use this feature when you want to display a different offer or a different call to action within an email, depending on when the email is read.

To learn how to create email content, read our [**Creating Email Campaigns**](https://galaxy.maropost.com/s/article/Creating-Email-Campaigns) article.

## Managing "Optimize On Open" Image Groups

You can create and manage the "Optimize on Open Image Groups" on the Optimize on Open index page. To access the page, in Navigation, go to Content, and then select Optimize on Open.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/OptimizeonOpenIndexPage.05T5g00000JJRcuEAH.png)

On this page, click the New Group button to create a new image group. Use the Actions drop-down menu to edit and delete the image groups.

> **Note:** **Note:** You can click the name of an image group to view the tag link that can be used within an email.

## Creating an "Optimize On Open" Image Group

Perform the following steps to create a new "Optimize on Open Image Group":

1. On the Optimize on Open index page, click the New Group button.
2. On the New Group page, enter a name for the image group.
  ![optimize0.png](https://us.v-cdn.net/6038474/uploads/J4PNTEHKWHGG/optimize0.png)
3. Create a default image. The default image is the image that your contacts see when they first open your email, provided they read it before its expiry date.

**Add Image:** Select an image from the Image Library or upload an image from your desktop.
**Click-through URL:** Enter the URL of the landing page that will load in the browser of the contact when the image is clicked.
**Expires At:** Enter a date and time at which the image expires. If the contact opens the email after this expiry date and time (in the Eastern Time Zone), then the next image in this sequence will appear.

Here’s an example of a 7-day series in which a different image will appear in the email depending upon which day the email is opened:
  ![optimize1.png](https://us.v-cdn.net/6038474/uploads/ZER313784XDA/optimize1.png)

## Using an "Optimize On Open" Image Group

To use an "Optimize on Open Image Group," you need its image and click-through tag links. On the Optimize on Open index page, click the name of the image group that you want to use. Here, you can see the tag links along with other details of the image group.

![2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXb3.05T5g00000BkXb3EAF.png)
Here's how you can use the tag links in your email content:

- 
- Add an expiry image. The expiry image is the image that appears in the email when the email is read after the preceding image has expired. There is no expiry date or time for this image. You can define a click-through URL for the expiry image as well.
- Click Save.  - **Image Tag:** Click the Copy icon to copy the HTML code for the image tag to your clipboard. This is to be used as the URL of the image tag’s SRC attribute.
  - **Click Through Tag:** Click the Copy icon to copy the HTML code of the click-through link to your clipboard. This is to be used as the URL of the anchor tag’s HREF attribute.

## Related Articles

**Content Design:**

- [Content Dynamic Tags](https://galaxy.maropost.com/kb/articles/897-content-dynamic-tags) - Enhance your image groups with dynamic personalization
- [Product Recommendations](https://galaxy.maropost.com/kb/articles/879-product-recommendations) - Display relevant product images that update dynamically
- [Wysiwyg Content Builder](https://galaxy.maropost.com/kb/articles/749-wysiwyg-content-builder) - Build rich content layouts incorporating image groups
- [Liquid Script Examples](https://galaxy.maropost.com/kb/articles/46-liquid-script-examples) - Advanced scripting for conditional image display

**Campaign Management:**

- [Test Campaigns Subject Line](https://galaxy.maropost.com/kb/articles/1427-test-campaigns-subject-line) - Optimize timing strategies for your image group campaigns