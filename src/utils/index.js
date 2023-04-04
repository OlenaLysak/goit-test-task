const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const setUpUrl = (keyword) => {
  return `https://api.github.com/search/repositories?q=${keyword}&per_page=20`;
};

const debounce = (func, delay) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export { capitalizeFirstLetter, setUpUrl, debounce };
