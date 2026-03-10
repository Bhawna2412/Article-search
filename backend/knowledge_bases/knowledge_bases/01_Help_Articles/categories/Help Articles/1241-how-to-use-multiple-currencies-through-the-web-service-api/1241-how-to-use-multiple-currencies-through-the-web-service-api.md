---
title: "How to use multiple currencies through the Web Service API"
articleID: 1241
knowledgeBase: "Help Articles"
lastUpdated: 2023-06-01
---

# How to use multiple currencies through the Web Service API

# How to use multiple currencies through the Web Service API

It is entirely possible to run a single Web Store that displays different pricing based off the currency the customer selects, and it simply requires you to have separate outlets in Retail Express with different currencies assigned.

You can do this by setting up the different currencies in Retail Express via the [Country Setup](https://galaxy.maropost.com/s/article/Country-Configuration) section, and then [assigning the Outlets to the Country](https://galaxy.maropost.com/s/article/Settings-Using-Regions-to-group-Outlets) you have set up.

For example, if you want to sell in both AUD and USD, you need to have at least one outlet using AUD and one outlet using USD.

Once done, you then need to update the outlet specific pricing in those Outlets to be the outlet's local currency price. For example, if you have a product that sells for $99 AUD and $75 USD, you need to make the price $99 in the Australian outlet and $75 is the US outlet.

When you have the Outlets and products set up, you then need to set up a Sales Channel for each Outlet (I.e. channel 1 for $AUD and channel 2 for $USD). You can even connect the Sales Channels to the same Source Groups, which means that while the price will be different both of the Sales Channels will be getting stock from the same locations, and so will have the same stock levels.

After that it is up to the developers to set up the Web Store to retrieve and store the information based off the currency selected.

What they will probably need to do is store the $AUD pricing and the $USD pricing in separate tables on the Web Store's database, and each night run 2 product synchronisations (one for Channel 1 and one for Channel 2) to get the $AUD and $USD prices on mass separately.

Then when customers are browsing the site they will need to be prompted to select their currency and all of the on demand methods that are used while they are browsing (I.e. to update price and stock, to create an order, etc.) will need to use the channel for the currency they have specified.