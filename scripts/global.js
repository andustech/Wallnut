import React from 'react';
import ReactDOM from 'react-dom';
import './base.css';
import { subscribeToUpdatePrice } from './pub-sub';
import { createReactComponents } from './utils';
import { setOptimizelySession } from './utils/optimizely';

// import BestSellers from './Components/BestSellers';
import DesktopAnnouncement from './Components/DesktopAnnouncement';
import IndexBetterWay from './Components/IndexBetterWay';
import indexMoodSection from './Components/indexMoodSection';
import indexTestimonialSection from './Components/indexTestimonialSection';
import AfterPayCopy from './Components/AfterPayCopy';
import Header from './Components/Header';
import ProductRecommendation from './Components/ProductRecommendation';
import howItWorks from './Components/howItWorks';
import meetWallnut from './Components/meetWallnut';
import howItWorksVideo from './Components/howItWorksVideo';
import howItWorksMission from './Components/howItWorksMission';
import hangingWallnut from './Components/hangingWallnut';
import instructionsPdf from './Components/instructionsPdf';
import instructionsVideos from './Components/instructionsVideos';

setOptimizelySession();

import('./Components/CartHighlight').then((data) => {
  createReactComponents([
    { id: 'react-cart-highlight-mobile', module: data.default },
    { id: 'react-cart-highlight', module: data.default },
  ]);
});

import('./Components/PopUpModal').then((data) => {
  createReactComponents([{ id: 'react-pop-up-modal', module: data.default }]);
});

import('./Components/EmptyCart').then((data) => {
  createReactComponents([{ id: 'react-empty-cart', module: data.default }]);
});

// import('./Components/CustomLandingOne').then((data) => {
//   createReactComponents([{ id: 'react-custom-landing-one', module: data.default }]);
// });

import('./Components/About').then((data) => {
  createReactComponents([{ id: 'react-about-page', module: data.default }]);
});

const components = [
  { id: 'react-desktop-announcement', module: DesktopAnnouncement },
  // { id: 'react-best-sellers', module: BestSellers },
  { id: 'react-header', module: Header },
  { id: 'react-product-recommendation', module: ProductRecommendation },
  { id: 'react-index-betterway', module: IndexBetterWay },
  { id: 'react-index-mood-section', module: indexMoodSection },
  { id: 'react-index-testimonial-section', module: indexTestimonialSection },
  { id: 'react-meet-wallnut', module: meetWallnut },
  { id: 'react-how-it-works', module: howItWorks },
  { id: 'react-how-it-works-video', module: howItWorksVideo },
  { id: 'react-hanging-wallnut', module: hangingWallnut },
  { id: 'react-how-it-works-mission', module: howItWorksMission },
  { id: 'react-instructions-pdf', module: instructionsPdf },
  { id: 'react-instructions-videos', module: instructionsVideos },
  { id: 'react-removal-videos', module: instructionsVideos },
];

createReactComponents(components);

subscribeToUpdatePrice((actionName, data) => {
  ReactDOM.render(
    <AfterPayCopy price={data} product={null} />,
    document.getElementById('react-afterpay-cart-copy')
  );
});
