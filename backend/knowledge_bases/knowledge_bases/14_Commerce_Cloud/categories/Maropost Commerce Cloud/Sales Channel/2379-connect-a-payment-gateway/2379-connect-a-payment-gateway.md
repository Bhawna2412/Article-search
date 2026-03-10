---
title: "Connect a Payment Gateway"
articleID: 2379
category: "Sales Channel"
knowledgeBase: "Commerce Cloud"
lastUpdated: 2026-01-20
---

# Connect a Payment Gateway

Connecting a payment gateway allows your customers to securely pay for their orders on your storefront. Commerce Cloud supports trusted payment providers that handle transactions, security, and payment processing, so you can focus on selling without worrying about technical setup.

The payment gateway acts as a secure intermediary between your customer's bank (or card) and your merchant account. It encrypts sensitive financial data (like credit card numbers) and handles the transfer, ensuring your store remains **PCI DSS compliant**. 

Since the provider handles the data, you avoid storing vulnerable information, significantly reducing your security risk and liability.

## Before You Begin

Make sure you have the following ready:

- Administrator or settings access to Commerce Cloud
- An active sales channel (website)
- An account with the payment provider you want to connect (for example, Stripe or PayPal)

> **Note:** **Note**: Payment gateways are connected per sales channel. If you manage multiple websites, you’ll need to configure payments for each one separately.

## Access Payment Settings

