const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomNumber = (min, max, decimalPoint = 5) => {

  if (min > max || min < 0 || max <= 0) {
    throw new RangeError(`Задан неверный диапазон! Укажите другие числа. Параметр должен быть между ${min} и ${max}`);
  }
  const random = Math.random() * (max - min) + min;

  return +(random.toFixed(decimalPoint));
};

const getRandomArray = (arr) => {
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

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

export {
  getRandomArrayElement,
  getRandomPositiveInteger,
  getRandomNumber,
  getRandomArray
};
