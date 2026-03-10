---
title: "Understanding Weights in Merchandising Cloud"
articleID: 2279
category: "Merchandising Cloud Dashboard > Search_ Product Inclusion_Exclusion"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-09-29
---

# Understanding Weights in Merchandising Cloud

The **Weights** feature in Merchandising Cloud (Findify) controls how different fields in your catalog are prioritised when customers use **search or autocomplete**. By assigning weights, merchants can influence which fields are considered more important when a search term matches product data.

## Overview of Weights

- A **weight** is a numeric value that determines the **relative importance of a field in Search**.
- Values can range from **1 to infinity**, with higher numbers making the field more important in ranking.
- If a search term matches multiple fields (e.g., both Title and Description), the field with the **higher weight** will have more influence on the search results.

To access and set weights for categories; go to **Settings > Primary Setup > Filtering > Pencil icon **of the category to set weight.

![mhc1.png](https://us.v-cdn.net/6038474/uploads/2OA1VQGRYA4O/mhc1.png)

## How Weights Influence Search

When a shopper enters a search term, the system matches it against the product data in your catalog. Each field (Title, Description, Brand, etc.) has a **default weight** that influences ranking.

- Example:  - “Shirt” matches the **Title** field → shown higher (Title has higher weight).
  - “Shirt” matches the **Description** field → shown lower (Description has lower weight).

As a merchant, you can:

- **Increase weight** on important fields like Title, Brand, or SKU.
- **Lower weight** or disable fields that should have less influence.
- **Toggle fields on/off** to decide whether they are searchable or suggestable at all.

Weights affect **search ranking and autocomplete relevance only**. They do **not control the order of filters** in the storefront. The order of filters is defined by how fields are arranged in the **Search configuration** by the user. 

- Example:  - “Discount” filter has weight **2**
  - “New Arrival” filter has weight **1**
  - In this case, “Discount” will appear before “New Arrival” in search suggestions.

This ensures that the fields you want to highlight receive more visibility without excluding other options. **Weights let you rank what matters most.** Use them to guide shoppers toward the right products, without hiding other options.

## Best Practices for Using Weights

- **Use gradual increments** instead of extreme jumps. Example: 1 → 2 → 3 instead of 1 → 100.
- **Adjust based on analytics** to align with how customers typically search or filter products.
- **Prioritise key fields** like Title, Brand, or SKU, since they are most relevant to customer intent.
- **Turn off fields** that aren’t useful for search (e.g., internal notes).
- **Remember:** Weights don’t affect filter order — only search ranking.

The Weights feature provides merchants with a way to fine-tune search relevance and guide shoppers toward the most impactful criteria. By assigning meaningful weight values, you can balance **business priorities** with **customer discovery**, ensuring search and suggestions support both revenue goals and user experience.

![mhc-2.png](https://us.v-cdn.net/6038474/uploads/Y3MBU059CNDV/mhc-2.png)

## Related Settings in the Filter Popup

Along with weight, you can also configure how each filter interacts with search:

- **Allow to filter by this field** – Makes the field available as a customer-facing filter.
- **Return in autocomplete response** – Ensures this field is included in the **API response for autocomplete** queries. (without it enabled, the field cannot be used to power autocomplete results).
- **Allow to search by this field** – Lets the field influence search ranking.
- **Use this field for search suggestions** – Helps refine predictive search.
- **Return in response per variant** – Useful if variant-level data should affect the results