const disabledForm = function name(params) {
  let adForm = params;
  adForm.classList.add('ad-form--disabled');
  let adFormAll = adForm.children;
  for (let i = 0; i < adFormAll.length; i++) {
    adFormAll[i].setAttribute('disabled', '');
  }
}

export {disabledForm};
