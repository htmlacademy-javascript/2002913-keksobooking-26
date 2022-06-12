//Функция, возвращающая случайное целое число из переданного диапазона включительно,источник https://schoolsw3.com/js/js_random.php
// eslint-disable-next-line no-unused-vars
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно. Источник MDN
function getRandomNumber(min, max, decimalPoint = 5) {
  if (min > max || min < 0 || max <= 0) {
    throw new RangeError(`Задан неверный диапазон! Укажите другие числа. Параметр должен быть между ${min} и ${max}`);
  }
  const random = Math.random() * (max - min) + min;
  return +(random.toFixed(decimalPoint));
}


const AVATARS = [];
for (let i = 1; i <=10; i++) {
  AVATARS.push(i);
}

const TITLES = [
  'Уютное гнездышко для молодоженов',
  'Логово холостяка',
  'Тихая семейная гавань',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTIONS = [
  'панорманые окна',
  'совместный санузел',
  'есть кабинет',
  'детская кроватка'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createAdvertisement = () => ({
  author : {
    avatar : `img/avatars/user${getRandomArrayElement(AVATARS)}.png`
  },

  offer : {
    title : getRandomArrayElement(TITLES),
    address : '{{location.lat}}, {{location.lng}}',
    type : getRandomArrayElement(TYPES),
    rooms :  getRandomPositiveInteger(1, 6),
    price : getRandomPositiveInteger(1, 10),
    guests : getRandomPositiveInteger(1, 10),
    checkin : getRandomArrayElement(CHECKIN),
    checkout : getRandomArrayElement(CHECKOUT),
    features : getRandomArrayElement(FEATURES),
    description : getRandomArrayElement(DESCRIPTIONS),
    photos : getRandomArrayElement(PHOTOS),
  },

  location : {
    lat : getRandomNumber(35.65000, 35.70000),
    lng : getRandomNumber(139.70000, 139.80000),
  },
});

const SIMILAR_APARTMENTS_NEARBY = 10;

const simularAdvertisements = Array.from({length: SIMILAR_APARTMENTS_NEARBY}, createAdvertisement);

simularAdvertisements();
