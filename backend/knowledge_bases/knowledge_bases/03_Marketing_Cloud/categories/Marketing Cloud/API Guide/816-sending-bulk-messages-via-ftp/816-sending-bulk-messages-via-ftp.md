---
title: "Sending Bulk Messages via FTP"
articleID: 816
category: "API Guide"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-07-09
---

# Sending Bulk Messages via FTP

At Maropost, we understand that your marketing plan might call for a bulk messaging blast from time to time. That's why we've refined and redefined the process of sending bulk messages in just a few simple steps. 

This article discusses the bulk messaging process in detail.

### In this Article

- Before You Begin – Set Up the FTP Folders
- Sending Bulk Campaign Messages Via FTP
- Learn More About the Files

## Before You Begin – Set Up the FTP Folders

If this is your first time, you'll need to set up your FTP folders. Your root Maropost FTP folder is /uploads.  You will be creating sub-folders underneath the root folder.

**Note**: If you need assistance, please contact **Success@maropost.com,** and we will create the folders for you.

1. First, create the “root sub-folder” used for bulk messaging, which will be the /uploads**/maropost** folder.  Underneath this root sub-folder, you will create two additional sub-folders, /uploads/maropost**/data** and /uploads/maropost**/bin**.

- /data/ – This is the root sub-folder where you put your contacts data file.  You can create sub-folders inside this one just to keep your contact files organized.
- /bin/ – This is the folder where you should place the command file. As soon as you put the file in this folder, the backend process will start reading it within seconds.

**Important**: Make sure you have your Contacts file and your Email Content file (optional) in place before you put the command file into the folder.

2. Once Maropost for Marketing receives your command file and executes the instructions, it will automatically create three folders underneath your root sub-folder and place one of the two output files in these folders. If the data files were properly read and the campaign was successful, then it will output a summary file, placing it in the /reports/ folder. If there was an error, it would create an error summary file and place it in the /errors/ folder. The file will include an error code and a description of the error. Once the command file has been processed, it will be moved to the /archive/ folder.

- /archive/ – After a command file is read, it will be moved out of the /bin/ folder and placed here.
- /errors/ – If there is an error processing your command file, the errors will be output to a file in this folder. The format of the file will be the same as the command file you provided.
- /reports/ – If your command file was processed successfully, a summary file will be placed in this folder. The format of the file will be the same as the command file you provided.

* *

## Sending Bulk Campaign Messages Via FTP

Creating the campaign over FTP takes only two steps, with a third optional step. All you need to do is upload a series of files to your account folder on the Maropost FTP server, and the process is automated from there.

### Creating the Campaign via FTP

1. Upload your contacts data file to the /uploads/maropost/data folder.

This is a simple text file where each record is separated by a line break. The most common type of data file is a comma-separated value (CSV) file. You do, however, have the option to specify any other type of delimiter.

2. (Optional)  Upload your email content file to the /uploads/maropost/data folder also.

This file contains the HTML content for the email that is to be sent to all the contacts in the data file. Normally, you’d either create your content in Marketing Cloud ahead of time, where it’s stored for final edits and reuse.  However, this option gives you the ability to send the content at the same time you are sending your contact list. You can place the HTML file in any subfolder of your root FTP folder.  Just make sure you have the path to the folder properly defined in the command file.

3. Upload the command file to the /uploads/maropost/bin folder.

This file includes the instructions for creating and sending your campaign on the Maropost platform. It also defines the name and location of the data file containing your list of contacts. The command file can be either XML or JSON-formatted.

### Sending the Campaign via FTP

