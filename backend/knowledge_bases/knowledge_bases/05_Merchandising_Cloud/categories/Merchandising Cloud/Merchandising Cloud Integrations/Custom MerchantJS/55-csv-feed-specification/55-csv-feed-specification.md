---
title: "CSV Feed Specification"
articleID: 55
category: "Merchandising Cloud Integrations > Custom MerchantJS"
knowledgeBase: "Merchandising Cloud"
---

# CSV Feed Specification

This document presents the product feed specification for the **CSV** feeds to be sent to Maropost Merchandising Cloud (formerly Findify).

In order for the product feed to be synchronized periodically with the search engine, the CSV file must be accessible via HTTP or HTTPS. Merchandising Cloud is supporting files behind basic authentication.

## Mandatory Fields

| Name of the field | Description | Example |
| --- | --- | --- |
| id | Unique identifier of the product. This identifier must be **unique** across all products. | *tddy123uk* |
| item_group_id | Common identifier for all variants of the same product. If there are no variants present for the product, use the same value as *id* | *89A* |
| title | Title of the product. | *Men's Pique Polo Shirt* |
| description | Description of the product. The description should not be written over multiples lines. | *Solid red, king-sized bed sheets made from 100% woven polyester 300-thread count fabric. Set includes one fitted sheet, one flat sheet and two standard pillowcases. Machine washable; extra-deep fitted pockets.* |
| price | Price of the product. | *15.99* |
| image_url | URL of the image of the product. For the best-displaying quality, the image must have a size of 180px * 180px. | [*http://www.example.co.uk/image1.jpg*](http://www.example.co.uk/image1.jpg) |
| product_url | URL of the product’s page. | [*http://www.example.com/asp/sp.asp?cat=12&id=1030*](http://www.example.com/asp/sp.asp?cat=12&id=1030) |
| category | Category of the product. Subcategories are split using the > delimiter. It's possible to include several groups of categories by separating them with the ### delimiter. | *Clothing & Accessories > Clothing > Dresses* |
| thumbnail_url | URL of the thumbnail image of the product. The thumbnail image must have a size of 65px * 65px. | [*http://www.example.co.uk/image1_thumb.jpg*](http://www.example.co.uk/image1_thumb.jpg) |
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
| cost | Cost of the product. `<span class="cm-s-neo" style="box-sizing: border-box;">margin = price - cost</span>` | *10.50* |
| size | Size of the product. | *34* |
| quantity | Quantity of the product | *98* |
| reviews.average_score | Rating score of the product | *3.5* |
| reviews.count | Ratings amount per product | *13* |
| name_custom_field | A custom field that contains one specific information. | ** |

## Custom Fields

Custom fields that are not part of the model above but can be specified in the feed. Custom fields can contain a large panel of information, specific to your products or to your business. Custom fields can be configured to be used as a searchable field or as a filter in the Merchandising Cloud Merchant Dashboard.

**At the moment, only custom fields that have a type of String or Double are accepted.**

To include custom fields, just add its name in the header of your CSV file. Then, for each line, write the value of the custom field. If there is no value, just let the field empty.

Here is an example with two custom fields (in bold) for the following product:

> id,item_group_id,title,description,price,image_url,product_url,category,thumbnail_url,availability,brand,sale_price,material,color,size,quantity,item_group_id,reviews.average_score,reviews.count,created_at,occasion,gender

> tddy123uk,tddy123uk,"Men's Pique Polo Shirt","Solid red, king-sized bed sheets made from 100% woven polyester 300-thread count fabric. Set includes one fitted sheet, one flat sheet and two standard pillowcases. Machine washable; extra-deep fitted pockets.",15.99,[http://www.example.co.uk/image1.jpg,http://www.example.com/asp/sp.asp?cat=12&id=1030,Clothing](http://www.example.co.uk/image1.jpg,http://www.example.com/asp/sp.asp?cat=12&id=1030,Clothing) & Accessories > Clothing > Dresses,[http://www.example.co.uk/image1_thumb.jpg,in](http://www.example.co.uk/image1_thumb.jpg,in) stock,Calvin Klein,13.65,cotton,red,34,98,89A,3.5,13,1977-04-22T06:00:00Z,**casual**,**man**

# Variants

Your feed can contain variants. Specifying the optional field ***item_group_id*** and filling it with a common value for the variants you want to group will let us group these variants into one product.

If your model does not permit it, grouping the variants according to the product URL or another field from the set of mandatory fields is also possible. Let us know at [support@maropost.com](mailto:support@maropost.com) if you want to make this happen.

# Product Feed Example in CSV

The first line of the feed must be the line **describing the headers**, ie. the different names for the fields you want to include with your product. The mandatory fields described above must be present in order for the products to be displayed in the search results.

However, you don’t have to put all the optional fields if your products don’t include the related information. The field names are separated by the **comma delimiter** **“,”** in the headers line.

Each product is then written as a line in the CSV file, the fields' content is also separated by the comma delimiter **“,”**.

> 🚧 **Array Support** The CSV product feed does not support Arrays. If you want to include multiple values under one field: put the values into one string and separate them by any delimeter (most commonly used comma "," ). Once setup, you would need to ask our support team: [support@maropost.com](mailto:support@maropost.com) to setup a rule to split the values by the defined delimeter for one field.
> And example of the field with multiple values can be tags: ...,tags,...
> ...,"tag1,tag2,tag3",....

Here is an example with the header that contains all the fields and 1 product (second line).

> id,sku,title,description,price,image_url,product_url,category,thumbnail_url,availability,brand, sale_price,material,color,size,quantity,item_group_id,**reviews.average_score**,**reviews.count**,
> **created_at**

> tddy123uk,126373-AOP,"Men's Pique Polo Shirt","Solid red, king-sized bed sheets made from 100% woven polyester 300-thread count fabric. Set includes one fitted sheet, one flat sheet and two standard pillowcases. Machine washable; extra-deep fitted pockets.",15.99,[http://www.example.co.uk/image1.jpg,http://www.example.com/asp/sp.asp?cat=12&id=1030,Clothing](http://www.example.co.uk/image1.jpg,http://www.example.com/asp/sp.asp?cat=12&id=1030,Clothing) & Accessories > Clothing > Dresses,[http://www.example.co.uk/image1_thumb.jpg,in](http://www.example.co.uk/image1_thumb.jpg,in) stock,Calvin Klein,13.65,cotton,red,34,98,89A,3.5,13,1977-04-22T06:00:00Z

# Remove Select Products From Search

It is possible to remove some products from the search. This can be useful when the feed is automatically generated. In order to remove some products, you need to add another field named **“tags”** and give it the value **findify-remove**.

In case you have already tags in your feed, separate the value **findify-remove** from the other values with a comma: *“findify-remove, tag1, tag2”*.