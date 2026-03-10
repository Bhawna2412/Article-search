---
title: "Bulk Messaging: Personalised Email Headers"
articleID: 815
category: "API Guide"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Bulk Messaging: Personalised Email Headers

You can enhance email campaign personalization by customizing email headers including From Name, From Address, Reply-to Address, Subject Line, and Preheader for each individual contact. This advanced personalization capability helps significantly improve open rates and engagement by making each email appear personally crafted for the recipient.

When properly implemented with appropriate default values, personalized headers typically lead to better campaign performance through increased subscriber trust and relevance. This approach enables sophisticated email marketing strategies that can enhance your overall campaign effectiveness while maintaining professional sender reputation.

With Maropost for Marketing, you can also personalize the email headers, i.e., have a different From Name, From Address, Reply-to Address, Subject Line, and Preheader for each contact contained in your Contact's data file.

All you need to do is use the same {{tag.*field_name*}} syntax in the command file, where *field_name* is the name of the column in the contacts data file.

> **Note:** If you do include personalization for any of the email headers, then you MUST also include a default value. If you include a personalization tag in the Command file and omit its default value, then it will result in a processing error.

Suppose the Command file is using personalized From Name and From Address, where the value for each contact's email is coming from the Contacts data file. The assumption is that there is a column in the data file labeled "fromname" and one labeled "fromemail".

The Command file will therefore be as follows:

```plaintext
..."campaign": {    "name": "Bulk Message Test V1",    "from_name": "{{tag.fromname}}",    "default_from_name": "Maropost Customer Success",    "from_email": "{{tag.fromemail}}",    "default_from_email": "success@maropost.com",    "subject": "Greetings from Maropost!",    "preheader": "Let's get started with Maropost for Marketing",    "reply_to": "success@maropost.com",    "address": "155 University Blvd Suite 1900, Toronto, ON, Canada, M5H 3B7",    "ignore_dnm": false,    "send_type": "default",    "content": {      "source": "1234567",      "footer": "default"  },...
```