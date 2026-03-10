---
title: "Recommendation Rules"
articleID: 854
category: "Web Tracking"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Recommendation Rules

Recommendation Rules enable you to deliver highly targeted content recommendations that match your subscribers' interests and browsing behavior. This helps increase click-through performance and subscriber engagement by ensuring email content aligns with what each contact has actually viewed or purchased on your website.

When properly configured, recommendation rules streamline your workflow by automatically filtering and selecting relevant content based on your criteria, which typically leads to better campaign results compared to sending generic product recommendations to all subscribers.

**Recommendation Rules** filter the universe of recommendable content to ensure that an email contains the proper recommendations consistent with the email topic.

To create a new Recommendation Rule, first select 'Web' from the main menu. This should now display your website's index page. Now, click on the name of the website on which you have implemented [**web tracking**](https://galaxy.maropost.com/kb/articles/856-introduction-to-web-tracking?utm_source=community-search&utm_medium=organic-search&utm_term=web+tracking). Then select **New Recommendation** from the menu bar located on the top-right corner. The steps to follow thereafter are explained below:

### Step 1: Recommendation Type

![1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXFe.05T5g00000BkXFeEAN.png)

- **Recommendation Name **- Provide a user-friendly name for this Recommendation Rule.
- **Tag Name** - The tag name you assign to this recommendation rule will be the one you reference in the body of your email using Liquid Script to display the actual recommended content in the body of the email.
- **Recommendation Type** - Select the types of pages that will be included in the recommended content.  - **Based on each contact's own page view** (default) - This option selects recommended content that best matches the contact's own page view history.
  - **Based on other contacts' page views who are similar to each contact** - This option selects recommended content that best matches other contacts' page view histories that most closely match the contact's own history. This option is similar to the 'Others who viewed this item also viewed' recommendations feature seen on many e-commerce sites.
  - **Based on other frequently bought together** - This option selects recommended content based on products that others have frequently bought together in the same carts. This setting requires that your account be enabled for Product/Revenue. If you are not sure if your account is enabled, please contact Maropost Support.
  - **Based on the contact's own purchase history** - This option selects recommended content based on each contact's own product purchases. This setting requires that your account be enabled for Product/Revenue. If you are not sure if your account is enabled, please contact Maropost Support.

> **Note:** You may select the two product-related recommendation filters if (1) your account is enabled for Product/Revenue, AND (2) you have created a custom meta tag that you’ve identified as your Product SKU.

### Step 2: Recommendation Filters

![2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXFg.05T5g00000BkXFgEAN.png)
Recommendation Filters are the key feature of your recommendation rule. Use them to filter the universe of recommendable content for any given individual. The filter criteria you specify ensure that the content recommended to each email recipient fits thematically with the overall content of the email you are sending.

The interface is similar to that of Segmentation.  By default, each rule is joined by an AND condition. Change the filter option to 'Select pages which match one or more of the rules described below' to change the join to an OR condition.

- **Included keyword** - Enter a keyword from your website's 'Keywords' HTML meta tag. The keyword you enter here will be used to select recommendable content that includes this keyword. This is the filter rule you will use most often to select for content that is topically similar to that of an email. If your website is tagged with additional types of HTML meta tags (e.g., [**OpenGraph**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fogp.me%2F) meta tags), you can create custom tags, and they will be added to the filter options.
- **Excluded keyword** - Enter a keyword from your website's 'Keywords' HTML meta tag. The keyword you enter here will be used to exclude content that includes this keyword from the recommendation.
- **Description** - The string you enter here is from your website's 'Description' HTML meta tag. Use it to filter the recommended content to pages that have similarities in their descriptions.
- **Title** - The string you enter here is from your website's HTML title tag. Use it to filter the recommended content to pages that have similarities in their titles.
- **URL** - Use this option if you want to filter the recommended content for pages having similar patterns in their URLs.

