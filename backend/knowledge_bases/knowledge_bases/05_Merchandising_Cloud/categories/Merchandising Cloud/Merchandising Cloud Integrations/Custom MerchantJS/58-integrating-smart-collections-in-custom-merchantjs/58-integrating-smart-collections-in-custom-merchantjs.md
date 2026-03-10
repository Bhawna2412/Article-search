---
title: "Integrating Smart Collections in Custom MerchantJS"
articleID: 58
category: "Merchandising Cloud Integrations > Custom MerchantJS"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Integrating Smart Collections in Custom MerchantJS

## What are Smart Collections?[https://developers.findify.io/docs/integrating-smart_collection-custom#what-are-findify-smart-collections](https://developers.findify.io/docs/integrating-smart_collection-custom#what-are-findify-smart-collections)

Smart Collections is an intelligent way to present specific product segments to your users. The added value with Smart Collections is that you will have all the features you love in Merchandising Cloud Search, now on a collections level:

1. 
2. 
3. 

Smart Collections can be used to replace specific category pages on your site, create dedicated landing pages, or as the complete collection engine for your store. Smart Collections are also SEO friendly, so they are indexed by search engines to make sure you make the best of your product data.

# How can I create a Smart Collection?[https://developers.findify.io/docs/integrating-smart_collection-custom#how-can-i-create-a-findify-smart-collection](https://developers.findify.io/docs/integrating-smart_collection-custom#how-can-i-create-a-findify-smart-collection)

All you need to do is add one div tag to anywhere you'd like to include your Smart Collection[s]:

```xml
<div data-findify="search"></div>
```

# How can I add extra content to my Smart Collections pages?[https://developers.findify.io/docs/integrating-smart_collection-custom#how-can-i-add-extra-content-to-my-findify-smart-collection-pages](https://developers.findify.io/docs/integrating-smart_collection-custom#how-can-i-add-extra-content-to-my-findify-smart-collection-pages)

Smart Collection results can be easily decorated with any content from your store (like custom banners, reviews, recommendations. etc). All you need to do is put the content before and/or after the Smart Collection `div`, for example:

```xml
<div class="banner">
  <a href="#"><img src="mybanner.png"/></a>
</div>
<div data-findify="search"></div>
<div class="text">
  <p>Some extra text</p>
</div>
<div id="home-findify-rec-1"></div>
```

# How can I add a fallback for Smart Collections?[https://developers.findify.io/docs/integrating-smart_collection-custom#how-can-i-add-a-fallback-for-findify-smart-collections](https://developers.findify.io/docs/integrating-smart_collection-custom#how-can-i-add-a-fallback-for-findify-smart-collections)

**Please note: if you will not add a fallback, nothing will be displayed on the page in the unlikely case that servers go down.**

For any case when servers are not responding, you can add a fallback to display custom markup instead of Smart Collections.

To do this, you need to add a `div` to the page with the following `class` and `style`, which should reside inside of the `data-findify="search"` `div`

```xml
<div data-findify="search">
  <div class="findify-fallback" style="display:none;">
    ..... default collection code goes here....
  </div>
</div>
```

Anything that you will put inside the `div` will be rendered as a fallback.