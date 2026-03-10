---
title: "Bulk Messaging via FTP"
articleID: 817
category: "API Guide"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-07-09
---

# Bulk Messaging via FTP

Maropost Marketing Cloud supports **Bulk Messaging via FTP,** enabling you to manage email content and email lists in your messaging platform and then transferring them to Maropost for delivery.

The entire process takes place over (S)FTP, a protocol that is widely supported, and you don’t need to involve IT resources to program an API. You can use this process for either sending promotional campaigns or transactional campaigns in bulk.
 

### How Does It Work?

All you need to do is upload a series of files to your account folder on the Maropost FTP server, and the process is automated from there.

The files you will upload are as follows:

- **A Contact Data File** – This is a **simple text file** where each record is separated by a line break. The most common type of data file is a comma-separated value (CSV) file. You do, however, have the option to specify any other type of delimiter.
- **An HTML Content File** (optional) – This file contains the HTML content for the email that you will be sending to all the contacts in the data file. Normally, you’d either create your content in Maropost for Marketing ahead of time, where it’s stored for final edits and reuse.  However, this option gives you the ability to send the content at the same time you are sending your contact list. You can place the HTML file in any subfolder of your root FTP folder.  Just make sure you have the path to the folder properly defined in the command file.
- **A Command File** – This file includes the instructions for creating and sending your campaign on the Maropost platform. It also defines the name and location of the data file containing your list of contacts. The command file can be either XML or JSON formatted.

A backend process queries your FTP folder every few seconds, looking for the command file. It will read the command file looking for specific information, including the name of your contact data file and where it’s located, what is the name of your HTML email content file and where it’s located, and the date and time that you wish to send the campaign.

If there is any error (for example, the contact data file is not present), then the** **process will terminate and generate an error file containing an error code and a description of the error.

If the initial processing of the command file is successful, then a campaign will be created and scheduled according to the information contained in the file. At the appointed send time, Maropost will stream the contact data file in real time, creating and sending the emails.

If there is an error reading any of the records in the contact data file, the process will skip that record, make a note of the line number in the file where that record occurs, and then proceed to the next record in the file.

When the campaign has finished being sent, the process will create a summary report file listing the total number of contacts who were sent an email, a listing of all duplicated contacts in the contact data file, and a listing of all bad records in the file.
 

### Managing Your Subscriptions

Marketing Cloud will not be creating any lists in this bulk messaging process. Therefore, you must either manage your subscriptions in your own platform or you must include the 1-click unsubscribe link in your email footer or email body.
 

### Error Codes

| **Error string** | **Error code** | **Reason** |
| --- | --- | --- |
| Invalid run_at datetime. | 400 | run_at is not provided or is not a string |
| Invalid run_at datetime #{data[‘run_at’]} | 400 | run_at is not in format yyyy-mm-dd hh:mm |
| Invalid notification block | 400 | param notification is not a valid json object |
| Invalid notification emails. | 400 | param emails inside param notification is not an array |
| Invalid notification email #{email}. | 400 | param emails inside param notification has an invalid email |
| Invalid notification http_post block | 400 | param http_post inside param notification is not an array |
| Invalid http_post notification format. | 400 | param http_post inside param notification does not have a ‘format’ object |
| Format of http post notification can only be json or xml. | 400 | param http_post inside param notification does not have a valid format |
| Invalid http post notification url | 400 | param http_post inside param notification does not have a ‘url’ object |
| Post notification URL is invalid #{response.code} #{response.message} | 400 | param http_post inside param notification’s ‘url’ did not respond with status 200 |
| Post notification URL is invalid #{request_url} | 400 | param http_post inside param notification’s ‘url’ is invalid |
| Unable to parse file. | 400 | the command file does not have valid json/xml data (parsing failed) |
| No known block is present in the file | 400 | The root object in command file does not contain known models (ex: campaign object is the only object required in command file right now) |
| Invalid campaign block. | 400 | Command file’s campaign object is not a valid json object |
| Missing contacts data. | 400 | Command file’s campaign object does not contain param ‘contacts’ |
| Invalid contacts data. | 400 | Command file’s campaign object’s param ‘contacts’ is not a valid json object |
| Invalid contacts data. | 400 | Command file’s campaign object’s param ‘contacts’ does not have ‘files’ parameter provided |
| No contact files mentioned. | 400 | Command file’s campaign object’s param ‘contacts’  param’s ‘files’ parameter is an empty array |
| No delimiter mentioned for contact file #{contact_file[‘name’]}. | 400 | Command file’s campaign object’s param ‘contacts’ object’s param ‘files’ does not have a ‘delimiter’ |
| No file encoding mentioned for contact file #{contact_file[‘name’]}. | 400 | Command file’s campaign object’s param ‘contacts’ object’s param ‘files’ does not have an ‘encoding’ |
| Error reading Contact file header #{contact_file[‘name’]}: #{e.message}. | 400 | There was an error reading the header row of the csv contacts file (probably an encoding error) |
| Contact file #{contact_file[‘name’]} is missing email header. | 400 | Header column is either not present or is present more than 1 time in contacts.csv |
| Contact file missing uploads/maropost/data/#{contact_file[‘name’]}. | 404 | Contacts file not found |
| Content missing. | 400 | Command file’s campaign object does not contain param ‘content’ |
| Could not find content with id #{campaign_data[‘content’]}. | 400 | If content_id provided in campaign param’s content param does not exist in backend |
| Content file missing uploads/maropost/data/#{campaign_data[‘content’]}. | 400 | If html content file’s path provided does not exist at mentioned path |
| Missing body tag in html content file. | 400 | If the html provided in html file for content param does not have a body tag |
| Content Error: ” + exception message | 400 | If the html in content file is not well formed |
| Spam score should be less than #{spam_check_result[:permitted_score]}. | 400 | If content’s spam score exceeds permitted score |
| Spam Check Error: ” + exception message | 400 | If spam check fails for some reason |
| Campaign save Errors | 400 | Regular validations for campaigns as shown on UI |
| Content Save Errors | 400 | Regular validations for contents as shown on UI |
| Invalid campaign status: id: #{campaign.id}, status: #{campaign.status} | 400 | If campaign status is not ‘draft’/’sent’ |
| Content cannot be blank. | 400 | If an empty string is provided for content param in command file |
| send_type value for Transactional Campaign should be default | 400 | If the campaign_status is to send Transactional campaigns and ‘send_type’ is not set to ‘default’. |
| Transactional Campaign with ID does not exist. | 400 | If the Campaign ID provided in the command file does not exist as a transactional campaign in the platform. |