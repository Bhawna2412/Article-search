---
title: "Mobile Autocomplete with removed keyboard on scroll"
articleID: 2235
category: "MJS React FE > Autocomplete"
knowledgeBase: "Merchandising Cloud"
---

# Mobile Autocomplete with removed keyboard on scroll

Optimizing mobile autocomplete behavior by removing the keyboard on scroll helps create smoother mobile search experiences. When the virtual keyboard automatically dismisses as customers scroll through search suggestions or product matches, they gain more screen space to view options, which helps improve mobile product discovery and tends to enhance mobile conversion rates by reducing interface friction.

Mobile interface optimization techniques like keyboard management help you maximize limited screen real estate during product search. By automatically handling keyboard visibility, you enable mobile shoppers to interact more naturally with autocomplete suggestions and product matches, supporting better mobile shopping experiences and improved conversion performance on mobile devices.

## #1. Background

## #2. Time Estimates

Set up in Platform: n/a

Integration: ~40 minutes

Styling: ~20 minutes

## #3. Functional Overview

> Compoentslayouts/Autocomplete/Sidebar/index.tsx

## #4. Integration Steps

First of all, open up the 'Sidebar Autocomplete' component.

We'll start with 'cx' import from 'classnames'. We need to add 'findify-mobile-...' class to our autocomplete container.

After that, we need to get isMobile value.

Then, we re-render our component with useEffect if it is mobile version. We add a scroll event listener to the autocomplete container and trigger the 'handleScroll' function. Also, we are adding some styles to the 'body' tag, as well as removing all functionality on unmount.

Finally, we create handleScroll function which removes keyboard and disables the autocomplete input.

> Other Autocomplete ComponentsIf you want to add this functionality to another autocomplete component, you need to change input variable, because it is not coming from Maropost Merchandising Cloud. Also, you need to set events for another autocomplete container.

layouts/Autocomplete/Sidebar/index.tsx

```plaintext
{/*... import cx ... */}import cx from 'classnames';{/*... other imports and some code ... */}export default ({ theme = styles, config }) => {  {/*... some code ... */}    {/* set isMobile value */}  const isMobile = window.innerWidth < window.findify.config.get('mobileBreakpoint');  {/*... some code ... */}  {/* remove keyboard onscroll */}  const handleScroll = useCallback(() => {    {/* IF it is NOT Autocomplete/Sidebar component, you need to use querySelector to get non-findify input */}    input.current.setAttribute('readonly', 'readonly');    input.current.blur();     input.current.removeAttribute('readonly');  })    useEffect(() => {    if (input.current) {      setTimeout(() => input.current?.focus(), 100);    }    document.addEventListener('focusout', onFocusOut, true);        {/* re-render component if isMobile */}    if(isMobile) {      {/* set scroll event listener to autocomplete container */}      document.querySelector('.findify-layouts--autocomplete--sidebar__content').addEventListener('scroll', handleScroll);      {/* set some styles to <body> */}      document.querySelector('body').setAttribute('style', 'position: relative; overflow-y: hidden; touch-action: none;')    }    return () => {      {/* remove all on unmount */}      document.removeEventListener('scroll', handleScroll);      document.removeEventListener('focusout', onFocusOut);      document.querySelector('body').removeAttribute('style');    };  }, []);  return (    {/* add class for css */}    <div className={cx(theme.root, 'findify-mobile-' + isMobile)} data-findify-autocomplete={true} tabIndex={0}>    {/* ... some code... */}    </div>  );};
```

By the way, if you want to add horizontal scrolling to search suggestions, you need to add some properties to **.findify-mobile-true .findify-components-autocomplete--suggestions__list** and add last-child CSS to the 'li' element.

CSS

```plaintext
.findify-layouts--autocomplete--sidebar.findify-mobile-true .findify-components-autocomplete--suggestions::after {  content: "";  position: absolute;  top: 0px;  height: 100%;  background: linear-gradient(90deg,hsla(0,0%,100%,0) 0, #fff, 100%, #fff);  width: 120px;  right: -50px;}.findify-mobile-true .findify-components-autocomplete--suggestions {  position: relative;}.findify-mobile-true .findify-components-autocomplete--suggestions__list {  padding: 0 15px 10px 0;  width: 100%;  overflow-x: auto;  max-width: calc(100vw - 50px);  white-space: nowrap;}.findify-mobile-true .findify-components-autocomplete--suggestions__list li {  margin: 0 12px 0 0;  display: inline-block;}
```