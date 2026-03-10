---
title: "NPM: Analytics JS"
articleID: 2069
category: "API References > Analytics JS"
knowledgeBase: "Merchandising Cloud"
---

# NPM: Analytics JS

## Overview

The Analytics JS package is available through npm, enabling easy installation and version management for JavaScript projects using standard package management workflows. This streamlines integration by allowing you to add analytics capabilities to your build process and keep the library updated through familiar dependency management tools.

Using npm for Analytics JS installation helps ensure you can quickly implement behavioral tracking, manage library versions consistently across environments, and integrate analytics functionality into modern JavaScript development workflows.

## Installation

Install the Analytics JS package using npm:

```bash
npm install @findify/analytics
```

## Package Information

View the package on NPM: [https://www.npmjs.com/package/@findify/analytics](https://www.npmjs.com/package/@findify/analytics)

## Usage

Import and initialize the Analytics library in your project:

```javascript
import analytics from '@findify/analytics';
// Initialize analytics
const client = analytics.init({
  key: 'your-api-key',
  user: {
    uid: 'user-id',
    sid: 'session-id'
  }
});
```