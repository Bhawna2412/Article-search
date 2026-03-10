---
title: "eBay Sales Orders"
articleID: 1090
category: "Ways to Sell on Neto > eBay > Troubleshooting"
knowledgeBase: "Neto By Maropost"
---

# eBay Sales Orders

## Import eBay Sales Orders

Automatic order downloads are disabled by default. To switch them on go to **eBay** > **Setup & Tools** > **Settings** and clear the **Enable Manual eBay Order Management** checkbox.

Ordinarily, all sales are marked as paid and shipped automatically by Neto once the payment has been received and sale has been processed. If for any reason, you need to do this manually:

### Mark Paid or Shipped Manually

1. In your Neto control panel navigate to **eBay** > **Transactions**.
2. Filter by the **Transaction Number**/**eBay Username** etc.
3. Select the order and **With x Selected** either **Mark As Paid** or **Mark As Shipped** as required.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders1.05T5g00000v4MaJEAU.png)

### Incomplete Transactions

If your customer has not completed checkout through eBay (ie. no shipping has been calculated or no payment method has been selected), the order will not be imported into Neto. Only the record of the listing sale is listed. To search for incomplete checkouts:

1. In your Neto control panel navigate to **eBay** > **Transactions**.
2. Filter by **Checkout Incomplete**.
  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders2.05T5g00000v4OaLEAU.png)

  If you have open disputes, you may want to include the **Checkout Status**, **Seller Responded**, which will also return incomplete transactions that have issues.

## Cancel an eBay Sales Order

If you need to cancel an eBay order for any reason there are different steps you need to perform within Neto and on eBay. eBay allows transaction cancelling for reasons including item is broken or you made a mistake when listing the item.

### Cancel in Neto

If the order has been downloaded from eBay into Neto you will need to cancel the order and any linked payments. To cancel a sales order, follow the steps in [this article](https://galaxy.maropost.com/kb/articles/1446-cancel-or-delete-a-sales-order).

Cancelling in Neto will NOT cancel the transaction on eBay, so you will need to complete the steps in the next section as well.

### Cancel on eBay

When you need to cancel a transaction, it's generally a good practice to first contact your buyer to let them know you're cancelling the transaction and why.

eBay has rules around when you can and can't cancel a transaction. For the criteria and steps to cancel a transaction, see eBay's instructions [here](https://www.ebay.com.au/help/selling/getting-paid/cancelling-transaction?id=4136).

eBay lets the buyer know that you've cancelled the transaction. If the buyer has already paid for the item, you will need to refund the buyer.

### Refund the Buyer

Once you've cancelled a transaction, it's time to refund the buyer. If the buyer paid with PayPal:

- The buyer's PayPal account is automatically refunded. eBay then either asks PayPal to remove the refund amount from your PayPal account or place the amount on your seller invoice.
- Once the buyer has been refunded, eBay considers the cancellation to be complete.

If the buyer paid with a method other than PayPal:

- You have 10 business days to refund the buyer's original payment method.
- Once you issue the refund, eBay asks the buyer to let them know that they received it.
-   - The buyer confirms they received the refund.
  - The buyer doesn't respond to eBay's request to confirm receipt of the refund after 10 business days.

  eBay consider the cancellation to be complete when:
- If you haven't issued the refund within 10 business days, the buyer can open an eBay Money Back Guarantee request for an item that wasn't received.

### Receive a Final Value Fee Credit

The cancellation must be complete for you to receive a final value fee credit. The cancellation request is complete when:

- The buyer's PayPal account is refunded, if the buyer paid with PayPal.
- The buyer confirms they received their refund, if the buyer paid with a method other than PayPal.

- eBay credit the final value fee to your account 7-10 days after the cancellation is complete.

> **Note:** If you'd like your credit refunded to you, you can [request a refund of your eBay credit balance](http://pages.ebay.com.au/help/sell/refunds.html).

## eBay Disputes

Disputes can only be opened after four days to give the customer time to complete the transaction.

> **Note:** This process can be automated using [eBay's Unpaid Item Assistant](https://www.ebay.com.au/help/selling/getting-paid/resolving-unpaid-items?id=4137) which will create and close unpaid item cases for you. You also need to turn on the **Auto release eBay disputed transaction** setting in **eBay** > **Setup & tools** > **Settings**.

### Create a Dispute In Neto

1. In your Neto control panel navigate to **eBay** > **Transactions**.
2. Using the advanced filters set the page to show transactions **Not Yet Marked As Paid** and **Apply**.
  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders3.05T5g00000v4OToEAM.png)
3. Select the **Transactions** you wish to create disputes for by using the checkboxes on the left side of the page, and when complete select **Bulk Create eBay Disputes**.
  ![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders4.05T5g00000v4OmIEAU.png)
4. You will now be able to review and select a **Dispute Reason** and **Dispute Explanation** using the drop down boxes.
  ![image5](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders5.05T5g00000v4OvIEAU.png)
5. Select **Create eBay Disputes** and you will receive confirmation that the dispute has been opened.

**Please Note**: Disputes can only be closed through the eBay site to allow you to review communications with the buyer.

## Release Committed Stock

Stock may need to be released from an eBay order if the transaction is incomplete. To release stock you can open an unpaid item dispute in eBay, and upon dispute closure the stock will be released automatically.

To release stock manually:

1. In your Neto control panel navigate to **eBay** > **Transactions**.
2. Find the incomplete transaction using search filters.
3. Select the relevant transactions and at bottom of page click the **Bulk Release Reserve Stock** button.
  ![image6](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders6.05T5g00000v4Ow2EAE.png)
4. Alternatively you can find these transactions on the product by going to 'Stock Control' and selecting 'eBay Transactions' and reviewing all the committed stock from here.
  ![image7](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders7.05T5g00000v4OyHEAU.png)

## Returns and Refunds

Returns must be raised in both eBay and in Neto. Instructions to manage returns in eBay can be found [here](https://www.ebay.com.au/help/selling/managing-returns-refunds/handling-return-requests?id=4115).

You then need to process the return in Neto. Complete the steps in the Create and Process a Return Merchandise Authorisation article.

An RMA (Return Merchandise Authorisation) is a numbered authorisation provided by a mail-order merchant to permit the return of a product.

By creating an RMA, you are able to:

- Track the progress of a return through Neto
- Credit the customer if required and
- Take the appropriate action against the stock item (i.e. return the item to stock, write off etc).

![image8](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders8.05T5g00000v4PfGEAU.png)
Once you've completed both the eBay and Neto steps, your return will be complete. Refunds through PayPal will automatically be completed, other payment methods must be manually processed.

## Missing Sales Orders

Orders that are dispatched through eBay will not create an order in Neto. This is to prevent double handling, and the order being sent twice to the buyer. We recommend creating the order manually from the transaction, so that stock and accounting systems can balance correctly. To create a sales order from the eBay transaction:

1. In your Neto  control panel, navigate to **eBay** > **Transactions**.
2.   - Checkout Status - Checkout Complete
  - Order Not Yet Created
  - Shipped to Customer on eBay

  Expand the filters and select:
3. Click the **Apply** button and you'll see a list of eBay transactions that have been paid, shipped, but with no order in eBay. Click on the eBay order # link to open the order.
  ![image9](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders9.05T5g00000v4NuuEAE.png)
4. Click the **Create Order** link. Confirm by clicking **Ok** in the pop-up window.
  ![image10](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders10.05T5g00000v4PijEAE.png)
5. Your order will be created, and the order number will appear at the top of the screen. Navigate to **Sales orders** > **View orders**.
6. Expand the filters and change the **Empty Orders** filter to **Only show empty orders**. Click the **Apply** button.
7. Open the order you created from the eBay transaction, and add the orderlines.
8. Click the **Dispatch** button, and the order will be marked as dispatched.

## Troubleshoot Sales Orders

If eBay sales orders are not downloading you can try the below steps to find the cause of the problem:

- [Check eBay Setup Token](https://galaxy.maropost.com/kb/articles/1090-ebay-sales-orders#5)
- [Check your Batch Processes](https://galaxy.maropost.com/kb/articles/1090-ebay-sales-orders#6)
- [Check Process Errors](https://galaxy.maropost.com/kb/articles/1090-ebay-sales-orders#errors)

### Check you eBay token

1. In your Neto control panel, navigate **eBay** > **Setup & Tools**
2. Click the **Store Manager** link.
  The **Results** section displays a **Tokens** column which outlines the eBay token status.
3. If the token status is `Invalid`, click on the store **ID** link.
  ![image11](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders11.05T5g00000v4OvtEAE.png)
4. Click the **Generate New eBay Setup Token** button.
5. Click the **Click here to generate your unique eBay token** link.
  ![image12](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders12.05T5g00000v4LVJEA2.png)
6. Login to your eBay account and authorise Neto access to your eBay account. This renews the token. Repeat these steps for the authentication token too, for good measure.

Orders should begin downloading to Neto and updating on eBay within five minutes.

### Check your Batch Processes

1. In your Neto control panel navigate **eBay** > **Pending**.

> **Note:** This process is also relevant to running processes (**eBay** > **Running**).

2. Examine the **Date Started** for each listed process.
  If the process is taking too long (e.g. hours or days) or there are too many processes, highlight all the processes and click the **Stop Selected** button. This will end any current processes. There are no consequences for doing this as Neto automatically queues up revisions and other required processes..
3. You can also check for other stuck processes in Neto batch queues. To check these queues, navigate **Settings & Tools** > **All settings & tools**.
4. From the **Settings & tools** menu, click the **Processes & Scheduled Jobs** link.

> **Note:** To manually start the eBay batch jobs, click the **System Scheduled Tasks** link, and then the **Run eBay batch jobs** button.

5. Click the **Running Processes** link.
  ![image13](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders13.05T5g00000v4Q38EAE.png)
6. Within the **Task Module** dropdown, locate the `ebay_sync_batch` task.
7. If any processes have been running for longer than an hour, select it and click the **Stop Selected** button. A new process will be scheduled to run in the next 15 minutes.

### Check Process Errors

The specific processes that download orders may encounter errors that need to be corrected. To check for these errors:

1. In your Neto control panel navigate **eBay** > **View Processes**.
2. In the **eBay Module** field enter `GetTransactions` and click the **Apply** button.
3.   - Error 931: Validation of the authentication token in API request failed.
  - Error 17470: For security reasons, please log in again.
  - Error 932: Auth token is hard expired, User needs to generate a new token for this application.

  Expand the log messages to check for errors, in particular:
4. If any of these errors are present you need to renew your setup token using the [above](https://galaxy.maropost.com/kb/articles/1090-ebay-sales-orders#5).

If problems still persist, please contact the support team for further assistance.

## Sales Orders on Hold

Sales orders can go on hold for a number of reasons. Follow the steps to resolve issues with eBay orders going on hold.

- [Orders 'On Hold' due to PO BOX addresses](https://galaxy.maropost.com/kb/articles/1090-ebay-sales-orders#errors)
- [Shipping Mapping is not setup](https://galaxy.maropost.com/kb/articles/1090-ebay-sales-orders#8)
- [Check for Valid SKU / Empty Order](https://galaxy.maropost.com/kb/articles/1090-ebay-sales-orders#9)
- [Price difference due to Markdown Manager](https://galaxy.maropost.com/kb/articles/1090-ebay-sales-orders#10)
- [Shipping options not set to visible on eBay](https://galaxy.maropost.com/kb/articles/1090-ebay-sales-orders#11)
- [Other On Hold Reasons](https://galaxy.maropost.com/kb/articles/1090-ebay-sales-orders#12)
- [Advanced Configuration Options](https://galaxy.maropost.com/kb/articles/1090-ebay-sales-orders#13)
- [Missing Sales Orders](https://galaxy.maropost.com/kb/articles/1090-ebay-sales-orders#14)
- [Empty Sales Orders](https://galaxy.maropost.com/kb/articles/1090-ebay-sales-orders#15)
- [Fraud Score 99](https://galaxy.maropost.com/kb/articles/1090-ebay-sales-orders#16)

### PO Box Addresses are Placing Orders on hold

Depending on your eBay and shipping carrier settings, you may have PO Boxes blocked as an acceptable address which leads to orders going to 'On Hold' status. If you need to change this, follow the steps below.

1. In your Neto control panel, navigate to **eBay** > **Setup & Tools**
2. Click **Settings**
  ![image14](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders14.05T5g00000v4HMREA2.png)
3. Clear the **Hold all eBay orders with PO BOX address** checkbox.
  ![image15](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders15.05T5g00000v4Q5YEAU.png)
4. Now to check your settings in your shipping option, go to your Neto control panel and navigate to **Setup & Tools** > **Shipping**
5. Click on **Shipping Options**
  ![image16](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders16.05T5g00000v4Q9fEAE.png)
6. Click on the affected shipping option.
  ![image17](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders17.05T5g00000v4OJSEA2.png)
7. Set **Can Deliver to PO Box** to **Yes**.

### Shipping Mapping is not Setup

The shipping services set in the listing rules template should be mapped to shipping options in Neto.

You can see if you are affected by this by following the steps below.

1. In your Neto control panel, navigate to **Sales Orders** > **View Orders**.
2. In the list, look for a grey icon next to the order as per the screenshot below.
  ![image18](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders18.05T5g00000v4QJ1EAM.png)
3. Upon hovering of the icon, there will be a warning that says **Shipping method not found**. Also note there can be other errors here as well which will indicate why the order was placed on hold.

This can be resolved in the eBay launch plan guide by following Step 6 - Other Mapping.

### Check for Valid Product / Empty Order

Check your order to ensure the order is not empty nor an invalid product. This occurs when a product is listed directly on eBay and is not imported into Neto and therefore not recognised.

To fix this, you will need to run the import wizard again.

### Price Difference Due to Markdown Manager

If price of product that was sold on eBay is different from product price in Neto the eBay order will automatically go to 'On hold' status.

This cannot be changed as it's a fail-safe to ensure it's not a mistake.

### Shipping Options Visible on eBay

1. In your Neto control panel, go to **Setup & Tools** > **Shipping**
2. Click on **Shipping Options**
  ![image19](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders19.05T5g00000v4QK9EAM.png)
3. In the shipping options under **Visibility** column, you should see **Visible on eBay**.
4. If it's not present, click into the shipping option and set **Visible to eBay** to **Yes**.
  ![image20](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders20.05T5g00000v4OxFEAU.png)
5. Click **Save & Close**.

### Other On Hold Reasons

1. In your Neto control panel, navigate to **Sales Orders** > **View Orders**.
2. In the list, look for a grey icon next to the order as per the screenshot below.
  ![image21](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders21.05T5g00000v4QMyEAM.png)
3. Upon hovering of the icon, there will be a warning. Below is a list of common errors received.

| Warning | Explanation |
| --- | --- |
| Warning: Invalid Payment Method | The default payment is invalid under eBay > Setup & Tools > Settings > Default payment method id for eBay orders |
| Warning: Duplicate items | Duplicate Items |
| Warning: Not enough stock | If an order has more stock than available and requires back-ordering |
| Warning: Sale price is under cost. | Sale price is less than the cost price |
| Warning: Payment not verified | Payment cannot be verified - please check |

The following warnings relate to advanced configuration settings:

| Warning | Explanation |
| --- | --- |
| Warning: Invalid address | Will appear if config **EBAY_IGNORE_ADDR_CHECK** is off and address is checked |
| Warning: Has buyer comment | Will appear if config **EBAY_HOLD_BUYERCOMMENT** is on and comment made |

See below to change these settings in advanced configuration.

### Other Advanced Configuration Options

To make changes to advanced configuration options:

1. In your Neto control panel, go to **Settings & Tools** > **All settings & tools**.
2. Scroll down to **Advanced Configuration**
  ![image22](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBaySalesOrders22.05T5g00000v4OxGEAU.png)
3. Lookup the name of the configuration you wish to change. Click on the name to edit the settings.

### Missing Sales Orders

The most common cause for missing sales orders is when they have already been marked dispatched in eBay. Neto won't download these sales orders automatically to prevent multiple items being shipped to the customer. If you still can't find your sales order in the orders list, first check the filter that allows you to see empty orders.

You may also have an expired [setup token](https://galaxy.maropost.com/kb/articles/1087-manage-your-ebay-integration#3). These tokens need to be renewed every 18 months or so.

Orders that aren't paid for on eBay (cash on pickup, bank deposit, cheque) will not download to Neto. In your control panel, navigate to eBay > Transactions and find the transaction. Mark the transaction as paid, and the order will be updated in eBay as transaction complete. The order will then download into Neto.

### Empty Sales Orders

If an eBay sales orders has no orderlines, it's usually because it was manually created in the control panel from the eBay transaction. Sales orders aren't created automatically when the order has been dispatched through eBay to prevent multiple orders being sent.

To ensure your stock is updated as required, add the orderline to the order, and mark it as shipped. Ensure the price matches the price paid by the customer on eBay, and that the option to not send an invoice is enabled, as an invoice would have been sent from eBay if the order was processed on eBay. Then dispatch the order without creating a consignment.

### Fraud Score 99

eBay orders with a fraud score of 99 will usually be accompanied with the message **IMPORTANT! eBay Order #XXXX has a refund on eBay**. This means that the buyer has cancelled their order during the 1 hour cooling off period.