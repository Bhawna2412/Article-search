---
title: "Debugging and Best Practices"
articleID: 2225
category: "Shopify Liquid FE > What is Shopify Liquid_"
knowledgeBase: "Merchandising Cloud"
---

# Debugging and Best Practices

Following Liquid debugging best practices and proper error handling helps you maintain reliable search and merchandising experiences for your customers. When your code is well-structured and properly debugged, you can avoid display issues that might prevent customers from finding products, which helps improve conversion rates and reduces lost revenue from technical errors.

Implementing proper debugging techniques and coding standards enables you to build maintainable customizations that consistently deliver quality shopping experiences. This helps ensure your search results, product cards, and merchandising features function correctly across all customer interactions, supporting better product discovery and purchase completion.

## 1. Error Handling

a. Using if statements for existence checks

When working with variables or objects that may not always exist, it's essential to use if statements to perform existence checks. This prevents errors from occurring when attempting to access properties of non-existent variables or objects.

Liquid

```plaintext
{% if product %}  <p>{{ product.title }}</p>{% endif %}
```

b. Default Values with default filter

The default filter allows you to provide a fallback value in case a variable is not defined. This is particularly useful when displaying content or handling cases where expected data might be missing.

Liquid

```plaintext
{{ product.title | default: "No Product Title Available" }}
```

## 2. Best Practices

a. Use Descriptive Variable Names

Choose clear and meaningful variable names that indicate their purpose. This enhances code readability and makes it easier for you and other developers to understand the code's purpose.

Liquid

```plaintext
{{ customer.first_name }}    # Good{{ cfn }}                    # Not as clear, avoid using cryptic abbreviations
```

b. Limit Logic in Liquid

Liquid is primarily a templating language, and while it allows for some logic, it's best to keep complex logic out of your Liquid templates. Instead, consider handling more intricate computations and data manipulations in the backend or through API calls.

c. Avoid Excessive Nesting

Excessive nesting can make Liquid code hard to read and maintain. Try to keep nesting to a minimum and break complex conditions into separate lines or use elsif statements for clarity.

Liquid

```plaintext
{% if condition %}  {% if nested_condition %}    <p>Content</p>  {% endif %}{% endif %}
```

Instead, refactor it as:

Liquid

```plaintext
{% if condition and nested_condition %}  <p>Content</p>{% endif %}
```

d. Properly Indent Code

Consistent and proper indentation improves code readability, especially when dealing with nested structures. Maintain indentation to enhance code comprehension.

Liquid

```plaintext
<ul>  {% for item in collection %}    <li>{{ item }}</li>  {% endfor %}</ul>
```

e. Comment Your Code

Use comments to explain complex or non-obvious parts of your Liquid code. Well-placed comments can be a great help to yourself and other developers when revisiting the code.

Liquid

```plaintext
{% if product.available %}  <p>This product is available.</p>{% else %}  <!-- If product is not available, display an out-of-stock message -->  <p>This product is out of stock.</p>{% endif %}
```

## 3. Debugging

a. Using {{ variable_name | json }}

When debugging, it's often helpful to see the entire structure of an object or variable. You can use the json filter to output the variable in a JSON-like format, making it easier to inspect its contents.

Liquid

```plaintext
{{ product | json }}
```

b. {{ 'Hello World' | inspect }}

The inspect filter helps with debugging by displaying the internal representation of a variable, including its type and value.

Liquid

```plaintext
{{ 'Hello World' | inspect }}
```

c. Enabling Debug Mode

For advanced debugging, you can enable Liquid's debug mode. Add the ?debug parameter to the URL of any page on your Shopify store to see detailed information about the Liquid rendering process.

Liquid

```plaintext
{{ 'Hello World' | inspect }}
```

By following these debugging techniques and best practices, you can make your Shopify Liquid code more maintainable, efficient, and less prone to errors. The tips mentioned here will help you streamline your development process and create exceptional storefront experiences for your customers.