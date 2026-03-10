---
title: "Getting Started with Franchise Connect"
articleID: 125
category: "Integration > Franchise Connect"
knowledgeBase: "Retail Express"
---

# Getting Started with Franchise Connect

You can get started with Franchise Connect in **Retail Express** to establish franchise management infrastructure for your growing retail network. This guidance helps streamline franchise onboarding by providing step-by-step implementation procedures, supporting successful franchise program launch and establishing operational standards across all franchise locations.

Getting started with Franchise Connect involves initial configuration, franchisee setup, permission management, and establishing communication workflows. When properly implemented, Franchise Connect typically leads to smoother franchise operations, better head office coordination, and more efficient management of growing franchise networks.

Franchise Connect brings all of your Franchisee's Retail Express data into a single location for high-level reporting. For detailed information on Franchise Connect, including information on synchronisations, please see below.

![rtaImage - 2023-07-08T104255.718.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppO0kEAE.jpg)

> **Note:** Franchise Connect is an additional add-on to Retail Express; for more information please contact our Sales Team by email at [sales@retailexpress.com.au](mailto:sales@retailexpress.com.au) or by phoning 1300 732 618

## Franchise Connect Configuration

Check your settings to ensure the synchronisation between Franchise Connect (Head Office) and your Franchisees (Store level) is correct.

#### [Create new User Accounts ](https://galaxy.maropost.com/kb/articles/125-getting-started-with-franchise-connect#collapseOne)

Create User Accounts for anyone who will be managing Franchise Connect.

To create a new User:

1. Navigate to **Staff > Users**
2. Complete the details
3. Click **Insert**

The User will be displayed on the bottom half of the screen.

> **Note:** The selection of Outlets is not required for Franchise Connect.

For more information on Users, please seeUser Accounts

#### [Configure your Country information](https://galaxy.maropost.com/kb/articles/125-getting-started-with-franchise-connect#collapseTwo)

In order to report on all Franchisee data in a single currency, you need to configure each country for which your Franchisees trade.  Where you have a single Franchisee that trades in two countries, you only need to set up their default trading country.

Once you have configured your Countries, link a country to each Franchisee.  Until this is done, your Franchisee data will not synchronise. You will need to configure this each time you add a new Franchisee.

To configure your Countries:

1. Navigate to **Settings > Locations / Outlets > Countries**
2. Complete the details (ensuring you have entered a valid Exchange Rate)
3. Click **Create**

> **Note:** The Exchange Rate **must not be set to 0** (zero). The Exchange Rate is applied to your Franchisee data at the time of import into Franchise Connect, so ensure this value is configured correctly.

> **Note:** The Exchange Rate can be edited when required, however, please note that the amended Exchange Rate will **only apply to data imported going forward** and does not edit the Exchange Rate in retrospect.

For more information on Countries, please see the Country Configuration article

To Link a Country to your Franchisee:

1. Navigate to **Settings > Franchisees**
2. Select a **Trading Country** from the drop-down menu
3. Click **Update** (tick icon)
4. Repeat for each Franchisee

![rtaImage - 2023-07-08T104301.698.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppO0pEAE.jpg)

#### [Franchisee Configurations ](https://galaxy.maropost.com/kb/articles/125-getting-started-with-franchise-connect#collapseThree)

Configuration is also required within Retail Express for the Franchisees. The following items must be configured on each Franchisee Retail Express system:

- All Outlets must have an assigned Country
- Countries cannot have a currency conversion of 0 (zero)
- All products must have a supplier (this is also a requirement for Retail Express reports)
- Consolidated Packages - components of Packages must have a Retail Price greater than $0
- All suppliers must have a name - this name cannot be blank
- No more than 4 custom attributes

For detailed information about these settings, please see:Franchise Connect - Franchisee Configuration

## Franchise Connect Information

#### [General information and expected behaviour ](https://galaxy.maropost.com/kb/articles/125-getting-started-with-franchise-connect#collapseSeven)

Regarding the import, you should be aware of the following:

- The initial synchronisation will import the **previous 6 months of data** from the Franchisee/s
- Franchise Connect will** hold 18 months of data in total**
- **Stock levels** are summarised weekly
- Following the **first synchronisation,** only the **current week's stock levels** will be available, regardless of the amount of sales history imported. Further Stock Level information cannot be retrieved retrospectively from Retail Express.
- All **data for reports is held separate from the Global data** managed by Franchise Connect Users
- **Packages do not synchronise** (products, stock etc.) but **sales of packages do** (see below for more detail)

**Package information**

The sale of exploding (non-consolidated) packages is synchronised as they appear in Retail Express, due to the fact they are exploded to a Product by Product level upon adding to a sale.

Consolidated Packages are exploding during the synchronisation (including discounts applied according to POS logic).

For more detailed information on Packages, please see:Packages

**Global and Local Information**

