import { showAlert } from './util.js';

const getDate = (onSuccess) => {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if(response.ok) {
        response.json()
          .then((data) => {
            onSuccess(data);
          });
      } else {
        showAlert('Не удалось загрузить данные');
      }
    })
    .catch(() => {
      showAlert('Не удалось загрузить данные');
    });
};

export {getDate};
