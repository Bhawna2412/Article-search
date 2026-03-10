---
title: "Unique Identifier"
articleID: 1425
category: "Archived (Legacy) Articles"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2026-01-27
---

# Unique Identifier

You can enhance your contact data organization and enable advanced marketing automation features by setting up unique identifiers for your contact records. This streamlines your workflow by allowing you to link customer data across different systems using consistent member or customer IDs, rather than relying solely on email addresses. When properly configured, unique identifiers enable more sophisticated personalization and help you deliver consistent messaging across email, SMS, and mobile app channels.

**Unique Identifiers** also support better data management by reducing duplicate records and enabling more reliable data imports from your existing customer systems. This helps you maintain cleaner contact databases while unlocking advanced features like cross-channel journey automation and enhanced personalization capabilities.

## Why Use a Unique Identifier?

**Uniquely Identify Contact Records**

Maropost's data model requires that no two contacts share the same email address or unique identifier. If your business rules have the same constraints, then you can use a unique identifier.
 

**Uses Advanced Features**

Once your contacts have their UIDs set in their profile records, you can take advantage of Maropost's advanced features specific to Unique Identifier.

- Link data in your [relational tables](https://galaxy.maropost.com/s/article/Introduction-to-Relational-Tables) by the UID instead of the contact’s email address. This option is especially helpful when the data you store in relational tables is associated with your contacts’ member or customer IDs and not their email addresses.
- 
- 
- 

## Designating a Unique Identifier

You can select a custom field as the unique identifier by following the steps given below:

1. 
2. On the **Settings** page, from the Contacts section, select **Unique Identifier**.
  ![uid133.png](https://us.v-cdn.net/6038474/uploads/O6LG13MHI49S/uid133.png)
3. `Note:``The custom field must be defined as a string data type.`
  ![uid134.png](https://us.v-cdn.net/6038474/uploads/S7BEB1IZRKIQ/uid134.png)
4. Click **Save Changes**. Upon saving the changes, the selected field is designated as the unique identifier for your contact records.

## Import Rules When Using a Unique Identifier

The data model allows for the UID field to be null. The allowance enables contacts to be added to your email list directly from sign-up forms prior to being assigned a member ID (or whichever field you have designated as your UID).

You are responsible for providing the value of the UID for each of your contacts. The most common way is to include the field in your email contact import file. Note that the email address is still a required field in your import file. Simply map the field in your import file to the custom field that you’ve defined as your unique identifier.

In the example below, "member_id" is the custom field that has been designated as the unique identifier, and "membership_id" is the column name in the import file.

![1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEr.05T5g00000BkXErEAN.png)

The following diagram illustrates the rules for importing contacts based on the UID field:

![2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEs.05T5g00000BkXEsEAN.png)

To summarize the import rules:

- Since the UID field is allowed to be null, if a record in the import file does not have a value for that field, then the rules for determining a new or existing contact are based on the record’s email address as per the default process.
- 
- If a record in the import file has a unique identifier and there is no record in the contact database having the same unique identifier, then the next step is to check whether the email address of the record in the import file matches an existing record in the Contacts database. If a matching record is found, and that record does not have a unique identifier, then it is updated (assuming that you’ve selected the option to update existing records), adding the unique identifier from the import file to that record. This logic flow is the primary way that contact records in the Contacts database are updated with their unique identifiers from the import file. On the other hand, if the matching record in the Contacts database (based on email address) already has an existing Unique Identifier, then the record from the file is not imported and is rejected as a "Duplicate" record.
- If the unique identifier of the record in the import file matches an existing record in the Contacts database, then the next step is to check whether the email address of the record in the import file matches that same record in the database. If it matches, then that record is updated per the data in the import file (assuming that you’ve selected the option to update existing records). If the email addresses don’t match, then the final step is to check whether the email address in the import file matches a different record in the Contacts database. If no matching record is found, then the record is updated along with its email address. However, if the email address does match an existing record in the Contacts database, then the record is not imported and rejected as a "Duplicate" record.