Separate tables manage and store the data related to information such as 'Products', 'Brands' and 'Colours'.

This allows the Franchise Connect User to create a new Colour, and store this information separately from the 'Colours' that are imported via synchronisation from the Franchisee.

When a Global product is synchronised from the Franchisee for reporting, all attributes (Brand, Colour, Size etc.) are overwritten with the Global attributes to ensure that reporting is kept relevant and 'clean'.

For example, a franchisee configures product #ABC123 with the colour 'Azure', but in Franchise Connect this product is linked to the colour 'Blue'. Upon synchronisation, 'Azure' will be overwritten with 'Blue' for all reports so that all Franchisee data reports in the same way a the Franchise Connect level.

#### [Global Product Management ](https://galaxy.maropost.com/kb/articles/125-getting-started-with-franchise-connect#collapseFour)

Managing products at the global level is an important undertaking. The following resources are available to assist with this process:

- How to create products

You will need to perform a data cleanse before performing any product or supplier synchronisations.

#### [Supplier Synchronisation ](https://galaxy.maropost.com/kb/articles/125-getting-started-with-franchise-connect#collapseFive)

Before the first synchronisation, it is important to ensure that the Franchisee Retail Express systems have been correctly brought in line with Suppliers in Franchise Connect i.e. supplier codes referencing the same supplier.

For example, it may be that the Franchisee has a supplier setup as "SO - Sony" but in Franchise Connect, the supplier is "SO - Sonos". When suppliers are synchronised, the Franchisee Retail Express Sony supplier will be overwritten as Sonos, and all Sony products will incorrectly show as Sonos.

The Supplier synchronisation will try and match suppliers based on the following order:

1. The Global Supplier ID (the link between Franchise Connect and Retail Express)
2. The Supplier Code

If the supplier has been synchronised before, it will have a Global Supplier ID which can be matched to update the Supplier details. If there is no matching Global Supplier ID (i.e. the supplier hasn't been synchronised to the target Franchisee) the Supplier will be matched on the Supplier Code.

> **Note:** If a supplier with the same supplier code exists, the supplier information will be overwritten.

#### [Product Synchronisation ](https://galaxy.maropost.com/kb/articles/125-getting-started-with-franchise-connect#collapseSix)

Products synchronised from Franchise Connect can be identified in Retail Express by the Global Product ID field.  This Global Product ID is the Product ID for the product in Franchise Connect.

The Product synchronisation will try and match products based on the following order:

1. Global Product ID (the link between Franchise Connect and Retail Express)
2. The Supplier SKU

If the product has been synchronised before, it will have a Global Product Id which can be matched to update the product details.

If there is no matching Global Product ID (i.e. the product hasn't been synchronised to the target Franchisee before) the product will be matched on the Supplier SKU. In this case, the Product ID from Franchise Connect will be set as the Global Product ID.

> **Note:** If a product with the same Supplier SKU exists, the product information will be overwritten.

**Initial Synchronisation**

Prior to the first synchronisation, it is important to ensure that the Franchisee Retail Express systems have been correctly brought in line with products in Franchise Connect. This includes:

If this is not the case, the product information may be synchronised incorrectly. For example:

- **Same SKU for different products:** The Franchisee has a *Game Console* with SKU "ABC123" but in Franchise Connect, the product "ABC123" is a *board game*.  When products are synchronised, the Franchisee Retail Express "ABC123" game console will be overridden as a board game.
- **Same product with different SKUs: **If you have the same board game setup as "ABC123"  but have the SKU "XYZ123" in the Franchisee Retail Express, a new *duplicate *product with SKU "ABC123" will be created.

**Changing Supplier SKU**

Once products have been synchronised and they are linked through the Global Product ID, any changes to the Supplier SKU in Franchise Connect can be synchronised down to the Franchisee Retail Express systems on the next synchronisation.

> **Note:** When changing the Supplier SKU it may be necessary to consider if additional Franchisees may be added which will still be using the old Supplier SKU.

When adding Franchisees in the future care should be taken to confirm the SKUs are configured correctly as per noted in the initial synchronisation section above.

#### [Reporting ](https://galaxy.maropost.com/kb/articles/125-getting-started-with-franchise-connect#collapseEight)

Reports available within Franchise Connect are very similar to standard Retail Express reports, however, you will notice the inclusion of a new filter, 'Franchisee' available.

Find more information on standard Retail Express Reports available here:

- Customer Activity Report
- Income Report
- Product Sales Report
- Stock Value vs Sales Report

**Supplier Performance Report**

The Supplier Performance Report is designed to capture and display data compiled for a week at a time. This preconfigured setting will apply each 'Weeks Sales' in the results a number, based on the calendar year.

> **Note:** During the initial setup of Franchise Connect you need to wait until the first full week of data synchronisation has occurred before accessing relevant results. Information is not populated with sales data that occurred prior to connection to Franchise Connect.