/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  const changeStylesFn = (property, value) => {
    el.style[property] = value;
    return {
      css: changeStylesFn,
    };
  };

  return {
    css: changeStylesFn,
  };
}
