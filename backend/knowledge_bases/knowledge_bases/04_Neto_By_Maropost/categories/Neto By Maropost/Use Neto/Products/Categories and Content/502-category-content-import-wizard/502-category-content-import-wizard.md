---
title: "Category & Content Import Wizard"
articleID: 502
category: "Use Neto > Products > Categories and Content"
knowledgeBase: "Neto By Maropost"
---

# Category & Content Import Wizard

Content and categories can be imported into Neto through either a simple (predefined) or complex (custom) file format. For either method you will need to convert the order into a file type that can be imported by our system, either CSV (preferred) or XML.

> **Note:** Neto partners can set this up for you. [Visit the job request portal](https://www.netohq.com/job-request-portal) for a quote.

## Simple Import

Simple imports use Neto's CSV template file to define the sales content data. Download and open our [category template file](https://developers.neto.com.au/assets/downloads/templates/category_import_popular.csv) and populate your data in the fields provided. For an explanation of the available fields, see [this article](https://galaxy.maropost.com/kb/articles/1442-content-and-category-import-and-export-fields).

We recommend only using the simple import if your data is not already in a format that Neto can read. To import content using the simple import:

1.   - Products > Product categories
  - Products > Brands
  - Webstore > Blog
  - Webstore > Web page

  In your Neto control panel navigate to the page which has the content you're importing, such as:
2. Click the **Import** button at the top of the page.
3. Click the **Choose File** button and upload the CSV file with your sales order data.
4. Click the **Upload file** button.
5. You'll see a preview of your file headers and the first row of data. Confirm that they match, and click the **Start import** button.

Your content will be imported into Neto. Allow 10 minutes for them to appear.

## Complex Import

Complex imports allow you to upload customised data files from other systems and platforms. Not only can you use it to populate information, it's also useful to make changes in bulk. To use complex import you will need to have your orders in a CSV file ready to upload, much like the simple import. To import your content:

1. In your Neto control panel navigate to **Settings & tools** > **Import data**.
2. Select the **Product Categories** radio button.
3. Click the **Perform complex import** button and choose **Start Data Import Wizard**.
4. Click the **Choose File** button and upload your CSV file. Then click **Continue to Next Step**.
5. ![Category & Content Import Wizard.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000PMa1nMAD.jpg)
  You'll now be on the field mapping step. On the left hand side are a list of the column names in Neto (database field names). To the right of them are column headers from your file. To ensure data from your file goes into the correct field in Neto, select the database field name that best matches your file field names.

  Once complete, click the **Continue to Next Step** button.
6. On the **Update Options** step you can change how certain fields are updated. First, use the content update uptions drop down menu to determine if you're going to add new content, or just update existing content. Then click the link for the advanced options. Here you can create parent content, set a node separator (default >), choose to create new categories and more.
  Set any update options you require, and click the **Continue to Next Step** button.
7. You're now ready to import your content file. If you want to save your settings select the checkbox and enter a template name. Click the **Process File Now** button to complete the import wizard.

The import process will be queued to run, and update the your content.

> **Note:** Click on the export process ID to view a page with the status of your import. Click the **Run Now** button on this page to start the process immediately.

## Content Path Examples

Structuring your content path for import can be difficult, especially if the format doesn't match Neto's feilds. Below are some examples of how the content path is structured for data import.

### Example 1:

If the main or top level category is called **Clothing** and the sub categories are **Mens Clothes** and **Womens Clothes**. The path to **Mens Clothes** would then be described as:

![Category & Content Import Wizard 1.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000PMa1sMAD.jpg)

### Example 2:

If the top level category is called **Homewares**, the sub category is **Bakeware** and the sub-sub-category is **Trays**, the path to **Trays** would then be described as: **Homewares** > **Bakeware**

![Category & Content Import Wizard 2.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000PMa2gMAD.jpg)

### Example 3:

If a category is a top level category, there will not be a path to the category. For example, **Clothing** would not have a path. This field will remain blank.

![Category & Content Import Wizard 3.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000PMa2qMAD.jpg)