1. From the **Commerce Cloud Dashboard**, click **Sales Channel**.
2. You’ll see a list of all available sales channels.
3. Click the storefront where you want to connect the payment gateway  - For example: **Furniture Care**
    ![Image](https://media-cdn.atlassian.com/file/d8669ab5-1815-4149-b699-155dce231f71/image/cdn?allowAnimated=true&client=fc9ca6db-a9f5-4c39-bcc8-4f59a7959bcb&collection=contentId-5911773232&height=125&max-age=2592000&mode=full-fit&source=mediaCard&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmYzljYTZkYi1hOWY1LTRjMzktYmNjOC00ZjU5YTc5NTliY2IiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpjb2xsZWN0aW9uOmNvbnRlbnRJZC01OTExNzczMjMyIjpbInJlYWQiXX0sImV4cCI6MTc2ODk0ODMxNiwibmJmIjoxNzY4OTQ1NDM2LCJhYUlkIjoiNjM5OWE0MzBmMTM0MTM4YjVhNTEwNjU1IiwiaHR0cHM6Ly9pZC5hdGxhc3NpYW4uY29tL2FwcEFjY3JlZGl0ZWQiOmZhbHNlfQ.YksE5E-csCYpUxcLdYD9xfQCKJlz-TaWuiIn9XFUd3o&width=712)
4. Once inside the sales channel, use the left-hand navigation menu and click **Settings**.
5. Under Settings, select **Payments**.
  ![Untitled design (6).jpg](https://media-cdn.atlassian.com/file/26d22219-7256-4493-8edf-5651e728121a/image/cdn?allowAnimated=true&client=fc9ca6db-a9f5-4c39-bcc8-4f59a7959bcb&collection=contentId-5911773232&height=125&max-age=2592000&mode=full-fit&source=mediaCard&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmYzljYTZkYi1hOWY1LTRjMzktYmNjOC00ZjU5YTc5NTliY2IiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpjb2xsZWN0aW9uOmNvbnRlbnRJZC01OTExNzczMjMyIjpbInJlYWQiXX0sImV4cCI6MTc2ODk0ODMxNiwibmJmIjoxNzY4OTQ1NDM2LCJhYUlkIjoiNjM5OWE0MzBmMTM0MTM4YjVhNTEwNjU1IiwiaHR0cHM6Ly9pZC5hdGxhc3NpYW4uY29tL2FwcEFjY3JlZGl0ZWQiOmZhbHNlfQ.YksE5E-csCYpUxcLdYD9xfQCKJlz-TaWuiIn9XFUd3o&width=736)

You’ll now land on the Payments and Checkout configuration page.

## Available Payment Gateways

On the **Payments and Checkout** page, you’ll see the payment gateways currently supported by Commerce Cloud.

At present, available options include:

- **Stripe**
- **PayPal**

Each payment provider is listed with its current connection status.

## Connecting Stripe

Stripe is a popular payment gateway that allows you to accept credit cards and other payment methods securely.

To connect Stripe:

1. Locate **Stripe** in the payment gateways list.
2. Click **Connect**.
  ![Image](https://media-cdn.atlassian.com/file/fd9ce476-47e1-4d12-8469-1e37b6e803b6/image/cdn?allowAnimated=true&client=fc9ca6db-a9f5-4c39-bcc8-4f59a7959bcb&collection=contentId-5911773232&height=125&max-age=2592000&mode=full-fit&source=mediaCard&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmYzljYTZkYi1hOWY1LTRjMzktYmNjOC00ZjU5YTc5NTliY2IiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpjb2xsZWN0aW9uOmNvbnRlbnRJZC01OTExNzczMjMyIjpbInJlYWQiXX0sImV4cCI6MTc2ODk0ODMxNiwibmJmIjoxNzY4OTQ1NDM2LCJhYUlkIjoiNjM5OWE0MzBmMTM0MTM4YjVhNTEwNjU1IiwiaHR0cHM6Ly9pZC5hdGxhc3NpYW4uY29tL2FwcEFjY3JlZGl0ZWQiOmZhbHNlfQ.YksE5E-csCYpUxcLdYD9xfQCKJlz-TaWuiIn9XFUd3o&width=736)
3. One the Stripe page, click on Connect
  ![Image](https://media-cdn.atlassian.com/file/1690472b-8d5e-433d-a3c5-eaf9999f317a/image/cdn?allowAnimated=true&client=fc9ca6db-a9f5-4c39-bcc8-4f59a7959bcb&collection=contentId-5911773232&height=125&max-age=2592000&mode=full-fit&source=mediaCard&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmYzljYTZkYi1hOWY1LTRjMzktYmNjOC00ZjU5YTc5NTliY2IiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpjb2xsZWN0aW9uOmNvbnRlbnRJZC01OTExNzczMjMyIjpbInJlYWQiXX0sImV4cCI6MTc2ODk0ODMxNiwibmJmIjoxNzY4OTQ1NDM2LCJhYUlkIjoiNjM5OWE0MzBmMTM0MTM4YjVhNTEwNjU1IiwiaHR0cHM6Ly9pZC5hdGxhc3NpYW4uY29tL2FwcEFjY3JlZGl0ZWQiOmZhbHNlfQ.YksE5E-csCYpUxcLdYD9xfQCKJlz-TaWuiIn9XFUd3o&width=736)
4. You’ll be redirected to Stripe’s secure onboarding flow.
5. Log in to your Stripe account (or create one if you don’t already have it).
  ![Image](https://media-cdn.atlassian.com/file/efa4ee19-b743-40cd-8cd5-e8a149617d33/image/cdn?allowAnimated=true&client=fc9ca6db-a9f5-4c39-bcc8-4f59a7959bcb&collection=contentId-5911773232&height=125&max-age=2592000&mode=full-fit&source=mediaCard&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmYzljYTZkYi1hOWY1LTRjMzktYmNjOC00ZjU5YTc5NTliY2IiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpjb2xsZWN0aW9uOmNvbnRlbnRJZC01OTExNzczMjMyIjpbInJlYWQiXX0sImV4cCI6MTc2ODk0ODMxNiwibmJmIjoxNzY4OTQ1NDM2LCJhYUlkIjoiNjM5OWE0MzBmMTM0MTM4YjVhNTEwNjU1IiwiaHR0cHM6Ly9pZC5hdGxhc3NpYW4uY29tL2FwcEFjY3JlZGl0ZWQiOmZhbHNlfQ.YksE5E-csCYpUxcLdYD9xfQCKJlz-TaWuiIn9XFUd3o&width=736)
6. **Authorize Connection:** Stripe will display a screen summarizing the specific permissions that Commerce Cloud is requesting (e.g., the ability to create charges, view transaction history, and manage customer tokens).
7. Once authorization is complete,Stripe will redirect you back to your Commerce Cloud dashboard

Once completed, Stripe will be successfully connected to your website. You’ll see the status update to confirm the connection.

![Image](https://media-cdn.atlassian.com/file/acba8dd6-c6e2-45fa-a2db-0b1eac906a91/image/cdn?allowAnimated=true&client=fc9ca6db-a9f5-4c39-bcc8-4f59a7959bcb&collection=contentId-5911773232&height=125&max-age=2592000&mode=full-fit&source=mediaCard&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmYzljYTZkYi1hOWY1LTRjMzktYmNjOC00ZjU5YTc5NTliY2IiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpjb2xsZWN0aW9uOmNvbnRlbnRJZC01OTExNzczMjMyIjpbInJlYWQiXX0sImV4cCI6MTc2ODk0ODMxNiwibmJmIjoxNzY4OTQ1NDM2LCJhYUlkIjoiNjM5OWE0MzBmMTM0MTM4YjVhNTEwNjU1IiwiaHR0cHM6Ly9pZC5hdGxhc3NpYW4uY29tL2FwcEFjY3JlZGl0ZWQiOmZhbHNlfQ.YksE5E-csCYpUxcLdYD9xfQCKJlz-TaWuiIn9XFUd3o&width=760)

## Payment Methods in Stripe

Once Stripe is connected to your store, you’ll see a list of **payment methods available through your Stripe account**. These payment methods determine **how customers can pay during checkout**.

Each payment method is managed by Stripe but controlled and surfaced inside Commerce Cloud for your storefront.

### Stripe Card Payments

**Stripe Card Payment** allows customers to pay using standard credit and debit cards, such as:

- Visa
- Mastercard
- American Express

This is the most commonly used payment option and is enabled by default when you connect Stripe.

### Buy Now, Pay Later (BNPL) Options (Klarna, Afterpay)

Stripe also supports **Buy Now, Pay Later (BNPL)** payment options, such as:

- **Klarna**
- **Afterpay**

These options allow customers to:

- Split payments into installments
- Pay over time instead of upfront
- Increase purchase confidence for higher-value orders

From a merchant perspective, **you still receive the full payment upfront**, while the BNPL provider handles installment collection with the customer.

### How BNPL Payment Types Work in Commerce Cloud

- These payment methods appear automatically **only if they are enabled in your Stripe account**
- Commerce Cloud does not require additional setup beyond Stripe
- Availability depends on:  - Customer location
  - Order value
  - Stripe eligibility rules

If eligible, the BNPL option appears at checkout automatically.

### Payment Method Status

Each payment method has a **status indicator**:

- **Active** – The payment method is enabled and available to customers
- **Inactive** – The payment method is connected but currently unavailable

You can edit or manage individual payment methods using the **Edit (✏️) icon**, which redirects you to Stripe for configuration.

## Configuring Klarna or Afterpay in Commerce Cloud

When you click **Edit** on Klarna or Afterpay, you’ll see configuration options that control **when and how** these payment methods are offered.

### Configuration Fields Explained

#### Surcharge (%)

- Adds an extra percentage fee when this payment method is used.
- Useful if BNPL fees are higher and you want to offset the cost.

**Example:**
A 2% surcharge on a $500 Klarna order adds $10 to the total.

> **Note:** **Note**: Some regions restrict surcharges. Always verify local regulations before enabling. 

## Connecting PayPal

PayPal allows customers to pay using their PayPal balance, linked bank accounts, or cards.

To connect PayPal:

1. Locate **PayPal** in the payment gateways list.
2. Click **Connect**.
  ![Image](https://media-cdn.atlassian.com/file/fe5712b4-8a12-41ad-899f-a4e294b42a0f/image/cdn?allowAnimated=true&client=fc9ca6db-a9f5-4c39-bcc8-4f59a7959bcb&collection=contentId-5911773232&height=125&max-age=2592000&mode=full-fit&source=mediaCard&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmYzljYTZkYi1hOWY1LTRjMzktYmNjOC00ZjU5YTc5NTliY2IiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpjb2xsZWN0aW9uOmNvbnRlbnRJZC01OTExNzczMjMyIjpbInJlYWQiXX0sImV4cCI6MTc2ODk0ODMxNiwibmJmIjoxNzY4OTQ1NDM2LCJhYUlkIjoiNjM5OWE0MzBmMTM0MTM4YjVhNTEwNjU1IiwiaHR0cHM6Ly9pZC5hdGxhc3NpYW4uY29tL2FwcEFjY3JlZGl0ZWQiOmZhbHNlfQ.YksE5E-csCYpUxcLdYD9xfQCKJlz-TaWuiIn9XFUd3o&width=736)
3. One the PayPal page, click on Connect
  ![Image](https://media-cdn.atlassian.com/file/56351636-5974-4664-b7e2-f0eb44dca81d/image/cdn?allowAnimated=true&client=fc9ca6db-a9f5-4c39-bcc8-4f59a7959bcb&collection=contentId-5911773232&height=125&max-age=2592000&mode=full-fit&source=mediaCard&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmYzljYTZkYi1hOWY1LTRjMzktYmNjOC00ZjU5YTc5NTliY2IiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpjb2xsZWN0aW9uOmNvbnRlbnRJZC01OTExNzczMjMyIjpbInJlYWQiXX0sImV4cCI6MTc2ODk0ODMxNiwibmJmIjoxNzY4OTQ1NDM2LCJhYUlkIjoiNjM5OWE0MzBmMTM0MTM4YjVhNTEwNjU1IiwiaHR0cHM6Ly9pZC5hdGxhc3NpYW4uY29tL2FwcEFjY3JlZGl0ZWQiOmZhbHNlfQ.YksE5E-csCYpUxcLdYD9xfQCKJlz-TaWuiIn9XFUd3o&width=736)
4. Log in to your PayPal business account when prompted.

A verified Business Account is required to accept live payments.

1. Enter your Account credentials to connect your Paypal Account.
  ![Untitled design (3).jpg](https://media-cdn.atlassian.com/file/17247560-2fad-4c90-bfac-ec9bf7350d61/image/cdn?allowAnimated=true&client=fc9ca6db-a9f5-4c39-bcc8-4f59a7959bcb&collection=contentId-5911773232&height=125&max-age=2592000&mode=full-fit&source=mediaCard&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmYzljYTZkYi1hOWY1LTRjMzktYmNjOC00ZjU5YTc5NTliY2IiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpjb2xsZWN0aW9uOmNvbnRlbnRJZC01OTExNzczMjMyIjpbInJlYWQiXX0sImV4cCI6MTc2ODk0ODMxNiwibmJmIjoxNzY4OTQ1NDM2LCJhYUlkIjoiNjM5OWE0MzBmMTM0MTM4YjVhNTEwNjU1IiwiaHR0cHM6Ly9pZC5hdGxhc3NpYW4uY29tL2FwcEFjY3JlZGl0ZWQiOmZhbHNlfQ.YksE5E-csCYpUxcLdYD9xfQCKJlz-TaWuiIn9XFUd3o&width=736)
2. After connected, you will be redirected to a confirmation screen.
  ![Untitled design (5).jpg](https://media-cdn.atlassian.com/file/2cbf4277-6373-4817-a919-f5a1f2cc0447/image/cdn?allowAnimated=true&client=fc9ca6db-a9f5-4c39-bcc8-4f59a7959bcb&collection=contentId-5911773232&height=125&max-age=2592000&mode=full-fit&source=mediaCard&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmYzljYTZkYi1hOWY1LTRjMzktYmNjOC00ZjU5YTc5NTliY2IiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpjb2xsZWN0aW9uOmNvbnRlbnRJZC01OTExNzczMjMyIjpbInJlYWQiXX0sImV4cCI6MTc2ODk0ODMxNiwibmJmIjoxNzY4OTQ1NDM2LCJhYUlkIjoiNjM5OWE0MzBmMTM0MTM4YjVhNTEwNjU1IiwiaHR0cHM6Ly9pZC5hdGxhc3NpYW4uY29tL2FwcEFjY3JlZGl0ZWQiOmZhbHNlfQ.YksE5E-csCYpUxcLdYD9xfQCKJlz-TaWuiIn9XFUd3o&width=736)
3. Once completed, PayPal will be successfully connected to your website. You’ll see the status as Connected on Payments Page.
  ![Image](https://media-cdn.atlassian.com/file/fcaa2a1e-6f5e-43cb-bf1d-c58a78f56b9f/image/cdn?allowAnimated=true&client=fc9ca6db-a9f5-4c39-bcc8-4f59a7959bcb&collection=contentId-5911773232&height=125&max-age=2592000&mode=full-fit&source=mediaCard&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmYzljYTZkYi1hOWY1LTRjMzktYmNjOC00ZjU5YTc5NTliY2IiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpjb2xsZWN0aW9uOmNvbnRlbnRJZC01OTExNzczMjMyIjpbInJlYWQiXX0sImV4cCI6MTc2ODk0ODMxNiwibmJmIjoxNzY4OTQ1NDM2LCJhYUlkIjoiNjM5OWE0MzBmMTM0MTM4YjVhNTEwNjU1IiwiaHR0cHM6Ly9pZC5hdGxhc3NpYW4uY29tL2FwcEFjY3JlZGl0ZWQiOmZhbHNlfQ.YksE5E-csCYpUxcLdYD9xfQCKJlz-TaWuiIn9XFUd3o&width=736)

## PayPal Payment Options in Commerce Cloud

When connecting **PayPal** as a payment gateway, Commerce Cloud supports two primary payment experiences:

- **PayPal Card Payments**
- **PayPal Checkout**

Each option serves a slightly different purpose and customer behavior, and merchants can enable one or both depending on their checkout strategy.

### **PayPal Card Payments: **

Allow customers to pay using their **credit or debit cards directly at checkout**, without needing a PayPal account.

### **PayPal Checkout: **

Allow customers to pay using their **PayPal wallet**, saved cards, bank accounts, or PayPal balance.

#### How It Works

- Customers click the **PayPal Checkout button** during checkout.
- They are redirected to PayPal to log in and confirm payment.
- After confirmation, they are returned to your storefront to complete the order.