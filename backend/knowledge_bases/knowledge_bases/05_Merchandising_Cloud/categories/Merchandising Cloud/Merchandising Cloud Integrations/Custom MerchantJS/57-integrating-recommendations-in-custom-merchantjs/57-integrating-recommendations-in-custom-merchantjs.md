---
title: "Integrating Recommendations in Custom MerchantJS"
articleID: 57
category: "Merchandising Cloud Integrations > Custom MerchantJS"
knowledgeBase: "Merchandising Cloud"
---

# Integrating Recommendations in Custom MerchantJS

Implementing recommendations using custom MerchantJS gives you precise control over recommendation presentation and behavior. When you customize recommendation implementations, you can align product suggestions perfectly with your brand experience and customer journey, which tends to enhance recommendation effectiveness and improve average order value through more contextually appropriate product suggestions.

Custom MerchantJS recommendation integration enables sophisticated merchandising strategies. This helps you create unique recommendation experiences that differentiate your brand and optimize for your specific conversion goals, supporting better cross-sell and upsell performance through precisely tailored product suggestion implementations.

## Integrating Recommendations into your store

There are a view simple steps that you need to do to integrate the widget

1. 
  You need to choose which widget you want to show and where.

We offer home page, product page, cart page and category page widgets, but you can mix and match them and put them wherever you want on the website.
2. 
  Enable the widget in the Merchant Dashboard.

As soon as you enable the widget it will become active and will start work and collecting data.
3. 
  Add the widget code to the desired location on your website.

The widget code will look like the following code

```xml
<div id="home-findify-rec-1">
</div>
```

You should put this code into your store theme where you want it to appear.

That's it, now you are using Maropost Merchandising Cloud Recommendations on your store, which will help you increase the customer base and gain more revenue!

## Recommendation Filtering

Each filter is a rule that is applied to an array of products. Each rule has 5 `actions` available: pin, exclude, include, push to top, push to bottom. For each action, you define product attribute values that will be used to identify products. Almost all product attributes are available (there are some exceptions like `description`) as well as custom fields.

If there are multiple filters defined, they are executed in the following order sequentially:

- 
  pin
- 
  exclude
- 
  push to the bottom
- 
  push to the top
- 
  include

After the initial filtering, the products are bucketed into a set of groups for each action in the following order:

1. 
  pinned
2. 
  pushed to top
3. 
  included
4. 
  pushed to bottom

Inside of buckets 2-4, the products are sorted according to their search relevancy. Pinned products are sorted according to the pinned order, ignoring their relevancy.

This means that if you define both `exclude` and `include` actions, from the resulting array of products, products that fall under exclude action will be removed first and then the ones that fall under include action will be left.

Here are examples of rules that can be applied:

- 
  Include products only from certain brand
- 
  Include products only from certain category
- 
  Exclude products of certain brand
- 
  Exclude products by ID
- 
  Push to top products of certain brand and with quantity > 10 to top

## 'Current value' Integration

When using the `current value` option, a specific integration needs to be done on the frontend in order to capture the current value of a custom field.

This is done by applying extra tags on the recommendation container, the generic structure looks like this:

```xml
<div data-findify-filter="FIELD_NAME" data-findify-filter-value="FIELD_VALUE" />
```

For the `FIELD_NAME` you need to put the name of the field to filer, e.g. `brand`, `category`, `custom_fields.width`. The value inside `data-findify-filter-value` tag contains a JSON object in the form of `VALUE`.

The full example will look similar to this one:

```xml
<div data-findify-filter="brand" data-findify-filter-value="Adidas" />
```

If you want to add multiple values for brands, you would need to wrap it up with stringified json:

```applescript
<div data-findify-filter="brand" data-findify-filter-value=[{"value":"addidas"},{value:"nike"},...]>
</div>
```

Let's say that you have a custom field called 'Gender'. You can setup a tag using this custom field as well (make sure that the name of the filter is the same as it is stored internally in Merchandising Cloud):

```xml
<div data-findify-filter="custom_fields.Gender" data-findify-filter-value="Men" />
```

For the `category` if the current item is part of a nested category, you need to pass multiple items inside the `value` array:

```xml
<div data-findify-filter="category" data-findify-filter-value="CategoryParent >
CategoryChild" />
```