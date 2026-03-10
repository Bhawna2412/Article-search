---
title: "HTML Code Content Builder"
articleID: 848
category: "Content Management > Content Builders"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-24
---

# HTML Code Content Builder

To increase the flexibility of email content design, Marketing Cloud allows you to upload an HTML source code utilizing the **HTML Code Editor**. This feature eliminates the need to manually enter source code, thereby saving a significant amount of time.

By using an HTML code content builder, you can create email content by simply uploading an HTML file. Once you upload an HTML file, you can make further edits in the editor. Additionally, you can utilize the [**tags available within content builders**](https://galaxy.maropost.com/s/article/Tags-in-Content-Overview) to incorporate personalized information and real-time data into the content.

> **Note:** **Note: **When you upload an HTML file rather than copying the source code, you maintain a responsive template.

## Creating Content Using HTML Code Builder

Perform the following steps shown below to access the HTML code builder tool and use it to create email content:

1. Under the **Navigation** panel, go to **Content** and select the **Email Content** option.
  ![conteditor0.png](https://us.v-cdn.net/6038474/uploads/I8TCM84HNFDI/conteditor0.png)
2. On the Email Content Index page, click **New Content**.
  ![conteditor1.png](https://us.v-cdn.net/6038474/uploads/2BZZPNY5U4AU/conteditor1.png)
3. To create content from scratch, click the **Start Designing** button.
  ![conteditor2.png](https://us.v-cdn.net/6038474/uploads/4CMKUF0A6FB8/conteditor2.png)
4. Choose the **HTML Code Editor** template.
  ![conteditor11.png](https://us.v-cdn.net/6038474/uploads/Q35TCBC5JUH9/conteditor11.png)
5. From the builder panel that opens, enter a new title for your content draft in the **Name** field.
  ![conteditor31.png](https://us.v-cdn.net/6038474/uploads/UCQHVZ5EXDBC/conteditor31.png)
6. Next, upload an HTML file you want to use as a design template. Use the uploaded file to make any necessary changes to the content in the workspace region.
  ![conteditor12.png](https://us.v-cdn.net/6038474/uploads/WTBJ19RNDE34/conteditor12.png)
7. You can insert custom-made data into your HTML content by using the [**tags**](https://galaxy.maropost.com/s/article/Tags-in-Content-Overview) present in the builder. The following is a brief description of the fields in the HTML code builder: 

**Name:** The name of the content. 
**Templates:** A list of templates from your [**Template library**](https://galaxy.maropost.com/s/article/Template-Library) that you can use for the content. 
**Insert Contact Tags:** A set of predefined [**Contact tags**](https://galaxy.maropost.com/s/article/Content-Contact-Tags) that you can include to personalize your email content. 
**Insert Campaign Tags:** A set of predefined [**Campaign tags**](https://galaxy.maropost.com/s/article/Content-Campaign-Tags) that you can use to include campaign-related information and unsubscribe options. 
**Insert Dynamic Areas:** A list of your [**Dynamic tags**](https://galaxy.maropost.com/s/article/Content-Dynamic-Tags) that enable you to include dynamic content based on the audience. 
**Insert Table Tags:** A list of [**Table tags**](https://galaxy.maropost.com/s/article/Content-Table-Tags) that enable you to utilize the data from a relational table. 
**Insert Other Tags:** A set of predefined [**Other tags**](https://galaxy.maropost.com/s/article/Content-Other-Tag) that you can use to populate real-time data in the content. 
**Insert Web Funnel Tags:** A list of your [**Web Funnel tags**](https://galaxy.maropost.com/s/article/Content-Web-Funnel-Tags) that enable you to access the Web Funnel line items in the content. 
**Insert Coupon Tags:** A list of [**Coupon tags**](https://galaxy.maropost.com/s/article/Content-Coupon-Tags) that include unique coupon codes from your coupon bank.
  ![conteditor13.png](https://us.v-cdn.net/6038474/uploads/S9V335K85G2X/conteditor13.png)
8. With the HTML Code template, you can use the **Plain Text** builder to pull in the HTML code you created in the content workspace region and insert additional code within the structure without disrupting the content flow and its function.
  ![conteditor34.png](https://us.v-cdn.net/6038474/uploads/44D37MBOUQS8/conteditor34.png)
9. Once you have finished designing your email content, switch to the **Footer** section and either create a custom footer or choose a default one offered by Marketing Cloud. Ensure that you include all the necessary details in your email footer. For example, in compliance with anti-spam email laws, an email content should contain the address information of the email sender “**{{campaign.address}}**”, and an unsubscribe link to a particular campaign “**{{campaign.unsubscribe_link}}**”, “**{{campaign.unsubscribe_url}}**”** **or “**{{campaign.one_click_unsub_url}}**”. To learn more about creating custom footers, see [**Footer Management**](https://galaxy.maropost.com/s/article/Footer-Management).
  ![conteditor14.png](https://us.v-cdn.net/6038474/uploads/4M6RXMZSM69M/conteditor14.png)
10. To check how your email content will appear to your clients, visit the **Preview** section. Select a contact or a list to preview the email content as they would see it. You can also use dynamic blocks to show personalized content, such as product or membership offers. Read our [**Previewing Content in Content Builders**](https://galaxy.maropost.com/s/article/Previewing-Content-in-Content-Editors) article to learn more.
  ![conteditor15.png](https://us.v-cdn.net/6038474/uploads/OWCTBA3DXTGC/conteditor15.png)
11. To ensure the ease of email deliverability to your clients, we have included an email scorecard in the preview section. With the help of such ratings, you can make adequate changes so that only necessary details are mentioned in the email or newsletter, thereby keeping the file size as small as possible. A smaller file size guarantees minimal processing delay, allowing for prompt delivery of email content to the intended recipient.
  ![conteditor44.png](https://us.v-cdn.net/6038474/uploads/NOSRYW6I4CHP/conteditor44.png)
12. Currently, Marketing Cloud displays three types of labels that denote the email score and size parameters. They are, namely: 

**Excellent:** Email content size is less than 100 KB. 
**Good:** Email content size is between 101 KB and 249 KB. 
**Poor:** Email content size exceeds 250 KB. 

Please note that these ratings don’t prevent you from sending email campaigns to your clients. However, for faster email delivery and a smoother user experience, we do recommend optimizing your email file size whenever possible.
13. You can also add web tracking parameters and content feed details for your content templates under the **Advanced** section. With web tracking, you can collect various parameters that help you understand how the audience interacts with your content. With content feeds, email templates that display specific information to their users can be reused, allowing for greater efficiency and consistency. To learn more about these features, read our [**Web Analytic Tracking**](https://galaxy.maropost.com/s/article/Web-Analytic-Tracking) and [**Content Feeds**](https://galaxy.maropost.com/s/article/Content-Feeds) articles.
  ![conteditor33.png](https://us.v-cdn.net/6038474/uploads/33SQS6ED9G93/conteditor33.png)
14. To save the draft, click on **Save and Close**.
  ![conteditor35.png](https://us.v-cdn.net/6038474/uploads/KANF12VL1M5V/conteditor35.png)