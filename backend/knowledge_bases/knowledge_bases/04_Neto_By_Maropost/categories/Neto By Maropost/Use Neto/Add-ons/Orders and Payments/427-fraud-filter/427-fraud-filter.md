---
title: "Fraud Filter"
articleID: 427
category: "Use Neto > Add-ons > Orders and Payments"
knowledgeBase: "Neto By Maropost"
---

# Fraud Filter

![Fraud Filter 1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000QqfwhMAB.jpg)

### This add-on was built by Maropost

Add-ons and Integrations built in-house by Maropost are documented and supported by our customer service team. If you're having issues with this integration, [let us know](https://www.netohq.com/support/s/ask-us)!

## Overview

One of the risks associated with selling online is credit card fraud. Merchants are responsible for all credit card fraud conducted through their website. In most cases, banks can apply charge back fees and debit fraud money from your account without warning.

We recommend selecting a gateway provider with their own anti-fraud technology. We recommend using Stripe to accept credit cards as it includes 3D Secure. 3D Secure connects to the users local bank and asks them to enter a unique pin or enter a unique code sent by SMS.

![Fraud Filter 2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000QqgIKMAZ.jpg)
The next thing you can do to help reduce credit card fraud is registering for [Maxmind](http://www.maxmind.com) fraud prevention software. This service will help block fraudulent transactions and will assign each order a fraud score and summary.

**What does the fraud protection software actually do with an order?**

- Places risky orders on hold to be manually checked
- Creates a risk score to determine the likelihood of a fraudulent transaction
- Address checks
- Email address checking
- High risk IP address checks
- Proxy detection

To view the plans for Maxmind go [here](http://www.maxmind.com/en/ccv_buynow). Fraud insights starting from USD$25.00 per 5,000 queries is a small price to pay for protection. We suggest the **Insights **service.

## Gateway Compatibility

| Supported Gateway in Neto | Unsupported Gateway in Neto |
| --- | --- |
| Advam | Bartercard |
| Bendigo Bank | Stripe |
| Commonwealth Bank | Braintree |
| Merchant Warrior | Once Interest Free |
| NAB | Paymark Click |
| Paypal Payflow Pro | Paymark Eftpos |
| Paystream | ZipMoney |
| Payway | ZipPay |
| T24 | Afterpay |
| Westpac | Paypal Express |
|  | eWAY Rapid (deprecated) |
|  | eWAY |

## Set up the Fraud Filter Add-on

Before you install, you will need to create an account with [MaxMind](https://www.maxmind.com/en/purchase-minfraud-services). Plans start at USD $10 per month.

To configure your fraud protection:

1. In your Neto control panel navigate to **Addons** and locate **Fraud Filters** and press **Configure**.
2.   - Max mind user ID - provided when you register with Maxmind
  - Enter your **Max mind license key**
  - Fraud detection software: **Maxmind**
  - Activate fraud score on hold check: **ticked**.
  - Enable fraud score check for statement payments: **(Optional)**
  - Max mind request type: **(Insights Recommended)**
  - Hold order for new customers **(Unticked)**
  - Put all orders on hold **(Unticked)**
  - Hold order if grand total greater than: **$3000**

  Add your settings. We've outlined some recommended settings below.

> **Important:** We do not recommend changing the default fraud score settings in this area.

> **Note:** If you are still unsure, call your merchant facility provider to check the credit card used to process the order has not been reported as stolen since the order was placed. If time allows, wait a day or two before shipping the goods. There is a good chance that the credit card owner will notice fraudulent transactions and report their card as stolen within this time.