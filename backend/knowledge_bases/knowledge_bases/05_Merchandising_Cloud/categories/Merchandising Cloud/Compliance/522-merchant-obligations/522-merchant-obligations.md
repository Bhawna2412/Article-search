---
title: "Merchant Obligations"
articleID: 522
category: "Compliance"
knowledgeBase: "Merchandising Cloud"
---

# Merchant Obligations

Understanding your merchant obligations helps you maintain compliant operations and protect customer trust. When you clearly understand your responsibilities for data handling, privacy, and platform usage, you help ensure regulatory compliance and build customer confidence, which supports sustainable business operations and protects your brand reputation while optimizing ecommerce performance.

Clear knowledge of merchant obligations enables responsible platform usage and customer data management. This helps you maintain compliance with regulations while building trust with customers, supporting long-term business success through ethical operations and proper stewardship of customer information across your merchandising and search implementations.

## How can the end-consumer find the _findify_uniq and the _findify_visit cookies values?

The end-consumer must open the Inspector in their browser by clicking right on a page and select "Inspect". Go to the tab Console, and copy/paste this Javascript snippet:

```plaintext
window.findifyCallbacks.push(function(findify) {  alert("_findify_uniq = " + findify.analytics.user.uid + " \n_findify_visit = " + findify.analytics.user.sid);})
```

## Right of access / data portability

Send an email to [privacy@findify .io](mailto:privacy@findify.io) with the following details:

**Subject:** 

Personal Information Access Request

**Content: ****
**Store URL = mystore.com

_findify_uniq = XXXXX

_findify_visit = YYYYY

These two values can be found in the end-consumer browser's local storage.

## Right to be forgotten

Send an email to [privacy@findify .io](mailto:privacy@findify.io) with the following details:

**Subject:** 

Personal Information Removal Request

**Content:****
**Store URL = mystore.com

_findify_uniq = XXXXX

_findify_visit = YYYYY

These two values can be found in the end-consumer browser's local storage.

## Right to restrict processing

To disable the Merchandising Cloud (formerly Findify) tracking, this Javascript snippet can be enabled on the ecommerce store by the end-consumer (by clicking "No" on the consent banner for instance):

```plaintext
function findifyDisableTracking() {   var date = new Date();   date.setTime(date.getTime() + (365*24*60*60*1000));   var expires = "; expires=" + date.toUTCString();   document.cookie =  "findify_optout=1" + expires + "; path=/";}findifyDisableTracking();
```

It sets a cookie called "findify_optout" to the value "1", preventing the analytics JS to send the personal data of the end-consumer.

> You might notice the following additional cookies:_findify_cart: used to collect shopping cart products for data analytics used in suggestions and recommendations._findify_ct: used to track clicked products for data analytics used in suggestions and recommendations.