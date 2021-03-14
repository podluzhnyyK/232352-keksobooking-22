
//Заменяем тип жилья из массива на текст
const stringifyOfferType = function (params) {
  if (params === 'flat') {
    return 'Квартира'
  } else if (params === 'bungalow') {
    return 'Бунгало'
  } else if (params === 'house') {
    return 'Дом'
  } else {
    return 'Дворец'
  }
}

//Заполняем список с особенностями жилья
const setupFeatures = (params, key) => {
  params.textContent = '';
  for (let i = 0; i < key.features.length; i++) {
    let featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature');
    featureItem.classList.add('popup__feature--'.concat(key.features[i]));
    params.append(featureItem);
  }
}

// Создаем картинки жилья
const setupPhotos = (params, key) => {
  params.textContent = '';
  for (let i = 0; i < key.photos.length; i++) {
    let imgitem = document.createElement('img');
    imgitem.classList.add('popup__photo');
    imgitem.src = key.photos[i];
    imgitem.title = 'Фотография жилья';
    imgitem.width = '45';
    imgitem.height = '40';
    params.append(imgitem);
  }
}

export {stringifyOfferType, setupFeatures, setupPhotos};
