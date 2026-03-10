---
title: "Using FTP Import (Legacy)"
articleID: 17
category: "Archived (Legacy) Articles"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2026-01-28
---

# Using FTP Import (Legacy)

FTP import functionality enables you to efficiently transfer large contact databases into Marketing Cloud while maintaining data accuracy through automated field mapping and validation processes. This bulk import method significantly improves operational efficiency for organizations managing substantial contact lists, providing secure file transfer capabilities that can handle thousands of contacts while preserving data integrity and compliance requirements.

You can leverage FTP import to streamlines your workflow when migrating from other email platforms or when regularly synchronizing contact data from external systems, reducing manual effort while ensuring accurate data transfer.

For a brief context into all file import options and links to specific detailed instructions, see [**Importing Email Contact Lists**](https://galaxy.maropost.com/s/article/Importing-Email-Contact-Lists).

### Before Using FTP Import

To use the FTP import feature, you must set up the SFTP access for your FTP client. See [**SFTP Access**](https://galaxy.maropost.com/s/article/SFTP-Access) for more details.

### Importing Contacts Using FTP Import

Perform the following steps to use file import to import contacts into a list:

1. In the **Navigation** panel, go to **Audience**, and select **Email Contact Lists**.
  ![import0.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000F6UP3MAN.jpg)
2. On the Contact Lists index page, find the contact list into which you want to import your contacts. From the Actions drop-down list, select **Import List**.
  ![import1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000F6UQVMA3.jpg)
3. In the Import List dialog box, select **FTP Import** as the import method. Then, click **Continue**.
  ![Import_-_FTP.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000F6U5PMAV.jpg)
4. On the **FTP Import** page, select the name of the file that you've uploaded to the FTP folder. Also, select the field delimiter that is used in the file. Next, select the following checkboxes, as applicable:  - **Import new contacts:** This option imports new contacts. The checkbox is selected by default.
  - **Update existing contacts:** This option updates the existing contacts. The checkbox is selected by default.
  - **Do not trigger journey campaigns:** This option prevents the triggering of workflow campaigns. The checkbox is selected by default.

> **Note:** The journey campaign checkbox option is only available in workflows that use the "New Subscription" trigger widget and have this list chosen. If the checkbox is left selected, the contacts from the data file will not be entered in any of the workflows.

  ![List_FTP_Import.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000F6UmCMAV.jpg)
5. In the Mappings section, map the fields in the import file to the standard, custom, and subscribed fields in your contact list. Click **Save** to initiate the import. You can track the progress of the import in the Notification panel.
  ![import10.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000F6UseMAF.jpg)

> **Note:** The notification also contains information on the total records imported, total contact records subscribed to the list, total contact records unsubscribed from the list, total number of bad email addresses, and total duplicated email addresses.A "bad email address" is any address that fails the basic syntax validation for an email address or one whose domain is that of a known spammer. You can download the file of the bad email addresses, which includes the email addresses and why they were flagged as "bad".

> **Note:** Files stored in your folder on the Maropost FTP server are retained for a period of 395 days.  Files older than this cutoff are permanently purged by a daily housekeeping task.

## Related Articles

**Contact Management:**

- [Creating a Contact List](https://galaxy.maropost.com/kb/articles/4-creating-a-contact-list-new) - Build targeted audience segments
- [Email Contact Lists Overview](https://galaxy.maropost.com/kb/articles/13-email-contact-lists-overview-legacy) - Understand contact management fundamentals

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Use contact lists in campaign creation
- [Campaign Tags](https://galaxy.maropost.com/kb/articles/926-campaign-tags) - Organize campaigns by contact segments

**Analytics & Reporting:**

- [A/B Campaign Reports](https://galaxy.maropost.com/kb/articles/632-ab-campaign-reports) - Track contact engagement across campaigns