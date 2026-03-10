---
title: "Adding Email Attachments"
articleID: 951
category: "Sending Emails With JetSend"
knowledgeBase: "JetSend"
lastUpdated: 2024-04-16
---

# Adding Email Attachments

You can include attachments when sending emails through API as well as SMTP.  
  
The following are some key points regarding email attachments:

* JetSend supports up to 3 attachments – each with a maximum size of 5 MB. The total size of the email, including content and attachments, must not exceed 20 MB.
* The supported file types are PDF, TXT, CSV, JPEG, JPG, and PNG.
* The attachment file must be in Base 64 encoded format.

## Adding Attachments Using API

You can use the **attachments** parameter in [Transmissions API](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdocs.jetsend.com%2F%23tag%2FTransmissions) to include the email attachments. The attachments must be passed as an array of objects.

**Note**: When receiving the attachment, API timeout for the server is­ 5 minutes.

**Example Snippet:**

"attachments":  
   [  
      {  
          “name”: “order\_confirmation.pdf”,  
          “type”: “application/pdf”,  
          “data”:  
       }  
    ],

## Adding Attachments Using SMTP

The following example code snippet in Ruby sends an email with a PDF attachment through SMTP:

```
require 'mail'  
options = { :address => 'smtp.yourserver.com',  
          :port => 2525,  
          :domain => 'yourdomain.com',  
          :user_name => 'smtpuser',  
          :password => '<password>',  
          :authentication => 'login',  
          :enable_starttls_auto => true  
          }  
Mail.defaults do  
          delivery_method :smtp, options  
end  
mail = Mail.new do  
       to 'your@user.com'  
       from 'info@example.com'  
       subject 'Email with HTML and an attachment'  
  
       text_part do  
            body 'Put your plain text here'  
       end  
       html_part do  
            content_type 'text/html;charset=UTF-8'  
            body '<h1>Put your HTML here</h1>'  
       end  
       add_file '/path/to/Attachment.pdf'  
  
       headers['X-JET-API'] = '{"options":{"tracking_domain":""}, "metadata" : {"has_pets":true, "pet_name": "Spot"}, "tags": ["cat","dog"]}'  
end  
  
mail.deliver!
```