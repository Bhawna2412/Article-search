---
title: "Custom MerchantJS Integration Steps"
articleID: 59
category: "Merchandising Cloud Integrations > Custom MerchantJS"
knowledgeBase: "Merchandising Cloud"
---

# Custom MerchantJS Integration Steps

Following custom MerchantJS integration steps helps you implement search and merchandising features with full control over presentation and functionality. When you understand the complete integration process, you can deploy customized implementations more confidently, which supports faster time to value and better conversion outcomes through properly implemented search and merchandising capabilities.

Structured integration guidance enables successful custom implementations. This helps you avoid common pitfalls and deploy features correctly, supporting better product discovery and conversion performance through well-executed technical implementations that align with your specific platform and business requirements.

Overview

You can integrate Maropost Merchandising Cloud (formerly Findify) with any storefront in a variety of different ways:

- [**Full API Integration**](https://developers.findify.io/reference)
- [**Findify SDK**](https://developers.findify.io/reference#js-sdk-introduction)
- [**Merchant JS API**](https://developers.findify.io/docs/merchant-js-api)
- [**MerchantJS Integration**](https://developers.findify.io/docs/integrations-custom-steps#custom-merchantjs-integration)**, using our pre-built JS library:***please follow the guidelines below*

Custom MerchantJS Integration

Merchandising Cloud integration consists of a couple key components:

**Product feed pulling**: This is the mechanism with which we keep up to date with the products on your store. It will ensure all products, prices and availability shown in search results are accurate.

**Customer Feedback**: Collecting metrics about which products are viewed and ultimately purchased is important to improve the performance of Merchandising Cloud's search algorithm.

**Search**: Merchandising Cloud replaces whichever search you may have built in to your store. This is a simple addition to your store.

To integrate Merchandising Cloud into your shop you'll need to follow steps listed below:

1. Select a plan and create a Maropost Merchandising Cloud account
2. Configure a product feed
3. Setup the search page
4. Setup the feedback mechanisms: Add our tracking HTML tags
5. Add our Script Tag to the `<span class="cm-s-neo" style="box-sizing: border-box;"><head></span>` section

We're Here To Help

If you have any problems or are stuck at any step, don't hesitate to contact us at [support@maropost.com](mailto:support@maropost.com).

1. Create a Maropost Merchandising Cloud Account

If you haven't done so yet, you need to sign up for Merchandising Cloud's service by visiting our [Registration Page](https://dashboard.findify.io/auth/register).

Already Have an Account?

If you already have an account, you can access it via our [Dashboard](https://dashboard.findify.io/).

1. Go to our [Registration Page](https://dashboard.findify.io/auth/register)
2. Select *Javascript - Other platforms*
3. Enter your name, email and store URL. The store URL value should not contain *https://* or *http://* prefix, e.g. [**www.example.com**](http://www.example.com/) or **example.com** are both valid
4. You will receive an email to validate your account. Click the confirmation link and proceed to the next steps

## 1.1 Provide More Information About Your Shop[https://developers.findify.io/docs/integrations-custom-steps#11-provide-more-information-about-your-shop](https://developers.findify.io/docs/integrations-custom-steps#11-provide-more-information-about-your-shop)

In order to make the most of our search algorithm, we need to know a bit more about your store. You will be asked to fill all required information out during the onboarding and can always adjust your setting in the [Dashboard](https://dashboard.findify.io/).

1. Select the language

Select The Correct Language

Choosing the language of your store is important because it impacts the way search queries are analyzed and is a big factor in the performance of the search itself.

Our UI components will also be translated to the language you selected.

If you don't find the language you need, contact us at[support@maropost.com](mailto:support@maropost.com)

2. Choose the time zone that your shop is in. This is mainly for analytics to be calculated correctly.

3. Choose the currency of your store

️Multiple Currencies

we currently don't support multiple currencies on a single store, unless the conversion is done on the front end.

If you need multiple currencies, contact us at [support@maropost.com](mailto:support@maropost.com).

2. Configure a Product Feed

Merchandising Cloud needs to load all the product information from your store to index them and make them searchable. This happens initially during the onboarding as well as periodically, once a day.

The way it works is, our servers will request a product feed via HTTP or HTTPS from an endpoint you configure. This endpoint needs to be publicly accessible, or you need to explicitly grant Merchandising Cloud's servers access to it.

Feed Pulling Authentication

We also support Basic Authentication when requesting the product feed.

To enable this feature for your feed, please contact us directly at [support@maropost.com](mailto:support@maropost.com).

Findify will refresh the product at a set interval.

We support the following formats of the product feed. Click on the format best suited for you to learn more about it's required structure:

- [CSV](https://developers.findify.io/docs/feed-generation-manual-csv)
- [XML](https://developers.findify.io/docs/feed-generation-manual-xml)
- [JSON](https://developers.findify.io/docs/feed-generation-manual-json)

You will need to provide the URL and the format of the feed in the onboarding wizard or your Merchandising Cloud dashboard.

If there are any issues with the product feed format or if there is any missing product information, you will be notified via email, once the synchronization job has completed.

️Product Feed Issues

You will not be able to proceed further with the integration unless the product feed is processed successfully.

If your product feed is formatted correctly and contains all required information, but you still get errors from us, please contact us at[support@maropost.com](mailto:support@maropost.com)

3. Setup the Search Page

This is the most visible component of Merchandising Cloud. It's where your customers will be able to find products.

## Configure the url[https://developers.findify.io/docs/integrations-custom-steps#configure-the-url](https://developers.findify.io/docs/integrations-custom-steps#configure-the-url)

We recommend you create a new, empty page in your store to host the page, where detailed search results and interface will be shown.

You will need to configure the address of this page, it's URL, in your Merchandising Cloud dashboard. The search page URL is the address to which your customers will be redirected to view the search results.

Once you've created the search page and have it's URL, configure it in the onboarding flow, or share it with your integration contact at Merchandising Cloud.

Examples of search page URLs:

- */search*
- */pages/search*
- */pages/search/results*

You can also specify a blank page **"/"**, so that the search results will be rendered on the home page of your store in a modal view.

## Configure the Search Page[https://developers.findify.io/docs/integrations-custom-steps#configure-the-search-page](https://developers.findify.io/docs/integrations-custom-steps#configure-the-search-page)

There are a handful of HTML elements you will need to add in order to enable search:

- A container HTML element in which search results will be displayed
- Input HTML element for the autocomplete

### Search Result Container[https://developers.findify.io/docs/integrations-custom-steps#search-result-container](https://developers.findify.io/docs/integrations-custom-steps#search-result-container)

Search results will be rendered by Merchandising Cloud Javascript SDK in any HTML element that has `<span class="cm-s-neo" style="box-sizing: border-box;">data-findify-attr="findify-search-results"</span>` attribute.

Search Results Page

```plaintext
</code></pre><div class="cm-s-neo" style="box-sizing: border-box;display: inherit;"><span class="cm-tag cm-bracket" style="box-sizing: border-box;color: #9c3328;"><</span><span class="cm-tag" style="box-sizing: border-box;color: #9c3328;">div</span> <span class="cm-attribute" style="box-sizing: border-box;">data-findify-attr</span>=<span class="cm-string" style="box-sizing: border-box;color: #b35e14;">"findify-search-results"</span> <span class="cm-attribute" style="box-sizing: border-box;">data-findify</span>=<span class="cm-string" style="box-sizing: border-box;color: #b35e14;">"controlled-tabs"</span><span class="cm-tag cm-bracket" style="box-sizing: border-box;color: #9c3328;">></</span><span class="cm-tag" style="box-sizing: border-box;color: #9c3328;">div</span><span class="cm-tag cm-bracket" style="box-sizing: border-box;color: #9c3328;">></span></div><pre style="box-sizing: border-box;font-family: var(--md-code-font, SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace);font-size: var(--font-size);margin-bottom: 15px;margin-top: 0px;overflow-wrap: normal;color: var(--md-code-text, inherit);line-height: 1.45;overflow: hidden;padding: 0px;display: block;word-break: normal;"><code class="rdmd-code lang-html theme-light" style="box-sizing: border-box;font-family: var(--md-code-font, SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace);font-size: 13.5px;background: inherit;border-radius: 3px;color: var(--md-code-text);margin: 0px;padding: 1em;border-width: 0px;white-space: pre;word-break: normal;line-height: inherit;overflow: auto;overflow-wrap: normal;max-height: 90vh;display: block;">
```

> **Note:** The search results will only be displayed, if the URL of the page containing the element with the `<span class="cm-s-neo" style="box-sizing: border-box;">findify-search-results</span>` attribute matches the configured search page URL.

### Autocomplete Input Field[https://developers.findify.io/docs/integrations-custom-steps#autocomplete-input-field](https://developers.findify.io/docs/integrations-custom-steps#autocomplete-input-field)

Autocomplete functionality can be added to any input field. You simply need to add the `<span class="cm-s-neo" style="box-sizing: border-box;">data-findify-attr="findify-autocomplete-input"</span>` attribute to it.

You can add the attribute to multiple input elements on a single page.

Search Bar Input

```plaintext
</code></pre><div class="cm-s-neo" style="box-sizing: border-box;display: inherit;"><span class="cm-tag cm-bracket" style="box-sizing: border-box;color: #9c3328;"><</span><span class="cm-tag" style="box-sizing: border-box;color: #9c3328;">input</span> <span class="cm-attribute" style="box-sizing: border-box;">data-findify-attr</span>=<span class="cm-string" style="box-sizing: border-box;color: #b35e14;">"findify-autocomplete-input"</span><span class="cm-tag cm-bracket" style="box-sizing: border-box;color: #9c3328;">/></span></div><pre style="box-sizing: border-box;font-family: var(--md-code-font, SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace);font-size: var(--font-size);margin-bottom: 15px;margin-top: 0px;overflow-wrap: normal;color: var(--md-code-text, inherit);line-height: 1.45;overflow: hidden;padding: 0px;display: block;word-break: normal;"><code class="rdmd-code lang-html theme-light" style="box-sizing: border-box;font-family: var(--md-code-font, SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace);font-size: 13.5px;background: inherit;border-radius: 3px;color: var(--md-code-text);margin: 0px;padding: 1em;border-width: 0px;white-space: pre;word-break: normal;line-height: inherit;overflow: auto;overflow-wrap: normal;max-height: 90vh;display: block;">
```

4. Feedback Integration

Merchandising Cloud tracks customer activity which is in turn used by our Machine Learning algorithms to improve the search performance.

This is done in a way that our javascript SDK looks for certain HTML tags on the pages and reads the information out of them. Below, we describe the tags you need to add and where to add them.

## 4.1. Product Page[https://developers.findify.io/docs/integrations-custom-steps#41-product-page](https://developers.findify.io/docs/integrations-custom-steps#41-product-page)

It is important to know which products a customer views. This allows us to rank products by popularity, giving popular products a higher score and thus a more prominent placement in search results.

Add this tag to all product pages. We recommend placing it in your product page template.

```plaintext
</code></pre><div class="cm-s-neo" style="box-sizing: border-box;display: inherit;"><span class="cm-tag cm-bracket" style="box-sizing: border-box;color: #9c3328;"><</span><span class="cm-tag" style="box-sizing: border-box;color: #9c3328;">div</span> <span class="cm-attribute" style="box-sizing: border-box;">data-findify-event</span>=<span class="cm-string" style="box-sizing: border-box;color: #b35e14;">"view-page"</span> <span class="cm-attribute" style="box-sizing: border-box;">data-findify-item-id</span>=<span class="cm-string" style="box-sizing: border-box;color: #b35e14;">"PRODUCT_ID"</span> <span class="cm-attribute" style="box-sizing: border-box;">data-findify-variant-item-id</span>=<span class="cm-string" style="box-sizing: border-box;color: #b35e14;">"PRODUCT_VARIANT_ID"</span><span class="cm-tag cm-bracket" style="box-sizing: border-box;color: #9c3328;">></</span><span class="cm-tag" style="box-sizing: border-box;color: #9c3328;">div</span><span class="cm-tag cm-bracket" style="box-sizing: border-box;color: #9c3328;">></span></div><pre style="box-sizing: border-box;font-family: var(--md-code-font, SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace);font-size: var(--font-size);margin-bottom: 15px;margin-top: 0px;overflow-wrap: normal;color: var(--md-code-text, inherit);line-height: 1.45;overflow: hidden;padding: 0px;display: block;word-break: normal;"><code class="rdmd-code lang-html theme-light" style="box-sizing: border-box;font-family: var(--md-code-font, SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace);font-size: 13.5px;background: inherit;border-radius: 3px;color: var(--md-code-text);margin: 0px;padding: 1em;border-width: 0px;white-space: pre;word-break: normal;line-height: inherit;overflow: auto;overflow-wrap: normal;max-height: 90vh;display: block;">
```

**Schema**:

- **data-findify-item-id** must contain the ID of the product. The ID of the product must be the same as the value of **item_group_id** in the product feed.
- **data-findify-variant-item-id** could contain the variant ID of the product, in case you have multiple variants of the same product. This tag is optional.

## 4.2. Cart Page[https://developers.findify.io/docs/integrations-custom-steps#42-cart-page](https://developers.findify.io/docs/integrations-custom-steps#42-cart-page)

Knowing which products customers add to cart is an important signal for our Machine Learning algorithm. It helps Merchandising Cloud make better recommendations for the customers of your store, ultimately increasing your conversion rate.

**Frequently Purchased Together**

The 'Frequently purchased together' recommendation will not work if this tag is not present.

We recommend you place this tag in all templates that display customer's cart items.

Even if the cart is empty, this tag should still be included.

```plaintext
<div data-findify-event="update-cart"></spa
```