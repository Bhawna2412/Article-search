---
title: "eBay Images"
articleID: 1084
category: "Ways to Sell on Neto > eBay > eBay - Maintenance & Tweaks"
knowledgeBase: "Neto By Maropost"
---

# eBay Images

## eBay Specific Images

Neto allows you to hide a certain range of images from your website so that they can be used for other sales channels like eBay. This is commonly used to brand your eBay store differently from your website, or you wish to have a gallery image that stands out amongst search results.

### Change Image Settings

Your webstore will display 10 product images by default. You can change this setting so that you can upload images for eBay into Alt 11 or higher. Follow the steps in [this article](https://galaxy.maropost.com/kb/articles/1042-change-default-image-settings) to find the setting.

### Hide Images from Website

To hide images from your website:

1. In your Neto control panel navigate to **Settings & Tools** > **All settings & tools**.
2. Click the **Other** tab on the left hand side.
3. Click **Advanced Configuration**.
4. In the **Name** field, type: **PRODUCT_OFFSITE_THUMB_TOTAL** and press **Apply Filter**.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayImages1.05T5g00000v4azlEAA.png)
5. Click on **PRODUCT_OFFSITE_THUMB_TOTAL** to edit this setting.
  The number you enter is the amount of images, before the last image that you wish to hide.

  So for example, if you have 10 images on your products, and want to hide **Alternative Images 7 to 10** you would set this value to 4 (10, 9, 8, 7).

  The best way to ensure consistency across your images is to do some planning ahead of time for your eBay images. Depending on how many images you upload on a product, we recommend reserving some just for eBay. For example, if you do up to 10 images per product, reserve Alt image 11 - 20 for eBay. To increase the number of images per product see [this article](https://galaxy.maropost.com/kb/articles/1042-change-default-image-settings).

  However many you reserve, always add your eBay images from the highest image slot first (e.g. 20). By doing this you can set the PRODUCT_OFFSITE_THUMB_TOTAL to 10 and ensure none of your website images are hidden.
6. Once complete, click **Save Changes**.

### Configure Listing Rules Template

You can now configure your eBay listing rules templates to use the eBay specific images.

1. In your Neto control panel navigate to **eBay** > **Listing Rules Templates**.
2. Click on a template to edit its details.
3. Click on the **Listing Design & Images** tab to see how your images are mapped.
4. Map your images to the specific slots that they are uploaded to on your products. Following the example above, the main/gallery image has been mapped to Alt 20, and two more eBay specific images appear next. From there, the standard product images are used.
  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayImages2.05T5g00000v4b0UEAQ.png)
5. Click **Save Template**.

Your website and eBay listing should now be using the correct images assigned to them.

## eBay Image Requirements

Photo requirements on eBay are numerous and can prevent products from being listed or even cause active listings to be removed.

Please check the following requirements from ebay.com.au.

### Every listing must have at least one photo

Listings without accompanying photos are no longer allowed. If your item isn't something you can photograph yourself browse the Internet for copyright-free images you can use with your listing.

### Minimum photo size

eBay requires a minimum length of 500 pixels for the longest side.

The system has a function to automatically stretch any images up to 550px while maintaining ratio. You can switch this on under ebay > setup > settings > Automatically Enlarge Main Product Image

![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayImages3.05T5g00000v4b1IEAQ.png)

### Don't use borders on your photos

Borders aren't allowed on any of your photos. The only exception is if you have a "natural" border created by photographing your square or rectangular item against a neutral-colored backdrop.

### Watermark policy

Watermarks are allowed for ownership and attribution, but not for marketing information, specific details about your item, or customer service. Your watermark should be no bigger than 5% of the total image area, have an opacity of no more than 50%, and never obscure the item. Links are not allowed in watermarks.

To make sure your watermarks are compliant, use the eBay watermark creation service. You'll find it in the "Bring your item to life with pictures" section of the listing form.

### No text or artwork on photos

No text or artwork (such as "Free shipping" or seller logos) may be added to photos. Copy that is essential to your listing should be placed in the title, subtitle, or item description.

### Stock photos can only be used for brand-new items

Stock photos may no longer be used as the primary photo for a used item listing. Catalog images are acceptable, but not as the primary photo for used items; exceptions are the Books, Movies, Music, and Video Game categories. Catalog images for video game consoles, however, must adhere to the new requirement.

### Enable the Zoom/Enlarge feature

Your listing photos will be automatically enabled with a free zoom/enlarge feature on the View Item page if they are high enough resolution. We recommend photos be between 800 - 1600 pixels on the longest side (height or width). Images less than 800 pixels on the longest side will not have this feature enabled.