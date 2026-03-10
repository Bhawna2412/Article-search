---
title: "Managing Outlets and Stores"
articleID: 252
category: "Store Settings > Outlet"
knowledgeBase: "Retail Express"
---

# Managing Outlets and Stores

You can configure and manage all retail locations within **Retail Express** by setting up outlet records that define store details, operating parameters, addresses, and location-specific settings for multi-store operations. Properly configured outlets enable accurate inventory tracking, location-based reporting, and appropriate transaction processing across your retail network, supporting both single-location and multi-location retail business models.

Setting up outlets correctly with complete address information, operating details, and appropriate system configurations helps retail operators manage multi-location inventory, sales, and reporting effectively across their entire retail operations network.

An **Outlet** refers to a Store or Warehouse within Retail Express. There are two types of Outlets:

- **Outlet **- processes sales as well as maintain inventory
- **Unmanned Warehouse - **holds stock but doesn't process any sales. If you have a Warehouse that still processes sales (e.g. eCommerce/web store sales) this would be considered an Outlet, not an Unmanned Warehouse

[Contact us](https://retailexpress.com.au/contact/)to add new Outlet to your system

[▶ Embedded Video](https://player.vimeo.com/video/302374270?badge=0&autopause=0&player_id=0&app_id=58479)

## Edit Outlet Details

To edit/update your Outlet information:

1. Navigate to **Settings > Locations/Outlets > Outlets**
2. Click the **Edit** (pencil) icon next to the Outlet
3. **Update** the information in the fields at the top
4. Click **Save**

![settings_outletconfiguration.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTlREAU.jpg)

## Outlet Fields

|  |  |
| --- | --- |
| **Field** | **Definition** |
| Outlet Name | The name of the outlet, which can be your store location or Company Name. This is used both internally and externally. |
| Outlet specific information:  - Company Name - Company Registration Number - Company Reg. Number Label - Phone - Fax - Email - Address Lines 1 - 3 - Suburb - State - Post Code - Country - Bank Name - Bank BSB - Bank Account Name - Bank Account Number | Used to enter outlet-specific information; if the fields are blank the system will default to the information in the Global settings. If you don't require unique information per Outlet, or you're a single store Retailer, you can leave these fields empty. Bank details will be displayed on:  - Outlet Specific Statements (if enabled in your Global settings) - A4 Invoices from POS (if Outlet-specific details enabled in the POS Settings) |
| Default E-Mail Template | The email template used to send invoices and quotes from POS (refer to POS Settings - Email Template Manager for more information). |
| Billing Type | The Retail Express licence assigned to the Outlet.  - Outlet - a store used to trade, and has access to all of the Retail Express features - Unmanned - used as a storage location only   > **Note:** Unmanned Outlets cannot be used to process sales. |
| FOB Currency | Freight On Board Currency or Free On Board currency. Related to the currency of the price invoiced or quoted before placing the goods on board at the port of departure for delivery. |
| Store Type | Used for reporting and visibility of the variety of sectors of the business. Options:  - Retail - Wholesale - Distribution Centre |
| Logo Profile | The logo on invoices and receipts - this can be outlet-specific if required. Refer to the article System Settings - Logo Configuration for more information |
| External Reference | This field is used to easily identify Outlets when retrieved via an API e.g. the GetPurchaseOrdersDetailed call for Inventory Planning will retrieve the External Reference for an Outlet. |
| Minimum Replenishment Quantity | Used in the Stock Replenishment via Transfers feature; the system will only create a Transfer if the total reorder quantity is equal to or greater than this value. |
| Enabled | Indicates if the outlet has an active licence with Retail Express |
| Display Address on Invoice | If enabled all sales created via the selected Outlet at POS will display the Outlet specific address and contact details (as entered on this page) displayed on Receipts and Invoices. This overrides the Global Settings.  			Untick the option to display the default Global Settings address and contact details. |
| Default Fulfil Location | Sales created at POS with the Fulfilment Method set to either Home Delivery or Warehouse Pickup will automatically default to the entered Fulfilment Location  > **Note:** the Fulfilment location can be manually selected at POS if required. |
| Default Source Location | Sales created at POS with the Fulfilment Method set to either Home Delivery or Warehouse Pickup, will automatically default to the entered Source Location  > **Note:** The Source location can be manually selected at POS if required. |
| Outlet Comments for Purchase Orders | Used to add default comments on all Purchase Orders. |
| Outlet Comments for Receipts and Invoices | Used to add default comments on all Invoices, Quotes and Receipts generated from POS. Typically used for Warranty, Layby Terms and outlet specific bank details, etc. |