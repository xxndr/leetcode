Array.prototype.myReduce = function innerReduce(...args) {
  const [cb, initialValue] = args;
  let arr = this;

  if (!initialValue && !arr.length) {
    throw new TypeError("error");
  }

  const isInitialValueInitialized = args.length === 2;
  let acc = isInitialValueInitialized ? initialValue : arr[0];
  let i = isInitialValueInitialized ? 0 : 1;
  for (i; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }

  return acc;
};
