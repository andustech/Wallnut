import React from 'react';
import ReactDOM from 'react-dom';
import PubSub from 'pubsub-js';
import { addEventToDataLayer } from './google-analytics';
import productImages from '../Components/ProductSection/product-images';

export const convertPriceFromNumber = (price) => {
  const stringPrice = price.toString();
  if (stringPrice.endsWith('00')) {
    const convertPrice = `$${stringPrice.slice(0, stringPrice.length - 2)}`;
    if (convertPrice.charAt(convertPrice.length - 1) === '.') {
      return convertPrice.slice(0, -1);
    }
    return convertPrice;
  }

  const convertedPrice = Array.from(stringPrice);
  convertedPrice.splice(stringPrice.length - 2, 0, '.');

  return `$${convertedPrice.join('')}`;
};

export const getDataByBlockSectionName = (sectionName, block, keyIndex = 2) =>
  Object.keys(block.settings).reduce((acc, key) => {
    if (key.includes(`${sectionName}_`)) {
      const splitSectionInfo = key.split('_');

      acc[splitSectionInfo[keyIndex]] = block.settings[key];
    }

    return acc;
  }, {});

export const getQueryString = (filters) =>
  Object.keys(filters).reduce((acc, key) => {
    const value = filters[key].replace(' ', '%20');

    // eslint-disable-next-line no-param-reassign
    acc = `${acc}&${key}=${value}`;
    return acc;
  }, '');

export const getYotpoReviewsData = async (productId, page = 1, filters = {}) => {
  try {
    const fetchResponse = await fetch(
      `https://api.yotpo.com/v1/widget/yTqbcAqAOLbG8dXBwuwR59fc1TTQI8hesxMF3qqO/products/${productId}/reviews.json?page=${page}&per_page=4${getQueryString(
        filters
      )}`
    ).then((res) => res.json());

    if (fetchResponse.status && fetchResponse.status.code !== 200) {
      throw fetchResponse.status;
    }

    return fetchResponse.response;
  } catch (err) {
    console.log(err.message);
    return {};
  }
};

export const convertToReadableDate = (timestamp) => {
  const date = timestamp.split('T')[0].split('-');

  return `${date[1]}.${date[2]}.${date[0]}`;
};

export const decodeHtml = (html) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

export const objectToQueryString = (data) =>
  Object.keys(data)
    .map((key) => `${key}=${data[key]}`)
    .join('&');

export const isValidEmail = (email) => {
  const regx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regx.test(String(email).toLowerCase());
};

// export const legOptions = ['Walnut', 'Black'];

export const getOptionUrl = (option) => {
  const strArr = option.toLowerCase().replaceAll(' ', '-');
  return `https://cdn.shopify.com/s/files/1/0492/6321/4743/files/${strArr}.png?20576`;
};

const getStartDate = (startTime) => {
  const start = startTime
    .replace(/-/g, ' ')
    .replace(':', ' ')
    .split(' ')
    .map((num) => parseInt(num, 10));

  return new Date(start[2], start[0] - 1, start[1], start[3], start[4]).getTime();
};

const getEndDate = (endTime) => {
  const end = endTime
    .replace(/-/g, ' ')
    .replace(':', ' ')
    .split(' ')
    .map((num) => parseInt(num, 10));
  return new Date(end[2], end[0] - 1, end[1], end[3], end[4]).getTime();
};

export const isSaleOn = (startTime, endTime) => {
  if (!startTime || !endTime) {
    return false;
  }
  const currentDate = new Date().getTime();
  const startDate = getStartDate(startTime);
  const endDate = getEndDate(endTime);

  return startDate < currentDate && currentDate < endDate;
};

export const isAnySaleOn = (themeSetting) => {
  const sales = ['sale', 'black_friday_sale', 'cyber_monday_sale'];

  return sales.some((sale) => isSaleOn(themeSetting[`${sale}_start`], themeSetting[`${sale}_end`]));
};

export const createReactComponents = (components) => {
  components.forEach((component) => {
    const element = document.getElementById(component.id);
    if (element) {
      const jsonData = element.children[0] ? element.children[0].text : '{}';

      if (jsonData) {
        // eslint-disable-next-line react/jsx-props-no-spreading
        ReactDOM.render(<component.module {...JSON.parse(jsonData)} />, element);
      }
    }
  });
};

export const getS3url = (objectUrl) => {
  const baseUrl = 'https://levity-products.s3.us-west-2.amazonaws.com';

  return `${baseUrl}${objectUrl}`;
};

const getVariantSwatchName = (variantName) => {
  const legs = ['walnut', 'cherry', 'black'];

  return legs.reduce((acc, leg) => {
    if (variantName.endsWith(leg)) {
      const splitName = variantName.split('-');
      const removeLeg = splitName.filter((_name, i) => i !== splitName.length - 1);

      return removeLeg.join('-');
    }

    return acc;
  }, variantName);
};

export const getColorSwatchThumbImageUrl = (variantName) => {
  const kababCase = getVariantSwatchName(variantName).replace(/ /g, '-').toLowerCase();
  return `https://cdn.shopify.com/s/files/1/0627/3476/2207/files/color-thumb-${kababCase}.jpg`;
};

