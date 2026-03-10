---
title: "Data Preparation - Product data import"
articleID: 1342
knowledgeBase: "Help Articles"
lastUpdated: 2023-05-11
---

# Data Preparation - Product data import

# Data Preparation - Product data import

If you don't have an existing POS system and you're creating all your Products anew, Retail Express supports two methods for adding products:

* Manually create Products, one-by-one (see [Create a Product Manually](https://galaxy.maropost.com/s/article/Create-and-Edit-Products) for more information)
* Use the Mass Upload feature to create multiple products at the same time (see [Create New Products via Mass Upload](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Farticles%2F215404828) for more information)

It's recommended to consider how to best prepare and populate your data now, and avoid the risk of needing to amend your products later.

Below we've detailed information on the Product fields, including how they're used within Retail Express, to guide you in making the best decisions about your data.

If you're planning on integrating your system, either now or in the future, we've also detailed how your products will be used within potential eCommerce platforms e.g., using the eCommerce API to add an online web store.

**Tip:**If you have existing data, Retail Express offers a [Data Concierge](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Farticles%2F360000243616) service that can shortcut this process for you!

#### [Mandatory Product Fields](#mandatory)

  

The following are mandatory Product fields - these need to be entered as minimum detail for your products.

**Note:** refer to our information on [Valid Characters](https://galaxy.maropost.com/s/article/Valid-characters-for-Retail-Express-fields) to ensure the data you're entering matches the system requirements.

|  |  |  |
| --- | --- | --- |
| **Retail Express Field** | **Definition** | **Used for eCommerce?** |
| SupplierSKU | Unique barcode for products. All products in Retail Express must have their own unique SupplierSKU.  This can be any number (if not provided by the supplier). If you don't have an existing SupplierSKU, you could use a sequence of numbers starting with an abbreviation of the business name e.g. MB1001 (where MB is "My Business").  For compatibility with Barcode scanners, field should only contain Upper Case Letters, Numbers, Hyphen (-) and Forward Slash (/), and not contain any lower case letters, spaces or other symbols.  **Limit:** 50 characters | Yes |
| ShortDescription | The name of the product.  This will be displayed on receipts and invoices.  **Limit:**255 characters | Yes - typically used as the name of the Product  (Depending on the integration method custom fields may also be used as the Product name instead) |
| BuyPriceEx | The buy price of the product excluding tax. This should be the cost in your native currency, excluding tax.  If the buy price is unknown you can enter $0.00, but reporting will show 100% Gross Profit until the correct price has been entered.  **Format:**$x.xx | No |
| POSPrice | The price shown when the product is scanned/entered at POS.  **Format**: $x.xx | Yes - the original price of the product (see the article on [Product Price calculation](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Farticles%2F203297914) for more information) |
| Product Type | The categorisation of the product for internal purposes. Most of the reports in Retail Express allow for filtering based on this field.  To group similar Product Types together enter the information at the start separated by a hyphen. For example, to group all "Clothing" Product Types together you could create:  Clothing - Jackets Clothing - Pants Clothing - Shirts  The Product Types are sorted alphabetically, which means that all Clothing Product Types would appear in the filter together.  **Limit:**50 characters | Yes - used for filtering purposes only, not to be confused with "Categories" or "Collections" online (which are created manually within the eCommerce platform) |
| SupplierCode | Used to assign the Supplier from which the product is ordered. At this point only the code is required, detailed information on the supplier (including the Supplier Name) is entered separately.  **Limit:**20 characters | No |

  

#### [Optional Product Fields](#optional)

  

The following fields are optional product fields - these can be entered to provide greater detail for your products and can greatly assist with report filtering.

**Note:** refer to the article on [Valid Characters](https://galaxy.maropost.com/s/article/Valid-characters-for-Retail-Express-fields) to ensure the data you're entering matches the system requirements.

|  |  |  |
| --- | --- | --- |
| **Retail Express Field** | **Definition** | **Used for eCommerce?** |
| ManufacturerSKU | The Style Code for the Product, used to group products together.  This can be any number (if not provided by the supplier) however for products to be grouped they must share the same ManufacturerSKU.  Note: there are strong report functionality within Retail Express that groups products using the ManufacturerSKU e.g., The Style Performance Report.  **Limit:**255 characters | Yes - used to group products together to create a single product with variations e.g. size, colour.  Refer to the [Grouping Products](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Farticles%2F203438590) article for more information. |
| Size | The size of the product - however this field can also be used for other purposes. The label cannot be changed within Retail Express.  If the product has a matching ManufacturerSKU with another product, *and* the product is integrated with an eCommerce platform, the products will be grouped and "size" will be used as a configurable selection on the product page.  **Limit:** 50 characters | Yes - used as a product attribute, and if matching ManufacturerSKU is used, the size becomes a configurable drop-down option on the product |
| Colour | The colour of the product, however this field can also be used for other purposes. The label cannot be changed within Retail Express.  Displayed on receipts and invoices, and can be used as filters on various reports.  If the product has a matching ManufacturerSKU with another product, *and* the product is integrated with an eCommerce platform, the products will be grouped and "colour" will be used as a configurable selection on the product page.  **Limit:** 20 characters | Yes - used as a product attribute, and if matching ManufacturerSKU is used, the colour becomes a configurable drop-down option on the product |
| Season | The season of the product, however this field can also be used for other purposes.  Can be used as filters on various reports.  **Limit:** 20 characters | Yes - product attribute only |
| Custom 1  Custom 2  Custom 3 | Generic text fields that enter any extra information associated with the product.  These fields can be searched at POS and via Product Search & Management, but there are no reports that filter by these fields.  **Limit:** 250 characters | Yes - product attributes  Depending on the integration one of these fields may be used to replace the product name. |
| Supplier Buy | The estimated price of the product in the Supplier's Native Currency excluding tax (as compared to the mandatory field "Buy Price Ex", typically entered in the native currency for the business e.g. AUD).  This field is used for creating Purchase Orders (PO) only, to give an estimated value of a PO at a point when the final price in the local currency isn't known.  **Format:**$x.xx | No |
| Direct Costs | The additional cost in local currency associated with receiving the product, excluding tax. Typical direct costs include: Freight, Duties, Handling Fees etc.  The Direct Cost is added to the Weighted Average Buy Price to calculate the Cost of Goods Sold.  **Format:**$x.xx | No |
| RRP | The Recommended Retail Price.  Used for reference only.  **Format:** $x.xx | Yes - used to display an original price when promotional prices are in effect e.g. "Was $x, now $y", where "x" is the RRP. |
| Web Price | Used for eCommerce integrations as the highest level in the pricing hierarchy.  Where a Web Price has been specified, this will be the product price online - any changes to the POS Price will be ignored.  **Format:**$x.xx | Yes - top level of the pricing hierarchy. |
| Discount Price | The promotional price if the product is on sale. This can be used in conjunction with the Discount End Date field to automatically expire the promotional price on a set date.  **Format:**$x.xx | Yes - depending on the integration. |
| Discount End | The expiry date for the Discount Price promotional price field.  **Format:**dd/mm/yyyy | Yes - depending on the integration. |
| Long Description | Allows for a detailed description of the product.  This is a legacy field used by a previous web store method of Retail Express, it is no longer utilised in any integrations.  **Limit:** 8000 characters | No |
| Warranty Details | A generic text field that can be used to store data, but not visible in any reports.  **Limit:** 1000 characters | No |
| Lead time | The estimated number of days it takes to get the product once it's been ordered e.g. 2 week delivery time would be "14". If no value is specified a default of "4" is used.  The Lead Time is used as part of the Stock Replenishment and reorder functionality (view the [Lead Time](https://galaxy.maropost.com/s/article/Inventory-Lead-Time) article for more information).  **Format**: Whole numbers only | No |
| Carton Qty | Reference only. Used as part of the Stock Replenishment and reorder functionality to list the carton contents and total number of units.  **Limit:** 10 characters | No |
| Core Product | The top sellers, or 'staple' products that are stocked continuously or not expected to be out-of-stock. Used in various reports as a filter, as well as in the Stock Replenishment feature.  **Format:**True/False | No |
| Manufacturer | The Manufacturer of the product. This may differ from the Brand.  **Limit:**255 characters | No |
| Brand | The Brand of the product.  **Limit:**50 Characters | Yes - synchronised as the Brand/Vendor. Depending on the integration this may integrate with other third party apps to enable "Shop by Brand" features, or automated collections. |
| Length | The Length of the product, used for shipping calculations.  **Format:**x.xx | No |
| Depth | The Depth of the product in volume terms.  **Format:**x.xx | No |
| Breadth | The Breadth of the product in volume terms.  **Format:**x.xx | No |
| Shipping Cubic | The Shipping Cubic value of the product.  **Format:**x.xx | No |
| Weight | The Weight of the product.  This can be in any unit, but should remain consistent over the entire product list. e.g., if a 1kg product is entered in at 1, products that weight 200g would be entered as 0.2.  Note: there are only two decimal places for this field.  **Format:**x.xx | Yes  Depending on the integration you can select the unit on the eCommerce platform e.g. kilograms, grams. The units should be kept consistent in Retail Express for this reason. |
| Freight | Any shipping costs associated with the product.  **Format:**$x.xx. | No. Shipping costs are calculated by the tools within the eCommerce platform combined with the weight (if required). |
| Requires Assembly | If the product requires assembling or not.  **Format:**True/False | No |
| Disabled | Controls whether the product is Disabled in Retail Express or not. When Disabled the product won't appear in search results, and can be excluded from various reports (for more information see [3 ways to Disable a Product](https://galaxy.maropost.com/s/article/Disabling-Products)).  **Format:**True/False | Yes - controls whether the product is sent through to the online store or not |
| Export To Web Service | Enables a product to be sent through the Web Services API.  Note: additional configuration is required for the Web Services API, including: Sales Channels and Source Groups.  **Format:**True/False | Yes - determines whether a product is sent through the Web Services (eCommerce) API. |
| SupplierSKU2 | An additional field to the SupplierSKU, often used where your Supplier has a preferred ordering code that is *different*to the SupplierSKU (barcode).  SupplierSKU2 is populated into Purchase Orders.  **Limit:** 50 characters | No |