import { formatSrc, formatLabel, formatPrice } from './formatCardParams.js';

const createCard = ({ address, id, price, title, type }) => {
  const blueType = type === 'IndependentLiving';
  const labelClass = blueType ? 'blue' : 'orange';

  const labelText = blueType ? formatLabel(type) : `Restaurant & ${formatLabel(type)}`;
  const priceText = formatPrice(price);

  const card = document.createElement('a');
  card.className = 'card';
  card.setAttribute('href', `details/${id}`);
  card.innerHTML = `
    <div class="card__picture">
      <img src="${formatSrc(price)}" alt="image: ${title}" class="card__image" loading="lazy">
      <div class="card__label card__label-${labelClass}">${labelText}</div>
    </div>
    <article class="card__content">
      <h1 class="card__title">
        ${title}
      </h1>
      <p class="card__address">
        ${address}
      </p>
      <p class="card__price">
        New Properties for Sale from
        <span> ${priceText}</span>
      </p>
      <p class="card__comment">
        Shared Ownership Available
      </p>
    </article>
	`;
  return card;
};
export default createCard;
