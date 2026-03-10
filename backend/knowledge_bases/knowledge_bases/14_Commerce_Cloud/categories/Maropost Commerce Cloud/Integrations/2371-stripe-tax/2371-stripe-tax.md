---
title: "Stripe Tax"
articleID: 2371
category: "Integrations"
knowledgeBase: "Commerce Cloud"
lastUpdated: 2026-01-05
---

# Stripe Tax

Selling in the United States opens up access to a massive market—but it also introduces one of the most complex parts of ecommerce operations: **sales tax compliance**.

With more than **14,000 tax jurisdictions** across states, counties, districts, and cities, sales tax rules can vary widely depending on where your customer is located, what you’re selling, and whether your business has crossed tax thresholds in that region. Managing this manually is time-consuming, error-prone, and risky.

To remove this complexity for merchants, **Commerce Cloud integrates with Stripe Tax**, allowing taxes to be calculated automatically and accurately at checkout—without ongoing manual effort.

This guide explains **what Stripe Tax is, how it works in Commerce Cloud and how to set it up**, so you can confidently manage taxes on your storefront.

## What Is Stripe Tax?

**Stripe Tax** is a tax automation service provided by Stripe that calculates sales tax in real time based on:

- Customer shipping address
- Applicable state and local tax laws
- Product taxability rules
- Your business’s tax nexus status

Instead of guessing tax rates or maintaining spreadsheets, Stripe Tax continuously keeps tax logic up to date and applies the correct tax at checkout.

When connected to Commerce Cloud, Stripe Tax:

- Calculates tax automatically during checkout
- Tracks when your business crosses tax nexus thresholds
- Applies tax rules by region and product type
- Helps reduce filing errors and compliance risk

## How to Connect Stripe Tax

### Step-by-Step Setup

