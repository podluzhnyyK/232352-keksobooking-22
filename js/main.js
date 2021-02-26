import {showOffers} from './offers.js';
import {generateDeals} from './data.js';

const deals = generateDeals()

showOffers(deals);
