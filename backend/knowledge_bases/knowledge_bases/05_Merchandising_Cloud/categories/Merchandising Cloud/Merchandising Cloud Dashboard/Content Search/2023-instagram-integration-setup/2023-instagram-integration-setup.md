---
title: "Instagram Integration Setup"
articleID: 2023
category: "Merchandising Cloud Dashboard > Content Search"
knowledgeBase: "Merchandising Cloud"
---

# Instagram Integration Setup

You can integrate Instagram content into your search and merchandising experience, enabling shoppers to discover products through social media imagery that showcases your items in real-world contexts. This integration helps bridge social inspiration with ecommerce conversion by displaying Instagram photos alongside product results, potentially increasing engagement and purchase intent through visual storytelling and social proof.

Implementing Instagram integration helps leverage user-generated content and brand photography to enhance product discovery. You can display Instagram images in search results, recommendations, or collections, providing shoppers with lifestyle context that helps them envision products in use-supporting conversion by offering multiple discovery paths and visual inspiration that complements traditional product photography and descriptions.

> **Important:** This update is driven by Meta (formerly Facebook).
> Due to recent platform policy changes, Instagram's Basic Display API is being deprecated and will no longer be available after December 4th, 2024. Meta now restricts integration to business use cases only, meaning that apps can no longer connect to personal Instagram accounts.

## Overview

Instagram has sunset its Basic Display API, which previously allowed consumer account integrations. Moving forward, **only business and creator Instagram accounts** - connected to a verified Facebook Business - can be integrated with third-party platforms like Maropost Merchandising Cloud (formerly Findify).

This documentation walks you through the updated process of connecting an Instagram account to Merchandising Cloud, reflecting Meta's enforced changes.

## Prerequisites

Before connecting your Instagram account, please ensure the following:

- Your Instagram account is a **Business **or **Creator **account (not Personal).
- It is **linked to a verified Facebook Business** and associated **Facebook Page**.
- You have **Admin rights** to both the Instagram and Facebook Business accounts.

For more on Meta's policy changes, [read the full update here](https://developers.facebook.com/blog/post/2024/09/04/update-on-instagram-basic-display-api/).

## How to Connect Your Instagram Account

Follow these steps to set up your Instagram integration within the Merchandising Cloud Dashboard:

1. Log into your **Maropost Merchandising Cloud** account.
2. From the left-hand menu, select **Content**.
3. Click the **New Integration** button.
4. In Step 1, under **Content Integration Type**, choose **Instagram**.
5. In Step 2, click **Connect Instagram Account**. You'll then be redirected to Instagram's authorization page.
6. Follow the on-screen prompts to authenticate and authorize your business or creator account.
7. Once redirected back to the Merchandising Cloud dashboard you can give your integration an internal name. You then need to click **Save **(top right corner) to confirm and finish the setup.

![15da04212e093ab071a946bfe9d659d5ff90304323ea950c9080dae3acaecfa0-meta_2.png](https://us.v-cdn.net/6038474/uploads/FPKZBJP6ZU0L/15da04212e093ab071a946bfe9d659d5ff90304323ea950c9080dae3acaecfa0-meta-2.png)

## Updating an Existing Instagram Integration

If you already have an Instagram integration connected and want to switch to a new account, you can easily do this through the Merchandising Cloud dashboard.

### Here's how:

- Each Instagram connection in your **Content **section is treated as a **separate integration**.
- If you're an **MJS client**, you simply need to update the **Autocomplete **and/or **Search Grid** settings to point to the new widget associated with your new Instagram integration.

You can find these settings here:

**Autocomplete Settings: **[**Click here**](https://dashboard.findify.io/setup/advanced/autocomplete)

**Search Grid Settings: **[**Click here**](https://dashboard.findify.io/setup/advanced/search)

If you're using **Content Tabs**, be sure to update them as well.

### Depending on your integration type:

| Integration Type: | What You Need To Do: |
| --- | --- |
| MJS | Update widget in the settings via the links above. |
| Shopify (Liquid) | Update the widget name in your Liquid template. |
| API | Contact your developer or agency to update the widget name in the code manually. |

Once you've updated the widget references, your new Instagram content will start displaying accordingly.

## Troubleshooting

If you're unable to connect or switch accounts:

- Ensure the Instagram account is **Business or Creator**, not Personal.
- Confirm the account is connected to a **verified Facebook Business and Page**.
- Make sure you have **Admin **access.
- Double-check that the correct widget is being referenced in your Autocomplete/Search settings or code