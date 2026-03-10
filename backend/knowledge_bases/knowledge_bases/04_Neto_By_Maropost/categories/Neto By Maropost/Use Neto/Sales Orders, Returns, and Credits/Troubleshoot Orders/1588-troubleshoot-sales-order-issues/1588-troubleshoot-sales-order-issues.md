---
title: "Troubleshoot Sales Order Issues"
articleID: 1588
category: "Use Neto > Sales Orders, Returns, and Credits > Troubleshoot Orders"
knowledgeBase: "Neto By Maropost"
---

# Troubleshoot Sales Order Issues

## Previous Customer's Details Printing on Shipping Labels

If you're seeing the previous order details when you attempt to print your consignment label, here is a quick workaround:

1. When you press **Print Consignment** button and the print preview dialog appears, click **Cancel**. You should now see the label in your internet browser window.
2. Where you see the customers name in the **To**: section, click on the customers name and it will link to the correct version of the label.
3. Print the label and the correct details will show.

## Orders Incorrectly Displayed as Dropshipping

To resolve this issue, you can follow these steps.

1. In your Neto control panel navigate to **Settings & Tools** > **All Settings & Tools**.
2. Click on the **Web Store** tab and click **Checkout** **Settings**.
3. Toggle the **Show 'Send invoice with goods' option at checkout** setting so that it is off.
4. **Save Changes**.

If this is enabled and the end user selects "**no**" for "**Send invoice with goods?**" on the checkout page, this will trigger a dropship order.

When a product is assigned to a particular warehouse, and if that product is ordered; it gets sent to dropshipper via a data feed. The data feed only sends orders with orderlines from a pre-defined warehouse.