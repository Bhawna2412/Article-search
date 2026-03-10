---
title: "Managing Afterpay/Zip Refunds in Shopify"
articleID: 162
category: "Shopify > Selling"
knowledgeBase: "Retail Express"
---

# Managing Afterpay/Zip Refunds in Shopify

You can manage Afterpay and Zip refunds for Shopify orders within **Retail Express**, ensuring accurate payment reconciliation for buy-now-pay-later transactions. This capability helps maintain financial accuracy by properly handling refund processes for alternative payment methods, supporting smooth customer service while maintaining correct accounting records across your retail operations.

Setting up Afterpay/Zip refund management involves understanding payment gateway integration and configuring proper refund workflows in both Shopify and Retail Express. When properly managed, this process helps ensure accurate financial reconciliation, maintains customer satisfaction through proper refund handling, and supports compliance with payment provider requirements.

When sales are placed online the sale is immediately transferred to Retail Express. However this is not the case with refunds - no information is transferred between the systems.

Specifically with Afterpay and Zip, the integration to Retail Express means you will need to perform the refund in a very specific manner. There are a number of options listed below, each one with it's own benefits and drawbacks. You will need to make your own decision as to the best approach for your specific business requirements.

**Online and Warehouse Outlets:**

If you are using an Outlet in Retail Express specifically for processing online/warehouse sales, Afterpay/Zip may refuse to provide you with an Secret Code for that location. This will prevent you from being able to process refunds from that Outlet, and you will need to refund customers using the Shopify refund method only.

## Comparison of Refund Options

|  |  |  |
| --- | --- | --- |
| **Option** | **Pros** | **Cons** |
| Use Shopify to process the refund and create a blank refund in Retail Express **Important - **do not restock/add the product quantity back via Shopify - your online store inventory is managed by Retail Express and will be updated when the refund is processed there | Online store will display the refund against the original transaction for the customer No additional fees payable to Shopify | Blank Refund is not associated to the original sale in Retail Express May cause difficulty to reconcile with accounting |
| Use Retail Express to process the refund, no update to the sale online (unable to refund via Shopify without affecting Afterpay)  > **Note:** Requires an Afterpay Secret Code for the Outlet performing the refund - this may not be available for Warehouses (refer to warning above) | Refund is associated with the original transaction in Retail Express Easier to reconcile accounting | Customer will not see the transaction has been refunded Higher fees paid to Shopify (as monthly fees are based on transactions) |
| Link Afterpay/zip payments in Shopify to a different Payment Type in Retail Express e.g. Finance, or Online. This configuration will be required to be set up before the original sale is created.  Refund will be processed via Shopify to refund Afterpay/Zip. The second refund will be processed in Retail Express against the original invoice (rather than a blank refund). | Easier management of refunds in Retail Express. Transactions show as refunded in both systems - no additional fees to Shopify and customers can see an accurate transaction history. | Sales in Retail Express will be displayed as Online rather than Afterpay or Zip payments. This can affect reporting and accounting reconciliations. |

## Processing a refund

#### [Option 1 - Refund via Shopify and Blank Refund in Retail Express](https://galaxy.maropost.com/kb/articles/162-managing-afterpay-zip-refunds-in-shopify#refund-shopify)

In this method the refund is performed in Shopify, with the refund to Afterpay/Zip completed via the inbuilt integration.

A secondary refund is completed in Retail Express so the customer account is updated, but is processed as a blank refund without any link to the original transaction.

![rtaImage - 2023-07-08T183809.757.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTjGEAU.jpg)
To process the refund via Shopify (with a blank refund in Retail Express):

1. Refund the Customer Transaction in Shopify following the
2. The sale will be refunded via Afterpay/Zip to the customer
3. Process a Blank Refund in Retail Express

#### [Option 2 - Refund via Retail Express](https://galaxy.maropost.com/kb/articles/162-managing-afterpay-zip-refunds-in-shopify#refund-rex)

In this method the refund is only performed in Retail Express via POS, with the refund to Afterpay/Zip completed via the integration. Shopify will not be aware of the refund, and the transaction will still be displayed against the customer account.

To process a refund of a Shopify Order in Retail Express:

1. Log into **Retail Express**
2. Open **POS**
3. Click the red **Returns **button
  ![rtaImage - 2023-07-08T183816.175.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTjQEAU.jpg)
4. Enter the **User ID** and click **Log In**
5. Use the **Search filters **to find the original invoice
6. Select the invoice and press **Next**
7. Enter **Quantities **against the products to be returned by clicking the arrow next to the option (Saleable Stock is used for products that are available to resell and will update the Available quantity, Faulty Stock will be returned to stock as "Faulty", will not update the Available quantity and will not be available to sell)
  ![rtaImage (9).gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTk9EAE.jpg)
8. Click **Next**
9. Edit the **Refund Amount **if required
10. The **Freight **(if charged) will appear on a separate line; an amount can be added to this line if the value is being refunded
  ![rtaImage (10).gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTkEEAU.jpg)
11. Click **Next**
12. A summary of the information that has been selected will be displayed
13. Select a **Reason **for the refund from the drop-down box

> **Note:** You can create custom Return Reasons - see the Return Reasons Setup article for more information. The Return Reason Report can be exported to Excel for detailed reporting on your Refunds.

14. Click **Create Refund** to create the Refund/Exchange transaction
15. The Products, Customers and Fulfilment tab are all populated automatically
16. Click the **Payment **tab
17. Click the arrow for the **Payment Method** twice to allocate the negative payment
18. Follow the prompts to process the return of funds against the original transaction reference
19. The payment will be added to the right side of the screen
  ![rtaImage - 2023-07-08T183830.143.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTWKEA2.jpg)
20. Click **Finalise**

No updates to Shopify are required.

#### [Option 3 - Mapping a different Payment Type](https://galaxy.maropost.com/kb/articles/162-managing-afterpay-zip-refunds-in-shopify#refund-paymenttype)

Using this option you will need to configure your Shopify Integration settings to use a different Payment Type for Afterpay/Zip e.g. Finance, or Online. Available Payment Types can be viewed in Retail Express via **Settings > Payment Types**.

As transactions are made online and synchronised to Retail Express, the payments will be associated to this alternative Payment Type in Retail Express. This will need to be kept in mind when performing reports on Payment Types (e.g. Income Report) and performing accounting reconciliations.

![rtaImage - 2023-07-08T183835.441.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTkJEAU.jpg)
Using this method, Shopify is the source of truth for the integration to Afterpay/Zip.

1. Refund the Customer Transaction in Shopify following the
2. The sale will be refunded via Afterpay/Zip to the customer
3. Process a Refund in Retail Express