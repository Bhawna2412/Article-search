---
title: "Advanced Shipping Options"
articleID: 1047
category: "Set up Neto > Shipping > Maintenance & Tweaks - Shipping"
knowledgeBase: "Neto By Maropost"
lastUpdated: 2026-01-13
---

# Advanced Shipping Options

**Advanced Shipping Options** cover sophisticated configuration tools for optimizing your shipping processes beyond standard settings. 

These tools enable you to fine-tune shipping calculations by incorporating fuel levies, tracking links, delivery schedules, and specialized rules for different customer groups and product categories, thereby providing the flexibility to create a shipping system that precisely aligns with your business needs and carrier requirements.

## Fuel Levy

Australian shipping carriers typically add fuel surcharges to base freight costs to offset variable fuel prices. You can configure these fuel levies in your Neto control panel to match your carrier's charges. This is particularly important when using carrier rates via API or manual rate tables, since fuel surcharges aren't automatically included in the system's shipping calculations.

You can query the current fuel levy rates from your carriers. Many carriers publish these rates publicly and update them monthly, such as:

- [**TNT**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.tnt.com%2Fexpress%2Fen_au%2Fsite%2Fhow-to%2Funderstand-fuel-surcharges.html)
- [**Australia Post eParcel**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fauspost.com.au%2Fbusiness%2Fshipping%2Fcheck-postage-costs%2Ffuel-surcharge)

To set up a fuel levy:

