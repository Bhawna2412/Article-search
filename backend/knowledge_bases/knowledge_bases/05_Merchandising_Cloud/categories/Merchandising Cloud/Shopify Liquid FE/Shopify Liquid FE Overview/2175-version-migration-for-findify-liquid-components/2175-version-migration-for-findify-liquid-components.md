---
title: "Version Migration for Findify Liquid Components"
articleID: 2175
category: "Shopify Liquid FE > Shopify Liquid FE Overview"
knowledgeBase: "Merchandising Cloud"
---

# Version Migration for Findify Liquid Components

You can upgrade your Shopify theme to the latest version of Merchandising Cloud Liquid components while preserving your customizations through a systematic migration process. 

This upgrade approach helps ensure you benefit from new features, performance improvements, and bug fixes without losing the unique modifications you've made to match your brand.

Following a structured migration workflow with proper version control and testing helps minimize risk when updating your Merchandising Cloud implementation. By backing up your current theme, carefully reviewing changes, and testing before publishing, you can confidently upgrade to access improved functionality while maintaining the custom look and feel you've developed for your store.

This guide outlines the steps to upgrade your Shopify theme to the latest version of Findify Liquid components while retaining your customizations.

## 1. Prepare Your Environment

To ensure a smooth migration:

- 
- 

## 2. Back Up Your Current Theme

Before migrating, back up your existing theme to safeguard your customizations:

1. 
2. 
3. Confirm the backup in the Source Control sidebar of Visual Studio Code. The only untracked file should be `config.yml`.
  ![07ab82832b8e5fcee2c3dbb770dcd059336ed60697b1acbf0668ac4fbcfa3922-Untitled_20.png](https://us.v-cdn.net/6038474/uploads/S4PLZSVWCAAP/07ab82832b8e5fcee2c3dbb770dcd059336ed60697b1acbf0668ac4fbcfa3922-untitled-20.png)

## 3. Download the Latest Findify Components

Findify versions follow the format `YYYY-MM.RR`:

- 
- 
- 

1. 
2. 
3. 

## 4. Update Your Theme

Integrate the updated Findify components into your Shopify theme while retaining customizations:

1. 
2. **Pro Tip:** Overwrite existing files only if you haven't customized them.  - 
  - 
  - **Snippets**
    ![be4fe9542b10eb8afcccb834f43f6213acfcc697c029af2b7197cd6d0f0c0904-Untitled_21.png](https://us.v-cdn.net/6038474/uploads/L1FCHYWXE1EG/be4fe9542b10eb8afcccb834f43f6213acfcc697c029af2b7197cd6d0f0c0904-untitled-21.png)

## 5. Review and Merge Changes

1. Open the Source Control sidebar in Visual Studio Code.
  ![29696469351ef4aa9ab15630fe47d253a3bf175aa5ef65babb7059d508295499-Untitled_22.png](https://us.v-cdn.net/6038474/uploads/MAEA52BAUGWC/29696469351ef4aa9ab15630fe47d253a3bf175aa5ef65babb7059d508295499-untitled-22.png)
2. 
  Compare the newly added files against your current theme to identify changes:
  - 
  - 

## 6. Test the Integration

Before publishing the updated theme:

- 
- 

## 7. Publish and Push Changes

Once satisfied with the updates:

1. 
2. 

By following this migration guide, you can safely upgrade to the latest Findify Liquid components while maintaining your store’s unique look and feel. If you encounter issues, refer to the release notes or contact [YourFriends@Findify .io](mailto:YourFriends@Findify.io) for assistance.