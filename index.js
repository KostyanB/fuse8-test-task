import './src/scss/style.scss';
import getHomesDb from './src/modules/getHomesDb';
import renderCards from './src/modules/renderCards';
import handleInput from './src/modules/handleInput';

getHomesDb().then(renderCards);
handleInput();
