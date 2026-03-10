---
title: "Contact Tags"
articleID: 917
category: "Contact Management > Contact Tags"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Contact Tags

You can use contact tags to create flexible audience segments based on behavioral patterns, preferences, or custom business criteria that go beyond basic demographic data. This enables more relevant messaging by allowing you to target specific groups based on actions, interests, or lifecycle stages, which typically leads to better engagement rates and campaign performance.

Contact tags also streamline your workflow by automatically triggering journeys and actions when contacts meet specific criteria, helping you deliver timely, personalized communications that enhance subscriber interaction.

The **contact tags** can be used to classify contacts based on your requirements. You can create as many tags as you need, and a single contact can be assigned multiple tags.

### In this Article

- Usage Scenario
- Managing Contact Tags
- Creating a Contact Tag
- Importing Contact Tags
- Assigning a Contact Tag

### Usage Scenario

The following are a couple of popular use cases of how the contact tags can be leveraged when used with other features:

- One of the popular use cases of contact tags is creating segments using the **Tags** condition. The Tags condition in the segment fetches contacts that have been assigned specific contact tags within a specified date range.

![Segment_-_Tag.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEH.05T5g00000BkXEHEA3.png)

- Another use case of contact tags is using tag event triggers and change tag actions available in automation. There is a 'Tag Event' trigger in the workflow. If we create a workflow based on the 'Tag Event' trigger, it will trigger the workflow as soon as a new contact gets added to the tag or if a contact is removed from the tag. The 'Change Tag' element under 'Actions' will change the tags of the contacts involved in the workflow.

### Managing Contact Tags

You can manage your contact tags on the Contact Tags index page. On this page, you can create a new tag, import contact tags, view the contacts in the tags, and delete the tags.

To access the Contact Tags index page, in the **Navigation**, go to **Audience**, and then select **Contact Tags**.

![Contact_Tags_Index_Page.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEI.05T5g00000BkXEIEA3.png)
Click the tag name to see its details and the journeys in which the tag is used.

![Contact_Tags_-_Journeys.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEJ.05T5g00000BkXEJEA3.png)

### Creating a Contact Tag

A new contact tag can be easily created by providing a name for the new tag. On the Contact Tags index page, click **New Tag**. Then, on the New Tag dialog box, enter a name for the tag and click **Save**. Your contact is created and is visible on the Contact Tags index page.

![New_Tag.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEK.05T5g00000BkXEKEA3.png)

### Importing Contact Tags

Perform the following steps to import the contact tags:

1. On the Contact Tags index page, click **Import Tags**.
2. 
  In the Import Contact Tags dialog box, choose the file containing the contact tags.
**Note**: The supported file formats are .csv and .zip.

  ![Import_Tags.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEL.05T5g00000BkXELEA3.png)
3. Optionally, select the checkbox '**Do Not Trigger Journey Campaigns**'. This feature applies only to contact tags that are defined in the 'Tag Event' trigger of a journey. If selected, then the contacts that are tagged will not enter the journeys triggered by Tag Events. If left deselected, then the contacts will enter the journeys as normal.
4. Finally, click **Import**.

The contacts will be added to the respective tags once the import is complete.

**Note**:

- While importing the .csv file, each contact should have an email, add_tags, or remove_tags field. Both the add_tags and remove_tags columns should contain comma-separated tag names. The difference between add_tags and remove_tags is that add_tags will add the contact to the tag, and remove_tags will simply remove it.
- Make sure the tag name you created in Maropost is the same as the tag value in the .csv file, or the contacts will not be imported.

### Assigning a Contact Tag

You can assign multiple contact tags to a contact. The contact tags can be assigned during contact creation or later on by editing the contact details.

You can assign tags to a contact when creating or importing contacts into a list.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AddContactTagsNewContact.05T5g00000pAEFiEAO.png)
You can also edit a contact to assign the contact tags or remove the tag assignment.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AddContactTagsContactOverview.05T5g00000pAEHeEAO.png)

## Related Articles

**Contact Management:**

- [Acquisition Overview](https://galaxy.maropost.com/kb/articles/1211-acquisition-overview) - Capture and organize new contacts
- [7 Best Practices For Making The Most Of An Email Unsubscribe](https://galaxy.maropost.com/kb/articles/1720-7-best-practices-for-making-the-most-of-an-email-unsubscribe) - Optimize contact retention strategies
- [Application Settings Overview](https://galaxy.maropost.com/kb/articles/991-application-settings-overview) - Configure contact management preferences

**Campaign Targeting:**

- [Campaign Tags](https://galaxy.maropost.com/kb/articles/926-campaign-tags) - Organize campaigns using tags
- [8 Lessons Of Email Marketing You Can Learn From Can](https://galaxy.maropost.com/kb/articles/1721-8-lessons-of-email-marketing-you-can-learn-from-can) - Advanced targeting strategies