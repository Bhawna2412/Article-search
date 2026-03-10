---
title: "Refund sales paid using Zip"
articleID: 539
category: "POS > Payments"
knowledgeBase: "Retail Express"
lastUpdated: 2025-12-11
---

# Refund sales paid using Zip

You can handle Zip payment returns systematically through processing refunds for Zip-paid sales in **Retail Express**, which enables managing returns for buy-now-pay-later transactions while coordinating with Zip for proper refund processing. This refund capability helps retail operators handle Zip customer returns professionally, with effective Zip refund processing typically maintaining customer satisfaction and ensuring accurate payment reconciliation across Australian retail operations.

Zip refund functionality in **Retail Express** enables retail operators to process returns for Zip-paid transactions systematically, helping ensure proper refund coordination with Zip and accurate financial tracking. This refund workflow helps ensure your retail operations can efficiently handle Zip payment returns while maintaining professional customer service and accurate financial records.

When processing a sale in POS paid using Zip, Retail Express will automatically connect to Zip to refund the sale. If creating a refund without the original Invoice Number you will be prompted to enter the corresponding Zip Reference Number (to ensure the correct sale in Zip is refunded).

## Refund using the original Sales Order number

A **zip** Refund processed from the original Sale Order number follows the standard Return process.

For detailed Refund instructions, please see:How to Process a Refund / Return at POS.

1. Once the refund product/s and value is populated into POS click the **Payment tab**
2. Double-click the **Zip Payment Type**
3. Enter the zip Value to Refund
4. Click **Initiate Refund**
5. Refunding Successful message appears
6. Click **Finish**
7. Click **Finalise **in POS
8. Customer can view the Refund when logged into their zipPay Account

> **Note:** The total Refund Value available via **zip**, cannot exceed the original value paid using** zip** Payment Type.

## Refund without the original Sales Order number

A Refund or Return processed without the original Sale Order number is referred to as a 'Blank Refund'.

For detailed Blank Refund instructions, please see:Blank Refunds

A **zip** Blank Refund follows the standard Blank Return process, however it still requires the original Zip Reference Number.

For instructions on retrieving the Zip Reference number, please see the[Zip Help Centre](https://merchant.zipmoney.com.au/?_ga=2.196638948.93740478.1508128522-178086624.1506388618#/)

1. Once the refund product/s and value is populated into POS click the **Payment tab**
  ![blobid13 (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppcu8EAA.jpg)
2. Double-click the **Zip Payment Type**
  ![blobid14 (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppcuNEAQ.jpg)
3. Click **Manual Reference**
  ![blobid22.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppcuSEAQ.jpg)
4. 
  ![blobid23.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppcurEAA.jpg)
5. 
6. Refunding Successful message appears
7. Click **Finish**
8. Click **Finalise** to finish
  ![blobid18 (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppcvBEAQ.jpg)

> **Note:** the total Refund Value available via **zip**, cannot exceed the original value paid using** zip** Payment Type

## Partial Refund

POS supports multiple refund Payment Types being used within a single transaction.

**Zip** can be used to process a partial refund against a transaction, with the remainder of the refund using an alternate Payment Type. i.e., half the refund is paid via Cash and half is paid via **zip**.

**To process a partial Refund using zip**.

The process is the same as above -** Process a zip Refund**, however click directly into the** zip** field and manually enter the Value to Refund as **zip**.

![blobid20.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppcvLEAQ.jpg)

## In-store refund for an online sale

**Using Shopify? **View the detailed step-by-step guide for refunding Shopify orders paid through Zip here.

To process an in-store refund for an online sale follow the instructions in the second section above "**Refund without the original Sales Order number**". This allows you to process a refund for a zip sale where the sale wasn't originally created within Retail Express i.e. online sales.

You will need to obtain the customer's original Order Reference (from Zip) for their transaction before you can proceed with the refund (as the zip integration will request this reference number during the refund process).

> **Note:** The refund should be applied in **Retail Express** **only** to avoid refunding the customer multiple times.

## Refund related errors

The below list are common errors that may appear when attempting a **Zip** refund at POS. For additional assistance, please visit the[Zip Help Centre](https://merchant.zipmoney.com.au/?_ga=2.196638948.93740478.1508128522-178086624.1506388618#/)

|  |  |
| --- | --- |
| **Error** | **Explanation** |
| Invalid Refund | The Refund Value is greater then the value of the original order. |
| Gateway Error | The Refund was attempted with an invalid Zip Reference number. Check the Zip Reference and try again |