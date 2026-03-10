---
title: "API Integration Checklist"
articleID: 50
category: "Merchandising Cloud Integrations > Advanced Integration"
knowledgeBase: "Merchandising Cloud"
---

# API Integration Checklist

Following a comprehensive API integration checklist helps you ensure successful implementation of search and merchandising capabilities. When you systematically verify each integration requirement, you help prevent common setup issues and reduce time to launch, which supports faster realization of conversion benefits from improved search and product discovery capabilities.

Structured integration planning enables smoother implementations with fewer technical issues. This helps you deploy search and merchandising features more confidently and quickly, supporting better project outcomes and faster achievement of your conversion optimization and product discovery improvement goals.

Integrating new software solutions through an API can sometimes be a challenging task - which is why we want to make the process as smooth and as efficient as possible.

Below, you will find a checklist for integrating with our Search and Merchandising software via our API. By following this checklist, you can ensure that you have covered all the necessary components to seamlessly integrate with our products and take full advantage of their capabilities.

The checklist is organized into different sections, each representing a specific logic or solution that our API supports. These sections include:

1. Autocomplete: For providing search suggestions, product matches, trending searches, and trending products to enhance the search experience.
2. Search Results: For implementing filters, product listings, sorting options, banners, and more to display relevant search results effectively.
3. Zero Results: To handle cases when no search results are returned and how to display "Trending Products" as a fallback.
4. Content Search: For content-based searches with options to return blog posts and Instagram posts.
5. Smart Collections: To enable custom collections with filters, sorting, banners, promo cards, and more.
6. Recommendations: For implementing recommendation widgets and dynamic content based on specific criteria.
7. Analytics: For tracking important user events such as page views, purchases, clicks, and more to gain valuable insights into user behavior.

It is essential to note that any configuration made through the API will override settings in the Marpost Merchandising Cloud (formerly Findify) dashboard, including merchandising rules.

By following this checklist, you will not only streamline the integration process but also provide your users with a seamless and enhanced experience through our Search and Merchandising software.

Should you encounter any challenges or have any questions during the integration process, our support team is here to assist you on [support@maropost.com](mailto:support@maropost.com).

## API INTEGRATION CHECKLIST[https://developers.findify.io/docs/api-integration-checklist#api-integration-checklist](https://developers.findify.io/docs/api-integration-checklist#api-integration-checklist)

### Autocomplete[https://developers.findify.io/docs/api-integration-checklist#autocomplete](https://developers.findify.io/docs/api-integration-checklist#autocomplete)

- Search Suggestions
- Product Matches
- Trending Searches
- Trending Products
- Content Search
- Page Redirects

### Search Results[https://developers.findify.io/docs/api-integration-checklist#search-results](https://developers.findify.io/docs/api-integration-checklist#search-results)

- Filters
- Breadcrumbs
- Products
- Sorting Options
- Page Redirects
- Banners
- Promo Cards
- Partial Match > "Corrected Q"
- Full Match "Q" & "Count"
- Offset: Load More/Previous Buttons or Pagination
- Best Practice: Anchoring - Navigating back should bring you to the same results
- Best Practice: Placeholders Spinner/Cumulative

### Zero Results[https://developers.findify.io/docs/api-integration-checklist#zero-results](https://developers.findify.io/docs/api-integration-checklist#zero-results)

- If no items returned in Search API, return Recommendations API for "Trending Products"

### Content Search[https://developers.findify.io/docs/api-integration-checklist#content-search](https://developers.findify.io/docs/api-integration-checklist#content-search)

- Results
- Offset/Limit (Pagination)
- "Q"

### Smart Collections[https://developers.findify.io/docs/api-integration-checklist#smart-collections](https://developers.findify.io/docs/api-integration-checklist#smart-collections)

- Filters
- Breadcrumbs
- Products
- Sorting Options
- Banners
- Promo Cards
- Offset: Load More/Previous Buttons or Pagination
- Best Practice: Anchoring - Navigating back should bring you to the same results
- Best Practice: Placeholders Spinner/Cumulative
- Pinning/Merch Rules: Override dashboard rules

### Recommendations[https://developers.findify.io/docs/api-integration-checklist#recommendations](https://developers.findify.io/docs/api-integration-checklist#recommendations)

- Widget/Slot based
- ID in payload for dynamic in widget (needs to be configured in dashboard)
- Generic End-Point (ID for calculated)
- Optional: Filter in Payload
- Optional: Pin Position by Item Group-ID
- Fallback: Only Slot Based

### Analytics[https://developers.findify.io/docs/api-integration-checklist#analytics](https://developers.findify.io/docs/api-integration-checklist#analytics)

- Most Important, When, Where & Parameters
- View Page
- Purchase
- Click Item
- Update Cart
- Click Suggestion
- Add to Cart
- Redirect