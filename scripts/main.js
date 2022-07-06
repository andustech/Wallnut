import React, {lazy} from 'react';
import './base.css';
import { createReactComponents } from './utils';
// import ValuePropComponent from './Components/ProductFeature/ValuePropComponent';
const ValuePropComponent = lazy(() => import('./Components/ProductFeature/ValuePropComponent'));
// import Hero from './Components/Hero';
const Hero = lazy(() => import('./Components/Hero'));

// import('./Components/VideoPromoSection').then((data) => {
//   createReactComponents([{ id: 'react-promo-video-section', module: data.default }]);
// });
const VideoPromoSection = lazy(() => import('./Components/VideoPromoSection'));

// import('./Components/ProductRecommendation').then((data) => {
//   createReactComponents([{ id: 'react-product-recommendation', module: data.default }]);
// });
// const ProductRecommendation = lazy(() => import('./Components/ProductRecommendation'));

const components = [
  { id: 'react-value-prop-section', module: ValuePropComponent },
  { id: 'react-hero', module: Hero },
  { id: 'react-promo-video-section', module: VideoPromoSection },
];

createReactComponents(components);
