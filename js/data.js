import {getRandomDecimalInclusive, getRandomArrayElement, getRandomArrayIndicators} from './utils.js'

const avatar = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
]

const title = 'Студия 19кв.'

const price = [
  '11900',
  '13500',
  '15000',
]

const type = [
  'palace',
  'flat',
  'house',
  'bungalow',
]

const rooms = [
  '1',
  '2',
  '3',
  '4',
]

const guests = [
  '5',
  '7',
  '9',
]

const checkin = [
  '12:00',
  '13:00',
  '14:00',
]

const checkout = [
  '12:00',
  '13:00',
  '14:00',
]

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
]

const description = 'описание помещения.'

const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]

const generateDeal = function () {
  return {
    author : {
      avatar : getRandomArrayElement(avatar),
    },

    offer : {
      title : title,
      address : [location.x, location.y],
      price : getRandomArrayElement(price),
      type : getRandomArrayElement(type),
      rooms : getRandomArrayElement(rooms),
      guests : getRandomArrayElement(guests),
      checkin : getRandomArrayElement(checkin),
      checkout : getRandomArrayElement(checkout),
      features : getRandomArrayIndicators(features),
      description : description,
      photos : getRandomArrayIndicators(photos),
    },

    location : {
      lat : getRandomDecimalInclusive(35.65000, 35.70000, 5),
      lng : getRandomDecimalInclusive(139.70000, 139.80000, 5),
    },
  }
};

const DEALS_COUNT = 10;
const generateDeals = () => new Array(DEALS_COUNT).fill(null).map(() => generateDeal());

export {generateDeals};
