---
title: "Implementing Product and Revenue Tracking"
articleID: 939
category: "Product and Revenue Tracking"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-10-15
---

# Implementing Product and Revenue Tracking

Maropost supports various ways of tracking product and revenue information, including REST APIs, integration with e-commerce platforms, and Maropost's Web Tracking feature. You can evaluate your needs and implement the feature that suits you the best.

To learn why product and revenue tracking is important to you and where you can find the information in Marketing Cloud, see [**Introduction to Product and Revenue Tracking**](https://galaxy.maropost.com/s/article/Introduction-to-Product-and-Revenue-Tracking).

## PRODUCT/REVENUE REST APIs

The REST APIs provide a flexible way to engage with the product and revenue information. The GET, POST, PUT, and DELETE methods are available for managing both orders and products. To get more information on each of these API methods, see the API Reference (REST APIs > PRODUCT/REVENUE).

The POST/orders method in Product/Revenue REST APIs enables you to capture the order details (such as the email address of the purchaser and the order items) in Maropost’s product and revenue database.

**Endpoint:**

POST **https://api.maropost.com/accounts//orders(.:format)**

**Parameters:**

| **Parameter** | **Data Type** | **Required/Optional** | **Description** |
| --- | --- | --- | --- |
| email | String | Required | The email address of the purchaser/contact. |
| first name | String | Optional | The first name of the purchaser/contact. |
| last name | String | Optional | The last name of the purchaser/contact. |
| uid | String | Optional | If you are using the Unique Identifier feature to identify your contacts, then you’ll pass in the customer’s UID here. |
| list-ids | Numeric | Optional | A comma-separated set of List IDs that you want to subscribe this purchaser to. |
| order-date | DateTime | Required | The date on which the order is placed, formatted as YYYY-MM-DDTHH:Min:SS. The timestamp that you provide is assumed to be in the Eastern Time Zone. |
| order-status | String | Required | The current status (such as Processing or Complete) of the order. |
| original-order-id | String | Required | The unique ID that represents the order. |
| grand-total | Float | Optional | The total order amount. |
| campaign-id | Integer | Optional | The ID of the campaign from which the purchaser was redirected to the website. |
| coupon-code | String | Optional | If you are using the Coupon Code feature, here is where you provide the coupon code used by the purchaser when placing the order. |
| order-items | Array | Required | The products that are purchased as part of the order. Note that the products passed as order items are automatically created in the Products table of the database if they don’t already exist in the table. You can pass each order item as an array consisting of the item attributes discussed below: |
| **Order Item Parameters** |  |  |  |
| item_id | String | Optional | The ID of the item that indicates the product stock-keeping unit (SKU). |
| price | Float | Optional | The cost of the product. |
| quantity | Integer | Optional | The purchased quantity of the product. |
| description | String | Optional | The description of the product. |
| category | String | Optional | The product category into which the product is grouped. This field is useful when you want to segment your customers by category of products purchased. |

**Input Payload Example:**

The following is a sample of the input payload for the method in JSON format:

```xml
<span class="token punctuation">{</span> <span class="token property">"order"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"contact"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"test@yahoo.com"</span><span class="token punctuation">,</span> <span class="token property">"first_name"</span><span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span> <span class="token property">"last_name"</span><span class="token operator">:</span> <span class="token string">"test1"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token property">"custom_field"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"country"</span><span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span> <span class="token property">"gender"</span><span class="token operator">:</span> <span class="token string">"male"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token property">"add_tags"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"tag_name"</span><span class="token punctuation">,</span> <span class="token string">"tag_name"</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token property">"remove_tags"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"tag_name"</span><span class="token punctuation">,</span> <span class="token string">"tag_name"</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token property">"uid"</span><span class="token operator">:</span> <span class="token string">"abcd"</span><span class="token punctuation">,</span> <span class="token property">"list_ids"</span><span class="token operator">:</span> <span class="token string">"12,13"</span><span class="token punctuation">,</span> <span class="token property">"order_date"</span><span class="token operator">:</span> <span class="token string">"2017-10-13T18:05:24-04:00"</span><span class="token punctuation">,</span> <span class="token property">"order_status"</span><span class="token operator">:</span> <span class="token string">"Processed"</span><span class="token punctuation">,</span> <span class="token property">"original_order_id"</span><span class="token operator">:</span> <span class="token string">"21"</span><span class="token punctuation">,</span> <span class="token property">"grand_total"</span><span class="token operator">:</span> <span class="token string">"966.00"</span><span class="token punctuation">,</span> <span class="token property">"campaign_id"</span><span class="token operator">:</span> <span class="token null">null</span><span class="token punctuation">,</span> <span class="token property">"coupon_code"</span><span class="token operator">:</span> <span class="token null">null</span><span class="token punctuation">,</span> <span class="token property">"order_items"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span> <span class="token property">"item_id"</span><span class="token operator">:</span> <span class="token string">"7"</span><span class="token punctuation">,</span> <span class="token property">"price"</span><span class="token operator">:</span> <span class="token string">"133.00"</span><span class="token punctuation">,</span> <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span> <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Ebook"</span><span class="token punctuation">,</span> <span class="token property">"adcode"</span><span class="token operator">:</span> <span class="token string">"Xyrsty"</span><span class="token punctuation">,</span> <span class="token property">"category"</span><span class="token operator">:</span> <span class="token string">"xyz"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token property">"item_id"</span><span class="token operator">:</span> <span class="token string">"9"</span><span class="token punctuation">,</span> <span class="token property">"price"</span><span class="token operator">:</span> <span class="token string">"833.00"</span><span class="token punctuation">,</span> <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span> <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"iphone"</span><span class="token punctuation">,</span> <span class="token property">"adcode"</span><span class="token operator">:</span> <span class="token string">"xYrstuv"</span><span class="token punctuation">,</span> <span class="token property">"category"</span><span class="token operator">:</span> <span class="token string">"abc"</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
```

**Limitation**

In order to track campaign conversions, you must have the ability to capture and store the campaign ID that you must pass with the POST method.

## Native Integration with E-Commerce Platforms

Maropost supports easy integrations with various e-commerce platforms that make it easier to pass the product and revenue information automatically to Maropost. The information is then updated in Maropost’s revenue database synchronously.

We currently support native integration with the following: Shopify, 1Shopping cart, UltraCart, Nanacast cart, 3dcart, and ClickBank. To learn about Shopify integration, see [**Integration with Shopify**](https://galaxy.maropost.com/s/article/Integration-with-Shopify). To learn about integration with the different shopping carts, see [**Integration with Shopping Carts**](https://galaxy.maropost.com/kb/articles/736-integration-with-shopping-carts?utm_source=community-search&utm_medium=organic-search&utm_term=Integration+with+Carts).

**Limitation**

You cannot use the integration to track campaign conversions.

## Maropost’s Web Tracking

You can use Maropost’s Web Tracking feature to set up a tracking script for capturing order details. As part of the setup, you create a JavaScript function that you invoke at the time of purchase completion and pass the variables from the user session into the product and revenue database.

And because the Web Tracking feature also captures the campaign ID along with the purchase history, you can use this information to track campaign conversions and determine how well your campaigns are doing in terms of generating revenue.

For example, you send a campaign to your contact, and they click the link in the campaign to visit your website and then make a purchase. In this scenario, you can use the web tracking script to capture the purchase details into the Product and Revenue database along with the campaign ID, and therefore trace the purchase to the specific campaign.

**Enabling Web Tracking**

To enable web tracking to track product and revenue information, you are required to do the following setup tasks:

1. First, enable Maropost’s Web Tracking feature, which tracks the recency and frequency of page views by your known contacts. For more help, see [**Basic Web Tracking**](https://galaxy.maropost.com/s/article/Basic-Web-Tracking).
2. Then, enable the feature for capturing orders in the Orders tab of the Web Tracking Script Builder. For more help, see [**Capturing Web Conversions**](https://galaxy.maropost.com/s/article/Capturing-Web-Conversions).

**Limitation**

The information may not be very accurate, as its tracking is cookie-based.