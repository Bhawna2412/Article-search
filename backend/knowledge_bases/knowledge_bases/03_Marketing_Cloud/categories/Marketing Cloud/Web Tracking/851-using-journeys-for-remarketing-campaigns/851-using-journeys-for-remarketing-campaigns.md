---
title: "Using Journeys for Remarketing Campaigns"
articleID: 851
category: "Web Tracking"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Using Journeys for Remarketing Campaigns

You can create automated journey-based remarketing campaigns to recover lost revenue from abandoned shopping carts and improve overall email marketing ROI. These automated workflows significantly enhance your email marketing effectiveness by nurturing prospects with timely, personalized messages that encourage them to complete their purchase, typically leading to better conversion rates than one-time promotional emails.

Journey automation enables you to scale personalized communication while reducing manual effort, helping optimize your email marketing strategy by delivering relevant content based on customer behavior and purchase intent, which drives better campaign results and revenue recovery.

Once you have added the web tracking script to your site and are capturing items added to a shopping cart, you can now utilize the full power of Maropost for Marketing to recover lost revenue.

Journeys allow you to create abandoned funnel re-marketing programs that are as simple or as advanced as you want. Drag and drop controls allow you to add any rules to recover the maximum amount of revenue from abandoned carts.

Here is an example of a journey that sends an abandoned cart re-marketing email immediately after a cart abandonment has been detected. It waits for 2 days before sending a second email. But the second email is only sent if the cart remains abandoned. If it has been recovered in the meantime, then the second email is not sent.

![1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXDA.05T5g00000BkXDAEA3.png)
Let's take a look at each element one at a time:

### Web Page Event

![2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXDB.05T5g00000BkXDBEA3.png)
The Web Page Event journey widget uses the Web Funnel settings. The trigger is set to only allow contacts who have abandoned the 'Shopping Cart 1' web funnel.

### Send Email

The re-marketing email is sent out that references the items left behind in the cart. Liquid scripting displays the [**personalized cart**](https://galaxy.maropost.com/kb/articles/895-content-web-funnel-tags?utm_source=community-search&utm_medium=organic-search&utm_term=web+funnel+tags) within each email.

The abandoner receives a personalized email displaying items left in the cart. Studies have proven that abandoned cart re-marketing emails that provide specific references to items left in the cart have a higher recovery rate than those that don't.

![3.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXDC.05T5g00000BkXDCEA3.png)

### Delay

The delay is set for two days, allowing the cart abandoner enough time to open your re-marketing email and decide to return to the cart and complete the purchase.

### Yes/No

![4.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXDD.05T5g00000BkXDDEA3.png)
Evaluate whether the abandoner has responded to your re-marketing email and completed the purchase. The Recovered Cart segment selects contacts who have previously abandoned the 'Shopping Cart 1' web funnel and have returned to complete it within the past 2 days.

![5.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXD9.05T5g00000BkXD9EAN.png)

### Send Email

Send the second remarketing email only if the cart is still abandoned.

### End

Two re-marketing emails are enough to encourage an abandoner to return and complete the purchase. End the journey at this point.

## Related Articles

**Automation & Workflows:**

- [Abandoned Cart Journey Template](https://galaxy.maropost.com/kb/articles/865-abandoned-cart-journey-template) - Pre-built template for cart abandonment campaigns
- [Automation Overview](https://galaxy.maropost.com/kb/articles/1745-automation-overview) - Introduction to automated email marketing workflows
- [Data Journey Delays](https://galaxy.maropost.com/kb/articles/859-data-journey-delays) - Configure timing in your automated journeys

**Journey Building:**

- [Data Journey End](https://galaxy.maropost.com/kb/articles/858-data-journey-end) - Properly conclude your automated campaigns
- [Data Journey Filters](https://galaxy.maropost.com/kb/articles/860-data-journey-filters) - Target specific customer segments in journeys