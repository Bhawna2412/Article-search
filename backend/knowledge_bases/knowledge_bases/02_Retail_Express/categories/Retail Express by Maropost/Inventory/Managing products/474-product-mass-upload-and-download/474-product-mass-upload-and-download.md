---
title: "Product Mass Upload and Download"
articleID: 474
category: "Inventory > Managing products"
knowledgeBase: "Retail Express"
---

# Product Mass Upload and Download

You can accelerate catalog management through Mass Upload and Download capabilities in **Retail Express**, which enable bulk product creation, updates, and data synchronization through Excel-based workflows. This bulk data management helps retail operators efficiently maintain large catalogs and process supplier updates, with effective mass upload/download use typically achieving significant time savings and improved data accuracy across Australian retail operations.

Mass Upload and Download functionality in **Retail Express** enables retail operators to manage product data at scale through familiar spreadsheet interfaces, helping ensure efficient catalog maintenance and systematic data updates. This bulk processing capability helps ensure your retail operations can efficiently onboard new products, update pricing, and maintain catalog accuracy while reducing manual data entry requirements.

Retail Express has introduced enhanced Mass Upload and Download capabilities, tailored to streamline data management processes with efficiency and precision. With the Product Mass Upload tool featuring field mapping and on-screen validation for upload errors, manage your product details in bulk.

Mass Download tool has been introduced to effortlessly download existing product data, update records, and seamlessly add or alter information into the Retail Express system.

These enhancements address critical issues by significantly improving implementation speed through the automation of tasks like splitting large datasets and data validation, previously done manually. Moreover, they enhance data availability, eliminate the need for manual data entry and scripting, and improve performance, reducing timeout errors when handling large datasets.

Product Mass Upload offers:

- **Column Mapping and Matching: **Introduced a user-friendly interface where customers can map columns in their data files to the corresponding fields in the system's database. This eliminates the need for customers to manually align their data with the system's requirements, making the data upload process faster and more straightforward.
- **Improved Data Integration: **The feature simplifies the integration of data from various sources and formats. Customers can easily map and import data that may come in different structures, saving time and effort. This adaptability reduces the effort needed to prepare data for upload, allowing users to work with data in a way that suits their specific needs.
- **Progress Visibility: **Users now have visibility into the progress of their uploads and downloads. They can gauge the time required for the import to take effect, reducing uncertainty and enhancing overall user experience.
- **On-Screen Error Handling: **Errors are now visualized on-screen, making it easier for users to identify issues. Additionally, bulk actions to address these errors are available directly on the screen, streamlining the correction process.
- **Selective Line Alerts:** In the case of data imports, users now receive alerts only for failed lines, as opposed to the system failing entire imports. This allows for more granular error handling.
- **Concurrency Alerts: **If two users attempt to import the same entity upload simultaneously, the system provides alerts and prevents queuing, ensuring smooth data management and avoiding conflicts.

## **Before You Begin**

- Only **one upload** can be processed at a time per database
- Product Data must be saved in a **CSV file** format
-   - When enabled, the mandatory fields for creating new products are toggled ON and must be mapped in order to continue.
  - A list of **Upload fields and mandatory data requirements** can be found with an asterisk (*) mark on the field.

  When creating new products, a toggle switch can be used to signify that the list contains new items.
- Mass Upload is not compatible with the legacy Retail Express (Inventory > Mass Upload) Excel Upload Template - download a new CSV template to upload your data.

## How to Access Product Mass Upload

To upload your data:

1. Navigate to **Inventory > Product Management > Mass Upload**

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/MUDIM1.05TJ1000007Vvk6MAC.png)
2. Under **Mass Upload - Product Master Data **> Use the 'Browse for File' option to select your file or use the 'Drop your files here to Upload ' option.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/MUDIM2.05TJ1000007VvkBMAS.png)
You can import existing CSV files and map the fields (additionally you can also use **Download Template **for a blank file).

Once you upload the file, the system will ask you to map the column with the input value of the system.

Once the column mapping is completed, the system will validate the data provided. In case there is an error, it will reflect the error with the details and on the next page, users will be able to edit the input value and proceed further.

To remove specific product information such as colour or custom fields, simply enter "CLEAR DATA" into the corresponding cell. During the upload process, this entry will be recognized, and the specified data will be removed from the product.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/MUDIM3.05TJ1000007VvPEMA0.png)
After the data has passed validation, users will see the screen with the success message **Your data has passed validation. Please click Continue below when you are ready to start the upload.**

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/MUDIM4.05TJ1000007VvkfMAC.png)Click Continue, to proceed further

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/MUDIM5.05TJ1000007VvkkMAC.png)After the upload is complete, the user will see Upload Progress - 100% (Success Page). Now the products have been added to the system and will be visible in the Back Office under **Reports > Stock Reports > Product Detail Log.**

For more information about the Product Detail Log, please click here.

## Product Mass Upload Video

**Instructions only, video has no sound*

## Product Mass Download

To edit existing inventory details, users can use the Mass Download option to download the CSV file. To use the Product Mass Download option:

1. Go to Inventory > Product Management > Mass Download
2. Click on the Filter icon to filter required product data

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/MUDIM7.05TJ1000007VvxZMAS.png)
Only one download per user is permitted on a database at any given time. Ensure you access the latest customer data by selecting "Start New Download" with each request.

### Columns Available on the Download Page:

- Many fields are hidden in the default view and can be enabled using the column picker.
-   - Use drag and drop to re-arrange the columns as needed.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/MUDIM8.05TJ1000007VvxeMAC.png)

  Column selections and a are retained within the specific browser on the PC you are using, provided you do not clear the browsers cache.

### Filters Available on the Download Page:

To download the data, utilize the filters to refine your search and select products according to your specific criteria.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/MUDIM9.05TJ1000007VvyDMAS.png)

### Some of the key filters available in the filter menu are:

- Is Enabled
- Is Core Product
- Max Discount Rule
- Replenishment Method
- Supplier
- Product Type
- Brand
- Season
- Size
- Colour
- Export to Web
- Sales Channel
- Date Created
- Last Modified
- And many more!

Once you've finalized your filter selections, click "Apply" to view the number of results in the bottom right-hand corner. You can sort your results by clicking on the column headings to arrange them in order (multiple columns can be sorted) or rearrange them by clicking and dragging them.

Next, click on 'Export All Columns' or 'Export Visible Columns' to initiate the generation of the CSV file. You can monitor the progress of the file generation with the progress bar.

Once the product download process is complete, you will see the option to 'Download CSV' Click on the Download CSV button to download the CSV file on your computer.

The "Download Progress" window will remain open until you select "New Download" at the bottom of the screen.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/MUDIM10.05TJ1000007Vvz6MAC.jpeg)

## Enhancements for Handling Large Datasets

We've introduced significant improvements to accommodate larger datasets:

- **CSV File Format**: We have transitioned from Excel templates to CSV files, enabling the efficient handling of over a million records.
- **Background Processing**: Uploads and downloads are now processed in the background. You can leave the page and return later to check progress via a status bar.

Additionally, certain fields in the CSV files will include an apostrophe (') to prevent programs like Microsoft Excel from misformatting data, such as removing leading zeroes or changing the format to scientific notation.![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/MUDIM6.05TJ1000007VwDcMAK.png)

## Mass Download Video