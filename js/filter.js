import {renderMarkers, clearMarkers} from './map.js';

const APARTMENTS_AMOUNT = 10;


const filterForm = document.querySelector('.map__filters');
const typeFilterField = filterForm.querySelector('#housing-type');
// // const priceFilterField = filterForm.querySelector('#housing-price');
// // const roomsFilterField = filterForm.querySelector('#housing-rooms');
// // const guestsFilterField = filterForm.querySelector('#housing-guests');
// // const featuresFilterFields = filterForm.querySelectorAll('.map__checkbox');


const filterByType = (ad, type) => type === 'any' || type === ad.offer.type;

const filterAds = (ads) => {
  const adType = typeFilterField.value;

  return ads
    .filter((ad) => filterByType(ad, adType))
    .slice(0, APARTMENTS_AMOUNT);
};

const onFilterChange = (ads) => {
  clearMarkers();
  const filteredAds = filterAds(ads);
  renderMarkers(filteredAds);

};

const setFilter = (ads) => {
  filterForm.addEventListener('change', () => onFilterChange(ads));
};

export {filterByType, setFilter};
