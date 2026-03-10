---
title: "Integrating Smart Collections in Shopify"
articleID: 516
category: "Merchandising Cloud Integrations > Shopify and Merchandising Cloud"
knowledgeBase: "Merchandising Cloud"
---

# Integrating Smart Collections in Shopify

Integrating smart collections in Shopify enables dynamic product groupings that automatically update based on product attributes and rules. When collections adapt automatically to inventory changes, you help improve merchandising efficiency and ensure customers always see current, relevant product selections, which tends to enhance conversion rates through more accurate and up-to-date product categorization.

Automated collection management reduces manual merchandising effort while maintaining collection accuracy. This helps you scale merchandising operations more effectively and ensures consistent product discovery experiences, supporting better conversion performance through collections that automatically reflect your current catalog and merchandising strategies.

## To integrate Smart Collections follow these steps:[https://developers.findify.io/docs/integration-smart-collection#to-integrate-findify-smart-collection-follow-these-steps](https://developers.findify.io/docs/integration-smart-collection#to-integrate-findify-smart-collection-follow-these-steps)

1. Add a div tag
2. Add extra content to Smart Collections
3. Create a fallback for Smart Collections

### 1. Add a div tag[https://developers.findify.io/docs/integration-smart-collection#1-add-a-div-tag](https://developers.findify.io/docs/integration-smart-collection#1-add-a-div-tag)

All you need to do is add one div tag to anywhere you'd like to include your Smart Collection[s]

```plaintext
<div data-findify="search"></div>
```

```plaintext
, for example<div class="banner">     <a href="#"><img src="mybanner.png"/></a></div><div data-findify="search"></div><div class="text">    <p>Some extra text</p></div><div id="home-findify-rec-1"></div></code></pre></div></div><h3 class="heading heading-2 header-scroll" style="box-sizing: border-box;margin-bottom: var(--markdown-title-marginBottom, 1rem);margin-top: var(--markdown-title-marginTop, 1em);color: rgb(56, 66, 72);font-family: system-ui, -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, Oxygen, Ubuntu, Cantarell, &#39;Fira Sans&#39;, &#39;Droid Sans&#39;, &#39;Helvetica Neue&#39;, sans-serif;font-size: var(--markdown-title-size, 1.5em);font-weight: var(--markdown-title-weight, 600);line-height: 1.25;align-items: center;display: flex;justify-content: flex-start;white-space: normal;background-color: rgb(255, 255, 255);">2. Add extra content to Findify&#39;s Smart Collections<a class="heading-anchor-icon fa fa-anchor" style="text-decoration-line: none;color: inherit;box-sizing: border-box;font-kerning: auto;font-optical-sizing: auto;font-feature-settings: normal;font-variation-settings: normal;font-stretch: normal;line-height: 1;font-family: FontAwesome;text-rendering: auto;transition: all 0.2s ease 0s;margin-right: -0.8rem;order: -1;right: 800px;transform: translateX(-100%);opacity: 0;display: inline;font-size: 0.8rem;padding: 0.8rem 0.2rem 0.8rem 0px;top: unset;" href="https://developers.findify.io/docs/integration-smart-collection#2-add-extra-content-to-findifys-smart-collections" target="_blank"></a></h3><p style="box-sizing: border-box;margin-bottom: 15px;margin-top: 0px;color: rgb(56, 66, 72);font-family: system-ui, -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, Oxygen, Ubuntu, Cantarell, &#39;Fira Sans&#39;, &#39;Droid Sans&#39;, &#39;Helvetica Neue&#39;, sans-serif;font-size: 15px;white-space: normal;background-color: rgb(255, 255, 255);">The Findify Smart Collection results can be easily decorated with any content from your store (like custom banners, reviews, recommendations. etc).<br style="box-sizing: border-box;">All you need to do is put the content before and/or after the Findify Smart Collection <code class="rdmd-code lang- theme-light" style="box-sizing: border-box;font-family: var(--md-code-font, SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace);font-size: 12.75px;background-color: var(--md-code-background, #f6f8fa);border-radius: 3px;color: var(--md-code-text);margin: 0px;padding: 0.2em 0.4em;"><span class="cm-s-neo" style="box-sizing: border-box;">div</span>
```

### 3. Create a fallback for Smart Collections[https://developers.findify.io/docs/integration-smart-collection#3-create-a-fallback-for-findifys-smart-collections](https://developers.findify.io/docs/integration-smart-collection#3-create-a-fallback-for-findifys-smart-collections)

**Please note: if you do not add a fallback, nothing will be displayed on the page in case our servers go down.**

In the unlikely event that our servers are not responding, you can add a fallback to display custom markup instead of Smart Collections.

To do this, you need to add a `<span class="cm-s-neo" style="box-sizing: border-box;">div</span>` to the page with the following `<span class="cm-s-neo" style="box-sizing: border-box;">class</span>` and `<span class="cm-s-neo" style="box-sizing: border-box;">style</span>`, which should reside inside of the `<span class="cm-s-neo" style="box-sizing: border-box;">data-findify="search"</span>` `<span class="cm-s-neo" style="box-sizing: border-box;">div</span>`

```plaintext
<div data-findify="search">  <div class="findify-fallback" style="display:none;">    ..... default collection code goes here....  </div></div>
```

Anything that you will put inside the `<span class="cm-s-neo" style="box-sizing: border-box;">div</span>` will be rendered as a fallback.

### 4. Shopify Integration[https://developers.findify.io/docs/integration-smart-collection#4-shopify-integration](https://developers.findify.io/docs/integration-smart-collection#4-shopify-integration)

As you are a Shopify customer, you should put the Smart Collection HTML `<span class="cm-s-neo" style="box-sizing: border-box;">div</span>` code into your `<span class="cm-s-neo" style="box-sizing: border-box;">collection.liquid</span>` template.

This way you can use liquid template variables to easily extend the collection page's content.

## Replacing all your Shopify collections with Merchandising Cloud Smart Collections[https://developers.findify.io/docs/integration-smart-collection#replacing-all-your-shopify-collections-with-findify-smart-collections](https://developers.findify.io/docs/integration-smart-collection#replacing-all-your-shopify-collections-with-findify-smart-collections)

**Don't forget to include the current collection code in the fallback div**

- Put this code in your `<span class="cm-s-neo" style="box-sizing: border-box;">collection.liquid</span>` template file (or another collection template file)

```plaintext
<style>.findify-component-spinner,.findify-component-spinner:after{border-radius:50%;width:60px;height:60px}.findify-component-spinner{margin:60px auto 0!important;position:relative;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:findify-component-spinner-animation .7s infinite cubic-bezier(.67,.35,.7,.8);animation:findify-component-spinner-animation .7s infinite cubic-bezier(.67,.35,.7,.8);-ms-transform-origin:50% 50%;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;border-top:3px solid #eaeaea;border-right:3px solid #eaeaea;border-bottom:3px solid #eaeaea;border-left:3px solid #c6c6c6}@-webkit-keyframes findify-component-spinner-animation{0%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}100%{-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes findify-component-spinner-animation{0%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}100%{-webkit-transform:rotate(450deg);transform:rotate(450deg)}}</style><div data-findify="search" style="min-height: 400px;">  <div class="findify-component-spinner"></div>  <div class="findify-fallback" style="display:none;">    ..... default collection code goes here....  </div></div>
```