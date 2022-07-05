
// Пользователь может вписать цену в поле, а может указать её перемещением ползунка слайдера. Слайдер реализуется сторонней библиотекой noUiSlider.
// 3.6. Поле «Количество комнат» синхронизировано с полем «Количество мест»
// таким образом, что при выборе количества комнат вводятся ограничения на допустимые варианты выбора количества гостей:
// 1 комната — «для 1 гостя»;
// 2 комнаты — «для 2 гостей» или «для 1 гостя»;
// 3 комнаты — «для 3 гостей», «для 2 гостей» или «для 1 гостя»;
// 100 комнат — «не для гостей».
// Обратите внимание, под ограничениями подразумевается валидация.
// Ограничение путём удаления из разметки лишних <option> или добавления им состояния disabled приведёт к плохому UX (опыту взаимодействия). Даже если уже выбранное значение не попадает под новые ограничения, не стоит без ведома пользователя изменять значение поля. Пусть ошибку отловит валидация формы.

const form = document.querySelector('.ad-form');
const typeSelect = form.querySelector('#type').value;
const priceField = form.querySelector('#price');
const maxPrice = 100000;
const MinPriceDictionary = {
  flat:  1000,
  bungalow:  0,
  house:  5000,
  palace:  10000,
  hotel:  3000,
};
const minPrice = MinPriceDictionary[typeSelect];

const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const roomNumberOption = {
  1 :  [1] ,
  2 : [2, 1],
  3 : [3, 2, 1],
  100 : [0],
};

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextTag: 'span',
});

const validateTitle = (value) => value.length >= 30 && value.length <= 100;

pristine.addValidator(
  form.querySelector('#title'),
  validateTitle,
  'От 30 до 100 символов!'
);


form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

function onTypeChange() {
  priceField.placeholder = MinPriceDictionary[this.value];
  pristine.validate(priceField);
}

form.querySelectorAll('[name = "type"]').forEach((item) => {
  item.addEventListener('change', onTypeChange);
});

const validatePrice = (value) => value >= minPrice && value <= maxPrice;

const getPriceErrorMessage = () => `Минимальная цена ${minPrice} за ночь.
Максимальная цена ${maxPrice} за ночь.`;


pristine.addValidator(priceField, validatePrice, getPriceErrorMessage);


const validateCapacity = () => {
  roomNumberOption[roomNumber.value].includes(capacity.value);
};

const getRoomErrorMessage = () => `
  ${roomNumber.value}
  ${roomNumber.value === 1 ? 'комната' : 'комнаты'}
  ${roomNumber.value === 1 ? 'не подходит' : 'не подходят'}
  `;

const getCapacityErrorMessage = () => 'этого количества гостей';

pristine.addValidator(roomNumber, validateCapacity, getRoomErrorMessage);
pristine.addValidator(capacity, validateCapacity, getCapacityErrorMessage);

