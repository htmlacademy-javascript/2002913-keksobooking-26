import {setupValidation} from './user-form.js';
import {initMap} from './map.js';
import {createAds} from './data.js';
import './slider.js';

const ads = createAds();
setupValidation();
initMap(ads);
