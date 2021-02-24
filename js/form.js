let formPrice = document.getElementById('price');
let timein = document.getElementById('timein');
let timeout = document.getElementById('timeout');

document.getElementById('type').addEventListener('change', function (e) {
  if (e.target.value == 'bungalow') {
    formPrice.setAttribute('min', '0');
    formPrice.setAttribute('placeholder', '0');
  } else if (e.target.value == 'flat') {
    formPrice.setAttribute('min', '1000');
    formPrice.setAttribute('placeholder', '1000');
  } else if (e.target.value == 'house') {
    formPrice.setAttribute('min', '5000');
    formPrice.setAttribute('placeholder', '5000');
  } else if (e.target.value == 'palace') {
    formPrice.setAttribute('min', '10000');
    formPrice.setAttribute('placeholder', '100000');
  }
});

const getTimeinTimeout = () => {
  timein.addEventListener('change', function (e) {
    if (e.target.value == '12:00') {
      timeout.value = '12:00';
    } else if (e.target.value == '13:00') {
      timeout.value = '13:00';
    } else if (e.target.value == '14:00') {
      timeout.value = '14:00';
    }
  });
  timeout.addEventListener('change', function (e) {
    if (e.target.value == '12:00') {
      timein.value = '12:00';
    } else if (e.target.value == '13:00') {
      timein.value = '13:00';
    } else if (e.target.value == '14:00') {
      timein.value = '14:00';
    }
  });
};

export {getTimeinTimeout};
