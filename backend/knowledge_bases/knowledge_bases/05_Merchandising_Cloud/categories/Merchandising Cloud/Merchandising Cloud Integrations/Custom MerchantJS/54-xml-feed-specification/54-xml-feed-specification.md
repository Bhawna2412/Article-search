---
title: "XML Feed Specification"
articleID: 54
category: "Merchandising Cloud Integrations > Custom MerchantJS"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-25
---

# XML Feed Specification

This document presents the product feed specification for the **XML** feeds to be sent to Maropost Merchandising Cloud (formerly Findify).

In order for Merchandising Cloud to synchronize periodically your products with our system, the XML file must be publicly accessible. Merchandising Cloud is supporting feeds available via HTTP or HTTPS (behind a basic authentication).

## Mandatory Fields

| Name of the field | Description | Example |
| --- | --- | --- |
| id | Unique identifier of the product. This identifier must be **unique** across all products. | *tddy123uk* |
| item_group_id | Common identifier for all variants of the same product. If there are no variants present for the product, use the same value as *id* | *89A* |
| title | Title of the product. | *Men's Pique Polo Shirt* |
| description | Description of the product. The description should not be written over multiples lines. | *Solid red, king-sized bed sheets made from 100% woven polyester 300-thread count fabric. Set includes one fitted sheet, one flat sheet and two standard pillowcases. Machine washable; extra-deep fitted pockets.* |
| price | Price of the product. | *15.99* |
| image_url | URL of the image of the product. For the best-displaying quality, the image must have a size of 180px * 180px. | [http://www.example.co.uk/image1.jpg](http://www.example.co.uk/image1.jpg) |
| product_url | URL of the product’s page. | [http://www.example.com/asp/sp.asp?cat=12&id=1030](http://www.example.com/asp/sp.asp?cat=12&id=1030) |
| category | Category of the product. Subcategories are split using the > delimiter. It's possible to include several groups of categories by separating them with the ### delimiter. | *Clothing & Accessories > Clothing > Dresses* |
| thumbnail_url | URL of the thumbnail image of the product. The thumbnail image must have a size of 65px * 65px. | [http://www.example.co.uk/image1_thumb.jpg](http://www.example.co.uk/image1_thumb.jpg) |
| availability | Availability status of the product (‘in stock” or “out of stock”). | *in stock* |
| created_at | Date when the product has been made available to the users (format ISO-8601). | *2014-04-22T06:00:00Z* |
| updated_at | Date when the product has been updated last (format ISO-8601). | *2014-04-22T06:00:00Z* |

## Optional Fields

| Name of the field | Description | Example |
| --- | --- | --- |
| sku | SKU of the product. Even if the "id" of the product is the SKU, you need to add a dedicated "sku" field. | *126373-AOP* |
| brand | Brand of the product. | *Calvin Klein* |
| seller | Seller of the product. | *Calvin Shop* |
| sale_price | Advertised sale price of the product. | *13.65* |
| material | Material of the product. | *cotton* |
| color | Color of the product. | *red* |
| cost | Cost of the product. `margin = price - cost` | *10.50* |
| size | Size of the product. | *34* |
| quantity | Quantity of the product | *98* |
| created_at | Date when the product has been made available to the users (format ISO-8601). | *2014-04-22T06:00:00Z* |
| reviews.average_score | Rating score of the product | *3.5* |
| reviews.count | Ratings amount per product | *13* |
| name_custom_field | A custom field that contains one specific information. | ** |

## Custom Fields

Custom fields that are not part of the model above but can be specified in the feed. Custom fields can contain a large panel of information, specific to your products or to your business. Custom fields can be configured to be used as a searchable field or as a filter in the Merchandising Cloud Merchant Dashboard.

**At the moment, only custom fields that have a type of String or Double are accepted.**

To include new custom fields, add a new element which name is the custom field name in the product element.

# Variants

Your feed can contain variants. Specifying the optional field ***item_group_id*** and filling it with a common value for the variants you want to group will let us group these variants into 1 product.

If your model does not permit it, grouping the variants according to the product URL or another field from the set of mandatory fields is also possible. Let us know at [support@maropost.com](mailto:support@maropost.com) if you want to make this happen.

# Product feed example in XML

The following example contains all the mandatory fields, some of the optional fields and the custom_field "*gender*".

```xml
<?xml version="1.0" encoding="UTF-8"?>
<products>
    <product>
        <id><![CDATA[tddy123uk]]></id>
    <item_group_id><![CDATA[tddy123uk]]></item_group_id>
        <sku><![CDATA[126373-AOP]]></sku>
        <title><![CDATA[Men's Pique Polo Shirt]]></title>
        <description><![CDATA[Solid red, king-sized bed sheets made from 100% woven polyester 300-thread count fabric. Set includes one fitted sheet, one flat sheet and two standard pillowcases. Machine washable; extra-deep fitted pockets.]]></description>
        <price><![CDATA[15.99]]></price>
        <sale_price><![CDATA[10.99]]></sale_price>
        <image_url><![CDATA[http://www.example.co.uk/image1.jpg]]></image_url>
        <product_url><![CDATA[http://www.example.com/asp/sp.asp?cat=12&id=1030]]></product_url>
        <category><![CDATA[Clothing & Accessories > Clothing > Dresses]]></category>
        <thumbnail_url><![CDATA[http://www.example.co.uk/image1_thumb.jpg]]></thumbnail_url>
        <availability><![CDATA[in stock]]></availability>
        <created_at><![CDATA[2014-04-22T06:00:00Z]]></created_at>
        <brand><![CDATA[Calvin Klein]]></brand>
        <color><![CDATA[Musta]]></color>
        <size><![CDATA[M]]></size>
        <item_group_id><![CDATA[89A]]></item_group_id>
        <quantity><![CDATA[17]]></quantity>
        <gender>Male</gender>
    </product>
    <product>
    <product>
        <id><![CDATA[ppp333sss]]></id>
        <sku><![CDATA[12000-PPP]]></sku>
        <title><![CDATA[Men's Pique Polo Shirt Size L]]></title>
        <description><![CDATA[Solid red, king-sized bed sheets made from 100% woven polyester 300-thread count fabric. Set includes one fitted sheet, one flat sheet and two standard pillowcases. Machine washable; extra-deep fitted pockets.]]></description>
        <price><![CDATA[20.99]]></price>
        <sale_price><![CDATA[11.99]]></sale_price>
        <image_url><![CDATA[http://www.example.co.uk/image4.jpg]]></image_url>
        <product_url><![CDATA[http://www.example.com/asp/sp.asp?cat=12&id=0001]]></product_url>
        <category><![CDATA[Clothing & Accessories > Clothing > Dresses]]></category>
        <thumbnail_url><![CDATA[http://www.example.co.uk/image1_thumb.jpg]]></thumbnail_url>
        <availability><![CDATA[in stock]]></availability>
        <created_at><![CDATA[2014-04-22T06:00:00Z]]></created_at>
        <brand><![CDATA[Calvin Klein]]></brand>
        <color><![CDATA[Musta]]></color>
        <size><![CDATA[L]]></size>
        <item_group_id><![CDATA[89A]]></item_group_id>
        <quantity><![CDATA[18]]></quantity>
        <gender>Male</gender>
    </product>
    <product>
        ...
    </product>
</products>
```

# Remove Select Products From Search

It is possible to remove some products from the search. This can be useful when the feed is automatically generated. In order to remove some products, you need to add another field named **“tags”** and give it the value **findify-remove**.

In case you have already tags in your feed, separate the value **findify-remove** from the other values with a comma: *“findify-remove, tag1, tag2”*.