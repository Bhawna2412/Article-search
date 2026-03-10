---
title: "Sales Order Settings"
articleID: 1583
category: "Use Neto > Sales Orders, Returns, and Credits > Maintenance and Tweaks"
knowledgeBase: "Neto By Maropost"
lastUpdated: 2026-01-07
---

# Sales Order Settings

You can optimize your order processing workflows by configuring automated order status transitions, invoice generation, and fulfillment rules that match your specific business operations. These comprehensive order settings help reduce manual order management tasks and enable you to automate key fulfillment stages, improving operational efficiency and reducing order processing time across your B2B operations.

Properly configured order processing rules typically reduce manual interventions and help ensure orders flow smoothly through pick, pack, and dispatch stages based on payment status and inventory availability. The ability to customize invoice formatting, backorder handling, and customer communication settings enables you to align your Neto platform with established business processes, supporting up to 70% cost reduction through automation of routine order management tasks.

## Order Processing Rules

The below settings can be found in the **Settings & Tools** > **All Settings & Tools** > **Order Processing Rules** page.

| Setting Name | Description |
| --- | --- |
| Auto invoice new orders | New orders will be invoiced automatically. The date invoiced will use date placed. |
| Default to “signature required” for all orders | The signature required field on all shipping consignments will be set to true by default. |
| Automatically approve account customer orders | Automatically approve orders for customers that choose to put the order “on account” at checkout. |
| Shipping cost calculation not required for order created in control panel | The calculation of shipping cost is not required when adding an order via the control panel. Ideal for service based businesses that do not require shipping. |
| Allow order overpayment | Control panel users will be allowed to overpay orders. Overpayments will become credit on the related customer account. |
| Auto pick fully paid orders | Orders that are fully paid will automatically go to the “pick” status. |
| Auto pack fully paid and picked orders | Orders that are fully picked and paid will automatically go to the “pack” status. |
| Backorder presales products | Products will be placed on backorder if they have an arrival in the future. Some themes also require a PreOrder Qty on the product as well. |
| Backorder out of stock product for order created in control panel | Orders created in the control panel for out of stock items will be put on backorder automatically. |
| Keep original empty order if all items backordered | When all items on a paid order are back ordered, the original order with the payment applied will remain in the system as an empty order. The payment from the original order will be used to credit the backorder that is created. |
| Require new billing address on PayPal Express Checkout | Customers are forced to enter a new billing address when checking out with PayPal Express. |
| Require new shipping address on PayPal Express Checkout | Customers are forced to enter a new shipping address when checking out with PayPal Express. |
| Multiply qty by base unit qty in control panel | The qty on orders displayed in your control panel will be multiplied by the qty defined in the “Base Unit Per Quantity” field of each product. |
| Allow empty city when creating order | The city field is allowed to be empty when creating order. |
| Allow empty state when creating order | The state field is allowed to be empty when creating order. |
| Allow sales operator to pack order directly | The pack button will appear in the order edit page allowing sales operators to skip the pick status and send orders directly to pack. |
| Allow sales operator to dispatch order directly | The dispatch button will appear in the order edit page allowing sales operators to skip pick and pack status and send orders directly to dispatch. |
| Hide action buttons on pack order screen | Action buttons won’t display when viewing the pack order screen. |
| Create backorder for backordered item | Create backorders when orderlines are specified as on backorder. |
| Enable Backorder Suffix | When enabled, an incremental suffix will be appended to the original order ID when a Backorder is split from the Original order. E.g N1354-1 (this setting only affects how the orders are named, processing of backorders still stays the same) |
| Disable partial backorder | The entire order must be backordered, not just individual orderlines. |
| Send order email on save (new orders) | “Do not send order/invoice to customer via e-mail” check box will be clear on sales orders in the new status. |
| Send order email on save (pick status) | “Do not send order/invoice to customer via e-mail” check box will be clear on sales orders in pick status. |
| Send order email on save (new / hold status) | “Do not send order/invoice to customer via e-mail” check box will be clear on sales orders in new/hold status. |
| Send dispatch notification email on save pack/dispatch status | “Do not send order/invoice to customer via e-mail” check box will be clear on sales orders in pack/dispatch status. |
| Require consignment scan packed before manifest submission | Users must scan each consignment in a manifest prior to being able to submit the manifest. |
| Minimum packaging split percentage | Split orders into smaller pre-defined packages if selected pre-defined package is filled to less than the configured percentage of its capacity. |
| Dynamic packaging percentage | Package orders into pre-defined packages without a defined cubic or weight (a dynamic package) when available static packages (packages with a defined cubic or weight) are filled to less than the configured percentage of their capacity. |
| Add additional delivery instruction to shipping label | The text added here will be displayed in the shipping instruction section on all shipping labels. |

## Invoice & Statement Settings

| Setting Name | Description |
| --- | --- |
| Default invoice terms | The default invoice terms applied to all new invoices. For a list of all available payment terms refer to the payment terms page (Settings & Tools > All Settings & Tools). |
| Show item note on invoice and quote | Display item notes on invoices and quotes. |
| Show serial number on invoice and quote | Display serial numbers on invoices and quotes. |
| Show tax percent on invoice and quote | Display tax percentage on invoices and quotes. |
| Show unit of measure on invoice and quote | Display product units of measure on invoices and quotes. |
| Order/invoice id prefix | Order numbers will be appended to this prefix. Ensure any limitations from your accounting software are met. |
| Length of order/invoice id | This includes the prefix length. Order ID will be padded with zeros after the prefix. Maximum 15. |
| Next Order ID counter | Displays what the next order number is sequentially. Note you may only set a higher number. Increase to a high value if you are experiencing duplicate order ids. |
| Default document template set | This field determines the default invoice, order, quote, adjustment note etc template used by the system. Leave blank to use the system default or enter the name of the template set to use. Learn more [here](https://galaxy.maropost.com/kb/articles/1107-customise-email-and-print-templates#3). |
| Invoice logo footer text | The text that appears under the logo on invoices and quotes. For example your address or phone number. Use html line break for new line. |
| Invoice footer text | The text that appears at the footer on your invoices. |
| Quote footer text | The text that appears at the footer on your quotes. |
| Electronic transfer description text | The text description that appears next to the electronic transfer payment option on your invoice and at checkout. |
| Credit card description text | The text description that appears next to the credit card payment options on your invoice and at checkout. |
| Turn on customer statement | Sends automated customer statements each month. |
| Reportable order status | Order status that will be included in balance calculations of automated customer statements. |
| Customer groups for receiving statement | Specify which customer group(s) that receive automated customer statements. |
| Customer statement period | The number of days included in a single statement. |
| Day of month to send customer statement | Specify which day of each month that the automated customer statements are sent. |
| Do not send empty statement | If enabled, the system will only send statements to customers who have transactions in the period. |

## Advanced Configuration

> **Important:** Settings changed in advanced configuration should only be performed when instructed.

The below settings can be found in the **Settings & Tools** > **All Settings & Tools** > **Advanced Configuration** page. Search for the setting in the name field.

| Setting Name | Description |
| --- | --- |
| MAX_ORDERLINES | Configure the maximum amount of orderlines that can be added to a single sales order (up to 255). |

## Related Articles

- Process (Pick, Pack and Dispatch) a Sales Order
- [Sales Orders Overview](https://galaxy.maropost.com/kb/articles/1593-sales-orders-overview)
- Edit a Sales Order