---
title: "Creating Relational Tables"
articleID: 914
category: "Contact Management > Relational Tables"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2026-01-29
---

# Creating Relational Tables

**Relational Tables** allow you to store detailed customer information that goes beyond standard contact fields, making it possible to create more precise email campaigns and personalized messages. By organizing data like purchase history, preferences, and behavioral patterns in structured tables, you can segment your audience more effectively and boost subscriber engagement.

When set up correctly, relational tables enhance your marketing capabilities by ensuring you deliver relevant content to specific audience segments while keeping your data organized through clearly defined connections between different information types.

This guide walks you through creating a relational table step by step.

To understand the fundamentals of relational tables, refer to [**Introduction to Relational Tables**](https://galaxy.maropost.com/s/article/Introduction-to-Relational-Tables).

Follow these steps to create a new relational table:

1. To access this module, firstly, visit the **Navigation** panel and click on **Audience » Relational Tables**.
  ![retables0.png](https://us.v-cdn.net/6038474/uploads/BLQ0W9NDSLJD/retables0.png)
2. From the Relational Tables index page, click on the **New Table** button.
  ![retables1.png](https://us.v-cdn.net/6038474/uploads/W9QPYKNWMXU2/retables1.png)
3. While creating a new relational table, first enter a suitable table name. Table names must contain only lowercase letters, numbers, and underscores. Using capital letters, spaces, or special characters will trigger an SQL error. Note that while you may be able to create a table with capital letters in its name, you'll encounter an error when trying to load data into it.

**Examples:
My Table - invalid
My_Table - invalid
my_table - valid**
**
**
  ![retables2.png](https://us.v-cdn.net/6038474/uploads/GW8HKJC4KI3H/retables2.png)
4. Next, enter a column name and its data type, i.e., the kind of information the column will hold. Ensure the name contains only letters, numbers, or underscores. The system supports the following data types:

***String:**** A sequence of up to 255 characters.

****Text:**** A string data type up to 65535 characters.

****Float:**** A floating-point number with whole numbers up to 24 digits and 5 digits after a decimal point.

****Integer:**** A whole number, which can be a zero, positive, or negative up to 11 digits.

****Bigint:**** An integer data type of up to 20 digits.

****Boolean:**** Also known as true or false. The values are stored in the relational table as 1 and 0, indicating true and false, respectively.

****DateTime:**** Data in the date/time format.

****Email:**** Data type to store the email address of the contact. It is only one of two data types that can be set as “Sendable” for tables.

****UID:**** If you have specified a custom field to be the *[***unique identifier***](https://galaxy.maropost.com/kb/articles/25-custom-unique-identifier-custom-uid)* of your contact records, then this data type will appear in this list. This is the other of the two data types that can be set as “Sendable” for tables.*
  ![retables3.png](https://us.v-cdn.net/6038474/uploads/JHY9U77A47DB/retables3.png)
5. In the **Default Value** field, specify a default value for the column based on the selected data type, or leave it blank if preferred. In the **Field Length** field, define the maximum character or digit length for the column. Do remember that each data type has a predefined maximum limit at the system level that cannot be exceeded. Furthermore, choose a **Key Type**: None, Index, or Unique. In the **Allow Null** field, indicate whether the column can accept empty values. If enabled, blank data can be imported into this column.
  ![retables4.png](https://us.v-cdn.net/6038474/uploads/FG5AAS9H49N7/retables4.png)
6. You can add more columns to the table by clicking the **Add Column** button and repeating steps 3-5, or click **Next** to set up the table options.
  ![retables5.png](https://us.v-cdn.net/6038474/uploads/LMHOI9TOY48R/retables5.png)
7. In **Table Setup,** you can configure the following table options:

***Primary Key:**** A unique identifier for each record in the table. This field must contain distinct values and cannot be null. Each table can have only one primary key.

****Auto-Increment:**** Automatically generates sequential values for the column.

****Sendable:**** Determines how contacts in this table are linked to contacts in your main contact database. By default, the system uses the email address from a field with the “Email” data type and “Sendable” option enabled to establish this connection. To send emails to contacts stored in a relational table, their email addresses must also exist in your contact database. Alternatively, if you've assigned a unique identifier to your contacts (such as member ID or customer ID), you can use a field with the “UID” data type and “Sendable” option selected. With this setup, contacts in the relational table will receive emails if a matching unique identifier exists in the contact database.*
  ![retables6.png](https://us.v-cdn.net/6038474/uploads/A8D79FI097R3/retables6.png)
8. If you wish to automatically create new contacts from relational tables when used in campaigns, segments, or journeys, enable the **Create new contacts** toggle. Upon enabling the toggle, you can simultaneously enable the **Update existing contacts** toggle, which automatically updates contacts into the database. These toggles are disabled by default.
  ![retables7.png](https://us.v-cdn.net/6038474/uploads/FVYS9ISKWO31/retables7.png)
9. You have successfully created a relational table.
  ![retables8.png](https://us.v-cdn.net/6038474/uploads/AQJITELOZ0NC/retables8.png)