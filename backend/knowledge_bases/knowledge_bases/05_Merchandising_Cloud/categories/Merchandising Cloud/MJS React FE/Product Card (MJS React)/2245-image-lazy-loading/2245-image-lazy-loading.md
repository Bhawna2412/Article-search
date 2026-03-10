---
title: "Image Lazy Loading"
articleID: 2245
category: "MJS React FE > Product Card (MJS React)"
knowledgeBase: "Merchandising Cloud"
---

# Image Lazy Loading

Implementing image lazy loading helps improve page load speeds and overall site performance, which tends to enhance both customer experience and conversion rates. When product images load only as customers scroll to them, you reduce initial page load times and bandwidth usage, helping ensure that customers on slower connections can engage with your search results more effectively.

Lazy loading optimization supports better technical performance across all customer devices and connection speeds. This helps improve engagement and reduces bounce rates by ensuring that pages remain responsive, supporting better product discovery especially for mobile shoppers and customers in regions with varying internet speeds.

> Requires at least version 6.9.15You can check which version your shop is using within the console of your dev tools.Note: Only Findify's admins can change the version's number. If you need further assistance, please reach out to support@maropost.com

![688](https://files.readme.io/248a2a6-Bildschirmfoto_2020-03-04_um_18.56.23.png)

> Componentscomponents/Cards/Product/view.tsx

To add lazy loading to your image component, simply add `lazy` to it as shown below.

components/Cards/Product/view.tsx

```plaintext
<Image  className={classNames(theme.image)}  aspectRatio={config.getIn(['product', 'image', 'aspectRatio'], 1)}  thumbnail={item.get('thumbnail_url')}  src={item.get('image_url') || item.get('thumbnail_url')}  alt={item.get('title')}  // add lazy, default is true  lazy  />
```