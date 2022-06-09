//Функция, возвращающая случайное целое число из переданного диапазона включительно,источник https://schoolsw3.com/js/js_random.php
// eslint-disable-next-line no-unused-vars
const getRandomInteger = (min, max) => {
  if (min > max || min < 0 || max <= 0) {
    return ('Задан неверный диапазон! Укажите другие числа.');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно. Источник MDN
const getRandomNumber = (min, max, decimalPoint = 5) => {
  if (min > max || min < 0 || max <= 0) {
    return ('Задан неверный диапазон! Укажите другие числа.');
  }
  const random = Math.random() * (max - min) + min;
  return +(random.toFixed(decimalPoint));
};

getRandomInteger(1, 440);
getRandomNumber(2, 34, 4);
