---
title: "Look Up Search"
articleID: 481
category: "POS > Advanced POS"
knowledgeBase: "Retail Express"
---

# Look Up Search

You can streamline product discovery during sales transactions through Look-up Search capabilities in **Retail Express** POS, which enable flexible product searching by various criteria for efficient checkout processing. This search functionality helps retail operators reduce transaction time and improve customer service, with effective look-up search use typically achieving faster product location and smoother checkout experiences across Australian retail operations.

Look-up Search in **Retail Express** POS enables retail staff to quickly locate products using multiple search methods, helping ensure efficient transactions even when exact product codes aren't immediately available. This search capability helps ensure your retail operations can maintain fast checkout speeds while supporting positive customer experiences through efficient product location.

The POS Lookup functionality allows you to find information quickly and efficiently. Using Lookup you can find:

- Sales Orders, Invoices and Quotes
- Products (including Pricing & Stock Availability)
- Customers (including sale history)
- Vouchers
- Transfers

> **Note:** Using the Look Up functionality you can **quickly create a sale** containing the information you searched for, or **open an existing sale**. Find more information on this process below.

## Accessing Look up

1. Within Retail Express click **POS **from the navigation bar
2. **Log in** using an appropriate User account
3. Click **Look Up **from the menu at the bottom
4. Enter an appropriate **User ID**
5. The Look Up functionality will be displayed

![pos_lookup.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTX0EAM.jpg)

## Using the Look up function

The Look up function is broken up into 4 search areas:

1. Sales Orders, Invoices & Quotes
2. Products, Pricing & Stock
3. Customers
4. Other (used for Vouchers and Transfers)

To use search you have two choices available:

- Quick search - the most common filters readily available on the Look Up window
- Advanced Search - more detailed columns for customised searches (accessed by clicking the Search button in the bottom right-hand corner of each section)

## Quick Search

The Look Up screen lists the most popular filters for each section directly on the page.

The **Sales Orders, Invoices & Quotes **section has three buttons with a time frame; to find sales matching that time frame simply click the button e.g. to find all sales made yesterday, click the Yesterday** **button

![pos_lookup_orders.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTY8EAM.jpg)
For all other filters simply click into the empty field next to one of the Look Up options and enter the appropriate details.

## Advanced Search

To access the Advanced Search:

1.   1. **Open the Look Up** functionality using the instructions above
  2. Without selecting any filters click **Search **in the section you require e.g. to open the Customers Advanced Search click Search in the Customers box
  3. The **Advanced Search **for that section will be displayed

> **Note:** There is no Advanced Search for the Voucher Code or Transfer fields - you will need the exact code to look up these items (or alternatively use the Retail Express Back Office to view outstanding vouchers and transfers).

### Sales Orders, Invoices & Quotes

To use the Sales Orders, Invoices & Quotes Advanced Search functionality:

1. Click **Search **in the bottom right-hand corner of the Sales Orders, Invoices & Quotes box
2. Use the **Filters **to search for a sale (see below for detailed information on each filter)
3. The results will load as you populate one or more filters
4. Click **Preview** to the invoice for the sale (you will be able to **Send Email **or **Print Invoice/Receipt **from the Preview window)
5. Click **Open **to open the sale in POS for editing (the fields available for editing will vary depending on the permissions enabled in the POS Security Features profile of the user)
6. Click **Clear Search **to clear the filters
7. Click **Back **to return to the Look Up window

The Sales Orders, Invoices & Quotes Advanced Search allows you to filter by:

