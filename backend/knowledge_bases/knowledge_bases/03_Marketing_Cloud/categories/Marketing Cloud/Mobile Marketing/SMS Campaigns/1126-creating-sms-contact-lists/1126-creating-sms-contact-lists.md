---
title: "Creating SMS Contact Lists"
articleID: 1126
category: "Mobile Marketing > SMS Campaigns"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Creating SMS Contact Lists

You can create SMS contact lists to reach customers through mobile messaging campaigns, which typically achieve higher open rates and faster response times compared to email. SMS messages are typically opened within minutes, making them ideal for time-sensitive communications, urgent notifications, and immediate customer engagement initiatives.

Properly managed SMS contact lists enable more targeted mobile marketing while ensuring compliance with mobile messaging regulations and maintaining subscriber preferences for optimal campaign performance.

In this article, you'll find information on creating a new SMS contact list and the methods for adding contacts to the list.

To learn about other aspects of managing SMS contact lists, see [**SMS Contact Lists**](https://galaxy.maropost.com/s/article/SMS-Contact-Lists).

## Create a new SMS Contact List

You can create a new list to store your SMS contacts using the following steps:

1. On the **SMS Contact Lists** index page, click the **New List** button.
2. 
  In the **New List **dialog box, enter a name for the list.

  ![New_List.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWwK.05T5g00000BkWwKEAV.png)
3. Click **Save**.

Once you create an SMS contact list, it is available on the index page where you can perform various actions, including adding contacts to the list.

## Adding Contacts to an SMS Contact List

You can add contacts to an SMS contact list either by manually adding each contact or by importing contacts into the list.

### Adding Contacts Manually

The following are the steps to add a new contact to an SMS contact list:

1. On the **SMS Contact Lists** index page, find the list to which you want to add contacts. Then, from the **Actions** drop-down menu, select **View Contacts**.
2. 
  On the [SMS Contacts] page, click **New Contact**.

  ![SMS_List_Contacts.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWwL.05T5g00000BkWwLEAV.png)
3. In the **New SMS Contact** dialog box, add the contact information.

![New_SMS_Contact.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWwI.05T5g00000BkWwIEAV.png)
Select from or enter a value for the following fields:

- **Phone Number**: Enter the contact's phone number.
- **Status**: Select the contact's status in the list as Subscribed or Unsubscribed.
- **Link this contact with your account's Unique Identifier**: Turn the toggle on if you want to link the contact with the [**Unique Identifier**](https://galaxy.maropost.com/kb/articles/25-custom-unique-identifier-custom-uid?utm_source=community-search&utm_medium=organic-search&utm_term=custom) defined for your account.

4. Click **Save**.

## Adding Contacts Through Import

You can import contacts into your SMS list by uploading the contacts from both the desktop and the opt-in forms. There are two import options available:

- Manual Import
- Automatic Import

### **Manual Import**

To import contacts manually, perform the following steps:

1. On the SMS Contact Lists index page, find the list into which you want to import the contacts. Then, from the Actions drop-down menu, select Import SMS List.
2. 
  On the Import Contacts dialog box, click the Select a File button, select the file from your desktop, and then click **Next**.**Note**: You can import a file of CSV or TXT format. To see a sample of what formatting is required for CSV, download a sample file by clicking Example.

  ![Import_SMS_Contacts.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWwJ.05T5g00000BkWwJEAV.png)
3. Map the column from your file to the Phone Number field.

Optional Mappings: You can also map a column in your file to the Subscribed field and the UID field. To map a subscription status, the proper values for this field are either 'S' for 'Subscribed' or 'U' for 'Unsubscribed.'
4. Select the options to Import New Contacts and/or to Update Existing Contacts.
5. Click Import.

When the import is finished, you'll receive an alert in the Notifications panel.

### **Automatic Import**

SMS contact information can be automatically added from the same opt-in forms that users fill in for email, using the SMS API.

## Related Articles

**SMS & Multi-Channel:**

- [Bulk Messaging Examples](https://galaxy.maropost.com/kb/articles/814-bulk-messaging-examples) - Learn SMS campaign best practices
- [Bulk Messaging Personalised Email Headers](https://galaxy.maropost.com/kb/articles/815-bulk-messaging-personalised-email-headers) - Personalize multi-channel messaging

**Contact Management:**

- [Creating a Contact List](https://galaxy.maropost.com/kb/articles/4-creating-a-contact-list-new) - Build targeted lists for SMS campaigns
- [Email Contact Lists Overview](https://galaxy.maropost.com/kb/articles/13-email-contact-lists-overview-legacy) - Understand contact management across channels

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Coordinate email and SMS campaigns