If you have created any [**custom meta tags**](https://galaxy.maropost.com/kb/articles/754-adding-more-meta-tags-for-recommendation-rules?utm_source=community-search&utm_medium=organic-search&utm_term=custom+meta+tag), those too will be available for filtering your recommended content. For example, suppose your web pages include a custom tag you use for ranking your products.

You can then add the filter for "[rank | is less than | 201]" to only display recommended content of your Top 200 products.

### Step 3: Recommendation Weight

![3.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXFh.05T5g00000BkXFhEAN.png)
This step is purely **optional**.  Use it to introduce a bias toward particular recommended content. It is particularly helpful in the case where your filter rules may result in a large selection of recommendable content for any given contact, but that content may not necessarily be relevant to the topic of the email. Adding a weighting factor to one or more keywords will help ensure that topically relevant content will be recommended to an individual.

### Step 4: Recommendation Settings

![4.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXFf.05T5g00000BkXFfEAN.png)
This final step lets you define the minimum and maximum numbers of recommended content that should be included in your email.

- **Minimum Pages** - Enter a number that specifies the minimum number of recommended content for any given contact. If the recommended content for a contact is **less than** this number, then the email for this contact will only contain that which you have specified as the default content. Be careful not to set too high a number, otherwise it will increase the likelihood that many contacts will only see the default content.
- **Maximum Pages** - Enter a number that specifies the maximum number of recommended content for any given contact. Be careful not to set too high a number just in case the Recommendation Engine determines many recommendable content pieces for a given contact.
- **Default Recommendations** - Enter the URL of the default web page that will be included in the body of an email in the case where (1) a contact does not have any recommendable content, or (2) the recommendable content is below the minimum threshold.

> **Note:** You can only enter a URL that the web spider has already cataloged. If you are unsure, click the Recommended Pages link in the website report to see a report of all pages that the web spider has tracked on your site.

- **Add More** - Click this button if you want to have more than one web page added to the default content.
- **Feed Tags** - The tags you select here will be included as attributes in the personalized content. You will use Liquid Script to merge the recommended content with the HTML code of the email content, just like with other personalization tags. If you have created any custom meta tags, they will be displayed here as well. Select the custom tag so that it will be included in the personalized content feed and displayed in the body of your email.

### Testing Your Recommendation Rule

Once you have saved your recommendation rule, you can test it out to see whether the Recommendation Engine has recommended content for any given contact.

Select 'Web' from the main menu on your home screen. Once in the Web module, select **Web Tracking** to display the website's index page. Click on the name of the website where you have implemented [**web tracking**](https://galaxy.maropost.com/kb/articles/856-introduction-to-web-tracking?utm_source=community-search&utm_medium=organic-search&utm_term=web+tracking). Then select **Recommendations** from the menu bar to view the Recommendations index screen. Finally, click on the name of the Recommendation rule that you want to test.

On the right-hand side of the screen, you'll see the API details of this recommendation rule. All recommendation rules have their own API endpoint, which allows you to test the validity of the recommendation rules that you have set.

Copy the URL for either the JSON-formatted response or the XML-formatted response and paste it into your browser's location field. Remember to also include the API [**authentication token**](https://galaxy.maropost.com/kb/articles/648-api-overview?utm_source=community-search&utm_medium=organic-search&utm_term=API+Overview) from your account. The full URL will look something like:

`https: //api.maropost.com/accounts/<em>123</em>/websites/<em>123</em>/recommendation_rule_sets/ <em>123</em>/feed.json?contact_id=<em>123456</em>&auth_token=<em>abc123def456.</em>`

Your browser will then display a formatted data payload showing recommended content for the contact ID that you provided. If there is no recommended content for that specific contact, then the payload will include the pages from the default content (if you specified any for that particular recommendation rule). If you did not specify any default content, then the content will be empty for a contact having no recommended content.

The response payload will look something like the following (JSON format as an example):

```plaintext
{    "content": [        {            "Title": "Eyes | Your Beauty Advisor | Beauty Best Friend",            "Url": "http://mysiteurl.com/?cat=5",            "Tags": {                "description": "Your Beauty Advisor is your “BBF” – Beauty Best Friend , providing you with with the latest and greatest information on skin care, hair care, makeup and wellness."            },            "Keywords": [                "tissues",                "featured",                "eyecare",                "how to grow eyelashes",                "hair tips",                "hair growth",                "eye lashes",                "beauty tips",                "beauty tricks",                "fix tired eyes",                "detox",                "detoxify",                "cosmetic chemicals",                "dry skin",                "skin",                "makeup tips",                "eye makeup",                "make up tips",                "eye make up",                "makeup tips for sensitive eyes",                "makeup how tos",                "healthy make up",                "makeup trends",                "makeup",            ]        },        {            "Title": "Fall 2017 Makeup Trends | YBA",            "Url": "http://mysiteurl.com/2017/09/fall-2017-makeup-trends/#respond",            "Tags": {                "description": "Here is a list of the best fall 2017 makeup trends "            },            "Keywords": [                "fall trends",                "makeup trends",                "makeup",                "fall makeup",                "fall",                "fall makeup trends",                "featured",                "make up",                "seasonal"            ]        }    ]}
```

## Related Articles

**Content Personalization:**

- [Machine Learning For Recommendations](https://galaxy.maropost.com/kb/articles/852-machine-learning-for-recommendations) - Overview of AI-powered content recommendations
- [Adding More Meta Tags For Recommendation Rules](https://galaxy.maropost.com/kb/articles/754-adding-more-meta-tags-for-recommendation-rules) - Configure additional metadata for targeting
- [Enable Website For Content Recommendations](https://galaxy.maropost.com/kb/articles/853-enable-website-for-content-recommendations) - Set up website crawling for recommendations

**Implementation & Testing:**

- [Content Builders Overview](https://galaxy.maropost.com/kb/articles/908-content-builders-overview) - Tools for implementing personalized content
- [Introduction To Web Tracking](https://galaxy.maropost.com/kb/articles/856-introduction-to-web-tracking) - Foundation for recommendation tracking