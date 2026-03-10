---
title: "Layby and Pay Later in Point of Sale (POS)"
articleID: 1391
category: "Use Neto > Point of Sale (POS) > Use Point of Sale"
knowledgeBase: "Neto By Maropost"
---

# Layby and Pay Later in Point of Sale (POS)

**Please Note**: Neto POS is not available outside of Australia and New Zealand.

Neto POS has the ability to create layby orders for your customers. You can take an initial payment, set a payment due date, and take incremental payments all through your POS register.

**Please Note**: This article requires the **Layby For POS** add-on, which can be installed from the **Addons** menu in your control panel.

## Create a Layby/Pay Later Order

1. From your POS dashboard, add products to the sale and tap **Pay Now**.
2. At the tip of the payment page are terms you can select. Choose **Layby** or **Pay Later**.

> **Note:** If staff don't see the Pay Later option [edit their permission group](https://galaxy.maropost.com/kb/articles/1405-set-up-staff-permission-groups#edit-permissions).

3. Add the customer details to the sale by entering their information to the fields, or search for an existing customer.
4. Choose the date the layby needs to be fully paid by. Pay later orders don't have a due date.
5. Enter an initial payment amount the customer is making on their layby or pay later order. Layby's have a minimum initial payment of $1.
6. Process the initial payment as you would any other purchase.
7. Select **Complete Sale**. Layby orders will appear in your Neto control panel as **On Hold** (pay later orders will be **New**), but you can change the status before finalising the sale. You can now print or email the customer receipt.

> **Note:** Layby terms can be added to your receipts through your control panel, under **Point of Sale** > **Receipt Customisation**.

8. Tap **Complete Sale** and the layby order will be created.

## Take a Layby/Pay Later Payment

Payments for an existing layby can be processed through any of your POS registers, it doesn't have to be the one that originally created the order.

1. From your POS dashboard, tap the main menu, and select **Sales History**.
2. Open the order by tapping it from the list. You can also use the search filters in the top right corner of the page to help you locate the specific layby or pay later order.
3. The pop-up window displays the details of the sale. Tap **Add Payment**.
4. Select the amount the customer is paying and tap **Complete Sale**.
5. Process the payment as you would any other purchase, and print/email an updated receipt.
6. When the final payment is made, the order status will be updated to **Completed** (dispatched in your Neto control panel). Layby customers can now take their purchase.

## Cancel a Layby

If you need to cancel a layby it must be done through the control panel interface. The process is the same as cancelling other orders, so please refer to [this article](https://galaxy.maropost.com/kb/articles/1446-cancel-or-delete-a-sales-order).

## Layby Permissions

Staff can be given or denied access to layby and pay later functions through their permissions. To edit staff permissions:

1. In your Neto control panel navigate to **Settings & tools** > **All settings & tools**.
2. Click on the **Staff Permission Groups** link.
3. Click on the permission group you want to edit.
4. Click the **Sales Channels** tab.
5. Click the **POS** tab.
6. Toggle the permission to your desired option and click **Save & Close**.

## Sales Order Filters

To keep track of current layby orders we recommend a [custom sales order filter](https://galaxy.maropost.com/kb/articles/1521-custom-search-filters). All layby orders will have a status of `On Hold`, and the sales channel of `Maropost POS`.