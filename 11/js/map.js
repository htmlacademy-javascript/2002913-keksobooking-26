import {activateForm, activateFilters} from './form-state.js';
import {renderCard} from './popup.js';
import {getData} from './api.js';
import {fisterByType} from './filter.js';

const SIZE_MAIN_PIN = 52;
const SIZE_REGULAR_PIN = 40;
const DEFAULT_SCALE_MAP = 12;

const DefaultLocation = {
  LAT: 35.65283,
  LNG: 139.73947,
};
const TileLayer = {
  HTTP: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  ATTRIBUTION:  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
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
  {
    lat: DefaultLocation.LAT,
    lng: DefaultLocation.LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const map = L.map('map-canvas');

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (adv) => {
  const marker = L.marker(adv.location, {icon:pinIcon});
  marker
    .addTo(markerGroup)
    .bindPopup(renderCard(adv));
};

const renderMarkers = (data) => {

  let ads = [];
  ads = data;
  fisterByType();
  ads.forEach((adv) => {
    createMarker(adv, {icon: pinIcon,});
  });
};

const onMarkerMove =  (evt) => {
  const {lat, lng} = evt.target.getLatLng();
  address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};

const onDataLoad = (data) => {
  renderMarkers(data);
  activateFilters();
};

const initMap = () => {
  map.on('load', () => {
    activateForm();
    address.value = `${DefaultLocation.LAT}, ${DefaultLocation.LNG}`;
    getData(onDataLoad);
  })
    .setView(
      {
        lat: DefaultLocation.LAT,
        lng: DefaultLocation.LNG,
      }, DEFAULT_SCALE_MAP);

  L.tileLayer(TileLayer.HTTP, TileLayer.ATTRIBUTION,).addTo(map);

  mainMarker.addTo(map);
  mainMarker.on('move', onMarkerMove);
};

export {initMap};
