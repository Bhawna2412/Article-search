---
title: "Franchise Connect - Franchisee Configuration"
articleID: 128
category: "Integration > Franchise Connect"
knowledgeBase: "Retail Express"
---

# Franchise Connect - Franchisee Configuration

Find [**FAQs and related articles**](https://galaxy.maropost.com/kb/articles/128-franchise-connect-franchisee-configuration#Faqs)** **at the bottom of this page

Franchise Connect brings all of your Franchisee's Retail Express data into a single location for high level reporting. In order for this to occur smoothly, configuration is required at both the Franchiser (Head Office) and the Franchisee level.

At a Franchisee level, the following must be confirmed in Retail Express:

- All Outlets must have an assigned Country
- Countries cannot have a Currency Multiplier of 0 (zero)
- Consolidated Packages - Individual components of Packages must have a Retail Price > $0
- All suppliers must have a name
- There are no more than 4 Custom Product Attributes

View the details below to assist in checking your settings:

## [Confirm all Outlets are assigned a Country ](https://galaxy.maropost.com/kb/articles/128-franchise-connect-franchisee-configuration#collapseOne)

**Check Countries have been created**

1. Navigate to **Settings > Locations / Outlets > Countries**
2. Ensure a Country has been created for each Country that you trade in.

For more information on Countries, please see Countries

**Check the Countries are assigned to the Outlets**

1. Navigate to **Settings > Locations / Outlets > Outlets**
2. Ensure each Outlet listed has a Country assigned
3. To **edit/update** an Outlet click the **edit** (pencil) icon next to the Outlet
4. The Outlet information will populate into the top section of the page
5. Select a **Country**
6. Click **Save**

For more information on Outlets, please see Outlets

## [Confirm all Suppliers have a name](https://galaxy.maropost.com/kb/articles/128-franchise-connect-franchisee-configuration#collapseFour)

If any suppliers have no name, they will not be able to sync to Franchise Connect.

1. Navigate to **Settings > Suppliers**
2. Ensure each Supplier listed has a Name (the supplier name cannot be blank)
3. To **edit/update** an Supplier click the **edit** (pencil) icon next to the Supplier
4. The Supplier information will populate into the top section of the page
5. Enter a **name**
6. Click **Save**

For more information on Suppliers, please see Manage your Suppliers

## [Confirm each Country has a valid Currency conversion ](https://galaxy.maropost.com/kb/articles/128-franchise-connect-franchisee-configuration#collapseTwo)

> **Important:** The Currency Multiplier must not be set to 0 (zero). The Currency Multiplier Exchange Rate is applied to your data at the time of import into Franchise Connect; you will need to ensure this value is configured correctly.
> Navigate to** Settings > Locations / Outlets > Countries**Ensure each Country has a valid **Currency Multiplier**
> For more information on Countries, please see Countries

## [Confirm Package component Retail Pricing ](https://galaxy.maropost.com/kb/articles/128-franchise-connect-franchisee-configuration#collapseThree)

While Packages themselves will not synchronise through Franchise Connect, the sales of the Packages will still be synchronised for reporting purposes.

> **Note:** Package products and stock levels are not synchronised through Franchise Connect, but sales of Packages are.

- **Exploding (non-consolidated) Packages:** Synchronised as they appear in Retail Express, due to the fact they are exploded to a Product or line-by-line level upon adding to a sale.
- **Consolidated Packages:** exploded during the synchronisation (including discounts applied according to POS logic).

> **Note:** For this reason components of consolidated Packages must have a Retail Price > $0 (see Exporting the Report section below for details on how to check this).

To report on your Packages use the Package Details Report.

1. Navigate to **Reports > Stock Reports > Package Details Report**
2. When viewing the details of the Packages, the far right column displays a tickbox indicating if the Product is treated as Individual Products.

**Exporting the report:**

Alternatively, you may find it easier to export the report and target the components (or child products) that need to have Retail Prices entered.

1. From the results click Flat Export
2. Once exported into Excel review the ChildPricePOS column
3. Ensure that all values are greater than $0.00

For more information on Packages, please see: Packages

## [Custom Product Attributes](https://galaxy.maropost.com/kb/articles/128-franchise-connect-franchisee-configuration#custom-attributes)

A maximum of four Custom Product Attributes are synchronised from Franchise Connect, so there cannot be more than 4 in use at the Franchisee member level (as you can only have a maximum of 8 Custom Attributes in use in a database).

The default attributes in Retail Express are:

- Size
- Colour
- Season
- Brand

To check if you have any Custom Attributes in use:

1. Log into Retail Express
2. Navigate to **Settings > Product Attributes**
3. Your Attributes will be displayed

For detailed information refer to the Franchise Connect ? Custom Product Attributes article.

[]()Want more information? Find related articles here:

- Franchise Connect - Getting Started
- Franchise Connect - Product Synchronisation
- Franchise Connect - Reporting