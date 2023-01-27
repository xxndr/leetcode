function once(func) {
  let metadata = {
    value: null,
    isCalled: false,
  };
  return function inner(...args) {
    if (metadata.isCalled) {
      return metadata.value;
    }

    metadata.value = func.apply(this, args);
    metadata.isCalled = true;
    return metadata.value;
  };
}
