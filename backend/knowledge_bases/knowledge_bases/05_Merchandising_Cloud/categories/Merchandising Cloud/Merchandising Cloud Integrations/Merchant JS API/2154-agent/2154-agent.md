---
title: "Agent"
articleID: 2154
category: "Merchandising Cloud Integrations > Merchant JS API"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Agent

Agent was created to simplify data fetching process and to be framework and platform agnostic. The Agent can be easily injected in jQuery, Angular, or even React-Native project with minimal overhead.

# Integrate

> **🚧Obtaining API Key** Before you start, you need to get the API Key in order to get access to the API. You need to follow the [onboarding process]([NO MATCH]) or get the API key from your [Merchant Dashboard](https://dashboard.findify.io/settings/integration).

### Script Tag

In order to use Agent directly in the browser, you need to include the following scripts on your page:

HTML

```xml
<script src="https://cdn.jsdelivr.net/npm/@findify /analytics@3 .5.3/dist/findify-analytics.js"></script><!-- Findify Agent --><script src="https://cdn.jsdelivr.net/npm/@findify /agent@1 .5.2/dist/findify-agent.js"></script>
```

Agent and Analytics will be available in the `window` object as `window.FindifyAnalytics` and `window.FindifyAgent`.

### NPM

If you are using NPM, just install the libraries from our public NPM registry.

Shell

```dart
npm i --save @findify /agent @findify /analytics
```

# Minimal Setup

The minimal setup requires you only to create the instance of Analytics and Agent. The rest will be handled automatically.

JavaScriptNodeJS

```ada
var API_KEY ='YOUR_API_KEY';var Autocomplete = window.FindifyAgent.Autocomplete;var Analytics = window.FindifyAnalytics;// Initialize librariesvar analyticsInstance = Analytics({ key: API_KEY });var autocompleteInstance = new Autocomplete({  key: API_KEY,  user: analytics.user});// Subscribe to changes in suggestionsautocompleteInstance.on('change:suggestions', function(suggestions) {  // render suggestion});// Send request with some queryautocompleteInstance.set('q', 'white');
```