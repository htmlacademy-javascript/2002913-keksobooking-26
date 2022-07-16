const ALERT_SHOW_TIME = 5000;

const createErrorTemplate = document.querySelector('#error').content.querySelector('.error');

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

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const renderError = () => {
  const adElement = createErrorTemplate.cloneNode(true);
  document.body.append(adElement);

  setTimeout(() => {
    adElement.remove();
  }, ALERT_SHOW_TIME);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

export {
  getRandomArrayElement,
  getRandomPositiveInteger,
  getRandomNumber,
  getRandomArray,
  showAlert,
  renderError,
};

