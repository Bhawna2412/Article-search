---
title: "Product Search"
articleID: 476
category: "Inventory > Getting Started With Inventory"
knowledgeBase: "Retail Express"
---

# Product Search

You can locate products quickly and efficiently through Product Search capabilities in **Retail Express**, which support searching by multiple criteria including product codes, descriptions, suppliers, and categories. This search functionality helps retail operators reduce transaction time and improve operational efficiency, with effective product search use typically achieving faster checkouts and better customer service across Australian retail operations.

Product Search functionality in **Retail Express** enables retail operators to quickly locate products during sales, inventory management, and reporting activities, helping ensure efficient retail operations. This search capability helps ensure your retail operations can efficiently find products regardless of how customers describe them, supporting smooth transactions and improved customer experience.

The Product Search feature allows users to perform detailed searches for products using an extensive amount of filters and search criteria, while hiding costs and GP figures. 

For more advanced searches, including the ability to bulk edit products and view product cost information, refer to the Product Search & Management feature.

![rtaImage - 2023-07-09T003002.037.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppX39EAE.jpg)

## []()Using Product Search

To use the Product Search feature:

1. Navigate to **Inventory > Product Search**
2. Use the **Search **and **Refine **options to perform a search (click on the Refine Search and Refine By Attribute headings to expand the options)

> **Note:** Leave the fields as per default and click Search to display all products in the search results

3. Click **Search**
4. Click the **Pencil **icon to open a product for editing

## []()Search Filters

The Search Filters allow you to narrow the search results to a smaller number of products. There's an extensive list of search fields at the top, and by clicking on the Refine Search and Refine by Attributes sections you can search using additional filters e.g. Product Type, Outlet, Max Discount Rules etc.

|  |  |
| --- | --- |
| **Filter** | **Description** |
| PLU (Product ID, Supplier SKU, Manufacturer SKU) | Used to filter by specific products only. The code in this field must be an exact match.  > **Note:** Using this filter will override all other filters i.e. they will be ignored.    > **Note:** Search for multiple products by entering each code separated by a comma e.g. 124001,124002. |
| PLU Wildcard Search | Tick this box to apply a wildcard search to the value entered into the  PLU field above.  > **Note:** Wildcard allows you to enter only part of the code and if there is any match, even in the middle of the SKU code, the products will be included in the search results.   For example, if the Supplier SKU was "TOP1-BBLK-MED", typing "BBLK-MED" into the PLU field *without *the wildcard option ticked will not return any results. Ticking Wildcard Search and re-running the search will include that product, along with any other products containing "BBLK-MED" in their codes. |
| Short Description | Matches the text for the Short Description (the Name of the product) |
| Stock Levels | Displays products based on the current Available quantity. Options include:  - Some AVL Some Stores - At least one Outlet has an Available quantity above zero - Zero AVL All Stores - All Outlets have an Available quantity of zero or below - Zero AVL Some Stores - At least one Outlet has an Available quantity of zero or below   > **Note:** You can select the appropriate Outlets in the Refine Search section |
| With Custom Loyalty Ratio | Products configured to earn a different Loyalty points ratio than the default settings |
| Custom Fields | Returns any products with matching content in the Custom 1, Custom 2 or Custom 3 fields |
| Core Products | Products indicated to be one of the main product lines carried by the business |
| Auto Replenish | Used to filter by products configured to create Purchase Orders automatically when sold at POS (refer to the Product Replenishment article for more information on this feature) |
| Show Packages | By default the option to display both Products and Packages is selected. Select from the drop-down to select only products, or only packages. |
| Display Product Attributes in Results | Used to control whether the default attributes only are displayed in the search results, or if custom-created attributes should be included |
| Prevent Disabling Checked | The "Prevent Disabling" feature allows products to be oversold into negative quantities. Ticking this option displays products in the Search Results that have this setting enabled |
| Price Updated From/To | Displays products based on the "Price Last Updated" field, and if the date the price was last updated matches the search requirements.  > **Note:** The "Price Last Updated" field is updated any time the price changes for the product (both globally or at an Outlet level). |
| Show Disabled | By default Only Enabled is selected. Select from the drop-down to target only Disabled, or Both Enabled and Disabled. |

## []()Search Results

![rtaImage - 2023-07-09T003018.470.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppWlzEAE.jpg)
After making your selections on the Filters tab click Search. You will be redirected to the Results tab where you can find:

- A **list of the products** in order of Product ID (click on the Column headings to reorder the products based on the column)
- A **Pencil** icon to open the product for editing

> **Note:** While the edit button appears for all users, only users with access to Product Search & Management will be able to open the Product Edit page.

- The Page Size selector used to control the number of product results per page

> **Note:** By default, there will be 10 results per page; this can be expanded to 20 or 50 results using the Page Size drop-down at the bottom of the result

|  |  |
| --- | --- |
| **Column Name** | **Description** |
| Product ID | The identification number generated by Retail Express when the product was created |
| Sup SKU | Supplier SKU |
| Man SKU | Manufacturer SKU |
| Colour | The selected Colour attribute for the product |
| Size | The selected Size attribute for the product |
| Season | The selected Season attribute for the product |
| Short Description | The name of the product |
| Supplier | The selected Supplier for the product |
| Product Type | The Product Type used to categorise the product |
| Avl | The current Available Quantity based on the selected Outlets in the Search tab |
| Sell | The current selling price for the product - if multiple Outlets are selected it will display the global POS price |
| Web Price | The web price for a product if configured (if this field has not been set it will display $0.00) |
| Price Last Updated | The date the price for the product was last updated (this can be done either manually or through the Mass Upload process) |
| Core | If the product has been ticked as a main product line |
| PD | Whether the "Prevent Disabling" feature has been enabled for the product |
| DP | Whether the product is marked as Disabled or not |

## []()Frequently Asked Questions

[Finding products integrated with web stores](https://galaxy.maropost.com/kb/articles/476-product-search#products-web-store)

To search for products integrated with Web Stores:

1. Click the **Refine Search **heading to expand the section
2. Use the **Sales Channels **filter to select the required web store

> **Note:** This will display either the URL for the Shopify web store or the Sales Channel name for eCommerce API/Magento web stores.

3. Click **Search**