import filterCards from './filterCards';
import getHomesDb from './getHomesDb';
import renderCards from './renderCards';

const handleInput = () => {
  const filterInput = document.querySelector('.filter__input');

  const debounce = (fn, msec) => {
    let timeout;

    return function () {
      const callback = () => fn.apply(this, arguments);
      clearTimeout(timeout);
      timeout = setTimeout(callback, msec);
    };
  };

  const renderFiltered = () => {
    const value = filterInput.value;

    value.length >= 3
      ? filterCards({
          field: 'title',
          value,
        })
      : getHomesDb().then(renderCards);
  };

  const renderFilteredDebounce = debounce(renderFiltered, 300);

  filterInput.addEventListener('input', renderFilteredDebounce);
};
export default handleInput;
