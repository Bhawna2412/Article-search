---
title: "Advanced Web Tracking"
articleID: 855
category: "Web Tracking"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Advanced Web Tracking

Advanced web tracking capabilities enable data-driven decisions by capturing detailed customer behavior and profile information from your website. This enhanced tracking helps optimize campaign effectiveness by providing deeper insights into subscriber preferences, purchase patterns, and engagement behaviors that can substantially improve segmentation and personalization efforts.

When properly configured, advanced web tracking streamlines your workflow by automatically collecting contact data, funnel completion rates, and conversion information, which enables you to identify improvement opportunities and measure campaign effectiveness more accurately.

You can enable the advanced capabilities of web tracking by customizing your website's tracking script. For an introduction to Maropost's web tracking feature, see [**Introduction to Web Tracking**](https://galaxy.maropost.com/s/article/Introduction-to-Web-Tracking).

### Enabling Advanced Capabilities of Web Tracking

Before you can enable the advanced web tracking, you must have the website added to Marketing Cloud's web tracking interface. For more information, see [**Basic Web Tracking**](https://galaxy.maropost.com/s/article/Basic-Web-Tracking).

Perform the following steps to enable the advanced capabilities of web tracking:

1. On the Web Tracking Index page, click the website domain name.
2. 
  Click the Script Builder button on the top-right side of the page. The Script Builder contains four tabs: **Contact, Page, Funnels,** and **Orders**.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/webtrac4.05T5g000017TZ70EAG.png)
3.   - **Contact:** To pass values collected from your website into your Contacts database. To learn more, see [**Capturing Contact Profile Attributes**](https://galaxy.maropost.com/s/article/Capturing-Contact-Profile-Attributes).
  - **Page:** To override the default page URL and page Title that the web tracking script records. To learn more, see [**Overriding Web Page Attributes**](https://galaxy.maropost.com/s/article/Overriding-Web-Page-Attributes).
  - **Funnels:** To define web funnels that you will use to track the completion of a series of actions on your website such as completing a shopping cart purchase, finishing a membership registration form, or completing a survey or questionnaire. To learn more, see [**Web Funnel Tracking**](https://galaxy.maropost.com/s/article/Web-Funnel-Tracking).
  - **Orders:** To pass purchased items from your shopping cart's Thank You page into Maropost for Marketing's Product/Revenue database. To learn more, see [**Capturing Web Conversions**](https://galaxy.maropost.com/s/article/Capturing-Web-Conversions).

  On each tab, you can enter your own customization to the web tracking script, as required.

  ![Script_Builder_Tabs.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWr4.05T5g00000BkWr4EAF.png)
4. 
  When you are done, click the **Submit** button.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/webtrac5.05T5g000017TZ84EAG.png)

After completing the steps, a new version of your web tracking script will be automatically included in the file name of the script.

> **Note:** We recommend that you place the web tracking script tag in the footer of your web pages so that it can read all JavaScript variables that you have defined within the web page. The JavaScript function works in an asynchronous fashion, so it has no impact on your page load time.

### Adding Web Tracking Script in the Footer

1. 
  To add the script in the footer, visit your Neto store and select **Custom Scripts** from the **Settings and Tools** section.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/webtrac15.05T5g00001BXSeqEAH.png)
2. 
  Choose your Neto store tracking script.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/webtrac16.05T5g00001BXSevEAH.png)
3. 
  Paste the MMC script in the **Page Footer** section of your Neto store and save the changes made.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/webtrac26.05T5g00001BXSf0EAH.png)
4. 
  You will receive a security token on your email ID, so you can verify the changes that you have made.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/webtrac18.05T5g00001BXSf5EAH.png)

Once the token has been verified, you will have successfully placed the web tracking script in the footer of your website.

## Related Articles

**Web Tracking Fundamentals:**

- [Introduction To Web Tracking](https://galaxy.maropost.com/kb/articles/856-introduction-to-web-tracking) - Basic web tracking setup and concepts
- [Add Maropost Web Tracking Script To Google Tag Manager](https://galaxy.maropost.com/kb/articles/850-add-maropost-web-tracking-script-to-google-tag-manager) - Implement tracking via Google Tag Manager
- [Web Funnel Tracking](https://galaxy.maropost.com/kb/articles/997-web-funnel-tracking) - Track customer journey completion

**Analytics & Reporting:**

- [Capturing Orders Using Web Tracking](https://galaxy.maropost.com/kb/articles/1003-capturing-orders-using-web-tracking) - Track purchase conversions
- [Product And Revenue Tracking](https://galaxy.maropost.com/kb/articles/938-product-and-revenue-tracking) - Monitor sales performance data