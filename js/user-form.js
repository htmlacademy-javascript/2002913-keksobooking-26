import { sendData } from './api.js';
import { renderError, renderSuccess } from './util.js';

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
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');
const submitButton = form.querySelector('.ad-form__submit');


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
  priceField.min = minPriceDictionary[type.value];
  pristine.validate(priceField);
};

const onTimeInChange = () => {
  timeOut.value = timeIn.value;
};

const onTimeOutChange = () => {
  timeIn.value = timeOut.value;
};

const validatePrice = (value) => value >= minPrice && value <= MAX_PRICE;
const validateCapacity = () => roomNumberOptions[roomNumber.value].includes(capacity.value);

const getPriceErrorMessage = () => `Минимальная цена ${minPriceDictionary[type.value]} за ночь.
Максимальная цена ${MAX_PRICE} за ночь.`;

const getRoomErrorMessage = () => 'Количество комнат не соответсвует количеству гостей';

const getCapacityErrorMessage = () => 'Количество гостей не соответствует количеству комнат';

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setupValidation = () => {
  pristine.addValidator(priceField, validatePrice, getPriceErrorMessage);
  pristine.addValidator(roomNumber, validateCapacity, getRoomErrorMessage);
  pristine.addValidator(capacity, validateCapacity, getCapacityErrorMessage);

  type.addEventListener('change', onTypeChange);
  timeIn.addEventListener('change', onTimeInChange);
  timeOut.addEventListener('change', onTimeOutChange);
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if(isValid) {
      blockSubmitButton();
      sendData(
        () => {
          renderSuccess();
          unblockSubmitButton();
        },
        () => {
          renderError();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {setupValidation};
