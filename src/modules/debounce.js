const debounce = (fn, msec) => {
  let timeout;

  return function () {
    const callback = () => fn.apply(this, arguments);
    clearTimeout(timeout);
    timeout = setTimeout(callback, msec);
  };
};
export default debounce;
