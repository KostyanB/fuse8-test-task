import filterCards from './filterCards';

const handleInput = () => {
  const btn = document.querySelector('.button');

  const renderFiltered = () => {
    filterCards({
      field: 'type',
      value: 'IndependentLiving',
    });
  };

  btn.addEventListener('click', renderFiltered);
};
export default handleInput;
