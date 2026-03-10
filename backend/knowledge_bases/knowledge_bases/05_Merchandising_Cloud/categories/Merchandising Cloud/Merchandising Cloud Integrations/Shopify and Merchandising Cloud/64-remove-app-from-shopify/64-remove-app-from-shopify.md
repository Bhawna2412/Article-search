---
title: "Remove App from Shopify"
articleID: 64
category: "Merchandising Cloud Integrations > Shopify and Merchandising Cloud"
knowledgeBase: "Merchandising Cloud"
---

# Remove App from Shopify

Understanding how to properly remove apps from Shopify helps you manage your store's integrations and maintain clean platform configurations. When you need to uninstall search or merchandising apps, following proper removal procedures helps ensure complete cleanup and prevents residual code or configurations from affecting store performance or customer experience.

Proper app removal procedures enable clean platform management and smooth transitions. This helps you maintain optimal store performance and prepare for alternative implementations when needed, supporting better long-term platform maintenance and ensuring that removed integrations don't leave behind code that could impact future store operations or customer experiences.

Installation of our [Public Shopify Application](https://apps.shopify.com/findify-search) automatically injects certain code snippets into your Shopify theme in order to make the installation process fully automatic and make our solution work fast and learn from the get-go.

Unfortunately, when you uninstall the app we lose programmatic access to your store, thus we cannot remove the code snippets that we injected automatically.

Although the code snippets that we add do not harm your store even after the uninstallation process, you might want to remove them anyway, the following guide will walk you through this process.

Steps:

## Step 1:[https://developers.findify.io/docs/remove-app#step-1](https://developers.findify.io/docs/remove-app#step-1)

Go to `<span class="cm-s-neo" style="box-sizing: border-box;">Online Store</span>` in your Shopify Admin Panel

## Step 2:

On your `<span class="cm-s-neo" style="box-sizing: border-box;">Live theme</span>` select `<span class="cm-s-neo" style="box-sizing: border-box;">Actions</span>` -> `<span class="cm-s-neo" style="box-sizing: border-box;">Edit Code</span>`

![4170f74-Remove_App.png](https://us.v-cdn.net/6038474/uploads/FGXW1XQAMR74/4170f74-remove-app.png)

## Step 3:[https://developers.findify.io/docs/remove-app#step-3](https://developers.findify.io/docs/remove-app#step-3)

In the `<span class="cm-s-neo" style="box-sizing: border-box;">theme.liquid</span>` file search for `<span class="cm-s-neo" style="box-sizing: border-box;">findify</span>`

![0a3cc9e-Remove_Code.png](https://us.v-cdn.net/6038474/uploads/NT4ZO3KOF1FG/0a3cc9e-remove-code.png)

## Step 4:[https://developers.findify.io/docs/remove-app#step-4](https://developers.findify.io/docs/remove-app#step-4)

Remove the code that contains the `<span class="cm-s-neo" style="box-sizing: border-box;"><script></span>` snippet, which is used to load our JS library

![428ac14-Script.png](https://us.v-cdn.net/6038474/uploads/8UTEN1SCZB7N/428ac14-script.png)

## Step 5:[https://developers.findify.io/docs/remove-app#step-5](https://developers.findify.io/docs/remove-app#step-5)

Remove the `<span class="cm-s-neo" style="box-sizing: border-box;">{% include &#39;findify-tagging</span>` %}` which injects our tracking tags

![5315219-Tagging.png](https://us.v-cdn.net/6038474/uploads/TJJQSGY85YNN/5315219-tagging.png)

## Step 6:[https://developers.findify.io/docs/remove-app#step-6](https://developers.findify.io/docs/remove-app#step-6)

Delete the `<span class="cm-s-neo" style="box-sizing: border-box;">findify-tagging.liquid</span>` file from `<span class="cm-s-neo" style="box-sizing: border-box;">Snippets</span>` section

![7d652bd-findify-tagging.liquid.png](https://us.v-cdn.net/6038474/uploads/UT60LBESEC7O/7d652bd-findify-tagging-liquid.png)
For any further questions reach out to us at[support@maropost.com](mailto:support@maropost.com)