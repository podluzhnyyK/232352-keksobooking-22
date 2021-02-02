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
