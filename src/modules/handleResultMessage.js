const message = document.querySelector('.main__message');
const cardField = document.querySelector('.main__content');
const seeMore = document.querySelector('.seemore');

export const hideMessage = () => {
  cardField.classList.remove('hidden');
  seeMore.classList.remove('hidden');
  message.classList.add('hidden');
  message.classList.remove('loading');
  message.classList.remove('error');
  message.textContent = '';
};

const showMessage = () => {
  message.classList.remove('hidden');
  cardField.classList.add('hidden');
  seeMore.classList.add('hidden');
};

const handleShowFromStatus = (status) => {
  switch (status) {
    case 'loading':
      message.classList.add('loading');
      showMessage();
      break;
    case 'error':
      message.classList.add('error');
      showMessage();
      break;
    case 'success':
      hideMessage();
      break;
    default:
      hideMessage();
      break;
  }
};

export const showResultMessage = ({ text = '', status }) => {
  message.textContent = text;
  handleShowFromStatus(status);
};
