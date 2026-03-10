---
title: "UTM Tracking Query"
articleID: 2163
category: "Third Party Integrations"
knowledgeBase: "Merchandising Cloud"
---

# UTM Tracking Query

You can maintain accurate UTM tracking parameters in your analytics platform even when the Merchandising Cloud script modifies URLs on collection pages and search results. Most analytics platforms capture the original URL before any JavaScript modifications, ensuring your campaign tracking and attribution data remains intact and reliable.

Understanding how UTM parameters interact with the Merchandising Cloud script helps ensure your marketing analytics continue to function correctly. By positioning your analytics script properly and verifying that original URLs are captured, you can maintain accurate campaign performance tracking while benefiting from enhanced search and collection functionality.

## **Issue:**

Our script replaces UTM query from URL on smart collection pages and search results.

Don't worry, most analytics platforms use the original URL instead of the replaced one. This means all provided data will be sent to its recipient.

To make sure:

- 
- 

## **Manual Script**

In case you are implementing your own analytics, or trying to access the original URL inside Google Tag Manager:

Store the initial URL on the page window.initialUrl = window.location.href`

Then use this value inside your script