---
title: "Neto by Maropost Release Notes – 5 Dec 2023"
articleID: 2131
category: "2023 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-14
---

# Neto by Maropost Release Notes – 5 Dec 2023

## Overview

This release consists of an important hotfix - eCommerce release **6.276.1**.

## **Fix Update**

We fixed an issue in which the **CompleteSale eBay process**, which syncs order statuses and tracking details to eBay, was unable to complete. 

The cause was found to be the new eBay API rule that requires a tracking code when the shipping method is set. And so, to fix the issue, we updated the CompleteSale eBay process. Now, the Shipping Method (that is, the carrier name) will no longer be synced if the shipment does not contain a Tracking Number. 

This will ensure the successful completion of the CompleteSale call, and alleviate an issue where the CompleteSale call was being re-tried over and over, clogging up the eBay process queue.

Want to learn about eBay's automatic processes, see the article on [**eBay addon**](https://galaxy.maropost.com/s/article/ebay-sales-channel).