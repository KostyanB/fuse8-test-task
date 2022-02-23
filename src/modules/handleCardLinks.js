const handleCardLinks = () => {
  const links = document.querySelectorAll('.card');

  const handleLink = (e) => {
    e.preventDefault();
  };

  links.forEach((link) => link.addEventListener('click', handleLink));
};
export default handleCardLinks;
