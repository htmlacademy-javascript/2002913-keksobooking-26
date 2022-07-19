import { showAlert } from './util.js';

const GET_ERROR = 'Не удалось загрузить данные';
const SEND_ERROR = 'Не удалось отправить форму. Попробуйте ещё раз';

const API_URL = 'https://26.javascript.pages.academ/keksobooking';

const getData = (onSuccess) => {
  fetch(`${API_URL}/data`)
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch(() => showAlert(GET_ERROR));
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    API_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail(SEND_ERROR);
    });
};

export {getData, sendData};
