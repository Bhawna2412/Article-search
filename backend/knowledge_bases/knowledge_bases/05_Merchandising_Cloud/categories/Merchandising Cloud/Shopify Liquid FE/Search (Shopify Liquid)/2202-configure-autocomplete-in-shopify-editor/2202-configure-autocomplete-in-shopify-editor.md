---
title: "Configure Autocomplete in Shopify Editor"
articleID: 2202
category: "Shopify Liquid FE > Search (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Configure Autocomplete in Shopify Editor

You can configure autocomplete search functionality directly within the Shopify editor, customizing how search suggestions appear and behave without editing code. This visual configuration approach makes it easy to optimize the autocomplete experience to match your merchandising priorities and customer search patterns.

Configuring autocomplete through the Shopify editor enables you to adjust suggestion types, layouts, and product displays to create an optimized search experience. By using visual tools to control which content appears in autocomplete dropdowns, you can help customers find products faster, which tends to improve search engagement and can lead to higher conversion rates from search interactions.

This guide explains how to configure and customize the **Autocomplete** feature using Shopify's editor with our Liquid integration. It covers the following:

1. 
2. 
3. 

## **1. Autocomplete Templates**

We provide two main templates for Autocomplete:

- 
- 

You can configure the templates in the **Shopify Editor** as shown below.

### Selecting a Template

1. Go to the **Autocomplete Settings** in your Shopify Editor in app embeds section.
  ![d630c7656058a57b29eef70625828b9fadf8a19ccf08cd65bb4a37d4b75be368-image_23.png](https://us.v-cdn.net/6038474/uploads/LL3R2PETWCCP/d630c7656058a57b29eef70625828b9fadf8a19ccf08cd65bb4a37d4b75be368-image-23.png)
2. Choose your preferred template: **Default** or **Horizontal**.
  ![e39fb0e0ee91822a7c38c4b178328e91719b3498af583684e3539f32d08f42b7-image_24.png](https://us.v-cdn.net/6038474/uploads/LRIF0LU0QHXP/e39fb0e0ee91822a7c38c4b178328e91719b3498af583684e3539f32d08f42b7-image-24.png)

### **Template 1: Default (Vertical)**

### Without Content:

Displays trending searches or other dynamic results in a vertical stack.

Example without content:

![fe980ad9e9d7f3da7fac8a51c9bc725cf25be8c2e5e3194ff3c250f234c9a16e-SCR-20241002-nuhb.png](https://us.v-cdn.net/6038474/uploads/AN3LGWBP8247/fe980ad9e9d7f3da7fac8a51c9bc725cf25be8c2e5e3194ff3c250f234c9a16e-scr-20241002-nuhb.png)

### With Content:

Content widgets can be added below trending searches. The placement of widgets depends on the source:

- 
- 

Example with content:

![6bc6dfcf157cfeccac35e199c3b5e6bf2c86657644b0d1fb8a4fda833bb1bce5-jhgjgj.png](https://us.v-cdn.net/6038474/uploads/6N38K11EY6HK/6bc6dfcf157cfeccac35e199c3b5e6bf2c86657644b0d1fb8a4fda833bb1bce5-jhgjgj.png)

### **Template 2: Horizontal**

### Without Content:

Displays trending searches or other dynamic results in a horizontal layout.

Example without content:

![0934a7748874d96d718a37da28d3f141afd727fec19631eee332ed1262e8a642-horizontal.png](https://us.v-cdn.net/6038474/uploads/CT62W6CKI2RL/0934a7748874d96d718a37da28d3f141afd727fec19631eee332ed1262e8a642-horizontal.png)

### With Content:

Content widget placement depends on the source:

- 
- 

Example with content:

![b4f016d7fe94bd76cc540495cc7f3347966c33765f94f9ea6eb0e3f32676e130-content_base.png](https://us.v-cdn.net/6038474/uploads/JOCX2LXY5DIK/b4f016d7fe94bd76cc540495cc7f3347966c33765f94f9ea6eb0e3f32676e130-content-base.png)

## **2. Adding Content to Autocomplete**

Content widgets can be added and customized in the **Content Section** of the settings in the Shopify Editor. Use this section to manage the content displayed in your Autocomplete.

![5fc92e1b098a41b28444b75371f3b15aff10a40412e89d5bb8c71f4a3a7a4f53-image_25.png](https://us.v-cdn.net/6038474/uploads/N351SXVC4S9Q/5fc92e1b098a41b28444b75371f3b15aff10a40412e89d5bb8c71f4a3a7a4f53-image-25.png)

> **Note:** **Note:** For both templates:  Content placement varies based on the source.  Only up to two content widgets can be added directly via the Shopify Editor.

## **3. Adding More Than Two Content Widgets**

To include more than two content widgets, you need to configure them manually in the `findify-head-injector.liquid` file.

### Steps:

1. 
2. 

```yaml
extraContents:  {    CONTENT_ID_3: {      title: TITLE_3,      limit: LIMIT_3,      showImage: true/false    },    CONTENT_ID_4: {      title: TITLE_4,      limit: LIMIT_4,      showImage: true/false    } }
```

**Example:**

```yaml
extraContents:  {    'shopify-blog_1685': {      title: 'Blogs',      limit: 1,      showImage: false    }  }
```

![0dffc84ba14c923c59e23b7a2d7f67bbc6ea2d073f3c0207b5db4c0dd6e8fc6f-image_26.png](https://us.v-cdn.net/6038474/uploads/WQHAHWPKXOY1/0dffc84ba14c923c59e23b7a2d7f67bbc6ea2d073f3c0207b5db4c0dd6e8fc6f-image-26.png)

### Placement:

1. 
  {% render 'findify-autocomplete-content-block', contents_param: contents_param, content: contents[INDEX] %}
  - 
  - 

**Example Placement Code:**

![10eb25c518e2809de90351bdd01ddd2598fdb4edaa8ce88fd6123346729eba5e-image_27.png](https://us.v-cdn.net/6038474/uploads/HIX63X8EN909/10eb25c518e2809de90351bdd01ddd2598fdb4edaa8ce88fd6123346729eba5e-image-27.png)
For further assistance, please don’t hesitate to get in touch with us by emailing [support@maropost.com](mailto:support@maropost.com)