---
title: "eBay Business Policies"
articleID: 1079
category: "Ways to Sell on Neto > eBay > List your Products"
knowledgeBase: "Neto By Maropost"
---

# eBay Business Policies

Business Policies are used to save your preferences for payment, postage and returns in eBay. Once configured you can select saved policies on your listing rules templates instead of selecting postage, payment, and returns settings individually.

> **Note:** To learn more about business policies, refer to eBay's [comprehensive article](https://sellercentre.ebay.com.au/create-your-business-policies).

## Enable Business Policies

1. If you haven't already, log in to eBay and [create your postage, return, and payment policies](https://www.bizpolicy.ebay.com.au/businesspolicy/manage).
  Business policies can only be created and managed in your eBay account.
2. You can now [enable business policies in Neto](https://galaxy.maropost.com/kb/articles/1087-manage-your-ebay-integration#9).
  This process authorises Neto to see your business policies, and use them when listing or revising.

> **Warning:** Enabling business policies for an eBay account will permanently remove any existing shipping, payment and returns settings on the rules templates. If you decide to switch business policies off later, these settings will need to be reconfigured.

## Apply Business Policies to Listing Rules Templates

1. In your Neto control panel navigate to **eBay** > **Listing Rules Templates**.
2. Click on the **ID** of the template you wish to assign business policies to.
3. Click on the **Payments, Shipping & Returns** tab.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayBusinessPolicies.05T5g00000v5KmQEAU.png)

> **Important:** If you have a separate **Shipping** and **Payment & Returns** tabs, you need to [enable business policies in Neto](https://galaxy.maropost.com/kb/articles/1087-manage-your-ebay-integration#9).

4. Click the **Payment Policies** section.
5. Select a payment policy from the list available.
6. Click on the **Shipping Policies** section.
7. Select a Shipping policy from the available list.
8. Click on the **Return Policies section.**
9. Select a return policy from the available list.

> **Note:** Can't see the policy you want to apply? Click the **Download business policies** button to sync your policies in eBay to Neto.

10. Click the **Save Template** button.

## Troubleshooting

If you encounter any errors or issues in Neto with your business policies, please consult the common solutions below:

- **Why aren't the business policies I've just created appearing?**
  Click the Refresh my policies button and Neto  will download the latest list of policies.
- **I've refreshed my policies but I still can't see the policies I created**
  Check the error logs in eBay > Process Logs > Errors. Filter in the eBay Modules field: `BusinessPolicies`. If the error says the token is invalid, you can generate the token by following the steps in [this article.](https://galaxy.maropost.com/kb/articles/1087-manage-your-ebay-integration#3)
- **Error "Postage Rate table does not apply to this site"**
  This commonly occurs if your listing rules template was using a different shipping type to what you have in the Postage Policy.

  To fix this, you can go to eBay > Setup & Tools > Store Manager and disable Business Policies (temporarily). Open the listing rules template and set your "How do you charge for shipping?" to No Postage. Then go back to Store Manager, switch Business Policies back on and remap each of your policies.

> **Warning:** Turning off business policies and updating a listing rules template will remove your policy selections. When you turn them back on you must remap each Postage, Payment and Return policy for any rules template that was updated.

## Exclude Postage Locations with Business Policies

Business Policies are your saved preferences for payment, postage and returns options. You can create multiple policies for payments, postage and returns, and then select the policies you want to apply to each listing.

Business policies:

- help save time and reduce errors when creating and updating listings
- can be defined once for the different types of items you sell, then added to your listings with just a few clicks
- linked to a listing will be updated automatically if the policy is changed
- can be managed easily within My eBay
- can be applied when listing or revising an item.

For more information on business policies please refer to [eBay's business policies article here](https://sellercentre.ebay.com.au/create-your-business-policies).

### Enable Business Policies in eBay

To use business policies you must have an eBay seller account, and opt in to use them using [this link](http://www.bizpolicy.ebay.com.au/businesspolicy/policyoptin). You'll be directed to log into your eBay account to approve activation of business policies. If you already have business policies enabled, you'll instead see eBay's policy management page.

> **Important:** Upon opting‐in, it may take some time for the various default policies to be created.

### Enable Business Policies in Neto

Refer to the instructions [outlined in this article](https://galaxy.maropost.com/kb/articles/1087-manage-your-ebay-integration#9).

## Exclude postage locations

- Business policies allow you to exclude postage to certain locations domestically.
- Australia is divided into 15 regions; any one (or more) of which can be excluded in a postage policy.
- Policies can then be applied to as many listings as you choose. A list of the post code zones can be found [at the bottom of this page](http://pages.ebay.com.au/help/pay/shipping-costs.html).

> **Warning:** Cancelling a transaction because you will not deliver to the buyer's location will result in a defect. To avoid the defect, you must exclude all locations you will not post to. This will block buyers in those locations from buying your listings. Then, if a buyer asks you to deliver to a location you have excluded and you refuse, any defects you receive from that buyer qualify for removal.

By proactively excluding postage locations in this way, any defects received from buyers in excluded locations will be removed by eBay either automatically, or upon request.