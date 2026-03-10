---
title: "Recommended Content in Emails"
articleID: 829
category: "Content Management > Product Recommendations"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-26
---

# Recommended Content in Emails

You can use recommended content in emails to create engaging email experiences and can substantially improve engagement by delivering personalized content to each subscriber. This helps optimize your email marketing ROI by automatically showcasing relevant products, articles, or offers based on individual user behavior and preferences.

Recommended content enables you to scale personalized communication while reducing manual effort in content curation. When properly configured, this approach typically leads to better open rates and click-through performance by making each email more relevant to the recipient's interests.

Once you’ve created **Recommendation Rules,** you can now insert recommended content in the emails using the **Liquid** **script**. If you already have experience with using Liquid script for displaying data from [**relational tables**](https://galaxy.maropost.com/s/article/Introduction-to-Relational-Tables) or [**content feeds**](https://galaxy.maropost.com/s/article/Content-Feeds), then adding recommended content to an email will be familiar to you.

The Email Content editor will include a list of the rule tags for your Recommendation Rules. In the WYSIWYG Editor, click the "Rule Tags" list in the menu bar. In the HTML Source Code Editor, click your cursor in the 'Rule Tags' list on the left side of the screen.

Similar to personalization data from relational tables, all recommended content is stored in a Liquid array. You will simply use Liquid Script’s built-in array manipulation functions and filters to display the content in the email.

**Step 1:** Place your cursor in the email content where you want the recommended content to appear within the email automatically.

**Step 2:** Click the "**Rule Tags**" drop-down list and select the recommendation rule you want to include in the email.

**Step 3:** Assign the array to a Liquid variable, allowing you to manipulate its elements and attributes within the email body.

**Example:**

```twig
{% assign recommendations = rule.makeup_trends_all%}
```

**Step 4:** At this point, you would typically use a "**FOR**" loop so that you can loop through each recommended content.

**Example:**

```twig
{% for recommendationed_item in recommendations %}
```

**Step 5:** Using Liquid’s dot notation, you can now reference the individual attributes of each recommendation. By default, every recommended content will have a "URL" attribute and a "Keywords" attribute. Assuming that the page has the HTML title tag, the ‘Title’ attribute will also be available. Within the ‘Tags’ attribute will be a list of any additional tags that you selected for the feed in Step 4 when you created the recommendation rule.

**Example:** To display the page title of a recommended content page

```clojure
{{recommended_item.Title}}
```

**Example:** To make the page title clickable with the URL to the recommended content page:

```ada
< a href="{{recommended_item.Url}}" >
```

**Example:** If you have instructed the web spider also to save OpenGraph meta tags, such as the **"og:image" meta tag**, then use Liquid’s alternative notation:

```applescript
{% assign imgURL = item.Tags["og:image"] %}< img src="{{imgURL}}" height="85" >
```

Notice the Liquid syntax that references the **og:image** meta tag within double quotes. For this reason, you have to first assign it to a Liquid variable because the **img** tag references the source URL of the image file in double quotes as well.

**Step 6:** Close the FOR loop to complete the process.

```twig
{% endfor %}
```

## **Putting It All Together**

Suppose a contact has the following recommendations:

```json
{
    "content": [
        {
            "Title": "Eyes | Your Beauty Advisor | Beauty Best Friend",
            "Url": "http://mysiteurl.com/?cat=5",
            "Tags": {
                "description": "Your Beauty Advisor is your “BBF” – Beauty Best Friend , providing you with with the latest and greatest information on skin care, hair care, makeup and wellness."
            },
            "Keywords": [
                "tissues",
                "featured",
                "eyecare",
                "how to grow eyelashes",
                "hair tips",
                "hair growth",
                "eye lashes",
                "beauty tips",
                "beauty tricks",
                "fix tired eyes",
                "detox",
                "detoxify",
                "cosmetic chemicals",
                "dry skin",
                "skin",
                "makeup tips",
                "eye makeup",
                "make up tips",
                "eye make up",
                "makeup tips for sensitive eyes",
                "makeup how tos",
                "healthy make up",
                "makeup trends",
                "makeup",
            ]
        },
        {
            "Title": "Fall 2017 Makeup Trends | YBA",
            "Url": "http://mysiteurl.com/2017/09/fall-2017-makeup-trends/#respond",
            "Tags": {
                "description": "Here is a list of the best fall 2017 makeup trends "
            },
            "Keywords": [
                "fall trends",
                "makeup trends",
                "makeup",
                "fall makeup",
                "fall",
                "fall makeup trends",
                "featured",
                "make up",
                "seasonal"
            ]
        }
    ]
}
```

Then, displaying the recommended content within the email will look like this:

```twig
Here's some previous articles that you may have missed
{% assign allrecommendations = rule.makeup_trends_all%}
{% for recommendation in allrecommendations %}
< a href="{{recommendation.URL}}" >{{recommendation.Title}}
{{recommendation.Tags.description}} ...  Read more  
```

{% endfor %}

**And the result within the email will be:**

![1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWrx.05T5g00000BkWrxEAF.png)

## Related Articles

**Content Design & Management:**

- 
- 
- 

**Personalization & Targeting:**

- 
- [Acquisition Forms](https://galaxy.maropost.com/kb/articles/30-acquisition-forms) - Capture subscriber preferences for better recommendations