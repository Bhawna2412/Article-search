---
title: "Maropost Add to Cart"
articleID: 2242
category: "MJS React FE > Product Card (MJS React)"
knowledgeBase: "Merchandising Cloud"
---

# Maropost Add to Cart

Implementing Add to Cart functionality with quantity controls directly in product grids enables customers to efficiently build their shopping carts during product discovery. When shoppers can specify quantities and add products without navigating to product pages, you help improve conversion rates by streamlining the purchasing process and reducing navigation friction in the customer journey.

Quantity-aware Add to Cart features empower customers to manage their purchases more effectively from search and collection pages. This helps improve customer satisfaction and conversion rates by respecting different shopping styles - from quick bulk purchases to careful single-item selection - supporting better overall shopping experiences across your customer base.

![284](https://files.readme.io/ac8a2f7-Screenshot_1.png)

## #1. Background

## #2. Time Estimates

Set up in Platform: n/a

Integration: 30 minutes

Styling: 10 minutes

## #3. Functional Overview

> Components[components/Cards/Product/index.tsx] (https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/Cards/Product/index.tsx)

## #4. Integration Steps

First, we are going to show you how to create an AddToCart component. It will be responsible for the logic.

You need to add a status for the quantity of products. Also you have to check if product is available. If not, return **Out Of Stock button** .

We are going to create and add **handleAddToCart **for the button with type submit inside the form.

Along with that, you'll need to create an input field for the quantity of products. In addition, you can add buttons for incrementing and decrementing.

AddToCart

```plaintext
import cx from "classnames";import { useState } from "react";const AddToCart = ({ item, onClick }) => {  const [qty, setQty] = useState(0);  const available = item.get("availability");    if(!available){    return(      <a onClick={onClick} href={item.get('product_url')} title="Out Of Stock" className="findify-cta-button findify-login-to-order findify-out-of-stock">        Out Of Stock      </a>    )  }    const handleAddToCart = async(e) => {    e.preventDefault();    await item.analytics.sendEvent('click-item',      {         rid: item.meta.get('rid'),         item_id: item.get('id')       },        false    );    await item.analytics.sendEvent('add-to-cart', { item_id: item.get('id'),quantity: qty, rid: item.meta.get('rid') });  }  const decInput = () => {    if(qty == 0) return    setQty(qty => qty - 1)  }  const incInput = () => {    setQty(qty => qty + 1)  }  return(   <div className='findify-add-to-cart-button-wrapper'>      <form class="form-inline buying-options findify-add-to-cart-form">        <input type="hidden" id={`sku${item.get('id')}`} name={`sku${item.get('id')}`} value={item.get('id')}></input>        <input type="hidden" id={`model${item.get('id')}`} name={`model${item.get('id')}`} value={item.get('title')}></input>        <input type="hidden" id={`thumb${item.get('id')}`} name={`thumb${item.get('id')}`} value={item.get('thumbnail_url')}></input>        <div className="findify-add-to-cart-qty">          <div onClick={decInput} className="findify-add-to-cart-qty__dec">            <i class="fa fa-minus"></i>          </div>          <input             type="text"             id={`qty${item.get('id')}`}             name={`qty${item.get('id')}`}             placeholder="Qty"             defaultValue="1"            className="input-tiny findify-qty-input"            value={qty}          />          <div onClick={incInput} className="findify-add-to-cart-qty__inc">            <i class="fa fa-plus"></i>          </div>                  </div>        <button           onClick={handleAddToCart}          type="submit"           title="Add to Cart"           className={cx("addtocart btn-primary btn btn-loads findify-cart-button findify-cta-button")}           rel={item.get('id')}           data-loading-text="<i class='fa fa-spinner fa-spin' style='font-size: 14px'></i>"        >          <i class="fa fa-cart-plus"></i>          Add to Cart        </button>      </form>    </div>  )}export default AddToCart;
```

Add some styles:

CSS

```plaintext
.findify-add-to-cart-qty{  position: relative;  display: inline;}.findify-cart-button{  z-index: 2;  position: relative;  flex-grow: 1;  display: flex;  justify-content: space-between;  align-items: center;}.findify-add-to-cart-qty__inc,.findify-add-to-cart-qty__dec  {  display: inline-block;  position: absolute;  top: 50%;  transform: translateY(-50%);  font-weight: 400;  font-size: 8px;  cursor: pointer;}.findify-add-to-cart-qty__inc{  right: 10px;}.findify-add-to-cart-qty__dec {  left: 10px;}.findify-qty-input{  margin: 0;  font-family: var(--font-base);  font-style: normal;  font-weight: 600;  font-size: var(--font-size-large);  line-height: var(--line-height);  text-transform: capitalize;  color: #000000;  width: 58px;  padding: 4.5px 12px;}.findify-add-to-cart-form {  display: flex;  align-items: center;  column-gap: 8px;}.findify-add-to-cart-button-wrapper{  margin-top: 8px;}
```

Finally, you need to import AddToCart into **components/Cards/Product/index.tsx**.

components/Cards/Product

```plaintext
/** * @module components /Cards/Product */// default codeimport AddToCart from "AddToCart";// default codeexport default ({  item,  theme = styles,  className,  config,  highlighted,  isAutocomplete,  isSearch}: IProductCardProps) => {    // default code  const onClick = e => variant.onClick(e, isSearch);  return(        // default code         <AddToCart item={item} onClick={onClick}/>        // default code        )  );};
```

## #5. MJS Version

This module has been optimized for MJS version** 7.1.38**