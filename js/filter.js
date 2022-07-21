// import { toggleElements } from './form-state.js';
// impo
const APARTMENTS_AMOUNT = 10;

const filterForm = document.querySelector('.map__filters');
const typeFilterField = filterForm.querySelector('#housing-type');
// // const priceFilterField = filterForm.querySelector('#housing-price');
// // const roomsFilterField = filterForm.querySelector('#housing-rooms');
// // const guestsFilterField = filterForm.querySelector('#housing-guests');
// // const featuresFilterFields = filterForm.querySelectorAll('.map__checkbox');

const ads = [];

// ads = data;


const filterByType = (ads, type) => type === 'any' || type === ads.offer.type;

const filterAds = () => {
  const selescetType = typeFilterField.value;

  const filteredAds = ads.filter((ad) => filterByType(ad, selescetType));

  return filteredAds.slice(0, APARTMENTS_AMOUNT);

};

export {filterByType};


console.log(filterAds)