1. **Log in to Commerce Cloud Backoffice**
2. Go to **Settings**
  ![image.png](https://us.v-cdn.net/6038474/uploads/SDX87MWENNNQ/image.png)
3. Navigate to the **Taxes** section
  ![image.png](https://us.v-cdn.net/6038474/uploads/UDT0I5OY5YVF/image.png)
4. On the Top **Menu**, select** Stripe Tax**
5. Under Stripe Tax, click on Connect Stripe Account
  ![image.png](https://us.v-cdn.net/6038474/uploads/K8X0AM260SL8/image.png)

## Connect Stripe Account Panel — Field-by-Field Explanation

When the **Connect Stripe account** panel opens, fill in the following:

### 1) Internal Account Name

This is a **label for your reference** inside Commerce Cloud.

- Example: `Stripe US`, `Stripe Tax - Main Store`, `Stripe Tax - Smart Furnitures`
- This name helps you identify the connection later, especially if you manage multiple storefronts.
  ![image.png](https://us.v-cdn.net/6038474/uploads/E2GPHNGF08VR/image.png)

> **Note:** **Best Practice**: Use a naming style that includes your region/store name (example: Stripe Tax - US - Furniture Care).

### 2) Select Sales Channel

Choose the **storefront** you want Stripe Tax to apply to.

- Each Sales Channel can have its own Stripe Tax connection.
- If you run multiple storefronts, you can connect:  - the **same Stripe account to multiple Sales Channels**, or
  - separate Stripe accounts per Sales Channel (if you keep finances/tax setups separate).
    ![image.png](https://us.v-cdn.net/6038474/uploads/9KBQAKAOKJ1R/image.png)

> **Note:** **Note**: This selection is important because tax calculation happens during checkout for that specific Sales Channel.

### 3) Default Tax Category

This field decides the **default tax treatment** Stripe will apply to your products when calculating tax. This will act as a fallback: If no tax code is added in the catalogue, this code will be applied. If the catalogue has a tax code, then that will be P0; otherwise, the default tax code will be used.

In the dropdown, you can search and select a category (example: **Consumer Electronics**). The category you select maps your products to Stripe’s tax logic.

**Why this matters:**
Different product types can be taxed differently depending on the jurisdiction (for example, clothing vs. electronics vs. services). Setting the correct category improves accuracy.

![image.png](https://us.v-cdn.net/6038474/uploads/SXLPYFJ3MUOT/image.png)
![image.png](https://us.v-cdn.net/6038474/uploads/VUE35EGE4TV2/image.png)

> **Note:** **Best practice: **Pick a category that matches the majority of products in your catalog. If your catalog includes multiple product types, you may later assign more specific categories at a product level. 

### 4) Address Fields (City, State/Province/Region, etc.)

These fields capture your **Head Office address**, which Stripe Tax uses to establish your business location for tax calculation and nexus tracking.

- **Country**
Sets the tax rules and regions available during setup.
- **Street Name**
Uses an **address finder with auto-suggestions**. As you type, the system suggests valid addresses based on the selected country.
Selecting a suggested address improves accuracy and helps map tax jurisdictions correctly.
- **City**
The city where your business is legally based.
- **State/Province/Region**
A critical field for state-level tax rules and nexus tracking.
- **ZIP/Postal Code**
Completes the address and enables precise tax jurisdiction mapping.

![image.png](https://us.v-cdn.net/6038474/uploads/5XCM75LBNXOE/image.png)

> **Note:** **Best practice: **Use your legal business address where tax registration and nexus tracking applies.

### Step 2 — Complete the Stripe Connection

After filling the fields, proceed with the Stripe connection flow (OAuth/account authorization).

- If you’re new to Stripe, you’ll be prompted to create an account and enter business details.
- If you already have a Stripe account, sign in and authorize the connection.

### During Stripe Setup

- If you’re new to Stripe:  - You’ll enter business details
  - Select nexus states
  - Complete tax registration (if required)
- If you already use Stripe:  - Sign in and choose the existing Stripe account
  - No need to re-enter business information
    ![image.png](https://us.v-cdn.net/6038474/uploads/TB8YQBXA2NJT/image.png)

> **Note:** **Note**: You can use the same Stripe account across multiple storefronts, or connect separate Stripe accounts for different businesses—both are supported.

Once you **successfully complete the Stripe Tax connection** flow, you are automatically redirected back to Commerce Cloud.

At the top of the screen, you’ll see a **confirmation notification** indicating that the connection was successful.

![image.png](https://us.v-cdn.net/6038474/uploads/E3YFO1CFE43B/image.png)

### Confirm the Connection Status

After successful setup, you should see the connection reflected on the **Stripe Tax Integration** page.

Look for:

- Your **Account Name**
- The **Sales Channel**
- The **Stripe Account ID**
- A clear connected/verified status.
  ![image.png](https://us.v-cdn.net/6038474/uploads/WECKNTN7OBZC/image.png)

## What Happens at Checkout

Once Stripe Tax is connected:

1. A customer proceeds to checkout.
2. When they enter a shipping address + ZIP/postcode, Commerce Cloud requests tax from Stripe.
3. Stripe returns the correct tax based on:  - Shipping destination (jurisdiction rules)
  - Nexus/registration settings in Stripe (where applicable)
  - Product tax category logic
4. Tax appears in the order summary before the customer pays.
5. Stripe Tax calculation happens in real time, so customers see the tax amount during checkout.
  ![image.png](https://us.v-cdn.net/6038474/uploads/MPXROMMKPXFD/image.png)

> **Note:** Stripe provides detailed documentation explaining how taxes are calculated at a product, location, and jurisdiction level, including nexus tracking and tax category handling.
>  You can review these details directly in Stripe’s official Tax documentation: [https://docs.stripe.com/tax](https://docs.stripe.com/tax) 

## Fallback When Stripe Tax Is Not Available

Commerce Cloud is designed so checkout **does not break** if Stripe Tax is disconnected or temporarily unavailable.

### Tax application priority order

1. **Stripe Tax**
Used when Stripe Tax is connected and responds successfully.
2. **Custom Taxes**
If Stripe Tax is disconnected or fails, Commerce Cloud attempts to apply your **Custom Tax** rules (configured under the **Custom Taxes** tab).
3. **0% tax**
If no Stripe response and no Custom Taxes exist for that region, tax may default to **0%**, and the event should be logged for review.

> **Note:** **Best Practice**: Always configure Custom Taxes for key regions if you want a safety net during Stripe downtime or during early setup.

## Using Custom Taxes as a Backup

Custom Taxes act as a **safety net**, not a replacement for Stripe Tax. They are only triggered when Stripe Tax cannot return a valid response during checkout.

Merchants can define fallback tax rules under:

**Settings → Taxes → Custom Taxes**

You can configure:

- Tax name (e.g., “Backup US Tax”)
- Fixed tax rate
- Applicable regions (states or regions)

These rules are only used if Stripe Tax is unavailable, ensuring continuity without manual intervention.

## Best Practices for Merchants

**Before going live**

- Confirm your business address in Stripe
- Review nexus state selections
- Ensure products are categorized correctly

**During operations**

- Monitor Stripe alerts for threshold warnings
- Periodically review tax summaries in Stripe Dashboard
- Keep fallback tax rules configured

**For growth**

- Use one Stripe account across storefronts when possible
- Separate Stripe accounts if legal entities differ

Commerce Cloud acts as the **execution layer**, while Stripe handles the **tax intelligence**.

By combining **Commerce Cloud’s storefront control** with **Stripe’s tax expertise**, merchants get a reliable, future-proof tax solution that works quietly in the background—so you can focus on growing your business.