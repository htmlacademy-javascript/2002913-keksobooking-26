//Функция которая переводит в неактивное состояние

//форма с классом .ad-form содержит .ad-form--disabled;
//добавляется атрибут disabled на них или их родителе  fieldset; слайдер заблокировать;

//Формы с .map__filters заблокировать спец классом и на ее интерактивные элементы атрибут disabled.

const mainForm = document.querySelector('.ad-form');
const mainFormList = mainForm.children;

const addInactiveState = (element) => {
  element.classList.add('ad-form--disabled');
};

const addActiveState = (element) => {
  element.classList.remove('ad-form--disabled');
};


addActiveState(mainForm);
console.log(mainFormList)


const getInputDisabled = (some) = {

  some.forEach((item) => {
   item.setAttribute('disabled', 'disabled');
  })
};

const getInputActive = (elements) = {

  elements.forEach((element) => {
  element.removeAttribute('disabled', 'disabled');
  })
};

