---
title: "Receiving Account Customer Payments"
articleID: 402
category: "Customers > Account Customers"
knowledgeBase: "Retail Express"
---

# Receiving Account Customer Payments

You can process account customer payments to reduce outstanding balances and maintain healthy cash flow, helping ensure timely payment collection and accurate account reconciliation. This improves your retail operations by providing systematic payment recording, with properly configured payment processing typically enabling better cash flow management and reduced accounts receivable aging.

Understanding payment processing involves recognizing payment allocation methods, multiple invoice application, and receipt documentation to help retail operators focus on the right payment collection workflows, ensuring your retail strategy consistently drives better cash flow and account accuracy outcomes.

The Customer Account Payments feature allows you to search and view account customers with (or without) a balance owing, and apply payments to one or more invoices. For information on creating Account Customers refer to the Customers - Creating Account Customers article.

## Before you Begin

- All payments will be recorded against the Cash Up/End Of Day of the system-generated Back Office register for the selected Outlet
- Once an End of Day has been submitted the data is immutable i.e. cannot be changed (for accounting reconciliation purposes). Backdating payments will not retrospectively change submitted cash-ups for this reason.
- Credit Notes are available to pay for invoices via this page; other Voucher Types must be redeemed at POS

## []()Add an Account Customer Payment:

To make a Customer Account Payment:

1. Navigate to **Reports > Customer Reports > Account Payments**
  ![blobid0 (29).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppcgLEAQ.jpg)
2. Enter data into the filters as required (you can leave these blank to search all customers)
3. Click **Search**
4. The results will be displayed on the **Results **tab
  ![customers_customeraccountpayments.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppcgQEAQ.jpg)
5. To view **Address **details for the customer click on the arrow in the left column to expand the details
6. To make a **Payment **click the **$ **icon in the **Actions **column
7. The **Customer Account Make Payment** window will open
  ![customers_accountmakepayment.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppcgVEAQ.jpg)
8. Select from the **What would you like to do? **field to select between adding a payment against invoices or to use an existing credit

> **Note:** Each option is explained in further detail below. Note that if the credit option doesn't appear there's no existing credit for the selected customer.

9. Enter the payments/credit
10. Select a **Payment Method**
11. Select the **Outlet** to be associated with the Payment

> **Note:** The payment will be applied against the Back Office register.

12. The **Payment Date **will be automatically populated with the current date/time however can be backdated to match your bank statement at this point
13. Click **Apply Payment**

## []()Payment Options

To pay invoices outstanding against an account you can either enter a customer payment or apply a credit note.

- [Enter a payment](https://galaxy.maropost.com/kb/articles/402-receiving-account-customer-payments#payment)
- [Use Credit Note](https://galaxy.maropost.com/kb/articles/402-receiving-account-customer-payments#credit-note)

When entering payments against invoices there are two options to choose from:

1. Add payments manually against each invoice
2. Use the "Amortise Down" feature to automatically allocate payment (oldest invoices have payments applied first)

Click on the headings below to read more detail about each process.

> **Note:** Payments are not applied to invoices until you click the **Apply Payment **button.

[Add payments individually per invoice](https://galaxy.maropost.com/kb/articles/402-receiving-account-customer-payments#create-payment-individually)

To enter a payment individually against an invoice:

![customers_accountcustomerpayinvoice.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppbufEAA.jpg)

1. Select **Create payment to apply to invoices **from the **What would you like to do? **drop-down
2. Use the **Invoice Number **column to locate the Invoice to be paid

> **Note:** The External Reference column can also be helpful for locating invoices - this displays Order Numbers from external systems (e.g. integrated Shopify stores) or if manually entered in POS

3. Enter the payment amount in the **Payments **field
4. Add any additional payments to other Invoices as required
5. Follow the remaining steps above to finalise the payment

[Use the Amortise Down feature to allocate payments automatically](https://galaxy.maropost.com/kb/articles/402-receiving-account-customer-payments#create-payment-amortise)to allocate payments automatically

The Amortise Down feature allows you to enter a lump sum against Payment or use an existing Credit sum, and have it divide and apply automatically across outstanding invoices. The oldest invoices will have payments applied first.

> **Note:** After amortising, you can overwrite any specific invoices by editing the values in the payments boxes.

1. 
2. 
3. The payment will be automatically added to the **Payments **field for each invoice, starting with the oldest invoice, until the total value of the payment has been used

> **Note:** The payments are not applied until you click the **Apply Payment **button as per the instructions above.

4. Follow the remaining steps above to finalise the payment

![customers_accountcustomersmakepayment_amortise.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppcgaEAA.jpg)
If your account customer has Credit Notes available, these can be applied to outstanding invoices using the Amortise Down feature.

The Amortise Down feature allows you to enter a lump sum against Payment or use an existing Credit sum, and have it divide and apply automatically across outstanding invoices. The oldest invoices will have payments applied first.

> **Note:** Only Credit Notes are available here to be used for payment. If you wish to use alternate Voucher Types (Gift Voucher, Goodwill and Promotional) they will need to be redeemed via POS.

To redeem a Credit Note:

1. Select **Apply existing credit to invoices **from the **What would you like to do? **field
2. The total value of outstanding credits for the customer will be displayed in the **Credit: Total Credit **field
3. Click **Amortise Down**

> **Note:** **After amortising, you can overwrite any specific invoices by editing the values in the payments boxes.**

4. Follow the remaining steps above to finalise the payment

## []()**Frequently Asked Questions**

[How do I Cash Up Back Office Customer Account Payments?](https://galaxy.maropost.com/kb/articles/402-receiving-account-customer-payments#collapseOne)

As noted in the Considerations at the top of this article, all payments made via the Customer Account Payments page will be recorded against the Cash Up/EOD of the system-generated Back Office register for the selected Outlet

If you usually log into POS using a different Register name, you will need to complete the EOD Cash Up for both your standard register AND the Back Office register.

To complete a Cash Up of the Back Office Register:

1. [Logout](https://ress.zendesk.com/hc/en-us/articles/203273584) completely from POS
2. Login in again, selecting the Back Office Register
3. Complete Cash Up.

For assistance completing a Cash Up, please refer toHow do I complete a Cash Up/End of Day at POS?

You can use the Income Report to reconcile these payments, via Reports > Finance Reports > Income Report. Select to filter by Outlet, then select the Back Office Register.