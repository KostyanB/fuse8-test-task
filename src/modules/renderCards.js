import createCard from './createCard';
const cardsList = document.querySelector('.cards');

const renderCards = (data) => {
  console.log('data: ', data);

  cardsList.textContent = '';
  const cards = data.map(createCard);
  cardsList.append(...cards);
  // document.body.classList.add('show-goods');
};
export default renderCards;
