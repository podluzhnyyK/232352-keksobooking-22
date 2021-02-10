import {avatar, title, price, type, rooms, guests, checkin, checkout, features, description, photos} from './data.js';
import {getRandomIntInclusive, getRandomDecimalInclusive, getRandomArrayElement, getRandomArrayIndicators} from './utils.js'

const apartmentDeals = () => {
  return [
    {
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
        x : getRandomDecimalInclusive(35.65000, 35.70000, 5),
        y : getRandomDecimalInclusive(139.70000, 139.80000, 5),
      },
    },
  ];
};

const similarDeals = new Array(4).fill(null).map(() => apartmentDeals());

console.log(similarDeals); // для проверки
