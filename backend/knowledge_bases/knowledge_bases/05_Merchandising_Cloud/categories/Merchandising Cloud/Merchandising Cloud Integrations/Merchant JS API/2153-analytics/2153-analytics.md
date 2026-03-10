---
title: "Analytics"
articleID: 2153
category: "Merchandising Cloud Integrations > Merchant JS API"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Analytics

Analytics is built to track the user behavior on your website or mobile app, or in nodejs, which is required by our machine learning and personalization algorithms.

# Integrate

> **🚧 Obtaining API Key** Before you start, you need to get the API Key in order to get access to the API. You need to follow the [onboarding process]([NO MATCH]) or get the API key from your [Merchant Dashboard](https://dashboard.findify.io/settings/integration)

### Script Tag

In order to use Analytics directly in the browser, you need to include the following script on the page:

HTML

```xml
<!-- Findify Analytics --><script src="https://cdn.jsdelivr.net/npm/@findify /analytics@latest /dist/findify-analytics.js"></script>
```

Analytics will be available in the `window` object as `window.FindifyAnalytics`.

### NPM

If you are using NPM, just install the library from our public NPM registry.

Shell

```ada
npm i --save @findify /analytics
```

# Setup

To start tracking events on the page, you need to initialize the analytics object. There can be only one instance of `Analytics`, so every next initialization will override the previous one.

JavaScript

```dart
var API_KEY ='YOUR_API_KEY';var Analytics = window.FindifyAnalytics;// Initialize Analyticsvar analyticsInstance = Analytics({ key: API_KEY });// Start sending eventsanalyticsInstance.sendEvent('click-item', { rid: REQUEST_ID, id: ITEM_ID });
```