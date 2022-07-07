import {setupValidation} from './user-form.js';
import {deactivatePage, activateForm, activateFilters} from './form-state.js';
import {createAds} from './data.js';
import {renderCard} from './popup.js';


const mapCanvas = document.querySelector('#map-canvas');

const simulateAds = createAds();
const card = renderCard(simulateAds[0]);

mapCanvas.appendChild(card);
deactivatePage();
activateForm();
activateFilters();
setupValidation();


