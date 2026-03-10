---
title: "Multimarket Translations"
articleID: 2039
category: "Merchandising Cloud Dashboard > Multimarket"
knowledgeBase: "Merchandising Cloud"
---

# Multimarket Translations

You can configure translations for search interface elements and merchandising content across different language markets, ensuring customers experience search and filtering in their native language.

This localization capability helps provide culturally appropriate shopping experiences that improve usability and conversion for international customers, while maintaining AI-powered personalization that adapts to regional shopping behaviors and preferences.

Implementing multimarket translations helps deliver professional localized experiences without duplicating configuration effort. You can manage translations for UI elements, facet labels, messaging, and other interface components centrally-enabling consistent brand voice across markets while respecting language differences that influence customer trust and purchase decisions, supporting global expansion with localized experiences that maintain the personalization driving conversion.

![8beed66ba13f87d43ba057a715ed32a6b633be2218c396d8eddff1e09c5422f5-picture-2.png](https://us.v-cdn.net/6038474/uploads/XLKJQHJ01DB7/8beed66ba13f87d43ba057a715ed32a6b633be2218c396d8eddff1e09c5422f5-picture-2.png)

## How Do I Manage Translations?

To support multimarket operations, we provide four main types of translations:

1. **Static Translations**
2. **Dynamic Translations**
3. **Product Data Translations**
4. **Collection Data Translations**

### **1. Static Translations**

Static translations are rendered through our Liquid framework. They are managed within Shopify's built-in functionality.

![8e6bf05a84273fa0d819a2a2e0891c8d1a4a26f8ea24696c3318d6575e49d7d0-image_21_1_1.png](https://us.v-cdn.net/6038474/uploads/Z8Q7JIBFXDT2/8e6bf05a84273fa0d819a2a2e0891c8d1a4a26f8ea24696c3318d6575e49d7d0-image-21-1-1.png)

- **Example Uses:** Text in headers, buttons, or labels.
- **Management:** Shopify's translation interface.

![5f75778097930c59e54a1bcbb9e14deca82883dc662db70f340b4753b8eac92a-Screenshot_2024-11-19_225355.png](https://us.v-cdn.net/6038474/uploads/IN4YJU9BRKYA/5f75778097930c59e54a1bcbb9e14deca82883dc662db70f340b4753b8eac92a-screenshot-2024-11-19-225355.png)

> **Note:** *This function is also useful for single-market clients needing to alter default language settings. Consider documenting this feature as a standalone resource in Liquid.*

### **2. Dynamic Translations**

Dynamic translations cover items that may frequently change or vary by customer interaction, including:

- Filter names
- Sorting options
- Promo card content

![176786876901ff64f74846bf3f4d86db840e981f65b50b4cc231d8db67ac7ad7-Screenshot_2024-11-13_151623.png](https://us.v-cdn.net/6038474/uploads/TB6IO9E1II35/176786876901ff64f74846bf3f4d86db840e981f65b50b4cc231d8db67ac7ad7-screenshot-2024-11-13-151623.png)

- **Management:** Handled directly in our interface.

![75d19317ec461dc9d227e12576cde1c52fa684c24e78af933c7fc05c3a5a4ea9-Screenshot_2024-11-19_225154.png](https://us.v-cdn.net/6038474/uploads/7L1T0Y8JBDQB/75d19317ec461dc9d227e12576cde1c52fa684c24e78af933c7fc05c3a5a4ea9-screenshot-2024-11-19-225154.png)

### **3. Product Data Translations**

Product data translations are managed through Shopify's Localization App, syncing translated data into Merchandising Cloud on a scheduled or on-demand basis.

- **Management:** Shopify Localization App.

![a55a76abf646b9c5c0663b0d235d3387181f43c76c050eeaccfd8f5af266814b-Screenshot_2024-11-19_224936.png](https://us.v-cdn.net/6038474/uploads/4Z634B9RFEM8/a55a76abf646b9c5c0663b0d235d3387181f43c76c050eeaccfd8f5af266814b-screenshot-2024-11-19-224936.png)

- **Syncing:** Every 24 hours by default, with on-demand updates available. Once Shopify's webhooks support translations, this process will integrate seamlessly.

> **Note:** *Shopify's product webhooks currently lack translation support, so updates follow a scheduled pattern.*

### **4. Collection Data Translations**

Collection translations operate similarly to product translations and are also managed via Shopify's Localization App, syncing to Merchandising Cloud under the same schedule and on-demand options.

- **Management:** Shopify Localization App.

![d3c47fab346739f5cac7c352247b66b4eb07511f77d9b88a4b1495a70e0e7261-Screenshot_2024-11-19_224745.png](https://us.v-cdn.net/6038474/uploads/D2DWTUPCAF2B/d3c47fab346739f5cac7c352247b66b4eb07511f77d9b88a4b1495a70e0e7261-screenshot-2024-11-19-224745.png)

- **Syncing:** 24-hour default sync with on-demand updates.

> **Note:** *Shopify's collection webhooks also lack translation support but will be updated once available.*

> **Note:** *Translated Collection URLs are optional - merchants can blend translated and untranslated collections. In Merchandising Cloud, collections are treated as a unified entity, allowing merchandising actions by either aggregate or individual markets.*

## Adding Translations for Custom Features

To manage translations for custom theme components within Merchandising Cloud, you can follow these steps:

### 1. Set Up the Findify-Related Locale Configuration

1.   - Default locale files are named based on the default language of your store (e.g., `locales/en.default.json`). Refer to [Shopify's documentation](https://shopify.dev/docs/storefronts/themes/architecture/locales/storefront-locale-files#the-default-locale-file) for details.

  In the theme code, locate the **default locale JSON configuration** file.
2. Open the file and navigate to the **Findify configuration section**.
3. Example: To add a "Sale" label, use the key `custom.sale`:

![ed36a38a01d76c876611fe5b14472017bbf5d65ac55b3eb763ddfb34a66fa561-znYJ3m.png](https://us.v-cdn.net/6038474/uploads/1HHTWV1JFWWI/ed36a38a01d76c876611fe5b14472017bbf5d65ac55b3eb763ddfb34a66fa561-znyj3m.png)

### 2. Use the Locale Configuration in Theme Code

To reference your custom locale configuration in theme code, use the following format:

```plaintext
{{ 'findify.custom.sale' | t }}

```

- {{ 'findify.some_custom_key.some_custom_subkey' | t }}

### 3. Add or Update Translations

To add translations for other languages:

1. Open the theme in the Shopify admin panel.
2. Select **Edit Default Theme Content**.  - Example Screenshot
    ![10a9131910ca2b8368ea5868d0e61a92ba71e0990a795875c0a26a5ee622ff4c-fOsigC.png](https://us.v-cdn.net/6038474/uploads/0W9MT5LR90PR/10a9131910ca2b8368ea5868d0e61a92ba71e0990a795875c0a26a5ee622ff4c-fosigc.png)
3. Click **Localize**.  - Example screenshot:
    ![f09e2d4909ddfa09045b0e105c087515be74fa0b59a2cb969f91bc6e911d7edd-ipCB9Y.png](https://us.v-cdn.net/6038474/uploads/J1SB7EE6CTDZ/f09e2d4909ddfa09045b0e105c087515be74fa0b59a2cb969f91bc6e911d7edd-ipcb9y.png)
4. Use the **Translate & Adapt app** to add or update translations for your custom keys.  - Example screenshot (adding a translation for `custom.sale`):

![1ad0e63c7bb2473f6d9f22c25547cd52b092023184a872e19ef111792f90d5d3-wWDToC.png](https://us.v-cdn.net/6038474/uploads/IQMEIYTA8X1D/1ad0e63c7bb2473f6d9f22c25547cd52b092023184a872e19ef111792f90d5d3-wwdtoc.png)

### 4. Verify Translations

After adding translations, verify that they appear correctly across all markets.

- **English market example:**
  ![ee2bfb11dd4c07a0480523eefdef4cd9937185275e91cabc075834401c18c873-ugaABU.png](https://us.v-cdn.net/6038474/uploads/X3TESKE3NCPW/ee2bfb11dd4c07a0480523eefdef4cd9937185275e91cabc075834401c18c873-ugaabu.png)

- **French market example:**

This documentation should provide an accessible overview of translation types and the processes for maintaining them within a multimarket environment. For further queries, feel free to email [support@maropost.com](mailto:support@maropost.com).
  ![40ae662dc6c28fc31006c82de03a636f4f3325e7667c9a368d10dfb7feac8809-tLCB97.png](https://us.v-cdn.net/6038474/uploads/O7TDX20X0XCX/40ae662dc6c28fc31006c82de03a636f4f3325e7667c9a368d10dfb7feac8809-tlcb97.png)