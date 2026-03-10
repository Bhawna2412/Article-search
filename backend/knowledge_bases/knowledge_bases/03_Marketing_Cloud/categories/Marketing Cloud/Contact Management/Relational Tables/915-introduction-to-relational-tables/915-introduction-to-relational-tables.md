---
title: "Introduction to Relational Tables"
articleID: 915
category: "Contact Management > Relational Tables"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Introduction to Relational Tables

You can use relational tables to store and organize complex customer data beyond basic contact fields, enabling more sophisticated audience targeting and personalized email campaigns. This structured data approach helps improve subscriber engagement by allowing you to create segments based on purchase history, behavioral patterns, or custom business metrics that enhance your marketing effectiveness.

Relational tables enable you to establish connections between different data sets, creating a comprehensive view of each contact that supports more relevant messaging and better campaign performance.

**Relational Tables** are used to store data held in a structured format within a database. You can use SQL Queries to add and retrieve data from the tables.

To learn about using the Maropost application interface to write SQL queries, see [**SQL Queries**](https://galaxy.maropost.com/s/article/SQL-Queries).

> **Note:** By doing a quick one-time setup, you can use a MySQL client for creating and managing Maropost’s relational tables. For information on how to set up relational tables access and the limitations of using a MySQL client, see Relational Tables Access.

### Managing Relational Tables

The Relational Tables index page enables you to create new relational tables and manage the existing relational tables. For step-by-step instructions on how to create a relational table, see [**Creating Relational Tables**](https://galaxy.maropost.com/s/article/Creating-Relational-Tables).

To access the Relational Tables index page, in Navigation, go to AUDIENCE and then select Relational Tables.

![RelationalTablesIndexPage.05T5g00000QzVlsEAF.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/RelationalTablesIndexPage.05T5g00000QzVlsEAF.png)
You can perform the following actions on the existing relational tables:

- **Export Table:** Use this action to export the relational table. You can select the table columns that you want to export. You can also select the 'Convert email to secure email (MD5 Hash)' to export the data in the MD5 Hash format.
- **Import Table:** Use this action to import data into the table. You can choose from the File Import and FTP Import options to perform the import.
- **Edit Table:** Use this action to edit the relational table.
- **Delete Table:** Use this action to delete the relational table along with the data permanently.
- **Truncate Table:** Use this action to delete the data from the relational table.
- **Duplicate Table:** Use this action to create a duplicate relational table.
- **Refresh Table:** Use this action to refresh the table and see the latest record count.

### Establishing a Relationship Between Relational Tables

You can add as many relationships as you wish between multiple relational tables. For example, if you have three separate tables: contact information, purchase information, and product details, you can establish relationships to connect all three tables to be able to pull and utilize the data within.

To establish a relationship between two relational tables, perform the following steps:

1. Click on a table name on the Relational Tables index page.
2. 
  On the Relational Tables Dashboard, go to the RELATIONSHIPS tab.
**Note**: The RELATIONSHIPS tab appears only when there is no email data-type column or no sendable column in your relational table. If your table doesn't have either of those columns, you must manually specify the link.

  ![RelationalTableDashboardRelationships.05T5g00000Tk5c5EAB.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/RelationalTableDashboardRelationships.05T5g00000Tk5c5EAB.png)
3. Click NEW RELATIONSHIP.
4. 
  On the dialog box, the first drop-down list shows the columns from your current table. The second drop-down list shows the other relational tables from which you can choose one to establish a connection. And the third drop-down list shows the columns from the other relational table.
**Note**: Only tables with sendable columns will appear in the second drop-down list.

  ![NewRelationship.05T5g00000Tk5drEAB.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/NewRelationship.05T5g00000Tk5drEAB.png)
5. By choosing the columns that will bridge the relational tables together, you can establish a link between the two tables.
6. Finally, click Save.

### Usages of Relational Tables

In Maropost, relational tables can be used in [**campaigns**](https://galaxy.maropost.com/s/article/Creating-Email-Campaigns), [**content**](https://galaxy.maropost.com/s/article/Content-Table-Tags), [**segments**](https://galaxy.maropost.com/kb/articles/818-creating-segments-with-next-gen-segment-builder), [**journeys**](https://galaxy.maropost.com/s/article/Introduction-to-Journeys), and [**data journeys**](https://galaxy.maropost.com/s/article/Introduction-to-Data-Journeys).

#### Using Relational Tables in Campaign

You can use relational tables as the source of contacts when sending a campaign. When doing so, remember to utilize your own unsubscribe mechanism and sync the unsubscribes within a relational table. Relational tables give you flexibility with writing your own SQL queries to modify the contact data within tables, but you cannot utilize Maropost's unsubscribe mechanism directly. To utilize our unsubscribe mechanism within relational tables, you would need to import the same contact emails (from the relational table) into a Maropost contact list and then create this segment:

In List: List A

AND

Table: Table A

Always send to this segment (and similar segments based on different lists & tables). By doing this, contacts can unsubscribe from List A, and segments only fetch 'subscribers', so the unsubscribes will not be included in campaigns.

#### Using Tables in Segments

Active contacts can be fetched from segments using the 'Tables' filter. In segments, columns for the corresponding table can be selected to add the specification for the contacts.

> **Note:** When creating a segment and selecting the ‘In Table’ filter, only tables with a sendable column, as well as tables LINKED to tables with sendable columns, will appear.

## Related Articles

**Relational Data Implementation:**

- [Creating Relational Tables](https://galaxy.maropost.com/kb/articles/914-creating-relational-tables) - Step-by-step table creation process
- [Introduction To Segments](https://galaxy.maropost.com/kb/articles/920-introduction-to-segments) - Use relational data in segmentation
- [Creating Segments With Next](https://galaxy.maropost.com/kb/articles/818-creating-segments-with-next) - Build segments with relational table data

**Advanced Segmentation:**

- [Creating Segments With Legacy Segment Builder](https://galaxy.maropost.com/kb/articles/919-creating-segments-with-legacy-segment-builder) - Alternative segmentation approach
- [Email Segmentation And List Cleansing](https://galaxy.maropost.com/kb/articles/1353-email-segmentation-and-list-cleansing) - Optimize contact targeting with relational data