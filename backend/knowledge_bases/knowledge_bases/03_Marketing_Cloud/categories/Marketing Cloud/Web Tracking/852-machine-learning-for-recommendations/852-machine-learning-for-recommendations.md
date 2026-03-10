---
title: "Machine Learning for Recommendations"
articleID: 852
category: "Web Tracking"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Machine Learning for Recommendations

You can leverage machine learning-powered content recommendations to deliver personalized email experiences that significantly improve subscriber engagement and campaign effectiveness. This advanced system helps optimize email marketing ROI by analyzing individual website browsing behavior to automatically recommend relevant content, typically leading to better click-through rates and stronger subscriber relationships compared to generic email content.

Machine learning recommendations enable you to scale personalized communication by automatically matching each subscriber's interests with your most relevant content, helping drive better campaign results through data-driven content selection that evolves with subscriber behavior patterns over time.

Personalized content recommendations represent the next generation of email marketing. The primary purpose of email marketing is to drive traffic to a website. The cycle is completed when a page view history determines what type of content is received in future emails.

Maropost for Marketing implements state-of-the-art machine learning that works behind the scenes, tracking each contact's own website page view history. Based on this stored knowledge, marketers create Rule Sets for personalized content that is automatically inserted into each contact's own email at send time.

## Content Recommendations requires the following elements:

Each page is tagged with the 'Keywords' [**HTML META tag**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.w3schools.com%2Ftags%2Ftag_meta.asp), with each keyword separated by commas.

### The Website Library

The **Website Library** is a highly-indexed catalog of a website. The Website Library contains metadata about every page on the site. The Website Library is the source of content that will ultimately be displayed as personalized content within every recipient's own email.

The Maropost **web crawler, **or** web spider, **is a specialized Internet bot that visits every page of the designated website, making an entry in the library for each page visited. Web masters can restrict what portions of the website the spider can or cannot view. The rules are defined in a **robot.txt** file that is stored on the website.

The purpose of the web spider is to build the website library by cataloging each web page it visits.  The spider does not, however, build an exact reproduction of each page of the website. It simply captures the page URL, the page title, and each of the comma-separated values set in the 'keywords' HTML META tag.

As the web spider crawls across every page of a website that it has access to, it builds a catalog of the website in which each web page is defined by the META tags, and especially the keywords, that the web developer has inserted into the page's HTML code. The Website Library becomes a collection of keywords, how they tend to be grouped together, and the frequencies of each grouping.

> **Note:** You must tag your web pages with keywords properly to make them usable by the Recommendations Engine. If your keywords are too generic, then the number of recommended pages loses its personalized nature. If your keywords are too specific, then you’ll end up with virtually non-recommendable content because the only people who can be recommended that content are those who have already viewed that page.

Web spiders regularly crawl a website in order to keep the Website Library as up-to-date as possible, since web developers are constantly adding new content and new products to the website.

### The Site Visitor's Web Profile

The Maropost web tracking script that is embedded in every web page records the collection of keywords of each page that the visitor has viewed. Over time, the site visitor's **Web Profile** becomes defined by the keywords of the pages he has viewed and the frequency of each keyword.

The combination of keywords and the frequency of the combinations from the site visitor's page view history establishes the types of content he has viewed most frequently on the site, and is most likely to view in the future.

### The Recommendation Engine

The **Recommendation Engine** defines the entries in the Website Library that best match each site visitor's Web Profile. The Recommendation Engine operates in near-real time. Even though websites remain fairly static, a site visitor's Web Profile is constantly being updated with each page that the visitor views.

The marketer can create Recommendation Rules that tell the Recommendation Engine which combination of keywords (from the 'Keywords' META tag) is to be used when defining the entries in the Website Library that best fit the site visitor's Web Profile.

The marketer also has the option to apply a **weighting factor** to any of the keywords that instructs the Recommendation Engine to have a preferential selection of web pages that contain the keywords having the higher weight. A typical use of an optional weighting factor would be to ensure that content recommended for every individual is about basketball, even for those individuals who predominantly read articles on the website about football.

Marketers create and save multiple Recommendation Rules for re-use depending upon the type of recommended content they wish to ultimately appear within any given email. The Recommendation Engine starts with each site visitor's Web Profile and finds the content in the Website Library that best matches according to the recommendation rule that the marketer specified.

Usually, the marketer desires to display several blocks of recommended content within a personalized email. The recommendation rule specifies both the minimum number and the maximum number of entries in the Website Library to recommend for each site visitor.  The Recommendation Engine returns the entries in the Website that best fit an individual site visitor's Web Profile in the form of an array of entries within a structured data file.

The structured data file that is unique for each site visitor, based on the marketer-defined recommendation rule and the site visitor's Web Profile, is a **personalized content feed**. The personalized content feed includes elements that will appear in the body of the email. Such elements include the title of the content (not necessarily exactly the title of the web page), a description of the content, an image, and a link to the website page.

### The Personalization Engine

The **Personalization Engine **is responsible for injecting personalized content that the Recommendation Engine compiles for each recipient of an email campaign at run time.

Elements of recommended content are rendered within an email using **Liquid Scripting** syntax.  They can be iteratively looped, links within each email are tracked, and the content is displayed in the web-hosted version of the email (along with the tracked links).

- The [**Maropost web spider**](https://galaxy.maropost.com/s/article/Enable-Website-for-Content-Recommendations) crawls the website, cataloging each page in the Web Content Library.
- The Maropost web tracking script is what the web developer inserts into each web page. This script builds the entire page view history of each contact.
- A [**Recommendation Rules**](https://galaxy.maropost.com/s/article/RecommendationRules61711eb441390) editor that the marketer uses to define the specific types of content that the Recommendation Engine should select when determining 'best match' for each contact.
- A [**personalization tag**](https://galaxy.maropost.com/s/article/RecommendedContentinEmails) that the marketer inserts into the email content. At run time, when the emails are created, the Recommendation Engine will automatically insert references to pages on the website that best match each contact's own page view history.

## Related Articles

**Content Personalization:**

- [Adding More Meta Tags For Recommendation Rules](https://galaxy.maropost.com/kb/articles/754-adding-more-meta-tags-for-recommendation-rules) - Configure keywords for better content targeting
- [Content Builders Overview](https://galaxy.maropost.com/kb/articles/908-content-builders-overview) - Tools for creating personalized email content
- [Content Abandoned Cart Tags](https://galaxy.maropost.com/kb/articles/719-content-abandoned-cart-tags) - Personalize cart abandonment campaigns

**Content Management:**

- [Brand Management](https://galaxy.maropost.com/kb/articles/916-brand-management) - Maintain consistent branding in personalized content
- [Acquisition Forms](https://galaxy.maropost.com/kb/articles/30-acquisition-forms) - Capture subscriber preferences for better recommendations