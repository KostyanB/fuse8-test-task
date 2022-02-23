import env from '../../env.json';

const createSrc = (value) => `${env.backend.imgUrl}${value.toString()}/${value.toString()}`;

const createCard = ({ address, id, price, title, type }) => {
  const labelClass = type === 'IndependentLiving' ? 'card__label-blue' : 'card__label-orange';
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
		<div class="card__picture">
      <img src="${createSrc(price)}" alt="image: ${name}" class="card__image">
      <div class=${labelClass}>${type}</div>
    </div>
		<h1 class="card__title">
      ${title}
    </h1>
		<p class="card__description">
      ${address}
    </p>
		<p class="_card__description">
      New Properties for Sale from
      <span class="card__price"> ${price}</span>
    </p>
    <p class="card__comment">
      Shared Ownership Available
    </p>
	`;
  return card;
};
export default createCard;
