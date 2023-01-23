function elementAfter(arr, target) {
  let startI = 0;
  let endI = arr.length - 1;

  while (startI <= endI) {
    const middleI = startI + Math.floor((endI - startI) / 2);
    if (arr[middleI] > target) {
      endI = middleI - 1;
    }
    if (arr[middleI] < target) {
      startI = middleI + 1;
    }

    if (arr[middleI] === target) {
      let curr = middleI;
      while (arr[curr] === target && curr <= arr.length - 1) {
        curr++;
      }
      return curr === arr.length - 1 ? undefined : arr[curr];
    }
  }

  return undefined;
}
