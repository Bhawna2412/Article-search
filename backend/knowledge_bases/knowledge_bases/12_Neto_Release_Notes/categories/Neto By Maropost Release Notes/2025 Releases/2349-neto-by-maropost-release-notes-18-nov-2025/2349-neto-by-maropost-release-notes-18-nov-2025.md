---
title: "Neto by Maropost Release Notes – 18 Nov 2025"
articleID: 2349
category: "2025 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-11-18
---

# Neto by Maropost Release Notes – 18 Nov 2025

## OVERVIEW

This release contains bug fixes, enhancements, and feature updates for Neto version **6.352.0**.

## NEW FEATURES & UPDATES

### Customer Order Count Added to Legacy Order List

The legacy Order List page now displays the total order count for each customer. You can click this count to view all orders from that customer. This newly added feature makes it easy to spot repeat customers and quickly navigate to their complete order history.

![fix0.png](https://us.v-cdn.net/6038474/uploads/LRMKQY6J2O8V/fix0.png)

### ZIP X Neto API Enhancement

Introduced a new update on ZIP & Neto integration by migrating to a new API domain. This update strengthens and improves customer data protection by keeping systems secure, compliant, and aligned with industry standards.

## FIXES

- Fixed an issue where custom customer fields could not be cleared through the API in certain cases.
- Fixed an issue where unleashed invoices weren’t being exported due to double tax, causing the merchants to fix them manually every time.
- Removed the “**ExportEmployees**” and “**ExportSuppliers**” tasks from the Neto Control Panel, as they are outdated and rarely used.
- Fixed an issue that caused the MYOB integration to mark itself as inactive when handling customer IUDs containing "**401**".
- Fixed an issue in which the previously applied listing rule template was not removed when a new template was assigned to an SKU through the Neto eBay listing page.
- Fixed an issue where the “**Brochure URL**” field was not populated correctly during export or import operations.