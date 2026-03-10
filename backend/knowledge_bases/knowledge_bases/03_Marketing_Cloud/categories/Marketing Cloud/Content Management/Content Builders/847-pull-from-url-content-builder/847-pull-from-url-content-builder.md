---
title: "Pull From URL Content Builder"
articleID: 847
category: "Content Management > Content Builders"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-24
---

# Pull From URL Content Builder

As the name implies, the **Pull From URL** builder can be used to pull content from a web page in real-time, just before it is sent as an email campaign to the targeted audience.

> **Note:** **Note: **The Pull From URL content builder is ideal for creating content for recurring email campaigns, such as monthly newsletters and weekly progress reports.

## Creating Content Using Pull From URL Builder

Perform the following steps shown below to access the Pull From URL builder tool and use it to create email content:

1. Under the **Navigation** panel, go to **Content** and select the **Email Content** option.
  ![conteditor0.png](https://us.v-cdn.net/6038474/uploads/YVN0ARZ8XJ5J/conteditor0.png)
2. On the Email Content Index page, click **New Content**.
  ![conteditor1.png](https://us.v-cdn.net/6038474/uploads/YXAHCRMC3D42/conteditor1.png)
3. To create content from scratch, click the **Start Designing** button.
  ![conteditor2.png](https://us.v-cdn.net/6038474/uploads/48E9XDMDXNSK/conteditor2.png)
4. Choose the **Pull From URL** template.
  ![conteditor18.png](https://us.v-cdn.net/6038474/uploads/3F8I5AEDR0KB/conteditor18.png)
5. Enter a new title for your content draft in the **Name** field.
  ![conteditor31.png](https://us.v-cdn.net/6038474/uploads/8HZ6SQRFO46E/conteditor31.png)
6. On the builder page, enter the website’s URL from which you want to pull the content. Below is a brief description of the fields present in the Pull From URL builder: 

**Name:** The name of the content. 
**URL:** The URL from which the data is to be pulled. 
**Select Weekdays:** The day of the week the content data is refreshed. 
**Select Hour:** The weekday timings at which the content data is refreshed.

***Note: ****The "****Select Weekdays****" and "****Select Hour****" fields only apply to journeys and transactional campaigns.*
  ![conteditor19.png](https://us.v-cdn.net/6038474/uploads/LEDGZ9A67S4O/conteditor19.png)
7. With the Pull From URL template, you can use the **Plain Text** builder to pull in the HTML code you created in the content workspace region and insert additional code within the structure without disrupting the content flow and its function.
  ![conteditor34.png](https://us.v-cdn.net/6038474/uploads/77YH7CZRF0A0/conteditor34.png)
8. Once you have finished designing your email content, switch to the **Footer** section and either create a custom footer or choose a default one offered by Marketing Cloud. Ensure that you include all the necessary details in your email footer. For example, in compliance with anti-spam email laws, an email content should contain the address information of the email sender “**{{campaign.address}}**”, and an unsubscribe link to a particular campaign “**{{campaign.unsubscribe_link}}**”, “**{{campaign.unsubscribe_url}}**”** **or “**{{campaign.one_click_unsub_url}}**”. To learn more about creating custom footers, see [**Footer Management**](https://galaxy.maropost.com/s/article/Footer-Management).
  ![conteditor20.png](https://us.v-cdn.net/6038474/uploads/97FEGKI7J6LH/conteditor20.png)
9. You can also add web tracking parameters and content feed details for your content templates under the **Advanced** section. With web tracking, you can collect various parameters that help you understand how the audience interacts with your content. With content feed, you can reuse your email templates that display specific information to your users. To learn more about these features, read our [**Web Analytic Tracking**](https://galaxy.maropost.com/s/article/Web-Analytic-Tracking) and [**Content Feeds**](https://galaxy.maropost.com/s/article/Content-Feeds) articles.
  ![conteditor33.png](https://us.v-cdn.net/6038474/uploads/MLHDZN4P18I6/conteditor33.png)
10. To check how your email content will appear to your clients, visit the **Preview** section. Select a contact or a list to preview the email content as they would see it. Read our [**Previewing Content in Content Builders**](https://galaxy.maropost.com/s/article/Previewing-Content-in-Content-Editors) article to learn more.
  ![conteditor45.png](https://us.v-cdn.net/6038474/uploads/I5KUP1EAUSJB/conteditor45.png)
11. To ensure the ease of email deliverability to your clients, we have included an email scorecard in the preview section. With the help of such ratings, you can make adequate changes so that only necessary details are mentioned in the email or newsletter, thereby keeping the file size as small as possible. A smaller file size guarantees minimal processing delay, enabling prompt email content delivery to the intended recipient.
  ![conteditor46.png](https://us.v-cdn.net/6038474/uploads/5J85I5AS4MAK/conteditor46.png)
12. Currently, Marketing Cloud displays three types of labels that denote the email score and size parameters. They are, namely: 

**Excellent:** Email content size is less than 100 KB. 
**Good:** Email content size is between 101 KB and 249 KB. 
**Poor:** Email content size exceeds 250 KB. 

Please note that these ratings don’t prevent you from sending email campaigns to your clients. However, for faster email delivery and a smoother user experience, we do recommend optimizing your email file size whenever possible.
13. To save the draft, click on **Save and Close**.
  ![conteditor47.png](https://us.v-cdn.net/6038474/uploads/NMB24MEGRZR7/conteditor47.png)