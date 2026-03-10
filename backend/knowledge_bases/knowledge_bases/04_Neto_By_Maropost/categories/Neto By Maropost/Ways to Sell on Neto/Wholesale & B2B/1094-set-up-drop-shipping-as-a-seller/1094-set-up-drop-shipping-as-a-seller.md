---
title: "Set up Drop Shipping as a Seller"
articleID: 1094
category: "Ways to Sell on Neto > Wholesale & B2B"
knowledgeBase: "Neto By Maropost"
---

# Set up Drop Shipping as a Seller

Drop shipping is where a wholesaler sells to a reseller, but holds all the stock and dispatches it directly to the customer. This saves on costs to the seller by not needing a warehouse to hold stock, or staff to pick, pack, and dispatch orders. Neto can be set up to automate a number of these functions to make selling through drop shippers as a straight forward experience.

In this article you'll find all the information you need to set up drop shipping as a seller in your Neto control panel.

- [Install the Drop Shipping Add-on](https://galaxy.maropost.com/kb/articles/1094-set-up-drop-shipping-as-a-seller#add-a-new-drop-ship-warehouse)
- [Add a New Drop Ship Warehouse](https://galaxy.maropost.com/kb/articles/1094-set-up-drop-shipping-as-a-seller#step-1-add-a-new-warehouse-drop-shipper)
- [Define Notification Rules](https://galaxy.maropost.com/kb/articles/1094-set-up-drop-shipping-as-a-seller#step-2-define-notification-rules)
- [Zones](https://galaxy.maropost.com/kb/articles/1094-set-up-drop-shipping-as-a-seller#step-3-zones)
- [Test](https://galaxy.maropost.com/kb/articles/1094-set-up-drop-shipping-as-a-seller#step-4-test)
- [Drop Shipper User Role](https://galaxy.maropost.com/kb/articles/1094-set-up-drop-shipping-as-a-seller#drop-shipper-user-role)
- [Allocate Products to a Drop Ship Supplier](https://galaxy.maropost.com/kb/articles/1094-set-up-drop-shipping-as-a-seller#allocate-products)
- [Supplier Orderlines](https://galaxy.maropost.com/kb/articles/1094-set-up-drop-shipping-as-a-seller#orderlines)

## Install the Drop Shipping Add-on

To enable the drop shipping functions you'll need the drop shipping add-on. To install the drop shipping add-on:

1. In your Neto control panel click the **Addons** menu.
2. In the order management section, locate the Drop Shipping add-on and click the **Install** button.
3. Confirm by clicking the **Install** button in the pop-up window.

Once activated, a **Drop Ship Supplier** option will appear in the Warehouse settings in the control panel:

## Add a New Drop Ship Warehouse

A drop shipper is treated as warehouse, as it holds and dispatches products with its own inventory levels. Each drop shipper will need a separate warehouse to keep track of who is fulfilling sales orders, and set up their individual notifications. To add a new warehouse:

1. In your Neto control panel navigate to **Stock Control** > **Locations / Warehouses**
2. On the **View All Locations** page, click **Add New**
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupDropShippingasaSeller1.05T5g00000v3GxrEAE.png)
3. Select the **Drop Ship Warehouse** checkbox on the right of screen under the warehouse settings. This will then display drop ship related options and effectively change the it from being a regular warehouse to a drop ship warehouse.
4. Enter a **Location Ref ID**, **Name** and **Email Address** for the supplier (minimum recommended fields).
  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupDropShippingasaSeller2.05T5g00000v3GypEAE.png)

Your drop shipper is now created, and you can set up the notification rules.

## Define Notification Rules

With your warehouse page open, scroll down to the **Drop Ship Notifications** section and select the **Orders** checkbox. This will display a list of order notification options for you to set up (explained below).

![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupDropShippingasaSeller3.05T5g00000v3F3HEAU.png)

| Setting | Description |
| --- | --- |
| **Email Schedule** | The schedule at which orders are batched and sent to the supplier. Upon this schedule the system will automatically batch any orders not yet sent to the supplier using the filters/rules defined in the **Export Template (Order File & Filter)** section below.   			You can create your own schedules in **Settings & tools** > **All settings & tools** > **Task / Feed Schedules**. |
| **Email Template** | The template used for the email body that is sent to the supplier. Generally you will use the same template for all suppliers however if you require specific content per supplier this can be achieved by [setting up multiple templates](https://galaxy.maropost.com/kb/articles/1107-customise-email-and-print-templates#3) and assigning them appropriately. |
| **Export Template (Order File & Filter)** | This serves two purposes. Firstly it determines the format and structure of the order file that is attached to the order notification emails. Secondly it determines the rules by which orders are filtered prior to being sent. For example on the export template you can set at which status orders are sent to the supplier. Eg: When “fully paid” and in the “pick” status send order. You can use the default template if you wish, or [create a custom one](https://galaxy.maropost.com/kb/articles/40-add-and-edit-export-templates) to suit your supplier. |
| **PDF File Template** | The template used for the PDF orders that are attached to the order notification emails. By default this document looks much like a purchase order (PO), containing the shipping address to send the order to and the related products on the order. The customers order number is used as a reference/PO number. |

## Zones

Assign shipping zones to a warehouse/location so Neto can automatically assign order lines and movement jobs based on the shipping address of an order or asset movement. This is ideal for businesses who have multiple locations filling orders, or asset movements for the same item. To add zones to your warehouse/location:

1. Select the **zone courier** and then the **specific zone range**.
  ![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupDropShippingasaSeller4.05T5g00000v3GNLEA2.png)
2. Add all the zones this warehouse will service, and **Save** your changes.

## Test

To test that everything is working correctly:

1. Place an order for a product that is supplied by a drop ship supplier.
2. Process the order to a status that triggers order sending. Wait for the scheduled order send time to pass.
3. In your Neto control panel navigate to **Settings & Tools** > **All Settings & Tools**.
4. Select **Order Export Batches**. Here you should find a record indicating that the order has been successfully sent to your supplier.
  ![image5](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupDropShippingasaSeller5.05T5g00000v3H2SEAU.png)

> **Note:** You can also access the log for a specific drop ship supplier from the drop ship warehouses pages in Neto as per below image:

  ![image6](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupDropShippingasaSeller6.05T5g00000v3H2rEAE.png)

## Drop Shipper User Role

A user role called **Drop shipper** is available for staff user permissions. If you assign this role to a user, you can limit access to order lines and products in that users warehouse. Drop ship users can also create and edit products for their own warehouse without having access to other warehouse order lines or products.

You can assign a user the new **Drop shipper** permission role by editing the permission group they are assigned to.

1. In your Neto control panel select **Settings & Tools** > **Staff Users**.
2. Select the user you would like to assign as a drop shipper.
  ![image7](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupDropShippingasaSeller7.05T5g00000v3H6AEAU.png)
3. Change the **User Permission Group** to **Dropship Warehouse User** and click the **Save** button.
  ![image8](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupDropShippingasaSeller8.05T5g00000v3H6jEAE.png)

> **Important:** Check that the staff permission group only contains permissions you want for your drop shippers.

## Allocate Products to a Drop Ship Supplier

**Please Note**: The **Warehouse Locations**: add-on is required for these steps.

1. In your Neto control panel navigate to **Products** > **Active**.
2. Click on a product.
3. Scroll down to the **Warehouse and Picking** section of a products edit screen.
4. In the **Default Fulfilment Warehouse / Pick Locations** assign the warehouse you want to be the default warehouse for the product.

> **Important:** You must enter a location ID for the default warehouse location, it can be anything (eg: A1).

  ![image9](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupDropShippingasaSeller9.05T5g00000v3H9OEAU.png)

## Supplier Orderlines

On the order list page you can see that an order line has been sent to a supplier. It is indicated by a **cloud export** icon on the right of each order line as shown below:

![image10](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupDropShippingasaSeller10.05T5g00000v3HB5EAM.png)
The same icons appear as you select an order too.

You can re-send an order line to a supplier from within the export log (tick the re-send option next to the related record). Alternatively you can drill into an order in **edit** mode, expand the related order line, tick the **re-export** option and save. The next time your schedule runs, the order line will be exported / sent to your supplier.

![image11](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupDropShippingasaSeller11.05T5g00000v3CF5EAM.png)