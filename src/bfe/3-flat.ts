type Func = (arr: Array<any>, depth?: number) => Array<any>;

const flat: Func = function (arr, depth = 1) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr) && depth >= 1) {
      acc.push(...flat(curr, depth - 1));
    } else {
      acc.push(curr);
    }

    return acc;
  }, []);
};
