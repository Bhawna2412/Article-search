---
title: "Announcing User Discounts"
articleID: 1351
category: "Feature Announcements > News"
knowledgeBase: "Retail Express"
---

# Announcing User Discounts

You can gain greater control over discounting practices by implementing User Discount Rules that help maintain profit margins while giving staff appropriate flexibility to drive sales strategically. This feature helps ensure your retail operations remain profitable by preventing excessive discounting while still allowing authorized promotional strategies to apply automatically.

Setting up User Discounts enables you to assign discount limits directly to Security Profiles, ensuring consistent enforcement across all POS terminals including offline mode. When you configure these controls properly, you can expect better margin protection, improved staff accountability for pricing decisions, and the ability to differentiate between manual discounts (which should be controlled) and system-generated promotional discounts (which can apply unrestricted), typically leading to better overall profitability management.

# Announcing User Discounts

We understand that Discounting is a strategic tool used commonly within businesses for many reasons, including the ability to drive sales and provide a competitive advantage. However, discounting directly impacts the profitability of a business.

We're excited to announce the expansion of the discount tools in Retail Express to give you greater flexibility and control over your discounting rules, with the new User Discounts feature!

This feature will be rolled out gradually to all users between **1st - 11th November 2021**.

## Understanding Discounting

Retail Express already offers multiple tools to configure discounts (including Promotional Campaigns, global and outlet-specific pricing (including promotional prices), on-the-fly discounts through POS, and [Customer Price Groups](https://ress.zendesk.com/hc/en-us/sections/200578020).

These discounting tools are considered to be either **Manual Discounts** or **System-generated Discounts**.

### Types of Discounts

|  |  |
| --- | --- |
| Manual discounts | The user manually changes a Price or discount-related field within POS |
| System-generated discounts | Discounts applied automatically via:  - Promotional or Outlet-specific discount prices - Promotional Campaigns - Customer Pricing (Standard or Fixed Price Groups) |

It's necessary to control the extent of the discounts available to be applied to ensure your business remained profitable.

Retail Express used a Maximum Discount Rules feature to limit the discounts applied, however, this feature had some limitations:

- Max Discounts were isolated to products, and not configured per staff member
- Products were prevented from being discounted even if it was an authorised discount (e.g. a Promotional strategy) or unauthorised (manual discount entered by a staff member at POS)
- There was no way to limit manual discounts, but still allow system-generated discounts to apply
- Manual discounts could be overridden at POS via user accounts with the Max Discount Override feature enabled (typically recommended for Store Managers and senior staff)

## About User Discounts

The new User Discounts feature is separate from Max Discount Rules in that:

- User Discount Rules apply exclusively to manual discounts (allowing system-generated discounts to apply unrestricted)
- User Discount Rules are applied directly to Security Profiles so you can apply the rule to a group of staff members at once
- User Discount Rules only apply to POS (and will not affect any integrations, including APIs and web stores)

When configuring the User Discount, you will be able to control the maximum allowable discount using the same Max Discount configuration rules:

1. Sell Price minus % value
2. Sell Price minus $ value
3. Cost Price plus % value
4. Cost Price plus $ value

Each Security Profile can be assigned to a single User Discount Rule. You can also enable individual Security Profiles to allow those users to discount beyond the maximum discount.

User Discounts are available in Offline POS so you can have confidence your staff aren't discounting beyond the maximum amount even when trading offline.

## Which discount to use

The table below helps you to understand which discount feature to use for your business:

|  |  |  |
| --- | --- | --- |
| **Scenario** | **User Discount Rule** | **Max Discount Rule** |
| Limit staff from discounting | * * | * * |
| Limit staff from discounting, but apply additional limits to certain products | * * | * * |
| Don't limit staff from discounting but restrict specific products from discounts (including on integrated web stores and other integrations) | * * | * * |

## What you need to do

You can begin using the new User Discount feature as soon as the update to Retail Express has been applied to your database (watch for a banner in your software to let you know when this has occurred).

There is no change to the existing Max Discount Rule functionality - your existing discount rules will be preserved.

To begin using User Discounts:

- Enable users to access the new features via:  - Profile Security (to manage Maximum Discount Rules)
  - POS Security (to enable Maximum Discount Override for specific Profiles)
- Create and assign your User Discount Rules via