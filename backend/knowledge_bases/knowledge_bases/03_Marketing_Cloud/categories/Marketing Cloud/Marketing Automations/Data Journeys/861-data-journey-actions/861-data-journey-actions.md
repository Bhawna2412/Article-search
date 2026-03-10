---
title: "Data Journey: Actions"
articleID: 861
category: "Marketing Automations > Data Journeys"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-06-30
---

# Data Journey: Actions

An **Action** widget denotes a process that is initiated and performed in Maropost. The actions in Data Journeys are used for bulk data management, such as importing and exporting contact files, secure suppression lists, Do Not Mail lists, and relational table data.

The Data Journey actions work sequentially. If you have several actions linked together, the subsequent action does not start executing until the preceding action finishes.

### FTP Upload

The FTP Upload action uploads a file to an external FTP server using the credentials that you provide. Select the files, segments, custom reports, campaign reports, Do Not Mail Lists, and Relational Tables that you want to export to the FTP server.

You can also precede this action widget with the Start Export widget and have the output of that file uploaded to the specified FTP server. You can also select 'Add timestamp with file name', which will append a timestamp to the file name. In such a case, the file name will be: [list_export | segment_export | dnm_export | table_export]**_**[listID | segmentID | dnm fileID | tableID]**_**[jobID]**_**[YYYYMonDDHHMMSS].zip.

**HOUSEKEEPING NOTE**: Files stored in your folder on the Maropost FTP server are retained for a period of 395 days.  Files older than this cutoff are permanently purged by a daily housekeeping task.

The following screenshot shows how the Start Export widget appears on the canvas:

![1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCf.05T5g00000BkXCfEAN.png)
The following screenshot shows the Start Export dialog box that appears when you double-click the widget:

![2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCg.05T5g00000BkXCgEAN.png)

### Send Campaign

The Send Campaign action enables you to send an email campaign. You have the same options as you have when you’re creating a new campaign. You can select the campaign details, such as name, subject, pre-header, content, and so on. You can also select lists, segments, or tables to specify contacts who will receive the email.

The following screenshot shows how the Send Campaign widget appears on the canvas:

![3.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCb.05T5g00000BkXCbEAN.png)
The following screenshot shows the Send Campaign dialog box that appears when you double-click the widget:

![Screen_Shot_2019-05-27_at_4.56.41_PM.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCc.05T5g00000BkXCcEAN.png)

### Start Import

The Start Import action begins a file import through Maropost’s FTP server or an external FTP server. Using the Select Lists option, you can select the list from which you want to import the contacts.

The following screenshot shows how the Start Import widget appears on the canvas:

![4.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCd.05T5g00000BkXCdEAN.png)
The following screenshot shows the Start Import dialog box that appears when you double-click the widget:

![6.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCe.05T5g00000BkXCeEAN.png)
On the widget dialog box, you have the following options:

- 
- 
- **DNM Import** – Select either the column name or the column number (ordered from left to right) that contains the email addresses of the contacts to be imported into either the general DNM list or the Brand DNM list.
- 

### Start Export

The Start Export action enables you to export a list, segment, Do Not Mail list, and data from a relational table.  Unlike the Start Import action widget, you can only export one file at a time.

The following screenshot shows how the Start Export widget appears on the canvas:

![1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCX.05T5g00000BkXCXEA3.png)
The following screenshot shows the Start Export dialog box that appears when you double-click the widget:

![2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCY.05T5g00000BkXCYEA3.png)
The following lists all the possible exports supported by the widget:

- **List Export** – Select the list you want to export, and the contact fields you want to include in the export file. You can also filter by subscription status.
- 
- 
- 

You can also choose the option to incrementally export contacts from subscription lists by using the Date Filter option. By default, the option is set to export all contacts. You can, however, set the option to export contacts based on the recency of updates in the past 24 hours, 7 days, 14 days, or 30 days.

**Note**: The option also applies to the Do Not Mail list. In this case, the date of recency applies to when the contact was added to the list.

The rules are as follows:

- 
- 
- 
- 
- 
- 
- 

### Send to Facebook

