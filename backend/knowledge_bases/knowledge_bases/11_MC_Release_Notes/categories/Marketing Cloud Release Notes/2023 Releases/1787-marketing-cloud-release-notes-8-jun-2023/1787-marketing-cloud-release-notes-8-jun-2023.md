---
title: "Marketing Cloud Release Notes – 8 Jun 2023"
articleID: 1787
category: "2023 Releases"
knowledgeBase: "MC Release Notes"
lastUpdated: 2025-08-07
---

# Marketing Cloud Release Notes – 8 Jun 2023

**OVERVIEW**

This release, we are overjoyed to bring you our revamped Drag and Drop editor. Also, check out the upgrades made to the POST/contacts REST API.

For more details, please read on!

**ENHANCEMENTS**

**Drag and Drop Editor – UI Revamp**

The modernized Drag and Drop editor is clutter-free and user-friendly. Apart from a better look and feel, the new UI provides you the ease of use.

Some of the notable changes are:

- 
- 
- 
- 
- 
- 
- 

To learn about the Drag and Drop editor and its features, get started at [**Drag and Drop Editor**](https://galaxy.maropost.com/s/article/Drag-and-Drop-Editor). 

![DnD_Release Notes](https://us.v-cdn.net/6038474/uploads/attachments/migrated/DnDReleaseNotes.0685g00000EkBTAAA3.jpg)

**Contacts REST API Update**

When creating a new contact list using the POST/contacts API, you can now create new contact tags. Previously, if the **add_tags** array in the POST/contacts method included a tag that didn’t exist, the application simply ignored it. Now, a new contact tag will be created using the passed parameter values.

**Here's a sample input payload for POST/contacts API:**

{

 "contact": {

 "first_name": "ChatBot",

 "email": "ChatBot@gmail.com",

 "last_name": "Monk",

 **"add_tags": [**

** "armedMonk",**

** "tag_name"**

** ],**

 "subscribe": true,

 "remove_from_dnm": true

 }

}