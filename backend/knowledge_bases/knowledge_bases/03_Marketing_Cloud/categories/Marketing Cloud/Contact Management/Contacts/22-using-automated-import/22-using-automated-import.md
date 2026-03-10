---
title: "Using Automated Import"
articleID: 22
category: "Contact Management > Contacts"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-03
---

# Using Automated Import

The **Automated Import** feature allows you to import contacts into your contact lists via an automated process.

In this option, you specify the file path on the FTP server of your Maropost account (external FTP is not supported) where the file is located. Our system scans the file path every couple of minutes to check for any new or updated .csv or .txt files in that location. After a file is imported, the older version is moved to the archive folder.

## Importing Contacts Using Automated Import

Perform the following steps to import contacts into a list via the **Automated Import** method:

1. To access the import feature, go to [**Contacts**](https://galaxy.maropost.com/s/article/Creating-and-Managing-Contacts-New) from the **Navigation** panel. You can also access the import feature by visiting the [**Contact Lists**](https://galaxy.maropost.com/s/article/Contact-Lists-Overview-New) section under the **Audience** menu.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Y56QQMAZ.jpg)
2. From the contacts index page, click on the **Import** tab to begin importing contacts to your account. You can also initiate the import process from the **Contact Lists** by first clicking on the **Actions** drop-down menu next to the list name and choosing **Import Contacts**.
  ![uid100.png](https://us.v-cdn.net/6038474/uploads/4ZOKNUAFVUKK/uid100.png)
3. In the Import List dialog box, choose “**Automated Import**” as the import method. Below, you can see an array of contact lists that the system has scanned from the previously specified file path, along with the creation and modification dates for these lists. Also, select the field delimiter that is used in the file. Click **Continue** to proceed ahead.
  ![uid30.png](https://us.v-cdn.net/6038474/uploads/7YX61VT20F2H/uid30.png)
4. However, please note that when importing contacts from the **Contacts** menu, the **Import List** dialog box will display an additional **List** field. Here, you must select the list into which the contact should be imported.
  ![uid129.png](https://us.v-cdn.net/6038474/uploads/SW2591Q5NDLV/uid129.png)
5. On the **Automated Import** page, enter the required details, such as the name of the import and the file path to where our system will search for the files to be imported. Additionally, you can insert a delimiter and an email address if you wish to be notified about the modifications being made to the list. Next, proceed to select the following checkboxes as applicable:

***Import New Contacts: ****This option imports new contacts only.

****Trigger Journey Campaigns:**** This option triggers a new journey while onboarding new subscribers via a product purchase, surveys, newsletters, feedback forms, etc.

****Update Existing Contacts:**** This option updates information on existing contacts in a list.*
  ![uid32.png](https://us.v-cdn.net/6038474/uploads/XXC9IRB9JZS6/uid32.png)
6. Upload a **.csv** or **.txt** file to accurately map heading fields with the fields currently registered in Marketing Cloud. Do the same for the remaining fields in the Mapping section as well. The standard default fields include name, email, phone number, subscription status, contact tags, etc.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Y56SvMAJ.jpg)
7. If you are importing contacts directly from the **Contacts** menu, you can change the list by selecting a new one from the drop-down list. However, if you are importing a new batch of contacts from the **Contact List** section, the **List Subscription** field will be grayed out.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Y56TFMAZ.jpg)
8. Optionally, if you have designated a custom field for your contact records, then select the name of the field in your import file that contains the member IDs, subscriber IDs, or any other type of profile IDs that your internal system is using to uniquely identify each contact record. Once you have properly configured the basic details, contact fields, mappings, list subscription, and custom fields sections, click on **Save**.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Y56TtMAJ.jpg)
9. The system begins scanning the uploaded file or the file path URL entered. If there are no discrepancies in the file or the path URL, the system starts importing the contacts into the selected contact list.
  ![uid26.png](https://us.v-cdn.net/6038474/uploads/JHMPDI7JIDU1/uid26.png)