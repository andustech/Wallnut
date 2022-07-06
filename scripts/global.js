import React, {lazy} from 'react';
import ReactDOM from 'react-dom';
import './base.css';
import { subscribeToUpdatePrice } from './pub-sub';
import { createReactComponents } from './utils';
import { setOptimizelySession } from './utils/optimizely';



// import DesktopAnnouncement from './Components/DesktopAnnouncement';
// import IndexBetterWay from './Components/IndexBetterWay';
// import indexMoodSection from './Components/indexMoodSection';
// import indexTestimonialSection from './Components/indexTestimonialSection';
// import AfterPayCopy from './Components/AfterPayCopy';
// import Header from './Components/Header';
// import ProductRecommendation from './Components/ProductRecommendation';
// import howItWorks from './Components/howItWorks';
// import meetWallnut from './Components/meetWallnut';
// import howItWorksVideo from './Components/howItWorksVideo';
// import howItWorksMission from './Components/howItWorksMission';
// import hangingWallnut from './Components/hangingWallnut';
// import instructionsPdf from './Components/instructionsPdf';
// import instructionsVideos from './Components/instructionsVideos';

const DesktopAnnouncement = lazy(() => import('./Components/DesktopAnnouncement'));
const IndexBetterWay = lazy(() => import('./Components/IndexBetterWay'));
const indexMoodSection = lazy(() => import('./Components/indexMoodSection'));
const indexTestimonialSection = lazy(() => import('./Components/indexTestimonialSection'));
const AfterPayCopy = lazy(() => import('./Components/AfterPayCopy'));
const Header = lazy(() => import('./Components/Header'));
const ProductRecommendation = lazy(() => import('./Components/ProductRecommendation'));
const howItWorks = lazy(() => import('./Components/howItWorks'));
const meetWallnut = lazy(() => import('./Components/meetWallnut'));
const howItWorksVideo = lazy(() => import('./Components/howItWorksVideo'));
const howItWorksMission = lazy(() => import('./Components/howItWorksMission'));
const hangingWallnut = lazy(() => import('./Components/hangingWallnut'));
const instructionsPdf = lazy(() => import('./Components/instructionsPdf'));
const instructionsVideos = lazy(() => import('./Components/instructionsVideos'));

// const DesktopAnnouncement = ()=> {
//   const element = document.getElementById('react-desktop-announcement');
//   let jsonData = ''
//   if (element) {
//     jsonData = element.children[0] ? element.children[0].text : '{}';
//   }

//   console.log('data => ', {...JSON.parse(jsonData)})
//   return(
//     <Suspense fallback={<div>Loading...</div>}>
//       <DesktopAnnouncementTemp {...JSON.parse(jsonData)} />
//     </Suspense>
//   )
// }


setOptimizelySession();

// import('./Components/CartHighlight').then((data) => {
//   createReactComponents([
//     { id: 'react-cart-highlight-mobile', module: data.default },
//     { id: 'react-cart-highlight', module: data.default },
//   ]);
// });

// import('./Components/PopUpModal').then((data) => {
//   createReactComponents([{ id: 'react-pop-up-modal', module: data.default }]);
// });

// import('./Components/EmptyCart').then((data) => {
//   createReactComponents([{ id: 'react-empty-cart', module: data.default }]);
// });

// import('./Components/About').then((data) => {
//   createReactComponents([{ id: 'react-about-page', module: data.default }]);
// });

const CartHighlight = lazy(() => import('./Components/CartHighlight'));
const PopUpModal = lazy(() => import('./Components/PopUpModal'));
const EmptyCart = lazy(() => import('./Components/EmptyCart'));
const About = lazy(() => import('./Components/About'));

const components = [
  { id: 'react-desktop-announcement', module: DesktopAnnouncement },
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
  { id: 'react-cart-highlight-mobile', module: CartHighlight },
  { id: 'react-cart-highlight', module: CartHighlight },
  { id: 'react-pop-up-modal', module: PopUpModal },
  { id: 'react-empty-cart', module: EmptyCart },
  { id: 'react-about-page', module: About },
];

createReactComponents(components);

subscribeToUpdatePrice((actionName, data) => {
  ReactDOM.render(
    <AfterPayCopy price={data} product={null} />,
    document.getElementById('react-afterpay-cart-copy')
  );
});
