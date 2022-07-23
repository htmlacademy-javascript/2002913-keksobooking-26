const ALERT_SHOW_TIME = 5000;
const TIMEOUT_DELAY_DEFAULT = 500;

const createErrorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');
const createSuccessTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const onPopupEscKeydown = (evt, adElement) => {
  if (isEscapeKey) {
    evt.preventDefault();
    adElement.remove();
    document.removeEventListener('keydown', onPopupEscKeydown);
  }
};

const renderPopup = (adElement) => {
  document.body.append(adElement);

  adElement.addEventListener('click', () => {
    adElement.remove();
    document.removeEventListener('keydown', onPopupEscKeydown);
  });
  document.addEventListener('keydown', onPopupEscKeydown);
};

const renderPopupError = () => {
  const adElement = createErrorTemplate.cloneNode(true);
  renderPopup(adElement);
};

const renderPopupSuccess = () => {
  const adElement = createSuccessTemplate.cloneNode(true);
  renderPopup(adElement);
};

const debounce = (cb, timeoutDelay = TIMEOUT_DELAY_DEFAULT) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => cb.apply(this, rest), timeoutDelay);
  };
};

export {
  showAlert,
  renderPopupError,
  renderPopupSuccess,
  debounce,
};

