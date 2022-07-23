import {renderMarkers, clearMarkers} from './map.js';
import {debounce} from './util.js';

const APARTMENTS_AMOUNT = 10;
const TIMEOUT_DELAY_DEFAULT = 500;

const Price = {
  MIDDLE: 10000,
  HIGHT: 50000,
};

const filterForm = document.querySelector('.map__filters');
const typeFilterField = filterForm.querySelector('#housing-type');
const priceFilterField = filterForm.querySelector('#housing-price');
const roomsFilterField = filterForm.querySelector('#housing-rooms');
const guestsFilterField = filterForm.querySelector('#housing-guests');
const featuresFilterFields = filterForm.querySelectorAll('.map__checkbox');


const filterByType = (ad, type) => type === 'any' || type === ad.offer.type;

const filterByPrice = (ad, price) => {
  switch (price) {
    case 'any':
      return true;
    case 'low':
      return ad.offer.price < Price.MIDDLE;
    case 'middle':
      return (ad.offer.price < Price.HIGHT && ad.offer.price >= Price.MIDDLE);
    case 'hight':
      return ad.offer.price >= Price.HIGHT;
  }
};

const filterByFeatures = (ad, features) => features.every((feature) => ad.offer.features && ad.offer.features.includes(feature));


const filterByRooms = (ad, rooms) => rooms === 'any' || ad.offer.rooms === +rooms;

const filterByGuests = (ad, guests) => guests === 'any' || +guests === ad.offer.guests;

const filterAds = (ads) => {
  const adType = typeFilterField.value;
  const adPrice = priceFilterField.value;
  const adRooms = roomsFilterField.value;
  const adGuests = guestsFilterField.value;

  const adFeatures = [];
  featuresFilterFields.forEach((checkbox) => {
    if (checkbox.checked) {
      adFeatures.push(checkbox.value);
    }
  });

  return ads
    .filter((ad) => filterByType(ad, adType)
     && filterByPrice(ad, adPrice)
     && filterByRooms(ad, adRooms)
     && filterByGuests(ad, adGuests)
     && filterByFeatures(ad,adFeatures))
    .slice(0, APARTMENTS_AMOUNT);
};

const onFilterChange = (ads) => {
  clearMarkers();
  const filteredAds = filterAds(ads);
  renderMarkers(filteredAds);

};

const setFilter = (ads) => {
  filterForm.addEventListener('change', debounce(() => onFilterChange(ads), TIMEOUT_DELAY_DEFAULT));
};

export {filterByType, setFilter};
