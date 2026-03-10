---
title: "What is Shopify Liquid?"
articleID: 2223
category: "Shopify Liquid FE > What is Shopify Liquid_"
knowledgeBase: "Merchandising Cloud"
---

# What is Shopify Liquid?

Understanding Shopify Liquid enables you to customize your ecommerce search and merchandising experience to match your brand's specific requirements. This templating language helps you control how product information, search results, and recommendations appear to customers, which can improve shopping experiences and enhance conversion rates through better product presentation.

Liquid provides the flexibility to create personalized shopping experiences by controlling product data display, search result formatting, and dynamic content throughout your storefront. This enables you to optimize how customers discover products and interact with your merchandising features while maintaining brand consistency across all touchpoints.

Shopify Liquid is a versatile and user-friendly templating language that plays a crucial role in customizing the appearance and functionality of online stores built on the Shopify platform. As a powerful tool, Liquid empowers developers and designers to create dynamic, personalized, and visually stunning ecommerce experiences for customers.

## Key Features of Shopify Liquid

### 1. Variables

Variables in Shopify Liquid are used to store and retrieve data, such as product details, customer information, and cart items. They enable developers to access and manipulate data within Liquid templates easily. Variables are denoted by double curly braces: {{ variable_name }}.

Liquid

```plaintext
{{ product.title }}          # Output: Product Name{{ customer.first_name }}    # Output: John
```

### 2. Tags

Tags are the control structures in Liquid that allow you to implement logic, create conditions, and perform actions based on specific conditions. The commonly used tags include if, unless, for, and case, among others.

Liquid

```plaintext
{% if product.available %}  <p>This product is available.</p>{% else %}  <p>This product is out of stock.</p>{% endif %}
```

### 3. Filters

Filters enable developers to modify the output of variables in various ways, such as formatting dates, converting text case, or applying currency symbols. Filters are used with variables, and they are separated by a pipe symbol |.

Liquid

```plaintext
{{ product.price | money }}    # Output: $29.99{{ "hello" | capitalize }}     # Output: Hello
```

### 4. Objects and Dot Notation

In Shopify Liquid, objects are used to represent data entities, such as products and customers. Dot notation allows you to access properties or attributes of objects conveniently.

Liquid

```plaintext
{{ product.title }}            # Output: Product Name{{ customer.first_name }}      # Output: John
```

### 5. Comments

Comments in Liquid are essential for making the code more readable and understandable. They have no impact on the output and are ignored during rendering.

Liquid

```plaintext
{% comment %}  This is a comment. It won't be displayed in the output.{% endcomment %}
```