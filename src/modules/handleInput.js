import filterCards from './filterCards';
import getHomesDb from './getHomesDb';
import renderCards from './renderCards';
import { hideMessage } from './handleResultMessage';
import debounce from './debounce';

const handleInput = () => {
  const filterInput = document.querySelector('.filter__input');
  let prev = 0,
    next = 0,
    isRendered = false;

  const handleInputValue = () => {
    next = filterInput.value.length;

    if (next >= 3) {
      filterCards({
        field: 'title',
        value: filterInput.value,
      });
      isRendered = false;
    } else {
      if (next < prev) {
        hideMessage();
        !isRendered && getHomesDb().then(renderCards);
        isRendered = true;
      }
    }
    prev = next;
  };

  const handleInputValueDebounce = debounce(handleInputValue, 300);

  filterInput.addEventListener('input', handleInputValueDebounce);
};
export default handleInput;
