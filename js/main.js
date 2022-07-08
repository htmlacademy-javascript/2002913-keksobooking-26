import {setupValidation} from './user-form.js';
import {createAds} from './data.js';
// import {renderCard} from './popup.js';
import './map.js';


// const mapCanvas = document.querySelector('#map-canvas');

const simulateAds = createAds();
// const card = renderCard(simulateAds[0]);

// mapCanvas.appendChild(card);
setupValidation();


