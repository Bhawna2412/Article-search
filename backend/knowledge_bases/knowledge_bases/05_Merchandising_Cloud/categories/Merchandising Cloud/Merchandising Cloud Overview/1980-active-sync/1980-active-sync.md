---
title: "Active Sync"
articleID: 1980
category: "Merchandising Cloud Overview"
knowledgeBase: "Merchandising Cloud"
---

# Active Sync

You can ensure product data stays constantly up-to-date through Active Sync, which automatically synchronizes prices, inventory, metadata, and product changes in near real-time. This infrastructure eliminates manual sync triggers and scheduled delays, helping customers see accurate, current product information-particularly crucial during high-traffic sales periods when outdated prices or stock levels can impact conversion.

Active Sync streamlines merchandising operations by indexing only the changes you make, when you make them, enabling faster synchronization compared to full reindexing. You can connect via Product Push API for real-time updates or use platform-specific connectors (Shopify available now, additional platforms planned), ensuring shoppers always see the most relevant product assortment while reducing the operational burden of managing catalog updates.

*Our powerful Active Sync infrastructure ensures all product data remains constantly up-to-date.*

[https://youtu.be/Dbxgx35cEPQ?feature=shared](https://youtu.be/Dbxgx35cEPQ?feature=shared)

Active Sync (which is a big data ETL pipeline built on top of the Apache Pulsar streaming platform) ensures all product data is synchronized, and kept up-to-date, on an automatic basis. This includes changes to prices, products, metadata, and everything in between.

Updates take place as soon as the data is pushed into Merchandising Cloud (formerly Findify) - with NO requirement for merchants to manually trigger a sync or wait for the scheduled pull. Changes will be realized live on site almost immediately, and queued when the changes made are large to ensure no updates are dropped.

Our developers have built Active Sync in such a way that we only need to index the changes you make, when you make them. This allows for faster, smoother synchronization.

Active Sync, which is unique to Merchandising Cloud, has become the cornerstone of our brand new infrastructure - streamlining internal processes and paving the way for additional growth and innovation.

> "This is all part of our quest to make merchant life as easy as possible and represents a fundamental change in the way we handle huge volumes of data," revealed Head of Product, Joakim Amadeus Olsson."With Active Sync specifically, merchants can rest assured knowing that their product database - including prices and stock levels - is always up-to-date. Shoppers will never see outdated results, only the most accurate and current assortment data. This will be particularly crucial when it comes to busy sales periods."

Releasing the full benefits of Active Sync

All Merchandising Cloud merchants on previous infrastructure have already been migrated to the Active Sync infrastructure. This means that every Merchandising Cloud merchant is now able to access it and is already benefiting from the update. Going forward, every single time a sync takes place on a merchant store, that sync will only update the data that has been changed. No need for total reindexing means syncs run faster.

To experience the full benefits of Active Sync, however, Merchandising Cloud needs to receive the product data as it changes. This will directly sync the received data, eliminating the delays that come from bulk updates in manual or scheduled syncs.

This ability can be set up in one of two ways. Merchants with developer capacity can connect their store to Merchandising Cloud's Product Push API while those without developer capacity can connect via Merchandising Cloud-created connectors, depending on their platform.

A Shopify connector is already up and running, meaning every Shopify merchant will be able to benefit fully from Active Sync - changes made to products will be pushed to the live site in real time. Connections to additional platforms, following their own necessary internal updates, are planned.

> "Active Sync is an amazing new infrastructure - one which none of our direct competitors has, and which will create great merchant value. It's an extremely modern setup that will enable innovations on top for years. It has been highly anticipated by merchants, and I'm very happy to now have met this need for them. At Merchandising Cloud, we think there is nothing more important than listening to the wants and needs of our clients," said Head of Product, Joakim Amadeus Olsson.

## Frequently Asked Questions

### 1. Can live updates be used with any platform?

Yes, but it will only work out-of-the-box on platforms providing updates through webhooks.

Shopify webhooks is already integrated and we are working with other platforms to extend their functionality also. All clients can, however, already today utilize the push API for custom setup.

### 2. Do I benefit from Active Sync beyond webhooks?

Yes. Active Sync is a cutting-edge infrastructure built as a big data ETL pipeline built on top of the Apache Pulsar streaming platform. This enables a foundation for innovation years into the future, but can already today be experienced through the easiness of adding backend integrations with e.g. numerous content sources such as Instagram, Blogs or the custom Content API as well as several Rating & Reviews services (Yotpo, Lipscore, Reviews, Stamped, Judge.me etc.).

Active Sync also speeds up scheduled product syncs since it adds an extra validation layer if a product has been updated and only updates the index with new or updated products.

### 3. If I update all my products at the same time, will the amount of webhooks break Merchandising Cloud?

No. If simultaneously receiving large amount of webhooks, they will be queued and processed accordingly.

Results will continuously be pushed through. If updating the entire database this will be equivalent to a full re-index and something the system managed for years with the traditional feed sync, so large volumes of webhooks won't break it.

### 4. How quick are product updates with webhooks?

They are very fast, but not always instant - this is in order to optimize overall performance.

When you push a product update, there are two main systems that are updated in Merchandising Cloud:

i) The Product Data Lake (Internally named Apollo after the all-knowing god)

ii) The Search Index (Internally named Lucy since it is built on Lucerne)

The Product Data Lake will update each record directly.

However, when simultaneously updating multiple products, a re-index for each will negatively impact performance.

In order to optimize shopper experience and minimize load time, the index will be updated in batches of 1,000 records or 60 seconds.

In this way, we've found the optimal sweet spot for performance and speedy updates.