const includedForm = function name(params) {
  let adForm = params;
  adForm.classList.remove('ad-form--disabled');
  let adFormAll = adForm.children;
  for (let i = 0; i < adFormAll.length; i++) {
    adFormAll[i].removeAttribute('disabled', '');
  }
}

export {includedForm};
