import {disabledForm} from './disabled.js';
import {activeState} from './map.js';
import {getData} from './data.js';
import { setUserFormSubmit, onFormSuccess } from './form.js';
import {changeFilter} from './filter.js';

disabledForm(document.querySelector('.ad-form'));
disabledForm(document.querySelector('.map__filters'));

getData((params) => {
  activeState(params);
  changeFilter(() => activeState(params));
});

setUserFormSubmit(onFormSuccess);
// let select = document.getElementById('housing-type');

// select.addEventListener('change', function(){
//   let getValue = this.value;

//   console.log( getValue );
// });
