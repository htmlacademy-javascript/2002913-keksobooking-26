import './user-form.js';
import {deactivatePage, activateForm, activateFilters} from './form-state.js';
import {createAds} from './data.js';
import {renderCard} from './popup.js';


const mapCanvas = document.querySelector('#map-canvas');

const simularAds = createAds();
const card = renderCard(simularAds[0]);

mapCanvas.appendChild(card);
deactivatePage();
activateForm();
activateFilters();

