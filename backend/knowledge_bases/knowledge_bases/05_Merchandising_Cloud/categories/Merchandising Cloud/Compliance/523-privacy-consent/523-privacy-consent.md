---
title: "Privacy & Consent"
articleID: 523
category: "Compliance"
knowledgeBase: "Merchandising Cloud"
---

# Privacy & Consent

Implementing proper privacy consent mechanisms helps you respect customer privacy while maintaining personalized experiences. When you handle consent correctly, you help build customer trust and maintain regulatory compliance, which supports sustainable personalization strategies and protects your business while enabling conversion-optimizing features like personalized recommendations and search.

Privacy consent management enables you to balance personalization with privacy protection. This helps you maintain customer trust while leveraging data for improved shopping experiences, supporting better long-term conversion performance through ethical data practices that build customer confidence and ensure compliance with privacy regulations.

Privacy FAQ

## How does Maropost Merchandising Cloud (formerly Findify) track visitors on my website?[https://developers.findify.io/docs/privacy-and-consent#how-does-findify-track-visitors-on-my-website](https://developers.findify.io/docs/privacy-and-consent#how-does-findify-track-visitors-on-my-website)

We use anonymous visitor IDs stored in the cookies and on some platforms, such as Shopify, in the platform orders. We don't know who the customers are and we do not collect or save any private data.

## What kind of data does Merchandising Cloud collect about my customers?[https://developers.findify.io/docs/privacy-and-consent#what-kind-of-data-does-findify-collect-about-my-customers](https://developers.findify.io/docs/privacy-and-consent#what-kind-of-data-does-findify-collect-about-my-customers)

We do not collect any personal identifiable information (PII). We store data that is only relating to search-related activity (this includes recommendations and smart collections as well) from your customers.

## Why does Merchandising Cloud collect this anonymous data on my website?[https://developers.findify.io/docs/privacy-and-consent#why-does-findify-collect-this-anonymous-data-on-my-website](https://developers.findify.io/docs/privacy-and-consent#why-does-findify-collect-this-anonymous-data-on-my-website)

We use this data for two purposes:

- Machine learning: We use the product view and conversion information in order to automatically calculate the popularity score of the different products on your site. This way, the most relevant and popular products are returned to customers in the autocomplete and search results.
- Revenue tracking: In order to accurately track what revenue Merchandising Cloud has generated, we need to track purchases and tie them to the relevant search queries.

## Is Merchandising Cloud secure?[https://developers.findify.io/docs/privacy-and-consent#is-findify-secure](https://developers.findify.io/docs/privacy-and-consent#is-findify-secure)

Even though a system is never 100% hermetically secure, we follow the most strict industry standards to make sure our systems and all the data we gather are safe and secure. We also do not store any payment information, which further reduces any possible risk.

## How can the end-consumer find the _findify_uniq and the _findify_visit cookies values?[https://developers.findify.io/docs/privacy-and-consent#how-can-the-end-consumer-find-the-_findify_uniq-and-the-_findify_visit-cookies-values](https://developers.findify.io/docs/privacy-and-consent#how-can-the-end-consumer-find-the-_findify_uniq-and-the-_findify_visit-cookies-values)

The shopper must open the Inspector in their browser by clicking right on a page and select "Inspect". Go to the tab Console, and copy/paste a Javascript snippet:

```plaintext
```javascriptwindow.findifyCallbacks.push(function(findify) {  alert("_findify_uniq = " + findify.analytics.user.uid + " \n_findify_visit = " + findify.analytics.user.sid);})```
```

It sets a cookie called "findify_optout" to the value "1", preventing the analytics JS to send the personal data of the end-consumer.

## How do I deal with a personal information access request with Merchandising Cloud?

Send an email to [privacy@findify .io](mailto:privacy@findify.io) with the following details:

**Subject:** 

Personal Information Access Request

**Content:****
**Store URL = mystore.com

_findify_uniq = XXXXX

_findify_visit = YYYYY

These two values can be found in the shopper's browser's local storage.

## How do I deal with a personal information removal request with Findify?

Send an email to [privacy@findify .io](mailto:privacy@findify.io) with the following details:

**Subject:** 

Personal Information Removal Request

**Content:****
**Store URL = mystore.com

_findify_uniq = XXXXX

_findify_visit = YYYYY

These two values can be found in the end-consumer browser's local storage.

## Right to restrict processing

To disable the Merchandising Cloud tracking, this Javascript snippet can be enabled on the eCommerce store by the end-consumer (by clicking "No" on the consent banner for instance):

```plaintext
function findifyDisableTracking() {   var date = new Date();   date.setTime(date.getTime() + (365*24*60*60*1000));   var expires = "; expires=" + date.toUTCString();   document.cookie =  "findify_optout=1" + expires + "; path=/";}findifyDisableTracking();
```

It sets a cookie called "findify_optout" to the value "1", preventing the analytics JS to send the personal data of the end-consumer.

Obtaining Consent

Merchandising Cloud uses cookies to provision its services to you by setting a cookie in your visitor's browsers. You are required to obtain consent from your visitors in order to comply withmEuropean laws on data protection.

## What do you have to do?[https://developers.findify.io/docs/privacy-and-consent#what-do-you-have-to-do](https://developers.findify.io/docs/privacy-and-consent#what-do-you-have-to-do)

You will need to obtain consent to use cookies and process visitor's personal data.

There is no one-size-fits-all solution in obtaining consent from your visitors as it depends on how you use the information gathered from them. A common approach is to use a cookie banner.

We provide you with an example cookie banner text in order to facilitate your use of our services:

*We use cookies to analyze our traffic and to personalize content, such as search results and recommendations. The information we collect is shared with our partners who provide these services to us. Your visit to this site will not influence the content of other websites. [Read more in our Privacy Policy / Cookie Policy]*

Please note that it is important that you customize this message in accordance with how you use the visitors' personal data.

## What should you do if the end-consumer does not consent?[https://developers.findify.io/docs/privacy-and-consent#what-should-you-do-if-the-end-consumer-does-not-consent](https://developers.findify.io/docs/privacy-and-consent#what-should-you-do-if-the-end-consumer-does-not-consent)

If the end-consumer does not consent, you should execute the Javascript script that opts them out of the Merchandising Cloud analytics tracking. We explain how to achieve that in this [section](https://developers.findify.io/docs/merchants-obligations#section-right-to-restrict-processing).

> You might notice the following additional cookies:_findify_cart: used to collect shopping cart products for data analytics used in suggestions and recommendations._findify_ct: used to track clicked products for data analytics used in suggestions and recommendations.