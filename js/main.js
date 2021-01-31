//целое число из переданного диапазона включительно
let getRandomIntInclusive = function(min, max) {

  min = Math.ceil(min);
  max = Math.floor(max);

  if (min >= 0 && max >= 0) {
    return (max > min) ? Math.floor(Math.random() * (max - min + 1)) + min : null;
  }
  return null;
}

getRandomIntInclusive(1, 3);

//число с плавающей точкой из переданного диапазона включительно
let getRandomDecimalInclusive = function(min, max, decimalPlaces) {

  if (min >= 0 && max >= 0) {
    let random = (max > min) ? (min + Math.random() * (max - min)).toFixed(decimalPlaces) : null;
    return parseFloat(random);
  }
  return null;
}

getRandomDecimalInclusive(1.3, 3.1, 1);
