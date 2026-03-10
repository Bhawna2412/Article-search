---
title: "Secondary image on hover for swatches using alt text"
articleID: 2244
category: "MJS React FE > Product Card (MJS React)"
knowledgeBase: "Merchandising Cloud"
---

# Secondary image on hover for swatches using alt text

You can combine color swatches with alternative product images to create rich, interactive product previews directly in search results. When customers hover over color swatches and see both color variations and alternative product angles without leaving the grid, they gain comprehensive product understanding that helps improve purchase confidence and tends to enhance conversion rates through better-informed decisions.

Interactive image previews with color swatches provide customers with detailed product views traditionally available only on product pages. This helps improve product discovery by giving shoppers the information they need to make decisions during browsing, supporting better conversion rates and reducing unnecessary product page visits that can slow down the purchase journey.

![1912](https://files.readme.io/b516235-bandicam_2022-05-04_13-06-52-009.gif)

## #1. Background

Seeing the color palette of a product, as well as the ability to get an alternative view of what the product looks like, are both essentials when it comes to convincing your client go for the purchase. Bringing him the ability to get as many possible angles on the product he might be interested is crucial.

In this guide we'll be showing you how you can combine the two, when the alternative angle on the product along with all the available color variation can be viewed on the listing page, without the user having to click into the product description page. And also, it looks cool![:)](https://galaxy.maropost.com/resources/emoji/smile.png)

Let us show you how that can be achieved.

## #2. Requirements

When you need to get a second image from a special **shopify_images_alt** field (or something similar), the first step is to activate the field in MD.

![1882](https://files.readme.io/2c28f8a-Screenshot_1.png)
In the example we also need to activate **old_colors** and **shopify_images_url** fields.

![1911](https://files.readme.io/848a434-Screenshot_1.png)
In addition, you need to allow showing alternate images on hover of the product grid.

![3406](https://files.readme.io/5d051e7-Screenshot_1.png)

## #3. Time Estimates

- Set up in Platform: 5 minutes
- Integration: 30 minutes
- Styling: 10 minutes

## #4. Functional Overview

> [components/Cards/Product/index.tsx] (https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/Cards/Product/index.tsx)

## #5. Integration Steps

At first you need to create two states - **imageMain **and **imageHover**.

Then we produce the function that returns initial values for the states. In instance we create **getImage **function. But you need to create the logic that will work for your store,.

Afterwards, push the initial values to the states.

components/Cards/Product/index.tsx

```plaintext
import { useState } from 'react';// default codeconst getImage = (variant, item, selector) => {  const color = variant.getIn(['custom_fields','old_colors'], '');  const alt = item.getIn(['custom_fields','shopify_images_alt'], '');  const image = item.getIn(['custom_fields','shopify_images_url'], '');    const images = alt.reduce( (acc, value, index) => {      if(value.toLowerCase().indexOf(color) > -1 && value.toLowerCase().indexOf(selector) > -1 && image) acc.push(image.get(index));      return acc;    }  , [image])   return images[1] && images[1].replace('_medium','_large');;}const [imageMain, setImage] = useState(  getImage(variant, item, 'main'));const [imageHover, setSecondImage] = useState(  getImage(variant, item, 'hover'));
```

Finally, add the images blocks to your code.

components/Cards/Product/index.tsx

```plaintext
// default code<Image  aspectRatio={config.getIn(['image', 'aspectRatio'])}  thumbnail={item.get('thumbnail_url')}  alt={item.get('title')}  lazy={config.getIn(['image', 'lazy'])}  offset={config.getIn(['image', 'lazyOffset'])}  src={    config.getIn(['image', 'multiple'])      ? [imageMain, imageHover]      : imageMain || item.get('thumbnail_url')  }/>
```

We have to push **setImage **and **setSecondImage **into ColorSwatches:

components/Cards/Product/index.tsx

```plaintext
/** * @module components /Cards/Product */import cx from 'classnames';import Image from 'components/common/Image';import Rating from 'components/Cards/Product/Rating';import Price from 'components/Cards/Product/Price';import Title from 'components/Cards/Product/Title';import Description from 'components/Cards/Product/Description';import Variants from 'components/Cards/Product/Variants';import styles from 'components/Cards/Product/styles.css';import { List } from 'immutable';import { IProduct, ThemedSFCProps } from 'types';import { Immutable, Product } from '@findify /store-configuration';import trackProductPosition from 'helpers/trackProductPosition';import { useMemo, useState } from 'react';import ColorSwatches from 'ColorSwatches';import { Item } from 'react-connect/lib/immutable/item';export interface IProductCardProps extends ThemedSFCProps {  item: IProduct;  config:  Immutable.Factory<Product>;  Container?: React.ElementType;}const getImage = (color, alt, image, selector) => {  const images = alt.reduce( (acc, value, index) => {      if(value.toLowerCase().indexOf(color) > -1 && value.toLowerCase().indexOf(selector) > -1 && image) acc.push(image.get(index));      return acc;    }  , [image])   return images[1] && images[1].replace('_medium','_large');;}const useVariants = (  item): [IProduct, React.Dispatch<React.SetStateAction<string>>] => {  const [currentVariant, setVariant] = useState<string>(    item.get('selected_variant_id')  );  const variant = useMemo(    () =>      item.merge(        item.get('variants')?.find((i) => i.get('id') === currentVariant)      ),    [currentVariant]  );  return [variant, setVariant];};export default ({  item,  theme = styles,  className,  config,  Container = 'div',}: any) => {  const container = trackProductPosition(item);  const [variant, setVariant] = useVariants(item);  const [imageMain, setImage] = useState(    getImage(      variant.getIn(['custom_fields','old_colors'], ''),      item.getIn(['custom_fields','shopify_images_alt'], ''),       item.getIn(['custom_fields','shopify_images_url'], ''),      'main'    )  );  const [imageHover, setSecondImage] = useState(    getImage(      variant.getIn(['custom_fields','old_colors'], ''),      item.getIn(['custom_fields','shopify_images_alt'], ''),       item.getIn(['custom_fields','shopify_images_url'], ''),      'hover'    )  );  return (    <Container      ref={container}      data-element="card"      className={cx(theme.root, theme[config.get('template')], className)}    >      <div className={theme.content}>        <ColorSwatches           variants={item.get('variants','')}          item={item}          currentId={variant.get('id')}          setVariant={setVariant}          setSecondImage={setSecondImage}          setImage={setImage}        />        <Rating          className={theme.rating}          value={variant.getIn(['reviews', 'average_score'])}          count={            variant.getIn(['reviews', 'count']) ||            variant.getIn(['reviews', 'total_reviews'])          }          display-if={            !!variant.getIn(['reviews', 'count']) ||            !!variant.getIn(['reviews', 'total_reviews'])          }        />        {/*        Link hack:        Title's "a" contains :after element with absolute position        what makes provide link effect to the rest of card        - To remove element from the effect set `position:relative`        - Or `z-index: 1`, but it may have side effects      */}        <Title          display-if={!!variant.get('title')}          theme={theme}          onClick={variant.onClick}          href={variant.get('product_url')}          text={variant.get('title')}        />        <Description          display-if={!!variant.get('description')}          theme={theme}          text={variant.get('description')}        />        {/*<div className={theme.divider} />*/}        <Price          display-if={!!variant.get('price')}          className={theme.priceWrapper}          item={item}        />      </div>      {/*      ADA specific hack:      We need to make image belong to content, so we move it under the title.      - flex order set to -1    */}      <div className={theme.image} onClick={item.onClick}>        <div className='findify-product-main-image'>          <Image            aspectRatio={true && config.getIn(['image', 'aspectRatio'])}            thumbnail={variant.get('thumbnail_url')}            alt={variant.get('title')}            lazy={config.getIn(['image', 'lazy'])}            offset={config.getIn(['image', 'lazyOffset'])}            src={              imageMain || variant.get('image_url','')            }          />        </div>        <div className='findify-product-image-on-hover'>          <Image            aspectRatio={true && config.getIn(['image', 'aspectRatio'])}            thumbnail={variant.get('thumbnail_url')}            alt={variant.get('title')}            lazy={config.getIn(['image', 'lazy'])}            offset={config.getIn(['image', 'lazyOffset'])}            src={imageHover || variant.get('image_url')}          />        </div>              </div>    </Container>  );};
```

ColorSwatches may look like this

ColorSwatches

```plaintext
import { useState } from 'react';import { fromJS } from 'immutable';import cx from 'classnames';const getImage = (color, alt, image, selector) => {  const images = alt.reduce( (acc, value, index) => {      if(value.toLowerCase().indexOf(color) > -1 && value.toLowerCase().indexOf(selector) > -1 && image) acc.push(image.get(index));      return acc;    }  , [image])   return images[1] && images[1].replace('_medium','_large');}const getColorSwatches = (variants) => {  let arr = []  const reducedVariants = variants.reduce(     (acc, item, index) => {      if(!item.getIn(['custom_fields','old_colors'])) acc[index] = false;      if(item.getIn(['custom_fields','old_colors']) && arr.indexOf(item.getIn(['custom_fields','old_colors'])) < 0){        acc[index] = {          'id': item.get('id',''),          'color': item.getIn(['color', 0],''),          'swatchUrl': item.getIn(['custom_fields','swatch_url'],''),          'oldColors':  item.getIn(['custom_fields','old_colors'],''),          'image_url': getImage(                        item.getIn(['custom_fields','old_colors']),                        item.getIn(['custom_fields','shopify_images_alt']),                         item.getIn(['custom_fields','shopify_images_url']),                        'main'                      ),          'imageHover': getImage(                          item.getIn(['custom_fields','old_colors']),                          item.getIn(['custom_fields','shopify_images_alt']),                           item.getIn(['custom_fields','shopify_images_url']),                          'hover'                        )        }        arr.push(item.getIn(['custom_fields','old_colors']));      }      return acc;    }  , [variants])  return fromJS(reducedVariants.filter(i => i !== false));}const Item = ({currentId, item, id, setVariant, setSecondImage, setImage}) => {  const color=item.get("oldColors") && item.get("oldColors").toLowerCase()    if(!color){    return null  }    return (    <div      className={cx('findify-product-color-swatch-item',{['findify-product-color-swatch-item-selected']: id == currentId})}      tabIndex="0"      aria-label={color}      onClick={        (e) => {          e.stopPropagation();          e.preventDefault();          setVariant(item.get('id'));          setImage(item.get('image_url'));          setSecondImage(item.get('imageHover'));        }      }    />  )}const ColorSwatches = ({variants, setVariant, currentId, setSecondImage, setImage}) => {  const colorSwatches = variants && getColorSwatches(variants);  return (    <div       display-if={colorSwatches}       className={cx("findify-product-color-swatches-wrapper")}    >          <div className='findify-swatches-wrapper'>        {colorSwatches.map(           (item, index) => <Item                     id={item && item.get('id','')}                    item={item}                    currentId={currentId}                    index={index}                    setVariant={setVariant}                    setSecondImage={setSecondImage}                    setImage={setImage}                  />        )}             </div>    </div>  )}export default ColorSwatches;
```

## #6. MJS Version

This module has been optimized for MJS version** 7.1.38**