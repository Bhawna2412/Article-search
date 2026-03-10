---
title: "Import & Export Data via API or FTP"
articleID: 1461
category: "Use Neto > Data Import and Export > Overview import export"
knowledgeBase: "Neto By Maropost"
---

# Import & Export Data via API or FTP

Export and import processes can be scheduled and automated to run at preferred times. The data generated can then be automatically transmitted to third party systems. There are two ways to get data from and push data to the Neto platform:

> **Note:** Neto partners can set this up for you. [Request a data service job](https://www.netohq.com/job-request-portal) for a quote.

## API

The Neto application programmer interface (API) enables third party software to interact with the Neto Digital Commerce Platform. Currently all transactions are performed via HTTPS POST.

You can **Add**, **Update **and **Get data** using the API.

We are intent on continually updating and improving the API in it's current release. There are functions not available through the API and until such time as we have made all functions available the API will remain in development.

### 1. Get Set up

- Signup for a [free Neto trial account](http://www.neto.com.au/)
- Generate an API key. In your Neto control panel navigate to **Settings & tools**​ > **Users**​ > **Select the User** > **Generate API**.

> **Note:** Staff user API keys let you restrict access and tracks error logs.

### 2. Explore

- Explore the API calls we have available [here](https://developers.neto.com.au/documentation/engineers/api-documentation/introductions-and-getting-started).
- Use a client such as [POSTMAN](http://www.getpostman.com/) to test API calls against your account

### 3. Build

- Build your integration
- Checkout our recommended workflows for different app types
- Ask us if you get stuck, require additional fields, calls or advice

## FTP (File Drop / Pickup)

Neto can pickup data from and put data files into any FTP location. The following data can be imported / exported this way.

- Sales orders and orderlines
- Shipping tracking information
- Customers
- Products / inventory

### Export Data

Neto has the ability to create export files in any flat file format including `.xml, .csv, .txt` etc. These files can be built on the fly using the export file builder which supports our tag and function library. All available database fields can be used in export files. Once created, an export file template can be used for future file creation.

### Import Data

Neto has the ability to map to practically any flat file format including `.xml, .csv, .txt` etc. Once mapped a mapping template can be created and used for future import of files in the same format.

Importing and exporting data can happen at a pre-defined schedule or processes can be run manually. For example, you could have the import system set to pickup an order file every 15 minutes from a set FTP location and then move the file to an archive folder once processed.

### Example work flow 1 - Add / Update Products

[Set up an import template to import a product file.](https://galaxy.maropost.com/kb/articles/668-product-import-wizard)

- The product file would contain information such as SKU, name, description, price and image URL.
- The import template would be setup to "add new / update existing" products.
- Setup a schedule to poll an FTP location periodically to pickup and process the product file data.
- Once created, set the system to archive the product file in an archive folder.

### Example work flow 2 - Adding Orders and Exporting Tracking Information

1. The order file would contain order details such as order ID, address information and order line data.
2. The import template would be setup to "add new" orders and "ignore" duplicates.
3. Once processed, set the system to archive the product file in an archive folder.
4. Once created, orders would be processed and dispatched using the Neto  platform.

### Example work flow 3 - Setup an export template to export order dispatch notifications

1. The dispatch notifications file would contain tracking numbers related to dispatched orders.
2. Setup a schedule to put the dispatch notification file at an FTP location periodically.
3. A 3rd party system would then access this location to get the dispatch notification files to update its own systems.
4. Unique identifiers such as Order ID and product SKU would be used relate data between the two systems.

## Template FTP Location

It's often easiest to create import and export templates using the complex wizard, and saving the settings at the end. If you need to add FTP details to the template afterwards:

1. In your Neto control panel navigate to **Settings & tools** > **All Settings & Tools**.
2. On the **Settings & Tools** page, locate and select **Data Import Template**, or **Data Export Template**.
3. Select the template you would like to change.
4. Scroll down and click on the **Import Method & Schedule** or **Export Method & Schedule** tab.
5. Select **FTP** from the drop down menu.
6. In the field next to **File Location** enter the FTP address of the file. The address needs to be the full path to the location of the file, including the server, folders, and filename with extensions.
  e.g. `ftp.myftpserver.com.au/productfiles/myproductfile.csv`
7. If the FTP account requires a username / password to access, enter the **Login Username** and **Login Password**.
8. Next to schedule select when you would like to import or export to occur. You can choose one of the preset schedules or click on **View All Schedules** to create a new schedule.
9. Enter a number next to **Priority** to set the priority of the task. The lower the number, the higher the priority.

> **Note:** You can also set a **Move To** address to put the file somewhere once imported It's a handy way to keep a copy of data yo're importing, especially if the original file gets overwritten.

  e.g. `ftp.mywebsite.com.au/assets/backups/`
10. Click the **Save** button to confirm your changes.