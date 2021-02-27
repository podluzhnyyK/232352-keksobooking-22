//import {showOffers} from './offers.js';
//import {generateDeals} from './data.js';

//const deals = generateDeals();

//showOffers(deals);

import {disabledForm} from './disabled.js';
import {activeState} from './map.js';

disabledForm(document.querySelector('.ad-form'));
disabledForm(document.querySelector('.map__filters'));

activeState('map-canvas');
