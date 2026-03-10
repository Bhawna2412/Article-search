---
title: "Add a Discount Group"
articleID: 1535
category: "Use Neto > Products > Marketing, SEO, and Promotions > Discounts and Promotions"
knowledgeBase: "Neto By Maropost"
---

# Add a Discount Group

Discounts that are grouped together will mean that only one will apply to customers in checkout. Running multiple discounts at once lets you define which discounts can be applied together, and which can’t.

**Important**: Discounts can only be grouped together when using the **Product Cost Cap** discount event with the **Cart Quantity** discount condition. Please see our [help article](https://galaxy.maropost.com/kb/articles/1360-add-a-discount-coupon) for instructions on how to add a discount/coupon.

## Add a Discount Group

To get started grouping discounts, you first need to create a discount group.

1. In your Neto control panel navigate to **Marketing** > **Discount Groups**.
2. Click **Create new Discount Group**.
3. Enter a **Name** for your discount group and click **Save**.

You have now created a discount group.

## Add Discounts/Coupons to a Group

Once your groups are created you can start grouping your discounts.

1. In your Neto control panel navigate to **Marketing** > **Discounts/Coupons**.
2. Click on a discount that is using **Cart Quantity** as one of the conditions, and **Product Cost Cap** as the discount.
3. In the **Additional Rules** section find the **Discount Group** setting. Choose the group you’ve created.
4. You also need to enter a value in the **Sort Order** field. The discount with the lowest sort order in the group will be applied to the customer’s order, if multiple conditions are met.
5. Click **Save**.
6. Repeat these steps for all other discounts that should be grouped together.

Now when a customer’s order satisfies the conditions on more than one discount, the one with the lowest sort order in the group will be applied in checkout.