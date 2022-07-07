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

const form = document.querySelector('.ad-form');
const type = form.querySelector('#type');
const priceField = form.querySelector('#price');
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');


const minPrice = minPriceDictionary[type.value];

const pristine = new Pristine(
  form,
  {
    classTo: 'ad-form__element',
    errorTextParent: 'ad-form__element',
    errorTextClass: 'ad-form__error-text',
    errorClass: 'ad-form__element--invalid',
    successClass: 'ad-form__element--valid',
    errorTextTag: 'span',
  },
  false,
);

const onTypeChange = () => {
  priceField.placeholder = minPriceDictionary[type.value];
  pristine.validate(priceField);
};

const validatePrice = (value) => value >= minPrice && value <= MAX_PRICE;
const validateCapacity = () => roomNumberOptions[roomNumber.value].includes(capacity.value);

const getPriceErrorMessage = () => `Минимальная цена ${minPriceDictionary[type.value]} за ночь.
Максимальная цена ${MAX_PRICE} за ночь.`;

const getRoomErrorMessage = () => 'Количество комнат не соответсвует количеству гостей';

const getCapacityErrorMessage = () => 'Количество гостей не соответствует количеству комнат';

type.addEventListener('change', onTypeChange);

const setupValidation = () => {
  pristine.addValidator(priceField, validatePrice, getPriceErrorMessage);
  pristine.addValidator(roomNumber, validateCapacity, getRoomErrorMessage);
  pristine.addValidator(capacity, validateCapacity, getCapacityErrorMessage);

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });
};

export {setupValidation};
