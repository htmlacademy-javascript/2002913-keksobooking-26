import {
  getRandomArrayElement,
  getRandomPositiveInteger,
  getRandomNumber,
  getRandomArray
} from './util.js';

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

const TOKIO_MIN_LAT = 35.65000;

const TOKIO_MAX_LAT = 35.70000;

const TOKIO_MIN_LNG = 139.70000;

const TOKIO_MAX_LNG = 139.80000;

const APARTMENTS_AMOUNT = 10;


const createAd = (i) => {
  const randomLat =  getRandomNumber(TOKIO_MIN_LAT, TOKIO_MAX_LAT);
  const randomLng = getRandomNumber(TOKIO_MIN_LNG, TOKIO_MAX_LNG);
  const AVATARS = i < 10 ? `0${i}` : i;


  return {
    author : {
      avatar : `img/avatars/user${AVATARS}.png`
    },
    offer : {
      title : getRandomArrayElement(TITLES),
      address : `${randomLat}, ${randomLng}`,
      type : getRandomArrayElement(TYPES),
      rooms :  getRandomPositiveInteger(1, 6),
      price : getRandomPositiveInteger(1, 10000),
      guests : getRandomPositiveInteger(1, 10),
      checkin : getRandomArrayElement(CHECKIN),
      checkout : getRandomArrayElement(CHECKOUT),
      features : getRandomArray(FEATURES),
      description : getRandomArrayElement(DESCRIPTIONS),
      photos : getRandomArray(PHOTOS),
    },
    location : {
      lat : randomLat,
      lng : randomLng,
    },
  };
};


const createAds = () => {
  const data = [];

  for (let i = 1; i <= APARTMENTS_AMOUNT; i++) {
    const ad = createAd(i);
    data.push(ad);
  }

  return data;
};

export {createAds};

