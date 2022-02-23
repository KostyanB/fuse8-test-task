import getHomesDb from './getHomesDb';
import renderCards from './renderCards';

const filterCards = ({ field, value }) => {
  getHomesDb()
    .then((data) => data.filter((home) => home[field].toLowerCase().includes(value.toLowerCase())))
    .then(renderCards);
};
export default filterCards;
