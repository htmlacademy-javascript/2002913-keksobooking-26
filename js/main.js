import './popup.js';
import './form-state.js';
import {createAds} from './data.js';
import {renderCard} from './popup.js';

const mapCanvas = document.querySelector('#map-canvas');

const simularAds = createAds();
const card = renderCard(simularAds[0]);

mapCanvas.appendChild(card);

