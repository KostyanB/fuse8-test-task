import createCard from './createCard';
import handleCardLinks from './handleCardLinks';

const cardsList = document.querySelector('.cards');

const renderCards = (data) => {
  cardsList.textContent = '';

  const cards = data.map(createCard);
  cardsList.append(...cards);

  handleCardLinks();
};
export default renderCards;
