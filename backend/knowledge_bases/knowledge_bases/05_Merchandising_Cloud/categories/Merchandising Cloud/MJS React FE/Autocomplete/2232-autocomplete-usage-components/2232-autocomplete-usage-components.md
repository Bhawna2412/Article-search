---
title: "Autocomplete: Usage & Components"
articleID: 2232
category: "MJS React FE > Autocomplete"
knowledgeBase: "Merchandising Cloud"
---

# Autocomplete: Usage & Components

Understanding autocomplete components helps you optimize one of the most critical touchpoints in product discovery. When your autocomplete effectively combines trending searches, product suggestions, and search predictions, you can guide customers toward relevant products more quickly, which helps improve search-to-purchase conversion and reduces bounce rates from unsuccessful searches.

Autocomplete serves as a powerful tool to accelerate the customer journey by providing immediate guidance during product search. Well-implemented autocomplete with trending products and search suggestions helps customers find what they need faster, shortens the path to purchase, and tends to enhance overall conversion rates through better-guided product discovery.

![1824](https://files.readme.io/11ec574-Autocomplete_1_Fullscreen.gif)
*Full Screen Autocomplete with trending products/searches & suggestions.*

#1. The Value of a Great Autocomplete

Autocomplete suggestions have become extremely popular during the last five years and can today be found at 90% of major e-commerce sites *(****Source****: *[*Baymard Institute*](https://baymard.com/premium/topics/257)*, specialized in E-commerce UX research)*

The main purpose of the Autocomplete is to steer shoppers forward in the purchase journey. To inspire the types of queries to use, store specific terminology, avoid typos, assist in selecting the right scope to search within & positively push them forward.

A great Autocomplete makes overview easy, foster scannability, lower the visual noise & avoid complexities with scrollbars etc.

#2. Autocomplete Components

The autocomplete consists of four components, shown in two separated areas that transforms based on he shoppers behavior.

**Before the Shopper Interacts:**

- **Trending Searches:** Most popular queries used during the last 30 days.
- **Trending Products:** Most popular products during the last 30 days.

**Interpreting Shopper Interactions:**

As soon as the shopper starts typing, the trending suggestions transforms to in real-time match what the shopper is typing.

- **Search Suggestions:** Best matching queries based on popularity, correct spelling & fields made searchable in autocomplete.
- **Product Matches:** Best marching products based on popularity, correct spelling & fields made searchable in autocomplete.

![1982](https://files.readme.io/41f0bf4-Aucomplete_in_two_phases.png)
*First: Trending search terms & products. Then: Search Suggestions & Product Matches*

#3. Performance vs. Inspiration

The main purpose of product suggestions & matches is to guide the shopper forward by confirming that their query will yield relevant results. There are of course shoppers that leverage the suggestions to directly visit desired products but, in line with behavioral science theories, most shoppers prefer to first see the full results to thereafter funneling the results to select the most interesting products.

- i) So while large images are attractive to showcase the assortment, it is crucial to balance image sizes to keep performance high since large image files are the biggest source of load time. Ideal image quality depends on design, but 100x100 pixels with a web-optimized compression is more than enough for most cases.
- ii) It is also strongly advised to avoid front-end integration in the autocomplete. Both since additional components risk decreasing scannability & easy navigation, but mainly since external API calls will have a negative effect on performance.
- iii) While we make it possible to make any field in the feed searchable, our advice is not to maximize this capability for the autocomplete but carefully consider which input fields that are essential. We have built a separated functionality to swiftly populate the Autocomplete and while it's built for speed, additional input sources will add marginally to the load time.

#4. Implications for Mobile

For mobile, the fundamental requirement of the Autocomplete to simplify navigation becomes even more important. The limited screen size requires styling to maximize readability and ensure to reduce visual competition from external elements.

The limited "keyboard" size enhance the importance of trending searches & search suggestions. It is 26x times more common for the shopper to click on text rather than products, so product suggestions should either be skipped or shown secondary. Ideal is to avoid scrolling by reducing the number of suggestions (a range of 4-8 should work for most sites), or when scrolling is required clearly indicate that it's in place.

#5. Design Inspiration: Desktop

> Maropost Merchandising Cloud (formerly Findify) is built to offer maximal control of the frontend experience.Either through an API integration, building all assets from scratch, or by utilizing our prebuilt MJS library in React with endless opportunities to customize & reuse prebuilt modules (Read More).

## i) Autocomplete Module 1: Full Screen

![1824](https://files.readme.io/936ba2b-Autocomplete_1_Fullscreen.gif)
*Best Practice 1: Full Screen Autocomplete*

**Industry:** Ideal for inspiration driven categories such as fashion, beauty or lifestyle.
**Key Components:** Trending Searches/products & Search Suggestions/Product Matches.
**Requirements:** Image ration 1x1, Title & Price in the feed.[-> Link to Code & Detailed Instructions](https://developers.findify.io/docs/autocomplete_1_fullscreen)