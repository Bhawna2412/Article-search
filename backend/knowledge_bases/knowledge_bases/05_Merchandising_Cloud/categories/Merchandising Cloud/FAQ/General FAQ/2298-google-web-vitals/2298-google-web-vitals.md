---
title: "Google Web Vitals"
articleID: 2298
category: "FAQ > General FAQ"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-09-18
---

# Google Web Vitals

Merchandising Cloud aims to provide the very best experience for the end user in the ecommerce segment.

In order to achieve this, Merchandising Cloud enables websites to show content as fast as possible which reduces waiting time for the users - even on mobile devices with bad internet connection.

Merchandising Cloud cannot, however, influence any of the other 3rd party apps installed on the store front. As Merchandising Cloud is delivering critical content to the page, it is up to the merchant to make sure that Merchandising Cloud scripts are loading first on their site, without being blocked by other scripts.

[Untitled Image](https://files.readme.io/d836586-__2021-06-30__14.44.56.png)

## Largest Contentful Paint

This metric is most sensitive on the mobile devices. Google calculates time between first asset request time and the last critical (or large) piece of content in the viewport loaded before the user interacts with the screen.

To reduce this time we have to load visible content as fast as possible and not modify content on the screen before the user touches it.

## First Input Delay

This metric is about how fast your server returns the data. Most store platforms already have CDN and Cache strategies that make your website load content fast. But the 3rd party apps are usually hosted on other domains requiring additional steps (DNS-resolve) to fetch the content.

Merchandising Cloud strongly recommend to add dns-prefetch tags in the HEAD section to resolve DNS lookup as fast as possible and not spend time on it when content will be required.

`<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin><link rel="preconnect" href="https://api-v3.findify.io" crossorigin>`

## Cumulative Layout Shift

Following best UX practices, Google asks developers to not extend page layout before the user has interacted with it. 

To follow this guidance, we created a placeholder generator that allows for the creation of SVG placeholders with the same size as the real content of the search results or smart collections. The Placeholder will extend window height to the size needed for real content and reduce CLS number accordingly.

![c7c5473-__2021-06-30__15.21.07.png](https://us.v-cdn.net/6038474/uploads/Z1EWLDM0EDCE/c7c5473-2021-06-30-15-21-07.png)