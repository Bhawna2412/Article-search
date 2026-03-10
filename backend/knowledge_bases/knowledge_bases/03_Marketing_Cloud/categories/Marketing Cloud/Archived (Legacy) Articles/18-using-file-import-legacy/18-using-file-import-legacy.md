---
title: "Using File Import (Legacy)"
articleID: 18
category: "Archived (Legacy) Articles"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Using File Import (Legacy)

File import functionality enables you to efficiently upload contact lists directly from CSV files while maintaining data accuracy through automated field mapping and validation processes. This contact management feature significantly improves operational efficiency by allowing bulk contact uploads with flexible formatting options, ensuring your contact database remains current while preserving data integrity.

You can leverage file import to streamlines your workflow when adding contacts from external sources or CRM systems, reducing manual data entry while ensuring proper contact segmentation and field mapping.

The CSV file must be formatted as per the following guidelines:

- There must be no spaces in the Header Column Names and always remove leading and trailing spaces.
- Follow UTF-8 encoding (note that we do not support UTF-8 BOM).
- The date format must be: in dd-mm-yyyy.
- The boolean type fields must use 0 and 1 to indicate false and true.

Additionally, when importing a CSV file, ensure you map the custom fields appropriately on the mapping step. For a brief context into all file import options and links to specific detailed instructions, see [**Importing Email Contact Lists**](https://galaxy.maropost.com/s/article/Importing-Email-Contact-Lists).

### Importing Contacts Using File Import

Perform the following steps to use file import to import contacts into a list:

1. In the **Navigation **panel, go to **Audience**, and select **Email Contact Lists**.
  ![import0.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000F6QXmMAN.jpg)
2. On the Contact Lists index page, find the contact list into which you want to import your contacts. From the Actions drop-down list, select **Import List**.
  ![import1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000F6QdVMAV.jpg)
3. In the Import List dialog box, retain **File Import** as the import method. Then, upload the file with the contact list. Also, select the field delimiter that is used in the file. Click **Continue** to proceed ahead.
  ![import5.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000F6QrcMAF.jpg)

> **Note:** In your file, email is the only mandatory field for importing contacts.

4. On the **File Import** page, the uploaded file name, delimiter, and the number of rows/columns are automatically filled by the system. Next, select the following checkboxes, as applicable:  - **Import New Contacts: **This option imports new contacts only.
  - **Update Existing Contacts: **This option allows you to update the existing contacts in a list.
  - **Do not trigger workflow campaigns: **This option prevents any workflow from triggering the contacts involved in this list.

> **Note:** The journey campaign checkbox option is only available in workflows that use the "New Subscription" trigger widget and have this list chosen. If the checkbox is left selected, the contacts from the data file will not be entered in any of the workflows.

  ![import6.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000F6R6MMAV.jpg)
5. On the contact mapping page, select the fields from which your file is to be matched with your previously created fields on the Maropost application. Optionally, if you have designated a custom field to be the **unique identifier** of your contact records, then select the name of the field in your import file that contains the member IDs, subscriber IDs, or any other type of profile IDs that your internal system is using to uniquely identify each contact record. 
 Once everything is mapped correctly, click **Save**. You can track the progress of the import in the Notification panel.
  ![import7.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000F6SABMA3.jpg)

> **Note:** By default, the contact’s email address is used to determine whether a new contact record is created or an existing one is updated. However, if you’ve included the field containing your unique identifier in the file mapping, then that unique identifier field (for example, the member ID) is used to determine whether a contact record exists or not.

## Related Articles

**Contact Management:**

- [Creating a Contact List](https://galaxy.maropost.com/kb/articles/4-creating-a-contact-list-new) - Build targeted audience segments
- [Email Contact Lists Overview](https://galaxy.maropost.com/kb/articles/13-email-contact-lists-overview-legacy) - Understand contact management fundamentals

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Use contact lists in campaign creation
- [Campaign Tags](https://galaxy.maropost.com/kb/articles/926-campaign-tags) - Organize campaigns by contact segments

**Analytics & Reporting:**

- [A/B Campaign Reports](https://galaxy.maropost.com/kb/articles/632-ab-campaign-reports) - Track contact engagement across campaigns