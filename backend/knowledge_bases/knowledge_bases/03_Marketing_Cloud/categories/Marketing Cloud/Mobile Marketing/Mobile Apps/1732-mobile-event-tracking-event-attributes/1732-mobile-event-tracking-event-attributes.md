---
title: "Mobile Event Tracking: Event Attributes"
articleID: 1732
category: "Mobile Marketing > Mobile Apps"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Mobile Event Tracking: Event Attributes

You can leverage mobile event attributes to create highly targeted segments based on user behavior within your mobile application. Understanding these data points helps optimize your mobile marketing campaigns by enabling precise audience targeting based on cart activity, content engagement, and purchase behavior.

Mobile event tracking significantly improves campaign personalization by capturing detailed user interactions and behaviors within your app. When properly implemented, these analytics enable you to deliver more relevant messaging that can substantially improve engagement rates and drive better conversion results for your mobile marketing initiatives.

Every event includes a set of attributes that allows you to **further segment** your mobile app users. For example, perhaps you want to create different segments of users who have completed the checkout of a mobile cart based on the cart value, or of the items that were included in the cart.

All standard events include a pre-defined set of attributes that vary depending upon the type of standard event.

| Event Name | Event Attribute | Data Type |
| --- | --- | --- |
| added_to_cart, 			removed_from_cart | cart_id | String |
| sku | String |  |
| description | Text |  |
| quantity | Numeric |  |
| value | Float |  |
| product_category | String |  |
| brand | String |  |
| started_checkout, 			completed_checkout | cart_id | String |
| value | Float |  |
| started_content, 			finished_content | content_id | String |
| title | String |  |
| description | Text |  |
| category | Text |  |
| value | Float |  |

Each of the standard events listed above include the 'Value' attribute. The attribute is a float data type and is useful for reporting and for segmentation. The definition of the 'Value' attribute varies depending upon the event.

- **added_to_cart, removed_from_cart** - Is the price of the item added to the cart.
- **started_checkout, completed_checkout** - Is the total cart value.
- **started_content, finished_content** - Is any point value that you want to assign to the content viewed. Assigning a point value is useful if you want to reward your app users for viewing a certain amount of content within the app.

## Related Articles

**Analytics & Reporting:**

- [Campaign Report](https://galaxy.maropost.com/kb/articles/843-campaign-report) - Analyze mobile campaign performance and engagement metrics
- [Ab Campaign Reports](https://galaxy.maropost.com/kb/articles/632-ab-campaign-reports) - Test and optimize your mobile marketing strategies
- [Advanced Web Tracking](https://galaxy.maropost.com/kb/articles/855-advanced-web-tracking) - Comprehensive tracking across mobile and web platforms

**Mobile Tracking Setup:**

- [Add Maropost Web Tracking Script To Google Tag Manager](https://galaxy.maropost.com/kb/articles/850-add-maropost-web-tracking-script-to-google-tag-manager) - Integrate tracking across your mobile and web properties