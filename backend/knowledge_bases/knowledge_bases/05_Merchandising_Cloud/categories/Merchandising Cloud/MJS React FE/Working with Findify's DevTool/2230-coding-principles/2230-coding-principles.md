---
title: "Coding Principles"
articleID: 2230
category: "MJS React FE > Working with Findify's DevTool"
knowledgeBase: "Merchandising Cloud"
---

# Coding Principles

Following proper coding principles when customizing your Merchandising Cloud implementation helps you build reliable, performant search and merchandising experiences. When your code follows best practices for data handling, error prevention, and performance optimization, you can deliver faster product discovery and more consistent shopping experiences that help improve conversion rates and customer satisfaction.

Structured coding standards enable you to create maintainable customizations that perform well across all customer devices and browsers. This helps ensure your search results, autocomplete, and product recommendations function optimally, supporting better product discovery and reducing technical issues that could disrupt the customer journey and impact revenue.

## Data

In most cases, customizations will depend on data that is returned from our Search API

In order to check the returned data from the Search API response, you can use the Browsers dev-tools:

1. Open devtools (press f12)
2. Open `<strong>Network</strong>` tab
3. In search box type: `api-v3.findify.io`

![1685](https://files.readme.io/9dd6f52-Coding_principles.png)
After that, you'll be able to check what data returned from API.

## Data structures

`<strong>Data immutability</strong>`. We are trying to use functional paradigm when coding. One of the main concepts of the functional approach is an immutable data structures (immutable lists and maps in most cases). For that matter we use immutablejs (
[https://github.com/immutable-js/immutable-js](https://github.com/immutable-js/immutable-js)[https://github.com/immutable-js/immutable-js](https://github.com/immutable-js/immutable-js)

). So almost all data in Findify's MJS are entities of immutabljs Map or List classes.

*Why do we use it? - To prevent unexpected data mutations!*

For example:

JavaScript

```plaintext
// regular approachconst obj = { list: ['a'] }// some code that will clean up the obj listif (someBool) {obj.list = []}console.log(obj.list[0].length) // throws an Error because the first item in the list is undefined// immutable approachimport { Map, List } from 'immutable'const map = new Map({ list: new List(['a']) })// some code that will clean up the map listif (someBool) {map.set('list', new List([])) // set to return new instance, so the map list will remain the same}console.log(map.getIn(['list', 0]).length) // this will not throw an Error
```

Best Practises

- For example:

JavaScript

```plaintext
// check if the item tags contain the string "new"// dangerous approachconst isNew = item.get('tags').find(t => t.toLowerCase() === 'new')// if item doesn't have the "tags" property - it will throw an Error because we try to// call function find of undefined// safe approachconst tags = item.get('tags')const isNew = tags? tags.find(t => t.toLowerCase() === 'new'): false// use default values when initializing variablesconst tags = item.get('tags', []) // in this case if the "tags" property is not in the item object - it will return an empty arrayconst isNew = tags.find(t => t.toLowerCase() === 'new')
```

- `<strong>ALWAYS USE LOWERCASED STRINGS WHILE DATA PROCESSING AND COMPARISONS</strong>` Do not use the string comparators without lowercasing **each and every** string, i.e. use `str1.toLowerCase() === str2.toLowerCase()`.

For example:

JavaScript

```plaintext
// check if the item has the "sale" tag, but the actual tag value might be "sale"/"SALE"/"Sale" ...const isSaleItem = item.get('tags', []).find(t => t.toLowerCase() === 'sale');
```

- For example:

JavaScript

```plaintext
// check that item tags contain the string "super"// not optimized solution - will compute the prop on each component re-renderconst hasSuper = item.get('tags', []).find(t => t.toLowerCase() === 'super');//optimized solution - will compute the prop only when the item has changedconst hasSuper = useMemo( () => item.get('tags', []).find(t => t.toLowerCase() === 'super'), []);
```

- For example:

JavaScript

```plaintext
// display sticker if tags contain string "new"// bad approach/** * @module components /Cards/Product */...// bad approachconst ProductCardView = ({  item,  config,  theme,}: any) => {  return (    <a>...<Sticker display-if={item.get('tags', []).find(t => t.toLowerCase() === 'new')}/>...  </a>)}// good approachimport { useMemo } from React;const ProductCardView = ({  item,  config,  theme}: any) => {const displaySticker = useMemo(() => item.get('tags', []).find(t => t.toLowerCase() === 'new'), [item])  return (    <a>...<Sticker display-if={displaySticker}/>...  </a>)}
```

- For example:

JavaScript

```plaintext
// instead ofconst ProductCardView = ({  item,  config,  theme}: any) => {  const booleanFlag = item.get('tags').includes('tag a') ? true : item.get('tags').includes('tag b') ? true : false;  return (     <a>...  </a> )}// create a separate function that will do the hard jobconst getBooleanFlagByTags = (tags) => {if (tags.includes('tag a')) {return true;}if (tags.includes('tag b')) {return true;}return false}const ProductCardView = ({  item,  config,  theme}: any) => {  const booleanFlag = getBooleanFlagByTags(item.get('tags', []));  return (    <a>...  </a> )}
```

```plaintext
- **`DON'T USE THIRDPARTY LIBRARIES TO MANIPULATE DOM`** Do not use jQuery or any other third party libraries, unless absolutely needed for some custom integrations - use regular DOM API. We try to initialize Findify JS as fast as it is possible and introducing 3d parties (e.g. jQuery or other libraries) might harm Findify performance as we will need to wait until they are initialized.For example:
```

JavaScript

```plaintext
// update page title with query// instead of JQuery:$('title').text = query;// use DOM:const title = document.querySelector('title');if (title) {title.innerText = query;}
```

- For example:

JavaScript

```plaintext
// prepend element// dangerous codeconst containerElement = document.querySelector('.container')const elementToPrepend = document.querySelector('.to-prepend')containerElement.prepend(elementToPrepend)// safe codeconst containerElement = document.querySelector('.container')const elementToPrepend = document.querySelector('.to-prepend')if (typeof containerElement.prepend === 'function') {containerElement.prepend(elementToPrepend)} else {// you decide what to use as a polyfilprependPolyfil(containerElement, elemeьntToPrepend)}
```

Advanced

- For example:

JavaScript

```plaintext
// we should display:// SUPER sticker - if item tags contain string "super"// SALE sticker - if item tags contain string "sale"// NEW sticker - if item tags contain string "new"// bad approachconst ProductCardView = ({  item,  config,  theme}: any) => {const {displaySuper,displaySale,displayNew} = useMemo(() => {const tags = item.get('tags', []);if (tags.find(t => t.toLowerCase() === 'super')) {return { displaySuper: true }}if (tags.find(t => t.toLowerCase() === 'sale')) {return { displaySuper: true }}if (tags.find(t => t.toLowerCase() === 'new')) {return { displaySuper: true }}}, [item])  return (    <a>...<SuperSticker display-if={displaySuper}/><SaleSticker display-if={displaySale}/><NewSticker display-if={displayNew}/>...  </a>)}// good approachconst Sticker = ({item}) => {  return (    <span className="thumb-badge">{item}</span>  )}const StickerSecond = ({item}) => {  return (    <span className="thumb-badge-second">{item}</span>  )}const getComponent = (sticker) =>  ({    'New Product': Sticker,    'Clearance': Sticker,    'Bulk Buys': StickerSecond,    'Sale': StickerSecond,    '100% Markup': StickerSecond,  }[sticker] || (() => null));const Stickers = memo((props: any) =>  createElement(    getComponent(props.item),    props  ));const CustomSticker = ({item}) => {  return (    <div display-if={item.getIn(['custom_fields', 'sticker'])} className="findify-product-badge">      <MapArray        array={item.getIn(['custom_fields', 'sticker'])}        factory={Stickers}        keyAccessor={(v, i) => i}      />    </div>  )}const ProductCardView = ({  item,  config,  theme}: any) => {  return (    <a>...<CustomSticker item={item}/>...  </a>  )}
```

DOM/BOM API NOT SUPPORTED IN IE

documentElement.prepend -[https://developer.mozilla.org/ru/docs/Web/API/ParentNode/prepend](https://developer.mozilla.org/ru/docs/Web/API/ParentNode/prepend)