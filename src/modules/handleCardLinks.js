const handleCardLinks = () => {
  const links = document.querySelectorAll('.card__link');

  const handleLink = (e) => {
    e.preventDefault();
  };

  links.forEach((link) => link.addEventListener('click', handleLink));
};
export default handleCardLinks;
