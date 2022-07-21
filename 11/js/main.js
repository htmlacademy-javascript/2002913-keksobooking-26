import {setupValidation} from './user-form.js';
import {initMap} from './map.js';
import {initPriceSlider} from './slider.js';
import {deactivatePage} from './form-state.js';
import './filter.js';

deactivatePage();
initPriceSlider();
setupValidation();
initMap();