|  |  |
| --- | --- |
| **Field** | **Description** |
| Invoice # | The invoice number for the sale |
| Date | When you click into this filter a selection window will be displayed. On this window, you can select a preset date (today, last 7 days, last 30 days etc) or use the calendars to select a from/to date range. |
| Customer | The name of the customer. This field allows for partial entry, so typing "Jo Smi" will include "John Smith" in the results |
| Outlet | Filter for sales in one or more outlets. Click on the filter to display a list of applicable outlets If the POS Security Permission "Allow the User to View All Transactions in POS" is disabled, users will be limited to only viewing transactions in POS for the Outlets selected in their User Account. |
| Status | The order status e.g. Awaiting Payment |
| Total | The value of the order. You will be able to type in the amount at the top, and select a symbol based on your preference:  - **<** - equal to or less than the amount entered - **> **- equal to or more than the amount entered - **= **- exactly equal to the amount entered |
| Balance Due | The amount remaining to be paid on the order. You will be able to type in the amount at the top, and select a symbol based on your preference:  - **<** - equal to or less than the amount entered - **> **- equal to or more than the amount entered - **= **- exactly equal to the amount entered |
| Order type (dropdown) | The type of orders can be filtered based on:  - All Orders - In Store Orders (orders made directly within the POS) - All Web Orders (orders made through the eCommerce API or integrated web store) - Open Web Orders (orders made through the eCommerce API or integrated web store *that require action *i.e. products to be fulfilled or invoices not fully paid |

![pos_lookup_advancedorders.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTYIEA2.jpg)[Click to view full size](https://ress.zendesk.com/hc/article_attachments/360002041135/pos_lookup_advancedorders.png)

### Products, Pricing & Stock

To use the Products, Pricing & Stock Advanced Search:

1. Click **Search **in the bottom right-hand corner of the Products, Pricing & Stock section
2. Use the **Filters **to search for a sale (see below for detailed information on each filter)
3. The results will load as you populate one or more filters
4. Click **Clear Search **to clear the filters
5. Click **Back **to return to the Look Up window

You can even create a sale directly from the search results!

1. **Search **for one or more products as per the previous instructions
2. Enter a **Quantity **by clicking the** Plus ****(+) **symbol to select a product (you can press this multiple times) or click on the **Zero (0) **qty field to type in a quantity and press Enter; if there are multiple outlets displayed press the symbol against the appropriate Outlet
3. Repeat for any additional products using the Search and the quantity
4. The **Total Quantity **will be displayed in the bottom right-hand corner of the window
5. Click **Create Sale**
6. A sale will be created with the products added; if different outlets were selected for the products this will also be updated on the **Fulfilment **tab

When the Products, Pricing & Stock Advanced Search is displayed, you can filter on any of the following options:

|  |  |
| --- | --- |
| **Field** | **Description** |
| PLU/Description | Both of these fields appear in one combined field. To search, enter part or all of a product SKU and/or code along with a description e.g. 124007 shirt mambo |
| Show Disabled | Tick this box to display any Disabled products in Retail Express. This may cause slight performance issues if you have a lot of disabled products within Retail Express. |
| Product Attributes:  - Size - Colour - Brand - Type (Product Type) | Used to filter on individual product types. Clicking on the filter will display another window containing all attributes. There are three ways to search for the filter you require:  - Click in the **Search box** top-left and begin typing (the results will filter as you type) - Use the **scroll bar **to scroll to the attribute you require - Click on the **alphabet **letter to filter by products starting with that letter |
| Price | To filter by a price click on the **Price **box. You will be able to type in the amount at the top, and select a symbol based on your preference:  - **<** - equal to or less than the amount entered - **> **- equal to or more than the amount entered - **= **- exactly equal to the amount entered |
| Outlet | Used to select which outlets the Advanced Search should display stock availability results for. If the POS Security Permission"Allow the User to View All Transactions in POS" is disabled, users will be limited to only viewing transactions in POS for the Outlets selected in their User Account. |
| Avail | Used to filter products based on the Available stock. For example, to search for products that are in stock, a value of > 1 would be selected.  - **<** - equal to or less than the amount entered - **> **- equal to or more than the amount entered - **= **- exactly equal to the amount entered |
| SOH | Used to filter products by the Stock on Hand quantity (including products that have already been allocated to sales).  - **<** - equal to or less than the amount entered - **> **- equal to or more than the amount entered - **= **- exactly equal to the amount entered |
| Qty | Used when adding products to make a sale (see the next section) |

![POS_advancedsearch_products.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTX1EAM.jpg)

> **Note:** You can search for **Custom Attributes **using the Search functionality within a sale; these fields are not included in the Look Up function.

### Customers Advanced Search

To use the Customers search:

1. Click **Search **in the bottom right-hand corner of the Customers section
2. Use the **Filters **to search for a customer (see below for detailed information on each filter)
3. The results will load as you populate one or more filters
4. Click **Clear Search **to clear the filters
5. Click **Back **to return to the Look Up window
6. Click the **Down arrow **on the left of the Customer # field to view their **Sale History** (previous sales can be previewed or opened for editing)
7. To create a **New Sale **for the customer click the **New Sale **button

When the Customers Advanced Search is displayed, you can filter on any of the following options:

|  |  |
| --- | --- |
| **Field** | **Description** |
| Customer Number | The unique ID assigned to a customer |
| Name | The name of the customer. This field allows for partial entry, so typing "Jo Smi" will include "John Smith" in the results |
| Phone | The phone number of the customer |
| Email | The email address for the customer |
| Billing Address | The Billing Address for the customer. This field allows for partial entry, so typing "An Bri" will include "Ann St Brisbane" in the results |

![POS_advancedsearch_customers.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTYhEAM.jpg)

## Frequently Asked Questions

[Sales or Outlets are missing from my search](https://galaxy.maropost.com/kb/articles/481-look-up-search#sales-missing)

If there are sales or Outlets missing from the search, it may be due to the user permissions.

If the POS Security Permission"Allow the User to View All Transactions in POS" is disabled, users will be limited to only viewing transactions in POS for the Outlets selected in their User Account.