---
title: "SQL Queries"
articleID: 913
category: "Contact Management > Relational Tables"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# SQL Queries

SQL Queries enable advanced audience segmentation by analyzing complex data relationships that simple list selection cannot achieve. You can segment contacts based on aggregated behaviors like average purchase amounts, first interactions, or most recent activities, which helps create more targeted email campaigns that drive better engagement than basic demographic segmentation alone.

This advanced segmentation capability enables you to deliver highly relevant messaging based on behavioral patterns and calculated metrics, helping improve campaign performance through more precise audience targeting and personalized content delivery.

**SQL Queries** are used for moving data from one relational table to another. A good example of this is when you want to select contacts based on any aggregation of data type, particularly with numerical values.

### Usage of SQL Queries

Suppose you are storing your customers' purchase history data in relational tables to augment the data stored in the Product/Revenue database. You'll notice when using Tables in segmentation that selection is based on individual records. But what happens if you want to segment your contacts based on the average purchase amount?

This scenario is an example of data aggregation that you would use SQL Queries for. In this case, you'd write a SQL statement that pulls data out of your relational tables, calculates the average purchase amount per contact, and then inserts the data into another relational table.

Another good use for SQL Queries is when you want to select your contacts based on Date/Time. Suppose you are using relational tables to store data each time a contact applies for a job on your site. Using Tables in segmentation will enable you to select contacts who applied for a job in any given date range. But what about when you want to select your contacts based on the very first job application? Or based on the most recent job application?

Again, that's where SQL Queries come into play. You'd simply write a SQL statement that selects contacts based on their very first job application, and then insert it into another relational table.

### Managing SQL Queries

In Maropost, you can create and manage your SQL Queries on the SQL Queries index page. In Navigation, go to AUDIENCE, and select SQL Queries.

![SQL_Queries_Index_Page.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWbO.05T5g00000BkWbOEAV.png)

### Creating a SQL Query

To create a new SQL Query, follow these steps:

1. In Navigation, go to AUDIENCE, and select SQL Queries.
2. On the SQL Queries index page, click New Query.
3.   - **Name** - A name for the SQL Query.
  - **Query** - The SQL statement that pulls the data out of your relational tables.
  - **Targets** - The names of the relational tables that will store the data resulting from the SQL statement.
  - **Update Type** - The type of update indicates whether the update is an Overwrite (overwrites the existing data present in the target table) or Append (appends to the existing data present in the target table).

  On the New Relational Query page, enter your query details.

  ![New_Relational_Query.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXFo.05T5g00000BkXFoEAN.png)
4. Click Save.

### Executing a SQL Query

There are two ways to execute a SQL Query:

- You can select the **Execute Query** option from the Actions drop-down menu on the SQL Query index page.
- You can use a [**SQL Query action widget**](https://galaxy.maropost.com/s/article/Data-Journey-Actions) in [**Data Journeys**](https://galaxy.maropost.com/s/article/Introduction-to-Data-Journeys).

## Related Articles

**Advanced Segmentation:**

- [Creating Segments With Next](https://galaxy.maropost.com/kb/articles/818-creating-segments-with-next) - Use SQL query results for advanced segmentation
- [Creating Segments With Legacy Segment Builder](https://galaxy.maropost.com/kb/articles/919-creating-segments-with-legacy-segment-builder) - Apply SQL data to segment creation
- [Creating Relational Tables](https://galaxy.maropost.com/kb/articles/914-creating-relational-tables) - Set up tables for SQL query operations

**Contact Data Management:**

- [Capturing Contact Profile Attributes](https://galaxy.maropost.com/kb/articles/996-capturing-contact-profile-attributes) - Collect data for SQL analysis
- [Contacts Overview New](https://galaxy.maropost.com/kb/articles/9-contacts-overview-new) - Understand contact data structure for queries