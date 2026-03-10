---
title: "client.user"
articleID: 2072
category: "API References > Analytics JS"
knowledgeBase: "Merchandising Cloud"
---

# client.user

## Overview

The client user object provides consistent user identification across SDK libraries and REST API calls, enabling seamless integration between analytics tracking and other platform features. This helps ensure user behavior data connects properly with search, recommendations, and personalization features that rely on understanding individual customer patterns.

Accessing the user object from the Analytics client enables you to maintain consistent user identification when making requests across different parts of the platform, which helps optimize personalization accuracy by ensuring all customer interactions are properly attributed to the correct user profile.

## Returns:

Returns `user` object, which can be used further in `FindifySDK`, `FindifyHelpers` libraries or in plain Findify REST API.

## Code Examples

### JavaScript (SDK)

```javascript
var user = client.user;
var findifySdkClient = FindifySDK.init({
  key: 'f8923hg20hg248g8g9h',
  user: user
});
```