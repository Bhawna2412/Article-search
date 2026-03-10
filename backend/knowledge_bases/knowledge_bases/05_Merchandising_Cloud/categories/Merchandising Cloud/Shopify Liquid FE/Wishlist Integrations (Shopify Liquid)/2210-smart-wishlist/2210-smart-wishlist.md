---
title: "Smart Wishlist"
articleID: 2210
category: "Shopify Liquid FE > Wishlist Integrations (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Smart Wishlist

You can integrate Smart Wishlist functionality to enable customers to save and organize products for future consideration. Wishlist features help improve customer retention by giving shoppers a way to curate and track items they're interested in, encouraging return visits and eventual purchases.

Smart Wishlist integration provides customers with a convenient tool for managing their shopping intentions over time. By allowing customers to save products across browsing sessions, you reduce the pressure for immediate purchase decisions while gathering valuable data about product interest that can inform merchandising and marketing strategies.

Adding wishlist functionality to your store enhances user engagement and allows customers to save products for future purchase consideration. This technical documentation outlines the steps to integrate wishlist icons using the "Smart Wishlist" app within our Shopify app built with Liquid.

### Adding Wishlist Icon on Product Card

### Step 1: Installation

Begin by downloading and installing the [Smart Wishlist app](https://apps.shopify.com/smart-wishlist) from the Shopify Apps store.

### Step 2: Add Grid Search Snippet

![b54a92f-SmartWishlistCode.png](https://us.v-cdn.net/6038474/uploads/K8CUXEHT1TVP/b54a92f-smartwishlistcode.png)
Add the below code snippet to the `<strong>findify-grid-search.liquid</strong>` file to ensure the Smart Wishlist functionality is loaded when Findify is initialized.

JSX

```javascript
if (typeof ReloadSmartWishlist !== "undefined" && $.isFunction(ReloadSmartWishlist)) ReloadSmartWishlist();
```

### Step 3: Add Product Card Snippet

Insert the following code snippet into the appropriate location within the `<strong>findify-product-card.liquid</strong>` file to display the wishlist icon on product cards.

JSX

```haskell
<span class="smartwishlist" data-product="{{ product.id }}" data-variant="{{ product.variants.first.id }}"></span>
```

### Step 4: Styling (Optional)

If necessary, apply styles to the wishlist icon by adding the provided CSS code to the `<strong>findify-product-card.css</strong>` file.

CSS

```css
.smartwishlist {position: absolute;  top: 5px;  left: 5px;  z-index: 10 !important;  display: flex;  margin: 0;  max-width: max-content;}
```

### Step 5: Configuration

Visit the Smart Wishlist app page to access a variety of settings and configurations. For detailed instructions, refer to the Smart Wishlist support documentation.

## Adding Wishlist Icon in Navigation Bar

For adding wishlist icons in the navigation bar, refer to the documentation provided [here](https://www.webmarked.net/steps-to-add-a-link-to-my-wishlist-page-in-the-navigation-menu/).

**Conclusion**

By following the steps above, you can seamlessly integrate Smart Wishlist icons into your Shopify store using our Shopify app. Enhance user experience and encourage customer engagement by providing convenient wishlist functionality.

For further assistance or inquiries, feel free to contact us on [support@maropost.com](mailto:support@maropost.com)