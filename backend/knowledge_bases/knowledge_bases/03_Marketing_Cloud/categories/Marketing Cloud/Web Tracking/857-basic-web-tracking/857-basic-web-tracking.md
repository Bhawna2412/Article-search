---
title: "Basic Web Tracking"
articleID: 857
category: "Web Tracking"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-07-01
---

# Basic Web Tracking

Using **Basic Web Tracking,** you can track the recency and frequency of page views by your known contacts. For an introduction to Maropost's web tracking feature, see [**Introduction to Web Tracking**](https://galaxy.maropost.com/s/article/Introduction-to-Web-Tracking).

When a contact clicks a tracked link included in an email sent from Maropost, the contact ID and the campaign ID are automatically set as cookies in the contact’s browser. As part of basic web tracking, Maropost's web tracking script reads those cookies to attribute the page views to the contact and the campaign.

**Note**: To prevent any tracking errors, you need to make sure that your browser’s ad and cookie blockers, plus other utility tools, do not interfere with the functions of the Web tracking feature.

By default, Maropost's web tracking script only records the page title, the domain and path of the page URL being viewed, and any external links included in those pages. The script does not record the query string parameters. 

This omission is intentional; otherwise, clients who use web analytics (that is, Google Analytics, Adobe Analytics, WebTrends, and so on) query string parameters will be left with hundreds of thousands of separate URLs that are identical except for the query string parameter values with only a single page view for each.

You can, however, override the default URL by using the advanced capabilities of web tracking. To learn more about advanced web tracking, see [**Advanced Web Tracking**](https://galaxy.maropost.com/s/article/Advanced-Web-Tracking).

### Add New Web Tracking Domains

To add a website for enabling Maropost's web tracking, perform the following steps:

1. 
2. 
3. 
  On the New Website dialog box, provide the website tracking details and click the **Save** button.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/webtrac1.05T5g000017TXv4EAG.png)

  The dialog box contains the following fields:
  - 
  - 
  - 
  - 
    **File Path:** (Optional) Enter the fully qualified URL to the mp_processor.html file on your website. The domain in the URL must be the same as the one you entered for the website domain.
📋 **Note**:
    - 
    - 
  - 
4. 
5. 
  Click the Integration tab to view the HTML code for your web tracking script. If this is the first time that you’re enabling web tracking for your website, the screen will be blank. Click the **Script Builder** button on the right-hand side of the screen, and then click the **Submit** button.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/webtrac2.05T5g000017TWrIEAW.png)

  The screen will now show you the web tracking script.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/webtrac3.05T5g000017TY0YEAW.png)
6.