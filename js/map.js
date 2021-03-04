import {includedForm} from './included.js';
import {formsWork} from './form.js';
import {stringifyOfferType, setupFeatures, setupPhotos} from './offers.js';

let L = window.L;
const activeState = function name(params) {
  const map = L.map('map-canvas')
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

  //заполняем балун
  params.forEach(({author, offer, location}) => {

    const createCustomPopup = () => {
      const balloonTemplate = document.querySelector('#card').content.querySelector('.popup');
      const cardElement = balloonTemplate.cloneNode(true);

      const offerType = stringifyOfferType(offer.type);
      cardElement.querySelector('.popup__type').textContent = offerType;

      if (author.avatar) {
        cardElement.querySelector('.popup__avatar').src = author.avatar;
      } else {
        cardElement.querySelector('.popup__avatar').classList.add('hidden');
      }
      if (offer.title) {
        cardElement.querySelector('.popup__title').textContent = offer.title;
      } else {
        cardElement.querySelector('.popup__title').classList.add('hidden');
      }
      if (offer.address) {
        cardElement.querySelector('.popup__text--address').textContent = offer.address;
      } else {
        cardElement.querySelector('.popup__text--address').classList.add('hidden');
      }
      if (offer.price) {
        cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
      } else {
        cardElement.querySelector('.popup__text--price').classList.add('hidden');
      }
      if (offer.rooms || offer.guests) {
        cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
      } else {
        cardElement.querySelector('.popup__text--capacity').classList.add('hidden');
      }
      if (offer.checkin || offer.checkout) {
        cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
      } else {
        cardElement.querySelector('.popup__text--time').classList.add('hidden');
      }
      if (offer.description) {
        cardElement.querySelector('.popup__description').textContent = offer.description;
      } else {
        cardElement.querySelector('.popup__description').classList.add('hidden');
      }
      if ((offer.features).length > 0) {
        setupFeatures(cardElement.querySelector('.popup__features'), offer);
      } else {
        cardElement.querySelector('.popup__features').classList.add('hidden');
      }
      if ((offer.photos).length > 0) {
        setupPhotos(cardElement.querySelector('.popup__photos'), offer);
      } else {
        cardElement.querySelector('.popup__photos').classList.add('hidden');
      }

      return cardElement;
    };

    //Отрисовка всех маркеров
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    const markers = L.marker(
      {
        lat : location.lat,
        lng : location.lng,
      },
      {
        icon,
      },
    );

    markers.addTo(map).bindPopup(createCustomPopup(params));
  });

  //Активируем возможность работы с формами
  includedForm(document.querySelector('.ad-form'));
  includedForm(document.querySelector('.map__filters'));
  formsWork()
}

export {activeState}
