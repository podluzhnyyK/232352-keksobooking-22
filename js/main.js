import {disabledForm} from './disabled.js';
import {activeState} from './map.js';
import {getData} from './data.js';
import { setUserFormSubmit, onFormSuccess } from './form.js';

disabledForm(document.querySelector('.ad-form'));
disabledForm(document.querySelector('.map__filters'));

getData((params) => {
  activeState(params);
});

setUserFormSubmit(onFormSuccess);
