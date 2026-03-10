---
title: "Integrating Analytics in Neto"
articleID: 521
category: "Merchandising Cloud Integrations > Neto and Merchandising Cloud"
knowledgeBase: "Merchandising Cloud"
---

# Integrating Analytics in Neto

# To integrate Merchandising Cloud Analytics follow these steps:[https://developers.findify.io/docs/maropost-integrating-findify-analytics#to-integrate-findify-analytics-follow-these-steps](https://developers.findify.io/docs/maropost-integrating-findify-analytics#to-integrate-findify-analytics-follow-these-steps)

1. 
2. 
3. 
4. 

## Step 1: Getting Started[https://developers.findify.io/docs/maropost-integrating-findify-analytics#step-1-getting-started](https://developers.findify.io/docs/maropost-integrating-findify-analytics#step-1-getting-started)

Access your website template through FTP.

1. To integrate Findify Analytics on your product page and cart page, you must use your SFTP credentials, and open an FTP client such as [FileZilla](https://filezilla-project.org/), to log into the file server and access your website template and asset files. So, download FileZilla Client and access the website template of your current theme.

![aa2325d-Rec_1.png](https://us.v-cdn.net/6038474/uploads/8TWF2Z9KZX3Y/aa2325d-rec-1.png)
2. Once you access your website template through FileZilla, go to 'httpdocs' located on the bottom right box→ 'assets' → scroll down and click on ‘themes’.

![4db96ad-Rec_2.png](https://us.v-cdn.net/6038474/uploads/71U47YXGHP3Z/4db96ad-rec-2.png)
3. Under themes, select the current theme of your website template and continue to complete the following steps.

## Step 2: Add analytics tags to the Product Page[https://developers.findify.io/docs/maropost-integrating-findify-analytics#step-2-add-analytics-tags-to-the-product-page](https://developers.findify.io/docs/maropost-integrating-findify-analytics#step-2-add-analytics-tags-to-the-product-page)

1. Under the current theme, you selected, go to 'templates' → 'product' → find 'template.html' in the box below that displays all the files

![0bbc854-Rec_3.png](https://us.v-cdn.net/6038474/uploads/6N045C6MR226/0bbc854-rec-3.png)
2. Insert one of the following snippets to the top of the ‘template.html’:

- If the product feed contains 'sku' from Neto as 'item_group_id' in the Merchandising Cloud product feed, then insert this snippet:

Product page with sku

```kotlin
<div data-findify-event="view-page" data-findify-item-id="[%if [@parent_sku@] ne '0' and [@parent_sku@] ne ''%][@parent_sku@][%else%][@sku@][%/if%]" data-findify-variant-item-id="[@sku@]"></div>
<div data-findify-filter="brand" data-findify-filter-value="[@brand@]"></div>
<div data-findify-filter="id" data-findify-filter-value="[%if [@parent_sku@] ne '0' and [@parent_sku@] ne ''%][@parent_sku@][%else%][@sku@][%/if%]"></div>
[%content_path id:'[@inventory_id@]' type:'category' limit: '1' %]\
    [%param *body%]
        [%set [@current_path@]%][@content_name@][%/set%]
        [%content_path content_id:'[@content_id@]' show_path:'y' type:'category' %]
            [%param *body%]
                [%if [@^content_id@] ne [@content_id@]%]
                    [%set [@^current_path@]%][@content_name@] > [@^current_path@][%/set%]
                [%/if%] 
            [%/param%]
        [%/content_path%]
        <div data-findify-filter="category" data-findify-filter-value="[@current_path@]"></div>
    [%/param%]
[%/content_path%]
<div data-findify-event="update-cart">
    [%cart_items%]
        [%param *body%]
        <div data-findify-item-id="[%if [@parent_sku@] ne '0' and [@parent_sku@] ne ''%][@parent_sku@][%else%][@sku@][%/if%]" data-findify-variant-item-id="[@sku@]" data-findify-unit-price="[@price@]" data-findify-quantity="[@qty@]"></div>
        [%/param%]
    [%/cart_items%]
</div>
```

- If the product feed contains 'inventory_id' from Neto as 'item_group_id' in the Merchandising Cloud product feed, then insert this snippet:

Product page with inventory_id

```perl
<div data-findify-event="view-page" data-findify-item-id="[%if [@parent_inventory_id@] ne '0' and [@parent_inventory_id@] ne ''%][@parent_inventory_id@][%else%][@inventory_id@][%/if%]" data-findify-variant-item-id="[%if [@parent_sku@] ne '0' and [@parent_sku@] ne ''%][@parent_sku@][%else%][@sku@][%/if%]"></div>
<div data-findify-filter="brand" data-findify-filter-value="[@brand@]"></div>
<div data-findify-filter="id" data-findify-filter-value="[%if [@parent_inventory_id@] ne '0' and [@parent_inventory_id@] ne ''%][@parent_inventory_id@][%else%][@inventory_id@][%/if%]"></div>
[%content_path id:'[@inventory_id@]' type:'category' limit: '1' %]\
    [%param *body%]
        [%set [@current_path@]%][@content_name@][%/set%]
        [%content_path content_id:'[@content_id@]' show_path:'y' type:'category' %]
            [%param *body%]
                [%if [@^content_id@] ne [@content_id@]%]
                    [%set [@^current_path@]%][@content_name@] > [@^current_path@][%/set%]
                [%/if%] 
            [%/param%]
        [%/content_path%]
        <div data-findify-filter="category" data-findify-filter-value="[@current_path@]"></div>
    [%/param%]
[%/content_path%]
<div data-findify-event="update-cart">
    [%cart_items%]
        [%param *body%]
        <div data-findify-item-id="[%if [@parent_inventory_id@] ne '0' and [@parent_inventory_id@] ne ''%][@parent_inventory_id@][%else%][@inventory_id@][%/if%]" data-findify-variant-item-id="[%if [@parent_sku@] ne '0' and [@parent_sku@] ne ''%][@parent_sku@][%else%][@sku@][%/if%]" data-findify-unit-price="[@price@]" data-findify-quantity="[@qty@]"></div>
        [%/param%]
    [%/cart_items%]
</div>
```

## Step 3: Add 'update-cart' tags to the Cart Page[https://developers.findify.io/docs/maropost-integrating-findify-analytics#step-3-add-update-cart-tags-to-the-cart-page](https://developers.findify.io/docs/maropost-integrating-findify-analytics#step-3-add-update-cart-tags-to-the-cart-page)

1. Open the theme folder of the current theme you are using and go to 'templates' → 'cart' → 'shopping_cart.template.html'

![bdde094-Rec_4.png](https://us.v-cdn.net/6038474/uploads/QZ1JWLR8KT54/bdde094-rec-4.png)
2. Insert one of the following snippets to the top of the ‘shopping_cart.template.html’ 

- 

update-cart with sku

```applescript
<div data-findify-event="update-cart">
    [%cart_items%]
        [%param *body%]
        <div data-findify-item-id="[%if [@parent_sku@] ne '0' and [@parent_sku@] ne ''%][@parent_sku@][%else%][@sku@][%/if%]" data-findify-variant-item-id="[@sku@]" data-findify-unit-price="[@price@]" data-findify-quantity="[@qty@]"></div>
        [%/param%]
    [%/cart_items%]
</div>
```

- 

update-cart with inventory_id

```applescript
<div data-findify-event="update-cart">
    [%cart_items%]
        [%param *body%]
        <div data-findify-item-id="[%if [@parent_inventory_id@] ne '0' and [@parent_inventory_id@] ne ''%][@parent_inventory_id@][%else%][@inventory_id@][%/if%]" data-findify-variant-item-id="[@sku@]" data-findify-unit-price="[@price@]" data-findify-quantity="[@qty@]"></div>
        [%/param%]
    [%/cart_items%]
</div>
```

## Step 4: Add 'purchase-tracking' tags[https://developers.findify.io/docs/maropost-integrating-findify-analytics#step-4-add-purchase-tracking-tags](https://developers.findify.io/docs/maropost-integrating-findify-analytics#step-4-add-purchase-tracking-tags)

1. Open your Neto admin panel and go to 'Settings & tools' → 'All settings & tools'.

![8ef91b0-4.png](https://us.v-cdn.net/6038474/uploads/TPBOPQZAQ44S/8ef91b0-4.png)
2. Scroll down to Analytics & 3rd Party Scripts and click on 'Custom Scripts'.

![1c30287-analytics_4.png](https://us.v-cdn.net/6038474/uploads/6STPW9MROD5I/1c30287-analytics-4.png)
3. Click on 'Add New' located on the top right of your dashboard.

![ef366bb-analytics_5.png](https://us.v-cdn.net/6038474/uploads/X7TSRYSULURD/ef366bb-analytics-5.png)
4. Name custom script: 'Findify Revenue Tracking' and leave all 'keys' empty.

![0470f01-analytics_6.png](https://us.v-cdn.net/6038474/uploads/EHHUZ605ORY0/0470f01-analytics-6.png)
5. Go to the 'Purchase Confirmation (Thank You Page)' tab which is the fourth tab and insert the snippet below in the space available under Scripts:

![Image](https://files.readme.io/4d7d3e0-analytics_7.png)
Snippets:

- If the product feed contains 'sku' from Neto as 'item_group_id' in the Merchandising Cloud product feed, then insert this snippet:

purchase with sku

```applescript
<script src="//assets.findify.io/${YOUR_STORE_NAME}.min.js" async defer></script>

[%SHOW_ORDER id:'[@ORDER_ID@]'%]

[%PARAM *header%]
<div data-findify-event="purchase" data-findify-order-id="[@ORDER_ID@]" data-findify-currency="AUD" data-findify-revenue="[@GRAND_TOTAL@]">
[%END PARAM%]
    [%PARAM *body%]
    <div data-findify-item-id="[%if [@parent_sku@] ne '0' and [@parent_sku@] ne ''%][@parent_sku@][%else%][@sku@][%/if%]" data-findify-variant-item-id="[@sku@]" data-findify-unit-price="[@price@]" data-findify-quantity="[@qty@]"></div>
    [%END PARAM%]
    [%PARAM *footer%]
</div>
[%END PARAM%]

[%END SHOW_ORDER%]
```

- If the product feed contains 'inventory_id' from Neto as 'item_group_id' in the Merchandising Cloud product feed, then insert this snippet:

purchase with inventory_id

```applescript
<script src="//assets.findify.io/${YOUR_STORE_NAME}.min.js" async defer></script>

[%SHOW_ORDER id:'[@ORDER_ID@]'%]

[%PARAM *header%]
<div data-findify-event="purchase" data-findify-order-id="[@ORDER_ID@]" data-findify-currency="AUD" data-findify-revenue="[@GRAND_TOTAL@]">
[%END PARAM%]
    [%PARAM *body%]
    <div data-findify-item-id="[%if [@parent_inventory_id@] ne '0' and [@parent_inventory_id@] ne ''%][@parent_inventory_id@][%else%][@inventory_id@][%/if%]" data-findify-variant-item-id="[%if [@parent_sku@] ne '0' and [@parent_sku@] ne ''%][@parent_sku@][%else%][@sku@][%/if%]" data-findify-unit-price="[@price@]" data-findify-quantity="[@qty@]"></div>
    [%END PARAM%]
    [%PARAM *footer%]
</div>
[%END PARAM%]

[%END SHOW_ORDER%]
```

> **Note:** 📘 **Help: **For further help, feel free to email [support@maropost.com](mailto:support@maropost.com)