export const findCollectionObject = (products, variant) => {
  const handleFromVariant = variant.name.split(' - ')[0].toLowerCase().replace(/ /g, '-');
  return products.find((product) => product.handle === handleFromVariant);
};

const getVariantName = (variant) =>
  variant.options
    .map((option) => option.toLowerCase())
    .join(' ')
    .replace(/ /g, '-');

export const getSingleViewImage = (product, variant) => {
  const variantName = variant?.options ? getVariantName(variant) : variant;
  if (variant === 'e-gift-card') {
    return getS3url(`/${product.handle}/${productImages[product.handle][variantName][0]}`);
  }

  if (variant === 'extra-chair-cover') {
    return getS3url(`/${product.handle}/${productImages[product.handle][variantName][0]}`);
  }

  return getS3url(
    `/${product.handle}/${variantName}/${productImages[product.handle][variantName][0]}`
  );
};

export const getCurrentImages = (product, variant) => {
  const variantName = getVariantName(variant);
  const sizeIndex = product.options.indexOf('Size');
  const colorIndex = product.options.indexOf('Frame Color');

  if(variant.options[colorIndex] === 'Matte White') {
    var color = 'white'
  }
  else if(variant.options[colorIndex] === 'Matte Black') {
    var color = 'black'
  }
  else if(variant.options[colorIndex] === 'Walnut Wood') {
    var color = 'walnut'
  }

  var productHandle = product.handle;
  var hasArt = productHandle.slice(-4);
  if (hasArt === '-art') {
    productHandle = productHandle.slice(0, -4)
  }

  var size = variant.options[sizeIndex].replace(/ |x|"/gi, '');
  var roomImg = 'https://cdn.shopify.com/s/files/1/0627/3476/2207/files/'+productHandle+'-B-'+color+'-'+size+'.jpg?v=1652388790'
  var frameImg = 'https://cdn.shopify.com/s/files/1/0627/3476/2207/files/'+productHandle+'-A-'+color+'-2432.jpg'

  let productImgs = [
    frameImg,
    roomImg,
    'https://cdn.shopify.com/s/files/1/0627/3476/2207/files/Image-C-close-up-corner-angled-'+color+'.jpg?',
    'https://cdn.shopify.com/s/files/1/0627/3476/2207/files/Image-D-back-of-frame-angled.jpg',
    'https://cdn.shopify.com/s/files/1/0627/3476/2207/files/Image-E-hanging-demo.jpg'
  ]

  return productImgs.map((imageUrl) => {
    return {
      url: imageUrl,
      alt: `${product.handle}-${variantName}`.replace(/-/g, ' ').replace('.jpg', ''),
    };
  })
  
};

const mapRecommendedColors = (products) => {
  const recommendedColors = {
    'colors-name': [
      'Matte White',
      'Matte Black',
      'Walnut Wood',
    ]
  };

  return products.reduce((acc, product) => {
    const colors = recommendedColors['colors-name'];

    if (colors) {
      return [
        ...acc,
        {
          ...product,
          colors,
        },
      ];
    }

    return acc;
  }, []);
};

export const getVariantOptions = (variant) =>
  [variant.option1, variant.option2, variant.option3].filter((val) => !!val);

export const mappedProducts = (products) =>
  products.reduce((acc, product) => {
    const prices = product.variants
      .map((variant) =>
        Number.isInteger(variant.price)
          ? variant.price
          : parseInt(variant.price.replace('.', ''), 10)
      )
      .sort((a, b) => a - b);

    return [
      ...acc,
      {
        ...product,
        price: prices[prices.length - 1],
        price_min: prices[0],
        price_max: prices[prices.length - 1],
        options: product.options.map((option) => option.name),
        variants: product.variants.map((variant) => ({
          ...variant,
          name: variant.name || `${product.title} - ${variant.title}`,
          price: Number.isInteger(variant.price)
            ? variant.price
            : parseInt(variant.price.replace('.', ''), 10),
          options: getVariantOptions(variant),
        })),
      },
    ];
  }, []);

export const fetchProducts = async () => {
  try {
    const fetchResponse = await fetch('/products.json');
    const response = await fetchResponse.json();
    return mappedProducts(response.products);
  } catch (err) {
    console.log(err);

    return [];
  }
};

export const fetchVariantById = async (variantId) => {
  try {
    const products = await fetchProducts();
    const currentVariant = products.reduce((acc, product) => {
      const productVariant = product.variants.find((variant) => variant.id === variantId);

      if (productVariant) {
        return productVariant;
      }

      return acc;
    }, {});

    return currentVariant;
  } catch (err) {
    console.log(err);

    return [];
  }
};

const getUniqCDVariants = (recommendedProducts) => {
  const mergedClassicDiningVariants = recommendedProducts.reduce((acc, product) => {
    if (
      product.handle.includes('the-classic-dining-chair') &&
      product.handle !== 'the-classic-dining-chair'
    ) {
      return [...acc, ...product.variants];
    }

    return acc;
  }, []);

  const sortedByLegColor = legOptions.reduce(
    (acc, legColor) => [
      ...acc,
      ...mergedClassicDiningVariants.filter((variant) => variant.options.includes(legColor)),
    ],
    []
  );

  const uniqVariantsSkus = [...new Set(sortedByLegColor.map((variant) => variant.sku))];

  return uniqVariantsSkus.map((sku) =>
    mergedClassicDiningVariants.find((variant) => variant.sku === sku)
  );
};

export const mergedFetchedRecommendations = (products, allProducts) => {
  const filterProductsWithoutHandle = products.filter((product) => !!product.handle);
  const chairs = filterProductsWithoutHandle.filter(
    (item) => !item.handle.includes('the-classic-dining-chair')
  );
  const classicDiningProduct = filterProductsWithoutHandle.find((item) =>
    item.handle.includes('the-classic-dining-chair-walnut')
  );
  const extraChairCover = products.filter((product) =>
    product.handle.includes('extra-chair-cover-old')
  );

  if (extraChairCover && chairs) {
    const objIndex = chairs.findIndex((obj) => obj.handle === 'extra-chair-cover-old');
    chairs[objIndex] = {
      ...chairs[objIndex],
      handle: 'extra-chair-cover',
    };
  }

  // need to do this because PLPItem will break on the recommended area because the
  // leg handle isn't in the recommended product list.
  if (allProducts && classicDiningProduct) {
    return [
      ...chairs,
      {
        ...classicDiningProduct,
        variants: getUniqCDVariants(allProducts),
        handle: 'the-classic-dining-chair',
        title: 'The Classic Dining Chair',
      },
    ];
  }

  if (filterProductsWithoutHandle && classicDiningProduct) {
    return [
      ...chairs,
      {
        ...classicDiningProduct,
        variants: getUniqCDVariants(filterProductsWithoutHandle),
        handle: 'the-classic-dining-chair',
        title: 'The Classic Dining Chair',
      },
    ];
  }

  return filterProductsWithoutHandle;
};

export const fetchRecommendations = async (productId) => {
  try {
    const products = await fetchProducts();
    if (!productId) {
      return mapRecommendedColors(mergedFetchedRecommendations(products));
    }

    const fetchResponse = await fetch(`/recommendations/products.json?product_id=${productId}&limit=4`);
    const response = await fetchResponse.json();

    return response.products;

  } catch (err) {
    console.log(err);
    return [];
  }
};

export const fetchProductByHandle = async (handle, metafields) => {
  const fetchResponse = await fetch(`/products/${handle}.json`).then((res) => res.json());

  return mappedProducts([
    { ...fetchResponse.product, handle: metafields, metafields },
  ])[0];
};

export const getPriceInRanges = (min, max) =>
  min === max
    ? `$${max.toString().slice(0, 3)}`
    : `$${min.toString().split(0)[0]} - $${max.toString().slice(0, 3)}`;

export const isMobile = (navigator) =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

export const getExtraChairCoverProducts = async (originalProduct) => {
  try {
    const products = await fetchProducts();
    const extraChairCoverProducts = products.filter((item) => item.title === 'Extra Chair Cover');
    const mainProduct = extraChairCoverProducts.find((item) => item.handle === 'extra-chair-cover');

    if (extraChairCoverProducts.length === 1) {
      return originalProduct;
    }

    const allVariants = extraChairCoverProducts.reduce((acc, product) => {
      const mapVariantsWithOriginalHandle = product.variants.map((variant) => ({
        ...variant,
        handle: product.handle,
      }));

      return [...acc, ...mapVariantsWithOriginalHandle];
    }, []);

    const uniqueVariantSkus = [...new Set(allVariants.map((variant) => variant.sku))];
    const variants = uniqueVariantSkus.map((variantSku) =>
      allVariants.find((item) => item.sku === variantSku)
    );

    return { ...mainProduct, variants };
  } catch (err) {
    console.log(err);

    return [];
  }
};

export const sendKlaviyoEvent = (variantID, _learnq) => {
  fetchVariantById(variantID).then((productData) => {
    const klaviyoVariant = {
      name: productData.name,
      price: productData.price,
      featuredImage: productData.featured_image.src,
      option1: productData.option1,
      option2: productData.option2,
    };

    _learnq.push(['track', 'Added to Cart', klaviyoVariant]);
  });
};

export const handleAddToCart = (e, item, qty, variantID, callback) => {
  e.preventDefault();

  if (_learnq) {
    sendKlaviyoEvent(variantID, _learnq);
  }

  // trackHeapEvent('Add to cart', { item, qty, variantID });
  addEventToDataLayer({ event: 'Add to cart' });

  $.ajax({
    type: 'POST',
    url: '/cart/add.js',
    data: {
      items: [
        {
          quantity: qty,
          id: variantID,
        },
      ],
    },
    dataType: 'json',
    error: (err) => {
      console.log(err);
    },
    success: () => {
      $('#mini-cart-container a').trigger('click');
      PubSub.publish('UPDATE_CART_COUNT', 1);
      if (callback) {
        callback();
      }
    },
  });
};
