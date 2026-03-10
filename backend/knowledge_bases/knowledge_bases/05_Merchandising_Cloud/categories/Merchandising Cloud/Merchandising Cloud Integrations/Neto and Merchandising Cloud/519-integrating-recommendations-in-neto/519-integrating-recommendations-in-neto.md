---
title: "Integrating Recommendations in Neto"
articleID: 519
category: "Merchandising Cloud Integrations > Neto and Merchandising Cloud"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Integrating Recommendations in Neto

# To integrate Recommendations follow these steps:[https://developers.findify.io/docs/maropost-integrating-recommendations#to-integrate-findify-recommendations-follow-these-steps](https://developers.findify.io/docs/maropost-integrating-recommendations#to-integrate-findify-recommendations-follow-these-steps)

1. 
2. 
3. 
4. 

## Step 1: Getting Started[https://developers.findify.io/docs/maropost-integrating-recommendations#step-1-getting-started](https://developers.findify.io/docs/maropost-integrating-recommendations#step-1-getting-started)

1. To integrate Recommendation on your home page, you must first access your website template and asset files through an FTP client such as FileZilla using your SFTP login details. If you don’t already have FileZilla, please download [FileZilla](https://filezilla-project.org/) Client and access the website template of your themes.

![aa2325d-Rec_1.png](https://us.v-cdn.net/6038474/uploads/XPIIFFSLJGM0/aa2325d-rec-1.png)

2. Once you get access through FileZilla, go to ‘httpdocs’ → ‘assets’
Under assets, scroll down and click on ‘themes.’ Then select the theme folder you wish to edit and continue to complete the following steps:

![4db96ad-Rec_2.png](https://us.v-cdn.net/6038474/uploads/7S1G88YQ0CLG/4db96ad-rec-2.png)

## Step 2: Integrating Recommendations on Home Page[https://developers.findify.io/docs/maropost-integrating-recommendations#step-2-integrating-recommendations-on-home-page](https://developers.findify.io/docs/maropost-integrating-recommendations#step-2-integrating-recommendations-on-home-page)

1. You must edit the home page template by going to 'templates' → 'cms' → 'home.template.html'

![0bbc854-Rec_3.png](https://us.v-cdn.net/6038474/uploads/YB35XNIMPUPS/0bbc854-rec-3.png)

2. Open 'home.template.html' and insert the following code:

recommendation tag

```xml
<div id="home-findify-rec-1"></div>
```

## Step 3: Integrating Recommendations on Cart Page[https://developers.findify.io/docs/maropost-integrating-recommendations#step-3-integrating-recommendations-on-cart-page](https://developers.findify.io/docs/maropost-integrating-recommendations#step-3-integrating-recommendations-on-cart-page)

1. You must edit the cart template by going to 'templates' → 'cart' → 'shopping_cart.template.html'

![bdde094-Rec_4.png](https://us.v-cdn.net/6038474/uploads/Z1L81S97EKG6/bdde094-rec-4.png)
2. Open inserting the following code:

recommendation tag

```xml
<div id="cart-findify-rec-1"></div>
```

## Step 4: Integrating Recommendation on Product Page[https://developers.findify.io/docs/maropost-integrating-recommendations#step-4-integrating-recommendation-on-product-page](https://developers.findify.io/docs/maropost-integrating-recommendations#step-4-integrating-recommendation-on-product-page)

1. You must edit the product template by going to 'templates' → 'product' → 'template.html'

![7578615-Rec_5.png](https://us.v-cdn.net/6038474/uploads/ASVQ4I94XLTD/7578615-rec-5.png)

2. Open 'template.html' and inserting the following code:

recommendation tag

```xml
<div id="product-findify-rec-1"></div>
```