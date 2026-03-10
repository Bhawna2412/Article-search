---
title: "Ship Sales Orders from the Closest Warehouse"
articleID: 1045
category: "Set up Neto > Shipping > Maintenance & Tweaks - Shipping"
knowledgeBase: "Neto By Maropost"
---

# Ship Sales Orders from the Closest Warehouse

**Please Note**: This article requires the **Warehouse Locations** addon.

If you have multiple warehouses, it's important to setup your default fulfillment location so that you can ship from the location that's closest to your customer. If you haven't set up your warehouses already, see our [guide on adding new warehouse locations](https://galaxy.maropost.com/kb/articles/686-set-up-and-manage-multiple-warehouses).

## Set up Warehouse Zones

To begin with, you need to set the zones you want to associate with each warehouse so Neto knows where to fulfil from. To set up your warehouse zones:

1. In your Neto control panel navigate to **Stock control** > **Locations / warehouses**.
2. Click on the warehouse you want to edit and scroll down to the **Zones** section.
3. Under the **Search For Zones to Add** drop down, click the courier zones you wish for this warehouse to fulfil. For example, if it's a Brisbane based warehouse, add the Brisbane zones for all the couriers you use.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ShipSalesOrdersfromtheClosestWarehouse1.05T5g00000xpTQaEAM.png)
4. Click the **Save** button.

Repeat these steps for the remaining warehouses, by adding the delivery zones they relate to.

## Set Fulfilment Locations

You now need to set the fulfilment locations on every product so that Neto won't just select a default warehouse:

1. In your Neto control panel navigate to **Products** > **View products**.
2. Click on the product you wish to make changes to.
3. Click on the **Warehouse & Picking** tab.
4. Under **Default Fulfillment Warehouse / Pick Locations**, add your warehouse locations. If you have a preference over the warehouse you wish to use instead, set a priority number next to the warehouse (remembering the lowest number will be used first).
  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ShipSalesOrdersfromtheClosestWarehouse2.05T5g00000xpRtFEAU.png)
5. Click the **Save** button.

The product will now be fulfilled from the warehouse locations selected, to the zones it is set to serve. You need to do the same for your other products, which can also be done in bulk.

1. Download [the example template we've setup](https://neto.com.au/assets/images/docs/7963/warehouselocations.csv) to assist you. Under the **Warehouse Locations** column, use the following to set out your warehouse locations, pick priorities and locations within the warehouse.
  An example:
2. Once complete, navigate to **Settings & Tools** > **Import Data**. Select **Simple Import** and upload the CSV file.
  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ShipSalesOrdersfromtheClosestWarehouse3.05T5g00000xpTjKEAU.png)

Neto will import and process your file, adding the default fulfilment location to all products.