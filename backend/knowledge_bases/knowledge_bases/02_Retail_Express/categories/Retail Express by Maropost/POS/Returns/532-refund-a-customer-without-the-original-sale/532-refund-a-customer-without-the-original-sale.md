---
title: "Refund a Customer without the Original Sale"
articleID: 532
category: "POS > Returns"
knowledgeBase: "Retail Express"
---

# Refund a Customer without the Original Sale

You can handle customer returns flexibly through processing refunds without original sale records in **Retail Express**, which enables issuing credit or refunds for products purchased elsewhere or when transaction records are unavailable. This flexible refund capability helps retail operators maintain positive customer relationships and handle exceptional return situations, with effective no-receipt refund processing typically improving customer satisfaction while maintaining appropriate controls across Australian retail operations.

Refund without original sale functionality in **Retail Express** enables retail operators to process goodwill returns or handle situations where purchase records aren't accessible, helping ensure customer service flexibility while maintaining financial tracking. This refund flexibility helps ensure your retail operations can handle various return scenarios while maintaining appropriate oversight and customer satisfaction.

This article is designed to show you how to handle a refund in the case where you do not have, or cannot locate an original sales transaction to work from. We call this a **Blank Refund**.

### To create a Blank Refund:

1. On the POS Homepage click **Returns**
2. Click **Create Blank Refund**
  ![mceclip0 - 2023-07-09T132826.373.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppckEEAQ.jpg)
3. **Scan **or **search **for the products to be added to the sale
4. Enter the **Quantity **in the **Calculate **column
5. Confirm the **Refund Amount**
  ![mceclip1 (100).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppclLEAQ.jpg)
6. Click **Next**
7. Enter the number of products to be returned as Saleable Stock or Faulty Stock
8. Select the **Outlet** the stock should be returned to
	If you select an Outlet other than the current one Retail Express will automatically create a Transfer to process the transfer of stock
9. Click **Next**
10. Select a **Return Reason**
  You can create custom Return Reasons for greater reporting
11. Click **Create Refund**
12. A new sale will open with the product to be refunded added
13. Proceed by selecting a Refund Option below

## Refund Options

#### [Option 1 - Return of payment](https://galaxy.maropost.com/kb/articles/532-refund-a-customer-without-the-original-sale#return-payment)

If the Balance Due shows as a negative you will be able to give money back to the customer.

1. Click the **Payment **tab
2. Click the **arrow **corresponding to your tender type e.g. Cash
3. Click **Pay**

> **Note:** If using an integrated payment method it will prompt the integration; if your system has not been configured for this you will need to contact your software vendor e.g. Tyro, PC-EFTPOS

  ![pos_return_payment.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppclQEAQ.jpg)
4. The return will be recorded in the section on the right
5. Click **Finalise **to complete the sale

**Update as of February 2020 - **PC-EFTPOS has been renamed to Linkly but is still currently referred to as PC-EFTPOS within the Retail Express application.

#### [Option 2 - Exchange products](https://galaxy.maropost.com/kb/articles/532-refund-a-customer-without-the-original-sale#return-exchange)

You can exchange the products for the customer by adding them to the newly-created refund sale.

1. Click the **Products **tab
2. **Add the products** to the sale by scanning the barcode or using the Search functionality
3. Review the **Order Total - **if the amount is positive the customer will need to pay for the remaining balance; if it's negative you will need to either continue to add products or use one of the remaining refund options to bring the balance back to zero.

![mceclip9 (4).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppclaEAA.jpg)

#### [Option 3 - Issue a Store Credit/Gift Voucher](https://galaxy.maropost.com/kb/articles/532-refund-a-customer-without-the-original-sale#return-voucher)

You can choose to issue the customer with a store credit/gift voucher to be redeemed in a future sale.

> **Note:** Using the Shopify Gift Voucher integration you can synchronise vouchers with your web store so your customers can redeem the voucher either in-store or online (note that the Credit Note voucher type is not supported - you would need to use any of the remaining three options).

1. Click the **Products** tab
2. Click **Create Voucher**
3. Select a **Voucher Type**

> **Important:** (*Credit Terms are based on the status of the customer at the time of the refund)	- For a regular customer without Credit Terms* - select a Gift Voucher	- For account customers with Credit Terms* - select Credit Note (the refund will be displayed on the Account Payments report)

4. The total amount to be refunded will be automatically inserted as the Voucher Value
  This can be edited to adjust the value if required
5. Click **Create Voucher**
6. If the Order Total is now zero, click **Finalise **to finish the sale

![mceclip10 (2).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppclpEAA.jpg)