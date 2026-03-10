---
title: "iWish"
articleID: 2211
category: "Shopify Liquid FE > Wishlist Integrations (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# iWish

You can integrate iWish wishlist functionality with your Merchandising Cloud implementation to provide customers with a convenient way to save and manage product favorites. This third-party integration extends your store's capabilities by adding robust wishlist features that help improve customer engagement and retention.

iWish integration enables customers to create and manage wishlists across browsing sessions, encouraging return visits and providing valuable insights into product interest. By implementing wishlist functionality, you give customers flexibility in their purchase timing while gathering data about product demand that can inform inventory and merchandising decisions.

We offer a number of integrations with complementing services and plugins. In this guide, we will walk you through how to set up the iWish wishlist app on your Shopify store using Maropost Merchandising Cloud (formerly Findify) and Liquid.

To start, you must have already downloaded the iWish app from the [Shopify App Store](https://apps.shopify.com/i-wishlist).

## Step 1: Enable iWish in App Embeds

1. 
2. 
3. 
4. 

![2c19a81-D0A1D0BDD0B8D0BCD0BED0BA_D18DD0BAD180D0B0D0BDD0B0_2024-05-28_D0B2_14.12.01.png](https://us.v-cdn.net/6038474/uploads/H23SB2HFHXRY/2c19a81-d0a1d0bdd0b8d0bcd0bed0ba-d18dd0bad180d0b0d0bdd0b0-2024-05-28-d0b2-14-12-01.png)

## Step 2: Create the `socialshopwave-widget-fave.liquid` Snippet

1. 
2. 
3. 

HTML

```twig
<script async="" type="text/javascript">  var shop = "your store name"; //alex-liquid-test-store.myshopify.com  var iwish_qvWrapper = "";  var iwish_qvBtn_click = "";  var iwish_custom_filters = "";  var variant_name_id_selector = "[name=id]"  var filter_timeout = 1500  var is_iwish_col_template = false;  var iwish_shop = "your store name"; //alex-liquid-test-store.myshopify.com  var custom_variant_change = "";  var iwish_cid = "";  //console.log("Fre::",`<span> Add To Wishlist </span> `);  var iwish_add_txt = `<!-- BEGIN app snippet: all-svgs --><svg height="25px" width="25px" style="stroke:currentColor;stroke-width: 10px;" id="Layer_1" version="1.1" viewBox="0 0 512 512"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9  c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8  c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8  c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z"></path></svg><!-- END app snippet --><span>Add To Wishlist</span>`;  var iwish_add_txt_col = `<!-- BEGIN app snippet: all-svgs --><svg height="25px" width="25px" style="stroke:currentColor;stroke-width: 10px;" id="Layer_1" version="1.1" viewBox="0 0 512 512"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9  c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8  c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8  c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z"></path></svg><!-- END app snippet -->`;  var iwish_added_txt = `<!-- BEGIN app snippet: all-svgs --><svg height="25px" width="25px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M340.8,83C307,83,276,98.8,256,124.8c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6  L245.1,418l10.9,11l10.9-11l148.3-149.8c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z"></path></svg><!-- END app snippet --><span>Added To Wishlist</span>`;  var iwish_added_txt_col = `<!-- BEGIN app snippet: all-svgs --><svg height="25px" width="25px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M340.8,83C307,83,276,98.8,256,124.8c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6  L245.1,418l10.9,11l10.9-11l148.3-149.8c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z"></path></svg><!-- END app snippet -->`;  var drawerData = document.getElementById("drawer_data");  setTimeout(()=>{    if(drawerData){      let isMultiLang =  drawerData.getAttribute("data-ismultilang");      if(isMultiLang=="true"){        iwish_add_txt = `<!-- BEGIN app snippet: all-svgs --><svg height="25px" width="25px" style="stroke:currentColor;stroke-width: 10px;" id="Layer_1" version="1.1" viewBox="0 0 512 512"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9  c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8  c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8  c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z"></path></svg><!-- END app snippet --><span> Add To Wishlist </span> `;      }    }  },500);</script>{% if iwish_v2 == 'iwishlink' %}<a class="iWishView" href="/apps/iwish">Wishlist (<span class="iWishCount">0</span>)</a>{% elsif iwish_v2 == 'iwishproduct' %}<div class="iwishAddWrap"><a class="iWishAdd" href="#" data-product="{{ product.id }}" data-pTitle="{{ product.title | escape }}">Add to Wishlist</a>{% unless customer %}<p class="iWishLoginMsg" style="display: none;">Your wishlist has been temporarily saved. Please <a href="/account/login">Log in</a> to save it permanently.</p>{% endunless %}</div>{% elsif iwish_v2 == 'iwishCollection' %}<a class="iWishAddColl iwishcheck" href="#" data-variant="{{ product.variants.first.id }}" data-product="{{ product.id }}" data-pTitle="{{ product.title | escape }}">      <svg height="25px" width="25px" style="stroke:currentColor;stroke-width: 10px;" id="Layer_1" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9  c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8  c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8  c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z"></path></svg>    </a>{% elsif iwish_v2 == 'iwishfooter' %}<script type="text/javascript">var iwish_shop = "{{ shop.permanent_domain }}";var iwish_pro_template = {% if template contains 'product' %}true{% else %}false{% endif %};var iwish_cid = "{{ customer.id }}";//Add to Wishlist - Product Page Textvar iwish_added_txt = 'Added in Wishlist';var iwish_add_txt = 'Add to Wishlist';//Add to Wishlist - Collection Page Textvar iwish_added_txt_col = 'Added in Wishlist';var iwish_add_txt_col = 'Add to Wishlist';//Quick View - Classes//var iwish_qvButton = '.quick_view';//var iwish_qvWrapper = '.reveal-modal';</script><script type="text/javascript">(function(){function iWishLoadScript(e,t){for(var a=0;a<e.length;a++){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=e[a],document.getElementsByTagName("head")[0].appendChild(n),0==a&&(n.readyState?n.onreadystatechange=function(){"loaded"!==n.readyState&&"complete"!==n.readyState||(n.onreadystatechange=null,t())}:n.onload=function(){t()})}}function asyncLoadshopapps(){var iWishUrls=["https://cdn.myshopapps.com/iwish/iwishlist_v2.js"];iWishLoadScript(iWishUrls, function() {jQuery("a[href='/apps/iwish']").click(function(e) {if(typeof(Storage) !== "undefined") {e.preventDefault();iWishPost('/apps/iwish',{iwishlist:JSON.stringify(iWishlistmain),cId:iwish_cid});}});jQuery(".iWishAdd").click(function() {var iWishvId = jQuery(this).parents(iwishWrapperClass).find(iWishVarSelector).val();iwish_add(jQuery(this), iWishvId);return false;});jQuery(".iWishAddColl").click(function() {var iWishvId = jQuery(this).attr("data-variant");iwish_addCollection(jQuery(this),iWishvId);return false;});});}if (window.addEventListener){ window.addEventListener("load", asyncLoadshopapps, true); }else if (window.attachEvent){ window.attachEvent("onload", asyncLoadshopapps); }else { window.onload = asyncLoadshopapps; }})();</script>{% endif %}
```

## Step 3: Include the Snippet in Your Theme

1. 
2. 

HTML

```
{% include 'socialshopwave-widget-fave' with 'iwishfooter' %}
```

1. 

JSX

```twig
<span class="wishList">    {% capture the_snippet_fave %}      {% render 'socialshopwave-widget-fave',         product: product,        iwish_v2: 'iwishCollection'      %}    {% endcapture %}    {% unless the_snippet_fave contains 'Liquid error' %}       {{ the_snippet_fave }}    {% endunless %}  </span>
```

## Step 4: Test Your Implementation

1. 
2. 
3. 

## Conclusion

By following these steps, you have successfully integrated the iWish wishlist app into your Shopify store and customized its appearance and functionality using Merchandising Cloud and Liquid. This setup will enhance your store's user experience by allowing customers to save their favorite products to a wishlist.

If you encounter any issues or need further customization, refer to the [iWish documentation](https://docs.iwishapp.com/) or contact support on [support@maropost.com](mailto:support@maropost.com)