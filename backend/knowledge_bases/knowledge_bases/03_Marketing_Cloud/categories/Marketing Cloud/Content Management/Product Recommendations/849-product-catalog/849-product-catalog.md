---
title: "Product Catalog"
articleID: 849
category: "Content Management > Product Recommendations"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-26
---

# Product Catalog

You can maintain an up-to-date product catalog to power personalized product recommendations that drive higher revenue from email marketing. An accurate product catalog significantly enhances email campaign effectiveness by enabling dynamic content that presents subscribers with relevant products based on their behavior and preferences, typically resulting in improved click-through rates and conversion performance.

Properly configured product catalogs help optimize email marketing ROI by ensuring your product recommendations display current pricing, availability, and compelling product images that encourage subscriber engagement and drive website traffic from your email campaigns.

The **Product Catalog** displays all products stored in Marketing Cloud. 

An up-to-date product catalog is essential for accurate product recommendations. Hence, it's crucial that you add all your products to the catalog. 

The product recommendation included in the email shows the product image, name, and price. Hence, you must ensure that all the products in the catalog have names, images, and price information.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ProductCatalog.05T5g00000Ia9s1EAB.png)

> **Note:** **Note for ClickBank Integrations**: The product images uploaded by the marketer will appear under the product catalog only after the ClickBank team has approved them.

## How is the Product Catalog Updated?

Marketing Cloud stores the product information in a database table called Product. All the product information from the product database is automatically available in the product catalog and vice versa. There are various ways to add and update product information in the Product database table, including integration with e-commerce platforms, REST APIs, and the Web Tracking feature. To learn about how products are tracked in Marketing Cloud, see [**Introduction to Product and Revenue Tracking**](https://galaxy.maropost.com/s/article/Introduction-to-Product-and-Revenue-Tracking).

Product Catalog also provides the following options to add and update products:

- 
- Updating an existing product manually, i.e., one product at a time.

### Adding or Updating Product Catalog in bulk

You can use the import option to add new products to the catalog or update the existing products in the catalog.

1. In Navigation, go to CONTENT, and then select **Product Recommendations**.
2. In the **Product Catalog **tab, click **Import Product Catalog**.
3. On the **Import Product Catalog** dialog box, select the file containing the product information. Next, select the delimiter that is used in the file, and then click **Continue**.
  ![procatalog0.png](https://us.v-cdn.net/6038474/uploads/M5OVUP8144DE/procatalog0.png)
4. On the** Product Catalog File Import **page, select either or both of the following options (as applicable):

**Import new products:** Select if you are importing new products to the catalog.
**Update existing products:** Select if you are updating any existing products in the catalog.
  ![procatalog1.png](https://us.v-cdn.net/6038474/uploads/KLC3IFUENGHM/procatalog1.png)
5. In the **Mappings** section, map the fields in your file with the fields in the product catalog. This mapping is essential if your file has different field names than the fields in the product catalog.
6. Click **Save** to start the import.

### Updating a Single Product

The Product Catalog tab displays all the products added to the catalog. If you want to update any specific product, you can do so by selecting the **Edit Product **option from the **Actions** menu. You'll be redirected to the Edit Product dialog box, where you can make the desired changes.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/EditProduct.05T5g00000HO3e0EAD.png)
> **Note:** **Note:** The Edit Product option is ideal for updating a single product. However, if you need to update multiple products, then the import option is the better choice.

Users of Maropost Marketing Cloud can import information, such as product URL data, into the 'Store URL' field. Since the product URL is mapped by default, it is useful in product recommendations, as it can redirect users to the product page instead of the storefront. If the product URL is missing from the integration data, the mapping will import the storefront's URL into the 'Store URL' field.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/prod0.05T5g00000ziMKZEA2.png)By default, you can import product URL data from **Neto, Shopify,** and **ClickBank** integrations.

## Related Articles

**Content & Design:**

- 
- 
- 

**Campaign Management:**

- 
- [Creating Transactional Email Campaigns](https://galaxy.maropost.com/kb/articles/921-creating-transactional-email-campaigns) - Build automated transactional email campaigns