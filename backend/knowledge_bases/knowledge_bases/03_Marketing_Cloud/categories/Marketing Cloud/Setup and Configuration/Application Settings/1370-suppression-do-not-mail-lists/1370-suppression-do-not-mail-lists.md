---
title: "Suppression (Do Not Mail) Lists"
articleID: 1370
category: "Setup and Configuration > Application Settings"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2026-01-29
---

# Suppression (Do Not Mail) Lists

**Suppression Lists** help you maintain email deliverability and comply with anti-spam regulations by blocking messages to contacts who shouldn't receive them. This safeguards your sender reputation and minimizes spam complaints, leading to improved inbox placement rates.

Effective suppression list management ensures more targeted messaging by automatically filtering out contacts who have unsubscribed or bounced, so your campaigns only reach engaged and reachable recipients for optimal performance.

A suppression list prevents any contact on it from receiving future communications from your Marketing Cloud account.

Marketing Cloud offers three types of suppression lists:

- **Do Not Mail (DNM) List** – Applies to email contacts suppressed from lists not linked to any brand.
- **Brands Do Not Mail List** – Applies to email contacts on lists associated with a specific brand.
- **SMS Do Not Mail List** – Applies to SMS contacts throughout your account.

Suppression lists are account-specific. For instance, if [**Sam.Jones@example .com**](mailto:Sam.Jones@example.com) is on the Do Not Mail list in account '123,' this won't prevent emails to that contact from account '456.'

> **Note:** **Note:** Contacts added to the Do Not Mail list will stop receiving all email communications (standard campaigns, A/B tests, workflow campaigns, and test sends) directed to non-branded lists. To resume sending to these contacts, you must remove them from the DNM list.

The Do Not Mail List and Brands Do Not Mail List operate independently. The Brands Do Not Mail List suppresses only brand-specific lists. Therefore, if a contact is on Brand A's DNM List, they can still receive emails sent to Brand B lists and non-branded lists.

The Do Not Mail list only blocks emails to non-branded lists. Contacts on this DNM list will still receive emails sent to any branded list.

<details>
<summary>How does a contact get added to the "Do Not Mail" list?</summary>

A contact gets added to the DNM list automatically if:

- The contact gets hard-bounced.
- The contact clicks the "[**Report Spam**](https://galaxy.maropost.com/s/article/Preference-Management-Report-Spam)" link in the footer of an email.
- The contact clicks "**Never mail me again**" on the "[**Edit Profile**](https://galaxy.maropost.com/s/article/Preference-Management-Edit-Profile)" page accessed from the footer.

You can also add contacts manually to the Do Not Mail list by importing a CSV file into a "**Suppressed-type**" list or by adding the contacts individually to the list.

</details>

## Managing Suppression Lists

You can view and manage your account's suppression lists from the Manage Global Suppression Lists page.

1. Click your username in the top-right corner of your account and select **Settings** from the dropdown.
  ![brand7.png](https://us.v-cdn.net/6038474/uploads/8WOKJ0CATGGA/brand7.png)
2. On the Settings page, navigate to the **Contacts** section and choose **Global Suppression Lists**.
  ![brand8.png](https://us.v-cdn.net/6038474/uploads/674EZD5O0VEF/brand8.png)
3. The Manage Global Suppression Lists page displays the total contact count for each suppression list and provides options to import, export, and perform encrypted export (in MD5 hash format).
  ![brand11.png](https://us.v-cdn.net/6038474/uploads/SMY44JWVWWIJ/brand11.png)
4. Likewise, you can access the [**Brands DNM List**](https://galaxy.maropost.com/kb/articles/916-brand-management#managing-brand-do-not-mail-list) page and the [**Do Not SMS List**](https://galaxy.maropost.com/kb/articles/1000-sms-contact-lists#managing-sms-do-not-mail-list) page in the same way, where you'll have the ability to view, add, edit, and delete contacts as needed.
  ![brand12.png](https://us.v-cdn.net/6038474/uploads/I1X1E1QPFUYS/brand12.png)