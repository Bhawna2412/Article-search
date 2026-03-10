---
title: "Create a One-Click Order Button in an Email"
articleID: 1532
category: "Use Neto > Products > Marketing, SEO, and Promotions > Email Marketing"
knowledgeBase: "Neto By Maropost"
---

# Create a One-Click Order Button in an Email

This is a great way to give your customers and quick and easy way to buy.

In your email or web page, don't link to your product page but put a **Buy Now** link directly into your marketing email/page and for the URL of your link. For example, your URL would look something like this:

```plaintext
https://www.yoursitename.com.au/_mycart?fn=payment&sku=GREAT_PRODUCT_SKU
```

Where `www.yoursitename.com.au` is the domain name of your website and `GREAT_PRODUCT_SKU` is the SKU of the product.

Clicking on the link will take the customer to your Checkout page and automatically add the product.

You can also add **&qty=(Number)** at the end of the URL to automatically add a product quantity. For example, your URL would look something like this:

```plaintext
https://www.yoursitename.com.au/_mycart?fn=payment&sku=GREAT_PRODUCT_SKU&qty=10
```

Using this feature, you can only pass one product, however, you can create a non-editable kitted product and use the SKU of the kit if you want multiple products to be added to the order.

## Combining 1-Click with a Coupon Code

You can also pass a coupon code using this 1-click feature. The coupon code could add a discount or a free product to the order:

```plaintext
https://www.yoursitename.com.au/_mycart?fn=payment&sku=GREAT_PRODUCT_SKU&addcpn=COUPON_CODE
```

Where `COUPON_CODE` is the code you created in **Marketing > Discounts & Coupons**.

For details on how to create a coupon code, check out the article [How do I set up a discount coupon?](https://galaxy.maropost.com/kb/articles/1360-add-a-discount-coupon)

## 2-Click Ordering - take the customer to the Shopping Cart

You can use this 2-click feature for editable kits. Customers can enter the product options on the Shopping Cart page. This may not work with all editable kits depending on the design of your site.

If you would like to send the customer to the Shipping Cart page, you can use this web address:

```plaintext
https://www.yoursitename.com.au/_mycart?sku=GREAT_PRODUCT_SKU
```

Where `www.yoursitename.com.au` is the domain name of your website and `GREAT_PRODUCT_SKU` is the SKU of the product.