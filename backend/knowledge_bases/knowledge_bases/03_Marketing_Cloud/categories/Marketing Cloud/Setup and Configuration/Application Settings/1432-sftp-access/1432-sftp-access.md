---
title: "SFTP Access"
articleID: 1432
category: "Setup and Configuration > Application Settings"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-07
---

# SFTP Access

You can streamline large-scale contact imports and improve operational efficiency by setting up secure SFTP access for automated file transfers. This automates routine data import tasks while maintaining security standards through encrypted file transfers, reducing manual effort when managing large contact databases. When properly configured, SFTP access enables reliable, scheduled imports that help you maintain up-to-date subscriber lists without manual intervention.

SFTP access is particularly valuable for businesses that need to import large contact lists regularly, as it provides a secure, automated alternative to manual file uploads while ensuring data integrity throughout the transfer process.

Maropost enforces **Secure File Transfer Protocol** (**SFTP**) for FTP imports. Therefore, you must set up the SFTP access for your FTP client in order to use our FTP servers for file imports.

> **Note:** **Tip:** Use the FTP import option when you have to import a large number of contacts. To learn more, see [**Using FTP Import**](https://galaxy.maropost.com/kb/articles/7-using-ftp-import-new?utm_source=community-search&utm_medium=organic-search&utm_term=Using+FTP+Import).

## Setting Up SFTP Access

Follow the steps to set up the SFTP access:

1. Click your user name in the top-right corner of the application, and from the drop-down menu, select Settings.

2. On the **Settings** page, in the Connections section, click SFTP Access.

3. On the **SFTP Access** page, you can find the details needed to set up the access.

![SFTP_Access.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWwY.05T5g00000BkWwYEAV.png)
4. Enter the login credentials in any FTP client that you chose to use.

Once you’ve logged in, you’ll notice that your default root FTP folder is "Uploads." From this root folder, you can create any sub-folders and place your data files there.

> **Do remember:**
> Marketing Cloud supports any text file with a .csv or .txt file extension.
> Your file can use either a comma, tab, colon, or semicolon as the field delimiter.
> The first row of the file must be the header row.

## Related Articles

**Integrations & APIs:**

- [Integrations Overview](https://galaxy.maropost.com/kb/articles/32-integrations-overview) - Understand available integration options
- [Using Maropost Identity App](https://galaxy.maropost.com/kb/articles/38-using-maropost-identity-app) - Set up identity management integration

**Contact Management:**

- [Creating a Contact List](https://galaxy.maropost.com/kb/articles/4-creating-a-contact-list-new) - Import contacts via API integrations
- [Email Contact Lists Overview](https://galaxy.maropost.com/kb/articles/13-email-contact-lists-overview-legacy) - Manage contacts through integrations

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Trigger campaigns via API