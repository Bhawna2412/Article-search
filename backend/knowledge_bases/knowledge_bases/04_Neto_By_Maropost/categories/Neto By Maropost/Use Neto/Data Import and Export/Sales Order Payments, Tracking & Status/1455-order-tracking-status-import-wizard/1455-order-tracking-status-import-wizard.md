---
title: "Order Tracking Status Import Wizard"
articleID: 1455
category: "Use Neto > Data Import and Export > Sales Order Payments, Tracking & Status"
knowledgeBase: "Neto By Maropost"
---

# Order Tracking Status Import Wizard

You can automate order status updates and tracking information management through bulk imports, significantly reducing manual order processing time and improving fulfillment accuracy. This capability enables you to update multiple orders simultaneously with status changes, tracking numbers, and shipping details, helping streamline warehouse operations and customer communication.

When you use the order tracking status import wizard, you typically improve operational efficiency by processing hundreds of order updates in minutes rather than hours. This automation helps reduce order processing time and ensures accurate tracking notifications reach business customers promptly, supporting better fulfillment operations and customer order experience across your B2B ecommerce platform.

> **Note:** Neto partners can set this up for you. [Visit the job request portal](https://www.netohq.com/job-request-portal) for a quote.

## Import Wizard

You can import order shipping tracking updates using the complex import wizard. Use the [import tracking template](https://developers.neto.com.au/assets/downloads/templates/import_order_tracking.csv) to populate your data so that it can be imported. Consult the [table below]() for the required and available fields. To import tracking updates:

1. In your Neto control panel navigate to **Settings & tools** > **Import data**.
2. Select the **Order Shipping Tracking / Status Update** radio button.
3. Click the **Perform complex import** button and choose **Start Data Import Wizard**.
4. Click the **Choose File** button and upload your CSV file. Then click **Continue to Next Step**.
5. You'll now be on the field mapping step. On the left hand side are a list of the column names in Neto (database field names). To the right of them are column headers from your file. To ensure data from your file goes into the correct field in Neto, select the database field name that best matches your file field names.

> **Note:** The action field changes the order status. Available options are Backorder, Pick, Pack, or Dispatched. This is a required field.

  Once complete, click the **Continue to Next Step** button.
6. In the **Update Options** section, you can choose whether or not you with to **Allow updates to unapproved orders**. When ready, click the **Continue to Next Step** button.
7. You're now ready to import your customer file. If you want to save your settings select the checkbox and enter a template name. Click the **Process File Now** button to complete the import wizard.

The import process will be queued to run, and update the your sales orders.

> **Note:** Click on the export process ID to view a page with the status of your import. Click the **Run Now** button on this page to start the process immediately.

## Import Fields

| Field Name | Field Type | Field Description | Field Length | Example Data |
| --- | --- | --- | --- | --- |

| Field Name | Field Type | Field Description | Field Length | Example Data |
| --- | --- | --- | --- | --- |
| *Order ID | String | The order number the tracking tracking details will be applied to. This is a required field. | 15 | N10007 |
| *Action | String | Changes the order status. Available options: Backorder / Pick / Pack / Ship. This is a required field. | 9 | Ship |
| Do Not Send Email | Boolean | If set to Yes, the tracking email will not be sent to the customer. | 3 | No |
| Skip Record | Boolean | If set to Yes, the tracking details will not be import for this order. | 3 | No |
| *SKU | String | Used to apply shipping details to a product line on the order. **Custom Label/Code**, **Orderline Number** or **Orderline Reference** can be used instead of the SKU. | 25 | ABC123 |
| Custom Label/Code | String | Used to apply shipping details to a product line on the order. If you want to apply shipping to all products on the order, use the * character. | 30 | E14-K |
| Quantity Picked | Number | The number of products with the above SKU that have been picked. | 10 | 3 |
| Quantity Backordered | Number | The number of products with the above SKU that are on backorder. | 10 | 1 |
| *Quantity Shipped | Number | The number of products with the above SKU that have been shipped. Only required if you are importing the SKU. | 10 | 5 |
| Bin Location | String | The Pick Bin number used when picking the order. | 10 | A34G |
| Item Notes | String | Internal notes about the product. | 255 | Supplied green instead. |
| Item Serial Number | String | The serial number for the product. | 50 | A79FG412G |
| Orderline Number | Number | Used to apply shipping details to a product line on the order. This is a unique index number for the orderline starting at zero. | 3 | 1 |
| Orderline Reference | String | Used to apply shipping details to a product line on the order. This is the Order ID followed by the Orderline Number and optionally the part_id. It is in the format:[Order ID]-[Orderline Number] or [Order ID]-[Orderline Number]-[part_id] | 40 | N10007-1 |
| *Shipping Service | String | Must match the Service / Rates table name or ID number. | 50 | Australia Post Standard |
| *Tracking Number | String | Consignment note number or tracking number from the courier. | 255 | A7B2004512 |
| Date Shipped | Date time | The date and time the product was shipped (YYYY-MM-DD HH.MM) | 17 | 2018-01-25 3.44pm |

## Related Articles

- [Proof of Delivery Data Import Wizard](https://galaxy.maropost.com/kb/articles/1454-proof-of-delivery-data-import-wizard)
- Sales Order Import and Export Fields
- [Sales Orders Export Wizard](https://galaxy.maropost.com/kb/articles/1457-sales-orders-export-wizard)