import {similarDeals} from './data.js';

const similarListElement = document.querySelector('.map__canvas');
const similarElementCard = document.querySelector('#card').content.querySelector('.popup');
const similarCards = similarDeals();
const similarListFragment = document.createDocumentFragment();


similarCards.forEach(([{author, offer}]) => {
  const cardElement = similarElementCard.cloneNode(true);
  cardElement.querySelector('.popup__avatar').src = author.avatar;
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = offer.price.concat(' ₽/ночь');
  cardElement.querySelector('.popup__type').textContent = offer.type;
  cardElement.querySelector('.popup__text--capacity').textContent = offer.rooms.concat(' комнаты для ', offer.guests, ' гостей');
  cardElement.querySelector('.popup__text--time').textContent = 'Заезд после '.concat(offer.checkin, ' выезд до ', offer.checkout);
  cardElement.querySelector('.popup__description').textContent = offer.description;

  cardElement.querySelector('.popup__features').textContent = '';
  for (let i = 0; i < offer.features.length; i++) {
    let featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature');
    featureItem.classList.add('popup__feature--'.concat(offer.features[i]));
    cardElement.querySelector('.popup__features').append(featureItem);
  }

  cardElement.querySelector('.popup__photos').textContent = '';
  for (let y = 0; y < offer.photos.length; y++) {
    let imgitem = document.createElement('img');
    imgitem.classList.add('popup__photo');
    imgitem.src = offer.photos[y];
    imgitem.title = 'Фотография жилья';
    imgitem.width = '45';
    imgitem.height = '40';
    cardElement.querySelector('.popup__photos').append(imgitem);
  }

  similarListFragment.appendChild(cardElement);
});

export {similarListElement, similarListFragment};
