---
title: "Add Pre-Orders ETA to your Shopify Store Theme"
articleID: 158
category: "Shopify > Add-Ons"
knowledgeBase: "Retail Express"
---

# Add Pre-Orders ETA to your Shopify Store Theme

This article explains how to install the Shopify store theme code required to display the Check ETA feature. Once enabled, a button will be added to the store that when clicked will display the ETA date of the earliest Purchase Order that can fulfil the order.

You can configure:

- The text on the button
- The text displayed before the ETA date e.g. Warehouse Delivery Date
- The text displayed if an ETA is unknown

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/1.05T5g00000nJnXAEA0.png)

> **Note:** Modifications to your Shopify theme should only be done by an experienced developer.

## Installation

[Download Pre-Order asset files](https://www.retailexpressmedia.com/downloads/support/shopify_preorder_product_eta.zip)

To install the Shopify Pre-Order ETA feature, download the assets using the link above and follow the steps for each of the Shopify theme files listed below.

Instructions are included in the file "rex-product-eta.md"

[layout/theme.liquid](https://galaxy.maropost.com/kb/articles/158-add-pre-orders-eta-to-your-shopify-store-theme#layout-theme)

Add the following code to the end of the header:

```plaintext
{% include 'rex-product-eta' %}
```

[snippets/rex-product-eta.liquid](https://galaxy.maropost.com/kb/articles/158-add-pre-orders-eta-to-your-shopify-store-theme#snippets-eta)

1. Expand the **Assets **section
2. Click **Add a new asset**
3. Click the **Choose File **button on the Upload a File tab
4. Navigate to where you have downloaded the files
5. Select **rex-product-eta.liquid**
6. Click **Open**
7. Click **Upload asset**
8. The file will be uploaded.

[assets/rex-product-eta.js](https://galaxy.maropost.com/kb/articles/158-add-pre-orders-eta-to-your-shopify-store-theme#assets-js)

1. Expand the **Assets **section
2. Click **Add a new asset**
3. Click the **Choose File **button on the Upload a File tab
4. Navigate to where you have downloaded the files
5. Select **rex-product-eta.js**
6. Click **Open**
7. Click **Upload asset**
8. The file will be uploaded.

[assets/rex-product-eta.css](https://galaxy.maropost.com/kb/articles/158-add-pre-orders-eta-to-your-shopify-store-theme#rex-product)

1. Expand the **Assets **section
2. Click **Add a new asset**
3. Click the **Choose File **button on the Upload a File tab
4. Navigate to where you have downloaded the files
5. Select** rex-product-eta.css**
6. Click **Open**
7. Click **Upload asset**
8. The file will be uploaded.

[Configure settings in the rex-product-eta.js](https://galaxy.maropost.com/kb/articles/158-add-pre-orders-eta-to-your-shopify-store-theme#configure-eta-js)

1. Edit the file **rex-product-eta.js** (uploaded in a previous step)
2. At the top of the file in the constructor** update the following settings**:

|  |  |
| --- | --- |
| **Setting** | **Details** |
| this.buttonTextStart | The text displayed in the Check ETA button when first loaded e.g. Check ETA |
| this.buttonTextAvailable | The label displayed in front of the ETA data when an ETA is returned e.g. Expected Warehouse Delivery Date |
| this.buttonTextUnknown | The text displayed when no ETA is available e.g. ETA not found, please contact us for more information about this product |
| this.predecessorSelector | DOM selector for the element after which the ETA button will be displayed. Defaults to the Add to Cart button. |
| this.variantSelector | DOM selector(s) for variant selector controls in the theme. Defaults to a comma separated list of common selectors used in many themes but may need to be updated. |
| this.quantitySelector | DOM selector for the quantity input box if being used in the theme |

## Frequently Asked Questions

[Product isn't available for pre-order](https://galaxy.maropost.com/kb/articles/158-add-pre-orders-eta-to-your-shopify-store-theme#not-appear)

For a product to be available for pre-order, ensure you have configured the following items correctly:

- Shopify Store
- Product
- Purchase Orders

Follow the instructions for Enabling Shopify Pre-Orders for more information.