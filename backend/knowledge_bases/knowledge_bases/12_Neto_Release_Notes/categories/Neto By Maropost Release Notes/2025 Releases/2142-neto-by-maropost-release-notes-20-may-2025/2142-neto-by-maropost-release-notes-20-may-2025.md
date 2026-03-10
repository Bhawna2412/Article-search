---
title: "Neto by Maropost Release Notes – 20 May 2025"
articleID: 2142
category: "2025 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-17
---

# Neto by Maropost Release Notes – 20 May 2025

## Overview

This release contains updates for the eCommerce versions 6.328.0, 6.329.0, 6.330.0, 6.331.0, and 6.332.0.

## Enhancements and Changes

### Launching a New Theme – "Coming Soon"

Launching your website and want to promote it, but aren't ready to take orders? With the 'Coming Soon' theme, you can display your products and content to get customers hyped, or keep things simple with the 'Holiday/Maintenance Mode' landing page.

**Info page:** [https://www.maropost.com/themes/coming-soon/](https://www.maropost.com/themes/coming-soon/)

**Theme demo:** [https://comingsoontheme.neto.com.au/](https://comingsoontheme.neto.com.au/) 

### Support for Triggering Auto-apply Discounts on Related Field Change

The auto-apply discounts now automatically get updated if the related field is changed on the checkout page. The fields that can trigger the auto-apply discounts when updated are the following:

- `ship_zip` (Postcode)
- `ship` (Shipping method)
- `ship_country` (Shipping country)
- `ship_city` (Shipping city)
- `ship_state` (Shipping state)

### Discount Coupon Code Supported in AddOrder API

The AddOrder API now supports the discount coupon code as an input parameter. This will enable you to record a discount ID against an order. For more information, see [AddOrder API](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/addorder).

### Added Support for WebP Product Images in Downloaded PDF

In a specific scenario, where you have customised your document templates (for example, the invoice template) to display product images, and the product images are in WebP format, the downloaded document was missing product images. To help address this issue, changes have been made to enable the PDF converter to handle WebP images. You’ll, however, be required to add the following parameter to your document template in the [%asset_url%] tag:

```less
is_pdf_invoice:'[@is _pdf_invoice@]'
```

Here’s an example:

```perl
<td style="border: 1px solid #ddd;">
<img src="[@config :home_url@][%asset_url type:'product' id:'[@SKU @]' 
thumb:'thumb' is_pdf_invoice:'[@is _pdf_invoice@]'%][%param default%][%cdn_asset 
html:'0' library:'images'%]default_product.gif[%/cdn_asset%][%/param%][%/ asset_url%]" 
width="50"  height="50"/>
</td>
```

## Bug Fixes

- Fixed an issue in which, when a credit was applied to an order, the Order Confirmation page wasn’t displaying the Balance Owing after the credit was deducted. This has been fixed now.
- Fixed an issue in which, if a 301 redirect is created with a source URL ending in a dash, the redirect that is created strips the trailing dash.