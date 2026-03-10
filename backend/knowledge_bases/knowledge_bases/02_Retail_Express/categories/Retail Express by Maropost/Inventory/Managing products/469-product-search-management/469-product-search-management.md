---
title: "Product Search & Management"
articleID: 469
category: "Inventory > Managing products"
knowledgeBase: "Retail Express"
lastUpdated: 2026-02-01
---

# Product Search & Management

You can optimize product discoverability and streamline catalog navigation through Product Search Management in **Retail Express**, which enables configuring search behavior and improving product findability for retail staff and customers. This search optimization helps retail operators reduce product lookup time and improve transaction efficiency, with effective search management typically supporting faster checkouts and better customer service across Australian retail operations.

Product Search Management in **Retail Express** enables retail operators to configure search parameters and product visibility, helping ensure efficient product discovery during sales transactions and inventory management activities. This search configuration capability helps ensure your retail operations can quickly locate products while supporting efficient POS operations and improved customer service delivery.

The Product Search & Management functionality combines powerful searching features with the ability to edit products en masse, or directly on a product from within the Search Results tab. Using Product Search & Management can save you a great deal of time, by applying changes quickly and easily to your products.

> **Note:** Staff can perform a similar search without accessing the bulk actions or cost/GP values via the standard Product Search functionality.

## Using the Product Search & Management Tool

You can access Product Search & Management using any of the below methods:

- Inventory > Product Search & Management
- Reports > Stock Reports > Product Search & Management
- Quick Links > Product Search & Management

![mceclip0 - 2023-07-10T045026.939.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjRhEAI.jpg)

> **Note:** It's recommended to perform a Mass Download as a record of your product settings before applying bulk changes.

To use Product Search & Management:

1. Navigate to Product Search & Management using one of the methods described above
2. Leave the fields as per default to search for all products
3. Click **Search**
4. Use the** action fields** at the top to apply bulk actions
5. Click the **Pencil **icon to open a product for editing
6. Click **Export to Excel **to download the results into an excel file
7. Update a product row within the table to make changes directly to a product and click **Save Changes **to save the modifications

## Search Filters

