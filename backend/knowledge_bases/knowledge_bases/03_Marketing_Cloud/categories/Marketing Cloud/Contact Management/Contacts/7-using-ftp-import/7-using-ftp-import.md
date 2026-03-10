---
title: "Using FTP Import"
articleID: 7
category: "Contact Management > Contacts"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-03
---

# Using FTP Import

The **FTP Import** feature enables you to utilize our FTP servers to import data files that are too large to be uploaded. The File Import feature doesn’t allow importing data files with sizes larger than 128 MB. In such cases, an FTP upload can be used to overcome this limitation.

> **Important:** **Things to Consider:** To use the FTP import feature, you must set up the SFTP access for your FTP client. See [**SFTP Access**](https://galaxy.maropost.com/s/article/SFTP-Access) for more details.

## Importing Contacts Using FTP Import

Perform the following steps to import contacts into a list via the **FTP Import** method:

1. To access the import feature, go to [**Contacts**](https://galaxy.maropost.com/s/article/Creating-and-Managing-Contacts-New) from the **Navigation** panel. You can also access the import feature by visiting the [**Contact Lists**](https://galaxy.maropost.com/s/article/Contact-Lists-Overview-New) section under the **Audience** menu.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Y55wGMAR.jpg)
2. From the contacts index page, click on the **Import** tab to begin importing contacts to your account. You can also initiate the import process from the **Contact Lists** by first clicking on the **Actions** drop-down menu next to the list name and choosing **Import Contacts**.
  ![uid100.png](https://us.v-cdn.net/6038474/uploads/T7O4L2C5GBFA/uid100.png)
3. In the Import List dialog box, choose “**FTP Import**” as the import method. Then, upload the file, either in .txt or .csv format, which will be transmitted over the FTP network. Also, select the field delimiter that is used in the file. Click **Continue** to proceed ahead.
  ![uid27.png](https://us.v-cdn.net/6038474/uploads/DQVJO5MEG2AE/uid27.png)
4. However, please note that when importing contacts from the **Contacts** menu, the **Import List** dialog box will display an additional **List** field. Here, you must select the list into which the contact should be imported.
  ![uid128.png](https://us.v-cdn.net/6038474/uploads/092APFZYHTOY/uid128.png)
5. On the **FTP Import** page, the system automatically fills in the uploaded file name, delimiter, and the number of rows/columns. Next, proceed to select the following checkboxes as applicable:

***Import New Contacts: ****This option imports new contacts only.

****Trigger Journey Campaigns:**** This option triggers a new journey while onboarding new subscribers via a product purchase, surveys, newsletters, feedback forms, etc.

****Update Existing Contacts:**** This option updates information on existing contacts in a list.*
  ![uid28.png](https://us.v-cdn.net/6038474/uploads/DDL7AC9V08RA/uid28.png)
6. In the Mapping section, select the default fields of the imported file you wish to match with the fields currently registered in Marketing Cloud. The standard default fields include name, email, phone number, subscription status, contact tags, etc.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Y55zUMAR.jpg)
7. If you are importing contacts directly from the **Contacts** menu, you can change the list by selecting a new one from the drop-down list. However, if you are importing a new batch of contacts from the **Contact List** section, the **List Subscription** field will be grayed out.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Y55zoMAB.jpg)
8. Optionally, if you have designated a custom field for your contact records, then select the field’s name in your import file containing the member IDs, subscriber IDs, or any other type of profile IDs your internal system is using to uniquely identify each contact record. Once you have properly configured the basic details, contact fields, mappings, list subscription, and custom fields sections, click on **Save**.
  ![uid25.png](https://us.v-cdn.net/6038474/uploads/6GYKTUAT24JX/uid25.png)
9. You can track the progress of the import by clicking on the notification icon. To view and download past imports, click on the **See All** tab under the notifications slider, which redirects you to the notifications page.
  ![uid26.png](https://us.v-cdn.net/6038474/uploads/OZOLXBVYF0DS/uid26.png)

> **Note:** **Note:** The notification also contains information on the total records imported, total contact records subscribed to the list, total contact records unsubscribed from the list, total number of bad email addresses, and total duplicated email addresses.
> 
> A "**bad email address**" is any address that fails the basic syntax validation for an email address or one whose domain is that of a known spammer. You can download the file of the bad email addresses, which includes the email addresses and why they were flagged as "bad."

<details>
<summary>What kind of housekeeping tasks does Marketing Cloud perform?</summary>

Files stored in your folder on the Maropost FTP server are retained for a period of **395 days**.  Files older than this cutoff are permanently purged by a daily housekeeping task.

</details>