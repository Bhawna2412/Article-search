---
title: "Release Notes v3.8.0 - POS and Back Office"
articleID: 1143
knowledgeBase: "Help Articles"
lastUpdated: 2023-07-09
---

# Release Notes v3.8.0 - POS and Back Office

**Release Date:** 19th September 2019

We're excited to announce some exciting additions to our Promotional Campaigns feature, which are sure to prove invaluable to running your business, and appreciated by your customers. We've also introduced a new Shopify sync option, made some changes to our APIs, released a new and improved Onboarding experience for our customers, and lastly, **17**improvements and resolutions.

Also in this release: [Shopify Connector updates](https://galaxy.maropost.com/s/article/Release-Notes-v3-8-0-Shopify-Connecto), [API changes](https://galaxy.maropost.com/s/article/Release-Notes-v3-8-0-API-Change) and [Franchise Connect](https://galaxy.maropost.com/s/article/Release-Notes-v3-8-0-Franchise-Connec)

**Note:** Customers using the Ezypay Direct Debit system for monthly hosting, please be aware the description for the automatic billing will be updated to show the description "Ezypay\*Retail Express Services Pty Ltd - ONLINE".

---

## **Promotional Campaign updates**

In this release we've extended Promotional Campaigns with exciting new features!

**At a glance**

* **Coupon Codes** are now available, including the ability to restrict the number of uses per customer (note Coupons cannot be redeemed in Offline mode)
* **Invalid Coupon override** at POS i.e. force the redemption of a coupon even if not within the valid date range, or redeemable a separate Outlet
* **Minimum Spend** requirement
* **Dynamic Products using Product Attributes** to define Qualifying or Benefit Products
* **Display Custom Campaign names** on Invoices
* **Duplicate Campaigns** making it easy to create additional campaigns using the same rules and conditions

If you already have access to Promotional Campaigns you will automatically have the ability to create Campaigns using the new features.

Any existing Campaigns in the system will be unaffected by these changes.

To use the new Promotional Campaign features:

1. Enable the Coupon Override feature for via **Staff > POS Security****Features**  
     

   **Note:** Coupon Override is only recommended for management/senior staff; for more information refer to the [POS Security Feature](https://galaxy.maropost.com/s/article/Managing-POS-Security-Features) article
2. Navigate to **Settings > Promotional Campaigns**
3. Create a new campaign, or edit an existing one
4. Update your settings as required
5. Click **Save Changes**

![mceclip0 - 2023-07-09T222839.416.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphKjEAI.jpg)

[Back to top](#top)

### Coupon Codes

When creating a Campaign, users can now configure the campaign to be redeemable through POS when the customer presents a Coupon Code to the staff member.

**Tip:**Coupons are useful when doing widespread advertising (online ads, print media etc) where a generic code can be provided to attract new/returning customers to receive the discount, instead of a specific code per customer.

Coupon codes are manually entered when creating a Promotional Campaign (on the Details tab)

![mceclip1 - 2023-07-09T222847.215.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgeVEAQ.jpg)

Redemption of a coupon code can be done in POS by clicking the Coupon button from within a sale.

![mceclip2 (78).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphL3EAI.jpg)

If a Coupon is added to the sale but either hasn't added the products required by the Promotional Campaign, or not added to a customer to the sale (if using a usage limit per customer) a warning will be displayed at the bottom of the screen.

![mceclip3 (48).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphL8EAI.jpg)

**Note:** Integration of Promotional Campaigns between Shopify and Retail Express has been earmarked for future development on our [Product Roadmap](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Farticles%2F360000964916).

[Back to top](#top)

### Invalid Coupon Override

When redeeming a coupon at POS, you may come across an occasion where the coupon is invalid e.g. expired, or only available for specific Outlets. Using the Invalid Coupon Override feature, you will be able to force the redemption of the coupon.

**Tip:**Invalid Coupon Override is recommended to be used by management/senior staff only

![mceclip3 (49).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphLDEAY.jpg)

To enable the feature:

1. Navigate to **Staff > POS Security Features**
2. Select your **Profile**
3. Tick **Allow Override of Invalid Coupon**
4. Click **Save**

[Back to top](#top)

### Minimum Spend Threshold

Using the new Minimum Spend Threshold, you can restrict promotional campaigns from being applied until the customer's order value has reached a certain value.

![mceclip0 - 2023-07-09T222924.898.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgpiEAA.jpg)

To access the new setting:

1. Open a Promotional Campaign (or create a new one)
2. Click the **Discount**tab
3. From the "When the customer" drop-down field select **spends at least**
4. Configure the remainder of the campaign as required
5. Click **Save Changes**

[Back to top](#top)

### Dynamic Products using Product Attributes

Qualifying products can now be added dynamically using product Attribute filters, including:

* Product Type
* Brand
* Season
* Size
* Colour
* Custom Attributes

**Tip:**Using the Dynamic Products section will automatically add new matching products to the Campaign

Using this feature you can opt to select Attributes for the campaign, rather than specific products themselves.

For example, if running a campaign on a specific Brand in the past you would need to do a product search, highlight the brand, and then add the products from the search results. With the new Dynamic Products feature you only need to select the brand within the Dynamic Products attribute section. All products that match that brand will be included on the campaign.

![mceclip5 (22).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphLcEAI.jpg)

[Back to top](#top)

### Display Custom Campaign Names on Invoices

Within the Promotional Campaigns setting you can enter a custom name for your campaign to appear on Invoices. This can then be referred back to by both customers and staff as required.

To enter a custom name:

1. Navigate to **Settings > Promotional Campaigns**
2. Edit your Campaign (or create a new one)
3. Update the **Invoice/Receipt Name** field as required
4. Click **Save**

![mceclip7 (15).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphLhEAI.jpg)

[Back to top](#top)

### Display changes to the Promotional Campaigns list

The layout of the list of campaigns has been improved to allow for greater visibility of information on each campaign easily and efficiently.

* New "Coupon Code" column to display the code associated with the campaign
* "Is Active" column renamed to "Active"
* Removal of "Tiers" columns
* Reordering of columns

Navigate to **Settings > Promotional Campaigns**to see the changes.

![mceclip0 - 2023-07-09T222944.442.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphLmEAI.jpg)

[Back to top](#top)

### Duplicate Promotional campaigns

Using the new Duplicate Promotion feature, you can quickly create a new promotion using the same rules as the original, including:

* Associated Outlets
* Discount Rule
* Qualifying Products
* Benefit Products

Coupon codes will not be copied, as these will need to be unique for each promotion.

![mceclip0 - 2023-07-09T222950.352.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphG4EAI.jpg)

---

## **New Loyalty Point Redemption Restriction**

A new setting has been added to the Loyalty Configuration, used to control when Loyalty Points can be redeemed against a sale.

**At a glance**

* Set a **Minimum Points for Redemption**value
* Can be set by either **Points to Date**or **Points Available**
* **Warning at POS**if the customer has not reached the Minimum Points for Redemption value

The new setting can be configured via **CRM > Loyalty Configuration**.

![mceclip1 - 2023-07-09T222955.315.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphLrEAI.jpg)

The minimum redemption points value can be configured using either of the following options:

|  |  |
| --- | --- |
| Points to date | Factors in all transaction history for the customer, regardless of whether points have been redeemed previously |
| Points Available | The points balance for the customer account, factoring in any points earned minus any points previously redeemed. |

If a customer attempts to redeem points but has not met the Minimum Points value, a warning will be displayed at POS.

![mceclip2 (79).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphJcEAI.jpg)

[Back to top](#top)

---

## **New Onboarding Console**

Retail Express has introduced a new Onboarding Console, making it easier than ever to implement Retail Express. This replaces the former Implementation Console.

![image](/attachments/token/gRvVeXyHwHvMKXjQKG6EQUXgr/?name=inline-1283558452.png)

The Console includes an updated design, new Essential and Optional steps, integrated access to the Knowledge Base, and new and updated content. To access the new console:

**Note:**an account is required to sign in - to request access for a Primary Contact from your company please contact [support@retailexpress.com.au](mailto:support@retailexpress.com.au)

1. Navigate to **Help & Support > Implementation**
2. The Console will open in a new window
3. Click **Get Started Now**(or the Sign In link in the top right-hand corner)
4. Enter your account details
5. Click **Sign in**
6. The Onboarding Console will be displayed ready for you to begin

[Back to top](#top)

---

## **Improvements**

Below is a list of improvements included in the latest Maintenance Release:

|  |  |
| --- | --- |
| Offline POS | MultiBuys have now been renamed to [Promotional Campaigns](https://galaxy.maropost.com/s/article/Creating-Promotional-Campaigns-and-Coupons), in line with the updates from [Release v3.7.0](https://galaxy.maropost.com/s/article/Release-Notes-v3-7-0-POS-and-Back-Offic). |
| Stock Replenishment | The Run Rate and Depleted Stock periods can now be set in two ways, either a number of days prior to the date of the Replenishment run (including scheduled runs) or for a specific date period. This can be useful when calculating suggested stock quantities for peak periods e.g. Christmas trade. |
| Stock Replenishment | The Run Rate Period and Lead Time fields are now hidden from the Sales or Minimum Stock Level formula pages (as these fields are not relevant to the calculation of suggested stock quantities). |
| Stock Replenishment | The Depleted Stock formula now includes the ability to filter by a Sales Period (either x previous dates or a specific date range) |
| Label Printing | Internet Explorer Compatibility View is no longer required to be enabled for the Label Printing feature (the site must still be listed as a Trusted Site with Active X settings configured correctly - refer to the [Settings - Configuring Internet Explorer](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Farticles%2F203100254) article for more information. |
| Promotional Campaigns | Clicking the "Instructions" button will now direct Users to the Knowledge Base article with helpful tips and tricks, campaign recipes and training videos. |
| Promotional Campaigns | The Outlet tab has been redesigned to allow for easier addition/removal of Outlets to campaigns |
| POS Email Templates | A new POS Email Template Placeholder allows you to insert the name of the Outlet where the user is currently logged into e.g. if the order has been assigned to Brisbane but the user is logged into the Gold Coast, it will display Gold Coast.  This is best used for online Click and Collect orders where email notifications are sent from varying Outlets to advise customers their orders are ready for collection. |
| Customers | When editing a customer in Back Office, the Reference ID column (used for internal purposes only) has been replaced with the Order Number. Clicking the Order Number will open the order within POS. |

## **Resolutions**

Below is a list of resolutions included in the latest Maintenance Release:

|  |  |
| --- | --- |
| Stock Replenishment - Depleted Stock | The "MovementType" column has been renamed to "Movement Type" |
| Promotional Campaigns | The Promotion is now applied in POS if the End Date matches current date. |
| POS Customer Search | Inconsistencies with the search result orders when searching by Last Name only have been resolved. |
| POS Invoices | The Dispatch Invoice Grand Total correctly includes the Freight Value |
| Promotional Campaigns | A Campaign can now been removed from a sale if the products are exchanged |
| Promotional Campaigns | Benefit Products cannot be a Qualifying product; if a product is both a Qualifying and Benefit product it will be removed from the Qualifying Products list. |
| Customers | Clicking the Edit Customer (pencil) icon on the Customers Search Results window correctly opens the customer for editing. |
| Offline POS | An issue with the "This device also runs the Offline Server" tick box has been resolved |

**Tip:** Stay up-to-date with news from the Support team - **[subscribe now](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Farticles%2F360000907875)**

[View all release notes](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Fcategories%2F115000210393)