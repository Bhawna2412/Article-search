---
title: "Neto by Maropost Release Notes – 16 Sep 2025"
articleID: 2286
category: "2025 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-09-17
---

# Neto by Maropost Release Notes – 16 Sep 2025

## Overview

This release contains updates for the eCommerce versions **6.343.0**, **6.344.0**, and **6.345.0**.

## Enhancements and Updates

### Performance Optimization for GetItem API

The [GetItem API](https://developers.maropost.com/documentation/engineers/api-documentation/products/getitem) performance has been improved with enhanced response times, throughput, and resource utilization.

### Improved Handling of Large Consignments in Hunter Express

Neto partnered up with Hunter Express to improve handling of large consignments through labeling system and API. By applying SHR labels based on specific weight, dimension, and item count criteria, the large consignments will now be identified and handled more efficiently.

The five parameters that will trigger SHR labeling are as follows:

- item dead weight >79kg
- any dimension >3.49m
- 11+ items with cubic weight >150kg
- consignment cubic weight >299kg
- 16+ items regardless of weight

### TNT Express Shipping Integration Upkeep

Neto by Maropost’s integration with TNT Express Shipping has been updated to accommodate their API migration to a new server.

## Fixes

- Fixed an issue where the **Warehouse Qty** and **Committed Qty** was being reduced on the Kit when processed via the bulk pack job.
- Fixed an issue where the billing address was showing as NULL for orders paid with Stripe web payment option - Google Pay Wallet that didn’t have the billing address added on the wallet account.
- Fixed an issue in the **Sales by SKU** report where the labels for **active** and **approved** filters were mislabelled.