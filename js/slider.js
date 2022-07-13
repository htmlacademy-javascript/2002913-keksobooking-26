const sliderPrice = document.querySelector('#slider');
const priceInput = document.querySelector('#price');

priceInput.value = 1000;

noUiSlider.create(sliderPrice, {
  range: {
    min: 0,
    max: 100000,
  },
  start:1000,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderPrice.noUiSlider.on('update', () => {
  priceInput.value = sliderPrice.noUiSlider.get();
});

