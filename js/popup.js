import {createAds} from './data.js';

const mapCanvas = document.querySelector('#map-canvas');

const createAdsTemplate = document.querySelector('#card').content.querySelector('.popup');


const simularAds = createAds();

const mapCanvasFragment = document.createDocumentFragment();

const changgetTranslation = (type) => {
  if (type === 'flat') {
    return 'Квартира';
  }
  if (type ==='bungalow') {
    return 'Бунгало';
  }
  if (type === 'house') {
    return 'Дом';
  }
  if (type === 'palace') {
    return 'Дворец';
  }
  if (type === 'hotel') {
    return 'Отель';
  }
};


const getFeatures = (features, template) => {
  const featureContainer = template.querySelector('.popup__features');
  featureContainer.innerHTML = '';

  features.forEach(
    (feature) => {
      const featureListItem = document.createElement('li');

      featureListItem.classList.add('popup__feature');
      featureListItem.classList.add(`popup__feature--${feature}`);

      featureContainer.append(featureListItem);
    }
  );
};


simularAds.forEach(({offer, author}) => {
  const adElement = createAdsTemplate.cloneNode(true);
  adElement.querySelector('.popup__title').textContent = offer.title;
  adElement.querySelector('.popup__text--address').textContent = offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь.`;
  adElement.querySelector('.popup__type').textContent = changgetTranslation(offer.type);
  adElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  adElement.querySelector('.popup__features').textContent = getFeatures(offer.features,adElement);
  adElement.querySelector('.popup__description').textContent = offer.description;
  adElement.querySelector('.popup__photos').textContent = offer.photos.src;
  adElement.querySelector('.popup__avatar').src = author.avatar;
  mapCanvasFragment.appendChild(adElement);
});

mapCanvas.appendChild(mapCanvasFragment);

