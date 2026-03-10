---
title: "Performance Optimization"
articleID: 2224
category: "Shopify Liquid FE > What is Shopify Liquid_"
knowledgeBase: "Merchandising Cloud"
---

# Performance Optimization

Optimizing your Liquid code performance helps improve page load speeds and customer experience, which tends to enhance conversion rates and reduce bounce rates. Fast-loading search results and product pages keep customers engaged during product discovery and help ensure that shoppers can find and purchase products quickly without frustration from slow page rendering.

Performance optimization streamlines the technical foundation of your ecommerce search and merchandising experience. When your Liquid templates are optimized, you can deliver faster product discovery, improved SEO rankings, and better overall shopping experiences that help convert more visitors into customers.

When developing Shopify themes and customizing storefronts with Liquid, optimizing the performance of your Liquid code is essential for delivering fast and efficient user experiences. Optimizing Liquid performance ensures that your online store loads quickly, improves SEO rankings, and enhances overall customer satisfaction. In this guide, we'll explore some best practices and techniques to optimize the performance of your Liquid code.

## 1. Limit Liquid Code Complexity

One of the primary factors affecting Liquid rendering times is the complexity of your Liquid code. Avoid using deeply nested for loops and excessive logic within Liquid templates. Instead, consider offloading complex logic and computations to the backend or using the Shopify API to retrieve pre-processed data.

## 2. Minimize Liquid Tags and Filters

Every Liquid tag and filter introduces additional processing overhead. Minimize the number of tags and filters used in your templates, and avoid chaining multiple filters together, as this can slow down rendering.

## 3. Use {% capture %} Wisely

While {% capture %} can be useful for storing and reusing snippets of Liquid code, excessive use can lead to performance issues. Evaluate whether you truly need to capture the content or if you can achieve the same result with more efficient techniques.

Liquid

```plaintext
{% capture my_variable %}  {% for product in collections.all.products %}    {{ product.title }}  {% endfor %}{% endcapture %}
```

## 4. Lazy Load Non-Essential Content

Lazy loading involves deferring the loading of non-essential content until it is needed. This technique can significantly improve page load times, especially for content that appears below the fold or is not immediately visible to the user.

## 5. Optimize Image Loading

Images are a common cause of slow-loading pages. Use responsive image techniques, such as using srcset, to serve appropriately sized images based on the user's device, resolution, and screen size. Additionally, compress and optimize images to reduce file sizes without compromising quality.

## 6. Minimize External HTTP Requests

Reduce the number of external HTTP requests made by your Liquid templates. Each external resource, such as JavaScript, CSS, or external APIs, introduces additional loading time. Use local assets whenever possible, and consider combining CSS and JavaScript files to reduce the number of requests.

## 7. Cache Liquid Output

Leverage caching mechanisms to store and reuse the output of frequently used or computationally expensive Liquid code. Caching can significantly speed up the rendering process for subsequent page loads.

## 8. Regularly Test Performance

Periodically test the performance of your Shopify store using tools like Google PageSpeed Insights, Lighthouse, or GTmetrix. These tools provide valuable insights into areas that need improvement and help you track the effectiveness of your performance optimization efforts.

## 9. Stay Informed About Liquid Updates

Shopify occasionally introduces new Liquid features and optimizations. Stay informed about updates and best practices by checking the official Shopify documentation and developer changelogs.