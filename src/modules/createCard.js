import env from '../../env.json';

const createSrc = (value) => `${env.backend.imgUrl}${value.toString()}/${value.toString()}`;

const createLabel = (str) => {
  const upper = Array.from(str.matchAll(/[A-Z]/g));

  for (let i = 1; i < upper.length; i++) {
    const char = upper[i][0];
    str = str.replace(char, ` ${char.toLowerCase()}`);
  }

  return str;
};

const createCard = ({ address, id, price, title, type }) => {
  const currency = env.currency;
  const blueType = type === 'IndependentLiving';
  const labelClass = blueType ? 'blue' : 'orange';
  const labelText = blueType ? createLabel(type) : `Restaurant & ${createLabel(type)}`;

  const card = document.createElement('a');
  card.className = 'card';
  card.setAttribute('href', `details/${id}`);
  card.innerHTML = `
      <div class="card__picture">
        <img src="${createSrc(price)}" alt="image: ${title}" class="card__image" loading="lazy">
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
          <span> ${currency}${price}</span>
        </p>
        <p class="card__comment">
          Shared Ownership Available
        </p>
      </article>
	`;
  return card;
};
export default createCard;
