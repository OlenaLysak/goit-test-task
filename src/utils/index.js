import { ITEMS_PER_PAGE } from "../constants";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const setUpUrl = (keyword = "react", page = 1) => {
  return `https://api.github.com/search/repositories?q=${keyword}&per_page=${ITEMS_PER_PAGE}&page=${page}`;
};

const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export { capitalizeFirstLetter, setUpUrl, debounce };
