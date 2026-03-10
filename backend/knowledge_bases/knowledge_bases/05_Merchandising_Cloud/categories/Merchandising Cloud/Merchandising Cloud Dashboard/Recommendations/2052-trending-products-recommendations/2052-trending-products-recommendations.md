---
title: "Trending Products Recommendations"
articleID: 2052
category: "Merchandising Cloud Dashboard > Recommendations"
knowledgeBase: "Merchandising Cloud"
---

# Trending Products Recommendations

You can showcase trending products to capitalize on momentum and help customers discover items gaining popularity in your store. This recommendation type analyzes changes in customer engagement over time rather than just total views, surfacing products with genuine growth patterns that indicate rising shopper interest.

The trending algorithm uses delta ranking to track daily view count changes over two weeks, prioritizing recent activity and consistent growth patterns. This helps ensure you're featuring products with real traction rather than temporary spikes, which guides customers toward items other shoppers are increasingly interested in and tends to improve conversion rates through social validation.

This Recommendations widget highlights items gaining momentum in your store by analyzing changes in customer engagement over time.

## Tracking Popularity Growth

We track daily product view counts over a two-week period, prioritizing recent activity:

- Daily view count changes are calculated
- Recent trends carry greater weight
- Products are ranked based on growth patterns, not just total views

## Delta Ranking Methodology

We compare products based on recent engagement:

**Example:**

Product A Daily Views: **10, 8, 6, 4, 4, 5** *(most recent to oldest)*

Product A Daily Change: **+2, +2, +2, 0, -1**

Product B Daily Views: **15, 15, 16, 14, 15** *(most recent to oldest)*

Product B Daily Change: **0, -1, +2, -1**

Even though Product B has more total views, Product A demonstrates consistent growth. Our ranking prioritizes upward momentum.

## Popularity Ranking Methodology

We apply a weighted view system to assess sustained interest:

**Example:**

Product A Daily Views: **10, 10, 10, 10, 10, 50** *(most recent to oldest)*

Product B Daily Views: **50, 10, 10, 10, 10** *(most recent to oldest)*

Days Weight: **1, 0.5, 0.25, 0.125, 0.0625** *(most recent to oldest)*

Though both products have **90 total views**, Product A has **21.875 weighted views**, while Product B has **58.8125 weighted views** - making Product B rank higher.

## Balanced Selection Criteria

We ensure accurate trend detection by considering:

- **Growth Rate (Delta Ranking):** How quickly a product gains views
- **Baseline Popularity (Popularity Ranking):** Weighted view totals over 14 days

This balanced approach ensures:

- Genuine trending products are featured
- Items with erratic low-view data are filtered out
- Reliable trends are surfaced based on substantial data

By leveraging these methodologies, our system helps customers discover products that are truly gaining traction in your store.