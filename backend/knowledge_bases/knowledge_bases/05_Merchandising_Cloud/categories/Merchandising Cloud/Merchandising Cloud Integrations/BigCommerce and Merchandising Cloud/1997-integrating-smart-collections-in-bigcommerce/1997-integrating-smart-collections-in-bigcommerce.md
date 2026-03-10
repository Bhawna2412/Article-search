---
title: "Integrating Smart Collections in BigCommerce "
articleID: 1997
category: "Merchandising Cloud Integrations > BigCommerce and Merchandising Cloud"
knowledgeBase: "Merchandising Cloud"
---

# Integrating Smart Collections in BigCommerce 

You can add Smart Collections to your BigCommerce store by inserting a simple div tag into your category template, enabling AI-powered collection pages that rank products based on individual shopper preferences rather than static lists. This integration allows you to enhance collection pages with additional content like banners and recommendations, while the fallback option ensures graceful degradation if connectivity issues occur.

Implementing Smart Collections helps improve product discovery and conversion on category pages. The dynamic, personalized ranking adapts to each customer's behavior using the same AI algorithms from search, while unlimited filtering capabilities enable shoppers to refine results quickly-creating more engaging collection experiences that guide customers to products they're more likely to purchase.

1. How can I create a Smart Collection?

All you need to do is add one div tag to anywhere you'd like to include your Merchandising Cloud Smart Collection[s]. Usually it is the Category template.

HTML

```plaintext
<div data-findify="search"></div>
```

2. How can I add extra content to my Smart Collection pages?

Smart Collection results can be easily decorated with any content from your store (like custom banners, reviews, recommendations. etc).

All you need to do is put the content before and/or after the Smart Collection `div`, for example

HTML

```plaintext
<div class="banner">     <a href="#"><img src="mybanner.png"/></a></div><div data-findify="search"></div><div class="text">    <p>Some extra text</p></div><div id="home-findify-rec-1"></div>
```

3. How can I add a fallback for Smart Collections?

**Please note: if you will not add a fallback, nothing will be displayed on the page in case our servers go down**

For the unlikely case when servers are not responding, you can add a fallback to display custom markup instead of Smart Collections.

To do this, you need to add a `div` to the page with the following `class` and `style`, which should reside inside of the `data-findify="search"` `div`

HTML

```plaintext
<div data-findify="search">  <div class="findify-fallback" style="display:none;">    ..... default collection code goes here....  </div></div>
```

Anything that you will put inside the `div` will be rendered as a fallback.

4. BigCommerce integration

- Once you've configured all your Smart Collections, go `category.html` edit page:
**[store_url]/admin/designmode.php?ToDo=editFile&File=category.html&f=a**
- Replace the original category markup with the following code

HTML

```plaintext
<style>.findify-component-spinner,.findify-component-spinner:after{border-radius:50%;width:60px;height:60px}.findify-component-spinner{margin:60px auto 0!important;position:relative;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:findify-component-spinner-animation .7s infinite cubic-bezier(.67,.35,.7,.8);animation:findify-component-spinner-animation .7s infinite cubic-bezier(.67,.35,.7,.8);-ms-transform-origin:50% 50%;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;border-top:3px solid #eaeaea;border-right:3px solid #eaeaea;border-bottom:3px solid #eaeaea;border-left:3px solid #c6c6c6}@-webkit-keyframes findify-component-spinner-animation{0%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}100%{-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes findify-component-spinner-animation{0%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}100%{-webkit-transform:rotate(450deg);transform:rotate(450deg)}}</style><div data-findify="search" style="min-height: 400px;">  <div class="findify-component-spinner"></div>  <div class="findify-fallback" style="display:none;">    ..... default collection code goes here....  </div></div>
```

- Put the initial category code inside of `findify-fallback` div. In the situation where our servers are down, this div will be rendered instead.