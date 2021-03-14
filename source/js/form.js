import {sendData} from './data.js';
import { successModal, errorModal } from './modal.js';
import {marker, CENTER_LAT, CENTER_LNG} from './map.js';

let formPrice = document.getElementById('price');
let timein = document.getElementById('timein');
let timeout = document.getElementById('timeout');
let room = document.querySelector('#room_number');
let capacity = document.querySelector('#capacity');
let adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

//Проверяем тип жилья и цену
const housingPrice = () => {
  formPrice.setAttribute('min', '0');
  formPrice.setAttribute('max', '1000000');
  document.getElementById('type').addEventListener('change', function (e) {
    if (e.target.value === 'bungalow') {
      formPrice.setAttribute('min', '0');
      formPrice.setAttribute('placeholder', '0');
    } else if (e.target.value === 'flat') {
      formPrice.setAttribute('min', '1000');
      formPrice.setAttribute('placeholder', '1000');
    } else if (e.target.value === 'house') {
      formPrice.setAttribute('min', '5000');
      formPrice.setAttribute('placeholder', '5000');
    } else if (e.target.value === 'palace') {
      formPrice.setAttribute('min', '10000');
      formPrice.setAttribute('placeholder', '100000');
    }
  });
}

// Проверяем время заезда и выезда
const getTimeInTimeout = () => {
  timein.addEventListener('change', function (e) {
    if (e.target.value === '12:00') {
      timeout.value = '12:00';
    } else if (e.target.value === '13:00') {
      timeout.value = '13:00';
    } else if (e.target.value === '14:00') {
      timeout.value = '14:00';
    }
  });

  timeout.addEventListener('change', function (e) {
    if (e.target.value === '12:00') {
      timein.value = '12:00';
    } else if (e.target.value === '13:00') {
      timein.value = '13:00';
    } else if (e.target.value === '14:00') {
      timein.value = '14:00';
    }
  });
};

// Проверяем количество комнат и гостей
function roomsSincGuest(param1, param2) {
  let optionsMapping = {
    1: [1],
    2: [1, 2],
    3: [1, 2, 3],
    100: [0],
  };
  return function () {
    let value = +param1.value;
    let options = param2.options;
    let optionsLength = options.length;
    let availableOptions = optionsMapping[value];

    for (let i = 0; i < optionsLength; i++) {
      if(availableOptions.indexOf(+options[i].value) !== -1){
        options[i].disabled = false;
        if(+options[i].value === value || availableOptions.length === 1){
          options[i].selected = true;
        }
      } else {
        options[i].disabled = true;
      }
    }
  };
}


function formsWork() {
  housingPrice();
  getTimeInTimeout();
  room.addEventListener('change', roomsSincGuest(room, capacity));
}

// Отправка формы
let typeDefault = document.querySelector('#type').value;
let priceDefault = document.querySelector('#price').placeholder;
let timeInDefault = document.querySelector('#timein').value;
let timeOutDefault = document.querySelector('#timeout').value;
let roomDefault = document.querySelector('#room_number').value;
let capacityDefault = document.querySelector('#capacity').value;
let featureCheckbox = document.querySelectorAll('.feature__checkbox');
let descriptionDefault = document.querySelector('#description').value;
let resetButton = document.querySelector('.ad-form__reset');
let addressForm = document.querySelector('#address');

const onFormSuccess = () => {
  document.querySelector('#title').value = '';
  document.querySelector('#address').value = '35.652832, 139.839478';
  document.querySelector('#type').value = typeDefault;
  document.querySelector('#price').placeholder = priceDefault;
  document.querySelector('#price').min = priceDefault;
  document.querySelector('#price').value = '';
  document.querySelector('#timein').value = timeInDefault;
  document.querySelector('#timeout').value = timeOutDefault;
  document.querySelector('#room_number').value = roomDefault;
  document.querySelector('#capacity').value = capacityDefault;
  featureCheckbox.forEach(element => {
    element.checked = false;
  });
  document.querySelector('#description').value = descriptionDefault;
  successModal();
};

const onError = () => {
  errorModal();
};

const setUserFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      onSuccess,
      onError,
      new FormData(evt.target),
    );
  });
};

// Очистить форму
const resetAddForm = () => {
  adForm.reset();
  mapFilters.reset();
  marker.setLatLng({lat: CENTER_LAT, lng: CENTER_LNG});
  addressForm.value = `${CENTER_LAT}, ${CENTER_LNG}`;
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetAddForm();
});

export {formsWork, setUserFormSubmit, onFormSuccess};
