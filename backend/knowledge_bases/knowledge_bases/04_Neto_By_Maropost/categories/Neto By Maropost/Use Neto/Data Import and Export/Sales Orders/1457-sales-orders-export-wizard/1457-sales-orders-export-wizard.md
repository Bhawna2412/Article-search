---
title: "Sales Orders Export Wizard"
articleID: 1457
category: "Use Neto > Data Import and Export > Sales Orders"
knowledgeBase: "Neto By Maropost"
---

# Sales Orders Export Wizard

You can export sales order data to support reporting, financial analysis, or integration with third-party systems like accounting software and business intelligence tools. This export capability provides complete visibility into your order history with customizable field selection and filtering, helping you analyze sales performance, prepare financial records, or automate data synchronization workflows.

When you use the sales orders export wizard, you typically improve operational efficiency by accessing precisely the order data you need in formats compatible with external systems. This helps streamline accounting integration, enables data-driven decision making, and reduces manual data entry for reporting purposes, supporting better financial management and business intelligence across your B2B operations.

Sales orders can be exported into a CSV (comma separated values) file so that you can manually report or import into a third party system. You can also export sales orders to make changes, and then import back into Neto. There's 2 ways to export your sales orders:

- [Simple Export](https://galaxy.maropost.com/kb/articles/1457-sales-orders-export-wizard#complex-export)
- [Complex Export](https://galaxy.maropost.com/kb/articles/1457-sales-orders-export-wizard#related-articles)

> **Note:** Neto partners can set this up for you. [Request a data service job](https://www.netohq.com/job-request-portal) for a quote.

## Simple Export

The simple export is best used only for reporting, as fields can't be customised as much and filters are limited. Third party applications will likely have a specific format required in which case the complex export is better suited.

To use the simple export:

1. In your Neto control panel navigate to **Sales orders** > **View orders**.
2. Use the filters to display the sales orders you want exports.
3. Click the arrow next to the **Export** button at the top of the page, and choose either **Export current results (all fields)** or **Export current results (popular fields)**.

> **Note:** You can also use the **Export all orders** to get a complete file containing every sales order in your Neto account.

The CSV file of your sales orders will be created and downloaded to your computer automatically.

## Complex Export

The complex export wizard gives you a lot more control over the fields that are exported, filters, and allows you to set up schedules to export on a regular basis. To use the complex export wizard:

1. In your Neto control panel navigate to **Settings & Tools** > **Export Data**.
2. Select the **Orders** radio button.
3. Click the **Perform complex export** button and choose the **Start Data Export Wizard** option.
4. Enter a name for your file and click the **Continue to Next Step** button.
5. You now need to choose which sales order fields you want to export. Click the **Add New Field To File** button, and choose the fields from the drop down menus.
  You need to select a field table first (e.g. orders, products, payments etc) and then choose the field name.

> **Note:** Be sure to include **Orders Table** > **Order ID** as this is used as the unique identifier for your sales orders.

6. Repeat the previous step and add all the fields you need in your file. When complete, click **Continue to Next Step**.

> **Note:** You can change the column header for each field on the right hand side of the page. This is useful if you export to a third party system that has specific field name requirements.

7. You can now determine which sales orders are included in the file by selecting filters.
  For example, add dates to the Date Placed to and from fields to only export sales orders placed between those dates.

  When you've finished selecting your filters click the **Continue to Next Step** button.
8. In the **Send Export File To** field, select how you want to receive your sales order export file.

> **Note:** Choose Local URL to save the file in your site assets, so it can be downloaded when ready. You'll be shown a URL where it can be downloaded.

  Make sure you add any required details (e.g. email address, FTP username/password) depending on your selection.
9. Select the checkbox if you want to save the export settings (name, fields, filters etc) so that you can run the export again later. If you do, enter a template name and optionally select an automated export schedule.
10. Click the **Export Now** button.

The export process will be queued to run, create the file, and deliver it to your chosen location.

> **Note:** Click on the export process ID to view a page with the status of your export. Click the **Run Now** button on this page to start the process immediately.

## Related Articles

- [Import & Export Overview](https://galaxy.maropost.com/kb/articles/668-product-import-wizard)
- [Sales Orders Import Wizard](https://galaxy.maropost.com/kb/articles/1580-sales-order-import-wizard)
- Sales Order Import and Export Fields