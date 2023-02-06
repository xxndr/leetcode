function flattenThunk(thunk) {
  return function (cb) {
    const patchedCallback = (err, data) => {
      if (err) {
        cb(err);
      }

      if (typeof data === "function") {
        return data(patchedCallback);
      }

      cb(err, data);
    };
    return thunk(patchedCallback);
  };
}
