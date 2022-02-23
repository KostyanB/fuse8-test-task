import createCard from './createCard';
import handleCardLinks from './handleCardLinks';

const cardsList = document.querySelector('.cards');

const renderCards = (data) => {
  console.log('data: ', data);

  cardsList.textContent = '';
  const cards = data.map(createCard);
  cardsList.append(...cards);
  // document.body.classList.add('show-goods');
  handleCardLinks();
};
export default renderCards;
