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

// const randomLat =  getRandomNumber(35.65000, 35.70000);
//   const randomLng = getRandomNumber(139.70000, 139.80000);
const TOKIO_MIN_LAT = 35.65000;

const TOKIO_MAX_LAT = 35.70000;

const TOKIO_MIN_LNG = 139.70000;

const TOKIO_MAX_LNG = 139.80000;

const APARTMENTS_AMOUNT = 10;

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getArray = (arr) => {
  const random = getRandomPositiveInteger(1, arr.length);
  const array = [];

  while (array.length < random) {
    const indexOfEl = getRandomPositiveInteger(0, arr.length - 1);
    const el = arr[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }

  return array;
};

const getRandomNumber = (min, max, decimalPoint = 5) => {

  if (min > max || min < 0 || max <= 0) {
    throw new RangeError(`Задан неверный диапазон! Укажите другие числа. Параметр должен быть между ${min} и ${max}`);
  }
  const random = Math.random() * (max - min) + min;

  return +(random.toFixed(decimalPoint));
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createAd = (i) => {
  const randomLat =  getRandomNumber(TOKIO_MIN_LAT, TOKIO_MAX_LAT);
  const randomLng = getRandomNumber(TOKIO_MIN_LNG, TOKIO_MAX_LNG);
  const avatar = i < 10 ? '0%{i}' : i;


  return {
    author : {
      avatar : `img/avatars/user${avatar}.png`
    },
    offer : {
      title : getRandomArrayElement(TITLES),
      address : `${randomLat}, ${randomLng}`,
      type : getRandomArrayElement(TYPES),
      rooms :  getRandomPositiveInteger(1, 6),
      price : getRandomPositiveInteger(1, 10),
      guests : getRandomPositiveInteger(1, 10),
      checkin : getRandomArrayElement(CHECKIN),
      checkout : getRandomArrayElement(CHECKOUT),
      features : getArray(FEATURES),
      description : getRandomArrayElement(DESCRIPTIONS),
      photos : getArray(PHOTOS),
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

createAds();
