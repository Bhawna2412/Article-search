---
title: "Architecture Overview"
articleID: 2290
category: "FAQ > General FAQ"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-09-18
---

# Architecture Overview

> 📘 Note
> We consider that the reader has some knowledge about Javascript frameworks such as [React.js](https://reactjs.org/docs/getting-started.html), Vue.js or Angular.js

> 🚧 Important
> In this article, the following examples use advanced JS features, like imports. In consequence, it is assumed that an appropriate environment is set up to support these examples (compilation via Babel/Webpack for instance).

## Introduction

The Merchandising Cloud Merchant JavaScript library (we will refer to it as "M.js" in the rest of this reference) is a multilayered library, consisting of a few abstraction layers, that you can leverage. Those layers are given below, from the lowest-level abstraction to the highest:

- **SDK**
- **Agents**
- **Providers + Connectors**
- **UI Components**

2 additional modules are present: **Analytics** and **Bundle**

## SDK

The SDK is a promise-based API that communicates with the Merchandising Cloud APIs.

It allows you to query our API using both POST & JSONP request methods, thus allowing it to work within both Node.js and browser.
To know more about the in-depths of the SDK, you can consult:

- Its source code, available on [Github](https://github.com/findify/findify-js)
- The reference [API documentation](https://findify.readme.io/v3/reference#js-sdk-search)

## Agents

Agents are a higher-level wrapper around Merchandising Cloud’s SDK. They provide an event-based interface to access data returned by the Merchandising Cloud APIs.

> 🚧 Attention
> Each Agent wraps the response from the Merchandising Cloud SDK into an Immutable.Map from the Immutable.js library. You can learn more about it [here](https://facebook.github.io/immutable-js/docs/#/).

Agents can be of several types:

- Search
- Autocomplete
- Recommendation
- Content
- Smart Collection

The agent types refer to the high-level features, offered by Merchandising Cloud.

**Search**: The Search agent works with the Merchandising Cloud Search API. For instance, this agent is used to display the search results in the M.js for your store. The search agent also provides some information about faceting, currently used filters and available ones, products, prices and variants, etc.

**Autocomplete**: The Autocomplete agent provides information about trending searches, product matches and suggestions.

**Recommendation**: The Recommendation agent is used to load products for the recommendation widgets. It allows the user to control the widgets' settings, the widgets' types, location, number of products displayed, any information that you would need to render a recommendation widget.

**Content**: The Content agent fetches content items from Merchandising Cloud’s Search API. Content items are non-product documents, like Instagram pictures, Youtube videos, blog pages, articles, etc.

**Smart Collection**: The Smart Collection agent loads the smart collection configuration (if filters are shown, for example, which filters are shown to the customer) and products to display. The logic there is very similar to the Search agent.

## Agents: Examples

In order to work with our agents, you need to:

- Initialize the event listeners for changes to the fields you would like to listen to. For example, listening to 'change:items' event will yield a function call every time a new field 'items' arrives from the Merchandising Cloud API.
- Call the method .set() on the Agent instance, outlining which field you would like to modify in your request. Calls to .set() are buffered, so the subsequent .set() calls will get merged into one.
- Once a new response from the API is received, the respective events for each changed field are fired.

The following example assumes a browser-like environment and compilation via Webpack:

import { Search } from '@findify /agent';`const config = {  url: 'https://api-v3.findify.io',  key: '2e963f3e-38bd-4c00-9636-c00e48945eb7',  method: 'jsonp',  timeout: 5000,  jsonpCallback: 'findifyCallback',  retryCount: 1,  user: {    uid: 'test1',    sid: 'ssid1',  },};const agent = new Search(config)agent.on('change:items', (items) => console.log('Got items!', items.toJS()))agent.set('q', 'black')agent.set('q', 'white')// You should get items related to query 'white'`

> 📘 Note
> The next parts describe React part of M.JS. To feel comfortable reading those parts you might need some knowledge about [React.js](https://reactjs.org/docs/getting-started.html) - a library for building interfaces by Facebook or similar technology, like Vue.js or Angular.js

## Providers

Providers are an interfacing layer between Agents and Connectors.
Provider’s job is to connect to agent, preconfigure it as and if needed, set up analytics and pass it and its response down via React Context.

> 📘 Useful link
> You may find more information on React Context here: [Legacy Context – React](https://reactjs.org/docs/legacy-context.html) 

Providers, similar to Agents, also have types:

- AutocompleteProvider works with AutocompleteAgent
- SearchProvider works with SearchAgent
- SmartCollectionProvider works with SmartCollectionAgent
- RecommendationProvider works with RecommendationAgent
- ContentProvider works with ContentAgent

> ❗️ IMPORTANT
> Mixing Provider and Agent types is not recommended, as it can lead to things not working as expected

## Provider: Invocation Example

import { Search } from '@findify /agent';import { AutocompleteProvider } from '@findify /react-connect'`const config = {  url: 'https://api-v3.findify.io',  key: '2e963f3e-38bd-4c00-9636-c00e48945eb7',  method: 'jsonp',  timeout: 5000,  jsonpCallback: 'findifyCallback',  retryCount: 1,  user: {    uid: 'test1',    sid: 'ssid1',  },};const agent = new Search(config)const DemoComponent = () => (  <AutocompleteProvider apiKey='2e963f3e-38bd-4c00-9636-c00e48945eb7' agent={agent} config={mjsConfig}>  {/* All descendants of AutocompleteProvider will have Agent provided to them via Context */}</AutocompleteProvider>)`

All descendants of **AutocompleteProvider** will now have following keys in context:

- **$$$findify** - object containing following properties:
- - **agents** - array of agents connected
- - **nested **- boolean to indicate whether this is not the first provider in the chain of React DOM tree
- **$$$analytics** - Merchandising Cloud Analytics object
- **$$$config** - MJS Configuration in a form of Immutable.Map()

> 🚧 Warning
> Connecting directly to context of a Provider is not a pattern we encourage and it is provided here only so you would understand how the insides of Provider work. We recommend Providers to be used together only with Connectors

## Connectors

> 📘 Useful link
> You may learn more about Higher Order Component pattern at [Higher-Order Components – React](https://reactjs.org/docs/higher-order-components.html) 

Connectors are the last link between data and UI representation. A Connector is a Higher Order Component (HOC)

They connect to React Context of a Provider, establish event listeners on Agent and handle data transformation, such as integrating analytics and transforming Agent response to inner MJS data structures. Connectors differentiate between types of response fields.

There are several connectors available to use, along with the possibility to create a custom Connector via createConnect function:

- **connectBanner** - extracts banner from API response and passes it down
- **connectBreadcrumbs** - works with query field, extracting enabled filters and transforming them to MJS internal structures
- **connectConfig** - does not extract any response field, it just takes MJS Configuration and passes it down
- **connectFacets** exposes facets response field with currently selected facets
- **connectItems** is used where product information is needed. Search, Smart Collections, Autocomplete are examples of places where it is used
- **connectPagination** - parses response metadata and forms information needed for pagination, like total number of pages, current page and base navigation methods
- **connectQuery** - extracts query from request. **Note:** this is not just text query, this is also a list of enabled filters!
- **connectSort** - extracts sort field from metadata, provides information on currently selected sorting method and gives a method for updating sorting directly
- **connectSuggestion** - gives you access to suggestions from Autocomplete agent

> 🚧 Keep in mind
> Use connectConfig only if you do not need any response fields, and not in combination with any of connectXXX or custom created connectors. Every Connector naturally passes down M.JS Configuration

## Connectors: Examples

Let's try to connect an ordinary React component to one of our Connectors...

`import React from 'react'`import { connectItems } from '@findify /react-connect'`const ItemCounter = ({items}) => <h1>Total number of items: { items && items.size }</h1>  const ConnectedItemCount = connectItems(ItemCounter)`

You may now use **ConnectedItemCount** to see the number of items present in a Search, Smart Collection or Autocomplete

But what if we need a custom Connector? We can also do it!

`import React from 'react'`import { createConnect } from '@findify /react-connect'`const withNumberOfItems = createConnect({  field: 'items', // we take items field  // and then, using mapProps, create a new prop to be passed down to components  mapProps: (items) => ({    totalItems: items && items.size || 0  }),})// Remember ItemCounter component from previous example? We can do it like this now!const ItemCounter = ({ totalItems }) => <h1>Total number of items: {totalItems}</h1>  const ConnectedItemCount = withNumberOfItems(ItemCounter)`

## Hooks

An alternative to using connectors as higher-order components, starting with React 16.8 you can now use custom hooks provided in the @findify /react-connect library.

Here is a list of the available hooks:

- **useSuggestions**
- **useItems**
- **useBreadcrumbs**
- **useFacets**
- **usePagination**
- **useSort**
- **useQuery**
- **useConfig**
- **useBanner**

All of the hooks' functionalities mimic the functionality of the equivalent connector.

## Hooks: Examples

`import React from 'react'`import { useItems } from '@findify /react-connect'`const ItemCounter = () => {  const { items } = useItems();  return <h1>Total number of items: { items && items.size }</h1>};`

## UI Components

UI Components are what your customer sees and what you can customize via our Merchandising Cloud IDE. Search Results, Product Cards, Autocomplete, Filters - everything is built on top of SDK, Agents, Providers & Connectors

## Stack diagram

Finally, you can also take a look at the data flow diagram inside M.JS to make things more clear

[block:image] { "images": [ { "image": [ "", "MJS Architecture Overview.svg", 200 ], "sizing": "100", "border": true, "caption": "Try to open image in a new tab, if it is hard to read text!" } ] } [/block]

Notice, that M.JS is also split into two parts - React-based part and Raw JS Layer

If you would like to build a custom integration with Vue or Angular, for example, you will have to get rid of React view layer, but you can still use pre-developed SDK, Analytics and Agents.

If you happen to be using React.js, as we do, you have much better chances to also reuse Connectors and Providers, so you will have to swap out only Components. You might even be able to do so inside our Merchandising Cloud IDE!

We hope this article made things clearer on how M.JS works inside, so it will be easier for you to tackle developing custom integrations from the ground-up using parts of our M.JS stack

[Untitled Image](https://files.readme.io/9b3b281-MJS_Architecture_Overview.svg)