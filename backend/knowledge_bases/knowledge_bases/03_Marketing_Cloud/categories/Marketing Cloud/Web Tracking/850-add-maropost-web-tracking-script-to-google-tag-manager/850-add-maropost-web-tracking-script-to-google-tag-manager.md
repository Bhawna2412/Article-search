---
title: "Add Maropost Web Tracking Script to Google Tag Manager"
articleID: 850
category: "Web Tracking"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Add Maropost Web Tracking Script to Google Tag Manager

You can integrate Maropost web tracking with Google Tag Manager to streamline your analytics setup and enhance customer journey insights. This integration helps optimize email marketing ROI by consolidating tracking scripts in one centralized platform, making it easier to manage website analytics while ensuring comprehensive data collection for personalized email campaigns and automated workflows.

When properly configured, this tracking integration enables data-driven email marketing optimization by capturing detailed visitor behavior that powers abandoned cart recovery, personalized product recommendations, and targeted remarketing campaigns based on website activity.

Maropost's web tracking script is fully compatible with sites using Google Tag Manager to consolidate and manage all tracking scripts.

Follow the steps shown below to insert the web tracking script in your Google Tag Manager account:

1. Log in to Maropost for Marketing and select Web > Web Tracking from the main menu.
2. Click the domain URL whose web tracking script you want to add to your Google Tag Manager account. The web tracking script's dashboard page will now appear.
3. 
  Click the Integration tab to view the web tracking script tag for this domain URL.

  ![GTM_integration_tab.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWu8.05T5g00000BkWu8EAF.png)
4. Highlight the entire opening and closing script tag, and copy it to your clipboard.
5. 
  Log in to your Google Tag Manager account and click the "New Tag" link.

  ![GTM_new_tag.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWuA.05T5g00000BkWuAEAV.png)
6. 
  Click the button to select a Tag Type, and then choose 'Custom HTML' from the options.

  ![GTM_tag_type.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWu9.05T5g00000BkWu9EAF.png)
7. 
  In the Tag Configuration modal, paste the Maropost web tracking script that you copied in Step Four above.

  ![GTM_tag_configuration.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWuB.05T5g00000BkWuBEAV.png)
8. Check the 'Support document.write' checkbox then click the Advanced Settings link.  For the Tag firing options, select "Unlimited".
9. Click the button to select the Triggering, and choose 'All Pages -- Page View' option.
10. Click the [Save] button to save your edits.

> **Important:** Remember to test your configuration before promoting it live.

## Related Articles

**Analytics & Reporting:**

- [Advanced Web Tracking](https://galaxy.maropost.com/kb/articles/855-advanced-web-tracking) - Monitor website visitor behavior and engagement
- [Capturing Orders Using Web Tracking](https://galaxy.maropost.com/kb/articles/1003-capturing-orders-using-web-tracking) - Track conversion performance and revenue
- [Conversion Attribution Last](https://galaxy.maropost.com/kb/articles/1368-conversion-attribution-last) - Understand conversion tracking and attribution

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Get started with email campaign creation
- [Campaign Tags](https://galaxy.maropost.com/kb/articles/926-campaign-tags) - Organize and categorize your campaigns