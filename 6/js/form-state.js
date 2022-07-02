const mainForm = document.querySelector('.ad-form');
const mainFormList = document.querySelectorAll('fieldset, select');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersList = document.querySelectorAll('fieldset, select');

const toggleElements = (elements, value) => {
  elements.forEach((element) => {
    element.disabled = value;
  });
};

const deactivatePage = () => {
  mainForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  toggleElements(mainFormList, true);
  toggleElements(mapFiltersList, true);
};

const activateForm = () => {
  mainForm.classList.remove('ad-form--disabled');
  toggleElements(mainFormList, false);
};

const activateFilters = () => {
  mapFilters.classList.remove('map__filters--disabled');
  toggleElements(mapFiltersList, false);
};

export {deactivatePage, activateForm, activateFilters};

