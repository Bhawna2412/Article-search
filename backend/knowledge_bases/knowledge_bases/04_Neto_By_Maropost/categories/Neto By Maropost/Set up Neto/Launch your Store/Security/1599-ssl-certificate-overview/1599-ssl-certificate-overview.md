---
title: "SSL Certificate Overview"
articleID: 1599
category: "Set up Neto > Launch your Store > Security"
knowledgeBase: "Neto By Maropost"
---

# SSL Certificate Overview

If you accept payments on your website you must have a valid SSL (Secure Socket Layer) certificate issued in your business name installed on your website at all times. Neto provides your SSL certificate, and installs it free of charge for you when your website goes live.

## What Is SSL?

SSL verifies the identity of websites and encrypts the messages sent between the website and client (e.g. customer).

Neto goes to great lengths to secure its servers, including daily 3rd party network scans, the installation of intrusion prevention software, redundant firewalls and strict security policies. In addition to the security we employ, it is important that you also take measures to secure your website and your customers.

**Please Note**: We do not offer the installation of third-party certificates that you have bought from other providers.

## SSL and Neto

Neto hosted websites by default only use SSL ([https://](https://)) on pages that require secure browsing, such as the shopping cart, checkout, account pages, and the control panel. This is intended to better optimise your website for faster performance for your customers.

If you would like all the pages on your site to use SSL, we can activate **Site-wide SSL**, for every page on youyr website.

Activating site-wide SSL will force all the pages on your website to use SSL (HTTPS) in your customers’ browsers. This has various benefits, such as giving peace of mind to your customers by providing a fully secured browsing experience all over your website.

Furthermore, Google advise that websites using site-wide SSL will gain a slight ranking bonus in their search results.

You can enable site-wide SSL for your site by [contacting our support team](http://www.netohq.com/support/s/contactsupport).

There are several point to consider when using sitewide SSL:

- If you are using the Neto API and it is configured with your URL starting with HTTP it will need to be updated to HTTPS or API connections will not work.
- If you have any images embedded in your product descriptions or page templates using the URL starting with HTTP, these should be updated to HTTPS or to dynamic links (eg. remove the starting URL and leave the string after the /). Otherwise, your browser may show security warnings on these pages due to mixed content.
- It will ultimately be your responsibility to check over and test your website functionality after this change to ensure there are no other security issues.
- If you have a Google Analytics property configured for your Neto website, we recommend updating the default URL to use '[https://'](https://&#39;). Click[here ](https://support.google.com/analytics/answer/3467852?hl=en)to see where to change this.

## Supported Browsers

Keeping your internet browser up to date allows the latest SSL technologies to function and keeps customer transactions secure. If a customer reports a message saying your website is insecure, it’s possible that their web browser (or operating system) needs to be updated. The minimum supported browser versions are:

- Internet Explorer 11
- Firefox 65
- Chrome for desktop 69
- Chrome for Android 74
- Chrome mobile 71
- Safari 11 (mobile & desktop)
- Edge 17

The impact of this is very minimal, as recent usage statistics report that these versions are used by less than 3% of people worldwide. However, affected browsers may not load your site correctly, or at all.