import {activateForm} from './form-state.js';
import {createAds} from './data.js';
// import {renderCard} from './popup.js';

const simulateAds = createAds();
const address = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
  })
  .setView({
    lat: 35.65283,
    lng: 139.73947,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const marker = L.marker(
  {
    lat: 35.65283,
    lng: 139.73947,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

createAds();

marker.addTo(map);

marker.on('moveend', (evt) => {
  const {lat, lng} = evt.target.getLatLng();
  address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

const creatMarker = (point) => {
  const reularMarker = L.marker(point, {icon:pinIcon});
  reularMarker.addTo(map);
};

simulateAds.forEach((adv) => {
  creatMarker(adv.location, {icon: pinIcon,});
});

// console.log(pinIcon);
