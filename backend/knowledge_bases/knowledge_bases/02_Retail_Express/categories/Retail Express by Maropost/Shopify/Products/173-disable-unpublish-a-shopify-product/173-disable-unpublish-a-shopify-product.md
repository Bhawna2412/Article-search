---
title: "Disable/Unpublish a Shopify Product"
articleID: 173
category: "Shopify > Products"
knowledgeBase: "Retail Express"
---

# Disable/Unpublish a Shopify Product

You can disable or unpublish products from your Shopify store through **Retail Express**, controlling product visibility and managing your online catalog effectively. This capability helps maintain eCommerce catalog quality by removing discontinued items, managing seasonal availability, and controlling which products appear on your online store while maintaining product data in your retail system.

Setting up product disable/unpublish workflows involves understanding synchronization settings and establishing procedures for product lifecycle management. When properly managed, product visibility control typically leads to cleaner online catalogs, better customer experience through relevant product displays, and more efficient inventory management across retail channels.

If you choose to remove a product from your online store you will need to Unpublish the product in Retail Express.

To remove a product from the online integration:

1. Within Retail Express open the product for editing
2. Navigate to the **Publish to Shopify** fields
3. Untick the online store
4. Click **Save Changes**

The changes that take place on Shopify will vary depending on the type of product:

|  |  |
| --- | --- |
| **Product disabled** | **Result on Shopify** |
| Individual product - no ManufacturerSKU | The product will be marked as disabled/unpublished in Shopify |
| Individual product with a ManufacturerSKU 			(i.e. a product that forms part of a group) | The variant will be removed from the product in Shopify, but the rest of the group will remain on Shopify |
| One or more products in a matrix | The corresponding variants are all deleted from the product in Shopify, the product is unpublished/disabled if no variants remain *Note: If there is a matrix product with only 2 variants and one product is disabled/unpublished, on some occasions, a new product for the remaining variant product will be created instead of updating the existing matrix product. If this occurs, the existing product should be removed as the new product will be the active product integrated with Retail Express. |