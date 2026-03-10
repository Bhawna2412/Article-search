---
title: "Checkout Settings"
articleID: 1037
category: "Set up Neto > Payments > Maintenance & Tweaks - Payments"
knowledgeBase: "Neto By Maropost"
---

# Checkout Settings

You now have the option to toggle settings and add custom fields to streamline the order process. Settings can be found in the **Webstore** > **Checkout Settings** menu.

## Checkout Rules

| **Checkout Rules** | **Description** |
| --- | --- |
| Enable guest checkout | Allow customers to checkout without registering an account with your business. |
| Enable confirm email address | A confirm email address field will appear at checkout requiring customers to re-enter their email address. |
| Enable subscribe to newsletter | Customers will have the option to opt-in to your email newsletter at checkout. |
| Customer must add a company name | Company name becomes a required field on the checkout page. |
| Show kit items in order summary | Show or hide kit items if a customer has a kit in their order, only on the checkout. |
| Checkout logo position | Change the position of the logo in managed checkout; left, centre, right |
| Allow formatting in shipping description | Allow limited HTML in shipping description. Note broken HTML could cause issues on the checkout. |
| Enable checkout alert message | If enabled, customers will see an additional message displayed at the top of the checkout page. |
| Checkout alert message | Content of the checkout alert message. Limited html is permitted. |
| Customer must agree to terms & conditions | Customers must first agree to your terms and conditions prior to checkout. |

## Order Rules

| **Order Rules** | **Description** |
| --- | --- |
| Put new orders on hold | All new orders will be placed in the on hold status when created. |
| Put orders on hold for new customers | All orders for new customers will be placed in the on hold status when created. |
| Enable out of stock checkout | Customers can buy items even when they are out of stock. |
| Enable coupon/promo codes | Displays the coupon / promo code section on the checkout page. |
| Enable vouchers | Displays gift voucher section on the checkout page. |
| Show purchase order number field on checkout | Displays the number field on the checkout page. |
| Allow quotes before checkout | Customers will be able to create quotes on your web store before reaching the checkout page. Typically available from the ‘Cart’ page. |
| Hold orders over a certain amount | Order will be placed on hold if grand total is greater than the configured number. |

## Shipping Rules

| **Shipping Rules** | **Description** |
| --- | --- |
| Enable multi-address shipments | Customers can split their order at checkout, to have products on the order shipped to separated addresses. This creates separate orders for you to fulfil separately. |
| Show desired delivery date selector | A delivery date selector will appear at checkout allowing the customers to select their preferred delivery date for an order. The delivery date selected will be populated to the “date required” field on the related order. |
| Signature required by default for all orders | The signature required field on all shipping consignments will be set to true by default. |
| Hide authority to leave (signature required) option | Hides the option for customer to opt for authority to leave at checkout. |
| Show ‘Send invoice with goods’ option at checkout | Allow customers to select orders for drop shipping (shipping without invoice or blind shipping) at checkout. |
| Show delivery instructions on checkout | Allows customers to enter their delivery instructions at checkout, which can be printed on carrier labels. |
| Customer must add delivery instructions | This will make the delivery instructions a required field on managed checkout. |
| Delivery instructions help text | Display help text under the delivery instructions field on managed checkout. |
| Default shipping option | Determines the default shipping that is selected for customers at checkout. |
| Default shipping address option | Determines which shipping address option to show by default to existing customers. |
| Free shipping text at checkout for orders | Shipping options without a price will display the configured text at checkout. Typically used to highlight options that are free. |
| Free shipping text at checkout for quotes | Shipping options without a price will display the configured text when placing a quote. Typically used to highlight options that are “Price on application”. |
| Free shipping text at checkout for web store | Shipping options without a price will be displayed with the configured text on the web store. This will be seen before the customer reaches checkout. |
| Shipping spend promotion is applied | Determine if shipping spend promotions (e.g. Free shipping when you spend over $100) are applied before or after any discount coupons. |
| No shipping methods available text | When there are no available shipping options the configured text will show at checkout. Typically used to prompt user to try different address. |

## Custom Order Fields

> **Note:** These fields require the [add-on](https://galaxy.maropost.com/kb/articles/1581-order-custom-fields).

Custom order fields are a way to get more information from the customer on the checkout page. They're saved to the order in your control panel. To add a custom field, click the green **Create custom order field** button. You will be able to create settings for your custom field:

| Field Settings | Description |
| --- | --- |
| Custom Field | Pick an available custom field from the dropdown |
| Field Name | This is the name which will appear on your checkout |
| Field Type | Select 'Text' if the information required will exceed one line in length or select ‘Short Text’ if the information will fit on one line. |
| Show on Restricted | This is a deprecated field, do not use |
| Required Field | Select whether or not this information is a mandatory field at checkout |
| Field Description | Gives a description of the the field |

## Custom Customer Fields

Custom customer fields allow you to gather more information about a customer at checkout. These details will be saved to a customer's card once checkout is complete. To add a custom field, click the green **Create custom customer field** button.

In this section, you will be able to create settings for your custom field:

| **Field Settings** | **Description** |
| --- | --- |
| Custom Field | Pick an available custom field from the dropdown |
| Field Name | This is the name which will appear on your checkout |
| Field Type | The type of field you want to display |
| Show on Website | Toggle if you want this field to appear on checkout |
| Required Field | Select whether or not this information is a mandatory field at checkout |
| Field Description | Gives a description of the the field |

## Custom Checkout Header

You can customise your checkout header in 2 ways, by uploading a banner, or setting a background colour. We recommend a banner size of 1920 x 225px. To customise your checkout header:

1. In your Neto control panel navigate to **Webstore** > **Advertising Campaigns**.
2. Click the **Add new advertising campaign** button.
3. In the Banner, Carousel Slide or Text Advert section click the **Add New** button.
4. In the Group drop down menu, select **managed_checkout_banner** and click the **Save & Continue** button.
5. In the Ad Builder section, click the **Choose File** button to upload a banner to your checkout page header.
  Alternatively, enter a 6 digit hex code in the **Call to Action Link Text** to set a checkout header colour.

  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CheckoutSettings00001.05T5g00000xqHsyEAE.png)

  Click the **Save** button.

Your checkout page header will now display your configured banner or colour.