---
title: "Enable Website for Content Recommendations"
articleID: 853
category: "Web Tracking"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Enable Website for Content Recommendations

You can enable website tracking for content recommendations to create engaging email experiences that reflect your subscribers' actual interests. This feature enables you to deliver personalized product suggestions and content based on real website behavior, which typically leads to better open rates and click-through performance compared to generic email content.

When properly configured, content recommendations streamline your workflow by automatically identifying trending products and relevant content from your website, reducing manual effort while maintaining brand consistency across your email campaigns.

Enabling your website for Content Recommendations requires that you implement the Marketing Cloud's [**Web Tracking script**](https://galaxy.maropost.com/s/article/Introduction-to-Web-Tracking) on your website and set the schedule for the Maropost Web Spider to crawl the site.

If there are portions of your site that you do not wish the spider to crawl, then add that information to your [**robots.txt file**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fwww.robotstxt.org%2Frobotstxt.html). Check with your website administrator to ensure that the pages you want to be included in content recommendations are NOT being blocked from the web spider.

If a page was previously crawled and then, later on, is hidden by the robots.txt file, then the next time the web spider crawls the site, that page will no longer be considered as 'recommendable.'

For example, suppose your website has a plug-in that allows site visitors to post their comments on a web page. A link to comment would have a URL similar to [**https://path-to-your-site.com#comments1234**](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fpath-to-your-site.com%23comments1234). You will want to make sure that the Maropost web spider doesn't add any pages with specific comments to be added to the list of recommended pages. Therefore, you will add the following line to your robots.txt file:

```plaintext
Disallow:*\#comments$
```

To set the schedule for the web spider,  click the Enable Recommendations check box in the Create/Edit Website dialog box.

- **Ignore robots.txt** - Enable this option only if your eCommerce storefront platform is auto-generating a robots.txt file that is non-editable and is blocking the Maropost Web Spider from cataloging the proper pages from your site. If you instruct the web spider to ignore your site's robots.txt file, then all pages will be cataloged. To ensure that only the right pages are selected for recommendations, make sure that (1) the correct pages have the KEYWORDS meta tag and the tag's value contains the proper comma-delimited keywords, and (2) the filters you set in the Recommendation Rules properly select only those pages you want for recommendations.
- **Parallel hits** - Specify the number of concurrent threads that will be spidering your site.  The more threads, the faster the site will be cataloged. However, the default setting of 5 concurrent threads is sufficient for spider sites having millions of pages.
- **Crawl day** - Set which days of the week you want the web spider to crawl your site. If you are constantly adding new content, then daily crawling is highly advised.
- **Crawl time** - Set the hours of the day (in the Eastern Time Zone) that you want the spider to run. You probably wouldn't need to schedule it every hour, but if you are constantly adding new content or products to your site, then every 4-6 hours is recommended.

## Related Articles

**Content Personalization Setup:**

- [Adding More Meta Tags For Recommendation Rules](https://galaxy.maropost.com/kb/articles/754-adding-more-meta-tags-for-recommendation-rules) - Configure keywords for better content targeting
- [Content Builders Overview](https://galaxy.maropost.com/kb/articles/908-content-builders-overview) - Tools for creating personalized email content
- [Content Contact Tags](https://galaxy.maropost.com/kb/articles/898-content-contact-tags) - Personalize content based on subscriber data

**Web Tracking & Analytics:**

- [Add Maropost Web Tracking Script To Google Tag Manager](https://galaxy.maropost.com/kb/articles/850-add-maropost-web-tracking-script-to-google-tag-manager) - Implement tracking via Google Tag Manager
- [Advanced Web Tracking](https://galaxy.maropost.com/kb/articles/855-advanced-web-tracking) - Advanced website behavior tracking features