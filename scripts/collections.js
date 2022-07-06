import React, {lazy} from 'react';
import './base.css';
import { createReactComponents } from './utils';
// import PLPSection from './Components/PLP/PLPSection';
const PLPSection = lazy(() => import('./Components/PLP/PLPSection'));

const components = [{ id: 'react-plp-section', module: PLPSection }];

createReactComponents(components);
