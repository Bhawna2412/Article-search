---
title: "Integrated Gift Vouchers"
articleID: 157
category: "Shopify > Add-Ons"
knowledgeBase: "Retail Express"
---

# Integrated Gift Vouchers

You can integrate **Retail Express** gift vouchers with Shopify's Gift Cards to create a seamless omnichannel voucher system, enabling customers to purchase and redeem vouchers both online and in-store. This integration helps improve customer experience and operational efficiency by automatically synchronizing voucher balances across all channels, eliminating manual reconciliation and ensuring consistent voucher management throughout your retail operations.

Setting up integrated gift vouchers involves enabling the add-on, configuring Shopify gift card products, and creating voucher products in Retail Express with appropriate synchronization settings. When properly configured, this integration typically leads to increased gift voucher revenue, reduced administrative overhead through automated balance updates, and improved customer satisfaction with flexible redemption options across all retail channels.

The Retail Express Shopify integration unlocks the ability to both sell and redeem Gift Vouchers online or in-store (connecting vouchers with Shopify's Gift Cards) making the shopping experience even more seamless for your customers.

![rtaImage - 2023-07-08T140212.531.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppPymEAE.jpg)

## Setup Instructions

To access this integration you will need to purchase a Retail Express[Gift Card add-on licence ](https://zfrmz.com/kUnQOQtFgSW2awRM0J4e)

### Step 1 - Enable the Integration

When configuring Retail Express and enabling the integration this will immediately synchronise all outstanding Gift Vouchers, Goodwill Vouchers and Promotional Vouchers.

> **Note:** Credit Notes, and Gift Vouchers with voucher codes that are not 8-20 characters, will not be synchronised with Shopify.

1. Log into your **Shopify ****Store **(this will speed up the process later)
2. In another tab, log into **Retail Express**
3. Navigate to **Settings > Integrations > Shopify**
4. Click the **Pencil **icon for the store
5. Click the **Add-ons **tab
6. Click **Enable **for the **Gift Vouchers **add-on
7. Click **Enable **to the pop-up
8. Click **Update Unlisted App**
  ![rtaImage - 2023-07-08T140217.444.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppQ6LEAU.jpg)
9. You will be redirected to Retail Express, and Gift Vouchers will begin to synchronise

### Step 2 - Enable the Shopify Gift Cards products

Enabling the Gift Cards products feature will allow Retail Express to create the products for you automatically through the synchronisation. When you enable the Gift Card products feature it will create a default Shopify Gift Card product.

This should be removed as it's not integrated with Retail Express.

1. Log into **Shopify**
2. Navigate to **Products > Gift Cards**
3. Click **Add Gift Card Product**

> **Note:** Once this option has been selected it cannot be undone.

4. Click **Discard**

### Step 3 - Check the Voucher Settings in Retail Express

Within Retail Express you can configure Vouchers to have default text (for example Terms & Conditions) and a Voucher Validity Period.

1. Navigate to **Settings > POS Settings > Voucher Settings**
2. Enter the **Voucher Text **to enter default text to be displayed on all vouchers

> **Note:** Using the codes [[Voucher Type]] and [[Company Name]] you can dynamically update the content in the text based on the type of voucher and company.

3. Select a **Voucher Validity Period**
4. Click **Save Changes**

![rtaImage - 2023-07-08T140225.215.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppPk1EAE.jpg)

### Step 4 - Create Gift Card products in Retail Express

Gift Cards have a similar process to setting up other products to be sold on the web store - they must be set up in Retail Express first.

> **Note:** Gift Cards must be set up as a product in Retail Express and published to Shopify - not created directly on Shopify (for detailed information refer to the Shopify - Product Synchronisation article).

**Important Notes:**

|  |  |
| --- | --- |
| Selling Gift Cards regardless of stock level | When you tick the "Product is a Voucher" option the "Prevent Disabling" will become automatically ticked; this is because a Gift Card is a virtual product always available for sale (regardless of the stock level in Retail Express). The Retail Express field "Prevent Disabling" will synchronise to Shopify to set the product to be sold when out of stock. We recommend creating a separate Product Type for your Gift Cards so they can be excluded from Inventory reporting within Retail Express. For more detail on creating products for Shopify refer to the Shopify - Product Synchronisation article. |
| Gift Cards cannot be grouped together using Manufacturer SKU | The manufacturer SKU is used to group products of the same style together - this does not apply to Gift Cards. Gift Cards are created as individual products on Shopify. |
| Pricing | Standard pricing rules apply for Gift Cards, including using the Web Price, Outlet-specific price and global POS Price. Using an RRP to indicate a promotional price (the Original price and Compare At price) is available. For more information on Pricing refer to the Shopify - Product Synchronisation article. |
| Product Attributes | Even if you configure the product Attributes in Retail Express (size, colour etc) these fields are ignored when synchronising and creating the product on Shopify (attributes are not relevant to a Gift Card). |

To create a Gift Card product in Retail Express:

1. Navigate to **Inventory > Create a Product**
2. Enter a **unique Supplier SKU** - any code can be used, as long as it's unique within Retail Express e.g. Gift50 for a Gift Card with a value of $50
3. Enter the details as required, ensuring that any fields with an asterisk (*) and border are completed (these are the mandatory fields)

> **Note:** For detailed information on each of these fields refer to Products - Create or Edit a Product/Package

4. Tick the option **Product is a voucher **in the Advanced Options section
  ![rtaImage - 2023-07-08T140231.947.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppQ6VEAU.jpg)
5. Enter a **POS Price** for the Gift Card (this will be the Available Balance of the card when purchased)
6. Tick the Shopify store in the **Publish To Shopify **option
7. Click **Save Changes**

### Step 5 - Finish Gift Card setup on Shopify

Once the product has synchronised to Shopify you should finish the product set up e.g. add images, description, assign to a collection etc.

Note that some of the fields will have automatically been configured for you:

|  |  |
| --- | --- |
| **Field** | **Details** |
| Title | The Short Description field in Retail Express (or Custom field if selected in the Shopify Configuration settings in Retail Express |
| Product Type | The Product Type from Retail Express |
| Vendor | The Brand in Retail Express |
| Price | The price of the product in Retail Express (this will also be the Balance of the Gift Card when created) |
| SKU | The Supplier SKU in Retail Express |
| Inventory - Allow customers to purchase this product when it's out of stock | Allows the Gift Card to be sold regardless of stock level. This is controlled by the "Prevent Disabling" option in Retail Express, automatically selected when ticking "Product is a Voucher" |
| Shipping - This is a physical product | Prevents shipping from being charged for a Gift Card (if purchased in conjunction with other products Shipping will still be charged if relevant to the other products) |

## Selling Gift Cards

When selling a Gift Card on either Retail Express or Shopify the end result is the same:

- A Gift Voucher is created in Retail Express and synchronised to Shopify as a Gift Card
- As a Gift Card is viewed as a form of currency Shopify will obscure all but the last 4 characters; you will need to refer to Retail Express to view the Voucher Code
  ![shopify_giftcard_currency.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppQ6aEAE.jpg)
- The Gift Card will not be available to use until the order has been paid in full

[Selling a Gift Card on Shopify](https://galaxy.maropost.com/kb/articles/157-integrated-gift-vouchers#shopify-sell-gift-card)

The purchase process for the customer on Shopify is similar to purchasing any other product:

1. Add the **products to the cart**
  ![rtaImage - 2023-07-08T140301.961.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppQ6kEAE.jpg)
2. Click **Checkout**
3. Enter a **Billing address**
4. Click **Continue to payment method**
5. Enter the payment details

> **Note:** A Gift Card will not be available to use until the order has been paid in full

6. Click **Complete order**
7. The order will be **synchronised to Retail Express**

> **Note:** Payments are synchronised separately to the order so there may be a slight delay in creating the voucher while the payment is processed

8. During the order create process the **product will be removed **and instead **replaced with a Gift Voucher**
  ![rtaImage - 2023-07-08T140307.762.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppPxKEAU.jpg)

> **Note:** Voucher expiry dates can be configured via Settings > POS Settings > Voucher Settings

9. After the **Gift Voucher **has been created it will be **synchronised to Shopify**
10. **Shopify will email the customer **the voucher code

[Selling a Gift Card in Retail Express](https://galaxy.maropost.com/kb/articles/157-integrated-gift-vouchers#rex-sell-gift-card)

The method for selling a Gift Card in-store using Retail Express is still the same, however the synchronisation to Shopify behaves a little differently. As the customer is in-store when the voucher synchronises to Shopify the online store *won't *email the voucher to the customer (as it would do normally if the Gift Card was purchased online).

To sell a Gift Card via Retail Express and synchronise to Shopify:

1. A voucher is created using the standard POS - Create a Gift Voucher or Credit Note process

> **Note:** The voucher code must be between 8-20 characters long to successfully synchronise to Shopify

> **Note:** Credit Notes are not integrated with Shopify; you should choose a Gift Voucher, Goodwill Voucher or Promotional Voucher type.

2. Click the **Invoice **tab
3. Click **Print Vouchers **to print the voucher for your customer
4. Click **Close **to close POS
5. The voucher will synchronise to Shopify

> **Note:** The voucher will not be emailed to the Customer via Shopify - it's assumed as the sale was processed in-store it was handed to the customer immediately

## Redeeming Gift Cards

Gift Cards can be redeemed both online and in-store using the same code.

[Redeeming a Gift Card on Shopify](https://galaxy.maropost.com/kb/articles/157-integrated-gift-vouchers#redeem-shopify)

Customers can use their Gift Cards when checking out online using a dedicated Gift card field in the checkout.

1. Add products to the cart
2. On the cart page click **Check Out**
3. The Cart page will be shown with the **Gift Card **section on the right-hand side.
  ![rtaImage - 2023-07-08T140315.057.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppQ6vEAE.jpg)
4. Enter the **Voucher Code **and click **Apply**

> **Note:** If the customer doesn't enter the code at this point and clicks Continue to payment method the Gift Card field will still be visible on the next page

5. The card will be verified, and if successful the Total will be updated for the order; displaying the remaining balance.
  ![rtaImage (7).gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppPToEAM.jpg)
6. Enter the **Contact Information** and **Billing Address**
7. Click **Continue to Payment Methods**
8. If the remaining order balance is $0 an image will be displayed that the order is **covered by the gift card**. Otherwise the customer will be instructed to **enter their payment details** for the remaining balance
  ![rtaImage - 2023-07-08T140333.990.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppQ79EAE.jpg)
9. Click **Complete Order**

> **Note:** There can be a short delay while the balance updates in both systems. It may be possible to immediately redeem the same balance in the other system while this is processed, however this is an intentional attempt to defraud the system. You can check for any redeemed vouchers both on Shopify and Retail Express before the synchronisation occurs if you suspect misuse.

[Redeem a Gift Card in Retail Express](https://galaxy.maropost.com/kb/articles/157-integrated-gift-vouchers#redeem-rex)

Gift Cards/Vouchers are redeemed in Retail Express on the Payments tab in POS, similar to other payment tender types e.g. Credit Cards, Cash payments etc.

1. Log into **Retail Express**
2. Open **POS**
3. Create a sale using the standard process
4. Click the **Payment** tab
5. Click the **Voucher/Credit** button
6. Enter the **Gift Card Code** into the **Scan or enter Voucher Code **field and press **Enter**
7. The voucher will be verified
8. Click the **arrow **in the **Amount to Redeem **field (or manually type in a value)
9. Click **Pay**
  ![rtaImage (8).gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppPnfEAE.jpg)

## Disabling Gift Cards

You can choose to [disable a Gift Card](https://help.shopify.com/en/manual/products/gift-card-products/manage-purchased-gift-cards#disable-a-gift-card) in Shopify if you don't wish for the voucher to be redeemable online.

Disabling a Gift Card on Shopify is permanent.

Disabling a Gift Card means that it will be unable to be redeemed online, but will also not receive updates from Retail Express e.g. if the Gift Card is redeemed in-store the balance will not be updated online.

## Gift Card Reports

Using Retail Express you can report on Gift Cards that have been created and redeemed. All reports can be found under the Reports menu.

> **Note:** Where the Filter "Sales Rep" is available you can select "Shopify Integration" to filter by Shopify sales only.

|  |  |  |
| --- | --- | --- |
| **Report** | **Details** | **Menu Path** |
| Voucher Creation Report | Displays individual details of all vouchers created within the selected period, including initial, redeemed and remaining values, along with the voucher status of open or closed. | Finance Reports > Voucher Creation Report or Accounting Reports > Voucher Creation Report |
| Voucher Creation Summary | Displays a summary breakdown of the individual Voucher types and the combined total values e.g. Credit Note - Initial, Redeemed and Remaining, Gift Voucher - Initial, Redeemed and Remaining etc | Accounting Reports > Voucher Creation Summary |
| Voucher Redemption Report | Used to report on Vouchers that have been redeemed, including the remaining balance. Can be filtered by open or closed vouchers. | Accounting Reports > Voucher Redemption Report |
| Income Report | Displays income received over a specific period grouped by Payment Type (including Gift Vouchers). The voucher code is not displayed on this report, but it will display the order details where the voucher was redeemed | Finance Reports > Income Report or  Accounting Reports > Income Report |

> **Note:** Sales of Gift Cards will appear in the Sales Report in Retail Express but with a $0 total and balance (unless other products were bought at the same time); this is because Gift Cards aren't considered a traditional product. Use the reports listed above for information on the sale specifically.

## Frequently Asked Questions

[Can I partly redeem a Gift Card?](https://galaxy.maropost.com/kb/articles/157-integrated-gift-vouchers#vouchers-part-redeem)

While Gift Cards can be used in conjunction with other payment methods, in Shopify it will always try to use the full remaining balance. In comparison, the User at POS in Retail Express will be able to manually enter a value to be redeemed should the customer only wish to use a certain value from the card.

See below for detailed information.

**Shopify**

If the voucher doesn't cover the full balance of the order you can use the remaining balance of the Gift Card plus additional payment methods to pay the order in full.

However Shopify doesn't allow you to specify an amount to be redeemed, so you will be unable to specify to only use a certain amount from the Gift Card first before using other remaining methods. It will use the full remaining balance of the Gift Card when being redeemed.

![rtaImage - 2023-07-08T140354.890.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppP32EAE.jpg)
**Retail Express**

You can use a Gift Voucher in conjunction with other payments, including the ability to specify an a value to be redeemed.

When using a Gift Voucher as a Payment Method the staff member will be able to type in a manual value in the **Amount to Redeem **field at POS

![rtaImage - 2023-07-08T140401.411.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppQ7JEAU.jpg)
[Issue Gift Cards without Payment](https://galaxy.maropost.com/kb/articles/157-integrated-gift-vouchers#gift-cards-nonpayment)

If you want to issue Gift Cards to your customers without an associated payment, for example if it's a Goodwill gesture, there are several ways you can do this:

1. **Bulk create: **Using the Customer Activity Report you can bulk create gift vouchers for customers - see the Customer Activity Report article for more information
2. **Using POS: **Using the Payment Type of None you can create a voucher using the standard process. At the point of payment use the Payment Type of None - this will allow you to reconcile the remaining balance of the order without physically receiving cash

> **Note:** This option should be used with caution to avoid unauthorised vouchers from being created.

[Using Gift Vouchers with multiple Shopify stores](https://galaxy.maropost.com/kb/articles/157-integrated-gift-vouchers#multiple-stores)

Gift Vouchers will be synchronised to all Shopify stores where the Gift Voucher add-on has been enabled. Any time the balance changes on the voucher the update will be synchronised to all stores.

If the Gift Voucher add-on has not been enabled for a Shopify store, that store will not have vouchers synchronised or updated.

**Want more information?**: [View all Shopify articles](https://galaxy.maropost.com/s/retail-article).

[What happens if I disable and re-enable the synchronisation?](https://galaxy.maropost.com/kb/articles/157-integrated-gift-vouchers#disable-sync)

If you disable and re-enable the Retail Express synchronisation (or delete your synchronisation and set it back up), any vouchers that had previously been synchronised will not synchronise again, preventing any duplicates from being created.