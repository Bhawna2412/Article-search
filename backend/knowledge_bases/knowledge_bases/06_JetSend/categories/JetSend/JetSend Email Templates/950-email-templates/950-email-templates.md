---
title: "Email Templates"
articleID: 950
category: "JetSend Email Templates"
knowledgeBase: "JetSend"
lastUpdated: 2024-04-16
---

# Email Templates

JetSend enables you to create and maintain a template library within the application user interface.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TemplateLibrary.05T5g00000GjZrJEAV.png)

## Creating a New Email Template

You can create a template by copy-pasting your HTML code

To create a new email template, do the following:

1. In Navigation, go to EMAIL, and then select Templates.
2. On the Template Library page, click Add Template.
3. On the Add New Template dialog box, enter the template information.

   ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AddNewTemplate.05T5g00000GjZrOEAV.png)

   * **Template Name:** Enter a name for the template.
   * **From Name:** Enter the sender's name.
   * **From Email:** Enter the sender's email address.
   * **Subject Line**: Enter a subject line for the email.
   * **HTML:** Paste the HTML code for your template.
4. Click Add.

## Using the Template in API

You can use a template by referring to the Template ID in the API call when sending the email.

You can find the Template ID in the template details. Click the Template name to see the template details. Here, you can also see the HTML code and preview of the email template.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TemplateDetails.05T5g00000GjZrTEAV.png)

The following example shows how to use a template within the Transmission API for sending emails:

```
{
```

`"email": {<br>    "options": {<br>      "description": "Christmas Campaign Email",<br>      "campaign_id": "my_campaign",<br>      "open_tracking": true,<br>      "click_tracking": true,<br>      "tracking_domain": "mycustomtracking.domain",<br>      "skip_suppression": false,<br>      "inline_css": false<br>    },<br>    "metadata": {<br>      "user_type": "students",<br>      "education_level": "college"<br>    },<br>    "substitution_data": {<br>      "discount": "25"<br>    },<br>    "tags": [<br>      "cat",<br>      "dog"<br>    ],<br>    "recipients": [<br>      {<br>        "address": {<br>          "email": "wilma@flintstone.com",<br>          "name": "Wilma Flintstone"<br>        },<br>        "tags": [<br>          "cat",<br>          "dog"<br>        ],<br>        "substitution_data": {<br>          "customer_type": "Platinum"<br>        },<br>        "metadata": {<br>          "age": "24",<br>          "place": "Bedrock"<br>        }<br>      }<br>    ],<br>    "cc": [<br>      {<br>        "email": "cc_recip_1@gmail.com",<br>        "name": "CC 1"<br>      }<br>    ],<br>    "bcc": [<br>      {<br>        "email": "bcc_recip_1@gmail.com",<br>        "name": "BCC 1"<br>      }<br>    ],<br>    "archive": [<br>      {<br>        "email": "archive_recip_1@gmail.com",<br>        "name": "Archive 1"<br>      }<br>    ],<br>    "content": {<br>      <strong>"template_id": "274019f9-10bf-4e28-b8ed-0a24c6ee4e5c",</strong><br>      "email_rfc822": "Content-Type: text/plain\r\nTo: \"{{address.name}}\" <{{address.email}}>\r\n\r\n Hi {{first_name}} \nSave big this Christmas in your area {{place}}! \nClick http://www.mysite.com and get huge discount\n Hurry, this offer is only to {{customer_type}}\n {{sender}}\r\n",<br>      "from": {<br>        "name": "Fred Flintstone",<br>        "email": "fred@fake.com"<br>      },<br>      "subject": "Big Christmas savings!",<br>      "reply_to": "Jetsend Support <support@jetsend.com>",<br>      "headers": {<br>        "X-Customer-Campaign-ID": "christmas_campaign"<br>      },<br>      "text": "Save big this Christmas in your area {{place}}!",<br>      "html": "<p>Hi {{customer_type}} \nSave big this Christmas in your area {{place}}! \nClick http://www.mysite.com and get a {{discount}}% discount\n</p><p>Hurry, this offer is only to {{user_type}}\n</p>"<br>    }<br>  }<br>}`