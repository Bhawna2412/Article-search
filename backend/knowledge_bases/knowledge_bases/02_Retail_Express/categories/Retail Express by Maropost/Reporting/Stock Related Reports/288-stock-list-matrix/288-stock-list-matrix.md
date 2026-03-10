---
title: "Stock List Matrix"
articleID: 288
category: "Reporting > Stock Related Reports"
knowledgeBase: "Retail Express"
---

# Stock List Matrix

You can view inventory levels in a matrix format showing products by size, color, or variant by accessing the Stock List Matrix, which presents stock data in an easy-to-scan grid layout. This visual inventory presentation helps retail operators quickly identify stock gaps, assess variant representation, and make reordering decisions based on comprehensive variant-level inventory visibility.

Using the Stock List Matrix helps retail operators efficiently review multi-variant product inventory, identify missing sizes or colors needing reorder, and ensure balanced stock representation across product variations.

Like the Stock List, the Stock List Matrix is a list of products that displays a separate line per style, and includes a grid displaying the stock level and price of each size/colour combination.

Because of this, the Stock List Matrix only displays products that have a Style Code (Manufacturer SKU), a Size and a Colour.

This article applies to the following menu options:

**Reports > Stock Reports > Stock List Matrix**

## Filters

![bd8997c9a3870f958e01dd4ee70f8bcfc0f66a3d47e999b36dccdace7ed53e34.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphcpEAA.jpg)

### Product PLU Code:

You can enter any PLU code (Product Look Up), which include ProductID, SupplierSKU and ManufacturerSKU, in here.

For ProductID or SupplierSKU, this will return a single product, however you can use a ManufacturerSKU to return a list of all products in a style code group.

Please note that the PLU code works in conjunction with the other search options, not separately from them.
For example, if you chose the "Books" product type and then entered a PLU of a product in the "Accessories" product type, the search will return no results.

### Outlet:

You have to choose a single outlet at a time. This report will default to the first (alphabetically sorted) Outlet.

### Product Type:

You can choose one or more Product Types at a time using the mouse pointer and a combination of the Ctrl and Shift buttons on your Keyboard, or simply leave the "All" option chosen to include all Product Types in the results.

### Supplier:

Like with Product Types, you can choose one or more Suppliers at a time using the mouse pointer and a combination of the Ctrl and Shift buttons on your Keyboard, or simply leave the "All" option chosen to include all Product Types in the results.

### Attributes:

You can narrow the results of your search down further by choosing specific Sizes, Colours, Seasons and/or Brands.

As this report only includes products that have a size and colour, you **must** choose all sizes/colours that you want to include in the results.

### Disabled Products:

By default, most Retail Express product reports will not include Disabled products.

You can choose to include Disabled products in the report simply by ticking the "Show Disabled Products" check box at the top of the search filters

Once you have chosen the search options you'd like to search on, press the "Search" button.

## Results

![f1e1a4b946841bbd3b1936fdbc1c29da10394513551f3bfee3ec7b8f87d52bcc.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi7bEAA.jpg)
As explained above, the results show a line per product which includes basic product information, along with an attribute matrix for stock, and an attribute matrix for value, each showing all of the different size/colour combinations that you selected.