---
title: "Loyalty Points Expiration"
articleID: 391
category: "Customers > Loyality"
knowledgeBase: "Retail Express"
---

# Loyalty Points Expiration

You can configure loyalty point expiration policies to encourage regular engagement and manage program liability, helping maintain an active and engaged loyalty membership base. This improves your retail operations by providing automated point expiry management, with properly configured expiration policies typically driving increased visit frequency as customers use points before expiry.

Understanding loyalty point expiration involves recognizing expiration rule configuration, customer notification requirements, and policy communication strategies to help retail operators focus on the right loyalty program engagement activities, ensuring your retail strategy consistently drives better active membership and customer visit frequency outcomes.

Using the Loyalty Expiration feature of Retail Express, you can configure points to expire after a specific number of days. The Expiry Override feature can also be used to exclude certain transactions from the expiry period.

When Loyalty Expiration is enabled points will be calculated daily. All points earned more than the specified period will expire provided that there are no transactions for the customer that meet the override conditions.

For example:

- If the override is set to 365 days with no override, every day the system will check for any points earned more than 365 days ago
- Those points will expire and be deducted from the customer's balance
- If an override transaction has been assigned (e.g Sales Order) any customer who has had a Sale in the last 365 days will not have their points expired

To manage your Loyalty Expiration configuration

1. Navigate to** Settings > POS Settings > Loyalty Configuration**
2. Click the **Loyalty Expiration** tab
3. Enter the number of days into the **Expiry Schedule** field
4. Assign any transaction types to the **Expiry Override** by highlighting the transaction type and clicking the right-facing arrow

> **Note:** These are the transaction types where the Expiry Date will not be applied.

5. Click **Save Changes**

![mceclip0 (99).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTcZEAU.jpg)