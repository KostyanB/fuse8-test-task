const loader = document.querySelector('.main__loader');
const err = document.querySelector('.main__error');
const cardField = document.querySelector('.main__content');
const seeMore = document.querySelector('.seemore');

export const setLoading = () => {
  cardField.classList.add('hidden');
  seeMore.classList.add('hidden');
  loader.classList.remove('hidden');
};

export const setSuccess = () => {
  cardField.classList.remove('hidden');
  seeMore.classList.remove('hidden');
  loader.classList.add('hidden');
};

export const setError = (text) => {
  err.textContent = `${text}. We will fix it soon...`;
  cardField.classList.add('hidden');
  loader.classList.add('hidden');
  seeMore.classList.add('hidden');
  err.classList.remove('hidden');
};
