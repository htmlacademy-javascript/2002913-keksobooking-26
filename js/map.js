import {activateForm} from './form-state.js';

const address = document.querySelector('.address');

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

const marker = L.marker(
  {
    lat: 35.65283,
    lng: 139.73947,
  },
  {
    draggable: true,
  },
);

marker.addTo(map);

marker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});

