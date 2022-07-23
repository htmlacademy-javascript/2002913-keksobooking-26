const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const inputAvatar = document.querySelector('.ad-form__field input[type=file]');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const inputApart = document.querySelector('.ad-form__upload input[type=file]');
const previewApart = document.querySelector('.ad-form__photo');


const avatarLoader = () => {
  inputAvatar.addEventListener('change', () => {
    const file = inputAvatar.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      previewAvatar.src = URL.createObjectURL(file);
    }
  });
};

const apartLoader = () => {
  inputApart.addEventListener('change', () => {
    const file = inputApart.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const newPhotoElement = document.createElement('img');
      newPhotoElement.style.width = '70px';
      newPhotoElement.style.height = '70px';
      newPhotoElement.src = URL.createObjectURL(file);

      previewApart.appendChild(newPhotoElement);
    }
  });
};

const avatarClear = () => {
  previewAvatar.src = 'img/muffin-grey.svg';
};

const apartPreviewClear = () => {
  previewApart.innerHTML= '';
};

export {avatarLoader,apartLoader, avatarClear, apartPreviewClear};
