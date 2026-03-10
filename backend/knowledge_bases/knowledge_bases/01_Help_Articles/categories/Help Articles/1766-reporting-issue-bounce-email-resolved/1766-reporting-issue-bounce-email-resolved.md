---
title: "Reporting Issue - Bounce Email (Resolved)"
articleID: 1766
knowledgeBase: "Help Articles"
lastUpdated: 2021-10-21
---

# Reporting Issue - Bounce Email (Resolved)

**Status:**Resolved

**Resolution Description:**During a performance upgrade to our bounce processing there was an error in the categorization of bounce returns. This lead to some soft bounces returns to be categorized as hard bounces. In certain cases, some contacts were added to the Do Not Mail list as a result. The upgrade was rolled back immediately, and contacts that fell into a Do Not Mail list from a soft bounce were removed, mitigating all impacted customers.  
  
We want to reiterate that this issue only affected email bounces for campaigns sent on Monday, August 10, between approximately 7:00AM and 1:50PM Eastern Time Zone.  Campaign opens, clicks, and unsubscribes were unaffected.  Confirmed hard bounces from the ISPs were unaffected as were most confirmed soft bounces.  If you have any further questions, please contact [support@maropost.com](mailto:support@maropost.com).

**Timeline:**

* On Monday, August 10th at 7:00am EST performance upgrade took place
* August 10th at 12:00pm (noon) EST soft bounce to hard bounce mis-categorization was noted and reported
* August 10th at 1:05PM EST rollback of the performance was complete