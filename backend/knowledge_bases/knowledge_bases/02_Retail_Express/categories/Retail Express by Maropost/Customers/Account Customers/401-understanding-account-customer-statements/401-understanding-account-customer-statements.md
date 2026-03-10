---
title: "Understanding Account Customer Statements"
articleID: 401
category: "Customers > Account Customers"
knowledgeBase: "Retail Express"
---

# Understanding Account Customer Statements

You can interpret account customer statements to understand transaction history, payment status, and outstanding balances, helping resolve customer inquiries and manage collections effectively. This improves your retail operations by providing clear account documentation, with properly understood statement formats typically enabling faster customer service resolution and more effective payment follow-up.

Understanding statement interpretation involves recognizing transaction types, balance calculations, and aging categories to help retail operators focus on the right account analysis workflows, ensuring your retail strategy consistently drives better customer service and payment collection outcomes.

Account Customer Statements provide a comprehensive overview of transactions, payments, and outstanding balances for account customers. This article is designed to assist you in understanding Customer Statement behaviour. As Retail Express is not an accounting solution, and is designed for retail purposes, it treats customer invoices, accounts, and statements in a way that you may not be familiar with.

## []()Transactions and effect on Statements

Below is a brief summary of the Sales statuses you may see at POS, and the flow-on effect for Customer Statements and stock movement to assist you.

**Important Note**: Customer Statements work on a **Fulfilled basis **i.e. an Invoice will not appear on the Statement until products are Fulfilled.

|  |  |  |
| --- | --- | --- |
| **Sale / Transaction Status** | ** Definition** | **Stock and Statement Behaviour** |
| Incomplete | The Sale has not been completed. The PC or browser may have been interrupted or closed during the sale. | - Stock is not Allocated - Customer is not charged - Invoice will not appear on the Statement - No Payment is expected |
| Quote | A price list for the customer. | - Stock is not allocated - Customer is not charged - Quote will not appear on the Statement - No payment is expected |
| Awaiting Payment (Stock Allocated and Unfulfilled) | Sale has not been paid in full. Either no payment, or only partial payment has been accepted. | - Customer is not charged - Invoice will not appear on the Statement - No Payment is expected   > **Note:** you can have both Fulfilled AND Unfulfilled Products on a single sale |
| Awaiting Payment (Stock removed from Allocated and Fulfilled) | Sale has not been paid in full. Either no payment, or only partial payment has been accepted. | - Customer is charged - Invoice will appear on the Statement (for Fulfilled stock) - Payment is expected   > **Note:** you can have both Fulfilled AND Unfulfilled Products on a single sale |
| Processed | Sales has been Paid in Full | - Customer is charged - Invoice will appear on the Statement (for Fulfilled stock) when 'Transaction within a date range' is selected during Statement generation options - No payment is expected |
| Cancelled | Sale has been Cancelled or Voided | - Customer charge is reversed - Invoice is removed from the Statement - No Payment is expected - Any previous payment is removed from the statement |

## []()Best Practices

To ensure your Customer Statements operate as smoothly as possible we recommend the following:

|  |  |
| --- | --- |
| **Action** | **Details** |
| Disable the POS Security User Setting "Allow editing and changing a Processed Sale" | Disabling of this setting ensures that Product Quantities and Prices cannot be edited after the sale has entered a Processed state. To disable the setting:  1. Navigate to **Staff > POS Security Features** 2. Select the required **Profile** 3. **Untick** "Function - Allow Editing and changing a Processed Sale" 4. Click **Save**  Repeat the steps for all required User Profiles.  > **Note:** remember to logout completely from POS and back in again to refresh the setting changes |
| Disable the POS Security User Setting "Allow editing and changing a Processed Sale" | Disabling of this setting ensures that Product Quantities and Prices cannot be edited after the sale has entered a Processed state. To disable the setting:  1. Navigate to **Staff > POS Security Features** 2. Select the required **Profile** 3. **Untick** "Function - Allow editing and changing a Processed Sale" 4. Click **Save**  Repeat for all required User Profiles. |
| Disable the Order Setting "Aggregate Duplicate Order Items" | Disabling of this setting means that identical Products on an invoice can remain on individual lines, and so can be priced, discounted and fulfilled separately.  1. Navigate to **Back Office > Settings > POS Settings > Order Settings** 2. Untick "Aggregate Duplicate Order Items" 3. Click **Save Changes**   > **Note:** remember to logout completely from POS and back in again to refresh the setting changes |
| When to generate Statements each month | Always generate Customer Statements either:  - On the last day of the month (after close of trade); or - On the first day of the month (prior to trade) |
| Use the Fulfilment Report's Saved Lists function to manager Order Fulfilment/Delivery | The Saved Lists function with allow you to enter a suggested dispatch quantity without actually updating the order or the inventory. Fulfilment of products should only be completed once the delivery truck returns and you can confirm which goods were actually delivered.  > **Note:** Not available when using the Shippit integration (as orders will only synchronise to Shippit when fulfilled in Retail Express) |
| Products on Back-Order for the customer | Create a separate order for the products to avoid partial fulfilment |

## []()Account Customer invoices at POS

Bear in mind the following behaviour when handling an Account Customer sale and producing invoices within POS.

### Changes to sale lines on an invoice are not tracked

When editing quantities or prices there is no ability to track what was changed, nor the date the change occurred.

The Customer Statement Balance will always reflect the **current balance**.

You will be unable to display a past balance for any specific date, as there's no tracking of the date that the individual transactions have changed.

### Quantity of Fulfilled Products is tracked (not Value)

When fulfilling a sale, the quantity of products fulfilled is tracked but not the value e.g. 3 products fulfilled (not $25 of products fulfilled).

Customer Statements cannot handle multiple fulfilments of a product that occur in different periods, as there's no tracking of the value of fulfilments. This also applies to reverse/negative fulfilments (refer to [Best Practices](https://galaxy.maropost.com/kb/articles/401-understanding-account-customer-statements#best-practice) above).

### Discounts at the Unit Price Level are not tracked

When multiple quantities of a product are purchased and a discount is applied, you can track the total discount associated with a product line, not the post-discount unit price.

For example:

- A customer purchases 7 products with a retail price of $25 (total of $175)
- A discount is applied, so the total is $110
- The discount of $65 is tracked
- The revised unit price of $15.71 per product is not tracked

This can occasionally result in rounding issues.

Due to Product line level discounts,** the full discount value is considered to apply from the date the first item is fulfilled**.  To use the above example again: if only x 2 of the x 7 Qty is Fulfilled, the value owing on the invoice at that time will be -$15 ( 2 * $25 (original unit price) - $65 (total discount) = -$15)

### 30, 60 or 90 day terms are dependant on Fulfilment

The credit terms run from the **last day of the month that the item was Fulfilled in**.

Example:

- 13th February: Sale is created
- Products are not yet fulfilled, so the customer isn't required to pay
- Transaction doesn't appear on the Customer Statement
- 1st March: Products are fulfilled
- Invoice appears on the statement
- Invoice is due 30, 60 or 90 days after the 31st of March (depending on Billing Terms), not the 1st of March

![blobid0 (49).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiQJEAY.jpg)
Want more information? Find related articles here:

- Setting Up an Account Customer
- Generating Customer Statements
- Sending Account Statements
- Why aren't Sales Appearing on Account Customer Statement or Payments