import React, {lazy} from 'react';
import './base.css';
// import ProductSection from './Components/ProductSection';
const ProductSection = lazy(() => import('./Components/ProductSection'));
import { createReactComponents } from './utils';

const components = [{ id: 'react-product-section', module: ProductSection }];

createReactComponents(components);
