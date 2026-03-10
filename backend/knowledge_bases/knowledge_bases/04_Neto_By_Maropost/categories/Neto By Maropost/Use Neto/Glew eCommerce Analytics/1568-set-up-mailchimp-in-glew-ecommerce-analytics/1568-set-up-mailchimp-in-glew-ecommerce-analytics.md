---
title: "Set up MailChimp in Glew eCommerce Analytics"
articleID: 1568
category: "Use Neto > Glew eCommerce Analytics"
knowledgeBase: "Neto By Maropost"
---

# Set up MailChimp in Glew eCommerce Analytics

You can integrate MailChimp with Glew eCommerce Analytics to automate personalized customer communications using data-driven insights from your Neto store, enabling targeted email campaigns based on actual customer behavior and purchase patterns. This helps optimize customer engagement by automatically pushing product recommendations, abandoned cart items, and customer segments directly to MailChimp for personalized email marketing, typically improving marketing effectiveness and conversion rates. Properly configured analytics-driven email integration enables you to leverage purchase history and customer behavior data for more relevant communications without manual list management.

Setting up the Glew Analytics-MailChimp integration provides centralized management of customer segmentation and automated list synchronization, helping ensure your email marketing campaigns reach the right customers with personalized content based on their actual shopping behavior and preferences.

Glew eCommerce Analytics allows you to personalise customer interactions by automatically pushing each customer's top-three product recommendations, abandoned cart items and last item purchased directly to them via email.

## Link MailChimp to Glew Analytics

1. In your Neto control panel navigate to **Analytics Studio**.
2. In the Glew Analytics menu, select **Settings** > **Store Settings**.
3. In the integrations section, locate the Mailchimp addon and click the **Grant Glew eCommerce Analytics Access** link.
  The **Integrate with MailChimp** page displays.
4. Click the **Get Started** button.
5. Click the **Connect MailChimp** button.
6. In the pop-up window, enter your Mailchimp **Username** and **Password**.
7. Click the **Log in** button.
8. Select a Mailchimp list to sync with (either **Select a mailing list** or **Create a new list**).
  When unsure, select **Create a new list**.
9. Click the **Validate & Continue** button.
10. Enter a **List Name **to create in Mailchimp.

> **Important:** Click the **Glew eCommerce Analytics can report campaign...** checkbox only if you want Glew Analytics to report on this list.

11. Click the **Save Changes** button.
12. Click the **Synchronise Data** button.
  **Please Note**: It may take up to 24 hours for your data to sync if you have less than 25,000 contacts. If you have more than 25,000 contacts, it may take several days for the first data load to sync.

## Automatically Push Segments to MailChimp

> **Important:** All segments will only reference the last 365 days of data.

Mailchimp charges a nominal fee based on the size of your contact lists. As a result, Glew Analytics does not automatically add lists to MailChimp. To set up a list to auto send:

1. In Glew Analytics navigate to **Customers > Segments**.
2. Click on a segment name to open it.
3. Click the **Push to MailChimp** button.
  The button will display as **On**.
4. Click the **Push to MailChimp** button to stop sending the selected segment to MailChimp.

**Please Note**: Lists are updated overnight, so please allow for up to 24 hours to see your data in MailChimp. Customers can be added and removed from multiple lists.

## Related Articles

- Understand the Glew Analytics control panel