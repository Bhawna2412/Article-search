---
title: "Product Export Wizard"
articleID: 501
category: "Use Neto > Products > Import and Export - Products"
knowledgeBase: "Neto By Maropost"
---

# Product Export Wizard

Products can be exported into a CSV (comma separated values) file so that you can manually report or import into a third-party system. You can also export product lists to make changes and then import back into Neto. There's 2 ways to export your product details.

> **Note:** Neto partners can set this up for you. [Visit the job request portal](https://www.netohq.com/job-request-portal) for a quote.

## Simple Export

The simple export is best used for reporting, as fields can't be customised as much and filters are limited. Third party applications will likely have a specific format required in which case the complex export is better suited.

To use the simple export:

1. In your Neto control panel navigate to **Products** > **View products**.
2. Click the **Export** button at the top of the page.

> **Note:** Filters applied to the product list will not be carried over to the export results.

3. Choose either CSV with popular fields or CSV with all fields and click the **Preview** button.
4. Clear any checkboxes for fields you don't want exported, and click the **Export** button.
5. The CSV file of your product will be created. Click the **Download** button when it appears, to save the file to your computer.

## Complex Export

The complex export wizard gives you a lot more control over the fields that are exported, filters, and allows you to set up schedules to export on a regular basis. To use the complex export wizard:

1. In your Neto control panel, navigate to **Settings & tools** > **Export data**.
2. Select the **Products** radio button.
3. Click the **Perform complex export** button and choose the **Start Data Export Wizard** option.
![Screen Shot 2024-09-26 at 1.53.42 pm.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000GoHftMAF.jpg)
4. Enter a name for your file and click the **Continue to Next Step** button.
5. You now need to choose which product fields you want to export. Click the **Add New Field To File** button, and choose the fields from the drop down menus.
  You need to select a field type first (e.g. **Product Data*) **and then choose the field name (e.g. **SKU**)

  ![Screen Shot 2024-09-26 at 2.14.52 pm.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000GoHiFMAV.jpg)

> **Note:** Be sure to include the **Product Data** > **SKU** field as this is used as the unique identifier for your products.

6. Repeat the previous step and add all the fields you need in your file. When complete, click **Continue to Next Step**.

> **Note:** You can change the column header for each field on the right hand side of the page. This is useful if you export to a third party system that has specific field name requirements.

  ![Screen Shot 2024-09-26 at 2.15.30 pm.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000GoHlmMAF.jpg)
7. On step 3 of the import process, you can now implement filters to determine which products are included in export file.

> **Note:** To filter by multiple values separate them with a space (e.g `SKU1 SKU2 SKU3`).

  ![Screen Shot 2024-09-26 at 2.24.58 pm.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000GoHqXMAV.jpg)

  When you've finished selecting your filters click the **Continue to Next Step** button.
8. In the **Send Export File To** field, select how you want to receive your product export file.

> **Note:** Choose Local URL to save the file in your site assets, so it can be downloaded when ready. You'll be shown a URL where it can be downloaded from.

  Make sure you add any required details (e.g. email address, FTP username/password) depending on your selection.
9. Select the checkbox if you want to save the export settings (name, fields, filters etc) so that you can run the export again later. If you do, enter a template name and optionally select an automated export schedule.
![Screen Shot 2024-09-26 at 2.28.44 pm.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000GoHuUMAV.jpg)
10. Click the **Export Now** button.

The export process will be queued to run, create the file, and deliver it to your chosen location.

> **Note:** Click on the export process ID to view a page with the status of your export. Click the **Run Now** button on this page to start the process immediately.

## Troubleshooting

### Scientific Notation Issues

Spreadsheet programs have different cell data types like General / Standard, Text, Number, Currency and Dates. Since the program does not know what type of data is in each cell, it tries to guess. In most cases it assigns the general or standard cell type to each cell.

This cell type makes changes to numbers that are being imported. For example:

- 028263 will be imported as 28263 - dropping the leading zero. This is an issue when 028263 is the SKU for a product.
- 111222333444 will be imported as 1.11E+11 - converting the number into scientific notation. Scientific notation is used by scientists to display very small or large numbers.

To avoid the program converting the numbers, the CSV file will need to be imported rather than opened.

- [Microsoft Excel](https://support.office.com/en-us/article/Import-or-export-text-txt-or-csv-files-5250ac4c-663c-47ce-937b-339e391393ba)
- [Open Office](http://openoffice.blogs.com/openoffice/2006/02/opening_csv_or_.html)
- [LibreOffice](https://help.libreoffice.org/Calc/Importing_and_Exporting_CSV_Files)
- [Google Sheets](https://support.google.com/docs/answer/40608?hl=en)