---
title: "Add and Edit Export Templates"
articleID: 40
category: "Use Neto > Data Import and Export > Overview import export"
knowledgeBase: "Neto By Maropost"
---

# Add and Edit Export Templates

## Access Data Export Templates

1. In your Neto control panel, navigate to **Settings & tools** > **Export Data**.
2. Click the **Perform Complex Export** button, and choose **Use Existing Custom Export Templates**.

> **Note:** Export templates can also be accessed from **Settings & Tools** > **All Settings & Tools, **then clicking **Data Export Templates**.

## Add a Data Export Template

> **Note:** Templates can be created in the last step of the [export](https://galaxy.maropost.com/kb/articles/501-product-export-wizard) and [import](https://galaxy.maropost.com/kb/articles/668-product-import-wizard) wizards. This gives you a starting point to make more advanced changes.

1. On the data export templates page click the **Add New** button in the top right corner of the page.
2. Select **Add New Export Template**.
3. Populate the initial template details:
4. Click the **Save Changes & Continue** button. Your template will now be saved, and new settings will be available to set up.
5. Scroll down the page to until you see the **File Builder**, **Filter**, and **Find & Replace** tabs. Here you can define what data is exported from Neto in your template.

## File Builder

The file builder is broken up into five sections, and depending on the format of your file different sections need to be set up.

### File Header

Also referred to as the column headers, the file header is a label used to identify what the data is in each column. The header is a free text field so that it can be defined according to the receiver's specifications. For example:

**Google - (Plain text, tab separated)**

```plaintext
MPN id title description link price brand condition image_link quantity product_<span class="hljs-built_in">type</span> availability
```

**Facebook - (CSV)**

```plaintext
"id","availability","condition","description","image_link","link","title","price","brand"
```

The file header only prints once for the entire export template.

### File Body - Header, Body, and Footer

The file body is where you determine which fields will populate your product file. You can use a combination of Neto B@SE tags, logic, and static values to dynamically build the data file. They must also conform to the file type. For example, a CSV file body may look like:

```plaintext
"[@SKU@]","in stock","new","[%format type:"csv" rmhtml:&#39;1&#39; noeol:"1" maxlength:"5000" %][@description@][%/format%]","[@image_full@]","[@url@]","[@model@]","[@store_price@]","[@brand@]"
```

You can add B@SE tags by using the **Insert Data Tag** drop down menus, and clicking the **Insert** button. The tag will appear in the file body where your cursor was located.

All three file body sections all work in the same way. What's important to know about these sections is that they each export for each record, in a loop.

The main reason you'd use this is when exporting sales orders. The file body - header can export the order ID, total, tax, etc, and then the file body - body can export each orderline on the order.

If you only need to export one line per record type (e.g. products) use the **File Body - Body** section.

### File Footer

Like the file header, the file footer prints once per export template. Unless your recipient requires footer text, leave this area blank.

## Filter

The filter tab allows you to set rules which determine the products which will be exported. If you set multiple filters, products must meet all conditions to be included in the file.

You can also set which units that weight and dimensions should be exported in. The template will automatically convert your product dimensions to the units you select here.

## Find & Replace

The find and replace tab is used to identify data in specific columns and overwrite it with a replacement on export.

| Field | Description | Field Type |
| --- | --- | --- |
| Find | The value you want to find when importing your file. | String |
| Replace | The value that will be substituted for the found value. | String |
| Exact Match | Enforce exact match or allow partial match within words. | Boolean (`y`, `n`) |
| Reg Exp | Allow/deny regular expressions in the find or replace fields. | Boolean (`y`, `n`) |
| Replace All | Replace all values or just the first match. | Boolean (`y`, `n`) |
| Case Sensitive | Enforce matching by case. | Boolean (`y`, `n`) |
| Multi Line | Search multiple lines (if any). | Boolean (`y`, `n`) |
| Template | Which area of the export template to perform the find and replace. | See accepted values below. |
| Category |  | See accepted values below. |
| Tag | The Neto field that the find and replace is performed on. | String |
| Priority | The order in which the find and replace rules should be run (ascending). | Integer |

You can manually set up the find and replace settings, or import a file to add them. Import files must be in the below format:

```plaintext
Find,Replace,Exact Match,Reg Exp,Replace All,Case Sensitive,Multi Line,Template,Category,Tag,Priority
```

Template, category and tag must conform to specific values.

### Template

Template refers to which section of the import template you want to perform the find and replace.

| Template Section | Import Value |
| --- | --- |
| All Templates | Leave blank |
| File Header Only | `fileheader` |
| Content Header Only | `header` |
| Content Body Only | `body` |
| Content Footer Only | `footer` |
| File Footer Only | `filefooter` |

### Category

The category refers to the section that the tag you want to use belongs in. If in doubt, leave the category column blank to search all categories.

**Product Categories**

| Template Section | Import Value |
| --- | --- |
| All Categories | Leave blank |
| *Product Data | `I` |
| Cartons | `C` |
| Category Table (Blog Post) | `C3` |
| Category Table (Brand) | `C10` |
| Category Table (Buying Guide) | `C5` |
| Category Table (Form) | `C9` |
| Category Table (Product Category) | `C1` |
| Category Table (Web Page) | `C2` |
| Cross Sells | `R` |
| Custom Fields | `M` |
| Flat Rate Shipping Rates | `SH` |
| Freebies | `F` |
| Image and URLs | `U` |
| Min / Max Order Quantity | `O` |
| Pricing | `P` |
| Product Variations | `V` |
| SEO Data | `E` |
| Upsells | `S` |
| Voucher Program Gift Voucher | `V1` |
| Voucher Program Money Reward | `V4` |
| Voucher Program Reward Points Program | `V3` |
| Warehouse Stock | `WH` |
| eBay Listings | `TH` |
| eBay Product ID | `EP` |

**Sales Order Categories**

| Template Section | Import Value |
| --- | --- |
| Order Lines Table | L |
| Orders Table | O |
| Payment Details | P |
| Products Table | I |
| Shipping Consignment Table | C |
| Shipping Tracking Table | T |

**Customer Categories**

| Template Section | Import Value |
| --- | --- |
| Customer Details | U |
| Sales Summary | R |

### Tag

The tag in your file must match the B@SE tag of the specific field. Refer to your template file body for the specific tag you want to use.