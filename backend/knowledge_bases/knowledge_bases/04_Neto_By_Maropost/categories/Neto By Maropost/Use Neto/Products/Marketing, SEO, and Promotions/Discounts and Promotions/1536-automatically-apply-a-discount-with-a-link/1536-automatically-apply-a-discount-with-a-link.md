---
title: "Automatically Apply a Discount with a Link"
articleID: 1536
category: "Use Neto > Products > Marketing, SEO, and Promotions > Discounts and Promotions"
knowledgeBase: "Neto By Maropost"
---

# Automatically Apply a Discount with a Link

You can automatically apply a discount to a customer’s shopping session by adding the following query string to the end of any URL:

`http://www.yourdomain.com.au/?addcpn=YOURDISCOUNTCODE`

**Tip**: You can also create a URL that applies the discount code and adds the product to the cart, e.g. "www.yourdomain.com.au/_mycart?addcpn=CODE&sku=PRODUCTSKU"

Change **www.yourdomain.com.au** with the domain name of your webstore and **YOURDISCOUNTCODE** with the coupon code you have setup in your Neto by Maropost control panel. Make sure you include the question mark in the address.

This feature is ideal for tagging URLs sent in email marketing campaigns or coming from Google Adwords campaigns. Using the lightbox popup feature you can even popup a message when customers arrive from these sources.

For example, customers visiting through this URL:

[http://www.myshop.com/c/shoes?addcpn=10%offship](http://www.myshop.com/c/shoes?addcpn=10%offship)

Will get 10% off the price of their shipping if the discount has been set up with the code **10%offship**.