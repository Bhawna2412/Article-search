---
title: "Adding More Meta Tags for Recommendation Rules"
articleID: 754
category: "Web Tracking"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Adding More Meta Tags for Recommendation Rules

You can add custom meta tags to enhance your website's content recommendation capabilities, enabling more sophisticated personalized email marketing campaigns. This helps improve email engagement rates by ensuring your content recommendations are based on richer product data and metadata, leading to more relevant suggestions that can substantially improve click-through performance.

Custom meta tags enable the recommendation engine to understand product relationships and content attributes better, which results in more targeted and effective automated email content that resonates with individual subscriber preferences.

The Maropost Web Spider only catalogs pages with the "keywords" HTML meta tag. For each of these pages, the spider will also catalog the URL of the page, its title, and its description (if the "description" HTML meta tag is included).

The Maropost Web Spider only catalogs pages that include the 'keywords' HTML meta tag. For each of these pages, the spider will also catalog the URL of the page, its title, and its description (if the 'description' HTML meta tag is included)

Assuming your website also uses additional types of HTML meta tags (e.g., [**OpenGraph tags**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fogp.me%2F)), then you can specify those same tags for Recommendation Rules and for inclusion in the personalized content recommendation email.

To create a new Custom Tag for content recommendations, select 'Web' from the main menu on the home screen.  Once in the Web module, select **Web Tracking **to display the website's index page. Click on the name of the website where you have implemented [**web tracking**](https://galaxy.maropost.com/s/article/Introduction-to-Web-Tracking). Then select **New Custom Tag **located in the top-right corner of your screen. Now, you will see the screen below:

![1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWkm.05T5g00000BkWkmEAF.png)

- **Name **- Enter the name of your HTML meta tag. Examples include "og: title", "og: image", "twitter: card", and others.
- **Product SKU** (optional) - Checking this box informs the Recommendation Engine that this meta tag's value is the product SKU that matches the 'Item ID' in the Product/Revenue database. This setting enables the Recommendation Engine to recommend content on your site based on your contacts' own purchase history.
- **Tag type** - Maropost supports string, numeric, date/time, and boolean data types.
- **Default value** - Enter the default value for the custom tag in case a particular page doesn't include that custom tag.

Once you save your custom HTML meta tag, the next time the Maropost web spider crawls your site, it will store that tag and its value with the page URLs containing that tag. It will then appear as a filter option and as a feed tag option in [**Recommendation Rules**](https://galaxy.maropost.com/s/article/RecommendationRules61711eb441390).

## Related Articles

**Content Design & Personalization:**

- [Content Builders Overview](https://galaxy.maropost.com/kb/articles/908-content-builders-overview) - Build personalized content with dynamic elements
- [Content Contact Tags](https://galaxy.maropost.com/kb/articles/898-content-contact-tags) - Use contact data for content personalization
- [Content Abandoned Cart Tags](https://galaxy.maropost.com/kb/articles/719-content-abandoned-cart-tags) - E-commerce product recommendation tags

**Form & Brand Management:**

- [Acquisition Forms](https://galaxy.maropost.com/kb/articles/30-acquisition-forms) - Capture visitor data with custom forms
- [Brand Management](https://galaxy.maropost.com/kb/articles/916-brand-management) - Maintain consistent branding across content