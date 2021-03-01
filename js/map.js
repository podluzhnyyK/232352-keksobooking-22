import {includedForm} from './included.js';
import {generateDeals} from './data.js';
import {stringifyOfferType, setupFeatures, setupPhotos} from './offers.js';

const activeState = function name(params) {
  const map = L.map(params)
    .setView({
      lat: 35.652832,
      lng: 139.839478,
    }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  //Кастомный маркер
  const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  //Добавляем маркер
  const marker = L.marker(
    {
      lat: 35.652832,
      lng: 139.839478,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },

  );

  marker.addTo(map);

  //Добавляем координаты главного маркера
  let address = document.querySelector('#address');
  address.setAttribute('readonly', '');
  marker.on('moveend', (evt) => {
    address.value = evt.target.getLatLng();
  });

  //
  const createCustomPopup = (point) => {
    const balloonTemplate = document.querySelector('#card').content.querySelector('.popup');
    const popupElement = balloonTemplate.cloneNode(true);

    point.forEach(({author, offer}) => {

      popupElement.querySelector('.popup__avatar').src = author.avatar;
      popupElement.querySelector('.popup__title').textContent = offer.title;
      popupElement.querySelector('.popup__text--address').textContent = offer.address;
      popupElement.querySelector('.popup__text--price').textContent = offer.price.concat(' ₽/ночь');
      popupElement.querySelector('.popup__type').textContent = stringifyOfferType(offer.type);
      popupElement.querySelector('.popup__text--capacity').textContent = offer.rooms.concat(' комнаты для ', offer.guests, ' гостей');
      popupElement.querySelector('.popup__text--time').textContent = 'Заезд после '.concat(offer.checkin, ' выезд до ', offer.checkout);
      popupElement.querySelector('.popup__description').textContent = offer.description;
      setupFeatures(popupElement.querySelector('.popup__features'), offer);
      setupPhotos(popupElement.querySelector('.popup__photos'), offer);

    });

    return popupElement;
  };

  generateDeals().forEach(({location: {lat, lng}}) => {
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    const markers = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );

    markers.addTo(map).bindPopup(createCustomPopup(generateDeals()));
  });

  includedForm(document.querySelector('.ad-form'));
  includedForm(document.querySelector('.map__filters'));
}

export {activeState}
