---
title: "Web Funnel Tracking"
articleID: 997
category: "Web Tracking"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Web Funnel Tracking

You can set up web funnel tracking to identify improvement opportunities in your customer conversion paths and optimize marketing effectiveness through detailed behavioral insights. This feature enables data-driven decisions by showing exactly where visitors abandon key processes, which helps ensure your email marketing campaigns guide prospects toward successful completion of desired actions.

When properly configured, web funnel tracking significantly improves your ability to recover abandoned processes through targeted email campaigns. This enhanced visibility into customer behavior patterns typically leads to better campaign performance and more effective follow-up strategies for re-engaging prospects who didn't complete their intended actions.

The web tracking script is used to track a contact's web page views, in which the sequence of pages is pre-defined. This pre-defined sequence is known as a "**Web Funnel**." A web funnel in this context is different compared to the usual web funnels defined by web analytics reporting tools. Here, web funnels are very short, typically comprising two page views: the page at the entrance of the funnel and the page at the exit of the funnel.

An example of this type of web funnel is where the funnel entrance is the shopping cart order review page, where the products are all in the basket, the shipping and billing information has already been entered, and all the visitor has to do is click the [**Submit**] button to place the order. The exit of the web funnel is the 'Thank You' page that immediately follows.

Shopping carts are only one type of web funnel. Another example of a web funnel would be a contact filling out a multi-page profile form for a financial investment company, or a membership form for an online social site.

### Creating Web Funnels

The Funnels tab lets you define a web funnel directly in this form. You can track additional funnels by clicking [**Add Funnel**] and entering the additional details. You can also remove a funnel by clicking on the 'Remove Funnel' button on the bottom left.

![Web_Tracking_Funnels.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX0A.05T5g00000BkX0AEAV.png)

- **Name - **Enter the name for your web funnel. The name of the funnel will be referenced when you create a segment based on the Funnel activity. It will also be referenced in the Web Page Event workflow trigger.
- **Timeout -** Enter an integer between 10 and 90 minutes. The timeout period is used to determine an 'abandoned' funnel.
- **Start Page URL -** Enter the URL of the web page that signifies the beginning of the web funnel. When a contact views this web page, the web tracking script will record the contact's funnel session as having 'started.'
- **End Page URL -** Enter the URL of the web page that signifies the completion of the web funnel. When a contact views this web page after starting a funnel session, the web tracking script will automatically update the contact's funnel session as having been 'completed.' If a contact's web funnel session has started, but the contact has not viewed the End Page URL and no further site activity is detected after the Timeout period, then the contact's web funnel session will be automatically changed to 'Abandoned.'
- **Funnel Tag -** The value you enter here will be used to reference items passed as funnel line items when displaying personalization within an email's content.
- **Funnel Line Items -** Pass items here as an array to the web tracking script that will be used later for personalization within an email's content. In the example above, the shopping cart has stored the description, the URL to the product page, the URL to the product image, and a more descriptive definition of the product as separate arrays. Each array previously stored by the shopping cart is accessed and then passed as its own array to the web tracking script, where it will be retrieved by personalization tags specific to the items in the funnel.  - **Description -** A short description of the product.
  - **page_url -** The URL to the product page. If using funnel tracking for a membership form, provide the URL of the page where the contact last left off.
  - **image_url -** The URL of the product image.
  - **HTML -** Any additional HTML coding that will appear in the personalization.

### Web Funnel Statuses

When a contact enters a web funnel, a new record is created for that contact's session in the web funnel. The contact's funnel session will have one of the following statuses at any point in time:

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/webtrac7.05T5g000017TxBREA0.png)

- **Started - **When a contact views the web page that has been defined as the start of a web funnel, then the contact's funnel status is set to 'started.'
- **Completed -** When a contact starts a web funnel and then views the web page that has been defined as the end of the web funnel, then the contact's funnel session is updated to 'completed.'
- **Abandoned -** When a contact starts a web funnel but never finishes it, AND there are no further page views beyond the timeout setting, then the contact's funnel session is updated to 'abandoned.' When a contact's web funnel status is 'abandoned', then no further funnel session records are created for that contact. Only after the contact returns to the abandoned funnel and finishes it will a new funnel session record be created. This business rule is in place to protect you from 'serial abandoners' - people who purposely abandon carts to receive more and more enticing offers to complete their purchases.
- **Recovered -** When a contact abandons a web funnel and subsequently returns to the same funnel to complete it, then the contact's funnel status is updated to 'recovered.'

## Related Articles

**Web Tracking Foundation:**

- [Introduction to Web Tracking](https://galaxy.maropost.com/kb/articles/856-introduction-to-web-tracking) - Comprehensive guide to web tracking setup and configuration
- [Advanced Web Tracking](https://galaxy.maropost.com/kb/articles/855-advanced-web-tracking) - Advanced tracking techniques and customization

**Contact Behavior Analysis:**

- [Capturing Contact Profile Attributes](https://galaxy.maropost.com/kb/articles/996-capturing-contact-profile-attributes) - Collect detailed contact behavior data
- [Introduction to Segments](https://galaxy.maropost.com/kb/articles/920-introduction-to-segments) - Create segments based on funnel behavior

**Campaign Optimization:**

- [Abandoned Cart Journey Template](https://galaxy.maropost.com/kb/articles/865-abandoned-cart-journey-template) - Automated recovery campaigns for abandoned funnels