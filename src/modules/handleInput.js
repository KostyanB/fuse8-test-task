import filterCards from './filterCards';
import getHomesDb from './getHomesDb';
import renderCards from './renderCards';

const handleInput = () => {
  const filterInput = document.querySelector('.filter__input');

  const renderFiltered = () => {
    const value = filterInput.value;

    value.length >= 3
      ? filterCards({
          field: 'title',
          value,
        })
      : getHomesDb().then(renderCards);
  };

  filterInput.addEventListener('input', renderFiltered);
};
export default handleInput;
