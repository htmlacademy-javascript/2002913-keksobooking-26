const MAX_RANGE_SLIDER = 100000;
const sliderPrice = document.querySelector('#slider');
const priceInput = document.querySelector('#price');


noUiSlider.create(sliderPrice, {
  range: {
    min: 0,
    max: MAX_RANGE_SLIDER,
  },
  start: 0,
  step: 1,
  connect: 'lower',
  format: {
    to: (value) => value.toFixed(0),
    from: (value) => parseInt(value, 10),
  },
});

const resetSlider = () => {
  sliderPrice.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: MAX_RANGE_SLIDER,
    },
    start: 0,
    step: 1,
    connect: 'lower',
    format: {
      to: (value) => value.toFixed(0),
      from: (value) => parseInt(value, 10),
    },
  });
};

const initPriceSlider = () => {
  sliderPrice.noUiSlider.on('update', () => {
    priceInput.value = sliderPrice.noUiSlider.get();
  });
};

export {initPriceSlider,resetSlider};
