---
title: "Size Swatches"
articleID: 2178
category: "Shopify Liquid FE > Grid and Product Cards (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Size Swatches

You can add size swatches to your product cards to give customers a convenient way to view and select available sizes directly from search results and collection pages. This functionality helps streamline the browsing experience by displaying size options upfront, reducing the need for customers to click through to product pages just to check size availability.

Implementing size swatches improves the shopping experience by making size selection more accessible and intuitive. By integrating this component within your Liquid templates and applying appropriate styling, you enable customers to quickly identify which sizes are available, helping them make faster purchasing decisions and potentially improving conversion rates by reducing friction in the product selection process.

Size swatches are an essential component of ecommerce platforms, providing customers with a convenient way to select product sizes. In the context of our Shopify app, integrating size swatches within Liquid templates enables seamless browsing and selection of product sizes, enhancing the overall user experience.

## Integration Steps

### Step 1: Assign Product Size Keys

In the `findify-product-card.liquid` file (on line 73) ensure that product size keys are correctly assigned. This step involves defining size keys to identify available size options within product variants.

JSX

```plaintext
{% assign sizeKeys = "Size,size,SIZE,sizes,Sizes,SIZES" | split: ',' %}
```

### Step 2: Add Size Swatches

Next, incorporate size swatches within the `findify-product-card.liquid` file. Iterate through the defined size keys and check if the product options contain any of these keys. If found, generate corresponding size swatches based on product variants.

JSX

```plaintext
  {% for key in sizeKeys %}    {% if product.options contains key %}       <div class="product_tile_size_holder">         {% for size_option in product.options_by_name[key].values %}           {% for variant in product.variants  %}              {% if variant.options contains size_option %}                {% if variant.url %}                  {% assign variantUrl = variant.url %}                {% else %}                  {% assign variantUrl = product.url %}                {% endif %}            {% endif %}          {% endfor %}            <a               name={{ size_option }}               id="{{ product.id }}_size_{{ forloop.index }}"               class="product-card-size-swatch"               href="{{ variantUrl }}"            >{{ size_option }}</a>          {% endfor %}       </div>    {% endif %}  {% endfor %}
```

### Step 3: Apply Styling

Add CSS styles to customize the appearance of size swatches and ensure consistency with your store's design. This step involves defining the visual presentation of size swatches for optimal user experience.

CSS

```plaintext
.product_tile_size_holder{  display: flex;  flex-wrap: wrap;}.product_tile_size_holder .product-card-size-swatch{  display:block;  cursor: pointer;  appearance: none;  background: #efefef;  color: #949494;  margin-right: 5px;  margin-bottom: 5px;  padding: 5px;}
```

## Integration with Merchandising Cloud Fields

To incorporate size swatches from Merchandising Cloud responses, include the provided code snippet within the `findify-product-card.liquid` file. This step facilitates seamless integration with our product data, ensuring accurate representation of size options to customers.

CSS

```plaintext
{% render 'findify-product-swatches', variants:variants, sizes: sizes, product_url:product_url, colors:colors %}
```

**Conclusion**

By following these integration steps, you can effectively incorporate size swatches within your Shopify store powered by Merchandising Cloud. Enhance the accessibility and usability of product size selection, thereby improving customer satisfaction and driving sales.

For further assistance or inquiries, feel free to contact us on [YourFriends@Findify .io.](mailto:YourFriends@Findify.io)