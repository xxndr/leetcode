function deduplicate(arr) {
  const numbersSet = new Set();
  let leftPointer = 0;

  for (let el of arr) {
    if (!numbersSet.has(el)) {
      numbersSet.add(el);
      arr[leftPointer] = el;
      leftPointer += 1;
    }
  }

  for (let j = arr.length - 1; j >= numbersSet.size; j--) {
    arr.pop();
  }
}
