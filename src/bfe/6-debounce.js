function debounce(func, wait) {
  let id;

  return function debounced(...args) {
    clearTimeout(id);

    id = setTimeout(() => func.apply(this, args), wait);
  };
}