![Screenshot 2026-01-20 at 4.41.51 PM.png](https://us.v-cdn.net/6038474/uploads/6TC3EZZFEAE3/screenshot-2026-01-20-at-4-41-51-e2-80-afpm.png)
The Search Filters allow you to narrow the search results down. There's an extensive list of search fields at the top, and by clicking on the Refine Search and Refine by Attributes section you can search using additional filters e.g. Product Type, Outlet, existing Max Discount rules etc.

Most of the filtering fields are self-explanatory, however, see the detailed information below for the more advanced fields.

|  |  |
| --- | --- |
| **Field** | **Details** |
| PLU (ProductID, Supplier SKU, Manufacturer SKU, Additional Barcodes) | Used to filter by specific products only. The code in this field must be an exact match.  > **Note:** This filter will override all other filters i.e. they will be ignored.    > **Note:** Search for multiple products by entering each code separated by a comma e.g. 124001,124002. |
| PLU Wildcard Search | Tick this box to apply a wildcard search to the value entered into the  PLU field above.  > **Note:** Wildcard allows you to enter only part of the code and if there is any match, even in the middle of the SKU code, the products will be included in the search results.   For example, if the Supplier SKU was "TOP1-BBLK-MED", typing "BBLK-MED" into the PLU field *without *the wildcard option ticked will not return any results. Ticking Wildcard Search and re-running the search will include that product, along with any other products containing "BBLK-MED" in their codes. |
| Stock Levels | Displays products based on the current Available quantity. Options include:  - Some AVL Some Stores - At least one Outlet has an Available quantity above zero - Zero AVL All Stores - All Outlets have an Available quantity of zero or below - Zero AVL Some Stores - At least one Outlet has an Available quantity of zero or below   > **Note:** You can select the appropriate Outlets in the Refine Search section. |
| Custom Fields | Returns any products with matching content in the Custom 1, Custom 2 or Custom 3 fields |
| Gross Profit | Allows you to find products based on their Gross Profit values - either a dollar ($) or percent (%) value.  To use the field:  - Select a level: Equal To (=), Less than (<) or Greater Than (>) - Enter the value into the Profit Value field up to 2 decimal places e.g. 40.12 - Select either the dollar ($) or percent (%) value |
| Auto Replenish | Used to filter products configured to create Purchase Orders automatically when sold at POS (refer to the Product Replenishment article for more information on this feature) |
| Show Packages | By default, the option to display both Products and Packages is selected. Select from the drop-down to select only products or only packages. |
| Display Product Attributes | Used to control whether the default attributes only are displayed in the search results, or if custom-created attributes should be included. |
| Price Updated From/To | Displays products based on the "Price Last Updated" field, and whether the date of the last update matches the search requirements.  > **Note:** Price Last Updated" field is updated any time the price changes for the product (both globally or at an Outlet level). |
| Show Disabled | By default Only Enabled is selected. Select from the drop-down to target only Disabled, or Both Enabled and Disabled. |
| Has Not Sold | Used to filter products based on when they were last sold; set to Ignore by default. Date ranges only display products that have been sold at least once e.g. a product that was last sold 33 days ago will be displayed if either "Ignore" or "Within 30 Days" filters are selected. Products that have never been sold will *only *appear in the "Never" filter.  (This filter can be found in the Refined Search section) |

## Search Results

After making your selections on the Filters tab, click Search. You will be redirected to the Results tab, where you can find:

- The Mass Update actions at the top
- A list of products at the bottom

![Screenshot 2026-01-20 at 4.43.26 PM.png](https://us.v-cdn.net/6038474/uploads/X2X71QASIDZI/screenshot-2026-01-20-at-4-43-26-e2-80-afpm.png)
Tips for using the Search Results tab:

- Products are automatically sorted in chronological order by the Product ID; click the **column headings** to **reorder the products** based on that column
- If searching using an additional Barcode (not the Supplier SKU), the Supplier SKU for the matching product will be displayed in the search results
- Open a product for **editing** by clicking the **Pencil **icon or the **Product ID **code
- Display more products using the **Page Size **drop-down at the bottom of the page
- Use the **Arrows **and **Page Numbers **to navigate through search results
- Click the **Export to Excel **button to automatically export the results in a spreadsheet
- Hover over the **column heading** to display a tool tip explaining the column

![mceclip2 - 2023-07-10T045055.039.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppjQpEAI.jpg)

## Using Mass Actions to bulk apply changes

The three actions at the top of the Results tab allow you to easily and efficiently apply bulk changes to your products.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240613at54031AM.05TJ1000004x5DsMAI.png)
**Actions:**

|  |  |
| --- | --- |
| Apply Max Discount | Add a Maximum Discount Rule to your products, creating a limit for how much a product can be discounted by, or discounted to (an option is available to be enabled for management staff to override this at POS if required) You can set a limit on how much each user can discount in the Max Discount Rule settings |
| Apply Price Rule | Used to specify a Markup % or return the product to a fixed price for products Product prices will need to be entered manually or by using the Mass Download feature to bulk-edit products. |
| Apply Product Edit Settings | Enables or disables a product setting (covered in detail below) |
| Publish to Shopify | Allows to sync your products directly to Shopify. Users can configure which products to publish/unpublish, manage their categories, tags, and other settings. |
| Export to Web | Use this functionality to publish your product listings to to Web & Sales Channels/Source Groups |
| Set/Update Prices | Allows users to set or update price fields for multiple products. Users can set fixed prices, apply discounts, or increase prices based on a percentage markup. |

### **To bulk apply an action:**

1. Select your **action/option** from the first drop-down box e.g. for the Max Discount rule, select the Discount Rule to be applied
2. If editing the Price Rule to select a Markup percentage, enter a value for the % markup (I.e. 40 will give the product a 40% markup)
3. Select the **Apply To **option to control which products the change should apply to e.g. products without an existing Max Discount Rule, products with an existing GP target (markup value), Core Products only etc
4. Click **Apply**

### **Product Edit Settings:**

|  |  |
| --- | --- |
| **Option** | **Details** |
| Clear All | Removes any existing Product Edit settings from products i.e. all the options in the table below will have their selections reset back to the default unchecked status |
| Make Core Product Remove Core Product | This will enable or disable products as Core products - your main product lines.  > **Note:** You can use the "Core Product" filter in various reports, as well as in Stock Replenishment for easy reordering (Purchase Orders or Transfers) |
| Prevent Disabling Allow Disabling | Prevent Disabling is used to stop a product from becoming automatically disabled. If a product is disabled, it will not display in searches or reports unless specifically included in search filters. For web store integrations, enabling the Prevent Disabling option also allows products to be sold online regardless of stock level.  Selecting the "Allow Disabling" option allows Retail Express to disable the product automatically, and web store integrations will take the inventory levels into consideration again. |
| Product Disabled Product Enabled | Enables or disables the products. When a product is disabled the product will not be displayed in searches or reports unless specifically included in search filters. Disabled products will also cease communicating with integrated web stores.  > **Note:** It's recommended to be cautious when disabling a synchronised product. Refer to the article Disabling and removing products from your web store for more information. |
| Disable Auto Replenish Enable Always Auto Replenish Enable Auto Replenish when Out of Stock Enable Auto Replenish when Insufficient Stock | Controls the preference for the conditions under which Retail Express will automatically create Purchase Orders when the product is sold in POS. This feature is useful for products not typically kept in stock but able to be easily ordered from a supplier e.g. expensive or oversized products. Refer to Inventory ? Auto Replenishment (automatically create Purchase Orders via POS sales) for more information |

## Individual actions

Changes to specific product settings can also be applied to individual products from within the product results table.

![mceclip3 (75).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiZWEAY.jpg)
To use the in-line product editing:

1. Hover over the column heading for an explanation of that column
2. Click **Save Changes **at the bottom of the window
3. The changes will be applied

|  |  |
| --- | --- |
| **Option** | **Details** |
| Max Disc. Rule | If you have Max Discount Rules configured, select the new rule from the drop-down box |
| Core | Ticking this option will enable or disable products as Core products - your main product lines.  > **Note:** You can use the "Core Product" filter in various reports, as well as in Stock Replenishment for easy reordering (Purchase Orders or Transfers) |
| PD (Prevent Disabling) | Prevent Disabling is used to stop a product from becoming disabled automatically. When disabled, products will not show up in searches or reports unless specifically included in search filters. For web store integrations, enabling the Prevent Disabling option also allows products to be sold online regardless of stock level.  Selecting the "Allow Disabling" option allows Retail Express to disable the product automatically, and web store integrations will take the inventory levels into consideration again. |
| DP (Disable Product) | Enables or disables the products. When a product is disabled the product will not be displayed in searches or reports unless specifically included in search filters. Disabled products will also cease communicating with integrated web stores.  > **Note:** It's recommended to be cautious when disabling a synchronised product. Refer to the article Disabling and removing products from your web store for more information. |
| Auto Replenish | Controls the preference for the conditions under which Retail Express will automatically create Purchase Orders when the product is sold in POS. This feature is useful for products not typically kept in stock but able to be easily ordered from a supplier e.g. expensive or oversized products. Refer to Inventory ? Auto Replenishment (automatically create Purchase Orders via POS sales) for more information |

## Frequently Asked Questions:

[How is the "Available" inventory level calculated?](https://galaxy.maropost.com/kb/articles/469-using-product-search-management#available)

The count in the Available column ("AVL") is the total Available stock across all Outlets included in the search results. For example, if you have Outlet 1 (14 in stock) and Outlet 2 (6 in stock), and run a search for only Outlet 1, the results will display 14 in stock.

[Finding products integrated with web stores](https://galaxy.maropost.com/kb/articles/469-using-product-search-management#products-web-store)

To search for products integrated with Web Stores:

1. Click the **Refine Search **heading to expand the section
2. This will display either the URL for the Shopify web store or the Sales Channel name for eCommerce API/Magento web stores
3. Click **Search**