1. From your Control Panel account, navigate to **Settings & Tools** and click on **Shipping**.
  ![shiprate0.png](https://us.v-cdn.net/6038474/uploads/EHXPVWWUJ1WW/shiprate0.png)
2. Under the **Shipping** section, select **Shipping Options**.
  ![shiprate17.png](https://us.v-cdn.net/6038474/uploads/NJMNID0EERJ4/shiprate17.png)
3. Choose a shipping option from the list.
  ![shiprate19.png](https://us.v-cdn.net/6038474/uploads/3MI7PLB3Y7Y0/shiprate19.png)
4. Next, click on the service/rates link you wish to modify.
  ![shiprate18.png](https://us.v-cdn.net/6038474/uploads/CH3GC6CAI97Y/shiprate18.png)
5. Once configured, the fuel levy will be automatically applied to shipping costs throughout your website, including calculators, shopping carts, and the checkout process.
  ![shiprate20.png](https://us.v-cdn.net/6038474/uploads/VJVQWEHUDRSR/shiprate20.png)

## Add a Tracking Link

Neto includes pre-configured tracking links for many popular shipping carriers, making setup as simple as selecting your carrier from a dropdown menu. If your carrier isn't listed, choose "**Other**" and manually input the tracking URL using the provided tags to match your carrier's exact format.

1. From your Control Panel account, navigate to **Settings & Tools** and click on **Shipping**.
  ![shiprate0.png](https://us.v-cdn.net/6038474/uploads/Z5U2SU7LY93B/shiprate0.png)
2. Under the **Shipping** section, select **Shipping Options**.
  ![shiprate17.png](https://us.v-cdn.net/6038474/uploads/7B4RBNKGO5YZ/shiprate17.png)
3. Choose a shipping option from the list.
  ![shiprate19.png](https://us.v-cdn.net/6038474/uploads/17TN490JWXCH/shiprate19.png)
4. Next, click on the service/rates link where you wish to add a tracking URL.
  ![shiprate18.png](https://us.v-cdn.net/6038474/uploads/KSZVBKKJQ5PD/shiprate18.png)
5. In the Tracking URL field, either select your carrier from the dropdown menu or choose "**Other**" to manually enter the URL in the field below. When finished, click **Save & Close**.
  ![shiprate21.png](https://us.v-cdn.net/6038474/uploads/CL262CFX18GE/shiprate21.png)

## Hide a Shipping Option

If you are an eBay seller and use Neto's postage calculation in your listings, you can render the shipping option invisible to eBay shoppers. You can also conceal shipping options from your webstore and reserve them for manually placed purchases.

1. From your Control Panel account, navigate to **Settings & Tools** and click on **Shipping**.
  ![shiprate0.png](https://us.v-cdn.net/6038474/uploads/9MUPSSNLFA4D/shiprate0.png)
2. Under the **Shipping** section, select **Shipping Options**.
  ![shiprate17.png](https://us.v-cdn.net/6038474/uploads/ZFQ7UIYW0J1N/shiprate17.png)
3. On the shipping options index page, you can view which options are visible to the customer on the front-end webstore, visible on eBay, and visible to staff.
  ![shiprate22.png](https://us.v-cdn.net/6038474/uploads/YRN11MP6513A/shiprate22.png)
4. Click on the shipping option you wish to change to edit the visibility options.
  ![shiprate23.png](https://us.v-cdn.net/6038474/uploads/JORSMRS4H5WS/shiprate23.png)
5. Click on **Save** to update the changes made.

## Shipping Availability (Time and Days)

Here, you can adjust the times and days within a shipping option.

1. From your Control Panel account, navigate to **Settings & Tools** and click on **Shipping**.
  ![shiprate0.png](https://us.v-cdn.net/6038474/uploads/ZWCEKO2X24B3/shiprate0.png)
2. Under the **Shipping** section, select **Shipping Options**.
  ![shiprate17.png](https://us.v-cdn.net/6038474/uploads/S6KEVVFWWL21/shiprate17.png)
3. Choose a shipping option whose timing you wish to modify.
  ![shiprate19.png](https://us.v-cdn.net/6038474/uploads/YWXXZBRAV9EX/shiprate19.png)
4. Scroll down within the edit shipping option page and click on the **Shipping Option Delivery Availability** section. This section allows you to alter the settings for when specific options become available and are delivered.
  ![shiprate24.png](https://us.v-cdn.net/6038474/uploads/XPNRIRFC5BKT/shiprate24.png)

> **Important:** **Important:** These settings should not be modified from their default values unless you have specific delivery requirements, as incorrect configuration can prevent the customer from checking out.

### Delivery Options Explained

| Option | Description | Example |
| --- | --- | --- |
| Delivery Cut Off Time | Used to calculate the estimated delivery date. | If the delivery time is 3 days, but an order is placed after the delivery cutoff time, the estimate will display 4 days to account for the order being shipped the next day. |
| Available Delivery Days | Defines the days your shipping carrier delivers on. Changing this will alter the estimated delivery days displayed when calculating shipping. | Most carriers do not deliver on weekends. Configuring this option will help to provide your customers with accurate shipping times. |
| Shipping Carrier Can Pick Up On | Defines the days your shipping carrier picks up your goods. Defines the day your shipping carrier delivers on. Changing this will alter the estimated delivery days displayed when calculating shipping. | You may have a carrier that only picks up goods every 3 days or only once a week. Configuring this option will help to provide your customers with accurate shipping times. |
| Delivery is Only Available On | Defines the day or days on which delivery is available. | You may want to offer Valentine's Day shipping on Valentine's Day. You can set the specific date using this field, so when customers check out, they will only be able to select that date or a range of dates for delivery. |
| Delivery Not Available On | Defines the day or days on which delivery is not available. | If your shipping carrier does not deliver on public holidays, you can set those specific fields using this date. When customers check out, they will not be able to select that date or any other date within the specified delivery range. |
| Shipping Carrier Can Travel On | Defines the days on which your shipping carrier operates. | You may have a carrier that only travels on certain days of the week. Configuring this option will help to provide your customers with accurate shipping times. |
| Shipping Carrier Not Travel On | Defines the days on which your shipping carrier does not operate. | You may have a carrier that does not travel on certain dates or date ranges. Configuring this option will help to provide your customers with accurate shipping times. |

## Hide Authority to Leave on Shipping Labels

View the steps shown below on how to enable this option:

1. From your Control Panel account, navigate to **Settings & Tools** and click on **All Settings & Tools**.
  ![shiprate25.png](https://us.v-cdn.net/6038474/uploads/FDP49UOYIP11/shiprate25.png)
2. From the navigation menu, click on **Web Store** and select **Checkout Settings**.
  ![shiprate26.png](https://us.v-cdn.net/6038474/uploads/00P2FQUZG31D/shiprate26.png)
3. Under **Shipping Rules**, you can enable the **Hide authority to leave (signature required)** option. Click on **Save** to update the changes made.
  ![shiprate27.png](https://us.v-cdn.net/6038474/uploads/ISMCGDG3M4G4/shiprate27.png)

## Transit Insurance

Neto supports adding transit cover amounts to consignments. These options determine the default transit cover amount stated on consignment labels during the consignment creation process. They do not affect the shipping rate charged to the consumer.

![shiprate28.png](https://us.v-cdn.net/6038474/uploads/VI8FH0HK6WBR/shiprate28.png)
There are two methods to implement transit coverage:

- When the order subtotal exceeds or falls below “X”, add “X” percent of the item's selling price as shipping insurance on consignment labels.
- On consignment notes, add X percent of an eBay item's selling price as shipping insurance when the customer pays for it.

> **Note:** **Tip:** You can charge for insurance and pass the cost on to customers using the eParcel API rates.

## Other Settings

The following advanced shipping options can also be tweaked:

- This option is “X” when the order subtotal is over “X”
- Minimum Charge
- Maximum Charge
- Handling Cost
- Packing Allowance
- Round up to the Nearest kilogram
- Ignore Physical Weight
- Landed Cost Surcharge
- This option only applies to products in the categories defined above
- Price Groups/User Groups

### This option is “X” when the order Subtotal is over “X”

Neto allows you to adjust the final determined price of a delivery method using the following formula:

This method returns X when the order subtotal exceeds X.

![shiprate29.png](https://us.v-cdn.net/6038474/uploads/Y7NLLGJ9QPU4/shiprate29.png)
This enables you to accomplish objectives that include:

- When the order subtotal exceeds $50.00, this function returns 0.00.
- This is ideal for companies that provide free or discounted delivery based on order subtotals.

> **Important:** **Important:** Shipping option settings will override settings at the service and rates level.

### Minimum Charge

The minimum charge for this service, as outlined in the rates table, applies regardless of the specified rates.

### Maximum charge

The maximum amount that will be charged for this service, as well as the rates table, applies regardless of the specified rates.

### Handling Cost

The percentage or dollar value entered here will enhance Neto's computed shipping prices by this amount. If you enter 5% in this field, your estimated shipping costs will rise by 5%. Customers cannot see this charge calculation.

### Packing Allowance

This is used to add a buffer to the calculation of order weight for shipping charges. Entering 5% in this field increases the computed order weight by 5%. Customers cannot see this charge calculation.

### Round up to the Nearest kilogram

Checking the "**round up to the nearest kg**" checkbox instructs the system to round all orders up to the nearest kilogram. Uncheck this box if you want the system to calculate the exact weight of your order.

### Ignore Physical Weight

Checking the "ignore physical weight of product(s)" checkbox indicates that only cubic weight is considered.

### Landed Cost Surcharge

This is the additional cost the seller applies to a product to offset tariffs/taxes imposed by countries where the package is planned to be delivered. The surcharge costs are calculated as a percentage of the product's price, which can vary based on a country's current taxation rates. This means the surcharge scales appropriately with the item's value, i.e., higher-priced items naturally incur larger absolute surcharge amounts, reflecting the proportional increase in applicable taxes. 

Furthermore, this approach helps customers to understand the total cost upfront and allows merchants to adjust their pricing strategy dynamically as tax rates change across different markets.

![shiprate37.png](https://us.v-cdn.net/6038474/uploads/6XOO13E2FU8B/shiprate37.png)

### This method only applies to products in the categories defined above

Shipping categories are applied to products, allowing you to choose distinct shipping options for each one. To ensure that a method only appears in a given category, add the category and select the "**This approach is only applicable to products in the categories listed above the box**" checkbox. If you fail to select it, the method will apply to all categories.

### Price Groups/User Groups

Neto enables you to restrict delivery options to specific price/user groups. This can be useful if you wish to provide certain shipping options to select groups, such as:

- Regular
- VIP
- Wholesale
- eBay