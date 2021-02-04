//целое число из переданного диапазона включительно
const getRandomIntInclusive = function(min, max) {

  if(!isNaN(min) && !isNaN(max)) {

    min = Math.ceil(min);
    max = Math.floor(max);

    if (min >= 0 && max >= 0) {
      return (max > min) ? Math.floor(Math.random() * (max - min + 1)) + min : min;
    }
    return null;
  }
  return null;
}

getRandomIntInclusive(1, 3);

//число с плавающей точкой из переданного диапазона включительно
const getRandomDecimalInclusive = function(min, max, decimalPlaces) {

  if(!isNaN(min) && !isNaN(max) && !isNaN(decimalPlaces)) {

    if (min >= 0 && max >= 0) {
      let random = (max > min) ? (min + Math.random() * (max - min)).toFixed(decimalPlaces) : min;
      return parseFloat(random);
    }
    return null;
  }
  return null;
}

getRandomDecimalInclusive(1.3, 3.1, 1);


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

const getRandomArrayElement = (elemets) => {
  return elemets[getRandomIntInclusive(0 , elemets.length - 1)];
};

const apartmentDeals = () => {

  //Набираем в массив случайное количество элементов
  const randomFeatures = [];
  const randomFeaturesIndicators = () => {
    for( let i = 0; i < features.length; i += 1) {
      if (getRandomIntInclusive(0, 1) == true) {
        randomFeatures.push(features[i]);
      }
    }
    return randomFeatures;
  };

  const randomPhotos = [];
  const randomPhotosIndicators = () => {
    for( let i = 0; i < photos.length; i += 1) {
      if (getRandomIntInclusive(0, 1) == true) {
        randomPhotos.push(photos[i]);
      }
    }
    return randomPhotos;
  };

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
        features : randomFeaturesIndicators(),
        description : description,
        photos : randomPhotosIndicators(),
      },

      location : {
        x : getRandomDecimalInclusive(35.65000, 35.70000, 5),
        y : getRandomDecimalInclusive(139.70000, 139.80000, 5),
      },
    },
  ];
};

const similarDeals = new Array(4).fill(null).map(() => apartmentDeals());

similarDeals; // чтобы небыло ошибок в файле
