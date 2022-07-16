import {activateForm} from './form-state.js';
import {renderCard} from './popup.js';
import {getDate} from './api.js';

const SIZE_MAIN_PIN = 52;
const SIZE_REGULAR_PIN = 40;
const DEFAULT_LAT_MAIN_MARKER = 35.65283;
const DEFAULT_LNG_MAIN_MARKER = 139.73947;
const DEFAULT_SCALE_MAP = 12;
const APARTMENTS_AMOUNT = 10;
const DefaultLocationMainMarker = {
  lat: DEFAULT_LAT_MAIN_MARKER,
  lng: DEFAULT_LNG_MAIN_MARKER,
};

const address = document.querySelector('#address');

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [SIZE_MAIN_PIN, SIZE_MAIN_PIN],
  iconAnchor: [SIZE_MAIN_PIN / 2, SIZE_MAIN_PIN],
});

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [SIZE_REGULAR_PIN, SIZE_REGULAR_PIN],
  iconAnchor: [SIZE_REGULAR_PIN / 2, SIZE_REGULAR_PIN],
});

const mainMarker = L.marker(
  DefaultLocationMainMarker,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const map = L.map('map-canvas');

const createMarker = (adv) => {
  const marker = L.marker(adv.location, {icon:pinIcon});
  marker
    .addTo(map)
    .bindPopup(renderCard(adv));
};

const renderMarkers = (data) => {
  data.forEach((adv) => {
    createMarker(adv, {icon: pinIcon,});
  });
};


const onMarkerMove =  (evt) => {
  const {lat, lng} = evt.target.getLatLng();
  address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};


const initMap = () => {
  map.on('load', () => {
    activateForm();
    address.value = `${DEFAULT_LAT_MAIN_MARKER}  ${DEFAULT_LNG_MAIN_MARKER}`;
    getDate((data) => {
      renderMarkers(data.slice(0, APARTMENTS_AMOUNT));
    });
  })
    .setView(DefaultLocationMainMarker, DEFAULT_SCALE_MAP);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  mainMarker.addTo(map);
  mainMarker.on('move', onMarkerMove);


};


export {initMap};
