import getHomesDb from './getHomesDb';
import renderCards from './renderCards';
import { showResultMessage, hideMessage } from './handleResultMessage';

const filterCards = ({ field, value }) => {
  getHomesDb()
    .then((data) => data.filter((home) => home[field].toLowerCase().includes(value.toLowerCase())))
    .then((data) => {
      !data.length ? showResultMessage({ text: 'Nothing found', status: 'error' }) : hideMessage();
      return data;
    })
    .then(renderCards);
};
export default filterCards;
