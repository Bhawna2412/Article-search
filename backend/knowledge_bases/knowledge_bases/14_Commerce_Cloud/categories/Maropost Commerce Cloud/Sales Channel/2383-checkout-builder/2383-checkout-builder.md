---
title: "Checkout Builder"
articleID: 2383
category: "Sales Channel"
knowledgeBase: "Commerce Cloud"
lastUpdated: 2026-01-26
---

# Checkout Builder

Checkout Builder allows you to **design, structure, and customize your checkout flow** to create a smooth and conversion-friendly experience for customers. Using Checkout Builder, you can control the layout, order, and visibility of checkout elements across all checkout steps.

A well-designed checkout helps reduce friction, builds trust, and improves completion rates.

## To access,

1. Go to **Back Office**
2. Click **Sales Channels**
  ![image.png](https://us.v-cdn.net/6038474/uploads/VOF5D4M0JIYU/image.png)
3. Select the sales channel you want to configure
4. Go to **Settings**
5. Click **Payments**
  ![image.png](https://us.v-cdn.net/6038474/uploads/8V6W2QVVQZ3S/image.png)
6. Select **Checkout Builder**
  ![image.png](https://us.v-cdn.net/6038474/uploads/HA1O71UBK1GC/image.png)

This opens the Checkout Builder interface, where you can design how your checkout pages look and behave.

## Understanding the Checkout Flow

Checkout Builder is structured into **three core checkout steps**:

1. **Customer Details**
2. **Delivery Details**
3. **Payment Method**

![image.png](https://us.v-cdn.net/6038474/uploads/4VM0F3H6L84Q/image.png)
Each step represents a page in the checkout journey and can be customized independently. At the top of the builder, you can switch between these steps to design each page individually.

## Common Layout Structure (Layers Panel)

Each checkout step follows a **layer-based structure**, shown on the left side of the screen. These layers control how content is stacked and displayed.

![image.png](https://us.v-cdn.net/6038474/uploads/UWO1NDWUBBKS/image.png)

## Common Layers Across Checkout Pages

- **Background**
Controls the overall background styling of the checkout page.
- **Header** (if enabled)
Displays branding or navigation elements.
- **Express Checkout**
Displays express payment options (such as accelerated checkout methods), allowing customers to skip standard checkout steps.
- **Timeline**
Shows the checkout progress indicator (Customer Details → Delivery → Payment).
- **Order Summary**
Displays cart items, prices, discounts, and totals.

Each page then includes **page-specific layers**, explained below.

## Customer Details Page

The **Customer Details** page is the first step in the checkout flow and plays a critical role in setting the tone for the customer’s purchase journey. This is where customers provide their essential contact and address information before moving on to delivery and payment.

In the **Checkout Builder**, this page is customizable using the **Layers** panel on the left. Each layer controls a specific part of the checkout experience, allowing merchants to design a layout that aligns with their brand and customer expectations.

### Layers Available on the Customer Details Page

#### Background

The **Background** layer allows you to control the overall look and feel of the page. You can define background colors, spacing, and visual consistency so the checkout experience matches your storefront branding. This ensures the checkout does not feel disconnected from the rest of your site.

![image.png](https://us.v-cdn.net/6038474/uploads/63370WEBE6O2/image.png)

#### Express Checkout

The **Express Checkout** layer lets you enable fast checkout options such as:

- PayPal
- Apple Pay
- Google Pay (via PayPal)

When enabled, these options appear at the top of the checkout page, allowing returning or wallet-enabled customers to skip manual form entry. This is especially useful for mobile users and can significantly reduce checkout abandonment.

You can toggle these options on or off depending on which express payment methods you support.

#### Timeline

The **Timeline** visually guides customers through the checkout steps:

1. Contact Details
2. Delivery Method
3. Payment Method

This progress indicator helps customers understand where they are in the checkout process and how many steps remain, reducing uncertainty and improving completion rates. The Timeline layer can be shown or hidden and styled to fit your checkout design.

#### Customer Details

The **Customer Details** layer controls all form elements related to customer information. This includes:

- Sign-in button for returning customers
- Email and email confirmation fields
- Delivery address fields (name, phone number, address, country, postcode, etc.)
- Billing address options (including “Billing address same as shipping address”)
- Newsletter opt-in (if enabled)
- Continue button to move to the next step

Each of these components can be configured individually, allowing you to decide what information is required, optional, or hidden based on your business needs and regional requirements.

![image.png](https://us.v-cdn.net/6038474/uploads/5XX516ZJ1282/image.png)

#### Order Summary

The **Order Summary** layer displays a real-time summary of the customer’s cart alongside the form. This includes:

- Products in the cart
- Item quantities and prices
- Discounts
- Shipping charges
- Taxes
- Final total

You can also configure options such as:

- Showing or hiding the discount code field
- Customizing tax labels
- Defining the currency symbol

Keeping the Order Summary visible helps customers review their purchase without leaving the checkout, reducing last-minute drop-offs.

### Page Layout and Preview Options

The Customer Details page follows a clear, structured layout:

- Customer information form on the left
- Order summary on the right
- Express checkout options at the top (if enabled)
- Progress timeline displayed prominently

On the top-right of the Checkout Builder, you can preview how this page appears on:

- Mobile
- Tablet
- Desktop

This ensures your checkout is responsive and optimized across all devices. Any changes made in the builder can be reviewed instantly in preview mode.

![image.png](https://us.v-cdn.net/6038474/uploads/12CXGEK9I82I/image.png)

### Saving Your Changes

Once you’ve customized the Customer Details page, click **Save** to apply your changes. These updates will reflect immediately in your live checkout experience.

![image.png](https://us.v-cdn.net/6038474/uploads/551O7OZU6MKL/image.png)

## Delivery Details Page

The **Delivery Details** page is the second step in the checkout flow and plays a critical role in setting customer expectations around shipping, delivery preferences, and order handling. This page allows merchants to control how delivery options are presented, what additional delivery-related inputs are collected, and how much flexibility customers have during checkout.

Just like the Customer Details page, the Delivery Details page is built using **layers**, allowing you to customize both functionality and layout without affecting the rest of the checkout experience.

### Layout Overview

On this page, customers can:

- Review their **delivery and billing address**
- Select a **delivery method**
- Provide optional delivery-related information
- View the **Order Summary** alongside delivery choices

The page layout remains consistent with the overall checkout flow, ensuring a smooth transition from Customer Details to Payment Method.

## Layers Available in Delivery Details

### Background

This layer allows you to define the overall visual styling of the Delivery Details page, such as background color or visual consistency with the rest of your checkout.

### Express Checkout

If enabled, express payment options (such as PayPal, Apple Pay, or Google Pay) appear at the top of the page, allowing customers to skip manual delivery selections when supported by the payment provider.

### Timeline

The timeline visually highlights where the customer is in the checkout journey:

- Contact Details (completed)
- **Delivery Method (active)**
- Payment Method (upcoming)

This helps customers understand progress and reduces drop-offs.

## Delivery Methods

The **Delivery Methods** layer controls how shipping options are displayed and prioritized.

### Delivery Sorting Order

You can define how delivery methods are ordered:

- **None** – Uses the default order configured in your store
- **Price: Low to High** – Displays cheaper shipping options first
- **Price: High to Low** – Displays premium delivery options first

This is especially useful when offering multiple shipping tiers.

### Free Shipping Label

You can highlight free shipping options by:

- Enabling **Show label for free shipping methods**
- Defining custom label text (for example: `FREE`)

This helps free shipping stand out and can positively influence conversion.

![image.png](https://us.v-cdn.net/6038474/uploads/Q6NI2HS29H8X/image.png)

### Continue Button

This layer allows you to control how customers move from Delivery Details to the Payment Method step, ensuring consistent call-to-action placement and behavior.

## Delivery Options

Delivery Options allow you to collect additional information or enforce delivery requirements.

### Signature Checkbox

You can enable a **signature requirement** option, allowing customers to confirm whether a delivery signature is required.
A toggle lets you define whether signatures are required by default.

![image.png](https://us.v-cdn.net/6038474/uploads/DQUR0G03UBVG/image.png)

### Purchase Order Number

This option allows customers to enter a **Purchase Order (PO) number** during checkout.
You can toggle this field on or off depending on whether PO numbers are relevant to your business or customer type.

![image.png](https://us.v-cdn.net/6038474/uploads/A0WE2VRWS9QU/image.png)

### Delivery Instructions

This section gives customers space to add special delivery notes.

Available options include:

- **Enable Delivery Instructions** – Shows the delivery instructions field
- **Instructions Required** – Makes the field mandatory
- **Help Text** – Allows you to guide customers on what to enter (for example, “Add gate code or delivery notes”)

This is particularly useful for reducing failed deliveries or customer support follow-ups.

![image.png](https://us.v-cdn.net/6038474/uploads/IXH68MRRIY3U/image.png)

## Order Summary

The **Order Summary** layer remains visible on the right-hand side, giving customers a clear view of:

- Products in the cart
- Shipping costs
- Discounts
- Taxes
- Final total

You can also control discount code visibility and tax labeling from this section, ensuring transparency throughout checkout.

The **Payment Method** page is the final step of the checkout flow, where customers choose how they want to pay for their order. This page is critical because it directly impacts checkout completion and conversion rates. 

In Checkout Builder, the Payment Method page is configurable using layers, allowing merchants to control which payment options appear, how they are displayed, and how the page looks across devices.

## Layout Overview

On this page, customers can:

- Review their **contact and delivery details**
- Confirm the selected **delivery method**
- Choose a **payment method**
- View the final **Order Summary** before completing checkout

The timeline at the top clearly shows that the customer has reached **Step 3: Payment Method**, reinforcing progress and reducing uncertainty.

## Layers Available in Payment Method

### Background

This layer controls the visual styling of the payment page, ensuring consistency with the rest of your checkout design.

### Express Checkout

If enabled, express payment options appear at the top of the page, allowing customers to pay faster using supported wallets or accelerated checkout methods.

### Timeline

The timeline highlights:

- Contact Details (completed)
- Delivery Method (completed)
- **Payment Method (active)**

This reassures customers that they are at the final step before placing the order.

## Payment Methods

The **Payment Methods** layer is where you manage all available payment options for your store. Within the **Payment Methods** configuration, you’ll also find a **Terms & Conditions** setting in the right-hand panel. 

This option allows you to control whether customers must explicitly agree to your store’s terms before completing their payment.

**Available Options**

- **Off**
Customers can proceed with payment without being required to accept the terms and conditions during checkout.
- 
  ![image.png](https://us.v-cdn.net/6038474/uploads/RDJJN0RQP3YT/image.png)

### Stripe Card Payment

Stripe Card Payment appears as the primary configurable option when Stripe is connected to your account. You can customize how this payment method is presented to customers, ensuring a seamless and secure card payment experience.

![image.png](https://us.v-cdn.net/6038474/uploads/UMMSWV7N2PRP/image.png)

### Other Payment Methods

Additional payment methods—such as PayPal, Klarna, Afterpay, Zip, or other supported providers—are listed in this section based on your account setup.

- **Active & Connected Methods**
Payment methods that are successfully connected to your account appear as selectable and configurable options.
- **Inactive or Unconnected Methods**
Payment methods that are not connected or activated appear **greyed out**. These options are visible in Checkout Builder for reference but cannot be configured or shown to customers until they are connected.

This makes it easy to understand which payment options are currently available and which ones require setup before use.

### Order Summary

The **Order Summary** layer remains visible alongside payment options, allowing customers to:

- Review items in their cart
- See discounts, taxes, and shipping charges
- Confirm the final payable amount

This transparency helps customers feel confident before completing payment.

## Saving and Previewing Changes

As with other checkout pages:

1. Use the **device preview options** (mobile, tablet, desktop) to see how payment methods appear across screens
2. Click **Save** to apply your changes

Once saved, these settings control how payment options are displayed to customers during checkout.

## Previewing Your Checkout Design

On the right side of Checkout Builder, you can preview your checkout design across different devices:

- **Desktop**
- **Tablet**
- **Mobile**

This ensures your checkout looks and works well across all screen sizes.

You can switch between device views at any time while editing.

## Saving Your Changes

Once you’ve finished customizing the checkout layout across **Customer Details**, **Delivery Details**, and **Payment Method**, make sure to save your changes.

To do this, click **Save** in the top-right corner of the Checkout Builder.

![image.png](https://us.v-cdn.net/6038474/uploads/AAKNS8TSS9V3/image.png)
After saving, a confirmation notification appears at the bottom of the screen, indicating that your updates have been applied successfully.

![image.png](https://us.v-cdn.net/6038474/uploads/7UB7F6KM4RGW/image.png)