---
title: "ShipStation"
articleID: 60
category: "Third Party Integrations"
knowledgeBase: "Merchandising Cloud"
---

# ShipStation

Understanding tracking and analytics solutions helps you measure the effectiveness of your merchandising and search implementations. When you properly track purchase attribution and customer interactions, you gain insights that enable better optimization decisions, which helps improve conversion rates through data-driven refinements to your product discovery and merchandising strategies.

Proper tracking implementation enables you to understand how search and merchandising features impact business outcomes. This helps you make informed optimization decisions and demonstrate ROI, supporting continuous improvement of conversion performance through measurement-driven insights about customer behavior and feature effectiveness.

## **#Background**

We add a tag to the purchases to track the details of purchases. This is done for two reasons:

We use this information to power our machine learning algorithms, which are the core of our service. This data allows us to automatically identify behavior trends, dynamically change the order of the search results, and create recommendations.

1. This data is also used to determine which purchases are made via Findify, and more importantly, which were not. This data is then used in our analytics dashboard, to give you a better view of Findify's ROI.

## **# The issue**

In some cases, on sites that use Shipstation, certain customers might see the Findify tracking tags on the shipping slip.

In the Shipstation dashboard, it looks as if every order has a customer note in it, as the Findify tracking tags are treated as a customer note by Shipstation

## Solution

In ShipStation you can create a rule that assigns a colored tag if the note starts with "gift-note", "gift-wrapping", or any other structure you use for customer notes in Shipstation. Then simply sort by colored tags so the Findify code doesn't get in the way, and you can quickly see the orders with the customer notes.