---
title: "Secure Lists"
articleID: 912
category: "Contact Management > Secure Lists"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-19
---

# Secure Lists

Secure Lists help maintain subscriber trust and email deliverability by ensuring unsubscribed contacts don't receive emails across multiple marketing platforms or partners. This centralized suppression approach helps protect your sender reputation while enabling compliance with email marketing regulations, particularly important when working with affiliates or third-party agencies who send on your brand's behalf.

Using encrypted suppression lists enables you to honor opt-out requests consistently across all email channels while maintaining contact privacy, which helps reduce spam complaints and supports better long-term deliverability performance.

A **Secure List** is essentially an encrypted "Do Not Mail" list used for email suppression.

It is very common for some brand marketers to utilize more than one email platform for their email campaigns. This practice is especially true when they partner with affiliates who send emails to the same shared contact lists but on separate platforms.

It is important to ensure that a contact who opts out of the email program no longer receives emails, regardless of who is sending the emails on behalf of that brand. Third parties, such as UnsubCentral, act as a centralized collecting point for email opt-outs.  They share the opt-out lists with all the marketing agencies sending emails on behalf of that brand. The email addresses themselves are encrypted (typically as an MD5 hash) to maintain privacy.

## **How does it work?**

If a campaign includes a reference to a secure list, then Maropost for Marketing creates an MD5 hash of every email address in the campaign's targeted audience. Next, it removes any contact from the targeted audience whose email hash is contained within the specified secure suppression list.

## Managing Secure Lists

You can create and manage these lists on the secure lists index page. In Navigation, go to **Audience**, and select **Secure Lists**.

![Secure_Lists_Index_Page.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX8y.05T5g00000BkX8yEAF.png)

## Creating a Secure List

1. In Navigation, go to **Audience**, and then select **Secure Lists**.
2. On the secure lists index page, click **New Secure List**.
3. Enter a name for the secure list.
  ![New_Secure_List.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX8z.05T5g00000BkX8zEAF.png)
4. Click **Save**.

## Importing Contacts into a Secure List

After a secure list is created, you can import contacts into the secure list as you do for your regular lists. To find information about importing contacts into regular lists, see [**Importing Contact Lists**](https://galaxy.maropost.com/kb/articles/8-creating-and-managing-contacts-new#creating-contacts-through-import).

On the secure lists index page, find the list into which you want to import contacts. Then, from the Actions drop-down menu, select Import Select List. The **Import Secure Emails** dialog box opens, where you can select the import method (file import or FTP import), choose the file from which to import contacts, and select other related options. The most important aspect is to select the column name or column number in which your MD5-hashed contact details are stored.

![Import_Secure_List.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX90.05T5g00000BkX90EAF.png)