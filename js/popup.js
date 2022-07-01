
const createAdsTemplate = document.querySelector('#card').content.querySelector('.popup');


const typeDictionary = {
  flat:  'Квартира',
  bungalow:  'Бунгало',
  house:  'Дом',
  palace:  'Дворец',
  hotel:  'Отель',
};


const fillFeatures = (features, container) => {

  features.forEach((feature) => {
    const featureListItem = document.createElement('li');
    featureListItem.classList.add('popup__feature', `popup__feature--${feature}`);
    container.append(featureListItem);
  });
};

const fillPhotos = (photos, container) => {

  photos.forEach((photo) => {
    const photoListItem = document.createElement('img');
    photoListItem.src = photo;
    photoListItem.width = 45;
    photoListItem.height = 40;
    photoListItem.alt = 'Фотография жиль';
    container.append(photoListItem);
  });
};

const renderCard = ({ offer, author}) => {

  const adElement = createAdsTemplate.cloneNode(true);
  const descriptionContainer = adElement.querySelector('.popup__description');
  const featureContainer = adElement.querySelector('.popup__features');
  const photoContainer = adElement.querySelector('.popup__photos');
  const priceContainer = adElement.querySelector('.popup__text--price');

  adElement.querySelector('.popup__title').textContent = offer.title;
  adElement.querySelector('.popup__text--address').textContent = offer.address;
  priceContainer.innerHTML = '';
  priceContainer.insertAdjacentHTML('afterend', `${offer.price} <span>₽/ночь</span>`);
  adElement.querySelector('.popup__type').textContent = typeDictionary[offer.type];
  adElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  adElement.querySelector('.popup__avatar').src = author.avatar;

  if (offer.description !== undefined) {
    descriptionContainer.textContent = offer.description;
  } else {
    descriptionContainer.remove();
  }

  if (offer.features.length !== 0) {
    featureContainer.innerHTML = '';
    fillFeatures(offer.features, featureContainer);
  } else {
    featureContainer.remove();
  }

  if (offer.photos.length !== 0) {
    photoContainer.innerHTML = '';
    fillPhotos(offer.photos, photoContainer);
  } else {
    photoContainer.remove();
  }

  return adElement;
};


export {renderCard};