(This is an automated process and doesn't require any action from you.)

A backend process queries your FTP folder every few seconds, looking for any new command file. When the presence of a command file is detected, the file is parsed to ensure that the required information is provided, that the specified files exist, and additional validations are performed. It will read the command file looking for specific information, including the name of your contact data file and where it’s located, what is the name of your HTML email content file and where it’s located, and the date and time that you wish to send the campaign. 

If the command file failed validation, then it will be renamed with a .error file extension. An error file will be created in the /errors/ folder with specific error codes and descriptions. No campaign will be created until the errors are fixed.

If the command file is properly validated, then it will be renamed with a .ready file extension. The actual campaign will not be created until the date and time specified in the command file.

**Note**: If you need to make any corrections to the scheduled campaign, then you can do so by editing the **.ready** file and re-uploading it to the /bin/ folder. The process will recognize the updated timestamp and re-validate it.

At the scheduled date and time of the campaign, the command file with the .ready file extension will be renamed to .processing. This file extension indicates that the campaign has been created, the contact data file is being streamed, and emails are being created. If you provided notification information in the command file, then the system will send a notification when the campaign has started sending and again when it has finished sending.

**Note**: Once the campaign has started mailing, you can no longer make changes to the command file.

If there is any error that occurs when the campaign is created at send time, then the campaign ID will be added to the command file. After you make the necessary corrections, re-upload the command file with the campaign ID so that the process finds the campaign and re-processes it.

At send time, once the campaign has been created and fully sent, the command file will be moved out of the /bin/folder and into the /archive/ folder. A report file summarizing the results of the campaign will be created in the /reports/ folder.

## Learn More About the Files

### The Contacts File

The Contacts file must be placed inside the **/uploads/maropost/data/** folder or a subfolder inside. It must be a text file where each record is separated by a new line character, and the delimiter separating each field must be defined in the command file.

**Important**: The contact file can only use a single-character delimiter.

The first row of the file must be the header record. Maropost reads the header record in order to match up the personalization included in the file with the tags specified in the HTML content. You can name each field anything you want; the only requirement is that the field containing the contacts’ email addresses must be named email.

The email field is the only required field in the contact data file. All other fields are optional and are used for any dynamic content in the body of the email, as well as in the subject line and pre-header. The name of your dynamic content fields should only contain alphanumeric characters, can also include the underscore ‘_’ character, and **must be in all lowercase.**

To get the dynamic content from your Contacts file to appear in your email content, use the **{{tag.field_name}}** syntax. For example, to get personalization in the email, include a field in your Contacts file called “first_name”.  Then, the tag you would use in your email content will be **{{tag.first_name}}**.

The contact data file can also include blocks of HTML code snippets. They will be automatically inserted into the body of the email. If the HTML code snippet includes any HREF attributes for URLs that you want tracked, then you will need to append “.html” to the name of the field in the data file. This naming convention for the field will instruct the parser that this particular field contains HTML code with an HREF attribute needing to be tracked.

Make sure that all your HTML code is HTML-encoded in the contact data file.

**Note**: The substitution tag in your content file will still be **{{tag.field_name}}**.

You can also pass in multiple elements of data for each contact record by providing data in either JSON or XML format within a single field. In the example below, multiple purchase items for a contact are passed in as a JSON-formatted array. Note that the name of the field is “products”, appended with “.json” to instruct the parser how the data is formatted.

The Liquid script syntax used in your email content would be something similar to:

| Product Description | Day's Supply | Order Date |
| --- | --- | --- |

{% for order_items in tag.products %}

| {{order_items.sku_description}} | {{order_items.supply_days}} | {{order_items.order_date \| date: "%b %-d, %Y"}} |
| --- | --- | --- |

{% endfor %}
 

### The Content File

The content file is the HTML file that will be the HTML version of your email.  The default folder where you should place your HTML file is in the **/data/** folder.

Marketing Cloud's bulk messaging via FTP feature currently does not support plain-text versions of the email.
 

### Command File

The command file must be placed inside the /uploads/maropost/bin/ folder. It is either an XML or JSON-formatted file. You can use any name for your command file. Take a look at this example of a [**command file in JSON format**](https://galaxy.maropost.com/s/article/Bulk-Messaging-Examples) for the exact structure of the command file.

There are **three main elements** of the command file:

- **run_at** (required) – The date and time that the campaign is to be sent in **Eastern Time Zone**. Use the format “YYYY-MM-DD HH:Min”.  If you want the campaign to send immediately, set the date and time in the past.
- **notification** (optional) – System-generated notifications that are sent when there is an error with the command file, when the command file has been validated, when the campaign has started sending, and when the campaign has finished sending.
- **emails** (optional) – An array of email addresses to receive the event notifications. System notifications will be sent to these email addresses when there is an error when the command file is initially read, when the command file is properly validated, when sending the campaign is started, and when sending the campaign is finished.
**Note**: Add **no-reply@maropost.com** to your address book to ensure that notification emails are delivered to your inbox.
- **http_post** (optional)
- **url** (required) – A webhook URL endpoint that will receive either the JSON or XML payload for errors and successful campaign sends. During the validation process, Maropost for Marketing will send a small test message to the URL endpoint to verify that it is correct. **The URL must return an HTTP Status Code of 2xx to indicate that it is a valid URL.  If not, then the command file will fail validation, and the job will not execute.**
- **format **(required) – Acceptable values are either “xml” or “json”.
- **campaign **(required)  - **campaign_status** (optional)
  - “normal” (default) – Send the emails as marketing promotional emails.
  - “transactional” – Send the emails as bulk transactional emails.
- **id** (optional) – the ID of an existing campaign. When not provided in the command file, a new campaign will be automatically created each time you upload a new command file. When provided, no new campaign will be created, and the delivery and response data from the bulk send will be associated with the existing Campaign ID.
**Note**: This attribute is primarily intended for sending bulk transactional messages, which allows the marketer to send transactional emails from the same Transactional Campaign to the same recipients repetitively (think purchase confirmation emails where the layout of the email never changes — just the content). You can also reuse the campaign ID of an existing marketing promotional campaign. However, in this case, emails will only be sent to contacts who have not previously received emails from the specified marketing promotional campaign.
- **name** (required) – The name of your campaign
- **from_name** (required)
- **from_email** (required)
- **subject** (required)
- **preheader** (optional)
- **reply_to** (required)
- **address** (required) – The postal address that appears in the email when your content is using the {{campaign.address}} custom tag.
- **language** (optional) – Defaults to “en”; other options include Spanish (“es”), German (“de”), Italian (“it”), French (“fr”), Portuguese (“pt”), and Polish (“da”).
- **ignore_dnm** (optional) – If you are using this to send bulk transactional messages, then this will allow you to send the notifications to the contacts even if they are in the Do Not Mail list. The value must either be “true” or “false”.  The default value is “false”.
- **brand_id** (optional) – the Brand ID that you want to associate with this campaign.
- **send_type** (required)  - “default” – Send according to the date/time specified in the “run_at” element. If you are using this feature to send bulk transactional messages, then you must set “send_type” to “default”.
  - “best_time” – (same as “send-time optimization”) – Send at the same time as each contact’s known most recent email open time.
  - “one_time” – Send starting on the specified date/time to contacts according to their known time zones.
- **bcc** – Sends an email to the email address provided in this field. An email sent to a bcc address still constitutes an email sent and will therefore be counted in your monthly sending totals. Use this option carefully to avoid unanticipated overage charges.
- **content** (required)  - **source **(required) – Is either the Content ID of the email content created in Marketing Cloud, or is the location of the HTML file relative to the /data/ folder where you should place this file. Content from the HTML file will be created in the Maropost platform, and the name of the content will be the name of the HTML file provided here.
  - **footer **(optional) – Which footer do you want to apply to your email content to.    - “default” – the Maropost default footer. If you don’t provide a “footer” in your command file, then the default footer will also be applied.
    - “none” – Use this option when your email content has its own footer.
    - footer_id –The ID number of your custom footer.
  - **contacts **(required)    - **files** – An array allowing you to specify more than one contact data file
    - **name** (required) – The name of your contacts file
    - **encoding **(required) – The default is “utf-8”. Other encoding types are accepted.
    - **delimiter** (required) – The character that is the field delimiter used in the contacts data file.

### Report Files

If the command file was read correctly and the campaign was successfully sent, a campaign summary file will be automatically placed in the **/uploads/maropost/reports/** folder. 

The name of the file and file extension will be identical to that of the original command file and will contain three main elements: command, report, and campaign. The command element is simply a repeat of the data that was passed in the original command file.

The report element will contain the following sub-elements:

- **file_name** – The name of the contacts file(s) used for the campaign.
- **contacts_count** – The total number of contacts who were sent an email from this campaign.
- **invalid_entries** - An array containing a list of line numbers from the data file where there was an error with the record.
- **duplicates** – An array containing a list of each duplicated email address and the total number of times each email address was duplicated.

The campaign element includes details about the campaign, including the campaign ID.

### Error File

If there is an error in the command file (for example, missing required fields) or with importing the contacts file or the HTML file, then an error file will be automatically placed in the **/uploads/maropost/errors/** folder. The name of the file and file extension will be identical to that of the original command file.

It will contain the following elements:

- **code**: An error code relating to the error.
- **message**: A description of the error.
- **Reference Appendix**: Listing of Errors and Codes to view a complete listing of errors.

After you’ve corrected your errors, delete the .errors and re-upload the corrected command file using the original file name to the **/bin/** folder.