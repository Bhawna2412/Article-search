---
title: "Shopify Liquid FAQ"
articleID: 2227
category: "Shopify Liquid FE > What is Shopify Liquid_"
knowledgeBase: "Merchandising Cloud"
---

# Shopify Liquid FAQ

Understanding common questions about Shopify Liquid integration helps you make informed decisions about implementing search and merchandising features.

When you have clarity on technical requirements, limitations, and best practices, you can configure your ecommerce platform more effectively to support better product discovery and conversion optimization.

This FAQ guide addresses key considerations for implementing Merchandising Cloud with Shopify Liquid, helping you understand integration options, billing structure, and platform capabilities.

This enables you to plan implementations that align with your business needs while maximizing the value of your search and merchandising investment.

### Q: When will it be possible to integrate Maropost Merchandising Clooud (formerly Findify) using the Native Shopify App method?

*A: Today. The Liquid framework is live and can be accessed through our*[*App in Shopify App Store.*](https://apps.shopify.com/findify-search)

## Limitations

### Q: What are the rendering limitations with the native Shopify app integration?

*A: Shopify's render API allows us to render 20 products at a time. This means we can only show 20 products per pagination or lazy loading. This is in line with best practices in order to optimize site speed. The good news is that there is no limitation placed on the amount of paginated results (i.e. Shopify does not limit the total number of products, only the number of products shown at one time.)*

### Q: Is there any alternative to using the render API to manipulate results?

*A: There is no alternative method to translate or pass data from JavaScript to Liquid. Therefore, utilizing the Render API is necessary. Data can be passed through query string parameters, allowing Liquid to compile and return the response as HTML, which can then be injected.*

### Q: Can I directly call Shopify's API to interact with Merchandising Cloud?

*A: Direct API calls to Shopify are limited by Shopify. Instead, data must be passed as a string. It's important to note that the maximum character limit for this string is 10,240.*

## Billing

### Q: How do I select and enable a pricing plan?

*A: Each merchant needs to select the plan that best suits their own specific needs. Currently, three types of plans are available: Premium, Professional, and Enterprise.*

*Merchants who integrate with us via our Native Shopify App will be prompted to select a plan after downloading the app from the Shopify app store. Within the app, just click 'Register Now' and then 'Continue'. A new window will appear where merchants can compare plan features and select the plan they want to continue with. Click 'Select Plan', then 'Continue'.*

*Merchants will be billed monthly, from the day their plan starts. If, for example, a merchant activates a plan on the 16th of the month, they will then be billed on the 16th of every month going forward. If they activated a plan on the 22nd, they would be billed on the 22nd of every month etc.*

*Yearly plans are also available. Connect with *[*Support *](mailto:Yourfriends@Findify.io)*to discuss further.*

## General

### Q: What are the merchant advantages of using our new Native Shopify App?

*A: The benefits for Shopify merchants utilizing our new Native Shopify App are multifold.*

1. **Simplicity**: Merchants can swiftly onboard utilizing best-practice defaults in just minutes.
2. **Enablement**: Customizations can be effortlessly made in the native language known to any Shopify developer, enhancing adaptability and reducing the learning curve.
3. **Scalability**: The Liquid FE is dedicated solely for Shopify and, as such, components will be useful for multiple merchants. We are committed to the ongoing production of reusable components.
4. **Ecosystem**: Third-party integrations operate seamlessly and natively within Liquid, ensuring compatibility and flexibility within the Shopify ecosystem.
5. **Native Integration**: By seamlessly blending Shopify and Merchandising Cloud data, merchants benefit from a harmonized experience that leverages the strengths of both platforms.

### Q: Does this new integration method support the use of Shopify app blocks?

*A: Yes! App block and app components can be used.*

### Q: How do I manually trigger our Product Grid Fallback Mechanism?

*A: If, for any reason, you prefer to (or need to) temporarily hide Merchandising Cloud on collection or search pages, our Fallback Mechanism provides a simple two-step process for you to switch back to the Shopify product grid.*

*This feature is designed for flexibility and, while it's rarely needed, it offers a manual option for situations like working with manual collections not yet integrated into our system or when specific adjustments are required.*

![14968b0-Bildschirmfoto_2024-01-17_um_17.57.56.png](https://us.v-cdn.net/6038474/uploads/4IT2TCILZAK4/14968b0-bildschirmfoto-2024-01-17-um-17-57-56.png)
***Step 1:**** Within your Shopify dashboard, you will see 'Grid' under the Apps heading on the left hand side of the screen. Click on the 'eye' icon to hide this grid.*

***Step 2:**** Once the Grid has been disabled, you can then reenable Shopify's product grid for collection or search pages by clicking the 'eye' icon beside 'Product Grid'.*

![2c6035d-Hide.png](https://us.v-cdn.net/6038474/uploads/K6UNYWG24199/2c6035d-hide.png)

### Q: Can existing clients start using Liquid?

*A: Yes, existing clients can start using Liquid.*

*It is, however, recommended to test the changes in a development environment before launching in production. As with any significant change, thorough testing is crucial to ensure a smooth transition.*

*Additionally, existing clients should align with support to guarantee a smooth launch, especially those running on store version 6, as they will need to migrate to store version 7. This migration process involves syncing with support/integrations to update the version during the launch. It's recommended to work with a development store in Shopify during the development phase to keep running store version 6 on production while working with version 7 on development. For new clients, this process is not relevant as they will already be on version 7.*