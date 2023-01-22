function findTwo(arr) {
  const numbersMap = new Map();
  arr.forEach((number, index) => {
    numbersMap.set(number, index);
  });

  for (let i = 0; i < arr.length; i++) {
    const diff = 0 - arr[i];
    if (numbersMap.has(diff)) {
      return [i, numbersMap.get(diff)];
    }
  }

  return null;
}
