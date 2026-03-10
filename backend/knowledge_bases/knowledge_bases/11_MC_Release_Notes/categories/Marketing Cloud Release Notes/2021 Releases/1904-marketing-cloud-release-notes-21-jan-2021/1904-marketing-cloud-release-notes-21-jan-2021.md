---
title: "Marketing Cloud Release Notes – 21 Jan 2021"
articleID: 1904
category: "2021 Releases"
knowledgeBase: "MC Release Notes"
lastUpdated: 2025-07-10
---

# Marketing Cloud Release Notes – 21 Jan 2021

## **Overview**

In this release, we rolled out some of the significant changes we have been working on! The Drag-and-Drop content editors were consolidated in order to retain the best solution for you; don't worry, you can still edit the content created in other versions of Drag-and-Drop editors. The API for querying campaign details will now also fetch the split campaigns of an A/B campaign.

Minor UI changes were made to ensure streamlined navigation between Acquisition Builder and Form, managing the Ad Leads, and managing the Transactional Campaigns.

To learn more about these changes, read on!

## **Enhancements**

### **Consolidated the Drag-and-Drop Content Editors**

From this release onwards, you'll have only one drag-and-drop content editor, instead of three variations of it, to create new content. The Drag-and-Drop Editor (Beta) is renamed to Drag-and-Drop Editor and will be the one available for new content creation.

The other two drag-and-drop content editors, that are Drag-and-Drop (legacy) and old Drag-and-Drop editors, are only available for editing the content created using these editors.

To learn about the Drag-and-Drop content editor, see [Drag and Drop Content Editor](https://galaxy.maropost.com/s/article/Drag-and-Drop-Content-Editor).

![New_Content](https://us.v-cdn.net/6038474/uploads/attachments/migrated/NewContent.0685g000006w7wAAAQ.png)

### **Added Option to Query the Split Campaigns of an A/B Campaign**

You can now also retrieve the split campaigns of an A/B campaign using the existing GET method of campaigns - campaign_list API. Using the newly added **include_ab_child** value, you can specify whether you want to get the split campaign details.

The following example of the API call has the include_ab_child value set to YES and returns the campaign details along with the details of split campaigns:

*GET https://app-uat-web.maropost.com/v2/40000/campaigns(.:format)?name=abc&include_ab_child=yes&page=2&per_page=20*

### **Streamlined Flow Between Acquisition Builder and Forms**

To ensure easy navigation between the Acquisition form and the builder, we added a button within the form for you to go to the builder.

When you click the 'Save & Open Acquisition Builder' button, any changes to your form are saved, and then the Acquisition Builder dialog box opens, where you can create a new builder or select an existing one.

To learn about Acquisition Builders, start with the [Introduction to Acquisition Builder](https://galaxy.maropost.com/s/article/Introduction-to-Acquisition-Builder).

![Acquisition_Form](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AcquisitionForm.0685g000006w7wKAAQ.png)

### **Refreshed Ad Leads Index Page**

As part of our user experience transformation initiative, the Ad Leads index page has been updated. While there are no changes to the existing functionalities, the user interface and feature accessibility have been improved to give you the best experience with the Ad Leads feature.

To learn about the Ad Leads feature, see [Facebook Lead Ad Integration](https://galaxy.maropost.com/s/article/Facebook-Lead-Ad-Integration) and [Twitter Lead Card Integration](https://galaxy.maropost.com/s/article/Twitter-Lead-Card-Integration).

![Lead_Ads](https://us.v-cdn.net/6038474/uploads/attachments/migrated/LeadAds.0685g000006w7xrAAA.png)

### **Refreshed Transactional Campaigns Index Page**

The index page of Transactional Campaigns was also upgraded to the newer standards without changing any of the functionalities.

![Transactional_Campaigns](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TransactionalCampaigns.0685g000006w7yLAAQ.png)