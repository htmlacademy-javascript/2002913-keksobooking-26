const form = document.querySelector('.ad-form');
const type = form.querySelector('#type');
const priceField = form.querySelector('#price');
const MAX_PRICE = 100000;
const minPriceDictionary = {
  bungalow:  0,
  flat:  1000,
  hotel:  3000,
  house:  5000,
  palace:  10000,
};

const roomNumberOptions = {
  '1' :  ['1'] ,
  '2' : ['2', '1'],
  '3' : ['3', '2', '1'],
  '100' : ['0'],
};

const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextTag: 'span',
});

const minPrice = minPriceDictionary[type.value];

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

const onTypeChange = () => {
  priceField.placeholder = minPriceDictionary[type.value];
  pristine.validate(priceField);
};

form.querySelectorAll('[name = "type"]').forEach((item) => {
  item.addEventListener('change', onTypeChange);
});

const validatePrice = (value) => value >= minPrice && value <= MAX_PRICE;

const getPriceErrorMessage = () => `Минимальная цена ${minPriceDictionary[type.value]} за ночь.
Максимальная цена ${MAX_PRICE} за ночь.`;


pristine.addValidator(priceField, validatePrice, getPriceErrorMessage);


const validateCapacity = () => roomNumberOptions[roomNumber.value].includes(capacity.value);

const getRoomErrorMessage = () => 'Количество комнат не соответсвует количеству гостей';

const getCapacityErrorMessage = () => 'Количество гостей не соответствует количеству комнат';

pristine.addValidator(roomNumber, validateCapacity, getRoomErrorMessage);
pristine.addValidator(capacity, validateCapacity, getCapacityErrorMessage);


const setupValidtion = () => {
  pristine.addValidator(priceField, validatePrice, getPriceErrorMessage);
  pristine.addValidator(roomNumber, validateCapacity, getRoomErrorMessage);
  pristine.addValidator(capacity, validateCapacity, getCapacityErrorMessage);

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });
};

export {setupValidtion};
