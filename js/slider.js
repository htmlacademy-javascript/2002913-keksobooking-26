const sliderPrice = document.querySelector('#slider');
const priceInput = document.querySelector('#price');

priceInput.value = 1000;

noUiSlider.create(sliderPrice, {
  range: {
    min: 0,
    max: 100000,
  },
  start:1000,
  step: 1000,
  connect: 'lower',
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderPrice.noUiSlider.on('update', () => {
  priceInput.value = sliderPrice.noUiSlider.get();
});

