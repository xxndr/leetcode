Array.prototype.myMap = function (f, that) {
  return Object.keys(this).reduce((acc, idx) => {
    acc[idx] = f.call(that, this[idx], Number(idx), this);
    return acc;
  }, []);
};
