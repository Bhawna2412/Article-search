---
title: "Can I sell products on Consignment?"
articleID: 634
category: "Frequently Asked Questions > POS"
knowledgeBase: "Retail Express"
---

# Can I sell products on Consignment?

You can manage consignment inventory in Retail Express to expand your product offering without upfront inventory investment, helping your retail operations provide diverse merchandise while managing financial risk. This capability enables proper tracking of consignment items that you don't own but sell on behalf of suppliers, which helps ensure accurate accounting and commission calculations.

Setting up consignment management enables your retail operations to expand product selection strategically, helping optimize inventory diversity while maintaining clear financial separation between owned and consigned goods. This helps retail businesses offer broader product ranges while tracking consignment sales accurately for proper supplier settlements.

Find **related articles **at the bottom of this page.

Consignment stock is a process where you accept consignment stock on behalf of someone else and intend to sell it in your store.

Consignment stock is not a specifically supported function in Retail Express, however, we have provided a suggested example below for how you could manage consignment stock within your business.

As part of this process, you will be required to enter the Customer details into the system.

> **Note:** This information is provided as a suggestion only, and may not suit all requirements. Ensure to review the details before making decisions regarding your own business processes.

## []()Before you Begin

Before you begin you will need to set up a product in the Back Office to use as a placeholder "Consignment" product.

The creation of a miscellaneous Consignment Product is only required once during the initial setup, then will be used ongoing to sell all consignment items at POS (the product information is edited within POS to display the correct details).

> **Note:** The "Consignment" product is designed to be used for all consignment sales going forward. You do not need to create a new consignment Product each time a consignment item is processed.

To create a Consignment product:

1. Navigate to **Inventory > Create a Product**
2. Enter the information as below

|  |  |
| --- | --- |
| **Field** | **Details** |
| Short Description | "Consignment Stock" (or something similar) so that it's easy to search for in POS |
| Supplier SKU | "CONSIGNMENT" (or something similar) so that it's easy to search for in POS |
| Product Type | Recommendation: create a separate Product Type of "MISC" (or similar) to exclude this Product Type from reporting where required. |
| Supplier | Recommendation: create a MISC supplier (or similar) to exclude the Product Type/Products where required |

For detailed information on creating a Product refer to the Inventory - Create and Edit Products article.

## []()Step 1 - Create a sale at POS for the Consignment Stock

In the first step, you'll be using the placeholder product to process the sale to the customer.

1. **Create a sale** in POS using the normal methods
2. Add the **Consignment** product to the sale
3. Double click the Product to access the **Edit Product** screen

> **Note:** Press and hold the product on tablets and touchscreens to open the Edit Product screen

4. Update the description with the relevant consignment details
5. Change the Fulfilment Type to **Layby & Pickup **(this will allow you to edit the product later)
6. Click **Done**
7. Click into the **Price** field and update the price
8. The Products tab will now reflect the edited Product description and price
9. Click the **Customers **tab and add the customer

> **Note:** You may need to create a New Customer if required. This step enables you to sell the product on the Layby method.

10. **Complete the sale** as normal, entering a payment etc

## []()Step 2 - Create the new Product in Back Office

Typically the product price from the supplier is not confirmed until the product is sold. Using the placeholder product allows you to still sell the product to the customer.

You will then be able to correct the true product in Back Office with the correct Buy Price (and therefore calculate the correct details, including Cost of Goods Sold etc, so your reporting is accurate.

Create the Product in Back Office following the instructions in the Inventory - Create and Edit Products article. You may wish to assign the Product a Misc or Consignment Product Type and/or Supplier for reporting purposes.

## []()Step 3 - Exchange the products on the original Sale

Once the correct product has been created in POS, you will be able to exchange it with the placeholder Consignment product in POS. This way the sale will be attributed to the correct product and your reports will reflect the correct COGS.

> **Note:** Ensure you have updated all of the product information for the new product in Back Office (including Supplier Buy Price) before exchanging the products.

To exchange the products:

1. Open **POS**
2. Use the **Lookup **feature to locate the original sale

> **Note:** refer to  for assistance in using this feature

3. Edit the **Quantity **of the Consignment Product to be zero (this will cross out the line)

> **Note:** you can choose to hide refunded (zero item) Products from the customer's invoice and receipt (both products will continue to display on your POS screen). Refer to the Invoice & Receipt settings for more information

4. **Add** the correct product to the sale
5. **Finalise** the sale