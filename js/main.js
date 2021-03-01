import {disabledForm} from './disabled.js';
import {activeState} from './map.js';

disabledForm(document.querySelector('.ad-form'));
disabledForm(document.querySelector('.map__filters'));

activeState('map-canvas');
