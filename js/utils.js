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

const getRandomArrayElement = (elemets) => {
  return elemets[getRandomIntInclusive(0 , elemets.length - 1)];
};

//Набираем в массив случайное количество элементов
const getRandomArrayIndicators = (elemets) => {
  let randomArry = [];
  for( let i = 0; i < elemets.length -1; i += 1) {
    if (getRandomIntInclusive(0, 1) == true) {
      randomArry.push(elemets[i]);
    }
  }
  return randomArry;
};

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc' || evt.code === 27;
};

export {getRandomIntInclusive, getRandomDecimalInclusive, getRandomArrayElement, getRandomArrayIndicators, isEscEvent};

