---
title: "Marketing Cloud Release Notes – 21 Aug 2020"
articleID: 1688
category: "2020 and 2019 Releases"
knowledgeBase: "MC Release Notes"
lastUpdated: 2025-08-07
---

# Marketing Cloud Release Notes – 21 Aug 2020

## Overview

In this release, we bring you some interesting enhancements that were ideated from the idea portal submissions. You will now find Brands much easier to use in email campaigns, and Brand-specific spam reporting more fitting to your marketing. The limit in the total number of segment filters, along with a visual counter, is intended to aid you in keeping your segments efficient. Also, check out what changed in calculating 'Year to Date' metrics in the Email Usage widget, which is now renamed to 'Contract Annual Usage'.

To learn more about the changes, read on!

## Enhancements

### **Clearer Brand-Specific List Selection in Campaigns**

To give you a better experience with Brands and to avoid human error as much as possible, we introduced a few changes to the Brand-specific list selection when creating an email campaign. Now, when you select a Brand, the list drop-down field shows only lists that are associated with the selected Brand. You can choose the 'Select all' option in the drop-down field to select all the lists associated with the Brand, and upon selecting the option, you will have the 'Unselect all' option available to you.

For example, consider you have a Brand called 'Brand A' and there are three lists associated with the Brand - 'List 1', 'List 2', and 'List 3'. When you choose 'Brand A' in the campaign creation flow, the list selection field will only have these three lists to choose from. You can use 'Select all' or any of these lists to send the campaign.

> Note:

- 
- 

To learn about using Brands in email campaigns, see the "Campaign Creation - Step 2" section in [Creating Email Campaigns](https://galaxy.maropost.com/kb/articles/929-creating-email-campaigns). And, to learn about managing Brands, including how to create Brands and how to assign a Brand to a contact list, see [Brand Management](https://galaxy.maropost.com/kb/articles/916-brand-management).

### **Brand-Specific Spam Reporting**

Another prominent improvement has been made to spam reporting when Brands are concerned. If a contact is in different lists associated with different Brands and complains to an email sent through a specific Brand, then the contact is added to the DNM list of that specific Brand but the status of contact in other Brand's DNM list is not impacted.

For example, consider you have a contact 'Contact X' is in two lists - 'List 1' associated with the Brand 'Brand A' and 'List2' associated with the Brand 'Brand B'. Now you send an email campaign using 'Brand A' and the contact reports the email as spam. In this case, the contact is added to the DNM list of 'Brand A' and will not receive emails sent through the Brand. However, the contact will still receive emails send through 'Brand B'.

To learn how to manage your Brand's DNM list, see the "Managing Brand Do Not Mail List" section in [Brand Management](https://galaxy.maropost.com/kb/articles/916-brand-management).

### **Filter Count in Segments**

Having too many rules/filters can slow down the performance and efficiency of your segments, which can be easily resolved by carefully designing your segments. As a way to aid you in keeping a check on your filters, we are limiting the number the filters in a segment to 100. The UI now has a Total Filter Count that shows the number of filters used in the segment.

To learn more about segments, see [Introduction to Segments](https://galaxy.maropost.com/kb/articles/920-introduction-to-segments).

![Segment_-_Filter_Count.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWbM.05T5g00000BkWbMEAV.png)

### **Email Usage Widget**

In the Email Usage widget, the calculation for annual email usage has been optimized to show the most accurate data. Now, the usage is calculated from the date your contract started to the current date, giving you exact usage that is apt for your account. The label was also changed from 'Year to date' to 'Contract Annual Usage' for better representation of the functionality.

To learn about all the Dashboard widgets, see [Dashboard Walkthrough](https://galaxy.maropost.com/kb/articles/44-dashboard-walkthrough).

![Email_Usage_Widget_RN.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWbL.05T5g00000BkWbLEAV.png)