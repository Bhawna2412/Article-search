---
title: "Relational Tables Access"
articleID: 1433
category: "Setup and Configuration > Application Settings"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-07
---

# Relational Tables Access

You can configure external MySQL client access to work with your Marketing Cloud's relational tables for advanced contact data management. This enables more relevant messaging through sophisticated data operations and helps organize complex audience information while maintaining full control over your subscriber data architecture.

When properly configured, this setup streamlines your workflow for large-scale data operations while ensuring you understand the important limitations that affect segmentation capabilities and automated journey triggers within your marketing campaigns.

You can use a MySQL client for creating and managing Maropost’s relational tables. To use a MySQL client for accessing Maropost’s relational tables, you are required to do a quick initial setup.

The details required for the setup can be found on the Relational Tables page on the Settings page.

To learn about relational tables, see [**Introduction to Relational Tables**](https://galaxy.maropost.com/s/article/Introduction-to-Relational-Tables) and [**Creating Relational Tables**](https://galaxy.maropost.com/s/article/Creating-Relational-Tables).

## Setting Up Relational Table Access

Follow the steps to set up relational table access:

1. Click your user name in the top-right corner of the application, and then from the drop-down menu, select **Settings**.

2. On the Settings page, in the Connections section, click **Relational Tables**.

3. On the Relational Tables page, you can find the details needed to set up the access.

![Relational_Tables_-_Settings.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWsp.05T5g00000BkWspEAF.png)

## Restrictions When Using a MySQL Client

Remember the following restrictions when using a MySQL client:

- 
  The relational tables using MySQL Client are not visible within the application. Therefore, you must create the tables and their relational links in the application if you intend to use the tables for segmentation or personalization.
- When you add, update, or delete data in the relational tables using MySQL Client, the 'Table Field Updated' Journey trigger doesn't detect this event. Therefore, if you intend to use this trigger on a specific table, then you must use the application interface to add, update, and delete the data in that table.

## Related Articles

**Contact Management:**

- [7 Best Practices For Making The Most Of An Email Unsubscribe](https://galaxy.maropost.com/kb/articles/1720-7-best-practices-for-making-the-most-of-an-email-unsubscribe) - Optimize unsubscribe processes for better contact data management
- [Acquisition Overview](https://galaxy.maropost.com/kb/articles/1211-acquisition-overview) - Build and grow your contact database effectively
- [Application Settings Overview](https://galaxy.maropost.com/kb/articles/991-application-settings-overview) - Configure your Marketing Cloud settings for data management
- [Archive Management](https://galaxy.maropost.com/kb/articles/644-archive-management) - Manage archived contact data and maintain database cleanliness