The Send to Facebook widget can be used to push a group of your Maropost for Marketing contacts into any Facebook Custom Audience that you have pre-defined in your Facebook Ad Account.

The following screenshot shows how the Send to Facebook widget appears on the canvas:

![Send_to_Facebook_Widget.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCZ.05T5g00000BkXCZEA3.png)
The following screenshot shows the Send to Facebook dialog box that appears when you double-click the widget:

![Send_to_Facebook.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCa.05T5g00000BkXCaEAN.png)
**Prerequisites**
In order to correctly use this action widget, make sure you have done the following:

- 
- Have created at least one [**Custom Audience**](https://www.facebook.com/business/help/1474662202748341?id=2469097953376494&ref=search_new_1) for that Ad Account
- Have [**set up the connection**](https://galaxy.maropost.com/s/article/Connecting-to-a-Social-Media-Account) between Maropost for Marketing and the Facebook profile with which the Ad Account is associated

**Mapping**
Facebook requires that you map the fields of your Maropost contacts with the Facebook user profile fields. The mapping is necessary to determine whether a Maropost contact is indeed a Facebook user. At a minimum, an email address is required. There are additional fields that you can optionally use to increase the accuracy of the matching.

**Select List**
Select the list or segment containing the contacts that you want to push over to your Facebook Custom Audience.

Facebook imposes specific restrictions on how your contact profile data is formatted. If your data is not properly formatted, then it will not be used in the matching.

- 
- 
- 
- **City** – Accepts city name in all lowercase, with no punctuation, special characters, or white space.
- **State** – Applicable to the United States of America only. Must be the 2-character ANSI abbreviation in all lowercase.
- 
- 
- 
- 
- 

**Audiences**

- **Facebook Account** – Select the name of the [**Facebook account that you have linked**](https://galaxy.maropost.com/s/article/Connecting-to-a-Social-Media-Account) with Maropost for Marketing.
- 
- 
- **Add to Facebook** – When you select this option, the contact's attributes you've selected will be used to find a matching Facebook user.  If there is a match, then Facebook will add that user to the selected Audience.
- **Remove from Fb** – When you select this option, the contact's attributes you've selected will be used to find a matching Facebook user.  If there is a match, then Facebook will remove that user from the selected Audience.

### Secure List Import

The Secure List Import action begins the import of a secure/encrypted list that you can use as a special type of suppression file in your campaigns.

The following screenshot shows how the Secure List Import widget appears on the canvas:

![3.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCW.05T5g00000BkXCWEA3.png)
The following screenshot shows the Secure List Import dialog box that appears when you double-click the widget:

![4.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWw0.05T5g00000BkWw0EAF.png)
The fields on the File Import widget are the same, except in the Secure List Import widget, you have the option to select which column name or column number the encrypted emails are stored.

### Generate Report

The Generate Report action generates a campaign or a custom report based on a selected list.

The following screenshot shows how the Generate Report widget appears on the canvas:

![5.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWw1.05T5g00000BkWw1EAF.png)
The following screenshot shows the Generate Report dialog box that appears when you double-click the widget:

![Generate_Report.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWw2.05T5g00000BkWw2EAF.png)

### HTTP Request

The HTTP Request action runs an HTTP API call to complete a variety of tasks. Consider the following examples. Enter the raw part of the API call in the BODY section.

```ada
Content-Type: application/json
Accept: application/json
```

OR

```ada
Content-Type: application/xml
Accept: application/xml
```

The following screenshot shows how the HTTP Request widget appears on the canvas:

![6.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCV.05T5g00000BkXCVEA3.png)
The following screenshot shows the HTTP Request dialog box that appears when you double-click the widget:

![HTTP_Request.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCu.05T5g00000BkXCuEAN.png)

### Trigger Data Journey

The Trigger Data Journey action triggers a separate Data Journey to begin when the element is reached. This includes passing contacts from one Data Journey to another. This trigger loops contacts in Data Journeys as well. You can select multiple Data Journeys.

The following screenshot shows how the Trigger Data Journey widget appears on the canvas:

![7.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCv.05T5g00000BkXCvEAN.png)
The following screenshot shows the Trigger Data Journey dialog box that appears when you double-click the widget:

![Trigger_Data_Journey.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCw.05T5g00000BkXCwEAN.png)

### Toggle Data Journey

The Toggle Data Journey action toggles a Data Journey between enabled and disabled status.

The following screenshot shows how the Toggle Data Journey widget appears on the canvas:

![8.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCx.05T5g00000BkXCxEAN.png)
The following screenshot shows the Toggle Data Journey dialog box that appears when you double-click the widget:

![Toggle_Data_Journey.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCq.05T5g00000BkXCqEAN.png)
On the widget dialog box, clicking a Data Journey enables the Data Journey, and it is then highlighted in blue. Double-clicking a Data Journey disables the Data Journey, and it is then highlighted in red.

### Update Content

The Update Content action copies content from one saved email to another. The purpose of this widget is to add additional content to existing content without having to open the saved content to edit and save it.

The following screenshot shows how the Update Content widget appears on the canvas:

![Update_Content_Widget.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCr.05T5g00000BkXCrEAN.png)
The following screenshot shows the Update Content dialog box that appears when you double-click the widget:

![Update_Content_Dialog.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCs.05T5g00000BkXCsEAN.png)
The widget dialog box shows the 'Copy From’ section on the left side and the ‘Copy To’ section on the right. You select which content you want to copy on the left, and then select which content you want the copied content to be placed into.

You can also use the ‘From URL’ option to copy content from a URL into the content on your Maropost account.

### Send Notification

The Send Notification action sends a notification to any group of email addresses. The widget enables you to create your notification message using a basic WYSIWYG editor. This action widget comes in handy for sending yourself a notification when an import or an export has been completed.

The following screenshot shows how the Send Notification widget appears on the canvas:

![3.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCt.05T5g00000BkXCtEAN.png)
The following screenshot shows the Send Notification dialog box that appears when you double-click the widget:

![Send_Notification.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCm.05T5g00000BkXCmEAN.png)

### Refresh Counts

The Refresh Counts action refreshes the counts of a chosen list or segment. You can use this widget next to the Start Import action widget so that the segment counts reflect the most accurate numbers right after a large file has been imported.

The following screenshot shows how the Refresh Counts widget appears on the canvas:

![4.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCn.05T5g00000BkXCnEAN.png)
The following screenshot shows the Refresh Counts dialog box that appears when you double-click the widget:

![Refresh_Counts.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCo.05T5g00000BkXCoEAN.png)

### Toggle Journey

The Toggle Journey action is similar to Toggle Data Journey, except this action toggles between enabling and disabling Journeys saved in your account.

The following screenshot shows how the Toggle Journey widget appears on the canvas:

![Toggle_Journey_Widget.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCp.05T5g00000BkXCpEAN.png)
The following screenshot shows the Toggle Journey dialog box that appears when you double-click the widget:

![Toggle_Journey_Dialog_Box.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCi.05T5g00000BkXCiEAN.png)
The action dialog box displays a list of Journeys that already exist in your account. Clicking a journey enables it, and the journey is highlighted in blue. Double-clicking a journey disables it, and the journey is highlighted in red.

### SQL Query

The SQL Query action executes an [**SQL Query**](https://galaxy.maropost.com/s/article/SQL-Queries) that you have already created. You can use the action widget to update a relational table’s data after you have imported data into another relational table.

The following screenshot shows how the SQL Query widget appears on the canvas:

![6.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCj.05T5g00000BkXCjEAN.png)
The following screenshot shows the SQL Query dialog box that appears when you double-click the widget:

![SQL_Query.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCk.05T5g00000BkXCkEAN.png)

### Clear Field

The Clear Field action clears all data from the selected custom field for all contacts in your database.

**Note**: Once you clear a field, you cannot undo it.

The following screenshot shows how the Clear Field widget appears on the canvas:

![7.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCl.05T5g00000BkXClEAN.png)
The following screenshot shows the Clear Field dialog box that appears when you double-click the widget:

![Clear_Field.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXCh.05T5g00000BkXChEAN.png)