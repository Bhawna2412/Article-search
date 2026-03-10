---
title: "Proof of Delivery Data Import Wizard"
articleID: 1454
category: "Use Neto > Data Import and Export > Sales Order Payments, Tracking & Status"
knowledgeBase: "Neto By Maropost"
---

# Proof of Delivery Data Import Wizard

You can automate the process of uploading tracking numbers and delivery information to sales orders, improving customer communication and reducing manual data entry. This import capability helps streamline operations by automatically triggering delivery notification emails to customers, enhancing the order tracking experience while reducing administrative overhead.

When you use the proof of delivery import wizard, you typically improve operational efficiency by processing bulk tracking updates in minutes rather than manually updating individual orders. This automation enables you to maintain accurate delivery records and provide timely shipment notifications, supporting better customer relationships and operational visibility across your B2B fulfillment process.

The proof of delivery data import wizard lets you upload tracking numbers to your sales orders and trigger an email to your customers that their order has been sent.

## Import Wizard

Proof of delivery data can only be imported through the complex import wizard. Consult the [table below]() to create a CSV file with the required fields. To import your delivery data file:

1. In your Neto control panel navigate to **Settings & tools** > **Import data**.
2. Select the **Proof Of Delivery Data** radio button.
3. Click the **Perform complex import** button and choose **Start Data Import Wizard**.
4. Click the **Choose File** button and upload your CSV file. Then click the **Continue to Next Step** button.
5. You'll now be on the field mapping step. On the left hand side are a list of the column names in Neto (database field names). To the right of them are column headers from your file. To ensure data from your file goes into the correct field in Neto, select the database field name that best matches your file field names.
  Once all the fields you want are mapped, click the **Continue to Next Step** button.
6. In the update options step select the email template that will send the tracking information to the customer. Then click the **Continue to Next Step** button.
7. You're now ready to import your customer file. If you want to save your settings select the checkbox and enter a template name. Click the **Process File Now** button to complete the import wizard.

The import process will be queued to run, and update the tracking information on your .

> **Note:** Click on the export process ID to view a page with the status of your export. Click the **Run Now** button on this page to start the process immediately.

## Import Fields

| Field Name | Field Type | Field Description | Example Data |
| --- | --- | --- | --- |
| Consignment / Tracking Number* | String | The tracking number that will be applied to the sales order. | 11223344556677 |
| *Order ID | String | The order number the tracking tracking details will be applied to. This is a required field. | N10007 |
| Shipping Carrier* | String | The shiping carrier the sales order has been shipped with. | TNT |
| Skip Record | Boolean | If set to **Yes**, the tracking details will not be import for this order. | 3 | No |